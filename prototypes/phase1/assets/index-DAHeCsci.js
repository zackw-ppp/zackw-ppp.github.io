(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=t(o);fetch(o.href,c)}})();var Fd={exports:{}},bo={},Ud={exports:{}},At={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0;function W1(){if(A0)return At;A0=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function g(k){return k===null||typeof k!="object"?null:(k=_&&k[_]||k["@@iterator"],typeof k=="function"?k:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function y(k,ee,Oe){this.props=k,this.context=ee,this.refs=C,this.updater=Oe||E}y.prototype.isReactComponent={},y.prototype.setState=function(k,ee){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,ee,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function S(){}S.prototype=y.prototype;function B(k,ee,Oe){this.props=k,this.context=ee,this.refs=C,this.updater=Oe||E}var O=B.prototype=new S;O.constructor=B,w(O,y.prototype),O.isPureReactComponent=!0;var R=Array.isArray,D=Object.prototype.hasOwnProperty,P={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function M(k,ee,Oe){var Ke,Ve={},ue=null,Se=null;if(ee!=null)for(Ke in ee.ref!==void 0&&(Se=ee.ref),ee.key!==void 0&&(ue=""+ee.key),ee)D.call(ee,Ke)&&!U.hasOwnProperty(Ke)&&(Ve[Ke]=ee[Ke]);var ve=arguments.length-2;if(ve===1)Ve.children=Oe;else if(1<ve){for(var Be=Array(ve),Ze=0;Ze<ve;Ze++)Be[Ze]=arguments[Ze+2];Ve.children=Be}if(k&&k.defaultProps)for(Ke in ve=k.defaultProps,ve)Ve[Ke]===void 0&&(Ve[Ke]=ve[Ke]);return{$$typeof:r,type:k,key:ue,ref:Se,props:Ve,_owner:P.current}}function N(k,ee){return{$$typeof:r,type:k.type,key:ee,ref:k.ref,props:k.props,_owner:k._owner}}function W(k){return typeof k=="object"&&k!==null&&k.$$typeof===r}function j(k){var ee={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Oe){return ee[Oe]})}var Q=/\/+/g;function z(k,ee){return typeof k=="object"&&k!==null&&k.key!=null?j(""+k.key):ee.toString(36)}function te(k,ee,Oe,Ke,Ve){var ue=typeof k;(ue==="undefined"||ue==="boolean")&&(k=null);var Se=!1;if(k===null)Se=!0;else switch(ue){case"string":case"number":Se=!0;break;case"object":switch(k.$$typeof){case r:case e:Se=!0}}if(Se)return Se=k,Ve=Ve(Se),k=Ke===""?"."+z(Se,0):Ke,R(Ve)?(Oe="",k!=null&&(Oe=k.replace(Q,"$&/")+"/"),te(Ve,ee,Oe,"",function(Ze){return Ze})):Ve!=null&&(W(Ve)&&(Ve=N(Ve,Oe+(!Ve.key||Se&&Se.key===Ve.key?"":(""+Ve.key).replace(Q,"$&/")+"/")+k)),ee.push(Ve)),1;if(Se=0,Ke=Ke===""?".":Ke+":",R(k))for(var ve=0;ve<k.length;ve++){ue=k[ve];var Be=Ke+z(ue,ve);Se+=te(ue,ee,Oe,Be,Ve)}else if(Be=g(k),typeof Be=="function")for(k=Be.call(k),ve=0;!(ue=k.next()).done;)ue=ue.value,Be=Ke+z(ue,ve++),Se+=te(ue,ee,Oe,Be,Ve);else if(ue==="object")throw ee=String(k),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return Se}function V(k,ee,Oe){if(k==null)return k;var Ke=[],Ve=0;return te(k,Ke,"","",function(ue){return ee.call(Oe,ue,Ve++)}),Ke}function oe(k){if(k._status===-1){var ee=k._result;ee=ee(),ee.then(function(Oe){(k._status===0||k._status===-1)&&(k._status=1,k._result=Oe)},function(Oe){(k._status===0||k._status===-1)&&(k._status=2,k._result=Oe)}),k._status===-1&&(k._status=0,k._result=ee)}if(k._status===1)return k._result.default;throw k._result}var $={current:null},K={transition:null},ie={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:K,ReactCurrentOwner:P};function he(){throw Error("act(...) is not supported in production builds of React.")}return At.Children={map:V,forEach:function(k,ee,Oe){V(k,function(){ee.apply(this,arguments)},Oe)},count:function(k){var ee=0;return V(k,function(){ee++}),ee},toArray:function(k){return V(k,function(ee){return ee})||[]},only:function(k){if(!W(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},At.Component=y,At.Fragment=t,At.Profiler=o,At.PureComponent=B,At.StrictMode=s,At.Suspense=p,At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,At.act=he,At.cloneElement=function(k,ee,Oe){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Ke=w({},k.props),Ve=k.key,ue=k.ref,Se=k._owner;if(ee!=null){if(ee.ref!==void 0&&(ue=ee.ref,Se=P.current),ee.key!==void 0&&(Ve=""+ee.key),k.type&&k.type.defaultProps)var ve=k.type.defaultProps;for(Be in ee)D.call(ee,Be)&&!U.hasOwnProperty(Be)&&(Ke[Be]=ee[Be]===void 0&&ve!==void 0?ve[Be]:ee[Be])}var Be=arguments.length-2;if(Be===1)Ke.children=Oe;else if(1<Be){ve=Array(Be);for(var Ze=0;Ze<Be;Ze++)ve[Ze]=arguments[Ze+2];Ke.children=ve}return{$$typeof:r,type:k.type,key:Ve,ref:ue,props:Ke,_owner:Se}},At.createContext=function(k){return k={$$typeof:d,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:c,_context:k},k.Consumer=k},At.createElement=M,At.createFactory=function(k){var ee=M.bind(null,k);return ee.type=k,ee},At.createRef=function(){return{current:null}},At.forwardRef=function(k){return{$$typeof:h,render:k}},At.isValidElement=W,At.lazy=function(k){return{$$typeof:v,_payload:{_status:-1,_result:k},_init:oe}},At.memo=function(k,ee){return{$$typeof:m,type:k,compare:ee===void 0?null:ee}},At.startTransition=function(k){var ee=K.transition;K.transition={};try{k()}finally{K.transition=ee}},At.unstable_act=he,At.useCallback=function(k,ee){return $.current.useCallback(k,ee)},At.useContext=function(k){return $.current.useContext(k)},At.useDebugValue=function(){},At.useDeferredValue=function(k){return $.current.useDeferredValue(k)},At.useEffect=function(k,ee){return $.current.useEffect(k,ee)},At.useId=function(){return $.current.useId()},At.useImperativeHandle=function(k,ee,Oe){return $.current.useImperativeHandle(k,ee,Oe)},At.useInsertionEffect=function(k,ee){return $.current.useInsertionEffect(k,ee)},At.useLayoutEffect=function(k,ee){return $.current.useLayoutEffect(k,ee)},At.useMemo=function(k,ee){return $.current.useMemo(k,ee)},At.useReducer=function(k,ee,Oe){return $.current.useReducer(k,ee,Oe)},At.useRef=function(k){return $.current.useRef(k)},At.useState=function(k){return $.current.useState(k)},At.useSyncExternalStore=function(k,ee,Oe){return $.current.useSyncExternalStore(k,ee,Oe)},At.useTransition=function(){return $.current.useTransition()},At.version="18.3.1",At}var E0;function wh(){return E0||(E0=1,Ud.exports=W1()),Ud.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0;function X1(){if(M0)return bo;M0=1;var r=wh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(h,p,m){var v,_={},g=null,E=null;m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(E=p.ref);for(v in p)s.call(p,v)&&!c.hasOwnProperty(v)&&(_[v]=p[v]);if(h&&h.defaultProps)for(v in p=h.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:h,key:g,ref:E,props:_,_owner:o.current}}return bo.Fragment=t,bo.jsx=d,bo.jsxs=d,bo}var w0;function Y1(){return w0||(w0=1,Fd.exports=X1()),Fd.exports}var l=Y1(),Ql={},kd={exports:{}},ii={},Bd={exports:{}},Od={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0;function K1(){return b0||(b0=1,(function(r){function e(K,ie){var he=K.length;K.push(ie);e:for(;0<he;){var k=he-1>>>1,ee=K[k];if(0<o(ee,ie))K[k]=ie,K[he]=ee,he=k;else break e}}function t(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var ie=K[0],he=K.pop();if(he!==ie){K[0]=he;e:for(var k=0,ee=K.length,Oe=ee>>>1;k<Oe;){var Ke=2*(k+1)-1,Ve=K[Ke],ue=Ke+1,Se=K[ue];if(0>o(Ve,he))ue<ee&&0>o(Se,Ve)?(K[k]=Se,K[ue]=he,k=ue):(K[k]=Ve,K[Ke]=he,k=Ke);else if(ue<ee&&0>o(Se,he))K[k]=Se,K[ue]=he,k=ue;else break e}}return ie}function o(K,ie){var he=K.sortIndex-ie.sortIndex;return he!==0?he:K.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var p=[],m=[],v=1,_=null,g=3,E=!1,w=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(K){for(var ie=t(m);ie!==null;){if(ie.callback===null)s(m);else if(ie.startTime<=K)s(m),ie.sortIndex=ie.expirationTime,e(p,ie);else break;ie=t(m)}}function R(K){if(C=!1,O(K),!w)if(t(p)!==null)w=!0,oe(D);else{var ie=t(m);ie!==null&&$(R,ie.startTime-K)}}function D(K,ie){w=!1,C&&(C=!1,S(M),M=-1),E=!0;var he=g;try{for(O(ie),_=t(p);_!==null&&(!(_.expirationTime>ie)||K&&!j());){var k=_.callback;if(typeof k=="function"){_.callback=null,g=_.priorityLevel;var ee=k(_.expirationTime<=ie);ie=r.unstable_now(),typeof ee=="function"?_.callback=ee:_===t(p)&&s(p),O(ie)}else s(p);_=t(p)}if(_!==null)var Oe=!0;else{var Ke=t(m);Ke!==null&&$(R,Ke.startTime-ie),Oe=!1}return Oe}finally{_=null,g=he,E=!1}}var P=!1,U=null,M=-1,N=5,W=-1;function j(){return!(r.unstable_now()-W<N)}function Q(){if(U!==null){var K=r.unstable_now();W=K;var ie=!0;try{ie=U(!0,K)}finally{ie?z():(P=!1,U=null)}}else P=!1}var z;if(typeof B=="function")z=function(){B(Q)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,V=te.port2;te.port1.onmessage=Q,z=function(){V.postMessage(null)}}else z=function(){y(Q,0)};function oe(K){U=K,P||(P=!0,z())}function $(K,ie){M=y(function(){K(r.unstable_now())},ie)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(K){K.callback=null},r.unstable_continueExecution=function(){w||E||(w=!0,oe(D))},r.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<K?Math.floor(1e3/K):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return t(p)},r.unstable_next=function(K){switch(g){case 1:case 2:case 3:var ie=3;break;default:ie=g}var he=g;g=ie;try{return K()}finally{g=he}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(K,ie){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var he=g;g=K;try{return ie()}finally{g=he}},r.unstable_scheduleCallback=function(K,ie,he){var k=r.unstable_now();switch(typeof he=="object"&&he!==null?(he=he.delay,he=typeof he=="number"&&0<he?k+he:k):he=k,K){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=he+ee,K={id:v++,callback:ie,priorityLevel:K,startTime:he,expirationTime:ee,sortIndex:-1},he>k?(K.sortIndex=he,e(m,K),t(p)===null&&K===t(m)&&(C?(S(M),M=-1):C=!0,$(R,he-k))):(K.sortIndex=ee,e(p,K),w||E||(w=!0,oe(D))),K},r.unstable_shouldYield=j,r.unstable_wrapCallback=function(K){var ie=g;return function(){var he=g;g=ie;try{return K.apply(this,arguments)}finally{g=he}}}})(Od)),Od}var T0;function Q1(){return T0||(T0=1,Bd.exports=K1()),Bd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function q1(){if(C0)return ii;C0=1;var r=wh(),e=Q1();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function c(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function g(n){return p.call(_,n)?!0:p.call(v,n)?!1:m.test(n)?_[n]=!0:(v[n]=!0,!1)}function E(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,u){if(i===null||typeof i>"u"||E(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,u,f,x,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=x,this.removeEmptyString=b}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function B(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,B);y[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,B);y[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,B);y[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function O(n,i,a,u){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,f,u)&&(a=null),u||f===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,u=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var R=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),P=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),j=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),K=Symbol.iterator;function ie(n){return n===null||typeof n!="object"?null:(n=K&&n[K]||n["@@iterator"],typeof n=="function"?n:null)}var he=Object.assign,k;function ee(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var Oe=!1;function Ke(n,i){if(!n||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(fe){var u=fe}Reflect.construct(n,[],i)}else{try{i.call()}catch(fe){u=fe}n.call(i.prototype)}else{try{throw Error()}catch(fe){u=fe}n()}}catch(fe){if(fe&&u&&typeof fe.stack=="string"){for(var f=fe.stack.split(`
`),x=u.stack.split(`
`),b=f.length-1,L=x.length-1;1<=b&&0<=L&&f[b]!==x[L];)L--;for(;1<=b&&0<=L;b--,L--)if(f[b]!==x[L]){if(b!==1||L!==1)do if(b--,L--,0>L||f[b]!==x[L]){var H=`
`+f[b].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=b&&0<=L);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ee(n):""}function Ve(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=Ke(n.type,!1),n;case 11:return n=Ke(n.type.render,!1),n;case 1:return n=Ke(n.type,!0),n;default:return""}}function ue(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case P:return"Portal";case N:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case te:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case j:return(n.displayName||"Context")+".Consumer";case W:return(n._context.displayName||"Context")+".Provider";case Q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case V:return i=n.displayName||null,i!==null?i:ue(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return ue(n(i))}catch{}}return null}function Se(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(i);case 8:return i===M?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(n){var i=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,x=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){u=""+b,x.call(this,b)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(b){u=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function nt(n){n._valueTracker||(n._valueTracker=Ze(n))}function Ft(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Be(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function lt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function wt(n,i){var a=i.checked;return he({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function _t(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=ve(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(n,i){i=i.checked,i!=null&&O(n,"checked",i,!1)}function Yt(n,i){pt(n,i);var a=ve(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Kt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Kt(n,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Jt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Kt(n,i,a){(i!=="number"||lt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Bt=Array.isArray;function Ut(n,i,a,u){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&u&&(n[a].defaultSelected=!0)}else{for(a=""+ve(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function It(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return he({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function X(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Bt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ve(a)}}function mn(n,i){var a=ve(i.value),u=ve(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function bt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function I(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function A(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?I(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Z,se=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Z=Z||document.createElement("div"),Z.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Z.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function pe(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Pe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function me(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function xe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,f=me(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,f):n[a]=f}}var Ne=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function We(n,i){if(i){if(Ne[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ie(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ce=null;function Je(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var rt=null,st=null,G=null;function Te(n){if(n=uo(n)){if(typeof rt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ul(i),rt(n.stateNode,n.type,i))}}function ge(n){st?G?G.push(n):G=[n]:st=n}function De(){if(st){var n=st,i=G;if(G=st=null,Te(n),i)for(n=0;n<i.length;n++)Te(i[n])}}function Fe(n,i){return n(i)}function F(){}var ne=!1;function _e(n,i,a){if(ne)return n(i,a);ne=!0;try{return Fe(n,i,a)}finally{ne=!1,(st!==null||G!==null)&&(F(),De())}}function Ue(n,i){var a=n.stateNode;if(a===null)return null;var u=ul(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ke=!1;if(h)try{var Xe={};Object.defineProperty(Xe,"passive",{get:function(){ke=!0}}),window.addEventListener("test",Xe,Xe),window.removeEventListener("test",Xe,Xe)}catch{ke=!1}function Tt(n,i,a,u,f,x,b,L,H){var fe=Array.prototype.slice.call(arguments,3);try{i.apply(a,fe)}catch(Ae){this.onError(Ae)}}var xt=!1,Gt=null,rn=!1,An=null,mi={onError:function(n){xt=!0,Gt=n}};function Fr(n,i,a,u,f,x,b,L,H){xt=!1,Gt=null,Tt.apply(mi,arguments)}function Ur(n,i,a,u,f,x,b,L,H){if(Fr.apply(this,arguments),xt){if(xt){var fe=Gt;xt=!1,Gt=null}else throw Error(t(198));rn||(rn=!0,An=fe)}}function xn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Yi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ri(n){if(xn(n)!==n)throw Error(t(188))}function Ki(n){var i=n.alternate;if(!i){if(i=xn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var f=a.return;if(f===null)break;var x=f.alternate;if(x===null){if(u=f.return,u!==null){a=u;continue}break}if(f.child===x.child){for(x=f.child;x;){if(x===a)return Ri(f),n;if(x===u)return Ri(f),i;x=x.sibling}throw Error(t(188))}if(a.return!==u.return)a=f,u=x;else{for(var b=!1,L=f.child;L;){if(L===a){b=!0,a=f,u=x;break}if(L===u){b=!0,u=f,a=x;break}L=L.sibling}if(!b){for(L=x.child;L;){if(L===a){b=!0,a=x,u=f;break}if(L===u){b=!0,u=x,a=f;break}L=L.sibling}if(!b)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Qn(n){return n=Ki(n),n!==null?Qi(n):null}function Qi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Qi(n);if(i!==null)return i;n=n.sibling}return null}var qi=e.unstable_scheduleCallback,kr=e.unstable_cancelCallback,Ws=e.unstable_shouldYield,su=e.unstable_requestPaint,on=e.unstable_now,au=e.unstable_getCurrentPriorityLevel,Ya=e.unstable_ImmediatePriority,T=e.unstable_UserBlockingPriority,q=e.unstable_NormalPriority,de=e.unstable_LowPriority,le=e.unstable_IdlePriority,ae=null,Re=null;function He(n){if(Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(ae,n,void 0,(n.current.flags&128)===128)}catch{}}var be=Math.clz32?Math.clz32:dt,Qe=Math.log,tt=Math.LN2;function dt(n){return n>>>=0,n===0?32:31-(Qe(n)/tt|0)|0}var ft=64,$e=4194304;function Rt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Qt(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,f=n.suspendedLanes,x=n.pingedLanes,b=a&268435455;if(b!==0){var L=b&~f;L!==0?u=Rt(L):(x&=b,x!==0&&(u=Rt(x)))}else b=a&~f,b!==0?u=Rt(b):x!==0&&(u=Rt(x));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,x=i&-i,f>=x||f===16&&(x&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-be(i),f=1<<a,u|=n[a],i&=~f;return u}function sn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,x=n.pendingLanes;0<x;){var b=31-be(x),L=1<<b,H=f[b];H===-1?((L&a)===0||(L&u)!==0)&&(f[b]=sn(L,i)):H<=i&&(n.expiredLanes|=L),x&=~L}}function fn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ze(){var n=ft;return ft<<=1,(ft&4194240)===0&&(ft=64),n}function Rn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function St(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-be(i),n[i]=a}function qn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-be(a),x=1<<f;i[f]=0,u[f]=-1,n[f]=-1,a&=~x}}function Zn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-be(a),f=1<<u;f&i|n[u]&i&&(n[u]|=i),a&=~f}}var yt=0;function hr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var kt,$t,Pi,zt,Ni,Zi=!1,ps=[],Br=null,Or=null,zr=null,Ka=new Map,Qa=new Map,jr=[],hv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sp(n,i){switch(n){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":Ka.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(i.pointerId)}}function qa(n,i,a,u,f,x){return n===null||n.nativeEvent!==x?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:x,targetContainers:[f]},i!==null&&(i=uo(i),i!==null&&$t(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function pv(n,i,a,u,f){switch(i){case"focusin":return Br=qa(Br,n,i,a,u,f),!0;case"dragenter":return Or=qa(Or,n,i,a,u,f),!0;case"mouseover":return zr=qa(zr,n,i,a,u,f),!0;case"pointerover":var x=f.pointerId;return Ka.set(x,qa(Ka.get(x)||null,n,i,a,u,f)),!0;case"gotpointercapture":return x=f.pointerId,Qa.set(x,qa(Qa.get(x)||null,n,i,a,u,f)),!0}return!1}function ap(n){var i=ms(n.target);if(i!==null){var a=xn(i);if(a!==null){if(i=a.tag,i===13){if(i=Yi(a),i!==null){n.blockedOn=i,Ni(n.priority,function(){Pi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function qo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=lu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Ce=u,a.target.dispatchEvent(u),Ce=null}else return i=uo(a),i!==null&&$t(i),n.blockedOn=a,!1;i.shift()}return!0}function op(n,i,a){qo(n)&&a.delete(i)}function mv(){Zi=!1,Br!==null&&qo(Br)&&(Br=null),Or!==null&&qo(Or)&&(Or=null),zr!==null&&qo(zr)&&(zr=null),Ka.forEach(op),Qa.forEach(op)}function Za(n,i){n.blockedOn===i&&(n.blockedOn=null,Zi||(Zi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,mv)))}function Ja(n){function i(f){return Za(f,n)}if(0<ps.length){Za(ps[0],n);for(var a=1;a<ps.length;a++){var u=ps[a];u.blockedOn===n&&(u.blockedOn=null)}}for(Br!==null&&Za(Br,n),Or!==null&&Za(Or,n),zr!==null&&Za(zr,n),Ka.forEach(i),Qa.forEach(i),a=0;a<jr.length;a++)u=jr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<jr.length&&(a=jr[0],a.blockedOn===null);)ap(a),a.blockedOn===null&&jr.shift()}var Xs=R.ReactCurrentBatchConfig,Zo=!0;function xv(n,i,a,u){var f=yt,x=Xs.transition;Xs.transition=null;try{yt=1,ou(n,i,a,u)}finally{yt=f,Xs.transition=x}}function gv(n,i,a,u){var f=yt,x=Xs.transition;Xs.transition=null;try{yt=4,ou(n,i,a,u)}finally{yt=f,Xs.transition=x}}function ou(n,i,a,u){if(Zo){var f=lu(n,i,a,u);if(f===null)wu(n,i,u,Jo,a),sp(n,u);else if(pv(f,n,i,a,u))u.stopPropagation();else if(sp(n,u),i&4&&-1<hv.indexOf(n)){for(;f!==null;){var x=uo(f);if(x!==null&&kt(x),x=lu(n,i,a,u),x===null&&wu(n,i,u,Jo,a),x===f)break;f=x}f!==null&&u.stopPropagation()}else wu(n,i,u,null,a)}}var Jo=null;function lu(n,i,a,u){if(Jo=null,n=Je(u),n=ms(n),n!==null)if(i=xn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Yi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Jo=n,null}function lp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(au()){case Ya:return 1;case T:return 4;case q:case de:return 16;case le:return 536870912;default:return 16}default:return 16}}var Hr=null,cu=null,$o=null;function cp(){if($o)return $o;var n,i=cu,a=i.length,u,f="value"in Hr?Hr.value:Hr.textContent,x=f.length;for(n=0;n<a&&i[n]===f[n];n++);var b=a-n;for(u=1;u<=b&&i[a-u]===f[x-u];u++);return $o=f.slice(n,1<u?1-u:void 0)}function el(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function tl(){return!0}function up(){return!1}function oi(n){function i(a,u,f,x,b){this._reactName=a,this._targetInst=f,this.type=u,this.nativeEvent=x,this.target=b,this.currentTarget=null;for(var L in n)n.hasOwnProperty(L)&&(a=n[L],this[L]=a?a(x):x[L]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?tl:up,this.isPropagationStopped=up,this}return he(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),i}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uu=oi(Ys),$a=he({},Ys,{view:0,detail:0}),vv=oi($a),du,fu,eo,nl=he({},$a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==eo&&(eo&&n.type==="mousemove"?(du=n.screenX-eo.screenX,fu=n.screenY-eo.screenY):fu=du=0,eo=n),du)},movementY:function(n){return"movementY"in n?n.movementY:fu}}),dp=oi(nl),_v=he({},nl,{dataTransfer:0}),Sv=oi(_v),yv=he({},$a,{relatedTarget:0}),hu=oi(yv),Av=he({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=oi(Av),Mv=he({},Ys,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),wv=oi(Mv),bv=he({},Ys,{data:0}),fp=oi(bv),Tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Rv[n])?!!i[n]:!1}function pu(){return Pv}var Nv=he({},$a,{key:function(n){if(n.key){var i=Tv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=el(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Cv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(n){return n.type==="keypress"?el(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?el(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Iv=oi(Nv),Dv=he({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=oi(Dv),Lv=he({},$a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),Fv=oi(Lv),Uv=he({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),kv=oi(Uv),Bv=he({},nl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ov=oi(Bv),zv=[9,13,27,32],mu=h&&"CompositionEvent"in window,to=null;h&&"documentMode"in document&&(to=document.documentMode);var jv=h&&"TextEvent"in window&&!to,pp=h&&(!mu||to&&8<to&&11>=to),mp=" ",xp=!1;function gp(n,i){switch(n){case"keyup":return zv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ks=!1;function Hv(n,i){switch(n){case"compositionend":return vp(i);case"keypress":return i.which!==32?null:(xp=!0,mp);case"textInput":return n=i.data,n===mp&&xp?null:n;default:return null}}function Vv(n,i){if(Ks)return n==="compositionend"||!mu&&gp(n,i)?(n=cp(),$o=cu=Hr=null,Ks=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return pp&&i.locale!=="ko"?null:i.data;default:return null}}var Gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Gv[n.type]:i==="textarea"}function Sp(n,i,a,u){ge(u),i=ol(i,"onChange"),0<i.length&&(a=new uu("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var no=null,io=null;function Wv(n){Bp(n,0)}function il(n){var i=$s(n);if(Ft(i))return n}function Xv(n,i){if(n==="change")return i}var yp=!1;if(h){var xu;if(h){var gu="oninput"in document;if(!gu){var Ap=document.createElement("div");Ap.setAttribute("oninput","return;"),gu=typeof Ap.oninput=="function"}xu=gu}else xu=!1;yp=xu&&(!document.documentMode||9<document.documentMode)}function Ep(){no&&(no.detachEvent("onpropertychange",Mp),io=no=null)}function Mp(n){if(n.propertyName==="value"&&il(io)){var i=[];Sp(i,io,n,Je(n)),_e(Wv,i)}}function Yv(n,i,a){n==="focusin"?(Ep(),no=i,io=a,no.attachEvent("onpropertychange",Mp)):n==="focusout"&&Ep()}function Kv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return il(io)}function Qv(n,i){if(n==="click")return il(i)}function qv(n,i){if(n==="input"||n==="change")return il(i)}function Zv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ii=typeof Object.is=="function"?Object.is:Zv;function ro(n,i){if(Ii(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var f=a[u];if(!p.call(i,f)||!Ii(n[f],i[f]))return!1}return!0}function wp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function bp(n,i){var a=wp(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=wp(a)}}function Tp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Tp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Cp(){for(var n=window,i=lt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=lt(n.document)}return i}function vu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Jv(n){var i=Cp(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Tp(a.ownerDocument.documentElement,a)){if(u!==null&&vu(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,x=Math.min(u.start,f);u=u.end===void 0?x:Math.min(u.end,f),!n.extend&&x>u&&(f=u,u=x,x=f),f=bp(a,x);var b=bp(a,u);f&&b&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),x>u?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var $v=h&&"documentMode"in document&&11>=document.documentMode,Qs=null,_u=null,so=null,Su=!1;function Rp(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Su||Qs==null||Qs!==lt(u)||(u=Qs,"selectionStart"in u&&vu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),so&&ro(so,u)||(so=u,u=ol(_u,"onSelect"),0<u.length&&(i=new uu("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=Qs)))}function rl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var qs={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},yu={},Pp={};h&&(Pp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function sl(n){if(yu[n])return yu[n];if(!qs[n])return n;var i=qs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Pp)return yu[n]=i[a];return n}var Np=sl("animationend"),Ip=sl("animationiteration"),Dp=sl("animationstart"),Lp=sl("transitionend"),Fp=new Map,Up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(n,i){Fp.set(n,i),c(i,[n])}for(var Au=0;Au<Up.length;Au++){var Eu=Up[Au],e1=Eu.toLowerCase(),t1=Eu[0].toUpperCase()+Eu.slice(1);Vr(e1,"on"+t1)}Vr(Np,"onAnimationEnd"),Vr(Ip,"onAnimationIteration"),Vr(Dp,"onAnimationStart"),Vr("dblclick","onDoubleClick"),Vr("focusin","onFocus"),Vr("focusout","onBlur"),Vr(Lp,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function kp(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,Ur(u,i,void 0,n),n.currentTarget=null}function Bp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],f=u.event;u=u.listeners;e:{var x=void 0;if(i)for(var b=u.length-1;0<=b;b--){var L=u[b],H=L.instance,fe=L.currentTarget;if(L=L.listener,H!==x&&f.isPropagationStopped())break e;kp(f,L,fe),x=H}else for(b=0;b<u.length;b++){if(L=u[b],H=L.instance,fe=L.currentTarget,L=L.listener,H!==x&&f.isPropagationStopped())break e;kp(f,L,fe),x=H}}}if(rn)throw n=An,rn=!1,An=null,n}function en(n,i){var a=i[Nu];a===void 0&&(a=i[Nu]=new Set);var u=n+"__bubble";a.has(u)||(Op(i,n,2,!1),a.add(u))}function Mu(n,i,a){var u=0;i&&(u|=4),Op(a,n,u,i)}var al="_reactListening"+Math.random().toString(36).slice(2);function oo(n){if(!n[al]){n[al]=!0,s.forEach(function(a){a!=="selectionchange"&&(n1.has(a)||Mu(a,!1,n),Mu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[al]||(i[al]=!0,Mu("selectionchange",!1,i))}}function Op(n,i,a,u){switch(lp(i)){case 1:var f=xv;break;case 4:f=gv;break;default:f=ou}a=f.bind(null,i,a,n),f=void 0,!ke||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function wu(n,i,a,u,f){var x=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var L=u.stateNode.containerInfo;if(L===f||L.nodeType===8&&L.parentNode===f)break;if(b===4)for(b=u.return;b!==null;){var H=b.tag;if((H===3||H===4)&&(H=b.stateNode.containerInfo,H===f||H.nodeType===8&&H.parentNode===f))return;b=b.return}for(;L!==null;){if(b=ms(L),b===null)return;if(H=b.tag,H===5||H===6){u=x=b;continue e}L=L.parentNode}}u=u.return}_e(function(){var fe=x,Ae=Je(a),Ee=[];e:{var ye=Fp.get(n);if(ye!==void 0){var je=uu,Ye=n;switch(n){case"keypress":if(el(a)===0)break e;case"keydown":case"keyup":je=Iv;break;case"focusin":Ye="focus",je=hu;break;case"focusout":Ye="blur",je=hu;break;case"beforeblur":case"afterblur":je=hu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":je=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":je=Sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":je=Fv;break;case Np:case Ip:case Dp:je=Ev;break;case Lp:je=kv;break;case"scroll":je=vv;break;case"wheel":je=Ov;break;case"copy":case"cut":case"paste":je=wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":je=hp}var qe=(i&4)!==0,dn=!qe&&n==="scroll",re=qe?ye!==null?ye+"Capture":null:ye;qe=[];for(var Y=fe,ce;Y!==null;){ce=Y;var we=ce.stateNode;if(ce.tag===5&&we!==null&&(ce=we,re!==null&&(we=Ue(Y,re),we!=null&&qe.push(lo(Y,we,ce)))),dn)break;Y=Y.return}0<qe.length&&(ye=new je(ye,Ye,null,a,Ae),Ee.push({event:ye,listeners:qe}))}}if((i&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",je=n==="mouseout"||n==="pointerout",ye&&a!==Ce&&(Ye=a.relatedTarget||a.fromElement)&&(ms(Ye)||Ye[pr]))break e;if((je||ye)&&(ye=Ae.window===Ae?Ae:(ye=Ae.ownerDocument)?ye.defaultView||ye.parentWindow:window,je?(Ye=a.relatedTarget||a.toElement,je=fe,Ye=Ye?ms(Ye):null,Ye!==null&&(dn=xn(Ye),Ye!==dn||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(je=null,Ye=fe),je!==Ye)){if(qe=dp,we="onMouseLeave",re="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(qe=hp,we="onPointerLeave",re="onPointerEnter",Y="pointer"),dn=je==null?ye:$s(je),ce=Ye==null?ye:$s(Ye),ye=new qe(we,Y+"leave",je,a,Ae),ye.target=dn,ye.relatedTarget=ce,we=null,ms(Ae)===fe&&(qe=new qe(re,Y+"enter",Ye,a,Ae),qe.target=ce,qe.relatedTarget=dn,we=qe),dn=we,je&&Ye)t:{for(qe=je,re=Ye,Y=0,ce=qe;ce;ce=Zs(ce))Y++;for(ce=0,we=re;we;we=Zs(we))ce++;for(;0<Y-ce;)qe=Zs(qe),Y--;for(;0<ce-Y;)re=Zs(re),ce--;for(;Y--;){if(qe===re||re!==null&&qe===re.alternate)break t;qe=Zs(qe),re=Zs(re)}qe=null}else qe=null;je!==null&&zp(Ee,ye,je,qe,!1),Ye!==null&&dn!==null&&zp(Ee,dn,Ye,qe,!0)}}e:{if(ye=fe?$s(fe):window,je=ye.nodeName&&ye.nodeName.toLowerCase(),je==="select"||je==="input"&&ye.type==="file")var et=Xv;else if(_p(ye))if(yp)et=qv;else{et=Kv;var at=Yv}else(je=ye.nodeName)&&je.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(et=Qv);if(et&&(et=et(n,fe))){Sp(Ee,et,a,Ae);break e}at&&at(n,ye,fe),n==="focusout"&&(at=ye._wrapperState)&&at.controlled&&ye.type==="number"&&Kt(ye,"number",ye.value)}switch(at=fe?$s(fe):window,n){case"focusin":(_p(at)||at.contentEditable==="true")&&(Qs=at,_u=fe,so=null);break;case"focusout":so=_u=Qs=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,Rp(Ee,a,Ae);break;case"selectionchange":if($v)break;case"keydown":case"keyup":Rp(Ee,a,Ae)}var ot;if(mu)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else Ks?gp(n,a)&&(ut="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ut="onCompositionStart");ut&&(pp&&a.locale!=="ko"&&(Ks||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Ks&&(ot=cp()):(Hr=Ae,cu="value"in Hr?Hr.value:Hr.textContent,Ks=!0)),at=ol(fe,ut),0<at.length&&(ut=new fp(ut,n,null,a,Ae),Ee.push({event:ut,listeners:at}),ot?ut.data=ot:(ot=vp(a),ot!==null&&(ut.data=ot)))),(ot=jv?Hv(n,a):Vv(n,a))&&(fe=ol(fe,"onBeforeInput"),0<fe.length&&(Ae=new fp("onBeforeInput","beforeinput",null,a,Ae),Ee.push({event:Ae,listeners:fe}),Ae.data=ot))}Bp(Ee,i)})}function lo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function ol(n,i){for(var a=i+"Capture",u=[];n!==null;){var f=n,x=f.stateNode;f.tag===5&&x!==null&&(f=x,x=Ue(n,a),x!=null&&u.unshift(lo(n,x,f)),x=Ue(n,i),x!=null&&u.push(lo(n,x,f))),n=n.return}return u}function Zs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function zp(n,i,a,u,f){for(var x=i._reactName,b=[];a!==null&&a!==u;){var L=a,H=L.alternate,fe=L.stateNode;if(H!==null&&H===u)break;L.tag===5&&fe!==null&&(L=fe,f?(H=Ue(a,x),H!=null&&b.unshift(lo(a,H,L))):f||(H=Ue(a,x),H!=null&&b.push(lo(a,H,L)))),a=a.return}b.length!==0&&n.push({event:i,listeners:b})}var i1=/\r\n?/g,r1=/\u0000|\uFFFD/g;function jp(n){return(typeof n=="string"?n:""+n).replace(i1,`
`).replace(r1,"")}function ll(n,i,a){if(i=jp(i),jp(n)!==i&&a)throw Error(t(425))}function cl(){}var bu=null,Tu=null;function Cu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ru=typeof setTimeout=="function"?setTimeout:void 0,s1=typeof clearTimeout=="function"?clearTimeout:void 0,Hp=typeof Promise=="function"?Promise:void 0,a1=typeof queueMicrotask=="function"?queueMicrotask:typeof Hp<"u"?function(n){return Hp.resolve(null).then(n).catch(o1)}:Ru;function o1(n){setTimeout(function(){throw n})}function Pu(n,i){var a=i,u=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(u===0){n.removeChild(f),Ja(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=f}while(a);Ja(i)}function Gr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Vp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Js=Math.random().toString(36).slice(2),Ji="__reactFiber$"+Js,co="__reactProps$"+Js,pr="__reactContainer$"+Js,Nu="__reactEvents$"+Js,l1="__reactListeners$"+Js,c1="__reactHandles$"+Js;function ms(n){var i=n[Ji];if(i)return i;for(var a=n.parentNode;a;){if(i=a[pr]||a[Ji]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Vp(n);n!==null;){if(a=n[Ji])return a;n=Vp(n)}return i}n=a,a=n.parentNode}return null}function uo(n){return n=n[Ji]||n[pr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function $s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ul(n){return n[co]||null}var Iu=[],ea=-1;function Wr(n){return{current:n}}function tn(n){0>ea||(n.current=Iu[ea],Iu[ea]=null,ea--)}function qt(n,i){ea++,Iu[ea]=n.current,n.current=i}var Xr={},kn=Wr(Xr),Jn=Wr(!1),xs=Xr;function ta(n,i){var a=n.type.contextTypes;if(!a)return Xr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},x;for(x in a)f[x]=i[x];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function $n(n){return n=n.childContextTypes,n!=null}function dl(){tn(Jn),tn(kn)}function Gp(n,i,a){if(kn.current!==Xr)throw Error(t(168));qt(kn,i),qt(Jn,a)}function Wp(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(t(108,Se(n)||"Unknown",f));return he({},a,u)}function fl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Xr,xs=kn.current,qt(kn,n),qt(Jn,Jn.current),!0}function Xp(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Wp(n,i,xs),u.__reactInternalMemoizedMergedChildContext=n,tn(Jn),tn(kn),qt(kn,n)):tn(Jn),qt(Jn,a)}var mr=null,hl=!1,Du=!1;function Yp(n){mr===null?mr=[n]:mr.push(n)}function u1(n){hl=!0,Yp(n)}function Yr(){if(!Du&&mr!==null){Du=!0;var n=0,i=yt;try{var a=mr;for(yt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}mr=null,hl=!1}catch(f){throw mr!==null&&(mr=mr.slice(n+1)),qi(Ya,Yr),f}finally{yt=i,Du=!1}}return null}var na=[],ia=0,pl=null,ml=0,xi=[],gi=0,gs=null,xr=1,gr="";function vs(n,i){na[ia++]=ml,na[ia++]=pl,pl=n,ml=i}function Kp(n,i,a){xi[gi++]=xr,xi[gi++]=gr,xi[gi++]=gs,gs=n;var u=xr;n=gr;var f=32-be(u)-1;u&=~(1<<f),a+=1;var x=32-be(i)+f;if(30<x){var b=f-f%5;x=(u&(1<<b)-1).toString(32),u>>=b,f-=b,xr=1<<32-be(i)+f|a<<f|u,gr=x+n}else xr=1<<x|a<<f|u,gr=n}function Lu(n){n.return!==null&&(vs(n,1),Kp(n,1,0))}function Fu(n){for(;n===pl;)pl=na[--ia],na[ia]=null,ml=na[--ia],na[ia]=null;for(;n===gs;)gs=xi[--gi],xi[gi]=null,gr=xi[--gi],xi[gi]=null,xr=xi[--gi],xi[gi]=null}var li=null,ci=null,an=!1,Di=null;function Qp(n,i){var a=yi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function qp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,li=n,ci=Gr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,li=n,ci=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=gs!==null?{id:xr,overflow:gr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=yi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,li=n,ci=null,!0):!1;default:return!1}}function Uu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ku(n){if(an){var i=ci;if(i){var a=i;if(!qp(n,i)){if(Uu(n))throw Error(t(418));i=Gr(a.nextSibling);var u=li;i&&qp(n,i)?Qp(u,a):(n.flags=n.flags&-4097|2,an=!1,li=n)}}else{if(Uu(n))throw Error(t(418));n.flags=n.flags&-4097|2,an=!1,li=n}}}function Zp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;li=n}function xl(n){if(n!==li)return!1;if(!an)return Zp(n),an=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Cu(n.type,n.memoizedProps)),i&&(i=ci)){if(Uu(n))throw Jp(),Error(t(418));for(;i;)Qp(n,i),i=Gr(i.nextSibling)}if(Zp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ci=Gr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ci=null}}else ci=li?Gr(n.stateNode.nextSibling):null;return!0}function Jp(){for(var n=ci;n;)n=Gr(n.nextSibling)}function ra(){ci=li=null,an=!1}function Bu(n){Di===null?Di=[n]:Di.push(n)}var d1=R.ReactCurrentBatchConfig;function fo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var f=u,x=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===x?i.ref:(i=function(b){var L=f.refs;b===null?delete L[x]:L[x]=b},i._stringRef=x,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function gl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function $p(n){var i=n._init;return i(n._payload)}function em(n){function i(re,Y){if(n){var ce=re.deletions;ce===null?(re.deletions=[Y],re.flags|=16):ce.push(Y)}}function a(re,Y){if(!n)return null;for(;Y!==null;)i(re,Y),Y=Y.sibling;return null}function u(re,Y){for(re=new Map;Y!==null;)Y.key!==null?re.set(Y.key,Y):re.set(Y.index,Y),Y=Y.sibling;return re}function f(re,Y){return re=ts(re,Y),re.index=0,re.sibling=null,re}function x(re,Y,ce){return re.index=ce,n?(ce=re.alternate,ce!==null?(ce=ce.index,ce<Y?(re.flags|=2,Y):ce):(re.flags|=2,Y)):(re.flags|=1048576,Y)}function b(re){return n&&re.alternate===null&&(re.flags|=2),re}function L(re,Y,ce,we){return Y===null||Y.tag!==6?(Y=Rd(ce,re.mode,we),Y.return=re,Y):(Y=f(Y,ce),Y.return=re,Y)}function H(re,Y,ce,we){var et=ce.type;return et===U?Ae(re,Y,ce.props.children,we,ce.key):Y!==null&&(Y.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===oe&&$p(et)===Y.type)?(we=f(Y,ce.props),we.ref=fo(re,Y,ce),we.return=re,we):(we=jl(ce.type,ce.key,ce.props,null,re.mode,we),we.ref=fo(re,Y,ce),we.return=re,we)}function fe(re,Y,ce,we){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ce.containerInfo||Y.stateNode.implementation!==ce.implementation?(Y=Pd(ce,re.mode,we),Y.return=re,Y):(Y=f(Y,ce.children||[]),Y.return=re,Y)}function Ae(re,Y,ce,we,et){return Y===null||Y.tag!==7?(Y=bs(ce,re.mode,we,et),Y.return=re,Y):(Y=f(Y,ce),Y.return=re,Y)}function Ee(re,Y,ce){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=Rd(""+Y,re.mode,ce),Y.return=re,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case D:return ce=jl(Y.type,Y.key,Y.props,null,re.mode,ce),ce.ref=fo(re,null,Y),ce.return=re,ce;case P:return Y=Pd(Y,re.mode,ce),Y.return=re,Y;case oe:var we=Y._init;return Ee(re,we(Y._payload),ce)}if(Bt(Y)||ie(Y))return Y=bs(Y,re.mode,ce,null),Y.return=re,Y;gl(re,Y)}return null}function ye(re,Y,ce,we){var et=Y!==null?Y.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return et!==null?null:L(re,Y,""+ce,we);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case D:return ce.key===et?H(re,Y,ce,we):null;case P:return ce.key===et?fe(re,Y,ce,we):null;case oe:return et=ce._init,ye(re,Y,et(ce._payload),we)}if(Bt(ce)||ie(ce))return et!==null?null:Ae(re,Y,ce,we,null);gl(re,ce)}return null}function je(re,Y,ce,we,et){if(typeof we=="string"&&we!==""||typeof we=="number")return re=re.get(ce)||null,L(Y,re,""+we,et);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case D:return re=re.get(we.key===null?ce:we.key)||null,H(Y,re,we,et);case P:return re=re.get(we.key===null?ce:we.key)||null,fe(Y,re,we,et);case oe:var at=we._init;return je(re,Y,ce,at(we._payload),et)}if(Bt(we)||ie(we))return re=re.get(ce)||null,Ae(Y,re,we,et,null);gl(Y,we)}return null}function Ye(re,Y,ce,we){for(var et=null,at=null,ot=Y,ut=Y=0,wn=null;ot!==null&&ut<ce.length;ut++){ot.index>ut?(wn=ot,ot=null):wn=ot.sibling;var Lt=ye(re,ot,ce[ut],we);if(Lt===null){ot===null&&(ot=wn);break}n&&ot&&Lt.alternate===null&&i(re,ot),Y=x(Lt,Y,ut),at===null?et=Lt:at.sibling=Lt,at=Lt,ot=wn}if(ut===ce.length)return a(re,ot),an&&vs(re,ut),et;if(ot===null){for(;ut<ce.length;ut++)ot=Ee(re,ce[ut],we),ot!==null&&(Y=x(ot,Y,ut),at===null?et=ot:at.sibling=ot,at=ot);return an&&vs(re,ut),et}for(ot=u(re,ot);ut<ce.length;ut++)wn=je(ot,re,ut,ce[ut],we),wn!==null&&(n&&wn.alternate!==null&&ot.delete(wn.key===null?ut:wn.key),Y=x(wn,Y,ut),at===null?et=wn:at.sibling=wn,at=wn);return n&&ot.forEach(function(ns){return i(re,ns)}),an&&vs(re,ut),et}function qe(re,Y,ce,we){var et=ie(ce);if(typeof et!="function")throw Error(t(150));if(ce=et.call(ce),ce==null)throw Error(t(151));for(var at=et=null,ot=Y,ut=Y=0,wn=null,Lt=ce.next();ot!==null&&!Lt.done;ut++,Lt=ce.next()){ot.index>ut?(wn=ot,ot=null):wn=ot.sibling;var ns=ye(re,ot,Lt.value,we);if(ns===null){ot===null&&(ot=wn);break}n&&ot&&ns.alternate===null&&i(re,ot),Y=x(ns,Y,ut),at===null?et=ns:at.sibling=ns,at=ns,ot=wn}if(Lt.done)return a(re,ot),an&&vs(re,ut),et;if(ot===null){for(;!Lt.done;ut++,Lt=ce.next())Lt=Ee(re,Lt.value,we),Lt!==null&&(Y=x(Lt,Y,ut),at===null?et=Lt:at.sibling=Lt,at=Lt);return an&&vs(re,ut),et}for(ot=u(re,ot);!Lt.done;ut++,Lt=ce.next())Lt=je(ot,re,ut,Lt.value,we),Lt!==null&&(n&&Lt.alternate!==null&&ot.delete(Lt.key===null?ut:Lt.key),Y=x(Lt,Y,ut),at===null?et=Lt:at.sibling=Lt,at=Lt);return n&&ot.forEach(function(G1){return i(re,G1)}),an&&vs(re,ut),et}function dn(re,Y,ce,we){if(typeof ce=="object"&&ce!==null&&ce.type===U&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case D:e:{for(var et=ce.key,at=Y;at!==null;){if(at.key===et){if(et=ce.type,et===U){if(at.tag===7){a(re,at.sibling),Y=f(at,ce.props.children),Y.return=re,re=Y;break e}}else if(at.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===oe&&$p(et)===at.type){a(re,at.sibling),Y=f(at,ce.props),Y.ref=fo(re,at,ce),Y.return=re,re=Y;break e}a(re,at);break}else i(re,at);at=at.sibling}ce.type===U?(Y=bs(ce.props.children,re.mode,we,ce.key),Y.return=re,re=Y):(we=jl(ce.type,ce.key,ce.props,null,re.mode,we),we.ref=fo(re,Y,ce),we.return=re,re=we)}return b(re);case P:e:{for(at=ce.key;Y!==null;){if(Y.key===at)if(Y.tag===4&&Y.stateNode.containerInfo===ce.containerInfo&&Y.stateNode.implementation===ce.implementation){a(re,Y.sibling),Y=f(Y,ce.children||[]),Y.return=re,re=Y;break e}else{a(re,Y);break}else i(re,Y);Y=Y.sibling}Y=Pd(ce,re.mode,we),Y.return=re,re=Y}return b(re);case oe:return at=ce._init,dn(re,Y,at(ce._payload),we)}if(Bt(ce))return Ye(re,Y,ce,we);if(ie(ce))return qe(re,Y,ce,we);gl(re,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,Y!==null&&Y.tag===6?(a(re,Y.sibling),Y=f(Y,ce),Y.return=re,re=Y):(a(re,Y),Y=Rd(ce,re.mode,we),Y.return=re,re=Y),b(re)):a(re,Y)}return dn}var sa=em(!0),tm=em(!1),vl=Wr(null),_l=null,aa=null,Ou=null;function zu(){Ou=aa=_l=null}function ju(n){var i=vl.current;tn(vl),n._currentValue=i}function Hu(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function oa(n,i){_l=n,Ou=aa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ei=!0),n.firstContext=null)}function vi(n){var i=n._currentValue;if(Ou!==n)if(n={context:n,memoizedValue:i,next:null},aa===null){if(_l===null)throw Error(t(308));aa=n,_l.dependencies={lanes:0,firstContext:n}}else aa=aa.next=n;return i}var _s=null;function Vu(n){_s===null?_s=[n]:_s.push(n)}function nm(n,i,a,u){var f=i.interleaved;return f===null?(a.next=a,Vu(i)):(a.next=f.next,f.next=a),i.interleaved=a,vr(n,u)}function vr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Kr=!1;function Gu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function im(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function _r(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Qr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Dt&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,vr(n,a)}return f=u.interleaved,f===null?(i.next=i,Vu(u)):(i.next=f.next,f.next=i),u.interleaved=i,vr(n,a)}function Sl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Zn(n,a)}}function rm(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var f=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?f=x=b:x=x.next=b,a=a.next}while(a!==null);x===null?f=x=i:x=x.next=i}else f=x=i;a={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:x,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function yl(n,i,a,u){var f=n.updateQueue;Kr=!1;var x=f.firstBaseUpdate,b=f.lastBaseUpdate,L=f.shared.pending;if(L!==null){f.shared.pending=null;var H=L,fe=H.next;H.next=null,b===null?x=fe:b.next=fe,b=H;var Ae=n.alternate;Ae!==null&&(Ae=Ae.updateQueue,L=Ae.lastBaseUpdate,L!==b&&(L===null?Ae.firstBaseUpdate=fe:L.next=fe,Ae.lastBaseUpdate=H))}if(x!==null){var Ee=f.baseState;b=0,Ae=fe=H=null,L=x;do{var ye=L.lane,je=L.eventTime;if((u&ye)===ye){Ae!==null&&(Ae=Ae.next={eventTime:je,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Ye=n,qe=L;switch(ye=i,je=a,qe.tag){case 1:if(Ye=qe.payload,typeof Ye=="function"){Ee=Ye.call(je,Ee,ye);break e}Ee=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=qe.payload,ye=typeof Ye=="function"?Ye.call(je,Ee,ye):Ye,ye==null)break e;Ee=he({},Ee,ye);break e;case 2:Kr=!0}}L.callback!==null&&L.lane!==0&&(n.flags|=64,ye=f.effects,ye===null?f.effects=[L]:ye.push(L))}else je={eventTime:je,lane:ye,tag:L.tag,payload:L.payload,callback:L.callback,next:null},Ae===null?(fe=Ae=je,H=Ee):Ae=Ae.next=je,b|=ye;if(L=L.next,L===null){if(L=f.shared.pending,L===null)break;ye=L,L=ye.next,ye.next=null,f.lastBaseUpdate=ye,f.shared.pending=null}}while(!0);if(Ae===null&&(H=Ee),f.baseState=H,f.firstBaseUpdate=fe,f.lastBaseUpdate=Ae,i=f.shared.interleaved,i!==null){f=i;do b|=f.lane,f=f.next;while(f!==i)}else x===null&&(f.shared.lanes=0);As|=b,n.lanes=b,n.memoizedState=Ee}}function sm(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],f=u.callback;if(f!==null){if(u.callback=null,u=a,typeof f!="function")throw Error(t(191,f));f.call(u)}}}var ho={},$i=Wr(ho),po=Wr(ho),mo=Wr(ho);function Ss(n){if(n===ho)throw Error(t(174));return n}function Wu(n,i){switch(qt(mo,i),qt(po,n),qt($i,ho),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:A(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=A(i,n)}tn($i),qt($i,i)}function la(){tn($i),tn(po),tn(mo)}function am(n){Ss(mo.current);var i=Ss($i.current),a=A(i,n.type);i!==a&&(qt(po,n),qt($i,a))}function Xu(n){po.current===n&&(tn($i),tn(po))}var ln=Wr(0);function Al(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Yu=[];function Ku(){for(var n=0;n<Yu.length;n++)Yu[n]._workInProgressVersionPrimary=null;Yu.length=0}var El=R.ReactCurrentDispatcher,Qu=R.ReactCurrentBatchConfig,ys=0,cn=null,gn=null,En=null,Ml=!1,xo=!1,go=0,f1=0;function Bn(){throw Error(t(321))}function qu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ii(n[a],i[a]))return!1;return!0}function Zu(n,i,a,u,f,x){if(ys=x,cn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,El.current=n===null||n.memoizedState===null?x1:g1,n=a(u,f),xo){x=0;do{if(xo=!1,go=0,25<=x)throw Error(t(301));x+=1,En=gn=null,i.updateQueue=null,El.current=v1,n=a(u,f)}while(xo)}if(El.current=Tl,i=gn!==null&&gn.next!==null,ys=0,En=gn=cn=null,Ml=!1,i)throw Error(t(300));return n}function Ju(){var n=go!==0;return go=0,n}function er(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?cn.memoizedState=En=n:En=En.next=n,En}function _i(){if(gn===null){var n=cn.alternate;n=n!==null?n.memoizedState:null}else n=gn.next;var i=En===null?cn.memoizedState:En.next;if(i!==null)En=i,gn=n;else{if(n===null)throw Error(t(310));gn=n,n={memoizedState:gn.memoizedState,baseState:gn.baseState,baseQueue:gn.baseQueue,queue:gn.queue,next:null},En===null?cn.memoizedState=En=n:En=En.next=n}return En}function vo(n,i){return typeof i=="function"?i(n):i}function $u(n){var i=_i(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=gn,f=u.baseQueue,x=a.pending;if(x!==null){if(f!==null){var b=f.next;f.next=x.next,x.next=b}u.baseQueue=f=x,a.pending=null}if(f!==null){x=f.next,u=u.baseState;var L=b=null,H=null,fe=x;do{var Ae=fe.lane;if((ys&Ae)===Ae)H!==null&&(H=H.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),u=fe.hasEagerState?fe.eagerState:n(u,fe.action);else{var Ee={lane:Ae,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};H===null?(L=H=Ee,b=u):H=H.next=Ee,cn.lanes|=Ae,As|=Ae}fe=fe.next}while(fe!==null&&fe!==x);H===null?b=u:H.next=L,Ii(u,i.memoizedState)||(ei=!0),i.memoizedState=u,i.baseState=b,i.baseQueue=H,a.lastRenderedState=u}if(n=a.interleaved,n!==null){f=n;do x=f.lane,cn.lanes|=x,As|=x,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function ed(n){var i=_i(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,f=a.pending,x=i.memoizedState;if(f!==null){a.pending=null;var b=f=f.next;do x=n(x,b.action),b=b.next;while(b!==f);Ii(x,i.memoizedState)||(ei=!0),i.memoizedState=x,i.baseQueue===null&&(i.baseState=x),a.lastRenderedState=x}return[x,u]}function om(){}function lm(n,i){var a=cn,u=_i(),f=i(),x=!Ii(u.memoizedState,f);if(x&&(u.memoizedState=f,ei=!0),u=u.queue,td(dm.bind(null,a,u,n),[n]),u.getSnapshot!==i||x||En!==null&&En.memoizedState.tag&1){if(a.flags|=2048,_o(9,um.bind(null,a,u,f,i),void 0,null),Mn===null)throw Error(t(349));(ys&30)!==0||cm(a,i,f)}return f}function cm(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=cn.updateQueue,i===null?(i={lastEffect:null,stores:null},cn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function um(n,i,a,u){i.value=a,i.getSnapshot=u,fm(i)&&hm(n)}function dm(n,i,a){return a(function(){fm(i)&&hm(n)})}function fm(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ii(n,a)}catch{return!0}}function hm(n){var i=vr(n,1);i!==null&&ki(i,n,1,-1)}function pm(n){var i=er();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:n},i.queue=n,n=n.dispatch=m1.bind(null,cn,n),[i.memoizedState,n]}function _o(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=cn.updateQueue,i===null?(i={lastEffect:null,stores:null},cn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function mm(){return _i().memoizedState}function wl(n,i,a,u){var f=er();cn.flags|=n,f.memoizedState=_o(1|i,a,void 0,u===void 0?null:u)}function bl(n,i,a,u){var f=_i();u=u===void 0?null:u;var x=void 0;if(gn!==null){var b=gn.memoizedState;if(x=b.destroy,u!==null&&qu(u,b.deps)){f.memoizedState=_o(i,a,x,u);return}}cn.flags|=n,f.memoizedState=_o(1|i,a,x,u)}function xm(n,i){return wl(8390656,8,n,i)}function td(n,i){return bl(2048,8,n,i)}function gm(n,i){return bl(4,2,n,i)}function vm(n,i){return bl(4,4,n,i)}function _m(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Sm(n,i,a){return a=a!=null?a.concat([n]):null,bl(4,4,_m.bind(null,i,n),a)}function nd(){}function ym(n,i){var a=_i();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&qu(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Am(n,i){var a=_i();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&qu(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Em(n,i,a){return(ys&21)===0?(n.baseState&&(n.baseState=!1,ei=!0),n.memoizedState=a):(Ii(a,i)||(a=ze(),cn.lanes|=a,As|=a,n.baseState=!0),i)}function h1(n,i){var a=yt;yt=a!==0&&4>a?a:4,n(!0);var u=Qu.transition;Qu.transition={};try{n(!1),i()}finally{yt=a,Qu.transition=u}}function Mm(){return _i().memoizedState}function p1(n,i,a){var u=$r(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},wm(n))bm(i,a);else if(a=nm(n,i,a,u),a!==null){var f=Gn();ki(a,n,u,f),Tm(a,i,u)}}function m1(n,i,a){var u=$r(n),f={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(wm(n))bm(i,f);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=i.lastRenderedReducer,x!==null))try{var b=i.lastRenderedState,L=x(b,a);if(f.hasEagerState=!0,f.eagerState=L,Ii(L,b)){var H=i.interleaved;H===null?(f.next=f,Vu(i)):(f.next=H.next,H.next=f),i.interleaved=f;return}}catch{}finally{}a=nm(n,i,f,u),a!==null&&(f=Gn(),ki(a,n,u,f),Tm(a,i,u))}}function wm(n){var i=n.alternate;return n===cn||i!==null&&i===cn}function bm(n,i){xo=Ml=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Tm(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Zn(n,a)}}var Tl={readContext:vi,useCallback:Bn,useContext:Bn,useEffect:Bn,useImperativeHandle:Bn,useInsertionEffect:Bn,useLayoutEffect:Bn,useMemo:Bn,useReducer:Bn,useRef:Bn,useState:Bn,useDebugValue:Bn,useDeferredValue:Bn,useTransition:Bn,useMutableSource:Bn,useSyncExternalStore:Bn,useId:Bn,unstable_isNewReconciler:!1},x1={readContext:vi,useCallback:function(n,i){return er().memoizedState=[n,i===void 0?null:i],n},useContext:vi,useEffect:xm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,wl(4194308,4,_m.bind(null,i,n),a)},useLayoutEffect:function(n,i){return wl(4194308,4,n,i)},useInsertionEffect:function(n,i){return wl(4,2,n,i)},useMemo:function(n,i){var a=er();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=er();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=p1.bind(null,cn,n),[u.memoizedState,n]},useRef:function(n){var i=er();return n={current:n},i.memoizedState=n},useState:pm,useDebugValue:nd,useDeferredValue:function(n){return er().memoizedState=n},useTransition:function(){var n=pm(!1),i=n[0];return n=h1.bind(null,n[1]),er().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=cn,f=er();if(an){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Mn===null)throw Error(t(349));(ys&30)!==0||cm(u,i,a)}f.memoizedState=a;var x={value:a,getSnapshot:i};return f.queue=x,xm(dm.bind(null,u,x,n),[n]),u.flags|=2048,_o(9,um.bind(null,u,x,a,i),void 0,null),a},useId:function(){var n=er(),i=Mn.identifierPrefix;if(an){var a=gr,u=xr;a=(u&~(1<<32-be(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=go++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=f1++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},g1={readContext:vi,useCallback:ym,useContext:vi,useEffect:td,useImperativeHandle:Sm,useInsertionEffect:gm,useLayoutEffect:vm,useMemo:Am,useReducer:$u,useRef:mm,useState:function(){return $u(vo)},useDebugValue:nd,useDeferredValue:function(n){var i=_i();return Em(i,gn.memoizedState,n)},useTransition:function(){var n=$u(vo)[0],i=_i().memoizedState;return[n,i]},useMutableSource:om,useSyncExternalStore:lm,useId:Mm,unstable_isNewReconciler:!1},v1={readContext:vi,useCallback:ym,useContext:vi,useEffect:td,useImperativeHandle:Sm,useInsertionEffect:gm,useLayoutEffect:vm,useMemo:Am,useReducer:ed,useRef:mm,useState:function(){return ed(vo)},useDebugValue:nd,useDeferredValue:function(n){var i=_i();return gn===null?i.memoizedState=n:Em(i,gn.memoizedState,n)},useTransition:function(){var n=ed(vo)[0],i=_i().memoizedState;return[n,i]},useMutableSource:om,useSyncExternalStore:lm,useId:Mm,unstable_isNewReconciler:!1};function Li(n,i){if(n&&n.defaultProps){i=he({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function id(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:he({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Cl={isMounted:function(n){return(n=n._reactInternals)?xn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Gn(),f=$r(n),x=_r(u,f);x.payload=i,a!=null&&(x.callback=a),i=Qr(n,x,f),i!==null&&(ki(i,n,f,u),Sl(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Gn(),f=$r(n),x=_r(u,f);x.tag=1,x.payload=i,a!=null&&(x.callback=a),i=Qr(n,x,f),i!==null&&(ki(i,n,f,u),Sl(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Gn(),u=$r(n),f=_r(a,u);f.tag=2,i!=null&&(f.callback=i),i=Qr(n,f,u),i!==null&&(ki(i,n,u,a),Sl(i,n,u))}};function Cm(n,i,a,u,f,x,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,x,b):i.prototype&&i.prototype.isPureReactComponent?!ro(a,u)||!ro(f,x):!0}function Rm(n,i,a){var u=!1,f=Xr,x=i.contextType;return typeof x=="object"&&x!==null?x=vi(x):(f=$n(i)?xs:kn.current,u=i.contextTypes,x=(u=u!=null)?ta(n,f):Xr),i=new i(a,x),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Cl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=x),i}function Pm(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&Cl.enqueueReplaceState(i,i.state,null)}function rd(n,i,a,u){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},Gu(n);var x=i.contextType;typeof x=="object"&&x!==null?f.context=vi(x):(x=$n(i)?xs:kn.current,f.context=ta(n,x)),f.state=n.memoizedState,x=i.getDerivedStateFromProps,typeof x=="function"&&(id(n,i,x,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Cl.enqueueReplaceState(f,f.state,null),yl(n,a,f,u),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function ca(n,i){try{var a="",u=i;do a+=Ve(u),u=u.return;while(u);var f=a}catch(x){f=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:i,stack:f,digest:null}}function sd(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function ad(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var _1=typeof WeakMap=="function"?WeakMap:Map;function Nm(n,i,a){a=_r(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Fl||(Fl=!0,yd=u),ad(n,i)},a}function Im(n,i,a){a=_r(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;a.payload=function(){return u(f)},a.callback=function(){ad(n,i)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){ad(n,i),typeof u!="function"&&(Zr===null?Zr=new Set([this]):Zr.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function Dm(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new _1;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(a)||(f.add(a),n=D1.bind(null,n,i,a),i.then(n,n))}function Lm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Fm(n,i,a,u,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=_r(-1,1),i.tag=2,Qr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var S1=R.ReactCurrentOwner,ei=!1;function Vn(n,i,a,u){i.child=n===null?tm(i,null,a,u):sa(i,n.child,a,u)}function Um(n,i,a,u,f){a=a.render;var x=i.ref;return oa(i,f),u=Zu(n,i,a,u,x,f),a=Ju(),n!==null&&!ei?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Sr(n,i,f)):(an&&a&&Lu(i),i.flags|=1,Vn(n,i,u,f),i.child)}function km(n,i,a,u,f){if(n===null){var x=a.type;return typeof x=="function"&&!Cd(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=x,Bm(n,i,x,u,f)):(n=jl(a.type,null,u,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(x=n.child,(n.lanes&f)===0){var b=x.memoizedProps;if(a=a.compare,a=a!==null?a:ro,a(b,u)&&n.ref===i.ref)return Sr(n,i,f)}return i.flags|=1,n=ts(x,u),n.ref=i.ref,n.return=i,i.child=n}function Bm(n,i,a,u,f){if(n!==null){var x=n.memoizedProps;if(ro(x,u)&&n.ref===i.ref)if(ei=!1,i.pendingProps=u=x,(n.lanes&f)!==0)(n.flags&131072)!==0&&(ei=!0);else return i.lanes=n.lanes,Sr(n,i,f)}return od(n,i,a,u,f)}function Om(n,i,a){var u=i.pendingProps,f=u.children,x=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},qt(da,ui),ui|=a;else{if((a&1073741824)===0)return n=x!==null?x.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,qt(da,ui),ui|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=x!==null?x.baseLanes:a,qt(da,ui),ui|=u}else x!==null?(u=x.baseLanes|a,i.memoizedState=null):u=a,qt(da,ui),ui|=u;return Vn(n,i,f,a),i.child}function zm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function od(n,i,a,u,f){var x=$n(a)?xs:kn.current;return x=ta(i,x),oa(i,f),a=Zu(n,i,a,u,x,f),u=Ju(),n!==null&&!ei?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Sr(n,i,f)):(an&&u&&Lu(i),i.flags|=1,Vn(n,i,a,f),i.child)}function jm(n,i,a,u,f){if($n(a)){var x=!0;fl(i)}else x=!1;if(oa(i,f),i.stateNode===null)Pl(n,i),Rm(i,a,u),rd(i,a,u,f),u=!0;else if(n===null){var b=i.stateNode,L=i.memoizedProps;b.props=L;var H=b.context,fe=a.contextType;typeof fe=="object"&&fe!==null?fe=vi(fe):(fe=$n(a)?xs:kn.current,fe=ta(i,fe));var Ae=a.getDerivedStateFromProps,Ee=typeof Ae=="function"||typeof b.getSnapshotBeforeUpdate=="function";Ee||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(L!==u||H!==fe)&&Pm(i,b,u,fe),Kr=!1;var ye=i.memoizedState;b.state=ye,yl(i,u,b,f),H=i.memoizedState,L!==u||ye!==H||Jn.current||Kr?(typeof Ae=="function"&&(id(i,a,Ae,u),H=i.memoizedState),(L=Kr||Cm(i,a,L,u,ye,H,fe))?(Ee||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=H),b.props=u,b.state=H,b.context=fe,u=L):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{b=i.stateNode,im(n,i),L=i.memoizedProps,fe=i.type===i.elementType?L:Li(i.type,L),b.props=fe,Ee=i.pendingProps,ye=b.context,H=a.contextType,typeof H=="object"&&H!==null?H=vi(H):(H=$n(a)?xs:kn.current,H=ta(i,H));var je=a.getDerivedStateFromProps;(Ae=typeof je=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(L!==Ee||ye!==H)&&Pm(i,b,u,H),Kr=!1,ye=i.memoizedState,b.state=ye,yl(i,u,b,f);var Ye=i.memoizedState;L!==Ee||ye!==Ye||Jn.current||Kr?(typeof je=="function"&&(id(i,a,je,u),Ye=i.memoizedState),(fe=Kr||Cm(i,a,fe,u,ye,Ye,H)||!1)?(Ae||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(u,Ye,H),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(u,Ye,H)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||L===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||L===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ye),b.props=u,b.state=Ye,b.context=H,u=fe):(typeof b.componentDidUpdate!="function"||L===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||L===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),u=!1)}return ld(n,i,a,u,x,f)}function ld(n,i,a,u,f,x){zm(n,i);var b=(i.flags&128)!==0;if(!u&&!b)return f&&Xp(i,a,!1),Sr(n,i,x);u=i.stateNode,S1.current=i;var L=b&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&b?(i.child=sa(i,n.child,null,x),i.child=sa(i,null,L,x)):Vn(n,i,L,x),i.memoizedState=u.state,f&&Xp(i,a,!0),i.child}function Hm(n){var i=n.stateNode;i.pendingContext?Gp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Gp(n,i.context,!1),Wu(n,i.containerInfo)}function Vm(n,i,a,u,f){return ra(),Bu(f),i.flags|=256,Vn(n,i,a,u),i.child}var cd={dehydrated:null,treeContext:null,retryLane:0};function ud(n){return{baseLanes:n,cachePool:null,transitions:null}}function Gm(n,i,a){var u=i.pendingProps,f=ln.current,x=!1,b=(i.flags&128)!==0,L;if((L=b)||(L=n!==null&&n.memoizedState===null?!1:(f&2)!==0),L?(x=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),qt(ln,f&1),n===null)return ku(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=u.children,n=u.fallback,x?(u=i.mode,x=i.child,b={mode:"hidden",children:b},(u&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=b):x=Hl(b,u,0,null),n=bs(n,u,a,null),x.return=i,n.return=i,x.sibling=n,i.child=x,i.child.memoizedState=ud(a),i.memoizedState=cd,n):dd(i,b));if(f=n.memoizedState,f!==null&&(L=f.dehydrated,L!==null))return y1(n,i,b,u,L,f,a);if(x){x=u.fallback,b=i.mode,f=n.child,L=f.sibling;var H={mode:"hidden",children:u.children};return(b&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=H,i.deletions=null):(u=ts(f,H),u.subtreeFlags=f.subtreeFlags&14680064),L!==null?x=ts(L,x):(x=bs(x,b,a,null),x.flags|=2),x.return=i,u.return=i,u.sibling=x,i.child=u,u=x,x=i.child,b=n.child.memoizedState,b=b===null?ud(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},x.memoizedState=b,x.childLanes=n.childLanes&~a,i.memoizedState=cd,u}return x=n.child,n=x.sibling,u=ts(x,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function dd(n,i){return i=Hl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Rl(n,i,a,u){return u!==null&&Bu(u),sa(i,n.child,null,a),n=dd(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function y1(n,i,a,u,f,x,b){if(a)return i.flags&256?(i.flags&=-257,u=sd(Error(t(422))),Rl(n,i,b,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(x=u.fallback,f=i.mode,u=Hl({mode:"visible",children:u.children},f,0,null),x=bs(x,f,b,null),x.flags|=2,u.return=i,x.return=i,u.sibling=x,i.child=u,(i.mode&1)!==0&&sa(i,n.child,null,b),i.child.memoizedState=ud(b),i.memoizedState=cd,x);if((i.mode&1)===0)return Rl(n,i,b,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var L=u.dgst;return u=L,x=Error(t(419)),u=sd(x,u,void 0),Rl(n,i,b,u)}if(L=(b&n.childLanes)!==0,ei||L){if(u=Mn,u!==null){switch(b&-b){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|b))!==0?0:f,f!==0&&f!==x.retryLane&&(x.retryLane=f,vr(n,f),ki(u,n,f,-1))}return Td(),u=sd(Error(t(421))),Rl(n,i,b,u)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=L1.bind(null,n),f._reactRetry=i,null):(n=x.treeContext,ci=Gr(f.nextSibling),li=i,an=!0,Di=null,n!==null&&(xi[gi++]=xr,xi[gi++]=gr,xi[gi++]=gs,xr=n.id,gr=n.overflow,gs=i),i=dd(i,u.children),i.flags|=4096,i)}function Wm(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Hu(n.return,i,a)}function fd(n,i,a,u,f){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:f}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=u,x.tail=a,x.tailMode=f)}function Xm(n,i,a){var u=i.pendingProps,f=u.revealOrder,x=u.tail;if(Vn(n,i,u.children,a),u=ln.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Wm(n,a,i);else if(n.tag===19)Wm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(qt(ln,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Al(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),fd(i,!1,f,a,x);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Al(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}fd(i,!0,a,null,x);break;case"together":fd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Pl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Sr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),As|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ts(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ts(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function A1(n,i,a){switch(i.tag){case 3:Hm(i),ra();break;case 5:am(i);break;case 1:$n(i.type)&&fl(i);break;case 4:Wu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;qt(vl,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(qt(ln,ln.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Gm(n,i,a):(qt(ln,ln.current&1),n=Sr(n,i,a),n!==null?n.sibling:null);qt(ln,ln.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Xm(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),qt(ln,ln.current),u)break;return null;case 22:case 23:return i.lanes=0,Om(n,i,a)}return Sr(n,i,a)}var Ym,hd,Km,Qm;Ym=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},hd=function(){},Km=function(n,i,a,u){var f=n.memoizedProps;if(f!==u){n=i.stateNode,Ss($i.current);var x=null;switch(a){case"input":f=wt(n,f),u=wt(n,u),x=[];break;case"select":f=he({},f,{value:void 0}),u=he({},u,{value:void 0}),x=[];break;case"textarea":f=It(n,f),u=It(n,u),x=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=cl)}We(a,u);var b;a=null;for(fe in f)if(!u.hasOwnProperty(fe)&&f.hasOwnProperty(fe)&&f[fe]!=null)if(fe==="style"){var L=f[fe];for(b in L)L.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(o.hasOwnProperty(fe)?x||(x=[]):(x=x||[]).push(fe,null));for(fe in u){var H=u[fe];if(L=f!=null?f[fe]:void 0,u.hasOwnProperty(fe)&&H!==L&&(H!=null||L!=null))if(fe==="style")if(L){for(b in L)!L.hasOwnProperty(b)||H&&H.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in H)H.hasOwnProperty(b)&&L[b]!==H[b]&&(a||(a={}),a[b]=H[b])}else a||(x||(x=[]),x.push(fe,a)),a=H;else fe==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,L=L?L.__html:void 0,H!=null&&L!==H&&(x=x||[]).push(fe,H)):fe==="children"?typeof H!="string"&&typeof H!="number"||(x=x||[]).push(fe,""+H):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(o.hasOwnProperty(fe)?(H!=null&&fe==="onScroll"&&en("scroll",n),x||L===H||(x=[])):(x=x||[]).push(fe,H))}a&&(x=x||[]).push("style",a);var fe=x;(i.updateQueue=fe)&&(i.flags|=4)}},Qm=function(n,i,a,u){a!==u&&(i.flags|=4)};function So(n,i){if(!an)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function On(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function E1(n,i,a){var u=i.pendingProps;switch(Fu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return On(i),null;case 1:return $n(i.type)&&dl(),On(i),null;case 3:return u=i.stateNode,la(),tn(Jn),tn(kn),Ku(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(xl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Di!==null&&(Md(Di),Di=null))),hd(n,i),On(i),null;case 5:Xu(i);var f=Ss(mo.current);if(a=i.type,n!==null&&i.stateNode!=null)Km(n,i,a,u,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return On(i),null}if(n=Ss($i.current),xl(i)){u=i.stateNode,a=i.type;var x=i.memoizedProps;switch(u[Ji]=i,u[co]=x,n=(i.mode&1)!==0,a){case"dialog":en("cancel",u),en("close",u);break;case"iframe":case"object":case"embed":en("load",u);break;case"video":case"audio":for(f=0;f<ao.length;f++)en(ao[f],u);break;case"source":en("error",u);break;case"img":case"image":case"link":en("error",u),en("load",u);break;case"details":en("toggle",u);break;case"input":_t(u,x),en("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!x.multiple},en("invalid",u);break;case"textarea":X(u,x),en("invalid",u)}We(a,x),f=null;for(var b in x)if(x.hasOwnProperty(b)){var L=x[b];b==="children"?typeof L=="string"?u.textContent!==L&&(x.suppressHydrationWarning!==!0&&ll(u.textContent,L,n),f=["children",L]):typeof L=="number"&&u.textContent!==""+L&&(x.suppressHydrationWarning!==!0&&ll(u.textContent,L,n),f=["children",""+L]):o.hasOwnProperty(b)&&L!=null&&b==="onScroll"&&en("scroll",u)}switch(a){case"input":nt(u),Jt(u,x,!0);break;case"textarea":nt(u),bt(u);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(u.onclick=cl)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{b=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=I(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=b.createElement(a,{is:u.is}):(n=b.createElement(a),a==="select"&&(b=n,u.multiple?b.multiple=!0:u.size&&(b.size=u.size))):n=b.createElementNS(n,a),n[Ji]=i,n[co]=u,Ym(n,i,!1,!1),i.stateNode=n;e:{switch(b=Ie(a,u),a){case"dialog":en("cancel",n),en("close",n),f=u;break;case"iframe":case"object":case"embed":en("load",n),f=u;break;case"video":case"audio":for(f=0;f<ao.length;f++)en(ao[f],n);f=u;break;case"source":en("error",n),f=u;break;case"img":case"image":case"link":en("error",n),en("load",n),f=u;break;case"details":en("toggle",n),f=u;break;case"input":_t(n,u),f=wt(n,u),en("invalid",n);break;case"option":f=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},f=he({},u,{value:void 0}),en("invalid",n);break;case"textarea":X(n,u),f=It(n,u),en("invalid",n);break;default:f=u}We(a,f),L=f;for(x in L)if(L.hasOwnProperty(x)){var H=L[x];x==="style"?xe(n,H):x==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&se(n,H)):x==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&pe(n,H):typeof H=="number"&&pe(n,""+H):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?H!=null&&x==="onScroll"&&en("scroll",n):H!=null&&O(n,x,H,b))}switch(a){case"input":nt(n),Jt(n,u,!1);break;case"textarea":nt(n),bt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ve(u.value));break;case"select":n.multiple=!!u.multiple,x=u.value,x!=null?Ut(n,!!u.multiple,x,!1):u.defaultValue!=null&&Ut(n,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=cl)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return On(i),null;case 6:if(n&&i.stateNode!=null)Qm(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Ss(mo.current),Ss($i.current),xl(i)){if(u=i.stateNode,a=i.memoizedProps,u[Ji]=i,(x=u.nodeValue!==a)&&(n=li,n!==null))switch(n.tag){case 3:ll(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ll(u.nodeValue,a,(n.mode&1)!==0)}x&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Ji]=i,i.stateNode=u}return On(i),null;case 13:if(tn(ln),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(an&&ci!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Jp(),ra(),i.flags|=98560,x=!1;else if(x=xl(i),u!==null&&u.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=i.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Ji]=i}else ra(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;On(i),x=!1}else Di!==null&&(Md(Di),Di=null),x=!0;if(!x)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(ln.current&1)!==0?vn===0&&(vn=3):Td())),i.updateQueue!==null&&(i.flags|=4),On(i),null);case 4:return la(),hd(n,i),n===null&&oo(i.stateNode.containerInfo),On(i),null;case 10:return ju(i.type._context),On(i),null;case 17:return $n(i.type)&&dl(),On(i),null;case 19:if(tn(ln),x=i.memoizedState,x===null)return On(i),null;if(u=(i.flags&128)!==0,b=x.rendering,b===null)if(u)So(x,!1);else{if(vn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=Al(n),b!==null){for(i.flags|=128,So(x,!1),u=b.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)x=a,n=u,x.flags&=14680066,b=x.alternate,b===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=b.childLanes,x.lanes=b.lanes,x.child=b.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=b.memoizedProps,x.memoizedState=b.memoizedState,x.updateQueue=b.updateQueue,x.type=b.type,n=b.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qt(ln,ln.current&1|2),i.child}n=n.sibling}x.tail!==null&&on()>fa&&(i.flags|=128,u=!0,So(x,!1),i.lanes=4194304)}else{if(!u)if(n=Al(b),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),So(x,!0),x.tail===null&&x.tailMode==="hidden"&&!b.alternate&&!an)return On(i),null}else 2*on()-x.renderingStartTime>fa&&a!==1073741824&&(i.flags|=128,u=!0,So(x,!1),i.lanes=4194304);x.isBackwards?(b.sibling=i.child,i.child=b):(a=x.last,a!==null?a.sibling=b:i.child=b,x.last=b)}return x.tail!==null?(i=x.tail,x.rendering=i,x.tail=i.sibling,x.renderingStartTime=on(),i.sibling=null,a=ln.current,qt(ln,u?a&1|2:a&1),i):(On(i),null);case 22:case 23:return bd(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(ui&1073741824)!==0&&(On(i),i.subtreeFlags&6&&(i.flags|=8192)):On(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function M1(n,i){switch(Fu(i),i.tag){case 1:return $n(i.type)&&dl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return la(),tn(Jn),tn(kn),Ku(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Xu(i),null;case 13:if(tn(ln),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ra()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return tn(ln),null;case 4:return la(),null;case 10:return ju(i.type._context),null;case 22:case 23:return bd(),null;case 24:return null;default:return null}}var Nl=!1,zn=!1,w1=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function ua(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){un(n,i,u)}else a.current=null}function pd(n,i,a){try{a()}catch(u){un(n,i,u)}}var qm=!1;function b1(n,i){if(bu=Zo,n=Cp(),vu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var f=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var b=0,L=-1,H=-1,fe=0,Ae=0,Ee=n,ye=null;t:for(;;){for(var je;Ee!==a||f!==0&&Ee.nodeType!==3||(L=b+f),Ee!==x||u!==0&&Ee.nodeType!==3||(H=b+u),Ee.nodeType===3&&(b+=Ee.nodeValue.length),(je=Ee.firstChild)!==null;)ye=Ee,Ee=je;for(;;){if(Ee===n)break t;if(ye===a&&++fe===f&&(L=b),ye===x&&++Ae===u&&(H=b),(je=Ee.nextSibling)!==null)break;Ee=ye,ye=Ee.parentNode}Ee=je}a=L===-1||H===-1?null:{start:L,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Tu={focusedElem:n,selectionRange:a},Zo=!1,Ge=i;Ge!==null;)if(i=Ge,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ge=n;else for(;Ge!==null;){i=Ge;try{var Ye=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var qe=Ye.memoizedProps,dn=Ye.memoizedState,re=i.stateNode,Y=re.getSnapshotBeforeUpdate(i.elementType===i.type?qe:Li(i.type,qe),dn);re.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var ce=i.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){un(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Ge=n;break}Ge=i.return}return Ye=qm,qm=!1,Ye}function yo(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&n)===n){var x=f.destroy;f.destroy=void 0,x!==void 0&&pd(i,a,x)}f=f.next}while(f!==u)}}function Il(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function md(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Zm(n){var i=n.alternate;i!==null&&(n.alternate=null,Zm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ji],delete i[co],delete i[Nu],delete i[l1],delete i[c1])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Jm(n){return n.tag===5||n.tag===3||n.tag===4}function $m(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Jm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function xd(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=cl));else if(u!==4&&(n=n.child,n!==null))for(xd(n,i,a),n=n.sibling;n!==null;)xd(n,i,a),n=n.sibling}function gd(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(gd(n,i,a),n=n.sibling;n!==null;)gd(n,i,a),n=n.sibling}var Pn=null,Fi=!1;function qr(n,i,a){for(a=a.child;a!==null;)e0(n,i,a),a=a.sibling}function e0(n,i,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 5:zn||ua(a,i);case 6:var u=Pn,f=Fi;Pn=null,qr(n,i,a),Pn=u,Fi=f,Pn!==null&&(Fi?(n=Pn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pn.removeChild(a.stateNode));break;case 18:Pn!==null&&(Fi?(n=Pn,a=a.stateNode,n.nodeType===8?Pu(n.parentNode,a):n.nodeType===1&&Pu(n,a),Ja(n)):Pu(Pn,a.stateNode));break;case 4:u=Pn,f=Fi,Pn=a.stateNode.containerInfo,Fi=!0,qr(n,i,a),Pn=u,Fi=f;break;case 0:case 11:case 14:case 15:if(!zn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var x=f,b=x.destroy;x=x.tag,b!==void 0&&((x&2)!==0||(x&4)!==0)&&pd(a,i,b),f=f.next}while(f!==u)}qr(n,i,a);break;case 1:if(!zn&&(ua(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(L){un(a,i,L)}qr(n,i,a);break;case 21:qr(n,i,a);break;case 22:a.mode&1?(zn=(u=zn)||a.memoizedState!==null,qr(n,i,a),zn=u):qr(n,i,a);break;default:qr(n,i,a)}}function t0(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new w1),i.forEach(function(u){var f=F1.bind(null,n,u);a.has(u)||(a.add(u),u.then(f,f))})}}function Ui(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var f=a[u];try{var x=n,b=i,L=b;e:for(;L!==null;){switch(L.tag){case 5:Pn=L.stateNode,Fi=!1;break e;case 3:Pn=L.stateNode.containerInfo,Fi=!0;break e;case 4:Pn=L.stateNode.containerInfo,Fi=!0;break e}L=L.return}if(Pn===null)throw Error(t(160));e0(x,b,f),Pn=null,Fi=!1;var H=f.alternate;H!==null&&(H.return=null),f.return=null}catch(fe){un(f,i,fe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)n0(i,n),i=i.sibling}function n0(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ui(i,n),tr(n),u&4){try{yo(3,n,n.return),Il(3,n)}catch(qe){un(n,n.return,qe)}try{yo(5,n,n.return)}catch(qe){un(n,n.return,qe)}}break;case 1:Ui(i,n),tr(n),u&512&&a!==null&&ua(a,a.return);break;case 5:if(Ui(i,n),tr(n),u&512&&a!==null&&ua(a,a.return),n.flags&32){var f=n.stateNode;try{pe(f,"")}catch(qe){un(n,n.return,qe)}}if(u&4&&(f=n.stateNode,f!=null)){var x=n.memoizedProps,b=a!==null?a.memoizedProps:x,L=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{L==="input"&&x.type==="radio"&&x.name!=null&&pt(f,x),Ie(L,b);var fe=Ie(L,x);for(b=0;b<H.length;b+=2){var Ae=H[b],Ee=H[b+1];Ae==="style"?xe(f,Ee):Ae==="dangerouslySetInnerHTML"?se(f,Ee):Ae==="children"?pe(f,Ee):O(f,Ae,Ee,fe)}switch(L){case"input":Yt(f,x);break;case"textarea":mn(f,x);break;case"select":var ye=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!x.multiple;var je=x.value;je!=null?Ut(f,!!x.multiple,je,!1):ye!==!!x.multiple&&(x.defaultValue!=null?Ut(f,!!x.multiple,x.defaultValue,!0):Ut(f,!!x.multiple,x.multiple?[]:"",!1))}f[co]=x}catch(qe){un(n,n.return,qe)}}break;case 6:if(Ui(i,n),tr(n),u&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,x=n.memoizedProps;try{f.nodeValue=x}catch(qe){un(n,n.return,qe)}}break;case 3:if(Ui(i,n),tr(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Ja(i.containerInfo)}catch(qe){un(n,n.return,qe)}break;case 4:Ui(i,n),tr(n);break;case 13:Ui(i,n),tr(n),f=n.child,f.flags&8192&&(x=f.memoizedState!==null,f.stateNode.isHidden=x,!x||f.alternate!==null&&f.alternate.memoizedState!==null||(Sd=on())),u&4&&t0(n);break;case 22:if(Ae=a!==null&&a.memoizedState!==null,n.mode&1?(zn=(fe=zn)||Ae,Ui(i,n),zn=fe):Ui(i,n),tr(n),u&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!Ae&&(n.mode&1)!==0)for(Ge=n,Ae=n.child;Ae!==null;){for(Ee=Ge=Ae;Ge!==null;){switch(ye=Ge,je=ye.child,ye.tag){case 0:case 11:case 14:case 15:yo(4,ye,ye.return);break;case 1:ua(ye,ye.return);var Ye=ye.stateNode;if(typeof Ye.componentWillUnmount=="function"){u=ye,a=ye.return;try{i=u,Ye.props=i.memoizedProps,Ye.state=i.memoizedState,Ye.componentWillUnmount()}catch(qe){un(u,a,qe)}}break;case 5:ua(ye,ye.return);break;case 22:if(ye.memoizedState!==null){s0(Ee);continue}}je!==null?(je.return=ye,Ge=je):s0(Ee)}Ae=Ae.sibling}e:for(Ae=null,Ee=n;;){if(Ee.tag===5){if(Ae===null){Ae=Ee;try{f=Ee.stateNode,fe?(x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(L=Ee.stateNode,H=Ee.memoizedProps.style,b=H!=null&&H.hasOwnProperty("display")?H.display:null,L.style.display=me("display",b))}catch(qe){un(n,n.return,qe)}}}else if(Ee.tag===6){if(Ae===null)try{Ee.stateNode.nodeValue=fe?"":Ee.memoizedProps}catch(qe){un(n,n.return,qe)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;Ae===Ee&&(Ae=null),Ee=Ee.return}Ae===Ee&&(Ae=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:Ui(i,n),tr(n),u&4&&t0(n);break;case 21:break;default:Ui(i,n),tr(n)}}function tr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Jm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(pe(f,""),u.flags&=-33);var x=$m(n);gd(n,x,f);break;case 3:case 4:var b=u.stateNode.containerInfo,L=$m(n);xd(n,L,b);break;default:throw Error(t(161))}}catch(H){un(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function T1(n,i,a){Ge=n,i0(n)}function i0(n,i,a){for(var u=(n.mode&1)!==0;Ge!==null;){var f=Ge,x=f.child;if(f.tag===22&&u){var b=f.memoizedState!==null||Nl;if(!b){var L=f.alternate,H=L!==null&&L.memoizedState!==null||zn;L=Nl;var fe=zn;if(Nl=b,(zn=H)&&!fe)for(Ge=f;Ge!==null;)b=Ge,H=b.child,b.tag===22&&b.memoizedState!==null?a0(f):H!==null?(H.return=b,Ge=H):a0(f);for(;x!==null;)Ge=x,i0(x),x=x.sibling;Ge=f,Nl=L,zn=fe}r0(n)}else(f.subtreeFlags&8772)!==0&&x!==null?(x.return=f,Ge=x):r0(n)}}function r0(n){for(;Ge!==null;){var i=Ge;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:zn||Il(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!zn)if(a===null)u.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:Li(i.type,a.memoizedProps);u.componentDidUpdate(f,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var x=i.updateQueue;x!==null&&sm(i,x,u);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}sm(i,b,a)}break;case 5:var L=i.stateNode;if(a===null&&i.flags&4){a=L;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var fe=i.alternate;if(fe!==null){var Ae=fe.memoizedState;if(Ae!==null){var Ee=Ae.dehydrated;Ee!==null&&Ja(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}zn||i.flags&512&&md(i)}catch(ye){un(i,i.return,ye)}}if(i===n){Ge=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function s0(n){for(;Ge!==null;){var i=Ge;if(i===n){Ge=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function a0(n){for(;Ge!==null;){var i=Ge;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Il(4,i)}catch(H){un(i,a,H)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(H){un(i,f,H)}}var x=i.return;try{md(i)}catch(H){un(i,x,H)}break;case 5:var b=i.return;try{md(i)}catch(H){un(i,b,H)}}}catch(H){un(i,i.return,H)}if(i===n){Ge=null;break}var L=i.sibling;if(L!==null){L.return=i.return,Ge=L;break}Ge=i.return}}var C1=Math.ceil,Dl=R.ReactCurrentDispatcher,vd=R.ReactCurrentOwner,Si=R.ReactCurrentBatchConfig,Dt=0,Mn=null,hn=null,Nn=0,ui=0,da=Wr(0),vn=0,Ao=null,As=0,Ll=0,_d=0,Eo=null,ti=null,Sd=0,fa=1/0,yr=null,Fl=!1,yd=null,Zr=null,Ul=!1,Jr=null,kl=0,Mo=0,Ad=null,Bl=-1,Ol=0;function Gn(){return(Dt&6)!==0?on():Bl!==-1?Bl:Bl=on()}function $r(n){return(n.mode&1)===0?1:(Dt&2)!==0&&Nn!==0?Nn&-Nn:d1.transition!==null?(Ol===0&&(Ol=ze()),Ol):(n=yt,n!==0||(n=window.event,n=n===void 0?16:lp(n.type)),n)}function ki(n,i,a,u){if(50<Mo)throw Mo=0,Ad=null,Error(t(185));St(n,a,u),((Dt&2)===0||n!==Mn)&&(n===Mn&&((Dt&2)===0&&(Ll|=a),vn===4&&es(n,Nn)),ni(n,u),a===1&&Dt===0&&(i.mode&1)===0&&(fa=on()+500,hl&&Yr()))}function ni(n,i){var a=n.callbackNode;Ot(n,i);var u=Qt(n,n===Mn?Nn:0);if(u===0)a!==null&&kr(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&kr(a),i===1)n.tag===0?u1(l0.bind(null,n)):Yp(l0.bind(null,n)),a1(function(){(Dt&6)===0&&Yr()}),a=null;else{switch(hr(u)){case 1:a=Ya;break;case 4:a=T;break;case 16:a=q;break;case 536870912:a=le;break;default:a=q}a=x0(a,o0.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function o0(n,i){if(Bl=-1,Ol=0,(Dt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ha()&&n.callbackNode!==a)return null;var u=Qt(n,n===Mn?Nn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=zl(n,u);else{i=u;var f=Dt;Dt|=2;var x=u0();(Mn!==n||Nn!==i)&&(yr=null,fa=on()+500,Ms(n,i));do try{N1();break}catch(L){c0(n,L)}while(!0);zu(),Dl.current=x,Dt=f,hn!==null?i=0:(Mn=null,Nn=0,i=vn)}if(i!==0){if(i===2&&(f=fn(n),f!==0&&(u=f,i=Ed(n,f))),i===1)throw a=Ao,Ms(n,0),es(n,u),ni(n,on()),a;if(i===6)es(n,u);else{if(f=n.current.alternate,(u&30)===0&&!R1(f)&&(i=zl(n,u),i===2&&(x=fn(n),x!==0&&(u=x,i=Ed(n,x))),i===1))throw a=Ao,Ms(n,0),es(n,u),ni(n,on()),a;switch(n.finishedWork=f,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:ws(n,ti,yr);break;case 3:if(es(n,u),(u&130023424)===u&&(i=Sd+500-on(),10<i)){if(Qt(n,0)!==0)break;if(f=n.suspendedLanes,(f&u)!==u){Gn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Ru(ws.bind(null,n,ti,yr),i);break}ws(n,ti,yr);break;case 4:if(es(n,u),(u&4194240)===u)break;for(i=n.eventTimes,f=-1;0<u;){var b=31-be(u);x=1<<b,b=i[b],b>f&&(f=b),u&=~x}if(u=f,u=on()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*C1(u/1960))-u,10<u){n.timeoutHandle=Ru(ws.bind(null,n,ti,yr),u);break}ws(n,ti,yr);break;case 5:ws(n,ti,yr);break;default:throw Error(t(329))}}}return ni(n,on()),n.callbackNode===a?o0.bind(null,n):null}function Ed(n,i){var a=Eo;return n.current.memoizedState.isDehydrated&&(Ms(n,i).flags|=256),n=zl(n,i),n!==2&&(i=ti,ti=a,i!==null&&Md(i)),n}function Md(n){ti===null?ti=n:ti.push.apply(ti,n)}function R1(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var f=a[u],x=f.getSnapshot;f=f.value;try{if(!Ii(x(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function es(n,i){for(i&=~_d,i&=~Ll,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-be(i),u=1<<a;n[a]=-1,i&=~u}}function l0(n){if((Dt&6)!==0)throw Error(t(327));ha();var i=Qt(n,0);if((i&1)===0)return ni(n,on()),null;var a=zl(n,i);if(n.tag!==0&&a===2){var u=fn(n);u!==0&&(i=u,a=Ed(n,u))}if(a===1)throw a=Ao,Ms(n,0),es(n,i),ni(n,on()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ws(n,ti,yr),ni(n,on()),null}function wd(n,i){var a=Dt;Dt|=1;try{return n(i)}finally{Dt=a,Dt===0&&(fa=on()+500,hl&&Yr())}}function Es(n){Jr!==null&&Jr.tag===0&&(Dt&6)===0&&ha();var i=Dt;Dt|=1;var a=Si.transition,u=yt;try{if(Si.transition=null,yt=1,n)return n()}finally{yt=u,Si.transition=a,Dt=i,(Dt&6)===0&&Yr()}}function bd(){ui=da.current,tn(da)}function Ms(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,s1(a)),hn!==null)for(a=hn.return;a!==null;){var u=a;switch(Fu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&dl();break;case 3:la(),tn(Jn),tn(kn),Ku();break;case 5:Xu(u);break;case 4:la();break;case 13:tn(ln);break;case 19:tn(ln);break;case 10:ju(u.type._context);break;case 22:case 23:bd()}a=a.return}if(Mn=n,hn=n=ts(n.current,null),Nn=ui=i,vn=0,Ao=null,_d=Ll=As=0,ti=Eo=null,_s!==null){for(i=0;i<_s.length;i++)if(a=_s[i],u=a.interleaved,u!==null){a.interleaved=null;var f=u.next,x=a.pending;if(x!==null){var b=x.next;x.next=f,u.next=b}a.pending=u}_s=null}return n}function c0(n,i){do{var a=hn;try{if(zu(),El.current=Tl,Ml){for(var u=cn.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}Ml=!1}if(ys=0,En=gn=cn=null,xo=!1,go=0,vd.current=null,a===null||a.return===null){vn=1,Ao=i,hn=null;break}e:{var x=n,b=a.return,L=a,H=i;if(i=Nn,L.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var fe=H,Ae=L,Ee=Ae.tag;if((Ae.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ye=Ae.alternate;ye?(Ae.updateQueue=ye.updateQueue,Ae.memoizedState=ye.memoizedState,Ae.lanes=ye.lanes):(Ae.updateQueue=null,Ae.memoizedState=null)}var je=Lm(b);if(je!==null){je.flags&=-257,Fm(je,b,L,x,i),je.mode&1&&Dm(x,fe,i),i=je,H=fe;var Ye=i.updateQueue;if(Ye===null){var qe=new Set;qe.add(H),i.updateQueue=qe}else Ye.add(H);break e}else{if((i&1)===0){Dm(x,fe,i),Td();break e}H=Error(t(426))}}else if(an&&L.mode&1){var dn=Lm(b);if(dn!==null){(dn.flags&65536)===0&&(dn.flags|=256),Fm(dn,b,L,x,i),Bu(ca(H,L));break e}}x=H=ca(H,L),vn!==4&&(vn=2),Eo===null?Eo=[x]:Eo.push(x),x=b;do{switch(x.tag){case 3:x.flags|=65536,i&=-i,x.lanes|=i;var re=Nm(x,H,i);rm(x,re);break e;case 1:L=H;var Y=x.type,ce=x.stateNode;if((x.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Zr===null||!Zr.has(ce)))){x.flags|=65536,i&=-i,x.lanes|=i;var we=Im(x,L,i);rm(x,we);break e}}x=x.return}while(x!==null)}f0(a)}catch(et){i=et,hn===a&&a!==null&&(hn=a=a.return);continue}break}while(!0)}function u0(){var n=Dl.current;return Dl.current=Tl,n===null?Tl:n}function Td(){(vn===0||vn===3||vn===2)&&(vn=4),Mn===null||(As&268435455)===0&&(Ll&268435455)===0||es(Mn,Nn)}function zl(n,i){var a=Dt;Dt|=2;var u=u0();(Mn!==n||Nn!==i)&&(yr=null,Ms(n,i));do try{P1();break}catch(f){c0(n,f)}while(!0);if(zu(),Dt=a,Dl.current=u,hn!==null)throw Error(t(261));return Mn=null,Nn=0,vn}function P1(){for(;hn!==null;)d0(hn)}function N1(){for(;hn!==null&&!Ws();)d0(hn)}function d0(n){var i=m0(n.alternate,n,ui);n.memoizedProps=n.pendingProps,i===null?f0(n):hn=i,vd.current=null}function f0(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=E1(a,i,ui),a!==null){hn=a;return}}else{if(a=M1(a,i),a!==null){a.flags&=32767,hn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{vn=6,hn=null;return}}if(i=i.sibling,i!==null){hn=i;return}hn=i=n}while(i!==null);vn===0&&(vn=5)}function ws(n,i,a){var u=yt,f=Si.transition;try{Si.transition=null,yt=1,I1(n,i,a,u)}finally{Si.transition=f,yt=u}return null}function I1(n,i,a,u){do ha();while(Jr!==null);if((Dt&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=a.lanes|a.childLanes;if(qn(n,x),n===Mn&&(hn=Mn=null,Nn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ul||(Ul=!0,x0(q,function(){return ha(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=Si.transition,Si.transition=null;var b=yt;yt=1;var L=Dt;Dt|=4,vd.current=null,b1(n,a),n0(a,n),Jv(Tu),Zo=!!bu,Tu=bu=null,n.current=a,T1(a),su(),Dt=L,yt=b,Si.transition=x}else n.current=a;if(Ul&&(Ul=!1,Jr=n,kl=f),x=n.pendingLanes,x===0&&(Zr=null),He(a.stateNode),ni(n,on()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],u(f.value,{componentStack:f.stack,digest:f.digest});if(Fl)throw Fl=!1,n=yd,yd=null,n;return(kl&1)!==0&&n.tag!==0&&ha(),x=n.pendingLanes,(x&1)!==0?n===Ad?Mo++:(Mo=0,Ad=n):Mo=0,Yr(),null}function ha(){if(Jr!==null){var n=hr(kl),i=Si.transition,a=yt;try{if(Si.transition=null,yt=16>n?16:n,Jr===null)var u=!1;else{if(n=Jr,Jr=null,kl=0,(Dt&6)!==0)throw Error(t(331));var f=Dt;for(Dt|=4,Ge=n.current;Ge!==null;){var x=Ge,b=x.child;if((Ge.flags&16)!==0){var L=x.deletions;if(L!==null){for(var H=0;H<L.length;H++){var fe=L[H];for(Ge=fe;Ge!==null;){var Ae=Ge;switch(Ae.tag){case 0:case 11:case 15:yo(8,Ae,x)}var Ee=Ae.child;if(Ee!==null)Ee.return=Ae,Ge=Ee;else for(;Ge!==null;){Ae=Ge;var ye=Ae.sibling,je=Ae.return;if(Zm(Ae),Ae===fe){Ge=null;break}if(ye!==null){ye.return=je,Ge=ye;break}Ge=je}}}var Ye=x.alternate;if(Ye!==null){var qe=Ye.child;if(qe!==null){Ye.child=null;do{var dn=qe.sibling;qe.sibling=null,qe=dn}while(qe!==null)}}Ge=x}}if((x.subtreeFlags&2064)!==0&&b!==null)b.return=x,Ge=b;else e:for(;Ge!==null;){if(x=Ge,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:yo(9,x,x.return)}var re=x.sibling;if(re!==null){re.return=x.return,Ge=re;break e}Ge=x.return}}var Y=n.current;for(Ge=Y;Ge!==null;){b=Ge;var ce=b.child;if((b.subtreeFlags&2064)!==0&&ce!==null)ce.return=b,Ge=ce;else e:for(b=Y;Ge!==null;){if(L=Ge,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Il(9,L)}}catch(et){un(L,L.return,et)}if(L===b){Ge=null;break e}var we=L.sibling;if(we!==null){we.return=L.return,Ge=we;break e}Ge=L.return}}if(Dt=f,Yr(),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(ae,n)}catch{}u=!0}return u}finally{yt=a,Si.transition=i}}return!1}function h0(n,i,a){i=ca(a,i),i=Nm(n,i,1),n=Qr(n,i,1),i=Gn(),n!==null&&(St(n,1,i),ni(n,i))}function un(n,i,a){if(n.tag===3)h0(n,n,a);else for(;i!==null;){if(i.tag===3){h0(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Zr===null||!Zr.has(u))){n=ca(a,n),n=Im(i,n,1),i=Qr(i,n,1),n=Gn(),i!==null&&(St(i,1,n),ni(i,n));break}}i=i.return}}function D1(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Gn(),n.pingedLanes|=n.suspendedLanes&a,Mn===n&&(Nn&a)===a&&(vn===4||vn===3&&(Nn&130023424)===Nn&&500>on()-Sd?Ms(n,0):_d|=a),ni(n,i)}function p0(n,i){i===0&&((n.mode&1)===0?i=1:(i=$e,$e<<=1,($e&130023424)===0&&($e=4194304)));var a=Gn();n=vr(n,i),n!==null&&(St(n,i,a),ni(n,a))}function L1(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),p0(n,a)}function F1(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),p0(n,a)}var m0;m0=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Jn.current)ei=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ei=!1,A1(n,i,a);ei=(n.flags&131072)!==0}else ei=!1,an&&(i.flags&1048576)!==0&&Kp(i,ml,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Pl(n,i),n=i.pendingProps;var f=ta(i,kn.current);oa(i,a),f=Zu(null,i,u,n,f,a);var x=Ju();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,$n(u)?(x=!0,fl(i)):x=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Gu(i),f.updater=Cl,i.stateNode=f,f._reactInternals=i,rd(i,u,n,a),i=ld(null,i,u,!0,x,a)):(i.tag=0,an&&x&&Lu(i),Vn(null,i,f,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Pl(n,i),n=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=k1(u),n=Li(u,n),f){case 0:i=od(null,i,u,n,a);break e;case 1:i=jm(null,i,u,n,a);break e;case 11:i=Um(null,i,u,n,a);break e;case 14:i=km(null,i,u,Li(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Li(u,f),od(n,i,u,f,a);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Li(u,f),jm(n,i,u,f,a);case 3:e:{if(Hm(i),n===null)throw Error(t(387));u=i.pendingProps,x=i.memoizedState,f=x.element,im(n,i),yl(i,u,null,a);var b=i.memoizedState;if(u=b.element,x.isDehydrated)if(x={element:u,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=x,i.memoizedState=x,i.flags&256){f=ca(Error(t(423)),i),i=Vm(n,i,u,a,f);break e}else if(u!==f){f=ca(Error(t(424)),i),i=Vm(n,i,u,a,f);break e}else for(ci=Gr(i.stateNode.containerInfo.firstChild),li=i,an=!0,Di=null,a=tm(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ra(),u===f){i=Sr(n,i,a);break e}Vn(n,i,u,a)}i=i.child}return i;case 5:return am(i),n===null&&ku(i),u=i.type,f=i.pendingProps,x=n!==null?n.memoizedProps:null,b=f.children,Cu(u,f)?b=null:x!==null&&Cu(u,x)&&(i.flags|=32),zm(n,i),Vn(n,i,b,a),i.child;case 6:return n===null&&ku(i),null;case 13:return Gm(n,i,a);case 4:return Wu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=sa(i,null,u,a):Vn(n,i,u,a),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Li(u,f),Um(n,i,u,f,a);case 7:return Vn(n,i,i.pendingProps,a),i.child;case 8:return Vn(n,i,i.pendingProps.children,a),i.child;case 12:return Vn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,x=i.memoizedProps,b=f.value,qt(vl,u._currentValue),u._currentValue=b,x!==null)if(Ii(x.value,b)){if(x.children===f.children&&!Jn.current){i=Sr(n,i,a);break e}}else for(x=i.child,x!==null&&(x.return=i);x!==null;){var L=x.dependencies;if(L!==null){b=x.child;for(var H=L.firstContext;H!==null;){if(H.context===u){if(x.tag===1){H=_r(-1,a&-a),H.tag=2;var fe=x.updateQueue;if(fe!==null){fe=fe.shared;var Ae=fe.pending;Ae===null?H.next=H:(H.next=Ae.next,Ae.next=H),fe.pending=H}}x.lanes|=a,H=x.alternate,H!==null&&(H.lanes|=a),Hu(x.return,a,i),L.lanes|=a;break}H=H.next}}else if(x.tag===10)b=x.type===i.type?null:x.child;else if(x.tag===18){if(b=x.return,b===null)throw Error(t(341));b.lanes|=a,L=b.alternate,L!==null&&(L.lanes|=a),Hu(b,a,i),b=x.sibling}else b=x.child;if(b!==null)b.return=x;else for(b=x;b!==null;){if(b===i){b=null;break}if(x=b.sibling,x!==null){x.return=b.return,b=x;break}b=b.return}x=b}Vn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,oa(i,a),f=vi(f),u=u(f),i.flags|=1,Vn(n,i,u,a),i.child;case 14:return u=i.type,f=Li(u,i.pendingProps),f=Li(u.type,f),km(n,i,u,f,a);case 15:return Bm(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Li(u,f),Pl(n,i),i.tag=1,$n(u)?(n=!0,fl(i)):n=!1,oa(i,a),Rm(i,u,f),rd(i,u,f,a),ld(null,i,u,!0,n,a);case 19:return Xm(n,i,a);case 22:return Om(n,i,a)}throw Error(t(156,i.tag))};function x0(n,i){return qi(n,i)}function U1(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yi(n,i,a,u){return new U1(n,i,a,u)}function Cd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function k1(n){if(typeof n=="function")return Cd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Q)return 11;if(n===V)return 14}return 2}function ts(n,i){var a=n.alternate;return a===null?(a=yi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function jl(n,i,a,u,f,x){var b=2;if(u=n,typeof n=="function")Cd(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case U:return bs(a.children,f,x,i);case M:b=8,f|=8;break;case N:return n=yi(12,a,i,f|2),n.elementType=N,n.lanes=x,n;case z:return n=yi(13,a,i,f),n.elementType=z,n.lanes=x,n;case te:return n=yi(19,a,i,f),n.elementType=te,n.lanes=x,n;case $:return Hl(a,f,x,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case W:b=10;break e;case j:b=9;break e;case Q:b=11;break e;case V:b=14;break e;case oe:b=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=yi(b,a,i,f),i.elementType=n,i.type=u,i.lanes=x,i}function bs(n,i,a,u){return n=yi(7,n,u,i),n.lanes=a,n}function Hl(n,i,a,u){return n=yi(22,n,u,i),n.elementType=$,n.lanes=a,n.stateNode={isHidden:!1},n}function Rd(n,i,a){return n=yi(6,n,null,i),n.lanes=a,n}function Pd(n,i,a){return i=yi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function B1(n,i,a,u,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rn(0),this.expirationTimes=Rn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rn(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Nd(n,i,a,u,f,x,b,L,H){return n=new B1(n,i,a,L,H),i===1?(i=1,x===!0&&(i|=8)):i=0,x=yi(3,null,null,i),n.current=x,x.stateNode=n,x.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gu(x),n}function O1(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function g0(n){if(!n)return Xr;n=n._reactInternals;e:{if(xn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if($n(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if($n(a))return Wp(n,a,i)}return i}function v0(n,i,a,u,f,x,b,L,H){return n=Nd(a,u,!0,n,f,x,b,L,H),n.context=g0(null),a=n.current,u=Gn(),f=$r(a),x=_r(u,f),x.callback=i??null,Qr(a,x,f),n.current.lanes=f,St(n,f,u),ni(n,u),n}function Vl(n,i,a,u){var f=i.current,x=Gn(),b=$r(f);return a=g0(a),i.context===null?i.context=a:i.pendingContext=a,i=_r(x,b),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Qr(f,i,b),n!==null&&(ki(n,f,b,x),Sl(n,f,b)),b}function Gl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function _0(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Id(n,i){_0(n,i),(n=n.alternate)&&_0(n,i)}function z1(){return null}var S0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Dd(n){this._internalRoot=n}Wl.prototype.render=Dd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Vl(n,i,null,null)},Wl.prototype.unmount=Dd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Es(function(){Vl(null,n,null,null)}),i[pr]=null}};function Wl(n){this._internalRoot=n}Wl.prototype.unstable_scheduleHydration=function(n){if(n){var i=zt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<jr.length&&i!==0&&i<jr[a].priority;a++);jr.splice(a,0,n),a===0&&ap(n)}};function Ld(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Xl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function y0(){}function j1(n,i,a,u,f){if(f){if(typeof u=="function"){var x=u;u=function(){var fe=Gl(b);x.call(fe)}}var b=v0(i,u,n,0,null,!1,!1,"",y0);return n._reactRootContainer=b,n[pr]=b.current,oo(n.nodeType===8?n.parentNode:n),Es(),b}for(;f=n.lastChild;)n.removeChild(f);if(typeof u=="function"){var L=u;u=function(){var fe=Gl(H);L.call(fe)}}var H=Nd(n,0,!1,null,null,!1,!1,"",y0);return n._reactRootContainer=H,n[pr]=H.current,oo(n.nodeType===8?n.parentNode:n),Es(function(){Vl(i,H,a,u)}),H}function Yl(n,i,a,u,f){var x=a._reactRootContainer;if(x){var b=x;if(typeof f=="function"){var L=f;f=function(){var H=Gl(b);L.call(H)}}Vl(i,b,n,f)}else b=j1(a,i,n,f,u);return Gl(b)}kt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Rt(i.pendingLanes);a!==0&&(Zn(i,a|1),ni(i,on()),(Dt&6)===0&&(fa=on()+500,Yr()))}break;case 13:Es(function(){var u=vr(n,1);if(u!==null){var f=Gn();ki(u,n,1,f)}}),Id(n,1)}},$t=function(n){if(n.tag===13){var i=vr(n,134217728);if(i!==null){var a=Gn();ki(i,n,134217728,a)}Id(n,134217728)}},Pi=function(n){if(n.tag===13){var i=$r(n),a=vr(n,i);if(a!==null){var u=Gn();ki(a,n,i,u)}Id(n,i)}},zt=function(){return yt},Ni=function(n,i){var a=yt;try{return yt=n,i()}finally{yt=a}},rt=function(n,i,a){switch(i){case"input":if(Yt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var f=ul(u);if(!f)throw Error(t(90));Ft(u),Yt(u,f)}}}break;case"textarea":mn(n,a);break;case"select":i=a.value,i!=null&&Ut(n,!!a.multiple,i,!1)}},Fe=wd,F=Es;var H1={usingClientEntryPoint:!1,Events:[uo,$s,ul,ge,De,wd]},wo={findFiberByHostInstance:ms,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},V1={bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Qn(n),n===null?null:n.stateNode},findFiberByHostInstance:wo.findFiberByHostInstance||z1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{ae=Kl.inject(V1),Re=Kl}catch{}}return ii.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H1,ii.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ld(i))throw Error(t(200));return O1(n,i,null,a)},ii.createRoot=function(n,i){if(!Ld(n))throw Error(t(299));var a=!1,u="",f=S0;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Nd(n,1,!1,null,null,a,!1,u,f),n[pr]=i.current,oo(n.nodeType===8?n.parentNode:n),new Dd(i)},ii.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Qn(i),n=n===null?null:n.stateNode,n},ii.flushSync=function(n){return Es(n)},ii.hydrate=function(n,i,a){if(!Xl(i))throw Error(t(200));return Yl(null,n,i,!0,a)},ii.hydrateRoot=function(n,i,a){if(!Ld(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,f=!1,x="",b=S0;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=v0(i,null,n,1,a??null,f,!1,x,b),n[pr]=i.current,oo(n),u)for(n=0;n<u.length;n++)a=u[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new Wl(i)},ii.render=function(n,i,a){if(!Xl(i))throw Error(t(200));return Yl(null,n,i,!1,a)},ii.unmountComponentAtNode=function(n){if(!Xl(n))throw Error(t(40));return n._reactRootContainer?(Es(function(){Yl(null,null,n,!1,function(){n._reactRootContainer=null,n[pr]=null})}),!0):!1},ii.unstable_batchedUpdates=wd,ii.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Xl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Yl(n,i,a,!1,u)},ii.version="18.3.1-next-f1338f8080-20240426",ii}var R0;function Z1(){if(R0)return kd.exports;R0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),kd.exports=q1(),kd.exports}var P0;function J1(){if(P0)return Ql;P0=1;var r=Z1();return Ql.createRoot=r.createRoot,Ql.hydrateRoot=r.hydrateRoot,Ql}var $1=J1(),it=wh();const e_=[{id:"1",text:"Run baseline on 2U_chassis_v1 @ 400W."},{id:"2",text:"Create v2 (fan_rpm: 3500) → run."},{id:"3",text:"Create v3 (from v2, heatsink_fin_count: 60) → run."},{id:"4",text:"Return a small table of max CPU temp for v1/v2/v3 + deltas."}],t_=[{key:"fan_rpm_parameter",label:"fan_rpm_parameter",from:300,to:1250,unit:"rpm"}],n_='After each run: model + max_temp; final: a 3-row comparison table. Hit "Proceed" or give edits.',i_=[{id:"1",text:"Validate design parameters for the 400W upgrade."},{id:"2",text:"Set up 2-level full factorial DOE (fan_rpm × heatsink_fin_count)."},{id:"3",text:"Queue and validate all DOE runs."},{id:"4",text:"Summarize pass/fail and key thermal metrics."}],r_="Checks stay in this panel: validated parameters → sweep progress → pass/fail summary.",s_="Try Copilot, your simulation agent that helps you automate your work.",lg=[{id:"modifying",label:"Modifying model"},{id:"simulation",label:"Simulation"},{id:"iterating",label:"Iterating"}],a_=[{id:"thermal",label:"Run thermal simulation with..",prompt:"Run thermal simulation checks on 2U_chassis_v1 with a 400W heat load. Validate mesh, BC, and solver readiness.",focus:[null,"simulation","iterating"],runKind:"checks"},{id:"variation",label:"Create new design variation and change parameter...",prompt:"Create new design variation and change fan_rpm parameter to 1250. And create a result panel to compare",focus:[null,"simulation","iterating"],runKind:"variation",defaultRpm:1250},{id:"table",label:"Give me a table comparing the result of...",prompt:"Give me a table comparing max CPU temp across baseline and design variations for the 400W upgrade.",focus:[null,"iterating"],runKind:"variation"},{id:"tools",label:"Find me tools to fix the model",prompt:"Find me tools to fix the model — start with the PULL tool.",focus:[null,"modifying"],runKind:"checks"},{id:"doe",label:"Run simulation checks / DOE…",prompt:"I need to screen the design parameters for the 400W upgrade on 2U_chassis_v1. Run a Design of Experiments by varying fan_rpm between 2000 and 4000 RPM, and heatsink_fin_count between 40 and 80. Use a 2-level full factorial experiment. Validate all runs.",focus:["simulation"],runKind:"checks"}];function o_(r){return a_.filter(e=>e.focus.includes(r))}const l_=[{id:"c1",label:"Parameters validated",status:"pending"},{id:"c2",label:"Boundary conditions checked",status:"pending"},{id:"c3",label:"Running parameter sweep...",status:"pending"},{id:"c4",label:"Solver readiness confirmed",status:"pending"}];function c_(r){const e=r.toLowerCase();return(e.includes("fan_rpm")||e.includes("fan rpm")||e.includes("variation"))&&(e.includes("1250")||e.includes("3500")||e.includes("design")||e.includes("compare"))}function u_(r){const e=r.toLowerCase();return e.includes("design of experiments")||e.includes("doe")||e.includes("full factorial")||e.includes("validate all runs")||e.includes("simulation check")||e.includes("thermal simulation check")||e.includes("validate")&&e.includes("mesh")||e.includes("fan_rpm")&&e.includes("heatsink")}function d_(r){return u_(r)?"checks":c_(r)||N0(r,["variation","compare","result panel","design version"])?"variation":N0(r,["check","validate","sweep","thermal simulation"])?"checks":null}function N0(r,e){const t=r.toLowerCase();return e.some(s=>t.includes(s))}function Mt(r){const e=Ir[r];return{id:r,label:(e==null?void 0:e.label)??r,blurb:(e==null?void 0:e.blurb)??(e==null?void 0:e.label)??r,icon:(e==null?void 0:e.icon)??"plane"}}function f_(r){const e=r.toLowerCase();return e.includes("find")&&e.includes("tool")||e.includes("which tool")||e.includes("locate tool")||e.includes("tools to fix")?e.includes("structural")||e.includes("simulation ribbon")?[Mt("structural"),Mt("automatic"),Mt("fluid"),Mt("measure")]:e.includes("fluid")||e.includes("flow")?[Mt("fluid"),Mt("track"),Mt("sweep"),Mt("measure")]:e.includes("pull")?[Mt("pull"),Mt("pull-full"),Mt("sweep"),Mt("box")]:e.includes("fix")||e.includes("model")?[Mt("pull"),Mt("facet"),Mt("measure"),Mt("box")]:[Mt("pull"),Mt("pose"),Mt("sweep"),Mt("measure")]:e.includes("structural")?[Mt("structural"),Mt("automatic"),Mt("measure"),Mt("pose")]:e.includes("fluid")?[Mt("fluid"),Mt("track"),Mt("sweep"),Mt("measure")]:e.includes("pull")?[Mt("pull"),Mt("pull-full"),Mt("sweep"),Mt("pose")]:e.includes("automatic")?[Mt("automatic"),Mt("pull"),Mt("sweep"),Mt("facet")]:null}const I0={id:"pull",label:"PULL"},Ir={pose:{id:"pose",label:"Pose",icon:"path",suggestMode:"icons",suggestToolIds:["track","facet","measure"],blurb:"Reposition selection along a guided path."},sweep:{id:"sweep",label:"Sweep",icon:"thicken",suggestMode:"icons",suggestToolIds:["pose","pull-full","box"],blurb:"Thicken or sweep surfaces from the active face."},facet:{id:"facet",label:"Facet",icon:"up",suggestMode:"prompt-select",promptOptions:["Check simulation","Track simulation","Lock selection"],blurb:"Lift faces off the reference plane."},track:{id:"track",label:"Track",icon:"box",suggestMode:"prompt-select",promptOptions:["Check simulation","Retract simulation","Compare results"],blurb:"Track simulation status for the active body."},measure:{id:"measure",label:"Measure",icon:"pull",suggestMode:"icons",suggestToolIds:["pose","facet","track"],blurb:"Measure distance and clearance."},"pull-full":{id:"pull-full",label:"Full Pull",icon:"pull",suggestMode:"prompt-select",promptOptions:["Check simulation","Retract simulation","Lock selection"],blurb:"Full pull along the face normal."},box:{id:"box",label:"Bound",icon:"box",suggestMode:"icons",suggestToolIds:["pose","sweep","facet"],blurb:"Bound selection to a target face."},pull:{id:"pull",label:"PULL",icon:"plane",suggestMode:"prompt-select",promptOptions:["Check simulation","Retract simulation","Lock selection"],blurb:"Pull faces and thicken geometry along a direction."},automatic:{id:"automatic",label:"Automatic",icon:"path",suggestMode:"icons",suggestToolIds:["pose","sweep","facet"],blurb:"Automatic sizing for the active tool."},structural:{id:"structural",label:"Structural",icon:"plane",suggestMode:"icons",suggestToolIds:["pose","sweep","facet"],blurb:"Structural physics setup on the Simulation ribbon."},fluid:{id:"fluid",label:"Fluid",icon:"path",suggestMode:"icons",suggestToolIds:["pose","track","measure"],blurb:"Fluid flow boundary conditions and results."}},h_=["pose","sweep","facet"],D0=[["track","measure","box"],["pull-full","fluid","structural"],["automatic","measure","pull-full"]];function p_(r){return[...D0[r%D0.length]]}const Rf={mark:"pull-default",modeLabel:"Automatic",modeBorder:!0,measureValue:"7.87mm",showMeasure:!0,measureDimmed:!1,banEnabled:!0,paramEnabled:!0,endToolActive:!1},m_={pull:{...Rf},pose:{mark:"pose",modeLabel:"Manual",modeBorder:!1,measureValue:"15.2mm",showMeasure:!0,measureDimmed:!1,banEnabled:!0,paramEnabled:!1,endToolActive:!1},sweep:{mark:"sweep",modeLabel:"Adaptive",modeBorder:!0,measureValue:"3.2°",showMeasure:!0,measureDimmed:!1,banEnabled:!1,paramEnabled:!0,endToolActive:!0},facet:{mark:"facet",modeLabel:"Guided",modeBorder:!1,measureValue:"—",showMeasure:!1,measureDimmed:!0,banEnabled:!0,paramEnabled:!0,endToolActive:!1},track:{mark:"track",modeLabel:"Locked",modeBorder:!0,measureValue:"0.00mm",showMeasure:!0,measureDimmed:!0,banEnabled:!1,paramEnabled:!1,endToolActive:!1},measure:{mark:"measure",modeLabel:"Offset",modeBorder:!1,measureValue:"42.0mm",showMeasure:!0,measureDimmed:!1,banEnabled:!0,paramEnabled:!0,endToolActive:!1},"pull-full":{mark:"pull-full",modeLabel:"Depth",modeBorder:!0,measureValue:"9.50mm",showMeasure:!0,measureDimmed:!1,banEnabled:!0,paramEnabled:!1,endToolActive:!0},box:{mark:"box",modeLabel:"Bound",modeBorder:!1,measureValue:"2.1mm",showMeasure:!0,measureDimmed:!1,banEnabled:!1,paramEnabled:!0,endToolActive:!1},automatic:{mark:"automatic",modeLabel:"Automatic",modeBorder:!0,measureValue:"1.00×",showMeasure:!0,measureDimmed:!1,banEnabled:!0,paramEnabled:!0,endToolActive:!1},structural:{mark:"structural",modeLabel:"Fixed",modeBorder:!0,measureValue:"1250",showMeasure:!0,measureDimmed:!1,banEnabled:!0,paramEnabled:!0,endToolActive:!1},fluid:{mark:"fluid",modeLabel:"Inlet",modeBorder:!1,measureValue:"0.35m/s",showMeasure:!0,measureDimmed:!1,banEnabled:!1,paramEnabled:!0,endToolActive:!1}};function Yo(r){return r?m_[r]??Rf:Rf}const x_=Object.fromEntries(Object.values(Ir).map(r=>{var e;return[r.id,{title:r.label,blurb:r.blurb??r.label,suggestion:(e=r.promptOptions)!=null&&e[0]?`You might want to ${r.promptOptions[0].toLowerCase()}`:void 0}]})),g_=[{id:1,label:"Simulation 1",status:"complete",expanded:!1},{id:2,label:"Simulation 2",status:"complete",expanded:!1},{id:3,label:"Simulation 3",status:"complete",expanded:!1},{id:4,label:"Simulation 4",status:"idle",expanded:!1},{id:5,label:"Simulation 5",status:"idle",expanded:!1}];function cg(){return{phase:"idle",copilotExpanded:!1,copilotDocked:!1,physicsCollapsed:!1,messages:[],planSteps:[],parameterChanges:[],editableFanRpm:1250,draft:"",contextItems:[],designPoints:[{id:"baseline",label:"Baseline",fanRpm:300,status:"complete"}],activeDesignPointId:"baseline",simulations:g_,simListVisible:!1,runProgress:0,viewportIntensity:0,showPopout:!1,highlightedToolId:null,activeToolId:null,aiRailPhase:"idle",ribbonToolId:I0.id,ribbonToolLabel:I0.label,aiSkeleton:!1,toolSuggestion:null,selectedBlockId:null,deletedBlockIds:[],aiRailToolIds:null,guideFocus:null,runKind:null,thinkingSteps:[],thinkingExpanded:!1,thinkingLabel:null,checkSteps:[],collapseStatus:"",checksSummary:null}}function v_(r,e){switch(e.type){case"SET_PHASE":return{...r,phase:e.phase};case"SET_COPILOT_EXPANDED":return{...r,copilotExpanded:e.expanded};case"SET_COPILOT_DOCKED":return{...r,copilotDocked:e.docked};case"SET_PHYSICS_COLLAPSED":return{...r,physicsCollapsed:e.collapsed};case"SET_DRAFT":return{...r,draft:e.draft};case"SET_EDITABLE_FAN_RPM":return{...r,editableFanRpm:e.value};case"ADD_MESSAGE":return{...r,messages:[...r.messages,e.message]};case"SET_PLAN":return{...r,planSteps:e.steps,parameterChanges:e.changes,phase:"confirm",runKind:e.runKind??r.runKind};case"ADD_CONTEXT":return r.contextItems.some(t=>t.id===e.item.id)?r:{...r,contextItems:[...r.contextItems,e.item]};case"REMOVE_CONTEXT":return{...r,contextItems:r.contextItems.filter(t=>t.id!==e.id)};case"SET_RUN_PROGRESS":return{...r,runProgress:e.progress};case"SET_VIEWPORT_INTENSITY":return{...r,viewportIntensity:e.intensity};case"SET_SHOW_POPOUT":return{...r,showPopout:e.show,phase:e.show?"popout":"done"};case"SET_HIGHLIGHTED_TOOL":return{...r,highlightedToolId:e.toolId};case"SET_ACTIVE_TOOL":return{...r,activeToolId:e.toolId};case"SET_AI_RAIL_PHASE":return{...r,aiRailPhase:e.phase,aiSkeleton:e.phase==="loading"};case"SET_AI_RAIL_TOOL_IDS":return{...r,aiRailToolIds:e.toolIds};case"SET_RIBBON_TOOL":return{...r,ribbonToolId:e.toolId,ribbonToolLabel:e.label};case"SET_AI_SKELETON":return{...r,aiSkeleton:e.on};case"SET_TOOL_SUGGESTION":return{...r,toolSuggestion:e.text};case"ADD_DESIGN_POINT":return{...r,designPoints:[...r.designPoints,e.point]};case"UPDATE_DESIGN_POINT":return{...r,designPoints:r.designPoints.map(t=>t.id===e.id?{...t,...e.patch}:t)};case"SET_ACTIVE_DESIGN_POINT":return{...r,activeDesignPointId:e.id};case"SET_SIMULATION_STATUS":return{...r,simulations:r.simulations.map(t=>t.id===e.id?{...t,status:e.status}:t)};case"TOGGLE_SIM_EXPANDED":return{...r,simulations:r.simulations.map(t=>t.id===e.id?{...t,expanded:!t.expanded}:t)};case"SET_SIM_EXPANDED":return{...r,simulations:r.simulations.map(t=>t.id===e.id?{...t,expanded:e.expanded}:t)};case"SET_SIM_LIST_VISIBLE":return{...r,simListVisible:e.visible};case"TOGGLE_SIM_LIST":return{...r,simListVisible:!r.simListVisible};case"SET_SELECTED_BLOCK":return{...r,selectedBlockId:e.id};case"DELETE_SELECTED_BLOCK":{const t=r.selectedBlockId,s=t&&!r.deletedBlockIds.includes(t)?[...r.deletedBlockIds,t]:r.deletedBlockIds;return{...r,selectedBlockId:null,deletedBlockIds:s}}case"SET_GUIDE_FOCUS":return{...r,guideFocus:e.focus};case"SET_RUN_KIND":return{...r,runKind:e.kind};case"SET_THINKING_STEPS":return{...r,thinkingSteps:e.steps};case"SET_THINKING_EXPANDED":return{...r,thinkingExpanded:e.expanded};case"SET_THINKING_LABEL":return{...r,thinkingLabel:e.label};case"SET_CHECK_STEPS":return{...r,checkSteps:e.steps};case"SET_COLLAPSE_STATUS":return{...r,collapseStatus:e.text};case"SET_CHECKS_SUMMARY":return{...r,checksSummary:e.text};case"RESET_COPILOT_CHAT":return{...r,phase:"guide",messages:[],planSteps:[],parameterChanges:[],draft:"",guideFocus:null,runKind:null,thinkingSteps:[],thinkingExpanded:!1,thinkingLabel:null,checkSteps:[],collapseStatus:"",checksSummary:null,showPopout:!1,editableFanRpm:1250};case"RESET_DEMO":return cg();default:return r}}const ug=it.createContext(null);function __({children:r}){const[e,t]=it.useReducer(v_,void 0,cg),s=it.useMemo(()=>({state:e,dispatch:t}),[e]);return l.jsx(ug.Provider,{value:s,children:r})}function bh(){const r=it.useContext(ug);if(!r)throw new Error("useDemo must be used within DemoProvider");return r}function Vt(){return bh().state}function Vs(){return bh().dispatch}const L0=1914,F0=1138;function S_({children:r}){const e=it.useRef(null),[t,s]=it.useState(1);return it.useEffect(()=>{const o=e.current;if(!o)return;const c=()=>{const{width:h,height:p}=o.getBoundingClientRect();s(Math.min(h/L0,p/F0))};c();const d=new ResizeObserver(c);return d.observe(o),()=>d.disconnect()},[]),l.jsx("div",{ref:e,className:"design-canvas-host",children:l.jsx("div",{className:"design-canvas",style:{width:L0,height:F0,transform:`scale(${t})`},children:r})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Th="185",y_=0,U0=1,A_=2,Lc=1,E_=2,Bo=3,fs=0,si=1,ar=2,Rr=0,Ua=1,k0=2,B0=3,O0=4,M_=5,Ls=100,w_=101,b_=102,T_=103,C_=104,R_=200,P_=201,N_=202,I_=203,Pf=204,Nf=205,D_=206,L_=207,F_=208,U_=209,k_=210,B_=211,O_=212,z_=213,j_=214,If=0,Df=1,Lf=2,ja=3,Ff=4,Uf=5,kf=6,Bf=7,dg=0,H_=1,V_=2,cr=0,fg=1,hg=2,pg=3,mg=4,xg=5,gg=6,vg=7,_g=300,zs=301,Ha=302,zd=303,jd=304,$c=306,Of=1e3,Vi=1001,zf=1002,Un=1003,G_=1004,ql=1005,Tn=1006,Hd=1007,ks=1008,hi=1009,Sg=1010,yg=1011,Vo=1012,Ch=1013,dr=1014,Gi=1015,Dr=1016,Rh=1017,Ph=1018,Go=1020,Ag=35902,Eg=35899,Mg=1021,wg=1022,Wi=1023,Lr=1026,Bs=1027,eu=1028,Nh=1029,js=1030,Ih=1031,Dh=1033,Fc=33776,Uc=33777,kc=33778,Bc=33779,jf=35840,Hf=35841,Vf=35842,Gf=35843,Wf=36196,Xf=37492,Yf=37496,Kf=37488,Qf=37489,zc=37490,qf=37491,Zf=37808,Jf=37809,$f=37810,eh=37811,th=37812,nh=37813,ih=37814,rh=37815,sh=37816,ah=37817,oh=37818,lh=37819,ch=37820,uh=37821,dh=36492,fh=36494,hh=36495,ph=36283,mh=36284,jc=36285,xh=36286,W_=3200,z0=0,X_=1,cs="",Mi="srgb",Hc="srgb-linear",Vc="linear",jt="srgb",pa=7680,j0=519,Y_=512,K_=513,Q_=514,Lh=515,q_=516,Z_=517,Fh=518,J_=519,gh=35044,H0="300 es",lr=2e3,Gc=2001;function $_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Wc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function eS(){const r=Wc("canvas");return r.style.display="block",r}const V0={};function Xc(...r){const e="THREE."+r.shift();console.log(e,...r)}function bg(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ct(...r){r=bg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Pt(...r){r=bg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ka(...r){const e=r.join(" ");e in V0||(V0[e]=!0,ct(...r))}function tS(r,e,t){return new Promise(function(s,o){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,t);break;default:s()}}setTimeout(c,t)})}const nS={[If]:Df,[Lf]:kf,[Ff]:Bf,[ja]:Uf,[Df]:If,[kf]:Lf,[Bf]:Ff,[Uf]:ja};class Gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const c=o.indexOf(t);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let c=0,d=o.length;c<d;c++)o[c].call(this,e);e.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let G0=1234567;const Ba=Math.PI/180,Wo=180/Math.PI;function Pr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(jn[r&255]+jn[r>>8&255]+jn[r>>16&255]+jn[r>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[t&63|128]+jn[t>>8&255]+"-"+jn[t>>16&255]+jn[t>>24&255]+jn[s&255]+jn[s>>8&255]+jn[s>>16&255]+jn[s>>24&255]).toLowerCase()}function mt(r,e,t){return Math.max(e,Math.min(t,r))}function Uh(r,e){return(r%e+e)%e}function iS(r,e,t,s,o){return s+(r-e)*(o-s)/(t-e)}function rS(r,e,t){return r!==e?(t-r)/(e-r):0}function jo(r,e,t){return(1-t)*r+t*e}function sS(r,e,t,s){return jo(r,e,1-Math.exp(-t*s))}function aS(r,e=1){return e-Math.abs(Uh(r,e*2)-e)}function oS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function lS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function cS(r,e){return r+Math.floor(Math.random()*(e-r+1))}function uS(r,e){return r+Math.random()*(e-r)}function dS(r){return r*(.5-Math.random())}function fS(r){r!==void 0&&(G0=r);let e=G0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hS(r){return r*Ba}function pS(r){return r*Wo}function mS(r){return(r&r-1)===0&&r!==0}function xS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function gS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function vS(r,e,t,s,o){const c=Math.cos,d=Math.sin,h=c(t/2),p=d(t/2),m=c((e+s)/2),v=d((e+s)/2),_=c((e-s)/2),g=d((e-s)/2),E=c((s-e)/2),w=d((s-e)/2);switch(o){case"XYX":r.set(h*v,p*_,p*g,h*m);break;case"YZY":r.set(p*g,h*v,p*_,h*m);break;case"ZXZ":r.set(p*_,p*g,h*v,h*m);break;case"XZX":r.set(h*v,p*w,p*E,h*m);break;case"YXY":r.set(p*E,h*v,p*w,h*m);break;case"ZYZ":r.set(p*w,p*E,h*v,h*m);break;default:ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ji(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ht(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const _S={DEG2RAD:Ba,RAD2DEG:Wo,generateUUID:Pr,clamp:mt,euclideanModulo:Uh,mapLinear:iS,inverseLerp:rS,lerp:jo,damp:sS,pingpong:aS,smoothstep:oS,smootherstep:lS,randInt:cS,randFloat:uS,randFloatSpread:dS,seededRandom:fS,degToRad:hS,radToDeg:pS,isPowerOfTwo:mS,ceilPowerOfTwo:xS,floorPowerOfTwo:gS,setQuaternionFromProperEuler:vS,normalize:Ht,denormalize:ji},ep=class ep{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*o+e.x,this.y=c*o+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ep.prototype.isVector2=!0;let Nt=ep;class Wa{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,c,d,h){let p=s[o+0],m=s[o+1],v=s[o+2],_=s[o+3],g=c[d+0],E=c[d+1],w=c[d+2],C=c[d+3];if(_!==C||p!==g||m!==E||v!==w){let y=p*g+m*E+v*w+_*C;y<0&&(g=-g,E=-E,w=-w,C=-C,y=-y);let S=1-h;if(y<.9995){const B=Math.acos(y),O=Math.sin(B);S=Math.sin(S*B)/O,h=Math.sin(h*B)/O,p=p*S+g*h,m=m*S+E*h,v=v*S+w*h,_=_*S+C*h}else{p=p*S+g*h,m=m*S+E*h,v=v*S+w*h,_=_*S+C*h;const B=1/Math.sqrt(p*p+m*m+v*v+_*_);p*=B,m*=B,v*=B,_*=B}}e[t]=p,e[t+1]=m,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,o,c,d){const h=s[o],p=s[o+1],m=s[o+2],v=s[o+3],_=c[d],g=c[d+1],E=c[d+2],w=c[d+3];return e[t]=h*w+v*_+p*E-m*g,e[t+1]=p*w+v*g+m*_-h*E,e[t+2]=m*w+v*E+h*g-p*_,e[t+3]=v*w-h*_-p*g-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,c=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(s/2),v=h(o/2),_=h(c/2),g=p(s/2),E=p(o/2),w=p(c/2);switch(d){case"XYZ":this._x=g*v*_+m*E*w,this._y=m*E*_-g*v*w,this._z=m*v*w+g*E*_,this._w=m*v*_-g*E*w;break;case"YXZ":this._x=g*v*_+m*E*w,this._y=m*E*_-g*v*w,this._z=m*v*w-g*E*_,this._w=m*v*_+g*E*w;break;case"ZXY":this._x=g*v*_-m*E*w,this._y=m*E*_+g*v*w,this._z=m*v*w+g*E*_,this._w=m*v*_-g*E*w;break;case"ZYX":this._x=g*v*_-m*E*w,this._y=m*E*_+g*v*w,this._z=m*v*w-g*E*_,this._w=m*v*_+g*E*w;break;case"YZX":this._x=g*v*_+m*E*w,this._y=m*E*_+g*v*w,this._z=m*v*w-g*E*_,this._w=m*v*_-g*E*w;break;case"XZY":this._x=g*v*_-m*E*w,this._y=m*E*_-g*v*w,this._z=m*v*w+g*E*_,this._w=m*v*_+g*E*w;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],c=t[8],d=t[1],h=t[5],p=t[9],m=t[2],v=t[6],_=t[10],g=s+h+_;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(v-p)*E,this._y=(c-m)*E,this._z=(d-o)*E}else if(s>h&&s>_){const E=2*Math.sqrt(1+s-h-_);this._w=(v-p)/E,this._x=.25*E,this._y=(o+d)/E,this._z=(c+m)/E}else if(h>_){const E=2*Math.sqrt(1+h-s-_);this._w=(c-m)/E,this._x=(o+d)/E,this._y=.25*E,this._z=(p+v)/E}else{const E=2*Math.sqrt(1+_-s-h);this._w=(d-o)/E,this._x=(c+m)/E,this._y=(p+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,c=e._z,d=e._w,h=t._x,p=t._y,m=t._z,v=t._w;return this._x=s*v+d*h+o*m-c*p,this._y=o*v+d*p+c*h-s*m,this._z=c*v+d*m+s*p-o*h,this._w=d*v-s*h-o*p-c*m,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,o=-o,c=-c,d=-d,h=-h);let p=1-t;if(h<.9995){const m=Math.acos(h),v=Math.sin(m);p=Math.sin(p*m)/v,t=Math.sin(t*m)/v,this._x=this._x*p+s*t,this._y=this._y*p+o*t,this._z=this._z*p+c*t,this._w=this._w*p+d*t,this._onChangeCallback()}else this._x=this._x*p+s*t,this._y=this._y*p+o*t,this._z=this._z*p+c*t,this._w=this._w*p+d*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(t),c*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const tp=class tp{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(W0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(W0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[3]*s+c[6]*o,this.y=c[1]*t+c[4]*s+c[7]*o,this.z=c[2]*t+c[5]*s+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,c=e.elements,d=1/(c[3]*t+c[7]*s+c[11]*o+c[15]);return this.x=(c[0]*t+c[4]*s+c[8]*o+c[12])*d,this.y=(c[1]*t+c[5]*s+c[9]*o+c[13])*d,this.z=(c[2]*t+c[6]*s+c[10]*o+c[14])*d,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,c=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*o-h*s),v=2*(h*t-c*o),_=2*(c*s-d*t);return this.x=t+p*m+d*_-h*v,this.y=s+p*v+h*m-c*_,this.z=o+p*_+c*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o,this.y=c[1]*t+c[5]*s+c[9]*o,this.z=c[2]*t+c[6]*s+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,c=e.z,d=t.x,h=t.y,p=t.z;return this.x=o*p-c*h,this.y=c*d-s*p,this.z=s*h-o*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Vd.copy(this).projectOnVector(e),this.sub(Vd)}reflect(e){return this.sub(Vd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tp.prototype.isVector3=!0;let J=tp;const Vd=new J,W0=new Wa,np=class np{constructor(e,t,s,o,c,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,c,d,h,p,m)}set(e,t,s,o,c,d,h,p,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=h,v[3]=t,v[4]=c,v[5]=p,v[6]=s,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,c=this.elements,d=s[0],h=s[3],p=s[6],m=s[1],v=s[4],_=s[7],g=s[2],E=s[5],w=s[8],C=o[0],y=o[3],S=o[6],B=o[1],O=o[4],R=o[7],D=o[2],P=o[5],U=o[8];return c[0]=d*C+h*B+p*D,c[3]=d*y+h*O+p*P,c[6]=d*S+h*R+p*U,c[1]=m*C+v*B+_*D,c[4]=m*y+v*O+_*P,c[7]=m*S+v*R+_*U,c[2]=g*C+E*B+w*D,c[5]=g*y+E*O+w*P,c[8]=g*S+E*R+w*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],v=e[8];return t*d*v-t*h*m-s*c*v+s*h*p+o*c*m-o*d*p}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],v=e[8],_=v*d-h*m,g=h*p-v*c,E=m*c-d*p,w=t*_+s*g+o*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=_*C,e[1]=(o*m-v*s)*C,e[2]=(h*s-o*d)*C,e[3]=g*C,e[4]=(v*t-o*p)*C,e[5]=(o*c-h*t)*C,e[6]=E*C,e[7]=(s*p-m*t)*C,e[8]=(d*t-s*c)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,c,d,h){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*d+m*h)+d+e,-o*m,o*p,-o*(-m*d+p*h)+h+t,0,0,1),this}scale(e,t){return ka("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gd.makeScale(e,t)),this}rotate(e){return ka("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gd.makeRotation(-e)),this}translate(e,t){return ka("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};np.prototype.isMatrix3=!0;let ht=np;const Gd=new ht,X0=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Y0=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function SS(){const r={enabled:!0,workingColorSpace:Hc,spaces:{},convert:function(o,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===jt&&(o.r=Nr(o.r),o.g=Nr(o.g),o.b=Nr(o.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===jt&&(o.r=Oa(o.r),o.g=Oa(o.g),o.b=Oa(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===cs?Vc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,d){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return ka("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return ka("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Hc]:{primaries:e,whitePoint:s,transfer:Vc,toXYZ:X0,fromXYZ:Y0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:e,whitePoint:s,transfer:jt,toXYZ:X0,fromXYZ:Y0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),r}const Ct=SS();function Nr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Oa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ma;class yS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ma===void 0&&(ma=Wc("canvas")),ma.width=e.width,ma.height=e.height;const o=ma.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=ma}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wc("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),c=o.data;for(let d=0;d<c.length;d++)c[d]=Nr(c[d]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Nr(t[s]/255)*255):t[s]=Nr(t[s]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let AS=0;class kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=Pr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let d=0,h=o.length;d<h;d++)o[d].isDataTexture?c.push(Wd(o[d].image)):c.push(Wd(o[d]))}else c=Wd(o);s.url=c}return t||(e.images[this.uuid]=s),s}}function Wd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?yS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let ES=0;const Xd=new J;class Yn extends Gs{constructor(e=Yn.DEFAULT_IMAGE,t=Yn.DEFAULT_MAPPING,s=Vi,o=Vi,c=Tn,d=ks,h=Wi,p=hi,m=Yn.DEFAULT_ANISOTROPY,v=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Pr(),this.name="",this.source=new kh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xd).x}get height(){return this.source.getSize(Xd).y}get depth(){return this.source.getSize(Xd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_g)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Of:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case zf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Of:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case zf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=_g;Yn.DEFAULT_ANISOTROPY=1;const ip=class ip{constructor(e=0,t=0,s=0,o=1){this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,c=this.w,d=e.elements;return this.x=d[0]*t+d[4]*s+d[8]*o+d[12]*c,this.y=d[1]*t+d[5]*s+d[9]*o+d[13]*c,this.z=d[2]*t+d[6]*s+d[10]*o+d[14]*c,this.w=d[3]*t+d[7]*s+d[11]*o+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,c;const p=e.elements,m=p[0],v=p[4],_=p[8],g=p[1],E=p[5],w=p[9],C=p[2],y=p[6],S=p[10];if(Math.abs(v-g)<.01&&Math.abs(_-C)<.01&&Math.abs(w-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+C)<.1&&Math.abs(w+y)<.1&&Math.abs(m+E+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const O=(m+1)/2,R=(E+1)/2,D=(S+1)/2,P=(v+g)/4,U=(_+C)/4,M=(w+y)/4;return O>R&&O>D?O<.01?(s=0,o=.707106781,c=.707106781):(s=Math.sqrt(O),o=P/s,c=U/s):R>D?R<.01?(s=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),s=P/o,c=M/o):D<.01?(s=.707106781,o=.707106781,c=0):(c=Math.sqrt(D),s=U/c,o=M/c),this.set(s,o,c,t),this}let B=Math.sqrt((y-w)*(y-w)+(_-C)*(_-C)+(g-v)*(g-v));return Math.abs(B)<.001&&(B=1),this.x=(y-w)/B,this.y=(_-C)/B,this.z=(g-v)/B,this.w=Math.acos((m+E+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ip.prototype.isVector4=!0;let Wt=ip;class MS extends Gs{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:s.depth},c=new Yn(o),d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new kh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ur extends MS{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Tg extends Yn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wS extends Yn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jc=class Jc{constructor(e,t,s,o,c,d,h,p,m,v,_,g,E,w,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,c,d,h,p,m,v,_,g,E,w,C,y)}set(e,t,s,o,c,d,h,p,m,v,_,g,E,w,C,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=s,S[12]=o,S[1]=c,S[5]=d,S[9]=h,S[13]=p,S[2]=m,S[6]=v,S[10]=_,S[14]=g,S[3]=E,S[7]=w,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jc().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,s=e.elements,o=1/xa.setFromMatrixColumn(e,0).length(),c=1/xa.setFromMatrixColumn(e,1).length(),d=1/xa.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*c,t[5]=s[5]*c,t[6]=s[6]*c,t[7]=0,t[8]=s[8]*d,t[9]=s[9]*d,t[10]=s[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,c=e.z,d=Math.cos(s),h=Math.sin(s),p=Math.cos(o),m=Math.sin(o),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const g=d*v,E=d*_,w=h*v,C=h*_;t[0]=p*v,t[4]=-p*_,t[8]=m,t[1]=E+w*m,t[5]=g-C*m,t[9]=-h*p,t[2]=C-g*m,t[6]=w+E*m,t[10]=d*p}else if(e.order==="YXZ"){const g=p*v,E=p*_,w=m*v,C=m*_;t[0]=g+C*h,t[4]=w*h-E,t[8]=d*m,t[1]=d*_,t[5]=d*v,t[9]=-h,t[2]=E*h-w,t[6]=C+g*h,t[10]=d*p}else if(e.order==="ZXY"){const g=p*v,E=p*_,w=m*v,C=m*_;t[0]=g-C*h,t[4]=-d*_,t[8]=w+E*h,t[1]=E+w*h,t[5]=d*v,t[9]=C-g*h,t[2]=-d*m,t[6]=h,t[10]=d*p}else if(e.order==="ZYX"){const g=d*v,E=d*_,w=h*v,C=h*_;t[0]=p*v,t[4]=w*m-E,t[8]=g*m+C,t[1]=p*_,t[5]=C*m+g,t[9]=E*m-w,t[2]=-m,t[6]=h*p,t[10]=d*p}else if(e.order==="YZX"){const g=d*p,E=d*m,w=h*p,C=h*m;t[0]=p*v,t[4]=C-g*_,t[8]=w*_+E,t[1]=_,t[5]=d*v,t[9]=-h*v,t[2]=-m*v,t[6]=E*_+w,t[10]=g-C*_}else if(e.order==="XZY"){const g=d*p,E=d*m,w=h*p,C=h*m;t[0]=p*v,t[4]=-_,t[8]=m*v,t[1]=g*_+C,t[5]=d*v,t[9]=E*_-w,t[2]=w*_-E,t[6]=h*v,t[10]=C*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bS,e,TS)}lookAt(e,t,s){const o=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),is.crossVectors(s,di),is.lengthSq()===0&&(Math.abs(s.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),is.crossVectors(s,di)),is.normalize(),Zl.crossVectors(di,is),o[0]=is.x,o[4]=Zl.x,o[8]=di.x,o[1]=is.y,o[5]=Zl.y,o[9]=di.y,o[2]=is.z,o[6]=Zl.z,o[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,c=this.elements,d=s[0],h=s[4],p=s[8],m=s[12],v=s[1],_=s[5],g=s[9],E=s[13],w=s[2],C=s[6],y=s[10],S=s[14],B=s[3],O=s[7],R=s[11],D=s[15],P=o[0],U=o[4],M=o[8],N=o[12],W=o[1],j=o[5],Q=o[9],z=o[13],te=o[2],V=o[6],oe=o[10],$=o[14],K=o[3],ie=o[7],he=o[11],k=o[15];return c[0]=d*P+h*W+p*te+m*K,c[4]=d*U+h*j+p*V+m*ie,c[8]=d*M+h*Q+p*oe+m*he,c[12]=d*N+h*z+p*$+m*k,c[1]=v*P+_*W+g*te+E*K,c[5]=v*U+_*j+g*V+E*ie,c[9]=v*M+_*Q+g*oe+E*he,c[13]=v*N+_*z+g*$+E*k,c[2]=w*P+C*W+y*te+S*K,c[6]=w*U+C*j+y*V+S*ie,c[10]=w*M+C*Q+y*oe+S*he,c[14]=w*N+C*z+y*$+S*k,c[3]=B*P+O*W+R*te+D*K,c[7]=B*U+O*j+R*V+D*ie,c[11]=B*M+O*Q+R*oe+D*he,c[15]=B*N+O*z+R*$+D*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],c=e[12],d=e[1],h=e[5],p=e[9],m=e[13],v=e[2],_=e[6],g=e[10],E=e[14],w=e[3],C=e[7],y=e[11],S=e[15],B=p*E-m*g,O=h*E-m*_,R=h*g-p*_,D=d*E-m*v,P=d*g-p*v,U=d*_-h*v;return t*(C*B-y*O+S*R)-s*(w*B-y*D+S*P)+o*(w*O-C*D+S*U)-c*(w*R-C*P+y*U)}determinantAffine(){const e=this.elements,t=e[0],s=e[4],o=e[8],c=e[1],d=e[5],h=e[9],p=e[2],m=e[6],v=e[10];return t*(d*v-h*m)-s*(c*v-h*p)+o*(c*m-d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],v=e[8],_=e[9],g=e[10],E=e[11],w=e[12],C=e[13],y=e[14],S=e[15],B=t*h-s*d,O=t*p-o*d,R=t*m-c*d,D=s*p-o*h,P=s*m-c*h,U=o*m-c*p,M=v*C-_*w,N=v*y-g*w,W=v*S-E*w,j=_*y-g*C,Q=_*S-E*C,z=g*S-E*y,te=B*z-O*Q+R*j+D*W-P*N+U*M;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/te;return e[0]=(h*z-p*Q+m*j)*V,e[1]=(o*Q-s*z-c*j)*V,e[2]=(C*U-y*P+S*D)*V,e[3]=(g*P-_*U-E*D)*V,e[4]=(p*W-d*z-m*N)*V,e[5]=(t*z-o*W+c*N)*V,e[6]=(y*R-w*U-S*O)*V,e[7]=(v*U-g*R+E*O)*V,e[8]=(d*Q-h*W+m*M)*V,e[9]=(s*W-t*Q-c*M)*V,e[10]=(w*P-C*R+S*B)*V,e[11]=(_*R-v*P-E*B)*V,e[12]=(h*N-d*j-p*M)*V,e[13]=(t*j-s*N+o*M)*V,e[14]=(C*O-w*D-y*B)*V,e[15]=(v*D-_*O+g*B)*V,this}scale(e){const t=this.elements,s=e.x,o=e.y,c=e.z;return t[0]*=s,t[4]*=o,t[8]*=c,t[1]*=s,t[5]*=o,t[9]*=c,t[2]*=s,t[6]*=o,t[10]*=c,t[3]*=s,t[7]*=o,t[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),c=1-s,d=e.x,h=e.y,p=e.z,m=c*d,v=c*h;return this.set(m*d+s,m*h-o*p,m*p+o*h,0,m*h+o*p,v*h+s,v*p-o*d,0,m*p-o*h,v*p+o*d,c*p*p+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,c,d){return this.set(1,s,c,0,e,1,d,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,c=t._x,d=t._y,h=t._z,p=t._w,m=c+c,v=d+d,_=h+h,g=c*m,E=c*v,w=c*_,C=d*v,y=d*_,S=h*_,B=p*m,O=p*v,R=p*_,D=s.x,P=s.y,U=s.z;return o[0]=(1-(C+S))*D,o[1]=(E+R)*D,o[2]=(w-O)*D,o[3]=0,o[4]=(E-R)*P,o[5]=(1-(g+S))*P,o[6]=(y+B)*P,o[7]=0,o[8]=(w+O)*U,o[9]=(y-B)*U,o[10]=(1-(g+C))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),t.identity(),this;let d=xa.set(o[0],o[1],o[2]).length();const h=xa.set(o[4],o[5],o[6]).length(),p=xa.set(o[8],o[9],o[10]).length();c<0&&(d=-d),Bi.copy(this);const m=1/d,v=1/h,_=1/p;return Bi.elements[0]*=m,Bi.elements[1]*=m,Bi.elements[2]*=m,Bi.elements[4]*=v,Bi.elements[5]*=v,Bi.elements[6]*=v,Bi.elements[8]*=_,Bi.elements[9]*=_,Bi.elements[10]*=_,t.setFromRotationMatrix(Bi),s.x=d,s.y=h,s.z=p,this}makePerspective(e,t,s,o,c,d,h=lr,p=!1){const m=this.elements,v=2*c/(t-e),_=2*c/(s-o),g=(t+e)/(t-e),E=(s+o)/(s-o);let w,C;if(p)w=c/(d-c),C=d*c/(d-c);else if(h===lr)w=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(h===Gc)w=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=_,m[9]=E,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,s,o,c,d,h=lr,p=!1){const m=this.elements,v=2/(t-e),_=2/(s-o),g=-(t+e)/(t-e),E=-(s+o)/(s-o);let w,C;if(p)w=1/(d-c),C=d/(d-c);else if(h===lr)w=-2/(d-c),C=-(d+c)/(d-c);else if(h===Gc)w=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=_,m[9]=0,m[13]=E,m[2]=0,m[6]=0,m[10]=w,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};Jc.prototype.isMatrix4=!0;let Zt=Jc;const xa=new J,Bi=new Zt,bS=new J(0,0,0),TS=new J(1,1,1),is=new J,Zl=new J,di=new J,K0=new Zt,Q0=new Wa;class Hs{constructor(e=0,t=0,s=0,o=Hs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,c=o[0],d=o[4],h=o[8],p=o[1],m=o[5],v=o[9],_=o[2],g=o[6],E=o[10];switch(t){case"XYZ":this._y=Math.asin(mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,E),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return K0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(K0,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Q0.setFromEuler(this),this.setFromQuaternion(Q0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hs.DEFAULT_ORDER="XYZ";class Bh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let CS=0;const q0=new J,ga=new Wa,Ar=new Zt,Jl=new J,To=new J,RS=new J,PS=new Wa,Z0=new J(1,0,0),J0=new J(0,1,0),$0=new J(0,0,1),ex={type:"added"},NS={type:"removed"},va={type:"childadded",child:null},Yd={type:"childremoved",child:null};class Kn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=Pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const e=new J,t=new Hs,s=new Wa,o=new J(1,1,1);function c(){s.setFromEuler(t,!1)}function d(){t.setFromQuaternion(s,void 0,!1)}t._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Zt},normalMatrix:{value:new ht}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ga.setFromAxisAngle(e,t),this.quaternion.multiply(ga),this}rotateOnWorldAxis(e,t){return ga.setFromAxisAngle(e,t),this.quaternion.premultiply(ga),this}rotateX(e){return this.rotateOnAxis(Z0,e)}rotateY(e){return this.rotateOnAxis(J0,e)}rotateZ(e){return this.rotateOnAxis($0,e)}translateOnAxis(e,t){return q0.copy(e).applyQuaternion(this.quaternion),this.position.add(q0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Z0,e)}translateY(e){return this.translateOnAxis(J0,e)}translateZ(e){return this.translateOnAxis($0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ar.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Jl.copy(e):Jl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ar.lookAt(To,Jl,this.up):Ar.lookAt(Jl,To,this.up),this.quaternion.setFromRotationMatrix(Ar),o&&(Ar.extractRotation(o.matrixWorld),ga.setFromRotationMatrix(Ar),this.quaternion.premultiply(ga.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ex),va.child=e,this.dispatchEvent(va),va.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(NS),Yd.child=e,this.dispatchEvent(Yd),Yd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ex),va.child=e,this.dispatchEvent(va),va.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const d=this.children[s].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,e,RS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,PS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,o=e.z,c=this.matrix.elements;c[12]+=t-c[0]*t-c[4]*s-c[8]*o,c[13]+=s-c[1]*t-c[5]*s-c[9]*o,c[14]+=o-c[2]*t-c[6]*s-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t,s=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),t===!0){const c=this.children;for(let d=0,h=c.length;d<h;d++)c[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const _=p[m];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(e.materials,this.material[p]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(e.animations,p))}}if(t){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),v=d(e.images),_=d(e.shapes),g=d(e.skeletons),E=d(e.animations),w=d(e.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),g.length>0&&(s.skeletons=g),E.length>0&&(s.animations=E),w.length>0&&(s.nodes=w)}return s.object=o,s;function d(h){const p=[];for(const m in h){const v=h[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}Kn.DEFAULT_UP=new J(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;let $l=class extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}};const IS={type:"move"};class Kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $l,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $l,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $l,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,c=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const C of e.hand.values()){const y=t.getJointPose(C,s),S=this._getHandJoint(m,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],g=v.position.distanceTo(_.position),E=.02,w=.005;m.inputState.pinching&&g>E+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=E-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=t.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(IS)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new $l;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const Cg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},ec={h:0,s:0,l:0};function Qd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class vt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=s,Ct.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=Ct.workingColorSpace){if(e=Uh(e,1),t=mt(t,0,1),s=mt(s,0,1),t===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+t):s+t-s*t,d=2*s-c;this.r=Qd(d,c,e+1/3),this.g=Qd(d,c,e),this.b=Qd(d,c,e-1/3)}return Ct.colorSpaceToWorking(this,o),this}setStyle(e,t=Mi){function s(c){c!==void 0&&parseFloat(c)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=o[1],h=o[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,t);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,t);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(c,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mi){const s=Cg[e.toLowerCase()];return s!==void 0?this.setHex(s,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}copyLinearToSRGB(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return Ct.workingToColorSpace(Hn.copy(this),e),Math.round(mt(Hn.r*255,0,255))*65536+Math.round(mt(Hn.g*255,0,255))*256+Math.round(mt(Hn.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(Hn.copy(this),t);const s=Hn.r,o=Hn.g,c=Hn.b,d=Math.max(s,o,c),h=Math.min(s,o,c);let p,m;const v=(h+d)/2;if(h===d)p=0,m=0;else{const _=d-h;switch(m=v<=.5?_/(d+h):_/(2-d-h),d){case s:p=(o-c)/_+(o<c?6:0);break;case o:p=(c-s)/_+2;break;case c:p=(s-o)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Mi){Ct.workingToColorSpace(Hn.copy(this),e);const t=Hn.r,s=Hn.g,o=Hn.b;return e!==Mi?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(ec);const s=jo(rs.h,ec.h,t),o=jo(rs.s,ec.s,t),c=jo(rs.l,ec.l,t);return this.setHSL(s,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,c=e.elements;return this.r=c[0]*t+c[3]*s+c[6]*o,this.g=c[1]*t+c[4]*s+c[7]*o,this.b=c[2]*t+c[5]*s+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new vt;vt.NAMES=Cg;let DS=class extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hs,this.environmentIntensity=1,this.environmentRotation=new Hs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};const Oi=new J,Er=new J,qd=new J,Mr=new J,_a=new J,Sa=new J,tx=new J,Zd=new J,Jd=new J,$d=new J,ef=new Wt,tf=new Wt,nf=new Wt;class bi{constructor(e=new J,t=new J,s=new J){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),Oi.subVectors(e,t),o.cross(Oi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,t,s,o,c){Oi.subVectors(o,t),Er.subVectors(s,t),qd.subVectors(e,t);const d=Oi.dot(Oi),h=Oi.dot(Er),p=Oi.dot(qd),m=Er.dot(Er),v=Er.dot(qd),_=d*m-h*h;if(_===0)return c.set(0,0,0),null;const g=1/_,E=(m*p-h*v)*g,w=(d*v-h*p)*g;return c.set(1-E-w,w,E)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Mr)===null?!1:Mr.x>=0&&Mr.y>=0&&Mr.x+Mr.y<=1}static getInterpolation(e,t,s,o,c,d,h,p){return this.getBarycoord(e,t,s,o,Mr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Mr.x),p.addScaledVector(d,Mr.y),p.addScaledVector(h,Mr.z),p)}static getInterpolatedAttribute(e,t,s,o,c,d){return ef.setScalar(0),tf.setScalar(0),nf.setScalar(0),ef.fromBufferAttribute(e,t),tf.fromBufferAttribute(e,s),nf.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(ef,c.x),d.addScaledVector(tf,c.y),d.addScaledVector(nf,c.z),d}static isFrontFacing(e,t,s,o){return Oi.subVectors(s,t),Er.subVectors(e,t),Oi.cross(Er).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),Er.subVectors(this.a,this.b),Oi.cross(Er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,c){return bi.getInterpolation(e,this.a,this.b,this.c,t,s,o,c)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,c=this.c;let d,h;_a.subVectors(o,s),Sa.subVectors(c,s),Zd.subVectors(e,s);const p=_a.dot(Zd),m=Sa.dot(Zd);if(p<=0&&m<=0)return t.copy(s);Jd.subVectors(e,o);const v=_a.dot(Jd),_=Sa.dot(Jd);if(v>=0&&_<=v)return t.copy(o);const g=p*_-v*m;if(g<=0&&p>=0&&v<=0)return d=p/(p-v),t.copy(s).addScaledVector(_a,d);$d.subVectors(e,c);const E=_a.dot($d),w=Sa.dot($d);if(w>=0&&E<=w)return t.copy(c);const C=E*m-p*w;if(C<=0&&m>=0&&w<=0)return h=m/(m-w),t.copy(s).addScaledVector(Sa,h);const y=v*w-E*_;if(y<=0&&_-v>=0&&E-w>=0)return tx.subVectors(c,o),h=(_-v)/(_-v+(E-w)),t.copy(o).addScaledVector(tx,h);const S=1/(y+C+g);return d=C*S,h=g*S,t.copy(s).addScaledVector(_a,d).addScaledVector(Sa,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fr{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(t===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,zi):zi.fromBufferAttribute(c,d),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),tc.copy(s.boundingBox)),tc.applyMatrix4(e.matrixWorld),this.union(tc)}const o=e.children;for(let c=0,d=o.length;c<d;c++)this.expandByObject(o[c],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),nc.subVectors(this.max,Co),ya.subVectors(e.a,Co),Aa.subVectors(e.b,Co),Ea.subVectors(e.c,Co),ss.subVectors(Aa,ya),as.subVectors(Ea,Aa),Ts.subVectors(ya,Ea);let t=[0,-ss.z,ss.y,0,-as.z,as.y,0,-Ts.z,Ts.y,ss.z,0,-ss.x,as.z,0,-as.x,Ts.z,0,-Ts.x,-ss.y,ss.x,0,-as.y,as.x,0,-Ts.y,Ts.x,0];return!rf(t,ya,Aa,Ea,nc)||(t=[1,0,0,0,1,0,0,0,1],!rf(t,ya,Aa,Ea,nc))?!1:(ic.crossVectors(ss,as),t=[ic.x,ic.y,ic.z],rf(t,ya,Aa,Ea,nc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wr=[new J,new J,new J,new J,new J,new J,new J,new J],zi=new J,tc=new fr,ya=new J,Aa=new J,Ea=new J,ss=new J,as=new J,Ts=new J,Co=new J,nc=new J,ic=new J,Cs=new J;function rf(r,e,t,s,o){for(let c=0,d=r.length-3;c<=d;c+=3){Cs.fromArray(r,c);const h=o.x*Math.abs(Cs.x)+o.y*Math.abs(Cs.y)+o.z*Math.abs(Cs.z),p=e.dot(Cs),m=t.dot(Cs),v=s.dot(Cs);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>h)return!1}return!0}const pn=new J,rc=new Nt;let LS=0;class pi extends Gs{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=gh,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)rc.fromBufferAttribute(this,t),rc.applyMatrix3(e),this.setXY(t,rc.x,rc.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=ji(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Ht(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),s=Ht(s,this.array),o=Ht(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,c){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),s=Ht(s,this.array),o=Ht(o,this.array),c=Ht(c,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gh&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Rg extends pi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Pg extends pi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Cn extends pi{constructor(e,t,s){super(new Float32Array(e),t,s)}}const FS=new fr,Ro=new J,sf=new J;class hs{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):FS.setFromPoints(e).getCenter(s);let o=0;for(let c=0,d=e.length;c<d;c++)o=Math.max(o,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const t=Ro.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Ro,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(sf)),this.expandByPoint(Ro.copy(e.center).sub(sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let US=0;const Ai=new Zt,af=new Kn,Ma=new J,fi=new fr,Po=new fr,bn=new J;class ai extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=Pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($_(e)?Pg:Rg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ht().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,t,s){return Ai.makeTranslation(e,t,s),this.applyMatrix4(Ai),this}scale(e,t,s){return Ai.makeScale(e,t,s),this.applyMatrix4(Ai),this}lookAt(e){return af.lookAt(e),af.updateMatrix(),this.applyMatrix4(af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ma).negate(),this.translate(Ma.x,Ma.y,Ma.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,c=e.length;o<c;o++){const d=e[o];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Cn(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const c=e[o];t.setXYZ(o,c.x,c.y,c.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const c=t[s];fi.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const s=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let c=0,d=t.length;c<d;c++){const h=t[c];Po.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(fi.min,Po.min),fi.expandByPoint(bn),bn.addVectors(fi.max,Po.max),fi.expandByPoint(bn)):(fi.expandByPoint(Po.min),fi.expandByPoint(Po.max))}fi.getCenter(s);let o=0;for(let c=0,d=e.count;c<d;c++)bn.fromBufferAttribute(e,c),o=Math.max(o,s.distanceToSquared(bn));if(t)for(let c=0,d=t.length;c<d;c++){const h=t[c],p=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)bn.fromBufferAttribute(h,m),p&&(Ma.fromBufferAttribute(e,m),bn.add(Ma)),o=Math.max(o,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,c=t.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new pi(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],p=[];for(let M=0;M<s.count;M++)h[M]=new J,p[M]=new J;const m=new J,v=new J,_=new J,g=new Nt,E=new Nt,w=new Nt,C=new J,y=new J;function S(M,N,W){m.fromBufferAttribute(s,M),v.fromBufferAttribute(s,N),_.fromBufferAttribute(s,W),g.fromBufferAttribute(c,M),E.fromBufferAttribute(c,N),w.fromBufferAttribute(c,W),v.sub(m),_.sub(m),E.sub(g),w.sub(g);const j=1/(E.x*w.y-w.x*E.y);isFinite(j)&&(C.copy(v).multiplyScalar(w.y).addScaledVector(_,-E.y).multiplyScalar(j),y.copy(_).multiplyScalar(E.x).addScaledVector(v,-w.x).multiplyScalar(j),h[M].add(C),h[N].add(C),h[W].add(C),p[M].add(y),p[N].add(y),p[W].add(y))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let M=0,N=B.length;M<N;++M){const W=B[M],j=W.start,Q=W.count;for(let z=j,te=j+Q;z<te;z+=3)S(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const O=new J,R=new J,D=new J,P=new J;function U(M){D.fromBufferAttribute(o,M),P.copy(D);const N=h[M];O.copy(N),O.sub(D.multiplyScalar(D.dot(N))).normalize(),R.crossVectors(P,N);const j=R.dot(p[M])<0?-1:1;d.setXYZW(M,O.x,O.y,O.z,j)}for(let M=0,N=B.length;M<N;++M){const W=B[M],j=W.start,Q=W.count;for(let z=j,te=j+Q;z<te;z+=3)U(e.getX(z+0)),U(e.getX(z+1)),U(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==t.count)s=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let g=0,E=s.count;g<E;g++)s.setXYZ(g,0,0,0);const o=new J,c=new J,d=new J,h=new J,p=new J,m=new J,v=new J,_=new J;if(e)for(let g=0,E=e.count;g<E;g+=3){const w=e.getX(g+0),C=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(t,w),c.fromBufferAttribute(t,C),d.fromBufferAttribute(t,y),v.subVectors(d,c),_.subVectors(o,c),v.cross(_),h.fromBufferAttribute(s,w),p.fromBufferAttribute(s,C),m.fromBufferAttribute(s,y),h.add(v),p.add(v),m.add(v),s.setXYZ(w,h.x,h.y,h.z),s.setXYZ(C,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let g=0,E=t.count;g<E;g+=3)o.fromBufferAttribute(t,g+0),c.fromBufferAttribute(t,g+1),d.fromBufferAttribute(t,g+2),v.subVectors(d,c),_.subVectors(o,c),v.cross(_),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,p){const m=h.array,v=h.itemSize,_=h.normalized,g=new m.constructor(p.length*v);let E=0,w=0;for(let C=0,y=p.length;C<y;C++){h.isInterleavedBufferAttribute?E=p[C]*h.data.stride+h.offset:E=p[C]*v;for(let S=0;S<v;S++)g[w++]=m[E++]}return new pi(g,v,_)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ai,s=this.index.array,o=this.attributes;for(const h in o){const p=o[h],m=e(p,s);t.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let v=0,_=m.length;v<_;v++){const g=m[v],E=e(g,s);p.push(E)}t.morphAttributes[h]=p}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let _=0,g=m.length;_<g;_++){const E=m[_];v.push(E.toJSON(e.data))}v.length>0&&(o[p]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(t))}const c=e.morphAttributes;for(const m in c){const v=[],_=c[m];for(let g=0,E=_.length;g<E;g++)v.push(_[g].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gh,this.updateRanges=[],this.version=0,this.uuid=Pr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,s){e*=this.stride,s*=t.stride;for(let o=0,c=this.stride;o<c;o++)this.array[e+o]=t.array[s+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(t,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wn=new J;class us{constructor(e,t,s,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=s,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,s=this.data.count;t<s;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix4(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Wn.fromBufferAttribute(this,t),Wn.applyNormalMatrix(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Wn.fromBufferAttribute(this,t),Wn.transformDirection(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}getComponent(e,t){let s=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(s=ji(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Ht(s,this.array)),this.data.array[e*this.data.stride+this.offset+t]=s,this}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ji(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ji(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ji(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ji(t,this.array)),t}setXY(e,t,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),s=Ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this}setXYZ(e,t,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),s=Ht(s,this.array),o=Ht(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=o,this}setXYZW(e,t,s,o,c){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),s=Ht(s,this.array),o=Ht(o,this.array),c=Ht(c,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=o,this.data.array[e+3]=c,this}clone(e){if(e===void 0){Xc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const o=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)t.push(this.data.array[o+c])}return new pi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new us(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Xc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const o=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)t.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let BS=0;class Ko extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=Pr(),this.name="",this.type="Material",this.blending=Ua,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pf,this.blendDst=Nf,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pa,this.stencilZFail=pa,this.stencilZPass=pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector2&&s&&s.isVector2||o&&o.isEuler&&s&&s.isEuler||o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ua&&(s.blending=this.blending),this.side!==fs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Pf&&(s.blendSrc=this.blendSrc),this.blendDst!==Nf&&(s.blendDst=this.blendDst),this.blendEquation!==Ls&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ja&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==j0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pa&&(s.stencilFail=this.stencilFail),this.stencilZFail!==pa&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==pa&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}if(t){const c=o(e.textures),d=o(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new vt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Nt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let c=0;c!==o;++c)s[c]=t[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const br=new J,of=new J,sc=new J,os=new J,lf=new J,ac=new J,cf=new J;class Oh{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,br)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=br.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(br.copy(this.origin).addScaledVector(this.direction,t),br.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){of.copy(e).add(t).multiplyScalar(.5),sc.copy(t).sub(e).normalize(),os.copy(this.origin).sub(of);const c=e.distanceTo(t)*.5,d=-this.direction.dot(sc),h=os.dot(this.direction),p=-os.dot(sc),m=os.lengthSq(),v=Math.abs(1-d*d);let _,g,E,w;if(v>0)if(_=d*p-h,g=d*h-p,w=c*v,_>=0)if(g>=-w)if(g<=w){const C=1/v;_*=C,g*=C,E=_*(_+d*g+2*h)+g*(d*_+g+2*p)+m}else g=c,_=Math.max(0,-(d*g+h)),E=-_*_+g*(g+2*p)+m;else g=-c,_=Math.max(0,-(d*g+h)),E=-_*_+g*(g+2*p)+m;else g<=-w?(_=Math.max(0,-(-d*c+h)),g=_>0?-c:Math.min(Math.max(-c,-p),c),E=-_*_+g*(g+2*p)+m):g<=w?(_=0,g=Math.min(Math.max(-c,-p),c),E=g*(g+2*p)+m):(_=Math.max(0,-(d*c+h)),g=_>0?c:Math.min(Math.max(-c,-p),c),E=-_*_+g*(g+2*p)+m);else g=d>0?-c:c,_=Math.max(0,-(d*g+h)),E=-_*_+g*(g+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(of).addScaledVector(sc,g),E}intersectSphere(e,t){br.subVectors(e.center,this.origin);const s=br.dot(this.direction),o=br.dot(br)-s*s,c=e.radius*e.radius;if(o>c)return null;const d=Math.sqrt(c-o),h=s-d,p=s+d;return p<0?null:h<0?this.at(p,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,c,d,h,p;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return m>=0?(s=(e.min.x-g.x)*m,o=(e.max.x-g.x)*m):(s=(e.max.x-g.x)*m,o=(e.min.x-g.x)*m),v>=0?(c=(e.min.y-g.y)*v,d=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,d=(e.min.y-g.y)*v),s>d||c>o||((c>s||isNaN(s))&&(s=c),(d<o||isNaN(o))&&(o=d),_>=0?(h=(e.min.z-g.z)*_,p=(e.max.z-g.z)*_):(h=(e.max.z-g.z)*_,p=(e.min.z-g.z)*_),s>p||h>o)||((h>s||s!==s)&&(s=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,br)!==null}intersectTriangle(e,t,s,o,c){lf.subVectors(t,e),ac.subVectors(s,e),cf.crossVectors(lf,ac);let d=this.direction.dot(cf),h;if(d>0){if(o)return null;h=1}else if(d<0)h=-1,d=-d;else return null;os.subVectors(this.origin,e);const p=h*this.direction.dot(ac.crossVectors(os,ac));if(p<0)return null;const m=h*this.direction.dot(lf.cross(os));if(m<0||p+m>d)return null;const v=-h*os.dot(cf);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fs extends Ko{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hs,this.combine=dg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nx=new Zt,Rs=new Oh,oc=new hs,ix=new J,lc=new J,cc=new J,uc=new J,uf=new J,dc=new J,rx=new J,fc=new J;class Fn extends Kn{constructor(e=new ai,t=new Fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){dc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=h[p],_=c[p];v!==0&&(uf.fromBufferAttribute(_,e),d?dc.addScaledVector(uf,v):dc.addScaledVector(uf.sub(t),v))}t.add(dc)}return t}raycast(e,t){const s=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),oc.copy(s.boundingSphere),oc.applyMatrix4(c),Rs.copy(e.ray).recast(e.near),!(oc.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(oc,ix)===null||Rs.origin.distanceToSquared(ix)>(e.far-e.near)**2))&&(nx.copy(c).invert(),Rs.copy(e.ray).applyMatrix4(nx),!(s.boundingBox!==null&&Rs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,s){let o;const c=this.geometry,d=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,g=c.groups,E=c.drawRange;if(h!==null)if(Array.isArray(d))for(let w=0,C=g.length;w<C;w++){const y=g[w],S=d[y.materialIndex],B=Math.max(y.start,E.start),O=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let R=B,D=O;R<D;R+=3){const P=h.getX(R),U=h.getX(R+1),M=h.getX(R+2);o=hc(this,S,e,s,m,v,_,P,U,M),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const w=Math.max(0,E.start),C=Math.min(h.count,E.start+E.count);for(let y=w,S=C;y<S;y+=3){const B=h.getX(y),O=h.getX(y+1),R=h.getX(y+2);o=hc(this,d,e,s,m,v,_,B,O,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let w=0,C=g.length;w<C;w++){const y=g[w],S=d[y.materialIndex],B=Math.max(y.start,E.start),O=Math.min(p.count,Math.min(y.start+y.count,E.start+E.count));for(let R=B,D=O;R<D;R+=3){const P=R,U=R+1,M=R+2;o=hc(this,S,e,s,m,v,_,P,U,M),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const w=Math.max(0,E.start),C=Math.min(p.count,E.start+E.count);for(let y=w,S=C;y<S;y+=3){const B=y,O=y+1,R=y+2;o=hc(this,d,e,s,m,v,_,B,O,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function OS(r,e,t,s,o,c,d,h){let p;if(e.side===si?p=s.intersectTriangle(d,c,o,!0,h):p=s.intersectTriangle(o,c,d,e.side===fs,h),p===null)return null;fc.copy(h),fc.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(fc);return m<t.near||m>t.far?null:{distance:m,point:fc.clone(),object:r}}function hc(r,e,t,s,o,c,d,h,p,m){r.getVertexPosition(h,lc),r.getVertexPosition(p,cc),r.getVertexPosition(m,uc);const v=OS(r,e,t,s,lc,cc,uc,rx);if(v){const _=new J;bi.getBarycoord(rx,lc,cc,uc,_),o&&(v.uv=bi.getInterpolatedAttribute(o,h,p,m,_,new Nt)),c&&(v.uv1=bi.getInterpolatedAttribute(c,h,p,m,_,new Nt)),d&&(v.normal=bi.getInterpolatedAttribute(d,h,p,m,_,new J),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:h,b:p,c:m,normal:new J,materialIndex:0};bi.getNormal(lc,cc,uc,g.normal),v.face=g,v.barycoord=_}return v}class zh extends Yn{constructor(e=null,t=1,s=1,o,c,d,h,p,m=Un,v=Un,_,g){super(null,d,h,p,m,v,o,c,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sx extends pi{constructor(e,t,s,o=1){super(e,t,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const wa=new Zt,ax=new Zt,pc=[],ox=new fr,zS=new Zt,No=new Fn,Io=new hs;class jS extends Fn{constructor(e,t,s){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sx(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<s;o++)this.setMatrixAt(o,zS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,wa),ox.copy(e.boundingBox).applyMatrix4(wa),this.boundingBox.union(ox)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,wa),Io.copy(e.boundingSphere).applyMatrix4(wa),this.boundingSphere.union(Io)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const s=t.morphTargetInfluences,o=this.morphTexture.source.data.data,c=s.length+1,d=e*c+1;for(let h=0;h<s.length;h++)s[h]=o[d+h]}raycast(e,t){const s=this.matrixWorld,o=this.count;if(No.geometry=this.geometry,No.material=this.material,No.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Io.copy(this.boundingSphere),Io.applyMatrix4(s),e.ray.intersectsSphere(Io)!==!1))for(let c=0;c<o;c++){this.getMatrixAt(c,wa),ax.multiplyMatrices(s,wa),No.matrixWorld=ax,No.raycast(e,pc);for(let d=0,h=pc.length;d<h;d++){const p=pc[d];p.instanceId=c,p.object=this,t.push(p)}pc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new sx(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const s=t.morphTargetInfluences,o=s.length+1;this.morphTexture===null&&(this.morphTexture=new zh(new Float32Array(o*this.count),o,this.count,eu,Gi));const c=this.morphTexture.source.data.data;let d=0;for(let m=0;m<s.length;m++)d+=s[m];const h=this.geometry.morphTargetsRelative?1:1-d,p=o*e;return c[p]=h,c.set(s,p+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const df=new J,HS=new J,VS=new ht;class Ds{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=df.subVectors(s,t).cross(HS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){const o=e.delta(df),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:t.copy(e.start).addScaledVector(o,d)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||VS.getNormalMatrix(e),o=this.coplanarPoint(df).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new hs,GS=new Nt(.5,.5),mc=new J;class Ng{constructor(e=new Ds,t=new Ds,s=new Ds,o=new Ds,c=new Ds,d=new Ds){this.planes=[e,t,s,o,c,d]}set(e,t,s,o,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(s),h[3].copy(o),h[4].copy(c),h[5].copy(d),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=lr,s=!1){const o=this.planes,c=e.elements,d=c[0],h=c[1],p=c[2],m=c[3],v=c[4],_=c[5],g=c[6],E=c[7],w=c[8],C=c[9],y=c[10],S=c[11],B=c[12],O=c[13],R=c[14],D=c[15];if(o[0].setComponents(m-d,E-v,S-w,D-B).normalize(),o[1].setComponents(m+d,E+v,S+w,D+B).normalize(),o[2].setComponents(m+h,E+_,S+C,D+O).normalize(),o[3].setComponents(m-h,E-_,S-C,D-O).normalize(),s)o[4].setComponents(p,g,y,R).normalize(),o[5].setComponents(m-p,E-g,S-y,D-R).normalize();else if(o[4].setComponents(m-p,E-g,S-y,D-R).normalize(),t===lr)o[5].setComponents(m+p,E+g,S+y,D+R).normalize();else if(t===Gc)o[5].setComponents(p,g,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){Ps.center.set(0,0,0);const t=GS.distanceTo(e.center);return Ps.radius=.7071067811865476+t,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let c=0;c<6;c++)if(t[c].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(mc.x=o.normal.x>0?e.max.x:e.min.x,mc.y=o.normal.y>0?e.max.y:e.min.y,mc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ig extends Ko{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yc=new J,Kc=new J,lx=new Zt,Do=new Oh,xc=new hs,ff=new J,cx=new J;class WS extends Kn{constructor(e=new ai,t=new Ig){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,c=t.count;o<c;o++)Yc.fromBufferAttribute(t,o-1),Kc.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=Yc.distanceTo(Kc);e.setAttribute("lineDistance",new Cn(s,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),xc.copy(s.boundingSphere),xc.applyMatrix4(o),xc.radius+=c,e.ray.intersectsSphere(xc)===!1)return;lx.copy(o).invert(),Do.copy(e.ray).applyMatrix4(lx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const E=Math.max(0,d.start),w=Math.min(v.count,d.start+d.count);for(let C=E,y=w-1;C<y;C+=m){const S=v.getX(C),B=v.getX(C+1),O=gc(this,e,Do,p,S,B,C);O&&t.push(O)}if(this.isLineLoop){const C=v.getX(w-1),y=v.getX(E),S=gc(this,e,Do,p,C,y,w-1);S&&t.push(S)}}else{const E=Math.max(0,d.start),w=Math.min(g.count,d.start+d.count);for(let C=E,y=w-1;C<y;C+=m){const S=gc(this,e,Do,p,C,C+1,C);S&&t.push(S)}if(this.isLineLoop){const C=gc(this,e,Do,p,w-1,E,w-1);C&&t.push(C)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function gc(r,e,t,s,o,c,d){const h=r.geometry.attributes.position;if(Yc.fromBufferAttribute(h,o),Kc.fromBufferAttribute(h,c),t.distanceSqToSegment(Yc,Kc,ff,cx)>s)return;ff.applyMatrix4(r.matrixWorld);const m=e.ray.origin.distanceTo(ff);if(!(m<e.near||m>e.far))return{distance:m,point:cx.clone().applyMatrix4(r.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:r}}const ux=new J,dx=new J;class XS extends WS{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let o=0,c=t.count;o<c;o+=2)ux.fromBufferAttribute(t,o),dx.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+ux.distanceTo(dx);e.setAttribute("lineDistance",new Cn(s,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dg extends Yn{constructor(e=[],t=zs,s,o,c,d,h,p,m,v){super(e,t,s,o,c,d,h,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Va extends Yn{constructor(e,t,s=dr,o,c,d,h=Un,p=Un,m,v=Lr,_=1){if(v!==Lr&&v!==Bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,o,c,d,h,p,v,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class YS extends Va{constructor(e,t=dr,s=zs,o,c,d=Un,h=Un,p,m=Lr){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,t,s,o,c,d,h,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Lg extends Yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Cr extends ai{constructor(e=1,t=1,s=1,o=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:c,depthSegments:d};const h=this;o=Math.floor(o),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],v=[],_=[];let g=0,E=0;w("z","y","x",-1,-1,s,t,e,d,c,0),w("z","y","x",1,-1,s,t,-e,d,c,1),w("x","z","y",1,1,e,s,t,o,d,2),w("x","z","y",1,-1,e,s,-t,o,d,3),w("x","y","z",1,-1,e,t,s,o,c,4),w("x","y","z",-1,-1,e,t,-s,o,c,5),this.setIndex(p),this.setAttribute("position",new Cn(m,3)),this.setAttribute("normal",new Cn(v,3)),this.setAttribute("uv",new Cn(_,2));function w(C,y,S,B,O,R,D,P,U,M,N){const W=R/U,j=D/M,Q=R/2,z=D/2,te=P/2,V=U+1,oe=M+1;let $=0,K=0;const ie=new J;for(let he=0;he<oe;he++){const k=he*j-z;for(let ee=0;ee<V;ee++){const Oe=ee*W-Q;ie[C]=Oe*B,ie[y]=k*O,ie[S]=te,m.push(ie.x,ie.y,ie.z),ie[C]=0,ie[y]=0,ie[S]=P>0?1:-1,v.push(ie.x,ie.y,ie.z),_.push(ee/U),_.push(1-he/M),$+=1}}for(let he=0;he<M;he++)for(let k=0;k<U;k++){const ee=g+k+V*he,Oe=g+k+V*(he+1),Ke=g+(k+1)+V*(he+1),Ve=g+(k+1)+V*he;p.push(ee,Oe,Ve),p.push(Oe,Ke,Ve),K+=6}h.addGroup(E,K,N),E+=K,g+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class jh extends ai{constructor(e=1,t=1,s=1,o=32,c=1,d=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:o,heightSegments:c,openEnded:d,thetaStart:h,thetaLength:p};const m=this;o=Math.floor(o),c=Math.floor(c);const v=[],_=[],g=[],E=[];let w=0;const C=[],y=s/2;let S=0;B(),d===!1&&(e>0&&O(!0),t>0&&O(!1)),this.setIndex(v),this.setAttribute("position",new Cn(_,3)),this.setAttribute("normal",new Cn(g,3)),this.setAttribute("uv",new Cn(E,2));function B(){const R=new J,D=new J;let P=0;const U=(t-e)/s;for(let M=0;M<=c;M++){const N=[],W=M/c,j=W*(t-e)+e;for(let Q=0;Q<=o;Q++){const z=Q/o,te=z*p+h,V=Math.sin(te),oe=Math.cos(te);D.x=j*V,D.y=-W*s+y,D.z=j*oe,_.push(D.x,D.y,D.z),R.set(V,U,oe).normalize(),g.push(R.x,R.y,R.z),E.push(z,1-W),N.push(w++)}C.push(N)}for(let M=0;M<o;M++)for(let N=0;N<c;N++){const W=C[N][M],j=C[N+1][M],Q=C[N+1][M+1],z=C[N][M+1];(e>0||N!==0)&&(v.push(W,j,z),P+=3),(t>0||N!==c-1)&&(v.push(j,Q,z),P+=3)}m.addGroup(S,P,0),S+=P}function O(R){const D=w,P=new Nt,U=new J;let M=0;const N=R===!0?e:t,W=R===!0?1:-1;for(let Q=1;Q<=o;Q++)_.push(0,y*W,0),g.push(0,W,0),E.push(.5,.5),w++;const j=w;for(let Q=0;Q<=o;Q++){const te=Q/o*p+h,V=Math.cos(te),oe=Math.sin(te);U.x=N*oe,U.y=y*W,U.z=N*V,_.push(U.x,U.y,U.z),g.push(0,W,0),P.x=V*.5+.5,P.y=oe*.5*W+.5,E.push(P.x,P.y),w++}for(let Q=0;Q<o;Q++){const z=D+Q,te=j+Q;R===!0?v.push(te,te+1,z):v.push(te+1,te,z),M+=3}m.addGroup(S,M,R===!0?1:2),S+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const vc=new J,_c=new J,hf=new J,Sc=new bi;class fx extends ai{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),c=Math.cos(Ba*t),d=e.getIndex(),h=e.getAttribute("position"),p=d?d.count:h.count,m=[0,0,0],v=["a","b","c"],_=new Array(3),g={},E=[];for(let w=0;w<p;w+=3){d?(m[0]=d.getX(w),m[1]=d.getX(w+1),m[2]=d.getX(w+2)):(m[0]=w,m[1]=w+1,m[2]=w+2);const{a:C,b:y,c:S}=Sc;if(C.fromBufferAttribute(h,m[0]),y.fromBufferAttribute(h,m[1]),S.fromBufferAttribute(h,m[2]),Sc.getNormal(hf),_[0]=`${Math.round(C.x*o)},${Math.round(C.y*o)},${Math.round(C.z*o)}`,_[1]=`${Math.round(y.x*o)},${Math.round(y.y*o)},${Math.round(y.z*o)}`,_[2]=`${Math.round(S.x*o)},${Math.round(S.y*o)},${Math.round(S.z*o)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let B=0;B<3;B++){const O=(B+1)%3,R=_[B],D=_[O],P=Sc[v[B]],U=Sc[v[O]],M=`${R}_${D}`,N=`${D}_${R}`;N in g&&g[N]?(hf.dot(g[N].normal)<=c&&(E.push(P.x,P.y,P.z),E.push(U.x,U.y,U.z)),g[N]=null):M in g||(g[M]={index0:m[B],index1:m[O],normal:hf.clone()})}}for(const w in g)if(g[w]){const{index0:C,index1:y}=g[w];vc.fromBufferAttribute(h,C),_c.fromBufferAttribute(h,y),E.push(vc.x,vc.y,vc.z),E.push(_c.x,_c.y,_c.z)}this.setAttribute("position",new Cn(E,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Qo extends ai{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const c=e/2,d=t/2,h=Math.floor(s),p=Math.floor(o),m=h+1,v=p+1,_=e/h,g=t/p,E=[],w=[],C=[],y=[];for(let S=0;S<v;S++){const B=S*g-d;for(let O=0;O<m;O++){const R=O*_-c;w.push(R,-B,0),C.push(0,0,1),y.push(O/h),y.push(1-S/p)}}for(let S=0;S<p;S++)for(let B=0;B<h;B++){const O=B+m*S,R=B+m*(S+1),D=B+1+m*(S+1),P=B+1+m*S;E.push(O,R,P),E.push(R,D,P)}this.setIndex(E),this.setAttribute("position",new Cn(w,3)),this.setAttribute("normal",new Cn(C,3)),this.setAttribute("uv",new Cn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.widthSegments,e.heightSegments)}}class KS extends ai{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],s=new Set,o=new J,c=new J;if(e.index!==null){const d=e.attributes.position,h=e.index;let p=e.groups;p.length===0&&(p=[{start:0,count:h.count,materialIndex:0}]);for(let m=0,v=p.length;m<v;++m){const _=p[m],g=_.start,E=_.count;for(let w=g,C=g+E;w<C;w+=3)for(let y=0;y<3;y++){const S=h.getX(w+y),B=h.getX(w+(y+1)%3);o.fromBufferAttribute(d,S),c.fromBufferAttribute(d,B),hx(o,c,s)===!0&&(t.push(o.x,o.y,o.z),t.push(c.x,c.y,c.z))}}}else{const d=e.attributes.position;for(let h=0,p=d.count/3;h<p;h++)for(let m=0;m<3;m++){const v=3*h+m,_=3*h+(m+1)%3;o.fromBufferAttribute(d,v),c.fromBufferAttribute(d,_),hx(o,c,s)===!0&&(t.push(o.x,o.y,o.z),t.push(c.x,c.y,c.z))}}this.setAttribute("position",new Cn(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function hx(r,e,t){const s=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,o=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(s)===!0||t.has(o)===!0?!1:(t.add(s),t.add(o),!0)}function Ga(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];if(px(o))o.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone();else if(Array.isArray(o))if(px(o[0])){const c=[];for(let d=0,h=o.length;d<h;d++)c[d]=o[d].clone();e[t][s]=c}else e[t][s]=o.slice();else e[t][s]=o}}return e}function Xn(r){const e={};for(let t=0;t<r.length;t++){const s=Ga(r[t]);for(const o in s)e[o]=s[o]}return e}function px(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function QS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Fg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const Hh={clone:Ga,merge:Xn};var qS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends Ko{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qS,this.fragmentShader=ZS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ga(e.uniforms),this.uniformsGroups=QS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?t.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[o]={type:"m4",value:d.toArray()}:t.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(this.uniforms[s]={},o.type){case"t":this.uniforms[s].value=t[o.value]||null;break;case"c":this.uniforms[s].value=new vt().setHex(o.value);break;case"v2":this.uniforms[s].value=new Nt().fromArray(o.value);break;case"v3":this.uniforms[s].value=new J().fromArray(o.value);break;case"v4":this.uniforms[s].value=new Wt().fromArray(o.value);break;case"m3":this.uniforms[s].value=new ht().fromArray(o.value);break;case"m4":this.uniforms[s].value=new Zt().fromArray(o.value);break;default:this.uniforms[s].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class JS extends Ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $S extends Ko{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=W_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ey extends Ko{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yc=new J,Ac=new Wa,nr=new J;class Ug extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=lr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yc,Ac,nr),nr.x===1&&nr.y===1&&nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yc,Ac,nr.set(1,1,1)).invert()}updateWorldMatrix(e,t,s=!1){super.updateWorldMatrix(e,t,s),this.matrixWorld.decompose(yc,Ac,nr),nr.x===1&&nr.y===1&&nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yc,Ac,nr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ls=new J,mx=new Nt,xx=new Nt;class wi extends Ug{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,mx,xx),t.subVectors(xx,mx)}setViewOffset(e,t,s,o,c,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ba*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,c=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*o/p,t-=d.offsetY*s/m,o*=d.width/p,s*=d.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class kg extends Ug{constructor(e=-1,t=1,s=1,o=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=s-e,d=s+e,h=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ty extends ai{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const ba=-90,Ta=1;class ny extends Kn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new wi(ba,Ta,e,t);o.layers=this.layers,this.add(o);const c=new wi(ba,Ta,e,t);c.layers=this.layers,this.add(c);const d=new wi(ba,Ta,e,t);d.layers=this.layers,this.add(d);const h=new wi(ba,Ta,e,t);h.layers=this.layers,this.add(h);const p=new wi(ba,Ta,e,t);p.layers=this.layers,this.add(p);const m=new wi(ba,Ta,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,c,d,h,p]=t;for(const m of t)this.remove(m);if(e===lr)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Gc)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,p,m,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(s,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(s,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(s,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(s,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(_,g,E),e.xr.enabled=w,s.texture.needsPMREMUpdate=!0}}class iy extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class vh extends kS{constructor(e,t,s=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const gx=new Zt;class ry{constructor(e,t,s=0,o=1/0){this.ray=new Oh(e,t),this.near=s,this.far=o,this.camera=null,this.layers=new Bh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Pt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gx.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gx),this}intersectObject(e,t=!0,s=[]){return _h(e,this,s,t),s.sort(vx),s}intersectObjects(e,t=!0,s=[]){for(let o=0,c=e.length;o<c;o++)_h(e[o],this,s,t);return s.sort(vx),s}}function vx(r,e){return r.distance-e.distance}function _h(r,e,t,s){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(o=!1),o===!0&&s===!0){const c=r.children;for(let d=0,h=c.length;d<h;d++)_h(c[d],e,t,!0)}}const rp=class rp{constructor(e,t,s,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,o){const c=this.elements;return c[0]=e,c[2]=t,c[1]=s,c[3]=o,this}};rp.prototype.isMatrix2=!0;let _x=rp;const Sx=new J,Ec=new J,Ca=new J,Ra=new J,pf=new J,sy=new J,ay=new J;class oy{constructor(e=new J,t=new J){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Sx.subVectors(e,this.start),Ec.subVectors(this.end,this.start);const s=Ec.dot(Ec);if(s===0)return 0;let c=Ec.dot(Sx)/s;return t&&(c=mt(c,0,1)),c}closestPointToPoint(e,t,s){const o=this.closestPointToPointParameter(e,t);return this.delta(s).multiplyScalar(o).add(this.start)}distanceSqToLine3(e,t=sy,s=ay){const o=10000000000000001e-32;let c,d;const h=this.start,p=e.start,m=this.end,v=e.end;Ca.subVectors(m,h),Ra.subVectors(v,p),pf.subVectors(h,p);const _=Ca.dot(Ca),g=Ra.dot(Ra),E=Ra.dot(pf);if(_<=o&&g<=o)return t.copy(h),s.copy(p),t.sub(s),t.dot(t);if(_<=o)c=0,d=E/g,d=mt(d,0,1);else{const w=Ca.dot(pf);if(g<=o)d=0,c=mt(-w/_,0,1);else{const C=Ca.dot(Ra),y=_*g-C*C;y!==0?c=mt((C*E-w*g)/y,0,1):c=0,d=(C*c+E)/g,d<0?(d=0,c=mt(-w/_,0,1)):d>1&&(d=1,c=mt((C-w)/_,0,1))}}return t.copy(h).addScaledVector(Ca,c),s.copy(p).addScaledVector(Ra,d),t.distanceToSquared(s)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function yx(r,e,t,s){const o=ly(s);switch(t){case Mg:return r*e;case eu:return r*e/o.components*o.byteLength;case Nh:return r*e/o.components*o.byteLength;case js:return r*e*2/o.components*o.byteLength;case Ih:return r*e*2/o.components*o.byteLength;case wg:return r*e*3/o.components*o.byteLength;case Wi:return r*e*4/o.components*o.byteLength;case Dh:return r*e*4/o.components*o.byteLength;case Fc:case Uc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kc:case Bc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hf:case Gf:return Math.max(r,16)*Math.max(e,8)/4;case jf:case Vf:return Math.max(r,8)*Math.max(e,8)/2;case Wf:case Xf:case Kf:case Qf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Yf:case zc:case qf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case $f:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case eh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case th:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case nh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ih:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case rh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case sh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ah:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case oh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case lh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ch:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case uh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case dh:case fh:case hh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ph:case mh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case jc:case xh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ly(r){switch(r){case hi:case Sg:return{byteLength:1,components:1};case Vo:case yg:case Dr:return{byteLength:2,components:1};case Rh:case Ph:return{byteLength:2,components:4};case dr:case Ch:case Gi:return{byteLength:4,components:1};case Ag:case Eg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Th}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Th);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bg(){let r=null,e=!1,t=null,s=null;function o(c,d){t(c,d),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){t=c},setContext:function(c){r=c}}}function cy(r){const e=new WeakMap;function t(h,p){const m=h.array,v=h.usage,_=m.byteLength,g=r.createBuffer();r.bindBuffer(p,g),r.bufferData(p,m,v),h.onUploadCallback();let E;if(m instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)E=r.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=r.SHORT;else if(m instanceof Uint32Array)E=r.UNSIGNED_INT;else if(m instanceof Int32Array)E=r.INT;else if(m instanceof Int8Array)E=r.BYTE;else if(m instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,p,m){const v=p.array,_=p.updateRanges;if(r.bindBuffer(m,h),_.length===0)r.bufferSubData(m,0,v);else{_.sort((E,w)=>E.start-w.start);let g=0;for(let E=1;E<_.length;E++){const w=_[g],C=_[E];C.start<=w.start+w.count+1?w.count=Math.max(w.count,C.start+C.count-w.start):(++g,_[g]=C)}_.length=g+1;for(let E=0,w=_.length;E<w;E++){const C=_[E];r.bufferSubData(m,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(r.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,t(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:o,remove:c,update:d}}var uy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,py=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,my=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_y=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ay=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ey=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,My=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ry=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ny=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Dy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ly=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Uy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ky=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,By=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Oy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zy="gl_FragColor = linearToOutputTexel( gl_FragColor );",jy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ky=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$y=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,nA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_A=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,TA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,DA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,YA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,KA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,QA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$A=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,r2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,s2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,a2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,c2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,g2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,S2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,w2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,R2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,N2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,F2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,O2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:uy,alphahash_pars_fragment:dy,alphamap_fragment:fy,alphamap_pars_fragment:hy,alphatest_fragment:py,alphatest_pars_fragment:my,aomap_fragment:xy,aomap_pars_fragment:gy,batching_pars_vertex:vy,batching_vertex:_y,begin_vertex:Sy,beginnormal_vertex:yy,bsdfs:Ay,iridescence_fragment:Ey,bumpmap_pars_fragment:My,clipping_planes_fragment:wy,clipping_planes_pars_fragment:by,clipping_planes_pars_vertex:Ty,clipping_planes_vertex:Cy,color_fragment:Ry,color_pars_fragment:Py,color_pars_vertex:Ny,color_vertex:Iy,common:Dy,cube_uv_reflection_fragment:Ly,defaultnormal_vertex:Fy,displacementmap_pars_vertex:Uy,displacementmap_vertex:ky,emissivemap_fragment:By,emissivemap_pars_fragment:Oy,colorspace_fragment:zy,colorspace_pars_fragment:jy,envmap_fragment:Hy,envmap_common_pars_fragment:Vy,envmap_pars_fragment:Gy,envmap_pars_vertex:Wy,envmap_physical_pars_fragment:nA,envmap_vertex:Xy,fog_vertex:Yy,fog_pars_vertex:Ky,fog_fragment:Qy,fog_pars_fragment:qy,gradientmap_pars_fragment:Zy,lightmap_pars_fragment:Jy,lights_lambert_fragment:$y,lights_lambert_pars_fragment:eA,lights_pars_begin:tA,lights_toon_fragment:iA,lights_toon_pars_fragment:rA,lights_phong_fragment:sA,lights_phong_pars_fragment:aA,lights_physical_fragment:oA,lights_physical_pars_fragment:lA,lights_fragment_begin:cA,lights_fragment_maps:uA,lights_fragment_end:dA,lightprobes_pars_fragment:fA,logdepthbuf_fragment:hA,logdepthbuf_pars_fragment:pA,logdepthbuf_pars_vertex:mA,logdepthbuf_vertex:xA,map_fragment:gA,map_pars_fragment:vA,map_particle_fragment:_A,map_particle_pars_fragment:SA,metalnessmap_fragment:yA,metalnessmap_pars_fragment:AA,morphinstance_vertex:EA,morphcolor_vertex:MA,morphnormal_vertex:wA,morphtarget_pars_vertex:bA,morphtarget_vertex:TA,normal_fragment_begin:CA,normal_fragment_maps:RA,normal_pars_fragment:PA,normal_pars_vertex:NA,normal_vertex:IA,normalmap_pars_fragment:DA,clearcoat_normal_fragment_begin:LA,clearcoat_normal_fragment_maps:FA,clearcoat_pars_fragment:UA,iridescence_pars_fragment:kA,opaque_fragment:BA,packing:OA,premultiplied_alpha_fragment:zA,project_vertex:jA,dithering_fragment:HA,dithering_pars_fragment:VA,roughnessmap_fragment:GA,roughnessmap_pars_fragment:WA,shadowmap_pars_fragment:XA,shadowmap_pars_vertex:YA,shadowmap_vertex:KA,shadowmask_pars_fragment:QA,skinbase_vertex:qA,skinning_pars_vertex:ZA,skinning_vertex:JA,skinnormal_vertex:$A,specularmap_fragment:e2,specularmap_pars_fragment:t2,tonemapping_fragment:n2,tonemapping_pars_fragment:i2,transmission_fragment:r2,transmission_pars_fragment:s2,uv_pars_fragment:a2,uv_pars_vertex:o2,uv_vertex:l2,worldpos_vertex:c2,background_vert:u2,background_frag:d2,backgroundCube_vert:f2,backgroundCube_frag:h2,cube_vert:p2,cube_frag:m2,depth_vert:x2,depth_frag:g2,distance_vert:v2,distance_frag:_2,equirect_vert:S2,equirect_frag:y2,linedashed_vert:A2,linedashed_frag:E2,meshbasic_vert:M2,meshbasic_frag:w2,meshlambert_vert:b2,meshlambert_frag:T2,meshmatcap_vert:C2,meshmatcap_frag:R2,meshnormal_vert:P2,meshnormal_frag:N2,meshphong_vert:I2,meshphong_frag:D2,meshphysical_vert:L2,meshphysical_frag:F2,meshtoon_vert:U2,meshtoon_frag:k2,points_vert:B2,points_frag:O2,shadow_vert:z2,shadow_frag:j2,sprite_vert:H2,sprite_frag:V2},Le={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ri={basic:{uniforms:Xn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Xn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Xn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Xn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Xn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new vt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Xn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Xn([Le.points,Le.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Xn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Xn([Le.common,Le.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Xn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Xn([Le.sprite,Le.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Xn([Le.common,Le.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Xn([Le.lights,Le.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};ri.physical={uniforms:Xn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Mc={r:0,b:0,g:0},G2=new Zt,Og=new ht;Og.set(-1,0,0,0,1,0,0,0,1);function W2(r,e,t,s,o,c){const d=new vt(0);let h=o===!0?0:1,p,m,v=null,_=0,g=null;function E(B){let O=B.isScene===!0?B.background:null;if(O&&O.isTexture){const R=B.backgroundBlurriness>0;O=e.get(O,R)}return O}function w(B){let O=!1;const R=E(B);R===null?y(d,h):R&&R.isColor&&(y(R,1),O=!0);const D=r.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,c):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,c),(r.autoClear||O)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(B,O){const R=E(O);R&&(R.isCubeTexture||R.mapping===$c)?(m===void 0&&(m=new Fn(new Cr(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:Ga(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(D,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=R,m.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(G2.makeRotationFromEuler(O.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Og),m.material.toneMapped=Ct.getTransfer(R.colorSpace)!==jt,(v!==R||_!==R.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,v=R,_=R.version,g=r.toneMapping),m.layers.enableAll(),B.unshift(m,m.geometry,m.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new Fn(new Qo(2,2),new Ci({name:"BackgroundMaterial",uniforms:Ga(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(R.colorSpace)!==jt,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(v!==R||_!==R.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,v=R,_=R.version,g=r.toneMapping),p.layers.enableAll(),B.unshift(p,p.geometry,p.material,0,0,null))}function y(B,O){B.getRGB(Mc,Fg(r)),t.buffers.color.setClear(Mc.r,Mc.g,Mc.b,O,c)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(B,O=1){d.set(B),h=O,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(B){h=B,y(d,h)},render:w,addToRenderList:C,dispose:S}}function X2(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=g(null);let c=o,d=!1;function h(j,Q,z,te,V){let oe=!1;const $=_(j,te,z,Q);c!==$&&(c=$,m(c.object)),oe=E(j,te,z,V),oe&&w(j,te,z,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(oe||d)&&(d=!1,R(j,Q,z,te),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function p(){return r.createVertexArray()}function m(j){return r.bindVertexArray(j)}function v(j){return r.deleteVertexArray(j)}function _(j,Q,z,te){const V=te.wireframe===!0;let oe=s[Q.id];oe===void 0&&(oe={},s[Q.id]=oe);const $=j.isInstancedMesh===!0?j.id:0;let K=oe[$];K===void 0&&(K={},oe[$]=K);let ie=K[z.id];ie===void 0&&(ie={},K[z.id]=ie);let he=ie[V];return he===void 0&&(he=g(p()),ie[V]=he),he}function g(j){const Q=[],z=[],te=[];for(let V=0;V<t;V++)Q[V]=0,z[V]=0,te[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:z,attributeDivisors:te,object:j,attributes:{},index:null}}function E(j,Q,z,te){const V=c.attributes,oe=Q.attributes;let $=0;const K=z.getAttributes();for(const ie in K)if(K[ie].location>=0){const k=V[ie];let ee=oe[ie];if(ee===void 0&&(ie==="instanceMatrix"&&j.instanceMatrix&&(ee=j.instanceMatrix),ie==="instanceColor"&&j.instanceColor&&(ee=j.instanceColor)),k===void 0||k.attribute!==ee||ee&&k.data!==ee.data)return!0;$++}return c.attributesNum!==$||c.index!==te}function w(j,Q,z,te){const V={},oe=Q.attributes;let $=0;const K=z.getAttributes();for(const ie in K)if(K[ie].location>=0){let k=oe[ie];k===void 0&&(ie==="instanceMatrix"&&j.instanceMatrix&&(k=j.instanceMatrix),ie==="instanceColor"&&j.instanceColor&&(k=j.instanceColor));const ee={};ee.attribute=k,k&&k.data&&(ee.data=k.data),V[ie]=ee,$++}c.attributes=V,c.attributesNum=$,c.index=te}function C(){const j=c.newAttributes;for(let Q=0,z=j.length;Q<z;Q++)j[Q]=0}function y(j){S(j,0)}function S(j,Q){const z=c.newAttributes,te=c.enabledAttributes,V=c.attributeDivisors;z[j]=1,te[j]===0&&(r.enableVertexAttribArray(j),te[j]=1),V[j]!==Q&&(r.vertexAttribDivisor(j,Q),V[j]=Q)}function B(){const j=c.newAttributes,Q=c.enabledAttributes;for(let z=0,te=Q.length;z<te;z++)Q[z]!==j[z]&&(r.disableVertexAttribArray(z),Q[z]=0)}function O(j,Q,z,te,V,oe,$){$===!0?r.vertexAttribIPointer(j,Q,z,V,oe):r.vertexAttribPointer(j,Q,z,te,V,oe)}function R(j,Q,z,te){C();const V=te.attributes,oe=z.getAttributes(),$=Q.defaultAttributeValues;for(const K in oe){const ie=oe[K];if(ie.location>=0){let he=V[K];if(he===void 0&&(K==="instanceMatrix"&&j.instanceMatrix&&(he=j.instanceMatrix),K==="instanceColor"&&j.instanceColor&&(he=j.instanceColor)),he!==void 0){const k=he.normalized,ee=he.itemSize,Oe=e.get(he);if(Oe===void 0)continue;const Ke=Oe.buffer,Ve=Oe.type,ue=Oe.bytesPerElement,Se=Ve===r.INT||Ve===r.UNSIGNED_INT||he.gpuType===Ch;if(he.isInterleavedBufferAttribute){const ve=he.data,Be=ve.stride,Ze=he.offset;if(ve.isInstancedInterleavedBuffer){for(let nt=0;nt<ie.locationSize;nt++)S(ie.location+nt,ve.meshPerAttribute);j.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let nt=0;nt<ie.locationSize;nt++)y(ie.location+nt);r.bindBuffer(r.ARRAY_BUFFER,Ke);for(let nt=0;nt<ie.locationSize;nt++)O(ie.location+nt,ee/ie.locationSize,Ve,k,Be*ue,(Ze+ee/ie.locationSize*nt)*ue,Se)}else{if(he.isInstancedBufferAttribute){for(let ve=0;ve<ie.locationSize;ve++)S(ie.location+ve,he.meshPerAttribute);j.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ve=0;ve<ie.locationSize;ve++)y(ie.location+ve);r.bindBuffer(r.ARRAY_BUFFER,Ke);for(let ve=0;ve<ie.locationSize;ve++)O(ie.location+ve,ee/ie.locationSize,Ve,k,ee*ue,ee/ie.locationSize*ve*ue,Se)}}else if($!==void 0){const k=$[K];if(k!==void 0)switch(k.length){case 2:r.vertexAttrib2fv(ie.location,k);break;case 3:r.vertexAttrib3fv(ie.location,k);break;case 4:r.vertexAttrib4fv(ie.location,k);break;default:r.vertexAttrib1fv(ie.location,k)}}}}B()}function D(){N();for(const j in s){const Q=s[j];for(const z in Q){const te=Q[z];for(const V in te){const oe=te[V];for(const $ in oe)v(oe[$].object),delete oe[$];delete te[V]}}delete s[j]}}function P(j){if(s[j.id]===void 0)return;const Q=s[j.id];for(const z in Q){const te=Q[z];for(const V in te){const oe=te[V];for(const $ in oe)v(oe[$].object),delete oe[$];delete te[V]}}delete s[j.id]}function U(j){for(const Q in s){const z=s[Q];for(const te in z){const V=z[te];if(V[j.id]===void 0)continue;const oe=V[j.id];for(const $ in oe)v(oe[$].object),delete oe[$];delete V[j.id]}}}function M(j){for(const Q in s){const z=s[Q],te=j.isInstancedMesh===!0?j.id:0,V=z[te];if(V!==void 0){for(const oe in V){const $=V[oe];for(const K in $)v($[K].object),delete $[K];delete V[oe]}delete z[te],Object.keys(z).length===0&&delete s[Q]}}}function N(){W(),d=!0,c!==o&&(c=o,m(c.object))}function W(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:N,resetDefaultState:W,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfObject:M,releaseStatesOfProgram:U,initAttributes:C,enableAttribute:y,disableUnusedAttributes:B}}function Y2(r,e,t){let s;function o(p){s=p}function c(p,m){r.drawArrays(s,p,m),t.update(m,s,1)}function d(p,m,v){v!==0&&(r.drawArraysInstanced(s,p,m,v),t.update(m,s,v))}function h(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,v);let g=0;for(let E=0;E<v;E++)g+=m[E];t.update(g,s,1)}this.setMode=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function K2(r,e,t,s){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(U){return!(U!==Wi&&s.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(U){const M=U===Dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==hi&&s.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Gi&&!M)}function p(U){if(U==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const v=p(m);v!==m&&(ct("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),B=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),D=r.getParameter(r.MAX_SAMPLES),P=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:w,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:B,maxVaryings:O,maxFragmentUniforms:R,maxSamples:D,samples:P}}function Q2(r){const e=this;let t=null,s=0,o=!1,c=!1;const d=new Ds,h=new ht,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const E=_.length!==0||g||s!==0||o;return o=g,s=_.length,E},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,g){t=v(_,g,0)},this.setState=function(_,g,E){const w=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,S=r.get(_);if(!o||w===null||w.length===0||c&&!y)c?v(null):m();else{const B=c?0:s,O=B*4;let R=S.clippingState||null;p.value=R,R=v(w,g,O,E);for(let D=0;D!==O;++D)R[D]=t[D];S.clippingState=R,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(_,g,E,w){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=p.value,w!==!0||y===null){const S=E+C*4,B=g.matrixWorldInverse;h.getNormalMatrix(B),(y===null||y.length<S)&&(y=new Float32Array(S));for(let O=0,R=E;O!==C;++O,R+=4)d.copy(_[O]).applyMatrix4(B,h),d.normal.toArray(y,R),y[R+3]=d.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const ds=4,Ax=[.125,.215,.35,.446,.526,.582],Us=20,q2=256,Lo=new kg,Ex=new vt;let mf=null,xf=0,gf=0,vf=!1;const Z2=new J;class Mx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,o=100,c={}){const{size:d=256,position:h=Z2}=c;mf=this._renderer.getRenderTarget(),xf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,o,p,h),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(mf,xf,gf),this._renderer.xr.enabled=vf,e.scissorTest=!1,Pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Ha?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mf=this._renderer.getRenderTarget(),xf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Dr,format:Wi,colorSpace:Hc,depthBuffer:!1},o=wx(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wx(e,t,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=J2(c)),this._blurMaterial=eE(c,e,t),this._ggxMaterial=$2(c,e,t)}return o}_compileMaterial(e){const t=new Fn(new ai,e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,s,o,c){const p=new wi(90,1,t,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,E=_.toneMapping;_.getClearColor(Ex),_.toneMapping=cr,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fn(new Cr,new Fs({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let S=!1;const B=e.background;B?B.isColor&&(y.color.copy(B),e.background=null,S=!0):(y.color.copy(Ex),S=!0);for(let O=0;O<6;O++){const R=O%3;R===0?(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[O],c.y,c.z)):R===1?(p.up.set(0,0,m[O]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[O],c.z)):(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[O]));const D=this._cubeSize;Pa(o,R*D,O>2?D:0,D,D),_.setRenderTarget(o),S&&_.render(C,p),_.render(e,p)}_.toneMapping=E,_.autoClear=g,e.background=B}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===zs||e.mapping===Ha;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bx());const c=o?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;Pa(t,0,0,3*p,2*p),s.setRenderTarget(t),s.render(d,Lo)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);t.autoClear=s}_applyGGXFilter(e,t,s){const o=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const p=d.uniforms,m=s/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),_=Math.sqrt(m*m-v*v),g=0+m*1.25,E=_*g,{_lodMax:w}=this,C=this._sizeLods[s],y=3*C*(s>w-ds?s-w+ds:0),S=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=E,p.mipInt.value=w-t,Pa(c,y,S,3*C,2*C),o.setRenderTarget(c),o.render(h,Lo),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=w-s,Pa(e,y,S,3*C,2*C),o.setRenderTarget(e),o.render(h,Lo)}_blur(e,t,s,o,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,t,s,o,"latitudinal",c),this._halfBlur(d,e,s,s,o,"longitudinal",c)}_halfBlur(e,t,s,o,c,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[o];_.material=m;const g=m.uniforms,E=this._sizeLods[s]-1,w=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Us-1),C=c/w,y=isFinite(c)?1+Math.floor(v*C):Us;y>Us&&ct(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Us}`);const S=[];let B=0;for(let U=0;U<Us;++U){const M=U/C,N=Math.exp(-M*M/2);S.push(N),U===0?B+=N:U<y&&(B+=2*N)}for(let U=0;U<S.length;U++)S[U]=S[U]/B;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=d==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:O}=this;g.dTheta.value=w,g.mipInt.value=O-s;const R=this._sizeLods[o],D=3*R*(o>O-ds?o-O+ds:0),P=4*(this._cubeSize-R);Pa(t,D,P,3*R,2*R),p.setRenderTarget(t),p.render(_,Lo)}}function J2(r){const e=[],t=[],s=[];let o=r;const c=r-ds+1+Ax.length;for(let d=0;d<c;d++){const h=Math.pow(2,o);e.push(h);let p=1/h;d>r-ds?p=Ax[d-r+ds-1]:d===0&&(p=0),t.push(p);const m=1/(h-2),v=-m,_=1+m,g=[v,v,_,v,_,_,v,v,_,_,v,_],E=6,w=6,C=3,y=2,S=1,B=new Float32Array(C*w*E),O=new Float32Array(y*w*E),R=new Float32Array(S*w*E);for(let P=0;P<E;P++){const U=P%3*2/3-1,M=P>2?0:-1,N=[U,M,0,U+2/3,M,0,U+2/3,M+1,0,U,M,0,U+2/3,M+1,0,U,M+1,0];B.set(N,C*w*P),O.set(g,y*w*P);const W=[P,P,P,P,P,P];R.set(W,S*w*P)}const D=new ai;D.setAttribute("position",new pi(B,C)),D.setAttribute("uv",new pi(O,y)),D.setAttribute("faceIndex",new pi(R,S)),s.push(new Fn(D,null)),o>ds&&o--}return{lodMeshes:s,sizeLods:e,sigmas:t}}function wx(r,e,t){const s=new ur(r,e,t);return s.texture.mapping=$c,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Pa(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function $2(r,e,t){return new Ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:q2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function eE(r,e,t){const s=new Float32Array(Us),o=new J(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function bx(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Tx(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function tu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class zg extends ur{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new Dg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Cr(5,5,5),c=new Ci({name:"CubemapFromEquirect",uniforms:Ga(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:si,blending:Rr});c.uniforms.tEquirect.value=t;const d=new Fn(o,c),h=t.minFilter;return t.minFilter===ks&&(t.minFilter=Tn),new ny(1,10,this).update(e,d),t.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,s,o);e.setRenderTarget(c)}}function tE(r){let e=new WeakMap,t=new WeakMap,s=null;function o(g,E=!1){return g==null?null:E?d(g):c(g)}function c(g){if(g&&g.isTexture){const E=g.mapping;if(E===zd||E===jd)if(e.has(g)){const w=e.get(g).texture;return h(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const C=new zg(w.height);return C.fromEquirectangularTexture(r,g),e.set(g,C),g.addEventListener("dispose",m),h(C.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const E=g.mapping,w=E===zd||E===jd,C=E===zs||E===Ha;if(w||C){let y=t.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new Mx(r)),y=w?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const B=g.image;return w&&B&&B.height>0||C&&B&&p(B)?(s===null&&(s=new Mx(r)),y=w?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function h(g,E){return E===zd?g.mapping=zs:E===jd&&(g.mapping=Ha),g}function p(g){let E=0;const w=6;for(let C=0;C<w;C++)g[C]!==void 0&&E++;return E===w}function m(g){const E=g.target;E.removeEventListener("dispose",m);const w=e.get(E);w!==void 0&&(e.delete(E),w.dispose())}function v(g){const E=g.target;E.removeEventListener("dispose",v);const w=t.get(E);w!==void 0&&(t.delete(E),w.dispose())}function _(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:_}}function nE(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&ka("WebGLRenderer: "+s+" extension not supported."),o}}}function iE(r,e,t,s){const o={},c=new WeakMap;function d(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",d),delete o[g.id];const E=c.get(g);E&&(e.remove(E),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function h(_,g){return o[g.id]===!0||(g.addEventListener("dispose",d),o[g.id]=!0,t.memory.geometries++),g}function p(_){const g=_.attributes;for(const E in g)e.update(g[E],r.ARRAY_BUFFER)}function m(_){const g=[],E=_.index,w=_.attributes.position;let C=0;if(w===void 0)return;if(E!==null){const B=E.array;C=E.version;for(let O=0,R=B.length;O<R;O+=3){const D=B[O+0],P=B[O+1],U=B[O+2];g.push(D,P,P,U,U,D)}}else{const B=w.array;C=w.version;for(let O=0,R=B.length/3-1;O<R;O+=3){const D=O+0,P=O+1,U=O+2;g.push(D,P,P,U,U,D)}}const y=new(w.count>=65535?Pg:Rg)(g,1);y.version=C;const S=c.get(_);S&&e.remove(S),c.set(_,y)}function v(_){const g=c.get(_);if(g){const E=_.index;E!==null&&g.version<E.version&&m(_)}else m(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:v}}function rE(r,e,t){let s;function o(_){s=_}let c,d;function h(_){c=_.type,d=_.bytesPerElement}function p(_,g){r.drawElements(s,g,c,_*d),t.update(g,s,1)}function m(_,g,E){E!==0&&(r.drawElementsInstanced(s,g,c,_*d,E),t.update(g,s,E))}function v(_,g,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,_,0,E);let C=0;for(let y=0;y<E;y++)C+=g[y];t.update(C,s,1)}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=v}function sE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(t.calls++,d){case r.TRIANGLES:t.triangles+=h*(c/3);break;case r.LINES:t.lines+=h*(c/2);break;case r.LINE_STRIP:t.lines+=h*(c-1);break;case r.LINE_LOOP:t.lines+=h*c;break;case r.POINTS:t.points+=h*c;break;default:Pt("WebGLInfo: Unknown draw mode:",d);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function aE(r,e,t){const s=new WeakMap,o=new Wt;function c(d,h,p){const m=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let g=s.get(h);if(g===void 0||g.count!==_){let W=function(){M.dispose(),s.delete(h),h.removeEventListener("dispose",W)};var E=W;g!==void 0&&g.texture.dispose();const w=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],B=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let R=0;w===!0&&(R=1),C===!0&&(R=2),y===!0&&(R=3);let D=h.attributes.position.count*R,P=1;D>e.maxTextureSize&&(P=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const U=new Float32Array(D*P*4*_),M=new Tg(U,D,P,_);M.type=Gi,M.needsUpdate=!0;const N=R*4;for(let j=0;j<_;j++){const Q=S[j],z=B[j],te=O[j],V=D*P*4*j;for(let oe=0;oe<Q.count;oe++){const $=oe*N;w===!0&&(o.fromBufferAttribute(Q,oe),U[V+$+0]=o.x,U[V+$+1]=o.y,U[V+$+2]=o.z,U[V+$+3]=0),C===!0&&(o.fromBufferAttribute(z,oe),U[V+$+4]=o.x,U[V+$+5]=o.y,U[V+$+6]=o.z,U[V+$+7]=0),y===!0&&(o.fromBufferAttribute(te,oe),U[V+$+8]=o.x,U[V+$+9]=o.y,U[V+$+10]=o.z,U[V+$+11]=te.itemSize===4?o.w:1)}}g={count:_,texture:M,size:new Nt(D,P)},s.set(h,g),h.addEventListener("dispose",W)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",d.morphTexture,t);else{let w=0;for(let y=0;y<m.length;y++)w+=m[y];const C=h.morphTargetsRelative?1:1-w;p.getUniforms().setValue(r,"morphTargetBaseInfluence",C),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function oE(r,e,t,s,o){let c=new WeakMap;function d(m){const v=o.render.frame,_=m.geometry,g=e.get(m,_);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==v&&(t.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,r.ARRAY_BUFFER),c.set(m,v))),m.isSkinnedMesh){const E=m.skeleton;c.get(E)!==v&&(E.update(),c.set(E,v))}return g}function h(){c=new WeakMap}function p(m){const v=m.target;v.removeEventListener("dispose",p),s.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:d,dispose:h}}const lE={[fg]:"LINEAR_TONE_MAPPING",[hg]:"REINHARD_TONE_MAPPING",[pg]:"CINEON_TONE_MAPPING",[mg]:"ACES_FILMIC_TONE_MAPPING",[gg]:"AGX_TONE_MAPPING",[vg]:"NEUTRAL_TONE_MAPPING",[xg]:"CUSTOM_TONE_MAPPING"};function cE(r,e,t,s,o,c){const d=new ur(e,t,{type:r,depthBuffer:o,stencilBuffer:c,samples:s?4:0,depthTexture:o?new Va(e,t):void 0}),h=new ur(e,t,{type:Dr,depthBuffer:!1,stencilBuffer:!1}),p=new ai;p.setAttribute("position",new Cn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Cn([0,2,0,0,2,0],2));const m=new JS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new Fn(p,m),_=new kg(-1,1,1,-1,0,1);let g=null,E=null,w=!1,C,y=null,S=[],B=!1;this.setSize=function(O,R){d.setSize(O,R),h.setSize(O,R);for(let D=0;D<S.length;D++){const P=S[D];P.setSize&&P.setSize(O,R)}},this.setEffects=function(O){S=O,B=S.length>0&&S[0].isRenderPass===!0;const R=d.width,D=d.height;for(let P=0;P<S.length;P++){const U=S[P];U.setSize&&U.setSize(R,D)}},this.begin=function(O,R){if(w||O.toneMapping===cr&&S.length===0)return!1;if(y=R,R!==null){const D=R.width,P=R.height;(d.width!==D||d.height!==P)&&this.setSize(D,P)}return B===!1&&O.setRenderTarget(d),C=O.toneMapping,O.toneMapping=cr,!0},this.hasRenderPass=function(){return B},this.end=function(O,R){O.toneMapping=C,w=!0;let D=d,P=h;for(let U=0;U<S.length;U++){const M=S[U];if(M.enabled!==!1&&(M.render(O,P,D,R),M.needsSwap!==!1)){const N=D;D=P,P=N}}if(g!==O.outputColorSpace||E!==O.toneMapping){g=O.outputColorSpace,E=O.toneMapping,m.defines={},Ct.getTransfer(g)===jt&&(m.defines.SRGB_TRANSFER="");const U=lE[E];U&&(m.defines[U]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,O.setRenderTarget(y),O.render(v,_),y=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),h.dispose(),p.dispose(),m.dispose()}}const jg=new Yn,Sh=new Va(1,1),Hg=new Tg,Vg=new wS,Gg=new Dg,Cx=[],Rx=[],Px=new Float32Array(16),Nx=new Float32Array(9),Ix=new Float32Array(4);function Xa(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let c=Cx[o];if(c===void 0&&(c=new Float32Array(o),Cx[o]=c),e!==0){s.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=t,r[d].toArray(c,h)}return c}function Sn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function yn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function nu(r,e){let t=Rx[e];t===void 0&&(t=new Int32Array(e),Rx[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function uE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function dE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;r.uniform2fv(this.addr,e),yn(t,e)}}function fE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;r.uniform3fv(this.addr,e),yn(t,e)}}function hE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;r.uniform4fv(this.addr,e),yn(t,e)}}function pE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Sn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(Sn(t,s))return;Ix.set(s),r.uniformMatrix2fv(this.addr,!1,Ix),yn(t,s)}}function mE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Sn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(Sn(t,s))return;Nx.set(s),r.uniformMatrix3fv(this.addr,!1,Nx),yn(t,s)}}function xE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Sn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(Sn(t,s))return;Px.set(s),r.uniformMatrix4fv(this.addr,!1,Px),yn(t,s)}}function gE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function vE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;r.uniform2iv(this.addr,e),yn(t,e)}}function _E(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;r.uniform3iv(this.addr,e),yn(t,e)}}function SE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;r.uniform4iv(this.addr,e),yn(t,e)}}function yE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function AE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;r.uniform2uiv(this.addr,e),yn(t,e)}}function EE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;r.uniform3uiv(this.addr,e),yn(t,e)}}function ME(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;r.uniform4uiv(this.addr,e),yn(t,e)}}function wE(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(Sh.compareFunction=t.isReversedDepthBuffer()?Fh:Lh,c=Sh):c=jg,t.setTexture2D(e||c,o)}function bE(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||Vg,o)}function TE(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||Gg,o)}function CE(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||Hg,o)}function RE(r){switch(r){case 5126:return uE;case 35664:return dE;case 35665:return fE;case 35666:return hE;case 35674:return pE;case 35675:return mE;case 35676:return xE;case 5124:case 35670:return gE;case 35667:case 35671:return vE;case 35668:case 35672:return _E;case 35669:case 35673:return SE;case 5125:return yE;case 36294:return AE;case 36295:return EE;case 36296:return ME;case 35678:case 36198:case 36298:case 36306:case 35682:return wE;case 35679:case 36299:case 36307:return bE;case 35680:case 36300:case 36308:case 36293:return TE;case 36289:case 36303:case 36311:case 36292:return CE}}function PE(r,e){r.uniform1fv(this.addr,e)}function NE(r,e){const t=Xa(e,this.size,2);r.uniform2fv(this.addr,t)}function IE(r,e){const t=Xa(e,this.size,3);r.uniform3fv(this.addr,t)}function DE(r,e){const t=Xa(e,this.size,4);r.uniform4fv(this.addr,t)}function LE(r,e){const t=Xa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function FE(r,e){const t=Xa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function UE(r,e){const t=Xa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function kE(r,e){r.uniform1iv(this.addr,e)}function BE(r,e){r.uniform2iv(this.addr,e)}function OE(r,e){r.uniform3iv(this.addr,e)}function zE(r,e){r.uniform4iv(this.addr,e)}function jE(r,e){r.uniform1uiv(this.addr,e)}function HE(r,e){r.uniform2uiv(this.addr,e)}function VE(r,e){r.uniform3uiv(this.addr,e)}function GE(r,e){r.uniform4uiv(this.addr,e)}function WE(r,e,t){const s=this.cache,o=e.length,c=nu(t,o);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=Sh:d=jg;for(let h=0;h!==o;++h)t.setTexture2D(e[h]||d,c[h])}function XE(r,e,t){const s=this.cache,o=e.length,c=nu(t,o);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let d=0;d!==o;++d)t.setTexture3D(e[d]||Vg,c[d])}function YE(r,e,t){const s=this.cache,o=e.length,c=nu(t,o);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let d=0;d!==o;++d)t.setTextureCube(e[d]||Gg,c[d])}function KE(r,e,t){const s=this.cache,o=e.length,c=nu(t,o);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let d=0;d!==o;++d)t.setTexture2DArray(e[d]||Hg,c[d])}function QE(r){switch(r){case 5126:return PE;case 35664:return NE;case 35665:return IE;case 35666:return DE;case 35674:return LE;case 35675:return FE;case 35676:return UE;case 5124:case 35670:return kE;case 35667:case 35671:return BE;case 35668:case 35672:return OE;case 35669:case 35673:return zE;case 5125:return jE;case 36294:return HE;case 36295:return VE;case 36296:return GE;case 35678:case 36198:case 36298:case 36306:case 35682:return WE;case 35679:case 36299:case 36307:return XE;case 35680:case 36300:case 36308:case 36293:return YE;case 36289:case 36303:case 36311:case 36292:return KE}}class qE{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=RE(t.type)}}class ZE{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=QE(t.type)}}class JE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let c=0,d=o.length;c!==d;++c){const h=o[c];h.setValue(e,t[h.id],s)}}}const _f=/(\w+)(\])?(\[|\.)?/g;function Dx(r,e){r.seq.push(e),r.map[e.id]=e}function $E(r,e,t){const s=r.name,o=s.length;for(_f.lastIndex=0;;){const c=_f.exec(s),d=_f.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===o){Dx(t,m===void 0?new qE(h,r,e):new ZE(h,r,e));break}else{let _=t.map[h];_===void 0&&(_=new JE(h),Dx(t,_)),t=_}}}class Oc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(t,d),p=e.getUniformLocation(t,h.name);$E(h,p,this)}const o=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(d):c.push(d);o.length>0&&(this.seq=o.concat(c))}setValue(e,t,s,o){const c=this.map[t];c!==void 0&&c.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let c=0,d=t.length;c!==d;++c){const h=t[c],p=s[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,c=e.length;o!==c;++o){const d=e[o];d.id in t&&s.push(d)}return s}}function Lx(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const e3=37297;let t3=0;function n3(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),c=Math.min(e+6,t.length);for(let d=o;d<c;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${t[d]}`)}return s.join(`
`)}const Fx=new ht;function i3(r){Ct._getMatrix(Fx,Ct.workingColorSpace,r);const e=`mat3( ${Fx.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(r)){case Vc:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ux(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return t.toUpperCase()+`

`+c+`

`+n3(r.getShaderSource(e),h)}else return c}function r3(r,e){const t=i3(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const s3={[fg]:"Linear",[hg]:"Reinhard",[pg]:"Cineon",[mg]:"ACESFilmic",[gg]:"AgX",[vg]:"Neutral",[xg]:"Custom"};function a3(r,e){const t=s3[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wc=new J;function o3(){Ct.getLuminanceCoefficients(wc);const r=wc.x.toFixed(4),e=wc.y.toFixed(4),t=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l3(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function c3(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function u3(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const c=r.getActiveAttrib(e,o),d=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),t[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:h}}return t}function Oo(r){return r!==""}function kx(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const d3=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(r){return r.replace(d3,h3)}const f3=new Map;function h3(r,e){let t=gt[e];if(t===void 0){const s=f3.get(e);if(s!==void 0)t=gt[s],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return yh(t)}const p3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ox(r){return r.replace(p3,m3)}function m3(r,e,t,s){let o="";for(let c=parseInt(e);c<parseInt(t);c++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function zx(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const x3={[Lc]:"SHADOWMAP_TYPE_PCF",[Bo]:"SHADOWMAP_TYPE_VSM"};function g3(r){return x3[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const v3={[zs]:"ENVMAP_TYPE_CUBE",[Ha]:"ENVMAP_TYPE_CUBE",[$c]:"ENVMAP_TYPE_CUBE_UV"};function _3(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":v3[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const S3={[Ha]:"ENVMAP_MODE_REFRACTION"};function y3(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":S3[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const A3={[dg]:"ENVMAP_BLENDING_MULTIPLY",[H_]:"ENVMAP_BLENDING_MIX",[V_]:"ENVMAP_BLENDING_ADD"};function E3(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":A3[r.combine]||"ENVMAP_BLENDING_NONE"}function M3(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function w3(r,e,t,s){const o=r.getContext(),c=t.defines;let d=t.vertexShader,h=t.fragmentShader;const p=g3(t),m=_3(t),v=y3(t),_=E3(t),g=M3(t),E=l3(t),w=c3(c),C=o.createProgram();let y,S,B=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Oo).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Oo).join(`
`),S.length>0&&(S+=`
`)):(y=[zx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),S=[zx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cr?"#define TONE_MAPPING":"",t.toneMapping!==cr?gt.tonemapping_pars_fragment:"",t.toneMapping!==cr?a3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,r3("linearToOutputTexel",t.outputColorSpace),o3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oo).join(`
`)),d=yh(d),d=kx(d,t),d=Bx(d,t),h=yh(h),h=kx(h,t),h=Bx(h,t),d=Ox(d),h=Ox(h),t.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===H0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===H0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const O=B+y+d,R=B+S+h,D=Lx(o,o.VERTEX_SHADER,O),P=Lx(o,o.FRAGMENT_SHADER,R);o.attachShader(C,D),o.attachShader(C,P),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function U(j){if(r.debug.checkShaderErrors){const Q=o.getProgramInfoLog(C)||"",z=o.getShaderInfoLog(D)||"",te=o.getShaderInfoLog(P)||"",V=Q.trim(),oe=z.trim(),$=te.trim();let K=!0,ie=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,C,D,P);else{const he=Ux(o,D,"vertex"),k=Ux(o,P,"fragment");Pt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+V+`
`+he+`
`+k)}else V!==""?ct("WebGLProgram: Program Info Log:",V):(oe===""||$==="")&&(ie=!1);ie&&(j.diagnostics={runnable:K,programLog:V,vertexShader:{log:oe,prefix:y},fragmentShader:{log:$,prefix:S}})}o.deleteShader(D),o.deleteShader(P),M=new Oc(o,C),N=u3(o,C)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let N;this.getAttributes=function(){return N===void 0&&U(this),N};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=o.getProgramParameter(C,e3)),W},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=t3++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=D,this.fragmentShader=P,this}let b3=0;class T3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,s){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new C3(e),t.set(e,s)),s}}class C3{constructor(e){this.id=b3++,this.code=e,this.usedTimes=0}}function R3(r){return r===js||r===zc||r===jc}function P3(r,e,t,s,o,c){const d=new Bh,h=new T3,p=new Set,m=[],v=new Map,_=s.logarithmicDepthBuffer;let g=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(M){return p.add(M),M===0?"uv":`uv${M}`}function C(M,N,W,j,Q,z){const te=j.fog,V=Q.geometry,oe=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?j.environment:null,$=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,K=e.get(M.envMap||oe,$),ie=K&&K.mapping===$c?K.image.height:null,he=E[M.type];M.precision!==null&&(g=s.getMaxPrecision(M.precision),g!==M.precision&&ct("WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const k=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ee=k!==void 0?k.length:0;let Oe=0;V.morphAttributes.position!==void 0&&(Oe=1),V.morphAttributes.normal!==void 0&&(Oe=2),V.morphAttributes.color!==void 0&&(Oe=3);let Ke,Ve,ue,Se;if(he){const _e=ri[he];Ke=_e.vertexShader,Ve=_e.fragmentShader}else{Ke=M.vertexShader,Ve=M.fragmentShader;const _e=h.getVertexShaderStage(M),Ue=h.getFragmentShaderStage(M);h.update(M,_e,Ue),ue=_e.id,Se=Ue.id}const ve=r.getRenderTarget(),Be=r.state.buffers.depth.getReversed(),Ze=Q.isInstancedMesh===!0,nt=Q.isBatchedMesh===!0,Ft=!!M.map,lt=!!M.matcap,wt=!!K,_t=!!M.aoMap,pt=!!M.lightMap,Yt=!!M.bumpMap&&M.wireframe===!1,Jt=!!M.normalMap,Kt=!!M.displacementMap,Bt=!!M.emissiveMap,Ut=!!M.metalnessMap,It=!!M.roughnessMap,X=M.anisotropy>0,mn=M.clearcoat>0,bt=M.dispersion>0,I=M.iridescence>0,A=M.sheen>0,Z=M.transmission>0,se=X&&!!M.anisotropyMap,pe=mn&&!!M.clearcoatMap,Me=mn&&!!M.clearcoatNormalMap,Pe=mn&&!!M.clearcoatRoughnessMap,me=I&&!!M.iridescenceMap,xe=I&&!!M.iridescenceThicknessMap,Ne=A&&!!M.sheenColorMap,We=A&&!!M.sheenRoughnessMap,Ie=!!M.specularMap,Ce=!!M.specularColorMap,Je=!!M.specularIntensityMap,rt=Z&&!!M.transmissionMap,st=Z&&!!M.thicknessMap,G=!!M.gradientMap,Te=!!M.alphaMap,ge=M.alphaTest>0,De=!!M.alphaHash,Fe=!!M.extensions;let F=cr;M.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(F=r.toneMapping);const ne={shaderID:he,shaderType:M.type,shaderName:M.name,vertexShader:Ke,fragmentShader:Ve,defines:M.defines,customVertexShaderID:ue,customFragmentShaderID:Se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:nt,batchingColor:nt&&Q._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&Q.instanceColor!==null,instancingMorph:Ze&&Q.morphTexture!==null,outputColorSpace:ve===null?r.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ft,matcap:lt,envMap:wt,envMapMode:wt&&K.mapping,envMapCubeUVHeight:ie,aoMap:_t,lightMap:pt,bumpMap:Yt,normalMap:Jt,displacementMap:Kt,emissiveMap:Bt,normalMapObjectSpace:Jt&&M.normalMapType===X_,normalMapTangentSpace:Jt&&M.normalMapType===z0,packedNormalMap:Jt&&M.normalMapType===z0&&R3(M.normalMap.format),metalnessMap:Ut,roughnessMap:It,anisotropy:X,anisotropyMap:se,clearcoat:mn,clearcoatMap:pe,clearcoatNormalMap:Me,clearcoatRoughnessMap:Pe,dispersion:bt,iridescence:I,iridescenceMap:me,iridescenceThicknessMap:xe,sheen:A,sheenColorMap:Ne,sheenRoughnessMap:We,specularMap:Ie,specularColorMap:Ce,specularIntensityMap:Je,transmission:Z,transmissionMap:rt,thicknessMap:st,gradientMap:G,opaque:M.transparent===!1&&M.blending===Ua&&M.alphaToCoverage===!1,alphaMap:Te,alphaTest:ge,alphaHash:De,combine:M.combine,mapUv:Ft&&w(M.map.channel),aoMapUv:_t&&w(M.aoMap.channel),lightMapUv:pt&&w(M.lightMap.channel),bumpMapUv:Yt&&w(M.bumpMap.channel),normalMapUv:Jt&&w(M.normalMap.channel),displacementMapUv:Kt&&w(M.displacementMap.channel),emissiveMapUv:Bt&&w(M.emissiveMap.channel),metalnessMapUv:Ut&&w(M.metalnessMap.channel),roughnessMapUv:It&&w(M.roughnessMap.channel),anisotropyMapUv:se&&w(M.anisotropyMap.channel),clearcoatMapUv:pe&&w(M.clearcoatMap.channel),clearcoatNormalMapUv:Me&&w(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&w(M.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&w(M.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&w(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&w(M.sheenColorMap.channel),sheenRoughnessMapUv:We&&w(M.sheenRoughnessMap.channel),specularMapUv:Ie&&w(M.specularMap.channel),specularColorMapUv:Ce&&w(M.specularColorMap.channel),specularIntensityMapUv:Je&&w(M.specularIntensityMap.channel),transmissionMapUv:rt&&w(M.transmissionMap.channel),thicknessMapUv:st&&w(M.thicknessMap.channel),alphaMapUv:Te&&w(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Jt||X),vertexNormals:!!V.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!V.attributes.uv&&(Ft||Te),fog:!!te,useFog:M.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||V.attributes.normal===void 0&&Jt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Be,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Oe,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&W.length>0,shadowMapType:r.shadowMap.type,toneMapping:F,decodeVideoTexture:Ft&&M.map.isVideoTexture===!0&&Ct.getTransfer(M.map.colorSpace)===jt,decodeVideoTextureEmissive:Bt&&M.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(M.emissiveMap.colorSpace)===jt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ar,flipSided:M.side===si,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Fe&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&M.extensions.multiDraw===!0||nt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ne.vertexUv1s=p.has(1),ne.vertexUv2s=p.has(2),ne.vertexUv3s=p.has(3),p.clear(),ne}function y(M){const N=[];if(M.shaderID?N.push(M.shaderID):(N.push(M.customVertexShaderID),N.push(M.customFragmentShaderID)),M.defines!==void 0)for(const W in M.defines)N.push(W),N.push(M.defines[W]);return M.isRawShaderMaterial===!1&&(S(N,M),B(N,M),N.push(r.outputColorSpace)),N.push(M.customProgramCacheKey),N.join()}function S(M,N){M.push(N.precision),M.push(N.outputColorSpace),M.push(N.envMapMode),M.push(N.envMapCubeUVHeight),M.push(N.mapUv),M.push(N.alphaMapUv),M.push(N.lightMapUv),M.push(N.aoMapUv),M.push(N.bumpMapUv),M.push(N.normalMapUv),M.push(N.displacementMapUv),M.push(N.emissiveMapUv),M.push(N.metalnessMapUv),M.push(N.roughnessMapUv),M.push(N.anisotropyMapUv),M.push(N.clearcoatMapUv),M.push(N.clearcoatNormalMapUv),M.push(N.clearcoatRoughnessMapUv),M.push(N.iridescenceMapUv),M.push(N.iridescenceThicknessMapUv),M.push(N.sheenColorMapUv),M.push(N.sheenRoughnessMapUv),M.push(N.specularMapUv),M.push(N.specularColorMapUv),M.push(N.specularIntensityMapUv),M.push(N.transmissionMapUv),M.push(N.thicknessMapUv),M.push(N.combine),M.push(N.fogExp2),M.push(N.sizeAttenuation),M.push(N.morphTargetsCount),M.push(N.morphAttributeCount),M.push(N.numDirLights),M.push(N.numPointLights),M.push(N.numSpotLights),M.push(N.numSpotLightMaps),M.push(N.numHemiLights),M.push(N.numRectAreaLights),M.push(N.numDirLightShadows),M.push(N.numPointLightShadows),M.push(N.numSpotLightShadows),M.push(N.numSpotLightShadowsWithMaps),M.push(N.numLightProbes),M.push(N.shadowMapType),M.push(N.toneMapping),M.push(N.numClippingPlanes),M.push(N.numClipIntersection),M.push(N.depthPacking)}function B(M,N){d.disableAll(),N.instancing&&d.enable(0),N.instancingColor&&d.enable(1),N.instancingMorph&&d.enable(2),N.matcap&&d.enable(3),N.envMap&&d.enable(4),N.normalMapObjectSpace&&d.enable(5),N.normalMapTangentSpace&&d.enable(6),N.clearcoat&&d.enable(7),N.iridescence&&d.enable(8),N.alphaTest&&d.enable(9),N.vertexColors&&d.enable(10),N.vertexAlphas&&d.enable(11),N.vertexUv1s&&d.enable(12),N.vertexUv2s&&d.enable(13),N.vertexUv3s&&d.enable(14),N.vertexTangents&&d.enable(15),N.anisotropy&&d.enable(16),N.alphaHash&&d.enable(17),N.batching&&d.enable(18),N.dispersion&&d.enable(19),N.batchingColor&&d.enable(20),N.gradientMap&&d.enable(21),N.packedNormalMap&&d.enable(22),N.vertexNormals&&d.enable(23),M.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reversedDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),N.numLightProbeGrids>0&&d.enable(22),N.hasPositionAttribute&&d.enable(23),M.push(d.mask)}function O(M){const N=E[M.type];let W;if(N){const j=ri[N];W=Hh.clone(j.uniforms)}else W=M.uniforms;return W}function R(M,N){let W=v.get(N);return W!==void 0?++W.usedTimes:(W=new w3(r,N,M,o),m.push(W),v.set(N,W)),W}function D(M){if(--M.usedTimes===0){const N=m.indexOf(M);m[N]=m[m.length-1],m.pop(),v.delete(M.cacheKey),M.destroy()}}function P(M){h.remove(M)}function U(){h.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:O,acquireProgram:R,releaseProgram:D,releaseShaderCache:P,programs:m,dispose:U}}function N3(){let r=new WeakMap;function e(d){return r.has(d)}function t(d){let h=r.get(d);return h===void 0&&(h={},r.set(d,h)),h}function s(d){r.delete(d)}function o(d,h,p){r.get(d)[h]=p}function c(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:c}}function I3(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function jx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Hx(){const r=[];let e=0;const t=[],s=[],o=[];function c(){e=0,t.length=0,s.length=0,o.length=0}function d(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function h(g,E,w,C,y,S){let B=r[e];return B===void 0?(B={id:g.id,object:g,geometry:E,material:w,materialVariant:d(g),groupOrder:C,renderOrder:g.renderOrder,z:y,group:S},r[e]=B):(B.id=g.id,B.object=g,B.geometry=E,B.material=w,B.materialVariant=d(g),B.groupOrder=C,B.renderOrder=g.renderOrder,B.z=y,B.group=S),e++,B}function p(g,E,w,C,y,S){const B=h(g,E,w,C,y,S);w.transmission>0?s.push(B):w.transparent===!0?o.push(B):t.push(B)}function m(g,E,w,C,y,S){const B=h(g,E,w,C,y,S);w.transmission>0?s.unshift(B):w.transparent===!0?o.unshift(B):t.unshift(B)}function v(g,E,w){t.length>1&&t.sort(g||I3),s.length>1&&s.sort(E||jx),o.length>1&&o.sort(E||jx),w&&(t.reverse(),s.reverse(),o.reverse())}function _(){for(let g=e,E=r.length;g<E;g++){const w=r[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:s,transparent:o,init:c,push:p,unshift:m,finish:_,sort:v}}function D3(){let r=new WeakMap;function e(s,o){const c=r.get(s);let d;return c===void 0?(d=new Hx,r.set(s,[d])):o>=c.length?(d=new Hx,c.push(d)):d=c[o],d}function t(){r=new WeakMap}return{get:e,dispose:t}}function L3(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new vt};break;case"SpotLight":t={position:new J,direction:new J,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=t,t}}}function F3(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let U3=0;function k3(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function B3(r){const e=new L3,t=F3(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new J);const o=new J,c=new Zt,d=new Zt;function h(m){let v=0,_=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let E=0,w=0,C=0,y=0,S=0,B=0,O=0,R=0,D=0,P=0,U=0;m.sort(k3);for(let N=0,W=m.length;N<W;N++){const j=m[N],Q=j.color,z=j.intensity,te=j.distance;let V=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===js?V=j.shadow.map.texture:V=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)v+=Q.r*z,_+=Q.g*z,g+=Q.b*z;else if(j.isLightProbe){for(let oe=0;oe<9;oe++)s.probe[oe].addScaledVector(j.sh.coefficients[oe],z);U++}else if(j.isDirectionalLight){const oe=e.get(j);if(oe.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const $=j.shadow,K=t.get(j);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,s.directionalShadow[E]=K,s.directionalShadowMap[E]=V,s.directionalShadowMatrix[E]=j.shadow.matrix,B++}s.directional[E]=oe,E++}else if(j.isSpotLight){const oe=e.get(j);oe.position.setFromMatrixPosition(j.matrixWorld),oe.color.copy(Q).multiplyScalar(z),oe.distance=te,oe.coneCos=Math.cos(j.angle),oe.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),oe.decay=j.decay,s.spot[C]=oe;const $=j.shadow;if(j.map&&(s.spotLightMap[D]=j.map,D++,$.updateMatrices(j),j.castShadow&&P++),s.spotLightMatrix[C]=$.matrix,j.castShadow){const K=t.get(j);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,s.spotShadow[C]=K,s.spotShadowMap[C]=V,R++}C++}else if(j.isRectAreaLight){const oe=e.get(j);oe.color.copy(Q).multiplyScalar(z),oe.halfWidth.set(j.width*.5,0,0),oe.halfHeight.set(0,j.height*.5,0),s.rectArea[y]=oe,y++}else if(j.isPointLight){const oe=e.get(j);if(oe.color.copy(j.color).multiplyScalar(j.intensity),oe.distance=j.distance,oe.decay=j.decay,j.castShadow){const $=j.shadow,K=t.get(j);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,K.shadowCameraNear=$.camera.near,K.shadowCameraFar=$.camera.far,s.pointShadow[w]=K,s.pointShadowMap[w]=V,s.pointShadowMatrix[w]=j.shadow.matrix,O++}s.point[w]=oe,w++}else if(j.isHemisphereLight){const oe=e.get(j);oe.skyColor.copy(j.color).multiplyScalar(z),oe.groundColor.copy(j.groundColor).multiplyScalar(z),s.hemi[S]=oe,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=g;const M=s.hash;(M.directionalLength!==E||M.pointLength!==w||M.spotLength!==C||M.rectAreaLength!==y||M.hemiLength!==S||M.numDirectionalShadows!==B||M.numPointShadows!==O||M.numSpotShadows!==R||M.numSpotMaps!==D||M.numLightProbes!==U)&&(s.directional.length=E,s.spot.length=C,s.rectArea.length=y,s.point.length=w,s.hemi.length=S,s.directionalShadow.length=B,s.directionalShadowMap.length=B,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=B,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=R+D-P,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=U,M.directionalLength=E,M.pointLength=w,M.spotLength=C,M.rectAreaLength=y,M.hemiLength=S,M.numDirectionalShadows=B,M.numPointShadows=O,M.numSpotShadows=R,M.numSpotMaps=D,M.numLightProbes=U,s.version=U3++)}function p(m,v){let _=0,g=0,E=0,w=0,C=0;const y=v.matrixWorldInverse;for(let S=0,B=m.length;S<B;S++){const O=m[S];if(O.isDirectionalLight){const R=s.directional[_];R.direction.setFromMatrixPosition(O.matrixWorld),o.setFromMatrixPosition(O.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),_++}else if(O.isSpotLight){const R=s.spot[E];R.position.setFromMatrixPosition(O.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(O.matrixWorld),o.setFromMatrixPosition(O.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),E++}else if(O.isRectAreaLight){const R=s.rectArea[w];R.position.setFromMatrixPosition(O.matrixWorld),R.position.applyMatrix4(y),d.identity(),c.copy(O.matrixWorld),c.premultiply(y),d.extractRotation(c),R.halfWidth.set(O.width*.5,0,0),R.halfHeight.set(0,O.height*.5,0),R.halfWidth.applyMatrix4(d),R.halfHeight.applyMatrix4(d),w++}else if(O.isPointLight){const R=s.point[g];R.position.setFromMatrixPosition(O.matrixWorld),R.position.applyMatrix4(y),g++}else if(O.isHemisphereLight){const R=s.hemi[C];R.direction.setFromMatrixPosition(O.matrixWorld),R.direction.transformDirection(y),C++}}}return{setup:h,setupView:p,state:s}}function Vx(r){const e=new B3(r),t=[],s=[],o=[];function c(g){_.camera=g,t.length=0,s.length=0,o.length=0}function d(g){t.push(g)}function h(g){s.push(g)}function p(g){o.push(g)}function m(){e.setup(t)}function v(g){e.setupView(t,g)}const _={lightsArray:t,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:m,setupLightsView:v,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function O3(r){let e=new WeakMap;function t(o,c=0){const d=e.get(o);let h;return d===void 0?(h=new Vx(r),e.set(o,[h])):c>=d.length?(h=new Vx(r),d.push(h)):h=d[c],h}function s(){e=new WeakMap}return{get:t,dispose:s}}const z3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,H3=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],V3=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Gx=new Zt,Fo=new J,Sf=new J;function G3(r,e,t){let s=new Ng;const o=new Nt,c=new Nt,d=new Wt,h=new $S,p=new ey,m={},v=t.maxTextureSize,_={[fs]:si,[si]:fs,[ar]:ar},g=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:z3,fragmentShader:j3}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const w=new ai;w.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Fn(w,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc;let S=this.type;this.render=function(P,U,M){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===E_&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Lc);const N=r.getRenderTarget(),W=r.getActiveCubeFace(),j=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(Rr),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const z=S!==this.type;z&&U.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(V=>V.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,V=P.length;te<V;te++){const oe=P[te],$=oe.shadow;if($===void 0){ct("WebGLShadowMap:",oe,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;o.copy($.mapSize);const K=$.getFrameExtents();o.multiply(K),c.copy($.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/K.x),o.x=c.x*K.x,$.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/K.y),o.y=c.y*K.y,$.mapSize.y=c.y));const ie=r.state.buffers.depth.getReversed();if($.camera._reversedDepth=ie,$.map===null||z===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Bo){if(oe.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new ur(o.x,o.y,{format:js,type:Dr,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),$.map.texture.name=oe.name+".shadowMap",$.map.depthTexture=new Va(o.x,o.y,Gi),$.map.depthTexture.name=oe.name+".shadowMapDepth",$.map.depthTexture.format=Lr,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Un,$.map.depthTexture.magFilter=Un}else oe.isPointLight?($.map=new zg(o.x),$.map.depthTexture=new YS(o.x,dr)):($.map=new ur(o.x,o.y),$.map.depthTexture=new Va(o.x,o.y,dr)),$.map.depthTexture.name=oe.name+".shadowMap",$.map.depthTexture.format=Lr,this.type===Lc?($.map.depthTexture.compareFunction=ie?Fh:Lh,$.map.depthTexture.minFilter=Tn,$.map.depthTexture.magFilter=Tn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Un,$.map.depthTexture.magFilter=Un);$.camera.updateProjectionMatrix()}const he=$.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<he;k++){if($.map.isWebGLCubeRenderTarget)r.setRenderTarget($.map,k),r.clear();else{k===0&&(r.setRenderTarget($.map),r.clear());const ee=$.getViewport(k);d.set(c.x*ee.x,c.y*ee.y,c.x*ee.z,c.y*ee.w),Q.viewport(d)}if(oe.isPointLight){const ee=$.camera,Oe=$.matrix,Ke=oe.distance||ee.far;Ke!==ee.far&&(ee.far=Ke,ee.updateProjectionMatrix()),Fo.setFromMatrixPosition(oe.matrixWorld),ee.position.copy(Fo),Sf.copy(ee.position),Sf.add(H3[k]),ee.up.copy(V3[k]),ee.lookAt(Sf),ee.updateMatrixWorld(),Oe.makeTranslation(-Fo.x,-Fo.y,-Fo.z),Gx.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Gx,ee.coordinateSystem,ee.reversedDepth)}else $.updateMatrices(oe);s=$.getFrustum(),R(U,M,$.camera,oe,this.type)}$.isPointLightShadow!==!0&&this.type===Bo&&B($,M),$.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(N,W,j)};function B(P,U){const M=e.update(C);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,E.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ur(o.x,o.y,{format:js,type:Dr})),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(U,null,M,g,C,null),E.uniforms.shadow_pass.value=P.mapPass.texture,E.uniforms.resolution.value=P.mapSize,E.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(U,null,M,E,C,null)}function O(P,U,M,N){let W=null;const j=M.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(j!==void 0)W=j;else if(W=M.isPointLight===!0?p:h,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const Q=W.uuid,z=U.uuid;let te=m[Q];te===void 0&&(te={},m[Q]=te);let V=te[z];V===void 0&&(V=W.clone(),te[z]=V,U.addEventListener("dispose",D)),W=V}if(W.visible=U.visible,W.wireframe=U.wireframe,N===Bo?W.side=U.shadowSide!==null?U.shadowSide:U.side:W.side=U.shadowSide!==null?U.shadowSide:_[U.side],W.alphaMap=U.alphaMap,W.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,W.map=U.map,W.clipShadows=U.clipShadows,W.clippingPlanes=U.clippingPlanes,W.clipIntersection=U.clipIntersection,W.displacementMap=U.displacementMap,W.displacementScale=U.displacementScale,W.displacementBias=U.displacementBias,W.wireframeLinewidth=U.wireframeLinewidth,W.linewidth=U.linewidth,M.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const Q=r.properties.get(W);Q.light=M}return W}function R(P,U,M,N,W){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&W===Bo)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,P.matrixWorld);const z=e.update(P),te=P.material;if(Array.isArray(te)){const V=z.groups;for(let oe=0,$=V.length;oe<$;oe++){const K=V[oe],ie=te[K.materialIndex];if(ie&&ie.visible){const he=O(P,ie,N,W);P.onBeforeShadow(r,P,U,M,z,he,K),r.renderBufferDirect(M,null,z,he,P,K),P.onAfterShadow(r,P,U,M,z,he,K)}}}else if(te.visible){const V=O(P,te,N,W);P.onBeforeShadow(r,P,U,M,z,V,null),r.renderBufferDirect(M,null,z,V,P,null),P.onAfterShadow(r,P,U,M,z,V,null)}}const Q=P.children;for(let z=0,te=Q.length;z<te;z++)R(Q[z],U,M,N,W)}function D(P){P.target.removeEventListener("dispose",D);for(const M in m){const N=m[M],W=P.target.uuid;W in N&&(N[W].dispose(),delete N[W])}}}function W3(r,e){function t(){let G=!1;const Te=new Wt;let ge=null;const De=new Wt(0,0,0,0);return{setMask:function(Fe){ge!==Fe&&!G&&(r.colorMask(Fe,Fe,Fe,Fe),ge=Fe)},setLocked:function(Fe){G=Fe},setClear:function(Fe,F,ne,_e,Ue){Ue===!0&&(Fe*=_e,F*=_e,ne*=_e),Te.set(Fe,F,ne,_e),De.equals(Te)===!1&&(r.clearColor(Fe,F,ne,_e),De.copy(Te))},reset:function(){G=!1,ge=null,De.set(-1,0,0,0)}}}function s(){let G=!1,Te=!1,ge=null,De=null,Fe=null;return{setReversed:function(F){if(Te!==F){const ne=e.get("EXT_clip_control");F?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),Te=F;const _e=Fe;Fe=null,this.setClear(_e)}},getReversed:function(){return Te},setTest:function(F){F?ve(r.DEPTH_TEST):Be(r.DEPTH_TEST)},setMask:function(F){ge!==F&&!G&&(r.depthMask(F),ge=F)},setFunc:function(F){if(Te&&(F=nS[F]),De!==F){switch(F){case If:r.depthFunc(r.NEVER);break;case Df:r.depthFunc(r.ALWAYS);break;case Lf:r.depthFunc(r.LESS);break;case ja:r.depthFunc(r.LEQUAL);break;case Ff:r.depthFunc(r.EQUAL);break;case Uf:r.depthFunc(r.GEQUAL);break;case kf:r.depthFunc(r.GREATER);break;case Bf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}De=F}},setLocked:function(F){G=F},setClear:function(F){Fe!==F&&(Fe=F,Te&&(F=1-F),r.clearDepth(F))},reset:function(){G=!1,ge=null,De=null,Fe=null,Te=!1}}}function o(){let G=!1,Te=null,ge=null,De=null,Fe=null,F=null,ne=null,_e=null,Ue=null;return{setTest:function(ke){G||(ke?ve(r.STENCIL_TEST):Be(r.STENCIL_TEST))},setMask:function(ke){Te!==ke&&!G&&(r.stencilMask(ke),Te=ke)},setFunc:function(ke,Xe,Tt){(ge!==ke||De!==Xe||Fe!==Tt)&&(r.stencilFunc(ke,Xe,Tt),ge=ke,De=Xe,Fe=Tt)},setOp:function(ke,Xe,Tt){(F!==ke||ne!==Xe||_e!==Tt)&&(r.stencilOp(ke,Xe,Tt),F=ke,ne=Xe,_e=Tt)},setLocked:function(ke){G=ke},setClear:function(ke){Ue!==ke&&(r.clearStencil(ke),Ue=ke)},reset:function(){G=!1,Te=null,ge=null,De=null,Fe=null,F=null,ne=null,_e=null,Ue=null}}}const c=new t,d=new s,h=new o,p=new WeakMap,m=new WeakMap;let v={},_={},g={},E=new WeakMap,w=[],C=null,y=!1,S=null,B=null,O=null,R=null,D=null,P=null,U=null,M=new vt(0,0,0),N=0,W=!1,j=null,Q=null,z=null,te=null,V=null;const oe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,K=0;const ie=r.getParameter(r.VERSION);ie.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ie)[1]),$=K>=1):ie.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),$=K>=2);let he=null,k={};const ee=r.getParameter(r.SCISSOR_BOX),Oe=r.getParameter(r.VIEWPORT),Ke=new Wt().fromArray(ee),Ve=new Wt().fromArray(Oe);function ue(G,Te,ge,De){const Fe=new Uint8Array(4),F=r.createTexture();r.bindTexture(G,F),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ne=0;ne<ge;ne++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(Te,0,r.RGBA,1,1,De,0,r.RGBA,r.UNSIGNED_BYTE,Fe):r.texImage2D(Te+ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Fe);return F}const Se={};Se[r.TEXTURE_2D]=ue(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ve(r.DEPTH_TEST),d.setFunc(ja),Yt(!1),Jt(U0),ve(r.CULL_FACE),_t(Rr);function ve(G){v[G]!==!0&&(r.enable(G),v[G]=!0)}function Be(G){v[G]!==!1&&(r.disable(G),v[G]=!1)}function Ze(G,Te){return g[G]!==Te?(r.bindFramebuffer(G,Te),g[G]=Te,G===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Te),G===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Te),!0):!1}function nt(G,Te){let ge=w,De=!1;if(G){ge=E.get(Te),ge===void 0&&(ge=[],E.set(Te,ge));const Fe=G.textures;if(ge.length!==Fe.length||ge[0]!==r.COLOR_ATTACHMENT0){for(let F=0,ne=Fe.length;F<ne;F++)ge[F]=r.COLOR_ATTACHMENT0+F;ge.length=Fe.length,De=!0}}else ge[0]!==r.BACK&&(ge[0]=r.BACK,De=!0);De&&r.drawBuffers(ge)}function Ft(G){return C!==G?(r.useProgram(G),C=G,!0):!1}const lt={[Ls]:r.FUNC_ADD,[w_]:r.FUNC_SUBTRACT,[b_]:r.FUNC_REVERSE_SUBTRACT};lt[T_]=r.MIN,lt[C_]=r.MAX;const wt={[R_]:r.ZERO,[P_]:r.ONE,[N_]:r.SRC_COLOR,[Pf]:r.SRC_ALPHA,[k_]:r.SRC_ALPHA_SATURATE,[F_]:r.DST_COLOR,[D_]:r.DST_ALPHA,[I_]:r.ONE_MINUS_SRC_COLOR,[Nf]:r.ONE_MINUS_SRC_ALPHA,[U_]:r.ONE_MINUS_DST_COLOR,[L_]:r.ONE_MINUS_DST_ALPHA,[B_]:r.CONSTANT_COLOR,[O_]:r.ONE_MINUS_CONSTANT_COLOR,[z_]:r.CONSTANT_ALPHA,[j_]:r.ONE_MINUS_CONSTANT_ALPHA};function _t(G,Te,ge,De,Fe,F,ne,_e,Ue,ke){if(G===Rr){y===!0&&(Be(r.BLEND),y=!1);return}if(y===!1&&(ve(r.BLEND),y=!0),G!==M_){if(G!==S||ke!==W){if((B!==Ls||D!==Ls)&&(r.blendEquation(r.FUNC_ADD),B=Ls,D=Ls),ke)switch(G){case Ua:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case k0:r.blendFunc(r.ONE,r.ONE);break;case B0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case O0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Pt("WebGLState: Invalid blending: ",G);break}else switch(G){case Ua:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case k0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case B0:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case O0:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",G);break}O=null,R=null,P=null,U=null,M.set(0,0,0),N=0,S=G,W=ke}return}Fe=Fe||Te,F=F||ge,ne=ne||De,(Te!==B||Fe!==D)&&(r.blendEquationSeparate(lt[Te],lt[Fe]),B=Te,D=Fe),(ge!==O||De!==R||F!==P||ne!==U)&&(r.blendFuncSeparate(wt[ge],wt[De],wt[F],wt[ne]),O=ge,R=De,P=F,U=ne),(_e.equals(M)===!1||Ue!==N)&&(r.blendColor(_e.r,_e.g,_e.b,Ue),M.copy(_e),N=Ue),S=G,W=!1}function pt(G,Te){G.side===ar?Be(r.CULL_FACE):ve(r.CULL_FACE);let ge=G.side===si;Te&&(ge=!ge),Yt(ge),G.blending===Ua&&G.transparent===!1?_t(Rr):_t(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),c.setMask(G.colorWrite);const De=G.stencilWrite;h.setTest(De),De&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Bt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ve(r.SAMPLE_ALPHA_TO_COVERAGE):Be(r.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(G){j!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),j=G)}function Jt(G){G!==y_?(ve(r.CULL_FACE),G!==Q&&(G===U0?r.cullFace(r.BACK):G===A_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Be(r.CULL_FACE),Q=G}function Kt(G){G!==z&&($&&r.lineWidth(G),z=G)}function Bt(G,Te,ge){G?(ve(r.POLYGON_OFFSET_FILL),(te!==Te||V!==ge)&&(te=Te,V=ge,d.getReversed()&&(Te=-Te),r.polygonOffset(Te,ge))):Be(r.POLYGON_OFFSET_FILL)}function Ut(G){G?ve(r.SCISSOR_TEST):Be(r.SCISSOR_TEST)}function It(G){G===void 0&&(G=r.TEXTURE0+oe-1),he!==G&&(r.activeTexture(G),he=G)}function X(G,Te,ge){ge===void 0&&(he===null?ge=r.TEXTURE0+oe-1:ge=he);let De=k[ge];De===void 0&&(De={type:void 0,texture:void 0},k[ge]=De),(De.type!==G||De.texture!==Te)&&(he!==ge&&(r.activeTexture(ge),he=ge),r.bindTexture(G,Te||Se[G]),De.type=G,De.texture=Te)}function mn(){const G=k[he];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function bt(){try{r.compressedTexImage2D(...arguments)}catch(G){Pt("WebGLState:",G)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(G){Pt("WebGLState:",G)}}function A(){try{r.texSubImage2D(...arguments)}catch(G){Pt("WebGLState:",G)}}function Z(){try{r.texSubImage3D(...arguments)}catch(G){Pt("WebGLState:",G)}}function se(){try{r.compressedTexSubImage2D(...arguments)}catch(G){Pt("WebGLState:",G)}}function pe(){try{r.compressedTexSubImage3D(...arguments)}catch(G){Pt("WebGLState:",G)}}function Me(){try{r.texStorage2D(...arguments)}catch(G){Pt("WebGLState:",G)}}function Pe(){try{r.texStorage3D(...arguments)}catch(G){Pt("WebGLState:",G)}}function me(){try{r.texImage2D(...arguments)}catch(G){Pt("WebGLState:",G)}}function xe(){try{r.texImage3D(...arguments)}catch(G){Pt("WebGLState:",G)}}function Ne(G){return _[G]!==void 0?_[G]:r.getParameter(G)}function We(G,Te){_[G]!==Te&&(r.pixelStorei(G,Te),_[G]=Te)}function Ie(G){Ke.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),Ke.copy(G))}function Ce(G){Ve.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),Ve.copy(G))}function Je(G,Te){let ge=m.get(Te);ge===void 0&&(ge=new WeakMap,m.set(Te,ge));let De=ge.get(G);De===void 0&&(De=r.getUniformBlockIndex(Te,G.name),ge.set(G,De))}function rt(G,Te){const De=m.get(Te).get(G);p.get(Te)!==De&&(r.uniformBlockBinding(Te,De,G.__bindingPointIndex),p.set(Te,De))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},_={},he=null,k={},g={},E=new WeakMap,w=[],C=null,y=!1,S=null,B=null,O=null,R=null,D=null,P=null,U=null,M=new vt(0,0,0),N=0,W=!1,j=null,Q=null,z=null,te=null,V=null,Ke.set(0,0,r.canvas.width,r.canvas.height),Ve.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ve,disable:Be,bindFramebuffer:Ze,drawBuffers:nt,useProgram:Ft,setBlending:_t,setMaterial:pt,setFlipSided:Yt,setCullFace:Jt,setLineWidth:Kt,setPolygonOffset:Bt,setScissorTest:Ut,activeTexture:It,bindTexture:X,unbindTexture:mn,compressedTexImage2D:bt,compressedTexImage3D:I,texImage2D:me,texImage3D:xe,pixelStorei:We,getParameter:Ne,updateUBOMapping:Je,uniformBlockBinding:rt,texStorage2D:Me,texStorage3D:Pe,texSubImage2D:A,texSubImage3D:Z,compressedTexSubImage2D:se,compressedTexSubImage3D:pe,scissor:Ie,viewport:Ce,reset:st}}function X3(r,e,t,s,o,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Nt,v=new WeakMap,_=new Set;let g;const E=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(I,A){return w?new OffscreenCanvas(I,A):Wc("canvas")}function y(I,A,Z){let se=1;const pe=bt(I);if((pe.width>Z||pe.height>Z)&&(se=Z/Math.max(pe.width,pe.height)),se<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Me=Math.floor(se*pe.width),Pe=Math.floor(se*pe.height);g===void 0&&(g=C(Me,Pe));const me=A?C(Me,Pe):g;return me.width=Me,me.height=Pe,me.getContext("2d").drawImage(I,0,0,Me,Pe),ct("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Me+"x"+Pe+")."),me}else return"data"in I&&ct("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),I;return I}function S(I){return I.generateMipmaps}function B(I){r.generateMipmap(I)}function O(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function R(I,A,Z,se,pe,Me=!1){if(I!==null){if(r[I]!==void 0)return r[I];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Pe;se&&(Pe=e.get("EXT_texture_norm16"),Pe||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=A;if(A===r.RED&&(Z===r.FLOAT&&(me=r.R32F),Z===r.HALF_FLOAT&&(me=r.R16F),Z===r.UNSIGNED_BYTE&&(me=r.R8),Z===r.UNSIGNED_SHORT&&Pe&&(me=Pe.R16_EXT),Z===r.SHORT&&Pe&&(me=Pe.R16_SNORM_EXT)),A===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(me=r.R8UI),Z===r.UNSIGNED_SHORT&&(me=r.R16UI),Z===r.UNSIGNED_INT&&(me=r.R32UI),Z===r.BYTE&&(me=r.R8I),Z===r.SHORT&&(me=r.R16I),Z===r.INT&&(me=r.R32I)),A===r.RG&&(Z===r.FLOAT&&(me=r.RG32F),Z===r.HALF_FLOAT&&(me=r.RG16F),Z===r.UNSIGNED_BYTE&&(me=r.RG8),Z===r.UNSIGNED_SHORT&&Pe&&(me=Pe.RG16_EXT),Z===r.SHORT&&Pe&&(me=Pe.RG16_SNORM_EXT)),A===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(me=r.RG8UI),Z===r.UNSIGNED_SHORT&&(me=r.RG16UI),Z===r.UNSIGNED_INT&&(me=r.RG32UI),Z===r.BYTE&&(me=r.RG8I),Z===r.SHORT&&(me=r.RG16I),Z===r.INT&&(me=r.RG32I)),A===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(me=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(me=r.RGB16UI),Z===r.UNSIGNED_INT&&(me=r.RGB32UI),Z===r.BYTE&&(me=r.RGB8I),Z===r.SHORT&&(me=r.RGB16I),Z===r.INT&&(me=r.RGB32I)),A===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(me=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(me=r.RGBA16UI),Z===r.UNSIGNED_INT&&(me=r.RGBA32UI),Z===r.BYTE&&(me=r.RGBA8I),Z===r.SHORT&&(me=r.RGBA16I),Z===r.INT&&(me=r.RGBA32I)),A===r.RGB&&(Z===r.UNSIGNED_SHORT&&Pe&&(me=Pe.RGB16_EXT),Z===r.SHORT&&Pe&&(me=Pe.RGB16_SNORM_EXT),Z===r.UNSIGNED_INT_5_9_9_9_REV&&(me=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(me=r.R11F_G11F_B10F)),A===r.RGBA){const xe=Me?Vc:Ct.getTransfer(pe);Z===r.FLOAT&&(me=r.RGBA32F),Z===r.HALF_FLOAT&&(me=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(me=xe===jt?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT&&Pe&&(me=Pe.RGBA16_EXT),Z===r.SHORT&&Pe&&(me=Pe.RGBA16_SNORM_EXT),Z===r.UNSIGNED_SHORT_4_4_4_4&&(me=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(me=r.RGB5_A1)}return(me===r.R16F||me===r.R32F||me===r.RG16F||me===r.RG32F||me===r.RGBA16F||me===r.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function D(I,A){let Z;return I?A===null||A===dr||A===Go?Z=r.DEPTH24_STENCIL8:A===Gi?Z=r.DEPTH32F_STENCIL8:A===Vo&&(Z=r.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===dr||A===Go?Z=r.DEPTH_COMPONENT24:A===Gi?Z=r.DEPTH_COMPONENT32F:A===Vo&&(Z=r.DEPTH_COMPONENT16),Z}function P(I,A){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==Un&&I.minFilter!==Tn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function U(I){const A=I.target;A.removeEventListener("dispose",U),N(A),A.isVideoTexture&&v.delete(A),A.isHTMLTexture&&_.delete(A)}function M(I){const A=I.target;A.removeEventListener("dispose",M),j(A)}function N(I){const A=s.get(I);if(A.__webglInit===void 0)return;const Z=I.source,se=E.get(Z);if(se){const pe=se[A.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&W(I),Object.keys(se).length===0&&E.delete(Z)}s.remove(I)}function W(I){const A=s.get(I);r.deleteTexture(A.__webglTexture);const Z=I.source,se=E.get(Z);delete se[A.__cacheKey],d.memory.textures--}function j(I){const A=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(A.__webglFramebuffer[se]))for(let pe=0;pe<A.__webglFramebuffer[se].length;pe++)r.deleteFramebuffer(A.__webglFramebuffer[se][pe]);else r.deleteFramebuffer(A.__webglFramebuffer[se]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[se])}else{if(Array.isArray(A.__webglFramebuffer))for(let se=0;se<A.__webglFramebuffer.length;se++)r.deleteFramebuffer(A.__webglFramebuffer[se]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let se=0;se<A.__webglColorRenderbuffer.length;se++)A.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[se]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=I.textures;for(let se=0,pe=Z.length;se<pe;se++){const Me=s.get(Z[se]);Me.__webglTexture&&(r.deleteTexture(Me.__webglTexture),d.memory.textures--),s.remove(Z[se])}s.remove(I)}let Q=0;function z(){Q=0}function te(){return Q}function V(I){Q=I}function oe(){const I=Q;return I>=o.maxTextures&&ct("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),Q+=1,I}function $(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function K(I,A){const Z=s.get(I);if(I.isVideoTexture&&X(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Z.__version!==I.version){const se=I.image;if(se===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(Z,I,A);return}}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+A)}function ie(I,A){const Z=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){Be(Z,I,A);return}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+A)}function he(I,A){const Z=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){Be(Z,I,A);return}t.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+A)}function k(I,A){const Z=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Z.__version!==I.version){Ze(Z,I,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+A)}const ee={[Of]:r.REPEAT,[Vi]:r.CLAMP_TO_EDGE,[zf]:r.MIRRORED_REPEAT},Oe={[Un]:r.NEAREST,[G_]:r.NEAREST_MIPMAP_NEAREST,[ql]:r.NEAREST_MIPMAP_LINEAR,[Tn]:r.LINEAR,[Hd]:r.LINEAR_MIPMAP_NEAREST,[ks]:r.LINEAR_MIPMAP_LINEAR},Ke={[Y_]:r.NEVER,[J_]:r.ALWAYS,[K_]:r.LESS,[Lh]:r.LEQUAL,[Q_]:r.EQUAL,[Fh]:r.GEQUAL,[q_]:r.GREATER,[Z_]:r.NOTEQUAL};function Ve(I,A){if(A.type===Gi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Tn||A.magFilter===Hd||A.magFilter===ql||A.magFilter===ks||A.minFilter===Tn||A.minFilter===Hd||A.minFilter===ql||A.minFilter===ks)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,ee[A.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,ee[A.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,ee[A.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,Oe[A.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,Oe[A.minFilter]),A.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,Ke[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Un||A.minFilter!==ql&&A.minFilter!==ks||A.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function ue(I,A){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",U));const se=A.source;let pe=E.get(se);pe===void 0&&(pe={},E.set(se,pe));const Me=$(A);if(Me!==I.__cacheKey){pe[Me]===void 0&&(pe[Me]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,Z=!0),pe[Me].usedTimes++;const Pe=pe[I.__cacheKey];Pe!==void 0&&(pe[I.__cacheKey].usedTimes--,Pe.usedTimes===0&&W(A)),I.__cacheKey=Me,I.__webglTexture=pe[Me].texture}return Z}function Se(I,A,Z){return Math.floor(Math.floor(I/Z)/A)}function ve(I,A,Z,se){const Me=I.updateRanges;if(Me.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,Z,se,A.data);else{Me.sort((We,Ie)=>We.start-Ie.start);let Pe=0;for(let We=1;We<Me.length;We++){const Ie=Me[Pe],Ce=Me[We],Je=Ie.start+Ie.count,rt=Se(Ce.start,A.width,4),st=Se(Ie.start,A.width,4);Ce.start<=Je+1&&rt===st&&Se(Ce.start+Ce.count-1,A.width,4)===rt?Ie.count=Math.max(Ie.count,Ce.start+Ce.count-Ie.start):(++Pe,Me[Pe]=Ce)}Me.length=Pe+1;const me=t.getParameter(r.UNPACK_ROW_LENGTH),xe=t.getParameter(r.UNPACK_SKIP_PIXELS),Ne=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let We=0,Ie=Me.length;We<Ie;We++){const Ce=Me[We],Je=Math.floor(Ce.start/4),rt=Math.ceil(Ce.count/4),st=Je%A.width,G=Math.floor(Je/A.width),Te=rt,ge=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,st),t.pixelStorei(r.UNPACK_SKIP_ROWS,G),t.texSubImage2D(r.TEXTURE_2D,0,st,G,Te,ge,Z,se,A.data)}I.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,me),t.pixelStorei(r.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(r.UNPACK_SKIP_ROWS,Ne)}}function Be(I,A,Z){let se=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(se=r.TEXTURE_3D);const pe=ue(I,A),Me=A.source;t.bindTexture(se,I.__webglTexture,r.TEXTURE0+Z);const Pe=s.get(Me);if(Me.version!==Pe.__version||pe===!0){if(t.activeTexture(r.TEXTURE0+Z),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const ge=Ct.getPrimaries(Ct.workingColorSpace),De=A.colorSpace===cs?null:Ct.getPrimaries(A.colorSpace),Fe=A.colorSpace===cs||ge===De?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment);let xe=y(A.image,!1,o.maxTextureSize);xe=mn(A,xe);const Ne=c.convert(A.format,A.colorSpace),We=c.convert(A.type);let Ie=R(A.internalFormat,Ne,We,A.normalized,A.colorSpace,A.isVideoTexture);Ve(se,A);let Ce;const Je=A.mipmaps,rt=A.isVideoTexture!==!0,st=Pe.__version===void 0||pe===!0,G=Me.dataReady,Te=P(A,xe);if(A.isDepthTexture)Ie=D(A.format===Bs,A.type),st&&(rt?t.texStorage2D(r.TEXTURE_2D,1,Ie,xe.width,xe.height):t.texImage2D(r.TEXTURE_2D,0,Ie,xe.width,xe.height,0,Ne,We,null));else if(A.isDataTexture)if(Je.length>0){rt&&st&&t.texStorage2D(r.TEXTURE_2D,Te,Ie,Je[0].width,Je[0].height);for(let ge=0,De=Je.length;ge<De;ge++)Ce=Je[ge],rt?G&&t.texSubImage2D(r.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,Ne,We,Ce.data):t.texImage2D(r.TEXTURE_2D,ge,Ie,Ce.width,Ce.height,0,Ne,We,Ce.data);A.generateMipmaps=!1}else rt?(st&&t.texStorage2D(r.TEXTURE_2D,Te,Ie,xe.width,xe.height),G&&ve(A,xe,Ne,We)):t.texImage2D(r.TEXTURE_2D,0,Ie,xe.width,xe.height,0,Ne,We,xe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){rt&&st&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Ie,Je[0].width,Je[0].height,xe.depth);for(let ge=0,De=Je.length;ge<De;ge++)if(Ce=Je[ge],A.format!==Wi)if(Ne!==null)if(rt){if(G)if(A.layerUpdates.size>0){const Fe=yx(Ce.width,Ce.height,A.format,A.type);for(const F of A.layerUpdates){const ne=Ce.data.subarray(F*Fe/Ce.data.BYTES_PER_ELEMENT,(F+1)*Fe/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,F,Ce.width,Ce.height,1,Ne,ne)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,xe.depth,Ne,Ce.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ge,Ie,Ce.width,Ce.height,xe.depth,0,Ce.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?G&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,xe.depth,Ne,We,Ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ge,Ie,Ce.width,Ce.height,xe.depth,0,Ne,We,Ce.data)}else{rt&&st&&t.texStorage2D(r.TEXTURE_2D,Te,Ie,Je[0].width,Je[0].height);for(let ge=0,De=Je.length;ge<De;ge++)Ce=Je[ge],A.format!==Wi?Ne!==null?rt?G&&t.compressedTexSubImage2D(r.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,Ne,Ce.data):t.compressedTexImage2D(r.TEXTURE_2D,ge,Ie,Ce.width,Ce.height,0,Ce.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?G&&t.texSubImage2D(r.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,Ne,We,Ce.data):t.texImage2D(r.TEXTURE_2D,ge,Ie,Ce.width,Ce.height,0,Ne,We,Ce.data)}else if(A.isDataArrayTexture)if(rt){if(st&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Ie,xe.width,xe.height,xe.depth),G)if(A.layerUpdates.size>0){const ge=yx(xe.width,xe.height,A.format,A.type);for(const De of A.layerUpdates){const Fe=xe.data.subarray(De*ge/xe.data.BYTES_PER_ELEMENT,(De+1)*ge/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,De,xe.width,xe.height,1,Ne,We,Fe)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ne,We,xe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ie,xe.width,xe.height,xe.depth,0,Ne,We,xe.data);else if(A.isData3DTexture)rt?(st&&t.texStorage3D(r.TEXTURE_3D,Te,Ie,xe.width,xe.height,xe.depth),G&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ne,We,xe.data)):t.texImage3D(r.TEXTURE_3D,0,Ie,xe.width,xe.height,xe.depth,0,Ne,We,xe.data);else if(A.isFramebufferTexture){if(st)if(rt)t.texStorage2D(r.TEXTURE_2D,Te,Ie,xe.width,xe.height);else{let ge=xe.width,De=xe.height;for(let Fe=0;Fe<Te;Fe++)t.texImage2D(r.TEXTURE_2D,Fe,Ie,ge,De,0,Ne,We,null),ge>>=1,De>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in r){const ge=r.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),xe.parentNode!==ge){ge.appendChild(xe),_.add(A),ge.onpaint=De=>{const Fe=De.changedElements;for(const F of _)Fe.includes(F.image)&&(F.needsUpdate=!0)},ge.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,xe);else{const Fe=r.RGBA,F=r.RGBA,ne=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Fe,F,ne,xe)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Je.length>0){if(rt&&st){const ge=bt(Je[0]);t.texStorage2D(r.TEXTURE_2D,Te,Ie,ge.width,ge.height)}for(let ge=0,De=Je.length;ge<De;ge++)Ce=Je[ge],rt?G&&t.texSubImage2D(r.TEXTURE_2D,ge,0,0,Ne,We,Ce):t.texImage2D(r.TEXTURE_2D,ge,Ie,Ne,We,Ce);A.generateMipmaps=!1}else if(rt){if(st){const ge=bt(xe);t.texStorage2D(r.TEXTURE_2D,Te,Ie,ge.width,ge.height)}G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,We,xe)}else t.texImage2D(r.TEXTURE_2D,0,Ie,Ne,We,xe);S(A)&&B(se),Pe.__version=Me.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Ze(I,A,Z){if(A.image.length!==6)return;const se=ue(I,A),pe=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+Z);const Me=s.get(pe);if(pe.version!==Me.__version||se===!0){t.activeTexture(r.TEXTURE0+Z);const Pe=Ct.getPrimaries(Ct.workingColorSpace),me=A.colorSpace===cs?null:Ct.getPrimaries(A.colorSpace),xe=A.colorSpace===cs||Pe===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ne=A.isCompressedTexture||A.image[0].isCompressedTexture,We=A.image[0]&&A.image[0].isDataTexture,Ie=[];for(let F=0;F<6;F++)!Ne&&!We?Ie[F]=y(A.image[F],!0,o.maxCubemapSize):Ie[F]=We?A.image[F].image:A.image[F],Ie[F]=mn(A,Ie[F]);const Ce=Ie[0],Je=c.convert(A.format,A.colorSpace),rt=c.convert(A.type),st=R(A.internalFormat,Je,rt,A.normalized,A.colorSpace),G=A.isVideoTexture!==!0,Te=Me.__version===void 0||se===!0,ge=pe.dataReady;let De=P(A,Ce);Ve(r.TEXTURE_CUBE_MAP,A);let Fe;if(Ne){G&&Te&&t.texStorage2D(r.TEXTURE_CUBE_MAP,De,st,Ce.width,Ce.height);for(let F=0;F<6;F++){Fe=Ie[F].mipmaps;for(let ne=0;ne<Fe.length;ne++){const _e=Fe[ne];A.format!==Wi?Je!==null?G?ge&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne,0,0,_e.width,_e.height,Je,_e.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne,st,_e.width,_e.height,0,_e.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne,0,0,_e.width,_e.height,Je,rt,_e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne,st,_e.width,_e.height,0,Je,rt,_e.data)}}}else{if(Fe=A.mipmaps,G&&Te){Fe.length>0&&De++;const F=bt(Ie[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,De,st,F.width,F.height)}for(let F=0;F<6;F++)if(We){G?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Ie[F].width,Ie[F].height,Je,rt,Ie[F].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,st,Ie[F].width,Ie[F].height,0,Je,rt,Ie[F].data);for(let ne=0;ne<Fe.length;ne++){const Ue=Fe[ne].image[F].image;G?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne+1,0,0,Ue.width,Ue.height,Je,rt,Ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne+1,st,Ue.width,Ue.height,0,Je,rt,Ue.data)}}else{G?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Je,rt,Ie[F]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,st,Je,rt,Ie[F]);for(let ne=0;ne<Fe.length;ne++){const _e=Fe[ne];G?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne+1,0,0,Je,rt,_e.image[F]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne+1,st,Je,rt,_e.image[F])}}}S(A)&&B(r.TEXTURE_CUBE_MAP),Me.__version=pe.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function nt(I,A,Z,se,pe,Me){const Pe=c.convert(Z.format,Z.colorSpace),me=c.convert(Z.type),xe=R(Z.internalFormat,Pe,me,Z.normalized,Z.colorSpace),Ne=s.get(A),We=s.get(Z);if(We.__renderTarget=A,!Ne.__hasExternalTextures){const Ie=Math.max(1,A.width>>Me),Ce=Math.max(1,A.height>>Me);pe===r.TEXTURE_3D||pe===r.TEXTURE_2D_ARRAY?t.texImage3D(pe,Me,xe,Ie,Ce,A.depth,0,Pe,me,null):t.texImage2D(pe,Me,xe,Ie,Ce,0,Pe,me,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),It(A)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,pe,We.__webglTexture,0,Ut(A)):(pe===r.TEXTURE_2D||pe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,pe,We.__webglTexture,Me),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ft(I,A,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,I),A.depthBuffer){const se=A.depthTexture,pe=se&&se.isDepthTexture?se.type:null,Me=D(A.stencilBuffer,pe),Pe=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;It(A)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ut(A),Me,A.width,A.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut(A),Me,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Me,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,I)}else{const se=A.textures;for(let pe=0;pe<se.length;pe++){const Me=se[pe],Pe=c.convert(Me.format,Me.colorSpace),me=c.convert(Me.type),xe=R(Me.internalFormat,Pe,me,Me.normalized,Me.colorSpace);It(A)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ut(A),xe,A.width,A.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut(A),xe,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,xe,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function lt(I,A,Z){const se=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=s.get(A.depthTexture);if(pe.__renderTarget=A,(!pe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),se){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,A.depthTexture.addEventListener("dispose",U)),pe.__webglTexture===void 0){pe.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),Ve(r.TEXTURE_CUBE_MAP,A.depthTexture);const Ne=c.convert(A.depthTexture.format),We=c.convert(A.depthTexture.type);let Ie;A.depthTexture.format===Lr?Ie=r.DEPTH_COMPONENT24:A.depthTexture.format===Bs&&(Ie=r.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Ie,A.width,A.height,0,Ne,We,null)}}else K(A.depthTexture,0);const Me=pe.__webglTexture,Pe=Ut(A),me=se?r.TEXTURE_CUBE_MAP_POSITIVE_X+Z:r.TEXTURE_2D,xe=A.depthTexture.format===Bs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(A.depthTexture.format===Lr)It(A)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,me,Me,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,xe,me,Me,0);else if(A.depthTexture.format===Bs)It(A)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,me,Me,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,xe,me,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wt(I){const A=s.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const se=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),se){const pe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,se.removeEventListener("dispose",pe)};se.addEventListener("dispose",pe),A.__depthDisposeCallback=pe}A.__boundDepthTexture=se}if(I.depthTexture&&!A.__autoAllocateDepthBuffer)if(Z)for(let se=0;se<6;se++)lt(A.__webglFramebuffer[se],I,se);else{const se=I.texture.mipmaps;se&&se.length>0?lt(A.__webglFramebuffer[0],I,0):lt(A.__webglFramebuffer,I,0)}else if(Z){A.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[se]),A.__webglDepthbuffer[se]===void 0)A.__webglDepthbuffer[se]=r.createRenderbuffer(),Ft(A.__webglDepthbuffer[se],I,!1);else{const pe=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=A.__webglDepthbuffer[se];r.bindRenderbuffer(r.RENDERBUFFER,Me),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,Me)}}else{const se=I.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Ft(A.__webglDepthbuffer,I,!1);else{const pe=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Me),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,Me)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function _t(I,A,Z){const se=s.get(I);A!==void 0&&nt(se.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&wt(I)}function pt(I){const A=I.texture,Z=s.get(I),se=s.get(A);I.addEventListener("dispose",M);const pe=I.textures,Me=I.isWebGLCubeRenderTarget===!0,Pe=pe.length>1;if(Pe||(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=A.version,d.memory.textures++),Me){Z.__webglFramebuffer=[];for(let me=0;me<6;me++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[me]=[];for(let xe=0;xe<A.mipmaps.length;xe++)Z.__webglFramebuffer[me][xe]=r.createFramebuffer()}else Z.__webglFramebuffer[me]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let me=0;me<A.mipmaps.length;me++)Z.__webglFramebuffer[me]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Pe)for(let me=0,xe=pe.length;me<xe;me++){const Ne=s.get(pe[me]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=r.createTexture(),d.memory.textures++)}if(I.samples>0&&It(I)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let me=0;me<pe.length;me++){const xe=pe[me];Z.__webglColorRenderbuffer[me]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[me]);const Ne=c.convert(xe.format,xe.colorSpace),We=c.convert(xe.type),Ie=R(xe.internalFormat,Ne,We,xe.normalized,xe.colorSpace,I.isXRRenderTarget===!0),Ce=Ut(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,Ie,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,Z.__webglColorRenderbuffer[me])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),Ft(Z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Me){t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),Ve(r.TEXTURE_CUBE_MAP,A);for(let me=0;me<6;me++)if(A.mipmaps&&A.mipmaps.length>0)for(let xe=0;xe<A.mipmaps.length;xe++)nt(Z.__webglFramebuffer[me][xe],I,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,xe);else nt(Z.__webglFramebuffer[me],I,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);S(A)&&B(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let me=0,xe=pe.length;me<xe;me++){const Ne=pe[me],We=s.get(Ne);let Ie=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ie=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ie,We.__webglTexture),Ve(Ie,Ne),nt(Z.__webglFramebuffer,I,Ne,r.COLOR_ATTACHMENT0+me,Ie,0),S(Ne)&&B(Ie)}t.unbindTexture()}else{let me=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(me,se.__webglTexture),Ve(me,A),A.mipmaps&&A.mipmaps.length>0)for(let xe=0;xe<A.mipmaps.length;xe++)nt(Z.__webglFramebuffer[xe],I,A,r.COLOR_ATTACHMENT0,me,xe);else nt(Z.__webglFramebuffer,I,A,r.COLOR_ATTACHMENT0,me,0);S(A)&&B(me),t.unbindTexture()}I.depthBuffer&&wt(I)}function Yt(I){const A=I.textures;for(let Z=0,se=A.length;Z<se;Z++){const pe=A[Z];if(S(pe)){const Me=O(I),Pe=s.get(pe).__webglTexture;t.bindTexture(Me,Pe),B(Me),t.unbindTexture()}}}const Jt=[],Kt=[];function Bt(I){if(I.samples>0){if(It(I)===!1){const A=I.textures,Z=I.width,se=I.height;let pe=r.COLOR_BUFFER_BIT;const Me=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=s.get(I),me=A.length>1;if(me)for(let Ne=0;Ne<A.length;Ne++)t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const xe=I.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ne=0;Ne<A.length;Ne++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(pe|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(pe|=r.STENCIL_BUFFER_BIT)),me){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ne]);const We=s.get(A[Ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,We,0)}r.blitFramebuffer(0,0,Z,se,0,0,Z,se,pe,r.NEAREST),p===!0&&(Jt.length=0,Kt.length=0,Jt.push(r.COLOR_ATTACHMENT0+Ne),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Jt.push(Me),Kt.push(Me),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Kt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Jt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),me)for(let Ne=0;Ne<A.length;Ne++){t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ne]);const We=s.get(A[Ne]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,We,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const A=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function Ut(I){return Math.min(o.maxSamples,I.samples)}function It(I){const A=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function X(I){const A=d.render.frame;v.get(I)!==A&&(v.set(I,A),I.update())}function mn(I,A){const Z=I.colorSpace,se=I.format,pe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==Hc&&Z!==cs&&(Ct.getTransfer(Z)===jt?(se!==Wi||pe!==hi)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",Z)),A}function bt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=oe,this.resetTextureUnits=z,this.getTextureUnits=te,this.setTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=ie,this.setTexture3D=he,this.setTextureCube=k,this.rebindTextures=_t,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Y3(r,e){function t(s,o=cs){let c;const d=Ct.getTransfer(o);if(s===hi)return r.UNSIGNED_BYTE;if(s===Rh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ph)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ag)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Eg)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Sg)return r.BYTE;if(s===yg)return r.SHORT;if(s===Vo)return r.UNSIGNED_SHORT;if(s===Ch)return r.INT;if(s===dr)return r.UNSIGNED_INT;if(s===Gi)return r.FLOAT;if(s===Dr)return r.HALF_FLOAT;if(s===Mg)return r.ALPHA;if(s===wg)return r.RGB;if(s===Wi)return r.RGBA;if(s===Lr)return r.DEPTH_COMPONENT;if(s===Bs)return r.DEPTH_STENCIL;if(s===eu)return r.RED;if(s===Nh)return r.RED_INTEGER;if(s===js)return r.RG;if(s===Ih)return r.RG_INTEGER;if(s===Dh)return r.RGBA_INTEGER;if(s===Fc||s===Uc||s===kc||s===Bc)if(d===jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Fc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Uc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Fc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Uc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jf||s===Hf||s===Vf||s===Gf)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===jf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wf||s===Xf||s===Yf||s===Kf||s===Qf||s===zc||s===qf)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Wf||s===Xf)return d===jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Yf)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Kf)return c.COMPRESSED_R11_EAC;if(s===Qf)return c.COMPRESSED_SIGNED_R11_EAC;if(s===zc)return c.COMPRESSED_RG11_EAC;if(s===qf)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Zf||s===Jf||s===$f||s===eh||s===th||s===nh||s===ih||s===rh||s===sh||s===ah||s===oh||s===lh||s===ch||s===uh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Zf)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Jf)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$f)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===eh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===th)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===nh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ih)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===rh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===sh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ah)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===oh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===lh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ch)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===uh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===dh||s===fh||s===hh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===dh)return d===jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===fh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===hh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ph||s===mh||s===jc||s===xh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===ph)return c.COMPRESSED_RED_RGTC1_EXT;if(s===mh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===jc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Go?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const K3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class q3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new Lg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Ci({vertexShader:K3,fragmentShader:Q3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fn(new Qo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z3 extends Gs{constructor(e,t){super();const s=this;let o=null,c=1,d=null,h="local-floor",p=1,m=null,v=null,_=null,g=null,E=null,w=null;const C=typeof XRWebGLBinding<"u",y=new q3,S={},B=t.getContextAttributes();let O=null,R=null;const D=[],P=[],U=new Nt;let M=null;const N=new wi;N.viewport=new Wt;const W=new wi;W.viewport=new Wt;const j=[N,W],Q=new iy;let z=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let Se=D[ue];return Se===void 0&&(Se=new Kd,D[ue]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ue){let Se=D[ue];return Se===void 0&&(Se=new Kd,D[ue]=Se),Se.getGripSpace()},this.getHand=function(ue){let Se=D[ue];return Se===void 0&&(Se=new Kd,D[ue]=Se),Se.getHandSpace()};function V(ue){const Se=P.indexOf(ue.inputSource);if(Se===-1)return;const ve=D[Se];ve!==void 0&&(ve.update(ue.inputSource,ue.frame,m||d),ve.dispatchEvent({type:ue.type,data:ue.inputSource}))}function oe(){o.removeEventListener("select",V),o.removeEventListener("selectstart",V),o.removeEventListener("selectend",V),o.removeEventListener("squeeze",V),o.removeEventListener("squeezestart",V),o.removeEventListener("squeezeend",V),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",$);for(let ue=0;ue<D.length;ue++){const Se=P[ue];Se!==null&&(P[ue]=null,D[ue].disconnect(Se))}z=null,te=null,y.reset();for(const ue in S)delete S[ue];e.setRenderTarget(O),E=null,g=null,_=null,o=null,R=null,Ve.stop(),s.isPresenting=!1,e.setPixelRatio(M),e.setSize(U.width,U.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){c=ue,s.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){h=ue,s.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(ue){m=ue},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(ue){if(o=ue,o!==null){if(O=e.getRenderTarget(),o.addEventListener("select",V),o.addEventListener("selectstart",V),o.addEventListener("selectend",V),o.addEventListener("squeeze",V),o.addEventListener("squeezestart",V),o.addEventListener("squeezeend",V),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",$),B.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(U),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Be=null,Ze=null;B.depth&&(Ze=B.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=B.stencil?Bs:Lr,Be=B.stencil?Go:dr);const nt={colorFormat:t.RGBA8,depthFormat:Ze,scaleFactor:c};_=this.getBinding(),g=_.createProjectionLayer(nt),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new ur(g.textureWidth,g.textureHeight,{format:Wi,type:hi,depthTexture:new Va(g.textureWidth,g.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:B.stencil,colorSpace:e.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ve={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(o,t,ve),o.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),R=new ur(E.framebufferWidth,E.framebufferHeight,{format:Wi,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await o.requestReferenceSpace(h),Ve.setContext(o),Ve.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(ue){for(let Se=0;Se<ue.removed.length;Se++){const ve=ue.removed[Se],Be=P.indexOf(ve);Be>=0&&(P[Be]=null,D[Be].disconnect(ve))}for(let Se=0;Se<ue.added.length;Se++){const ve=ue.added[Se];let Be=P.indexOf(ve);if(Be===-1){for(let nt=0;nt<D.length;nt++)if(nt>=P.length){P.push(ve),Be=nt;break}else if(P[nt]===null){P[nt]=ve,Be=nt;break}if(Be===-1)break}const Ze=D[Be];Ze&&Ze.connect(ve)}}const K=new J,ie=new J;function he(ue,Se,ve){K.setFromMatrixPosition(Se.matrixWorld),ie.setFromMatrixPosition(ve.matrixWorld);const Be=K.distanceTo(ie),Ze=Se.projectionMatrix.elements,nt=ve.projectionMatrix.elements,Ft=Ze[14]/(Ze[10]-1),lt=Ze[14]/(Ze[10]+1),wt=(Ze[9]+1)/Ze[5],_t=(Ze[9]-1)/Ze[5],pt=(Ze[8]-1)/Ze[0],Yt=(nt[8]+1)/nt[0],Jt=Ft*pt,Kt=Ft*Yt,Bt=Be/(-pt+Yt),Ut=Bt*-pt;if(Se.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(Ut),ue.translateZ(Bt),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert(),Ze[10]===-1)ue.projectionMatrix.copy(Se.projectionMatrix),ue.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const It=Ft+Bt,X=lt+Bt,mn=Jt-Ut,bt=Kt+(Be-Ut),I=wt*lt/X*It,A=_t*lt/X*It;ue.projectionMatrix.makePerspective(mn,bt,I,A,It,X),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}}function k(ue,Se){Se===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(Se.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(o===null)return;let Se=ue.near,ve=ue.far;y.texture!==null&&(y.depthNear>0&&(Se=y.depthNear),y.depthFar>0&&(ve=y.depthFar)),Q.near=W.near=N.near=Se,Q.far=W.far=N.far=ve,(z!==Q.near||te!==Q.far)&&(o.updateRenderState({depthNear:Q.near,depthFar:Q.far}),z=Q.near,te=Q.far),Q.layers.mask=ue.layers.mask|6,N.layers.mask=Q.layers.mask&-5,W.layers.mask=Q.layers.mask&-3;const Be=ue.parent,Ze=Q.cameras;k(Q,Be);for(let nt=0;nt<Ze.length;nt++)k(Ze[nt],Be);Ze.length===2?he(Q,N,W):Q.projectionMatrix.copy(N.projectionMatrix),ee(ue,Q,Be)};function ee(ue,Se,ve){ve===null?ue.matrix.copy(Se.matrixWorld):(ue.matrix.copy(ve.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(Se.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(Se.projectionMatrix),ue.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=Wo*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&E===null))return p},this.setFoveation=function(ue){p=ue,g!==null&&(g.fixedFoveation=ue),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ue)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(ue){return S[ue]};let Oe=null;function Ke(ue,Se){if(v=Se.getViewerPose(m||d),w=Se,v!==null){const ve=v.views;E!==null&&(e.setRenderTargetFramebuffer(R,E.framebuffer),e.setRenderTarget(R));let Be=!1;ve.length!==Q.cameras.length&&(Q.cameras.length=0,Be=!0);for(let lt=0;lt<ve.length;lt++){const wt=ve[lt];let _t=null;if(E!==null)_t=E.getViewport(wt);else{const Yt=_.getViewSubImage(g,wt);_t=Yt.viewport,lt===0&&(e.setRenderTargetTextures(R,Yt.colorTexture,Yt.depthStencilTexture),e.setRenderTarget(R))}let pt=j[lt];pt===void 0&&(pt=new wi,pt.layers.enable(lt),pt.viewport=new Wt,j[lt]=pt),pt.matrix.fromArray(wt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(wt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(_t.x,_t.y,_t.width,_t.height),lt===0&&(Q.matrix.copy(pt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Be===!0&&Q.cameras.push(pt)}const Ze=o.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){_=s.getBinding();const lt=_.getDepthInformation(ve[0]);lt&&lt.isValid&&lt.texture&&y.init(lt,o.renderState)}if(Ze&&Ze.includes("camera-access")&&C){e.state.unbindTexture(),_=s.getBinding();for(let lt=0;lt<ve.length;lt++){const wt=ve[lt].camera;if(wt){let _t=S[wt];_t||(_t=new Lg,S[wt]=_t);const pt=_.getCameraImage(wt);_t.sourceTexture=pt}}}}for(let ve=0;ve<D.length;ve++){const Be=P[ve],Ze=D[ve];Be!==null&&Ze!==void 0&&Ze.update(Be,Se,m||d)}Oe&&Oe(ue,Se),Se.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Se}),w=null}const Ve=new Bg;Ve.setAnimationLoop(Ke),this.setAnimationLoop=function(ue){Oe=ue},this.dispose=function(){}}}const J3=new Zt,Wg=new ht;Wg.set(-1,0,0,0,1,0,0,0,1);function $3(r,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,Fg(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,B,O,R){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),_(y,S)):S.isMeshPhongMaterial?(c(y,S),v(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),g(y,S),S.isMeshPhysicalMaterial&&E(y,S,R)):S.isMeshMatcapMaterial?(c(y,S),w(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),C(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(d(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?p(y,S,B,O):S.isSpriteMaterial?m(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===si&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===si&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const B=e.get(S),O=B.envMap,R=B.envMapRotation;O&&(y.envMap.value=O,y.envMapRotation.value.setFromMatrix4(J3.makeRotationFromEuler(R)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Wg),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function p(y,S,B,O){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*B,y.scale.value=O*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function m(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function E(y,S,B){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===si&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=B.texture,y.transmissionSamplerSize.value.set(B.width,B.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const B=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(B.matrixWorld),y.nearDistance.value=B.shadow.camera.near,y.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function eM(r,e,t,s){let o={},c={},d=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,D){const P=D.program;s.uniformBlockBinding(R,P)}function m(R,D){let P=o[R.id];P===void 0&&(y(R),P=v(R),o[R.id]=P,R.addEventListener("dispose",B));const U=D.program;s.updateUBOMapping(R,U);const M=e.render.frame;c[R.id]!==M&&(g(R),c[R.id]=M)}function v(R){const D=_();R.__bindingPointIndex=D;const P=r.createBuffer(),U=R.__size,M=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,U,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,P),P}function _(){for(let R=0;R<h;R++)if(d.indexOf(R)===-1)return d.push(R),R;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const D=o[R.id],P=R.uniforms,U=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let M=0,N=P.length;M<N;M++){const W=P[M];if(Array.isArray(W))for(let j=0,Q=W.length;j<Q;j++)E(W[j],M,j,U);else E(W,M,0,U)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(R,D,P,U){if(C(R,D,P,U)===!0){const M=R.__offset,N=R.value;if(Array.isArray(N)){let W=0;for(let j=0;j<N.length;j++){const Q=N[j],z=S(Q);w(Q,R.__data,W),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(W+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(N,R.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,M,R.__data)}}function w(R,D,P){typeof R=="number"||typeof R=="boolean"?D[0]=R:R.isMatrix3?(D[0]=R.elements[0],D[1]=R.elements[1],D[2]=R.elements[2],D[3]=0,D[4]=R.elements[3],D[5]=R.elements[4],D[6]=R.elements[5],D[7]=0,D[8]=R.elements[6],D[9]=R.elements[7],D[10]=R.elements[8],D[11]=0):ArrayBuffer.isView(R)?D.set(new R.constructor(R.buffer,R.byteOffset,D.length)):R.toArray(D,P)}function C(R,D,P,U){const M=R.value,N=D+"_"+P;if(U[N]===void 0)return typeof M=="number"||typeof M=="boolean"?U[N]=M:ArrayBuffer.isView(M)?U[N]=M.slice():U[N]=M.clone(),!0;{const W=U[N];if(typeof M=="number"||typeof M=="boolean"){if(W!==M)return U[N]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(W.equals(M)===!1)return W.copy(M),!0}}return!1}function y(R){const D=R.uniforms;let P=0;const U=16;for(let N=0,W=D.length;N<W;N++){const j=Array.isArray(D[N])?D[N]:[D[N]];for(let Q=0,z=j.length;Q<z;Q++){const te=j[Q],V=Array.isArray(te.value)?te.value:[te.value];for(let oe=0,$=V.length;oe<$;oe++){const K=V[oe],ie=S(K),he=P%U,k=he%ie.boundary,ee=he+k;P+=k,ee!==0&&U-ee<ie.storage&&(P+=U-ee),te.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=P,P+=ie.storage}}}const M=P%U;return M>0&&(P+=U-M),R.__size=P,R.__cache={},this}function S(R){const D={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(D.boundary=4,D.storage=4):R.isVector2?(D.boundary=8,D.storage=8):R.isVector3||R.isColor?(D.boundary=16,D.storage=12):R.isVector4?(D.boundary=16,D.storage=16):R.isMatrix3?(D.boundary=48,D.storage=48):R.isMatrix4?(D.boundary=64,D.storage=64):R.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(D.boundary=16,D.storage=R.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",R),D}function B(R){const D=R.target;D.removeEventListener("dispose",B);const P=d.indexOf(D.__bindingPointIndex);d.splice(P,1),r.deleteBuffer(o[D.id]),delete o[D.id],delete c[D.id]}function O(){for(const R in o)r.deleteBuffer(o[R]);d=[],o={},c={}}return{bind:p,update:m,dispose:O}}const tM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ir=null;function nM(){return ir===null&&(ir=new zh(tM,16,16,js,Dr),ir.name="DFG_LUT",ir.minFilter=Tn,ir.magFilter=Tn,ir.wrapS=Vi,ir.wrapT=Vi,ir.generateMipmaps=!1,ir.needsUpdate=!0),ir}class iM{constructor(e={}){const{canvas:t=eS(),context:s=null,depth:o=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:E=hi}=e;this.isWebGLRenderer=!0;let w;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=s.getContextAttributes().alpha}else w=d;const C=E,y=new Set([Dh,Ih,Nh]),S=new Set([hi,dr,Vo,Go,Rh,Ph]),B=new Uint32Array(4),O=new Int32Array(4),R=new J;let D=null,P=null;const U=[],M=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let j=!1,Q=null,z=null,te=null,V=null;this._outputColorSpace=Mi;let oe=0,$=0,K=null,ie=-1,he=null;const k=new Wt,ee=new Wt;let Oe=null;const Ke=new vt(0);let Ve=0,ue=t.width,Se=t.height,ve=1,Be=null,Ze=null;const nt=new Wt(0,0,ue,Se),Ft=new Wt(0,0,ue,Se);let lt=!1;const wt=new Ng;let _t=!1,pt=!1;const Yt=new Zt,Jt=new J,Kt=new Wt,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function It(){return K===null?ve:1}let X=s;function mn(T,q){return t.getContext(T,q)}try{const T={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Th}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",Xe,!1),X===null){const q="webgl2";if(X=mn(q,T),X===null)throw mn(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Pt("WebGLRenderer: "+T.message),T}let bt,I,A,Z,se,pe,Me,Pe,me,xe,Ne,We,Ie,Ce,Je,rt,st,G,Te,ge,De,Fe,F;function ne(){bt=new nE(X),bt.init(),De=new Y3(X,bt),I=new K2(X,bt,e,De),A=new W3(X,bt),I.reversedDepthBuffer&&g&&A.buffers.depth.setReversed(!0),z=X.createFramebuffer(),te=X.createFramebuffer(),V=X.createFramebuffer(),Z=new sE(X),se=new N3,pe=new X3(X,bt,A,se,I,De,Z),Me=new tE(W),Pe=new cy(X),Fe=new X2(X,Pe),me=new iE(X,Pe,Z,Fe),xe=new oE(X,me,Pe,Fe,Z),G=new aE(X,I,pe),Je=new Q2(se),Ne=new P3(W,Me,bt,I,Fe,Je),We=new $3(W,se),Ie=new D3,Ce=new O3(bt),st=new W2(W,Me,A,xe,w,p),rt=new G3(W,xe,I),F=new eM(X,Z,I,A),Te=new Y2(X,bt,Z),ge=new rE(X,bt,Z),Z.programs=Ne.programs,W.capabilities=I,W.extensions=bt,W.properties=se,W.renderLists=Ie,W.shadowMap=rt,W.state=A,W.info=Z}ne(),C!==hi&&(N=new cE(C,t.width,t.height,h,o,c));const _e=new Z3(W,X);this.xr=_e,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const T=bt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=bt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(T){T!==void 0&&(ve=T,this.setSize(ue,Se,!1))},this.getSize=function(T){return T.set(ue,Se)},this.setSize=function(T,q,de=!0){if(_e.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=T,Se=q,t.width=Math.floor(T*ve),t.height=Math.floor(q*ve),de===!0&&(t.style.width=T+"px",t.style.height=q+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(ue*ve,Se*ve).floor()},this.setDrawingBufferSize=function(T,q,de){ue=T,Se=q,ve=de,t.width=Math.floor(T*de),t.height=Math.floor(q*de),this.setViewport(0,0,T,q)},this.setEffects=function(T){if(C===hi){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let q=0;q<T.length;q++)if(T[q].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(nt)},this.setViewport=function(T,q,de,le){T.isVector4?nt.set(T.x,T.y,T.z,T.w):nt.set(T,q,de,le),A.viewport(k.copy(nt).multiplyScalar(ve).round())},this.getScissor=function(T){return T.copy(Ft)},this.setScissor=function(T,q,de,le){T.isVector4?Ft.set(T.x,T.y,T.z,T.w):Ft.set(T,q,de,le),A.scissor(ee.copy(Ft).multiplyScalar(ve).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(T){A.setScissorTest(lt=T)},this.setOpaqueSort=function(T){Be=T},this.setTransparentSort=function(T){Ze=T},this.getClearColor=function(T){return T.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(T=!0,q=!0,de=!0){let le=0;if(T){let ae=!1;if(K!==null){const Re=K.texture.format;ae=y.has(Re)}if(ae){const Re=K.texture.type,He=S.has(Re),be=st.getClearColor(),Qe=st.getClearAlpha(),tt=be.r,dt=be.g,ft=be.b;He?(B[0]=tt,B[1]=dt,B[2]=ft,B[3]=Qe,X.clearBufferuiv(X.COLOR,0,B)):(O[0]=tt,O[1]=dt,O[2]=ft,O[3]=Qe,X.clearBufferiv(X.COLOR,0,O))}else le|=X.COLOR_BUFFER_BIT}q&&(le|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(le|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&X.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),Q=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),st.dispose(),Ie.dispose(),Ce.dispose(),se.dispose(),Me.dispose(),xe.dispose(),Fe.dispose(),F.dispose(),Ne.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Fr),_e.removeEventListener("sessionend",Ur),xn.stop()};function Ue(T){T.preventDefault(),Xc("WebGLRenderer: Context Lost."),j=!0}function ke(){Xc("WebGLRenderer: Context Restored."),j=!1;const T=Z.autoReset,q=rt.enabled,de=rt.autoUpdate,le=rt.needsUpdate,ae=rt.type;ne(),Z.autoReset=T,rt.enabled=q,rt.autoUpdate=de,rt.needsUpdate=le,rt.type=ae}function Xe(T){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Tt(T){const q=T.target;q.removeEventListener("dispose",Tt),xt(q)}function xt(T){Gt(T),se.remove(T)}function Gt(T){const q=se.get(T).programs;q!==void 0&&(q.forEach(function(de){Ne.releaseProgram(de)}),T.isShaderMaterial&&Ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,de,le,ae,Re){q===null&&(q=Bt);const He=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,be=on(T,q,de,le,ae);A.setMaterial(le,He);let Qe=de.index,tt=1;if(le.wireframe===!0){if(Qe=me.getWireframeAttribute(de),Qe===void 0)return;tt=2}const dt=de.drawRange,ft=de.attributes.position;let $e=dt.start*tt,Rt=(dt.start+dt.count)*tt;Re!==null&&($e=Math.max($e,Re.start*tt),Rt=Math.min(Rt,(Re.start+Re.count)*tt)),Qe!==null?($e=Math.max($e,0),Rt=Math.min(Rt,Qe.count)):ft!=null&&($e=Math.max($e,0),Rt=Math.min(Rt,ft.count));const Qt=Rt-$e;if(Qt<0||Qt===1/0)return;Fe.setup(ae,le,be,de,Qe);let sn,Ot=Te;if(Qe!==null&&(sn=Pe.get(Qe),Ot=ge,Ot.setIndex(sn)),ae.isMesh)le.wireframe===!0?(A.setLineWidth(le.wireframeLinewidth*It()),Ot.setMode(X.LINES)):Ot.setMode(X.TRIANGLES);else if(ae.isLine){let fn=le.linewidth;fn===void 0&&(fn=1),A.setLineWidth(fn*It()),ae.isLineSegments?Ot.setMode(X.LINES):ae.isLineLoop?Ot.setMode(X.LINE_LOOP):Ot.setMode(X.LINE_STRIP)}else ae.isPoints?Ot.setMode(X.POINTS):ae.isSprite&&Ot.setMode(X.TRIANGLES);if(ae.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const fn=ae._multiDrawStarts,ze=ae._multiDrawCounts,Rn=ae._multiDrawCount,St=Qe?Pe.get(Qe).bytesPerElement:1,qn=se.get(le).currentProgram.getUniforms();for(let Zn=0;Zn<Rn;Zn++)qn.setValue(X,"_gl_DrawID",Zn),Ot.render(fn[Zn]/St,ze[Zn])}else if(ae.isInstancedMesh)Ot.renderInstances($e,Qt,ae.count);else if(de.isInstancedBufferGeometry){const fn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,ze=Math.min(de.instanceCount,fn);Ot.renderInstances($e,Qt,ze)}else Ot.render($e,Qt)};function rn(T,q,de){T.transparent===!0&&T.side===ar&&T.forceSinglePass===!1?(T.side=si,T.needsUpdate=!0,qi(T,q,de),T.side=fs,T.needsUpdate=!0,qi(T,q,de),T.side=ar):qi(T,q,de)}this.compile=function(T,q,de=null){de===null&&(de=T),P=Ce.get(de),P.init(q),M.push(P),de.traverseVisible(function(ae){ae.isLight&&ae.layers.test(q.layers)&&(P.pushLight(ae),ae.castShadow&&P.pushShadow(ae))}),T!==de&&T.traverseVisible(function(ae){ae.isLight&&ae.layers.test(q.layers)&&(P.pushLight(ae),ae.castShadow&&P.pushShadow(ae))}),P.setupLights();const le=new Set;return T.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Re=ae.material;if(Re)if(Array.isArray(Re))for(let He=0;He<Re.length;He++){const be=Re[He];rn(be,de,ae),le.add(be)}else rn(Re,de,ae),le.add(Re)}),P=M.pop(),le},this.compileAsync=function(T,q,de=null){const le=this.compile(T,q,de);return new Promise(ae=>{function Re(){if(le.forEach(function(He){se.get(He).currentProgram.isReady()&&le.delete(He)}),le.size===0){ae(T);return}setTimeout(Re,10)}bt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let An=null;function mi(T){An&&An(T)}function Fr(){xn.stop()}function Ur(){xn.start()}const xn=new Bg;xn.setAnimationLoop(mi),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(T){An=T,_e.setAnimationLoop(T),T===null?xn.stop():xn.start()},_e.addEventListener("sessionstart",Fr),_e.addEventListener("sessionend",Ur),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;Q!==null&&Q.renderStart(T,q);const de=_e.enabled===!0&&_e.isPresenting===!0,le=N!==null&&(K===null||de)&&N.begin(W,K);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(q),q=_e.getCamera()),T.isScene===!0&&T.onBeforeRender(W,T,q,K),P=Ce.get(T,M.length),P.init(q),P.state.textureUnits=pe.getTextureUnits(),M.push(P),Yt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),wt.setFromProjectionMatrix(Yt,lr,q.reversedDepth),pt=this.localClippingEnabled,_t=Je.init(this.clippingPlanes,pt),D=Ie.get(T,U.length),D.init(),U.push(D),_e.enabled===!0&&_e.isPresenting===!0){const He=W.xr.getDepthSensingMesh();He!==null&&Yi(He,q,-1/0,W.sortObjects)}Yi(T,q,0,W.sortObjects),D.finish(),W.sortObjects===!0&&D.sort(Be,Ze,q.reversedDepth),Ut=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Ut&&st.addToRenderList(D,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&Je.beginShadows();const ae=P.state.shadowsArray;if(rt.render(ae,T,q),_t===!0&&Je.endShadows(),(le&&N.hasRenderPass())===!1){const He=D.opaque,be=D.transmissive;if(P.setupLights(),q.isArrayCamera){const Qe=q.cameras;if(be.length>0)for(let tt=0,dt=Qe.length;tt<dt;tt++){const ft=Qe[tt];Ki(He,be,T,ft)}Ut&&st.render(T);for(let tt=0,dt=Qe.length;tt<dt;tt++){const ft=Qe[tt];Ri(D,T,ft,ft.viewport)}}else be.length>0&&Ki(He,be,T,q),Ut&&st.render(T),Ri(D,T,q)}K!==null&&$===0&&(pe.updateMultisampleRenderTarget(K),pe.updateRenderTargetMipmap(K)),le&&N.end(W),T.isScene===!0&&T.onAfterRender(W,T,q),Fe.resetDefaultState(),ie=-1,he=null,M.pop(),M.length>0?(P=M[M.length-1],pe.setTextureUnits(P.state.textureUnits),_t===!0&&Je.setGlobalState(W.clippingPlanes,P.state.camera)):P=null,U.pop(),U.length>0?D=U[U.length-1]:D=null,Q!==null&&Q.renderEnd()};function Yi(T,q,de,le){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)de=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLightProbeGrid)P.pushLightProbeGrid(T);else if(T.isLight)P.pushLight(T),T.castShadow&&P.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||wt.intersectsSprite(T)){le&&Kt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Yt);const He=xe.update(T),be=T.material;be.visible&&D.push(T,He,be,de,Kt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||wt.intersectsObject(T))){const He=xe.update(T),be=T.material;if(le&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Kt.copy(T.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Kt.copy(He.boundingSphere.center)),Kt.applyMatrix4(T.matrixWorld).applyMatrix4(Yt)),Array.isArray(be)){const Qe=He.groups;for(let tt=0,dt=Qe.length;tt<dt;tt++){const ft=Qe[tt],$e=be[ft.materialIndex];$e&&$e.visible&&D.push(T,He,$e,de,Kt.z,ft)}}else be.visible&&D.push(T,He,be,de,Kt.z,null)}}const Re=T.children;for(let He=0,be=Re.length;He<be;He++)Yi(Re[He],q,de,le)}function Ri(T,q,de,le){const{opaque:ae,transmissive:Re,transparent:He}=T;P.setupLightsView(de),_t===!0&&Je.setGlobalState(W.clippingPlanes,de),le&&A.viewport(k.copy(le)),ae.length>0&&Qn(ae,q,de),Re.length>0&&Qn(Re,q,de),He.length>0&&Qn(He,q,de),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Ki(T,q,de,le){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[le.id]===void 0){const $e=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[le.id]=new ur(1,1,{generateMipmaps:!0,type:$e?Dr:hi,minFilter:ks,samples:Math.max(4,I.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Re=P.state.transmissionRenderTarget[le.id],He=le.viewport||k;Re.setSize(He.z*W.transmissionResolutionScale,He.w*W.transmissionResolutionScale);const be=W.getRenderTarget(),Qe=W.getActiveCubeFace(),tt=W.getActiveMipmapLevel();W.setRenderTarget(Re),W.getClearColor(Ke),Ve=W.getClearAlpha(),Ve<1&&W.setClearColor(16777215,.5),W.clear(),Ut&&st.render(de);const dt=W.toneMapping;W.toneMapping=cr;const ft=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),P.setupLightsView(le),_t===!0&&Je.setGlobalState(W.clippingPlanes,le),Qn(T,de,le),pe.updateMultisampleRenderTarget(Re),pe.updateRenderTargetMipmap(Re),bt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Rt=0,Qt=q.length;Rt<Qt;Rt++){const sn=q[Rt],{object:Ot,geometry:fn,material:ze,group:Rn}=sn;if(ze.side===ar&&Ot.layers.test(le.layers)){const St=ze.side;ze.side=si,ze.needsUpdate=!0,Qi(Ot,de,le,fn,ze,Rn),ze.side=St,ze.needsUpdate=!0,$e=!0}}$e===!0&&(pe.updateMultisampleRenderTarget(Re),pe.updateRenderTargetMipmap(Re))}W.setRenderTarget(be,Qe,tt),W.setClearColor(Ke,Ve),ft!==void 0&&(le.viewport=ft),W.toneMapping=dt}function Qn(T,q,de){const le=q.isScene===!0?q.overrideMaterial:null;for(let ae=0,Re=T.length;ae<Re;ae++){const He=T[ae],{object:be,geometry:Qe,group:tt}=He;let dt=He.material;dt.allowOverride===!0&&le!==null&&(dt=le),be.layers.test(de.layers)&&Qi(be,q,de,Qe,dt,tt)}}function Qi(T,q,de,le,ae,Re){T.onBeforeRender(W,q,de,le,ae,Re),T.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ae.onBeforeRender(W,q,de,le,T,Re),ae.transparent===!0&&ae.side===ar&&ae.forceSinglePass===!1?(ae.side=si,ae.needsUpdate=!0,W.renderBufferDirect(de,q,le,ae,T,Re),ae.side=fs,ae.needsUpdate=!0,W.renderBufferDirect(de,q,le,ae,T,Re),ae.side=ar):W.renderBufferDirect(de,q,le,ae,T,Re),T.onAfterRender(W,q,de,le,ae,Re)}function qi(T,q,de){q.isScene!==!0&&(q=Bt);const le=se.get(T),ae=P.state.lights,Re=P.state.shadowsArray,He=ae.state.version,be=Ne.getParameters(T,ae.state,Re,q,de,P.state.lightProbeGridArray),Qe=Ne.getProgramCacheKey(be);let tt=le.programs;le.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?q.environment:null,le.fog=q.fog;const dt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;le.envMap=Me.get(T.envMap||le.environment,dt),le.envMapRotation=le.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,tt===void 0&&(T.addEventListener("dispose",Tt),tt=new Map,le.programs=tt);let ft=tt.get(Qe);if(ft!==void 0){if(le.currentProgram===ft&&le.lightsStateVersion===He)return Ws(T,be),ft}else be.uniforms=Ne.getUniforms(T),Q!==null&&T.isNodeMaterial&&Q.build(T,de,be),T.onBeforeCompile(be,W),ft=Ne.acquireProgram(be,Qe),tt.set(Qe,ft),le.uniforms=be.uniforms;const $e=le.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&($e.clippingPlanes=Je.uniform),Ws(T,be),le.needsLights=Ya(T),le.lightsStateVersion=He,le.needsLights&&($e.ambientLightColor.value=ae.state.ambient,$e.lightProbe.value=ae.state.probe,$e.directionalLights.value=ae.state.directional,$e.directionalLightShadows.value=ae.state.directionalShadow,$e.spotLights.value=ae.state.spot,$e.spotLightShadows.value=ae.state.spotShadow,$e.rectAreaLights.value=ae.state.rectArea,$e.ltc_1.value=ae.state.rectAreaLTC1,$e.ltc_2.value=ae.state.rectAreaLTC2,$e.pointLights.value=ae.state.point,$e.pointLightShadows.value=ae.state.pointShadow,$e.hemisphereLights.value=ae.state.hemi,$e.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,$e.spotLightMatrix.value=ae.state.spotLightMatrix,$e.spotLightMap.value=ae.state.spotLightMap,$e.pointShadowMatrix.value=ae.state.pointShadowMatrix),le.lightProbeGrid=P.state.lightProbeGridArray.length>0,le.currentProgram=ft,le.uniformsList=null,ft}function kr(T){if(T.uniformsList===null){const q=T.currentProgram.getUniforms();T.uniformsList=Oc.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function Ws(T,q){const de=se.get(T);de.outputColorSpace=q.outputColorSpace,de.batching=q.batching,de.batchingColor=q.batchingColor,de.instancing=q.instancing,de.instancingColor=q.instancingColor,de.instancingMorph=q.instancingMorph,de.skinning=q.skinning,de.morphTargets=q.morphTargets,de.morphNormals=q.morphNormals,de.morphColors=q.morphColors,de.morphTargetsCount=q.morphTargetsCount,de.numClippingPlanes=q.numClippingPlanes,de.numIntersection=q.numClipIntersection,de.vertexAlphas=q.vertexAlphas,de.vertexTangents=q.vertexTangents,de.toneMapping=q.toneMapping}function su(T,q){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;R.setFromMatrixPosition(q.matrixWorld);for(let de=0,le=T.length;de<le;de++){const ae=T[de];if(ae.texture!==null&&ae.boundingBox.containsPoint(R))return ae}return null}function on(T,q,de,le,ae){q.isScene!==!0&&(q=Bt),pe.resetTextureUnits();const Re=q.fog,He=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?q.environment:null,be=K===null?W.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ct.workingColorSpace,Qe=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,tt=Me.get(le.envMap||He,Qe),dt=le.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,ft=!!de.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),$e=!!de.morphAttributes.position,Rt=!!de.morphAttributes.normal,Qt=!!de.morphAttributes.color;let sn=cr;le.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(sn=W.toneMapping);const Ot=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,fn=Ot!==void 0?Ot.length:0,ze=se.get(le),Rn=P.state.lights;if(_t===!0&&(pt===!0||T!==he)){const zt=T===he&&le.id===ie;Je.setState(le,T,zt)}let St=!1;le.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Rn.state.version||ze.outputColorSpace!==be||ae.isBatchedMesh&&ze.batching===!1||!ae.isBatchedMesh&&ze.batching===!0||ae.isBatchedMesh&&ze.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&ze.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&ze.instancing===!1||!ae.isInstancedMesh&&ze.instancing===!0||ae.isSkinnedMesh&&ze.skinning===!1||!ae.isSkinnedMesh&&ze.skinning===!0||ae.isInstancedMesh&&ze.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&ze.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&ze.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&ze.instancingMorph===!1&&ae.morphTexture!==null||ze.envMap!==tt||le.fog===!0&&ze.fog!==Re||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Je.numPlanes||ze.numIntersection!==Je.numIntersection)||ze.vertexAlphas!==dt||ze.vertexTangents!==ft||ze.morphTargets!==$e||ze.morphNormals!==Rt||ze.morphColors!==Qt||ze.toneMapping!==sn||ze.morphTargetsCount!==fn||!!ze.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,ze.__version=le.version);let qn=ze.currentProgram;St===!0&&(qn=qi(le,q,ae),Q&&le.isNodeMaterial&&Q.onUpdateProgram(le,qn,ze));let Zn=!1,yt=!1,hr=!1;const kt=qn.getUniforms(),$t=ze.uniforms;if(A.useProgram(qn.program)&&(Zn=!0,yt=!0,hr=!0),le.id!==ie&&(ie=le.id,yt=!0),ze.needsLights){const zt=su(P.state.lightProbeGridArray,ae);ze.lightProbeGrid!==zt&&(ze.lightProbeGrid=zt,yt=!0)}if(Zn||he!==T){A.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),kt.setValue(X,"projectionMatrix",T.projectionMatrix),kt.setValue(X,"viewMatrix",T.matrixWorldInverse);const Ni=kt.map.cameraPosition;Ni!==void 0&&Ni.setValue(X,Jt.setFromMatrixPosition(T.matrixWorld)),I.logarithmicDepthBuffer&&kt.setValue(X,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&kt.setValue(X,"isOrthographic",T.isOrthographicCamera===!0),he!==T&&(he=T,yt=!0,hr=!0)}if(ze.needsLights&&(Rn.state.directionalShadowMap.length>0&&kt.setValue(X,"directionalShadowMap",Rn.state.directionalShadowMap,pe),Rn.state.spotShadowMap.length>0&&kt.setValue(X,"spotShadowMap",Rn.state.spotShadowMap,pe),Rn.state.pointShadowMap.length>0&&kt.setValue(X,"pointShadowMap",Rn.state.pointShadowMap,pe)),ae.isSkinnedMesh){kt.setOptional(X,ae,"bindMatrix"),kt.setOptional(X,ae,"bindMatrixInverse");const zt=ae.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),kt.setValue(X,"boneTexture",zt.boneTexture,pe))}ae.isBatchedMesh&&(kt.setOptional(X,ae,"batchingTexture"),kt.setValue(X,"batchingTexture",ae._matricesTexture,pe),kt.setOptional(X,ae,"batchingIdTexture"),kt.setValue(X,"batchingIdTexture",ae._indirectTexture,pe),kt.setOptional(X,ae,"batchingColorTexture"),ae._colorsTexture!==null&&kt.setValue(X,"batchingColorTexture",ae._colorsTexture,pe));const Pi=de.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&G.update(ae,de,qn),(yt||ze.receiveShadow!==ae.receiveShadow)&&(ze.receiveShadow=ae.receiveShadow,kt.setValue(X,"receiveShadow",ae.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&q.environment!==null&&($t.envMapIntensity.value=q.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=nM()),yt){if(kt.setValue(X,"toneMappingExposure",W.toneMappingExposure),ze.needsLights&&au($t,hr),Re&&le.fog===!0&&We.refreshFogUniforms($t,Re),We.refreshMaterialUniforms($t,le,ve,Se,P.state.transmissionRenderTarget[T.id]),ze.needsLights&&ze.lightProbeGrid){const zt=ze.lightProbeGrid;$t.probesSH.value=zt.texture,$t.probesMin.value.copy(zt.boundingBox.min),$t.probesMax.value.copy(zt.boundingBox.max),$t.probesResolution.value.copy(zt.resolution)}Oc.upload(X,kr(ze),$t,pe)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Oc.upload(X,kr(ze),$t,pe),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&kt.setValue(X,"center",ae.center),kt.setValue(X,"modelViewMatrix",ae.modelViewMatrix),kt.setValue(X,"normalMatrix",ae.normalMatrix),kt.setValue(X,"modelMatrix",ae.matrixWorld),le.uniformsGroups!==void 0){const zt=le.uniformsGroups;for(let Ni=0,Zi=zt.length;Ni<Zi;Ni++){const ps=zt[Ni];F.update(ps,qn),F.bind(ps,qn)}}return qn}function au(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function Ya(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(T,q,de){const le=se.get(T);le.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),se.get(T.texture).__webglTexture=q,se.get(T.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:de,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,q){const de=se.get(T);de.__webglFramebuffer=q,de.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(T,q=0,de=0){K=T,oe=q,$=de;let le=null,ae=!1,Re=!1;if(T){const be=se.get(T);if(be.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(X.FRAMEBUFFER,be.__webglFramebuffer),k.copy(T.viewport),ee.copy(T.scissor),Oe=T.scissorTest,A.viewport(k),A.scissor(ee),A.setScissorTest(Oe),ie=-1;return}else if(be.__webglFramebuffer===void 0)pe.setupRenderTarget(T);else if(be.__hasExternalTextures)pe.rebindTextures(T,se.get(T.texture).__webglTexture,se.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const dt=T.depthTexture;if(be.__boundDepthTexture!==dt){if(dt!==null&&se.has(dt)&&(T.width!==dt.image.width||T.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(T)}}const Qe=T.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Re=!0);const tt=se.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(tt[q])?le=tt[q][de]:le=tt[q],ae=!0):T.samples>0&&pe.useMultisampledRTT(T)===!1?le=se.get(T).__webglMultisampledFramebuffer:Array.isArray(tt)?le=tt[de]:le=tt,k.copy(T.viewport),ee.copy(T.scissor),Oe=T.scissorTest}else k.copy(nt).multiplyScalar(ve).floor(),ee.copy(Ft).multiplyScalar(ve).floor(),Oe=lt;if(de!==0&&(le=z),A.bindFramebuffer(X.FRAMEBUFFER,le)&&A.drawBuffers(T,le),A.viewport(k),A.scissor(ee),A.setScissorTest(Oe),ae){const be=se.get(T.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+q,be.__webglTexture,de)}else if(Re){const be=q;for(let Qe=0;Qe<T.textures.length;Qe++){const tt=se.get(T.textures[Qe]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Qe,tt.__webglTexture,de,be)}}else if(T!==null&&de!==0){const be=se.get(T.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,be.__webglTexture,de)}ie=-1},this.readRenderTargetPixels=function(T,q,de,le,ae,Re,He,be=0){if(!(T&&T.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&He!==void 0&&(Qe=Qe[He]),Qe){A.bindFramebuffer(X.FRAMEBUFFER,Qe);try{const tt=T.textures[be],dt=tt.format,ft=tt.type;if(T.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+be),!I.textureFormatReadable(dt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(ft)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-le&&de>=0&&de<=T.height-ae&&X.readPixels(q,de,le,ae,De.convert(dt),De.convert(ft),Re)}finally{const tt=K!==null?se.get(K).__webglFramebuffer:null;A.bindFramebuffer(X.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(T,q,de,le,ae,Re,He,be=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&He!==void 0&&(Qe=Qe[He]),Qe)if(q>=0&&q<=T.width-le&&de>=0&&de<=T.height-ae){A.bindFramebuffer(X.FRAMEBUFFER,Qe);const tt=T.textures[be],dt=tt.format,ft=tt.type;if(T.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+be),!I.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,$e),X.bufferData(X.PIXEL_PACK_BUFFER,Re.byteLength,X.STREAM_READ),X.readPixels(q,de,le,ae,De.convert(dt),De.convert(ft),0);const Rt=K!==null?se.get(K).__webglFramebuffer:null;A.bindFramebuffer(X.FRAMEBUFFER,Rt);const Qt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await tS(X,Qt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,$e),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Re),X.deleteBuffer($e),X.deleteSync(Qt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,q=null,de=0){const le=Math.pow(2,-de),ae=Math.floor(T.image.width*le),Re=Math.floor(T.image.height*le),He=q!==null?q.x:0,be=q!==null?q.y:0;pe.setTexture2D(T,0),X.copyTexSubImage2D(X.TEXTURE_2D,de,0,0,He,be,ae,Re),A.unbindTexture()},this.copyTextureToTexture=function(T,q,de=null,le=null,ae=0,Re=0){let He,be,Qe,tt,dt,ft,$e,Rt,Qt;const sn=T.isCompressedTexture?T.mipmaps[Re]:T.image;if(de!==null)He=de.max.x-de.min.x,be=de.max.y-de.min.y,Qe=de.isBox3?de.max.z-de.min.z:1,tt=de.min.x,dt=de.min.y,ft=de.isBox3?de.min.z:0;else{const $t=Math.pow(2,-ae);He=Math.floor(sn.width*$t),be=Math.floor(sn.height*$t),T.isDataArrayTexture?Qe=sn.depth:T.isData3DTexture?Qe=Math.floor(sn.depth*$t):Qe=1,tt=0,dt=0,ft=0}le!==null?($e=le.x,Rt=le.y,Qt=le.z):($e=0,Rt=0,Qt=0);const Ot=De.convert(q.format),fn=De.convert(q.type);let ze;q.isData3DTexture?(pe.setTexture3D(q,0),ze=X.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(pe.setTexture2DArray(q,0),ze=X.TEXTURE_2D_ARRAY):(pe.setTexture2D(q,0),ze=X.TEXTURE_2D),A.activeTexture(X.TEXTURE0),A.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),A.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),A.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment);const Rn=A.getParameter(X.UNPACK_ROW_LENGTH),St=A.getParameter(X.UNPACK_IMAGE_HEIGHT),qn=A.getParameter(X.UNPACK_SKIP_PIXELS),Zn=A.getParameter(X.UNPACK_SKIP_ROWS),yt=A.getParameter(X.UNPACK_SKIP_IMAGES);A.pixelStorei(X.UNPACK_ROW_LENGTH,sn.width),A.pixelStorei(X.UNPACK_IMAGE_HEIGHT,sn.height),A.pixelStorei(X.UNPACK_SKIP_PIXELS,tt),A.pixelStorei(X.UNPACK_SKIP_ROWS,dt),A.pixelStorei(X.UNPACK_SKIP_IMAGES,ft);const hr=T.isDataArrayTexture||T.isData3DTexture,kt=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){const $t=se.get(T),Pi=se.get(q),zt=se.get($t.__renderTarget),Ni=se.get(Pi.__renderTarget);A.bindFramebuffer(X.READ_FRAMEBUFFER,zt.__webglFramebuffer),A.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Zi=0;Zi<Qe;Zi++)hr&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,se.get(T).__webglTexture,ae,ft+Zi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,se.get(q).__webglTexture,Re,Qt+Zi)),X.blitFramebuffer(tt,dt,He,be,$e,Rt,He,be,X.DEPTH_BUFFER_BIT,X.NEAREST);A.bindFramebuffer(X.READ_FRAMEBUFFER,null),A.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ae!==0||T.isRenderTargetTexture||se.has(T)){const $t=se.get(T),Pi=se.get(q);A.bindFramebuffer(X.READ_FRAMEBUFFER,te),A.bindFramebuffer(X.DRAW_FRAMEBUFFER,V);for(let zt=0;zt<Qe;zt++)hr?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,$t.__webglTexture,ae,ft+zt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,$t.__webglTexture,ae),kt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Pi.__webglTexture,Re,Qt+zt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Pi.__webglTexture,Re),ae!==0?X.blitFramebuffer(tt,dt,He,be,$e,Rt,He,be,X.COLOR_BUFFER_BIT,X.NEAREST):kt?X.copyTexSubImage3D(ze,Re,$e,Rt,Qt+zt,tt,dt,He,be):X.copyTexSubImage2D(ze,Re,$e,Rt,tt,dt,He,be);A.bindFramebuffer(X.READ_FRAMEBUFFER,null),A.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else kt?T.isDataTexture||T.isData3DTexture?X.texSubImage3D(ze,Re,$e,Rt,Qt,He,be,Qe,Ot,fn,sn.data):q.isCompressedArrayTexture?X.compressedTexSubImage3D(ze,Re,$e,Rt,Qt,He,be,Qe,Ot,sn.data):X.texSubImage3D(ze,Re,$e,Rt,Qt,He,be,Qe,Ot,fn,sn):T.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Re,$e,Rt,He,be,Ot,fn,sn.data):T.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Re,$e,Rt,sn.width,sn.height,Ot,sn.data):X.texSubImage2D(X.TEXTURE_2D,Re,$e,Rt,He,be,Ot,fn,sn);A.pixelStorei(X.UNPACK_ROW_LENGTH,Rn),A.pixelStorei(X.UNPACK_IMAGE_HEIGHT,St),A.pixelStorei(X.UNPACK_SKIP_PIXELS,qn),A.pixelStorei(X.UNPACK_SKIP_ROWS,Zn),A.pixelStorei(X.UNPACK_SKIP_IMAGES,yt),Re===0&&q.generateMipmaps&&X.generateMipmap(ze),A.unbindTexture()},this.initRenderTarget=function(T){se.get(T).__webglFramebuffer===void 0&&pe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?pe.setTextureCube(T,0):T.isData3DTexture?pe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?pe.setTexture2DArray(T,0):pe.setTexture2D(T,0),A.unbindTexture()},this.resetState=function(){oe=0,$=0,K=null,A.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return lr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}const Wx=new fr,bc=new J;class Xg extends ty{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],s=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(s),this.setAttribute("position",new Cn(e,3)),this.setAttribute("uv",new Cn(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,s=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),s.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const s=new vh(t,6,1);return this.setAttribute("instanceStart",new us(s,3,0)),this.setAttribute("instanceEnd",new us(s,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const s=new vh(t,6,1);return this.setAttribute("instanceColorStart",new us(s,3,0)),this.setAttribute("instanceColorEnd",new us(s,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new KS(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fr);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Wx.setFromBufferAttribute(t),this.boundingBox.union(Wx))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const s=this.boundingSphere.center;this.boundingBox.getCenter(s);let o=0;for(let c=0,d=e.count;c<d;c++)bc.fromBufferAttribute(e,c),o=Math.max(o,s.distanceToSquared(bc)),bc.fromBufferAttribute(t,c),o=Math.max(o,s.distanceToSquared(bc));this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Le.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Nt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ri.line={uniforms:Hh.merge([Le.common,Le.fog,Le.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Yg extends Ci{constructor(e){super({type:"LineMaterial",uniforms:Hh.clone(ri.line.uniforms),vertexShader:ri.line.vertexShader,fragmentShader:ri.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const yf=new Wt,Xx=new J,Yx=new J,In=new Wt,Dn=new Wt,rr=new Wt,Af=new J,Ef=new Zt,Ln=new oy,Kx=new J,Tc=new fr,Cc=new hs,sr=new Wt;let or,Os;function Qx(r,e,t){return sr.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),sr.multiplyScalar(1/sr.w),sr.x=Os/t.width,sr.y=Os/t.height,sr.applyMatrix4(r.projectionMatrixInverse),sr.multiplyScalar(1/sr.w),Math.abs(Math.max(sr.x,sr.y))}function rM(r,e){const t=r.matrixWorld,s=r.geometry,o=s.attributes.instanceStart,c=s.attributes.instanceEnd,d=Math.min(s.instanceCount,o.count);for(let h=0,p=d;h<p;h++){Ln.start.fromBufferAttribute(o,h),Ln.end.fromBufferAttribute(c,h),Ln.applyMatrix4(t);const m=new J,v=new J;or.distanceSqToSegment(Ln.start,Ln.end,v,m),v.distanceTo(m)<Os*.5&&e.push({point:v,pointOnLine:m,distance:or.origin.distanceTo(v),object:r,face:null,faceIndex:h,uv:null,uv1:null})}}function sM(r,e,t){const s=e.projectionMatrix,c=r.material.resolution,d=r.matrixWorld,h=r.geometry,p=h.attributes.instanceStart,m=h.attributes.instanceEnd,v=Math.min(h.instanceCount,p.count),_=-e.near;or.at(1,rr),rr.w=1,rr.applyMatrix4(e.matrixWorldInverse),rr.applyMatrix4(s),rr.multiplyScalar(1/rr.w),rr.x*=c.x/2,rr.y*=c.y/2,rr.z=0,Af.copy(rr),Ef.multiplyMatrices(e.matrixWorldInverse,d);for(let g=0,E=v;g<E;g++){if(In.fromBufferAttribute(p,g),Dn.fromBufferAttribute(m,g),In.w=1,Dn.w=1,In.applyMatrix4(Ef),Dn.applyMatrix4(Ef),In.z>_&&Dn.z>_)continue;if(In.z>_){const O=In.z-Dn.z,R=(In.z-_)/O;In.lerp(Dn,R)}else if(Dn.z>_){const O=Dn.z-In.z,R=(Dn.z-_)/O;Dn.lerp(In,R)}In.applyMatrix4(s),Dn.applyMatrix4(s),In.multiplyScalar(1/In.w),Dn.multiplyScalar(1/Dn.w),In.x*=c.x/2,In.y*=c.y/2,Dn.x*=c.x/2,Dn.y*=c.y/2,Ln.start.copy(In),Ln.start.z=0,Ln.end.copy(Dn),Ln.end.z=0;const C=Ln.closestPointToPointParameter(Af,!0);Ln.at(C,Kx);const y=_S.lerp(In.z,Dn.z,C),S=y>=-1&&y<=1,B=Af.distanceTo(Kx)<Os*.5;if(S&&B){Ln.start.fromBufferAttribute(p,g),Ln.end.fromBufferAttribute(m,g),Ln.start.applyMatrix4(d),Ln.end.applyMatrix4(d);const O=new J,R=new J;or.distanceSqToSegment(Ln.start,Ln.end,R,O),t.push({point:R,pointOnLine:O,distance:or.origin.distanceTo(R),object:r,face:null,faceIndex:g,uv:null,uv1:null})}}}class aM extends Fn{constructor(e=new Xg,t=new Yg({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,s=e.attributes.instanceEnd,o=new Float32Array(2*t.count);for(let d=0,h=0,p=t.count;d<p;d++,h+=2)Xx.fromBufferAttribute(t,d),Yx.fromBufferAttribute(s,d),o[h]=h===0?0:o[h-1],o[h+1]=o[h]+Xx.distanceTo(Yx);const c=new vh(o,2,1);return e.setAttribute("instanceDistanceStart",new us(c,1,0)),e.setAttribute("instanceDistanceEnd",new us(c,1,1)),this}raycast(e,t){const s=this.material.worldUnits,o=e.camera;if(o===null&&!s&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),s===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;const c=e.params.Line2!==void 0&&e.params.Line2.threshold||0;or=e.ray;const d=this.matrixWorld,h=this.geometry,p=this.material;Os=p.linewidth+c,h.boundingSphere===null&&h.computeBoundingSphere(),Cc.copy(h.boundingSphere).applyMatrix4(d);let m;if(s)m=Os*.5;else{const _=Math.max(o.near,Cc.distanceToPoint(or.origin));m=Qx(o,_,p.resolution)}if(Cc.radius+=m,or.intersectsSphere(Cc)===!1)return;h.boundingBox===null&&h.computeBoundingBox(),Tc.copy(h.boundingBox).applyMatrix4(d);let v;if(s)v=Os*.5;else{const _=Math.max(o.near,Tc.distanceToPoint(or.origin));v=Qx(o,_,p.resolution)}Tc.expandByScalar(v),or.intersectsBox(Tc)!==!1&&(s?rM(this,t):sM(this,o,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(yf),this.material.uniforms.resolution.value.set(yf.z,yf.w))}}const zo=[{id:"ccd0",sx:.42,sz:.28,px:-.42,pz:-.38,power:1,isSource:!0,base:[.78,.55,.28],kind:"ceramic"},{id:"ccd1",sx:.38,sz:.26,px:-.38,pz:.42,power:.92,isSource:!0,base:[.62,.48,.32],kind:"ceramic"},{id:"iod",sx:.34,sz:.48,px:.48,pz:.05,power:0,isSource:!1,base:[.18,.42,.78],kind:"blue"},{id:"ecd",sx:.18,sz:.52,px:.08,pz:.02,power:0,isSource:!1,base:[.9,.88,.78],kind:"smd"},{id:"cache",sx:.14,sz:.58,px:-.05,pz:.02,power:0,isSource:!1,base:[.42,.45,.48],kind:"smd"},{id:"npu",sx:.28,sz:.22,px:.42,pz:.55,power:.78,isSource:!0,base:[.12,.14,.18],kind:"chip"}],oM=zo.filter(r=>r.isSource).map(r=>({x:r.px,z:r.pz,power:r.power})),Ns=4.35,Uo=3.95,Tr=2.15,ko=.02,Na=-.06,Rc=[[0,"#0044ff"],[.17,"#00ccff"],[.33,"#00ee88"],[.5,"#88ee00"],[.67,"#ffdd00"],[.83,"#ff8800"],[1,"#ff1a00"]];function Ah(r,e){const t=Math.sin(r*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function lM(r,e){let t=0,s=1,o=.5;for(let c=0;c<3;c++){const d=Math.floor(r*s),h=Math.floor(e*s);t+=Ah(d,h)*o,s*=2.05,o*=.5}return t}function cM(r,e=new vt){const t=Math.min(1,Math.max(0,r));let s=0;for(;s<Rc.length-2&&t>Rc[s+1][0];)s++;const o=Rc[s],c=Rc[s+1],d=(t-o[0])/(c[0]-o[0]||1),h=new vt(o[1]),p=new vt(c[1]);return e.setRGB(h.r+(p.r-h.r)*d,h.g+(p.g-h.g)*d,h.b+(p.b-h.b)*d)}const uM=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,dM=`
  precision highp float;
  uniform sampler2D heatMap;
  uniform float opacity;
  uniform float fieldSize;
  varying vec2 vUv;

  vec3 legendRamp(float t) {
    t = clamp(t, 0.0, 1.0);
    // denser stops for richer mid transitions
    vec3 c0 = vec3(0.0, 0.267, 1.0);      // #0044ff cold
    vec3 c1 = vec3(0.0, 0.55, 1.0);
    vec3 c2 = vec3(0.0, 0.8, 1.0);        // #00ccff
    vec3 c3 = vec3(0.0, 0.9, 0.7);
    vec3 c4 = vec3(0.0, 0.933, 0.533);    // #00ee88
    vec3 c5 = vec3(0.35, 0.93, 0.2);
    vec3 c6 = vec3(0.533, 0.933, 0.0);    // #88ee00
    vec3 c7 = vec3(0.85, 0.92, 0.0);
    vec3 c8 = vec3(1.0, 0.867, 0.0);      // #ffdd00
    vec3 c9 = vec3(1.0, 0.65, 0.0);
    vec3 cA = vec3(1.0, 0.533, 0.0);      // #ff8800
    vec3 cB = vec3(1.0, 0.28, 0.0);
    vec3 cC = vec3(1.0, 0.102, 0.0);     // #ff1a00 hot
    if (t < 0.08) return mix(c0, c1, t / 0.08);
    if (t < 0.17) return mix(c1, c2, (t - 0.08) / 0.09);
    if (t < 0.25) return mix(c2, c3, (t - 0.17) / 0.08);
    if (t < 0.33) return mix(c3, c4, (t - 0.25) / 0.08);
    if (t < 0.42) return mix(c4, c5, (t - 0.33) / 0.09);
    if (t < 0.50) return mix(c5, c6, (t - 0.42) / 0.08);
    if (t < 0.58) return mix(c6, c7, (t - 0.50) / 0.08);
    if (t < 0.67) return mix(c7, c8, (t - 0.58) / 0.09);
    if (t < 0.75) return mix(c8, c9, (t - 0.67) / 0.08);
    if (t < 0.83) return mix(c9, cA, (t - 0.75) / 0.08);
    if (t < 0.92) return mix(cA, cB, (t - 0.83) / 0.09);
    return mix(cB, cC, (t - 0.92) / 0.08);
  }

  void main() {
    // bicubic-ish via hardware bilinear on high-res field
    float t = texture2D(heatMap, vUv).r;
    vec3 heat = legendRamp(t);
    vec2 xz = (vUv - 0.5) * fieldSize;
    float m = max(abs(xz.x), abs(xz.y));
    float edge = 1.0 - smoothstep(fieldSize * 0.48, fieldSize * 0.5, m);
    // Always show continuous heat — opacity follows temperature for soft fringe
    float a = opacity * mix(0.55, 1.0, smoothstep(0.0, 0.35, t)) * edge;
    gl_FragColor = vec4(heat, a);
  }
`;function fM({onSelectCore:r,viewportOffsetY:e=62,heatIntensity:t=0}){const s=it.useRef(null),o=it.useRef(r);o.current=r;const c=it.useRef(e);c.current=e;const d=it.useRef(t);d.current=t;const h=Vs(),{deletedBlockIds:p}=Vt(),m=it.useRef(p);m.current=p;const[v,_]=it.useState(null);return it.useEffect(()=>{if(!v)return;const g=()=>_(null);return window.addEventListener("click",g),()=>window.removeEventListener("click",g)},[v]),it.useEffect(()=>{const g=s.current;if(!g)return;const E=g.clientWidth||1200,w=g.clientHeight||800,C=new iM({antialias:!0,powerPreference:"high-performance"});C.setSize(E,w),C.setPixelRatio(Math.min(window.devicePixelRatio,2)),C.setClearColor(395792,1),g.appendChild(C.domElement);let y=.55,S=.42;const B=7.8,O=new wi(30,E/w,.1,100),R=()=>{O.position.set(B*Math.sin(S)*Math.cos(y),B*Math.cos(S),B*Math.sin(S)*Math.sin(y)),O.lookAt(0,.02,0)};R();const D=new DS;D.background=new vt(395792);const P=[],U=[],M=new vt(1315860);let N=null;const W=F=>{const ne=new fx(F.geometry,20);P.push(ne);const _e=new Ig({color:M,transparent:!0,opacity:.9,depthTest:!0});U.push(_e);const Ue=new XS(ne,_e);Ue.renderOrder=3,Ue.raycast=()=>{},F.add(Ue),F.userData.cadEdges=Ue},j=(F,ne,_e,Ue,ke,Xe,Tt)=>{const xt=new Cr(F,ne,_e),Gt=new Fs({color:Tt});P.push(xt),U.push(Gt);const rn=new Fn(xt,Gt);return rn.position.set(Ue,ke,Xe),W(rn),D.add(rn),rn},Q=(F,ne,_e,Ue,ke,Xe,Tt,xt)=>{const Gt=new Cr(ne,_e,Ue),rn=new Fs({color:xt});P.push(Gt),U.push(rn);const An=new Fn(Gt,rn);return An.position.set(ke,Xe,Tt),W(An),F.add(An),An},z=160,te=Uo,V=te*.5,oe=te/z,$=new Float32Array(z*z),K=new Float32Array(z*z);let ie=$,he=K;const k=new Uint8Array(z*z),ee=new zh(k,z,z,eu,hi);ee.minFilter=Tn,ee.magFilter=Tn,ee.generateMipmaps=!1,ee.wrapS=Vi,ee.wrapT=Vi,ee.needsUpdate=!0;const Oe=(F,ne)=>{const _e=(F+V)/te*(z-1),Ue=(ne+V)/te*(z-1),ke=Math.min(z-2,Math.max(0,Math.floor(_e))),Xe=Math.min(z-2,Math.max(0,Math.floor(Ue))),Tt=_e-ke,xt=Ue-Xe,Gt=ie[Xe*z+ke],rn=ie[Xe*z+ke+1],An=ie[(Xe+1)*z+ke],mi=ie[(Xe+1)*z+ke+1];return Gt*(1-Tt)*(1-xt)+rn*Tt*(1-xt)+An*(1-Tt)*xt+mi*Tt*xt},Ke=F=>{ie.fill(0);const ne=[[.1,1.15],[.28,.75],[.55,.48],[.95,.28],[1.55,.16],[2.25,.08]],_e=.85+F*1.35;oM.forEach(Xe=>{const Tt=Xe.power*_e;ne.forEach(([xt,Gt])=>{const rn=xt*(1+F*.55),An=1/(2*rn*rn),mi=Math.ceil(rn*3.2/oe),Fr=(Xe.x+V)/te*z,Ur=(Xe.z+V)/te*z,xn=Math.floor(Fr),Yi=Math.floor(Ur);for(let Ri=-mi;Ri<=mi;Ri++)for(let Ki=-mi;Ki<=mi;Ki++){const Qn=xn+Ki,Qi=Yi+Ri;if(Qn<0||Qi<0||Qn>=z||Qi>=z)continue;const qi=(Qn+.5)*oe-V-Xe.x,kr=(Qi+.5)*oe-V-Xe.z,Ws=qi*qi+kr*kr;ie[Qi*z+Qn]+=Tt*Gt*Math.exp(-Ws*An)}})});const Ue=18+Math.floor(F*22);for(let Xe=0;Xe<Ue;Xe++){for(let xt=0;xt<z;xt++)for(let Gt=0;Gt<z;Gt++){const rn=xt*z+Gt,An=ie[rn],mi=ie[xt*z+Math.max(0,Gt-1)],Fr=ie[xt*z+Math.min(z-1,Gt+1)],Ur=ie[Math.max(0,xt-1)*z+Gt],xn=ie[Math.min(z-1,xt+1)*z+Gt],Yi=ie[Math.max(0,xt-1)*z+Math.max(0,Gt-1)],Ri=ie[Math.max(0,xt-1)*z+Math.min(z-1,Gt+1)],Ki=ie[Math.min(z-1,xt+1)*z+Math.max(0,Gt-1)],Qn=ie[Math.min(z-1,xt+1)*z+Math.min(z-1,Gt+1)];he[rn]=An*.36+(mi+Fr+Ur+xn)*.13+(Yi+Ri+Ki+Qn)*.03}const Tt=ie;ie=he,he=Tt}const ke=1.05+F*.85;for(let Xe=0;Xe<ie.length;Xe++){const Tt=Math.min(1,Math.max(0,ie[Xe]/ke)),xt=Math.pow(Tt,.78);k[Xe]=xt*255|0}ee.needsUpdate=!0};let Ve=-1;const ue=F=>{const ne=Math.round(F*40)/40;ne!==Ve&&(Ve=ne,Ke(ne))};ue(.2);{const F=new Cr(Ns,.18,Ns,12,1,12),ne=F.attributes.position,_e=new Float32Array(ne.count*3);for(let Xe=0;Xe<ne.count;Xe++){const Tt=lM(ne.getX(Xe)*5,ne.getZ(Xe)*5);_e[Xe*3]=.04+Tt*.02,_e[Xe*3+1]=.24+Tt*.04,_e[Xe*3+2]=.11+Tt*.02}F.setAttribute("color",new pi(_e,3)),P.push(F);const Ue=new Fs({vertexColors:!0});U.push(Ue);const ke=new Fn(F,Ue);ke.position.y=-.14,D.add(ke)}{const F=Uo,ne=Tr+.08,_e=.05,Ue=ko-.01,ke=F*.5,Xe=(F-ne)*.5;j(F,_e,Xe,0,Ue,ke-Xe*.5,1722920),j(F,_e,Xe,0,Ue,-1.545,1722920),j(Xe,_e,ne,ke-Xe*.5,Ue,0,1590310),j(Xe,_e,ne,-1.545,Ue,0,1590310)}const Se=new jh(.055,.055,.035,8);P.push(Se);const ve=new Fs;U.push(ve);const Be=.145,Ze=Uo*.5-.08,nt=Tr*.5+.06,Ft=[];for(let F=-Ze;F<=Ze+.001;F+=Be)for(let ne=-Ze;ne<=Ze+.001;ne+=Be)Math.abs(F)<nt&&Math.abs(ne)<nt||Ft.push({x:F+(Ah(F*10,ne*10)-.5)*.012,z:ne+(Ah(ne*9,F*9)-.5)*.012});const lt=new jS(Se,ve,Ft.length),wt=new Kn,_t=new vt(13215818),pt=new vt;Ft.forEach((F,ne)=>{wt.position.set(F.x,ko+.01,F.z),wt.updateMatrix(),lt.setMatrixAt(ne,wt.matrix),lt.setColorAt(ne,_t)}),lt.instanceMatrix.needsUpdate=!0,lt.instanceColor&&(lt.instanceColor.needsUpdate=!0),D.add(lt);{const F=Ns*.5+.06,ne=.14,_e=.12;j(Ns+.12,_e,ne,0,0,F,1184276),j(Ns+.12,_e,ne,0,0,-F,1184276),j(ne,_e,Ns+.12,F,0,0,1052690),j(ne,_e,Ns+.12,-F,0,0,1052690)}{const F=ko-Na+.02,ne=.06,_e=Tr*.5,Ue=(ko+Na)*.5;j(Tr+ne*2,F,ne,0,Ue,_e+ne*.5,928280),j(Tr+ne*2,F,ne,0,Ue,-1.105,928280),j(ne,F,Tr,_e+ne*.5,Ue,0,796182),j(ne,F,Tr,-1.105,Ue,0,796182)}const Yt={value:ee},Jt=new Qo(Uo,Uo,96,96);P.push(Jt);const Kt=new Ci({vertexShader:uM,fragmentShader:dM,uniforms:{heatMap:Yt,opacity:{value:.88},fieldSize:{value:te}},transparent:!0,depthWrite:!1,side:ar});U.push(Kt);const Bt=new Fn(Jt,Kt);Bt.rotation.x=-Math.PI/2,Bt.position.set(0,ko+.055,0),Bt.renderOrder=2,Bt.raycast=()=>{},D.add(Bt),j(Tr-.06,.01,Tr-.06,0,Na,0,795156),j(.18,.008,.04,.55,Na+.02,-.85,14211280),[{x:-.75,z:-.7,sx:.08,sz:.06,base:6965800},{x:-.62,z:-.72,sx:.07,sz:.05,base:5913120},{x:.72,z:-.65,sx:.09,sz:.06,base:12104872},{x:.78,z:-.52,sx:.06,sz:.08,base:2771576},{x:-.8,z:.65,sx:.1,sz:.05,base:12630176},{x:.7,z:.72,sx:.07,sz:.07,base:1710620},{x:-.2,z:-.78,sx:.12,sz:.05,base:11049072},{x:.15,z:.78,sx:.1,sz:.05,base:9472120}].forEach(F=>{j(F.sx,.05,F.sz,F.x,Na+.03,F.z,F.base)});const It=[],X=.09;zo.forEach((F,ne)=>{const _e=new Cr(F.sx,X,F.sz,2,1,2);P.push(_e);const Ue=new Fs({color:new vt(F.base[0],F.base[1],F.base[2])});U.push(Ue);const ke=new Fn(_e,Ue);if(ke.position.set(F.px,Na+X*.5+.01,F.pz),ke.userData.blockIdx=ne,ke.userData.blockId=F.id,ke.userData.baseColor=new vt(F.base[0],F.base[1],F.base[2]),W(ke),D.add(ke),It.push(ke),F.kind==="ceramic"){const Xe=Math.min(F.sx,F.sz)*.22;F.sx>=F.sz?(Q(ke,Xe,X*.95,F.sz*.92,-F.sx*.42,0,0,11577496),Q(ke,Xe,X*.95,F.sz*.92,F.sx*.42,0,0,11577496)):(Q(ke,F.sx*.92,X*.95,Xe,0,0,-F.sz*.42,11577496),Q(ke,F.sx*.92,X*.95,Xe,0,0,F.sz*.42,11577496))}});const mn=15245344,bt=F=>{var ke;const ne=F.userData.outline;if(!ne)return;F.remove(ne);const _e=ne.geometry,Ue=ne.material;(ke=_e==null?void 0:_e.dispose)==null||ke.call(_e),Ue&&!Array.isArray(Ue)&&Ue.dispose(),F.userData.outline=void 0,N===Ue&&(N=null)},I=(F,ne)=>{const _e=It[F];if(bt(_e),!ne)return;const Ue=new fx(_e.geometry,20),ke=Ue.attributes.position.array,Xe=new Xg;Xe.setPositions(ke),Ue.dispose();const Tt=new Yg({color:mn,linewidth:3.25,transparent:!0,opacity:1,depthTest:!0,worldUnits:!1});Tt.resolution.set(g.clientWidth||E,g.clientHeight||w),N=Tt;const xt=new aM(Xe,Tt);xt.computeLineDistances(),xt.scale.setScalar(1.03),xt.renderOrder=10,xt.raycast=()=>{},_e.add(xt),_e.userData.outline=xt};for(let F=-9;F<=9;F++)for(let ne=-9;ne<=9;ne++)Math.abs(F)<4&&Math.abs(ne)<4||(F+ne)%2!==0&&j(.08,.025,.08,F*.22,-.24,ne*.22,12097584);const A=new ry,Z=new Nt;let se=-1;const pe=new J,Me=()=>{var ne;if(se<0)return;const F=It[se];pe.set(F.position.x,F.position.y,F.position.z).project(O),!(pe.z>1)&&((ne=o.current)==null||ne.call(o,{idx:se,x:(pe.x+1)/2*g.clientWidth,y:(-pe.y+1)/2*g.clientHeight+c.current}))},Pe=F=>{var ne;se>=0&&I(se,!1),se=F,F<0?((ne=o.current)==null||ne.call(o,null),h({type:"SET_SELECTED_BLOCK",id:null})):(I(F,!0),Me(),h({type:"SET_SELECTED_BLOCK",id:zo[F].id}))},me=()=>{var ne;const F=m.current;if(F.length!==0)for(const _e of F){const Ue=zo.findIndex(Xe=>Xe.id===_e);if(Ue<0)continue;const ke=It[Ue];ke.visible&&(se===Ue&&(I(Ue,!1),se=-1,(ne=o.current)==null||ne.call(o,null),_(null)),ke.visible=!1)}};let xe=!1,Ne=!1,We=0,Ie=0;const Ce=F=>{F.button===0&&(xe=!0,Ne=!1,We=F.clientX,Ie=F.clientY)},Je=F=>{if(xe){const ne=F.clientX-We,_e=F.clientY-Ie;Math.abs(ne)+Math.abs(_e)>3&&(Ne=!0),y-=ne*.006,S=Math.max(.08,Math.min(Math.PI*.48,S+_e*.006)),We=F.clientX,Ie=F.clientY,R(),g.style.cursor="grabbing"}else{const ne=C.domElement.getBoundingClientRect();F.clientX>=ne.left&&F.clientX<=ne.right&&F.clientY>=ne.top&&F.clientY<=ne.bottom&&(Z.x=(F.clientX-ne.left)/ne.width*2-1,Z.y=-((F.clientY-ne.top)/ne.height)*2+1,A.setFromCamera(Z,O),g.style.cursor=A.intersectObjects(It).length>0?"pointer":"grab")}},rt=()=>{xe=!1,g.style.cursor="grab"},st=F=>{if(Ne)return;const ne=C.domElement.getBoundingClientRect();Z.x=(F.clientX-ne.left)/ne.width*2-1,Z.y=-((F.clientY-ne.top)/ne.height)*2+1,A.setFromCamera(Z,O);const _e=A.intersectObjects(It);Pe(_e.length>0?_e[0].object.userData.blockIdx:-1)},G=F=>{F.preventDefault();const ne=C.domElement.getBoundingClientRect();Z.x=(F.clientX-ne.left)/ne.width*2-1,Z.y=-((F.clientY-ne.top)/ne.height)*2+1,A.setFromCamera(Z,O);const _e=A.intersectObjects(It);if(_e.length===0)return;const Ue=_e[0].object.userData.blockIdx;Pe(Ue),_({x:F.clientX,y:F.clientY,idx:Ue,id:zo[Ue].id})};C.domElement.addEventListener("mousedown",Ce),C.domElement.addEventListener("click",st),C.domElement.addEventListener("contextmenu",G),window.addEventListener("mousemove",Je),window.addEventListener("mouseup",rt);const Te=new ResizeObserver(()=>{const F=g.clientWidth,ne=g.clientHeight;F>0&&ne>0&&(O.aspect=F/ne,O.updateProjectionMatrix(),C.setSize(F,ne),N==null||N.resolution.set(F,ne))});Te.observe(g);let ge,De=0;const Fe=()=>{ge=requestAnimationFrame(Fe);const F=d.current;if(ue(Math.max(.2,F)),Kt.uniforms.opacity.value=.82+F*.14,De%2===0){for(let ne=0;ne<Ft.length;ne++){const _e=Ft[ne],Ue=Oe(_e.x,_e.z);cM(Ue,pt);const ke=Math.min(1,Math.max(0,Ue*.65));pt.setRGB(_t.r*(1-ke)+pt.r*ke,_t.g*(1-ke)+pt.g*ke,_t.b*(1-ke)+pt.b*ke),lt.setColorAt(ne,pt)}lt.instanceColor&&(lt.instanceColor.needsUpdate=!0)}se>=0&&Me(),me(),C.render(D,O),De+=1};return Fe(),()=>{var F;(F=o.current)==null||F.call(o,null),cancelAnimationFrame(ge),Te.disconnect(),C.domElement.removeEventListener("mousedown",Ce),C.domElement.removeEventListener("click",st),C.domElement.removeEventListener("contextmenu",G),window.removeEventListener("mousemove",Je),window.removeEventListener("mouseup",rt),It.forEach(ne=>bt(ne)),ee.dispose(),P.forEach(ne=>ne.dispose()),U.forEach(ne=>ne.dispose()),C.dispose(),g.contains(C.domElement)&&g.removeChild(C.domElement)}},[]),l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:s,style:{position:"absolute",inset:0,cursor:"grab"}}),v?l.jsx("div",{className:"ctx-menu",style:{left:v.x,top:v.y},onClick:g=>g.stopPropagation(),children:l.jsx("button",{type:"button",onClick:()=>{h({type:"ADD_CONTEXT",item:{id:`face-${v.id}`,kind:"face",label:`Face on ${v.id.toUpperCase()}`}}),h({type:"SET_COPILOT_EXPANDED",expanded:!0}),_(null)},children:"Add to Copilot"})}):null]})}const hM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAIzElEQVRYhdXYWXBT1xkH8DsTZ5xlQpMXGArnu7paLUuWZSFL8ibkfbexwTZLMCa2iVkSQKbYEIw3wMQE4oR9MYStCaEdkoEGCAwNZVi7pHENoS2UkgwFppTQh6Yt7cy/c86VZFkYJpk++eH3ctHg/73nnO9850iyLEtDooDQM02IhmQhc7oFFa0JKF5oAxFJKjmM+qx1ImFbDeGD2YRfLVPVZxHyEgmpNhmh38skyBypSJYl6XuFJFUwZG6dFdPXjkNFq/2JIVdXEQ7OIRz3E269qVpURCjxEDIc/0/IIWkkRaNIZlNMF1c4246aHhemdDqh1+slTiNeRpYMWllymOkI914d4UwT4fTigS85M4OQFk9wWSkspCr8I4VCBt8g+GM1EEVQn2u1WsnlSgQ3yZ+E+o0pqF6dBJvNJui0WvEFrAaiiSkE7twSwr21hD90EvbNYoLPTgh9rYhRCI1iYDSGT0g5ZHAgg8EgFReXgNu9ew/6+/tx5coV3Lp1S+g90QH/njy0fTgNN2/eFKqrq+FwOFCYFof105lwfSXDt+8yfNFKqM1SxcdQswgWGGIhEDZymg3HkLJgtVoxbtw4+Hw+bNu2Xdi1axd2796N3t5edLS3C/63q9Cw2Yu5G3LQ1tYm5Gd54bbHoNJnxJH5TPi8heFqB8Ph1wlZDpVJFzbMwQUTGP4hQ0a+gcfjQW5uLqZNm4Y7d+4IO3bswPz581FfXx+aSzlhJUgOPEuMpQepNsIrmYTLbUw4vZjhUz/DhmqCXkMSpxFrYLDwkOFfdziFlMNWtSx1dXXh7NmzOHHiBJqbm4X0dB+Cc1Yjy8JQxXxWFmF5GWHHTBLzkOO7zRulhLpMXhMjw8kSCwhf1QMrXx5GIWX+RzUasZq5jRs34urVqzh/7jyKCosEuz0eod/y/VvWSJkzLJiywoHy5nhoFZK41nLCzlrCoXkMX69WtZQRpnoJha6wkKHaHFmfI0KGr25FUSSLxQJu7969uHfvHvr6fofgfq02F4ObjfSpsZi0zI6ShTYYdUzittQwnFrEcKaJ4YvlqhnphKQ4wrhY6osMGb5Ph69oIqaSaZiEzAnMq+p1TtRtSBZe680URXr+rmzxb4+TVWNBYrYRKdkGzMomoa9VnYfXVzD0TFOl2Aj8j5ljzWcKCgrA+axWpCnKg0RFaWZEEhe5mQRX+fAI6cgwwFtphm+yBcX1HmHN3sX46MJ27Pl0LcZPtqiqYuGtDDILDp8esQ7tTZdbQVcVCbwu3l+n7jILCkjIS7Ih2elESV4e3uzsFDYnJ2O7VotNWi1WKoqQp9PCqdcdiddpCwe2y1AXJEuK6G5c4A4cOID79++j//Jl8OecRlFCc3Gg7+NvzSR7DNv0QQMD92U7w+1uXsAJEzyqiuzxqMwvQOOsV3Hh5Enhb/n5eKjT4Z86He4H+GNMyDfHwGsyIvh1+bwcPiHliC5oRWcnPvv5Zzh+7Di6u7uFvLxcyBqSuOAK9cYTypLUIn1nDROOLmR4v4FhZWV4TXy009HzuqwoUk58PN6vqhJ+u28f/nTqFD7euhUWq0Xg/evwDVlVVYWlS5airbVNDD3nb/SjrLwMhUWFoZ2nPJmwsJDQPpHwzTomvFfHsKqSYV7eQMiB2jfwggrv8jUayWE03qxNSQF3qKUFF9avx9Fly9DucgkegwGDDz2B/yDYT+bk5ODixYsC7yM7OzvR1NSE4N79ag7hnZcZdtaqZYfrnswwK4thUkpYyDCP7N3B7VEmaW1lJQ43NOBkdTW+9PmEYpNpGIWk8KNkGN50mM0x+zk+Bfz+Rsyd3YDkOBK21hD6lqs18dQiVZGLYFRI0itDBBrSQBeWbjaj2GrFEqMR/33pJaFqzNhhFFIegto6aSSdTiu4EhMx3utFepoHr2Qy4ZMFDHe7Gf68imFjNQkZdgYdMSn7h6Px7ogRwuYXXsDWx9gwYgS6X3xRGC/LfXa9vqvO6cR/KiqESrP5ySHDezx1HpJkMdAPlk5g4M4vUefh7W61Z+Q8sQwKY1LpqFG4+vTTwo2oKHz11FNDuhYVhUvR0UL+6NHgI1rhduPh8uVChcv1+JCPDr0sKRpZshpl6qhg4C4tZfh7D8NXqxl+VEyCx0JQiKTM0aNx+tlnhfPPPIOL0dFDOhsdjSPPPSdMGDsWBq1WqkpOxrft7YII+aTzbvh81SqypNfKktsq44SfCZfeYOgPHLRSbfyGjGDUPnkFh56xgLA5mZmQgFK3G/4JE3BtyxahJC1tmISUhwgUXjuDW2GyjVDsJtSkk1goHA93cA7DtpkMZoMscVOdDtS53CiNtyMYJPJu53GdeY8tHoecThzyenGhtk4ocDi+e0h+iKrPJDQVD5wCjy1gWP8yw4pJTEx4zp+ainXZOfCnpH7vkEfj4nDX4cB1lxsnM7OEnJgYfKcFw5UmEV7LI7SWEf7xDhMOv86wZjJhWRlBp9FIXJvLje2+dLSneZFgihH4nSbHT5jBkPz2jZe2WHPMEYfNBu6ozYa7Tif6ExNxYLxPCAv5aNs+uPTIUmORem3307kMf31L9dYUwsRkQplHhs9kEn45ZgwejhqF23Fx+GjePKHUmwZbfBxiLbEPgiFTHA5keZIws7wcn+zcKVyrrMRdrxfH3G6xyjlF1kjDKaQ8eB4GgvPDfnDVbp5B+HUL4TcthF80qRpyCI4Y2p9gkpst/EisKNJsrRYrFAUbeOvV0SEcnDMbe2pm4Md5uTj4/PPCxxoFPzOZsN/nw/rubsGfmYl5VitqYmPBazLHszwxpEFLUrGbgfvJXMJfugk3VhE+nKPit7iR5SbRYHiQajJhSkYGDvX0CH9sb8fdlhZ8U10NSJLw75Ej8S/G8HuXC62trUJSUhL4+Z8Lju6ga5ah8Mv5PCeB663lX1LGuSUyts5UFfBrk4j6l6DXb/IYjShJSkJvR4dwevFifO73o3/qVHwdFSXcGDkS14hwzm5HY2OjwG/zREgNP0sNhPwfUeUr2CYKOlQAAAAASUVORK5CYII=",pM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAYCAYAAACIhL/AAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAEsklEQVRIidXX309TZxgH8POPcE5BCzZSIBB+iGxeyI8qUrSwGxCGJJoMEGQMJgQElV8hOiEhyMhQbEcEgUDMSkIGjEUu1jGNEbYRCxihJlDbrrRy/SzPl57SI83mJVx8EnJOec+3b5/3Pc8rSJIo7JIEUdwlyaQ9KlEE/qzooxL5uiSEhYYKarUajh3T9LAjR48KIo8pBR/Pf09SBfDd5xwhIuyFwk1lAHkQlpWVRbm5uVRdXU0jIyOwsLBAL1++pLW1NdrZ2VGw2Wy0tLQE4+Pj0NraRoWFX0LgxPipVLsQUoRDEFCSp3pPZGQkabVaSk1NpZKSEuju7qa+vj4yGo00NjYGVquV1tfXaXNzk7Y9HnD844ZNux0h2dTUFIyOjtLDhwNw7VoFGAwGio+Ph/8P6KuVpMQkSjmZQiVflZDZbIaVlRV6+/YtvXjxwj8jDocDs+XxesnldoNt6z1wSHk2nz17Bq9evcIYbG5uDlpaWigzMxMUNSqKcAgCirt/JCQkUEFhISwuLuKnmf1llhqbGuFEcjJFRcdQdc23CMa8Xi8C/PXGRsaff4OE7xfA0DdHV38ww/b2NnCJnD59GhrqG2BiYsJfClVfV4HuzBkKkSSBHfyAOp2O9Ho9lZaVUX9/P/T29tL9+/epvr6esrOzIT09g1LT0qi5pYXcbjd8+PABAd/ZnbSwvAZ3f7VCxegfZOidBrvTBabBQSooKAB+Jisvr6Dv7t0Dk8kE16/XUpZeD0JlZSU1NDTQo0ePaHV1FXiAs2fPUvKJEySFiALLycmhvLw8rOaPt5SdwO3FV4N3Z/+mhO55kK+NjU9QTU0N+HcMrRa/DpO3paGhIUwOO/gB6+rqqK2tjQYGBuh3iwXS09MpLi6Ojh8/TvJGfkano2y9nu7eufOfAXd8/nxjo0nLIsgrfPjJE7p8+TLIAcPDw7VaLe+7kf7Vznsslxg7+AHPncuknBwDlZdfxSpj7e3t2J/4DZKS8hkkJSVRYmIi1dXW0tbWFnh9qziYd3YHQjKn0wU8dkZGBvB4jMvp1q1bwGXGbty4Qfn5+SBIUgicPJlMpaWlwO/Y5eVlGh4eRt2xiIiIPP7GV65c8deqx+P5pNl0vHdAR0cHaTTHBtmF8+eJcU3zs1hTYyPwriH/cochoLhPWloaVjGvNvmVNDMzQ9PT0/T48WO6ffs2WK1WNApOp3NfKN6YXS4XcDD24MEDevr0KTx//hw6O7soN/cLUHQ2crNw4AOKH3fRoiRotVEUExNDpz4/RRfzL0JTUxM1NzdTV1eXf8d//fo1bWxskN1u3xeQg3F4NvjjIPT09FBrWysUFRUBT0RsXBxIKu4JPyGgog33XeM6LC4upps3b5J50gwrvg6HV/S+unM4/O/YSfMkdHZ2UmlZKQQeA/wdVbCAymCyj84IkiQYLhiwWKq+qSKjyQjz8/NksVjQVXPYQNxw8GJjJqMJuCwuFV8CZSctC9KwKr/Jbqsv31R8O5FnUw6tbNfVarUQFR1NLDY2FjQazU+KEIogAWMEXpOfIR6qgFKQY2fAgKJKhOBHxt3/DQ04doZHRGSysCNhimMkU/Hx1cd/nA1yLdC/L4S0d+NhB8IAAAAASUVORK5CYII=",mM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAJtElEQVRYhdXZeXSU1RnH8WfeWTIzSRgmIdtk5n1nWAzIJhBlU1ooWBERFS0KRQ4g1oUerZRN4ajssonGgrUgVKAt0CIKWrBYiKAotbIIGKBsTQkgAqEYIQb49tz7vkMiS4/9r/njc07OeZMzv7n3ue+994lYpimmw6rBNGM2yxTTsiRhWVIYjU5WHszPYXikHs+Ymcy9MU1bMzBI8VA/xSP9FBcFtIVT0pg7MY2XxoYY/nim1q1LhLY3RWl1Q5S4ZYliWaZD/RzXzLglZtwUK26KWDrM9wvZNj9/uzIkks3zeRlMjoVZ3i6o/f1nKZSM9FIyzkvJQtuaOQGWFwVZOD2NcSPCWs/ueXTskM+Nhf9LSBXCtBz2L8ctU66LxbSOkQg/zsvjztxcRmZkaK+F67AinMrK7FQ+bZ+i7R/qoWyMh7IXPJQtt+1808uny1PY9Ec/K95I1aZMDPP06EweeyyLrrdGtCZNY30bNjKlfgP12XFNB47b9EjFTEtTI6ZCJkxTWkWio5RH69VjWijE7Dp1KHW7tQq3AYZAQKCj4ymBCQJFAsWOHQJ7BA4InLAdK3Xzz4MePvkkhbGT6mo/7BahacvYqiZNzR5qgBTLtDQ10rUjpFVj4dj1Z8oNsejNy1NTUQ56vSBydV6B6x2PCIwVmCmwwVHiBDwsUGH75oJwBuEEwl7Hkq0pvLo+wNOvhognTFFULSbrtJaEtOxpVtrlR8q75+XSLyebXT6fVm4Y1w7pEaosl3bip26OPunh6PMeyt62VXxu8O1+F1WHXVAp2qkLwjGEUoRtjhVH3Cw+4GXa2iCdeudqBc1jffXCSYaMOXrn5jAsM4MJ4brXDlbDRUM4l+nS9vbysX1wCtuGpfDZG7bjWzxU7Dc4W2bARdGOIBxE2I2wybEaYSXCvEMe+k0May06RFEh4/HaEjJhmtI2EilXlqWmctowOHONKa5yFPv9zE9LY1adOjSJxURJOPWsS8d576raStSPSYdOEca/GNJWHvSwsUpYd15Yjm0+wm8QZl9wMeWcrduT9WjRJULT9vnUjpAFZkwGZ2WhrA8EOOdyUelyXRHwrMvFB36/NiEcZkBWFvdnZ9PQNEXR77bvbG9qquyV2rxFdPvdfXJQJixL45VNfubs9PE6os1CmIYw+aIwpsqldZ9Rl3aPZNH6J7lIs1hUZoZCKDt8vmvWn1rlU+vW1W7Ly6N6j3f2fetqrCvcOyKTIUUhnliexkxEew5hDMJohCccPZem0WVmXToMq1dLQt4QjfZYHgyiHPR4rgj3rculS2C/x0uTaEyUBvrFn9xGbealDUGdXmz6mdreap50EjGt5b059D9haH2qXNyH0Buhh6PT5ym03xigzWuhWhKyMBobtcEfRjnmDoKoKa/eCss8Hkp8PooDARrGTFHiVw1p2WocsZKHhO9MuXNGLLgzl84lPu2WCoOOCO0RCh3N9vho8lkKBW+kIzdFY7N3e3NQThthkDSQ1Esht/t8rA4GWZyeTvW5s3rkqmvT0r4T6Cohk18u3j1Co40BrX65QQIhjhB1REo95O32ElmaVltC5jdmt/dh7bTxC5CRIKNAntG2+x5ndXAgi9MfoHolX1mL1vdc3clnke5t8W98VjPKJ6q3JMI4hF9qntKBeHf3JW3ZHbUkZGF+4/JN/kdRvnSPAZkMMgVkhlbmmcQu3zjWBUYQN+Oi1JzC5BnUumqgK5lxdcmKS273rvg+fFszjq5Dvt6AVBQjlWs07965+La+TPqi4UiraONV7wSHopR6VMA5IK+CzNcqXb+lwljIXl8R9c2EKCro5QdlK1l/5n+vxVg8oeXcfg/uj8o018FK5BjIcZCvbb7PvyDl482kz5tfS0I2jxY8OjM0GGWHrwhkBchbIO85ikE+4rTxPjNCz2i35XW+tC0ma8ysEeTyOtX3a3UqMi3J7DWKOgNmkzpshf1RyvsgH4B8CLLVlvryUkJjZ5L58LBaErLAbCj9sm9FeT8wnUpjDZXGX0A2OdRf7eCcayvbfMXajNAUBmcNoX/2g8T19CdqNBdqTnFcTCsh0YZtZue0HIAS7L8a38934h35D2QutmUgb4K8fRFZe16r++Q0su5/hJw7+qBr7Ja8QpQVqVOpMP7KN8Z6kC2OEpB9IAeokuPaO8G3mB56kWfDzxOP1RfFumrIhMSs+hK5riPhdhM178P7kOFVyJjzyCxsqvwXgfz+IrKiSst48Blyu9xFpENXpIGZkPaR1ii/SxtPmWclRzzvgmxz7NEBkUNUyQltbeA95tSZx9TQLAojN2vNooU0i7amINp6VYNYm1FKxOxwKGJ2LM9p1ItQ+1c07+ADyLDzyOjzyHRsajQXgGvBOYzFJ7XMB4aT1+l2Im0749SV/c37Zt/F2PBQXXcqlO1LkFMgp5N3Kf4tcFygTC6w0Tihzfb/jcmB9QwPrKNTYK2WkbEXd1YZ7vhXyA+w9QEZADLE2TeUSSDTwPPcvwgNKNLyW95M8g1RO0KaNVp/bfNb86O8jtyXfQclvo+0U0YpyFkuSiVnBe0rpylxSC7yseuctsR9gnnuI7zgPkIv92EtM1COK+0bXNlnkUJsPUB6gzwAMtTmfuIw3qf2ERz0Z3Lb9tRiBc376jvS5SH1qMZMaZPfivWBd7QjHjWa57kg5zkjaEd1QNgvsNmxUmCZwGyB+x3ZXud4qq7xzR1dnaD3gDxk8w3+gpRBm0m/ewFqoSn2ndtMNgcu60+adsg/pS7Sdvm2cco4yUnjJKdcVdph1wUOCuwT+MSxUmCpwByBvo4cDxhecIVAmtlcnatwda/C6FmBMeCUFui3gWDfd6nT81eoN4JixeM6YHUHo0brT21xqonZNNZ0lDIoewjjwpOZHnqZLZ5D2k7ja3YL7BLY6HhT4A/OSA50WE53MMUPYtncrY/gaXcAf7uPCd80Xotc14lYokDMRKMrNofqXtD/fUiz+pCg6Sm3pEGsodYh0oGued3okXsnIzOe015KW8JCfzGL/BtZ4t2nLTbOsNCo5BWjkoccjT2l1PPuIxzciT+/WAs1KqLu9ZPIaDKSSONuWqx+C9OKqzpUkm2/ZP9ch4xdEVKLWZp9ojGlgdlAOkduRXksYyzj0+cxKW0hv07ZrL3u+ZIFRgUvGRUMcTT37SSSspmc1HWk587VsqzB5CTuIi/RlWQTP9ngV/VXHdJ+plx2gq5xYLis2a9C3pLfGWVQ5lOMCM1gdKiIqcFV2syULczy7WGibw/9HS0C68gPriI3fRmhvOlattWf3MTtROKdqdnEv/SfiORNMx63WXH5DweESePclnY5AAAAAElFTkSuQmCC",xM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAYAAABmMXGeAAAACXBIWXMAAAPoAAAD6AG1e1JrAAADL0lEQVRIibWWMU8iQRTH5xvcJ2BmGgUDMUDD7hpBzKmJXHK7tmgFa3KJ2aUR/Qpcr4nGKzgjhRZQaeLVfgRj/Aaa2Jho/S7vDbM7u3DdbfFrCPyY+b+Z94YdHBzA29sb4fs+eJ4HjUYdpBQM4XwWIWI45wqhEEIwlok0DEP4/PwkXl9f4eXlBcaTCXg7O8TC4iJXAvxRjtBCaWD+IctcOplMYDQaweXlJVz8+kVsfN0Aq2bB8vIymFtMi/kUoaRBJD06OqJcT09PacVIp9MB97sLq6t1yHHBkGhVBCdSmQb/XxoEvUjqOA7gh7ZtQ9fvEk9PTyrn8Rhc1yMwX4UWC8YlJ4TMShqGKakUrFQqwfr6OnF2dhYX7+KCsGo1olgsQnReze33jOo7KzYImVzBbnsXut0unJycRDljxgieivQlEDwraWBU33FWQAjJJKEPdY6wLIvkiJZjFK7rEuZ1ZZlIQ3P700Ilbsr0y1iUZrNJjK5GxHA4nFs81gvmZDoVq6xM1B90O11AUKxX7bkuYdWsjKRhL7V9o1mQNJdTUF6qaegccdtaqvNuNpsZSXvpQgmphBiBjLecLxSOa5YFiC4OFgpvG6JvYLlcTmVqr4DgWorZcupKSLlSjY6PXh3K9ArN3bFMpGFi+zZ1IHNMbLe2wfVcGAwGM/mtN5sQ99O4+7PMpbbtAJ5HbH2NRoPAloe9FIuCTQXBfouUiiX6PiI5J4S6psGMtFKp0vxHHh8faXW3t7c0WpDk3E9KZfrur62twcLC4pd6vRFt8eHhgbr/9fU1tNttIn2WzV4hSGqME9/fB8/bgcHgZ5TfYf+QxgpmG/VMLZPxKUlWP8hCGsbS+/s/MB5PYDj8TWMa2dzcpKJUKmWjyxtMZxPnkhBCssTd18+eu7s7mv9IIZ//QcfGWEly/k+bc1r68fFBPD8/q6Lc3MDe3h5RyBeOaV7Nqbh6O+lxrYRCPSYCeH9/J/r9Pq2u1WqBkJIh856Pko5QXO3oDaAzzUTaan2D8/NzYmtri9pftVKF+DWnHwnqOqp8FXQtZ2IQjDm2A/u+TywVlq7UJDWm6RxpVPF/SP8CPPF/IxGZ10QAAAAASUVORK5CYII=",gM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAKkklEQVRogd2a61MT9xrH84+YhDsqCIjO0UAFrAVqBeUSxSo9FYFysYJyRCtgUYQ0EeSSYASKFCEFBRW8IXi4FSnlJgEBEYqW2ts5dnTamb7+nnmeZDcbRFtnzhv64jMZdnd2v/vsc/s9P2Rubm7vR0REgEhISEB6WrqFdIE0Cemv4eXrdu7ahYjISLy9ZQtWua+8STg4OMgUSqVMoVTIlCJKEYVCwdjO2eBzcgsyby9v1NfXM9PT0/jjjz/+b9y5c4fvq9VqoVKpGFc3t/cUglASSGKUAiTcgnCOz1uRy+Uiy1i4t014bW0d6urqYDQa2XUsREqIWAL787GxsXwP4smTJ3j27BlmH82itraWCQgIgKOjo4wQRCqk4qzYuY+AXC5TyFfwr53wqqpqGI3nceZMoWghlcpPgmoJ7M8HBwfzixPz8/Ns+adPn6LlWgtD552cnGSOjk5vLlzxCuHnz1egrEyP/HwNfHx8XsLbyuvO+b/1FsrKypixsTH88MMPePz4Mbq7u5kjR45g9+7dCA4OgVLpILMgCT7BVV4lnMWzj3uJwg0GA3Q6HXJyciBaQfQ/mzWkGUF6nVypkHl4evA9iPb2dgwODmJ0dBSPHj1iOjo60NLSgqKiIrY84eBAAi1Wft1XkCvkIstXuJfEVQwGPXQ6LXJysiHkS+kNbBEvyQjWz2f5Wynz9PAUhd+6dQt9fX0YHh7G999/z8zNzfELkBvRCxDBISFwdHaWOTo5iXna8gwL4vPlkjz+NxFugFanRTYJtxO8WPjLOVY47yERLrgKCZ+YmGDu3x/FyMgIu4/ZbGby8vKQnJKCXTExoMpKSINTcEu53IbMS1KA9Cxch2ypj0t8TCzHrxBO13h42Hy8q6uLLTsyPIy+r75ient70NPTjZGRYfz2229MT0+Pze+dnWSE0toa2AlXyGUrhAK0bIV7s6uYmCWzihSuXOTTlEGUjHCMX0SplK1atWohPS0NRFNzM7p7etDdLaFHoJtfgPj555+5UJH7qNXRjKenp1XD0plmuQuvtwWnVovs7FcFpzRvW6qZ1G1IuIuLiyw0JBREYmIit7dpRJqVdAFbGzw5+YCFUxBv3x7OeKxeDUtGkSAYbnHl1Ov1f0n4YrGLe2lb2ZYUKiGVKSVYr6dWgIQPDQ0hNDSUoS/3cjqUyxQrVix34d4+SwtfqgBZH8hiuOjIbS5jdRs3V1f/XTG7QFRUVnC2aGpqwoULF5jt4eFY5+sLrzVrILwg+f5Swi3PsjeMkN2Ws3BvSR7/E1exCqfK5uTkKHN3dzv27tatICgQj2ZmIjsrC1XVlUxlbRkqLhaj4mIpPr9YzugNpSgpLsbJkyehVqsZCsrff/+dq2z49u3Mag8PWILfvvTbhJOPm+oZFv7akm/BydlZ5uLqKqd2ISMjgyGrUjobM4/hu6ePmYoGHU4ZDuKzikxUNhQyD+cm8euvv+LBgwdioZqamsKLFy/wzeAgoneqGU9Pyxdh0dS7sAdYis8yF+5tn8cXFyDKy+7u7pr169dzSSZ6e3uxsLCA+cffom/w30xRTRYOFqjxsSYS8WdUTOJZFRKL7dl/OhBxuUE4VhqLjq+uMzOz09w5ko/nnTrFqPz94OjsZOkYxTwuHU/8XYRrrcEp5GlfX19sCgjggCHBxPiEGXPfzmBiahRl9SeYTwx7kaILRbIuGAlFKmax6MRiFRK0byFeswlpJdtQ0pjJ1LYU48vr59HQWoVLTV8yBZp8HM86jpTUFPj7+zOurq6eQl9u149L06EgPCgoCNFqNZKSk8V5ycLTeUzNmDEw2oV9uQFMgtZ/SaF/hZSCd5GaF47Txo9hnhpmxifGMD5uxo0b1xETE8NQ/0IdIvv4shXu7b10yZcrlDIikIRHRyM+IZ7FEheaziKn5COcqTqK/z77D3O7+wqMJi1Kaj/FvtN+TELhG77EWRXiCzcy5H61zQbc7moWDWYymTgGqfNczsK9X9tkkauoSXj8fow9GGL0l7KQVvwejhiiYLiczejrP4XhYj6MJg3aB5qY/OoD+EQfi8Mlkdiv28gkCJnmLAXwRiZZF4JU7VZ8Ur4Xn7domJ7BNoyOD2LswTC+W/iOuXrlKqoqq5B1POtNhMdhZPxrprAxzZIhzqpE6+aeS4a+9jRqmkrx4sVzpqa5BKfPHUJ22X7s02xgxGwjsW6qJgwfF0ThZPkBdPXfZuafzOGXX37h8d3k1CTT2tIKU70JeafyXiPc2pcEBgYiOioKcXH7YJ4cZoovZSDpbACSigIQl+/HnCiPx9maLFRc+gzzCzNMXcs5aKuOoaDyEA6VhTEpxZuRWroZ6YZQHD4XxlBOP16yH6eN6WjrvMYMjvRhYsqMyekJjIwOMdSwicLtxhN6PXRaLXJYOHV+ctmGjRsQEhKCPXv3iP5cc7UUGbpYHNLtFq0mWrLID3EnA5iqyzpcvVOHu32tYhtQe60chdU5qLmix+z8Q2bq4RRbtLu3E7maY0xYrD/8t7sjYl8Qisu1TE1tNbcmp/KWs3DvV7iKMJJYuXLlzTVr1nDlKi0tZWpMFbhy24Tm2xdhaitlcqv2I0nzDj7SbOGcThwzqnHywj4U1KSi8vIZpnewA/0jPbje3oSyis+YzLwUpOfEIeXYXuz4MJDZHL0GG8NdoE54B3UNNRZMFzmz0ABJ5u3zeuFCkNJe0Z49e0CQn42bx3kKJQRs0RfHkZS3DUn5W19Kc8lFm5GuiWGGzPc46AaG+pGY/j4TGOkB39AVdvxjmxM2hDljZ2IwrrU2Mw2NDX8ufPFojYRTPieM5Ubc7biLux0d6O2/y5R8cQJHi/+Jo6WxHHhEQpEf81FhENIKdjKD9/t4HNH3dQ8+TI1iNkd5Yf1WBVThLgiIXM1s+8AP4R/6Y/9hNW7ebmWqL1SjqqoKJz49Ye/jSy/dJOMBa6ahbRAaD1MJPpyRwbTducMd49y3s2jtaGCOFO/mdiAu19IRxuUGofPeLR58tt5uEq0bEOGBt6N9sCshFKXGQmZs/D5vCtA9Z2dnmczMTDYcxdxyFu4lCm9ra8O9e/fQ2dnJL2HBYMOgZ8rLy5nKykrcuHGDuX//Pgt6+HAaHV1tTNfXN9De34xrnbWouKRhRsYHWMzwyCCy8w8xdZercPVmA5paTWi9cY05ZzzHbbZGo0FSUhKzZcvb8F27FrRqsxNOA0oKnJ9++kl8y78KzbxnZmZ4GUZDTIKq3vPnz7Hw9Im4aHg095AtOTU1icbL9cz8/BxfR9eT4QhazNCGMS2mhZ0Ly3xmBc/jOR0Ku2Q0mKEH03qQVtxvwjffDGBgYAD9/f3iVyBD0FeYnplCe08rMzf/CD/++COmp6fQeMnEDA0N8nXmcTNaW1uZI/86wluPO3bsAO3QEZatG8tGgszJ0UkWGBgAIjwsjPsSIjpabUFNRFuwZhVhrEDYjklR25Gamorm5maGthDJuvTb2NjIHDhwgPvtsLAw0B4SwRYWxxIWpCl6+QpXOjjKVq9eDcLHxxu0xnyZtVZsx2gaRfzpsXW+UKk2ioZISIjHwYMHkJychKioKGbTpk1Yt24d1q5dCxdnFxnhSNspi/4ZQVhv0u//AOKxKKkUPf2cAAAAAElFTkSuQmCC",vM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAkCAYAAAAKNyObAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAFwklEQVRYhdXY72tTVxgH8Psf7D/oOecm6draThBttVsSbAomKtpJ7019MYdJ2lInSzIdTmy2gtCUJAjSDXxj3aTpVmiGYhEFxUBBfVOciGPWF9IqKogvff2M5znn3HvS2PfxxYdC77nnfHPv+XWP1bVtG4QjEU8kqkWlSASikQjE43GIxxMkoeC1SDgC8X1xSMQlKpdIkISmrpGEFDfo+rDuffE4wXqsnbt2QS6fl3I5yOWy6q+S1/C6lvNks1I+p3jlfXmD15bXnnktB1kFc7R2OMd14cOHD+T27dtQrVaVBbJQrfoWFkjVKzNvkP+bn/d5/zN4984bqs3evXvX8uEcL1yxWIR0Ki2llYwvo6RSKU86raW3lvLvSWcyUjoNmVSKpNJpIsvL+jY2NsByHD+cO+yCaBOWYMLigku2IAIJThhjhHPeRAjh4xq3OJZnzBK2TWwhLJszwrgg2J4QjKytrbV4ONfx+xy+YiZUI0zieBPXDepwnNA1ITFqhFkDsQGYLBTI4uIiXLt2DW7evAn1ep1go2h9fR3evn1Lbty4QU5MnACO9TL+CYRzNoXjgsnXqUNpGEK9YsY5+dhrDYfDkP0+S+7cuQMPHjyAR48eeaHevHnT5Pz58+TI10caww0bU4nrDoMQbRYGZMImNhMEAzIMZvtPiSPVl3S4Pbv3wPFvjxMM9eLFCwqg29Dev38Pr1+/JsPDw6S/vx90f279cK45Wh0HcGRR37JxZBkjUhhYGxE02nDUCa9cIBCwOjo+/wnVaktQr9+DJ0+eNIXDxnU/pJGr+jTjbWTt+acVzgV8fWYYc0AIG0NjCKbgdWnHjh2wc9dOODx0GCYLk6RWq8Hy8jKsrKx4A0K3hf+7ePEisXHew/lP+HXL12osX46TBM5sizPhTReC24R+XYATjr9QU/0vNhijvdm5yXPwz+PHpFb7Gxb/WoTr16/DvXqd6LaWlpa85U1PzDQjNMxzLR3OcZteq/dqG/qanPdMg4ODMDX1C/n36VPYWF+nyXR0dJR0dnWuYDfo7OpY7uvtBXT//n1y6tRpYPQQhLdkIf+1Pm/xcI4ZznXAVkuUXpZ02FAoZHX3dAMaHx+HbDYLU1NTMDc3Ry5cuACVSgXy+TzEYjHS3t7egxsGure7G9CZM2fIwQMHvQehl0VzpWlavpJJB2yaQvzdCE0VTFhdnZ0ru/f0AarVanD37t0G2N/6dvfB9u3bjUZtgxzxHR0dRRQKBi2bc6IfBL4N3ddbP5xrLF+OmwRcsjhWpkbpN8eOwej4GMz+9ivtJND09DScPXsWRkZGgNMPMfdz2HfaiO5Tso/K63pZlD+eEcFsQuFo6WSfWLhkMgm4/MQGB+H0qR/JlSu/w8KfCzA7OwuFnwvkwP79MLB3AHp7e8Gf7/QezwxqMFcatVR5q5C5e1arkBytRrijR0cgGAxYuEPQX18PHz6E1dVVuHTpEuwd2EtCwZDaiBqTsbkB9Taoeooww/mBN2/tbezjNidN4UaOjkAgGLCGhobg8uU5gvPWrVu3aJoIR8IkZITz5sFNc6AMZz4986ltLuc/zS3DOUkXcL/W/9WXMDY2Sr7o6YH2UOizYDDoVcaMDxy98HNuGxrDmcsd9meC5bA/0l6REXoTipxKWjmca4QrlUv0wfvdyZNQKBTIxMQEjOFypD6Et5bxeR/hGWJ+mPsf1b4MfmCrevQH9suXLxvD4TFAuVzeQslQIaVy2VMuKXi9oqhyeH9FaaizUiGVsoT3l0olgl9l1qFDh+DVq1fkj6tX6Uhia9PKjEFdm1aKRZiZkXSZGVIkXvmZGY+8LuvCORQ9e/afOgLTx1n6+ImOoJRsXtp09JXTR16KPh7L5/Lwg/LR4y5VRlL3fqScfz7XquFC7e1tev6KRPCYVR63hhV97Ir0Uax3RKuOXRGViSqRsBKV6P9hYrahj3i9+qlerD8K0XAE/gdiEXmkYTSCHwAAAABJRU5ErkJggg==",Xo="'Source Sans 3', 'Segoe UI', sans-serif",za=24,Mf=22,Pc="#6a6a6a",_M="#4eb0ff",SM="#424242",Qc="#ececec";function Ia({src:r,size:e=16}){return l.jsx("img",{src:r,alt:"",draggable:!1,style:{width:e,height:e,objectFit:"contain",objectPosition:"center",flexShrink:0,pointerEvents:"none",display:"block"}})}function yM(){return l.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",style:{flexShrink:0},children:[l.jsx("line",{x1:"8",y1:"3.2",x2:"3.6",y2:"11.2",stroke:"#9a9a9a",strokeWidth:"1.1"}),l.jsx("line",{x1:"8",y1:"3.2",x2:"12.4",y2:"11.2",stroke:"#9a9a9a",strokeWidth:"1.1"}),l.jsx("line",{x1:"3.6",y1:"11.2",x2:"12.4",y2:"11.2",stroke:"#9a9a9a",strokeWidth:"1.1"}),l.jsx("circle",{cx:"8",cy:"3.2",r:"2.1",fill:"#e8e8e8"}),l.jsx("circle",{cx:"3.6",cy:"11.2",r:"2.1",fill:"#e8c84a"}),l.jsx("circle",{cx:"12.4",cy:"11.2",r:"2.1",fill:"#5eb0ff"}),l.jsx("circle",{cx:"8",cy:"7.2",r:"1.1",fill:"#6ecf4a"})]})}function AM(){return l.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",style:{flexShrink:0},children:[l.jsx("circle",{cx:"5.2",cy:"11.2",r:"2.6",fill:"#6bbf3a"}),l.jsx("path",{d:"M5.2 8.2 A2.6 2.6 0 0 1 7.8 5.8",stroke:"#c8c8c8",strokeWidth:"1.1",fill:"none"}),l.jsx("path",{d:"M5.2 6.4 A3.8 3.8 0 0 1 9 3.2",stroke:"#c8c8c8",strokeWidth:"1.1",fill:"none"}),l.jsx("line",{x1:"11.2",y1:"3.2",x2:"11.2",y2:"11.2",stroke:"#f0f0f0",strokeWidth:"1.4",strokeLinecap:"round"}),l.jsx("path",{d:"M8.8 10.2 L11.2 13.2 L13.6 10.2",fill:"#f0f0f0"})]})}function EM(){return l.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",style:{flexShrink:0},children:[l.jsx("rect",{x:"9",y:"3.5",width:"4.2",height:"9",rx:"0.6",fill:"#e8e8e8"}),l.jsx("path",{d:"M2.2 5.2 H8.2 L9.4 6.4 V9.6 L8.2 10.8 H2.2 Z",fill:"#6bbf3a"}),l.jsx("path",{d:"M1.2 5.6 L3.2 5.6 M1.2 8 L3.2 8 M1.2 10.4 L3.2 10.4",stroke:"#e8e8e8",strokeWidth:"1.2",strokeLinecap:"round"})]})}function MM(){return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",style:{flexShrink:0},children:l.jsx("path",{d:"M3 11.5 L7 3.5 L13 5.2 L9 13.2 Z",fill:"#6bbf3a",stroke:"#2a5a1a",strokeWidth:"0.4"})})}function wM(){return l.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",style:{flexShrink:0},children:[l.jsx("circle",{cx:"7",cy:"7",r:"5.2",fill:"none",stroke:"#d8d8d8",strokeWidth:"1.2"}),l.jsx("line",{x1:"7",y1:"2.2",x2:"7",y2:"11.8",stroke:"#d8d8d8",strokeWidth:"1.1"}),l.jsx("line",{x1:"2.2",y1:"7",x2:"11.8",y2:"7",stroke:"#d8d8d8",strokeWidth:"1.1"})]})}function bM(){return l.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",style:{flexShrink:0},children:[l.jsx("circle",{cx:"7",cy:"7",r:"5.5",fill:"#e53935"}),l.jsx("rect",{x:"3.2",y:"6.1",width:"7.6",height:"1.8",rx:"0.6",fill:"#fff"})]})}function TM(){return l.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 17 17",style:{flexShrink:0},children:[l.jsx("ellipse",{cx:"8.5",cy:"8.5",rx:"7",ry:"3.2",fill:"none",stroke:"#e8e8e8",strokeWidth:"1.1",transform:"rotate(55 8.5 8.5)"}),l.jsx("ellipse",{cx:"8.5",cy:"8.5",rx:"7",ry:"3.2",fill:"none",stroke:"#e8e8e8",strokeWidth:"1.1",transform:"rotate(-55 8.5 8.5)"}),l.jsx("circle",{cx:"8.5",cy:"8.5",r:"4.2",fill:"#6bbf3a"}),l.jsx("path",{d:"M8.9 5.4 L7.2 8.3 H9.1 L7.8 11.6 L10.2 8.1 H8.2 Z",fill:"#fff"})]})}function CM(){return l.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",style:{flexShrink:0},children:[l.jsx("rect",{x:"6.4",y:"2.2",width:"3.2",height:"8.2",rx:"1.6",fill:"#d8d8d8"}),l.jsx("rect",{x:"7",y:"5.2",width:"2",height:"5.2",rx:"1",fill:"#6bbf3a"}),l.jsx("circle",{cx:"8",cy:"12.2",r:"2.6",fill:"#6bbf3a"}),l.jsx("circle",{cx:"8",cy:"12.2",r:"1.1",fill:"#8fd85a"})]})}function RM({kind:r}){return r==="physics"?l.jsx(TM,{}):r==="material"?l.jsx(yM,{}):r==="gravity"?l.jsx(AM,{}):r==="flows"||r==="flow"?l.jsx(EM,{}):r==="wall"?l.jsx(MM,{}):r==="thermo"?l.jsx(CM,{}):null}function qx(){return l.jsx("svg",{width:"9",height:"9",viewBox:"0 0 10 10",style:{flexShrink:0},children:l.jsx("path",{d:"M1.2 3 L5 7.4 L8.8 3 Z",fill:"#3aa0ff"})})}function Da({children:r}){return l.jsx("span",{style:{display:"inline-flex",alignItems:"center",height:18,padding:"0 5px",marginLeft:6,border:`1px solid ${SM}`,borderRadius:2,background:"#181818",fontFamily:Xo,fontSize:11,color:Qc,whiteSpace:"nowrap",lineHeight:1,boxSizing:"border-box",flexShrink:0},children:r})}const PM=[{id:"physics",depth:0,expanded:!0,status:"none",kind:"physics",label:"Physics"},{id:"ss",depth:1,status:"none",kind:"material",label:"Stainless steel, 316, annealed"},{id:"water",depth:1,status:"none",kind:"material",label:"Water (Liquid)"},{id:"gravity",depth:1,status:"suppress",kind:"gravity",label:"Gravity"},{id:"temp",depth:1,status:"none",kind:"thermo",label:"Fluid Initial Temperature",values:l.jsx(Da,{children:"22 °C"})},{id:"wall",depth:1,status:"none",kind:"wall",label:"Stationary Wall (Insulated) (def..."},{id:"flows",depth:1,expanded:!0,status:"none",kind:"flows",label:"Flows",isLastSibling:!0},{id:"in1",depth:2,status:"crosshair",kind:"flow",label:"Flow Inlet 1",values:l.jsxs(l.Fragment,{children:[l.jsx(Da,{children:"0.015 kg/s"}),l.jsx("span",{style:{fontFamily:Xo,fontSize:11,color:Qc,marginLeft:5},children:"at"}),l.jsx(Da,{children:"50 °C"})]})},{id:"in2",depth:2,status:"crosshair",kind:"flow",label:"Flow Inlet 2",values:l.jsxs(l.Fragment,{children:[l.jsx(Da,{children:"0.015 kg/s"}),l.jsx("span",{style:{fontFamily:Xo,fontSize:11,color:Qc,marginLeft:5},children:"at"}),l.jsx(Da,{children:"7 °C"})]})},{id:"out3",depth:2,status:"crosshair",kind:"flow",label:"Flow Outlet 3",values:l.jsx(Da,{children:"0 Pa"}),isLastSibling:!0}];function NM({kind:r}){return r==="suppress"?l.jsx("div",{style:{width:Mf,height:za,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx(bM,{})}):r==="crosshair"?l.jsx("div",{style:{width:Mf,height:za,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx(wM,{})}):l.jsx("div",{style:{width:Mf,flexShrink:0}})}function IM({row:r}){if(r.depth===0)return l.jsx("div",{style:{width:14,height:za,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx(qx,{})});if(r.depth===1){const e=r.isLastSibling;return l.jsxs("div",{style:{width:32,height:za,position:"relative",flexShrink:0},children:[l.jsx("div",{style:{position:"absolute",left:6,top:0,height:e?"50%":"100%",width:1,background:Pc}}),l.jsx("div",{style:{position:"absolute",left:6,top:"50%",width:r.expanded?4:12,height:1,background:Pc}}),r.expanded&&l.jsx("div",{style:{position:"absolute",left:10,top:0,bottom:0,width:14,display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(qx,{})})]})}return l.jsxs("div",{style:{width:48,height:za,position:"relative",flexShrink:0},children:[l.jsx("div",{style:{position:"absolute",left:20,top:0,height:r.isLastSibling?"50%":"100%",width:1,background:Pc}}),l.jsx("div",{style:{position:"absolute",left:20,top:"50%",width:12,height:1,background:Pc}})]})}function DM({row:r,onContextMenu:e}){return l.jsxs("div",{onContextMenu:t=>e(t,r),style:{display:"flex",alignItems:"center",height:za,paddingRight:6,minWidth:0,userSelect:"none",cursor:"context-menu"},children:[l.jsx(NM,{kind:r.status}),l.jsx(IM,{row:r}),l.jsx(RM,{kind:r.kind}),l.jsx("span",{style:{fontFamily:Xo,fontSize:12,color:Qc,marginLeft:6,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",flexShrink:1,minWidth:0,lineHeight:1},children:r.label}),r.values]})}function LM(){return l.jsxs("div",{style:{display:"flex",alignItems:"center",height:28,paddingLeft:6,paddingRight:6,gap:3,borderBottom:"1px solid #2a2a2a",flexShrink:0},children:[l.jsx(Ia,{src:hM,size:18}),l.jsx(Ia,{src:pM,size:17}),l.jsx(Ia,{src:mM,size:16}),l.jsx(Ia,{src:xM,size:13}),l.jsx(Ia,{src:gM,size:17}),l.jsx("span",{style:{fontFamily:Xo,fontSize:12,fontWeight:600,color:_M,marginLeft:4,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",flex:1,minWidth:0},children:"Faucet_Fluid_Thermal*"}),l.jsx(Ia,{src:vM,size:15})]})}function FM(){const r=Vs(),[e,t]=it.useState(null);return it.useEffect(()=>{if(!e)return;const s=()=>t(null);return window.addEventListener("click",s),window.addEventListener("contextmenu",s),()=>{window.removeEventListener("click",s),window.removeEventListener("contextmenu",s)}},[e]),l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",background:"transparent",overflow:"hidden"},children:[l.jsx(LM,{}),l.jsx("div",{className:"physics-tree__rows",style:{flex:1,overflowY:"auto",overflowX:"hidden",paddingTop:4,paddingBottom:8},children:PM.map(s=>l.jsx(DM,{row:s,onContextMenu:(o,c)=>{o.preventDefault(),o.stopPropagation(),t({x:o.clientX,y:o.clientY,row:c})}},s.id))}),e?l.jsx("div",{className:"ctx-menu",style:{left:e.x,top:e.y},onClick:s=>s.stopPropagation(),children:l.jsx("button",{type:"button",onClick:()=>{r({type:"ADD_CONTEXT",item:{id:`physics-${e.row.id}`,kind:"physics-node",label:e.row.label}}),r({type:"SET_COPILOT_EXPANDED",expanded:!0}),t(null)},children:"Add to Copilot"})}):null]})}let Zx=0;function La(){return Zx+=1,`msg-${Zx}`}const UM=5200,kM=80,Nc=1100,Jx=1400,$x=900;function Xi(){const{state:r,dispatch:e}=bh(),t=it.useRef(null),s=it.useRef(0),o=it.useRef(null),c=it.useRef([]),d=it.useCallback(()=>{t.current&&(clearInterval(t.current),t.current=null)},[]),h=it.useCallback(()=>{c.current.forEach(z=>clearTimeout(z)),c.current=[]},[]),p=it.useCallback(z=>{e({type:"SET_GUIDE_FOCUS",focus:z}),r.phase!=="guide"&&e({type:"SET_PHASE",phase:"guide"})},[e,r.phase]),m=it.useCallback(()=>{e({type:"SET_GUIDE_FOCUS",focus:null})},[e]),v=it.useCallback(z=>{e({type:"SET_DRAFT",draft:z.prompt}),e({type:"SET_RUN_KIND",kind:z.runKind}),z.defaultRpm!=null&&e({type:"SET_EDITABLE_FAN_RPM",value:z.defaultRpm}),e({type:"SET_COPILOT_EXPANDED",expanded:!0}),(r.phase==="idle"||r.phase==="guide"||r.phase==="done")&&e({type:"SET_PHASE",phase:"guide"})},[e,r.phase]),_=it.useCallback((z,te)=>{e({type:"SET_THINKING_LABEL",label:null});const V=r.editableFanRpm||1250;te==="checks"?(e({type:"ADD_MESSAGE",message:{id:La(),role:"assistant",content:"I'll validate parameters and run simulation checks in this panel. Review the plan below."}}),e({type:"SET_PLAN",steps:i_,changes:[],runKind:"checks"})):(e({type:"ADD_MESSAGE",message:{id:La(),role:"assistant",content:"I'll create design variations, update fan_rpm, and set up a comparison. Review the plan below."}}),e({type:"SET_PLAN",steps:e_.map(oe=>oe.id==="2"?{...oe,text:`Create v2 (fan_rpm: ${V}) → run.`}:oe),changes:t_.map(oe=>({...oe,to:V})),runKind:"variation"}))},[e,r.editableFanRpm]),g=it.useCallback((z,te)=>{h(),e({type:"SET_THINKING_LABEL",label:"Thinking…"}),e({type:"SET_PHASE",phase:"thinking"});const V=te==="checks"?"Planning simulation checks and DOE validation…":"Planning design variation and comparison…",oe=window.setTimeout(()=>{e({type:"SET_THINKING_LABEL",label:V}),e({type:"SET_PHASE",phase:"planning"})},Nc);c.current.push(oe);const $=window.setTimeout(()=>{_(z,te)},Nc+Jx);c.current.push($)},[h,e,_]),E=it.useCallback(z=>{e({type:"SET_THINKING_LABEL",label:null}),e({type:"ADD_MESSAGE",message:{id:La(),role:"assistant",kind:"tool-picks",content:"Here are tools that match what you asked for:",toolPicks:z}}),e({type:"SET_PHASE",phase:"done"})},[e]),w=it.useCallback(z=>{h(),e({type:"SET_THINKING_LABEL",label:"Thinking…"}),e({type:"SET_PHASE",phase:"thinking"});const te=window.setTimeout(()=>{e({type:"SET_THINKING_LABEL",label:"Planning tool recommendations…"}),e({type:"SET_PHASE",phase:"planning"})},Nc);c.current.push(te);const V=window.setTimeout(()=>E(z),Nc+Jx);c.current.push(V)},[h,e,E]),C=it.useCallback(z=>{let te=(z??r.draft).trim();if(!te)return;if(r.contextItems.length>0){const $=r.contextItems.map(K=>`[${K.kind}] ${K.label}`).join(", ");te=`${te}

Context: ${$}`}e({type:"SET_DRAFT",draft:""}),e({type:"ADD_MESSAGE",message:{id:La(),role:"user",content:te}}),e({type:"SET_COPILOT_EXPANDED",expanded:!0});const V=f_(te);if(V){w(V);return}const oe=r.runKind??d_(te)??"variation";e({type:"SET_RUN_KIND",kind:oe}),g(te,oe)},[e,g,w,r.contextItems,r.draft,r.runKind]),y=it.useCallback(z=>{const te=Ir[z];e({type:"SET_ACTIVE_TOOL",toolId:z}),e({type:"SET_RIBBON_TOOL",toolId:z,label:(te==null?void 0:te.label)??z}),e({type:"SET_COPILOT_EXPANDED",expanded:!1}),e({type:"SET_HIGHLIGHTED_TOOL",toolId:z}),window.setTimeout(()=>{e({type:"SET_HIGHLIGHTED_TOOL",toolId:null})},2200)},[e]),S=it.useCallback(z=>{y(z)},[y]),B=it.useCallback(z=>{const te=Ir[z];e({type:"SET_ACTIVE_TOOL",toolId:z}),e({type:"SET_AI_RAIL_TOOL_IDS",toolIds:null}),e({type:"SET_RIBBON_TOOL",toolId:z,label:(te==null?void 0:te.label)??z}),e({type:"SET_AI_RAIL_PHASE",phase:"loading"}),e({type:"SET_TOOL_SUGGESTION",text:null}),o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{var $;e({type:"SET_AI_RAIL_PHASE",phase:"suggest"});const V=x_[z],oe=(te==null?void 0:te.suggestMode)==="prompt-select"?`You might want to ${((($=te.promptOptions)==null?void 0:$[0])??"check simulation").toLowerCase()}`:(V==null?void 0:V.suggestion)??null;e({type:"SET_TOOL_SUGGESTION",text:oe})},520)},[e]),O=it.useCallback(()=>{if(!r.selectedBlockId)return;const z=r.deletedBlockIds.length+(r.deletedBlockIds.includes(r.selectedBlockId)?0:1);e({type:"DELETE_SELECTED_BLOCK"}),e({type:"SET_TOOL_SUGGESTION",text:null}),e({type:"SET_AI_RAIL_TOOL_IDS",toolIds:null}),e({type:"SET_AI_RAIL_PHASE",phase:"loading"}),o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{e({type:"SET_AI_RAIL_TOOL_IDS",toolIds:p_(z)}),e({type:"SET_AI_RAIL_PHASE",phase:"suggest"})},520)},[e,r.deletedBlockIds,r.selectedBlockId]),R=it.useCallback(()=>{d(),e({type:"SET_PHASE",phase:"collapseRunning"}),e({type:"SET_COPILOT_EXPANDED",expanded:!1}),e({type:"SET_COLLAPSE_STATUS",text:"Creating design variation and set increments…"}),e({type:"SET_SIMULATION_STATUS",id:4,status:"running"}),e({type:"SET_RUN_PROGRESS",progress:0}),e({type:"SET_VIEWPORT_INTENSITY",intensity:.12});const z="v2";e({type:"ADD_DESIGN_POINT",point:{id:z,label:"v2",fanRpm:r.editableFanRpm,status:"running"}}),e({type:"SET_ACTIVE_DESIGN_POINT",id:z}),s.current=Date.now(),t.current=setInterval(()=>{const te=Date.now()-s.current,V=Math.min(1,te/UM),oe=.12+V*.65;e({type:"SET_RUN_PROGRESS",progress:V}),e({type:"SET_VIEWPORT_INTENSITY",intensity:oe}),V>=1&&(d(),e({type:"SET_SIMULATION_STATUS",id:4,status:"complete"}),e({type:"UPDATE_DESIGN_POINT",id:z,patch:{status:"complete"}}),e({type:"SET_VIEWPORT_INTENSITY",intensity:.78}),e({type:"SET_COLLAPSE_STATUS",text:"Here's the result you asked for"}),e({type:"SET_PHASE",phase:"resultReady"}),e({type:"ADD_MESSAGE",message:{id:La(),role:"assistant",kind:"result",content:"Here's the result you asked for"}}),window.setTimeout(()=>{e({type:"SET_SHOW_POPOUT",show:!0})},600))},kM)},[d,e,r.editableFanRpm]),D=it.useCallback(()=>{h();const z=l_.map(te=>({...te,status:"pending"}));e({type:"SET_CHECK_STEPS",steps:z}),e({type:"SET_CHECKS_SUMMARY",text:null}),e({type:"SET_PHASE",phase:"checksRunning"}),e({type:"SET_COPILOT_EXPANDED",expanded:!0}),z.forEach((te,V)=>{const oe=window.setTimeout(()=>{const $=z.map((K,ie)=>({...K,status:ie<V?"done":ie===V?"running":"pending"}));if(e({type:"SET_CHECK_STEPS",steps:$}),V===z.length-1){const K=window.setTimeout(()=>{e({type:"SET_CHECK_STEPS",steps:z.map(ie=>({...ie,status:"done"}))}),e({type:"SET_CHECKS_SUMMARY",text:"All checks passed. DOE setup is ready: 4 runs queued (fan_rpm 2000/4000 × fin_count 40/80). Estimated max CPU temp range 32.1–35.8°C under 400W."}),e({type:"ADD_MESSAGE",message:{id:La(),role:"assistant",kind:"result",content:"Simulation checks complete — all validations passed."}}),e({type:"SET_PHASE",phase:"checksDone"})},$x);c.current.push(K)}},V*$x);c.current.push(oe)})},[h,e]),P=it.useCallback(()=>{if(r.phase==="confirm"){if(r.runKind==="checks"){D();return}R()}},[D,R,r.phase,r.runKind]),U=it.useCallback(()=>{e({type:"SET_SHOW_POPOUT",show:!0})},[e]),M=it.useCallback(()=>{e({type:"SET_SHOW_POPOUT",show:!1}),e({type:"SET_PHASE",phase:"done"})},[e]),N=it.useCallback(()=>{if(r.copilotDocked){e({type:"SET_COPILOT_DOCKED",docked:!1}),e({type:"SET_COPILOT_EXPANDED",expanded:!1});return}if(r.phase==="collapseRunning"||r.phase==="resultReady"){e({type:"SET_COPILOT_EXPANDED",expanded:!0}),e({type:"SET_PHASE",phase:r.phase==="resultReady"?"done":"confirm"});return}const z=!r.copilotExpanded;e({type:"SET_COPILOT_EXPANDED",expanded:z}),z&&(r.messages.length===0||r.phase==="idle"||r.phase==="done"||r.phase==="guide")&&r.phase!=="confirm"&&r.phase!=="thinking"&&(e({type:"RESET_COPILOT_CHAT"}),e({type:"SET_PHASE",phase:"guide"}))},[e,r.copilotDocked,r.copilotExpanded,r.messages.length,r.phase]),W=it.useCallback(()=>{e({type:"SET_COPILOT_EXPANDED",expanded:!1}),e({type:"SET_COPILOT_DOCKED",docked:!0})},[e]),j=it.useCallback(()=>{e({type:"SET_COPILOT_DOCKED",docked:!1}),e({type:"SET_COPILOT_EXPANDED",expanded:!0})},[e]),Q=it.useCallback(z=>{const te=z??r.toolSuggestion;if(te){if(te.toLowerCase().includes("retract")){e({type:"SET_PHYSICS_COLLAPSED",collapsed:!1}),e({type:"SET_SIM_LIST_VISIBLE",visible:!1}),r.simulations.forEach(V=>{V.expanded&&e({type:"SET_SIM_EXPANDED",id:V.id,expanded:!1})}),e({type:"SET_TOOL_SUGGESTION",text:null});return}e({type:"SET_DRAFT",draft:te}),e({type:"SET_COPILOT_EXPANDED",expanded:!0}),e({type:"SET_PHASE",phase:"guide"}),e({type:"SET_TOOL_SUGGESTION",text:null})}},[e,r.simulations,r.toolSuggestion]);return{sendMessage:C,proceed:P,dismissPopout:M,openResultPopout:U,toggleCopilot:N,dockCopilot:W,undockCopilot:j,locateTool:S,selectToolFromCopilot:y,selectSystemTool:B,deleteSelectedBlock:O,applySuggestion:Q,selectGuideFocus:p,clearGuideFocus:m,applyGuideAsk:v,youWillSee:r.runKind==="checks"?r_:n_}}const BM="/prototypes/phase1/assets/figma/icons/ansys-ai-logo.png";function Vh({size:r=16,className:e}){return l.jsx("img",{src:BM,alt:"","aria-hidden":!0,draggable:!1,width:r,height:r,className:e,style:{display:"block",objectFit:"contain"}})}const Kg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAABItJREFUeF7tmj9oFEEUxlOkSJEihYVFSosUFiksUghaWASzpykiWAS5MoJFihQiKQIiKSxSpLBIkULBQkHF5O4kYlCxkBAsBCMIHmghRFCTgCEkmfF7u2+O9W7u9v/e7N794GP/3O7s+2Z2983OXE+XLl06EillnxDiKm92FmQcqkIW7+oM0OrDMP0aS4nlGu/OP/B7AoaXoCM2T8sh/jm/wGQvzM5Au9AhmSewvsiH5BeYHIW+QsckNk7sYnWAD8sfMDcEkxU2XGt1BfZN8aH5At4GYG4BOmpinPZ/wmovn5IPyBCMTUG/IPtWb8EFPi0fwNB5blX7+aalDvxErf+UT8s+MHMKeqzM2S5bgGMO6Bw+PbvASz+M3GZDDc+5DhxHzHMR2QVeijCyTW4ca97gUEqB21jNbtqDgRFogw35Nu+iyEVlC3gdhB6QAyx93e5ucA69+Da5uOyA2OkzdRb6SyYcO6E5y8VmAximz9TvUJhbvQZVHHSfizUfxOz+TPXqzHiCMihLDHLx5oJYa5+pUODnvAVzfAkzQYDqM3UPitziCq7Ib1jt40uZBwK0P1OdkOMHZZs5zofY6DP1BQcZW6srUCa1/ju+nDkgNvdnatS01hQu/wxf1hwQ23iSxgmUT13eJb6keSC4CaoEKFJ+10FlAhrmOsmXMxMEmVglgJt8GbOJuxK4LMooZgxzyZWLJ+X6lX7e1IKA466E9s/ukHFRthZEqbAvyoUPtM0/aUHQMxx/aFDGIfSSi2wP8snlAVkuzImStYelVMJ2VVYs7cwLYqf+wE8y4FgJB85v3+xOzXjZ+u027hbuhB+yZP33OUoBx2SeSH92x49xt+w7Y9Uat8+N1/wOVtMb5pLr5/rwfE/braox2ko471Bs3qEBjsjmFSgnndmdKMZrenNdyoMdBH3sq/9PzcurDVAFQsnP7sRinMTmpc+eMMwtQ14pMrnZHRjvReBFPLtfGswEVXDz0xQDltp+Au9LZnYnVuOkkOYV2G6oBKwmM7uDW30yNuOkiOYV2F+rBCaZ2R2xUhi105XOTFAFNf95eVc8HzvNoTQA06oSkp3dQdd1OO0Xntxass+zK7+uw+SGK2GSN5NDlEYH8ThsNRjzo1fXYP4PzPsc6WLzSnZfoTQ2waG0D+rp4U546w7Ot6rP2J0HdebdotTLobQPygiohIe6AD3lVQktzCvh2nc5lPaCQOZ1AXqqWSX4MK9kNwAagkNpH2J17AY9n7ogW6q+EgKYV8J117wGV1KBvuZCpUlVCSHMK+FO8BxcSQW0xgiCCZ4m39/S7w8gu5PWZHAlVSgIVES4NBlR9E7gMNqLM/YXMk2GEK71UawWzPpLO72YENgjXcBxiR+3ohGZQIfTV7AW6gOPKhpqg2ZRvrnT227wgprRGQkqSrWifGnRiDd+UKgPDwP7OmN+RI+TqBSy/S9O+przO1KshEpbp/TKRWQfJ01aVZ1Zt+y8zkPlucNJk9aG1jje7GLVmjL2zR4XTpq0yjXjTjd6zoh+fVrYabJSuEfK5Ju9S5dOoafnH46R1ZPLwEVbAAAAAElFTkSuQmCC",Gh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABACAYAAABFqxrgAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAABthJREFUeF7tWs9LHFcc99CDhx56yCGHHDz0kD8hhxx7aEuk0hooJNBQQrAthRRyyMGCbVoQQhEqpaUWpCREaKr9YY20QdbV2G1cZGtME8EYt4i1RtdVV511Z2e3n8/se8s6zu6+cUbd2e0HPszuzPt+3/f72Tdv3vvu1NUqstnssUwmc0p8rT0g+WZwGZwRp2oHSPoE2I9RIHFBXKoNIPkWMJ7JGEs46mBAXKp+INkXmTAT31l6GEz+PTqMzxrPiybVCwz155DoFSZs6MmZ9aHWqXj/pXl+x7Wroln1AomeAsNMeCcaDKz0NOmxnsaskVyP4FyEAomm6hCq3gCbxamKBOLjxHcD8WYNbXViffD9WSZPbj24OYprnAucPxaFALfpWDipOCEQWj3Yhti0TFqPJkId4zJ5Mv7jW0uQZQ3XO3IWDmAVQB7BFtHkSMH4wAuIZ55J7jwdyg/9QqY35sfQZg5tnxemamAHMDQFMAxj8+b9Dyfnlv8c5ncC1y6LpocOdF/P/sEZUNdXZkb4a1uTJxP32idyEWebhLkaYLBHgLb+V7Lk/Wh/oRCtwuRQgC5l8ougpq9MB9fuvBO1S57kqOCTAW0HhQs1oKOiAhQRwvl95hDo5jj6uQbmkv93crjYL19IbfqnINrzNj4pXJUHGpcVQPLXv77mfSbniQ7aCjeeAX75qOvJ9YN7fmE8oJK8yb5zMdrA9nrOmwKYBAyUBJAcePBFKBegKQRtXQsBHxzy58Gw6TedmtUe9wZXv3tDs022CHmrwMciXLwgXJcGgxdJKAsg2RtpD9OGtm6EgF1+yNOXsR0LJ36/HrZLsBy5PoAfPsUuCvelwaBF8I4FkKRNgRABHJQfRWjL/rtE0BrX94WLnP0wHX/KhdEMfYtuSgONuxk80TP+UcQuSRV+G7o6ZWCHRj/wOYqDkhBoy1WeeUsZyY1JPus3Rq5FnA5/ST4thD/1bTIan4bRMoOIJRZCn955fdMuSRV+OfzubIEQIRyOi25KAm250+NWtxvkoob2Gtf6nAy5+bFL2I4cSbBVHwUSMDgJQ/Ne3E5tTLoVIm3oWMGZiTzGQUmIQsCmAbacHLuEH01lZPDJwbag2lxgBfqiEGbwFKJ98OyaXZIq/OzuuSUds7pIgEI0iG6UARtzrgL1zfBXIbukreT6Ae35Y9YLN84BY87QDDrLJJiMXZIqpG0KqzX6EoEpL1jQ1rEAq71vrmUwOcPG/XIeAXgmBG8rjir6UhUCbUoKEB9oWbR7dCZnfuEoiMPe2SapGOgIDjnDZznR8T63S1KFFiESOJwW3ewBrpUR4L1lI62bkzh/eXmee4QM5iHYebuERz+eCfHJwGsanzz0VUwInFMSANdZGcpujnf+Ia/xM+1A7+uG6ItLWFcLKcmP+8/ohUKA+eIMTqkKYK4/cJzjo1Ne5/oC534Q7ryHDJDBeyFEdGUqSF9MGGyW/vldRQDGhM/dRmrLXDts/HZlmv6Al8yADwrogIF2siccNW6c7JJUpSzOMHEmx6OqAAQ+s5qkx26f3RRL5Clx6eCBzrhlNoN3K8TDhWBeCCcCEPjeQNutyDfcznNxdLjlPnTYygAYfOhJX9AuQVWyOONUAAlcmxP/JvGxuP/F0X6Bji9TCIKJ2CWoyrt9jSMrtxrzxVEVAQhcNzd+OKoXTbwGOr8Imru/R/+MBewSVGXf96+GKISqAATavAzyz9Vj4tTRAEHwL25TCE52dgmq8tbPTUEjnVqgL/jcd3HmSIBgmxA0F0DZxbUno3wM2iWpQktxxndCsCZhCsEFkYdCDOJQ8raoKCDYfHEmvv1s3MPiTNn5oaKAYD0tzliEcFycOTIg2F3FGTdb8c+H3p63FGd8JYSnxZlCIcATopvKh1WIzsClqF2SKqQQToszFQMEe1DFGX8L0TX6wbRdkiqkEBtaLPf3XG7PULRKVXFAsAdWnMHBV0LsKs64+beLQjxbn7tHXxQCPCO6qXwIIWRxxnVNwlKcqeiXyvYAAXtWnLEIcV504Q8gYLM4Q7itSVjenDmyd6n2BQYsYq95IfLFGbc1CesrRKILfwABe1acsbxC5C8hEHO+OLOcmB9zU5OwvELE13z/L87Apy+rVGZxJpFcnXBTk+CtQT8CbaILfwABuy7OWLbg/qpOSSDofHEmpWvTTmoSVSGABIJ3XJzhqNFSW49oI2zVXuasZCCJvBBpIxUtVZOw1Bxo459yXDkgmbLFGb4IUrUCSCCpXULw5VEpgKXG4K+qk1MguT3FmZoSQAJJ7irOcC3BzzjHRVb1CyCBZPPFGUII4J8ym5dA8h01LYAERHD52l5d3X+NXznsrMaOAwAAAABJRU5ErkJggg==",Wh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAABj9JREFUeF7lm09MXEUcxzn04KEHDj1y4OChhx489NiDhx5qwsEYD43RhMTGkGiMJiZ66IGgoY0aSqCpDZKm0cY2pglNS8RQC2LVlqAiYq1tRaSItEWkSJEgwvPzm/nt+N7u7HaJO2X38Um+mZn3Zt7v95v3Z97M263aKNbW1mqiKKpVbdHNmwc6YInAM+zWzZsDgt+hgWdo1F2bAzrgaQ3cQLlfd20OCPgdjd2gt8NW3Z1+CHjYhv4fbKvT3emGWKttyEnogHatkm4I9EmNOQHbx7VKuiHQxP2fxSNaLb3ImdZgc2Dffq2WTohxuw3VMjbzjeYsdMCQVk0nBPiKxmo4O9IaTcx+ryULdWq0evoguIsap6H1Qn3U+0OnlhyvafV0IWdWAzRMz49Fjecei1rOP6NbLNQb1SbpgsAaNEZD34/vmQ4QZT8LIH2jAR1wXoMztPU96zrgzLctutVC3be0WTogpm0EtWLDi6KZhZsueFFzzxPRyuqy7jUdMKlN0wEBvaCxGQauf5DoANHIrxd0r4U26ZkbEMyQxmU48mlDTgecuLxf91po06PNKxsCSSx+TP5xNSf4jOTWyGK7HqZyoQMOaTCG7u/avcGLPho9orUstK3sGSIxbCGIGRtOFC2v/GUeeL7gRbJv6e97Wtt0wAJJtR6u8iCAxNR3+GavN/C4BsfPam0Lx3hJD1d54HyPxmHo/Pxlb9BxHe5/TmtbOMYNkspbNsfpxMzv9p+/eAP26cadr7SVRa4kPWzlgNPt6r9BHnC+YH06/uWr2srCsSprmozP1TjtPnzIg63Qw8+nqbvXtbXjUT18+UPwiXn/pZ+7vEEW0qmhJm1t4ZiV8e0AX2Xom7RuR9Hq2j+Jic965HkxKv+rACfrra+WK79d9AZXjDyzxPK+CvBRzr4MW46Oz170BleMmrrrotl7U3okx0Eknbwu4dce0rDDqRpzjP8+4g1sPcq+Cv4PdELYV2sMJD55ydmTTshIFkBlMvR271M5gcoLkLwrzC3eylGpEP/U1dLD8R+3Zu7PtVuDOR3gWRYrOXRAg7pbejh4ckJfAN+tIduKBVsTJI2FRJ2PSR2Uz6mrYcCGPAAvo1Vr0hiV/F3SObvFUkwH0Ga8gGTe7A1cxP6jyC3BkZ8m2aauhgED0gGJlR/KJ0gyjjmKvAISQRUrbL6BbpN3UN6jboYDIwfUnoHyJZK4c47AHTBI6qB8SF0MB3Z2W3MWjE4jeZeNO+cI1QHYPEXqoCyjUvCxX5a83asv+WV0mGy2g44QHYDNFrRI3kBeVpPCryliqMuatFDuJvE56QjUAWOkDsrhhrwMGEms91O+SuJ1EDlK3QHY7SV1UO5SF8OBkR3IzfnJz6M3yXqdRI5SdgA2ZciLD71yOwYf8h7CkHvtVQeOI6+TKkepOgC7zWiWvIG8jP3hp8wYSix3UZbv/l4nY3KUsAO+JnVQPqAuhgMjdWrPQHkKZQ95OaLOPKkh89uAuOK/FKGufCn1HiemD5GDNvISFnbIw0gNch86xFHURtbnYELUu0ZqkFWiowPPu+DlW2HW1+GC7/rslyEv/vxZQA+rm+HASOIbP+UzJF4ns0XdT0gd8pXoi59OGy0uu4vDQN0BknzHaULZvzSrVxfDgdHEQiflURKvkz5RX97R3dWTD+rMoWay+Y7TR+qgfFJdDAdGdqL47Epmd7I05XUyn2jXgZKnOwb7FpH8aipf+04UH/LkSgj77RADWzHk1vnEAXSMrNfJInSQ9kMofg8voRGU9z2CfTLkuWk1eTkhu9TNcGDoXWvSQjnv/blecaw2kW9ftqiXGCcpv64uhgMje9WegfIEuu+QV2ph8zSpg7K8dwSf5dViKH7JyWXaStbrZCiJTeTGSPWpVt0MAwZkdSfxq07Kcha8ToYSNmXIc1NtgfJedTMc2BEHHBiV+y/HwdDCrjxvHJTfVxfDgZ1dGEoMeSjvuBxK2DyGsoe8sP8rwoB81nZvWeIA6iDrdTKgZKhMDHlop7oZDoycVJsGyvL66nMwqLB7hTRO+F+QY3SfGjNQlrMvLyfDD1iyquSg3E8SfMiTp7675MoF8QmF/wMFtrx/ZdtoCP7B/TgKY/tQf5moB22OP1JuLFVV/wKAIoFBQ9pmUAAAAABJRU5ErkJggg==",Xh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAABr1JREFUeF7tmk1sVFUUx7voggULFixYdMGCBQsTWbhgQYQFoTND+Qip0URUQlig0dgFMZA0vk7b0CjRxmhsgAVGFkYhFmaGIgICUUh0IYlGE0MEIguiJEgA+ejX+Pvfd95kpvM6fW1fmb7Sf3Jy79x7znnnf+a+++679zXMYx7VKBaLq0ZHR7+gXGhNTw+M/APKIuWlpyoJAXlk2BIw/NQkAaKtyOOAfAB+C99RbTTVuQfI6Z/Xvz3qWI+B2sFRqnMzCZBbhtxChnzK1VAGwNxNAsSWQ1BJqLgFxoL+g2Yy9wC/YBIc8emGg/5eM6kJVJegm7KfyQBBVzwJxsNESUBF5K+Yn6XWnAwQcNQktJtJBegKyA8hI8g+60oOCLoFGffJEIDuNjNxoElzyVWkNKFSv0uxwFSSAwLX2iByEqiK/D9I1dOEtp3OadJA4FGT8A4S+iilTbfBn+YyeSD4rUak1kJJSRp3HWHYbC6TB8i1GYkpQclBLpi7ZGK6SRDw8Zy5SyYgsMu4TBo2Co6Yq+QCEgXjNGlgq7limblKHgg+0lNhPGCmUZDM9wkC34pMmXwAzB9TLDG3yQBBuwlwuuQFXGhdEOmFqhyYrsDuMNJO/cm9X3DB2MgHwFXkUYCeiPc7wzLQ9j3ShjSZavzgOrv9y8ULgtYoqDkXoBZKfCzQ0bxyGtnBz8VmHg9w2oMMIjX3CKYCfIY+EeiKRDwM2CkZ/YhWr/Fs5uJIr7e9iDZNY0sEvhTsIbvMtIiHAV8PEZ1vbEam/zaKk9gTgR+Ngg1IbMTDgP97yCGqa5Hp7WviYEZGxEyDWG8imtDj2ZvAUWyJwP4Pq8YOfOs1PT7iY4FjJeIgouFccxstDNgoeecptT3fjlz2e6YH/PxL0YEsslCDeeac/YwXRkBnB7r4VBLRaq4CX1NKBjYPKSqImz9NiA7WPDPAvzZVf9KFKCPdGuhp9FylWjVB0R4k44qvHQ76Nev3Ui0tsFSnrQ+p2Kyx7pkFF30JESkFF2kVidouMw8FKhrCXUgpGdT1OO2jWk58EdJBu0ZDFUxt5sG1FhDELuQuUnM00C9oB7k0dGsBPSVDvkuLKdp0PS2Pdf+PC1N/cuCaiwhKQ1FDfdAPoxr0aYncZ2aRgWkjsg3ba87RBDCzJw8CXIn8oiBE1kUzBrQrSZPaOsNsm28dDWZWH3D9Rghq6P7nh1MJ2rWuuGjqDR35dFf3iU1D75968baXS62y5gpglpwEBIBkk8Uj0mHnCW9KryOXPkISih2FdNE7nikdtnrnVpcWNqgnLwGCgoHoJ8htpLR2oC5ohCztyrf87hKAeIXMEi+3bnm2kD713qkXrpubZCcAKPjFEA4WUe6RSaG54Fg2v/6RyGfzmQeU+xgRI0FCDpx/2x28op7sBNhP3RbadNUj042Gh4P3ix+d2f5X94kNIxAf0m3gyFNmC5kH3vFmZysf0o8Kd7HZAIunlAAB8k3IWevTSLhJsXjvyS2DwT+PHNLtYCZzJwGQWuEdT7V5ufROiGtBo71DJeFo34U3BkQ+m0uf9vqbKzZF5UN6UWFm9YfFs40ZvTGbb7kTDO/ugU3D1q/V3pUR7oieb1rdXOAklxmi7PK+Wu22veTDeYoI2cwKWDxuBOwdKBviJKGz0HKn9+xrf++/8NaB3jOvPuoe2HjdiDudzsL6Ya9/k1s2y4fvKhpkMytg8bgEfHD65c+zhZafIdfz7rHMx6UJT5Ofkfa+Tq3K5tNfqv7p+dd/cE6AfPiuosHM6g+Lp2ISFLK5zI8B6Y58qr+UDJKjfuaJlbptnDKQD99VNJhZ/WHxVCTAG0g18a87wtnC+vvt+XXPBslgnrhdTjyAfPiuosHM6g+LpzIBPAUCwvz77vCExdDFoM0rNK91imWQD99VNJhZ/WHxVCSgM79xe2dhw6gjm29eozYvn2r98NtXfvvs0u49TmkM5MN3FQ1mVn9YPFVzgNBT2PK8VSeEfPiuosHM6g+LJzQBk4F8+K6iwczqD4tnPgH2c8qQD99VNJhZ/aFgWOpe1rqf6pQ/esA2cgK41jUzqz8IRi89+tDB7QhRKhk6A3jGVCIB0wkTgE8dkOrrktn33TJBaUNkB3IScXv5lPrivItq6D5gOdAZNwH4cMfwVJPxXRKBLiRgfZCl74HuGYkbiA4/Qo+3aQtNADbnKFaYWvJA8Dro0Kf7Ony9ZaR02nuYaunDB8qKBNCv0VM6a5wTgJcOP9ZATEfyN4yo7mt9ErPHfutESN81zb77PG5AMjgn/BXZjxykLRn3+TxmBRoa/gdXbaapS7X57QAAAABJRU5ErkJggg==",Qg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAA7JJREFUeF7tmy9MHEEYxREVCAQCgUAgKhAIBKICgUAiEAgEAomsQCAqSBAIBCEViAoEiCZtoGlFk4o2aZMi2qSCJohKxIk2RZBAC+Wuv8c9yJX9w105ws3s/ZKXuZv5ZvZ7d7ezs8PS0aZNm8JRqVS60T2/LRYY70Kfy+XyuquKg751jL+irFBOu7o4YPq5zR9QdLq6GGB6VeYFr5dcXQwwvGLvFwy4KX5qzfNafHJT/GD2n2+e92do1s1xc9W8oO6Eossh8ZJh/g/acki8pJkX1J9RTDgsTjC5aqMJqD+iiPPajzGt8DZR+dztFajWz/+lw+MCf12Yey+TVbtJaNMHM+Mu8YCpfrx9Q6fnTjPwh9PjbnGAqWH0ox7z6KO7xQGGxtGRzNlnJsScojl3DR/MPLKx1AkvDUIH3T1c8KHJ7ilKvcxlQXzJQ4QLPjTZ7aJrf/K1EP8LPfEwYYKPMUz8RFrHNwz9pjxUeJD/PAY0izf0zV/gft0eLhxIuofkX6CGzver0H/HQ4YDeet8LzXBvM7/8La+yL2XxN/aRN2XujToPu5hw4P8ZzBwgP7r/Dfhnf+1YEBzwaacUDb0ayD8q4cJH8y8sa+6IP4Erbh72GBk3L4agn6THiJc8KHl737VUmPQ776HCRdMPLafVGj/jRIrROoOPUS4YGLaflKh/QuF1gxbfn85SfLytYcJEzyMYCJzo8NtQw5X/AR1Wjzp3l+XzQU3hQfJD2DiO2UmtC86/BKqu6k/P2Uow5wASXwQlWQiC9r3KDK3t2nrR+E9/UHSuu09pMxE7WjYXeIAX52YWkTXbW6qPZ6/7GCmE2m9X9d1nrjwNzbxobW9dnRXUO5EVwuxax6i9SC/ITRKklOUM2iB10toHW2jd0h/vMid3LKg3xpF60xqJNODtFX1AeVOWjeBsXVNb52HGUimD+lbPXaOtwbH0FNcYz703UNCk6juc/YmcJwNil4f+u4hodwbkmbBcbS2H/FhWwOSSn3aolnoV4U0ybWWcUFiD6tpNgfG20d76JnHHkGtuWQlwQcod2UmFIN20DJv55Eug9IokkGty8PamCRhPW6iG45MbFzX+j53iwf8LVRtpoNp3XfHdUNyAf60w5K3EaFLYbzP2WJQ53Ieow6ND8zptlQrsFRoi/s/LDA4a68J/MG0zursNsDkbtVuEtqWHRYnGOyz1wS0aVLsd2i8YHQOJXZnqNt2SDHAszYnN9CxxPt4Z/48MK7/r4t74mvTpuh0dPwFd8iEETuHo2MAAAAASUVORK5CYII=",qg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAAoRJREFUeF7tm69vFEEYhk9UVCAqKhAIBAKBQCAQiArEHkEgEP0DEARVUYEg2XMViDpqSBDgEORuCQhEcZWICoJqSAWiAlFRcckdz3f9hoR2OGb3dsvO7Pckb3buujd375PmOvujPcMwDMMwWkteZA8Ho/5u2eSj7I5OsRjT6XRlMplskdeML+vTF0I+vJdRZjwo+tMKOc6H2W2dqhqUvkF+UnyGjMljhku6S6PkRX/gKRYceb1OVQ2Krs2anwEJe+SW7tYYrRUgIGBMthmu6O6102oBDiQcknV9Sa1EIcCBhI/kmr60FqISICDghDxjWMuXZHQCHEj4ymZNp6lMtAIciJC1w6pOV5roBQhImK0ddMpSJCHAgYQ9Njd16iCSEiAgQdYOzxle0reYS3ICHEg4ZPNA3+avJCvAgYiCzVV9u3MkL0BAwgmbp+Tc2qETAhyIkLXDH8fwnRLgQMQrNrO1QycFCEg4Io86K8DxYX/nu69YaKIXsPvtjbdYaEyACTABJkCrVIPPYAJOP8r/wQSYABPgLRYaExCzAA6G9l98fvLSVyw0UQqg+DHZZLgkBXzFQhOdAIq/Y/P7FFlnBFDce5I0eQEUn3uaPGkBFP/nhZIkBVA8+FJZcgIoXupiaTICKC6nvO/qtMFEL4DictFjQJZ1ylJELYDyn8hCt8xEKYDSP0gtN01FJYDS8jd9h2Ftt81FI4DiX8hit6V68Ap4f+bxnOcbF0BpOXDZYNjIrbOt/g2g+FtyRXdthFYKoPQBua+7NEobBCxTdpPI8lW+5LbkOf1x4+RFtu4rFpRRfyy32+tUi0HpVXJdH14o+TDboNBB2cg/WugUhmEYhmH46PV+Ab2YYbFRNXMCAAAAAElFTkSuQmCC",OM={plane:Kg,path:Qg,pull:qg,thicken:Gh,box:Xh,up:Wh};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jM=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),eg=r=>{const e=jM(r);return e.charAt(0).toUpperCase()+e.slice(1)},Zg=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var HM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=it.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:c,iconNode:d,...h},p)=>it.createElement("svg",{ref:p,...HM,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:Zg("lucide",o),...h},[...d.map(([m,v])=>it.createElement(m,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=(r,e)=>{const t=it.forwardRef(({className:s,...o},c)=>it.createElement(VM,{ref:c,iconNode:e,className:Zg(`lucide-${zM(eg(r))}`,`lucide-${r}`,s),...o}));return t.displayName=eg(r),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],XM=GM("x",WM);function YM(){const{contextItems:r}=Vt(),e=Vs();return r.length===0?null:l.jsx("div",{className:"context-chips","aria-label":"Copilot context",children:r.map(t=>l.jsxs("span",{className:"context-chips__chip",children:[l.jsx("span",{className:"context-chips__kind",children:t.kind==="face"?"Face":"Physics"}),t.label,l.jsx("button",{type:"button",className:"context-chips__remove","aria-label":`Remove ${t.label}`,onClick:()=>e({type:"REMOVE_CONTEXT",id:t.id}),children:l.jsx(XM,{size:12})})]},t.id))})}const tg=24,KM=120;function Jg(){var s;const{guideFocus:r}=Vt(),{clearGuideFocus:e}=Xi(),t=(s=lg.find(o=>o.id===r))==null?void 0:s.label;return!r||!t?null:l.jsxs("button",{type:"button",className:"copilot-guide__focus-chip copilot-guide__focus-chip--pinned",onClick:e,children:[l.jsx("span",{children:t}),l.jsx("span",{className:"copilot-guide__focus-x","aria-hidden":!0,children:"×"})]})}function QM({layout:r="float"}){const{guideFocus:e}=Vt(),{selectGuideFocus:t,applyGuideAsk:s}=Xi(),o=o_(e);return l.jsxs("div",{className:`copilot-guide copilot-guide--${r}`,children:[!e&&l.jsx("p",{className:"copilot-guide__intro",children:s_}),!e&&l.jsxs(l.Fragment,{children:[l.jsx("p",{className:"copilot-guide__label",children:"I'm working on..."}),l.jsx("div",{className:"copilot-guide__row",children:lg.map(c=>l.jsx("button",{type:"button",className:"copilot-guide__chip",onClick:()=>t(c.id),children:c.label},c.id))})]}),e&&l.jsx(Jg,{}),l.jsx("p",{className:"copilot-guide__label",children:"Try asking..."}),l.jsx("div",{className:"copilot-guide__asks",children:o.map(c=>l.jsx("button",{type:"button",className:"copilot-guide__chip copilot-guide__chip--ask",onClick:()=>s(c),children:c.label},c.id))})]})}function qM(){const{thinkingLabel:r}=Vt(),e=r??"Thinking…";return l.jsx("div",{className:"copilot-thinking-line","aria-live":"polite",children:l.jsx("span",{className:"copilot-thinking-line__text",children:e})})}function ZM({pick:r,onSelect:e}){return l.jsxs("button",{type:"button",className:"copilot-tool-pick",onClick:()=>e(r.id),children:[l.jsx("span",{className:"copilot-tool-pick__icon","aria-hidden":!0,children:l.jsx("img",{src:OM[r.icon],alt:"",draggable:!1})}),l.jsxs("span",{className:"copilot-tool-pick__copy",children:[l.jsx("strong",{children:r.label}),l.jsx("span",{children:r.blurb})]})]})}function JM(){const{checkSteps:r,checksSummary:e,phase:t}=Vt();return l.jsxs("div",{className:"copilot-checks",children:[l.jsx("ul",{className:"copilot-checks__list",children:r.map(s=>l.jsxs("li",{"data-status":s.status,children:[l.jsx("span",{className:"copilot-checks__icon","aria-hidden":!0,children:s.status==="done"?"✓":s.status==="running"?"":"○"}),s.status==="running"&&l.jsx("span",{className:"copilot-checks__spin","aria-hidden":!0}),l.jsx("span",{children:s.label})]},s.id))}),t==="checksDone"&&e&&l.jsxs("div",{className:"copilot-checks__summary",children:[l.jsx("p",{className:"copilot-checks__summary-title",children:"Checks complete"}),l.jsx("p",{children:e}),l.jsxs("div",{className:"copilot-checks__metrics",children:[l.jsxs("div",{children:[l.jsx("span",{children:"Status"}),l.jsx("strong",{children:"Pass"})]}),l.jsxs("div",{children:[l.jsx("span",{children:"DOE runs"}),l.jsx("strong",{children:"4 queued"})]}),l.jsxs("div",{children:[l.jsx("span",{children:"Est. temp"}),l.jsx("strong",{children:"32.1–35.8°C"})]})]})]})]})}function ng({message:r,compact:e,onSelectTool:t}){return r.role==="user"?l.jsx("div",{className:`copilot-dialog__user-bubble${e?" copilot-dialog__user-bubble--dock":""}`,children:r.content}):r.kind==="tool-picks"&&r.toolPicks?l.jsxs("div",{className:"copilot-dialog__tool-section",children:[l.jsx("p",{className:"copilot-dialog__assistant",children:r.content}),l.jsx("div",{className:"copilot-tool-picks",children:r.toolPicks.map(s=>l.jsx(ZM,{pick:s,onSelect:t},s.id))})]}):r.kind==="tool-card"?l.jsxs("div",{className:"copilot-dialog__tool-card",children:[l.jsxs("div",{children:[l.jsx("strong",{children:r.toolLabel}),l.jsx("span",{children:r.content})]}),r.toolId?l.jsx("button",{type:"button",className:"copilot-dialog__locate",onClick:()=>t(r.toolId),children:"Open"}):null]}):l.jsx("p",{className:"copilot-dialog__assistant",children:r.content})}function $g({compact:r=!1}){const{phase:e,planSteps:t,parameterChanges:s,editableFanRpm:o,draft:c,messages:d,aiSkeleton:h,toolSuggestion:p,guideFocus:m}=Vt(),v=Vs(),{sendMessage:_,proceed:g,applySuggestion:E,youWillSee:w,selectToolFromCopilot:C}=Xi(),y=e==="guide"||e==="idle"&&d.length===0,S=!!(m&&!y),B=t.length>0&&e!=="thinking"&&e!=="planning",O=e==="thinking"||e==="planning",R=e==="checksRunning"||e==="checksDone",D=it.useRef(null),P=d.filter(M=>M.kind!=="result"),U=d.filter(M=>M.kind==="result");return it.useEffect(()=>{const M=D.current;M&&(M.style.height=`${tg}px`,M.style.height=`${Math.min(Math.max(M.scrollHeight,tg),KM)}px`)},[c]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`copilot-dialog__body${r?" copilot-dialog__body--dock":""}`,children:[(h||p)&&l.jsx("div",{className:"copilot-dialog__aware",children:h?l.jsx("div",{className:"copilot-dialog__skeleton","aria-label":"Loading tool context",children:l.jsx("div",{className:"copilot-dialog__skeleton-bar",style:{width:"100%",height:8}})}):p?l.jsx("button",{type:"button",className:"copilot-dialog__suggestion",onClick:E,children:p}):null}),S&&l.jsx("div",{className:"copilot-dialog__context",children:l.jsx(Jg,{})}),y&&l.jsx(QM,{layout:r?"dock":"float"}),P.length>0&&l.jsx("div",{className:"copilot-dialog__history",children:P.map(M=>l.jsx(ng,{message:M,compact:r,onSelectTool:C},M.id))}),O&&l.jsx(qM,{}),B&&t.length>0&&l.jsxs(l.Fragment,{children:[l.jsx("p",{className:"copilot-dialog__label",children:"Plan"}),l.jsx("ol",{className:"copilot-dialog__plan",children:t.map(M=>l.jsx("li",{children:M.text},M.id))})]}),B&&s.length>0&&e==="confirm"&&l.jsxs(l.Fragment,{children:[l.jsx("p",{className:"copilot-dialog__label",children:"Calls I'll make"}),s.map(M=>l.jsxs("p",{className:"copilot-dialog__call",children:["Change ",l.jsx("span",{className:"copilot-dialog__param-name",children:M.label}),l.jsx("span",{className:"copilot-dialog__chevron"})," from ",String(M.from)," to"," ",l.jsx("input",{type:"number",className:"copilot-dialog__param-input",value:o,onChange:N=>v({type:"SET_EDITABLE_FAN_RPM",value:Number(N.target.value)}),"aria-label":"fan rpm value"})]},M.key))]}),e==="confirm"&&l.jsxs(l.Fragment,{children:[l.jsx("p",{className:"copilot-dialog__label",children:"You'll see"}),l.jsx("p",{className:"copilot-dialog__see",children:w}),l.jsx("p",{className:"copilot-dialog__hint",children:'Hit "Proceed" or give edits.'}),l.jsx("button",{type:"button",className:"copilot-dialog__proceed",onClick:g,children:"Proceed"})]}),R&&l.jsx(JM,{}),U.length>0&&l.jsx("div",{className:"copilot-dialog__history copilot-dialog__history--result",children:U.map(M=>l.jsx(ng,{message:M,compact:r,onSelectTool:C},M.id))})]}),l.jsx("div",{className:"copilot-dialog__footer",children:l.jsxs("div",{className:"copilot-dialog__input-box",children:[l.jsx(YM,{}),c.toLowerCase().includes("fan_rpm")&&l.jsxs("div",{className:"copilot-dialog__draft-param",children:[l.jsx("span",{children:"fan_rpm →"}),l.jsx("input",{type:"number",className:"copilot-dialog__param-input",value:o,onChange:M=>v({type:"SET_EDITABLE_FAN_RPM",value:Number(M.target.value)}),"aria-label":"Edit fan rpm in prompt"})]}),l.jsxs("div",{className:"copilot-dialog__ask-row",children:[l.jsx("textarea",{ref:D,className:"copilot-dialog__ask copilot-dialog__ask--area",placeholder:"Ask anything",rows:1,value:c,onChange:M=>v({type:"SET_DRAFT",draft:M.target.value}),onKeyDown:M=>{M.key==="Enter"&&!M.shiftKey&&(M.preventDefault(),_())},"aria-label":"Ask Copilot"}),l.jsx("button",{type:"button",className:"copilot-dialog__send","aria-label":"Send",disabled:!c.trim()||O,onClick:()=>_(),children:l.jsx("img",{src:"/prototypes/phase1/assets/figma/icons/arrow-up.svg",alt:"",draggable:!1})})]})]})})]})}function $M(){return l.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":!0,children:l.jsx("path",{d:"M8.5 1.5H12.5V5.5M12.5 1.5L7.5 6.5M5.5 2.5H2.5C1.95 2.5 1.5 2.95 1.5 3.5V11.5C1.5 12.05 1.95 12.5 2.5 12.5H10.5C11.05 12.5 11.5 12.05 11.5 11.5V8.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})}function ew(){const{dockCopilot:r}=Xi();return l.jsx("button",{type:"button",className:"copilot-dialog__popout",onClick:r,"aria-label":"Pop out to side panel",title:"Pop out",children:l.jsx($M,{})})}function tw(){const{phase:r,collapseStatus:e}=Vt(),{openResultPopout:t,toggleCopilot:s}=Xi(),o=r==="collapseRunning";return l.jsxs("div",{className:"copilot-collapse-bar",role:"status",children:[o?l.jsx("span",{className:"copilot-collapse-bar__spin","aria-hidden":!0}):null,l.jsx("button",{type:"button",className:"copilot-collapse-bar__text",onClick:()=>{r==="resultReady"?t():s()},children:e||(o?"Working…":"Here's the result you asked for")}),l.jsx("button",{type:"button",className:"copilot-collapse-bar__close","aria-label":"Dismiss",onClick:s,children:"×"})]})}function nw(){return l.jsx("div",{className:"copilot-dialog",role:"dialog","aria-label":"Ansys Copilot",children:l.jsx($g,{})})}const qc=368,iw=280;function rw(){return l.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":!0,children:l.jsx("path",{d:"M5.5 12.5H1.5V8.5M1.5 12.5L6.5 7.5M8.5 11.5H11.5C12.05 11.5 12.5 11.05 12.5 10.5V2.5C12.5 1.95 12.05 1.5 11.5 1.5H3.5C2.95 1.5 2.5 1.95 2.5 2.5V5.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})}function sw(){const{copilotDocked:r}=Vt(),{undockCopilot:e}=Xi(),[t,s]=it.useState(!1),[o,c]=it.useState(!1);return it.useEffect(()=>{if(r){s(!0);const h=requestAnimationFrame(()=>{requestAnimationFrame(()=>c(!0))});return()=>cancelAnimationFrame(h)}c(!1);const d=window.setTimeout(()=>s(!1),iw);return()=>window.clearTimeout(d)},[r]),t?l.jsx("aside",{className:`copilot-dock${o?" copilot-dock--open":""}`,style:{"--copilot-dock-w":`${qc}px`},"aria-label":"Ansys Copilot side panel",children:l.jsxs("div",{className:"copilot-dock__inner",style:{width:qc},children:[l.jsxs("header",{className:"copilot-dock__header",children:[l.jsxs("div",{className:"copilot-dock__title",children:[l.jsx(Vh,{size:16}),l.jsx("span",{children:"Ansys Copilot"})]}),l.jsx("button",{type:"button",className:"copilot-dock__undock",onClick:e,"aria-label":"Return to floating dialog",title:"Pop in",children:l.jsx(rw,{})})]}),l.jsx("div",{className:"copilot-dock__body",children:l.jsx($g,{compact:!0})})]})}):null}const aw=qc,ow=qc,Yh=1618,ev=Yh-ow,tv=661,lw=96,cw=tv-lw,nv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAABLpJREFUeF7tmy9Q3EAUhxEIRAUCgUBUIBAVCEQFAlGBqEBUIBAVFRUVFQgEghlEBQKBqKhAIBAVFQgEogKBQCAQFQgEAoFAVCCYOfr9Lu8YQnbvcpfNJkfzzbwJ7L689/bd3mb/5EYaGhqC8vDwMNNqtVaRLWQfOUYuTU6Qn8g2sorurN023NCQd9aoC/7uC+65Qr4ji/w7aiaHAwWNnCVNKQ62LpBlM19fCHIO+W1xBwfbJ1wWzF29ILC1dpQRIBGb5rZ6iGeUgHaT0PLDPfdIZxC8s+LccM8vLq8sjGpQAASSq8ujd4ZsInP8O2kmHqFsApmlfh1RV++JbHLJ2IoCjvXJH7cj8UC9PuVdZNpuyw33TCF6gtybOSfU/+ESvyfgeC8JwQ31B1wKP8+xM42ou3uh/pBLvEclDtcT125Ub6rBwOZXxNsbqNs21XLB10LiMgtB/OWyZKrBwb7mF/LhhLr3ploeOHFOcCjX9730AHC1IF+J1zSUa8ZZ3lcBB8uJKydrplY6xPHJfGZQnamFBdsa9Z1zesr3TS0a+Pxh7lNQfs1lzNTCgWHnp0+5JjGvTS0a+BzH9207iGdQHr4XYNT52KM8zujrAN9aOmeg/MhUwoBNdf9MtinTYDRhatHB9xgx3LSDeYLFFW5yhDHnoy94pgeAGHxjwYqpFAdjW2Y3BeVfTKUyCGMpiSYNsYUbmGXM7KagfMpUKoMw9DXIrCYpOzaV4siY2X2EsnurrhxiyTyeKbu06uLImNl9JKiDghBLZklO2Z1VF8dsppBTq64cYvFtyIybyuBgZDSxlQanlT8BOnRJQJgJGg5cz9pzq64cYtHeg4swCyMcZFaAlN1adeV44gs3SHfJcPhFxwAQn6uHBn0KOGdbUNrmR16IYTYJJQ0xH5pKcTC2YnZTKDGmUhmEsZFEk4bYwm3LYW8Cg5ldGMpuTKUyiMF3BBf2BAlHvi3wj6YSHXz7FmlauYYdnzDoPPrCWbn7cF3At/MAhfIdUwkHdicx7DvCit4LiOWD+c5A3RtTCwuGfctidbkZUysd/OnUSHt/GSgvb4qO/W77cDqiKj737gE+dB7p3ZrnUu7bJTjwHoMTgAbK0s7pZBsf3mMy6srfn8SPNiC8p7fUnXMJvkuMTY1Bp20nHqjv+xB2IPClYK4St1mou0YWTb0wmNRpkPM7/xR09DWMc1yOI53le8/pBPXaqBh4QsK98uFbhziJnYQlHPZ8uwMdvRKn092eXRQdjfCfkSO7vW+4N14ScPYW6dk9O6B7jhwiWmBpHr/B33od7gDxTWv7BltRk6BPLVjwoYiaBBzpEbWDOI+uQyDb5iN3r0MvXhIEDvVKi/McoQjYPEXmzI0Srldv65kEgUON4HtIZrcmL9yrT1zJnDezKSivdxIETrWrPE8A3xANgF0TQr1ep9OgqE2YngGjU/8kPIcgNJuc5qr1vETbWgPPHrl3+JIQGhrVJIFGNUmgUU0SaFSTBBrVbxIqe9WnNGhUP0mI/qpfFGhbriSgoyn8cP02KS80LG9PeHlfgw40rmsSVGeqLxfa6U0C5fX/VVoIaKvOOfXDzfaynevNf9P4p9B27V9U/ppfQz0ZGfkH4PwlCspVmgwAAAAASUVORK5CYII=",Kh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABACAYAAABFqxrgAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAABGFJREFUeF7tWi1sFEEUPoFAIBAl7d01KQKBQCAQCBIQCASigrZ7pUkRFRUIBAJB0iYVJLS7GwJJBQJRgaioqDiBOIGoQFQgEIgKRAUCcQJxAr5v9t3d/szdbXdn98oxX/Ilvd15M/PevHnvzWwrFhYWFhYWFhYWFhYWFhOKuVX/8pWF1zPy8/9Cbdm7X214R7WG90fR8b7xmbyebMytblyE8h96ykfZqTbcTWk6uYCirZjiCcJIh9wmIjJ5qDZ25qFoJ654nFXH+z69uH1DxCYPcPmnOsWTdNt1x3skYpOHasPf1iueJLbHVuXuxgURPafABBnZEeHfYtJNujJW8YQRH6u+P+O4KzolqBzaj9wawub0kn9VRHsIAu3O/FiNBGWdquP+0Ew6QhpGGSOG+pJ/L428ENnDO0JfH1WGcbwD8GdtaeehdFcuriy8u8RV1kx0BN0vWLk70o0CMwH62tW3H0a3DcM+kG7KBQ2AFfisn1g6cjXrj9/MSpcKNA684ljXPk56RG3Zvymi5cKEAbqEIX7XHPcl97V0r6DS6IAxlJEcbz0eA+J9FApM4EA3uTyUeJFwa3oK4wj2/BNydsW9Jq96CLaStwXDTcmjYoGJPNcpYYwwsE7RQWBAVEE17ZmDloLAMxVVkW5Alq/kHlzyFd6vgdeluRZMUSKrV8IMmTL3ZhzvlgwbAd2eXqFiAttj7vJqMOqL7m0IHErnukFjRH5veP6gSRDKRZmatPLmyFVmBuLCCaG42w69/xSODdRV/gwQFBGqKktbjCTJ4y2CkC7oyF4cdBosnDRQ5B6CBRsWT34FAQUPvoaFcvKU20VXlQXFDitErVxR5HwiWxces8mYpX7QjdkoJmSEg6J44HXeC6zOL52cWbptGCBSbPE33nV6QZWnLlZlSWGjbA5MVwi+Eld0cjmpqs2IB3BMjodxj+VRH8o6BeT0EFHH+9uchAzZB/cn0peMnz0m9ckzQ+IkGS7coO+aPE6CpWWhxkCW4Orr4gXB4CXekdU7W4moT2C80NnlNFXFKLFi5NVWVkq80B6Zu+AWgtHW1eTVCtKNUTpH+sKeZ6B1/Pfxvd+F8oCQLgyK8iod1C1vykNKFgYK6NOqCTAmYJxe5qMRs13Zc89yRYqN5qc8HJ2lDB4GyUCJSxjGJWmSDbDqVBkFj/I8GISrKEOnBkt1UV6T9t0Tbg1pmg8seNhhchDzpPdBqUN1XgkCpsPxu4Sh5ln0YJ/vol3/44yGbC8qmEHgbjnL7BJJ75CpmwezSJGB0xCbw7KQGTAH89hdShl8RuJQpy3QigJTDwbeS0xkXIQBxvYFm0VLUNxoJlYSuUXHZoAweDhTxZBmkgWzZSwVGgELLV5vlWOMDuuL4oNgVnSNMSKX52BrbN8VsoClcVDV5S64+E8a+8PuN/8J8GovuNjxfBVMR13IBh9td1k5novAVxRYjfIMwH+6YKnLlY5/grOwsLCwsLCwsLCwsLAoHZXKX+I98wqXEHZFAAAAAElFTkSuQmCC",iv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABACAYAAABFqxrgAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAACHBJREFUeF7dmy+wFDkQhxEnEAgEAoFAIBAnEAgEAoFAIBAIBAKBQCAQCASCKgTiBAKBQCAQCAQCgUAgTiAQCMQJBAKBQCBOnKCKu+/Lds/N253ZyczOwuP9qrom0+nuSbL50+lk9/0ofP/+/eq/9bgTansLNMLrqOAgkH0bansLVOx9VPA+jzM9dAtS5nOo7S1QsS9RwYvBWgF5p5QJ/BbsvQErtKhXaYRTwV4B2UcXUkXuWLB3HyifFToar1VQ3ooF1uqGjDgTrCrQaEfQ2X7v8SN87Jkl5PmYx/7IWgvkTqsjgtUL7H4O0SvBWgvkLNNDFaJs22uI+FhpgATvb6EjIdILZC6G/Kdg9UKbxTiTZLB6gcxh5HesOrxvpyE0GsYLSD+FvkXaX26l68I7QN5l6Dn0T8i+iexeIJM97Rv0CtK/OBTZDeCdIO+jsoL080ianrchNBZGC0jfCP4Z0jnjW+DrwT8I3eH9q3kJ3m2IQScIuavQ3wutBdSFXFpLY5C+lDI+ofPBvyFPkJ6nITQSxgr8SGQVwDoK790it+S/gHJMZ+HtCZd5PRBqg0B2P3QWvUfQJ20J0l+hdnk+QL+HWgHv8zWEyksf3NEACbLs9o2c4N1ecAc6GGKTgQ1XoyvYbLq+4N25YGWYCMu6kNqgIVQK5QKNRlYvkLkNWdBZKr8MbO63HJC//gPe11ZMWWQKSI9vCBTaTsvjYP9yoOxl6QyM8jsKMFBmW56uAqeD/cuAMh+n7Dl5vuIxaUg41nPT8xka9Ad2C6Lsf0XZHaKdc0cVUHb2z2XQVaB6hv9ZoIzOZy+izC6fO1aPScCW/kA6Rs+CvWtBGe9aVkG6d8c6Ghi7FnbF5KgPui53rv8PIL3O10HPICexC1DVfqQL2CjuuSB9N9jzAaNPwvi3YFUDtUPo3YfK0FoHZOzCj0iO2qkK9D6EjT95THeS+oDhslHxGawqIO/a3rjQpPUi3RO41utT6GLbQHqbjbtMWjm7dnVlkNemunqtk3tUJzBo6CtRtd4i5wTldrvAgkEOq97JlTwdIvcF5RcVpF3eqmZ35NxV5mZt0MEbBQy+DMNVvQBRG6C9q7Mxqr1IZG2M9gTnUl21MiHrRkudwW17Nfw4BnN1OBfstciCCNI3gz0afg9Kh8dlb3BoIGeEqYB0byhvFDDkDlCDFmZwnCHTHjobnx/k9wNV0SZ03ijMc/oKgb57h9MYcXzmhPg0stcCuRIZ4vkqWBsDW64W2nSuqOkNt0Ner/EKpK9zjGf3kCLTIIbr9Buo2bsvg7zLodILxM6GrEGWzT21ACad8MoKw/NSsHvht5XtAnkuwe5E/XEXIbxFVjcQ/AK9h57yOjgxIZe/2ItgzQZs5vL3PFhrgdxD6B3UBHm6UIQjrXHX6kskHdMOh9HrLPq5z7gWrNmAzXNh2yVw1B4G+XJMADnEL0J/kC5IgcT4/XYL6B9amCk4HuzZgE1DbgVU4mSwJwETzeSdjMSmjXB8YaZg1C9VCyqfPa1qqe4DJrbWCMUwBRy9t6gFtjPOWLVU9gH9H9IT5vXbAzRCmeR2c084vDBTCjnb8pjA7IGF9WJ/I08QE9tpBEHhcis77+YFYNZYg7b1XDfaJqPf2wi3+MBJaHIsEd1cyw3Fzbqfx2aGzCZHt1C3t3p8d1NbIjM6geBH6E8/CukEHS4Ka4DcMSi3sleDvTEwVzzRwGDkGxk3fe3olXUpm8BlFAUy74ZQE9DognJFYQDI3Qt5l7NZTqCwlZHj2v3L2kti5Bvb0Jt8GCr/g3xb0I2GGw5PlG9C5SSK54cQW4uwkbO4MYWNhgU2cogZaaoaqsgZiFHHCJZ1aHvC48vjhzUYqDqEQafZ/pI2IDPaeUJnR2QKDN5XEFPKWwUMZ8s+CNYgkL0OZTCm6jJHApWDyJdoliB9L7IGgWyZ9HjOF1kSGMzAil2y+kIVsm5WMjLk9trdaO+vQ54zt7u/nFybew81QMXGy13jvBdCMWjXzCO5J8GuAiru3JaP1bXVBE9JO48sX7uxMhdCpArIG71W19jD7CfjfqA4K4ETwa4C8m5lLyxVtHHOTC9YpQLO2va8Ua438u3Ay+1gzwsN+4HA2WCPBnayV3Q2QrBGA7u/QzkHzX+dAKPnSwkB6erJsQvob6URBLbbFzPmc92xt/k5fwvbbASB/bKs8rRXTO6xDTDihDXPOX+g1QidCLHJwISTeIbcveg1/XpwGMuTJ3vCqMmwD1nALpA3y+12TDlJlsg5T3/EaZEulLdyzo85Y5F2/xXiO7PdhsGWO+IcxuOj3xZGZUG6atMiED8BbRyX6ANl8a8A1T0S+eY4EIxzoVHwQNQzfhtBr22wJyBzHsqW1x+YrTGwpSfZXCSDBrfpyOit5pJpXcYPCZVCebAhECme2jLUh65Bo7s56g4bL3GWYMoy4Bvj6FypyNu8ARIqh5HOhoj89qVPC6yb3BzLJ+BpZ3DJQsZf3UBIqURCHg+v+jR3E0k7ye4I9sCbrwESGgljGm0agldvtpX9hCC9I+gCy8p4qtW+m/wysnuBTLuSLnFeE9oxtOB5fpoVNUBSAq8852+AhMbCqMb9iFds8iDEA861h7XkZ7TpXbB6gUyOfXecvY4Zefa4DN744xhO204DJDQaxhvw/gkaPBJDxsiO8oN+ADLpR9T8LeAIlH8SKeB9Ow2Q0Hh8xI+tjMc+INf8/Qesdbuxm8On9u8/lilv1m23ARJ+BNK5qd5DINtcGAe1fwQb5fcjb0NvvwGmgsIZT0j0Oi38km0nbfZTrJ8OKpWTWK+/Qd7J0gILbLxZ23WggnmXyQsSK/sGibwMkm7tZPungoqtOFB9QPZjqO0tULfyZ/Aa0AirJ0Nbw759/wHE116Zf/VrrAAAAABJRU5ErkJggg==",Qh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAAytJREFUeF7tmz9oE2EYxgMt1MCVtoTi/QlkEeIgItShQ0CHBAxkcHAouJQM1kEiWYKLRuhQkmIcmim9pEIRhwqiJo3QIUPHDBnqplsHh4wOHRzO9yvvyXF5kzTNqd/33T3wI5Tmve99nrvvT0Ib+h+q1+tJYAfoASfALvAAfy2visXiLBjdBiyKRqOxX61WFXy7fAKT7E6T5h208e1yqVarrRJmSUzTXMMyeQSmjimzQzjFMjnE5j4EcEYYHQo8MVEsF19g/gZlcgwZLBdf6XR6Kx6PW05SqRRl+g8Q2jqWi69EImHCi+WEhUAZt5EqgFwuV8hms5aTfD5PGreRKgBmhjI5iiCAIIAgAHkCKJfLG6VSyXJSqVRI4zZSBeD7bdD3Afh+DTjIZMxDw7AmgdVgufjyfQAfV1YKlMlRsBosF19NXV+nTI6C1WC5+Hq6uPji4fy8NY5HCwtyBpAMhwe2QYqrMzNyBrCmKK9uzs1Z47gTDssZgO/XgCCAIIAgAH8HQO0C9xWFNG4jVQDUOYCFQBm3kSqA55FIIb+0ZDnZjERI4zbBGhAEEAQQBIDl4uuNqm7sqarl5C1AGbeRKgDfb4OTBNDGV2kC+BKNXnuvaV8nnQItXf/eUtXbeBkxBXfzLpjpu81dlJZh/DzUdTH/YqwZjd4DA78oY5Mi3HT4pGnXz+8eYeYynAepaQm8PP+CpntuE9MCa8JpJxa7gkPwKzZnKQNe0DSMZzgMv4JGPb/7DvqdUGgWh+JPbMsjmvYUWBCTOBx/amnaE6ppL4GtdRuH40/Q4I674b/AZxyOP8FKfUA07DVdHI4/QXNHrmY9B0L+hsPxJ2hwz92w5+g6bAScChrcHGjYY9q6vo/D8Sd2/qea9hKYAo9xOP7EjqpefgYYAt//SQJzdJdo2iuOcBh+1YzFVHhMz4jmpwZOgbdwGL4F0+AlZWAq4MnCy4shaPrDgIlLAoEec/0hiFJneVmBu9amDE1Il00rvKxYYncN1oPXhKkLAXf+HQsSLyeuwMwqO8G5DY6gx84UWC6P2NfcYI6dFrsQyA+H4T78fAKnvK1/+91fKPQbPqY6DpRMOR4AAAAASUVORK5CYII=",iu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABACAYAAABFqxrgAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAADzJJREFUeF7tmWlUlHUbxv3QBz/0wQ91jsEsrMOuJJii2JCioaHigoIODrLIJtuwyzKyCTIopoWZCyouJSmZyrDZmGiYpKSWqJRUqFiomFj2Hj7c73U/84CQ9q5mvb5zncM5DMwzcD9z/+7ruv8zzCSTTDLJJJNMMskkk0wyyaRnVNVy+YjDcvlI8eH/l/RmZt51VmbNjY4SOuYmpaaJ0rZPp8i8xV8/2zLI5cNrZeYVDfYSMrhK6biHjE6+JqfPplvQmTkWfa2BlivFpz67qldIDB+PktIn41C8Uk6nXregz2dbUOtCSzofbEUXo6zpcpL1oQ6tfIR4ybMng5vE74SnrK95qpxaZlrQWX9LOrfEir5ahuLjbehqloI6V9vRzXK79ts77Z3Fy549nZpuufzsPEv6YrEVfRlmTZdibeibdFv6vtCOutbb0+0KB7r3gSP9XOPc21PnOl+87NnT+VArXVu0NbWn2NJ3uQq6UWZH3Vvs6af3UPwRJ/q5cRRdP/IKXdg/iY7vnpZv0CqfEy/9a8owbNhzehlPe/MN9fbm+qOjpO3H3CUdTeOlbSdelVc1T5WpDMpHi+jIUeR36hR9P75jTz27Hen+Ryi+3oV+0LvTpeqJ9OneKXSkYgZVbpxL69cF6rVFagvx0gEp1drhHlFaP6VW++fdpBqJWUCdhVlng52Ejjpj4o/BxB8voxOvyujTKZj6PhbUMgvsz7Nobw2wVImXDainws7r3gHHzp9rXeh23Rj6+qAHtbz/GtXt9KH3NvlR+fqFVFSipszCMIrNiewLyYhr9k9O3js9LqNiUnROtWtoQbdN0Gpf8eWergwvvvh8rdysqt5WQo1ORrv75BUU74niJ/PUx+Dzhe3NtSQUT+eCwH+oNU//lktxVp7iywjqMYwe8f3hcRtbq5T08a5ptH/zLNr8lj/pSoMoZ1UoaXIjKTwzlgJTkmhmQjq9FpNNY8PzyS64uFeiKvERX+bpim9AnbV5U6ODhD4ejeLHIuxMgOV5yal5mpxOvwHb80PxC1C8yoouhKD4SAzAOBv6OtWWgAF1Ftnt7XzTRiK+pKADW309t5fPbS1bu5hyi5dSSt4yisqOIVVaIvlpUsk7NpPGR+SS89IislDpms0WlbmKlz5dGRxffB7cNx11kRqTHocd+H2ztzHwsOez7X2xyErwfba+S8ttqD3JVrA/doDra+3oh3K4wDaHB3f2OGSRQT5cfHlBGXnL/JZnRzUFpyfQvKQUej1uBU2MXEmjQwvJKmh1q9kiXeQw5dAZoNZqh7zGH6qjTubVAvcIOycmGbk/xdyz57PtBaJ4tdH62mKs6Uoi7C8DDpCnoGs6+P9b9nRrqwPdxSDsPYBBWONMPzeMar9d+/Ijbe0TmyrxjMpSjQkrCLZVFwVLVGtsxF8NSB0fP2KeJjnfV6N5QfzRHyuDqyS5n3uOusz96X7ukfgGcS8En6/TbOnblcbw07UeFvguXKDSke5VwQYP4wbUudDdelfBCi9/OJHO7POqNuyc9kihv6eFGo0vZkTnlOWZ/9rO8dFLL71QKzVPqLeUVNTbmuvrHaSGo85SjrCVx8bIigxjZWEGD7m9+PTHyjBObnHSS6bntHd6xkPuOfRcWIrWjzByz97fkY3WX2Un+D9b4O0dDvTT+6IN1jpTb8NougkrZDf44oNX6cReb6rdMZ0+2Dyrb0f53MoNawPcxT87RGqtevjCZE3w7IS0Zsbk1aicIvFXv68ac/Pxeon5oVoLSV+9jYR4cWl0khLn92MvyzDUZIKlNXnKBbZPTpF1fDZVVvbZdKvH/hOs0zMtVbC87gHuw9H64P5KEmJvpoK+K1DQ9TVG7m9tQ+vvRet/iOL1aH2EoO5aN+o4NF4IQs3vTaaGytfpw62+tOudOfQOLHHNGhXlrw6mzILQTk3usqqY7JiKpRlxFYEpmuY5mpTe6fEZgkN4ROQ2DM4HKwrCxovfGsXbml5qrtOj+DprCdXDxxsdUTwGmsFVRsfccQO4+IlyeLrcaGt4h9nXebq3zLbEVmfZdsZfHtmhHjq4WK1q+QgUX8Gp7/Jg7kvA/QZ7If317ELx+1E8J0CEoDt1L1Pn4XHUVu1Jp5EF2A4PbXuD9iIPsCWuK1tEq5AJsmGL7AyxOdGCNbI7zMeA9IU9TlmeJQzJMeH5nY7qkoFzCC1uRlJeeJn4UHj3JXq52YU6KxSvQPEOUgQZFA87O+aG4jHUjk9A8ZNQPNsaT3Zsc0LxCDafz7E0TvgAKzqHVgfrXeeCrcMeF13b06y9vs1RtHcWg/s30frg/s5OZP9B3P8E7m/UjKUrH06gs8gCx/dMpZrtM2jfu7Np29vzacO6QCrWLaGVRSGUlh9O8dooishaTkvgDguSk2lWYhpNgz1OitbS2GV55BJS2KVQFw5BN1EbsTImOypZeHBEOtK9ztK8i0NMgz2K59bn4segeAy14x4oXmz9Zp7sKP4z8H0a050ZPzufh5yVYHG83V1Yak1fot0vRtrQpRib9kux1o9Mcay9w7vK7dNvbbfv4ex//+BD7jkCf/ORB50D9ycRg+t2+ND+LTNpB6Jw+ZsBQiDKQyZYURBOiQhFnAuWZsRTAIKRH4r3AfdKtP445AO2SIW6uFcaVDokbMVpoz0jMmP6QtOjjUO1zsZ8foPCvKWfe8Ng7tH6J/tbH6GGfZ2n++fc+rA3Ychx8Zjy54NRPGzuIoZdW7QNXeaBB6/nbe9qjq3+e631I1O8p3r0iN4ap4T7DS4dt2rH0Lfg/ssDk+gUuG8E9wfB/W5wv2nDAlqLQFQA7rMQh5PyIigGrR+6Io4Wp2poLoLRDHA/Ga3vgdZ/OayAHIKLyWKxruWlwNIhHRCvjR8RlhnbgUzRKv7ooQyjpJ7gvppbf4B72BpP9gHuZ6F42NtZLh7+zunuvBrFw+Y45LRF4d3HmntFY7S7q1mwPHCPtEfXShV9XesUup6y0Y8cfpBB+dzFA56+LbA8cN93uOINYQ/YAu7fFLnnOJyaD+7R+sx9ELj3F7nnZOgZpSU3RGMnpEOroJI+6eLS/N8GpGht9PPBGfFNPDMWpGjCxB8/qhMT5K4nvGTVA9yj9Qdz3ypyf15sfZ70F7l4nvYJKB52dzXT6PffFxoH3411GH5vY/i960C3Khy6eyrtE7hw8U8O0b6KGSMryuckvLUusGW1yH06Wj9hZaTAvRrcL+znni0vOodeEbhfRbZLVpNsUanBfMGaoVMf4kGoSo+vCkDnzNOkdMEl/nliZMsD9wbm/sxg7tH6Avfc+sj3bTFofQSd9mS0PiZ+hxZTH5Z3DYGH4y4nvh83Ga2vpxL2hxlwbz+G4CGn9l9qHFS/dzNY6atCbRK0yyLBfRW/g4HJSR1+iSkPfND6XuCe94LRIYW9duridrlKt1kaOJT9fvmjAxalagzYJoWd4o34jH/vXBKt742p3zrAPbf+Y7jvyEbx+cbWZ8/nxPcDQs+tLQ7C9L+713j6w0PwF70T/drgTL80shOMbr95xC2yw6D8Q7J8YIbG3j9Fc2EOiueN0icu44EyWvvvH9nzAcf5EKtIcN8zwD28njc8gftcFI+0dx1Z/wZsj0NP92YHur0d7/5uJL99xvDzC/z/13p8HXWhe3CCbgzDa0fGwg3G08XqCV1n9imzPn1f+S/H4H8kXpCQFPOxJ/QxOtOBjvfyTMZHJz7lP9OlZYoXwH0Fc//Nit9wj7jL3LPv85lfzy5j7BWWHvj/gzon+ttRZ7qPBHgbIehGjTtS4DjhRIjtkMNQ0x5vwRWObJ/e+sEW36zdm+b+w1j+OKnT4i0CU7n4lK7ZKB6tT1NRvFd0Nk2MyulAFzwvPvW/U4fW2uu7AtuOawg8zH3XBoQe5h7b3p3B3CP3P6hF8Y3G+NuDEHRT70bfoXgOQhyDP9/nJeQBToN67ALVW2cKzrCjfB69C2vcsC6gR7dGdWiVbklRbrE6IaswJCAtP9QrSRvhFY+vqKwov5DM2OQlGYkbOSYz99z6vij+dbjGazFZNAnOwfPDLTTfy1jBE5IQeNYrdDc32vV1M/dYeO7uMSY/gfsaI/cPmHu0/o8ovvPwK8IC9NUBTyEJ8h5wbPdUYRE6uM1XSIR8PsjW+DaCEWcDToa8F+TAJTLgEsmIx/FwimiEpGWwSg5Ki2F5CxGWOC8YuV9BU1A8OwfnhrHheeQaWpAv/utPXt077Nzv7LZvFbivHsy9MQFyCLoO7q+C+za0Pm+Ap9D6n6D4+p0+dAiZAJugEIo4Em/EQrQOxZcgGRYgH2hRPJ8XpiAjsE0uR0iKyIqlkBXxFJSeKCRFPkhh7meI3Cu59VE8WycHJ+elhXrlbzLDExfbXO9Bp4QHtY49/dzz8tMF7r9F619G659D6w/lfgYdQBzmZWg7Wn8Til+PYITWp0IUz8dlWQhIvBtociOE5SgSOYFTIu8I4J7ms+WJ3POuwNxzaOLIPCYsn0aFFJLDkuI2ubrs6X06dd/gOPJuvWvlD8w9Wv8KWv9x3PMa/D5afyeK3wzuEYyEdbgIrZ+H1uetkANSEoqPQ0Lk/SA8M46CMxJoEae9fu7R+sz9ZIH7HIF7d6RGZAdyDC4im6DVuAElf84n2N8cGOf51X7PpsHc85H4R1iDq1D8LnC/FdzzQsSHpP3cc+tjxx/gPqafe7Q+R12Be7Q+c8+Wx2sycz/hIfeIzatIgeRoqdK1yv3/pBswWMcrJ89vqPRp511g/5ZZtAfcV4B7PgjhswDmnlufozFzz7tB4gD33PrMfQIJURfFs+Ux9wOWN4h7FxRvry7mvQHReY3hRf+3nowVPgnxmcLejbODt5fPbedtkLkvRevzUvQI99z6KD4Mra9G6zP3QtQdxD2fEPVz79bPvdD6JSRfXNonWaTL+u3i9JeRFjejtFQVvEoX1Mzc81bIlpeE1mfu2fJ4O2Tu2fIGc+8Tu2KAe49+7rn1UTwvTRYqHUnw7v9pnyv8J+LFKDkvIh+W18HnAsw9W95g7meJ3HuDe2U/92h95t4ZrY+liYvvkwSuqRoZsPZ3zzf/JxSWGitZkpowH2mvDNw3zU5I6+YDkodRVytwz5bngta3h+VZq0o2SgJ1AX+JwfdHiT85VkZoLTwitc4cdZ1DCtxdwoqHfARnkkkmmWSSSSaZZJJJJplk0lPXsGF/Bxc8wUB6e2fzAAAAAElFTkSuQmCC",uw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAACShJREFUeF7Vmy2QFUcQxyMQiBMRiAgEAhGBQCAQERERCAQCgUAgEIiIiAjECaoQCAQiAoFAIBAIBAIRgUAgEAgEAoGIQEQgEAiquPx+8/rNvb3deTsz7x2Qf1XXfHX3zOzOR0/P7g/iy5cvl6GX0DvoFfRwb2/vCnQ0MfzPQX/OQbegF5B9fEvfbkBHLPyDyCQo+wDdIfpT6PrfgDb/aN+is5OgbNcH8CbSRcDzCbpF9MfQ/92CNh6FbtDeD7Z9HeB57wN4F+lZhNIrUdd3Bdp1hPb9bqdSYyvhA3gV8REo+xd6QNQneh9KD4vwb4ITUfc3B+05CxX7UQIyHxR2jo9A/lOC0ZAn/wx0D/LhXIvsbwLbRxvupgYfAPmfoTeQi/rHyB6A/BcqubBI7iME1i58lsN3F3KE7ET2VwN1/krd/xBmkLbT7mD2Ke9gxH1Q9+U5gBsWOncG84b0q5CdBbynoHuInY6sQwX1HKW+wagl7SLtqDwZbCPAZj/zjkDch3U8FRK5GfkJpF+nggYgcxW6GMlDAfp92HnXIm7Hq7dpeG8vJJPs48jOw/nTomihmOBIFFcDuePQpR7ZOaDzCrrzXCb+jKBpIYZf42eJ4YhF4cHF8Lcoagayv0LHIpkQD8dRchNyR/kbeg25UD2DHkB3oGvI5o4Rd8jnhY5491aMrLaMOh5G1j7IdxRk44H4vSjqAvLHUfML4S70cqG1Hsi8hf5alSX+CFrM2w4g64N27k+vFdSRhwhMToMuE9hGQr7lzwttmwNdt0J9F1DhC7Y9NyJrDAodbtkyJH4niqqAyI4yUF5PSoDnNYEHrlmC1xXeN/cX6S5zHFlHogvo+vUJpnMwJRB3SlRVCO9JyE7V4kKIrgV8vpTV7esf6FwUVwExdSh3NrLWA8ZHi+oSykMmAP95aPbwsQS8dqhqp4B3sEUL8hwNl4JlFohch79+CsHsHE4dinCwoq+C8otQ61yvWsXR675f1E3ZH8FaBGzO/SeEbVszQhdTLYD4o8gegCLN0abOw+8aU/v2XyykyoBn7XmE8ttQ386BoHZ1AvHzkZ1A2hPY5CFjHZCZfWsCPu2BWcDndJic2+Q7NZvWiwHQ7yEiHTgiTAsioYvKrCPlIJDxzDHrZoNnYJPMIfQOtmzS7khXI9kPFOVhTng38lZNymogX/v2VxfhKigT4gmkncLbMclRdD3VAlB8DZrd5w8CmaotFb7zC4l2IHsmdJwh2WUvFIHSx4tqujG7ncLjsK120R0Esh6QjhF2m8tFoNj1oOhhXQfkXCxr3n4+rvYCHdX2QTNQPuk+m4NyoaII2E7D12pPjICOB6Fy+0B58whApupQBZ8XF57WSlQ1NeBztG3/Qgelp1MNjaBBTQeqKaBDy7Ta3Q3vLkHXSTYB4SOQZ3lvVjyD66xoXgSRKZ+9K4EaF8Zml7dAzmswnaGeKovmfAZMdlpP77+hQEvw5yhr3vutPCnuBCp0ZGrHNwGZj9BgqzYN2Z+xp4vMExQOvDakB6spaT2/TUBmo7ePfHJhtSL64q7lTdHAdS7I85L0VKqEtG99YNOTHr058rwoqQb8+17XDiB/NVQ1A9l3ocb+abaPHiR57jhXrGg0t6085DPIa52H3fcEyDafMleB7KdQlUHeyMYg76MFo62NvJFDdIqvBHh9WHqGp2itK5vyn5FPa1AvkP8Y6jLI/m1Rug/7ZIE+t6mnvfiAIACPZubGQM/gWL0Kip23zafMg0gdOwDy/oziDPIWvgQik7erKoK86HAebXoWUJ8L0uQJzXzKvXXeGOh5FmoTyHJUrV6qeLE7fBHk24BL0KgRITBaTVuBjptR3QiUNe8yJaArLeJE/VhCf2DqPOFzyMV1/bkEBrdF3chPl8JbwuT8p47iZzo9QN9jSHtGE9rLFW+k+k6I6NMq9KAy8s62APmnoXIA8nVbbXwIWgX6dKdt/zyA4u5pgOzomEqeXt9tjjDr0QI8nK/bUN57HHZbGzSKtH6/budHCeicHGlbAfpHe2kNfHChIoEsd5VZl3cP4qFu1x0mULoDuTj2nAoXdneAtJ/VHBrQv/1RgN50iiJ0T61etOB9kRQEyOryKNeAunSqpLYR7kaVmwN9fnS0ahVOfXA0CXjzuYK4RtWhAN1Poo5k8xP6ILo/8shQCZR8AkuQdgGb3RHgcYVPX5AR77pJqkHoTTYGYfYsE+pFmneElKBSlExeZpDv94Jr7wcoT4cqwiaXVivQPTi9kuWhK4GyvmM5sprGmqfF2xUrTrUUQPlZgm6XViWuR3MGoM7Vadr+TREK3PN/iWQR8E2aseT7sUSXS6sWtjGaMQLFnizTqCPMU6QKMF9AaPwlVQHw+r/BYGcgrUO1y6VVA3QXD1ZL2IZgl79ua4TXq6X3UJM/Dzkf2tKZ6tqQ7xO3CXTr8Cz6FFYBuwZXXnuIz98awfRQimQTqMOH59dhfo+z1QOOQKenu6YXA793BAm2i6BsJcKwvJmdnfvrgJ6qjxtqgT4X0a49HTnXgvytAfHbUTQEZQ4X39z7yGoGOjw664BI2yOhjhQvVqo/dlhCGcgLGXea/lsegI68FhG3bWN9ZKY5a6WR1QRE9Rnk7Y64P2ElJwRJdwO3RH+88IGkuz4oXWBE3Dynn5acxlfefokfg7pHJbKDaz3qGLr9yVsdJrP3+KuA35Hjh0h5zhP3g8ai/dAD9FmPX310WXbIZsvVtkL7awmJ7O0hXvWNMKwOdz3K2V1O3Dd6ePfzQP3Q5UhWA5nBxQ7phQ1B3OG5ulX4pIoeFcvgGf2ORvo5Qb2xsQGoSzNcX1/1jgDv4BhP2hG/Y0H+HnAJ8jQjBw/ByiAdpQObnrTDSZ/7Vof8HKjPaeua4QK31gFi2+AbeZ/Iu2rHJo+25Lsj6F19Ak3eCpGvV+er/CpTAm1wNGq4+SBKXudJhy75Dy3s+ZbfLcq9/qu+9RJoh04ab3wdjYbuJO44OkiKBzHK0o+T1Z5eeK3AEbPRvnxYoG1ehzf5HBSqOqrC53QY+Pa+R9BUnTVeisya4vL4ANb9PK2RogPzm87zHtBuF20tyaLThrL7yxUy/+VB6Pz2bf9Ost+d9J3APtCXPyEtzeVpVRP9zt7e3s5/ob+tZqdbSWYAAAAASUVORK5CYII=",rv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAAuVJREFUeF7tmqFz1EAUxk+cqKg4gaioQJxAICoqEBUVCASiogJZcQJZiWQGgahAIioqEBUVlRWIEwhkBQLBH1CJqEAwc/B77EenzeTaXHbb27fJb2Zn7zbZt9+3ySQvmwx6enp6eh6I2Wz25U9iiHmi8HmD0E1pToYmdEVD5A1ij4PsNBDvO9Ujhc8bxK5Tfgfp8RDrgjJW+PxB7IG0R0OsS8ozhc4fNK8i+GeQHwdx7CzaUWgfIHo/yI+HWK8V1gdoHiL6R5AfB3HeK6wf0L0T5MeB+WOF9AXCoxMfxRgqpB8QHp34EMPu9SOF9IWdtsFGO+h/QfVY4XyB+KjEh76XVBsK5w8MtE58bOIoLxTKH3iISnzoO1Eon2CgdeJD33cK4xM8tE586PdJYfyCj1aJD+Y/U/m711fByMKJD32+Ua0qhF8wsnDiQx+7168phG8wk3TFpymMeygJywMRSVd8msKYp1TLv3YgJNmKT1MY0643y792mAjEJFnxaQrj2UNSHtcOxCRb8WkC4+XzkISQZCs+TWAsWxB9quGXD5qSrPg0AeN2kd3S0HmAqOgVnyaYecquhs0DBCV/1TUPxtrXsPmgCdhrW+g/ofzi962wz4GGLAu82UTcCub9PyHWgbc77x5sP6Py/4RYB+YmwWY9bP9K5f8JsQ6MrWDQkpla2JZPlncfYHBu5mgTQ/Hz2ntR8Dj36NNuWd6mdi0TfL4Ndm+Cccvynmu3MsHgCKO1T420v9Ju5YLPeUc/vywvNfhcqzv6tH3QLmVjRuX5Ctp8fN8XC17t6N/I+fk/pSozy6uC2Y/BdoD/51RlZnlVMDumXK0W89vy/3KzvCoYPgrW/5m3BOiJNpXP9aNP7evjxhRg2F5amHlbznqp5m6A7w0zL/bU3B3+H314o6bugOktc84kdCPLq4LxKeWEOehGonMdTG9j3ueXnSnA/CHmu5HlVcG8vSfoTpZXpbOnfU9Pj2MGg7+KGG6tF1roVgAAAABJRU5ErkJggg==",Eh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABACAYAAABFqxrgAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAABTlJREFUeF7tmi9sFHkUxysqEE0Owe6WHAkkh6hAIBCIJtvcDlxzqahAVCAqEM0FgUBUIJogEBUVSERFxQmSqzhRQUjFCUQvqUBwSQWiAoGoqKggmbnPd/btsrPzZ2d359cl7e+TvMzsmze/ee83v/f7Nzvl8Xg8Ho/H4/F4LjVRrTkT1h7etp+XDwUf1lsfw0brKPqpedXUl4ew1loMG8FJ1AgiCed70VRz2i5PliiK5sIwXOG4zvEVso3smWyj3+D4FHnE+azdNhS8/RcE/a1TAT0V8dJMzheCuWMB7yInnA8F93xCtjhdRmas2Ezi/K8Hb/uDtwo4Deu/PjZT9+DsNRx/hhwokKqgvDNElblij+rSyf/MCqgHn6Pag7tm6hacu43sIN/Mb5ds2GNT+Z+ogEbwLrrevGam7rDglduFwes68hnZN/uXyBNkkcsLyDLnaxzVLxSmD9dex8/Oyf92BbQ2nXeG+DIjZ5BBwf+DKD1u2K2l4XZ1pGvI34gq8AjZDP96/8vE8x/nFuRUHGUGXBs58EEMyP9j5/lPfPHbb4eahmv7HJw5UZj/9WA//P2Pmzx/zsyrh8Jz3z76Qw6BmTqBQNdz87/eeh39+59GpS/mzzGHZbt1fCgs9+3rYYjT/IvH/0awkx18cBY1HqzKDj80wUqATnOM8TpHCrhLQR/jEvtA/5aD0zl51PjtFr38YU4FHIezwT0z7YxSp23vvoPuUNfMbDi4Ub3ymZXVBd0JkpqwVE1UbwUE+jWnAvZpIalpNX4tyT9ztQu606F85h41/z/btydBrzl+5T1+P2EteF6Y/wXjP27ewsfM2Sr6Z2aWD0b3kFTnh04Tnedm5oyy+T8IXJ7G382290nQb5lZGi5qXE9NfNBpktLNPVcMk/9lwe9F5KuF0gVdsiLQXUW5276cBL3SwvmGxCj5Xxb816zzUxxQDxZbO634sddWfwedVmxrsYFjxsn/shDSLPGkRjl0ux0D1VSiyfBbvelibOCIwvynUmgBT8x0bAhJexqJVNdv5JGZxEbz/UbGBlL5Sqww/xvBFyrgvpmOBb5rpEulOjrNJ9IzXNVKVkWge8dh5JzsJ2q0FhRodgW0PoyT/73gsyZ6R3EQPVgFzJtZGgzUm2bNujQXz7+xJAT/VE09pwLeVLX+x9fVgjgGL/AwvGPGCdCplawjQzsa3WxeoYlvZwdfXf7j2xX8fCN/+0GvCVT5ViZjbtKyOAV6zcVLj9nhz80b9PIHORVQZf4H+JVq/gK91jmFG7W5cLO2v7OalXpWrdCKd4DPIf/xQS9sJ3asD/RaR5SaZRZCIRpCP8Sl9oFes8klM01wHvnPs7XIy9yLRK8tuerWOZSpufgLJGsYFd3adp3/PEt5rw3avCV+NW8/DwrXsKNdpBjONbN8ZZed5j+PU7PXDnVqLdCBa9W+/SJ4kEaQxzy3u6fvIv8pfxpRh1f4PYNrbt9+GQrzX6lBipjpQAhIO0QrFniqU+7FgtesdnJfndW5FeY/lSM7nNUoo6aqDy8KTmt9Oa8PLfp2oY8x2qYvDLoDdpMPXqh5x808uwJIi9aC7HD4fux5BVDWAaKvVKON+VWiDq4daEYF0DGqgzRT5fV8HMGIELS+Om0hzjd2SqMhbtj8JwD9FyG3Y+vFgta3SKXQj/VXmzj/NcnJCr4n//MgPn0c0f8V9PF1tV+4prSZfDPPo2z+X2ii6w/nCPY0VQF9+X/hoSUsJStguPH/wkCz3yiT/xeec/v/j8fj8Xg8Ho/H4/lxmJr6Hwt1a6V910ulAAAAAElFTkSuQmCC",sv="/prototypes/phase1/assets/9608ac03ffc8107f7435fcbe28ab039031f9d6ab-B2IZVtP0.png",ru="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAABQlJREFUeF7tmy9s21gcxwsKBg4UHBg4UDAwMFBwYGBSC9qkmgoGBgYKBgoGDhwoOFDpThqZFqcFnVQwMNBNAwPTaaDgQEG1S51MN1BQUFBQ7Tq0aiqodJHa+/zsX9L4X2Mn9rMb+SN9Zfm933v292fHfs6zx0aNi4uLmfPz85doBx2iBlpDi9T9oGGjB+ZuY3KbZSSSEBYz2mR0wJSYP3ZcxoDYp9r0+oOfGxg6cq3FhzYL2sX1Bi9/uJa8YPAUyXVgX4s8aNImtJtiwE49YqfEUGzR5oylB8pqLG5ot9LvXXTg1l5C2bKG5A8786vu11DQzzvt0gNVU9S13SiXqFjjpGVeibzKsx3PXYL1Q63Kj5TNC5PadQC29UpjumhVPmRgXo7qQ+0+AHV7GubA+metMk8W5gX6bbEY1810oeyBE9ADsS+12iz9zFO/w2ImhmaJDQyAtP09NI5uot8oO2Xp57Hukjlimo89Zid+yW2ZDNo1WATOlExJ27xA/DjtrnwG8EO83A6ntAszZGG+g7TT9n0h7gQ90qZmyNJ8B2mPZGR4In2GQd0H9JM2MYMJ873Q1wR6TL81NbyOltAdDTEHGzVqvlCU5q8ga/ML1qcfK5a9MFezV6o1+8ncc3tq+vdtM7e8PM3P13fvVuv2XrXevAjRGXU1EtF9TE6dvMzL0RVzmGz7TIfI3p9dtX/WpumR55FX8yFmI2TZJ/PPdtO7HeZqvtaaCTXZXx+0i+HIwrzEo8k4ur/aOvKbq1jNw/l6c7FS//uWXBcq9eaGP0Y0V9uNfHSORUbmb9Iu9I9MP19OzgKmxPz0i+3ANiu13V/8sdXV5rpWJydv88LHg29eQ0iOvHYXoGo1DzzxVrOlVckognnhTeOLx7xITnvtMgBjg01ffFur4lMU88Kf/3ztNeNIfvPabQCO+FZvLNeGY62KR5HMC/v/nnrMq6kN7dpDda0xST2DIU/8e6eSvuTpqTObGil3s9EQc+xvE0NXPb620SZ6FabvZ/+99hkStWX46xhTxDyJ2fHHylDZMe9urlhgUMz3vU3JldxvzBEXPOc37572/iN/ORhiI3LaFoq45gW55cmtL2CwnzpnSdESkMR8Bx0NBo9ytC5HgWzsiW47dwYx36FifbrNmdAIMXspq3kqAyJt4sJ25V/VZbSHwi5SseRaiIaYI3+bEA01NHWeCi17qbraeivXgK5p5wLIAxMXQw1NH3a+3y3yHQuj/8NPr302O/9fxCQYp0wClEmAMglQJgHKJECZBCiTAGUSoEwCZJkE2sm7wwuyDSRT48uUzaJE/1RljuwgOxUJ9YmSILFqOvKtcerWWRQnEWklQWI0ti/EFeubgTSSQMxbNzoexMsrc9k9GidlmCRQ99CNSgbttrSLYhAzCYGXJSkPew3+AC2iW0held9AnjfFBcqG+gMmddihK5MQB/qQhAQudJQH/vqjbPC5wawYNgm0j5wb1OR0YX2wucGsGSYJtI2cG6RuU8McWE8+N2iKQZNAu8i5Qeq2NMyB9WRzg6YZJAm0CZ0bpGqSOs/3Ray7c4NFhp2UtzxD5wZV/u+AZG7BMzdIsZgPTABRtqIh1xdMyPA2AOVyK5SJ1S0U9mWZvDRt9r3hLMDLhJhxbSXC/McSWYGZeyQh7IuQUIjd1KajA74kCYFRYS96pozOkfeDOflGSF72+As53xOzlJc23qMV5PvNj439D35szOngpOBUAAAAAElFTkSuQmCC",qh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAABUlJREFUeF7tmi9sXEcQxg0CAgoMAgwCAgoKCgIKAgwOBBhUVYAjBVhVQKQGFBQEGBRYMjAIMAgICAiIqqgKCKjUggJLNTBIJQODALc+2yersgwCAqzKrd3fvJt9nrd5d2/38vZ8rvaTPu2fmdmbmdvdt/vupjIyMjIyWsLe3t4X3W73hjYLSN/+/v6n2gwG41zF9raU2lVA+g4ODq5p8+IhAe/u7j6FPXgGV1RUgPaG9m/h/PLh4eEnKqoF43XQfQnfix3tORVNiS19J8o1ZA9VdHHQBEiAjtsqEtmMJzs6Ozu7ouJaYHPf2pC0ZyoS2T0rg69VdLHAkS3rmJvy1B/YfoJ5URgMgUxvawN7KpLp/8KTPVDRxUKmtnWMb2pR+3+y/XC+MGgAeuvWjvFuycyh/s72T8xeIA5ax+C6rtdj03fctP4dJIHGTmbOMrxt++C6qk8GcMhtggV3dna+tm34i6o2QpaQZytLbNX2uVk2MeAbemYdJIjfbBtGrVf0t60941Oct0d5tCYFTn1pHYR/23av17uuqkEg4MfW3mP5pJkYMCWv4ljx7K7hhqoFgwTM1ozjWDlrTAxw7LU4iPO+w9+rSjB01z8Se388SY6qTRZwrvLcd2S9fq4qUSBQ/7kvPFLx5KHmECMceb1iO++NJd9+eTJsFUy5adgx/ExFUcDBHc/pH1UUDT1L/GvHY/y7Kg5GTWyVC1sBFZQ4PT19rqIosBn+aR2GP6goGrKxwkoCOF98peJgEE4lNrCkonPQ+dEJ0CXwj3OWb0vKP1QcDYK/48YyY0YvAcIZTwJwcMFztihHPbRIsHY8ZXk5CgXhjC0Bco/3HR752IrtX/5YQsa7pSpBIJz0CZD1inODDkLRFxe+/cpByM0mrS+rWhAIJ30CcMq/rVWOwrFXVwnS2nvcUrUgEE76BOCUvBYrnSQA9yrMMfYy9NbaM15lOcTsK4QzlgRUrsM4/I1tw+DXVxKcZ7vNeE9sH0vuO1VvBOGkTQDO3LTOwY26FyKyT6jJUEhwxk64QgL8Jbam6o0gnOQJWPKcKy4/lL/afvTuFAYNQHfN2hH8rCSPut1kT0L3FcJJmwCceWMcKy8/OP3Q9hNI4yEGm2l05bW3sysvP9T9x+yCioaCcNIlQF50eE6Vl58aWeNNDh3/MFUmrUb2SkVDQTjpEiAbFo7ItdVNz1UVFaC9qf2yST5tejHKWLLWZekUs8AuGz1qu9mxiSzogEU46RLggMkVcR6nKrdI2h14U5vB0E10AdvKxknffOzrNXxLn4BJBuHkBPSjKpEToKJz0JkT0Jf1kROQE5AT0EoCGCroAlQHbGfw4wkc6XcFB8YZbwIwn8V+Ffaod7Q7GtjeEF8EjLVBcR9GJxSb9AnAxAZt0UoCHBj/HYyaFZilSQBqg4K2aDUBFnxu0KxA3l4CEIUEbZEsAQ74cgQfU639NYv+j0sAzdiggyFjwu4ARn8eNmvwHtVyVlAfKQE/wyRBjwP4Xc4KOFIC3sC32rzs+F1Lh/AlQLVD/SU87ksuD/B5m2IR3i06zhG/CdJ1jb5HMGpWiA2F7NSDuDSI2K5SRgGb9/A51fJfJNRHWgIDH4OI3aw46WsPxYe/xQdCbPtDNANf1ikkoR+8cqOv3QQ4oDYDF9HtFkb1SJYAPleeICtw6K9EqKZJgAX6c/AV9GdFqwlg/GP9nDmaQ/947YBe+gQ4YOrPilYSwHib8Fuq0f8PxmZ8CbBgDPmWprUZDWyL2yBl9FtlC+yDEiDZtrtw0M9YlwE1sY18PM/IyMjIyMj4v2Bq6j/ZhZ0Wt82ZbwAAAABJRU5ErkJggg==",dw="/prototypes/phase1/assets/image-DozNkmXY.png",fw="/prototypes/phase1/assets/left-DX2YK8zl.png",hw="/prototypes/phase1/assets/right-DxGW8Nsw.png",Hi="'Source Sans 3', sans-serif",Zh=196,av=154,pw=145,mw=154,xw=153,gw=av/mw,ov=av/xw,Ic=Zh*gw,Dc=Zh*ov,vw=(Zh-pw)*ov,_w=-42,Sw=-43.281045751634,ig=295,Ho=138,lv=1138;function yw(){const{physicsCollapsed:r}=Vt();return l.jsx("div",{style:{position:"absolute",left:0,top:Ho,width:r?48:ig,height:lv-Ho,background:"transparent",zIndex:1,pointerEvents:"none",transition:"width 220ms ease"},children:l.jsx("div",{style:{height:"100%",overflow:"hidden",pointerEvents:"none"},children:l.jsx("div",{className:r?"physics-tree--collapsed":void 0,style:{pointerEvents:"auto",display:"inline-block",maxWidth:"100%",width:r?48:ig},children:l.jsx(FM,{})})})})}function Aw({project:r="2U_chassis_v1",study:e="Simulation 3"}={}){return l.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,height:32,background:"#0d0d0d",display:"flex",alignItems:"center",zIndex:10,borderBottom:"1px solid #1e1e1e"},children:[l.jsx("div",{style:{width:40,height:32,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:"#000",borderRight:"1px solid #1a1a1a"},children:l.jsx("img",{src:dw,alt:"Ansys Discovery",style:{width:36,height:36,objectFit:"cover",objectPosition:"center",flexShrink:0}})}),l.jsx("div",{style:{width:1,height:14,background:"#2a2a2a",margin:"0 8px"}}),l.jsx("span",{style:{fontFamily:Hi,fontSize:12,color:"#7a7a7a",marginRight:4},children:"Ansys"}),l.jsx("span",{style:{fontFamily:Hi,fontSize:12,color:"#c0c0c0",fontWeight:600,marginRight:12},children:"Discovery"}),l.jsx("div",{style:{width:1,height:14,background:"#2a2a2a",marginRight:12}}),l.jsx("span",{style:{fontFamily:Hi,fontSize:12,color:"#686868"},children:r}),l.jsx("span",{style:{fontFamily:Hi,fontSize:14,color:"#404040",margin:"0 5px"},children:"›"}),l.jsx("span",{style:{fontFamily:Hi,fontSize:12,color:"#a8a8a8"},children:e}),l.jsx("div",{style:{flex:1}}),l.jsx("div",{style:{width:28,height:32,display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("svg",{width:"14",height:"10",viewBox:"0 0 16 11",fill:"none",children:l.jsx("path",{d:"M13 4.1a3 3 0 0 0-5.65-1.45A2 2 0 1 0 3 6h10a2.5 2.5 0 0 0 0-5 2.4 2.4 0 0 0-.37.03",stroke:"#606060",strokeWidth:"1.2",fill:"none",strokeLinecap:"round"})})}),l.jsx("div",{style:{width:1,height:14,background:"#2a2a2a"}}),[{s:"─",w:34},{s:"☐",w:34},{s:"✕",w:34}].map((t,s)=>l.jsx("div",{style:{width:t.w,height:32,display:"flex",alignItems:"center",justifyContent:"center",color:"#888",fontSize:s===2?10:11,cursor:"pointer",fontFamily:"sans-serif"},children:t.s},s))]})}const nn="#5a8ab8";function Ew(){return l.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:[l.jsx("rect",{x:"0.5",y:"1.5",width:"12",height:"10",rx:"1",fill:"#1565C0"}),l.jsx("text",{x:"6.5",y:"9",fill:"white",fontSize:"5",fontWeight:"700",textAnchor:"middle",fontFamily:"sans-serif",children:"iD"})]})}function Mw(){return l.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:[l.jsx("path",{d:"M6.5 1L12 4V9L6.5 12L1 9V4Z",stroke:nn,strokeWidth:"1"}),l.jsx("line",{x1:"1",y1:"4",x2:"12",y2:"4",stroke:nn,strokeWidth:"0.7",opacity:"0.5"}),l.jsx("line",{x1:"1",y1:"9",x2:"12",y2:"9",stroke:nn,strokeWidth:"0.7",opacity:"0.5"}),l.jsx("line",{x1:"6.5",y1:"1",x2:"6.5",y2:"12",stroke:nn,strokeWidth:"0.7",opacity:"0.5"})]})}function ww(){return l.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:[l.jsx("rect",{x:"1",y:"2",width:"11",height:"7",rx:"1",stroke:nn,strokeWidth:"1",fill:"none"}),l.jsx("path",{d:"M4.5 9L3.5 12M8.5 9L9.5 12",stroke:nn,strokeWidth:"0.8"}),l.jsx("line",{x1:"2.5",y1:"12",x2:"10.5",y2:"12",stroke:nn,strokeWidth:"0.8"})]})}function bw(){return l.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:[l.jsx("rect",{x:"0.5",y:"4",width:"12",height:"4",rx:"0.5",stroke:nn,strokeWidth:"0.9",fill:"none"}),l.jsx("line",{x1:"3",y1:"4",x2:"3",y2:"6.5",stroke:nn,strokeWidth:"0.8"}),l.jsx("line",{x1:"6.5",y1:"4",x2:"6.5",y2:"5.5",stroke:nn,strokeWidth:"0.8"}),l.jsx("line",{x1:"10",y1:"4",x2:"10",y2:"6.5",stroke:nn,strokeWidth:"0.8"})]})}function Tw(){return l.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:[l.jsx("polygon",{points:"6.5,1 12,6.5 6.5,12 1,6.5",stroke:nn,strokeWidth:"1",fill:"none"}),l.jsx("line",{x1:"1",y1:"6.5",x2:"12",y2:"6.5",stroke:nn,strokeWidth:"0.7",opacity:"0.5"}),l.jsx("line",{x1:"6.5",y1:"1",x2:"6.5",y2:"12",stroke:nn,strokeWidth:"0.7",opacity:"0.5"})]})}function Cw(){return l.jsx("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:l.jsx("path",{d:"M2 10.5L5.5 7M8.5 2.5C10 2 11.5 3 11.5 4.5C11.5 6 10 6.5 8.5 6.5C7.5 6.5 7 6 5.5 7",stroke:nn,strokeWidth:"1",strokeLinecap:"round",fill:"none"})})}function Rw(){return l.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"9",height:"9",rx:"1",stroke:nn,strokeWidth:"1",fill:"none"}),l.jsx("path",{d:"M5 6.5h3M6.5 5v3",stroke:nn,strokeWidth:"0.9",strokeLinecap:"round"})]})}function Pw(){return l.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:[l.jsx("circle",{cx:"5.5",cy:"5.5",r:"3.5",stroke:nn,strokeWidth:"1",fill:"none"}),l.jsx("line",{x1:"8.2",y1:"8.2",x2:"11.5",y2:"11.5",stroke:nn,strokeWidth:"1.2",strokeLinecap:"round"}),l.jsx("line",{x1:"3.5",y1:"5.5",x2:"7.5",y2:"5.5",stroke:nn,strokeWidth:"0.7",opacity:"0.7"})]})}function Nw(){return l.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:[l.jsx("path",{d:"M1.5 4.5L6.5 2L11.5 4.5V8.5L6.5 11L1.5 8.5Z",stroke:nn,strokeWidth:"1",fill:"none"}),l.jsx("line",{x1:"1.5",y1:"4.5",x2:"11.5",y2:"4.5",stroke:nn,strokeWidth:"0.7",opacity:"0.5"})]})}function Iw(){return l.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:[l.jsx("path",{d:"M1 6.5C2.5 4 3.5 4 4.5 6.5C5.5 9 6.5 9 8 6.5C9.5 4 10 4 12 6.5",stroke:"#e8a020",strokeWidth:"1.3",fill:"none",strokeLinecap:"round"}),l.jsx("path",{d:"M1 9.5C2.5 7 3.5 7 4.5 9.5",stroke:"#e8a020",strokeWidth:"0.9",fill:"none",strokeLinecap:"round",opacity:"0.5"})]})}function Dw(){return l.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:[l.jsx("circle",{cx:"6.5",cy:"6.5",r:"5.5",stroke:nn,strokeWidth:"1",fill:"none"}),l.jsx("path",{d:"M4 5C4 3.3 5 2.5 6.5 2.5C8 2.5 9 3.3 9 5C9 6.3 7.5 7 6.5 7V8",stroke:nn,strokeWidth:"1",strokeLinecap:"round",fill:"none"}),l.jsx("circle",{cx:"6.5",cy:"10",r:"0.7",fill:nn})]})}function Lw(){const r=[{id:"design",label:"Design",Icon:Ew},{id:"subd",label:"SubD",Icon:Mw},{id:"display",label:"Display",Icon:ww},{id:"measure",label:"Measure",Icon:bw},{id:"facets",label:"Facets",Icon:Tw},{id:"repair",label:"Repair",Icon:Cw},{id:"prepare",label:"Prepare",Icon:Rw},{id:"detail",label:"Detail",Icon:Pw},{id:"sheetmetal",label:"Sheet Metal",Icon:Nw},{id:"simulation",label:"Simulation",Icon:Iw,active:!0},{id:"help",label:"Help",Icon:Dw}];return l.jsxs("div",{style:{position:"absolute",top:32,left:0,right:0,height:30,background:"#0f0f0f",display:"flex",alignItems:"stretch",borderBottom:"1px solid #1c1c1c",zIndex:10},children:[l.jsx("div",{style:{width:38,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0,borderRight:"1px solid #1c1c1c"},children:l.jsxs("svg",{width:"14",height:"11",viewBox:"0 0 14 11",fill:"none",children:[l.jsx("rect",{y:"0",width:"14",height:"1.5",rx:"0.75",fill:"#707070"}),l.jsx("rect",{y:"4.5",width:"14",height:"1.5",rx:"0.75",fill:"#707070"}),l.jsx("rect",{y:"9",width:"14",height:"1.5",rx:"0.75",fill:"#707070"})]})}),r.map(({id:e,label:t,Icon:s,active:o})=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,padding:"0 10px",cursor:"pointer",flexShrink:0,background:o?"#1c1c1c":"transparent",borderBottom:o?"2px solid #e8a020":"2px solid transparent"},children:[l.jsx(s,{}),l.jsx("span",{style:{fontFamily:Hi,fontSize:12,color:o?"#d8d8d8":"#5e5e5e",userSelect:"none"},children:t})]},e)),l.jsx("div",{style:{flex:1}}),l.jsx("span",{style:{fontFamily:Hi,fontSize:10,color:"#4a7a20",alignSelf:"center",paddingRight:14,letterSpacing:"0.02em",whiteSpace:"nowrap"},children:"Preview 20250410.1913 [sc.283 20250409.14] [stride: 20250314]"})]})}function Ei({src:r,size:e=22}){return l.jsx("img",{src:r,alt:"",style:{width:e,height:e,objectFit:"contain"}})}function Is({label:r,children:e}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[l.jsx("div",{style:{display:"flex",alignItems:"center",height:58,paddingLeft:2,paddingRight:2},children:e}),l.jsx("div",{style:{height:18,display:"flex",alignItems:"center",justifyContent:"center",borderTop:"1px solid #1e1e1e",fontFamily:Hi,fontSize:9,color:"#525252",letterSpacing:"0.09em",textTransform:"uppercase",whiteSpace:"nowrap"},children:r})]})}function _n({icon:r,label:e,dropdown:t,disabled:s}){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"0 5px",cursor:s?"default":"pointer",opacity:s?.32:1,alignSelf:"stretch",minWidth:36,gap:3,borderRadius:2},children:[l.jsx("div",{style:{width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2},children:[l.jsx("span",{style:{fontFamily:Hi,fontSize:9.5,color:s?"#484848":"#9a9a9a",textAlign:"center",whiteSpace:"nowrap"},children:e}),t&&l.jsx("span",{style:{fontSize:7,color:"#5a5a5a",lineHeight:1},children:"▾"})]})]})}function wf({icon:r,label:e,dropdown:t,disabled:s}){return l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,padding:"1px 5px",cursor:s?"default":"pointer",opacity:s?.32:1,height:18,borderRadius:2},children:[l.jsx("div",{style:{width:14,height:14,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r}),l.jsx("span",{style:{fontFamily:Hi,fontSize:9.5,color:s?"#484848":"#909090",whiteSpace:"nowrap"},children:e}),t&&l.jsx("span",{style:{fontSize:7,color:"#555",lineHeight:1},children:"▾"})]})}function bf({label:r,checked:e,dropdown:t}){return l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,padding:"1px 5px",cursor:"pointer",height:17,borderRadius:2},children:[l.jsx("div",{style:{width:9,height:9,borderRadius:"50%",flexShrink:0,border:`1px solid ${e?"#2196f3":"#444"}`,background:e?"#2196f3":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:e&&l.jsx("div",{style:{width:3.5,height:3.5,borderRadius:"50%",background:"white"}})}),l.jsx("span",{style:{fontFamily:Hi,fontSize:9.5,color:"#909090",whiteSpace:"nowrap"},children:r}),t&&l.jsx("span",{style:{fontSize:7,color:"#555",lineHeight:1},children:"▾"})]})}function Fa(){return l.jsx("div",{style:{width:1,background:"#2a2a2a",margin:"0 4px",alignSelf:"stretch",flexShrink:0}})}function Fw(){return l.jsx("div",{style:{width:1,background:"#252525",margin:"8px 4px",alignSelf:"stretch",flexShrink:0}})}const Et="#68a0c8";function Uw(){return l.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:[l.jsx("path",{d:"M7.5 4V9.5L3.5 17C3.5 18.1 4.8 19 6.5 19H15.5C17.2 19 18.5 18.1 18.5 17L14.5 9.5V4",stroke:Et,strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("line",{x1:"6.5",y1:"7",x2:"15.5",y2:"7",stroke:Et,strokeWidth:"1"}),l.jsx("ellipse",{cx:"11",cy:"15.5",rx:"3.5",ry:"2",fill:"#1a4a6a",opacity:"0.7"})]})}function kw(){return l.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:[l.jsx("line",{x1:"11",y1:"2",x2:"11",y2:"20",stroke:Et,strokeWidth:"1",strokeDasharray:"2 2"}),l.jsx("path",{d:"M9.5 5H4V17H9.5L11 11Z",fill:"#1a4a6a",opacity:"0.8",stroke:Et,strokeWidth:"0.8"}),l.jsx("path",{d:"M12.5 5H18V17H12.5L11 11Z",fill:"#1a4a6a",opacity:"0.45",stroke:Et,strokeWidth:"0.8"})]})}function Bw({s:r=14}){return l.jsxs("svg",{width:r,height:r,viewBox:"0 0 14 14",fill:"none",children:[l.jsx("circle",{cx:"7",cy:"7",r:"2.5",stroke:Et,strokeWidth:"1"}),l.jsx("path",{d:"M7 1v1.5M7 11.5V13M1 7h1.5M11.5 7H13M2.5 2.5l1.1 1.1M10.4 10.4l1.1 1.1M2.5 11.5l1.1-1.1M10.4 3.6l1.1-1.1",stroke:Et,strokeWidth:"0.9",strokeLinecap:"round"})]})}function Ow({s:r=14}){return l.jsx("svg",{width:r,height:r,viewBox:"0 0 14 14",fill:"none",children:l.jsx("path",{d:"M1 7C2.5 7 2.5 3 4 3C5.5 3 5.5 11 7 11C8.5 11 8.5 3 10 3C11.5 3 11.5 7 13 7",stroke:Et,strokeWidth:"1.1",fill:"none",strokeLinecap:"round"})})}function zw({s:r=14}){return l.jsxs("svg",{width:r,height:r,viewBox:"0 0 14 14",fill:"none",children:[l.jsx("rect",{x:"1.5",y:"1.5",width:"11",height:"11",rx:"1",stroke:Et,strokeWidth:"0.9"}),l.jsx("circle",{cx:"4.5",cy:"4.5",r:"1.2",fill:Et,opacity:"0.7"}),l.jsx("circle",{cx:"9.5",cy:"4.5",r:"1.2",fill:Et,opacity:"0.7"}),l.jsx("circle",{cx:"4.5",cy:"9.5",r:"1.2",fill:Et,opacity:"0.7"}),l.jsx("circle",{cx:"9.5",cy:"9.5",r:"1.2",fill:Et,opacity:"0.7"}),l.jsx("circle",{cx:"7",cy:"7",r:"1.1",fill:Et,opacity:"0.35"}),l.jsx("line",{x1:"4.5",y1:"4.5",x2:"9.5",y2:"4.5",stroke:Et,strokeWidth:"0.6",opacity:"0.4"}),l.jsx("line",{x1:"4.5",y1:"4.5",x2:"4.5",y2:"9.5",stroke:Et,strokeWidth:"0.6",opacity:"0.4"}),l.jsx("line",{x1:"9.5",y1:"4.5",x2:"9.5",y2:"9.5",stroke:Et,strokeWidth:"0.6",opacity:"0.4"}),l.jsx("line",{x1:"4.5",y1:"9.5",x2:"9.5",y2:"9.5",stroke:Et,strokeWidth:"0.6",opacity:"0.4"})]})}function jw(){return l.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:[l.jsx("rect",{x:"2",y:"2",width:"18",height:"18",rx:"2",stroke:Et,strokeWidth:"1"}),l.jsx("path",{d:"M11 5.5L16.5 8.5V14.5L11 17.5L5.5 14.5V8.5Z",stroke:Et,strokeWidth:"1",fill:"none"}),l.jsx("line",{x1:"11",y1:"5.5",x2:"11",y2:"17.5",stroke:Et,strokeWidth:"0.6",opacity:"0.4"}),l.jsx("line",{x1:"5.5",y1:"8.5",x2:"16.5",y2:"8.5",stroke:Et,strokeWidth:"0.6",opacity:"0.4"})]})}function Hw(){return l.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:[l.jsx("circle",{cx:"5",cy:"11",r:"2.5",stroke:Et,strokeWidth:"1"}),l.jsx("circle",{cx:"11",cy:"5",r:"2.5",stroke:Et,strokeWidth:"1"}),l.jsx("circle",{cx:"17",cy:"11",r:"2.5",stroke:Et,strokeWidth:"1"}),l.jsx("circle",{cx:"11",cy:"17",r:"2.5",stroke:Et,strokeWidth:"1"}),l.jsx("line",{x1:"7.5",y1:"11",x2:"14.5",y2:"11",stroke:Et,strokeWidth:"0.8"}),l.jsx("line",{x1:"11",y1:"7.5",x2:"11",y2:"14.5",stroke:Et,strokeWidth:"0.8"})]})}function Vw(){return l.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:[l.jsx("rect",{x:"2.5",y:"2.5",width:"17",height:"17",rx:"1.5",stroke:Et,strokeWidth:"1"}),l.jsx("rect",{x:"5",y:"5",width:"5",height:"5",rx:"0.5",fill:"#1a4a6a"}),l.jsx("rect",{x:"12",y:"5",width:"5",height:"5",rx:"0.5",fill:"#1a4a6a",opacity:"0.6"}),l.jsx("rect",{x:"5",y:"12",width:"5",height:"5",rx:"0.5",fill:"#1a4a6a",opacity:"0.6"}),l.jsx("rect",{x:"12",y:"12",width:"5",height:"5",rx:"0.5",fill:"#1a4a6a",opacity:"0.3"})]})}function Gw(){return l.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:[l.jsx("circle",{cx:"11",cy:"11",r:"4",stroke:Et,strokeWidth:"1"}),l.jsx("circle",{cx:"11",cy:"11",r:"1.5",fill:Et,opacity:"0.5"}),l.jsx("path",{d:"M11 2v3M11 17v3M2 11h3M17 11h3M4.6 4.6l2.1 2.1M15.3 15.3l2.1 2.1M4.6 17.4l2.1-2.1M15.3 6.7l2.1-2.1",stroke:Et,strokeWidth:"1.3",strokeLinecap:"round"})]})}function Ww(){return l.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:[l.jsx("line",{x1:"11",y1:"19",x2:"11",y2:"11",stroke:Et,strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("line",{x1:"11",y1:"11",x2:"6",y2:"6",stroke:Et,strokeWidth:"1.2",strokeLinecap:"round"}),l.jsx("line",{x1:"11",y1:"11",x2:"16",y2:"6",stroke:Et,strokeWidth:"1.2",strokeLinecap:"round"}),l.jsx("path",{d:"M3.5 15.5C3.5 15.5 7 13 11 13C15 13 18.5 15.5 18.5 15.5",stroke:Et,strokeWidth:"0.9",fill:"none",strokeLinecap:"round",opacity:"0.6"}),l.jsx("path",{d:"M5.5 13.5C5.5 13.5 8 12 11 12C14 12 16.5 13.5 16.5 13.5",stroke:Et,strokeWidth:"0.7",fill:"none",strokeLinecap:"round",opacity:"0.4"})]})}function Xw(){return l.jsx("div",{style:{position:"absolute",top:62,left:0,right:0,height:76,background:"#171717",zIndex:10,borderBottom:"1px solid #141414"},children:l.jsxs("div",{style:{display:"flex",height:76,alignItems:"stretch",paddingLeft:4},children:[l.jsxs(Is,{label:"Quick Start",children:[l.jsx(_n,{icon:l.jsx(Ei,{src:nv}),label:"QuickScope",dropdown:!0}),l.jsx(_n,{icon:l.jsx(Uw,{}),label:"Materials",dropdown:!0}),l.jsx(_n,{icon:l.jsx(Ei,{src:iv}),label:"Structural",dropdown:!0}),l.jsx(_n,{icon:l.jsx(Ei,{src:Kh}),label:"Fluid Flow",dropdown:!0}),l.jsx(_n,{icon:l.jsx(Ei,{src:Qh}),label:"Solid Thermal",dropdown:!0}),l.jsx(_n,{icon:l.jsx(Ei,{src:rv}),label:"Electromagnetics",dropdown:!0}),l.jsx(_n,{icon:l.jsx(Ei,{src:Eh}),label:"Review",dropdown:!0})]}),l.jsx(Fa,{}),l.jsxs(Is,{label:"Physics",children:[l.jsx(_n,{icon:l.jsx(kw,{}),label:"Symmetry",dropdown:!0}),l.jsx(Fw,{}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignSelf:"stretch",gap:1,paddingLeft:2},children:[l.jsx(wf,{icon:l.jsx(Bw,{}),label:"Simulation Options",dropdown:!0}),l.jsx(wf,{icon:l.jsx(Ow,{}),label:"Natural Frequency"}),l.jsx(wf,{icon:l.jsx(zw,{}),label:"Topology Optimization"})]})]}),l.jsx(Fa,{}),l.jsxs(Is,{label:"Results",children:[l.jsx(_n,{icon:l.jsx(jw,{}),label:"Scene",dropdown:!0}),l.jsx(_n,{icon:l.jsx(Ei,{src:qh}),label:"Monitors",dropdown:!0}),l.jsx(_n,{icon:l.jsx(Hw,{}),label:"Connection Assessment",disabled:!0})]}),l.jsx(Fa,{}),l.jsxs(Is,{label:"Fidelity",children:[l.jsx(_n,{icon:l.jsx(Vw,{}),label:"Size Preview",dropdown:!0}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignSelf:"stretch",gap:1,paddingRight:6},children:[l.jsx(bf,{label:"Global",checked:!0}),l.jsx(bf,{label:"Local"}),l.jsx(bf,{label:"Resolution",dropdown:!0})]})]}),l.jsx(Fa,{}),l.jsx(Is,{label:"Study",children:l.jsx(_n,{icon:l.jsx(Ei,{src:uw}),label:"Simulation",dropdown:!0})}),l.jsx(Fa,{}),l.jsxs(Is,{label:"Display",children:[l.jsx(_n,{icon:l.jsx(Ei,{src:sv}),label:"Parameters",dropdown:!0}),l.jsx(_n,{icon:l.jsx(Ei,{src:ru}),label:"Variations",dropdown:!0}),l.jsx(_n,{icon:l.jsx(Ei,{src:Eh}),label:"Show",dropdown:!0})]}),l.jsx(Fa,{}),l.jsxs(Is,{label:"Transfer",children:[l.jsx(_n,{icon:l.jsx(Gw,{}),label:"Mechanical"}),l.jsx(_n,{icon:l.jsx(Ei,{src:iu}),label:"Fluent"}),l.jsx(_n,{icon:l.jsx(Ww,{}),label:"HFSS"})]})]})})}function Yw({onSelectCore:r}){const{viewportIntensity:e}=Vt();return l.jsx("div",{style:{position:"absolute",left:0,top:Ho,right:0,height:lv-Ho,overflow:"hidden",zIndex:0},children:l.jsx(fM,{onSelectCore:r,viewportOffsetY:Ho,heatIntensity:e})})}function Kw({onSelectCore:r}){const{copilotDocked:e}=Vt(),t=(e?aw:0)-vw;return l.jsxs("div",{style:{position:"absolute",inset:0,overflow:"hidden",background:"#111"},children:[l.jsx("div",{style:{position:"absolute",inset:0,background:"#1a1a1a"}}),l.jsx(Yw,{onSelectCore:r}),l.jsx("img",{src:fw,alt:"",draggable:!1,width:Ic,height:Ic,style:{position:"absolute",left:-43,bottom:_w,width:Ic,height:Ic,maxWidth:"none",display:"block",pointerEvents:"none",userSelect:"none",zIndex:2}}),l.jsx("img",{src:hw,alt:"",draggable:!1,width:Dc,height:Dc,style:{position:"absolute",right:t,bottom:Sw,width:Dc,height:Dc,maxWidth:"none",display:"block",pointerEvents:"none",userSelect:"none",zIndex:2,transition:"right 280ms cubic-bezier(0.2, 0.8, 0.2, 1)"}}),l.jsx(yw,{}),l.jsx(Aw,{}),l.jsx(Lw,{}),l.jsx(Xw,{})]})}const Xt={p15eb0380:"M3.97555 0L7.9511 3H0L3.97555 0Z",p1893d600:"M0 10.6667V3.2H2.07407V10.6667H0ZM3.62963 10.6667V0H5.7037V10.6667H3.62963ZM7.25926 10.6667V6.4H9.33333V10.6667H7.25926Z",p199f400:"M4.5 4.5V2.5H5.5V4.5H7.5V5.5H5.5V7.5H4.5V5.5H2.5V4.5H4.5ZM5 10C2.2385 10 0 7.7615 0 5C0 2.2385 2.2385 0 5 0C7.7615 0 10 2.2385 10 5C10 7.7615 7.7615 10 5 10ZM5 9C6.06087 9 7.07828 8.57857 7.82843 7.82843C8.57857 7.07828 9 6.06087 9 5C9 3.93913 8.57857 2.92172 7.82843 2.17157C7.07828 1.42143 6.06087 1 5 1C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5C1 6.06087 1.42143 7.07828 2.17157 7.82843C2.92172 8.57857 3.93913 9 5 9V9Z",p1a225770:"M12 12H1.5V1.5H6.75V0H1.5C0.6675 0 0 0.675 0 1.5V12C0 12.825 0.6675 13.5 1.5 13.5H12C12.825 13.5 13.5 12.825 13.5 12V6.75H12V12ZM8.25 0V1.5H10.9425L3.57 8.8725L4.6275 9.93L12 2.5575V5.25H13.5V0H8.25Z",p1d922e80:"M1.5 0.75C1.5 0.551088 1.57902 0.360322 1.71967 0.21967C1.86032 0.0790176 2.05109 0 2.25 0H11.25C11.4489 0 11.6397 0.0790176 11.7803 0.21967C11.921 0.360322 12 0.551088 12 0.75C12 0.948912 11.921 1.13968 11.7803 1.28033C11.6397 1.42098 11.4489 1.5 11.25 1.5H2.25C2.05109 1.5 1.86032 1.42098 1.71967 1.28033C1.57902 1.13968 1.5 0.948912 1.5 0.75ZM1.5 2.25C1.10218 2.25 0.720644 2.40804 0.43934 2.68934C0.158035 2.97064 0 3.35218 0 3.75V12.75C0 13.1478 0.158035 13.5294 0.43934 13.8107C0.720644 14.092 1.10218 14.25 1.5 14.25H12C12.3978 14.25 12.7794 14.092 13.0607 13.8107C13.342 13.5294 13.5 13.1478 13.5 12.75V3.75C13.5 3.35218 13.342 2.97064 13.0607 2.68934C12.7794 2.40804 12.3978 2.25 12 2.25H1.5ZM12 8.7645V3.75H1.5V12.75H2.19675L8.42775 6.519C8.51481 6.43192 8.61817 6.36284 8.73193 6.31571C8.84569 6.26858 8.96762 6.24432 9.09075 6.24432C9.21389 6.24432 9.33581 6.26858 9.44957 6.31571C9.56333 6.36284 9.66669 6.43192 9.75375 6.519L12 8.7645ZM4.125 7.5C4.42337 7.5 4.70952 7.38147 4.9205 7.1705C5.13147 6.95952 5.25 6.67337 5.25 6.375C5.25 6.07663 5.13147 5.79048 4.9205 5.5795C4.70952 5.36853 4.42337 5.25 4.125 5.25C3.82663 5.25 3.54048 5.36853 3.3295 5.5795C3.11853 5.79048 3 6.07663 3 6.375C3 6.67337 3.11853 6.95952 3.3295 7.1705C3.54048 7.38147 3.82663 7.5 4.125 7.5Z",p2274d000:"M0 7.5V6.25H3.5V7.5H0ZM0 4.375V3.125H7V4.375H0ZM0 1.25V0H10.5V1.25H0Z",p26a79a00:"M34.7856 0.6C34.5499 12.3848 32.2325 24.035 27.9405 35.0129L0 24.0891C3.00442 16.4045 4.62659 8.24933 4.79161 0L34.7856 0.6Z",p286f0b80:"M12.1506 5.095H5.35894V11.8867H12.1506V5.095ZM4.50998 4.24604V12.7357H12.9996V4.24604H4.50998Z",p2d8f2680:"M12 1.33333H9.88667L8.66667 0H4.66667L3.44667 1.33333H1.33333C0.979711 1.33333 0.640573 1.47381 0.390524 1.72386C0.140476 1.97391 0 2.31304 0 2.66667V10.6667C0 11.0203 0.140476 11.3594 0.390524 11.6095C0.640573 11.8595 0.979711 12 1.33333 12H12C12.3536 12 12.6928 11.8595 12.9428 11.6095C13.1929 11.3594 13.3333 11.0203 13.3333 10.6667V2.66667C13.3333 2.31304 13.1929 1.97391 12.9428 1.72386C12.6928 1.47381 12.3536 1.33333 12 1.33333V1.33333ZM12 10.6667H1.33333V2.66667H4.03333L5.25333 1.33333H8.08L9.3 2.66667H12V10.6667ZM6.66667 3.33333C5.78261 3.33333 4.93477 3.68452 4.30964 4.30964C3.68452 4.93477 3.33333 5.78261 3.33333 6.66667C3.33333 7.55072 3.68452 8.39857 4.30964 9.02369C4.93477 9.64881 5.78261 10 6.66667 10C7.55072 10 8.39857 9.64881 9.02369 9.02369C9.64881 8.39857 10 7.55072 10 6.66667C10 5.78261 9.64881 4.93477 9.02369 4.30964C8.39857 3.68452 7.55072 3.33333 6.66667 3.33333V3.33333ZM6.66667 8.66667C6.13623 8.66667 5.62753 8.45595 5.25245 8.08088C4.87738 7.70581 4.66667 7.1971 4.66667 6.66667C4.66667 6.13623 4.87738 5.62753 5.25245 5.25245C5.62753 4.87738 6.13623 4.66667 6.66667 4.66667C7.1971 4.66667 7.70581 4.87738 8.08088 5.25245C8.45595 5.62753 8.66667 6.13623 8.66667 6.66667C8.66667 7.1971 8.45595 7.70581 8.08088 8.08088C7.70581 8.45595 7.1971 8.66667 6.66667 8.66667Z",p350de480:"M0.94 0L4 3.05333L7.06 0L8 0.94L4 4.94L0 0.94L0.94 0Z",p35348100:"M2.61328 11.6302H0.539062V8.96321H2.61328V11.6302ZM6.24316 11.6302H4.16895V6.96321H6.24316V11.6302ZM9.87305 11.6302H7.79883V4.96321H9.87305V11.6302ZM6.99805 0.0227792L9.16504 0.603834C9.52062 0.699113 9.7319 1.06465 9.63672 1.42024L9.05566 3.58723C8.96037 3.94288 8.5949 4.15421 8.23926 4.05891C7.88375 3.96353 7.67331 3.59807 7.76855 3.24251L7.93164 2.63118L0.666016 6.82649L0 5.67122L7.2666 1.47493L6.65332 1.31087C6.29768 1.21557 6.08635 0.850103 6.18164 0.494459C6.27698 0.139015 6.64255 -0.0723111 6.99805 0.0227792Z",p36f8500:"M4.07378 0L8.14757 3H0L4.07378 0Z",p3eda12c0:"M12.6667 6.66667H0.666667C0.489856 6.66667 0.320286 6.7369 0.195262 6.86193C0.0702379 6.98695 0 7.15652 0 7.33333V11.3333C0 11.5101 0.0702379 11.6797 0.195262 11.8047C0.320286 11.9298 0.489856 12 0.666667 12H12.6667C12.8435 12 13.013 11.9298 13.1381 11.8047C13.2631 11.6797 13.3333 11.5101 13.3333 11.3333V7.33333C13.3333 7.15652 13.2631 6.98695 13.1381 6.86193C13.013 6.7369 12.8435 6.66667 12.6667 6.66667ZM12 10.6667H1.33333V8H12V10.6667ZM12.6667 0H0.666667C0.489856 0 0.320286 0.0702379 0.195262 0.195262C0.0702379 0.320286 0 0.489856 0 0.666667V4.66667C0 4.84348 0.0702379 5.01305 0.195262 5.13807C0.320286 5.2631 0.489856 5.33333 0.666667 5.33333H12.6667C12.8435 5.33333 13.013 5.2631 13.1381 5.13807C13.2631 5.01305 13.3333 4.84348 13.3333 4.66667V0.666667C13.3333 0.489856 13.2631 0.320286 13.1381 0.195262C13.013 0.0702379 12.8435 0 12.6667 0V0ZM12 4H1.33333V1.33333H12V4Z",p3f968700:"M7.33333 0L11 1.09091L9.9 4.36364H8.8V2.90909L1.1 8L0 6.18182L8.06667 1.81818L6.6 0.727273L7.33333 0Z",p56f6880:"M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z",p75f3200:"M18 2H14.83L13 0H7L5.17 2H2C1.46957 2 0.960859 2.21071 0.585786 2.58579C0.210714 2.96086 0 3.46957 0 4V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16V4C20 3.46957 19.7893 2.96086 19.4142 2.58579C19.0391 2.21071 18.5304 2 18 2V2ZM18 16H2V4H6.05L7.88 2H12.12L13.95 4H18V16ZM10 5C8.67392 5 7.40215 5.52678 6.46447 6.46447C5.52678 7.40215 5 8.67392 5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5V5ZM10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13Z",pc4d7880:"M6.33333 0H14.25V1.58333H6.33333V0ZM6.33333 3.16667H11.0833V4.75H6.33333V3.16667ZM6.33333 7.91667H14.25V9.5H6.33333V7.91667ZM6.33333 11.0833H11.0833V12.6667H6.33333V11.0833ZM0 0H4.75V4.75H0V0ZM1.58333 1.58333V3.16667H3.16667V1.58333H1.58333ZM0 7.91667H4.75V12.6667H0V7.91667ZM1.58333 9.5V11.0833H3.16667V9.5H1.58333Z",pe60ce00:"M4.26619 10V6.20468C3.06939 6.84823 1.92431 7.46389 0.739686 8.10089C0.494253 7.70339 0.254224 7.31466 0 6.90289C1.16511 6.2739 2.31208 5.65473 3.51866 5.00334C2.31915 4.3553 1.167 3.73293 0.000257314 3.10261C0.25208 2.69484 0.488936 2.31121 0.739815 1.90494C1.90449 2.54153 3.04795 3.16664 4.24745 3.82232V0H5.7251V3.83526C6.93421 3.17513 8.08213 2.54844 9.26083 1.90498C9.50463 2.29956 9.74174 2.68336 10 3.10147C8.84081 3.72776 7.68857 4.35029 6.4816 5.00241C7.67879 5.6487 8.824 6.26699 9.99841 6.90099C9.74959 7.30666 9.51034 7.6968 9.26199 8.1017C8.0865 7.46971 6.9391 6.8528 5.74685 6.21184V10H4.26619Z"},Qw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAABdNJREFUeF7Vmy1Q3kgYxxGIioqKCiQCcfIEoqICgThRUVGBqKhAVCAqTlQgOoNAIBAVFQgEAoGoqEBUIBAVCASionPD3JxAIE5UVHQG+vu/eXKFsl/ZZPPu/WaeSd7s87FP3mR3s9nMlOb6+noWWb66ulpl+4btO+Q98gk5NzlBPiA7pvMSecL+PXPz/4KK3yeBFWQP+crvLLD9hrxn9wXy0NzXCRWcpbLPkUNVXAkMCT6/I0fIGj/rujKo1BPktKlqeYj1hc0LCz89qMgictRUa3zspC9bdcaDoA8JfjCpRQXYnzBv1SsLgX4joC7BqqBOF2weWzXLQJA/kOxWvTTU7TubMm0Dzl9ZgGxkj6jfP0b2kW1kC1F3qRZeZb17EHxsspm1qvcHh28b192xpLbZXUKSKoX+I2QD+TxxkgG2aqP6nwQcvWpcpoON/mmdtN/NTTb4WUB0MjpfGdhsm5s8cKB7vtNlj/4BsmAuBgPXc/jdyajPqrnoBrZq7ZMbPHTPkEdmXgxCqV5/NVHjoKsTtmTmaWCgfj65q0P3A5v7Zl4UYuXckpdI+lWJcvIgB91hW9wAOcm3YHtibsKguGg2UdBdM7Pi9Em+BR/PzJ0flJLG9uhtmklxhkhe4Ee3tf9qRUGTEFHQ0z1f/WXvAn/uq5YyPc9HH2nROWNTZYOH/t+26wUdPTPcrT8FzxuVMOgV7+pERvIabc6zjQ6Y0Fm3MD/h4KGVe0HnwNSLQpzOyZupbLfssBd0Ppt6A8c0hxc8c5RreDv4CO9XiJGdvODQA47925T6uZULP1bsuBd03pp6MYjRK/kWjv9pKiFem/rEYM8Ohuj9YBNiqOQFxRrJBp8ZKD9uldX6B8f8lJ9PlAuB/8GSb0EnZTwzpxOw3Oz7SQmYS4nkRYpfdFalqDc2Mbo9TSVSKnmB+nxj5Qd/G1J80/x0g5LupcFHfSWTb8Hm3MydUL4rpXf224mcmL/BwGfx5AV2wXaA8kMp6d2bF8qb1nIg8DdK8gLbYO9G+amUPtlvJ5Tvm7/e4Gu05AX2mqvwQvmFlGL3Sa9KtOBn1ORFSkwp/WP7TijfMn/ZTCN5gR+9SQ4ipRPbd0L5nvnLYlrJC3xtmFsnlF9KSZMbXig/Mn+dwXZqyQv87ZprJ5SfSUnLUrxQntUNYjfV5AU+Y93gx5SB0Dfzl0wNyQv8Bl+tUT4ZCL20317QSZ4FQreK5HE910TwQ+xNVTg6EYrOhvkNUkvyAt/RZxx01nSm7rETmw26PYXkAJ1qkhf4j07xQbOqBOXgcFig450Oqy15QqRM8Z2a+sRA6/CCYOC8DWpLXhAj5RH/jalPTkDKFJLO6JyZTKgxecLoltbcf4zbU3wYRaeQ0Nkx9SqTF8RZt5Be0Lk7tuFgdNyMjq4SvZ+vMnlC6UpOmRK/+3zDcV060TUB6CQvThBjJS+ItW9hvaCjE+Red0xBtDHswsjJRy9942fj5wJHg6z5HTN5wj1tooahTmocwwutUYhOk8cYOfnHxEtay4Re2oIpFJMWSbgYOfmnHZIPL464CYp6zZzSl95izOSJlXrPq15fkUUzTQM7XVrBwdFN0NXihOIrtomhri7a2t8E/RUz7wa2nXoFAukTF72ff2AuBgOf6qbXkWg//wvhVj8GAYNTyy5USUSvqHt/54MPPdisIjm3ZP8pffzo7XH0adEFdu13Pho5Jt8e6GpZrJLO/v4Iu2M2w6xlwpFOgtbg9AIfWjmuE6Ll8ZuIluCvIVoMvYuoLHuFeAs+1EYMv5ALx/pXkhvGKdHvno9BgCVOwmUTqx6ok7q6vNa+KwTSGv7gC5UxoS5fkG79/BAQ9JmCWz1Gh9gXiGZ/Rlm16kTBqYQass7dVC7E0lhA7zPq+YKUyqi/1kCldyvuA9/qRTTQqvs7Yiq5QCVfs1Vf3At86PFc/3bRZXrFoOLtoKbt6zW4OUX+u2XY1xcd+uTmIyIdjRE0RVf42WJm5gfRCWMZqk/hPwAAAABJRU5ErkJggg==",qw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAAxBJREFUeF7tmqFzE0EUhyMQFRWICgSiAsEfEIFLRMhFVCAqEYgKREUFngoEQ3KNKL4CgajIMHUgIhDNXTJEIIJgiOhAmImAmYiIzuT4ve3LTLvZ5C53SboX3jfz5tre7rv9Xi7vtk0zgiAIQsoYjUalIAgO4wbm7yPuc7p0gYXvIi4hkgjkGCBKnDYdLEp+DHJ1OLX9LFqeoHyc3m6WIU8gZ50vYS9LlO8gHvBl7CRMniRwKCDy8wTmZXHc4MvYSUT5ezx8vRB5kTcj8iK/hoi8yJsReZFfQ1Ilv1NpbTlv/IJT8Z4Vjrxs7m19k0/FYhnyGL+B2I4R011IuOj6F47rBxNR8Zslt/GIh0ZmSfKbmPdZJYgB5tZw2OJ0/Iq7fm1CejIuHdcr517WI/06aaP8GOR4rxJC5g7E2prozMBdcqImz8BmeQJ5hiopXtFDk2RYFCvejkpgwHZ5Arl6mWKl9RAyuK11Of+c+oFTbubx9QtTX6CfmZpjGuQJ5NvLFN3GwYRYxXtHbwu+toJEcad81ce2fvztIVFXi6nyBM73tfFRos/TjeD8KeIkYhxjSl6JkawmNcxV23fVSY2i65W0scFps3e1glsEQge8xPnBq9q5LkS3Pp+agDr/9bEUr86+8zJuh0TyBCT07t/mUxPQnaGNDaofu7yU1ZNYnnCO/GNdihojn76BU/ae62M/fPnNy1ktC5En0On3dCm143vduPHpKW2H0QP6+thvvwY/sRhT05oWYQ3S1FT1WIw8QTtAkxgK84c2O7xHOEMYH5X60yIMLH7hj8jEPC43dnW5CDGc9lYJw8oiGB6HM4P2Dzw1FnYWodzYx/t/YBIeB2777qwt8DxYWQSner6tngxohBAeKnHVD7xP1A+S/l1Ax8oijFEbHxSEv10aVhdhVUgRgBQBSBGAFAFIEYAUAUgRgBQBSBGAFAFELELYP0+mu0hhRYgC5tdxSG8hFlSEGqdLJ0mLgLlXnw2mmSRFwLwLTpNu4hSBxiOecor0A6cnEDJ9DmiKMiLLUwVBEP5XMpl/+qfeV54Tw+EAAAAASUVORK5CYII=",Zw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAACdJREFUeF7twQENAAAAwqD3T20ONyAAAAAAAAAAAAAAAAAAAADgXA1AQAABC3NOHQAAAABJRU5ErkJggg==",cv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAAVVJREFUSEvtlq1Sw1AQhfsAPEBFBQJRWVFRUdEHQCJ4jD5ABTM8QASiAlGBQKAZJAJRBwJRgegwCASyPuU7l5MM5GfatFd1ODNfN7t7dzeT3DRppWl6sy6I2LLVUNQ8ujwXsQclljDGH2XgD1y3tahrw/EvhrAOA7Ajr4smDzmQAU87XvMj1apJJvwVJpwsxx1ovFmCaJI3x97BzFzDiZftpkLzscNxFK05xX04o0/boajNr9RE4jjcNKhsjjvEfwM9rOIV+k6XRUFXTdAFC7ULnuEd5gpiF8o5fwkr+IDsJs/Idd2uLJI6W6knn4J7+5Ui/4mpb1gUi3UpvuAFEtAZTp3WwMSNE4eai+IB6OHTNZ1qqFNBar73kE06yCG3GO2sCTZ/doIIzqF+725QNiQT/qnjP392+iH+/8Ip6c8AOHcggN/xuq1FXe1Lv+pzI9JnS7r4BpEYq/DLbdaOAAAAAElFTkSuQmCC",Jw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAABntJREFUeF7lWk9oHFUcziGHHnLooYceeuihhx48BFToQSFgDx4C9lBQsGAPVQ/mELCKYKHFCgEvOeSgECFKEQ8FSyv+gYCbNq3Vhlq0UiOh5M8m2Ww2SROz2U2yu2/8vvd+M52dvEyymyY7M/ng472Z92d+329/8+Y3b7ZJKdXrOE5L034FxDtwwj8oWuXU/gIdQMAJRbBTTu8fiH4PcML3KA5Jc/JhZFcDTkijOCldkg0j2QDCpabrJbAL1WbpmkwYuQbT09PO+vr6Uy8AcMJdFEele/JgZBqMjY054+PjTj6flzMGcMIT8A0ZkiyIRg06wGUul3MqlUowGpKXMxhpBn4HkJOTk87a2pq0GsAJycoZjCyDoANcLi0tSQ8DOCE5OYNo0rCJd5nNZp1yuVyRrhpwQvxzBiPFwCbcz3Q67RQKBeltACfEO2cwMgxsom1cWFigcG+BRDW+OYORYGATuxklZwjeEvHLGYzpBjahYUxEziB2a9hEboeSMwSjIR45gzHXwCZuu2TOsLq6GnRC9HMGY6qBTVitjF3OIHZq2ATVQ+YMpVKpLNNqwAnRzBmMeQY2MfWSOcPKykrwXSJ6OYMxzcAmZKdkzuB/qYITopUzGLMMbALqJR+RmUxGOyD4QkXACdHIGYw5BjYh26FfLPMCJEgyYzjghMbnDGKLhk3cZpR7fNtiCYjlE2EI7AE7wBdw+oCY0hgY0wxsQsNoC20XELcMDoLd4DmcagWj966grRXYRLqcmppyZmZmqs7x2A8IvQKeAZ+T6aMPsV3DL85P3t/lclnhF1fBtmKxKKO1A7pl2vhAbNcIiiP5K/sfY7OzsxvaXcABfMQdk6njAbFdwy+MpFgIqkpmbFHg3yRB9z6ZOh4QuzX8oubm5jaIdxGMAu4NuMCQEorjMn30Ycw2cAXxee4HRD0Ee+TQGgV8JLpA32syffQhNmtQyOLiohwZQMwgihbwIOpP9EkgGAV8HQ4gHlvnYqyG5VWWb3Depgbql3QDwBzA7wByeXlZWvXYfhkWbYi9GwABV1FUJS44Do0CZodol1aNNhkaXYihVYCIbhTWrA3nQ6PAH0WYJyXDogux1QOMvixNVqDLllHg3x5E33YZGk2InRowdltbV+gaGgX+hRRzPpBh0YQYyQzujJzaEhgSGgUTExPBKDgtQ6MHGMdX1JoNhK7QKPDnEph/BEU0vxrBsJekWhMwLjQKuEmCFyhp1TgrQ5MDiAqNAv9XIzhrFMWGzQ+cO4U2ZpnRf2QGAaOtUcDStlOEvh0ylGPbcJwyLQY4ToPcMI3PHzBgrBcFFM1ICAKiMmAnqgfAVtR/0g1AYU0N//i7Si2tqD/llAb6PADPg0fkUtEEbK2KAj9w3hOO8hh4zbTAWSU19vl1Nfjiu6r0/DuOQ56+qMboDLZJNw2M6we5rRbNb40wzIsCAsbSITznCu8D+ZrslCsq+02/uukXbuPbn6lHQ8POAPtzHIE5+MRiin4KbOxmqh8wRkcBiTqFHwQP45gbonrPDGnB4o1fVerEe6poE7wZ6agPv1D3RybV7UpFeasq5s2B/AJd11PsmQOGtIEUTl56Klzl+4ecgbZOZ9EmsBbSeT3fqduZeXUP8+uIIlAfBS+j2riNGFyc4X4B1OsByiJD+NUPVNYmZqd85X01//XP6uYmi2cnuDeLJ67ZLBfMiAGlfyfU4Gsfq7TN8N0gr8XFc62kHtMGgnaA/aieBZ/94olJmzk5LsI0V2Mqp37jSm4zcq/4Vpca1otnWXkblbCRi+e3YDsOd56SYxJmb/z3h8b8krrPC9sMahTdxZPRaFk8mXnWvnhiEO/zPj2TgJ7m8/zlDpW3GRIFcvHkLQLb/Qsno8LLTGsCxjOb4yMuZ6Yzqz29Ta/bjGgUeUvSLle8COeO12GRUz8wCRfAdvAqJ+YFCEbFL3+oVCPXg10VbgMmPoQL8JM3//jggY+pL39Qt/bqFtlz4TbgYsdx0S6Q/wnSoCHM5i70qqGt0uB6GAnhQeDifFSehCH8bF51i9z6S6Ve/0Q9tomphZEUbgMMaoFh50B+afLwX0E9ZEbHzM4mcDPGRrgNMPIoyPcF7hJpUMBEVt29+JW6F3aLxFq4DTCcO0O9oPddja/Ad/52Bt78VI0kVngQEMIki3+vYf7uIV9Qj0Yz6k5ihdsAgUcg8COUXrq9L4TbANEnwPO7I7yp6X8+hOwWd0uO7QAAAABJRU5ErkJggg==",uv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABBCAYAAABhNaJ7AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAAQ1JREFUeF7tlLFNA1EQBS8gICBwQGmU4cAl0IEDF0BIQEARFOACXAAFEDhAumO+2ATpWEPIY0ZafenvT2Z0uukvMs/zHXNkTsxhWZabWuWD8A7hL3D3UOts1uQH3L9zXNezTL6TH7A7c+QG6OQH7A/1NI8fyL9wZP4ElW9QXvlAlG9QXvlAlG9QXvlAlG9QXvlAlG9QXvlAlG9QXvlAlG+Ilh8guP9UXYf9E8dVPc/ECGAEMAIYAYwARgAjgBHACGAEMAIYAYwARgAjgBHACGAEMAIYAYwARgAjgBHACGAEuBQB7utpLl0Edm8c2V/B4MKXsKln2axF4O651v8DhLfMK3NmHmlwWyv5HdP0Ae3oIWA+cuJ+AAAAAElFTkSuQmCC",$w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAAmFJREFUeF7tmqFWAkEUhgkGAoFgIBh4AILBQDAQiEYCkQcgGA0GmpFIJPgARqPRaCAaDEYj0XPA787cXVmWZVcTM3u/cy4789/rOfx3cZmdpWEYhrHLZrPpEWPiZrvdnqt8EGouqLkjZgHGQG14MNMn3khkQFtyaGtZClqT3JcrChTe/ygxM2Dy7eU85FYcmq5YYT5wybCZJWfyw8+LoeZBvTuQomnA0I+PQwM+1bsDKZoGyEWsKulFkXEcDeDM3uqkCunFkHE0n4BrPz4OjXpX7w6kaBpwhrlXPy+Gmql6dyDF0QA1c4nBtdfykHvhcOaKFbS+zwaNb4DApIupJ697tCmyasqYF0QjX/r1eeIM1c4viC05u0RPpUKobRLyrxBidNWGYRiGYRiGYSSwTOwQLZ0eRZbNO8vLkCLrD6GNmTmR7vQyls3QiZbkIF96G32q8N7XxJUzwlzuBD99Kg+5R1e4g/yxpkPG3w5j5lmFQqgZu2IFST5GoeP2BCudSepW6t2BFE0DpjqpQnrhYBxNA+51UoWO+o+qAfIQtBTqvtS7AymOBvAiW2ClDzmpWah3B1IcDRAwN1LhIOTlKzLzhJh5PA0QpAlqNAOabInnNhDR5JNTuJUeCNlFHoKYkmvCHccp4VdKBUie2v0fHoQSEyK33W8YhmEYhmHUEpaGf14KEwtiGVrklsKI9b0ZEvMqHEQbE+ftMC9yJgu3xBOomat3B5JtiflM0NimqDSg9tvi9X4wImBOvurKyOyfMY+nAQz+83A0ut8K1/fx+D7kK/9AgrpuoFHJn2EYMdNo/ACr0ci5xwfwrgAAAABJRU5ErkJggg==",Jh="/prototypes/phase1/assets/6f8999842117e5699cea19a11a197c3951fe7209-CbhcV0Ko.png",dv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAAtVJREFUeF7tmCFQ3EAUhk8gTiAQiIqKCgSiAlGBqEAgKhCVlScqKk8gEBU3U1GBQFQgEAgEoqICcaICUVmBqKhAnEAgECcqEMzc9fuTN3TSTTJNSnJh530z/2Sz+3b3vWR3s5ue4ziO4ziO4ziO4zhOXebzeR89Q+toC23o3orjZDabrRHkiOs5uiWdC2VT9AUNuV236o8XBUEwx+guibAi1LtGn9CmNfl4wOkhKnzbVaGtS/SeZLenCw4u4+jXxOuGoP0ztGNddgd8U/DfUjebh74maJfkqrmwOHBiCWfOE89KwEZD+TM64HYkkT5CeqtXiVFFqHeLTtDi1go61/wshHI9nJdmXgh2z7Hb41prJFHvB3pHctmabB463ES5K73lD8y0EtTTfkEjZKK2qkCdX+gQNTsq6EtD/zLtNouc4LJtpv8F7WzR3imq/EmlzhXSlNPGa8maLAX7F5YsB8O3SS/51HrzZdDmE6QpUne9uEFHJLdR5pNKvqbfgOt3s31jRflg08foWsZ/Q/6JmTUCXWjk7aBx2mN9FAMK9izkaRqtWZchFGrLGkD+lEtrnyY5ifbRTerBw0GbF1z61lUWCn+mZgF7ZtIq9KuD1v0Qfiho79C6+AP5WlACMNbczH9iLYIPOmXqC6I3WBvqazSHL5SC09QkYGQmnQFfNUV0NvnnvQW2+nJ8IBlOZWVSmLdo3KGnZtZJcHMVaZocoDHSEV1Sep+y11zLY8CgaPE7M5O4IdDc0x75r8wkbghUC0MG8iZWHDcEqt1SAPnHZhI3BKqTVoDyzSRuCLTo87dhJnHDAwiOpuRNrThuiFW7qwAewNhM4oZAtTPKYyF7/1YhSB0/c//MkF98ZIwF4hyk4WYh+AsziRsCzT1IkD80k7ghVv392UX3u0DS+hu08KNvqxDwCoF/RDoNdu7o2xoEr5+TK3brOI7jOI7jOI7jOI4TGb3eb8j0+UgIa1NPAAAAAElFTkSuQmCC",$h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAAEZJREFUeF7t1rENACAMA7Cewv9PFpA6cgGxpSh7lrYAAAAAAACADN29knMHiGaA6VgGmI5lgJPneUjJfAMAAAAAAADA16o2JnCI6h3Z4bkAAAAASUVORK5CYII=",eb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAAwhJREFUeF7tm69zE0EUxyMqKhAVFRUVlZUIRGX/AERkZQWyAlGBqGAGWVGBQERUICsRiIoIBAKBRFREIBAIBKKiMwmfvf1m6Ewzd+9+5HJvZz8zO6G593b386YNd+8uo0wmk8kkwmKxeD6fz68ZU8Yt45z3dnU4bZC9QvYJvP+Ll0OFpQmSF1F3NSrCnsLTArFDBB8K0xKIuVRKOuC1hdjXqFgOcXdKSwekXsuvEmJnSksDnA6Q+hv1qiF2qtQ0QOhWbiaIP1Gqf/A5jVo2kP/Oy5bSfYPILkJ/CjMDxD4wjpTuH2Ru5GaC+HT++8NnHLVsID/jZVvpvkFkB6GfhZmdY6X7B/kPkjJB/ESp/sHnOGrZ0G/KjtJ9g8g2QneFmZ2x0v2D/KWkTBB/o1T/IPOCUXmlt4TYcH6QRgMEkXClF87g6nCqdP8g8yY62aBYn5XqH3xCk+M+qlVDbLgqPFC6fxD6EtVsEH+mVP8EGXmZID50hNK40kNmn1HnSi/8maTT8UXoU1Qz81ap/kH+RFImiE+uyfG7MDNAbHJNjo9yM0F8f00O1huHBRnhnlu419bphw5zviysjBDfT5ODhcIn8jQu+x/eu2ecK6wVTPdMQnVYf5ODRSrvuHD8SuGNYY73ms4E8f00OVjoldYspU0RyD3SNCaI76/JwWLmD6UmRSAtNDl+xBnM9NfkYHN1z8VrFYH4d0o1QXy/TQ4WnGhtM9YiEBqe4hh2k4NFa52VLakqAiHm29mP2EyTg43WPS8vKCsCx8J5hBniN9fkYP09NlD3g6pgVRF4O9zO9tXkYAOdFYGfn5xUlUH8MJoc7KV1Efhn3dvZw2pysJk2RZgw/Dc52FTjItRkuE0ONrfWIjD38JscbHAtRWBOP00O9tt5EZjP15Mc7LmzIjCPzyc52HRXRfD7JAebb1UEcv0/yYFHoyKQk9STHE2KkM6THAGEzEUgLp0nOR6DW2UROB6+wJDuV1mQC0VYefUn+bS/wrIE2bNQCMaM8Y1xwdjX4Uwmk8lsltHoH2iwA/Na2IX7AAAAAElFTkSuQmCC",Mh={plane:Kg,path:Qg,pull:qg,thicken:Gh,box:Xh,up:Wh};function tb(){return l.jsxs("div",{className:"absolute left-0 size-[200px] top-0","data-name":"Radial 10",children:[l.jsx("div",{className:"absolute flex h-[47.715px] items-center justify-center left-[-4.79px] top-[101.06px] w-[47.632px]",children:l.jsx("div",{className:"flex-none rotate-150",children:l.jsx("div",{className:"h-[35.013px] relative w-[34.786px]","data-name":"Segment 1",children:l.jsx("div",{className:"absolute h-[35.013px] left-0 top-0 w-[34.786px]","data-name":"Ellipse",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 34.7856 35.0129",children:l.jsx("path",{d:Xt.p26a79a00,fill:"var(--fill-0, #212121)",id:"Ellipse"})})})})})}),l.jsx("div",{className:"absolute content-stretch cursor-pointer flex gap-[5px] h-[26px] items-center left-[6.5px] px-[6px] py-[3px] top-[111.92px] w-[24px]","data-name":"Push Button/horizontal/Dark",children:l.jsx("div",{className:"relative shrink-0 size-[16px]","data-name":"ArrowUpFromPlaneIcon_AnsysDarkTheme_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:Wh})})}),l.jsx("div",{className:"absolute flex h-[39.254px] items-center justify-center left-[-3.88px] top-[72.41px] w-[39.058px]",children:l.jsx("div",{className:"flex-none rotate-[172.5deg]",children:l.jsx("div",{className:"h-[35.013px] relative w-[34.786px]","data-name":"Segment 2",children:l.jsx("div",{className:"absolute h-[35.013px] left-0 top-0 w-[34.786px]","data-name":"Ellipse",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 34.7856 35.0129",children:l.jsx("path",{d:Xt.p26a79a00,fill:"var(--fill-0, #212121)",id:"Ellipse"})})})})})}),l.jsx("div",{className:"absolute flex h-[42.823px] items-center justify-center left-[3.79px] top-[38.95px] w-[42.662px]",children:l.jsx("div",{className:"-rotate-165 flex-none",children:l.jsx("div",{className:"h-[35.013px] relative w-[34.786px]","data-name":"Segment 3",children:l.jsx("div",{className:"absolute h-[35.013px] left-0 top-0 w-[34.786px]","data-name":"Ellipse",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 34.7856 35.0129",children:l.jsx("path",{d:Xt.p26a79a00,fill:"var(--fill-0, #212121)",id:"Ellipse"})})})})})}),l.jsx("div",{className:"absolute content-stretch cursor-pointer flex gap-[5px] h-[26px] items-center left-[9.79px] px-[6px] py-[3px] top-[50.98px] w-[25px]","data-name":"Push Button/horizontal/Dark",children:l.jsx("div",{className:"relative shrink-0 size-[16px]","data-name":"BoxWithArrowToFaceIcon_AnsysDarkTheme_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:Xh})})}),l.jsx("div",{className:"absolute content-stretch cursor-pointer flex gap-[5px] h-[26px] items-center left-[1.79px] px-[6px] py-[3px] top-[81.98px] w-[27px]","data-name":"Push Button/horizontal/Dark",children:l.jsx("div",{className:"relative shrink-0 size-[16px]","data-name":"ArrowSelectTargetFaceAltIcon_AnsysDarkTheme_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:Jw})})}),l.jsx("div",{className:"absolute flex h-[48.954px] items-center justify-center left-[21.53px] top-[10.25px] w-[48.912px]",children:l.jsx("div",{className:"flex-none rotate-[-142.5deg]",children:l.jsx("div",{className:"h-[35.013px] relative w-[34.786px]","data-name":"Segment 4",children:l.jsx("div",{className:"absolute h-[35.013px] left-0 top-0 w-[34.786px]","data-name":"Ellipse",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 34.7856 35.0129",children:l.jsx("path",{d:Xt.p26a79a00,fill:"var(--fill-0, #212121)",id:"Ellipse"})})})})})}),l.jsx("div",{className:"absolute flex h-[47.632px] items-center justify-center left-[51.22px] top-[-4.79px] w-[47.715px]",children:l.jsx("div",{className:"-rotate-120 flex-none",children:l.jsx("div",{className:"h-[35.013px] relative w-[34.786px]","data-name":"Segment 5",children:l.jsx("div",{className:"absolute h-[35.013px] left-0 top-0 w-[34.786px]","data-name":"Ellipse",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 34.7856 35.0129",children:l.jsx("path",{d:Xt.p26a79a00,fill:"var(--fill-0, #212121)",id:"Ellipse"})})})})})}),l.jsx("div",{className:"absolute left-[64.94px] size-[15.229px] top-[12.03px]","data-name":"focusParameter-24x24 1",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:cv})}),l.jsx("div",{className:"absolute content-stretch flex gap-[3.75px] h-[24px] items-center left-[30px] p-[4.5px] top-[23px] w-[25.5px]","data-name":"Push Button/horizontal/Dark",children:l.jsx("div",{className:"relative shrink-0 size-[13.5px]","data-name":"MeasurementIcon_AnsysDarkTheme_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:qh})})})]})}function nb(){return l.jsx(tb,{})}function ib({x:r,y:e,blockIdx:t}){const s=Math.max(8,r-200-12),o=Math.max(8,e-100),c=Vs();return l.jsx("div",{className:"absolute inset-0 pointer-events-none","data-name":"QAM",children:l.jsxs("div",{className:"pointer-events-auto absolute",style:{left:s,top:o,width:200,height:200},children:[l.jsx(nb,{}),l.jsx("button",{type:"button",className:"qam-add-context",onClick:d=>{d.preventDefault(),d.stopPropagation();const h=t??0;c({type:"ADD_CONTEXT",item:{id:`face-${h}`,kind:"face",label:`Face on CCD${h}`}}),c({type:"SET_COPILOT_EXPANDED",expanded:!0})},children:"Add context"})]})})}function rb(){return l.jsxs("div",{className:"absolute h-[563px] left-[284px] top-[76px] w-[12px]","data-name":"Scroll bar",children:[l.jsx("div",{className:"absolute bg-[#6b6a6a] h-[237px] left-[2px] rounded-[2px] top-[16px] w-[8px]"}),l.jsx("div",{className:"absolute flex h-[12px] items-center justify-center left-0 top-0 w-[12.188px]",children:l.jsx("div",{className:"flex-none rotate-90",children:l.jsx("div",{className:"h-[12.188px] relative w-[12px]","data-name":"ArrowPreviousStageIcon2_AnsysDarkTheme_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:uv})})})})]})}function sb(){return l.jsx("div",{className:"content-stretch flex items-center relative shrink-0","data-name":"Container",children:l.jsx("div",{className:"content-stretch flex items-center justify-center overflow-clip relative shrink-0","data-name":"Icon",children:l.jsx("div",{className:"overflow-clip relative shrink-0 size-[16px]","data-name":"Icon",children:l.jsx("div",{className:"absolute inset-[16.67%_20.83%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 9.33333 10.6667",children:l.jsx("path",{d:Xt.p1893d600,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})})})})}function ab(){return l.jsx("div",{className:"content-stretch flex gap-[2px] items-center relative shrink-0","data-name":"Container",children:l.jsx("div",{className:"content-stretch flex items-center justify-center overflow-clip relative shrink-0","data-name":"Icon",children:l.jsx("div",{className:"overflow-clip relative shrink-0 size-[16px]","data-name":"Icon",children:l.jsx("div",{className:"absolute inset-[12.5%_8.33%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 13.3333 12",children:l.jsx("path",{d:Xt.p2d8f2680,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})})})})}function ob(){return l.jsx("div",{className:"content-stretch flex items-center relative shrink-0","data-name":"Container",children:l.jsx("div",{className:"content-stretch flex items-center justify-center overflow-clip relative shrink-0","data-name":"Icon",children:l.jsx("div",{className:"overflow-clip relative shrink-0 size-[16px]","data-name":"Icon",children:l.jsx("div",{className:"absolute inset-[10.65%_20.83%_16.67%_17.46%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 9.87305 11.6302",children:l.jsx("path",{d:Xt.p35348100,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})})})})}function lb(){return l.jsx("div",{className:"content-stretch flex items-center relative shrink-0","data-name":"Container",children:l.jsx("div",{className:"content-stretch flex items-center justify-center overflow-clip relative shrink-0","data-name":"Icon",children:l.jsx("div",{className:"overflow-clip relative shrink-0 size-[16px]","data-name":"Icon",children:l.jsx("div",{className:"absolute inset-[12.5%_8.33%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 13.3333 12",children:l.jsx("path",{d:Xt.p3eda12c0,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})})})})}function cb(){return l.jsx("div",{className:"content-stretch flex items-center relative shrink-0","data-name":"Container",children:l.jsx("div",{className:"content-stretch flex items-center justify-center overflow-clip relative shrink-0","data-name":"Icon",children:l.jsx("div",{className:"relative shrink-0 size-[16px]","data-name":"Icon",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:$w})})})})}function ub(){return l.jsx("div",{className:"content-stretch flex items-center relative shrink-0","data-name":"Container",children:l.jsx("div",{className:"content-stretch flex items-center justify-center overflow-clip relative shrink-0","data-name":"Icon",children:l.jsx("div",{className:"overflow-clip relative shrink-0 size-[16px]","data-name":"Icon",children:l.jsx("div",{className:"absolute inset-[12.5%_8.33%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 13.3333 12",children:l.jsx("path",{d:Xt.p2d8f2680,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})})})})}function db(){return l.jsxs("div",{className:"absolute bg-[rgba(255,255,255,0)] h-[24px] left-[186.33px] rounded-[4px] top-0 w-[46px]","data-name":"Button",children:[l.jsxs("div",{className:"content-stretch flex gap-[4px] items-center overflow-clip px-[4px] relative rounded-[inherit] size-full",children:[l.jsx(ub,{}),l.jsx("div",{className:"h-[24px] relative shrink-0 w-0",children:l.jsx("div",{className:"absolute inset-[0_-0.5px]",children:l.jsx("svg",{className:"block size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 1 24",children:l.jsx("path",{d:"M0.5 0V24",id:"Vector 93",stroke:"var(--stroke-0, #424242)"})})})}),l.jsx("div",{className:"overflow-clip relative shrink-0 size-[12px]","data-name":"Icons  / Add circle",children:l.jsx("div",{className:"absolute inset-[8.33%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 10 10",children:l.jsx("path",{d:Xt.p199f400,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})})]}),l.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-[4px]"})]})}function fb(){return l.jsxs("div",{className:"absolute h-[24px] overflow-clip right-[3px] top-[7px] w-[238px]","data-name":"Tabs",children:[l.jsxs("div",{className:"absolute bg-[rgba(255,255,255,0)] h-[24px] left-[127px] rounded-[4px] top-0","data-name":"Button",children:[l.jsx("div",{className:"content-stretch flex gap-[2px] items-center justify-center overflow-clip px-[4px] relative rounded-[inherit] size-full",children:l.jsx(sb,{})}),l.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-[4px]"})]}),l.jsxs("div",{className:"absolute bg-[#686868] h-[24px] left-[187px] rounded-[4px] top-0","data-name":"Button",children:[l.jsx("div",{className:"content-stretch flex gap-[2px] items-center justify-center overflow-clip px-[4px] relative rounded-[inherit] size-full",children:l.jsx(ab,{})}),l.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#686868] border-solid inset-0 pointer-events-none rounded-[4px]"})]}),l.jsxs("div",{className:"absolute bg-[rgba(255,255,255,0)] h-[24px] left-[98px] rounded-[4px] top-0","data-name":"Button",children:[l.jsx("div",{className:"content-stretch flex gap-[2px] items-center justify-center overflow-clip px-[4px] relative rounded-[inherit] size-full",children:l.jsx(ob,{})}),l.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-[4px]"})]}),l.jsxs("div",{className:"absolute bg-[rgba(255,255,255,0)] h-[24px] left-[156px] rounded-[4px] top-0","data-name":"Button",children:[l.jsx("div",{className:"content-stretch flex gap-[2px] items-center justify-center overflow-clip px-[4px] relative rounded-[inherit] size-full",children:l.jsx(lb,{})}),l.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-[4px]"})]}),l.jsxs("div",{className:"absolute bg-[rgba(255,255,255,0)] h-[24px] left-[70px] rounded-[4px] top-0","data-name":"Button",children:[l.jsx("div",{className:"content-stretch flex gap-[2px] items-center justify-center overflow-clip px-[4px] relative rounded-[inherit] size-full",children:l.jsx(cb,{})}),l.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#424242] border-solid inset-0 pointer-events-none rounded-[4px]"})]}),l.jsx(db,{}),l.jsx("div",{className:"absolute h-[8px] left-[104.33px] top-[5px] w-[11px]",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 11 8",children:l.jsx("path",{d:Xt.p3f968700,fill:"var(--fill-0, #2196F3)",id:"Vector 88"})})}),l.jsx("div",{className:"absolute bg-[#fa9b3a] h-[11px] left-[138.33px] top-[6px] w-[2px]"}),l.jsx("div",{className:"absolute bg-[#2196f3] h-[5px] left-[161.33px] top-[6px] w-[14px]"})]})}function hb(){return l.jsx("div",{className:"content-stretch flex items-center px-[2px] relative shrink-0","data-name":"Container",children:l.jsx("div",{className:"content-stretch flex items-center justify-center overflow-clip relative shrink-0","data-name":"Icon",children:l.jsx("div",{className:"overflow-clip relative shrink-0 size-[24px]","data-name":"Icon",children:l.jsx("div",{className:"absolute inset-[16.67%_41.67%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 4 16",children:l.jsx("path",{d:Xt.p56f6880,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})})})})}function pb(){return l.jsxs("div",{className:"absolute bg-[#071e31] border border-[#0d3c61] border-solid h-[24px] left-[37px] top-[6px] w-[75px]","data-name":"Content",children:[l.jsx("div",{className:"absolute left-[50px] size-[15px] top-[3.5px]","data-name":"MagnifierIcon3_AnsysDarkTheme_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:nv})}),l.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] left-[8px] overflow-hidden text-[#ececec] text-[14px] text-ellipsis top-[11px] w-[44px] whitespace-nowrap",children:l.jsx("p",{className:"leading-[20px] overflow-hidden text-ellipsis",children:"Scene"})})]})}function mb(){return l.jsxs("div",{className:"absolute left-[224px] size-[24px] top-[6px]",children:[l.jsx("div",{className:"absolute border border-[#424242] border-solid left-0 rounded-[4px] size-[24px] top-0"}),l.jsx("div",{className:"absolute left-[3px] size-[18px] top-[3px]","data-name":"HideEyeIcon_AnsysDarkTheme_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:Eh})})]})}function xb(){return l.jsxs("div",{className:"absolute h-[24px] left-[117px] top-[6px] w-[25px]",children:[l.jsx("div",{className:"absolute border border-[#424242] border-solid left-0 rounded-[4px] size-[24px] top-0"}),l.jsx("div",{className:"absolute h-[15px] left-[5px] overflow-clip top-[4px] w-[14px]","data-name":"Icon",children:l.jsx("div",{className:"absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 10.5 7.5",children:l.jsx("path",{d:Xt.p2274d000,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})})]})}function gb(){return l.jsx("div",{className:"absolute h-[12.736px] left-[5px] top-[5px] w-[13px]",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 12.9996 12.7357",children:l.jsxs("g",{id:"Group 66",children:[l.jsx("rect",{fill:"var(--fill-0, white)",height:"8.48963",id:"Rectangle 139",width:"8.48963"}),l.jsx("path",{clipRule:"evenodd",d:Xt.p286f0b80,fill:"var(--fill-0, white)",fillRule:"evenodd",id:"Rectangle 140 (Stroke)"})]})})})}function vb(){return l.jsxs("div",{className:"absolute left-[196px] size-[24px] top-[6px]",children:[l.jsx("div",{className:"absolute border border-[#424242] border-solid left-0 rounded-[4px] size-[24px] top-0"}),l.jsx(gb,{})]})}function _b(){return l.jsx("div",{className:"absolute bg-[#29363c] border border-[#38bdff] border-solid h-[20px] left-[147px] overflow-clip top-[8px] w-[21px]",children:l.jsx("div",{className:"absolute left-0 overflow-clip size-[18px] top-[-1px]","data-name":"Icons / Album",children:l.jsx("div",{className:"absolute inset-[12.5%_12.5%_8.33%_12.5%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 13.5 14.25",children:l.jsx("path",{clipRule:"evenodd",d:Xt.p1d922e80,fill:"var(--fill-0, #ECECEC)",fillRule:"evenodd",id:"Icon"})})})})})}function Sb(){return l.jsxs("div",{className:"absolute h-[36px] left-[11px] overflow-clip top-[39px] w-[286px]",children:[l.jsx("div",{className:"absolute bg-[rgba(255,255,255,0)] content-stretch flex gap-[4px] h-[36px] items-center justify-center left-[248px] overflow-clip px-[4px] py-[8px] rounded-[4px] top-0","data-name":"Overflow button",children:l.jsx(hb,{})}),l.jsx(pb,{}),l.jsx("div",{className:"absolute content-stretch flex items-center justify-center left-[6px] overflow-clip top-[6px]","data-name":"Leading Icon",children:l.jsx("div",{className:"overflow-clip relative shrink-0 size-[24px]","data-name":"Icons  / Snapshot",children:l.jsx("div",{className:"absolute inset-[12.5%_8.33%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 20 18",children:l.jsx("path",{d:Xt.p75f3200,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})})}),l.jsx(mb,{}),l.jsx(xb,{}),l.jsx(vb,{}),l.jsx(_b,{}),l.jsx("div",{className:"-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+39.5px)] overflow-clip size-[19px] top-[calc(50%+0.5px)]","data-name":"Icons  / Workflow",children:l.jsx("div",{className:"absolute inset-[16.67%_12.5%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 14.25 12.6667",children:l.jsx("path",{d:Xt.pc4d7880,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})})]})}function yb(){return l.jsx("div",{className:"absolute content-stretch flex gap-[4px] items-center left-[12px] top-px w-[57px]","data-name":"Content",children:l.jsx("div",{className:"[word-break:break-word] flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#ececec] text-[14px] text-ellipsis w-[116px] whitespace-nowrap",children:l.jsx("p",{className:"leading-[20px] overflow-hidden text-ellipsis",children:"Pressure"})})})}function Ab(){const{copilotDocked:r}=Vt(),e=["35.8","35.1","34.4","33.7","33.0","32.3","32.1"],t=70,s=340,o=22,c=300,d=28,h=t-o,p=h-6,v=(r?ev:Yh)-t-6;return l.jsx("div",{className:"absolute top-[214px] transition-[left] duration-[280ms] ease-out",style:{left:v,width:t,height:s},"data-name":"Color legend",children:l.jsxs("svg",{width:t,height:s,children:[l.jsx("defs",{children:l.jsxs("linearGradient",{id:"cl-grad",x1:"0",y1:"1",x2:"0",y2:"0",gradientUnits:"objectBoundingBox",children:[l.jsx("stop",{offset:"0%",stopColor:"#0044ff"}),l.jsx("stop",{offset:"17%",stopColor:"#00ccff"}),l.jsx("stop",{offset:"33%",stopColor:"#00ee88"}),l.jsx("stop",{offset:"50%",stopColor:"#88ee00"}),l.jsx("stop",{offset:"67%",stopColor:"#ffdd00"}),l.jsx("stop",{offset:"83%",stopColor:"#ff8800"}),l.jsx("stop",{offset:"100%",stopColor:"#ff1a00"})]})}),l.jsx("text",{x:t,y:16,fill:"#909090",fontSize:"10",fontFamily:"Source Sans 3, sans-serif",textAnchor:"end",children:"Pressure [Pa]"}),l.jsx("rect",{x:h,y:d,width:o,height:c,fill:"url(#cl-grad)",rx:"2"}),e.map((_,g)=>{const E=d+g/(e.length-1)*c;return l.jsxs("g",{children:[l.jsx("line",{x1:h-4,y1:E,x2:h,y2:E,stroke:"#777",strokeWidth:"0.8"}),l.jsx("text",{x:p,y:E+3.5,fill:"#b0b0b0",fontSize:"10",fontFamily:"Source Sans 3, sans-serif",textAnchor:"end",children:_})]},g)})]})})}function Eb(){return l.jsx("div",{className:"absolute bg-black h-[186px] left-0 overflow-clip top-[26px] w-[271px]",children:l.jsx("div",{className:"absolute h-[186px] left-[-29px] top-0 w-[329px]",children:l.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:l.jsx("img",{alt:"",className:"absolute h-[179.53%] left-[-39.12%] max-w-none top-[-31.22%] w-[187.75%]",src:Jh})})})})}function Mb(){return l.jsxs("div",{className:"absolute h-[212px] left-[11px] top-[76px] w-[271px]","data-name":"Scene",children:[l.jsx("div",{className:"absolute left-0 top-0 h-[26px] w-[271px] bg-[#1a1a1a]","aria-hidden":!0}),l.jsx("p",{className:"[word-break:break-word] absolute font-['Source_Sans_3:SemiBold',sans-serif] font-semibold h-[23px] leading-[22px] left-[81px] text-[#ececec] text-[14px] top-[3px] w-[81px]",children:"32.1-35.8 Pa"}),l.jsx(yb,{}),l.jsx(Eb,{}),l.jsx("div",{className:"absolute left-[248px] overflow-clip size-[18px] top-[4px]","data-name":"Icons  / New Tab",children:l.jsx("div",{className:"absolute inset-[12.5%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 13.5 13.5",children:l.jsx("path",{d:Xt.p1a225770,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})})]})}function wb(){return l.jsx("div",{className:"absolute content-stretch flex gap-[4px] items-center left-[12px] top-px w-[57px]","data-name":"Content",children:l.jsx("div",{className:"[word-break:break-word] flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#ececec] text-[14px] text-ellipsis w-[116px] whitespace-nowrap",children:l.jsx("p",{className:"leading-[20px] overflow-hidden text-ellipsis",children:"Pressure"})})})}function bb(){return l.jsx("div",{className:"absolute bg-black h-[186px] left-0 overflow-clip top-[26px] w-[271px]",children:l.jsx("div",{className:"absolute h-[186px] left-[-29px] top-0 w-[329px]",children:l.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:l.jsx("img",{alt:"",className:"absolute h-[179.53%] left-[-39.12%] max-w-none top-[-31.22%] w-[187.75%]",src:Jh})})})})}function Tb(){return l.jsxs("div",{className:"absolute h-[212px] left-[11px] top-[292px] w-[271px]","data-name":"Scene",children:[l.jsx("div",{className:"absolute left-0 top-0 h-[26px] w-[271px] bg-[#1a1a1a]","aria-hidden":!0}),l.jsx("p",{className:"[word-break:break-word] absolute font-['Source_Sans_3:SemiBold',sans-serif] font-semibold h-[23px] leading-[22px] left-[81px] text-[#8e8e8e] text-[14px] top-[3px] w-[81px]",children:"32.1-35.8 Pa"}),l.jsx(wb,{}),l.jsx(bb,{}),l.jsx("div",{className:"absolute left-[248px] overflow-clip size-[18px] top-[4px]","data-name":"Icons  / New Tab",children:l.jsx("div",{className:"absolute inset-[12.5%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 13.5 13.5",children:l.jsx("path",{d:Xt.p1a225770,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})})]})}function Cb(){return l.jsx("div",{className:"absolute content-stretch flex gap-[4px] items-center left-[12px] top-px w-[57px]","data-name":"Content",children:l.jsx("div",{className:"[word-break:break-word] flex flex-col font-['Source_Sans_3:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#ececec] text-[14px] text-ellipsis w-[116px] whitespace-nowrap",children:l.jsx("p",{className:"leading-[20px] overflow-hidden text-ellipsis",children:"Pressure"})})})}function Rb(){return l.jsx("div",{className:"absolute bg-black h-[186px] left-0 overflow-clip top-[26px] w-[271px]",children:l.jsx("div",{className:"absolute h-[186px] left-[-29px] top-0 w-[329px]",children:l.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:l.jsx("img",{alt:"",className:"absolute h-[179.53%] left-[-39.12%] max-w-none top-[-31.22%] w-[187.75%]",src:Jh})})})})}function Pb(){return l.jsxs("div",{className:"absolute h-[212px] left-[11px] top-[508px] w-[271px]","data-name":"Scene",children:[l.jsx("div",{className:"absolute left-0 top-0 h-[26px] w-[271px] bg-[#1a1a1a]","aria-hidden":!0}),l.jsx("p",{className:"[word-break:break-word] absolute font-['Source_Sans_3:SemiBold',sans-serif] font-semibold h-[23px] leading-[22px] left-[81px] text-[#8e8e8e] text-[14px] top-[3px] w-[81px]",children:"32.1-35.8 Pa"}),l.jsx(Cb,{}),l.jsx(Rb,{}),l.jsx("div",{className:"absolute left-[248px] overflow-clip size-[18px] top-[4px]","data-name":"Icons  / New Tab",children:l.jsx("div",{className:"absolute inset-[12.5%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 13.5 13.5",children:l.jsx("path",{d:Xt.p1a225770,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})})]})}function Nb(){const{copilotDocked:r}=Vt(),e=r?ev:Yh;return l.jsxs("div",{className:"absolute h-[651px] overflow-x-clip overflow-y-auto top-[138px] w-[297px] transition-[left] duration-[280ms] ease-out",style:{left:e},"data-name":"Post collection",children:[l.jsx(rb,{}),l.jsx("div",{className:"absolute flex h-[12px] items-center justify-center left-[284px] top-[635px] w-[12.188px]",children:l.jsx("div",{className:"-rotate-90 flex-none",children:l.jsx("div",{className:"h-[12.188px] relative w-[12px]","data-name":"ArrowPreviousStageIcon2_AnsysDarkTheme_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:uv})})})}),l.jsx(fb,{}),l.jsx("div",{className:"absolute bg-[#2196f3] h-[2px] left-[242px] top-[34px] w-[26px]"}),l.jsx(Sb,{}),l.jsx(Mb,{}),l.jsx(Tb,{}),l.jsx(Pb,{})]})}function fv(r){const{highlightedToolId:e}=Vt(),t=["tool-hit","ai-hit"];return e===r&&t.push("tool-hit--pulse"),t.join(" ")}function Ib(){const{ribbonToolId:r}=Vt(),e=Ir[r]??Ir.pull,t=Mh[e.icon]??Mh.plane;return l.jsxs("div",{className:"ai-hit grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0",children:[l.jsx("div",{className:"bg-[#424242] col-1 content-stretch cursor-pointer flex gap-[5px] h-[32px] items-center ml-0 mt-0 p-[6px] relative row-1 w-[45px]","data-name":"Push Button/horizontal/Dark",children:l.jsx("div",{className:"relative shrink-0 size-[24px]","data-name":"ribbon-tool-icon",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:t})})}),l.jsx("div",{className:"col-1 ml-[20px] mt-[18px] relative row-1 size-[10px]","data-name":"Vector",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 10 10",children:l.jsx("path",{d:Xt.pe60ce00,fill:"var(--fill-0, #2196F3)",id:"Vector"})})}),l.jsx("div",{className:"col-1 flex h-[4px] items-center justify-center ml-[33px] mt-[14px] relative row-1 w-[9.408px]",children:l.jsx("div",{className:"flex-none rotate-180",children:l.jsx("div",{className:"h-[4px] relative w-[9.408px]",children:l.jsx("div",{className:"absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0",children:l.jsx("svg",{className:"block size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 8.14757 3",children:l.jsx("path",{d:Xt.p36f8500,fill:"var(--fill-0, white)",id:"Polygon 6"})})})})})})]})}function Db(){const{ribbonToolLabel:r}=Vt();return l.jsxs("div",{"data-tool-id":"ribbon-label",className:"grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0",children:[l.jsx("div",{className:"bg-[#424242] col-1 h-[32px] ml-0 mt-0 relative row-1 min-w-[79px] w-auto px-[8px]"}),l.jsx("p",{className:"[word-break:break-word] col-1 font-['Source_Sans_3:Regular',sans-serif] font-normal h-[21px] leading-[22px] ml-[8.5px] mt-[5px] relative row-1 text-[14px] text-white max-w-[88px] truncate",children:r})]})}function Lb(){const{ribbonToolId:r}=Vt(),e=Yo(r),t=e.modeBorder?"border border-[#5a5a5a] border-solid":"border border-transparent border-solid";return l.jsxs("div",{"data-tool-id":"automatic","data-ribbon-mark":e.mark,title:`ribbon:${e.mark}`,className:`${fv("automatic")} ai-hit grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0`,children:[l.jsx("div",{className:`bg-[#424242] ${t} col-1 h-[24px] ml-0 mt-0 relative rounded-[2px] row-1 w-[112px]`}),l.jsx("div",{className:"col-1 flex h-[4px] items-center justify-center ml-[97.49px] mt-[10px] relative row-1 w-[9.181px]",children:l.jsx("div",{className:"flex-none rotate-180",children:l.jsx("div",{className:"h-[4px] relative w-[9.181px]",children:l.jsx("div",{className:"absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0",children:l.jsx("svg",{className:"absolute block size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 7.9511 3",children:l.jsx("path",{d:Xt.p15eb0380,fill:"var(--fill-0, white)",id:"Polygon 6"})})})})})}),l.jsx("div",{className:"[word-break:break-word] col-1 flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center ml-[26px] mt-[2px] overflow-hidden relative row-1 text-[#f5f5f5] text-[14px] text-ellipsis w-[65px] whitespace-nowrap",children:l.jsx("p",{className:"leading-[20px] overflow-hidden text-ellipsis",children:e.modeLabel})}),l.jsx("div",{className:"col-1 ml-[5px] mt-[4px] relative row-1 size-[18px]","data-name":"LightningIcon2_AnsysDarkTheme_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:rv})})]})}function Fb(){const{ribbonToolId:r}=Vt(),e=Yo(r);return e.showMeasure?l.jsxs("div",{"data-ribbon-mark":`${e.mark}:measure`,title:`ribbon:${e.mark} · ${e.measureValue}`,className:`ai-hit relative flex h-[24px] min-w-[94px] max-w-[110px] shrink-0 items-center gap-[4px] rounded-[2px] border border-[#5a5a5a] bg-[#2f2f2f] px-[6px] box-border${e.measureDimmed?" opacity-50":""}`,children:[l.jsx("span",{className:"min-w-0 flex-1 truncate font-['Source_Sans_3:Regular',sans-serif] text-[13px] leading-[16px] text-[#f5f5f5]",children:e.measureValue}),l.jsx("svg",{className:"shrink-0",width:"8",height:"5",viewBox:"0 0 8 5",fill:"none","aria-hidden":!0,children:l.jsx("path",{d:Xt.p350de480,fill:"#c8c8c8"})})]}):null}function Ub(){const{ribbonToolId:r}=Vt(),e=Yo(r);return l.jsxs("div",{className:"bg-[#424242] content-stretch flex gap-[7px] h-[32px] items-center px-[8px] py-[3px] relative shrink-0","data-ribbon-mark":e.mark,children:[l.jsx(Lb,{}),l.jsx("div",{className:`ai-hit bg-[#424242] content-stretch flex gap-[5px] h-[32px] items-center p-[6px] relative shrink-0 w-[34px]${e.showMeasure?"":" opacity-40"}`,"data-name":"Push Button/horizontal/Dark",children:l.jsx("div",{className:`${e.showMeasure?"":"opacity-50 "}relative shrink-0 size-[24px]`,"data-name":"MeasurementIcon_AnsysDarkTheme_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:qh})})}),l.jsx(Fb,{})]})}function kb(){return l.jsx("div",{className:"ai-hit relative shrink-0 size-[24px]","data-name":"focusParameter-24x24",title:"Parameter","aria-label":"Parameter",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:cv})})}function Bb(){return l.jsxs("div",{className:"content-stretch flex items-center gap-[2px] relative shrink-0 h-[32px] px-[4px]",children:[l.jsx("div",{className:"ai-hit bg-[#424242] content-stretch flex gap-[5px] h-[32px] items-center p-[6px] relative shrink-0 w-[34px]","data-name":"Push Button/horizontal/Dark",children:l.jsx("div",{className:"opacity-50 relative shrink-0 size-[24px]","data-name":"TransparentBlockIcon_AnsysDarkTheme_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:Zw})})}),l.jsx(kb,{})]})}function Ob(){return l.jsx("div",{className:"bg-[#424242] content-stretch flex items-center relative shrink-0",children:l.jsx(Bb,{})})}function zb(){const{ribbonToolId:r,selectedBlockId:e,copilotDocked:t}=Vt(),{deleteSelectedBlock:s}=Xi(),o=Yo(r),c=o.banEnabled&&!!e,d=!t;return l.jsxs("div",{className:"content-stretch flex items-center justify-start relative shrink min-w-0 max-w-full overflow-hidden","data-ribbon-mark":o.mark,title:`ribbon variant: ${o.mark}`,children:[l.jsx(Ib,{}),l.jsx(Db,{}),l.jsx("button",{type:"button",disabled:!c,"aria-label":"Delete selection",title:c?"Delete selection":"Select a body to delete",onClick:()=>{c&&s()},className:`ai-hit bg-[#424242] content-stretch cursor-pointer flex gap-[5px] h-[32px] items-center p-[6px] relative shrink-0 w-[34px] border-0${c?"":" opacity-40 cursor-default"}`,"data-name":"Push Button/horizontal/Dark",children:l.jsx("div",{className:"relative shrink-0 size-[24px]","data-name":"BanIcon3_AnsysDarkTheme_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:Qw})})}),l.jsx("div",{className:`ai-hit bg-[#424242] content-stretch cursor-pointer flex gap-[5px] h-[32px] items-center p-[6px] relative shrink-0 w-[34px]${o.paramEnabled?"":" opacity-40"}`,"data-name":"Push Button/horizontal/Dark",children:l.jsx("div",{className:"relative shrink-0 size-[24px]","data-name":"ParameterIcon1_AnsysDarkTheme_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:sv})})}),l.jsx(Ub,{}),d?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"ai-hit bg-[#424242] content-stretch flex gap-[5px] h-[32px] items-center p-[6px] relative shrink-0 w-[34px]","data-name":"Push Button/horizontal/Dark",children:l.jsx("div",{className:"opacity-50 relative shrink-0 size-[24px]","data-name":"ParameterIcon1_AnsysDarkTheme_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:qw})})}),l.jsx(Ob,{})]}):null]})}function jb(){const{ribbonToolId:r,copilotDocked:e}=Vt(),t=Yo(r);return l.jsxs("div",{className:"content-stretch flex items-center justify-start relative w-full min-w-0 overflow-hidden h-[48px] px-[8px]","data-name":"ToolbarHUD","data-ribbon-mark":t.mark,children:[l.jsx(zb,{}),t.endToolActive&&!e?l.jsx("div",{className:"ai-hit content-stretch flex gap-[5px] h-[32px] items-center p-[6px] relative shrink-0 w-[34px] bg-[rgba(255,255,255,0.08)] ml-[6px]","data-name":"Push Button/horizontal/Dark",title:`end-tool · ${t.mark}`,children:l.jsx("div",{className:"relative shrink-0 size-[24px]","data-name":"ArrowThickenSurfacesIcon_AnsysDarkTheme_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:Gh})})}):null]})}function Hb(){return l.jsx("div",{className:"content-stretch flex items-center mr-[-2px] relative shrink-0",children:l.jsx(Vh,{size:24,className:"size-[24px] shrink-0 object-contain"})})}function Tf(){const{copilotExpanded:r,copilotDocked:e,phase:t}=Vt(),{toggleCopilot:s}=Xi(),o=r&&!e||t==="collapseRunning"||t==="resultReady";return l.jsxs("button",{type:"button",className:`copilot-chip-btn ai-hit content-stretch flex items-center relative rounded-[4px] shrink-0${o?" copilot-chip-btn--open":""}`,onClick:s,"aria-expanded":o||e,"aria-label":e?"Collapse Copilot side panel":o?"Collapse Ansys Copilot":"Open Ansys Copilot",children:[l.jsx(Hb,{}),l.jsx("div",{className:"overflow-clip relative shrink-0 size-[16px]",style:{transform:o?"rotate(180deg)":void 0,transition:"transform 0.15s ease"},"data-name":"Icons   /  Arrow Head Down",children:l.jsx("div",{className:"absolute bottom-[33.33%] left-1/4 right-1/4 top-[35.79%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 8 4.94",children:l.jsx("path",{d:Xt.p350de480,fill:"var(--fill-0, #ffffff)",id:"Icon"})})})})]})}function rg({toolId:r}){const{selectSystemTool:e}=Xi(),t=Ir[r];if(!t)return null;const s=Mh[t.icon];return l.jsx("button",{type:"button","data-tool-id":r,className:`${fv(r)} ai-rail__tool relative shrink-0`,onClick:()=>e(r),"aria-label":t.label,children:l.jsx("img",{alt:"",className:"pointer-events-none size-[24px] object-cover",src:s})})}function Vb({toolId:r}){const e=Ir[r],{applySuggestion:t}=Xi(),s=(e==null?void 0:e.promptOptions)??["Check simulation"],[o,c]=it.useState(!1),[d,h]=it.useState(s[0]);return l.jsxs("div",{className:"ai-rail__prompt content-stretch flex gap-[10px] items-center relative shrink-0 min-h-[32px] overflow-visible",children:[l.jsx("p",{className:"font-['Source_Sans_3:Regular',sans-serif] text-[14px] leading-[20px] text-white whitespace-nowrap",children:"You might want to"}),l.jsxs("div",{className:"relative z-40",children:[l.jsxs("button",{type:"button",className:"ai-hit ai-rail__select content-stretch flex items-center gap-[4px] h-[24px] px-[4px] rounded-[4px] bg-[#2a2a2a] border border-[#5a5a5a] text-[14px] text-[#e8e8e8] min-w-[162px]",onClick:()=>c(p=>!p),"aria-expanded":o,children:[l.jsx("span",{className:"flex-1 truncate text-left",children:d}),l.jsx("svg",{width:"8",height:"5",viewBox:"0 0 8 5",fill:"none","aria-hidden":!0,children:l.jsx("path",{d:Xt.p350de480,fill:"#ffffff"})})]}),o?l.jsx("div",{className:"ai-rail__menu absolute left-0 top-[calc(100%+4px)] z-50 min-w-full rounded-[4px] border border-[#5a5a5a] bg-[#2f2f2f] py-1 shadow-lg",children:s.map(p=>l.jsx("button",{type:"button",className:"ai-hit block w-full px-3 py-1.5 text-left text-[13px] text-[#e8e8e8] hover:bg-white/10",onClick:()=>{h(p),c(!1),t(`You might want to ${p.toLowerCase()}`)},children:p},p))}):null]})]})}function Gb(){var h;const{aiRailPhase:r,activeToolId:e,aiRailToolIds:t,deletedBlockIds:s}=Vt(),o=e?Ir[e]:null,c=`${r}:${e??"none"}:${(t==null?void 0:t.join(","))??"default"}:${s.length}`;if(r==="loading")return l.jsx("div",{className:"ai-rail__skeleton relative h-[24px] flex-1 min-w-[160px] max-w-[242px] rounded-[3px]","aria-label":"Loading recommendations"},c);if(r==="suggest"&&(t!=null&&t.length))return l.jsx("div",{className:"content-stretch flex gap-[9px] items-center relative shrink-0 min-h-[32px]",children:t.map(p=>l.jsx(rg,{toolId:p},p))},c);if(r==="suggest"&&(o==null?void 0:o.suggestMode)==="prompt-select")return l.jsx(Vb,{toolId:o.id},c);const d=r==="suggest"&&((h=o==null?void 0:o.suggestToolIds)!=null&&h.length)?o.suggestToolIds:[...h_];return l.jsx("div",{className:"content-stretch flex gap-[9px] items-center relative shrink-0 min-h-[32px]",children:d.map(p=>l.jsx(rg,{toolId:p},p))},c)}function Wb(){const{copilotExpanded:r,copilotDocked:e,phase:t}=Vt(),s=t==="collapseRunning"||t==="resultReady",o=r&&!e&&!s,c=s&&!e,d=!o&&!c;return o?l.jsx("div",{className:"relative w-full overflow-visible z-40",children:l.jsxs("div",{className:"copilot-shell--open",children:[l.jsxs("div",{className:"copilot-shell__head",children:[l.jsx(Tf,{}),l.jsx("span",{className:"copilot-shell__spacer","aria-hidden":!0}),l.jsx(ew,{})]}),l.jsx(nw,{})]})}):l.jsxs("div",{className:"ai-module__head content-stretch flex gap-[8px] items-center justify-start relative z-30 w-full min-w-0 overflow-visible px-[8px] h-[48px]",children:[c?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"relative shrink-0 flex items-center min-h-[32px] z-30",children:l.jsx(Tf,{})}),l.jsx("div",{className:"absolute left-[8px] right-[8px] top-[8px] z-40",children:l.jsx(tw,{})})]}):l.jsx("div",{className:"relative shrink-0 flex items-center min-h-[32px] z-30",children:l.jsx(Tf,{})}),d?l.jsx(Gb,{}):null]})}function Xb(){const{copilotDocked:r,copilotExpanded:e,phase:t}=Vt(),s=r?cw:tv,c=e&&!r&&!(t==="collapseRunning"||t==="resultReady"),d=!c;return l.jsxs("div",{className:`absolute top-[174px] rounded-[8px] pointer-events-auto z-20 flex flex-col transition-[left] duration-[280ms] ease-out${c?" overflow-visible bg-transparent":" overflow-visible w-[592px] bg-[#424242]"}`,style:{left:s,width:c?"var(--copilot-shell-width, 640px)":592,minWidth:c?"var(--copilot-shell-width, 640px)":void 0},"data-name":"AI module",children:[l.jsx(Wb,{}),d?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"relative z-10 h-px w-full bg-[#686868] shrink-0","aria-hidden":!0}),l.jsx("div",{className:"relative z-10 min-w-0 w-full overflow-hidden",children:l.jsx(jb,{})})]}):null]})}function Yb({qamAnchor:r=null}){return l.jsxs("div",{className:"overflow-visible relative rounded-[2px] size-full pointer-events-none","data-name":"Phase 1 - whole screen",children:[l.jsx("div",{className:"absolute bg-transparent h-[358px] left-[1772px] top-[554px] w-[142px]","data-name":"Mask"}),l.jsx("div",{className:"absolute bg-transparent h-[32px] left-[1835px] top-[164px] w-[80px]","data-name":"Mask"}),r?l.jsx(ib,{x:r.x,y:r.y,blockIdx:r.idx}):null,l.jsx("div",{className:"absolute h-[651px] left-[1479.5px] top-[138px] w-[435.5px]","data-name":"Mask"}),l.jsx("div",{className:"absolute h-[125px] left-[1273px] top-[874.3px] w-[605px]","data-name":"Mask"}),l.jsx("div",{className:"pointer-events-auto",children:l.jsx(Nb,{})}),l.jsx("div",{className:"pointer-events-auto",children:l.jsx(Ab,{})}),l.jsx("div",{className:"pointer-events-auto",children:l.jsx(sw,{})}),l.jsx(Xb,{})]})}const Ti={p2531c600:"M6 6V3.33333H7.33333V6H10V7.33333H7.33333V10H6V7.33333H3.33333V6H6ZM6.66667 13.3333C2.98467 13.3333 0 10.3487 0 6.66667C0 2.98467 2.98467 0 6.66667 0C10.3487 0 13.3333 2.98467 13.3333 6.66667C13.3333 10.3487 10.3487 13.3333 6.66667 13.3333ZM6.66667 12C8.08115 12 9.43771 11.4381 10.4379 10.4379C11.4381 9.43771 12 8.08115 12 6.66667C12 5.25218 11.4381 3.89562 10.4379 2.89543C9.43771 1.89524 8.08115 1.33333 6.66667 1.33333C5.25218 1.33333 3.89562 1.89524 2.89543 2.89543C1.89524 3.89562 1.33333 5.25218 1.33333 6.66667C1.33333 8.08115 1.89524 9.43771 2.89543 10.4379C3.89562 11.4381 5.25218 12 6.66667 12V12Z",p2569dc00:"M5.0449 7.0019H2.28187L0.328125 5.04815V2.28513L2.28187 0.33138H5.0449L6.99864 2.28513V5.04815L5.0449 7.0019Z",p2d75f200:"M7.33333 7.33333H6V3.33333H7.33333V7.33333ZM7.33333 10H6V8.66667H7.33333V10ZM6.66667 0C5.79119 0 4.92428 0.172438 4.11544 0.50747C3.30661 0.842501 2.57168 1.33356 1.95262 1.95262C0.702379 3.20286 0 4.89856 0 6.66667C0 8.43478 0.702379 10.1305 1.95262 11.3807C2.57168 11.9998 3.30661 12.4908 4.11544 12.8259C4.92428 13.1609 5.79119 13.3333 6.66667 13.3333C8.43478 13.3333 10.1305 12.631 11.3807 11.3807C12.631 10.1305 13.3333 8.43478 13.3333 6.66667C13.3333 5.79119 13.1609 4.92428 12.8259 4.11544C12.4908 3.30661 11.9998 2.57168 11.3807 1.95262C10.7617 1.33356 10.0267 0.842501 9.21789 0.50747C8.40905 0.172438 7.54215 0 6.66667 0V0Z",p3ec93740:"M2.3623 2.39648C2.61651 2.39653 2.86028 2.49798 3.04004 2.67773C3.21973 2.85751 3.32129 3.10128 3.32129 3.35547C3.32124 3.60955 3.21962 3.85348 3.04004 4.0332C2.6887 4.38368 2.41038 4.80078 2.22168 5.25977C2.03357 5.71742 1.93871 6.20835 1.94141 6.70312C1.93168 7.67754 2.30742 8.61615 2.9873 9.31445C3.66845 10.014 4.59891 10.4158 5.5752 10.4307H5.5918C6.5652 10.4157 7.49321 10.0164 8.17383 9.32031C8.8536 8.62494 9.23169 7.6891 9.22559 6.7168C9.22818 6.22205 9.133 5.73123 8.94531 5.27344C8.75716 4.81452 8.47927 4.39697 8.12891 4.0459C7.94924 3.86615 7.84867 3.62231 7.84863 3.36816C7.84863 3.11403 7.94929 2.8702 8.12891 2.69043C8.3086 2.51074 8.55253 2.4093 8.80664 2.40918C9.06091 2.40918 9.30556 2.51063 9.48535 2.69043L9.48926 2.69434L9.54102 2.74414C10.5727 3.79665 11.1554 5.20875 11.166 6.68262C11.1494 8.16108 10.5668 9.57675 9.53809 10.6387C8.47804 11.6693 7.06149 12.2527 5.58301 12.2666C4.10467 12.2526 2.68887 11.6692 1.62891 10.6387C0.599949 9.57657 0.0163895 8.16043 0 6.68164C0.00748511 5.20565 0.589225 3.79036 1.62109 2.73535L1.6748 2.68652L1.68457 2.67773C1.86437 2.49794 2.10804 2.39648 2.3623 2.39648ZM5.58301 0C5.99206 0 6.32403 0.331224 6.32422 0.740234V5.75293C6.32422 6.1621 5.99218 6.49414 5.58301 6.49414C5.174 6.49394 4.84277 6.16198 4.84277 5.75293V0.740234C4.84297 0.331345 5.17412 0.000195651 5.58301 0Z",p3eeaf380:"M3.13021 5.60361C3.13021 5.30909 3.36895 5.07031 3.66342 5.07031C3.95789 5.07031 4.19662 5.30909 4.19662 5.60361C4.19662 5.89813 3.95789 6.13692 3.66342 6.13692C3.36895 6.13692 3.13021 5.89813 3.13021 5.60361Z",p8111f00:"M3.66527 4.54127C3.37074 4.54127 3.12224 4.3603 3.10973 4.12779L2.98528 1.87661C2.96557 1.50988 3.26955 1.19661 3.66527 1.19661C4.06099 1.19661 4.36498 1.50988 4.34526 1.87661L4.22082 4.12779C4.20831 4.3603 3.95981 4.54127 3.66527 4.54127Z",p858d880:"M12.7778 6.13333C12.7778 7.5325 11.6533 8.66333 10.2669 8.66333H2.51083C1.12444 8.66333 0 7.5325 0 6.13333C0 4.87472 0.913611 3.83333 2.11472 3.64167C2.09556 3.55222 2.08917 3.46278 2.08917 3.36694C2.08917 2.48528 2.79833 1.76333 3.68 1.76333C4.06972 1.76333 4.43389 1.91028 4.70861 2.14667C5.20056 1.02861 5.83306 0 7.60917 0C9.76222 0 10.7781 1.67389 10.7781 3.44361C10.7781 3.51389 10.7781 3.59056 10.7717 3.66083C11.9153 3.89722 12.7778 4.91306 12.7778 6.13333Z"};function Kb(){return l.jsx("div",{className:"absolute left-[10.67px] size-[7.333px] top-[12px]","data-name":"StatusErrorIcon 1",children:l.jsxs("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 7.33333 7.33333",children:[l.jsxs("g",{clipPath:"url(#clip0_4_4139)",id:"StatusErrorIcon 1",children:[l.jsx("g",{id:"Vector"}),l.jsx("path",{d:Ti.p2569dc00,fill:"var(--fill-0, #EF4438)",id:"Vector_2",stroke:"var(--stroke-0, #1C1C1C)",strokeMiterlimit:"1",strokeWidth:"0.7416"}),l.jsx("path",{d:Ti.p8111f00,fill:"var(--fill-0, white)",id:"Vector_3"}),l.jsx("path",{d:Ti.p3eeaf380,fill:"var(--fill-0, white)",id:"Vector_4"})]}),l.jsx("defs",{children:l.jsx("clipPath",{id:"clip0_4_4139",children:l.jsx("rect",{fill:"white",height:"7.33333",width:"7.33333"})})})]})})}function Qb(){return l.jsxs("div",{className:"absolute contents left-[4px] top-[4px]",children:[l.jsx("div",{className:"absolute left-[4px] overflow-clip size-[16px] top-[4px]","data-name":"Icons  /  Simulator",children:l.jsx("div",{className:"absolute inset-[11.67%_14.38%_11.67%_15.83%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 11.166 12.2666",children:l.jsx("path",{d:Ti.p3ec93740,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})}),l.jsx(Kb,{})]})}function qb(){return l.jsx("div",{className:"overflow-clip relative shrink-0 size-[36px]","data-name":"Solve Status",children:l.jsxs("div",{className:"-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2","data-name":"Solve button",children:[l.jsx("div",{className:"absolute left-0 size-[24px] top-0",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 24 24",children:l.jsx("circle",{cx:"12",cy:"12",fill:"var(--fill-0, #2E2E2E)",id:"Ellipse 110",r:"12"})})}),l.jsx(Qb,{}),l.jsx("div",{className:"absolute left-0 size-[24px] top-0",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 24 24",children:l.jsx("circle",{cx:"12",cy:"12",id:"Ellipse 114",r:"11",stroke:"var(--stroke-0, #E53935)",strokeWidth:"2"})})})]})})}function Zb(){return l.jsx("div",{className:"h-[36px] overflow-clip relative shrink-0 w-[18px]","data-name":"Cloud"})}function Jb(){return l.jsx("div",{className:"content-stretch flex items-center overflow-clip px-[2px] py-[10px] relative shrink-0","data-name":"Name",children:l.jsx("div",{className:"[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-white whitespace-nowrap",children:l.jsx("p",{className:"leading-[16px]",children:"Simulation 1"})})})}function $b(){return l.jsxs("div",{className:"content-stretch flex items-center relative shrink-0",children:[l.jsx("div",{className:"bg-[rgba(151,71,255,0)] h-[25px] relative shrink-0 w-[3px]"}),l.jsx(Jb,{})]})}function eT(){return l.jsx("div",{className:"relative shrink-0 size-[24px]","data-name":"Structural"})}function tT(){return l.jsx("div",{className:"relative shrink-0 size-[24px]","data-name":"Fluid",children:l.jsx("div",{className:"-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex h-[16px] items-center justify-center left-[calc(50%-0.33px)] overflow-clip top-1/2 w-[15.333px]","data-name":"Icon",children:l.jsx("div",{className:"flex-[1_0_0] h-full min-w-px relative","data-name":"PhysicsTypesFluidThermalIcon_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:iu})})})})}function nT(){return l.jsx("div",{className:"relative shrink-0 size-[24px]","data-name":"Thermal"})}function iT(){return l.jsxs("div",{className:"content-stretch flex gap-[2px] items-center overflow-clip px-[2px] py-[4px] relative shrink-0","data-name":"Physics",children:[l.jsx(eT,{}),l.jsx(tT,{}),l.jsx(nT,{})]})}function rT(){return l.jsx("div",{className:"relative h-[32px] w-[5px] shrink-0","aria-hidden":!0,children:l.jsx("div",{className:"absolute top-1/2 left-1/2 h-[24px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#424242]","data-name":"Divider"})})}function sT(){return l.jsx("div",{className:"h-[16px] relative shrink-0 w-[20px]"})}function aT(){return l.jsx("div",{className:"h-[16px] relative shrink-0 w-[20px]"})}function oT(){return l.jsx("div",{className:"relative h-[32px] w-[5px] shrink-0","aria-hidden":!0,children:l.jsx("div",{className:"absolute top-1/2 left-1/2 h-[24px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#424242]","data-name":"Divider"})})}function lT(){return l.jsx("div",{className:"h-[24px] overflow-clip relative shrink-0 w-[43px]","data-name":"DV"})}function cT(){return l.jsx("div",{className:"overflow-clip relative shrink-0 size-[36px]","data-name":"Solve Status",children:l.jsxs("div",{className:"-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2","data-name":"Solve button",children:[l.jsx("div",{className:"absolute left-0 size-[24px] top-0",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 24 24",children:l.jsx("circle",{cx:"12",cy:"12",fill:"var(--fill-0, #2E2E2E)",id:"Ellipse 110",r:"11",stroke:"var(--stroke-0, #E53935)",strokeWidth:"2"})})}),l.jsx("div",{className:"absolute left-[4px] opacity-20 overflow-clip size-[16px] top-[4px]","data-name":"Icons  / Error",children:l.jsx("div",{className:"absolute inset-[8.33%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 13.3333 13.3333",children:l.jsx("path",{d:Ti.p2d75f200,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})})]})})}function uT(){return l.jsx("div",{className:"h-[36px] overflow-clip relative shrink-0 w-[18px]","data-name":"Cloud",children:l.jsx("div",{className:"-translate-x-1/2 -translate-y-1/2 absolute content-stretch cursor-pointer flex gap-[3.194px] h-[23px] items-center left-[calc(50%-1.5px)] p-[3.833px] top-[calc(50%-0.5px)]","data-name":"Push Button/horizontal/Dark",children:l.jsx("div",{className:"overflow-clip relative shrink-0 size-[15.333px]","data-name":"Icons / Cloud",children:l.jsx("div",{className:"absolute inset-[22.67%_8.33%_20.83%_8.33%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 12.7778 8.66333",children:l.jsx("path",{d:Ti.p858d880,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})})})})}function dT(){return l.jsx("div",{className:"content-stretch flex items-center overflow-clip px-[2px] py-[10px] relative shrink-0","data-name":"Name",children:l.jsx("div",{className:"[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-white whitespace-nowrap",children:l.jsx("p",{className:"leading-[16px]",children:"Simulation 2"})})})}function fT(){return l.jsxs("div",{className:"content-stretch flex items-center relative shrink-0",children:[l.jsx("div",{className:"bg-[rgba(151,71,255,0)] h-[25px] relative shrink-0 w-[3px]"}),l.jsx(dT,{})]})}function hT(){return l.jsx("div",{className:"relative shrink-0 size-[24px]","data-name":"Structural"})}function pT(){return l.jsx("div",{className:"relative shrink-0 size-[24px]","data-name":"Fluid",children:l.jsx("div",{className:"-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex h-[16px] items-center justify-center left-[calc(50%-0.33px)] overflow-clip top-1/2 w-[15.333px]","data-name":"Icon",children:l.jsx("div",{className:"flex-[1_0_0] h-full min-w-px relative","data-name":"PhysicsTypesFluidThermalIcon_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:iu})})})})}function mT(){return l.jsx("div",{className:"relative shrink-0 size-[24px]","data-name":"Thermal",children:l.jsx("div",{className:"-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip size-[16px] top-1/2","data-name":"Icon",children:l.jsx("div",{className:"flex-[1_0_0] h-full min-w-px relative","data-name":"PhysicsTypesSolidThermalIcon_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:Qh})})})})}function xT(){return l.jsxs("div",{className:"content-stretch flex gap-[2px] items-center overflow-clip px-[2px] py-[4px] relative shrink-0","data-name":"Physics",children:[l.jsx(hT,{}),l.jsx(pT,{}),l.jsx(mT,{})]})}function gT(){return l.jsx("div",{className:"relative h-[32px] w-[5px] shrink-0","aria-hidden":!0,children:l.jsx("div",{className:"absolute top-1/2 left-1/2 h-[24px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#424242]","data-name":"Divider"})})}function vT(){return l.jsx("div",{className:"h-[16px] relative shrink-0 w-[20px]",children:l.jsx("div",{className:"absolute left-[2px] size-[16px] top-0","data-name":"Icon",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:dv})})})}function _T(){return l.jsx("div",{className:"h-[16px] relative shrink-0 w-[20px]"})}function ST(){return l.jsx("div",{className:"relative h-[32px] w-[5px] shrink-0","aria-hidden":!0,children:l.jsx("div",{className:"absolute top-1/2 left-1/2 h-[24px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#424242]","data-name":"Divider"})})}function yT(){return l.jsx("div",{className:"h-[24px] overflow-clip relative shrink-0 w-[43px]","data-name":"DV"})}function AT(){return l.jsx("div",{className:"overflow-clip relative shrink-0 size-[36px]","data-name":"Solve Status",children:l.jsxs("div",{className:"-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2","data-name":"Solve button",children:[l.jsx("div",{className:"absolute left-0 size-[24px] top-0",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 24 24",children:l.jsx("circle",{cx:"12",cy:"12",fill:"var(--fill-0, #008000)",id:"Ellipse 110",r:"12"})})}),l.jsx("div",{className:"-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2","data-name":"Icons  /  Simulator",children:l.jsx("div",{className:"absolute inset-[11.67%_14.38%_11.67%_15.83%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 11.166 12.2666",children:l.jsx("path",{d:Ti.p3ec93740,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})}),l.jsx("div",{className:"-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2","data-name":"Icons  /  Simulator",children:l.jsx("div",{className:"absolute inset-[11.67%_14.38%_11.67%_15.83%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 11.166 12.2666",children:l.jsx("path",{d:Ti.p3ec93740,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})})]})})}function ET(){return l.jsx("div",{className:"h-[36px] overflow-clip relative shrink-0 w-[18px]","data-name":"Cloud"})}function MT(){return l.jsx("div",{className:"content-stretch flex items-center overflow-clip px-[2px] py-[10px] relative shrink-0","data-name":"Name",children:l.jsx("div",{className:"[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-white whitespace-nowrap",children:l.jsx("p",{className:"leading-[16px]",children:"Simulation 3"})})})}function wT(){return l.jsxs("div",{className:"content-stretch flex items-center relative shrink-0",children:[l.jsx("div",{className:"bg-[rgba(151,71,255,0)] h-[25px] relative shrink-0 w-[3px]"}),l.jsx(MT,{})]})}function bT(){return l.jsx("div",{className:"relative shrink-0 size-[24px]","data-name":"Structural"})}function TT(){return l.jsx("div",{className:"relative shrink-0 size-[24px]","data-name":"Fluid",children:l.jsx("div",{className:"-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex h-[16px] items-center justify-center left-[calc(50%-0.33px)] overflow-clip top-1/2 w-[15.333px]","data-name":"Icon",children:l.jsx("div",{className:"flex-[1_0_0] h-full min-w-px relative","data-name":"PhysicsTypesFluidIcon_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:Kh})})})})}function CT(){return l.jsx("div",{className:"relative shrink-0 size-[24px]","data-name":"Thermal"})}function RT(){return l.jsxs("div",{className:"content-stretch flex gap-[2px] items-center overflow-clip px-[2px] py-[4px] relative shrink-0","data-name":"Physics",children:[l.jsx(bT,{}),l.jsx(TT,{}),l.jsx(CT,{})]})}function PT(){return l.jsx("div",{className:"relative h-[32px] w-[5px] shrink-0","aria-hidden":!0,children:l.jsx("div",{className:"absolute top-1/2 left-1/2 h-[24px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#424242]","data-name":"Divider"})})}function NT(){return l.jsx("div",{className:"h-[16px] relative shrink-0 w-[20px]",children:l.jsx("div",{className:"absolute left-[2px] size-[16px] top-0","data-name":"Icon",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:$h})})})}function IT(){return l.jsx("div",{className:"h-[16px] relative shrink-0 w-[20px]"})}function DT(){return l.jsx("div",{className:"relative h-[32px] w-[5px] shrink-0","aria-hidden":!0,children:l.jsx("div",{className:"absolute top-1/2 left-1/2 h-[24px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#424242]","data-name":"Divider"})})}function LT(){return l.jsxs("div",{className:"h-[24px] overflow-clip relative shrink-0 w-[43px]","data-name":"DV",children:[l.jsx("div",{className:"absolute content-stretch flex items-center justify-center left-0 overflow-clip size-[24px] top-0","data-name":"Icon",children:l.jsx("div",{className:"relative shrink-0 size-[12px]","data-name":"VariationsEditorIcon_AnsysDarkTheme_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:ru})})}),l.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] left-[25px] text-[12px] text-white top-[12px] whitespace-nowrap",children:l.jsx("p",{className:"leading-[16px]",children:"5"})})]})}function FT(){return l.jsx("div",{className:"overflow-clip relative shrink-0 size-[36px]","data-name":"Solve Status",children:l.jsxs("div",{className:"-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2","data-name":"Solve button",children:[l.jsx("div",{className:"absolute left-0 size-[24px] top-0",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 24 24",children:l.jsx("circle",{cx:"12",cy:"12",fill:"var(--fill-0, #2E2E2E)",id:"Ellipse 110",r:"11",stroke:"var(--stroke-0, #E53935)",strokeWidth:"2"})})}),l.jsx("div",{className:"absolute left-[4px] opacity-20 overflow-clip size-[16px] top-[4px]","data-name":"Icons  / Error",children:l.jsx("div",{className:"absolute inset-[8.33%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 13.3333 13.3333",children:l.jsx("path",{d:Ti.p2d75f200,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})})]})})}function UT(){return l.jsx("div",{className:"h-[36px] overflow-clip relative shrink-0 w-[18px]","data-name":"Cloud",children:l.jsx("div",{className:"-translate-x-1/2 -translate-y-1/2 absolute content-stretch cursor-pointer flex gap-[3.194px] h-[23px] items-center left-[calc(50%-1.5px)] p-[3.833px] top-[calc(50%-0.5px)]","data-name":"Push Button/horizontal/Dark",children:l.jsx("div",{className:"overflow-clip relative shrink-0 size-[15.333px]","data-name":"Icons / Cloud",children:l.jsx("div",{className:"absolute inset-[22.67%_8.33%_20.83%_8.33%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 12.7778 8.66333",children:l.jsx("path",{d:Ti.p858d880,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})})})})}function kT(){return l.jsx("div",{className:"content-stretch flex items-center overflow-clip px-[2px] py-[10px] relative shrink-0","data-name":"Name",children:l.jsx("div",{className:"[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-white whitespace-nowrap",children:l.jsx("p",{className:"leading-[16px]",children:"Simulation 4"})})})}function BT(){return l.jsxs("div",{className:"content-stretch flex items-center relative shrink-0",children:[l.jsx("div",{className:"bg-[rgba(151,71,255,0)] h-[25px] relative shrink-0 w-[3px]"}),l.jsx(kT,{})]})}function OT(){return l.jsx("div",{className:"relative shrink-0 size-[24px]","data-name":"Structural"})}function zT(){return l.jsx("div",{className:"relative shrink-0 size-[24px]","data-name":"Fluid",children:l.jsx("div",{className:"-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex h-[16px] items-center justify-center left-[calc(50%-0.33px)] overflow-clip top-1/2 w-[15.333px]","data-name":"Icon",children:l.jsx("div",{className:"flex-[1_0_0] h-full min-w-px relative","data-name":"PhysicsTypesFluidThermalIcon_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:iu})})})})}function jT(){return l.jsx("div",{className:"relative shrink-0 size-[24px]","data-name":"Thermal",children:l.jsx("div",{className:"-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip size-[16px] top-1/2","data-name":"Icon",children:l.jsx("div",{className:"flex-[1_0_0] h-full min-w-px relative","data-name":"PhysicsTypesSolidThermalIcon_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:Qh})})})})}function HT(){return l.jsxs("div",{className:"content-stretch flex gap-[2px] items-center overflow-clip px-[2px] py-[4px] relative shrink-0","data-name":"Physics",children:[l.jsx(OT,{}),l.jsx(zT,{}),l.jsx(jT,{})]})}function VT(){return l.jsx("div",{className:"relative h-[32px] w-[5px] shrink-0","aria-hidden":!0,children:l.jsx("div",{className:"absolute top-1/2 left-1/2 h-[24px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#424242]","data-name":"Divider"})})}function GT(){return l.jsx("div",{className:"h-[16px] relative shrink-0 w-[20px]",children:l.jsx("div",{className:"absolute left-[2px] size-[16px] top-0","data-name":"Icon",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:dv})})})}function WT(){return l.jsx("div",{className:"h-[16px] relative shrink-0 w-[20px]"})}function XT(){return l.jsx("div",{className:"relative h-[32px] w-[5px] shrink-0","aria-hidden":!0,children:l.jsx("div",{className:"absolute top-1/2 left-1/2 h-[24px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#424242]","data-name":"Divider"})})}function YT(){return l.jsx("div",{className:"h-[24px] overflow-clip relative shrink-0 w-[43px]","data-name":"DV"})}function KT(){return l.jsx("div",{className:"overflow-clip relative shrink-0 size-[36px]","data-name":"Solve Status",children:l.jsxs("div",{className:"-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2","data-name":"Solve button",children:[l.jsx("div",{className:"absolute left-0 size-[24px] top-0",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 24 24",children:l.jsx("circle",{cx:"12",cy:"12",fill:"var(--fill-0, #339933)",id:"Ellipse 110",r:"12"})})}),l.jsx("div",{className:"absolute left-[4px] size-[16px] top-[4px]","data-name":"CheckmarkIcon3_AnsysDarkTheme_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:eb})})]})})}function QT(){return l.jsx("div",{className:"h-[36px] overflow-clip relative shrink-0 w-[18px]","data-name":"Cloud",children:l.jsx("div",{className:"-translate-x-1/2 -translate-y-1/2 absolute content-stretch cursor-pointer flex gap-[3.194px] h-[23px] items-center left-[calc(50%-1.5px)] p-[3.833px] top-[calc(50%-0.5px)]","data-name":"Push Button/horizontal/Dark",children:l.jsx("div",{className:"overflow-clip relative shrink-0 size-[15.333px]","data-name":"Icons / Cloud",children:l.jsx("div",{className:"absolute inset-[22.67%_8.33%_20.83%_8.33%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 12.7778 8.66333",children:l.jsx("path",{d:Ti.p858d880,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})})})})}function qT(){return l.jsx("div",{className:"content-stretch flex items-center overflow-clip px-[2px] py-[10px] relative shrink-0","data-name":"Name",children:l.jsx("div",{className:"[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-white whitespace-nowrap",children:l.jsx("p",{className:"leading-[16px]",children:"Simulation 5"})})})}function ZT(){return l.jsxs("div",{className:"content-stretch flex items-center relative shrink-0",children:[l.jsx("div",{className:"bg-[rgba(151,71,255,0)] h-[25px] relative shrink-0 w-[3px]"}),l.jsx(qT,{})]})}function JT(){return l.jsx("div",{className:"relative shrink-0 size-[24px]","data-name":"Structural",children:l.jsx("div",{className:"-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 overflow-clip size-[16px] top-1/2","data-name":"Icon",children:l.jsx("div",{className:"flex-[1_0_0] h-full min-w-px relative","data-name":"PhysicsTypeStructuralOutlineOnlyIcon_AnsysDarkTheme_64x64",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:iv})})})})}function $T(){return l.jsx("div",{className:"relative shrink-0 size-[24px]","data-name":"Fluid"})}function eC(){return l.jsx("div",{className:"relative shrink-0 size-[24px]","data-name":"Thermal"})}function tC(){return l.jsxs("div",{className:"content-stretch flex gap-[2px] items-center overflow-clip px-[2px] py-[4px] relative shrink-0","data-name":"Physics",children:[l.jsx(JT,{}),l.jsx($T,{}),l.jsx(eC,{})]})}function nC(){return l.jsx("div",{className:"relative h-[32px] w-[5px] shrink-0","aria-hidden":!0,children:l.jsx("div",{className:"absolute top-1/2 left-1/2 h-[24px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#424242]","data-name":"Divider"})})}function iC(){return l.jsx("div",{className:"h-[16px] relative shrink-0 w-[20px]",children:l.jsx("div",{className:"absolute left-[2px] size-[16px] top-0","data-name":"Icon",children:l.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:$h})})})}function rC(){return l.jsx("div",{className:"relative shrink-0 size-[24px]","data-name":"Icon",children:l.jsx(Vh,{size:24,className:"pointer-events-none size-full object-contain"})})}function sC(){return l.jsx("div",{className:"relative h-[32px] w-[5px] shrink-0","aria-hidden":!0,children:l.jsx("div",{className:"absolute top-1/2 left-1/2 h-[24px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#424242]","data-name":"Divider"})})}function aC(){return l.jsx("div",{className:"h-[24px] overflow-clip relative shrink-0 w-[43px]","data-name":"DV"})}function oC(){var v;const{simulations:r,runProgress:e,phase:t,simListVisible:s}=Vt(),o=Vs();if(!s)return null;const c=((v=r.find(_=>_.expanded))==null?void 0:v.id)??null,d=r.find(_=>_.id===4),h=t==="running"&&(d==null?void 0:d.status)==="running",p=_=>{const g=c===_;return["absolute right-0 left-0 flex h-[36px] items-center gap-[2px] cursor-pointer",g?"bg-[#0d3c61]":"",_<5?"border-b border-solid":"",_<5&&!g?"border-[#353535]":"",_<5&&g?"border-[#2196f3]":""].filter(Boolean).join(" ")},m=_=>{r.forEach(g=>{g.expanded&&g.id!==_&&o({type:"SET_SIM_EXPANDED",id:g.id,expanded:!1})}),o({type:"SET_SIM_EXPANDED",id:_,expanded:!0})};return l.jsxs("div",{className:"absolute top-0 left-0 h-[179px] w-[314px] overflow-hidden rounded-[8px] bg-[#2a2a2a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08),0px_2px_4px_0px_rgba(0,0,0,0.12)]","data-name":"Sim Card",children:[l.jsxs("div",{className:`${p(1)} top-0`,"data-name":"Sim rows",onClick:()=>m(1),children:[c===1?l.jsx("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0 border border-solid border-[#2196f3]"}):null,l.jsx(qb,{}),l.jsx(Zb,{}),l.jsx($b,{}),l.jsx(iT,{}),l.jsx(rT,{}),l.jsx(sT,{}),l.jsx(aT,{}),l.jsx(oT,{}),l.jsx(lT,{})]}),l.jsxs("div",{className:`${p(2)} top-[36px]`,"data-name":"Sim rows",onClick:()=>m(2),children:[c===2?l.jsx("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0 border border-solid border-[#2196f3]"}):null,l.jsx(cT,{}),l.jsx(uT,{}),l.jsx(fT,{}),l.jsx(xT,{}),l.jsx(gT,{}),l.jsx(vT,{}),l.jsx(_T,{}),l.jsx(ST,{}),l.jsx(yT,{})]}),l.jsxs("div",{className:`${p(3)} top-[72px]`,"data-name":"Sim rows",onClick:()=>m(3),children:[c===3?l.jsx("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0 border border-solid border-[#2196f3]"}):null,l.jsx(AT,{}),l.jsx(ET,{}),l.jsx(wT,{}),l.jsx(RT,{}),l.jsx(PT,{}),l.jsx(NT,{}),l.jsx(IT,{}),l.jsx(DT,{}),l.jsx(LT,{})]}),l.jsxs("div",{className:`${p(4)} top-[108px] relative`,"data-name":"Sim rows",onClick:()=>m(4),children:[c===4?l.jsx("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0 border border-solid border-[#2196f3]"}):null,l.jsx(FT,{}),l.jsx(UT,{}),l.jsx(BT,{}),l.jsx(HT,{}),l.jsx(VT,{}),l.jsx(GT,{}),l.jsx(WT,{}),l.jsx(XT,{}),l.jsx(YT,{}),h?l.jsx("div",{className:"pointer-events-none absolute right-2 bottom-1 left-[40px] h-[3px] overflow-hidden rounded-sm bg-[#1a1a1a]",children:l.jsx("div",{className:"h-full bg-[#2196f3]",style:{width:`${Math.round(e*100)}%`}})}):null]}),l.jsxs("div",{className:`${p(5)} top-[144px] h-[35px]`,"data-name":"Sim rows",onClick:()=>m(5),children:[c===5?l.jsx("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0 border border-solid border-[#2196f3]"}):null,l.jsx(KT,{}),l.jsx(QT,{}),l.jsx(ZT,{}),l.jsx(tC,{}),l.jsx(nC,{}),l.jsx(iC,{}),l.jsx(rC,{}),l.jsx(sC,{}),l.jsx(aC,{})]})]})}function lC(){return l.jsx("div",{className:"content-stretch flex gap-[2px] items-center relative shrink-0","data-name":"Content",children:l.jsx("p",{className:"[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#ececec] text-[16px] whitespace-nowrap",children:"Simulation 3"})})}function cC(){return l.jsx("div",{className:"content-stretch flex gap-[2px] items-center relative shrink-0","data-name":"Content",children:l.jsx("p",{className:"[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#8e8e8e] text-[12px] whitespace-nowrap",children:"Defined variation 1"})})}function uC(){return l.jsxs("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 w-[104px]",children:[l.jsx("div",{className:"content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full","data-name":"Label",children:l.jsx(lC,{})}),l.jsx("div",{className:"content-stretch flex gap-[4px] h-[12px] items-center relative shrink-0 w-full","data-name":"Label",children:l.jsx(cC,{})})]})}function dC(){return l.jsx("div",{className:"content-stretch flex gap-[2px] h-[24px] items-center relative shrink-0","data-name":"Content",children:l.jsx("p",{className:"[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ececec] text-[12px] whitespace-nowrap",children:"​"})})}function fC(){return l.jsxs("div",{className:"relative h-full w-[67px] shrink-0","data-name":"Content",children:[l.jsx("div",{className:"absolute top-[7px] left-[0.5px] z-[1] flex size-[16px] items-center justify-center overflow-clip","data-name":"Icon",children:l.jsx("img",{alt:"",className:"pointer-events-none absolute inset-0 size-full max-w-none object-cover",src:ru})}),l.jsx("p",{className:"[word-break:break-word] absolute top-[5px] left-[24.5px] z-[1] font-['Source_Sans_3:SemiBold',sans-serif] text-[14px] leading-[20px] font-semibold whitespace-nowrap text-[#ececec]",children:"5"}),l.jsx("div",{className:"absolute top-[7px] left-[51.5px] z-[1] flex size-[16px] items-center justify-center overflow-clip","data-name":"Icon",children:l.jsx("div",{className:"relative size-[16px] overflow-clip","data-name":"Icons  / Add circle",children:l.jsx("div",{className:"absolute inset-[8.33%]","data-name":"Icon",children:l.jsx("svg",{className:"absolute block size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 13.3333 13.3333",children:l.jsx("path",{d:Ti.p2531c600,fill:"var(--fill-0, #ECECEC)",id:"Icon"})})})})})]})}function hC(){return l.jsxs("div",{className:"relative box-border flex h-[32px] w-[83px] shrink-0 items-center rounded-[4px] border border-solid border-[#424242] px-[8px]","data-name":"Chip",children:[l.jsx("div",{"aria-hidden":!0,className:"pointer-events-none absolute top-px bottom-px left-px w-[48px] rounded-tl-[3px] rounded-bl-[3px] border border-solid border-[#2196f3] bg-[#0d3c61]"}),l.jsx(fC,{})]})}function pC(){return l.jsxs("div",{className:"relative flex h-[24px] shrink-0 items-center gap-[8px]","data-name":"Container",children:[l.jsx("div",{className:"relative flex shrink-0 items-center justify-center overflow-clip","data-name":"Leading Icon",children:l.jsx("div",{className:"relative size-[16px] shrink-0","data-name":"Icon",children:l.jsx("img",{alt:"",className:"pointer-events-none absolute inset-0 size-full max-w-none object-cover",src:ru})})}),l.jsx("div",{className:"[word-break:break-word] relative flex shrink-0 flex-col justify-center font-['Source_Sans_3:SemiBold',sans-serif] text-[14px] leading-[0] font-semibold whitespace-nowrap text-[#ececec]",children:l.jsx("p",{className:"leading-[20px]",children:"5"})})]})}function mC(){const r=Vs(),{simListVisible:e}=Vt();return l.jsxs("div",{role:"button",tabIndex:0,"aria-expanded":e,"aria-label":"Toggle simulation list",onClick:()=>{if(r({type:"TOGGLE_SIM_LIST"}),!e)for(let t=1;t<=5;t+=1)r({type:"SET_SIM_EXPANDED",id:t,expanded:t===3})},onKeyDown:t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),r({type:"TOGGLE_SIM_LIST"}))},className:"absolute top-[184px] left-0 flex cursor-pointer items-center justify-center gap-[7px] overflow-clip rounded-[8px] bg-[#2a2a2a] py-[6px] pr-[6px] pl-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08),0px_2px_4px_0px_rgba(0,0,0,0.12)]","data-name":"Sim manager",style:e?{outline:"1px solid rgba(33,150,243,0.55)"}:void 0,children:[l.jsx(uC,{}),l.jsx("div",{className:"relative h-[24px] w-[24px] shrink-0","data-name":"PhysicsTypesFluidIcon_64x64",children:l.jsx("img",{alt:"",className:"pointer-events-none absolute inset-0 size-full max-w-none object-cover",src:Kh})}),l.jsx("div",{"aria-hidden":!0,className:"mx-[1px] h-[18px] w-px shrink-0 self-center rounded-[1px] bg-white/[0.14]","data-name":"Divider"}),l.jsxs("div",{className:"relative flex w-[25px] shrink-0 items-center gap-[4px] overflow-clip","data-name":"Label",children:[l.jsx("div",{className:"relative flex shrink-0 items-center justify-center overflow-clip","data-name":"Leading Icon",children:l.jsx("div",{className:"relative size-[24px] shrink-0","data-name":"CalculationTypesSteadyStaticIcon_AnsysDarkTheme_64x64",children:l.jsx("img",{alt:"",className:"pointer-events-none absolute inset-0 size-full max-w-none object-cover",src:$h})})}),l.jsx(dC,{})]}),l.jsx(hC,{}),l.jsx("div",{className:"relative flex h-[32px] max-w-[280px] shrink-0 items-center justify-center overflow-clip rounded-[4px] border border-solid border-[#424242] bg-transparent px-[16px] py-[4px]","data-name":"Button",children:l.jsx(pC,{})})]})}function xC(){return l.jsxs("div",{className:"relative size-full",children:[l.jsx(oC,{}),l.jsx(mC,{})]})}const Zc={chartImage:"/prototypes/phase1/assets/workspace/variation-study/c0bc304c72e4bf752fded006ee0483b100f553a0.png",toolbarRow:"/prototypes/phase1/assets/workspace/variation-study/toolbar-row.png",checkboxChecked:"/prototypes/phase1/assets/workspace/variation-study/d49584f213355636e9a605029b352fd38003f218.svg",statusSuccess:"/prototypes/phase1/assets/workspace/variation-study/status-success.svg"},sg=[{testCase:"FC-MaxPower",favorite:!0,inlet1Temp:"25.00 °C",inlet2MassFlow:"0.20 kg/s",inlet2Temp:"30.00 °C",outletPressure:"95800 Pa",pressureDrop:"45.4 Pa",maxVelocity:"3.6 m/s"},{testCase:"FC-MaxPower",favorite:!1,inlet1Temp:"25.00 °C",inlet2MassFlow:"0.25 kg/s",inlet2Temp:"30.00 °C",outletPressure:"96100 Pa",pressureDrop:"45.5 Pa",maxVelocity:"4.8 m/s"},{testCase:"FC-MaxPower",favorite:!0,inlet1Temp:"25.00 °C",inlet2MassFlow:"0.33 kg/s",inlet2Temp:"30.00 °C",outletPressure:"96500 Pa",pressureDrop:"45.7 Pa",maxVelocity:"6.2 m/s"},{testCase:"FC-MaxPower",favorite:!1,inlet1Temp:"25.00 °C",inlet2MassFlow:"0.43 kg/s",inlet2Temp:"30.00 °C",outletPressure:"96300 Pa",pressureDrop:"46.0 Pa",maxVelocity:"7.9 m/s"}],gC=Array.from({length:13},(r,e)=>({...sg[e%sg.length],index:e+1,name:`Test${e+1}`,selected:e===2}));function Cf({checked:r}){return r?l.jsx("span",{className:"vs-awc-checkbox vs-awc-checkbox--checked","aria-hidden":!0,children:l.jsx("img",{src:Zc.checkboxChecked,alt:"",draggable:!1})}):l.jsx("span",{className:"vs-awc-checkbox","aria-hidden":!0})}function ag({label:r,value:e}){return l.jsxs("div",{className:"vs-axis-select",children:[l.jsx("span",{className:"vs-axis-select__label",children:r}),l.jsxs("button",{type:"button",className:"vs-axis-select__trigger","aria-haspopup":"listbox",children:[l.jsx("span",{className:"vs-axis-select__value",children:e}),l.jsxs("span",{className:"vs-axis-select__menu","aria-hidden":!0,children:[l.jsx("span",{}),l.jsx("span",{}),l.jsx("span",{})]})]})]})}function vC(){return l.jsxs("div",{className:"vs-highlight-select",children:[l.jsx("span",{className:"vs-highlight-select__label",children:"Highlight"}),l.jsxs("button",{type:"button",className:"vs-highlight-select__trigger","aria-haspopup":"listbox",children:[l.jsx("span",{children:"None"}),l.jsxs("span",{className:"vs-axis-select__menu","aria-hidden":!0,children:[l.jsx("span",{}),l.jsx("span",{}),l.jsx("span",{})]})]})]})}function _C(){return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":!0,children:l.jsx("path",{d:"M1.5 5.5H11.5M11.5 5.5L9 3M11.5 5.5L9 8M14.5 10.5H4.5M4.5 10.5L7 8M4.5 10.5L7 13",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})}function SC(){return l.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":!0,children:[l.jsx("rect",{x:"2.5",y:"2.5",width:"11",height:"11",rx:"1",stroke:"currentColor",strokeWidth:"1.2",strokeDasharray:"2 1.5"}),l.jsx("circle",{cx:"7",cy:"7",r:"2.75",stroke:"currentColor",strokeWidth:"1.2"}),l.jsx("path",{d:"M9.2 9.2L12.5 12.5",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]})}function yC(){return l.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":!0,children:[l.jsx("path",{d:"M13.2 8A5.2 5.2 0 1 1 8 2.8",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"}),l.jsx("path",{d:"M8 1.5V4.2H5.3",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})]})}function AC(){return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":!0,children:l.jsx("path",{d:"M9.5 9.5H14V11.5H11.5V14H9.5V9.5ZM2 9.5H6.5V14H4.5V11.5H2V9.5ZM4.5 2H6.5V6.5H2V4.5H4.5V2ZM14 4.5V6.5H9.5V2H11.5V4.5H14Z",fill:"currentColor"})})}function EC(){return l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":!0,children:l.jsx("path",{d:"M12.6667 4.27337L11.7267 3.33337L8.00001 7.06004L4.27334 3.33337L3.33334 4.27337L7.06001 8.00004L3.33334 11.7267L4.27334 12.6667L8.00001 8.94004L11.7267 12.6667L12.6667 11.7267L8.94001 8.00004L12.6667 4.27337Z",fill:"currentColor"})})}function MC(){return l.jsxs("div",{className:"vs-chart-controls",children:[l.jsxs("div",{className:"vs-chart-controls__row",children:[l.jsx(ag,{label:"X",value:"Flow Inlet 1, Temperature"}),l.jsx(ag,{label:"Y",value:"Pressure Drop"}),l.jsx("button",{type:"button",className:"vs-chart-icon-btn","aria-label":"Swap axes",children:l.jsx(_C,{})})]}),l.jsxs("div",{className:"vs-chart-controls__row vs-chart-controls__row--secondary",children:[l.jsx(vC,{}),l.jsx("span",{className:"vs-chart-controls__divider","aria-hidden":!0}),l.jsx("button",{type:"button",className:"vs-chart-icon-btn","aria-label":"Zoom to selection",children:l.jsx(SC,{})}),l.jsx("button",{type:"button",className:"vs-chart-icon-btn","aria-label":"Reset view",children:l.jsx(yC,{})})]})]})}function og({titled:r}){return l.jsxs("section",{className:"vs-chart-card",children:[r?l.jsx("h3",{className:"vs-chart-card__title",children:"Chart View"}):null,l.jsx("div",{className:"vs-chart-card__plot",children:l.jsx("img",{src:Zc.chartImage,alt:"",className:"vs-chart-card__plot-img",draggable:!1})}),l.jsx(MC,{})]})}function wC({onClose:r}){const{dismissPopout:e}=Xi(),t=()=>{e(),r==null||r()};return l.jsx("div",{className:"results-popout-backdrop",role:"presentation",onClick:t,children:l.jsxs("div",{className:"vs-modal",role:"dialog","aria-label":"Variation Study",onClick:s=>s.stopPropagation(),children:[l.jsxs("header",{className:"vs-titlebar",children:[l.jsx("div",{className:"vs-titlebar__title",children:"Variation Study"}),l.jsxs("div",{className:"vs-titlebar__actions",children:[l.jsx("button",{type:"button",className:"vs-titlebar__btn","aria-label":"Restore",children:l.jsx(AC,{})}),l.jsx("button",{type:"button",className:"vs-titlebar__btn",onClick:t,"aria-label":"Close",children:l.jsx(EC,{})})]})]}),l.jsxs("div",{className:"vs-modal__body",children:[l.jsxs("div",{className:"vs-topbar",children:[l.jsx("nav",{className:"vs-nav","aria-label":"Variation Study sections",children:l.jsxs("div",{className:"vs-nav__track",children:[l.jsx("button",{type:"button",className:"vs-nav__item",children:"Parameters"}),l.jsx("button",{type:"button",className:"vs-nav__item vs-nav__item--active",children:"Variations"}),l.jsx("button",{type:"button",className:"vs-nav__item",children:"Optimization"}),l.jsx("button",{type:"button",className:"vs-nav__item",children:"Results Comparison"})]})}),l.jsxs("label",{className:"vs-chart-toggle",children:[l.jsx(Cf,{checked:!0}),l.jsx("span",{children:"Chart View"})]})]}),l.jsxs("div",{className:"vs-main",children:[l.jsxs("section",{className:"vs-variations",children:[l.jsx("h2",{className:"vs-variations__title",children:"Design Variations"}),l.jsx("div",{className:"vs-toolbar-wrap",children:l.jsx("img",{className:"vs-toolbar-img",src:Zc.toolbarRow,alt:"",draggable:!1})}),l.jsx("div",{className:"vs-table-scroll",children:l.jsxs("table",{className:"vs-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{className:"vs-table__col-spacer"}),l.jsx("th",{className:"vs-table__col-check",children:l.jsx(Cf,{checked:!0})}),l.jsx("th",{className:"vs-table__col-status",children:"Status"}),l.jsx("th",{className:"vs-table__col-star"}),l.jsx("th",{children:"Name"}),l.jsx("th",{children:"Test case"}),l.jsx("th",{children:"Flow Inlet 1 Temp"}),l.jsx("th",{children:"Flow Inlet 2 Mass Flow"}),l.jsx("th",{children:"Flow Inlet 2 Temp"}),l.jsx("th",{children:"Flow Outlet 3 Pressure"}),l.jsx("th",{children:"Pressure Drop"}),l.jsx("th",{children:"Max. Velocity"}),l.jsx("th",{className:"vs-table__col-spacer"})]})}),l.jsx("tbody",{children:gC.map(s=>l.jsxs("tr",{className:s.selected?"is-selected":void 0,children:[l.jsx("td",{className:"vs-table__col-spacer"}),l.jsx("td",{children:l.jsx(Cf,{checked:s.selected})}),l.jsx("td",{children:l.jsx("img",{src:Zc.statusSuccess,alt:"",className:"vs-table__status",draggable:!1})}),l.jsx("td",{children:l.jsx("span",{className:`vs-table__star${s.favorite?" is-on":""}`,"aria-hidden":!0,children:"★"})}),l.jsx("td",{children:s.name}),l.jsx("td",{children:s.testCase}),l.jsx("td",{children:s.inlet1Temp}),l.jsx("td",{children:s.inlet2MassFlow}),l.jsx("td",{children:s.inlet2Temp}),l.jsx("td",{children:s.outletPressure}),l.jsx("td",{children:s.pressureDrop}),l.jsx("td",{children:s.maxVelocity}),l.jsx("td",{className:"vs-table__col-spacer"})]},s.index))})]})}),l.jsxs("div",{className:"vs-pagination",children:[l.jsx("button",{type:"button","aria-label":"Previous page",children:"‹"}),l.jsx("span",{children:"1 / 12"}),l.jsx("button",{type:"button","aria-label":"Next page",children:"›"})]})]}),l.jsxs("aside",{className:"vs-charts",children:[l.jsx(og,{titled:!0}),l.jsx(og,{})]})]})]})]})})}function bC(){const[r,e]=it.useState(null),{showPopout:t,selectedBlockId:s}=Vt();return it.useEffect(()=>{s||e(null)},[s]),l.jsxs(l.Fragment,{children:[l.jsx(Kw,{onSelectCore:o=>{e(c=>o?c&&c.idx===o.idx&&Math.abs(c.x-o.x)<.75&&Math.abs(c.y-o.y)<.75?c:o:null)}}),l.jsx("div",{className:"phase1-generated-layer",children:l.jsx(Yb,{qamAnchor:r})}),l.jsx("div",{className:"phase1-manager-layer",children:l.jsx(xC,{})}),t?l.jsx(wC,{}):null]})}function TC(){return l.jsx(__,{children:l.jsx(S_,{children:l.jsx(bC,{})})})}$1.createRoot(document.getElementById("root")).render(l.jsx(TC,{}));
