#!/usr/bin/env python3
"""Restore only the published static manifest, then stage a GitHub Pages artifact."""

from concurrent.futures import ThreadPoolExecutor, as_completed
import json
import os
from pathlib import Path, PurePosixPath
import re
import shutil
import subprocess
import sys
import tempfile
import time
from urllib.error import HTTPError, URLError
from urllib.parse import quote, urlsplit
from urllib.request import HTTPRedirectHandler, Request, build_opener

BASE = "https://ec0b540d.zackwang.pages.dev"
REPOSITORY = "zackw-ppp/zackw-ppp.github.io"
BRANCH = "codex/github-pages"


def valid_path(value):
    if not isinstance(value, str) or not re.fullmatch(r"[A-Za-z0-9_./-]+", value):
        raise ValueError("Invalid public path")
    path = PurePosixPath(value)
    if path.is_absolute() or str(path) != value or ".." in path.parts:
        raise ValueError("Unsafe public path")
    if value == ".nojekyll":
        return value
    if any(part.startswith(".") for part in path.parts):
        raise ValueError("Hidden source path is not public")
    if not (path.parts[0] in ("assets", "_next", "prototypes")
            or value == "vinext-client-entry-manifest.json" or value.endswith((".html", ".rsc"))):
        raise ValueError("Unexpected public file")
    return value


def no_links(root, relative):
    current = root
    for part in PurePosixPath(relative).parts:
        current = current / part
        if current.is_symlink():
            raise ValueError("Symbolic link rejected: " + relative)


class SameOriginRedirect(HTTPRedirectHandler):
    def redirect_request(self, request, response, code, message, headers, new_url):
        if urlsplit(new_url)[:2] != urlsplit(BASE)[:2]:
            raise URLError("Cross-origin redirect rejected")
        return super().redirect_request(request, response, code, message, headers, new_url)


def recover(root, entry):
    destination = root / entry["path"]
    no_links(root, entry["path"])
    destination.parent.mkdir(parents=True, exist_ok=True)
    if entry["source"] is None:
        destination.write_bytes(b"")
        return entry["path"]
    for attempt in range(3):
        temporary = None
        try:
            opener = build_opener(SameOriginRedirect())
            request = Request(BASE + "/" + quote(entry["source"], safe="/"),
                              headers={"User-Agent": "portfolio-static-recovery", "Accept-Encoding": "identity"})
            try:
                response = opener.open(request, timeout=45)
            except HTTPError as error:
                if error.code == 404 and entry["source"] == "404.html":
                    response = error
                else:
                    raise
            with response:
                if urlsplit(response.geturl())[:2] != urlsplit(BASE)[:2]:
                    raise ValueError("Unexpected download origin")
                deadline = time.monotonic() + 120
                count = 0
                with tempfile.NamedTemporaryFile("wb", dir=str(destination.parent),
                                                 prefix=".portfolio-recovery-", delete=False) as output:
                    temporary = Path(output.name)
                    while True:
                        if time.monotonic() > deadline:
                            raise TimeoutError("Download deadline exceeded")
                        chunk = response.read(min(65536, entry["bytes"] - count + 1))
                        if not chunk:
                            break
                        count += len(chunk)
                        if count > entry["bytes"]:
                            raise ValueError("Downloaded file is too large")
                        output.write(chunk)
                if count != entry["bytes"]:
                    raise ValueError("Downloaded byte count differs from manifest")
                os.replace(str(temporary), str(destination))
                return entry["path"]
        except (OSError, ValueError):
            if attempt == 2:
                raise RuntimeError("Could not recover " + entry["path"])
            time.sleep(attempt + 1)
        finally:
            if temporary is not None and temporary.exists():
                temporary.unlink()


def git(root, *arguments, check=True, timeout=120):
    return subprocess.run(["git", *arguments], cwd=str(root), capture_output=True,
                          text=True, check=check, timeout=timeout)


def main():
    if os.environ.get("GITHUB_ACTIONS") != "true" or os.environ.get("GITHUB_REPOSITORY") != REPOSITORY:
        raise RuntimeError("Run only in this portfolio's GitHub Actions repository")
    root = Path.cwd().resolve()
    if git(root, "branch", "--show-current").stdout.strip() != BRANCH:
        raise RuntimeError("Unexpected checkout branch")
    manifest = json.loads(Path(sys.argv[1]).read_text())
    if manifest.get("version") != 1 or manifest.get("sourceBase") != BASE or len(manifest.get("files", [])) != 376:
        raise ValueError("Unexpected deployment manifest")
    entries = manifest["files"]
    seen = set()
    for entry in entries:
        path = valid_path(entry["path"])
        if path in seen or not isinstance(entry["bytes"], int) or entry["bytes"] < 0:
            raise ValueError("Invalid manifest entry")
        seen.add(path)
        if entry["source"] is None:
            if path != ".nojekyll" or entry["bytes"] != 0:
                raise ValueError("Unexpected generated file")
        else:
            valid_path(entry["source"])
        no_links(root, path)
    missing = []
    for entry in entries:
        path = root / entry["path"]
        if path.exists():
            if not path.is_file() or path.stat().st_size != entry["bytes"]:
                raise ValueError("Existing file differs in size: " + entry["path"])
        else:
            missing.append(entry)
    print(json.dumps({"manifestFiles": len(entries), "recoverFiles": len(missing),
                      "recoverBytes": sum(entry["bytes"] for entry in missing)}), flush=True)
    recovered = []
    with ThreadPoolExecutor(max_workers=4) as pool:
        for future in as_completed([pool.submit(recover, root, entry) for entry in missing]):
            recovered.append(future.result())
            print(json.dumps({"recovered": len(recovered), "required": len(missing)}), flush=True)
    site = root / "_site"
    if site.is_symlink():
        raise ValueError("Output directory cannot be a symbolic link")
    if site.exists():
        shutil.rmtree(str(site))
    site.mkdir()
    for entry in entries:
        no_links(root, entry["path"])
        source = root / entry["path"]
        if not source.is_file() or source.stat().st_size != entry["bytes"]:
            raise ValueError("Public file missing or changed before staging")
        destination = site / entry["path"]
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(str(source), str(destination))
    if recovered:
        if git(root, "diff", "--cached", "--quiet", check=False).returncode != 0:
            raise RuntimeError("Unexpected preexisting staged changes")
        git(root, "--literal-pathspecs", "add", "--", *sorted(recovered))
        status = git(root, "diff", "--cached", "--quiet", check=False).returncode
        if status == 1:
            git(root, "config", "user.name", "github-actions[bot]")
            git(root, "config", "user.email", "41898282+github-actions[bot]@users.noreply.github.com")
            git(root, "commit", "-m", "Restore published portfolio media")
            git(root, "push", "origin", "HEAD:" + BRANCH, timeout=180)
        elif status != 0:
            raise RuntimeError("Could not inspect staged files")
    print(json.dumps({"stagedFiles": len(entries), "stagedBytes": sum(entry["bytes"] for entry in entries),
                      "recoveredFiles": len(recovered)}), flush=True)


if __name__ == "__main__":
    main()
