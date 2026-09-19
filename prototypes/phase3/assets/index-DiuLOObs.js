(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var ju={exports:{}},qa={},$u={exports:{}},Ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function L_(){if(wm)return Ct;wm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,R={};function S(U,Q,Te){this.props=U,this.context=Q,this.refs=R,this.updater=Te||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,Q){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Q,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=S.prototype;function O(U,Q,Te){this.props=U,this.context=Q,this.refs=R,this.updater=Te||y}var I=O.prototype=new x;I.constructor=O,M(I,S.prototype),I.isPureReactComponent=!0;var C=Array.isArray,F=Object.prototype.hasOwnProperty,N={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function T(U,Q,Te){var qe,Ge={},ce=null,_e=null;if(Q!=null)for(qe in Q.ref!==void 0&&(_e=Q.ref),Q.key!==void 0&&(ce=""+Q.key),Q)F.call(Q,qe)&&!k.hasOwnProperty(qe)&&(Ge[qe]=Q[qe]);var pe=arguments.length-2;if(pe===1)Ge.children=Te;else if(1<pe){for(var Pe=Array(pe),Ke=0;Ke<pe;Ke++)Pe[Ke]=arguments[Ke+2];Ge.children=Pe}if(U&&U.defaultProps)for(qe in pe=U.defaultProps,pe)Ge[qe]===void 0&&(Ge[qe]=pe[qe]);return{$$typeof:r,type:U,key:ce,ref:_e,props:Ge,_owner:N.current}}function L(U,Q){return{$$typeof:r,type:U.type,key:Q,ref:U.ref,props:U.props,_owner:U._owner}}function H(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function V(U){var Q={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Te){return Q[Te]})}var Z=/\/+/g;function z(U,Q){return typeof U=="object"&&U!==null&&U.key!=null?V(""+U.key):Q.toString(36)}function te(U,Q,Te,qe,Ge){var ce=typeof U;(ce==="undefined"||ce==="boolean")&&(U=null);var _e=!1;if(U===null)_e=!0;else switch(ce){case"string":case"number":_e=!0;break;case"object":switch(U.$$typeof){case r:case e:_e=!0}}if(_e)return _e=U,Ge=Ge(_e),U=qe===""?"."+z(_e,0):qe,C(Ge)?(Te="",U!=null&&(Te=U.replace(Z,"$&/")+"/"),te(Ge,Q,Te,"",function(Ke){return Ke})):Ge!=null&&(H(Ge)&&(Ge=L(Ge,Te+(!Ge.key||_e&&_e.key===Ge.key?"":(""+Ge.key).replace(Z,"$&/")+"/")+U)),Q.push(Ge)),1;if(_e=0,qe=qe===""?".":qe+":",C(U))for(var pe=0;pe<U.length;pe++){ce=U[pe];var Pe=qe+z(ce,pe);_e+=te(ce,Q,Te,Pe,Ge)}else if(Pe=g(U),typeof Pe=="function")for(U=Pe.call(U),pe=0;!(ce=U.next()).done;)ce=ce.value,Pe=qe+z(ce,pe++),_e+=te(ce,Q,Te,Pe,Ge);else if(ce==="object")throw Q=String(U),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return _e}function W(U,Q,Te){if(U==null)return U;var qe=[],Ge=0;return te(U,qe,"","",function(ce){return Q.call(Te,ce,Ge++)}),qe}function ie(U){if(U._status===-1){var Q=U._result;Q=Q(),Q.then(function(Te){(U._status===0||U._status===-1)&&(U._status=1,U._result=Te)},function(Te){(U._status===0||U._status===-1)&&(U._status=2,U._result=Te)}),U._status===-1&&(U._status=0,U._result=Q)}if(U._status===1)return U._result.default;throw U._result}var $={current:null},Y={transition:null},ee={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:Y,ReactCurrentOwner:N};function le(){throw Error("act(...) is not supported in production builds of React.")}return Ct.Children={map:W,forEach:function(U,Q,Te){W(U,function(){Q.apply(this,arguments)},Te)},count:function(U){var Q=0;return W(U,function(){Q++}),Q},toArray:function(U){return W(U,function(Q){return Q})||[]},only:function(U){if(!H(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Ct.Component=S,Ct.Fragment=t,Ct.Profiler=a,Ct.PureComponent=O,Ct.StrictMode=s,Ct.Suspense=h,Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,Ct.act=le,Ct.cloneElement=function(U,Q,Te){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var qe=M({},U.props),Ge=U.key,ce=U.ref,_e=U._owner;if(Q!=null){if(Q.ref!==void 0&&(ce=Q.ref,_e=N.current),Q.key!==void 0&&(Ge=""+Q.key),U.type&&U.type.defaultProps)var pe=U.type.defaultProps;for(Pe in Q)F.call(Q,Pe)&&!k.hasOwnProperty(Pe)&&(qe[Pe]=Q[Pe]===void 0&&pe!==void 0?pe[Pe]:Q[Pe])}var Pe=arguments.length-2;if(Pe===1)qe.children=Te;else if(1<Pe){pe=Array(Pe);for(var Ke=0;Ke<Pe;Ke++)pe[Ke]=arguments[Ke+2];qe.children=pe}return{$$typeof:r,type:U.type,key:Ge,ref:ce,props:qe,_owner:_e}},Ct.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},Ct.createElement=T,Ct.createFactory=function(U){var Q=T.bind(null,U);return Q.type=U,Q},Ct.createRef=function(){return{current:null}},Ct.forwardRef=function(U){return{$$typeof:f,render:U}},Ct.isValidElement=H,Ct.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:ie}},Ct.memo=function(U,Q){return{$$typeof:p,type:U,compare:Q===void 0?null:Q}},Ct.startTransition=function(U){var Q=Y.transition;Y.transition={};try{U()}finally{Y.transition=Q}},Ct.unstable_act=le,Ct.useCallback=function(U,Q){return $.current.useCallback(U,Q)},Ct.useContext=function(U){return $.current.useContext(U)},Ct.useDebugValue=function(){},Ct.useDeferredValue=function(U){return $.current.useDeferredValue(U)},Ct.useEffect=function(U,Q){return $.current.useEffect(U,Q)},Ct.useId=function(){return $.current.useId()},Ct.useImperativeHandle=function(U,Q,Te){return $.current.useImperativeHandle(U,Q,Te)},Ct.useInsertionEffect=function(U,Q){return $.current.useInsertionEffect(U,Q)},Ct.useLayoutEffect=function(U,Q){return $.current.useLayoutEffect(U,Q)},Ct.useMemo=function(U,Q){return $.current.useMemo(U,Q)},Ct.useReducer=function(U,Q,Te){return $.current.useReducer(U,Q,Te)},Ct.useRef=function(U){return $.current.useRef(U)},Ct.useState=function(U){return $.current.useState(U)},Ct.useSyncExternalStore=function(U,Q,Te){return $.current.useSyncExternalStore(U,Q,Te)},Ct.useTransition=function(){return $.current.useTransition()},Ct.version="18.3.1",Ct}var Am;function Ud(){return Am||(Am=1,$u.exports=L_()),$u.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function N_(){if(Cm)return qa;Cm=1;var r=Ud(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var v,_={},g=null,y=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(y=h.ref);for(v in h)s.call(h,v)&&!l.hasOwnProperty(v)&&(_[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)_[v]===void 0&&(_[v]=h[v]);return{$$typeof:e,type:f,key:g,ref:y,props:_,_owner:a.current}}return qa.Fragment=t,qa.jsx=c,qa.jsxs=c,qa}var Rm;function D_(){return Rm||(Rm=1,ju.exports=N_()),ju.exports}var P=D_(),yl={},Zu={exports:{}},Hn={},Ku={exports:{}},Ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function I_(){return bm||(bm=1,(function(r){function e(Y,ee){var le=Y.length;Y.push(ee);e:for(;0<le;){var U=le-1>>>1,Q=Y[U];if(0<a(Q,ee))Y[U]=ee,Y[le]=Q,le=U;else break e}}function t(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var ee=Y[0],le=Y.pop();if(le!==ee){Y[0]=le;e:for(var U=0,Q=Y.length,Te=Q>>>1;U<Te;){var qe=2*(U+1)-1,Ge=Y[qe],ce=qe+1,_e=Y[ce];if(0>a(Ge,le))ce<Q&&0>a(_e,Ge)?(Y[U]=_e,Y[ce]=le,U=ce):(Y[U]=Ge,Y[qe]=le,U=qe);else if(ce<Q&&0>a(_e,le))Y[U]=_e,Y[ce]=le,U=ce;else break e}}return ee}function a(Y,ee){var le=Y.sortIndex-ee.sortIndex;return le!==0?le:Y.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var h=[],p=[],v=1,_=null,g=3,y=!1,M=!1,R=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(Y){for(var ee=t(p);ee!==null;){if(ee.callback===null)s(p);else if(ee.startTime<=Y)s(p),ee.sortIndex=ee.expirationTime,e(h,ee);else break;ee=t(p)}}function C(Y){if(R=!1,I(Y),!M)if(t(h)!==null)M=!0,ie(F);else{var ee=t(p);ee!==null&&$(C,ee.startTime-Y)}}function F(Y,ee){M=!1,R&&(R=!1,x(T),T=-1),y=!0;var le=g;try{for(I(ee),_=t(h);_!==null&&(!(_.expirationTime>ee)||Y&&!V());){var U=_.callback;if(typeof U=="function"){_.callback=null,g=_.priorityLevel;var Q=U(_.expirationTime<=ee);ee=r.unstable_now(),typeof Q=="function"?_.callback=Q:_===t(h)&&s(h),I(ee)}else s(h);_=t(h)}if(_!==null)var Te=!0;else{var qe=t(p);qe!==null&&$(C,qe.startTime-ee),Te=!1}return Te}finally{_=null,g=le,y=!1}}var N=!1,k=null,T=-1,L=5,H=-1;function V(){return!(r.unstable_now()-H<L)}function Z(){if(k!==null){var Y=r.unstable_now();H=Y;var ee=!0;try{ee=k(!0,Y)}finally{ee?z():(N=!1,k=null)}}else N=!1}var z;if(typeof O=="function")z=function(){O(Z)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,W=te.port2;te.port1.onmessage=Z,z=function(){W.postMessage(null)}}else z=function(){S(Z,0)};function ie(Y){k=Y,N||(N=!0,z())}function $(Y,ee){T=S(function(){Y(r.unstable_now())},ee)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Y){Y.callback=null},r.unstable_continueExecution=function(){M||y||(M=!0,ie(F))},r.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<Y?Math.floor(1e3/Y):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(Y){switch(g){case 1:case 2:case 3:var ee=3;break;default:ee=g}var le=g;g=ee;try{return Y()}finally{g=le}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Y,ee){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var le=g;g=Y;try{return ee()}finally{g=le}},r.unstable_scheduleCallback=function(Y,ee,le){var U=r.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?U+le:U):le=U,Y){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=le+Q,Y={id:v++,callback:ee,priorityLevel:Y,startTime:le,expirationTime:Q,sortIndex:-1},le>U?(Y.sortIndex=le,e(p,Y),t(h)===null&&Y===t(p)&&(R?(x(T),T=-1):R=!0,$(C,le-U))):(Y.sortIndex=Q,e(h,Y),M||y||(M=!0,ie(F))),Y},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(Y){var ee=g;return function(){var le=g;g=ee;try{return Y.apply(this,arguments)}finally{g=le}}}})(Ju)),Ju}var Pm;function U_(){return Pm||(Pm=1,Ku.exports=I_()),Ku.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function F_(){if(Lm)return Hn;Lm=1;var r=Ud(),e=U_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function g(n){return h.call(_,n)?!0:h.call(v,n)?!1:p.test(n)?_[n]=!0:(v[n]=!0,!1)}function y(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,o,u){if(i===null||typeof i>"u"||y(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,o,u,d,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function O(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,O);S[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,O);S[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,O);S[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function I(n,i,o,u){var d=S.hasOwnProperty(i)?S[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,d,u)&&(o=null),u||d===null?g(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var C=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),N=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),V=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),Y=Symbol.iterator;function ee(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var le=Object.assign,U;function Q(n){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Te=!1;function qe(n,i){if(!n||Te)return"";Te=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(fe){var u=fe}Reflect.construct(n,[],i)}else{try{i.call()}catch(fe){u=fe}n.call(i.prototype)}else{try{throw Error()}catch(fe){u=fe}n()}}catch(fe){if(fe&&u&&typeof fe.stack=="string"){for(var d=fe.stack.split(`
`),m=u.stack.split(`
`),w=d.length-1,B=m.length-1;1<=w&&0<=B&&d[w]!==m[B];)B--;for(;1<=w&&0<=B;w--,B--)if(d[w]!==m[B]){if(w!==1||B!==1)do if(w--,B--,0>B||d[w]!==m[B]){var G=`
`+d[w].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=w&&0<=B);break}}}finally{Te=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?Q(n):""}function Ge(n){switch(n.tag){case 5:return Q(n.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return n=qe(n.type,!1),n;case 11:return n=qe(n.type.render,!1),n;case 1:return n=qe(n.type,!0),n;default:return""}}function ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case N:return"Portal";case L:return"Profiler";case T:return"StrictMode";case z:return"Suspense";case te:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case H:return(n._context.displayName||"Context")+".Provider";case Z:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case W:return i=n.displayName||null,i!==null?i:ce(n.type)||"Memo";case ie:i=n._payload,n=n._init;try{return ce(n(i))}catch{}}return null}function _e(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Pe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(n){var i=Pe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){u=""+w,m.call(this,w)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function rt(n){n._valueTracker||(n._valueTracker=Ke(n))}function bt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Pe(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function ft(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ve(n,i){var o=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Se(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=pe(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ye(n,i){i=i.checked,i!=null&&I(n,"checked",i,!1)}function Ie(n,i){ye(n,i);var o=pe(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?lt(n,i.type,o):i.hasOwnProperty("defaultValue")&&lt(n,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ue(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function lt(n,i,o){(i!=="number"||ft(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var $e=Array.isArray;function ut(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+pe(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function mt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if($e(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:pe(o)}}function He(n,i){var o=pe(i.value),u=pe(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function et(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function b(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?b(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var J,re=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(J=J||document.createElement("div"),J.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=J.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function de(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},we=["Webkit","ms","Moz","O"];Object.keys(Ae).forEach(function(n){we.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ae[i]=Ae[n]})});function he(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ae.hasOwnProperty(n)&&Ae[n]?(""+i).trim():i+"px"}function me(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=he(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var Ne=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(n,i){if(i){if(Ne[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ke(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fe=null;function ct(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var dt=null,_t=null,X=null;function De(n){if(n=Na(n)){if(typeof dt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Uo(i),dt(n.stateNode,n.type,i))}}function ge(n){_t?X?X.push(n):X=[n]:_t=n}function Oe(){if(_t){var n=_t,i=X;if(X=_t=null,De(n),i)for(n=0;n<i.length;n++)De(i[n])}}function ze(n,i){return n(i)}function xe(){}var tt=!1;function Je(n,i,o){if(tt)return n(i,o);tt=!0;try{return ze(n,i,o)}finally{tt=!1,(_t!==null||X!==null)&&(xe(),Oe())}}function zt(n,i){var o=n.stateNode;if(o===null)return null;var u=Uo(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Ut=!1;if(f)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){Ut=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{Ut=!1}function Qn(n,i,o,u,d,m,w,B,G){var fe=Array.prototype.slice.call(arguments,3);try{i.apply(o,fe)}catch(Ee){this.onError(Ee)}}var Ur=!1,hs=null,Fr=!1,Or=null,vc={onError:function(n){Ur=!0,hs=n}};function vo(n,i,o,u,d,m,w,B,G){Ur=!1,hs=null,Qn.apply(vc,arguments)}function _o(n,i,o,u,d,m,w,B,G){if(vo.apply(this,arguments),Ur){if(Ur){var fe=hs;Ur=!1,hs=null}else throw Error(t(198));Fr||(Fr=!0,Or=fe)}}function bn(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ps(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function da(n){if(bn(n)!==n)throw Error(t(188))}function xo(n){var i=n.alternate;if(!i){if(i=bn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return da(d),n;if(m===u)return da(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=m;else{for(var w=!1,B=d.child;B;){if(B===o){w=!0,o=d,u=m;break}if(B===u){w=!0,u=d,o=m;break}B=B.sibling}if(!w){for(B=m.child;B;){if(B===o){w=!0,o=m,u=d;break}if(B===u){w=!0,u=m,o=d;break}B=B.sibling}if(!w)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function kr(n){return n=xo(n),n!==null?ha(n):null}function ha(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ha(n);if(i!==null)return i;n=n.sibling}return null}var Br=e.unstable_scheduleCallback,pa=e.unstable_cancelCallback,yo=e.unstable_shouldYield,_c=e.unstable_requestPaint,Zt=e.unstable_now,xc=e.unstable_getCurrentPriorityLevel,ma=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,K=e.unstable_NormalPriority,ue=e.unstable_LowPriority,ae=e.unstable_IdlePriority,se=null,Le=null;function Ye(n){if(Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(se,n,void 0,(n.current.flags&128)===128)}catch{}}var be=Math.clz32?Math.clz32:St,nt=Math.log,ot=Math.LN2;function St(n){return n>>>=0,n===0?32:31-(nt(n)/ot|0)|0}var Mt=64,st=4194304;function Nt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Vt(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,w=o&268435455;if(w!==0){var B=w&~d;B!==0?u=Nt(B):(m&=w,m!==0&&(u=Nt(m)))}else w=o&~d,w!==0?u=Nt(w):m!==0&&(u=Nt(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-be(i),d=1<<o,u|=n[o],i&=~d;return u}function jt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var w=31-be(m),B=1<<w,G=d[w];G===-1?((B&o)===0||(B&u)!==0)&&(d[w]=jt(B,i)):G<=i&&(n.expiredLanes|=B),m&=~B}}function rn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function We(){var n=Mt;return Mt<<=1,(Mt&4194240)===0&&(Mt=64),n}function vn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function wt(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-be(i),n[i]=o}function Un(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-be(o),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~m}}function Fn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-be(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var At=0;function Bi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ft,Wt,ci,kt,ui,Mi=!1,zr=[],rr=null,sr=null,ar=null,ga=new Map,va=new Map,or=[],Q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lh(n,i){switch(n){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":ga.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(i.pointerId)}}function _a(n,i,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Na(i),i!==null&&Wt(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function ev(n,i,o,u,d){switch(i){case"focusin":return rr=_a(rr,n,i,o,u,d),!0;case"dragenter":return sr=_a(sr,n,i,o,u,d),!0;case"mouseover":return ar=_a(ar,n,i,o,u,d),!0;case"pointerover":var m=d.pointerId;return ga.set(m,_a(ga.get(m)||null,n,i,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,va.set(m,_a(va.get(m)||null,n,i,o,u,d)),!0}return!1}function ch(n){var i=Vr(n.target);if(i!==null){var o=bn(i);if(o!==null){if(i=o.tag,i===13){if(i=ps(o),i!==null){n.blockedOn=i,ui(n.priority,function(){ci(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function So(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Sc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Fe=u,o.target.dispatchEvent(u),Fe=null}else return i=Na(o),i!==null&&Wt(i),n.blockedOn=o,!1;i.shift()}return!0}function uh(n,i,o){So(n)&&o.delete(i)}function tv(){Mi=!1,rr!==null&&So(rr)&&(rr=null),sr!==null&&So(sr)&&(sr=null),ar!==null&&So(ar)&&(ar=null),ga.forEach(uh),va.forEach(uh)}function xa(n,i){n.blockedOn===i&&(n.blockedOn=null,Mi||(Mi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,tv)))}function ya(n){function i(d){return xa(d,n)}if(0<zr.length){xa(zr[0],n);for(var o=1;o<zr.length;o++){var u=zr[o];u.blockedOn===n&&(u.blockedOn=null)}}for(rr!==null&&xa(rr,n),sr!==null&&xa(sr,n),ar!==null&&xa(ar,n),ga.forEach(i),va.forEach(i),o=0;o<or.length;o++)u=or[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<or.length&&(o=or[0],o.blockedOn===null);)ch(o),o.blockedOn===null&&or.shift()}var ms=C.ReactCurrentBatchConfig,Mo=!0;function nv(n,i,o,u){var d=At,m=ms.transition;ms.transition=null;try{At=1,yc(n,i,o,u)}finally{At=d,ms.transition=m}}function iv(n,i,o,u){var d=At,m=ms.transition;ms.transition=null;try{At=4,yc(n,i,o,u)}finally{At=d,ms.transition=m}}function yc(n,i,o,u){if(Mo){var d=Sc(n,i,o,u);if(d===null)kc(n,i,u,Eo,o),lh(n,u);else if(ev(d,n,i,o,u))u.stopPropagation();else if(lh(n,u),i&4&&-1<Q0.indexOf(n)){for(;d!==null;){var m=Na(d);if(m!==null&&Ft(m),m=Sc(n,i,o,u),m===null&&kc(n,i,u,Eo,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else kc(n,i,u,null,o)}}var Eo=null;function Sc(n,i,o,u){if(Eo=null,n=ct(u),n=Vr(n),n!==null)if(i=bn(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ps(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Eo=n,null}function fh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xc()){case ma:return 1;case A:return 4;case K:case ue:return 16;case ae:return 536870912;default:return 16}default:return 16}}var lr=null,Mc=null,To=null;function dh(){if(To)return To;var n,i=Mc,o=i.length,u,d="value"in lr?lr.value:lr.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var w=o-n;for(u=1;u<=w&&i[o-u]===d[m-u];u++);return To=d.slice(n,1<u?1-u:void 0)}function wo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ao(){return!0}function hh(){return!1}function Xn(n){function i(o,u,d,m,w){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(o=n[B],this[B]=o?o(m):m[B]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ao:hh,this.isPropagationStopped=hh,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ao)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ao)},persist:function(){},isPersistent:Ao}),i}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ec=Xn(gs),Sa=le({},gs,{view:0,detail:0}),rv=Xn(Sa),Tc,wc,Ma,Co=le({},Sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ma&&(Ma&&n.type==="mousemove"?(Tc=n.screenX-Ma.screenX,wc=n.screenY-Ma.screenY):wc=Tc=0,Ma=n),Tc)},movementY:function(n){return"movementY"in n?n.movementY:wc}}),ph=Xn(Co),sv=le({},Co,{dataTransfer:0}),av=Xn(sv),ov=le({},Sa,{relatedTarget:0}),Ac=Xn(ov),lv=le({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),cv=Xn(lv),uv=le({},gs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),fv=Xn(uv),dv=le({},gs,{data:0}),mh=Xn(dv),hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=mv[n])?!!i[n]:!1}function Cc(){return gv}var vv=le({},Sa,{key:function(n){if(n.key){var i=hv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=wo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?pv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(n){return n.type==="keypress"?wo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?wo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),_v=Xn(vv),xv=le({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gh=Xn(xv),yv=le({},Sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),Sv=Xn(yv),Mv=le({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ev=Xn(Mv),Tv=le({},Co,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),wv=Xn(Tv),Av=[9,13,27,32],Rc=f&&"CompositionEvent"in window,Ea=null;f&&"documentMode"in document&&(Ea=document.documentMode);var Cv=f&&"TextEvent"in window&&!Ea,vh=f&&(!Rc||Ea&&8<Ea&&11>=Ea),_h=" ",xh=!1;function yh(n,i){switch(n){case"keyup":return Av.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var vs=!1;function Rv(n,i){switch(n){case"compositionend":return Sh(i);case"keypress":return i.which!==32?null:(xh=!0,_h);case"textInput":return n=i.data,n===_h&&xh?null:n;default:return null}}function bv(n,i){if(vs)return n==="compositionend"||!Rc&&yh(n,i)?(n=dh(),To=Mc=lr=null,vs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return vh&&i.locale!=="ko"?null:i.data;default:return null}}var Pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Pv[n.type]:i==="textarea"}function Eh(n,i,o,u){ge(u),i=No(i,"onChange"),0<i.length&&(o=new Ec("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var Ta=null,wa=null;function Lv(n){Vh(n,0)}function Ro(n){var i=Ms(n);if(bt(i))return n}function Nv(n,i){if(n==="change")return i}var Th=!1;if(f){var bc;if(f){var Pc="oninput"in document;if(!Pc){var wh=document.createElement("div");wh.setAttribute("oninput","return;"),Pc=typeof wh.oninput=="function"}bc=Pc}else bc=!1;Th=bc&&(!document.documentMode||9<document.documentMode)}function Ah(){Ta&&(Ta.detachEvent("onpropertychange",Ch),wa=Ta=null)}function Ch(n){if(n.propertyName==="value"&&Ro(wa)){var i=[];Eh(i,wa,n,ct(n)),Je(Lv,i)}}function Dv(n,i,o){n==="focusin"?(Ah(),Ta=i,wa=o,Ta.attachEvent("onpropertychange",Ch)):n==="focusout"&&Ah()}function Iv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ro(wa)}function Uv(n,i){if(n==="click")return Ro(i)}function Fv(n,i){if(n==="input"||n==="change")return Ro(i)}function Ov(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var fi=typeof Object.is=="function"?Object.is:Ov;function Aa(n,i){if(fi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!fi(n[d],i[d]))return!1}return!0}function Rh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function bh(n,i){var o=Rh(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Rh(o)}}function Ph(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Ph(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Lh(){for(var n=window,i=ft();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=ft(n.document)}return i}function Lc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function kv(n){var i=Lh(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Ph(o.ownerDocument.documentElement,o)){if(u!==null&&Lc(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=bh(o,m);var w=bh(o,u);d&&w&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Bv=f&&"documentMode"in document&&11>=document.documentMode,_s=null,Nc=null,Ca=null,Dc=!1;function Nh(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Dc||_s==null||_s!==ft(u)||(u=_s,"selectionStart"in u&&Lc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ca&&Aa(Ca,u)||(Ca=u,u=No(Nc,"onSelect"),0<u.length&&(i=new Ec("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=_s)))}function bo(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var xs={animationend:bo("Animation","AnimationEnd"),animationiteration:bo("Animation","AnimationIteration"),animationstart:bo("Animation","AnimationStart"),transitionend:bo("Transition","TransitionEnd")},Ic={},Dh={};f&&(Dh=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function Po(n){if(Ic[n])return Ic[n];if(!xs[n])return n;var i=xs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Dh)return Ic[n]=i[o];return n}var Ih=Po("animationend"),Uh=Po("animationiteration"),Fh=Po("animationstart"),Oh=Po("transitionend"),kh=new Map,Bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(n,i){kh.set(n,i),l(i,[n])}for(var Uc=0;Uc<Bh.length;Uc++){var Fc=Bh[Uc],zv=Fc.toLowerCase(),Vv=Fc[0].toUpperCase()+Fc.slice(1);cr(zv,"on"+Vv)}cr(Ih,"onAnimationEnd"),cr(Uh,"onAnimationIteration"),cr(Fh,"onAnimationStart"),cr("dblclick","onDoubleClick"),cr("focusin","onFocus"),cr("focusout","onBlur"),cr(Oh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function zh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,_o(u,i,void 0,n),n.currentTarget=null}function Vh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var w=u.length-1;0<=w;w--){var B=u[w],G=B.instance,fe=B.currentTarget;if(B=B.listener,G!==m&&d.isPropagationStopped())break e;zh(d,B,fe),m=G}else for(w=0;w<u.length;w++){if(B=u[w],G=B.instance,fe=B.currentTarget,B=B.listener,G!==m&&d.isPropagationStopped())break e;zh(d,B,fe),m=G}}}if(Fr)throw n=Or,Fr=!1,Or=null,n}function Xt(n,i){var o=i[Wc];o===void 0&&(o=i[Wc]=new Set);var u=n+"__bubble";o.has(u)||(Hh(i,n,2,!1),o.add(u))}function Oc(n,i,o){var u=0;i&&(u|=4),Hh(o,n,u,i)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function ba(n){if(!n[Lo]){n[Lo]=!0,s.forEach(function(o){o!=="selectionchange"&&(Hv.has(o)||Oc(o,!1,n),Oc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Lo]||(i[Lo]=!0,Oc("selectionchange",!1,i))}}function Hh(n,i,o,u){switch(fh(i)){case 1:var d=nv;break;case 4:d=iv;break;default:d=yc}o=d.bind(null,i,o,n),d=void 0,!Ut||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function kc(n,i,o,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var B=u.stateNode.containerInfo;if(B===d||B.nodeType===8&&B.parentNode===d)break;if(w===4)for(w=u.return;w!==null;){var G=w.tag;if((G===3||G===4)&&(G=w.stateNode.containerInfo,G===d||G.nodeType===8&&G.parentNode===d))return;w=w.return}for(;B!==null;){if(w=Vr(B),w===null)return;if(G=w.tag,G===5||G===6){u=m=w;continue e}B=B.parentNode}}u=u.return}Je(function(){var fe=m,Ee=ct(o),Ce=[];e:{var Me=kh.get(n);if(Me!==void 0){var Xe=Ec,Qe=n;switch(n){case"keypress":if(wo(o)===0)break e;case"keydown":case"keyup":Xe=_v;break;case"focusin":Qe="focus",Xe=Ac;break;case"focusout":Qe="blur",Xe=Ac;break;case"beforeblur":case"afterblur":Xe=Ac;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Xe=ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Xe=av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Xe=Sv;break;case Ih:case Uh:case Fh:Xe=cv;break;case Oh:Xe=Ev;break;case"scroll":Xe=rv;break;case"wheel":Xe=wv;break;case"copy":case"cut":case"paste":Xe=fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Xe=gh}var it=(i&4)!==0,nn=!it&&n==="scroll",ne=it?Me!==null?Me+"Capture":null:Me;it=[];for(var q=fe,oe;q!==null;){oe=q;var Re=oe.stateNode;if(oe.tag===5&&Re!==null&&(oe=Re,ne!==null&&(Re=zt(q,ne),Re!=null&&it.push(Pa(q,Re,oe)))),nn)break;q=q.return}0<it.length&&(Me=new Xe(Me,Qe,null,o,Ee),Ce.push({event:Me,listeners:it}))}}if((i&7)===0){e:{if(Me=n==="mouseover"||n==="pointerover",Xe=n==="mouseout"||n==="pointerout",Me&&o!==Fe&&(Qe=o.relatedTarget||o.fromElement)&&(Vr(Qe)||Qe[zi]))break e;if((Xe||Me)&&(Me=Ee.window===Ee?Ee:(Me=Ee.ownerDocument)?Me.defaultView||Me.parentWindow:window,Xe?(Qe=o.relatedTarget||o.toElement,Xe=fe,Qe=Qe?Vr(Qe):null,Qe!==null&&(nn=bn(Qe),Qe!==nn||Qe.tag!==5&&Qe.tag!==6)&&(Qe=null)):(Xe=null,Qe=fe),Xe!==Qe)){if(it=ph,Re="onMouseLeave",ne="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(it=gh,Re="onPointerLeave",ne="onPointerEnter",q="pointer"),nn=Xe==null?Me:Ms(Xe),oe=Qe==null?Me:Ms(Qe),Me=new it(Re,q+"leave",Xe,o,Ee),Me.target=nn,Me.relatedTarget=oe,Re=null,Vr(Ee)===fe&&(it=new it(ne,q+"enter",Qe,o,Ee),it.target=oe,it.relatedTarget=nn,Re=it),nn=Re,Xe&&Qe)t:{for(it=Xe,ne=Qe,q=0,oe=it;oe;oe=ys(oe))q++;for(oe=0,Re=ne;Re;Re=ys(Re))oe++;for(;0<q-oe;)it=ys(it),q--;for(;0<oe-q;)ne=ys(ne),oe--;for(;q--;){if(it===ne||ne!==null&&it===ne.alternate)break t;it=ys(it),ne=ys(ne)}it=null}else it=null;Xe!==null&&Gh(Ce,Me,Xe,it,!1),Qe!==null&&nn!==null&&Gh(Ce,nn,Qe,it,!0)}}e:{if(Me=fe?Ms(fe):window,Xe=Me.nodeName&&Me.nodeName.toLowerCase(),Xe==="select"||Xe==="input"&&Me.type==="file")var at=Nv;else if(Mh(Me))if(Th)at=Fv;else{at=Iv;var ht=Dv}else(Xe=Me.nodeName)&&Xe.toLowerCase()==="input"&&(Me.type==="checkbox"||Me.type==="radio")&&(at=Uv);if(at&&(at=at(n,fe))){Eh(Ce,at,o,Ee);break e}ht&&ht(n,Me,fe),n==="focusout"&&(ht=Me._wrapperState)&&ht.controlled&&Me.type==="number"&&lt(Me,"number",Me.value)}switch(ht=fe?Ms(fe):window,n){case"focusin":(Mh(ht)||ht.contentEditable==="true")&&(_s=ht,Nc=fe,Ca=null);break;case"focusout":Ca=Nc=_s=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,Nh(Ce,o,Ee);break;case"selectionchange":if(Bv)break;case"keydown":case"keyup":Nh(Ce,o,Ee)}var pt;if(Rc)e:{switch(n){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else vs?yh(n,o)&&(yt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(yt="onCompositionStart");yt&&(vh&&o.locale!=="ko"&&(vs||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&vs&&(pt=dh()):(lr=Ee,Mc="value"in lr?lr.value:lr.textContent,vs=!0)),ht=No(fe,yt),0<ht.length&&(yt=new mh(yt,n,null,o,Ee),Ce.push({event:yt,listeners:ht}),pt?yt.data=pt:(pt=Sh(o),pt!==null&&(yt.data=pt)))),(pt=Cv?Rv(n,o):bv(n,o))&&(fe=No(fe,"onBeforeInput"),0<fe.length&&(Ee=new mh("onBeforeInput","beforeinput",null,o,Ee),Ce.push({event:Ee,listeners:fe}),Ee.data=pt))}Vh(Ce,i)})}function Pa(n,i,o){return{instance:n,listener:i,currentTarget:o}}function No(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=zt(n,o),m!=null&&u.unshift(Pa(n,m,d)),m=zt(n,i),m!=null&&u.push(Pa(n,m,d))),n=n.return}return u}function ys(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Gh(n,i,o,u,d){for(var m=i._reactName,w=[];o!==null&&o!==u;){var B=o,G=B.alternate,fe=B.stateNode;if(G!==null&&G===u)break;B.tag===5&&fe!==null&&(B=fe,d?(G=zt(o,m),G!=null&&w.unshift(Pa(o,G,B))):d||(G=zt(o,m),G!=null&&w.push(Pa(o,G,B)))),o=o.return}w.length!==0&&n.push({event:i,listeners:w})}var Gv=/\r\n?/g,Wv=/\u0000|\uFFFD/g;function Wh(n){return(typeof n=="string"?n:""+n).replace(Gv,`
`).replace(Wv,"")}function Do(n,i,o){if(i=Wh(i),Wh(n)!==i&&o)throw Error(t(425))}function Io(){}var Bc=null,zc=null;function Vc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Hc=typeof setTimeout=="function"?setTimeout:void 0,Xv=typeof clearTimeout=="function"?clearTimeout:void 0,Xh=typeof Promise=="function"?Promise:void 0,Yv=typeof queueMicrotask=="function"?queueMicrotask:typeof Xh<"u"?function(n){return Xh.resolve(null).then(n).catch(qv)}:Hc;function qv(n){setTimeout(function(){throw n})}function Gc(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),ya(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);ya(i)}function ur(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Yh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),Ei="__reactFiber$"+Ss,La="__reactProps$"+Ss,zi="__reactContainer$"+Ss,Wc="__reactEvents$"+Ss,jv="__reactListeners$"+Ss,$v="__reactHandles$"+Ss;function Vr(n){var i=n[Ei];if(i)return i;for(var o=n.parentNode;o;){if(i=o[zi]||o[Ei]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Yh(n);n!==null;){if(o=n[Ei])return o;n=Yh(n)}return i}n=o,o=n.parentNode}return null}function Na(n){return n=n[Ei]||n[zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Uo(n){return n[La]||null}var Xc=[],Es=-1;function fr(n){return{current:n}}function Yt(n){0>Es||(n.current=Xc[Es],Xc[Es]=null,Es--)}function Ht(n,i){Es++,Xc[Es]=n.current,n.current=i}var dr={},Mn=fr(dr),On=fr(!1),Hr=dr;function Ts(n,i){var o=n.type.contextTypes;if(!o)return dr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function kn(n){return n=n.childContextTypes,n!=null}function Fo(){Yt(On),Yt(Mn)}function qh(n,i,o){if(Mn.current!==dr)throw Error(t(168));Ht(Mn,i),Ht(On,o)}function jh(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,_e(n)||"Unknown",d));return le({},o,u)}function Oo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||dr,Hr=Mn.current,Ht(Mn,n),Ht(On,On.current),!0}function $h(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=jh(n,i,Hr),u.__reactInternalMemoizedMergedChildContext=n,Yt(On),Yt(Mn),Ht(Mn,n)):Yt(On),Ht(On,o)}var Vi=null,ko=!1,Yc=!1;function Zh(n){Vi===null?Vi=[n]:Vi.push(n)}function Zv(n){ko=!0,Zh(n)}function hr(){if(!Yc&&Vi!==null){Yc=!0;var n=0,i=At;try{var o=Vi;for(At=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Vi=null,ko=!1}catch(d){throw Vi!==null&&(Vi=Vi.slice(n+1)),Br(ma,hr),d}finally{At=i,Yc=!1}}return null}var ws=[],As=0,Bo=null,zo=0,ei=[],ti=0,Gr=null,Hi=1,Gi="";function Wr(n,i){ws[As++]=zo,ws[As++]=Bo,Bo=n,zo=i}function Kh(n,i,o){ei[ti++]=Hi,ei[ti++]=Gi,ei[ti++]=Gr,Gr=n;var u=Hi;n=Gi;var d=32-be(u)-1;u&=~(1<<d),o+=1;var m=32-be(i)+d;if(30<m){var w=d-d%5;m=(u&(1<<w)-1).toString(32),u>>=w,d-=w,Hi=1<<32-be(i)+d|o<<d|u,Gi=m+n}else Hi=1<<m|o<<d|u,Gi=n}function qc(n){n.return!==null&&(Wr(n,1),Kh(n,1,0))}function jc(n){for(;n===Bo;)Bo=ws[--As],ws[As]=null,zo=ws[--As],ws[As]=null;for(;n===Gr;)Gr=ei[--ti],ei[ti]=null,Gi=ei[--ti],ei[ti]=null,Hi=ei[--ti],ei[ti]=null}var Yn=null,qn=null,$t=!1,di=null;function Jh(n,i){var o=si(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Qh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Yn=n,qn=ur(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Yn=n,qn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Gr!==null?{id:Hi,overflow:Gi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=si(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Yn=n,qn=null,!0):!1;default:return!1}}function $c(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Zc(n){if($t){var i=qn;if(i){var o=i;if(!Qh(n,i)){if($c(n))throw Error(t(418));i=ur(o.nextSibling);var u=Yn;i&&Qh(n,i)?Jh(u,o):(n.flags=n.flags&-4097|2,$t=!1,Yn=n)}}else{if($c(n))throw Error(t(418));n.flags=n.flags&-4097|2,$t=!1,Yn=n}}}function ep(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Yn=n}function Vo(n){if(n!==Yn)return!1;if(!$t)return ep(n),$t=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Vc(n.type,n.memoizedProps)),i&&(i=qn)){if($c(n))throw tp(),Error(t(418));for(;i;)Jh(n,i),i=ur(i.nextSibling)}if(ep(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){qn=ur(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}qn=null}}else qn=Yn?ur(n.stateNode.nextSibling):null;return!0}function tp(){for(var n=qn;n;)n=ur(n.nextSibling)}function Cs(){qn=Yn=null,$t=!1}function Kc(n){di===null?di=[n]:di.push(n)}var Kv=C.ReactCurrentBatchConfig;function Da(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var B=d.refs;w===null?delete B[m]:B[m]=w},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ho(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function np(n){var i=n._init;return i(n._payload)}function ip(n){function i(ne,q){if(n){var oe=ne.deletions;oe===null?(ne.deletions=[q],ne.flags|=16):oe.push(q)}}function o(ne,q){if(!n)return null;for(;q!==null;)i(ne,q),q=q.sibling;return null}function u(ne,q){for(ne=new Map;q!==null;)q.key!==null?ne.set(q.key,q):ne.set(q.index,q),q=q.sibling;return ne}function d(ne,q){return ne=Sr(ne,q),ne.index=0,ne.sibling=null,ne}function m(ne,q,oe){return ne.index=oe,n?(oe=ne.alternate,oe!==null?(oe=oe.index,oe<q?(ne.flags|=2,q):oe):(ne.flags|=2,q)):(ne.flags|=1048576,q)}function w(ne){return n&&ne.alternate===null&&(ne.flags|=2),ne}function B(ne,q,oe,Re){return q===null||q.tag!==6?(q=Hu(oe,ne.mode,Re),q.return=ne,q):(q=d(q,oe),q.return=ne,q)}function G(ne,q,oe,Re){var at=oe.type;return at===k?Ee(ne,q,oe.props.children,Re,oe.key):q!==null&&(q.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===ie&&np(at)===q.type)?(Re=d(q,oe.props),Re.ref=Da(ne,q,oe),Re.return=ne,Re):(Re=dl(oe.type,oe.key,oe.props,null,ne.mode,Re),Re.ref=Da(ne,q,oe),Re.return=ne,Re)}function fe(ne,q,oe,Re){return q===null||q.tag!==4||q.stateNode.containerInfo!==oe.containerInfo||q.stateNode.implementation!==oe.implementation?(q=Gu(oe,ne.mode,Re),q.return=ne,q):(q=d(q,oe.children||[]),q.return=ne,q)}function Ee(ne,q,oe,Re,at){return q===null||q.tag!==7?(q=Jr(oe,ne.mode,Re,at),q.return=ne,q):(q=d(q,oe),q.return=ne,q)}function Ce(ne,q,oe){if(typeof q=="string"&&q!==""||typeof q=="number")return q=Hu(""+q,ne.mode,oe),q.return=ne,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case F:return oe=dl(q.type,q.key,q.props,null,ne.mode,oe),oe.ref=Da(ne,null,q),oe.return=ne,oe;case N:return q=Gu(q,ne.mode,oe),q.return=ne,q;case ie:var Re=q._init;return Ce(ne,Re(q._payload),oe)}if($e(q)||ee(q))return q=Jr(q,ne.mode,oe,null),q.return=ne,q;Ho(ne,q)}return null}function Me(ne,q,oe,Re){var at=q!==null?q.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number")return at!==null?null:B(ne,q,""+oe,Re);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case F:return oe.key===at?G(ne,q,oe,Re):null;case N:return oe.key===at?fe(ne,q,oe,Re):null;case ie:return at=oe._init,Me(ne,q,at(oe._payload),Re)}if($e(oe)||ee(oe))return at!==null?null:Ee(ne,q,oe,Re,null);Ho(ne,oe)}return null}function Xe(ne,q,oe,Re,at){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return ne=ne.get(oe)||null,B(q,ne,""+Re,at);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case F:return ne=ne.get(Re.key===null?oe:Re.key)||null,G(q,ne,Re,at);case N:return ne=ne.get(Re.key===null?oe:Re.key)||null,fe(q,ne,Re,at);case ie:var ht=Re._init;return Xe(ne,q,oe,ht(Re._payload),at)}if($e(Re)||ee(Re))return ne=ne.get(oe)||null,Ee(q,ne,Re,at,null);Ho(q,Re)}return null}function Qe(ne,q,oe,Re){for(var at=null,ht=null,pt=q,yt=q=0,pn=null;pt!==null&&yt<oe.length;yt++){pt.index>yt?(pn=pt,pt=null):pn=pt.sibling;var It=Me(ne,pt,oe[yt],Re);if(It===null){pt===null&&(pt=pn);break}n&&pt&&It.alternate===null&&i(ne,pt),q=m(It,q,yt),ht===null?at=It:ht.sibling=It,ht=It,pt=pn}if(yt===oe.length)return o(ne,pt),$t&&Wr(ne,yt),at;if(pt===null){for(;yt<oe.length;yt++)pt=Ce(ne,oe[yt],Re),pt!==null&&(q=m(pt,q,yt),ht===null?at=pt:ht.sibling=pt,ht=pt);return $t&&Wr(ne,yt),at}for(pt=u(ne,pt);yt<oe.length;yt++)pn=Xe(pt,ne,yt,oe[yt],Re),pn!==null&&(n&&pn.alternate!==null&&pt.delete(pn.key===null?yt:pn.key),q=m(pn,q,yt),ht===null?at=pn:ht.sibling=pn,ht=pn);return n&&pt.forEach(function(Mr){return i(ne,Mr)}),$t&&Wr(ne,yt),at}function it(ne,q,oe,Re){var at=ee(oe);if(typeof at!="function")throw Error(t(150));if(oe=at.call(oe),oe==null)throw Error(t(151));for(var ht=at=null,pt=q,yt=q=0,pn=null,It=oe.next();pt!==null&&!It.done;yt++,It=oe.next()){pt.index>yt?(pn=pt,pt=null):pn=pt.sibling;var Mr=Me(ne,pt,It.value,Re);if(Mr===null){pt===null&&(pt=pn);break}n&&pt&&Mr.alternate===null&&i(ne,pt),q=m(Mr,q,yt),ht===null?at=Mr:ht.sibling=Mr,ht=Mr,pt=pn}if(It.done)return o(ne,pt),$t&&Wr(ne,yt),at;if(pt===null){for(;!It.done;yt++,It=oe.next())It=Ce(ne,It.value,Re),It!==null&&(q=m(It,q,yt),ht===null?at=It:ht.sibling=It,ht=It);return $t&&Wr(ne,yt),at}for(pt=u(ne,pt);!It.done;yt++,It=oe.next())It=Xe(pt,ne,yt,It.value,Re),It!==null&&(n&&It.alternate!==null&&pt.delete(It.key===null?yt:It.key),q=m(It,q,yt),ht===null?at=It:ht.sibling=It,ht=It);return n&&pt.forEach(function(P_){return i(ne,P_)}),$t&&Wr(ne,yt),at}function nn(ne,q,oe,Re){if(typeof oe=="object"&&oe!==null&&oe.type===k&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case F:e:{for(var at=oe.key,ht=q;ht!==null;){if(ht.key===at){if(at=oe.type,at===k){if(ht.tag===7){o(ne,ht.sibling),q=d(ht,oe.props.children),q.return=ne,ne=q;break e}}else if(ht.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===ie&&np(at)===ht.type){o(ne,ht.sibling),q=d(ht,oe.props),q.ref=Da(ne,ht,oe),q.return=ne,ne=q;break e}o(ne,ht);break}else i(ne,ht);ht=ht.sibling}oe.type===k?(q=Jr(oe.props.children,ne.mode,Re,oe.key),q.return=ne,ne=q):(Re=dl(oe.type,oe.key,oe.props,null,ne.mode,Re),Re.ref=Da(ne,q,oe),Re.return=ne,ne=Re)}return w(ne);case N:e:{for(ht=oe.key;q!==null;){if(q.key===ht)if(q.tag===4&&q.stateNode.containerInfo===oe.containerInfo&&q.stateNode.implementation===oe.implementation){o(ne,q.sibling),q=d(q,oe.children||[]),q.return=ne,ne=q;break e}else{o(ne,q);break}else i(ne,q);q=q.sibling}q=Gu(oe,ne.mode,Re),q.return=ne,ne=q}return w(ne);case ie:return ht=oe._init,nn(ne,q,ht(oe._payload),Re)}if($e(oe))return Qe(ne,q,oe,Re);if(ee(oe))return it(ne,q,oe,Re);Ho(ne,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"?(oe=""+oe,q!==null&&q.tag===6?(o(ne,q.sibling),q=d(q,oe),q.return=ne,ne=q):(o(ne,q),q=Hu(oe,ne.mode,Re),q.return=ne,ne=q),w(ne)):o(ne,q)}return nn}var Rs=ip(!0),rp=ip(!1),Go=fr(null),Wo=null,bs=null,Jc=null;function Qc(){Jc=bs=Wo=null}function eu(n){var i=Go.current;Yt(Go),n._currentValue=i}function tu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Ps(n,i){Wo=n,Jc=bs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Bn=!0),n.firstContext=null)}function ni(n){var i=n._currentValue;if(Jc!==n)if(n={context:n,memoizedValue:i,next:null},bs===null){if(Wo===null)throw Error(t(308));bs=n,Wo.dependencies={lanes:0,firstContext:n}}else bs=bs.next=n;return i}var Xr=null;function nu(n){Xr===null?Xr=[n]:Xr.push(n)}function sp(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,nu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Wi(n,u)}function Wi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var pr=!1;function iu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ap(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function mr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Dt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Wi(n,o)}return d=u.interleaved,d===null?(i.next=i,nu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Wi(n,o)}function Xo(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Fn(n,o)}}function op(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var w={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=w:m=m.next=w,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Yo(n,i,o,u){var d=n.updateQueue;pr=!1;var m=d.firstBaseUpdate,w=d.lastBaseUpdate,B=d.shared.pending;if(B!==null){d.shared.pending=null;var G=B,fe=G.next;G.next=null,w===null?m=fe:w.next=fe,w=G;var Ee=n.alternate;Ee!==null&&(Ee=Ee.updateQueue,B=Ee.lastBaseUpdate,B!==w&&(B===null?Ee.firstBaseUpdate=fe:B.next=fe,Ee.lastBaseUpdate=G))}if(m!==null){var Ce=d.baseState;w=0,Ee=fe=G=null,B=m;do{var Me=B.lane,Xe=B.eventTime;if((u&Me)===Me){Ee!==null&&(Ee=Ee.next={eventTime:Xe,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var Qe=n,it=B;switch(Me=i,Xe=o,it.tag){case 1:if(Qe=it.payload,typeof Qe=="function"){Ce=Qe.call(Xe,Ce,Me);break e}Ce=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=it.payload,Me=typeof Qe=="function"?Qe.call(Xe,Ce,Me):Qe,Me==null)break e;Ce=le({},Ce,Me);break e;case 2:pr=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,Me=d.effects,Me===null?d.effects=[B]:Me.push(B))}else Xe={eventTime:Xe,lane:Me,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Ee===null?(fe=Ee=Xe,G=Ce):Ee=Ee.next=Xe,w|=Me;if(B=B.next,B===null){if(B=d.shared.pending,B===null)break;Me=B,B=Me.next,Me.next=null,d.lastBaseUpdate=Me,d.shared.pending=null}}while(!0);if(Ee===null&&(G=Ce),d.baseState=G,d.firstBaseUpdate=fe,d.lastBaseUpdate=Ee,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);jr|=w,n.lanes=w,n.memoizedState=Ce}}function lp(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Ia={},Ti=fr(Ia),Ua=fr(Ia),Fa=fr(Ia);function Yr(n){if(n===Ia)throw Error(t(174));return n}function ru(n,i){switch(Ht(Fa,i),Ht(Ua,n),Ht(Ti,Ia),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=E(i,n)}Yt(Ti),Ht(Ti,i)}function Ls(){Yt(Ti),Yt(Ua),Yt(Fa)}function cp(n){Yr(Fa.current);var i=Yr(Ti.current),o=E(i,n.type);i!==o&&(Ht(Ua,n),Ht(Ti,o))}function su(n){Ua.current===n&&(Yt(Ti),Yt(Ua))}var Kt=fr(0);function qo(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var au=[];function ou(){for(var n=0;n<au.length;n++)au[n]._workInProgressVersionPrimary=null;au.length=0}var jo=C.ReactCurrentDispatcher,lu=C.ReactCurrentBatchConfig,qr=0,Jt=null,on=null,dn=null,$o=!1,Oa=!1,ka=0,Jv=0;function En(){throw Error(t(321))}function cu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!fi(n[o],i[o]))return!1;return!0}function uu(n,i,o,u,d,m){if(qr=m,Jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,jo.current=n===null||n.memoizedState===null?n_:i_,n=o(u,d),Oa){m=0;do{if(Oa=!1,ka=0,25<=m)throw Error(t(301));m+=1,dn=on=null,i.updateQueue=null,jo.current=r_,n=o(u,d)}while(Oa)}if(jo.current=Jo,i=on!==null&&on.next!==null,qr=0,dn=on=Jt=null,$o=!1,i)throw Error(t(300));return n}function fu(){var n=ka!==0;return ka=0,n}function wi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Jt.memoizedState=dn=n:dn=dn.next=n,dn}function ii(){if(on===null){var n=Jt.alternate;n=n!==null?n.memoizedState:null}else n=on.next;var i=dn===null?Jt.memoizedState:dn.next;if(i!==null)dn=i,on=n;else{if(n===null)throw Error(t(310));on=n,n={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},dn===null?Jt.memoizedState=dn=n:dn=dn.next=n}return dn}function Ba(n,i){return typeof i=="function"?i(n):i}function du(n){var i=ii(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=on,d=u.baseQueue,m=o.pending;if(m!==null){if(d!==null){var w=d.next;d.next=m.next,m.next=w}u.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,u=u.baseState;var B=w=null,G=null,fe=m;do{var Ee=fe.lane;if((qr&Ee)===Ee)G!==null&&(G=G.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),u=fe.hasEagerState?fe.eagerState:n(u,fe.action);else{var Ce={lane:Ee,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};G===null?(B=G=Ce,w=u):G=G.next=Ce,Jt.lanes|=Ee,jr|=Ee}fe=fe.next}while(fe!==null&&fe!==m);G===null?w=u:G.next=B,fi(u,i.memoizedState)||(Bn=!0),i.memoizedState=u,i.baseState=w,i.baseQueue=G,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do m=d.lane,Jt.lanes|=m,jr|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function hu(n){var i=ii(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var w=d=d.next;do m=n(m,w.action),w=w.next;while(w!==d);fi(m,i.memoizedState)||(Bn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function up(){}function fp(n,i){var o=Jt,u=ii(),d=i(),m=!fi(u.memoizedState,d);if(m&&(u.memoizedState=d,Bn=!0),u=u.queue,pu(pp.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||dn!==null&&dn.memoizedState.tag&1){if(o.flags|=2048,za(9,hp.bind(null,o,u,d,i),void 0,null),hn===null)throw Error(t(349));(qr&30)!==0||dp(o,i,d)}return d}function dp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Jt.updateQueue,i===null?(i={lastEffect:null,stores:null},Jt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function hp(n,i,o,u){i.value=o,i.getSnapshot=u,mp(i)&&gp(n)}function pp(n,i,o){return o(function(){mp(i)&&gp(n)})}function mp(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!fi(n,o)}catch{return!0}}function gp(n){var i=Wi(n,1);i!==null&&gi(i,n,1,-1)}function vp(n){var i=wi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:n},i.queue=n,n=n.dispatch=t_.bind(null,Jt,n),[i.memoizedState,n]}function za(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Jt.updateQueue,i===null?(i={lastEffect:null,stores:null},Jt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function _p(){return ii().memoizedState}function Zo(n,i,o,u){var d=wi();Jt.flags|=n,d.memoizedState=za(1|i,o,void 0,u===void 0?null:u)}function Ko(n,i,o,u){var d=ii();u=u===void 0?null:u;var m=void 0;if(on!==null){var w=on.memoizedState;if(m=w.destroy,u!==null&&cu(u,w.deps)){d.memoizedState=za(i,o,m,u);return}}Jt.flags|=n,d.memoizedState=za(1|i,o,m,u)}function xp(n,i){return Zo(8390656,8,n,i)}function pu(n,i){return Ko(2048,8,n,i)}function yp(n,i){return Ko(4,2,n,i)}function Sp(n,i){return Ko(4,4,n,i)}function Mp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Ep(n,i,o){return o=o!=null?o.concat([n]):null,Ko(4,4,Mp.bind(null,i,n),o)}function mu(){}function Tp(n,i){var o=ii();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&cu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function wp(n,i){var o=ii();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&cu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Ap(n,i,o){return(qr&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=o):(fi(o,i)||(o=We(),Jt.lanes|=o,jr|=o,n.baseState=!0),i)}function Qv(n,i){var o=At;At=o!==0&&4>o?o:4,n(!0);var u=lu.transition;lu.transition={};try{n(!1),i()}finally{At=o,lu.transition=u}}function Cp(){return ii().memoizedState}function e_(n,i,o){var u=xr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Rp(n))bp(i,o);else if(o=sp(n,i,o,u),o!==null){var d=Ln();gi(o,n,u,d),Pp(o,i,u)}}function t_(n,i,o){var u=xr(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Rp(n))bp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,B=m(w,o);if(d.hasEagerState=!0,d.eagerState=B,fi(B,w)){var G=i.interleaved;G===null?(d.next=d,nu(i)):(d.next=G.next,G.next=d),i.interleaved=d;return}}catch{}finally{}o=sp(n,i,d,u),o!==null&&(d=Ln(),gi(o,n,u,d),Pp(o,i,u))}}function Rp(n){var i=n.alternate;return n===Jt||i!==null&&i===Jt}function bp(n,i){Oa=$o=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Pp(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Fn(n,o)}}var Jo={readContext:ni,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},n_={readContext:ni,useCallback:function(n,i){return wi().memoizedState=[n,i===void 0?null:i],n},useContext:ni,useEffect:xp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Zo(4194308,4,Mp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Zo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Zo(4,2,n,i)},useMemo:function(n,i){var o=wi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=wi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=e_.bind(null,Jt,n),[u.memoizedState,n]},useRef:function(n){var i=wi();return n={current:n},i.memoizedState=n},useState:vp,useDebugValue:mu,useDeferredValue:function(n){return wi().memoizedState=n},useTransition:function(){var n=vp(!1),i=n[0];return n=Qv.bind(null,n[1]),wi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Jt,d=wi();if($t){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),hn===null)throw Error(t(349));(qr&30)!==0||dp(u,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,xp(pp.bind(null,u,m,n),[n]),u.flags|=2048,za(9,hp.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=wi(),i=hn.identifierPrefix;if($t){var o=Gi,u=Hi;o=(u&~(1<<32-be(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=ka++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Jv++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},i_={readContext:ni,useCallback:Tp,useContext:ni,useEffect:pu,useImperativeHandle:Ep,useInsertionEffect:yp,useLayoutEffect:Sp,useMemo:wp,useReducer:du,useRef:_p,useState:function(){return du(Ba)},useDebugValue:mu,useDeferredValue:function(n){var i=ii();return Ap(i,on.memoizedState,n)},useTransition:function(){var n=du(Ba)[0],i=ii().memoizedState;return[n,i]},useMutableSource:up,useSyncExternalStore:fp,useId:Cp,unstable_isNewReconciler:!1},r_={readContext:ni,useCallback:Tp,useContext:ni,useEffect:pu,useImperativeHandle:Ep,useInsertionEffect:yp,useLayoutEffect:Sp,useMemo:wp,useReducer:hu,useRef:_p,useState:function(){return hu(Ba)},useDebugValue:mu,useDeferredValue:function(n){var i=ii();return on===null?i.memoizedState=n:Ap(i,on.memoizedState,n)},useTransition:function(){var n=hu(Ba)[0],i=ii().memoizedState;return[n,i]},useMutableSource:up,useSyncExternalStore:fp,useId:Cp,unstable_isNewReconciler:!1};function hi(n,i){if(n&&n.defaultProps){i=le({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function gu(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:le({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Qo={isMounted:function(n){return(n=n._reactInternals)?bn(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Ln(),d=xr(n),m=Xi(u,d);m.payload=i,o!=null&&(m.callback=o),i=mr(n,m,d),i!==null&&(gi(i,n,d,u),Xo(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Ln(),d=xr(n),m=Xi(u,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=mr(n,m,d),i!==null&&(gi(i,n,d,u),Xo(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Ln(),u=xr(n),d=Xi(o,u);d.tag=2,i!=null&&(d.callback=i),i=mr(n,d,u),i!==null&&(gi(i,n,u,o),Xo(i,n,u))}};function Lp(n,i,o,u,d,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,w):i.prototype&&i.prototype.isPureReactComponent?!Aa(o,u)||!Aa(d,m):!0}function Np(n,i,o){var u=!1,d=dr,m=i.contextType;return typeof m=="object"&&m!==null?m=ni(m):(d=kn(i)?Hr:Mn.current,u=i.contextTypes,m=(u=u!=null)?Ts(n,d):dr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qo,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Dp(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Qo.enqueueReplaceState(i,i.state,null)}function vu(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},iu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=ni(m):(m=kn(i)?Hr:Mn.current,d.context=Ts(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(gu(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Qo.enqueueReplaceState(d,d.state,null),Yo(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ns(n,i){try{var o="",u=i;do o+=Ge(u),u=u.return;while(u);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function _u(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function xu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var s_=typeof WeakMap=="function"?WeakMap:Map;function Ip(n,i,o){o=Xi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){al||(al=!0,Iu=u),xu(n,i)},o}function Up(n,i,o){o=Xi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){xu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){xu(n,i),typeof u!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),o}function Fp(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new s_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=x_.bind(null,n,i,o),i.then(n,n))}function Op(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function kp(n,i,o,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Xi(-1,1),i.tag=2,mr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var a_=C.ReactCurrentOwner,Bn=!1;function Pn(n,i,o,u){i.child=n===null?rp(i,null,o,u):Rs(i,n.child,o,u)}function Bp(n,i,o,u,d){o=o.render;var m=i.ref;return Ps(i,d),u=uu(n,i,o,u,m,d),o=fu(),n!==null&&!Bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Yi(n,i,d)):($t&&o&&qc(i),i.flags|=1,Pn(n,i,u,d),i.child)}function zp(n,i,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!Vu(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,Vp(n,i,m,u,d)):(n=dl(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var w=m.memoizedProps;if(o=o.compare,o=o!==null?o:Aa,o(w,u)&&n.ref===i.ref)return Yi(n,i,d)}return i.flags|=1,n=Sr(m,u),n.ref=i.ref,n.return=i,i.child=n}function Vp(n,i,o,u,d){if(n!==null){var m=n.memoizedProps;if(Aa(m,u)&&n.ref===i.ref)if(Bn=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Bn=!0);else return i.lanes=n.lanes,Yi(n,i,d)}return yu(n,i,o,u,d)}function Hp(n,i,o){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(Is,jn),jn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ht(Is,jn),jn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,Ht(Is,jn),jn|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,Ht(Is,jn),jn|=u;return Pn(n,i,d,o),i.child}function Gp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function yu(n,i,o,u,d){var m=kn(o)?Hr:Mn.current;return m=Ts(i,m),Ps(i,d),o=uu(n,i,o,u,m,d),u=fu(),n!==null&&!Bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Yi(n,i,d)):($t&&u&&qc(i),i.flags|=1,Pn(n,i,o,d),i.child)}function Wp(n,i,o,u,d){if(kn(o)){var m=!0;Oo(i)}else m=!1;if(Ps(i,d),i.stateNode===null)tl(n,i),Np(i,o,u),vu(i,o,u,d),u=!0;else if(n===null){var w=i.stateNode,B=i.memoizedProps;w.props=B;var G=w.context,fe=o.contextType;typeof fe=="object"&&fe!==null?fe=ni(fe):(fe=kn(o)?Hr:Mn.current,fe=Ts(i,fe));var Ee=o.getDerivedStateFromProps,Ce=typeof Ee=="function"||typeof w.getSnapshotBeforeUpdate=="function";Ce||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(B!==u||G!==fe)&&Dp(i,w,u,fe),pr=!1;var Me=i.memoizedState;w.state=Me,Yo(i,u,w,d),G=i.memoizedState,B!==u||Me!==G||On.current||pr?(typeof Ee=="function"&&(gu(i,o,Ee,u),G=i.memoizedState),(B=pr||Lp(i,o,B,u,Me,G,fe))?(Ce||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=G),w.props=u,w.state=G,w.context=fe,u=B):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{w=i.stateNode,ap(n,i),B=i.memoizedProps,fe=i.type===i.elementType?B:hi(i.type,B),w.props=fe,Ce=i.pendingProps,Me=w.context,G=o.contextType,typeof G=="object"&&G!==null?G=ni(G):(G=kn(o)?Hr:Mn.current,G=Ts(i,G));var Xe=o.getDerivedStateFromProps;(Ee=typeof Xe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(B!==Ce||Me!==G)&&Dp(i,w,u,G),pr=!1,Me=i.memoizedState,w.state=Me,Yo(i,u,w,d);var Qe=i.memoizedState;B!==Ce||Me!==Qe||On.current||pr?(typeof Xe=="function"&&(gu(i,o,Xe,u),Qe=i.memoizedState),(fe=pr||Lp(i,o,fe,u,Me,Qe,G)||!1)?(Ee||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,Qe,G),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,Qe,G)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||B===n.memoizedProps&&Me===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Me===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Qe),w.props=u,w.state=Qe,w.context=G,u=fe):(typeof w.componentDidUpdate!="function"||B===n.memoizedProps&&Me===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Me===n.memoizedState||(i.flags|=1024),u=!1)}return Su(n,i,o,u,m,d)}function Su(n,i,o,u,d,m){Gp(n,i);var w=(i.flags&128)!==0;if(!u&&!w)return d&&$h(i,o,!1),Yi(n,i,m);u=i.stateNode,a_.current=i;var B=w&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&w?(i.child=Rs(i,n.child,null,m),i.child=Rs(i,null,B,m)):Pn(n,i,B,m),i.memoizedState=u.state,d&&$h(i,o,!0),i.child}function Xp(n){var i=n.stateNode;i.pendingContext?qh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&qh(n,i.context,!1),ru(n,i.containerInfo)}function Yp(n,i,o,u,d){return Cs(),Kc(d),i.flags|=256,Pn(n,i,o,u),i.child}var Mu={dehydrated:null,treeContext:null,retryLane:0};function Eu(n){return{baseLanes:n,cachePool:null,transitions:null}}function qp(n,i,o){var u=i.pendingProps,d=Kt.current,m=!1,w=(i.flags&128)!==0,B;if((B=w)||(B=n!==null&&n.memoizedState===null?!1:(d&2)!==0),B?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ht(Kt,d&1),n===null)return Zc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=u.children,n=u.fallback,m?(u=i.mode,m=i.child,w={mode:"hidden",children:w},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=hl(w,u,0,null),n=Jr(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Eu(o),i.memoizedState=Mu,n):Tu(i,w));if(d=n.memoizedState,d!==null&&(B=d.dehydrated,B!==null))return o_(n,i,w,u,B,d,o);if(m){m=u.fallback,w=i.mode,d=n.child,B=d.sibling;var G={mode:"hidden",children:u.children};return(w&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=G,i.deletions=null):(u=Sr(d,G),u.subtreeFlags=d.subtreeFlags&14680064),B!==null?m=Sr(B,m):(m=Jr(m,w,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,w=n.child.memoizedState,w=w===null?Eu(o):{baseLanes:w.baseLanes|o,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=n.childLanes&~o,i.memoizedState=Mu,u}return m=n.child,n=m.sibling,u=Sr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function Tu(n,i){return i=hl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function el(n,i,o,u){return u!==null&&Kc(u),Rs(i,n.child,null,o),n=Tu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function o_(n,i,o,u,d,m,w){if(o)return i.flags&256?(i.flags&=-257,u=_u(Error(t(422))),el(n,i,w,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=hl({mode:"visible",children:u.children},d,0,null),m=Jr(m,d,w,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&Rs(i,n.child,null,w),i.child.memoizedState=Eu(w),i.memoizedState=Mu,m);if((i.mode&1)===0)return el(n,i,w,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var B=u.dgst;return u=B,m=Error(t(419)),u=_u(m,u,void 0),el(n,i,w,u)}if(B=(w&n.childLanes)!==0,Bn||B){if(u=hn,u!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|w))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Wi(n,d),gi(u,n,d,-1))}return zu(),u=_u(Error(t(421))),el(n,i,w,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=y_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,qn=ur(d.nextSibling),Yn=i,$t=!0,di=null,n!==null&&(ei[ti++]=Hi,ei[ti++]=Gi,ei[ti++]=Gr,Hi=n.id,Gi=n.overflow,Gr=i),i=Tu(i,u.children),i.flags|=4096,i)}function jp(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),tu(n.return,i,o)}function wu(n,i,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function $p(n,i,o){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(Pn(n,i,u.children,o),u=Kt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&jp(n,o,i);else if(n.tag===19)jp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ht(Kt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&qo(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),wu(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&qo(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}wu(i,!0,o,null,m);break;case"together":wu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function tl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Yi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),jr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Sr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Sr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function l_(n,i,o){switch(i.tag){case 3:Xp(i),Cs();break;case 5:cp(i);break;case 1:kn(i.type)&&Oo(i);break;case 4:ru(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Ht(Go,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ht(Kt,Kt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?qp(n,i,o):(Ht(Kt,Kt.current&1),n=Yi(n,i,o),n!==null?n.sibling:null);Ht(Kt,Kt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return $p(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ht(Kt,Kt.current),u)break;return null;case 22:case 23:return i.lanes=0,Hp(n,i,o)}return Yi(n,i,o)}var Zp,Au,Kp,Jp;Zp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Au=function(){},Kp=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Yr(Ti.current);var m=null;switch(o){case"input":d=ve(n,d),u=ve(n,u),m=[];break;case"select":d=le({},d,{value:void 0}),u=le({},u,{value:void 0}),m=[];break;case"textarea":d=mt(n,d),u=mt(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Io)}je(o,u);var w;o=null;for(fe in d)if(!u.hasOwnProperty(fe)&&d.hasOwnProperty(fe)&&d[fe]!=null)if(fe==="style"){var B=d[fe];for(w in B)B.hasOwnProperty(w)&&(o||(o={}),o[w]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(a.hasOwnProperty(fe)?m||(m=[]):(m=m||[]).push(fe,null));for(fe in u){var G=u[fe];if(B=d!=null?d[fe]:void 0,u.hasOwnProperty(fe)&&G!==B&&(G!=null||B!=null))if(fe==="style")if(B){for(w in B)!B.hasOwnProperty(w)||G&&G.hasOwnProperty(w)||(o||(o={}),o[w]="");for(w in G)G.hasOwnProperty(w)&&B[w]!==G[w]&&(o||(o={}),o[w]=G[w])}else o||(m||(m=[]),m.push(fe,o)),o=G;else fe==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,B=B?B.__html:void 0,G!=null&&B!==G&&(m=m||[]).push(fe,G)):fe==="children"?typeof G!="string"&&typeof G!="number"||(m=m||[]).push(fe,""+G):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(a.hasOwnProperty(fe)?(G!=null&&fe==="onScroll"&&Xt("scroll",n),m||B===G||(m=[])):(m=m||[]).push(fe,G))}o&&(m=m||[]).push("style",o);var fe=m;(i.updateQueue=fe)&&(i.flags|=4)}},Jp=function(n,i,o,u){o!==u&&(i.flags|=4)};function Va(n,i){if(!$t)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Tn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function c_(n,i,o){var u=i.pendingProps;switch(jc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(i),null;case 1:return kn(i.type)&&Fo(),Tn(i),null;case 3:return u=i.stateNode,Ls(),Yt(On),Yt(Mn),ou(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Vo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,di!==null&&(Ou(di),di=null))),Au(n,i),Tn(i),null;case 5:su(i);var d=Yr(Fa.current);if(o=i.type,n!==null&&i.stateNode!=null)Kp(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Tn(i),null}if(n=Yr(Ti.current),Vo(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[Ei]=i,u[La]=m,n=(i.mode&1)!==0,o){case"dialog":Xt("cancel",u),Xt("close",u);break;case"iframe":case"object":case"embed":Xt("load",u);break;case"video":case"audio":for(d=0;d<Ra.length;d++)Xt(Ra[d],u);break;case"source":Xt("error",u);break;case"img":case"image":case"link":Xt("error",u),Xt("load",u);break;case"details":Xt("toggle",u);break;case"input":Se(u,m),Xt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Xt("invalid",u);break;case"textarea":D(u,m),Xt("invalid",u)}je(o,m),d=null;for(var w in m)if(m.hasOwnProperty(w)){var B=m[w];w==="children"?typeof B=="string"?u.textContent!==B&&(m.suppressHydrationWarning!==!0&&Do(u.textContent,B,n),d=["children",B]):typeof B=="number"&&u.textContent!==""+B&&(m.suppressHydrationWarning!==!0&&Do(u.textContent,B,n),d=["children",""+B]):a.hasOwnProperty(w)&&B!=null&&w==="onScroll"&&Xt("scroll",u)}switch(o){case"input":rt(u),Ue(u,m,!0);break;case"textarea":rt(u),et(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Io)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=b(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=w.createElement(o,{is:u.is}):(n=w.createElement(o),o==="select"&&(w=n,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):n=w.createElementNS(n,o),n[Ei]=i,n[La]=u,Zp(n,i,!1,!1),i.stateNode=n;e:{switch(w=ke(o,u),o){case"dialog":Xt("cancel",n),Xt("close",n),d=u;break;case"iframe":case"object":case"embed":Xt("load",n),d=u;break;case"video":case"audio":for(d=0;d<Ra.length;d++)Xt(Ra[d],n);d=u;break;case"source":Xt("error",n),d=u;break;case"img":case"image":case"link":Xt("error",n),Xt("load",n),d=u;break;case"details":Xt("toggle",n),d=u;break;case"input":Se(n,u),d=ve(n,u),Xt("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=le({},u,{value:void 0}),Xt("invalid",n);break;case"textarea":D(n,u),d=mt(n,u),Xt("invalid",n);break;default:d=u}je(o,d),B=d;for(m in B)if(B.hasOwnProperty(m)){var G=B[m];m==="style"?me(n,G):m==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&re(n,G)):m==="children"?typeof G=="string"?(o!=="textarea"||G!=="")&&de(n,G):typeof G=="number"&&de(n,""+G):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?G!=null&&m==="onScroll"&&Xt("scroll",n):G!=null&&I(n,m,G,w))}switch(o){case"input":rt(n),Ue(n,u,!1);break;case"textarea":rt(n),et(n);break;case"option":u.value!=null&&n.setAttribute("value",""+pe(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?ut(n,!!u.multiple,m,!1):u.defaultValue!=null&&ut(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Io)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Tn(i),null;case 6:if(n&&i.stateNode!=null)Jp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Yr(Fa.current),Yr(Ti.current),Vo(i)){if(u=i.stateNode,o=i.memoizedProps,u[Ei]=i,(m=u.nodeValue!==o)&&(n=Yn,n!==null))switch(n.tag){case 3:Do(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Do(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Ei]=i,i.stateNode=u}return Tn(i),null;case 13:if(Yt(Kt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if($t&&qn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)tp(),Cs(),i.flags|=98560,m=!1;else if(m=Vo(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Ei]=i}else Cs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Tn(i),m=!1}else di!==null&&(Ou(di),di=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Kt.current&1)!==0?ln===0&&(ln=3):zu())),i.updateQueue!==null&&(i.flags|=4),Tn(i),null);case 4:return Ls(),Au(n,i),n===null&&ba(i.stateNode.containerInfo),Tn(i),null;case 10:return eu(i.type._context),Tn(i),null;case 17:return kn(i.type)&&Fo(),Tn(i),null;case 19:if(Yt(Kt),m=i.memoizedState,m===null)return Tn(i),null;if(u=(i.flags&128)!==0,w=m.rendering,w===null)if(u)Va(m,!1);else{if(ln!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=qo(n),w!==null){for(i.flags|=128,Va(m,!1),u=w.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,n=w.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ht(Kt,Kt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Zt()>Us&&(i.flags|=128,u=!0,Va(m,!1),i.lanes=4194304)}else{if(!u)if(n=qo(w),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Va(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!$t)return Tn(i),null}else 2*Zt()-m.renderingStartTime>Us&&o!==1073741824&&(i.flags|=128,u=!0,Va(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(o=m.last,o!==null?o.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Zt(),i.sibling=null,o=Kt.current,Ht(Kt,u?o&1|2:o&1),i):(Tn(i),null);case 22:case 23:return Bu(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(jn&1073741824)!==0&&(Tn(i),i.subtreeFlags&6&&(i.flags|=8192)):Tn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function u_(n,i){switch(jc(i),i.tag){case 1:return kn(i.type)&&Fo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ls(),Yt(On),Yt(Mn),ou(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return su(i),null;case 13:if(Yt(Kt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Cs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Yt(Kt),null;case 4:return Ls(),null;case 10:return eu(i.type._context),null;case 22:case 23:return Bu(),null;case 24:return null;default:return null}}var nl=!1,wn=!1,f_=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function Ds(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){tn(n,i,u)}else o.current=null}function Cu(n,i,o){try{o()}catch(u){tn(n,i,u)}}var Qp=!1;function d_(n,i){if(Bc=Mo,n=Lh(),Lc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var w=0,B=-1,G=-1,fe=0,Ee=0,Ce=n,Me=null;t:for(;;){for(var Xe;Ce!==o||d!==0&&Ce.nodeType!==3||(B=w+d),Ce!==m||u!==0&&Ce.nodeType!==3||(G=w+u),Ce.nodeType===3&&(w+=Ce.nodeValue.length),(Xe=Ce.firstChild)!==null;)Me=Ce,Ce=Xe;for(;;){if(Ce===n)break t;if(Me===o&&++fe===d&&(B=w),Me===m&&++Ee===u&&(G=w),(Xe=Ce.nextSibling)!==null)break;Ce=Me,Me=Ce.parentNode}Ce=Xe}o=B===-1||G===-1?null:{start:B,end:G}}else o=null}o=o||{start:0,end:0}}else o=null;for(zc={focusedElem:n,selectionRange:o},Mo=!1,Ze=i;Ze!==null;)if(i=Ze,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ze=n;else for(;Ze!==null;){i=Ze;try{var Qe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Qe!==null){var it=Qe.memoizedProps,nn=Qe.memoizedState,ne=i.stateNode,q=ne.getSnapshotBeforeUpdate(i.elementType===i.type?it:hi(i.type,it),nn);ne.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var oe=i.stateNode.containerInfo;oe.nodeType===1?oe.textContent="":oe.nodeType===9&&oe.documentElement&&oe.removeChild(oe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){tn(i,i.return,Re)}if(n=i.sibling,n!==null){n.return=i.return,Ze=n;break}Ze=i.return}return Qe=Qp,Qp=!1,Qe}function Ha(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Cu(i,o,m)}d=d.next}while(d!==u)}}function il(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Ru(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function em(n){var i=n.alternate;i!==null&&(n.alternate=null,em(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ei],delete i[La],delete i[Wc],delete i[jv],delete i[$v])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function tm(n){return n.tag===5||n.tag===3||n.tag===4}function nm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||tm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function bu(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Io));else if(u!==4&&(n=n.child,n!==null))for(bu(n,i,o),n=n.sibling;n!==null;)bu(n,i,o),n=n.sibling}function Pu(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Pu(n,i,o),n=n.sibling;n!==null;)Pu(n,i,o),n=n.sibling}var _n=null,pi=!1;function gr(n,i,o){for(o=o.child;o!==null;)im(n,i,o),o=o.sibling}function im(n,i,o){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(se,o)}catch{}switch(o.tag){case 5:wn||Ds(o,i);case 6:var u=_n,d=pi;_n=null,gr(n,i,o),_n=u,pi=d,_n!==null&&(pi?(n=_n,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):_n.removeChild(o.stateNode));break;case 18:_n!==null&&(pi?(n=_n,o=o.stateNode,n.nodeType===8?Gc(n.parentNode,o):n.nodeType===1&&Gc(n,o),ya(n)):Gc(_n,o.stateNode));break;case 4:u=_n,d=pi,_n=o.stateNode.containerInfo,pi=!0,gr(n,i,o),_n=u,pi=d;break;case 0:case 11:case 14:case 15:if(!wn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&Cu(o,i,w),d=d.next}while(d!==u)}gr(n,i,o);break;case 1:if(!wn&&(Ds(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(B){tn(o,i,B)}gr(n,i,o);break;case 21:gr(n,i,o);break;case 22:o.mode&1?(wn=(u=wn)||o.memoizedState!==null,gr(n,i,o),wn=u):gr(n,i,o);break;default:gr(n,i,o)}}function rm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new f_),i.forEach(function(u){var d=S_.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function mi(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var m=n,w=i,B=w;e:for(;B!==null;){switch(B.tag){case 5:_n=B.stateNode,pi=!1;break e;case 3:_n=B.stateNode.containerInfo,pi=!0;break e;case 4:_n=B.stateNode.containerInfo,pi=!0;break e}B=B.return}if(_n===null)throw Error(t(160));im(m,w,d),_n=null,pi=!1;var G=d.alternate;G!==null&&(G.return=null),d.return=null}catch(fe){tn(d,i,fe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)sm(i,n),i=i.sibling}function sm(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(mi(i,n),Ai(n),u&4){try{Ha(3,n,n.return),il(3,n)}catch(it){tn(n,n.return,it)}try{Ha(5,n,n.return)}catch(it){tn(n,n.return,it)}}break;case 1:mi(i,n),Ai(n),u&512&&o!==null&&Ds(o,o.return);break;case 5:if(mi(i,n),Ai(n),u&512&&o!==null&&Ds(o,o.return),n.flags&32){var d=n.stateNode;try{de(d,"")}catch(it){tn(n,n.return,it)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,w=o!==null?o.memoizedProps:m,B=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{B==="input"&&m.type==="radio"&&m.name!=null&&ye(d,m),ke(B,w);var fe=ke(B,m);for(w=0;w<G.length;w+=2){var Ee=G[w],Ce=G[w+1];Ee==="style"?me(d,Ce):Ee==="dangerouslySetInnerHTML"?re(d,Ce):Ee==="children"?de(d,Ce):I(d,Ee,Ce,fe)}switch(B){case"input":Ie(d,m);break;case"textarea":He(d,m);break;case"select":var Me=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Xe=m.value;Xe!=null?ut(d,!!m.multiple,Xe,!1):Me!==!!m.multiple&&(m.defaultValue!=null?ut(d,!!m.multiple,m.defaultValue,!0):ut(d,!!m.multiple,m.multiple?[]:"",!1))}d[La]=m}catch(it){tn(n,n.return,it)}}break;case 6:if(mi(i,n),Ai(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(it){tn(n,n.return,it)}}break;case 3:if(mi(i,n),Ai(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{ya(i.containerInfo)}catch(it){tn(n,n.return,it)}break;case 4:mi(i,n),Ai(n);break;case 13:mi(i,n),Ai(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Du=Zt())),u&4&&rm(n);break;case 22:if(Ee=o!==null&&o.memoizedState!==null,n.mode&1?(wn=(fe=wn)||Ee,mi(i,n),wn=fe):mi(i,n),Ai(n),u&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!Ee&&(n.mode&1)!==0)for(Ze=n,Ee=n.child;Ee!==null;){for(Ce=Ze=Ee;Ze!==null;){switch(Me=Ze,Xe=Me.child,Me.tag){case 0:case 11:case 14:case 15:Ha(4,Me,Me.return);break;case 1:Ds(Me,Me.return);var Qe=Me.stateNode;if(typeof Qe.componentWillUnmount=="function"){u=Me,o=Me.return;try{i=u,Qe.props=i.memoizedProps,Qe.state=i.memoizedState,Qe.componentWillUnmount()}catch(it){tn(u,o,it)}}break;case 5:Ds(Me,Me.return);break;case 22:if(Me.memoizedState!==null){lm(Ce);continue}}Xe!==null?(Xe.return=Me,Ze=Xe):lm(Ce)}Ee=Ee.sibling}e:for(Ee=null,Ce=n;;){if(Ce.tag===5){if(Ee===null){Ee=Ce;try{d=Ce.stateNode,fe?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(B=Ce.stateNode,G=Ce.memoizedProps.style,w=G!=null&&G.hasOwnProperty("display")?G.display:null,B.style.display=he("display",w))}catch(it){tn(n,n.return,it)}}}else if(Ce.tag===6){if(Ee===null)try{Ce.stateNode.nodeValue=fe?"":Ce.memoizedProps}catch(it){tn(n,n.return,it)}}else if((Ce.tag!==22&&Ce.tag!==23||Ce.memoizedState===null||Ce===n)&&Ce.child!==null){Ce.child.return=Ce,Ce=Ce.child;continue}if(Ce===n)break e;for(;Ce.sibling===null;){if(Ce.return===null||Ce.return===n)break e;Ee===Ce&&(Ee=null),Ce=Ce.return}Ee===Ce&&(Ee=null),Ce.sibling.return=Ce.return,Ce=Ce.sibling}}break;case 19:mi(i,n),Ai(n),u&4&&rm(n);break;case 21:break;default:mi(i,n),Ai(n)}}function Ai(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(tm(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(de(d,""),u.flags&=-33);var m=nm(n);Pu(n,m,d);break;case 3:case 4:var w=u.stateNode.containerInfo,B=nm(n);bu(n,B,w);break;default:throw Error(t(161))}}catch(G){tn(n,n.return,G)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function h_(n,i,o){Ze=n,am(n)}function am(n,i,o){for(var u=(n.mode&1)!==0;Ze!==null;){var d=Ze,m=d.child;if(d.tag===22&&u){var w=d.memoizedState!==null||nl;if(!w){var B=d.alternate,G=B!==null&&B.memoizedState!==null||wn;B=nl;var fe=wn;if(nl=w,(wn=G)&&!fe)for(Ze=d;Ze!==null;)w=Ze,G=w.child,w.tag===22&&w.memoizedState!==null?cm(d):G!==null?(G.return=w,Ze=G):cm(d);for(;m!==null;)Ze=m,am(m),m=m.sibling;Ze=d,nl=B,wn=fe}om(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ze=m):om(n)}}function om(n){for(;Ze!==null;){var i=Ze;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:wn||il(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!wn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:hi(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&lp(i,m,u);break;case 3:var w=i.updateQueue;if(w!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}lp(i,w,o)}break;case 5:var B=i.stateNode;if(o===null&&i.flags&4){o=B;var G=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&o.focus();break;case"img":G.src&&(o.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var fe=i.alternate;if(fe!==null){var Ee=fe.memoizedState;if(Ee!==null){var Ce=Ee.dehydrated;Ce!==null&&ya(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}wn||i.flags&512&&Ru(i)}catch(Me){tn(i,i.return,Me)}}if(i===n){Ze=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ze=o;break}Ze=i.return}}function lm(n){for(;Ze!==null;){var i=Ze;if(i===n){Ze=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ze=o;break}Ze=i.return}}function cm(n){for(;Ze!==null;){var i=Ze;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{il(4,i)}catch(G){tn(i,o,G)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(G){tn(i,d,G)}}var m=i.return;try{Ru(i)}catch(G){tn(i,m,G)}break;case 5:var w=i.return;try{Ru(i)}catch(G){tn(i,w,G)}}}catch(G){tn(i,i.return,G)}if(i===n){Ze=null;break}var B=i.sibling;if(B!==null){B.return=i.return,Ze=B;break}Ze=i.return}}var p_=Math.ceil,rl=C.ReactCurrentDispatcher,Lu=C.ReactCurrentOwner,ri=C.ReactCurrentBatchConfig,Dt=0,hn=null,sn=null,xn=0,jn=0,Is=fr(0),ln=0,Ga=null,jr=0,sl=0,Nu=0,Wa=null,zn=null,Du=0,Us=1/0,qi=null,al=!1,Iu=null,vr=null,ol=!1,_r=null,ll=0,Xa=0,Uu=null,cl=-1,ul=0;function Ln(){return(Dt&6)!==0?Zt():cl!==-1?cl:cl=Zt()}function xr(n){return(n.mode&1)===0?1:(Dt&2)!==0&&xn!==0?xn&-xn:Kv.transition!==null?(ul===0&&(ul=We()),ul):(n=At,n!==0||(n=window.event,n=n===void 0?16:fh(n.type)),n)}function gi(n,i,o,u){if(50<Xa)throw Xa=0,Uu=null,Error(t(185));wt(n,o,u),((Dt&2)===0||n!==hn)&&(n===hn&&((Dt&2)===0&&(sl|=o),ln===4&&yr(n,xn)),Vn(n,u),o===1&&Dt===0&&(i.mode&1)===0&&(Us=Zt()+500,ko&&hr()))}function Vn(n,i){var o=n.callbackNode;Ot(n,i);var u=Vt(n,n===hn?xn:0);if(u===0)o!==null&&pa(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&pa(o),i===1)n.tag===0?Zv(fm.bind(null,n)):Zh(fm.bind(null,n)),Yv(function(){(Dt&6)===0&&hr()}),o=null;else{switch(Bi(u)){case 1:o=ma;break;case 4:o=A;break;case 16:o=K;break;case 536870912:o=ae;break;default:o=K}o=xm(o,um.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function um(n,i){if(cl=-1,ul=0,(Dt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Fs()&&n.callbackNode!==o)return null;var u=Vt(n,n===hn?xn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=fl(n,u);else{i=u;var d=Dt;Dt|=2;var m=hm();(hn!==n||xn!==i)&&(qi=null,Us=Zt()+500,Zr(n,i));do try{v_();break}catch(B){dm(n,B)}while(!0);Qc(),rl.current=m,Dt=d,sn!==null?i=0:(hn=null,xn=0,i=ln)}if(i!==0){if(i===2&&(d=rn(n),d!==0&&(u=d,i=Fu(n,d))),i===1)throw o=Ga,Zr(n,0),yr(n,u),Vn(n,Zt()),o;if(i===6)yr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!m_(d)&&(i=fl(n,u),i===2&&(m=rn(n),m!==0&&(u=m,i=Fu(n,m))),i===1))throw o=Ga,Zr(n,0),yr(n,u),Vn(n,Zt()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Kr(n,zn,qi);break;case 3:if(yr(n,u),(u&130023424)===u&&(i=Du+500-Zt(),10<i)){if(Vt(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Ln(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Hc(Kr.bind(null,n,zn,qi),i);break}Kr(n,zn,qi);break;case 4:if(yr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var w=31-be(u);m=1<<w,w=i[w],w>d&&(d=w),u&=~m}if(u=d,u=Zt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*p_(u/1960))-u,10<u){n.timeoutHandle=Hc(Kr.bind(null,n,zn,qi),u);break}Kr(n,zn,qi);break;case 5:Kr(n,zn,qi);break;default:throw Error(t(329))}}}return Vn(n,Zt()),n.callbackNode===o?um.bind(null,n):null}function Fu(n,i){var o=Wa;return n.current.memoizedState.isDehydrated&&(Zr(n,i).flags|=256),n=fl(n,i),n!==2&&(i=zn,zn=o,i!==null&&Ou(i)),n}function Ou(n){zn===null?zn=n:zn.push.apply(zn,n)}function m_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!fi(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(n,i){for(i&=~Nu,i&=~sl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-be(i),u=1<<o;n[o]=-1,i&=~u}}function fm(n){if((Dt&6)!==0)throw Error(t(327));Fs();var i=Vt(n,0);if((i&1)===0)return Vn(n,Zt()),null;var o=fl(n,i);if(n.tag!==0&&o===2){var u=rn(n);u!==0&&(i=u,o=Fu(n,u))}if(o===1)throw o=Ga,Zr(n,0),yr(n,i),Vn(n,Zt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Kr(n,zn,qi),Vn(n,Zt()),null}function ku(n,i){var o=Dt;Dt|=1;try{return n(i)}finally{Dt=o,Dt===0&&(Us=Zt()+500,ko&&hr())}}function $r(n){_r!==null&&_r.tag===0&&(Dt&6)===0&&Fs();var i=Dt;Dt|=1;var o=ri.transition,u=At;try{if(ri.transition=null,At=1,n)return n()}finally{At=u,ri.transition=o,Dt=i,(Dt&6)===0&&hr()}}function Bu(){jn=Is.current,Yt(Is)}function Zr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Xv(o)),sn!==null)for(o=sn.return;o!==null;){var u=o;switch(jc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Fo();break;case 3:Ls(),Yt(On),Yt(Mn),ou();break;case 5:su(u);break;case 4:Ls();break;case 13:Yt(Kt);break;case 19:Yt(Kt);break;case 10:eu(u.type._context);break;case 22:case 23:Bu()}o=o.return}if(hn=n,sn=n=Sr(n.current,null),xn=jn=i,ln=0,Ga=null,Nu=sl=jr=0,zn=Wa=null,Xr!==null){for(i=0;i<Xr.length;i++)if(o=Xr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,m=o.pending;if(m!==null){var w=m.next;m.next=d,u.next=w}o.pending=u}Xr=null}return n}function dm(n,i){do{var o=sn;try{if(Qc(),jo.current=Jo,$o){for(var u=Jt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}$o=!1}if(qr=0,dn=on=Jt=null,Oa=!1,ka=0,Lu.current=null,o===null||o.return===null){ln=1,Ga=i,sn=null;break}e:{var m=n,w=o.return,B=o,G=i;if(i=xn,B.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var fe=G,Ee=B,Ce=Ee.tag;if((Ee.mode&1)===0&&(Ce===0||Ce===11||Ce===15)){var Me=Ee.alternate;Me?(Ee.updateQueue=Me.updateQueue,Ee.memoizedState=Me.memoizedState,Ee.lanes=Me.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var Xe=Op(w);if(Xe!==null){Xe.flags&=-257,kp(Xe,w,B,m,i),Xe.mode&1&&Fp(m,fe,i),i=Xe,G=fe;var Qe=i.updateQueue;if(Qe===null){var it=new Set;it.add(G),i.updateQueue=it}else Qe.add(G);break e}else{if((i&1)===0){Fp(m,fe,i),zu();break e}G=Error(t(426))}}else if($t&&B.mode&1){var nn=Op(w);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),kp(nn,w,B,m,i),Kc(Ns(G,B));break e}}m=G=Ns(G,B),ln!==4&&(ln=2),Wa===null?Wa=[m]:Wa.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ne=Ip(m,G,i);op(m,ne);break e;case 1:B=G;var q=m.type,oe=m.stateNode;if((m.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||oe!==null&&typeof oe.componentDidCatch=="function"&&(vr===null||!vr.has(oe)))){m.flags|=65536,i&=-i,m.lanes|=i;var Re=Up(m,B,i);op(m,Re);break e}}m=m.return}while(m!==null)}mm(o)}catch(at){i=at,sn===o&&o!==null&&(sn=o=o.return);continue}break}while(!0)}function hm(){var n=rl.current;return rl.current=Jo,n===null?Jo:n}function zu(){(ln===0||ln===3||ln===2)&&(ln=4),hn===null||(jr&268435455)===0&&(sl&268435455)===0||yr(hn,xn)}function fl(n,i){var o=Dt;Dt|=2;var u=hm();(hn!==n||xn!==i)&&(qi=null,Zr(n,i));do try{g_();break}catch(d){dm(n,d)}while(!0);if(Qc(),Dt=o,rl.current=u,sn!==null)throw Error(t(261));return hn=null,xn=0,ln}function g_(){for(;sn!==null;)pm(sn)}function v_(){for(;sn!==null&&!yo();)pm(sn)}function pm(n){var i=_m(n.alternate,n,jn);n.memoizedProps=n.pendingProps,i===null?mm(n):sn=i,Lu.current=null}function mm(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=c_(o,i,jn),o!==null){sn=o;return}}else{if(o=u_(o,i),o!==null){o.flags&=32767,sn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ln=6,sn=null;return}}if(i=i.sibling,i!==null){sn=i;return}sn=i=n}while(i!==null);ln===0&&(ln=5)}function Kr(n,i,o){var u=At,d=ri.transition;try{ri.transition=null,At=1,__(n,i,o,u)}finally{ri.transition=d,At=u}return null}function __(n,i,o,u){do Fs();while(_r!==null);if((Dt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(Un(n,m),n===hn&&(sn=hn=null,xn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ol||(ol=!0,xm(K,function(){return Fs(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=ri.transition,ri.transition=null;var w=At;At=1;var B=Dt;Dt|=4,Lu.current=null,d_(n,o),sm(o,n),kv(zc),Mo=!!Bc,zc=Bc=null,n.current=o,h_(o),_c(),Dt=B,At=w,ri.transition=m}else n.current=o;if(ol&&(ol=!1,_r=n,ll=d),m=n.pendingLanes,m===0&&(vr=null),Ye(o.stateNode),Vn(n,Zt()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(al)throw al=!1,n=Iu,Iu=null,n;return(ll&1)!==0&&n.tag!==0&&Fs(),m=n.pendingLanes,(m&1)!==0?n===Uu?Xa++:(Xa=0,Uu=n):Xa=0,hr(),null}function Fs(){if(_r!==null){var n=Bi(ll),i=ri.transition,o=At;try{if(ri.transition=null,At=16>n?16:n,_r===null)var u=!1;else{if(n=_r,_r=null,ll=0,(Dt&6)!==0)throw Error(t(331));var d=Dt;for(Dt|=4,Ze=n.current;Ze!==null;){var m=Ze,w=m.child;if((Ze.flags&16)!==0){var B=m.deletions;if(B!==null){for(var G=0;G<B.length;G++){var fe=B[G];for(Ze=fe;Ze!==null;){var Ee=Ze;switch(Ee.tag){case 0:case 11:case 15:Ha(8,Ee,m)}var Ce=Ee.child;if(Ce!==null)Ce.return=Ee,Ze=Ce;else for(;Ze!==null;){Ee=Ze;var Me=Ee.sibling,Xe=Ee.return;if(em(Ee),Ee===fe){Ze=null;break}if(Me!==null){Me.return=Xe,Ze=Me;break}Ze=Xe}}}var Qe=m.alternate;if(Qe!==null){var it=Qe.child;if(it!==null){Qe.child=null;do{var nn=it.sibling;it.sibling=null,it=nn}while(it!==null)}}Ze=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,Ze=w;else e:for(;Ze!==null;){if(m=Ze,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ha(9,m,m.return)}var ne=m.sibling;if(ne!==null){ne.return=m.return,Ze=ne;break e}Ze=m.return}}var q=n.current;for(Ze=q;Ze!==null;){w=Ze;var oe=w.child;if((w.subtreeFlags&2064)!==0&&oe!==null)oe.return=w,Ze=oe;else e:for(w=q;Ze!==null;){if(B=Ze,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:il(9,B)}}catch(at){tn(B,B.return,at)}if(B===w){Ze=null;break e}var Re=B.sibling;if(Re!==null){Re.return=B.return,Ze=Re;break e}Ze=B.return}}if(Dt=d,hr(),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(se,n)}catch{}u=!0}return u}finally{At=o,ri.transition=i}}return!1}function gm(n,i,o){i=Ns(o,i),i=Ip(n,i,1),n=mr(n,i,1),i=Ln(),n!==null&&(wt(n,1,i),Vn(n,i))}function tn(n,i,o){if(n.tag===3)gm(n,n,o);else for(;i!==null;){if(i.tag===3){gm(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(vr===null||!vr.has(u))){n=Ns(o,n),n=Up(i,n,1),i=mr(i,n,1),n=Ln(),i!==null&&(wt(i,1,n),Vn(i,n));break}}i=i.return}}function x_(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Ln(),n.pingedLanes|=n.suspendedLanes&o,hn===n&&(xn&o)===o&&(ln===4||ln===3&&(xn&130023424)===xn&&500>Zt()-Du?Zr(n,0):Nu|=o),Vn(n,i)}function vm(n,i){i===0&&((n.mode&1)===0?i=1:(i=st,st<<=1,(st&130023424)===0&&(st=4194304)));var o=Ln();n=Wi(n,i),n!==null&&(wt(n,i,o),Vn(n,o))}function y_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),vm(n,o)}function S_(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),vm(n,o)}var _m;_m=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||On.current)Bn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Bn=!1,l_(n,i,o);Bn=(n.flags&131072)!==0}else Bn=!1,$t&&(i.flags&1048576)!==0&&Kh(i,zo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;tl(n,i),n=i.pendingProps;var d=Ts(i,Mn.current);Ps(i,o),d=uu(null,i,u,n,d,o);var m=fu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,kn(u)?(m=!0,Oo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,iu(i),d.updater=Qo,i.stateNode=d,d._reactInternals=i,vu(i,u,n,o),i=Su(null,i,u,!0,m,o)):(i.tag=0,$t&&m&&qc(i),Pn(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(tl(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=E_(u),n=hi(u,n),d){case 0:i=yu(null,i,u,n,o);break e;case 1:i=Wp(null,i,u,n,o);break e;case 11:i=Bp(null,i,u,n,o);break e;case 14:i=zp(null,i,u,hi(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:hi(u,d),yu(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:hi(u,d),Wp(n,i,u,d,o);case 3:e:{if(Xp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,ap(n,i),Yo(i,u,null,o);var w=i.memoizedState;if(u=w.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ns(Error(t(423)),i),i=Yp(n,i,u,o,d);break e}else if(u!==d){d=Ns(Error(t(424)),i),i=Yp(n,i,u,o,d);break e}else for(qn=ur(i.stateNode.containerInfo.firstChild),Yn=i,$t=!0,di=null,o=rp(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Cs(),u===d){i=Yi(n,i,o);break e}Pn(n,i,u,o)}i=i.child}return i;case 5:return cp(i),n===null&&Zc(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,w=d.children,Vc(u,d)?w=null:m!==null&&Vc(u,m)&&(i.flags|=32),Gp(n,i),Pn(n,i,w,o),i.child;case 6:return n===null&&Zc(i),null;case 13:return qp(n,i,o);case 4:return ru(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Rs(i,null,u,o):Pn(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:hi(u,d),Bp(n,i,u,d,o);case 7:return Pn(n,i,i.pendingProps,o),i.child;case 8:return Pn(n,i,i.pendingProps.children,o),i.child;case 12:return Pn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,w=d.value,Ht(Go,u._currentValue),u._currentValue=w,m!==null)if(fi(m.value,w)){if(m.children===d.children&&!On.current){i=Yi(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var B=m.dependencies;if(B!==null){w=m.child;for(var G=B.firstContext;G!==null;){if(G.context===u){if(m.tag===1){G=Xi(-1,o&-o),G.tag=2;var fe=m.updateQueue;if(fe!==null){fe=fe.shared;var Ee=fe.pending;Ee===null?G.next=G:(G.next=Ee.next,Ee.next=G),fe.pending=G}}m.lanes|=o,G=m.alternate,G!==null&&(G.lanes|=o),tu(m.return,o,i),B.lanes|=o;break}G=G.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=o,B=w.alternate,B!==null&&(B.lanes|=o),tu(w,o,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}Pn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Ps(i,o),d=ni(d),u=u(d),i.flags|=1,Pn(n,i,u,o),i.child;case 14:return u=i.type,d=hi(u,i.pendingProps),d=hi(u.type,d),zp(n,i,u,d,o);case 15:return Vp(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:hi(u,d),tl(n,i),i.tag=1,kn(u)?(n=!0,Oo(i)):n=!1,Ps(i,o),Np(i,u,d),vu(i,u,d,o),Su(null,i,u,!0,n,o);case 19:return $p(n,i,o);case 22:return Hp(n,i,o)}throw Error(t(156,i.tag))};function xm(n,i){return Br(n,i)}function M_(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(n,i,o,u){return new M_(n,i,o,u)}function Vu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function E_(n){if(typeof n=="function")return Vu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===W)return 14}return 2}function Sr(n,i){var o=n.alternate;return o===null?(o=si(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function dl(n,i,o,u,d,m){var w=2;if(u=n,typeof n=="function")Vu(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case k:return Jr(o.children,d,m,i);case T:w=8,d|=8;break;case L:return n=si(12,o,i,d|2),n.elementType=L,n.lanes=m,n;case z:return n=si(13,o,i,d),n.elementType=z,n.lanes=m,n;case te:return n=si(19,o,i,d),n.elementType=te,n.lanes=m,n;case $:return hl(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case H:w=10;break e;case V:w=9;break e;case Z:w=11;break e;case W:w=14;break e;case ie:w=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=si(w,o,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Jr(n,i,o,u){return n=si(7,n,u,i),n.lanes=o,n}function hl(n,i,o,u){return n=si(22,n,u,i),n.elementType=$,n.lanes=o,n.stateNode={isHidden:!1},n}function Hu(n,i,o){return n=si(6,n,null,i),n.lanes=o,n}function Gu(n,i,o){return i=si(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function T_(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vn(0),this.expirationTimes=vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Wu(n,i,o,u,d,m,w,B,G){return n=new T_(n,i,o,B,G),i===1?(i=1,m===!0&&(i|=8)):i=0,m=si(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},iu(m),n}function w_(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function ym(n){if(!n)return dr;n=n._reactInternals;e:{if(bn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(kn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(kn(o))return jh(n,o,i)}return i}function Sm(n,i,o,u,d,m,w,B,G){return n=Wu(o,u,!0,n,d,m,w,B,G),n.context=ym(null),o=n.current,u=Ln(),d=xr(o),m=Xi(u,d),m.callback=i??null,mr(o,m,d),n.current.lanes=d,wt(n,d,u),Vn(n,u),n}function pl(n,i,o,u){var d=i.current,m=Ln(),w=xr(d);return o=ym(o),i.context===null?i.context=o:i.pendingContext=o,i=Xi(m,w),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=mr(d,i,w),n!==null&&(gi(n,d,w,m),Xo(n,d,w)),w}function ml(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Mm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Xu(n,i){Mm(n,i),(n=n.alternate)&&Mm(n,i)}function A_(){return null}var Em=typeof reportError=="function"?reportError:function(n){console.error(n)};function Yu(n){this._internalRoot=n}gl.prototype.render=Yu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));pl(n,i,null,null)},gl.prototype.unmount=Yu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;$r(function(){pl(null,n,null,null)}),i[zi]=null}};function gl(n){this._internalRoot=n}gl.prototype.unstable_scheduleHydration=function(n){if(n){var i=kt();n={blockedOn:null,target:n,priority:i};for(var o=0;o<or.length&&i!==0&&i<or[o].priority;o++);or.splice(o,0,n),o===0&&ch(n)}};function qu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function vl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Tm(){}function C_(n,i,o,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var fe=ml(w);m.call(fe)}}var w=Sm(i,u,n,0,null,!1,!1,"",Tm);return n._reactRootContainer=w,n[zi]=w.current,ba(n.nodeType===8?n.parentNode:n),$r(),w}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var B=u;u=function(){var fe=ml(G);B.call(fe)}}var G=Wu(n,0,!1,null,null,!1,!1,"",Tm);return n._reactRootContainer=G,n[zi]=G.current,ba(n.nodeType===8?n.parentNode:n),$r(function(){pl(i,G,o,u)}),G}function _l(n,i,o,u,d){var m=o._reactRootContainer;if(m){var w=m;if(typeof d=="function"){var B=d;d=function(){var G=ml(w);B.call(G)}}pl(i,w,n,d)}else w=C_(o,i,n,d,u);return ml(w)}Ft=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Nt(i.pendingLanes);o!==0&&(Fn(i,o|1),Vn(i,Zt()),(Dt&6)===0&&(Us=Zt()+500,hr()))}break;case 13:$r(function(){var u=Wi(n,1);if(u!==null){var d=Ln();gi(u,n,1,d)}}),Xu(n,1)}},Wt=function(n){if(n.tag===13){var i=Wi(n,134217728);if(i!==null){var o=Ln();gi(i,n,134217728,o)}Xu(n,134217728)}},ci=function(n){if(n.tag===13){var i=xr(n),o=Wi(n,i);if(o!==null){var u=Ln();gi(o,n,i,u)}Xu(n,i)}},kt=function(){return At},ui=function(n,i){var o=At;try{return At=n,i()}finally{At=o}},dt=function(n,i,o){switch(i){case"input":if(Ie(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Uo(u);if(!d)throw Error(t(90));bt(u),Ie(u,d)}}}break;case"textarea":He(n,o);break;case"select":i=o.value,i!=null&&ut(n,!!o.multiple,i,!1)}},ze=ku,xe=$r;var R_={usingClientEntryPoint:!1,Events:[Na,Ms,Uo,ge,Oe,ku]},Ya={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},b_={bundleType:Ya.bundleType,version:Ya.version,rendererPackageName:Ya.rendererPackageName,rendererConfig:Ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=kr(n),n===null?null:n.stateNode},findFiberByHostInstance:Ya.findFiberByHostInstance||A_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{se=xl.inject(b_),Le=xl}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R_,Hn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qu(i))throw Error(t(200));return w_(n,i,null,o)},Hn.createRoot=function(n,i){if(!qu(n))throw Error(t(299));var o=!1,u="",d=Em;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Wu(n,1,!1,null,null,o,!1,u,d),n[zi]=i.current,ba(n.nodeType===8?n.parentNode:n),new Yu(i)},Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=kr(i),n=n===null?null:n.stateNode,n},Hn.flushSync=function(n){return $r(n)},Hn.hydrate=function(n,i,o){if(!vl(i))throw Error(t(200));return _l(null,n,i,!0,o)},Hn.hydrateRoot=function(n,i,o){if(!qu(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,m="",w=Em;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(w=o.onRecoverableError)),i=Sm(i,null,n,1,o??null,d,!1,m,w),n[zi]=i.current,ba(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new gl(i)},Hn.render=function(n,i,o){if(!vl(i))throw Error(t(200));return _l(null,n,i,!1,o)},Hn.unmountComponentAtNode=function(n){if(!vl(n))throw Error(t(40));return n._reactRootContainer?($r(function(){_l(null,null,n,!1,function(){n._reactRootContainer=null,n[zi]=null})}),!0):!1},Hn.unstable_batchedUpdates=ku,Hn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!vl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return _l(n,i,o,!1,u)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var Nm;function O_(){if(Nm)return Zu.exports;Nm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Zu.exports=F_(),Zu.exports}var Dm;function k_(){if(Dm)return yl;Dm=1;var r=O_();return yl.createRoot=r.createRoot,yl.hydrateRoot=r.hydrateRoot,yl}var B_=k_(),xt=Ud();const Im=1914,Um=1138;function z_({children:r}){const e=xt.useRef(null),[t,s]=xt.useState(1);return xt.useEffect(()=>{const a=e.current;if(!a)return;const l=()=>{const{width:f,height:h}=a.getBoundingClientRect();s(Math.min(f/Im,h/Um))};l();const c=new ResizeObserver(l);return c.observe(a),()=>c.disconnect()},[]),P.jsx("div",{ref:e,className:"design-canvas-host",children:P.jsx("div",{className:"design-canvas",style:{width:Im,height:Um,transform:`scale(${t})`},children:r})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fd="185",V_=0,Fm=1,H_=2,Jl=1,G_=2,no=3,Dr=0,Gn=1,Pi=2,er=0,ea=1,Om=2,km=3,Bm=4,W_=5,rs=100,X_=101,Y_=102,q_=103,j_=104,$_=200,Z_=201,K_=202,J_=203,Bf=204,zf=205,Q_=206,ex=207,tx=208,nx=209,ix=210,rx=211,sx=212,ax=213,ox=214,Vf=0,Hf=1,Gf=2,ra=3,Wf=4,Xf=5,Yf=6,qf=7,s0=0,lx=1,cx=2,Di=0,a0=1,o0=2,l0=3,c0=4,u0=5,f0=6,d0=7,h0=300,ls=301,sa=302,Qu=303,ef=304,dc=306,jf=1e3,Qi=1001,$f=1002,yn=1003,ux=1004,Sl=1005,Rn=1006,tf=1007,as=1008,Jn=1009,p0=1010,m0=1011,lo=1012,Od=1013,Ui=1014,Li=1015,nr=1016,kd=1017,Bd=1018,co=1020,g0=35902,v0=35899,_0=1021,x0=1022,yi=1023,ir=1026,os=1027,y0=1028,zd=1029,cs=1030,Vd=1031,Hd=1033,Ql=33776,ec=33777,tc=33778,nc=33779,Zf=35840,Kf=35841,Jf=35842,Qf=35843,ed=36196,td=37492,nd=37496,id=37488,rd=37489,rc=37490,sd=37491,ad=37808,od=37809,ld=37810,cd=37811,ud=37812,fd=37813,dd=37814,hd=37815,pd=37816,md=37817,gd=37818,vd=37819,_d=37820,xd=37821,yd=36492,Sd=36494,Md=36495,Ed=36283,Td=36284,sc=36285,wd=36286,fx=3200,Ad=0,dx=1,br="",Kn="srgb",ac="srgb-linear",oc="linear",Bt="srgb",Os=7680,zm=519,hx=512,px=513,mx=514,Gd=515,gx=516,vx=517,Wd=518,_x=519,Vm=35044,Hm="300 es",Ni=2e3,uo=2001;function xx(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function lc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function yx(){const r=lc("canvas");return r.style.display="block",r}const Gm={};function Wm(...r){const e="THREE."+r.shift();console.log(e,...r)}function S0(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function gt(...r){r=S0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Pt(...r){r=S0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ta(...r){const e=r.join(" ");e in Gm||(Gm[e]=!0,gt(...r))}function Sx(r,e,t){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const Mx={[Vf]:Hf,[Gf]:Yf,[Wf]:qf,[ra]:Xf,[Hf]:Vf,[Yf]:Gf,[qf]:Wf,[Xf]:ra};class fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xm=1234567;const na=Math.PI/180,fo=180/Math.PI;function ds(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]).toLowerCase()}function Rt(r,e,t){return Math.max(e,Math.min(t,r))}function Xd(r,e){return(r%e+e)%e}function Ex(r,e,t,s,a){return s+(r-e)*(a-s)/(t-e)}function Tx(r,e,t){return r!==e?(t-r)/(e-r):0}function so(r,e,t){return(1-t)*r+t*e}function wx(r,e,t,s){return so(r,e,1-Math.exp(-t*s))}function Ax(r,e=1){return e-Math.abs(Xd(r,e*2)-e)}function Cx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Rx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function bx(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Px(r,e){return r+Math.random()*(e-r)}function Lx(r){return r*(.5-Math.random())}function Nx(r){r!==void 0&&(Xm=r);let e=Xm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dx(r){return r*na}function Ix(r){return r*fo}function Ux(r){return(r&r-1)===0&&r!==0}function Fx(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ox(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function kx(r,e,t,s,a){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),p=l((e+s)/2),v=c((e+s)/2),_=l((e-s)/2),g=c((e-s)/2),y=l((s-e)/2),M=c((s-e)/2);switch(a){case"XYX":r.set(f*v,h*_,h*g,f*p);break;case"YZY":r.set(h*g,f*v,h*_,f*p);break;case"ZXZ":r.set(h*_,h*g,f*v,f*p);break;case"XZX":r.set(f*v,h*M,h*y,f*p);break;case"YXY":r.set(h*y,f*v,h*M,f*p);break;case"ZYZ":r.set(h*M,h*y,f*v,f*p);break;default:gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ks(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Pr={DEG2RAD:na,RAD2DEG:fo,generateUUID:ds,clamp:Rt,euclideanModulo:Xd,mapLinear:Ex,inverseLerp:Tx,lerp:so,damp:wx,pingpong:Ax,smoothstep:Cx,smootherstep:Rx,randInt:bx,randFloat:Px,randFloatSpread:Lx,seededRandom:Nx,degToRad:Dx,radToDeg:Ix,isPowerOfTwo:Ux,ceilPowerOfTwo:Fx,floorPowerOfTwo:Ox,setQuaternionFromProperEuler:kx,normalize:Nn,denormalize:Ks},ih=class ih{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Rt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ih.prototype.isVector2=!0;let Be=ih;class ca{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,c,f){let h=s[a+0],p=s[a+1],v=s[a+2],_=s[a+3],g=l[c+0],y=l[c+1],M=l[c+2],R=l[c+3];if(_!==R||h!==g||p!==y||v!==M){let S=h*g+p*y+v*M+_*R;S<0&&(g=-g,y=-y,M=-M,R=-R,S=-S);let x=1-f;if(S<.9995){const O=Math.acos(S),I=Math.sin(O);x=Math.sin(x*O)/I,f=Math.sin(f*O)/I,h=h*x+g*f,p=p*x+y*f,v=v*x+M*f,_=_*x+R*f}else{h=h*x+g*f,p=p*x+y*f,v=v*x+M*f,_=_*x+R*f;const O=1/Math.sqrt(h*h+p*p+v*v+_*_);h*=O,p*=O,v*=O,_*=O}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,a,l,c){const f=s[a],h=s[a+1],p=s[a+2],v=s[a+3],_=l[c],g=l[c+1],y=l[c+2],M=l[c+3];return e[t]=f*M+v*_+h*y-p*g,e[t+1]=h*M+v*g+p*_-f*y,e[t+2]=p*M+v*y+f*g-h*_,e[t+3]=v*M-f*_-h*g-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(s/2),v=f(a/2),_=f(l/2),g=h(s/2),y=h(a/2),M=h(l/2);switch(c){case"XYZ":this._x=g*v*_+p*y*M,this._y=p*y*_-g*v*M,this._z=p*v*M+g*y*_,this._w=p*v*_-g*y*M;break;case"YXZ":this._x=g*v*_+p*y*M,this._y=p*y*_-g*v*M,this._z=p*v*M-g*y*_,this._w=p*v*_+g*y*M;break;case"ZXY":this._x=g*v*_-p*y*M,this._y=p*y*_+g*v*M,this._z=p*v*M+g*y*_,this._w=p*v*_-g*y*M;break;case"ZYX":this._x=g*v*_-p*y*M,this._y=p*y*_+g*v*M,this._z=p*v*M-g*y*_,this._w=p*v*_+g*y*M;break;case"YZX":this._x=g*v*_+p*y*M,this._y=p*y*_+g*v*M,this._z=p*v*M-g*y*_,this._w=p*v*_-g*y*M;break;case"XZY":this._x=g*v*_-p*y*M,this._y=p*y*_-g*v*M,this._z=p*v*M+g*y*_,this._w=p*v*_+g*y*M;break;default:gt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],v=t[6],_=t[10],g=s+f+_;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(v-h)*y,this._y=(l-p)*y,this._z=(c-a)*y}else if(s>f&&s>_){const y=2*Math.sqrt(1+s-f-_);this._w=(v-h)/y,this._x=.25*y,this._y=(a+c)/y,this._z=(l+p)/y}else if(f>_){const y=2*Math.sqrt(1+f-s-_);this._w=(l-p)/y,this._x=(a+c)/y,this._y=.25*y,this._z=(h+v)/y}else{const y=2*Math.sqrt(1+_-s-f);this._w=(c-a)/y,this._x=(l+p)/y,this._y=(h+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=s*v+c*f+a*p-l*h,this._y=a*v+c*h+l*f-s*p,this._z=l*v+c*p+s*h-a*f,this._w=c*v-s*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){let s=e._x,a=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(s=-s,a=-a,l=-l,c=-c,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+s*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+s*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const rh=class rh{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ym.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ym.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*a-f*s),v=2*(f*t-l*a),_=2*(l*s-c*t);return this.x=t+h*p+c*_-f*v,this.y=s+h*v+f*p-l*_,this.z=a+h*_+l*v-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*c-s*h,this.z=s*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return nf.copy(this).projectOnVector(e),this.sub(nf)}reflect(e){return this.sub(nf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Rt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rh.prototype.isVector3=!0;let j=rh;const nf=new j,Ym=new ca,sh=class sh{constructor(e,t,s,a,l,c,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,h,p)}set(e,t,s,a,l,c,f,h,p){const v=this.elements;return v[0]=e,v[1]=a,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=s,v[7]=c,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[3],h=s[6],p=s[1],v=s[4],_=s[7],g=s[2],y=s[5],M=s[8],R=a[0],S=a[3],x=a[6],O=a[1],I=a[4],C=a[7],F=a[2],N=a[5],k=a[8];return l[0]=c*R+f*O+h*F,l[3]=c*S+f*I+h*N,l[6]=c*x+f*C+h*k,l[1]=p*R+v*O+_*F,l[4]=p*S+v*I+_*N,l[7]=p*x+v*C+_*k,l[2]=g*R+y*O+M*F,l[5]=g*S+y*I+M*N,l[8]=g*x+y*C+M*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*c*v-t*f*p-s*l*v+s*f*h+a*l*p-a*c*h}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8],_=v*c-f*p,g=f*h-v*l,y=p*l-c*h,M=t*_+s*g+a*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/M;return e[0]=_*R,e[1]=(a*p-v*s)*R,e[2]=(f*s-a*c)*R,e[3]=g*R,e[4]=(v*t-a*h)*R,e[5]=(a*l-f*t)*R,e[6]=y*R,e[7]=(s*h-p*t)*R,e[8]=(c*t-s*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*c+p*f)+c+e,-a*p,a*h,-a*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return ta("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rf.makeScale(e,t)),this}rotate(e){return ta("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rf.makeRotation(-e)),this}translate(e,t){return ta("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};sh.prototype.isMatrix3=!0;let Et=sh;const rf=new Et,qm=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jm=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bx(){const r={enabled:!0,workingColorSpace:ac,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Bt&&(a.r=tr(a.r),a.g=tr(a.g),a.b=tr(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Bt&&(a.r=ia(a.r),a.g=ia(a.g),a.b=ia(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===br?oc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return ta("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return ta("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ac]:{primaries:e,whitePoint:s,transfer:oc,toXYZ:qm,fromXYZ:jm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:s,transfer:Bt,toXYZ:qm,fromXYZ:jm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),r}const Lt=Bx();function tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ia(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ks;class zx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ks===void 0&&(ks=lc("canvas")),ks.width=e.width,ks.height=e.height;const a=ks.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=ks}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lc("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=tr(l[c]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(tr(t[s]/255)*255):t[s]=tr(t[s]);return{data:t,width:e.width,height:e.height}}else return gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vx=0;class Yd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=ds(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(sf(a[c].image)):l.push(sf(a[c]))}else l=sf(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function sf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?zx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(gt("Texture: Unable to serialize Texture."),{})}let Hx=0;const af=new j;class In extends fs{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,s=Qi,a=Qi,l=Rn,c=as,f=yi,h=Jn,p=In.DEFAULT_ANISOTROPY,v=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=ds(),this.name="",this.source=new Yd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(af).x}get height(){return this.source.getSize(af).y}get depth(){return this.source.getSize(af).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){gt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){gt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&s&&a.isVector2&&s.isVector2||a&&s&&a.isVector3&&s.isVector3||a&&s&&a.isMatrix3&&s.isMatrix3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==h0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jf:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case $f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jf:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case $f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=h0;In.DEFAULT_ANISOTROPY=1;const ah=class ah{constructor(e=0,t=0,s=0,a=1){this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const h=e.elements,p=h[0],v=h[4],_=h[8],g=h[1],y=h[5],M=h[9],R=h[2],S=h[6],x=h[10];if(Math.abs(v-g)<.01&&Math.abs(_-R)<.01&&Math.abs(M-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+R)<.1&&Math.abs(M+S)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(p+1)/2,C=(y+1)/2,F=(x+1)/2,N=(v+g)/4,k=(_+R)/4,T=(M+S)/4;return I>C&&I>F?I<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(I),a=N/s,l=k/s):C>F?C<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),s=N/a,l=T/a):F<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(F),s=k/l,a=T/l),this.set(s,a,l,t),this}let O=Math.sqrt((S-M)*(S-M)+(_-R)*(_-R)+(g-v)*(g-v));return Math.abs(O)<.001&&(O=1),this.x=(S-M)/O,this.y=(_-R)/O,this.z=(g-v)/O,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ah.prototype.isVector4=!0;let Qt=ah;class Gx extends fs{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:s.depth},l=new In(a),c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Yd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends Gx{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class M0 extends In{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=yn,this.minFilter=yn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wx extends In{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=yn,this.minFilter=yn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fc=class fc{constructor(e,t,s,a,l,c,f,h,p,v,_,g,y,M,R,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,h,p,v,_,g,y,M,R,S)}set(e,t,s,a,l,c,f,h,p,v,_,g,y,M,R,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=a,x[1]=l,x[5]=c,x[9]=f,x[13]=h,x[2]=p,x[6]=v,x[10]=_,x[14]=g,x[3]=y,x[7]=M,x[11]=R,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fc().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,s=e.elements,a=1/Bs.setFromMatrixColumn(e,0).length(),l=1/Bs.setFromMatrixColumn(e,1).length(),c=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),h=Math.cos(a),p=Math.sin(a),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=c*v,y=c*_,M=f*v,R=f*_;t[0]=h*v,t[4]=-h*_,t[8]=p,t[1]=y+M*p,t[5]=g-R*p,t[9]=-f*h,t[2]=R-g*p,t[6]=M+y*p,t[10]=c*h}else if(e.order==="YXZ"){const g=h*v,y=h*_,M=p*v,R=p*_;t[0]=g+R*f,t[4]=M*f-y,t[8]=c*p,t[1]=c*_,t[5]=c*v,t[9]=-f,t[2]=y*f-M,t[6]=R+g*f,t[10]=c*h}else if(e.order==="ZXY"){const g=h*v,y=h*_,M=p*v,R=p*_;t[0]=g-R*f,t[4]=-c*_,t[8]=M+y*f,t[1]=y+M*f,t[5]=c*v,t[9]=R-g*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const g=c*v,y=c*_,M=f*v,R=f*_;t[0]=h*v,t[4]=M*p-y,t[8]=g*p+R,t[1]=h*_,t[5]=R*p+g,t[9]=y*p-M,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const g=c*h,y=c*p,M=f*h,R=f*p;t[0]=h*v,t[4]=R-g*_,t[8]=M*_+y,t[1]=_,t[5]=c*v,t[9]=-f*v,t[2]=-p*v,t[6]=y*_+M,t[10]=g-R*_}else if(e.order==="XZY"){const g=c*h,y=c*p,M=f*h,R=f*p;t[0]=h*v,t[4]=-_,t[8]=p*v,t[1]=g*_+R,t[5]=c*v,t[9]=y*_-M,t[2]=M*_-y,t[6]=f*v,t[10]=R*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xx,e,Yx)}lookAt(e,t,s){const a=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Er.crossVectors(s,$n),Er.lengthSq()===0&&(Math.abs(s.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Er.crossVectors(s,$n)),Er.normalize(),Ml.crossVectors($n,Er),a[0]=Er.x,a[4]=Ml.x,a[8]=$n.x,a[1]=Er.y,a[5]=Ml.y,a[9]=$n.y,a[2]=Er.z,a[6]=Ml.z,a[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[4],h=s[8],p=s[12],v=s[1],_=s[5],g=s[9],y=s[13],M=s[2],R=s[6],S=s[10],x=s[14],O=s[3],I=s[7],C=s[11],F=s[15],N=a[0],k=a[4],T=a[8],L=a[12],H=a[1],V=a[5],Z=a[9],z=a[13],te=a[2],W=a[6],ie=a[10],$=a[14],Y=a[3],ee=a[7],le=a[11],U=a[15];return l[0]=c*N+f*H+h*te+p*Y,l[4]=c*k+f*V+h*W+p*ee,l[8]=c*T+f*Z+h*ie+p*le,l[12]=c*L+f*z+h*$+p*U,l[1]=v*N+_*H+g*te+y*Y,l[5]=v*k+_*V+g*W+y*ee,l[9]=v*T+_*Z+g*ie+y*le,l[13]=v*L+_*z+g*$+y*U,l[2]=M*N+R*H+S*te+x*Y,l[6]=M*k+R*V+S*W+x*ee,l[10]=M*T+R*Z+S*ie+x*le,l[14]=M*L+R*z+S*$+x*U,l[3]=O*N+I*H+C*te+F*Y,l[7]=O*k+I*V+C*W+F*ee,l[11]=O*T+I*Z+C*ie+F*le,l[15]=O*L+I*z+C*$+F*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],v=e[2],_=e[6],g=e[10],y=e[14],M=e[3],R=e[7],S=e[11],x=e[15],O=h*y-p*g,I=f*y-p*_,C=f*g-h*_,F=c*y-p*v,N=c*g-h*v,k=c*_-f*v;return t*(R*O-S*I+x*C)-s*(M*O-S*F+x*N)+a*(M*I-R*F+x*k)-l*(M*C-R*N+S*k)}determinantAffine(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[1],c=e[5],f=e[9],h=e[2],p=e[6],v=e[10];return t*(c*v-f*p)-s*(l*v-f*h)+a*(l*p-c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8],_=e[9],g=e[10],y=e[11],M=e[12],R=e[13],S=e[14],x=e[15],O=t*f-s*c,I=t*h-a*c,C=t*p-l*c,F=s*h-a*f,N=s*p-l*f,k=a*p-l*h,T=v*R-_*M,L=v*S-g*M,H=v*x-y*M,V=_*S-g*R,Z=_*x-y*R,z=g*x-y*S,te=O*z-I*Z+C*V+F*H-N*L+k*T;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/te;return e[0]=(f*z-h*Z+p*V)*W,e[1]=(a*Z-s*z-l*V)*W,e[2]=(R*k-S*N+x*F)*W,e[3]=(g*N-_*k-y*F)*W,e[4]=(h*H-c*z-p*L)*W,e[5]=(t*z-a*H+l*L)*W,e[6]=(S*C-M*k-x*I)*W,e[7]=(v*k-g*C+y*I)*W,e[8]=(c*Z-f*H+p*T)*W,e[9]=(s*H-t*Z-l*T)*W,e[10]=(M*N-R*C+x*O)*W,e[11]=(_*C-v*N-y*O)*W,e[12]=(f*L-c*V-h*T)*W,e[13]=(t*V-s*L+a*T)*W,e[14]=(R*I-M*F-S*O)*W,e[15]=(v*F-_*I+g*O)*W,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,c=e.x,f=e.y,h=e.z,p=l*c,v=l*f;return this.set(p*c+s,p*f-a*h,p*h+a*f,0,p*f+a*h,v*f+s,v*h-a*c,0,p*h-a*f,v*h+a*c,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,v=c+c,_=f+f,g=l*p,y=l*v,M=l*_,R=c*v,S=c*_,x=f*_,O=h*p,I=h*v,C=h*_,F=s.x,N=s.y,k=s.z;return a[0]=(1-(R+x))*F,a[1]=(y+C)*F,a[2]=(M-I)*F,a[3]=0,a[4]=(y-C)*N,a[5]=(1-(g+x))*N,a[6]=(S+O)*N,a[7]=0,a[8]=(M+I)*k,a[9]=(S-O)*k,a[10]=(1-(g+R))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinantAffine();if(l===0)return s.set(1,1,1),t.identity(),this;let c=Bs.set(a[0],a[1],a[2]).length();const f=Bs.set(a[4],a[5],a[6]).length(),h=Bs.set(a[8],a[9],a[10]).length();l<0&&(c=-c),vi.copy(this);const p=1/c,v=1/f,_=1/h;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=v,vi.elements[5]*=v,vi.elements[6]*=v,vi.elements[8]*=_,vi.elements[9]*=_,vi.elements[10]*=_,t.setFromRotationMatrix(vi),s.x=c,s.y=f,s.z=h,this}makePerspective(e,t,s,a,l,c,f=Ni,h=!1){const p=this.elements,v=2*l/(t-e),_=2*l/(s-a),g=(t+e)/(t-e),y=(s+a)/(s-a);let M,R;if(h)M=l/(c-l),R=c*l/(c-l);else if(f===Ni)M=-(c+l)/(c-l),R=-2*c*l/(c-l);else if(f===uo)M=-c/(c-l),R=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,a,l,c,f=Ni,h=!1){const p=this.elements,v=2/(t-e),_=2/(s-a),g=-(t+e)/(t-e),y=-(s+a)/(s-a);let M,R;if(h)M=1/(c-l),R=c/(c-l);else if(f===Ni)M=-2/(c-l),R=-(c+l)/(c-l);else if(f===uo)M=-1/(c-l),R=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=M,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};fc.prototype.isMatrix4=!0;let qt=fc;const Bs=new j,vi=new qt,Xx=new j(0,0,0),Yx=new j(1,1,1),Er=new j,Ml=new j,$n=new j,$m=new qt,Zm=new ca;class Ir{constructor(e=0,t=0,s=0,a=Ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],p=a[5],v=a[9],_=a[2],g=a[6],y=a[10];switch(t){case"XYZ":this._y=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Rt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,y),this._y=0);break;default:gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return $m.makeRotationFromQuaternion(e),this.setFromRotationMatrix($m,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zm.setFromEuler(this),this.setFromQuaternion(Zm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ir.DEFAULT_ORDER="XYZ";class qd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qx=0;const Km=new j,zs=new ca,ji=new qt,El=new j,ja=new j,jx=new j,$x=new ca,Jm=new j(1,0,0),Qm=new j(0,1,0),eg=new j(0,0,1),tg={type:"added"},Zx={type:"removed"},Vs={type:"childadded",child:null},of={type:"childremoved",child:null};class gn extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new j,t=new Ir,s=new ca,a=new j(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new qt},normalMatrix:{value:new Et}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(Jm,e)}rotateY(e){return this.rotateOnAxis(Qm,e)}rotateZ(e){return this.rotateOnAxis(eg,e)}translateOnAxis(e,t){return Km.copy(e).applyQuaternion(this.quaternion),this.position.add(Km.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jm,e)}translateY(e){return this.translateOnAxis(Qm,e)}translateZ(e){return this.translateOnAxis(eg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?El.copy(e):El.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(ja,El,this.up):ji.lookAt(El,ja,this.up),this.quaternion.setFromRotationMatrix(ji),a&&(ji.extractRotation(a.matrixWorld),zs.setFromRotationMatrix(ji),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tg),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zx),of.child=e,this.dispatchEvent(of),of.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tg),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,e,jx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,$x,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*a,l[13]+=s-l[1]*t-l[5]*s-l[9]*a,l[14]+=a-l[2]*t-l[6]*s-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t,s=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),t===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0,s)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const _=h[p];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),v=c(e.images),_=c(e.shapes),g=c(e.skeletons),y=c(e.animations),M=c(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),M.length>0&&(s.nodes=M)}return s.object=a,s;function c(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}gn.DEFAULT_UP=new j(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tl extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kx={type:"move"};class lf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const R of e.hand.values()){const S=t.getJointPose(R,s),x=this._getHandJoint(p,R);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],g=v.position.distanceTo(_.position),y=.02,M=.005;p.inputState.pinching&&g>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Kx)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Tl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const E0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},wl={h:0,s:0,l:0};function cf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class vt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,a=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Lt.colorSpaceToWorking(this,a),this}setHSL(e,t,s,a=Lt.workingColorSpace){if(e=Xd(e,1),t=Rt(t,0,1),s=Rt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=cf(c,l,e+1/3),this.g=cf(c,l,e),this.b=cf(c,l,e-1/3)}return Lt.colorSpaceToWorking(this,a),this}setStyle(e,t=Kn){function s(l){l!==void 0&&parseFloat(l)<1&&gt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:gt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);gt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){const s=E0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):gt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Lt.workingToColorSpace(Cn.copy(this),e),Math.round(Rt(Cn.r*255,0,255))*65536+Math.round(Rt(Cn.g*255,0,255))*256+Math.round(Rt(Cn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(Cn.copy(this),t);const s=Cn.r,a=Cn.g,l=Cn.b,c=Math.max(s,a,l),f=Math.min(s,a,l);let h,p;const v=(f+c)/2;if(f===c)h=0,p=0;else{const _=c-f;switch(p=v<=.5?_/(c+f):_/(2-c-f),c){case s:h=(a-l)/_+(a<l?6:0);break;case a:h=(l-s)/_+2;break;case l:h=(s-a)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=Kn){Lt.workingToColorSpace(Cn.copy(this),e);const t=Cn.r,s=Cn.g,a=Cn.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(wl);const s=so(Tr.h,wl.h,t),a=so(Tr.s,wl.s,t),l=so(Tr.l,wl.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new vt;vt.NAMES=E0;class jd{constructor(e,t=1,s=1e3){this.isFog=!0,this.name="",this.color=new vt(e),this.near=t,this.far=s}clone(){return new jd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jx extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ir,this.environmentIntensity=1,this.environmentRotation=new Ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _i=new j,$i=new j,uf=new j,Zi=new j,Hs=new j,Gs=new j,ng=new j,ff=new j,df=new j,hf=new j,pf=new Qt,mf=new Qt,gf=new Qt;class li{constructor(e=new j,t=new j,s=new j){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),_i.subVectors(e,t),a.cross(_i);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){_i.subVectors(a,t),$i.subVectors(s,t),uf.subVectors(e,t);const c=_i.dot(_i),f=_i.dot($i),h=_i.dot(uf),p=$i.dot($i),v=$i.dot(uf),_=c*p-f*f;if(_===0)return l.set(0,0,0),null;const g=1/_,y=(p*h-f*v)*g,M=(c*v-f*h)*g;return l.set(1-y-M,M,y)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,s,a,l,c,f,h){return this.getBarycoord(e,t,s,a,Zi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Zi.x),h.addScaledVector(c,Zi.y),h.addScaledVector(f,Zi.z),h)}static getInterpolatedAttribute(e,t,s,a,l,c){return pf.setScalar(0),mf.setScalar(0),gf.setScalar(0),pf.fromBufferAttribute(e,t),mf.fromBufferAttribute(e,s),gf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(pf,l.x),c.addScaledVector(mf,l.y),c.addScaledVector(gf,l.z),c}static isFrontFacing(e,t,s,a){return _i.subVectors(s,t),$i.subVectors(e,t),_i.cross($i).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),_i.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return li.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let c,f;Hs.subVectors(a,s),Gs.subVectors(l,s),ff.subVectors(e,s);const h=Hs.dot(ff),p=Gs.dot(ff);if(h<=0&&p<=0)return t.copy(s);df.subVectors(e,a);const v=Hs.dot(df),_=Gs.dot(df);if(v>=0&&_<=v)return t.copy(a);const g=h*_-v*p;if(g<=0&&h>=0&&v<=0)return c=h/(h-v),t.copy(s).addScaledVector(Hs,c);hf.subVectors(e,l);const y=Hs.dot(hf),M=Gs.dot(hf);if(M>=0&&y<=M)return t.copy(l);const R=y*p-h*M;if(R<=0&&p>=0&&M<=0)return f=p/(p-M),t.copy(s).addScaledVector(Gs,f);const S=v*M-y*_;if(S<=0&&_-v>=0&&y-M>=0)return ng.subVectors(l,a),f=(_-v)/(_-v+(y-M)),t.copy(a).addScaledVector(ng,f);const x=1/(S+R+g);return c=R*x,f=g*x,t.copy(s).addScaledVector(Hs,c).addScaledVector(Gs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class go{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,xi):xi.fromBufferAttribute(l,c),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Al.copy(s.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($a),Cl.subVectors(this.max,$a),Ws.subVectors(e.a,$a),Xs.subVectors(e.b,$a),Ys.subVectors(e.c,$a),wr.subVectors(Xs,Ws),Ar.subVectors(Ys,Xs),Qr.subVectors(Ws,Ys);let t=[0,-wr.z,wr.y,0,-Ar.z,Ar.y,0,-Qr.z,Qr.y,wr.z,0,-wr.x,Ar.z,0,-Ar.x,Qr.z,0,-Qr.x,-wr.y,wr.x,0,-Ar.y,Ar.x,0,-Qr.y,Qr.x,0];return!vf(t,Ws,Xs,Ys,Cl)||(t=[1,0,0,0,1,0,0,0,1],!vf(t,Ws,Xs,Ys,Cl))?!1:(Rl.crossVectors(wr,Ar),t=[Rl.x,Rl.y,Rl.z],vf(t,Ws,Xs,Ys,Cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ki=[new j,new j,new j,new j,new j,new j,new j,new j],xi=new j,Al=new go,Ws=new j,Xs=new j,Ys=new j,wr=new j,Ar=new j,Qr=new j,$a=new j,Cl=new j,Rl=new j,es=new j;function vf(r,e,t,s,a){for(let l=0,c=r.length-3;l<=c;l+=3){es.fromArray(r,l);const f=a.x*Math.abs(es.x)+a.y*Math.abs(es.y)+a.z*Math.abs(es.z),h=e.dot(es),p=t.dot(es),v=s.dot(es);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const an=new j,bl=new Be;let Qx=0;class Si extends fs{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Vm,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)bl.fromBufferAttribute(this,t),bl.applyMatrix3(e),this.setXY(t,bl.x,bl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ks(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Nn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),s=Nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),s=Nn(s,this.array),a=Nn(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),s=Nn(s,this.array),a=Nn(a,this.array),l=Nn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class T0 extends Si{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class w0 extends Si{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class cn extends Si{constructor(e,t,s){super(new Float32Array(e),t,s)}}const ey=new go,Za=new j,_f=new j;class hc{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):ey.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Za.subVectors(e,this.center);const t=Za.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Za,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_f.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Za.copy(e.center).add(_f)),this.expandByPoint(Za.copy(e.center).sub(_f))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ty=0;const ai=new qt,xf=new gn,qs=new j,Zn=new go,Ka=new go,mn=new j;class Wn extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xx(e)?w0:T0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new Et().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,s){return ai.makeTranslation(e,t,s),this.applyMatrix4(ai),this}scale(e,t,s){return ai.makeScale(e,t,s),this.applyMatrix4(ai),this}lookAt(e){return xf.lookAt(e),xf.updateMatrix(),this.applyMatrix4(xf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new cn(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Zn.setFromBufferAttribute(l),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const s=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Ka.setFromBufferAttribute(f),this.morphTargetsRelative?(mn.addVectors(Zn.min,Ka.min),Zn.expandByPoint(mn),mn.addVectors(Zn.max,Ka.max),Zn.expandByPoint(mn)):(Zn.expandByPoint(Ka.min),Zn.expandByPoint(Ka.max))}Zn.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)mn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(mn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)mn.fromBufferAttribute(f,p),h&&(qs.fromBufferAttribute(e,p),mn.add(qs)),a=Math.max(a,s.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==s.count)&&(c=new Si(new Float32Array(4*s.count),4),this.setAttribute("tangent",c));const f=[],h=[];for(let T=0;T<s.count;T++)f[T]=new j,h[T]=new j;const p=new j,v=new j,_=new j,g=new Be,y=new Be,M=new Be,R=new j,S=new j;function x(T,L,H){p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,L),_.fromBufferAttribute(s,H),g.fromBufferAttribute(l,T),y.fromBufferAttribute(l,L),M.fromBufferAttribute(l,H),v.sub(p),_.sub(p),y.sub(g),M.sub(g);const V=1/(y.x*M.y-M.x*y.y);isFinite(V)&&(R.copy(v).multiplyScalar(M.y).addScaledVector(_,-y.y).multiplyScalar(V),S.copy(_).multiplyScalar(y.x).addScaledVector(v,-M.x).multiplyScalar(V),f[T].add(R),f[L].add(R),f[H].add(R),h[T].add(S),h[L].add(S),h[H].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let T=0,L=O.length;T<L;++T){const H=O[T],V=H.start,Z=H.count;for(let z=V,te=V+Z;z<te;z+=3)x(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const I=new j,C=new j,F=new j,N=new j;function k(T){F.fromBufferAttribute(a,T),N.copy(F);const L=f[T];I.copy(L),I.sub(F.multiplyScalar(F.dot(L))).normalize(),C.crossVectors(N,L);const V=C.dot(h[T])<0?-1:1;c.setXYZW(T,I.x,I.y,I.z,V)}for(let T=0,L=O.length;T<L;++T){const H=O[T],V=H.start,Z=H.count;for(let z=V,te=V+Z;z<te;z+=3)k(e.getX(z+0)),k(e.getX(z+1)),k(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==t.count)s=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const a=new j,l=new j,c=new j,f=new j,h=new j,p=new j,v=new j,_=new j;if(e)for(let g=0,y=e.count;g<y;g+=3){const M=e.getX(g+0),R=e.getX(g+1),S=e.getX(g+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,R),c.fromBufferAttribute(t,S),v.subVectors(c,l),_.subVectors(a,l),v.cross(_),f.fromBufferAttribute(s,M),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,S),f.add(v),h.add(v),p.add(v),s.setXYZ(M,f.x,f.y,f.z),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let g=0,y=t.count;g<y;g+=3)a.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),v.subVectors(c,l),_.subVectors(a,l),v.cross(_),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,_=f.normalized,g=new p.constructor(h.length*v);let y=0,M=0;for(let R=0,S=h.length;R<S;R++){f.isInterleavedBufferAttribute?y=h[R]*f.data.stride+f.offset:y=h[R]*v;for(let x=0;x<v;x++)g[M++]=p[y++]}return new Si(g,v,_)}if(this.index===null)return gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wn,s=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,_=p.length;v<_;v++){const g=p[v],y=e(g,s);h.push(y)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let _=0,g=p.length;_<g;_++){const y=p[_];v.push(y.toJSON(e.data))}v.length>0&&(a[h]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const p in a){const v=a[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],_=l[p];for(let g=0,y=_.length;g<y;g++)v.push(_[g].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,v=c.length;p<v;p++){const _=c[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ny=0;class ua extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=ea,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bf,this.blendDst=zf,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){gt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){gt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector2&&s&&s.isVector2||a&&a.isEuler&&s&&s.isEuler||a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ea&&(s.blending=this.blending),this.side!==Dr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Bf&&(s.blendSrc=this.blendSrc),this.blendDst!==zf&&(s.blendDst=this.blendDst),this.blendEquation!==rs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ra&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new vt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Be().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ji=new j,yf=new j,Pl=new j,Cr=new j,Sf=new j,Ll=new j,Mf=new j;class $d{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){yf.copy(e).add(t).multiplyScalar(.5),Pl.copy(t).sub(e).normalize(),Cr.copy(this.origin).sub(yf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Pl),f=Cr.dot(this.direction),h=-Cr.dot(Pl),p=Cr.lengthSq(),v=Math.abs(1-c*c);let _,g,y,M;if(v>0)if(_=c*h-f,g=c*f-h,M=l*v,_>=0)if(g>=-M)if(g<=M){const R=1/v;_*=R,g*=R,y=_*(_+c*g+2*f)+g*(c*_+g+2*h)+p}else g=l,_=Math.max(0,-(c*g+f)),y=-_*_+g*(g+2*h)+p;else g=-l,_=Math.max(0,-(c*g+f)),y=-_*_+g*(g+2*h)+p;else g<=-M?(_=Math.max(0,-(-c*l+f)),g=_>0?-l:Math.min(Math.max(-l,-h),l),y=-_*_+g*(g+2*h)+p):g<=M?(_=0,g=Math.min(Math.max(-l,-h),l),y=g*(g+2*h)+p):(_=Math.max(0,-(c*l+f)),g=_>0?l:Math.min(Math.max(-l,-h),l),y=-_*_+g*(g+2*h)+p);else g=c>0?-l:l,_=Math.max(0,-(c*g+f)),y=-_*_+g*(g+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(yf).addScaledVector(Pl,g),y}intersectSphere(e,t){Ji.subVectors(e.center,this.origin);const s=Ji.dot(this.direction),a=Ji.dot(Ji)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=s-c,h=s+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,c,f,h;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return p>=0?(s=(e.min.x-g.x)*p,a=(e.max.x-g.x)*p):(s=(e.max.x-g.x)*p,a=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,c=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,c=(e.min.y-g.y)*v),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),_>=0?(f=(e.min.z-g.z)*_,h=(e.max.z-g.z)*_):(f=(e.max.z-g.z)*_,h=(e.min.z-g.z)*_),s>h||f>a)||((f>s||s!==s)&&(s=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,s,a,l){Sf.subVectors(t,e),Ll.subVectors(s,e),Mf.crossVectors(Sf,Ll);let c=this.direction.dot(Mf),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Cr.subVectors(this.origin,e);const h=f*this.direction.dot(Ll.crossVectors(Cr,Ll));if(h<0)return null;const p=f*this.direction.dot(Sf.cross(Cr));if(p<0||h+p>c)return null;const v=-f*Cr.dot(Mf);return v<0?null:this.at(v/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class A0 extends ua{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.combine=s0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ig=new qt,ts=new $d,Nl=new hc,rg=new j,Dl=new j,Il=new j,Ul=new j,Ef=new j,Fl=new j,sg=new j,Ol=new j;class Fi extends gn{constructor(e=new Wn,t=new A0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Fl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],_=l[h];v!==0&&(Ef.fromBufferAttribute(_,e),c?Fl.addScaledVector(Ef,v):Fl.addScaledVector(Ef.sub(t),v))}t.add(Fl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Nl.copy(s.boundingSphere),Nl.applyMatrix4(l),ts.copy(e.ray).recast(e.near),!(Nl.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Nl,rg)===null||ts.origin.distanceToSquared(rg)>(e.far-e.near)**2))&&(ig.copy(l).invert(),ts.copy(e.ray).applyMatrix4(ig),!(s.boundingBox!==null&&ts.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,s){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,g=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,R=g.length;M<R;M++){const S=g[M],x=c[S.materialIndex],O=Math.max(S.start,y.start),I=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let C=O,F=I;C<F;C+=3){const N=f.getX(C),k=f.getX(C+1),T=f.getX(C+2);a=kl(this,x,e,s,p,v,_,N,k,T),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,y.start),R=Math.min(f.count,y.start+y.count);for(let S=M,x=R;S<x;S+=3){const O=f.getX(S),I=f.getX(S+1),C=f.getX(S+2);a=kl(this,c,e,s,p,v,_,O,I,C),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,R=g.length;M<R;M++){const S=g[M],x=c[S.materialIndex],O=Math.max(S.start,y.start),I=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let C=O,F=I;C<F;C+=3){const N=C,k=C+1,T=C+2;a=kl(this,x,e,s,p,v,_,N,k,T),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,y.start),R=Math.min(h.count,y.start+y.count);for(let S=M,x=R;S<x;S+=3){const O=S,I=S+1,C=S+2;a=kl(this,c,e,s,p,v,_,O,I,C),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function iy(r,e,t,s,a,l,c,f){let h;if(e.side===Gn?h=s.intersectTriangle(c,l,a,!0,f):h=s.intersectTriangle(a,l,c,e.side===Dr,f),h===null)return null;Ol.copy(f),Ol.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Ol);return p<t.near||p>t.far?null:{distance:p,point:Ol.clone(),object:r}}function kl(r,e,t,s,a,l,c,f,h,p){r.getVertexPosition(f,Dl),r.getVertexPosition(h,Il),r.getVertexPosition(p,Ul);const v=iy(r,e,t,s,Dl,Il,Ul,sg);if(v){const _=new j;li.getBarycoord(sg,Dl,Il,Ul,_),a&&(v.uv=li.getInterpolatedAttribute(a,f,h,p,_,new Be)),l&&(v.uv1=li.getInterpolatedAttribute(l,f,h,p,_,new Be)),c&&(v.normal=li.getInterpolatedAttribute(c,f,h,p,_,new j),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:f,b:h,c:p,normal:new j,materialIndex:0};li.getNormal(Dl,Il,Ul,g.normal),v.face=g,v.barycoord=_}return v}class ry extends In{constructor(e=null,t=1,s=1,a,l,c,f,h,p=yn,v=yn,_,g){super(null,c,f,h,p,v,a,l,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tf=new j,sy=new j,ay=new Et;class is{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=Tf.subVectors(s,t).cross(sy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){const a=e.delta(Tf),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||ay.getNormalMatrix(e),a=this.coplanarPoint(Tf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new hc,oy=new Be(.5,.5),Bl=new j;class Zd{constructor(e=new is,t=new is,s=new is,a=new is,l=new is,c=new is){this.planes=[e,t,s,a,l,c]}set(e,t,s,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Ni,s=!1){const a=this.planes,l=e.elements,c=l[0],f=l[1],h=l[2],p=l[3],v=l[4],_=l[5],g=l[6],y=l[7],M=l[8],R=l[9],S=l[10],x=l[11],O=l[12],I=l[13],C=l[14],F=l[15];if(a[0].setComponents(p-c,y-v,x-M,F-O).normalize(),a[1].setComponents(p+c,y+v,x+M,F+O).normalize(),a[2].setComponents(p+f,y+_,x+R,F+I).normalize(),a[3].setComponents(p-f,y-_,x-R,F-I).normalize(),s)a[4].setComponents(h,g,S,C).normalize(),a[5].setComponents(p-h,y-g,x-S,F-C).normalize();else if(a[4].setComponents(p-h,y-g,x-S,F-C).normalize(),t===Ni)a[5].setComponents(p+h,y+g,x+S,F+C).normalize();else if(t===uo)a[5].setComponents(h,g,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);const t=oy.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(Bl.x=a.normal.x>0?e.max.x:e.min.x,Bl.y=a.normal.y>0?e.max.y:e.min.y,Bl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kd extends ua{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cc=new j,uc=new j,ag=new qt,Ja=new $d,zl=new hc,wf=new j,og=new j;class ly extends gn{constructor(e=new Wn,t=new Kd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let a=1,l=t.count;a<l;a++)cc.fromBufferAttribute(t,a-1),uc.fromBufferAttribute(t,a),s[a]=s[a-1],s[a]+=cc.distanceTo(uc);e.setAttribute("lineDistance",new cn(s,1))}else gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),zl.copy(s.boundingSphere),zl.applyMatrix4(a),zl.radius+=l,e.ray.intersectsSphere(zl)===!1)return;ag.copy(a).invert(),Ja.copy(e.ray).applyMatrix4(ag);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const y=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let R=y,S=M-1;R<S;R+=p){const x=v.getX(R),O=v.getX(R+1),I=Vl(this,e,Ja,h,x,O,R);I&&t.push(I)}if(this.isLineLoop){const R=v.getX(M-1),S=v.getX(y),x=Vl(this,e,Ja,h,R,S,M-1);x&&t.push(x)}}else{const y=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let R=y,S=M-1;R<S;R+=p){const x=Vl(this,e,Ja,h,R,R+1,R);x&&t.push(x)}if(this.isLineLoop){const R=Vl(this,e,Ja,h,M-1,y,M-1);R&&t.push(R)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Vl(r,e,t,s,a,l,c){const f=r.geometry.attributes.position;if(cc.fromBufferAttribute(f,a),uc.fromBufferAttribute(f,l),t.distanceSqToSegment(cc,uc,wf,og)>s)return;wf.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(wf);if(!(p<e.near||p>e.far))return{distance:p,point:og.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}const lg=new j,cg=new j;class C0 extends ly{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let a=0,l=t.count;a<l;a+=2)lg.fromBufferAttribute(t,a),cg.fromBufferAttribute(t,a+1),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+lg.distanceTo(cg);e.setAttribute("lineDistance",new cn(s,1))}else gt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class R0 extends In{constructor(e=[],t=ls,s,a,l,c,f,h,p,v){super(e,t,s,a,l,c,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aa extends In{constructor(e,t,s=Ui,a,l,c,f=yn,h=yn,p,v=ir,_=1){if(v!==ir&&v!==os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,a,l,c,f,h,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class cy extends aa{constructor(e,t=Ui,s=ls,a,l,c=yn,f=yn,h,p=ir){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,t,s,a,l,c,f,h,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class b0 extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nr extends Wn{constructor(e=1,t=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],v=[],_=[];let g=0,y=0;M("z","y","x",-1,-1,s,t,e,c,l,0),M("z","y","x",1,-1,s,t,-e,c,l,1),M("x","z","y",1,1,e,s,t,a,c,2),M("x","z","y",1,-1,e,s,-t,a,c,3),M("x","y","z",1,-1,e,t,s,a,l,4),M("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(h),this.setAttribute("position",new cn(p,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(_,2));function M(R,S,x,O,I,C,F,N,k,T,L){const H=C/k,V=F/T,Z=C/2,z=F/2,te=N/2,W=k+1,ie=T+1;let $=0,Y=0;const ee=new j;for(let le=0;le<ie;le++){const U=le*V-z;for(let Q=0;Q<W;Q++){const Te=Q*H-Z;ee[R]=Te*O,ee[S]=U*I,ee[x]=te,p.push(ee.x,ee.y,ee.z),ee[R]=0,ee[S]=0,ee[x]=N>0?1:-1,v.push(ee.x,ee.y,ee.z),_.push(Q/k),_.push(1-le/T),$+=1}}for(let le=0;le<T;le++)for(let U=0;U<k;U++){const Q=g+U+W*le,Te=g+U+W*(le+1),qe=g+(U+1)+W*(le+1),Ge=g+(U+1)+W*le;h.push(Q,Te,Ge),h.push(Te,qe,Ge),Y+=6}f.addGroup(y,Y,L),y+=Y,g+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Jd extends Wn{constructor(e=1,t=1,s=1,a=32,l=1,c=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const v=[],_=[],g=[],y=[];let M=0;const R=[],S=s/2;let x=0;O(),c===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(v),this.setAttribute("position",new cn(_,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(y,2));function O(){const C=new j,F=new j;let N=0;const k=(t-e)/s;for(let T=0;T<=l;T++){const L=[],H=T/l,V=H*(t-e)+e;for(let Z=0;Z<=a;Z++){const z=Z/a,te=z*h+f,W=Math.sin(te),ie=Math.cos(te);F.x=V*W,F.y=-H*s+S,F.z=V*ie,_.push(F.x,F.y,F.z),C.set(W,k,ie).normalize(),g.push(C.x,C.y,C.z),y.push(z,1-H),L.push(M++)}R.push(L)}for(let T=0;T<a;T++)for(let L=0;L<l;L++){const H=R[L][T],V=R[L+1][T],Z=R[L+1][T+1],z=R[L][T+1];(e>0||L!==0)&&(v.push(H,V,z),N+=3),(t>0||L!==l-1)&&(v.push(V,Z,z),N+=3)}p.addGroup(x,N,0),x+=N}function I(C){const F=M,N=new Be,k=new j;let T=0;const L=C===!0?e:t,H=C===!0?1:-1;for(let Z=1;Z<=a;Z++)_.push(0,S*H,0),g.push(0,H,0),y.push(.5,.5),M++;const V=M;for(let Z=0;Z<=a;Z++){const te=Z/a*h+f,W=Math.cos(te),ie=Math.sin(te);k.x=L*ie,k.y=S*H,k.z=L*W,_.push(k.x,k.y,k.z),g.push(0,H,0),N.x=W*.5+.5,N.y=ie*.5*H+.5,y.push(N.x,N.y),M++}for(let Z=0;Z<a;Z++){const z=F+Z,te=V+Z;C===!0?v.push(te,te+1,z):v.push(te+1,te,z),T+=3}p.addGroup(x,T,C===!0?1:2),x+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Hl=new j,Gl=new j,Af=new j,Wl=new li;class uy extends Wn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const a=Math.pow(10,4),l=Math.cos(na*t),c=e.getIndex(),f=e.getAttribute("position"),h=c?c.count:f.count,p=[0,0,0],v=["a","b","c"],_=new Array(3),g={},y=[];for(let M=0;M<h;M+=3){c?(p[0]=c.getX(M),p[1]=c.getX(M+1),p[2]=c.getX(M+2)):(p[0]=M,p[1]=M+1,p[2]=M+2);const{a:R,b:S,c:x}=Wl;if(R.fromBufferAttribute(f,p[0]),S.fromBufferAttribute(f,p[1]),x.fromBufferAttribute(f,p[2]),Wl.getNormal(Af),_[0]=`${Math.round(R.x*a)},${Math.round(R.y*a)},${Math.round(R.z*a)}`,_[1]=`${Math.round(S.x*a)},${Math.round(S.y*a)},${Math.round(S.z*a)}`,_[2]=`${Math.round(x.x*a)},${Math.round(x.y*a)},${Math.round(x.z*a)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let O=0;O<3;O++){const I=(O+1)%3,C=_[O],F=_[I],N=Wl[v[O]],k=Wl[v[I]],T=`${C}_${F}`,L=`${F}_${C}`;L in g&&g[L]?(Af.dot(g[L].normal)<=l&&(y.push(N.x,N.y,N.z),y.push(k.x,k.y,k.z)),g[L]=null):T in g||(g[T]={index0:p[O],index1:p[I],normal:Af.clone()})}}for(const M in g)if(g[M]){const{index0:R,index1:S}=g[M];Hl.fromBufferAttribute(f,R),Gl.fromBufferAttribute(f,S),y.push(Hl.x,Hl.y,Hl.z),y.push(Gl.x,Gl.y,Gl.z)}this.setAttribute("position",new cn(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ki{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){gt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const s=this.getUtoTmapping(e);return this.getPoint(s,t)}getPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return t}getSpacedPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPointAt(s/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let s,a=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)s=this.getPoint(c/e),l+=s.distanceTo(a),t.push(l),a=s;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const s=this.getLengths();let a=0;const l=s.length;let c;t?c=t:c=e*s[l-1];let f=0,h=l-1,p;for(;f<=h;)if(a=Math.floor(f+(h-f)/2),p=s[a]-c,p<0)f=a+1;else if(p>0)h=a-1;else{h=a;break}if(a=h,s[a]===c)return a/(l-1);const v=s[a],g=s[a+1]-v,y=(c-v)/g;return(a+y)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const c=this.getPoint(a),f=this.getPoint(l),h=t||(c.isVector2?new Be:new j);return h.copy(f).sub(c).normalize(),h}getTangentAt(e,t){const s=this.getUtoTmapping(e);return this.getTangent(s,t)}computeFrenetFrames(e,t=!1){const s=new j,a=[],l=[],c=[],f=new j,h=new qt;for(let y=0;y<=e;y++){const M=y/e;a[y]=this.getTangentAt(M,new j)}l[0]=new j,c[0]=new j;let p=Number.MAX_VALUE;const v=Math.abs(a[0].x),_=Math.abs(a[0].y),g=Math.abs(a[0].z);v<=p&&(p=v,s.set(1,0,0)),_<=p&&(p=_,s.set(0,1,0)),g<=p&&s.set(0,0,1),f.crossVectors(a[0],s).normalize(),l[0].crossVectors(a[0],f),c[0].crossVectors(a[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),c[y]=c[y-1].clone(),f.crossVectors(a[y-1],a[y]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(Rt(a[y-1].dot(a[y]),-1,1));l[y].applyMatrix4(h.makeRotationAxis(f,M))}c[y].crossVectors(a[y],l[y])}if(t===!0){let y=Math.acos(Rt(l[0].dot(l[e]),-1,1));y/=e,a[0].dot(f.crossVectors(l[0],l[e]))>0&&(y=-y);for(let M=1;M<=e;M++)l[M].applyMatrix4(h.makeRotationAxis(a[M],y*M)),c[M].crossVectors(a[M],l[M])}return{tangents:a,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Qd extends ki{constructor(e=0,t=0,s=1,a=1,l=0,c=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=s,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Be){const s=t,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(c?l=0:l=a),this.aClockwise===!0&&!c&&(l===a?l=-a:l=l-a);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const v=Math.cos(this.aRotation),_=Math.sin(this.aRotation),g=h-this.aX,y=p-this.aY;h=g*v-y*_+this.aX,p=g*_+y*v+this.aY}return s.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class fy extends Qd{constructor(e,t,s,a,l,c){super(e,t,s,s,a,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function eh(){let r=0,e=0,t=0,s=0;function a(l,c,f,h){r=l,e=f,t=-3*l+3*c-2*f-h,s=2*l-2*c+f+h}return{initCatmullRom:function(l,c,f,h,p){a(c,f,p*(f-l),p*(h-c))},initNonuniformCatmullRom:function(l,c,f,h,p,v,_){let g=(c-l)/p-(f-l)/(p+v)+(f-c)/v,y=(f-c)/v-(h-c)/(v+_)+(h-f)/_;g*=v,y*=v,a(c,f,g,y)},calc:function(l){const c=l*l,f=c*l;return r+e*l+t*c+s*f}}}const ug=new j,fg=new j,Cf=new eh,Rf=new eh,bf=new eh;class dy extends ki{constructor(e=[],t=!1,s="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=s,this.tension=a}getPoint(e,t=new j){const s=t,a=this.points,l=a.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),h=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let p,v;this.closed||f>0?p=a[(f-1)%l]:(fg.subVectors(a[0],a[1]).add(a[0]),p=fg);const _=a[f%l],g=a[(f+1)%l];if(this.closed||f+2<l?v=a[(f+2)%l]:(ug.subVectors(a[l-1],a[l-2]).add(a[l-1]),v=ug),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(_),y),R=Math.pow(_.distanceToSquared(g),y),S=Math.pow(g.distanceToSquared(v),y);R<1e-4&&(R=1),M<1e-4&&(M=R),S<1e-4&&(S=R),Cf.initNonuniformCatmullRom(p.x,_.x,g.x,v.x,M,R,S),Rf.initNonuniformCatmullRom(p.y,_.y,g.y,v.y,M,R,S),bf.initNonuniformCatmullRom(p.z,_.z,g.z,v.z,M,R,S)}else this.curveType==="catmullrom"&&(Cf.initCatmullRom(p.x,_.x,g.x,v.x,this.tension),Rf.initCatmullRom(p.y,_.y,g.y,v.y,this.tension),bf.initCatmullRom(p.z,_.z,g.z,v.z,this.tension));return s.set(Cf.calc(h),Rf.calc(h),bf.calc(h)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(new j().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function dg(r,e,t,s,a){const l=(s-e)*.5,c=(a-t)*.5,f=r*r,h=r*f;return(2*t-2*s+l+c)*h+(-3*t+3*s-2*l-c)*f+l*r+t}function hy(r,e){const t=1-r;return t*t*e}function py(r,e){return 2*(1-r)*r*e}function my(r,e){return r*r*e}function ao(r,e,t,s){return hy(r,e)+py(r,t)+my(r,s)}function gy(r,e){const t=1-r;return t*t*t*e}function vy(r,e){const t=1-r;return 3*t*t*r*e}function _y(r,e){return 3*(1-r)*r*r*e}function xy(r,e){return r*r*r*e}function oo(r,e,t,s,a){return gy(r,e)+vy(r,t)+_y(r,s)+xy(r,a)}class P0 extends ki{constructor(e=new Be,t=new Be,s=new Be,a=new Be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=s,this.v3=a}getPoint(e,t=new Be){const s=t,a=this.v0,l=this.v1,c=this.v2,f=this.v3;return s.set(oo(e,a.x,l.x,c.x,f.x),oo(e,a.y,l.y,c.y,f.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yy extends ki{constructor(e=new j,t=new j,s=new j,a=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=s,this.v3=a}getPoint(e,t=new j){const s=t,a=this.v0,l=this.v1,c=this.v2,f=this.v3;return s.set(oo(e,a.x,l.x,c.x,f.x),oo(e,a.y,l.y,c.y,f.y),oo(e,a.z,l.z,c.z,f.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class L0 extends ki{constructor(e=new Be,t=new Be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Be){const s=t;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sy extends ki{constructor(e=new j,t=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new j){const s=t;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class N0 extends ki{constructor(e=new Be,t=new Be,s=new Be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=s}getPoint(e,t=new Be){const s=t,a=this.v0,l=this.v1,c=this.v2;return s.set(ao(e,a.x,l.x,c.x),ao(e,a.y,l.y,c.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class My extends ki{constructor(e=new j,t=new j,s=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=s}getPoint(e,t=new j){const s=t,a=this.v0,l=this.v1,c=this.v2;return s.set(ao(e,a.x,l.x,c.x),ao(e,a.y,l.y,c.y),ao(e,a.z,l.z,c.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class D0 extends ki{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Be){const s=t,a=this.points,l=(a.length-1)*e,c=Math.floor(l),f=l-c,h=a[c===0?c:c-1],p=a[c],v=a[c>a.length-2?a.length-1:c+1],_=a[c>a.length-3?a.length-1:c+2];return s.set(dg(f,h.x,p.x,v.x,_.x),dg(f,h.y,p.y,v.y,_.y)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(new Be().fromArray(a))}return this}}var Cd=Object.freeze({__proto__:null,ArcCurve:fy,CatmullRomCurve3:dy,CubicBezierCurve:P0,CubicBezierCurve3:yy,EllipseCurve:Qd,LineCurve:L0,LineCurve3:Sy,QuadraticBezierCurve:N0,QuadraticBezierCurve3:My,SplineCurve:D0});class Ey extends ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const s=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cd[s](t,e))}return this}getPoint(e,t){const s=e*this.getLength(),a=this.getCurveLengths();let l=0;for(;l<a.length;){if(a[l]>=s){const c=a[l]-s,f=this.curves[l],h=f.getLength(),p=h===0?0:1-c/h;return f.getPointAt(p,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let s=0,a=this.curves.length;s<a;s++)t+=this.curves[s].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let s;for(let a=0,l=this.curves;a<l.length;a++){const c=l[a],f=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(f);for(let p=0;p<h.length;p++){const v=h[p];s&&s.equals(v)||(t.push(v),s=v)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,s=e.curves.length;t<s;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,s=this.curves.length;t<s;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,s=e.curves.length;t<s;t++){const a=e.curves[t];this.curves.push(new Cd[a.type]().fromJSON(a))}return this}}class Rd extends Ey{constructor(e){super(),this.type="Path",this.currentPoint=new Be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,s=e.length;t<s;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const s=new L0(this.currentPoint.clone(),new Be(e,t));return this.curves.push(s),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,s,a){const l=new N0(this.currentPoint.clone(),new Be(e,t),new Be(s,a));return this.curves.push(l),this.currentPoint.set(s,a),this}bezierCurveTo(e,t,s,a,l,c){const f=new P0(this.currentPoint.clone(),new Be(e,t),new Be(s,a),new Be(l,c));return this.curves.push(f),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),s=new D0(t);return this.curves.push(s),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,s,a,l,c){const f=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+f,t+h,s,a,l,c),this}absarc(e,t,s,a,l,c){return this.absellipse(e,t,s,s,a,l,c),this}ellipse(e,t,s,a,l,c,f,h){const p=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(e+p,t+v,s,a,l,c,f,h),this}absellipse(e,t,s,a,l,c,f,h){const p=new Qd(e,t,s,a,l,c,f,h);if(this.curves.length>0){const _=p.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(p);const v=p.getPoint(1);return this.currentPoint.copy(v),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class I0 extends Rd{constructor(e){super(e),this.uuid=ds(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let s=0,a=this.holes.length;s<a;s++)t[s]=this.holes[s].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,s=e.holes.length;t<s;t++){const a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,s=this.holes.length;t<s;t++){const a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,s=e.holes.length;t<s;t++){const a=e.holes[t];this.holes.push(new Rd().fromJSON(a))}return this}}function Ty(r,e,t=2){const s=e&&e.length,a=s?e[0]*t:r.length;let l=U0(r,0,a,t,!0);const c=[];if(!l||l.next===l.prev)return c;let f,h,p;if(s&&(l=by(r,e,l,t)),r.length>80*t){f=r[0],h=r[1];let v=f,_=h;for(let g=t;g<a;g+=t){const y=r[g],M=r[g+1];y<f&&(f=y),M<h&&(h=M),y>v&&(v=y),M>_&&(_=M)}p=Math.max(v-f,_-h),p=p!==0?32767/p:0}return ho(l,c,t,f,h,p,0),c}function U0(r,e,t,s,a){let l;if(a===zy(r,e,t,s)>0)for(let c=e;c<t;c+=s)l=hg(c/s|0,r[c],r[c+1],l);else for(let c=t-s;c>=e;c-=s)l=hg(c/s|0,r[c],r[c+1],l);return l&&oa(l,l.next)&&(mo(l),l=l.next),l}function us(r,e){if(!r)return r;e||(e=r);let t=r,s;do if(s=!1,!t.steiner&&(oa(t,t.next)||en(t.prev,t,t.next)===0)){if(mo(t),t=e=t.prev,t===t.next)break;s=!0}else t=t.next;while(s||t!==e);return e}function ho(r,e,t,s,a,l,c){if(!r)return;!c&&l&&Iy(r,s,a,l);let f=r;for(;r.prev!==r.next;){const h=r.prev,p=r.next;if(l?Ay(r,s,a,l):wy(r)){e.push(h.i,r.i,p.i),mo(r),r=p.next,f=p.next;continue}if(r=p,r===f){c?c===1?(r=Cy(us(r),e),ho(r,e,t,s,a,l,2)):c===2&&Ry(r,e,t,s,a,l):ho(us(r),e,t,s,a,l,1);break}}}function wy(r){const e=r.prev,t=r,s=r.next;if(en(e,t,s)>=0)return!1;const a=e.x,l=t.x,c=s.x,f=e.y,h=t.y,p=s.y,v=Math.min(a,l,c),_=Math.min(f,h,p),g=Math.max(a,l,c),y=Math.max(f,h,p);let M=s.next;for(;M!==e;){if(M.x>=v&&M.x<=g&&M.y>=_&&M.y<=y&&io(a,f,l,h,c,p,M.x,M.y)&&en(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function Ay(r,e,t,s){const a=r.prev,l=r,c=r.next;if(en(a,l,c)>=0)return!1;const f=a.x,h=l.x,p=c.x,v=a.y,_=l.y,g=c.y,y=Math.min(f,h,p),M=Math.min(v,_,g),R=Math.max(f,h,p),S=Math.max(v,_,g),x=bd(y,M,e,t,s),O=bd(R,S,e,t,s);let I=r.prevZ,C=r.nextZ;for(;I&&I.z>=x&&C&&C.z<=O;){if(I.x>=y&&I.x<=R&&I.y>=M&&I.y<=S&&I!==a&&I!==c&&io(f,v,h,_,p,g,I.x,I.y)&&en(I.prev,I,I.next)>=0||(I=I.prevZ,C.x>=y&&C.x<=R&&C.y>=M&&C.y<=S&&C!==a&&C!==c&&io(f,v,h,_,p,g,C.x,C.y)&&en(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;I&&I.z>=x;){if(I.x>=y&&I.x<=R&&I.y>=M&&I.y<=S&&I!==a&&I!==c&&io(f,v,h,_,p,g,I.x,I.y)&&en(I.prev,I,I.next)>=0)return!1;I=I.prevZ}for(;C&&C.z<=O;){if(C.x>=y&&C.x<=R&&C.y>=M&&C.y<=S&&C!==a&&C!==c&&io(f,v,h,_,p,g,C.x,C.y)&&en(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function Cy(r,e){let t=r;do{const s=t.prev,a=t.next.next;!oa(s,a)&&O0(s,t,t.next,a)&&po(s,a)&&po(a,s)&&(e.push(s.i,t.i,a.i),mo(t),mo(t.next),t=r=a),t=t.next}while(t!==r);return us(t)}function Ry(r,e,t,s,a,l){let c=r;do{let f=c.next.next;for(;f!==c.prev;){if(c.i!==f.i&&Oy(c,f)){let h=k0(c,f);c=us(c,c.next),h=us(h,h.next),ho(c,e,t,s,a,l,0),ho(h,e,t,s,a,l,0);return}f=f.next}c=c.next}while(c!==r)}function by(r,e,t,s){const a=[];for(let l=0,c=e.length;l<c;l++){const f=e[l]*s,h=l<c-1?e[l+1]*s:r.length,p=U0(r,f,h,s,!1);p===p.next&&(p.steiner=!0),a.push(Fy(p))}a.sort(Py);for(let l=0;l<a.length;l++)t=Ly(a[l],t);return t}function Py(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const s=(r.next.y-r.y)/(r.next.x-r.x),a=(e.next.y-e.y)/(e.next.x-e.x);t=s-a}return t}function Ly(r,e){const t=Ny(r,e);if(!t)return e;const s=k0(t,r);return us(s,s.next),us(t,t.next)}function Ny(r,e){let t=e;const s=r.x,a=r.y;let l=-1/0,c;if(oa(r,t))return t;do{if(oa(r,t.next))return t.next;if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const _=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(_<=s&&_>l&&(l=_,c=t.x<t.next.x?t:t.next,_===s))return c}t=t.next}while(t!==e);if(!c)return null;const f=c,h=c.x,p=c.y;let v=1/0;t=c;do{if(s>=t.x&&t.x>=h&&s!==t.x&&F0(a<p?s:l,a,h,p,a<p?l:s,a,t.x,t.y)){const _=Math.abs(a-t.y)/(s-t.x);po(t,r)&&(_<v||_===v&&(t.x>c.x||t.x===c.x&&Dy(c,t)))&&(c=t,v=_)}t=t.next}while(t!==f);return c}function Dy(r,e){return en(r.prev,r,e.prev)<0&&en(e.next,r,r.next)<0}function Iy(r,e,t,s){let a=r;do a.z===0&&(a.z=bd(a.x,a.y,e,t,s)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==r);a.prevZ.nextZ=null,a.prevZ=null,Uy(a)}function Uy(r){let e,t=1;do{let s=r,a;r=null;let l=null;for(e=0;s;){e++;let c=s,f=0;for(let p=0;p<t&&(f++,c=c.nextZ,!!c);p++);let h=t;for(;f>0||h>0&&c;)f!==0&&(h===0||!c||s.z<=c.z)?(a=s,s=s.nextZ,f--):(a=c,c=c.nextZ,h--),l?l.nextZ=a:r=a,a.prevZ=l,l=a;s=c}l.nextZ=null,t*=2}while(e>1);return r}function bd(r,e,t,s,a){return r=(r-t)*a|0,e=(e-s)*a|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Fy(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function F0(r,e,t,s,a,l,c,f){return(a-c)*(e-f)>=(r-c)*(l-f)&&(r-c)*(s-f)>=(t-c)*(e-f)&&(t-c)*(l-f)>=(a-c)*(s-f)}function io(r,e,t,s,a,l,c,f){return!(r===c&&e===f)&&F0(r,e,t,s,a,l,c,f)}function Oy(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!ky(r,e)&&(po(r,e)&&po(e,r)&&By(r,e)&&(en(r.prev,r,e.prev)||en(r,e.prev,e))||oa(r,e)&&en(r.prev,r,r.next)>0&&en(e.prev,e,e.next)>0)}function en(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function oa(r,e){return r.x===e.x&&r.y===e.y}function O0(r,e,t,s){const a=Yl(en(r,e,t)),l=Yl(en(r,e,s)),c=Yl(en(t,s,r)),f=Yl(en(t,s,e));return!!(a!==l&&c!==f||a===0&&Xl(r,t,e)||l===0&&Xl(r,s,e)||c===0&&Xl(t,r,s)||f===0&&Xl(t,e,s))}function Xl(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Yl(r){return r>0?1:r<0?-1:0}function ky(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&O0(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function po(r,e){return en(r.prev,r,r.next)<0?en(r,e,r.next)>=0&&en(r,r.prev,e)>=0:en(r,e,r.prev)<0||en(r,r.next,e)<0}function By(r,e){let t=r,s=!1;const a=(r.x+e.x)/2,l=(r.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&a<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(s=!s),t=t.next;while(t!==r);return s}function k0(r,e){const t=Pd(r.i,r.x,r.y),s=Pd(e.i,e.x,e.y),a=r.next,l=e.prev;return r.next=e,e.prev=r,t.next=a,a.prev=t,s.next=t,t.prev=s,l.next=s,s.prev=l,s}function hg(r,e,t,s){const a=Pd(r,e,t);return s?(a.next=s.next,a.prev=s,s.next.prev=a,s.next=a):(a.prev=a,a.next=a),a}function mo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Pd(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function zy(r,e,t,s){let a=0;for(let l=e,c=t-s;l<t;l+=s)a+=(r[c]-r[l])*(r[l+1]+r[c+1]),c=l;return a}class Vy{static triangulate(e,t,s=2){return Ty(e,t,s)}}class Js{static area(e){const t=e.length;let s=0;for(let a=t-1,l=0;l<t;a=l++)s+=e[a].x*e[l].y-e[l].x*e[a].y;return s*.5}static isClockWise(e){return Js.area(e)<0}static triangulateShape(e,t){const s=[],a=[],l=[];pg(e),mg(s,e);let c=e.length;t.forEach(pg);for(let h=0;h<t.length;h++)a.push(c),c+=t[h].length,mg(s,t[h]);const f=Vy.triangulate(s,a);for(let h=0;h<f.length;h+=3)l.push(f.slice(h,h+3));return l}}function pg(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function mg(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class th extends Wn{constructor(e=new I0([new Be(.5,.5),new Be(-.5,.5),new Be(-.5,-.5),new Be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const s=this,a=[],l=[];for(let f=0,h=e.length;f<h;f++){const p=e[f];c(p)}this.setAttribute("position",new cn(a,3)),this.setAttribute("uv",new cn(l,2)),this.computeVertexNormals();function c(f){const h=[],p=t.curveSegments!==void 0?t.curveSegments:12,v=t.steps!==void 0?t.steps:1,_=t.depth!==void 0?t.depth:1;let g=t.bevelEnabled!==void 0?t.bevelEnabled:!0,y=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:y-.1,R=t.bevelOffset!==void 0?t.bevelOffset:0,S=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,O=t.UVGenerator!==void 0?t.UVGenerator:Hy;let I,C=!1,F,N,k,T;if(x){I=x.getSpacedPoints(v),C=!0,g=!1;const ve=x.isCatmullRomCurve3?x.closed:!1;F=x.computeFrenetFrames(v,ve),N=new j,k=new j,T=new j}g||(S=0,y=0,M=0,R=0);const L=f.extractPoints(p);let H=L.shape;const V=L.holes;if(!Js.isClockWise(H)){H=H.reverse();for(let ve=0,Se=V.length;ve<Se;ve++){const ye=V[ve];Js.isClockWise(ye)&&(V[ve]=ye.reverse())}}function z(ve){const ye=10000000000000001e-36;let Ie=ve[0];for(let Ue=1;Ue<=ve.length;Ue++){const lt=Ue%ve.length,$e=ve[lt],ut=$e.x-Ie.x,mt=$e.y-Ie.y,D=ut*ut+mt*mt,He=Math.max(Math.abs($e.x),Math.abs($e.y),Math.abs(Ie.x),Math.abs(Ie.y)),et=ye*He*He;if(D<=et){ve.splice(lt,1),Ue--;continue}Ie=$e}}z(H),V.forEach(z);const te=V.length,W=H;for(let ve=0;ve<te;ve++){const Se=V[ve];H=H.concat(Se)}function ie(ve,Se,ye){return Se||Pt("ExtrudeGeometry: vec does not exist"),ve.clone().addScaledVector(Se,ye)}const $=H.length;function Y(ve,Se,ye){let Ie,Ue,lt;const $e=ve.x-Se.x,ut=ve.y-Se.y,mt=ye.x-ve.x,D=ye.y-ve.y,He=$e*$e+ut*ut,et=$e*D-ut*mt;if(Math.abs(et)>Number.EPSILON){const b=Math.sqrt(He),E=Math.sqrt(mt*mt+D*D),J=Se.x-ut/b,re=Se.y+$e/b,de=ye.x-D/E,Ae=ye.y+mt/E,we=((de-J)*D-(Ae-re)*mt)/($e*D-ut*mt);Ie=J+$e*we-ve.x,Ue=re+ut*we-ve.y;const he=Ie*Ie+Ue*Ue;if(he<=2)return new Be(Ie,Ue);lt=Math.sqrt(he/2)}else{let b=!1;$e>Number.EPSILON?mt>Number.EPSILON&&(b=!0):$e<-Number.EPSILON?mt<-Number.EPSILON&&(b=!0):Math.sign(ut)===Math.sign(D)&&(b=!0),b?(Ie=-ut,Ue=$e,lt=Math.sqrt(He)):(Ie=$e,Ue=ut,lt=Math.sqrt(He/2))}return new Be(Ie/lt,Ue/lt)}const ee=[];for(let ve=0,Se=W.length,ye=Se-1,Ie=ve+1;ve<Se;ve++,ye++,Ie++)ye===Se&&(ye=0),Ie===Se&&(Ie=0),ee[ve]=Y(W[ve],W[ye],W[Ie]);const le=[];let U,Q=ee.concat();for(let ve=0,Se=te;ve<Se;ve++){const ye=V[ve];U=[];for(let Ie=0,Ue=ye.length,lt=Ue-1,$e=Ie+1;Ie<Ue;Ie++,lt++,$e++)lt===Ue&&(lt=0),$e===Ue&&($e=0),U[Ie]=Y(ye[Ie],ye[lt],ye[$e]);le.push(U),Q=Q.concat(U)}let Te;if(S===0)Te=Js.triangulateShape(W,V);else{const ve=[],Se=[];for(let ye=0;ye<S;ye++){const Ie=ye/S,Ue=y*Math.cos(Ie*Math.PI/2),lt=M*Math.sin(Ie*Math.PI/2)+R;for(let $e=0,ut=W.length;$e<ut;$e++){const mt=ie(W[$e],ee[$e],lt);Pe(mt.x,mt.y,-Ue),Ie===0&&ve.push(mt)}for(let $e=0,ut=te;$e<ut;$e++){const mt=V[$e];U=le[$e];const D=[];for(let He=0,et=mt.length;He<et;He++){const b=ie(mt[He],U[He],lt);Pe(b.x,b.y,-Ue),Ie===0&&D.push(b)}Ie===0&&Se.push(D)}}Te=Js.triangulateShape(ve,Se)}const qe=Te.length,Ge=M+R;for(let ve=0;ve<$;ve++){const Se=g?ie(H[ve],Q[ve],Ge):H[ve];C?(k.copy(F.normals[0]).multiplyScalar(Se.x),N.copy(F.binormals[0]).multiplyScalar(Se.y),T.copy(I[0]).add(k).add(N),Pe(T.x,T.y,T.z)):Pe(Se.x,Se.y,0)}for(let ve=1;ve<=v;ve++)for(let Se=0;Se<$;Se++){const ye=g?ie(H[Se],Q[Se],Ge):H[Se];C?(k.copy(F.normals[ve]).multiplyScalar(ye.x),N.copy(F.binormals[ve]).multiplyScalar(ye.y),T.copy(I[ve]).add(k).add(N),Pe(T.x,T.y,T.z)):Pe(ye.x,ye.y,_/v*ve)}for(let ve=S-1;ve>=0;ve--){const Se=ve/S,ye=y*Math.cos(Se*Math.PI/2),Ie=M*Math.sin(Se*Math.PI/2)+R;for(let Ue=0,lt=W.length;Ue<lt;Ue++){const $e=ie(W[Ue],ee[Ue],Ie);Pe($e.x,$e.y,_+ye)}for(let Ue=0,lt=V.length;Ue<lt;Ue++){const $e=V[Ue];U=le[Ue];for(let ut=0,mt=$e.length;ut<mt;ut++){const D=ie($e[ut],U[ut],Ie);C?Pe(D.x,D.y+I[v-1].y,I[v-1].x+ye):Pe(D.x,D.y,_+ye)}}}ce(),_e();function ce(){const ve=a.length/3;if(g){let Se=0,ye=$*Se;for(let Ie=0;Ie<qe;Ie++){const Ue=Te[Ie];Ke(Ue[2]+ye,Ue[1]+ye,Ue[0]+ye)}Se=v+S*2,ye=$*Se;for(let Ie=0;Ie<qe;Ie++){const Ue=Te[Ie];Ke(Ue[0]+ye,Ue[1]+ye,Ue[2]+ye)}}else{for(let Se=0;Se<qe;Se++){const ye=Te[Se];Ke(ye[2],ye[1],ye[0])}for(let Se=0;Se<qe;Se++){const ye=Te[Se];Ke(ye[0]+$*v,ye[1]+$*v,ye[2]+$*v)}}s.addGroup(ve,a.length/3-ve,0)}function _e(){const ve=a.length/3;let Se=0;pe(W,Se),Se+=W.length;for(let ye=0,Ie=V.length;ye<Ie;ye++){const Ue=V[ye];pe(Ue,Se),Se+=Ue.length}s.addGroup(ve,a.length/3-ve,1)}function pe(ve,Se){let ye=ve.length;for(;--ye>=0;){const Ie=ye;let Ue=ye-1;Ue<0&&(Ue=ve.length-1);for(let lt=0,$e=v+S*2;lt<$e;lt++){const ut=$*lt,mt=$*(lt+1),D=Se+Ie+ut,He=Se+Ue+ut,et=Se+Ue+mt,b=Se+Ie+mt;rt(D,He,et,b)}}}function Pe(ve,Se,ye){h.push(ve),h.push(Se),h.push(ye)}function Ke(ve,Se,ye){bt(ve),bt(Se),bt(ye);const Ie=a.length/3,Ue=O.generateTopUV(s,a,Ie-3,Ie-2,Ie-1);ft(Ue[0]),ft(Ue[1]),ft(Ue[2])}function rt(ve,Se,ye,Ie){bt(ve),bt(Se),bt(Ie),bt(Se),bt(ye),bt(Ie);const Ue=a.length/3,lt=O.generateSideWallUV(s,a,Ue-6,Ue-3,Ue-2,Ue-1);ft(lt[0]),ft(lt[1]),ft(lt[3]),ft(lt[1]),ft(lt[2]),ft(lt[3])}function bt(ve){a.push(h[ve*3+0]),a.push(h[ve*3+1]),a.push(h[ve*3+2])}function ft(ve){l.push(ve.x),l.push(ve.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,s=this.parameters.options;return Gy(t,s,e)}static fromJSON(e,t){const s=[];for(let l=0,c=e.shapes.length;l<c;l++){const f=t[e.shapes[l]];s.push(f)}const a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new Cd[a.type]().fromJSON(a)),new th(s,e.options)}}const Hy={generateTopUV:function(r,e,t,s,a){const l=e[t*3],c=e[t*3+1],f=e[s*3],h=e[s*3+1],p=e[a*3],v=e[a*3+1];return[new Be(l,c),new Be(f,h),new Be(p,v)]},generateSideWallUV:function(r,e,t,s,a,l){const c=e[t*3],f=e[t*3+1],h=e[t*3+2],p=e[s*3],v=e[s*3+1],_=e[s*3+2],g=e[a*3],y=e[a*3+1],M=e[a*3+2],R=e[l*3],S=e[l*3+1],x=e[l*3+2];return Math.abs(f-v)<Math.abs(c-p)?[new Be(c,1-h),new Be(p,1-_),new Be(g,1-M),new Be(R,1-x)]:[new Be(f,1-h),new Be(v,1-_),new Be(y,1-M),new Be(S,1-x)]}};function Gy(r,e,t){if(t.shapes=[],Array.isArray(r))for(let s=0,a=r.length;s<a;s++){const l=r[s];t.shapes.push(l.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class pc extends Wn{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(s),h=Math.floor(a),p=f+1,v=h+1,_=e/f,g=t/h,y=[],M=[],R=[],S=[];for(let x=0;x<v;x++){const O=x*g-c;for(let I=0;I<p;I++){const C=I*_-l;M.push(C,-O,0),R.push(0,0,1),S.push(I/f),S.push(1-x/h)}}for(let x=0;x<h;x++)for(let O=0;O<f;O++){const I=O+p*x,C=O+p*(x+1),F=O+1+p*(x+1),N=O+1+p*x;y.push(I,C,N),y.push(C,F,N)}this.setIndex(y),this.setAttribute("position",new cn(M,3)),this.setAttribute("normal",new cn(R,3)),this.setAttribute("uv",new cn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.width,e.height,e.widthSegments,e.heightSegments)}}function la(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];if(gg(a))a.isRenderTargetTexture?(gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone();else if(Array.isArray(a))if(gg(a[0])){const l=[];for(let c=0,f=a.length;c<f;c++)l[c]=a[c].clone();e[t][s]=l}else e[t][s]=a.slice();else e[t][s]=a}}return e}function Dn(r){const e={};for(let t=0;t<r.length;t++){const s=la(r[t]);for(const a in s)e[a]=s[a]}return e}function gg(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Wy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function B0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const Xy={clone:la,merge:Dn};var Yy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends ua{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yy,this.fragmentShader=qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=la(e.uniforms),this.uniformsGroups=Wy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(this.uniforms[s]={},a.type){case"t":this.uniforms[s].value=t[a.value]||null;break;case"c":this.uniforms[s].value=new vt().setHex(a.value);break;case"v2":this.uniforms[s].value=new Be().fromArray(a.value);break;case"v3":this.uniforms[s].value=new j().fromArray(a.value);break;case"v4":this.uniforms[s].value=new Qt().fromArray(a.value);break;case"m3":this.uniforms[s].value=new Et().fromArray(a.value);break;case"m4":this.uniforms[s].value=new qt().fromArray(a.value);break;default:this.uniforms[s].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class jy extends Oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $y extends ua{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ad,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zy extends ua{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ky extends ua{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class z0 extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Jy extends z0{constructor(e,t,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Pf=new qt,vg=new j,_g=new j;class Qy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zd,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;vg.setFromMatrixPosition(e.matrixWorld),t.position.copy(vg),_g.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_g),t.updateMatrixWorld(),Pf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===uo||t.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Pf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ql=new j,jl=new ca,Ci=new j;class V0 extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ql,jl,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,jl,Ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,s=!1){super.updateWorldMatrix(e,t,s),this.matrixWorld.decompose(ql,jl,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,jl,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new j,xg=new Be,yg=new Be;class oi extends V0{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,xg,yg),t.subVectors(yg,xg)}setViewOffset(e,t,s,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(na*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*s/p,a*=c.width/h,s*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class nh extends V0{constructor(e=-1,t=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class eS extends Qy{constructor(){super(new nh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sg extends z0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new eS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const js=-90,$s=1;class tS extends gn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new oi(js,$s,e,t);a.layers=this.layers,this.add(a);const l=new oi(js,$s,e,t);l.layers=this.layers,this.add(l);const c=new oi(js,$s,e,t);c.layers=this.layers,this.add(c);const f=new oi(js,$s,e,t);f.layers=this.layers,this.add(f);const h=new oi(js,$s,e,t);h.layers=this.layers,this.add(h);const p=new oi(js,$s,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===Ni)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===uo)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(s,2,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(s,3,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(s,4,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(_,g,y),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class nS extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Mg=new qt;class iS{constructor(e,t,s=0,a=1/0){this.ray=new $d(e,t),this.near=s,this.far=a,this.camera=null,this.layers=new qd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Pt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Mg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mg),this}intersectObject(e,t=!0,s=[]){return Ld(e,this,s,t),s.sort(Eg),s}intersectObjects(e,t=!0,s=[]){for(let a=0,l=e.length;a<l;a++)Ld(e[a],this,s,t);return s.sort(Eg),s}}function Eg(r,e){return r.distance-e.distance}function Ld(r,e,t,s){let a=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(a=!1),a===!0&&s===!0){const l=r.children;for(let c=0,f=l.length;c<f;c++)Ld(l[c],e,t,!0)}}const oh=class oh{constructor(e,t,s,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,a){const l=this.elements;return l[0]=e,l[2]=t,l[1]=s,l[3]=a,this}};oh.prototype.isMatrix2=!0;let Tg=oh;class rS extends C0{constructor(e=10,t=10,s=4473924,a=8947848){s=new vt(s),a=new vt(a);const l=t/2,c=e/t,f=e/2,h=[],p=[];for(let g=0,y=0,M=-f;g<=t;g++,M+=c){h.push(-f,0,M,f,0,M),h.push(M,0,-f,M,0,f);const R=g===l?s:a;R.toArray(p,y),y+=3,R.toArray(p,y),y+=3,R.toArray(p,y),y+=3,R.toArray(p,y),y+=3}const v=new Wn;v.setAttribute("position",new cn(h,3)),v.setAttribute("color",new cn(p,3));const _=new Kd({vertexColors:!0,toneMapped:!1});super(v,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function wg(r,e,t,s){const a=sS(s);switch(t){case _0:return r*e;case y0:return r*e/a.components*a.byteLength;case zd:return r*e/a.components*a.byteLength;case cs:return r*e*2/a.components*a.byteLength;case Vd:return r*e*2/a.components*a.byteLength;case x0:return r*e*3/a.components*a.byteLength;case yi:return r*e*4/a.components*a.byteLength;case Hd:return r*e*4/a.components*a.byteLength;case Ql:case ec:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case tc:case nc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kf:case Qf:return Math.max(r,16)*Math.max(e,8)/4;case Zf:case Jf:return Math.max(r,8)*Math.max(e,8)/2;case ed:case td:case id:case rd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case nd:case rc:case sd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ad:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case od:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ld:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case cd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ud:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case fd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case dd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case hd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case pd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case md:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case gd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case vd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case _d:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case xd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case yd:case Sd:case Md:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ed:case Td:return Math.ceil(r/4)*Math.ceil(e/4)*8;case sc:case wd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sS(r){switch(r){case Jn:case p0:return{byteLength:1,components:1};case lo:case m0:case nr:return{byteLength:2,components:1};case kd:case Bd:return{byteLength:2,components:4};case Ui:case Od:case Li:return{byteLength:4,components:1};case g0:case v0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fd}}));typeof window<"u"&&(window.__THREE__?gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function H0(){let r=null,e=!1,t=null,s=null;function a(l,c){t(l,c),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function aS(r){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,_=p.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,p,v),f.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function s(f,h,p){const v=h.array,_=h.updateRanges;if(r.bindBuffer(p,f),_.length===0)r.bufferSubData(p,0,v);else{_.sort((y,M)=>y.start-M.start);let g=0;for(let y=1;y<_.length;y++){const M=_[g],R=_[y];R.start<=M.start+M.count+1?M.count=Math.max(M.count,R.start+R.count-M.start):(++g,_[g]=R)}_.length=g+1;for(let y=0,M=_.length;y<M;y++){const R=_[y];r.bufferSubData(p,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:c}}var oS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lS=`#ifdef USE_ALPHAHASH
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
#endif`,cS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hS=`#ifdef USE_AOMAP
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
#endif`,pS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mS=`#ifdef USE_BATCHING
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
#endif`,gS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_S=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yS=`#ifdef USE_IRIDESCENCE
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
#endif`,SS=`#ifdef USE_BUMPMAP
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
#endif`,MS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,CS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,RS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,PS=`#define PI 3.141592653589793
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
} // validated`,LS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NS=`vec3 transformedNormal = objectNormal;
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
#endif`,DS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,US=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OS="gl_FragColor = linearToOutputTexel( gl_FragColor );",kS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BS=`#ifdef USE_ENVMAP
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
#endif`,zS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,VS=`#ifdef USE_ENVMAP
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
#endif`,HS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GS=`#ifdef USE_ENVMAP
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
#endif`,WS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jS=`#ifdef USE_GRADIENTMAP
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
}`,$S=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,QS=`#ifdef USE_ENVMAP
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
#endif`,eM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rM=`PhysicalMaterial material;
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
#endif`,sM=`uniform sampler2D dfgLUT;
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
}`,aM=`
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
#endif`,oM=`#if defined( RE_IndirectDiffuse )
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
#endif`,lM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,uM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vM=`#if defined( USE_POINTS_UV )
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
#endif`,_M=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,MM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EM=`#ifdef USE_MORPHTARGETS
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
#endif`,TM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,AM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,CM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,PM=`#ifdef USE_NORMALMAP
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
#endif`,LM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,YM=`float getShadowMask() {
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
}`,qM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jM=`#ifdef USE_SKINNING
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
#endif`,$M=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZM=`#ifdef USE_SKINNING
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
#endif`,KM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tE=`#ifdef USE_TRANSMISSION
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
#endif`,nE=`#ifdef USE_TRANSMISSION
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
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lE=`uniform sampler2D t2D;
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
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`#include <common>
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
}`,pE=`#if DEPTH_PACKING == 3200
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
}`,mE=`#define DISTANCE
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
}`,gE=`#define DISTANCE
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
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_E=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`uniform float scale;
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
}`,yE=`uniform vec3 diffuse;
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
}`,SE=`#include <common>
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
}`,ME=`uniform vec3 diffuse;
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
}`,EE=`#define LAMBERT
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
}`,TE=`#define LAMBERT
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
}`,wE=`#define MATCAP
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
}`,AE=`#define MATCAP
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
}`,CE=`#define NORMAL
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
}`,RE=`#define NORMAL
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
}`,bE=`#define PHONG
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
}`,PE=`#define PHONG
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
}`,LE=`#define STANDARD
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
}`,NE=`#define STANDARD
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
}`,DE=`#define TOON
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
}`,IE=`#define TOON
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
}`,UE=`uniform float size;
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
}`,FE=`uniform vec3 diffuse;
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
}`,OE=`#include <common>
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
}`,kE=`uniform vec3 color;
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
}`,BE=`uniform float rotation;
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
}`,zE=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:oS,alphahash_pars_fragment:lS,alphamap_fragment:cS,alphamap_pars_fragment:uS,alphatest_fragment:fS,alphatest_pars_fragment:dS,aomap_fragment:hS,aomap_pars_fragment:pS,batching_pars_vertex:mS,batching_vertex:gS,begin_vertex:vS,beginnormal_vertex:_S,bsdfs:xS,iridescence_fragment:yS,bumpmap_pars_fragment:SS,clipping_planes_fragment:MS,clipping_planes_pars_fragment:ES,clipping_planes_pars_vertex:TS,clipping_planes_vertex:wS,color_fragment:AS,color_pars_fragment:CS,color_pars_vertex:RS,color_vertex:bS,common:PS,cube_uv_reflection_fragment:LS,defaultnormal_vertex:NS,displacementmap_pars_vertex:DS,displacementmap_vertex:IS,emissivemap_fragment:US,emissivemap_pars_fragment:FS,colorspace_fragment:OS,colorspace_pars_fragment:kS,envmap_fragment:BS,envmap_common_pars_fragment:zS,envmap_pars_fragment:VS,envmap_pars_vertex:HS,envmap_physical_pars_fragment:QS,envmap_vertex:GS,fog_vertex:WS,fog_pars_vertex:XS,fog_fragment:YS,fog_pars_fragment:qS,gradientmap_pars_fragment:jS,lightmap_pars_fragment:$S,lights_lambert_fragment:ZS,lights_lambert_pars_fragment:KS,lights_pars_begin:JS,lights_toon_fragment:eM,lights_toon_pars_fragment:tM,lights_phong_fragment:nM,lights_phong_pars_fragment:iM,lights_physical_fragment:rM,lights_physical_pars_fragment:sM,lights_fragment_begin:aM,lights_fragment_maps:oM,lights_fragment_end:lM,lightprobes_pars_fragment:cM,logdepthbuf_fragment:uM,logdepthbuf_pars_fragment:fM,logdepthbuf_pars_vertex:dM,logdepthbuf_vertex:hM,map_fragment:pM,map_pars_fragment:mM,map_particle_fragment:gM,map_particle_pars_fragment:vM,metalnessmap_fragment:_M,metalnessmap_pars_fragment:xM,morphinstance_vertex:yM,morphcolor_vertex:SM,morphnormal_vertex:MM,morphtarget_pars_vertex:EM,morphtarget_vertex:TM,normal_fragment_begin:wM,normal_fragment_maps:AM,normal_pars_fragment:CM,normal_pars_vertex:RM,normal_vertex:bM,normalmap_pars_fragment:PM,clearcoat_normal_fragment_begin:LM,clearcoat_normal_fragment_maps:NM,clearcoat_pars_fragment:DM,iridescence_pars_fragment:IM,opaque_fragment:UM,packing:FM,premultiplied_alpha_fragment:OM,project_vertex:kM,dithering_fragment:BM,dithering_pars_fragment:zM,roughnessmap_fragment:VM,roughnessmap_pars_fragment:HM,shadowmap_pars_fragment:GM,shadowmap_pars_vertex:WM,shadowmap_vertex:XM,shadowmask_pars_fragment:YM,skinbase_vertex:qM,skinning_pars_vertex:jM,skinning_vertex:$M,skinnormal_vertex:ZM,specularmap_fragment:KM,specularmap_pars_fragment:JM,tonemapping_fragment:QM,tonemapping_pars_fragment:eE,transmission_fragment:tE,transmission_pars_fragment:nE,uv_pars_fragment:iE,uv_pars_vertex:rE,uv_vertex:sE,worldpos_vertex:aE,background_vert:oE,background_frag:lE,backgroundCube_vert:cE,backgroundCube_frag:uE,cube_vert:fE,cube_frag:dE,depth_vert:hE,depth_frag:pE,distance_vert:mE,distance_frag:gE,equirect_vert:vE,equirect_frag:_E,linedashed_vert:xE,linedashed_frag:yE,meshbasic_vert:SE,meshbasic_frag:ME,meshlambert_vert:EE,meshlambert_frag:TE,meshmatcap_vert:wE,meshmatcap_frag:AE,meshnormal_vert:CE,meshnormal_frag:RE,meshphong_vert:bE,meshphong_frag:PE,meshphysical_vert:LE,meshphysical_frag:NE,meshtoon_vert:DE,meshtoon_frag:IE,points_vert:UE,points_frag:FE,shadow_vert:OE,shadow_frag:kE,sprite_vert:BE,sprite_frag:zE},Ve={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},bi={basic:{uniforms:Dn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Dn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Dn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Dn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Dn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new vt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Dn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Dn([Ve.points,Ve.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Dn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Dn([Ve.common,Ve.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Dn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Dn([Ve.sprite,Ve.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:Dn([Ve.common,Ve.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:Dn([Ve.lights,Ve.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};bi.physical={uniforms:Dn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const $l={r:0,b:0,g:0},VE=new qt,G0=new Et;G0.set(-1,0,0,0,1,0,0,0,1);function HE(r,e,t,s,a,l){const c=new vt(0);let f=a===!0?0:1,h,p,v=null,_=0,g=null;function y(O){let I=O.isScene===!0?O.background:null;if(I&&I.isTexture){const C=O.backgroundBlurriness>0;I=e.get(I,C)}return I}function M(O){let I=!1;const C=y(O);C===null?S(c,f):C&&C.isColor&&(S(C,1),I=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?t.buffers.color.setClear(0,0,0,1,l):F==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function R(O,I){const C=y(I);C&&(C.isCubeTexture||C.mapping===dc)?(p===void 0&&(p=new Fi(new Nr(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:la(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,N,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(VE.makeRotationFromEuler(I.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(G0),p.material.toneMapped=Lt.getTransfer(C.colorSpace)!==Bt,(v!==C||_!==C.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,v=C,_=C.version,g=r.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new Fi(new pc(2,2),new Oi({name:"BackgroundMaterial",uniforms:la(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.toneMapped=Lt.getTransfer(C.colorSpace)!==Bt,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||_!==C.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,v=C,_=C.version,g=r.toneMapping),h.layers.enableAll(),O.unshift(h,h.geometry,h.material,0,0,null))}function S(O,I){O.getRGB($l,B0(r)),t.buffers.color.setClear($l.r,$l.g,$l.b,I,l)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(O,I=1){c.set(O),f=I,S(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(O){f=O,S(c,f)},render:M,addToRenderList:R,dispose:x}}function GE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=g(null);let l=a,c=!1;function f(V,Z,z,te,W){let ie=!1;const $=_(V,te,z,Z);l!==$&&(l=$,p(l.object)),ie=y(V,te,z,W),ie&&M(V,te,z,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(ie||c)&&(c=!1,C(V,Z,z,te),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function h(){return r.createVertexArray()}function p(V){return r.bindVertexArray(V)}function v(V){return r.deleteVertexArray(V)}function _(V,Z,z,te){const W=te.wireframe===!0;let ie=s[Z.id];ie===void 0&&(ie={},s[Z.id]=ie);const $=V.isInstancedMesh===!0?V.id:0;let Y=ie[$];Y===void 0&&(Y={},ie[$]=Y);let ee=Y[z.id];ee===void 0&&(ee={},Y[z.id]=ee);let le=ee[W];return le===void 0&&(le=g(h()),ee[W]=le),le}function g(V){const Z=[],z=[],te=[];for(let W=0;W<t;W++)Z[W]=0,z[W]=0,te[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:z,attributeDivisors:te,object:V,attributes:{},index:null}}function y(V,Z,z,te){const W=l.attributes,ie=Z.attributes;let $=0;const Y=z.getAttributes();for(const ee in Y)if(Y[ee].location>=0){const U=W[ee];let Q=ie[ee];if(Q===void 0&&(ee==="instanceMatrix"&&V.instanceMatrix&&(Q=V.instanceMatrix),ee==="instanceColor"&&V.instanceColor&&(Q=V.instanceColor)),U===void 0||U.attribute!==Q||Q&&U.data!==Q.data)return!0;$++}return l.attributesNum!==$||l.index!==te}function M(V,Z,z,te){const W={},ie=Z.attributes;let $=0;const Y=z.getAttributes();for(const ee in Y)if(Y[ee].location>=0){let U=ie[ee];U===void 0&&(ee==="instanceMatrix"&&V.instanceMatrix&&(U=V.instanceMatrix),ee==="instanceColor"&&V.instanceColor&&(U=V.instanceColor));const Q={};Q.attribute=U,U&&U.data&&(Q.data=U.data),W[ee]=Q,$++}l.attributes=W,l.attributesNum=$,l.index=te}function R(){const V=l.newAttributes;for(let Z=0,z=V.length;Z<z;Z++)V[Z]=0}function S(V){x(V,0)}function x(V,Z){const z=l.newAttributes,te=l.enabledAttributes,W=l.attributeDivisors;z[V]=1,te[V]===0&&(r.enableVertexAttribArray(V),te[V]=1),W[V]!==Z&&(r.vertexAttribDivisor(V,Z),W[V]=Z)}function O(){const V=l.newAttributes,Z=l.enabledAttributes;for(let z=0,te=Z.length;z<te;z++)Z[z]!==V[z]&&(r.disableVertexAttribArray(z),Z[z]=0)}function I(V,Z,z,te,W,ie,$){$===!0?r.vertexAttribIPointer(V,Z,z,W,ie):r.vertexAttribPointer(V,Z,z,te,W,ie)}function C(V,Z,z,te){R();const W=te.attributes,ie=z.getAttributes(),$=Z.defaultAttributeValues;for(const Y in ie){const ee=ie[Y];if(ee.location>=0){let le=W[Y];if(le===void 0&&(Y==="instanceMatrix"&&V.instanceMatrix&&(le=V.instanceMatrix),Y==="instanceColor"&&V.instanceColor&&(le=V.instanceColor)),le!==void 0){const U=le.normalized,Q=le.itemSize,Te=e.get(le);if(Te===void 0)continue;const qe=Te.buffer,Ge=Te.type,ce=Te.bytesPerElement,_e=Ge===r.INT||Ge===r.UNSIGNED_INT||le.gpuType===Od;if(le.isInterleavedBufferAttribute){const pe=le.data,Pe=pe.stride,Ke=le.offset;if(pe.isInstancedInterleavedBuffer){for(let rt=0;rt<ee.locationSize;rt++)x(ee.location+rt,pe.meshPerAttribute);V.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let rt=0;rt<ee.locationSize;rt++)S(ee.location+rt);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let rt=0;rt<ee.locationSize;rt++)I(ee.location+rt,Q/ee.locationSize,Ge,U,Pe*ce,(Ke+Q/ee.locationSize*rt)*ce,_e)}else{if(le.isInstancedBufferAttribute){for(let pe=0;pe<ee.locationSize;pe++)x(ee.location+pe,le.meshPerAttribute);V.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let pe=0;pe<ee.locationSize;pe++)S(ee.location+pe);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let pe=0;pe<ee.locationSize;pe++)I(ee.location+pe,Q/ee.locationSize,Ge,U,Q*ce,Q/ee.locationSize*pe*ce,_e)}}else if($!==void 0){const U=$[Y];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(ee.location,U);break;case 3:r.vertexAttrib3fv(ee.location,U);break;case 4:r.vertexAttrib4fv(ee.location,U);break;default:r.vertexAttrib1fv(ee.location,U)}}}}O()}function F(){L();for(const V in s){const Z=s[V];for(const z in Z){const te=Z[z];for(const W in te){const ie=te[W];for(const $ in ie)v(ie[$].object),delete ie[$];delete te[W]}}delete s[V]}}function N(V){if(s[V.id]===void 0)return;const Z=s[V.id];for(const z in Z){const te=Z[z];for(const W in te){const ie=te[W];for(const $ in ie)v(ie[$].object),delete ie[$];delete te[W]}}delete s[V.id]}function k(V){for(const Z in s){const z=s[Z];for(const te in z){const W=z[te];if(W[V.id]===void 0)continue;const ie=W[V.id];for(const $ in ie)v(ie[$].object),delete ie[$];delete W[V.id]}}}function T(V){for(const Z in s){const z=s[Z],te=V.isInstancedMesh===!0?V.id:0,W=z[te];if(W!==void 0){for(const ie in W){const $=W[ie];for(const Y in $)v($[Y].object),delete $[Y];delete W[ie]}delete z[te],Object.keys(z).length===0&&delete s[Z]}}}function L(){H(),c=!0,l!==a&&(l=a,p(l.object))}function H(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:L,resetDefaultState:H,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:k,initAttributes:R,enableAttribute:S,disableUnusedAttributes:O}}function WE(r,e,t){let s;function a(h){s=h}function l(h,p){r.drawArrays(s,h,p),t.update(p,s,1)}function c(h,p,v){v!==0&&(r.drawArraysInstanced(s,h,p,v),t.update(p,s,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,p,0,v);let g=0;for(let y=0;y<v;y++)g+=p[y];t.update(g,s,1)}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function XE(r,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(k){return!(k!==yi&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const T=k===nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Jn&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Li&&!T)}function h(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(gt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:M,maxTextureSize:R,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:O,maxVaryings:I,maxFragmentUniforms:C,maxSamples:F,samples:N}}function YE(r){const e=this;let t=null,s=0,a=!1,l=!1;const c=new is,f=new Et,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const y=_.length!==0||g||s!==0||a;return a=g,s=_.length,y},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){t=v(_,g,0)},this.setState=function(_,g,y){const M=_.clippingPlanes,R=_.clipIntersection,S=_.clipShadows,x=r.get(_);if(!a||M===null||M.length===0||l&&!S)l?v(null):p();else{const O=l?0:s,I=O*4;let C=x.clippingState||null;h.value=C,C=v(M,g,I,y);for(let F=0;F!==I;++F)C[F]=t[F];x.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=O}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(_,g,y,M){const R=_!==null?_.length:0;let S=null;if(R!==0){if(S=h.value,M!==!0||S===null){const x=y+R*4,O=g.matrixWorldInverse;f.getNormalMatrix(O),(S===null||S.length<x)&&(S=new Float32Array(x));for(let I=0,C=y;I!==R;++I,C+=4)c.copy(_[I]).applyMatrix4(O,f),c.normal.toArray(S,C),S[C+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}const Lr=4,Ag=[.125,.215,.35,.446,.526,.582],ss=20,qE=256,Qa=new nh,Cg=new vt;let Lf=null,Nf=0,Df=0,If=!1;const jE=new j;class Rg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,a=100,l={}){const{size:c=256,position:f=jE}=l;Lf=this._renderer.getRenderTarget(),Nf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),If=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,a,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Lf,Nf,Df),this._renderer.xr.enabled=If,e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lf=this._renderer.getRenderTarget(),Nf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),If=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:nr,format:yi,colorSpace:ac,depthBuffer:!1},a=bg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bg(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$E(l)),this._blurMaterial=KE(l,e,t),this._ggxMaterial=ZE(l,e,t)}return a}_compileMaterial(e){const t=new Fi(new Wn,e);this._renderer.compile(t,Qa)}_sceneToCubeUV(e,t,s,a,l){const h=new oi(90,1,t,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,y=_.toneMapping;_.getClearColor(Cg),_.toneMapping=Di,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fi(new Nr,new A0({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,S=R.material;let x=!1;const O=e.background;O?O.isColor&&(S.color.copy(O),e.background=null,x=!0):(S.color.copy(Cg),x=!0);for(let I=0;I<6;I++){const C=I%3;C===0?(h.up.set(0,p[I],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[I],l.y,l.z)):C===1?(h.up.set(0,0,p[I]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[I],l.z)):(h.up.set(0,p[I],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[I]));const F=this._cubeSize;Zs(a,C*F,I>2?F:0,F,F),_.setRenderTarget(a),x&&_.render(R,h),_.render(e,h)}_.toneMapping=y,_.autoClear=g,e.background=O}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===ls||e.mapping===sa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Zs(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(c,Qa)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const a=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[s];f.material=c;const h=c.uniforms,p=s/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),g=0+p*1.25,y=_*g,{_lodMax:M}=this,R=this._sizeLods[s],S=3*R*(s>M-Lr?s-M+Lr:0),x=4*(this._cubeSize-R);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=M-t,Zs(l,S,x,3*R,2*R),a.setRenderTarget(l),a.render(f,Qa),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=M-s,Zs(e,S,x,3*R,2*R),a.setRenderTarget(e),a.render(f,Qa)}_blur(e,t,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[a];_.material=p;const g=p.uniforms,y=this._sizeLods[s]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*ss-1),R=l/M,S=isFinite(l)?1+Math.floor(v*R):ss;S>ss&&gt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ss}`);const x=[];let O=0;for(let k=0;k<ss;++k){const T=k/R,L=Math.exp(-T*T/2);x.push(L),k===0?O+=L:k<S&&(O+=2*L)}for(let k=0;k<x.length;k++)x[k]=x[k]/O;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=x,g.latitudinal.value=c==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:I}=this;g.dTheta.value=M,g.mipInt.value=I-s;const C=this._sizeLods[a],F=3*C*(a>I-Lr?a-I+Lr:0),N=4*(this._cubeSize-C);Zs(t,F,N,3*C,2*C),h.setRenderTarget(t),h.render(_,Qa)}}function $E(r){const e=[],t=[],s=[];let a=r;const l=r-Lr+1+Ag.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);e.push(f);let h=1/f;c>r-Lr?h=Ag[c-r+Lr-1]:c===0&&(h=0),t.push(h);const p=1/(f-2),v=-p,_=1+p,g=[v,v,_,v,_,_,v,v,_,_,v,_],y=6,M=6,R=3,S=2,x=1,O=new Float32Array(R*M*y),I=new Float32Array(S*M*y),C=new Float32Array(x*M*y);for(let N=0;N<y;N++){const k=N%3*2/3-1,T=N>2?0:-1,L=[k,T,0,k+2/3,T,0,k+2/3,T+1,0,k,T,0,k+2/3,T+1,0,k,T+1,0];O.set(L,R*M*N),I.set(g,S*M*N);const H=[N,N,N,N,N,N];C.set(H,x*M*N)}const F=new Wn;F.setAttribute("position",new Si(O,R)),F.setAttribute("uv",new Si(I,S)),F.setAttribute("faceIndex",new Si(C,x)),s.push(new Fi(F,null)),a>Lr&&a--}return{lodMeshes:s,sizeLods:e,sigmas:t}}function bg(r,e,t){const s=new Ii(r,e,t);return s.texture.mapping=dc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Zs(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function ZE(r,e,t){return new Oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mc(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function KE(r,e,t){const s=new Float32Array(ss),a=new j(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:mc(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Pg(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Lg(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function mc(){return`

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
	`}class W0 extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new R0(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Nr(5,5,5),l=new Oi({name:"CubemapFromEquirect",uniforms:la(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Gn,blending:er});l.uniforms.tEquirect.value=t;const c=new Fi(a,l),f=t.minFilter;return t.minFilter===as&&(t.minFilter=Rn),new tS(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,a);e.setRenderTarget(l)}}function JE(r){let e=new WeakMap,t=new WeakMap,s=null;function a(g,y=!1){return g==null?null:y?c(g):l(g)}function l(g){if(g&&g.isTexture){const y=g.mapping;if(y===Qu||y===ef)if(e.has(g)){const M=e.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const R=new W0(M.height);return R.fromEquirectangularTexture(r,g),e.set(g,R),g.addEventListener("dispose",p),f(R.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const y=g.mapping,M=y===Qu||y===ef,R=y===ls||y===sa;if(M||R){let S=t.get(g);const x=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new Rg(r)),S=M?s.fromEquirectangular(g,S):s.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),S.texture;if(S!==void 0)return S.texture;{const O=g.image;return M&&O&&O.height>0||R&&O&&h(O)?(s===null&&(s=new Rg(r)),S=M?s.fromEquirectangular(g):s.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function f(g,y){return y===Qu?g.mapping=ls:y===ef&&(g.mapping=sa),g}function h(g){let y=0;const M=6;for(let R=0;R<M;R++)g[R]!==void 0&&y++;return y===M}function p(g){const y=g.target;y.removeEventListener("dispose",p);const M=e.get(y);M!==void 0&&(e.delete(y),M.dispose())}function v(g){const y=g.target;y.removeEventListener("dispose",v);const M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function _(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:a,dispose:_}}function QE(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const a=r.getExtension(s);return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&ta("WebGLRenderer: "+s+" extension not supported."),a}}}function e1(r,e,t,s){const a={},l=new WeakMap;function c(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete a[g.id];const y=l.get(g);y&&(e.remove(y),l.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(_,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,t.memory.geometries++),g}function h(_){const g=_.attributes;for(const y in g)e.update(g[y],r.ARRAY_BUFFER)}function p(_){const g=[],y=_.index,M=_.attributes.position;let R=0;if(M===void 0)return;if(y!==null){const O=y.array;R=y.version;for(let I=0,C=O.length;I<C;I+=3){const F=O[I+0],N=O[I+1],k=O[I+2];g.push(F,N,N,k,k,F)}}else{const O=M.array;R=M.version;for(let I=0,C=O.length/3-1;I<C;I+=3){const F=I+0,N=I+1,k=I+2;g.push(F,N,N,k,k,F)}}const S=new(M.count>=65535?w0:T0)(g,1);S.version=R;const x=l.get(_);x&&e.remove(x),l.set(_,S)}function v(_){const g=l.get(_);if(g){const y=_.index;y!==null&&g.version<y.version&&p(_)}else p(_);return l.get(_)}return{get:f,update:h,getWireframeAttribute:v}}function t1(r,e,t){let s;function a(_){s=_}let l,c;function f(_){l=_.type,c=_.bytesPerElement}function h(_,g){r.drawElements(s,g,l,_*c),t.update(g,s,1)}function p(_,g,y){y!==0&&(r.drawElementsInstanced(s,g,l,_*c,y),t.update(g,s,y))}function v(_,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,l,_,0,y);let R=0;for(let S=0;S<y;S++)R+=g[S];t.update(R,s,1)}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v}function n1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:Pt("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function i1(r,e,t){const s=new WeakMap,a=new Qt;function l(c,f,h){const p=c.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=v!==void 0?v.length:0;let g=s.get(f);if(g===void 0||g.count!==_){let H=function(){T.dispose(),s.delete(f),f.removeEventListener("dispose",H)};var y=H;g!==void 0&&g.texture.dispose();const M=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],O=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let C=0;M===!0&&(C=1),R===!0&&(C=2),S===!0&&(C=3);let F=f.attributes.position.count*C,N=1;F>e.maxTextureSize&&(N=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const k=new Float32Array(F*N*4*_),T=new M0(k,F,N,_);T.type=Li,T.needsUpdate=!0;const L=C*4;for(let V=0;V<_;V++){const Z=x[V],z=O[V],te=I[V],W=F*N*4*V;for(let ie=0;ie<Z.count;ie++){const $=ie*L;M===!0&&(a.fromBufferAttribute(Z,ie),k[W+$+0]=a.x,k[W+$+1]=a.y,k[W+$+2]=a.z,k[W+$+3]=0),R===!0&&(a.fromBufferAttribute(z,ie),k[W+$+4]=a.x,k[W+$+5]=a.y,k[W+$+6]=a.z,k[W+$+7]=0),S===!0&&(a.fromBufferAttribute(te,ie),k[W+$+8]=a.x,k[W+$+9]=a.y,k[W+$+10]=a.z,k[W+$+11]=te.itemSize===4?a.w:1)}}g={count:_,texture:T,size:new Be(F,N)},s.set(f,g),f.addEventListener("dispose",H)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const R=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",R),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:l}}function r1(r,e,t,s,a){let l=new WeakMap;function c(p){const v=a.render.frame,_=p.geometry,g=e.get(p,_);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==v&&(y.update(),l.set(y,v))}return g}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),s.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:c,dispose:f}}const s1={[a0]:"LINEAR_TONE_MAPPING",[o0]:"REINHARD_TONE_MAPPING",[l0]:"CINEON_TONE_MAPPING",[c0]:"ACES_FILMIC_TONE_MAPPING",[f0]:"AGX_TONE_MAPPING",[d0]:"NEUTRAL_TONE_MAPPING",[u0]:"CUSTOM_TONE_MAPPING"};function a1(r,e,t,s,a,l){const c=new Ii(e,t,{type:r,depthBuffer:a,stencilBuffer:l,samples:s?4:0,depthTexture:a?new aa(e,t):void 0}),f=new Ii(e,t,{type:nr,depthBuffer:!1,stencilBuffer:!1}),h=new Wn;h.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new cn([0,2,0,0,2,0],2));const p=new jy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Fi(h,p),_=new nh(-1,1,1,-1,0,1);let g=null,y=null,M=!1,R,S=null,x=[],O=!1;this.setSize=function(I,C){c.setSize(I,C),f.setSize(I,C);for(let F=0;F<x.length;F++){const N=x[F];N.setSize&&N.setSize(I,C)}},this.setEffects=function(I){x=I,O=x.length>0&&x[0].isRenderPass===!0;const C=c.width,F=c.height;for(let N=0;N<x.length;N++){const k=x[N];k.setSize&&k.setSize(C,F)}},this.begin=function(I,C){if(M||I.toneMapping===Di&&x.length===0)return!1;if(S=C,C!==null){const F=C.width,N=C.height;(c.width!==F||c.height!==N)&&this.setSize(F,N)}return O===!1&&I.setRenderTarget(c),R=I.toneMapping,I.toneMapping=Di,!0},this.hasRenderPass=function(){return O},this.end=function(I,C){I.toneMapping=R,M=!0;let F=c,N=f;for(let k=0;k<x.length;k++){const T=x[k];if(T.enabled!==!1&&(T.render(I,N,F,C),T.needsSwap!==!1)){const L=F;F=N,N=L}}if(g!==I.outputColorSpace||y!==I.toneMapping){g=I.outputColorSpace,y=I.toneMapping,p.defines={},Lt.getTransfer(g)===Bt&&(p.defines.SRGB_TRANSFER="");const k=s1[y];k&&(p.defines[k]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=F.texture,I.setRenderTarget(S),I.render(v,_),S=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),h.dispose(),p.dispose()}}const X0=new In,Nd=new aa(1,1),Y0=new M0,q0=new Wx,j0=new R0,Ng=[],Dg=[],Ig=new Float32Array(16),Ug=new Float32Array(9),Fg=new Float32Array(4);function fa(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=Ng[a];if(l===void 0&&(l=new Float32Array(a),Ng[a]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function un(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function fn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function gc(r,e){let t=Dg[e];t===void 0&&(t=new Int32Array(e),Dg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function o1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function l1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2fv(this.addr,e),fn(t,e)}}function c1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;r.uniform3fv(this.addr,e),fn(t,e)}}function u1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4fv(this.addr,e),fn(t,e)}}function f1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(un(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(un(t,s))return;Fg.set(s),r.uniformMatrix2fv(this.addr,!1,Fg),fn(t,s)}}function d1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(un(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(un(t,s))return;Ug.set(s),r.uniformMatrix3fv(this.addr,!1,Ug),fn(t,s)}}function h1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(un(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(un(t,s))return;Ig.set(s),r.uniformMatrix4fv(this.addr,!1,Ig),fn(t,s)}}function p1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function m1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2iv(this.addr,e),fn(t,e)}}function g1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;r.uniform3iv(this.addr,e),fn(t,e)}}function v1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4iv(this.addr,e),fn(t,e)}}function _1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function x1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2uiv(this.addr,e),fn(t,e)}}function y1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;r.uniform3uiv(this.addr,e),fn(t,e)}}function S1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4uiv(this.addr,e),fn(t,e)}}function M1(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(Nd.compareFunction=t.isReversedDepthBuffer()?Wd:Gd,l=Nd):l=X0,t.setTexture2D(e||l,a)}function E1(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||q0,a)}function T1(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||j0,a)}function w1(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||Y0,a)}function A1(r){switch(r){case 5126:return o1;case 35664:return l1;case 35665:return c1;case 35666:return u1;case 35674:return f1;case 35675:return d1;case 35676:return h1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return v1;case 5125:return _1;case 36294:return x1;case 36295:return y1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return w1}}function C1(r,e){r.uniform1fv(this.addr,e)}function R1(r,e){const t=fa(e,this.size,2);r.uniform2fv(this.addr,t)}function b1(r,e){const t=fa(e,this.size,3);r.uniform3fv(this.addr,t)}function P1(r,e){const t=fa(e,this.size,4);r.uniform4fv(this.addr,t)}function L1(r,e){const t=fa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function N1(r,e){const t=fa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function D1(r,e){const t=fa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function I1(r,e){r.uniform1iv(this.addr,e)}function U1(r,e){r.uniform2iv(this.addr,e)}function F1(r,e){r.uniform3iv(this.addr,e)}function O1(r,e){r.uniform4iv(this.addr,e)}function k1(r,e){r.uniform1uiv(this.addr,e)}function B1(r,e){r.uniform2uiv(this.addr,e)}function z1(r,e){r.uniform3uiv(this.addr,e)}function V1(r,e){r.uniform4uiv(this.addr,e)}function H1(r,e,t){const s=this.cache,a=e.length,l=gc(t,a);un(s,l)||(r.uniform1iv(this.addr,l),fn(s,l));let c;this.type===r.SAMPLER_2D_SHADOW?c=Nd:c=X0;for(let f=0;f!==a;++f)t.setTexture2D(e[f]||c,l[f])}function G1(r,e,t){const s=this.cache,a=e.length,l=gc(t,a);un(s,l)||(r.uniform1iv(this.addr,l),fn(s,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||q0,l[c])}function W1(r,e,t){const s=this.cache,a=e.length,l=gc(t,a);un(s,l)||(r.uniform1iv(this.addr,l),fn(s,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||j0,l[c])}function X1(r,e,t){const s=this.cache,a=e.length,l=gc(t,a);un(s,l)||(r.uniform1iv(this.addr,l),fn(s,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Y0,l[c])}function Y1(r){switch(r){case 5126:return C1;case 35664:return R1;case 35665:return b1;case 35666:return P1;case 35674:return L1;case 35675:return N1;case 35676:return D1;case 5124:case 35670:return I1;case 35667:case 35671:return U1;case 35668:case 35672:return F1;case 35669:case 35673:return O1;case 5125:return k1;case 36294:return B1;case 36295:return z1;case 36296:return V1;case 35678:case 36198:case 36298:case 36306:case 35682:return H1;case 35679:case 36299:case 36307:return G1;case 35680:case 36300:case 36308:case 36293:return W1;case 36289:case 36303:case 36311:case 36292:return X1}}class q1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=A1(t.type)}}class j1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y1(t.type)}}class $1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],s)}}}const Uf=/(\w+)(\])?(\[|\.)?/g;function Og(r,e){r.seq.push(e),r.map[e.id]=e}function Z1(r,e,t){const s=r.name,a=s.length;for(Uf.lastIndex=0;;){const l=Uf.exec(s),c=Uf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===a){Og(t,p===void 0?new q1(f,r,e):new j1(f,r,e));break}else{let _=t.map[f];_===void 0&&(_=new $1(f),Og(t,_)),t=_}}}class ic{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<s;++c){const f=e.getActiveUniform(t,c),h=e.getUniformLocation(t,f.name);Z1(f,h,this)}const a=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):l.push(c);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&s.push(c)}return s}}function kg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const K1=37297;let J1=0;function Q1(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const Bg=new Et;function eT(r){Lt._getMatrix(Bg,Lt.workingColorSpace,r);const e=`mat3( ${Bg.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(r)){case oc:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function zg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+Q1(r.getShaderSource(e),f)}else return l}function tT(r,e){const t=eT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const nT={[a0]:"Linear",[o0]:"Reinhard",[l0]:"Cineon",[c0]:"ACESFilmic",[f0]:"AgX",[d0]:"Neutral",[u0]:"Custom"};function iT(r,e){const t=nT[e];return t===void 0?(gt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zl=new j;function rT(){Lt.getLuminanceCoefficients(Zl);const r=Zl.x.toFixed(4),e=Zl.y.toFixed(4),t=Zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function aT(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function oT(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function ro(r){return r!==""}function Vg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(r){return r.replace(lT,uT)}const cT=new Map;function uT(r,e){let t=Tt[e];if(t===void 0){const s=cT.get(e);if(s!==void 0)t=Tt[s],gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Dd(t)}const fT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gg(r){return r.replace(fT,dT)}function dT(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Wg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const hT={[Jl]:"SHADOWMAP_TYPE_PCF",[no]:"SHADOWMAP_TYPE_VSM"};function pT(r){return hT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mT={[ls]:"ENVMAP_TYPE_CUBE",[sa]:"ENVMAP_TYPE_CUBE",[dc]:"ENVMAP_TYPE_CUBE_UV"};function gT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":mT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const vT={[sa]:"ENVMAP_MODE_REFRACTION"};function _T(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":vT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xT={[s0]:"ENVMAP_BLENDING_MULTIPLY",[lx]:"ENVMAP_BLENDING_MIX",[cx]:"ENVMAP_BLENDING_ADD"};function yT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":xT[r.combine]||"ENVMAP_BLENDING_NONE"}function ST(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function MT(r,e,t,s){const a=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=pT(t),p=gT(t),v=_T(t),_=yT(t),g=ST(t),y=sT(t),M=aT(l),R=a.createProgram();let S,x,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ro).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ro).join(`
`),x.length>0&&(x+=`
`)):(S=[Wg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),x=[Wg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?Tt.tonemapping_pars_fragment:"",t.toneMapping!==Di?iT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,tT("linearToOutputTexel",t.outputColorSpace),rT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ro).join(`
`)),c=Dd(c),c=Vg(c,t),c=Hg(c,t),f=Dd(f),f=Vg(f,t),f=Hg(f,t),c=Gg(c),f=Gg(f),t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=O+S+c,C=O+x+f,F=kg(a,a.VERTEX_SHADER,I),N=kg(a,a.FRAGMENT_SHADER,C);a.attachShader(R,F),a.attachShader(R,N),t.index0AttributeName!==void 0?a.bindAttribLocation(R,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function k(V){if(r.debug.checkShaderErrors){const Z=a.getProgramInfoLog(R)||"",z=a.getShaderInfoLog(F)||"",te=a.getShaderInfoLog(N)||"",W=Z.trim(),ie=z.trim(),$=te.trim();let Y=!0,ee=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,R,F,N);else{const le=zg(a,F,"vertex"),U=zg(a,N,"fragment");Pt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+W+`
`+le+`
`+U)}else W!==""?gt("WebGLProgram: Program Info Log:",W):(ie===""||$==="")&&(ee=!1);ee&&(V.diagnostics={runnable:Y,programLog:W,vertexShader:{log:ie,prefix:S},fragmentShader:{log:$,prefix:x}})}a.deleteShader(F),a.deleteShader(N),T=new ic(a,R),L=oT(a,R)}let T;this.getUniforms=function(){return T===void 0&&k(this),T};let L;this.getAttributes=function(){return L===void 0&&k(this),L};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=a.getProgramParameter(R,K1)),H},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J1++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=F,this.fragmentShader=N,this}let ET=0;class TT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,s){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new wT(e),t.set(e,s)),s}}class wT{constructor(e){this.id=ET++,this.code=e,this.usedTimes=0}}function AT(r){return r===cs||r===rc||r===sc}function CT(r,e,t,s,a,l){const c=new qd,f=new TT,h=new Set,p=[],v=new Map,_=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return h.add(T),T===0?"uv":`uv${T}`}function R(T,L,H,V,Z,z){const te=V.fog,W=Z.geometry,ie=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,$=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,Y=e.get(T.envMap||ie,$),ee=Y&&Y.mapping===dc?Y.image.height:null,le=y[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&gt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const U=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Q=U!==void 0?U.length:0;let Te=0;W.morphAttributes.position!==void 0&&(Te=1),W.morphAttributes.normal!==void 0&&(Te=2),W.morphAttributes.color!==void 0&&(Te=3);let qe,Ge,ce,_e;if(le){const Je=bi[le];qe=Je.vertexShader,Ge=Je.fragmentShader}else{qe=T.vertexShader,Ge=T.fragmentShader;const Je=f.getVertexShaderStage(T),zt=f.getFragmentShaderStage(T);f.update(T,Je,zt),ce=Je.id,_e=zt.id}const pe=r.getRenderTarget(),Pe=r.state.buffers.depth.getReversed(),Ke=Z.isInstancedMesh===!0,rt=Z.isBatchedMesh===!0,bt=!!T.map,ft=!!T.matcap,ve=!!Y,Se=!!T.aoMap,ye=!!T.lightMap,Ie=!!T.bumpMap&&T.wireframe===!1,Ue=!!T.normalMap,lt=!!T.displacementMap,$e=!!T.emissiveMap,ut=!!T.metalnessMap,mt=!!T.roughnessMap,D=T.anisotropy>0,He=T.clearcoat>0,et=T.dispersion>0,b=T.iridescence>0,E=T.sheen>0,J=T.transmission>0,re=D&&!!T.anisotropyMap,de=He&&!!T.clearcoatMap,Ae=He&&!!T.clearcoatNormalMap,we=He&&!!T.clearcoatRoughnessMap,he=b&&!!T.iridescenceMap,me=b&&!!T.iridescenceThicknessMap,Ne=E&&!!T.sheenColorMap,je=E&&!!T.sheenRoughnessMap,ke=!!T.specularMap,Fe=!!T.specularColorMap,ct=!!T.specularIntensityMap,dt=J&&!!T.transmissionMap,_t=J&&!!T.thicknessMap,X=!!T.gradientMap,De=!!T.alphaMap,ge=T.alphaTest>0,Oe=!!T.alphaHash,ze=!!T.extensions;let xe=Di;T.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(xe=r.toneMapping);const tt={shaderID:le,shaderType:T.type,shaderName:T.name,vertexShader:qe,fragmentShader:Ge,defines:T.defines,customVertexShaderID:ce,customFragmentShaderID:_e,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:rt,batchingColor:rt&&Z._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&Z.instanceColor!==null,instancingMorph:Ke&&Z.morphTexture!==null,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:bt,matcap:ft,envMap:ve,envMapMode:ve&&Y.mapping,envMapCubeUVHeight:ee,aoMap:Se,lightMap:ye,bumpMap:Ie,normalMap:Ue,displacementMap:lt,emissiveMap:$e,normalMapObjectSpace:Ue&&T.normalMapType===dx,normalMapTangentSpace:Ue&&T.normalMapType===Ad,packedNormalMap:Ue&&T.normalMapType===Ad&&AT(T.normalMap.format),metalnessMap:ut,roughnessMap:mt,anisotropy:D,anisotropyMap:re,clearcoat:He,clearcoatMap:de,clearcoatNormalMap:Ae,clearcoatRoughnessMap:we,dispersion:et,iridescence:b,iridescenceMap:he,iridescenceThicknessMap:me,sheen:E,sheenColorMap:Ne,sheenRoughnessMap:je,specularMap:ke,specularColorMap:Fe,specularIntensityMap:ct,transmission:J,transmissionMap:dt,thicknessMap:_t,gradientMap:X,opaque:T.transparent===!1&&T.blending===ea&&T.alphaToCoverage===!1,alphaMap:De,alphaTest:ge,alphaHash:Oe,combine:T.combine,mapUv:bt&&M(T.map.channel),aoMapUv:Se&&M(T.aoMap.channel),lightMapUv:ye&&M(T.lightMap.channel),bumpMapUv:Ie&&M(T.bumpMap.channel),normalMapUv:Ue&&M(T.normalMap.channel),displacementMapUv:lt&&M(T.displacementMap.channel),emissiveMapUv:$e&&M(T.emissiveMap.channel),metalnessMapUv:ut&&M(T.metalnessMap.channel),roughnessMapUv:mt&&M(T.roughnessMap.channel),anisotropyMapUv:re&&M(T.anisotropyMap.channel),clearcoatMapUv:de&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:me&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:je&&M(T.sheenRoughnessMap.channel),specularMapUv:ke&&M(T.specularMap.channel),specularColorMapUv:Fe&&M(T.specularColorMap.channel),specularIntensityMapUv:ct&&M(T.specularIntensityMap.channel),transmissionMapUv:dt&&M(T.transmissionMap.channel),thicknessMapUv:_t&&M(T.thicknessMap.channel),alphaMapUv:De&&M(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ue||D),vertexNormals:!!W.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!W.attributes.uv&&(bt||De),fog:!!te,useFog:T.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||W.attributes.normal===void 0&&Ue===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Pe,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Te,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:xe,decodeVideoTexture:bt&&T.map.isVideoTexture===!0&&Lt.getTransfer(T.map.colorSpace)===Bt,decodeVideoTextureEmissive:$e&&T.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(T.emissiveMap.colorSpace)===Bt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Pi,flipSided:T.side===Gn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ze&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&T.extensions.multiDraw===!0||rt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return tt.vertexUv1s=h.has(1),tt.vertexUv2s=h.has(2),tt.vertexUv3s=h.has(3),h.clear(),tt}function S(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const H in T.defines)L.push(H),L.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(x(L,T),O(L,T),L.push(r.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function x(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function O(T,L){c.disableAll(),L.instancing&&c.enable(0),L.instancingColor&&c.enable(1),L.instancingMorph&&c.enable(2),L.matcap&&c.enable(3),L.envMap&&c.enable(4),L.normalMapObjectSpace&&c.enable(5),L.normalMapTangentSpace&&c.enable(6),L.clearcoat&&c.enable(7),L.iridescence&&c.enable(8),L.alphaTest&&c.enable(9),L.vertexColors&&c.enable(10),L.vertexAlphas&&c.enable(11),L.vertexUv1s&&c.enable(12),L.vertexUv2s&&c.enable(13),L.vertexUv3s&&c.enable(14),L.vertexTangents&&c.enable(15),L.anisotropy&&c.enable(16),L.alphaHash&&c.enable(17),L.batching&&c.enable(18),L.dispersion&&c.enable(19),L.batchingColor&&c.enable(20),L.gradientMap&&c.enable(21),L.packedNormalMap&&c.enable(22),L.vertexNormals&&c.enable(23),T.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.reversedDepthBuffer&&c.enable(4),L.skinning&&c.enable(5),L.morphTargets&&c.enable(6),L.morphNormals&&c.enable(7),L.morphColors&&c.enable(8),L.premultipliedAlpha&&c.enable(9),L.shadowMapEnabled&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.decodeVideoTextureEmissive&&c.enable(20),L.alphaToCoverage&&c.enable(21),L.numLightProbeGrids>0&&c.enable(22),L.hasPositionAttribute&&c.enable(23),T.push(c.mask)}function I(T){const L=y[T.type];let H;if(L){const V=bi[L];H=Xy.clone(V.uniforms)}else H=T.uniforms;return H}function C(T,L){let H=v.get(L);return H!==void 0?++H.usedTimes:(H=new MT(r,L,T,a),p.push(H),v.set(L,H)),H}function F(T){if(--T.usedTimes===0){const L=p.indexOf(T);p[L]=p[p.length-1],p.pop(),v.delete(T.cacheKey),T.destroy()}}function N(T){f.remove(T)}function k(){f.dispose()}return{getParameters:R,getProgramCacheKey:S,getUniforms:I,acquireProgram:C,releaseProgram:F,releaseShaderCache:N,programs:p,dispose:k}}function RT(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function s(c){r.delete(c)}function a(c,f,h){r.get(c)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function bT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Xg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Yg(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function c(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function f(g,y,M,R,S,x){let O=r[e];return O===void 0?(O={id:g.id,object:g,geometry:y,material:M,materialVariant:c(g),groupOrder:R,renderOrder:g.renderOrder,z:S,group:x},r[e]=O):(O.id=g.id,O.object=g,O.geometry=y,O.material=M,O.materialVariant=c(g),O.groupOrder=R,O.renderOrder=g.renderOrder,O.z=S,O.group=x),e++,O}function h(g,y,M,R,S,x){const O=f(g,y,M,R,S,x);M.transmission>0?s.push(O):M.transparent===!0?a.push(O):t.push(O)}function p(g,y,M,R,S,x){const O=f(g,y,M,R,S,x);M.transmission>0?s.unshift(O):M.transparent===!0?a.unshift(O):t.unshift(O)}function v(g,y,M){t.length>1&&t.sort(g||bT),s.length>1&&s.sort(y||Xg),a.length>1&&a.sort(y||Xg),M&&(t.reverse(),s.reverse(),a.reverse())}function _(){for(let g=e,y=r.length;g<y;g++){const M=r[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:h,unshift:p,finish:_,sort:v}}function PT(){let r=new WeakMap;function e(s,a){const l=r.get(s);let c;return l===void 0?(c=new Yg,r.set(s,[c])):a>=l.length?(c=new Yg,l.push(c)):c=l[a],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function LT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new vt};break;case"SpotLight":t={position:new j,direction:new j,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new j,halfWidth:new j,halfHeight:new j};break}return r[e.id]=t,t}}}function NT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let DT=0;function IT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function UT(r){const e=new LT,t=NT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new j);const a=new j,l=new qt,c=new qt;function f(p){let v=0,_=0,g=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let y=0,M=0,R=0,S=0,x=0,O=0,I=0,C=0,F=0,N=0,k=0;p.sort(IT);for(let L=0,H=p.length;L<H;L++){const V=p[L],Z=V.color,z=V.intensity,te=V.distance;let W=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===cs?W=V.shadow.map.texture:W=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=Z.r*z,_+=Z.g*z,g+=Z.b*z;else if(V.isLightProbe){for(let ie=0;ie<9;ie++)s.probe[ie].addScaledVector(V.sh.coefficients[ie],z);k++}else if(V.isDirectionalLight){const ie=e.get(V);if(ie.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const $=V.shadow,Y=t.get(V);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,s.directionalShadow[y]=Y,s.directionalShadowMap[y]=W,s.directionalShadowMatrix[y]=V.shadow.matrix,O++}s.directional[y]=ie,y++}else if(V.isSpotLight){const ie=e.get(V);ie.position.setFromMatrixPosition(V.matrixWorld),ie.color.copy(Z).multiplyScalar(z),ie.distance=te,ie.coneCos=Math.cos(V.angle),ie.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ie.decay=V.decay,s.spot[R]=ie;const $=V.shadow;if(V.map&&(s.spotLightMap[F]=V.map,F++,$.updateMatrices(V),V.castShadow&&N++),s.spotLightMatrix[R]=$.matrix,V.castShadow){const Y=t.get(V);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,s.spotShadow[R]=Y,s.spotShadowMap[R]=W,C++}R++}else if(V.isRectAreaLight){const ie=e.get(V);ie.color.copy(Z).multiplyScalar(z),ie.halfWidth.set(V.width*.5,0,0),ie.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=ie,S++}else if(V.isPointLight){const ie=e.get(V);if(ie.color.copy(V.color).multiplyScalar(V.intensity),ie.distance=V.distance,ie.decay=V.decay,V.castShadow){const $=V.shadow,Y=t.get(V);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,Y.shadowCameraNear=$.camera.near,Y.shadowCameraFar=$.camera.far,s.pointShadow[M]=Y,s.pointShadowMap[M]=W,s.pointShadowMatrix[M]=V.shadow.matrix,I++}s.point[M]=ie,M++}else if(V.isHemisphereLight){const ie=e.get(V);ie.skyColor.copy(V.color).multiplyScalar(z),ie.groundColor.copy(V.groundColor).multiplyScalar(z),s.hemi[x]=ie,x++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_FLOAT_1,s.rectAreaLTC2=Ve.LTC_FLOAT_2):(s.rectAreaLTC1=Ve.LTC_HALF_1,s.rectAreaLTC2=Ve.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==y||T.pointLength!==M||T.spotLength!==R||T.rectAreaLength!==S||T.hemiLength!==x||T.numDirectionalShadows!==O||T.numPointShadows!==I||T.numSpotShadows!==C||T.numSpotMaps!==F||T.numLightProbes!==k)&&(s.directional.length=y,s.spot.length=R,s.rectArea.length=S,s.point.length=M,s.hemi.length=x,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=C+F-N,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=k,T.directionalLength=y,T.pointLength=M,T.spotLength=R,T.rectAreaLength=S,T.hemiLength=x,T.numDirectionalShadows=O,T.numPointShadows=I,T.numSpotShadows=C,T.numSpotMaps=F,T.numLightProbes=k,s.version=DT++)}function h(p,v){let _=0,g=0,y=0,M=0,R=0;const S=v.matrixWorldInverse;for(let x=0,O=p.length;x<O;x++){const I=p[x];if(I.isDirectionalLight){const C=s.directional[_];C.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),_++}else if(I.isSpotLight){const C=s.spot[y];C.position.setFromMatrixPosition(I.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),y++}else if(I.isRectAreaLight){const C=s.rectArea[M];C.position.setFromMatrixPosition(I.matrixWorld),C.position.applyMatrix4(S),c.identity(),l.copy(I.matrixWorld),l.premultiply(S),c.extractRotation(l),C.halfWidth.set(I.width*.5,0,0),C.halfHeight.set(0,I.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),M++}else if(I.isPointLight){const C=s.point[g];C.position.setFromMatrixPosition(I.matrixWorld),C.position.applyMatrix4(S),g++}else if(I.isHemisphereLight){const C=s.hemi[R];C.direction.setFromMatrixPosition(I.matrixWorld),C.direction.transformDirection(S),R++}}}return{setup:f,setupView:h,state:s}}function qg(r){const e=new UT(r),t=[],s=[],a=[];function l(g){_.camera=g,t.length=0,s.length=0,a.length=0}function c(g){t.push(g)}function f(g){s.push(g)}function h(g){a.push(g)}function p(){e.setup(t)}function v(g){e.setupView(t,g)}const _={lightsArray:t,shadowsArray:s,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:p,setupLightsView:v,pushLight:c,pushShadow:f,pushLightProbeGrid:h}}function FT(r){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new qg(r),e.set(a,[f])):l>=c.length?(f=new qg(r),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const OT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kT=`uniform sampler2D shadow_pass;
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
}`,BT=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],zT=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],jg=new qt,eo=new j,Ff=new j;function VT(r,e,t){let s=new Zd;const a=new Be,l=new Be,c=new Qt,f=new Zy,h=new Ky,p={},v=t.maxTextureSize,_={[Dr]:Gn,[Gn]:Dr,[Pi]:Pi},g=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:OT,fragmentShader:kT}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const M=new Wn;M.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Fi(M,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jl;let x=this.type;this.render=function(N,k,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===G_&&(gt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Jl);const L=r.getRenderTarget(),H=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(er),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const z=x!==this.type;z&&k.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(W=>W.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,W=N.length;te<W;te++){const ie=N[te],$=ie.shadow;if($===void 0){gt("WebGLShadowMap:",ie,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);const Y=$.getFrameExtents();a.multiply(Y),l.copy($.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/Y.x),a.x=l.x*Y.x,$.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/Y.y),a.y=l.y*Y.y,$.mapSize.y=l.y));const ee=r.state.buffers.depth.getReversed();if($.camera._reversedDepth=ee,$.map===null||z===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===no){if(ie.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Ii(a.x,a.y,{format:cs,type:nr,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),$.map.texture.name=ie.name+".shadowMap",$.map.depthTexture=new aa(a.x,a.y,Li),$.map.depthTexture.name=ie.name+".shadowMapDepth",$.map.depthTexture.format=ir,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=yn,$.map.depthTexture.magFilter=yn}else ie.isPointLight?($.map=new W0(a.x),$.map.depthTexture=new cy(a.x,Ui)):($.map=new Ii(a.x,a.y),$.map.depthTexture=new aa(a.x,a.y,Ui)),$.map.depthTexture.name=ie.name+".shadowMap",$.map.depthTexture.format=ir,this.type===Jl?($.map.depthTexture.compareFunction=ee?Wd:Gd,$.map.depthTexture.minFilter=Rn,$.map.depthTexture.magFilter=Rn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=yn,$.map.depthTexture.magFilter=yn);$.camera.updateProjectionMatrix()}const le=$.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<le;U++){if($.map.isWebGLCubeRenderTarget)r.setRenderTarget($.map,U),r.clear();else{U===0&&(r.setRenderTarget($.map),r.clear());const Q=$.getViewport(U);c.set(l.x*Q.x,l.y*Q.y,l.x*Q.z,l.y*Q.w),Z.viewport(c)}if(ie.isPointLight){const Q=$.camera,Te=$.matrix,qe=ie.distance||Q.far;qe!==Q.far&&(Q.far=qe,Q.updateProjectionMatrix()),eo.setFromMatrixPosition(ie.matrixWorld),Q.position.copy(eo),Ff.copy(Q.position),Ff.add(BT[U]),Q.up.copy(zT[U]),Q.lookAt(Ff),Q.updateMatrixWorld(),Te.makeTranslation(-eo.x,-eo.y,-eo.z),jg.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),$._frustum.setFromProjectionMatrix(jg,Q.coordinateSystem,Q.reversedDepth)}else $.updateMatrices(ie);s=$.getFrustum(),C(k,T,$.camera,ie,this.type)}$.isPointLightShadow!==!0&&this.type===no&&O($,T),$.needsUpdate=!1}x=this.type,S.needsUpdate=!1,r.setRenderTarget(L,H,V)};function O(N,k){const T=e.update(R);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ii(a.x,a.y,{format:cs,type:nr})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(k,null,T,g,R,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(k,null,T,y,R,null)}function I(N,k,T,L){let H=null;const V=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)H=V;else if(H=T.isPointLight===!0?h:f,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const Z=H.uuid,z=k.uuid;let te=p[Z];te===void 0&&(te={},p[Z]=te);let W=te[z];W===void 0&&(W=H.clone(),te[z]=W,k.addEventListener("dispose",F)),H=W}if(H.visible=k.visible,H.wireframe=k.wireframe,L===no?H.side=k.shadowSide!==null?k.shadowSide:k.side:H.side=k.shadowSide!==null?k.shadowSide:_[k.side],H.alphaMap=k.alphaMap,H.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,H.map=k.map,H.clipShadows=k.clipShadows,H.clippingPlanes=k.clippingPlanes,H.clipIntersection=k.clipIntersection,H.displacementMap=k.displacementMap,H.displacementScale=k.displacementScale,H.displacementBias=k.displacementBias,H.wireframeLinewidth=k.wireframeLinewidth,H.linewidth=k.linewidth,T.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const Z=r.properties.get(H);Z.light=T}return H}function C(N,k,T,L,H){if(N.visible===!1)return;if(N.layers.test(k.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&H===no)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const z=e.update(N),te=N.material;if(Array.isArray(te)){const W=z.groups;for(let ie=0,$=W.length;ie<$;ie++){const Y=W[ie],ee=te[Y.materialIndex];if(ee&&ee.visible){const le=I(N,ee,L,H);N.onBeforeShadow(r,N,k,T,z,le,Y),r.renderBufferDirect(T,null,z,le,N,Y),N.onAfterShadow(r,N,k,T,z,le,Y)}}}else if(te.visible){const W=I(N,te,L,H);N.onBeforeShadow(r,N,k,T,z,W,null),r.renderBufferDirect(T,null,z,W,N,null),N.onAfterShadow(r,N,k,T,z,W,null)}}const Z=N.children;for(let z=0,te=Z.length;z<te;z++)C(Z[z],k,T,L,H)}function F(N){N.target.removeEventListener("dispose",F);for(const T in p){const L=p[T],H=N.target.uuid;H in L&&(L[H].dispose(),delete L[H])}}}function HT(r,e){function t(){let X=!1;const De=new Qt;let ge=null;const Oe=new Qt(0,0,0,0);return{setMask:function(ze){ge!==ze&&!X&&(r.colorMask(ze,ze,ze,ze),ge=ze)},setLocked:function(ze){X=ze},setClear:function(ze,xe,tt,Je,zt){zt===!0&&(ze*=Je,xe*=Je,tt*=Je),De.set(ze,xe,tt,Je),Oe.equals(De)===!1&&(r.clearColor(ze,xe,tt,Je),Oe.copy(De))},reset:function(){X=!1,ge=null,Oe.set(-1,0,0,0)}}}function s(){let X=!1,De=!1,ge=null,Oe=null,ze=null;return{setReversed:function(xe){if(De!==xe){const tt=e.get("EXT_clip_control");xe?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT),De=xe;const Je=ze;ze=null,this.setClear(Je)}},getReversed:function(){return De},setTest:function(xe){xe?pe(r.DEPTH_TEST):Pe(r.DEPTH_TEST)},setMask:function(xe){ge!==xe&&!X&&(r.depthMask(xe),ge=xe)},setFunc:function(xe){if(De&&(xe=Mx[xe]),Oe!==xe){switch(xe){case Vf:r.depthFunc(r.NEVER);break;case Hf:r.depthFunc(r.ALWAYS);break;case Gf:r.depthFunc(r.LESS);break;case ra:r.depthFunc(r.LEQUAL);break;case Wf:r.depthFunc(r.EQUAL);break;case Xf:r.depthFunc(r.GEQUAL);break;case Yf:r.depthFunc(r.GREATER);break;case qf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Oe=xe}},setLocked:function(xe){X=xe},setClear:function(xe){ze!==xe&&(ze=xe,De&&(xe=1-xe),r.clearDepth(xe))},reset:function(){X=!1,ge=null,Oe=null,ze=null,De=!1}}}function a(){let X=!1,De=null,ge=null,Oe=null,ze=null,xe=null,tt=null,Je=null,zt=null;return{setTest:function(Ut){X||(Ut?pe(r.STENCIL_TEST):Pe(r.STENCIL_TEST))},setMask:function(Ut){De!==Ut&&!X&&(r.stencilMask(Ut),De=Ut)},setFunc:function(Ut,Sn,Qn){(ge!==Ut||Oe!==Sn||ze!==Qn)&&(r.stencilFunc(Ut,Sn,Qn),ge=Ut,Oe=Sn,ze=Qn)},setOp:function(Ut,Sn,Qn){(xe!==Ut||tt!==Sn||Je!==Qn)&&(r.stencilOp(Ut,Sn,Qn),xe=Ut,tt=Sn,Je=Qn)},setLocked:function(Ut){X=Ut},setClear:function(Ut){zt!==Ut&&(r.clearStencil(Ut),zt=Ut)},reset:function(){X=!1,De=null,ge=null,Oe=null,ze=null,xe=null,tt=null,Je=null,zt=null}}}const l=new t,c=new s,f=new a,h=new WeakMap,p=new WeakMap;let v={},_={},g={},y=new WeakMap,M=[],R=null,S=!1,x=null,O=null,I=null,C=null,F=null,N=null,k=null,T=new vt(0,0,0),L=0,H=!1,V=null,Z=null,z=null,te=null,W=null;const ie=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Y=0;const ee=r.getParameter(r.VERSION);ee.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ee)[1]),$=Y>=1):ee.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),$=Y>=2);let le=null,U={};const Q=r.getParameter(r.SCISSOR_BOX),Te=r.getParameter(r.VIEWPORT),qe=new Qt().fromArray(Q),Ge=new Qt().fromArray(Te);function ce(X,De,ge,Oe){const ze=new Uint8Array(4),xe=r.createTexture();r.bindTexture(X,xe),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let tt=0;tt<ge;tt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(De,0,r.RGBA,1,1,Oe,0,r.RGBA,r.UNSIGNED_BYTE,ze):r.texImage2D(De+tt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ze);return xe}const _e={};_e[r.TEXTURE_2D]=ce(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=ce(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[r.TEXTURE_2D_ARRAY]=ce(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=ce(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),pe(r.DEPTH_TEST),c.setFunc(ra),Ie(!1),Ue(Fm),pe(r.CULL_FACE),Se(er);function pe(X){v[X]!==!0&&(r.enable(X),v[X]=!0)}function Pe(X){v[X]!==!1&&(r.disable(X),v[X]=!1)}function Ke(X,De){return g[X]!==De?(r.bindFramebuffer(X,De),g[X]=De,X===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=De),X===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=De),!0):!1}function rt(X,De){let ge=M,Oe=!1;if(X){ge=y.get(De),ge===void 0&&(ge=[],y.set(De,ge));const ze=X.textures;if(ge.length!==ze.length||ge[0]!==r.COLOR_ATTACHMENT0){for(let xe=0,tt=ze.length;xe<tt;xe++)ge[xe]=r.COLOR_ATTACHMENT0+xe;ge.length=ze.length,Oe=!0}}else ge[0]!==r.BACK&&(ge[0]=r.BACK,Oe=!0);Oe&&r.drawBuffers(ge)}function bt(X){return R!==X?(r.useProgram(X),R=X,!0):!1}const ft={[rs]:r.FUNC_ADD,[X_]:r.FUNC_SUBTRACT,[Y_]:r.FUNC_REVERSE_SUBTRACT};ft[q_]=r.MIN,ft[j_]=r.MAX;const ve={[$_]:r.ZERO,[Z_]:r.ONE,[K_]:r.SRC_COLOR,[Bf]:r.SRC_ALPHA,[ix]:r.SRC_ALPHA_SATURATE,[tx]:r.DST_COLOR,[Q_]:r.DST_ALPHA,[J_]:r.ONE_MINUS_SRC_COLOR,[zf]:r.ONE_MINUS_SRC_ALPHA,[nx]:r.ONE_MINUS_DST_COLOR,[ex]:r.ONE_MINUS_DST_ALPHA,[rx]:r.CONSTANT_COLOR,[sx]:r.ONE_MINUS_CONSTANT_COLOR,[ax]:r.CONSTANT_ALPHA,[ox]:r.ONE_MINUS_CONSTANT_ALPHA};function Se(X,De,ge,Oe,ze,xe,tt,Je,zt,Ut){if(X===er){S===!0&&(Pe(r.BLEND),S=!1);return}if(S===!1&&(pe(r.BLEND),S=!0),X!==W_){if(X!==x||Ut!==H){if((O!==rs||F!==rs)&&(r.blendEquation(r.FUNC_ADD),O=rs,F=rs),Ut)switch(X){case ea:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Om:r.blendFunc(r.ONE,r.ONE);break;case km:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Pt("WebGLState: Invalid blending: ",X);break}else switch(X){case ea:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Om:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case km:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bm:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",X);break}I=null,C=null,N=null,k=null,T.set(0,0,0),L=0,x=X,H=Ut}return}ze=ze||De,xe=xe||ge,tt=tt||Oe,(De!==O||ze!==F)&&(r.blendEquationSeparate(ft[De],ft[ze]),O=De,F=ze),(ge!==I||Oe!==C||xe!==N||tt!==k)&&(r.blendFuncSeparate(ve[ge],ve[Oe],ve[xe],ve[tt]),I=ge,C=Oe,N=xe,k=tt),(Je.equals(T)===!1||zt!==L)&&(r.blendColor(Je.r,Je.g,Je.b,zt),T.copy(Je),L=zt),x=X,H=!1}function ye(X,De){X.side===Pi?Pe(r.CULL_FACE):pe(r.CULL_FACE);let ge=X.side===Gn;De&&(ge=!ge),Ie(ge),X.blending===ea&&X.transparent===!1?Se(er):Se(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),l.setMask(X.colorWrite);const Oe=X.stencilWrite;f.setTest(Oe),Oe&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),$e(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):Pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(X){V!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),V=X)}function Ue(X){X!==V_?(pe(r.CULL_FACE),X!==Z&&(X===Fm?r.cullFace(r.BACK):X===H_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pe(r.CULL_FACE),Z=X}function lt(X){X!==z&&($&&r.lineWidth(X),z=X)}function $e(X,De,ge){X?(pe(r.POLYGON_OFFSET_FILL),(te!==De||W!==ge)&&(te=De,W=ge,c.getReversed()&&(De=-De),r.polygonOffset(De,ge))):Pe(r.POLYGON_OFFSET_FILL)}function ut(X){X?pe(r.SCISSOR_TEST):Pe(r.SCISSOR_TEST)}function mt(X){X===void 0&&(X=r.TEXTURE0+ie-1),le!==X&&(r.activeTexture(X),le=X)}function D(X,De,ge){ge===void 0&&(le===null?ge=r.TEXTURE0+ie-1:ge=le);let Oe=U[ge];Oe===void 0&&(Oe={type:void 0,texture:void 0},U[ge]=Oe),(Oe.type!==X||Oe.texture!==De)&&(le!==ge&&(r.activeTexture(ge),le=ge),r.bindTexture(X,De||_e[X]),Oe.type=X,Oe.texture=De)}function He(){const X=U[le];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function et(){try{r.compressedTexImage2D(...arguments)}catch(X){Pt("WebGLState:",X)}}function b(){try{r.compressedTexImage3D(...arguments)}catch(X){Pt("WebGLState:",X)}}function E(){try{r.texSubImage2D(...arguments)}catch(X){Pt("WebGLState:",X)}}function J(){try{r.texSubImage3D(...arguments)}catch(X){Pt("WebGLState:",X)}}function re(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Pt("WebGLState:",X)}}function de(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Pt("WebGLState:",X)}}function Ae(){try{r.texStorage2D(...arguments)}catch(X){Pt("WebGLState:",X)}}function we(){try{r.texStorage3D(...arguments)}catch(X){Pt("WebGLState:",X)}}function he(){try{r.texImage2D(...arguments)}catch(X){Pt("WebGLState:",X)}}function me(){try{r.texImage3D(...arguments)}catch(X){Pt("WebGLState:",X)}}function Ne(X){return _[X]!==void 0?_[X]:r.getParameter(X)}function je(X,De){_[X]!==De&&(r.pixelStorei(X,De),_[X]=De)}function ke(X){qe.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),qe.copy(X))}function Fe(X){Ge.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ge.copy(X))}function ct(X,De){let ge=p.get(De);ge===void 0&&(ge=new WeakMap,p.set(De,ge));let Oe=ge.get(X);Oe===void 0&&(Oe=r.getUniformBlockIndex(De,X.name),ge.set(X,Oe))}function dt(X,De){const Oe=p.get(De).get(X);h.get(De)!==Oe&&(r.uniformBlockBinding(De,Oe,X.__bindingPointIndex),h.set(De,Oe))}function _t(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},_={},le=null,U={},g={},y=new WeakMap,M=[],R=null,S=!1,x=null,O=null,I=null,C=null,F=null,N=null,k=null,T=new vt(0,0,0),L=0,H=!1,V=null,Z=null,z=null,te=null,W=null,qe.set(0,0,r.canvas.width,r.canvas.height),Ge.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:pe,disable:Pe,bindFramebuffer:Ke,drawBuffers:rt,useProgram:bt,setBlending:Se,setMaterial:ye,setFlipSided:Ie,setCullFace:Ue,setLineWidth:lt,setPolygonOffset:$e,setScissorTest:ut,activeTexture:mt,bindTexture:D,unbindTexture:He,compressedTexImage2D:et,compressedTexImage3D:b,texImage2D:he,texImage3D:me,pixelStorei:je,getParameter:Ne,updateUBOMapping:ct,uniformBlockBinding:dt,texStorage2D:Ae,texStorage3D:we,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:re,compressedTexSubImage3D:de,scissor:ke,viewport:Fe,reset:_t}}function GT(r,e,t,s,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Be,v=new WeakMap,_=new Set;let g;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(b,E){return M?new OffscreenCanvas(b,E):lc("canvas")}function S(b,E,J){let re=1;const de=et(b);if((de.width>J||de.height>J)&&(re=J/Math.max(de.width,de.height)),re<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Ae=Math.floor(re*de.width),we=Math.floor(re*de.height);g===void 0&&(g=R(Ae,we));const he=E?R(Ae,we):g;return he.width=Ae,he.height=we,he.getContext("2d").drawImage(b,0,0,Ae,we),gt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Ae+"x"+we+")."),he}else return"data"in b&&gt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),b;return b}function x(b){return b.generateMipmaps}function O(b){r.generateMipmap(b)}function I(b){return b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?r.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(b,E,J,re,de,Ae=!1){if(b!==null){if(r[b]!==void 0)return r[b];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let we;re&&(we=e.get("EXT_texture_norm16"),we||gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=E;if(E===r.RED&&(J===r.FLOAT&&(he=r.R32F),J===r.HALF_FLOAT&&(he=r.R16F),J===r.UNSIGNED_BYTE&&(he=r.R8),J===r.UNSIGNED_SHORT&&we&&(he=we.R16_EXT),J===r.SHORT&&we&&(he=we.R16_SNORM_EXT)),E===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.R8UI),J===r.UNSIGNED_SHORT&&(he=r.R16UI),J===r.UNSIGNED_INT&&(he=r.R32UI),J===r.BYTE&&(he=r.R8I),J===r.SHORT&&(he=r.R16I),J===r.INT&&(he=r.R32I)),E===r.RG&&(J===r.FLOAT&&(he=r.RG32F),J===r.HALF_FLOAT&&(he=r.RG16F),J===r.UNSIGNED_BYTE&&(he=r.RG8),J===r.UNSIGNED_SHORT&&we&&(he=we.RG16_EXT),J===r.SHORT&&we&&(he=we.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.RG8UI),J===r.UNSIGNED_SHORT&&(he=r.RG16UI),J===r.UNSIGNED_INT&&(he=r.RG32UI),J===r.BYTE&&(he=r.RG8I),J===r.SHORT&&(he=r.RG16I),J===r.INT&&(he=r.RG32I)),E===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.RGB8UI),J===r.UNSIGNED_SHORT&&(he=r.RGB16UI),J===r.UNSIGNED_INT&&(he=r.RGB32UI),J===r.BYTE&&(he=r.RGB8I),J===r.SHORT&&(he=r.RGB16I),J===r.INT&&(he=r.RGB32I)),E===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(he=r.RGBA16UI),J===r.UNSIGNED_INT&&(he=r.RGBA32UI),J===r.BYTE&&(he=r.RGBA8I),J===r.SHORT&&(he=r.RGBA16I),J===r.INT&&(he=r.RGBA32I)),E===r.RGB&&(J===r.UNSIGNED_SHORT&&we&&(he=we.RGB16_EXT),J===r.SHORT&&we&&(he=we.RGB16_SNORM_EXT),J===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(he=r.R11F_G11F_B10F)),E===r.RGBA){const me=Ae?oc:Lt.getTransfer(de);J===r.FLOAT&&(he=r.RGBA32F),J===r.HALF_FLOAT&&(he=r.RGBA16F),J===r.UNSIGNED_BYTE&&(he=me===Bt?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT&&we&&(he=we.RGBA16_EXT),J===r.SHORT&&we&&(he=we.RGBA16_SNORM_EXT),J===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function F(b,E){let J;return b?E===null||E===Ui||E===co?J=r.DEPTH24_STENCIL8:E===Li?J=r.DEPTH32F_STENCIL8:E===lo&&(J=r.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ui||E===co?J=r.DEPTH_COMPONENT24:E===Li?J=r.DEPTH_COMPONENT32F:E===lo&&(J=r.DEPTH_COMPONENT16),J}function N(b,E){return x(b)===!0||b.isFramebufferTexture&&b.minFilter!==yn&&b.minFilter!==Rn?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function k(b){const E=b.target;E.removeEventListener("dispose",k),L(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&_.delete(E)}function T(b){const E=b.target;E.removeEventListener("dispose",T),V(E)}function L(b){const E=s.get(b);if(E.__webglInit===void 0)return;const J=b.source,re=y.get(J);if(re){const de=re[E.__cacheKey];de.usedTimes--,de.usedTimes===0&&H(b),Object.keys(re).length===0&&y.delete(J)}s.remove(b)}function H(b){const E=s.get(b);r.deleteTexture(E.__webglTexture);const J=b.source,re=y.get(J);delete re[E.__cacheKey],c.memory.textures--}function V(b){const E=s.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),s.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let de=0;de<E.__webglFramebuffer[re].length;de++)r.deleteFramebuffer(E.__webglFramebuffer[re][de]);else r.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)r.deleteFramebuffer(E.__webglFramebuffer[re]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=b.textures;for(let re=0,de=J.length;re<de;re++){const Ae=s.get(J[re]);Ae.__webglTexture&&(r.deleteTexture(Ae.__webglTexture),c.memory.textures--),s.remove(J[re])}s.remove(b)}let Z=0;function z(){Z=0}function te(){return Z}function W(b){Z=b}function ie(){const b=Z;return b>=a.maxTextures&&gt("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),Z+=1,b}function $(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function Y(b,E){const J=s.get(b);if(b.isVideoTexture&&D(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&J.__version!==b.version){const re=b.image;if(re===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(J,b,E);return}}else b.isExternalTexture&&(J.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+E)}function ee(b,E){const J=s.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&J.__version!==b.version){Pe(J,b,E);return}else b.isExternalTexture&&(J.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+E)}function le(b,E){const J=s.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&J.__version!==b.version){Pe(J,b,E);return}t.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+E)}function U(b,E){const J=s.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&J.__version!==b.version){Ke(J,b,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+E)}const Q={[jf]:r.REPEAT,[Qi]:r.CLAMP_TO_EDGE,[$f]:r.MIRRORED_REPEAT},Te={[yn]:r.NEAREST,[ux]:r.NEAREST_MIPMAP_NEAREST,[Sl]:r.NEAREST_MIPMAP_LINEAR,[Rn]:r.LINEAR,[tf]:r.LINEAR_MIPMAP_NEAREST,[as]:r.LINEAR_MIPMAP_LINEAR},qe={[hx]:r.NEVER,[_x]:r.ALWAYS,[px]:r.LESS,[Gd]:r.LEQUAL,[mx]:r.EQUAL,[Wd]:r.GEQUAL,[gx]:r.GREATER,[vx]:r.NOTEQUAL};function Ge(b,E){if(E.type===Li&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Rn||E.magFilter===tf||E.magFilter===Sl||E.magFilter===as||E.minFilter===Rn||E.minFilter===tf||E.minFilter===Sl||E.minFilter===as)&&gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(b,r.TEXTURE_WRAP_S,Q[E.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,Q[E.wrapT]),(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)&&r.texParameteri(b,r.TEXTURE_WRAP_R,Q[E.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,Te[E.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,Te[E.minFilter]),E.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,qe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===yn||E.minFilter!==Sl&&E.minFilter!==as||E.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(b,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function ce(b,E){let J=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",k));const re=E.source;let de=y.get(re);de===void 0&&(de={},y.set(re,de));const Ae=$(E);if(Ae!==b.__cacheKey){de[Ae]===void 0&&(de[Ae]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,J=!0),de[Ae].usedTimes++;const we=de[b.__cacheKey];we!==void 0&&(de[b.__cacheKey].usedTimes--,we.usedTimes===0&&H(E)),b.__cacheKey=Ae,b.__webglTexture=de[Ae].texture}return J}function _e(b,E,J){return Math.floor(Math.floor(b/J)/E)}function pe(b,E,J,re){const Ae=b.updateRanges;if(Ae.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,J,re,E.data);else{Ae.sort((je,ke)=>je.start-ke.start);let we=0;for(let je=1;je<Ae.length;je++){const ke=Ae[we],Fe=Ae[je],ct=ke.start+ke.count,dt=_e(Fe.start,E.width,4),_t=_e(ke.start,E.width,4);Fe.start<=ct+1&&dt===_t&&_e(Fe.start+Fe.count-1,E.width,4)===dt?ke.count=Math.max(ke.count,Fe.start+Fe.count-ke.start):(++we,Ae[we]=Fe)}Ae.length=we+1;const he=t.getParameter(r.UNPACK_ROW_LENGTH),me=t.getParameter(r.UNPACK_SKIP_PIXELS),Ne=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let je=0,ke=Ae.length;je<ke;je++){const Fe=Ae[je],ct=Math.floor(Fe.start/4),dt=Math.ceil(Fe.count/4),_t=ct%E.width,X=Math.floor(ct/E.width),De=dt,ge=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,_t),t.pixelStorei(r.UNPACK_SKIP_ROWS,X),t.texSubImage2D(r.TEXTURE_2D,0,_t,X,De,ge,J,re,E.data)}b.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,he),t.pixelStorei(r.UNPACK_SKIP_PIXELS,me),t.pixelStorei(r.UNPACK_SKIP_ROWS,Ne)}}function Pe(b,E,J){let re=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=r.TEXTURE_3D);const de=ce(b,E),Ae=E.source;t.bindTexture(re,b.__webglTexture,r.TEXTURE0+J);const we=s.get(Ae);if(Ae.version!==we.__version||de===!0){if(t.activeTexture(r.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ge=Lt.getPrimaries(Lt.workingColorSpace),Oe=E.colorSpace===br?null:Lt.getPrimaries(E.colorSpace),ze=E.colorSpace===br||ge===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let me=S(E.image,!1,a.maxTextureSize);me=He(E,me);const Ne=l.convert(E.format,E.colorSpace),je=l.convert(E.type);let ke=C(E.internalFormat,Ne,je,E.normalized,E.colorSpace,E.isVideoTexture);Ge(re,E);let Fe;const ct=E.mipmaps,dt=E.isVideoTexture!==!0,_t=we.__version===void 0||de===!0,X=Ae.dataReady,De=N(E,me);if(E.isDepthTexture)ke=F(E.format===os,E.type),_t&&(dt?t.texStorage2D(r.TEXTURE_2D,1,ke,me.width,me.height):t.texImage2D(r.TEXTURE_2D,0,ke,me.width,me.height,0,Ne,je,null));else if(E.isDataTexture)if(ct.length>0){dt&&_t&&t.texStorage2D(r.TEXTURE_2D,De,ke,ct[0].width,ct[0].height);for(let ge=0,Oe=ct.length;ge<Oe;ge++)Fe=ct[ge],dt?X&&t.texSubImage2D(r.TEXTURE_2D,ge,0,0,Fe.width,Fe.height,Ne,je,Fe.data):t.texImage2D(r.TEXTURE_2D,ge,ke,Fe.width,Fe.height,0,Ne,je,Fe.data);E.generateMipmaps=!1}else dt?(_t&&t.texStorage2D(r.TEXTURE_2D,De,ke,me.width,me.height),X&&pe(E,me,Ne,je)):t.texImage2D(r.TEXTURE_2D,0,ke,me.width,me.height,0,Ne,je,me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){dt&&_t&&t.texStorage3D(r.TEXTURE_2D_ARRAY,De,ke,ct[0].width,ct[0].height,me.depth);for(let ge=0,Oe=ct.length;ge<Oe;ge++)if(Fe=ct[ge],E.format!==yi)if(Ne!==null)if(dt){if(X)if(E.layerUpdates.size>0){const ze=wg(Fe.width,Fe.height,E.format,E.type);for(const xe of E.layerUpdates){const tt=Fe.data.subarray(xe*ze/Fe.data.BYTES_PER_ELEMENT,(xe+1)*ze/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,xe,Fe.width,Fe.height,1,Ne,tt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,Fe.width,Fe.height,me.depth,Ne,Fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ge,ke,Fe.width,Fe.height,me.depth,0,Fe.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?X&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,Fe.width,Fe.height,me.depth,Ne,je,Fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ge,ke,Fe.width,Fe.height,me.depth,0,Ne,je,Fe.data)}else{dt&&_t&&t.texStorage2D(r.TEXTURE_2D,De,ke,ct[0].width,ct[0].height);for(let ge=0,Oe=ct.length;ge<Oe;ge++)Fe=ct[ge],E.format!==yi?Ne!==null?dt?X&&t.compressedTexSubImage2D(r.TEXTURE_2D,ge,0,0,Fe.width,Fe.height,Ne,Fe.data):t.compressedTexImage2D(r.TEXTURE_2D,ge,ke,Fe.width,Fe.height,0,Fe.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?X&&t.texSubImage2D(r.TEXTURE_2D,ge,0,0,Fe.width,Fe.height,Ne,je,Fe.data):t.texImage2D(r.TEXTURE_2D,ge,ke,Fe.width,Fe.height,0,Ne,je,Fe.data)}else if(E.isDataArrayTexture)if(dt){if(_t&&t.texStorage3D(r.TEXTURE_2D_ARRAY,De,ke,me.width,me.height,me.depth),X)if(E.layerUpdates.size>0){const ge=wg(me.width,me.height,E.format,E.type);for(const Oe of E.layerUpdates){const ze=me.data.subarray(Oe*ge/me.data.BYTES_PER_ELEMENT,(Oe+1)*ge/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Oe,me.width,me.height,1,Ne,je,ze)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ne,je,me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ke,me.width,me.height,me.depth,0,Ne,je,me.data);else if(E.isData3DTexture)dt?(_t&&t.texStorage3D(r.TEXTURE_3D,De,ke,me.width,me.height,me.depth),X&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ne,je,me.data)):t.texImage3D(r.TEXTURE_3D,0,ke,me.width,me.height,me.depth,0,Ne,je,me.data);else if(E.isFramebufferTexture){if(_t)if(dt)t.texStorage2D(r.TEXTURE_2D,De,ke,me.width,me.height);else{let ge=me.width,Oe=me.height;for(let ze=0;ze<De;ze++)t.texImage2D(r.TEXTURE_2D,ze,ke,ge,Oe,0,Ne,je,null),ge>>=1,Oe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const ge=r.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),me.parentNode!==ge){ge.appendChild(me),_.add(E),ge.onpaint=Oe=>{const ze=Oe.changedElements;for(const xe of _)ze.includes(xe.image)&&(xe.needsUpdate=!0)},ge.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,me);else{const ze=r.RGBA,xe=r.RGBA,tt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ze,xe,tt,me)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ct.length>0){if(dt&&_t){const ge=et(ct[0]);t.texStorage2D(r.TEXTURE_2D,De,ke,ge.width,ge.height)}for(let ge=0,Oe=ct.length;ge<Oe;ge++)Fe=ct[ge],dt?X&&t.texSubImage2D(r.TEXTURE_2D,ge,0,0,Ne,je,Fe):t.texImage2D(r.TEXTURE_2D,ge,ke,Ne,je,Fe);E.generateMipmaps=!1}else if(dt){if(_t){const ge=et(me);t.texStorage2D(r.TEXTURE_2D,De,ke,ge.width,ge.height)}X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,je,me)}else t.texImage2D(r.TEXTURE_2D,0,ke,Ne,je,me);x(E)&&O(re),we.__version=Ae.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Ke(b,E,J){if(E.image.length!==6)return;const re=ce(b,E),de=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,b.__webglTexture,r.TEXTURE0+J);const Ae=s.get(de);if(de.version!==Ae.__version||re===!0){t.activeTexture(r.TEXTURE0+J);const we=Lt.getPrimaries(Lt.workingColorSpace),he=E.colorSpace===br?null:Lt.getPrimaries(E.colorSpace),me=E.colorSpace===br||we===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ne=E.isCompressedTexture||E.image[0].isCompressedTexture,je=E.image[0]&&E.image[0].isDataTexture,ke=[];for(let xe=0;xe<6;xe++)!Ne&&!je?ke[xe]=S(E.image[xe],!0,a.maxCubemapSize):ke[xe]=je?E.image[xe].image:E.image[xe],ke[xe]=He(E,ke[xe]);const Fe=ke[0],ct=l.convert(E.format,E.colorSpace),dt=l.convert(E.type),_t=C(E.internalFormat,ct,dt,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,De=Ae.__version===void 0||re===!0,ge=de.dataReady;let Oe=N(E,Fe);Ge(r.TEXTURE_CUBE_MAP,E);let ze;if(Ne){X&&De&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,_t,Fe.width,Fe.height);for(let xe=0;xe<6;xe++){ze=ke[xe].mipmaps;for(let tt=0;tt<ze.length;tt++){const Je=ze[tt];E.format!==yi?ct!==null?X?ge&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt,0,0,Je.width,Je.height,ct,Je.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt,_t,Je.width,Je.height,0,Je.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt,0,0,Je.width,Je.height,ct,dt,Je.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt,_t,Je.width,Je.height,0,ct,dt,Je.data)}}}else{if(ze=E.mipmaps,X&&De){ze.length>0&&Oe++;const xe=et(ke[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,_t,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(je){X?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ke[xe].width,ke[xe].height,ct,dt,ke[xe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,_t,ke[xe].width,ke[xe].height,0,ct,dt,ke[xe].data);for(let tt=0;tt<ze.length;tt++){const zt=ze[tt].image[xe].image;X?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt+1,0,0,zt.width,zt.height,ct,dt,zt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt+1,_t,zt.width,zt.height,0,ct,dt,zt.data)}}else{X?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ct,dt,ke[xe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,_t,ct,dt,ke[xe]);for(let tt=0;tt<ze.length;tt++){const Je=ze[tt];X?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt+1,0,0,ct,dt,Je.image[xe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt+1,_t,ct,dt,Je.image[xe])}}}x(E)&&O(r.TEXTURE_CUBE_MAP),Ae.__version=de.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function rt(b,E,J,re,de,Ae){const we=l.convert(J.format,J.colorSpace),he=l.convert(J.type),me=C(J.internalFormat,we,he,J.normalized,J.colorSpace),Ne=s.get(E),je=s.get(J);if(je.__renderTarget=E,!Ne.__hasExternalTextures){const ke=Math.max(1,E.width>>Ae),Fe=Math.max(1,E.height>>Ae);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?t.texImage3D(de,Ae,me,ke,Fe,E.depth,0,we,he,null):t.texImage2D(de,Ae,me,ke,Fe,0,we,he,null)}t.bindFramebuffer(r.FRAMEBUFFER,b),mt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,de,je.__webglTexture,0,ut(E)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,de,je.__webglTexture,Ae),t.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(b,E,J){if(r.bindRenderbuffer(r.RENDERBUFFER,b),E.depthBuffer){const re=E.depthTexture,de=re&&re.isDepthTexture?re.type:null,Ae=F(E.stencilBuffer,de),we=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;mt(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut(E),Ae,E.width,E.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut(E),Ae,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ae,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,we,r.RENDERBUFFER,b)}else{const re=E.textures;for(let de=0;de<re.length;de++){const Ae=re[de],we=l.convert(Ae.format,Ae.colorSpace),he=l.convert(Ae.type),me=C(Ae.internalFormat,we,he,Ae.normalized,Ae.colorSpace);mt(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut(E),me,E.width,E.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut(E),me,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,me,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ft(b,E,J){const re=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=s.get(E.depthTexture);if(de.__renderTarget=E,(!de.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),re){if(de.__webglInit===void 0&&(de.__webglInit=!0,E.depthTexture.addEventListener("dispose",k)),de.__webglTexture===void 0){de.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),Ge(r.TEXTURE_CUBE_MAP,E.depthTexture);const Ne=l.convert(E.depthTexture.format),je=l.convert(E.depthTexture.type);let ke;E.depthTexture.format===ir?ke=r.DEPTH_COMPONENT24:E.depthTexture.format===os&&(ke=r.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,ke,E.width,E.height,0,Ne,je,null)}}else Y(E.depthTexture,0);const Ae=de.__webglTexture,we=ut(E),he=re?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,me=E.depthTexture.format===os?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===ir)mt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,he,Ae,0,we):r.framebufferTexture2D(r.FRAMEBUFFER,me,he,Ae,0);else if(E.depthTexture.format===os)mt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,he,Ae,0,we):r.framebufferTexture2D(r.FRAMEBUFFER,me,he,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ve(b){const E=s.get(b),J=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const re=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),re){const de=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,re.removeEventListener("dispose",de)};re.addEventListener("dispose",de),E.__depthDisposeCallback=de}E.__boundDepthTexture=re}if(b.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let re=0;re<6;re++)ft(E.__webglFramebuffer[re],b,re);else{const re=b.texture.mipmaps;re&&re.length>0?ft(E.__webglFramebuffer[0],b,0):ft(E.__webglFramebuffer,b,0)}else if(J){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]===void 0)E.__webglDepthbuffer[re]=r.createRenderbuffer(),bt(E.__webglDepthbuffer[re],b,!1);else{const de=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer[re];r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,Ae)}}else{const re=b.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),bt(E.__webglDepthbuffer,b,!1);else{const de=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,Ae)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Se(b,E,J){const re=s.get(b);E!==void 0&&rt(re.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&ve(b)}function ye(b){const E=b.texture,J=s.get(b),re=s.get(E);b.addEventListener("dispose",T);const de=b.textures,Ae=b.isWebGLCubeRenderTarget===!0,we=de.length>1;if(we||(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=E.version,c.memory.textures++),Ae){J.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[he]=[];for(let me=0;me<E.mipmaps.length;me++)J.__webglFramebuffer[he][me]=r.createFramebuffer()}else J.__webglFramebuffer[he]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)J.__webglFramebuffer[he]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(we)for(let he=0,me=de.length;he<me;he++){const Ne=s.get(de[he]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=r.createTexture(),c.memory.textures++)}if(b.samples>0&&mt(b)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let he=0;he<de.length;he++){const me=de[he];J.__webglColorRenderbuffer[he]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[he]);const Ne=l.convert(me.format,me.colorSpace),je=l.convert(me.type),ke=C(me.internalFormat,Ne,je,me.normalized,me.colorSpace,b.isXRRenderTarget===!0),Fe=ut(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,ke,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,J.__webglColorRenderbuffer[he])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),bt(J.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),Ge(r.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)rt(J.__webglFramebuffer[he][me],b,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,me);else rt(J.__webglFramebuffer[he],b,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);x(E)&&O(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let he=0,me=de.length;he<me;he++){const Ne=de[he],je=s.get(Ne);let ke=r.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ke=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ke,je.__webglTexture),Ge(ke,Ne),rt(J.__webglFramebuffer,b,Ne,r.COLOR_ATTACHMENT0+he,ke,0),x(Ne)&&O(ke)}t.unbindTexture()}else{let he=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(he=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,re.__webglTexture),Ge(he,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)rt(J.__webglFramebuffer[me],b,E,r.COLOR_ATTACHMENT0,he,me);else rt(J.__webglFramebuffer,b,E,r.COLOR_ATTACHMENT0,he,0);x(E)&&O(he),t.unbindTexture()}b.depthBuffer&&ve(b)}function Ie(b){const E=b.textures;for(let J=0,re=E.length;J<re;J++){const de=E[J];if(x(de)){const Ae=I(b),we=s.get(de).__webglTexture;t.bindTexture(Ae,we),O(Ae),t.unbindTexture()}}}const Ue=[],lt=[];function $e(b){if(b.samples>0){if(mt(b)===!1){const E=b.textures,J=b.width,re=b.height;let de=r.COLOR_BUFFER_BIT;const Ae=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=s.get(b),he=E.length>1;if(he)for(let Ne=0;Ne<E.length;Ne++)t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const me=b.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),he){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,we.__webglColorRenderbuffer[Ne]);const je=s.get(E[Ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,je,0)}r.blitFramebuffer(0,0,J,re,0,0,J,re,de,r.NEAREST),h===!0&&(Ue.length=0,lt.length=0,Ue.push(r.COLOR_ATTACHMENT0+Ne),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ue.push(Ae),lt.push(Ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,lt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),he)for(let Ne=0;Ne<E.length;Ne++){t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,we.__webglColorRenderbuffer[Ne]);const je=s.get(E[Ne]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,je,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&h){const E=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function ut(b){return Math.min(a.maxSamples,b.samples)}function mt(b){const E=s.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function D(b){const E=c.render.frame;v.get(b)!==E&&(v.set(b,E),b.update())}function He(b,E){const J=b.colorSpace,re=b.format,de=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||J!==ac&&J!==br&&(Lt.getTransfer(J)===Bt?(re!==yi||de!==Jn)&&gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",J)),E}function et(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(p.width=b.naturalWidth||b.width,p.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(p.width=b.displayWidth,p.height=b.displayHeight):(p.width=b.width,p.height=b.height),p}this.allocateTextureUnit=ie,this.resetTextureUnits=z,this.getTextureUnits=te,this.setTextureUnits=W,this.setTexture2D=Y,this.setTexture2DArray=ee,this.setTexture3D=le,this.setTextureCube=U,this.rebindTextures=Se,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function WT(r,e){function t(s,a=br){let l;const c=Lt.getTransfer(a);if(s===Jn)return r.UNSIGNED_BYTE;if(s===kd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Bd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===g0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===v0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===p0)return r.BYTE;if(s===m0)return r.SHORT;if(s===lo)return r.UNSIGNED_SHORT;if(s===Od)return r.INT;if(s===Ui)return r.UNSIGNED_INT;if(s===Li)return r.FLOAT;if(s===nr)return r.HALF_FLOAT;if(s===_0)return r.ALPHA;if(s===x0)return r.RGB;if(s===yi)return r.RGBA;if(s===ir)return r.DEPTH_COMPONENT;if(s===os)return r.DEPTH_STENCIL;if(s===y0)return r.RED;if(s===zd)return r.RED_INTEGER;if(s===cs)return r.RG;if(s===Vd)return r.RG_INTEGER;if(s===Hd)return r.RGBA_INTEGER;if(s===Ql||s===ec||s===tc||s===nc)if(c===Bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Ql)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ec)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Ql)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ec)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zf||s===Kf||s===Jf||s===Qf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Zf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ed||s===td||s===nd||s===id||s===rd||s===rc||s===sd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===ed||s===td)return c===Bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===nd)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===id)return l.COMPRESSED_R11_EAC;if(s===rd)return l.COMPRESSED_SIGNED_R11_EAC;if(s===rc)return l.COMPRESSED_RG11_EAC;if(s===sd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===ad||s===od||s===ld||s===cd||s===ud||s===fd||s===dd||s===hd||s===pd||s===md||s===gd||s===vd||s===_d||s===xd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===ad)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===od)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ld)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cd)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ud)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fd)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dd)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hd)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pd)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===md)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gd)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===vd)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_d)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xd)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yd||s===Sd||s===Md)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===yd)return c===Bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Md)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ed||s===Td||s===sc||s===wd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Ed)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Td)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===co?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const XT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YT=`
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

}`;class qT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new b0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Oi({vertexShader:XT,fragmentShader:YT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fi(new pc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jT extends fs{constructor(e,t){super();const s=this;let a=null,l=1,c=null,f="local-floor",h=1,p=null,v=null,_=null,g=null,y=null,M=null;const R=typeof XRWebGLBinding<"u",S=new qT,x={},O=t.getContextAttributes();let I=null,C=null;const F=[],N=[],k=new Be;let T=null;const L=new oi;L.viewport=new Qt;const H=new oi;H.viewport=new Qt;const V=[L,H],Z=new nS;let z=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let _e=F[ce];return _e===void 0&&(_e=new lf,F[ce]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ce){let _e=F[ce];return _e===void 0&&(_e=new lf,F[ce]=_e),_e.getGripSpace()},this.getHand=function(ce){let _e=F[ce];return _e===void 0&&(_e=new lf,F[ce]=_e),_e.getHandSpace()};function W(ce){const _e=N.indexOf(ce.inputSource);if(_e===-1)return;const pe=F[_e];pe!==void 0&&(pe.update(ce.inputSource,ce.frame,p||c),pe.dispatchEvent({type:ce.type,data:ce.inputSource}))}function ie(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",ie),a.removeEventListener("inputsourceschange",$);for(let ce=0;ce<F.length;ce++){const _e=N[ce];_e!==null&&(N[ce]=null,F[ce].disconnect(_e))}z=null,te=null,S.reset();for(const ce in x)delete x[ce];e.setRenderTarget(I),y=null,g=null,_=null,a=null,C=null,Ge.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){l=ce,s.isPresenting===!0&&gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){f=ce,s.isPresenting===!0&&gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(ce){p=ce},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(a,t)),_},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(ce){if(a=ce,a!==null){if(I=e.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",ie),a.addEventListener("inputsourceschange",$),O.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(k),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Pe=null,Ke=null;O.depth&&(Ke=O.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=O.stencil?os:ir,Pe=O.stencil?co:Ui);const rt={colorFormat:t.RGBA8,depthFormat:Ke,scaleFactor:l};_=this.getBinding(),g=_.createProjectionLayer(rt),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new Ii(g.textureWidth,g.textureHeight,{format:yi,type:Jn,depthTexture:new aa(g.textureWidth,g.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const pe={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(a,t,pe),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Ii(y.framebufferWidth,y.framebufferHeight,{format:yi,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await a.requestReferenceSpace(f),Ge.setContext(a),Ge.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function $(ce){for(let _e=0;_e<ce.removed.length;_e++){const pe=ce.removed[_e],Pe=N.indexOf(pe);Pe>=0&&(N[Pe]=null,F[Pe].disconnect(pe))}for(let _e=0;_e<ce.added.length;_e++){const pe=ce.added[_e];let Pe=N.indexOf(pe);if(Pe===-1){for(let rt=0;rt<F.length;rt++)if(rt>=N.length){N.push(pe),Pe=rt;break}else if(N[rt]===null){N[rt]=pe,Pe=rt;break}if(Pe===-1)break}const Ke=F[Pe];Ke&&Ke.connect(pe)}}const Y=new j,ee=new j;function le(ce,_e,pe){Y.setFromMatrixPosition(_e.matrixWorld),ee.setFromMatrixPosition(pe.matrixWorld);const Pe=Y.distanceTo(ee),Ke=_e.projectionMatrix.elements,rt=pe.projectionMatrix.elements,bt=Ke[14]/(Ke[10]-1),ft=Ke[14]/(Ke[10]+1),ve=(Ke[9]+1)/Ke[5],Se=(Ke[9]-1)/Ke[5],ye=(Ke[8]-1)/Ke[0],Ie=(rt[8]+1)/rt[0],Ue=bt*ye,lt=bt*Ie,$e=Pe/(-ye+Ie),ut=$e*-ye;if(_e.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(ut),ce.translateZ($e),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),Ke[10]===-1)ce.projectionMatrix.copy(_e.projectionMatrix),ce.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const mt=bt+$e,D=ft+$e,He=Ue-ut,et=lt+(Pe-ut),b=ve*ft/D*mt,E=Se*ft/D*mt;ce.projectionMatrix.makePerspective(He,et,b,E,mt,D),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function U(ce,_e){_e===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(_e.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(a===null)return;let _e=ce.near,pe=ce.far;S.texture!==null&&(S.depthNear>0&&(_e=S.depthNear),S.depthFar>0&&(pe=S.depthFar)),Z.near=H.near=L.near=_e,Z.far=H.far=L.far=pe,(z!==Z.near||te!==Z.far)&&(a.updateRenderState({depthNear:Z.near,depthFar:Z.far}),z=Z.near,te=Z.far),Z.layers.mask=ce.layers.mask|6,L.layers.mask=Z.layers.mask&-5,H.layers.mask=Z.layers.mask&-3;const Pe=ce.parent,Ke=Z.cameras;U(Z,Pe);for(let rt=0;rt<Ke.length;rt++)U(Ke[rt],Pe);Ke.length===2?le(Z,L,H):Z.projectionMatrix.copy(L.projectionMatrix),Q(ce,Z,Pe)};function Q(ce,_e,pe){pe===null?ce.matrix.copy(_e.matrixWorld):(ce.matrix.copy(pe.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(_e.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(_e.projectionMatrix),ce.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=fo*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(g===null&&y===null))return h},this.setFoveation=function(ce){h=ce,g!==null&&(g.fixedFoveation=ce),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ce)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(ce){return x[ce]};let Te=null;function qe(ce,_e){if(v=_e.getViewerPose(p||c),M=_e,v!==null){const pe=v.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let Pe=!1;pe.length!==Z.cameras.length&&(Z.cameras.length=0,Pe=!0);for(let ft=0;ft<pe.length;ft++){const ve=pe[ft];let Se=null;if(y!==null)Se=y.getViewport(ve);else{const Ie=_.getViewSubImage(g,ve);Se=Ie.viewport,ft===0&&(e.setRenderTargetTextures(C,Ie.colorTexture,Ie.depthStencilTexture),e.setRenderTarget(C))}let ye=V[ft];ye===void 0&&(ye=new oi,ye.layers.enable(ft),ye.viewport=new Qt,V[ft]=ye),ye.matrix.fromArray(ve.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(ve.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Se.x,Se.y,Se.width,Se.height),ft===0&&(Z.matrix.copy(ye.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Pe===!0&&Z.cameras.push(ye)}const Ke=a.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&R){_=s.getBinding();const ft=_.getDepthInformation(pe[0]);ft&&ft.isValid&&ft.texture&&S.init(ft,a.renderState)}if(Ke&&Ke.includes("camera-access")&&R){e.state.unbindTexture(),_=s.getBinding();for(let ft=0;ft<pe.length;ft++){const ve=pe[ft].camera;if(ve){let Se=x[ve];Se||(Se=new b0,x[ve]=Se);const ye=_.getCameraImage(ve);Se.sourceTexture=ye}}}}for(let pe=0;pe<F.length;pe++){const Pe=N[pe],Ke=F[pe];Pe!==null&&Ke!==void 0&&Ke.update(Pe,_e,p||c)}Te&&Te(ce,_e),_e.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:_e}),M=null}const Ge=new H0;Ge.setAnimationLoop(qe),this.setAnimationLoop=function(ce){Te=ce},this.dispose=function(){}}}const $T=new qt,$0=new Et;$0.set(-1,0,0,0,1,0,0,0,1);function ZT(r,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,B0(r)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function a(S,x,O,I,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(S,x):x.isMeshLambertMaterial?(l(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(S,x),_(S,x)):x.isMeshPhongMaterial?(l(S,x),v(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(S,x),g(S,x),x.isMeshPhysicalMaterial&&y(S,x,C)):x.isMeshMatcapMaterial?(l(S,x),M(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),R(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?h(S,x,O,I):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Gn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Gn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const O=e.get(x),I=O.envMap,C=O.envMapRotation;I&&(S.envMap.value=I,S.envMapRotation.value.setFromMatrix4($T.makeRotationFromEuler(C)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply($0),S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function h(S,x,O,I){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*O,S.scale.value=I*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function g(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,O){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Gn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function R(S,x){const O=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function KT(r,e,t,s){let a={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(C,F){const N=F.program;s.uniformBlockBinding(C,N)}function p(C,F){let N=a[C.id];N===void 0&&(S(C),N=v(C),a[C.id]=N,C.addEventListener("dispose",O));const k=F.program;s.updateUBOMapping(C,k);const T=e.render.frame;l[C.id]!==T&&(g(C),l[C.id]=T)}function v(C){const F=_();C.__bindingPointIndex=F;const N=r.createBuffer(),k=C.__size,T=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,k,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,F,N),N}function _(){for(let C=0;C<f;C++)if(c.indexOf(C)===-1)return c.push(C),C;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const F=a[C.id],N=C.uniforms,k=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,F);for(let T=0,L=N.length;T<L;T++){const H=N[T];if(Array.isArray(H))for(let V=0,Z=H.length;V<Z;V++)y(H[V],T,V,k);else y(H,T,0,k)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(C,F,N,k){if(R(C,F,N,k)===!0){const T=C.__offset,L=C.value;if(Array.isArray(L)){let H=0;for(let V=0;V<L.length;V++){const Z=L[V],z=x(Z);M(Z,C.__data,H),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(H+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(L,C.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,C.__data)}}function M(C,F,N){typeof C=="number"||typeof C=="boolean"?F[0]=C:C.isMatrix3?(F[0]=C.elements[0],F[1]=C.elements[1],F[2]=C.elements[2],F[3]=0,F[4]=C.elements[3],F[5]=C.elements[4],F[6]=C.elements[5],F[7]=0,F[8]=C.elements[6],F[9]=C.elements[7],F[10]=C.elements[8],F[11]=0):ArrayBuffer.isView(C)?F.set(new C.constructor(C.buffer,C.byteOffset,F.length)):C.toArray(F,N)}function R(C,F,N,k){const T=C.value,L=F+"_"+N;if(k[L]===void 0)return typeof T=="number"||typeof T=="boolean"?k[L]=T:ArrayBuffer.isView(T)?k[L]=T.slice():k[L]=T.clone(),!0;{const H=k[L];if(typeof T=="number"||typeof T=="boolean"){if(H!==T)return k[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(H.equals(T)===!1)return H.copy(T),!0}}return!1}function S(C){const F=C.uniforms;let N=0;const k=16;for(let L=0,H=F.length;L<H;L++){const V=Array.isArray(F[L])?F[L]:[F[L]];for(let Z=0,z=V.length;Z<z;Z++){const te=V[Z],W=Array.isArray(te.value)?te.value:[te.value];for(let ie=0,$=W.length;ie<$;ie++){const Y=W[ie],ee=x(Y),le=N%k,U=le%ee.boundary,Q=le+U;N+=U,Q!==0&&k-Q<ee.storage&&(N+=k-Q),te.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=N,N+=ee.storage}}}const T=N%k;return T>0&&(N+=k-T),C.__size=N,C.__cache={},this}function x(C){const F={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(F.boundary=4,F.storage=4):C.isVector2?(F.boundary=8,F.storage=8):C.isVector3||C.isColor?(F.boundary=16,F.storage=12):C.isVector4?(F.boundary=16,F.storage=16):C.isMatrix3?(F.boundary=48,F.storage=48):C.isMatrix4?(F.boundary=64,F.storage=64):C.isTexture?gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(F.boundary=16,F.storage=C.byteLength):gt("WebGLRenderer: Unsupported uniform value type.",C),F}function O(C){const F=C.target;F.removeEventListener("dispose",O);const N=c.indexOf(F.__bindingPointIndex);c.splice(N,1),r.deleteBuffer(a[F.id]),delete a[F.id],delete l[F.id]}function I(){for(const C in a)r.deleteBuffer(a[C]);c=[],a={},l={}}return{bind:h,update:p,dispose:I}}const JT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ri=null;function QT(){return Ri===null&&(Ri=new ry(JT,16,16,cs,nr),Ri.name="DFG_LUT",Ri.minFilter=Rn,Ri.magFilter=Rn,Ri.wrapS=Qi,Ri.wrapT=Qi,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}class ew{constructor(e={}){const{canvas:t=yx(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Jn}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=c;const R=y,S=new Set([Hd,Vd,zd]),x=new Set([Jn,Ui,lo,co,kd,Bd]),O=new Uint32Array(4),I=new Int32Array(4),C=new j;let F=null,N=null;const k=[],T=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const H=this;let V=!1,Z=null,z=null,te=null,W=null;this._outputColorSpace=Kn;let ie=0,$=0,Y=null,ee=-1,le=null;const U=new Qt,Q=new Qt;let Te=null;const qe=new vt(0);let Ge=0,ce=t.width,_e=t.height,pe=1,Pe=null,Ke=null;const rt=new Qt(0,0,ce,_e),bt=new Qt(0,0,ce,_e);let ft=!1;const ve=new Zd;let Se=!1,ye=!1;const Ie=new qt,Ue=new j,lt=new Qt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function mt(){return Y===null?pe:1}let D=s;function He(A,K){return t.getContext(A,K)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fd}`),t.addEventListener("webglcontextlost",zt,!1),t.addEventListener("webglcontextrestored",Ut,!1),t.addEventListener("webglcontextcreationerror",Sn,!1),D===null){const K="webgl2";if(D=He(K,A),D===null)throw He(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Pt("WebGLRenderer: "+A.message),A}let et,b,E,J,re,de,Ae,we,he,me,Ne,je,ke,Fe,ct,dt,_t,X,De,ge,Oe,ze,xe;function tt(){et=new QE(D),et.init(),Oe=new WT(D,et),b=new XE(D,et,e,Oe),E=new HT(D,et),b.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),z=D.createFramebuffer(),te=D.createFramebuffer(),W=D.createFramebuffer(),J=new n1(D),re=new RT,de=new GT(D,et,E,re,b,Oe,J),Ae=new JE(H),we=new aS(D),ze=new GE(D,we),he=new e1(D,we,J,ze),me=new r1(D,he,we,ze,J),X=new i1(D,b,de),ct=new YE(re),Ne=new CT(H,Ae,et,b,ze,ct),je=new ZT(H,re),ke=new PT,Fe=new FT(et),_t=new HE(H,Ae,E,me,M,h),dt=new VT(H,me,b),xe=new KT(D,J,b,E),De=new WE(D,et,J),ge=new t1(D,et,J),J.programs=Ne.programs,H.capabilities=b,H.extensions=et,H.properties=re,H.renderLists=ke,H.shadowMap=dt,H.state=E,H.info=J}tt(),R!==Jn&&(L=new a1(R,t.width,t.height,f,a,l));const Je=new jT(H,D);this.xr=Je,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(A){A!==void 0&&(pe=A,this.setSize(ce,_e,!1))},this.getSize=function(A){return A.set(ce,_e)},this.setSize=function(A,K,ue=!0){if(Je.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=A,_e=K,t.width=Math.floor(A*pe),t.height=Math.floor(K*pe),ue===!0&&(t.style.width=A+"px",t.style.height=K+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(ce*pe,_e*pe).floor()},this.setDrawingBufferSize=function(A,K,ue){ce=A,_e=K,pe=ue,t.width=Math.floor(A*ue),t.height=Math.floor(K*ue),this.setViewport(0,0,A,K)},this.setEffects=function(A){if(R===Jn){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let K=0;K<A.length;K++)if(A[K].isOutputPass===!0){gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(rt)},this.setViewport=function(A,K,ue,ae){A.isVector4?rt.set(A.x,A.y,A.z,A.w):rt.set(A,K,ue,ae),E.viewport(U.copy(rt).multiplyScalar(pe).round())},this.getScissor=function(A){return A.copy(bt)},this.setScissor=function(A,K,ue,ae){A.isVector4?bt.set(A.x,A.y,A.z,A.w):bt.set(A,K,ue,ae),E.scissor(Q.copy(bt).multiplyScalar(pe).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(A){E.setScissorTest(ft=A)},this.setOpaqueSort=function(A){Pe=A},this.setTransparentSort=function(A){Ke=A},this.getClearColor=function(A){return A.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor(...arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha(...arguments)},this.clear=function(A=!0,K=!0,ue=!0){let ae=0;if(A){let se=!1;if(Y!==null){const Le=Y.texture.format;se=S.has(Le)}if(se){const Le=Y.texture.type,Ye=x.has(Le),be=_t.getClearColor(),nt=_t.getClearAlpha(),ot=be.r,St=be.g,Mt=be.b;Ye?(O[0]=ot,O[1]=St,O[2]=Mt,O[3]=nt,D.clearBufferuiv(D.COLOR,0,O)):(I[0]=ot,I[1]=St,I[2]=Mt,I[3]=nt,D.clearBufferiv(D.COLOR,0,I))}else ae|=D.COLOR_BUFFER_BIT}K&&(ae|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ae|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&D.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Z=A},this.dispose=function(){t.removeEventListener("webglcontextlost",zt,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),_t.dispose(),ke.dispose(),Fe.dispose(),re.dispose(),Ae.dispose(),me.dispose(),ze.dispose(),xe.dispose(),Ne.dispose(),Je.dispose(),Je.removeEventListener("sessionstart",vo),Je.removeEventListener("sessionend",_o),bn.stop()};function zt(A){A.preventDefault(),Wm("WebGLRenderer: Context Lost."),V=!0}function Ut(){Wm("WebGLRenderer: Context Restored."),V=!1;const A=J.autoReset,K=dt.enabled,ue=dt.autoUpdate,ae=dt.needsUpdate,se=dt.type;tt(),J.autoReset=A,dt.enabled=K,dt.autoUpdate=ue,dt.needsUpdate=ae,dt.type=se}function Sn(A){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qn(A){const K=A.target;K.removeEventListener("dispose",Qn),Ur(K)}function Ur(A){hs(A),re.remove(A)}function hs(A){const K=re.get(A).programs;K!==void 0&&(K.forEach(function(ue){Ne.releaseProgram(ue)}),A.isShaderMaterial&&Ne.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,ue,ae,se,Le){K===null&&(K=$e);const Ye=se.isMesh&&se.matrixWorld.determinantAffine()<0,be=Zt(A,K,ue,ae,se);E.setMaterial(ae,Ye);let nt=ue.index,ot=1;if(ae.wireframe===!0){if(nt=he.getWireframeAttribute(ue),nt===void 0)return;ot=2}const St=ue.drawRange,Mt=ue.attributes.position;let st=St.start*ot,Nt=(St.start+St.count)*ot;Le!==null&&(st=Math.max(st,Le.start*ot),Nt=Math.min(Nt,(Le.start+Le.count)*ot)),nt!==null?(st=Math.max(st,0),Nt=Math.min(Nt,nt.count)):Mt!=null&&(st=Math.max(st,0),Nt=Math.min(Nt,Mt.count));const Vt=Nt-st;if(Vt<0||Vt===1/0)return;ze.setup(se,ae,be,ue,nt);let jt,Ot=De;if(nt!==null&&(jt=we.get(nt),Ot=ge,Ot.setIndex(jt)),se.isMesh)ae.wireframe===!0?(E.setLineWidth(ae.wireframeLinewidth*mt()),Ot.setMode(D.LINES)):Ot.setMode(D.TRIANGLES);else if(se.isLine){let rn=ae.linewidth;rn===void 0&&(rn=1),E.setLineWidth(rn*mt()),se.isLineSegments?Ot.setMode(D.LINES):se.isLineLoop?Ot.setMode(D.LINE_LOOP):Ot.setMode(D.LINE_STRIP)}else se.isPoints?Ot.setMode(D.POINTS):se.isSprite&&Ot.setMode(D.TRIANGLES);if(se.isBatchedMesh)if(et.get("WEBGL_multi_draw"))Ot.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const rn=se._multiDrawStarts,We=se._multiDrawCounts,vn=se._multiDrawCount,wt=nt?we.get(nt).bytesPerElement:1,Un=re.get(ae).currentProgram.getUniforms();for(let Fn=0;Fn<vn;Fn++)Un.setValue(D,"_gl_DrawID",Fn),Ot.render(rn[Fn]/wt,We[Fn])}else if(se.isInstancedMesh)Ot.renderInstances(st,Vt,se.count);else if(ue.isInstancedBufferGeometry){const rn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,We=Math.min(ue.instanceCount,rn);Ot.renderInstances(st,Vt,We)}else Ot.render(st,Vt)};function Fr(A,K,ue){A.transparent===!0&&A.side===Pi&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,Br(A,K,ue),A.side=Dr,A.needsUpdate=!0,Br(A,K,ue),A.side=Pi):Br(A,K,ue)}this.compile=function(A,K,ue=null){ue===null&&(ue=A),N=Fe.get(ue),N.init(K),T.push(N),ue.traverseVisible(function(se){se.isLight&&se.layers.test(K.layers)&&(N.pushLight(se),se.castShadow&&N.pushShadow(se))}),A!==ue&&A.traverseVisible(function(se){se.isLight&&se.layers.test(K.layers)&&(N.pushLight(se),se.castShadow&&N.pushShadow(se))}),N.setupLights();const ae=new Set;return A.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Le=se.material;if(Le)if(Array.isArray(Le))for(let Ye=0;Ye<Le.length;Ye++){const be=Le[Ye];Fr(be,ue,se),ae.add(be)}else Fr(Le,ue,se),ae.add(Le)}),N=T.pop(),ae},this.compileAsync=function(A,K,ue=null){const ae=this.compile(A,K,ue);return new Promise(se=>{function Le(){if(ae.forEach(function(Ye){re.get(Ye).currentProgram.isReady()&&ae.delete(Ye)}),ae.size===0){se(A);return}setTimeout(Le,10)}et.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Or=null;function vc(A){Or&&Or(A)}function vo(){bn.stop()}function _o(){bn.start()}const bn=new H0;bn.setAnimationLoop(vc),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(A){Or=A,Je.setAnimationLoop(A),A===null?bn.stop():bn.start()},Je.addEventListener("sessionstart",vo),Je.addEventListener("sessionend",_o),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Z!==null&&Z.renderStart(A,K);const ue=Je.enabled===!0&&Je.isPresenting===!0,ae=L!==null&&(Y===null||ue)&&L.begin(H,Y);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Je.cameraAutoUpdate===!0&&Je.updateCamera(K),K=Je.getCamera()),A.isScene===!0&&A.onBeforeRender(H,A,K,Y),N=Fe.get(A,T.length),N.init(K),N.state.textureUnits=de.getTextureUnits(),T.push(N),Ie.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ve.setFromProjectionMatrix(Ie,Ni,K.reversedDepth),ye=this.localClippingEnabled,Se=ct.init(this.clippingPlanes,ye),F=ke.get(A,k.length),F.init(),k.push(F),Je.enabled===!0&&Je.isPresenting===!0){const Ye=H.xr.getDepthSensingMesh();Ye!==null&&ps(Ye,K,-1/0,H.sortObjects)}ps(A,K,0,H.sortObjects),F.finish(),H.sortObjects===!0&&F.sort(Pe,Ke,K.reversedDepth),ut=Je.enabled===!1||Je.isPresenting===!1||Je.hasDepthSensing()===!1,ut&&_t.addToRenderList(F,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Se===!0&&ct.beginShadows();const se=N.state.shadowsArray;if(dt.render(se,A,K),Se===!0&&ct.endShadows(),(ae&&L.hasRenderPass())===!1){const Ye=F.opaque,be=F.transmissive;if(N.setupLights(),K.isArrayCamera){const nt=K.cameras;if(be.length>0)for(let ot=0,St=nt.length;ot<St;ot++){const Mt=nt[ot];xo(Ye,be,A,Mt)}ut&&_t.render(A);for(let ot=0,St=nt.length;ot<St;ot++){const Mt=nt[ot];da(F,A,Mt,Mt.viewport)}}else be.length>0&&xo(Ye,be,A,K),ut&&_t.render(A),da(F,A,K)}Y!==null&&$===0&&(de.updateMultisampleRenderTarget(Y),de.updateRenderTargetMipmap(Y)),ae&&L.end(H),A.isScene===!0&&A.onAfterRender(H,A,K),ze.resetDefaultState(),ee=-1,le=null,T.pop(),T.length>0?(N=T[T.length-1],de.setTextureUnits(N.state.textureUnits),Se===!0&&ct.setGlobalState(H.clippingPlanes,N.state.camera)):N=null,k.pop(),k.length>0?F=k[k.length-1]:F=null,Z!==null&&Z.renderEnd()};function ps(A,K,ue,ae){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)ue=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ve.intersectsSprite(A)){ae&&lt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ie);const Ye=me.update(A),be=A.material;be.visible&&F.push(A,Ye,be,ue,lt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ve.intersectsObject(A))){const Ye=me.update(A),be=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),lt.copy(A.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),lt.copy(Ye.boundingSphere.center)),lt.applyMatrix4(A.matrixWorld).applyMatrix4(Ie)),Array.isArray(be)){const nt=Ye.groups;for(let ot=0,St=nt.length;ot<St;ot++){const Mt=nt[ot],st=be[Mt.materialIndex];st&&st.visible&&F.push(A,Ye,st,ue,lt.z,Mt)}}else be.visible&&F.push(A,Ye,be,ue,lt.z,null)}}const Le=A.children;for(let Ye=0,be=Le.length;Ye<be;Ye++)ps(Le[Ye],K,ue,ae)}function da(A,K,ue,ae){const{opaque:se,transmissive:Le,transparent:Ye}=A;N.setupLightsView(ue),Se===!0&&ct.setGlobalState(H.clippingPlanes,ue),ae&&E.viewport(U.copy(ae)),se.length>0&&kr(se,K,ue),Le.length>0&&kr(Le,K,ue),Ye.length>0&&kr(Ye,K,ue),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function xo(A,K,ue,ae){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ae.id]===void 0){const st=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ae.id]=new Ii(1,1,{generateMipmaps:!0,type:st?nr:Jn,minFilter:as,samples:Math.max(4,b.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const Le=N.state.transmissionRenderTarget[ae.id],Ye=ae.viewport||U;Le.setSize(Ye.z*H.transmissionResolutionScale,Ye.w*H.transmissionResolutionScale);const be=H.getRenderTarget(),nt=H.getActiveCubeFace(),ot=H.getActiveMipmapLevel();H.setRenderTarget(Le),H.getClearColor(qe),Ge=H.getClearAlpha(),Ge<1&&H.setClearColor(16777215,.5),H.clear(),ut&&_t.render(ue);const St=H.toneMapping;H.toneMapping=Di;const Mt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),N.setupLightsView(ae),Se===!0&&ct.setGlobalState(H.clippingPlanes,ae),kr(A,ue,ae),de.updateMultisampleRenderTarget(Le),de.updateRenderTargetMipmap(Le),et.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Nt=0,Vt=K.length;Nt<Vt;Nt++){const jt=K[Nt],{object:Ot,geometry:rn,material:We,group:vn}=jt;if(We.side===Pi&&Ot.layers.test(ae.layers)){const wt=We.side;We.side=Gn,We.needsUpdate=!0,ha(Ot,ue,ae,rn,We,vn),We.side=wt,We.needsUpdate=!0,st=!0}}st===!0&&(de.updateMultisampleRenderTarget(Le),de.updateRenderTargetMipmap(Le))}H.setRenderTarget(be,nt,ot),H.setClearColor(qe,Ge),Mt!==void 0&&(ae.viewport=Mt),H.toneMapping=St}function kr(A,K,ue){const ae=K.isScene===!0?K.overrideMaterial:null;for(let se=0,Le=A.length;se<Le;se++){const Ye=A[se],{object:be,geometry:nt,group:ot}=Ye;let St=Ye.material;St.allowOverride===!0&&ae!==null&&(St=ae),be.layers.test(ue.layers)&&ha(be,K,ue,nt,St,ot)}}function ha(A,K,ue,ae,se,Le){A.onBeforeRender(H,K,ue,ae,se,Le),A.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),se.onBeforeRender(H,K,ue,ae,A,Le),se.transparent===!0&&se.side===Pi&&se.forceSinglePass===!1?(se.side=Gn,se.needsUpdate=!0,H.renderBufferDirect(ue,K,ae,se,A,Le),se.side=Dr,se.needsUpdate=!0,H.renderBufferDirect(ue,K,ae,se,A,Le),se.side=Pi):H.renderBufferDirect(ue,K,ae,se,A,Le),A.onAfterRender(H,K,ue,ae,se,Le)}function Br(A,K,ue){K.isScene!==!0&&(K=$e);const ae=re.get(A),se=N.state.lights,Le=N.state.shadowsArray,Ye=se.state.version,be=Ne.getParameters(A,se.state,Le,K,ue,N.state.lightProbeGridArray),nt=Ne.getProgramCacheKey(be);let ot=ae.programs;ae.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?K.environment:null,ae.fog=K.fog;const St=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ae.envMap=Ae.get(A.envMap||ae.environment,St),ae.envMapRotation=ae.environment!==null&&A.envMap===null?K.environmentRotation:A.envMapRotation,ot===void 0&&(A.addEventListener("dispose",Qn),ot=new Map,ae.programs=ot);let Mt=ot.get(nt);if(Mt!==void 0){if(ae.currentProgram===Mt&&ae.lightsStateVersion===Ye)return yo(A,be),Mt}else be.uniforms=Ne.getUniforms(A),Z!==null&&A.isNodeMaterial&&Z.build(A,ue,be),A.onBeforeCompile(be,H),Mt=Ne.acquireProgram(be,nt),ot.set(nt,Mt),ae.uniforms=be.uniforms;const st=ae.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(st.clippingPlanes=ct.uniform),yo(A,be),ae.needsLights=ma(A),ae.lightsStateVersion=Ye,ae.needsLights&&(st.ambientLightColor.value=se.state.ambient,st.lightProbe.value=se.state.probe,st.directionalLights.value=se.state.directional,st.directionalLightShadows.value=se.state.directionalShadow,st.spotLights.value=se.state.spot,st.spotLightShadows.value=se.state.spotShadow,st.rectAreaLights.value=se.state.rectArea,st.ltc_1.value=se.state.rectAreaLTC1,st.ltc_2.value=se.state.rectAreaLTC2,st.pointLights.value=se.state.point,st.pointLightShadows.value=se.state.pointShadow,st.hemisphereLights.value=se.state.hemi,st.directionalShadowMatrix.value=se.state.directionalShadowMatrix,st.spotLightMatrix.value=se.state.spotLightMatrix,st.spotLightMap.value=se.state.spotLightMap,st.pointShadowMatrix.value=se.state.pointShadowMatrix),ae.lightProbeGrid=N.state.lightProbeGridArray.length>0,ae.currentProgram=Mt,ae.uniformsList=null,Mt}function pa(A){if(A.uniformsList===null){const K=A.currentProgram.getUniforms();A.uniformsList=ic.seqWithValue(K.seq,A.uniforms)}return A.uniformsList}function yo(A,K){const ue=re.get(A);ue.outputColorSpace=K.outputColorSpace,ue.batching=K.batching,ue.batchingColor=K.batchingColor,ue.instancing=K.instancing,ue.instancingColor=K.instancingColor,ue.instancingMorph=K.instancingMorph,ue.skinning=K.skinning,ue.morphTargets=K.morphTargets,ue.morphNormals=K.morphNormals,ue.morphColors=K.morphColors,ue.morphTargetsCount=K.morphTargetsCount,ue.numClippingPlanes=K.numClippingPlanes,ue.numIntersection=K.numClipIntersection,ue.vertexAlphas=K.vertexAlphas,ue.vertexTangents=K.vertexTangents,ue.toneMapping=K.toneMapping}function _c(A,K){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(K.matrixWorld);for(let ue=0,ae=A.length;ue<ae;ue++){const se=A[ue];if(se.texture!==null&&se.boundingBox.containsPoint(C))return se}return null}function Zt(A,K,ue,ae,se){K.isScene!==!0&&(K=$e),de.resetTextureUnits();const Le=K.fog,Ye=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?K.environment:null,be=Y===null?H.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Lt.workingColorSpace,nt=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,ot=Ae.get(ae.envMap||Ye,nt),St=ae.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,Mt=!!ue.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),st=!!ue.morphAttributes.position,Nt=!!ue.morphAttributes.normal,Vt=!!ue.morphAttributes.color;let jt=Di;ae.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(jt=H.toneMapping);const Ot=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,rn=Ot!==void 0?Ot.length:0,We=re.get(ae),vn=N.state.lights;if(Se===!0&&(ye===!0||A!==le)){const kt=A===le&&ae.id===ee;ct.setState(ae,A,kt)}let wt=!1;ae.version===We.__version?(We.needsLights&&We.lightsStateVersion!==vn.state.version||We.outputColorSpace!==be||se.isBatchedMesh&&We.batching===!1||!se.isBatchedMesh&&We.batching===!0||se.isBatchedMesh&&We.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&We.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&We.instancing===!1||!se.isInstancedMesh&&We.instancing===!0||se.isSkinnedMesh&&We.skinning===!1||!se.isSkinnedMesh&&We.skinning===!0||se.isInstancedMesh&&We.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&We.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&We.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&We.instancingMorph===!1&&se.morphTexture!==null||We.envMap!==ot||ae.fog===!0&&We.fog!==Le||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ct.numPlanes||We.numIntersection!==ct.numIntersection)||We.vertexAlphas!==St||We.vertexTangents!==Mt||We.morphTargets!==st||We.morphNormals!==Nt||We.morphColors!==Vt||We.toneMapping!==jt||We.morphTargetsCount!==rn||!!We.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(wt=!0):(wt=!0,We.__version=ae.version);let Un=We.currentProgram;wt===!0&&(Un=Br(ae,K,se),Z&&ae.isNodeMaterial&&Z.onUpdateProgram(ae,Un,We));let Fn=!1,At=!1,Bi=!1;const Ft=Un.getUniforms(),Wt=We.uniforms;if(E.useProgram(Un.program)&&(Fn=!0,At=!0,Bi=!0),ae.id!==ee&&(ee=ae.id,At=!0),We.needsLights){const kt=_c(N.state.lightProbeGridArray,se);We.lightProbeGrid!==kt&&(We.lightProbeGrid=kt,At=!0)}if(Fn||le!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(D,"projectionMatrix",A.projectionMatrix),Ft.setValue(D,"viewMatrix",A.matrixWorldInverse);const ui=Ft.map.cameraPosition;ui!==void 0&&ui.setValue(D,Ue.setFromMatrixPosition(A.matrixWorld)),b.logarithmicDepthBuffer&&Ft.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ft.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),le!==A&&(le=A,At=!0,Bi=!0)}if(We.needsLights&&(vn.state.directionalShadowMap.length>0&&Ft.setValue(D,"directionalShadowMap",vn.state.directionalShadowMap,de),vn.state.spotShadowMap.length>0&&Ft.setValue(D,"spotShadowMap",vn.state.spotShadowMap,de),vn.state.pointShadowMap.length>0&&Ft.setValue(D,"pointShadowMap",vn.state.pointShadowMap,de)),se.isSkinnedMesh){Ft.setOptional(D,se,"bindMatrix"),Ft.setOptional(D,se,"bindMatrixInverse");const kt=se.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Ft.setValue(D,"boneTexture",kt.boneTexture,de))}se.isBatchedMesh&&(Ft.setOptional(D,se,"batchingTexture"),Ft.setValue(D,"batchingTexture",se._matricesTexture,de),Ft.setOptional(D,se,"batchingIdTexture"),Ft.setValue(D,"batchingIdTexture",se._indirectTexture,de),Ft.setOptional(D,se,"batchingColorTexture"),se._colorsTexture!==null&&Ft.setValue(D,"batchingColorTexture",se._colorsTexture,de));const ci=ue.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&X.update(se,ue,Un),(At||We.receiveShadow!==se.receiveShadow)&&(We.receiveShadow=se.receiveShadow,Ft.setValue(D,"receiveShadow",se.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&K.environment!==null&&(Wt.envMapIntensity.value=K.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=QT()),At){if(Ft.setValue(D,"toneMappingExposure",H.toneMappingExposure),We.needsLights&&xc(Wt,Bi),Le&&ae.fog===!0&&je.refreshFogUniforms(Wt,Le),je.refreshMaterialUniforms(Wt,ae,pe,_e,N.state.transmissionRenderTarget[A.id]),We.needsLights&&We.lightProbeGrid){const kt=We.lightProbeGrid;Wt.probesSH.value=kt.texture,Wt.probesMin.value.copy(kt.boundingBox.min),Wt.probesMax.value.copy(kt.boundingBox.max),Wt.probesResolution.value.copy(kt.resolution)}ic.upload(D,pa(We),Wt,de)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(ic.upload(D,pa(We),Wt,de),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ft.setValue(D,"center",se.center),Ft.setValue(D,"modelViewMatrix",se.modelViewMatrix),Ft.setValue(D,"normalMatrix",se.normalMatrix),Ft.setValue(D,"modelMatrix",se.matrixWorld),ae.uniformsGroups!==void 0){const kt=ae.uniformsGroups;for(let ui=0,Mi=kt.length;ui<Mi;ui++){const zr=kt[ui];xe.update(zr,Un),xe.bind(zr,Un)}}return Un}function xc(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function ma(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,K,ue){const ae=re.get(A);ae.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),re.get(A.texture).__webglTexture=K,re.get(A.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ue,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,K){const ue=re.get(A);ue.__webglFramebuffer=K,ue.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(A,K=0,ue=0){Y=A,ie=K,$=ue;let ae=null,se=!1,Le=!1;if(A){const be=re.get(A);if(be.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(D.FRAMEBUFFER,be.__webglFramebuffer),U.copy(A.viewport),Q.copy(A.scissor),Te=A.scissorTest,E.viewport(U),E.scissor(Q),E.setScissorTest(Te),ee=-1;return}else if(be.__webglFramebuffer===void 0)de.setupRenderTarget(A);else if(be.__hasExternalTextures)de.rebindTextures(A,re.get(A.texture).__webglTexture,re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const St=A.depthTexture;if(be.__boundDepthTexture!==St){if(St!==null&&re.has(St)&&(A.width!==St.image.width||A.height!==St.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(A)}}const nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Le=!0);const ot=re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ot[K])?ae=ot[K][ue]:ae=ot[K],se=!0):A.samples>0&&de.useMultisampledRTT(A)===!1?ae=re.get(A).__webglMultisampledFramebuffer:Array.isArray(ot)?ae=ot[ue]:ae=ot,U.copy(A.viewport),Q.copy(A.scissor),Te=A.scissorTest}else U.copy(rt).multiplyScalar(pe).floor(),Q.copy(bt).multiplyScalar(pe).floor(),Te=ft;if(ue!==0&&(ae=z),E.bindFramebuffer(D.FRAMEBUFFER,ae)&&E.drawBuffers(A,ae),E.viewport(U),E.scissor(Q),E.setScissorTest(Te),se){const be=re.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+K,be.__webglTexture,ue)}else if(Le){const be=K;for(let nt=0;nt<A.textures.length;nt++){const ot=re.get(A.textures[nt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+nt,ot.__webglTexture,ue,be)}}else if(A!==null&&ue!==0){const be=re.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,be.__webglTexture,ue)}ee=-1},this.readRenderTargetPixels=function(A,K,ue,ae,se,Le,Ye,be=0){if(!(A&&A.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ye!==void 0&&(nt=nt[Ye]),nt){E.bindFramebuffer(D.FRAMEBUFFER,nt);try{const ot=A.textures[be],St=ot.format,Mt=ot.type;if(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+be),!b.textureFormatReadable(St)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!b.textureTypeReadable(Mt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-ae&&ue>=0&&ue<=A.height-se&&D.readPixels(K,ue,ae,se,Oe.convert(St),Oe.convert(Mt),Le)}finally{const ot=Y!==null?re.get(Y).__webglFramebuffer:null;E.bindFramebuffer(D.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(A,K,ue,ae,se,Le,Ye,be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let nt=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ye!==void 0&&(nt=nt[Ye]),nt)if(K>=0&&K<=A.width-ae&&ue>=0&&ue<=A.height-se){E.bindFramebuffer(D.FRAMEBUFFER,nt);const ot=A.textures[be],St=ot.format,Mt=ot.type;if(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+be),!b.textureFormatReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!b.textureTypeReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,st),D.bufferData(D.PIXEL_PACK_BUFFER,Le.byteLength,D.STREAM_READ),D.readPixels(K,ue,ae,se,Oe.convert(St),Oe.convert(Mt),0);const Nt=Y!==null?re.get(Y).__webglFramebuffer:null;E.bindFramebuffer(D.FRAMEBUFFER,Nt);const Vt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Sx(D,Vt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,st),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Le),D.deleteBuffer(st),D.deleteSync(Vt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,K=null,ue=0){const ae=Math.pow(2,-ue),se=Math.floor(A.image.width*ae),Le=Math.floor(A.image.height*ae),Ye=K!==null?K.x:0,be=K!==null?K.y:0;de.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,ue,0,0,Ye,be,se,Le),E.unbindTexture()},this.copyTextureToTexture=function(A,K,ue=null,ae=null,se=0,Le=0){let Ye,be,nt,ot,St,Mt,st,Nt,Vt;const jt=A.isCompressedTexture?A.mipmaps[Le]:A.image;if(ue!==null)Ye=ue.max.x-ue.min.x,be=ue.max.y-ue.min.y,nt=ue.isBox3?ue.max.z-ue.min.z:1,ot=ue.min.x,St=ue.min.y,Mt=ue.isBox3?ue.min.z:0;else{const Wt=Math.pow(2,-se);Ye=Math.floor(jt.width*Wt),be=Math.floor(jt.height*Wt),A.isDataArrayTexture?nt=jt.depth:A.isData3DTexture?nt=Math.floor(jt.depth*Wt):nt=1,ot=0,St=0,Mt=0}ae!==null?(st=ae.x,Nt=ae.y,Vt=ae.z):(st=0,Nt=0,Vt=0);const Ot=Oe.convert(K.format),rn=Oe.convert(K.type);let We;K.isData3DTexture?(de.setTexture3D(K,0),We=D.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(de.setTexture2DArray(K,0),We=D.TEXTURE_2D_ARRAY):(de.setTexture2D(K,0),We=D.TEXTURE_2D),E.activeTexture(D.TEXTURE0),E.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,K.flipY),E.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),E.pixelStorei(D.UNPACK_ALIGNMENT,K.unpackAlignment);const vn=E.getParameter(D.UNPACK_ROW_LENGTH),wt=E.getParameter(D.UNPACK_IMAGE_HEIGHT),Un=E.getParameter(D.UNPACK_SKIP_PIXELS),Fn=E.getParameter(D.UNPACK_SKIP_ROWS),At=E.getParameter(D.UNPACK_SKIP_IMAGES);E.pixelStorei(D.UNPACK_ROW_LENGTH,jt.width),E.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt.height),E.pixelStorei(D.UNPACK_SKIP_PIXELS,ot),E.pixelStorei(D.UNPACK_SKIP_ROWS,St),E.pixelStorei(D.UNPACK_SKIP_IMAGES,Mt);const Bi=A.isDataArrayTexture||A.isData3DTexture,Ft=K.isDataArrayTexture||K.isData3DTexture;if(A.isDepthTexture){const Wt=re.get(A),ci=re.get(K),kt=re.get(Wt.__renderTarget),ui=re.get(ci.__renderTarget);E.bindFramebuffer(D.READ_FRAMEBUFFER,kt.__webglFramebuffer),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Mi=0;Mi<nt;Mi++)Bi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,re.get(A).__webglTexture,se,Mt+Mi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,re.get(K).__webglTexture,Le,Vt+Mi)),D.blitFramebuffer(ot,St,Ye,be,st,Nt,Ye,be,D.DEPTH_BUFFER_BIT,D.NEAREST);E.bindFramebuffer(D.READ_FRAMEBUFFER,null),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(se!==0||A.isRenderTargetTexture||re.has(A)){const Wt=re.get(A),ci=re.get(K);E.bindFramebuffer(D.READ_FRAMEBUFFER,te),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,W);for(let kt=0;kt<nt;kt++)Bi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Wt.__webglTexture,se,Mt+kt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Wt.__webglTexture,se),Ft?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ci.__webglTexture,Le,Vt+kt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ci.__webglTexture,Le),se!==0?D.blitFramebuffer(ot,St,Ye,be,st,Nt,Ye,be,D.COLOR_BUFFER_BIT,D.NEAREST):Ft?D.copyTexSubImage3D(We,Le,st,Nt,Vt+kt,ot,St,Ye,be):D.copyTexSubImage2D(We,Le,st,Nt,ot,St,Ye,be);E.bindFramebuffer(D.READ_FRAMEBUFFER,null),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ft?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(We,Le,st,Nt,Vt,Ye,be,nt,Ot,rn,jt.data):K.isCompressedArrayTexture?D.compressedTexSubImage3D(We,Le,st,Nt,Vt,Ye,be,nt,Ot,jt.data):D.texSubImage3D(We,Le,st,Nt,Vt,Ye,be,nt,Ot,rn,jt):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Le,st,Nt,Ye,be,Ot,rn,jt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Le,st,Nt,jt.width,jt.height,Ot,jt.data):D.texSubImage2D(D.TEXTURE_2D,Le,st,Nt,Ye,be,Ot,rn,jt);E.pixelStorei(D.UNPACK_ROW_LENGTH,vn),E.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wt),E.pixelStorei(D.UNPACK_SKIP_PIXELS,Un),E.pixelStorei(D.UNPACK_SKIP_ROWS,Fn),E.pixelStorei(D.UNPACK_SKIP_IMAGES,At),Le===0&&K.generateMipmaps&&D.generateMipmap(We),E.unbindTexture()},this.initRenderTarget=function(A){re.get(A).__webglFramebuffer===void 0&&de.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?de.setTextureCube(A,0):A.isData3DTexture?de.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?de.setTexture2DArray(A,0):de.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){ie=0,$=0,Y=null,E.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}const tw={pose:{id:"pose",label:"Pose",icon:"path",suggestMode:"icons",suggestToolIds:["track","facet","measure"],blurb:"Reposition selection along a guided path."},sweep:{id:"sweep",label:"Sweep",icon:"thicken",suggestMode:"icons",suggestToolIds:["pose","pull-full","box"],blurb:"Thicken or sweep surfaces from the active face."},facet:{id:"facet",label:"Facet",icon:"up",suggestMode:"prompt-select",promptOptions:["Check simulation","Track simulation","Lock selection"],blurb:"Lift faces off the reference plane."},track:{id:"track",label:"Track",icon:"box",suggestMode:"prompt-select",promptOptions:["Check simulation","Retract simulation","Compare results"],blurb:"Track simulation status for the active body."},measure:{id:"measure",label:"Measure",icon:"pull",suggestMode:"icons",suggestToolIds:["pose","facet","track"],blurb:"Measure distance and clearance."},"pull-full":{id:"pull-full",label:"Full Pull",icon:"pull",suggestMode:"prompt-select",promptOptions:["Check simulation","Retract simulation","Lock selection"],blurb:"Full pull along the face normal."},box:{id:"box",label:"Bound",icon:"box",suggestMode:"icons",suggestToolIds:["pose","sweep","facet"],blurb:"Bound selection to a target face."},pull:{id:"pull",label:"PULL",icon:"plane",suggestMode:"prompt-select",promptOptions:["Check simulation","Retract simulation","Lock selection"],blurb:"Pull faces and thicken geometry along a direction."},automatic:{id:"automatic",label:"Automatic",icon:"path",suggestMode:"icons",suggestToolIds:["pose","sweep","facet"],blurb:"Automatic sizing for the active tool."},structural:{id:"structural",label:"Structural",icon:"plane",suggestMode:"icons",suggestToolIds:["pose","sweep","facet"],blurb:"Structural physics setup on the Simulation ribbon."},fluid:{id:"fluid",label:"Fluid",icon:"path",suggestMode:"icons",suggestToolIds:["pose","track","measure"],blurb:"Fluid flow boundary conditions and results."}};Object.fromEntries(Object.values(tw).map(r=>{var e;return[r.id,{title:r.label,blurb:r.blurb??r.label,suggestion:(e=r.promptOptions)!=null&&e[0]?`You might want to ${r.promptOptions[0].toLowerCase()}`:void 0}]}));xt.createContext(null);const nw=[{id:"ccd0",sx:.42,sz:.28,px:-.42,pz:-.38,power:1,isSource:!0,base:[.78,.55,.28],kind:"ceramic"},{id:"ccd1",sx:.38,sz:.26,px:-.38,pz:.42,power:.92,isSource:!0,base:[.62,.48,.32],kind:"ceramic"},{id:"iod",sx:.34,sz:.48,px:.48,pz:.05,power:0,isSource:!1,base:[.18,.42,.78],kind:"blue"},{id:"ecd",sx:.18,sz:.52,px:.08,pz:.02,power:0,isSource:!1,base:[.9,.88,.78],kind:"smd"},{id:"cache",sx:.14,sz:.58,px:-.05,pz:.02,power:0,isSource:!1,base:[.42,.45,.48],kind:"smd"},{id:"npu",sx:.28,sz:.22,px:.42,pz:.55,power:.78,isSource:!0,base:[.12,.14,.18],kind:"chip"}];nw.filter(r=>r.isSource).map(r=>({x:r.px,z:r.pz,power:r.power}));const iw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABB5JREFUeAHtm9tR20AUhv8VTF5DCU4HUAGkAnhNSCamgkAFQAUJFWAmyeTVVIBSQdwB6iA0YG3OkWVGMbrsnr0ontlvxgPWbeXf/9mzZ1cGEolEIpFIJBKJFhRGQP/EBEs84uXdFIMnK1yo95gjErsYgxKXrds1CddPoU7jicNkiEzlHo0pJGjcITLRBep0jwm7mCEy8QXSOIKMe/XOoI/yTFSB9I8qtCaQkMV3z6rZmGh8howiZuZqEk0g/a0KrX1IULjGSMRzUIZPkPFE5+YYiSgCOaV2hfkYnfOaOA5ySe3ZeOG1aj4G8tSej+keJrhATqldxR85v7yFwOjvVVE6gT2F+oA3GJmgDqpT+wQS1Lh9z5qwISZP7RgztTcJJpBjap+N3TmvCeegLU7tTcIJtMWpvUkQgbY9tTcJkua3PbU38e6g2Klda72HgPgPsYhVO4nzhV5/lsvlOQLhNcQ6l3PM7mRGKxZnpoezc1ic+m2eZdlbBMCvg+Km9pPG/0ck1gQB8CaQvsVe5An54+absiynCIA/B72qvtEJJGh8tTp8FV5NB0EpdYgA+BNIi8OrUB+t666Tlm1BwsyLQCNU7cdtG0OEmR8HZQ7LOad2613sks3wWhMizJwFqqv2E0hQoimNo759JF7ffmvcHRQxtdfuuRw4Rn4/LTgJVLmnFLvHes6HR84Y7uuOfIrk5qCS7K4gq4VKu6q9Fsfoy6Bjr3yJ5FRqOFTtC6raD0wOrMPqFrAfhFKnzeOrG/pbQIjYQZTa5QNDhZuhQ7izrYvR3xCIU1/jnF4P7CbpGEnsIHLPA2Q33jnnU2egQ/o7hVT8fhZ07TsqbOemrhIJ5FS1a1zTyPnq+W14UbowEksWYp4eo6tDiEPgCnHFYfZJGG7/sW8+yVogn8s5dHOy54U8Qy7qzMT2DirFUxrMP50zfYNnJNIF/bvAOOR1+52zCdZ9kENqz6lz7pz14yxDxeYJicZTtiGdxaLck2tm1NbT0MFWAlXLORq3kKBwZlqYNsTiIngCd6xEaWInUIDUPtgmZbd6VDyBPQsS5IJeOYQY90FV5ywcsLk8qUEfjr91Dk2rfopTOJ/nIg5j3km7Ve05HOBxSi1SYXjKfGdnZ2obTq1tmxwUczmn9z5WddnQfbCYBz7EYcwc5JLaS39r7ewkEqg3XKlzv/YlTtWmyUExqnZTNhYMNykoU3ld2x90kOOTGoNVu/UlV+7I2/aRcDk8MxxiWrzWbj0hbwqPadq2k3u8hfPzNft2OqX2LNyPT3jA17K5cE3prW317nVJ7QHC6/nSLWEWIryYToH+94cwN8MsRHhV1+3c45LaIzyEuRFmQcKL6f/Vs974oFn1BMfr3nMUfsV4CJPDjMY8OVbLPDkSL+lbhk4kEolEIvEXpqDWzMyLCmUAAAAASUVORK5CYII=",rw=iw;function sw({size:r=16,className:e}){return P.jsx("img",{src:rw,alt:"","aria-hidden":!0,draggable:!1,width:r,height:r,className:e,style:{display:"block",width:r,height:r,objectFit:"contain"}})}const aw="/prototypes/phase3/assets/image-DozNkmXY.png",to="'Source Sans 3', sans-serif";function ow({project:r="2U_chassis_v1",study:e="Simulation 3"}={}){return P.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,height:32,background:"#0d0d0d",display:"flex",alignItems:"center",zIndex:10,borderBottom:"1px solid #1e1e1e"},children:[P.jsx("div",{style:{width:40,height:32,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:"#000",borderRight:"1px solid #1a1a1a"},children:P.jsx("img",{src:aw,alt:"Ansys Discovery",style:{width:36,height:36,objectFit:"cover",objectPosition:"center",flexShrink:0}})}),P.jsx("div",{style:{width:1,height:14,background:"#2a2a2a",margin:"0 8px"}}),P.jsx("span",{style:{fontFamily:to,fontSize:12,color:"#7a7a7a",marginRight:4},children:"Ansys"}),P.jsx("span",{style:{fontFamily:to,fontSize:12,color:"#c0c0c0",fontWeight:600,marginRight:12},children:"Discovery"}),P.jsx("div",{style:{width:1,height:14,background:"#2a2a2a",marginRight:12}}),P.jsx("span",{style:{fontFamily:to,fontSize:12,color:"#686868"},children:r}),P.jsx("span",{style:{fontFamily:to,fontSize:14,color:"#404040",margin:"0 5px"},children:"›"}),P.jsx("span",{style:{fontFamily:to,fontSize:12,color:"#a8a8a8"},children:e}),P.jsx("div",{style:{flex:1}}),P.jsx("div",{style:{width:28,height:32,display:"flex",alignItems:"center",justifyContent:"center"},children:P.jsx("svg",{width:"14",height:"10",viewBox:"0 0 16 11",fill:"none",children:P.jsx("path",{d:"M13 4.1a3 3 0 0 0-5.65-1.45A2 2 0 1 0 3 6h10a2.5 2.5 0 0 0 0-5 2.4 2.4 0 0 0-.37.03",stroke:"#606060",strokeWidth:"1.2",fill:"none",strokeLinecap:"round"})})}),P.jsx("div",{style:{width:1,height:14,background:"#2a2a2a"}}),[{s:"─",w:34},{s:"☐",w:34},{s:"✕",w:34}].map((t,s)=>P.jsx("div",{style:{width:t.w,height:32,display:"flex",alignItems:"center",justifyContent:"center",color:"#888",fontSize:s===2?10:11,cursor:"pointer",fontFamily:"sans-serif"},children:t.s},s))]})}const lw=[{id:"base",label:"Base plate",detail:"Al 6061-T6"},{id:"mounts",label:"Mounting ears",detail:"4 × Ø6.5 mm"},{id:"contact",label:"Contact block",detail:"400 W interface"},{id:"fins",label:"Ribbed fin array",detail:"Organic branches"},{id:"brace",label:"Lateral braces",detail:"Load transfer"}],Z0=[{id:"v1",name:"Balanced lattice",description:"Best overall stiffness-to-mass balance.",bestMetric:"displacement",parameters:[{label:"Material",value:"Al 6061-T6"},{label:"Plate thickness",value:"8.4 mm"},{label:"Fin spacing",value:"11.8 mm"},{label:"Root radius",value:"R6.0 mm"},{label:"Brace spread",value:"84 mm"}],geometry:{finCount:7,finHeight:2.2,braceSpread:1,plateThickness:.28},field:{intensity:.78,hotspotX:-1.65,hotspotZ:-.65,deformation:.18},metrics:{maxStress:118,displacement:.31,mass:1.84,safetyFactor:2.34}},{id:"v2",name:"Low stress",description:"Reinforced roots reduce peak stress.",bestMetric:"stress",parameters:[{label:"Material",value:"Al 7075-T6"},{label:"Plate thickness",value:"10.2 mm"},{label:"Fin spacing",value:"10.4 mm"},{label:"Root radius",value:"R8.5 mm"},{label:"Brace spread",value:"96 mm"}],geometry:{finCount:8,finHeight:2.05,braceSpread:1.18,plateThickness:.34},field:{intensity:.6,hotspotX:-1.45,hotspotZ:-.55,deformation:.12},metrics:{maxStress:91,displacement:.22,mass:2.08,safetyFactor:3.04}},{id:"v3",name:"Lightweight",description:"Lower mass with a taller fin field.",bestMetric:"mass",parameters:[{label:"Material",value:"AlSi10Mg"},{label:"Plate thickness",value:"6.9 mm"},{label:"Fin spacing",value:"14.2 mm"},{label:"Fin height",value:"72 mm"},{label:"Root radius",value:"R5.0 mm"}],geometry:{finCount:6,finHeight:2.55,braceSpread:.9,plateThickness:.23},field:{intensity:.91,hotspotX:-1.78,hotspotZ:-.72,deformation:.26},metrics:{maxStress:142,displacement:.46,mass:1.52,safetyFactor:1.94}},{id:"v4",name:"Compact",description:"Reduced envelope with a retained safety margin.",bestMetric:"safetyFactor",parameters:[{label:"Material",value:"Al 6082-T6"},{label:"Plate thickness",value:"9.0 mm"},{label:"Fin spacing",value:"9.6 mm"},{label:"Root radius",value:"R7.0 mm"},{label:"Overall height",value:"58 mm"}],geometry:{finCount:9,finHeight:1.7,braceSpread:.82,plateThickness:.3},field:{intensity:.72,hotspotX:-1.52,hotspotZ:-.48,deformation:.16},metrics:{maxStress:109,displacement:.28,mass:1.76,safetyFactor:2.53}}],Gt=(r,e=2)=>Number(r.toFixed(e));function cw(r){const e=t=>Gt(Math.max(Qs+.08,t));return[{id:`local-${r.id}-plate`,name:"Tapered base plate",description:`A local thickness sweep trims the plate while preserving the ${r.name} interfaces.`,bestMetric:"mass",parameters:[{label:"Plate thickness",value:"7.7 mm"},{label:"Taper angle",value:"2.5°"},{label:"Brace spread",value:"86 mm"}],geometry:{...r.geometry,braceSpread:Gt(r.geometry.braceSpread*1.02),plateThickness:Gt(r.geometry.plateThickness*.92)},field:{...r.field,intensity:Gt(r.field.intensity*.98),deformation:Gt(r.field.deformation*1.02)},metrics:{maxStress:Math.round(r.metrics.maxStress*.98),displacement:Gt(r.metrics.displacement*1.02),mass:Gt(r.metrics.mass*.93),safetyFactor:e(r.metrics.safetyFactor*1.01)}},{id:`local-${r.id}-joint`,name:"Relieved fin roots",description:"Softer root transitions reduce the local peak without moving the fixed contact region.",bestMetric:"stress",parameters:[{label:"Root radius",value:"R8.5 mm"},{label:"Brace angle",value:"34°"},{label:"Fin height",value:"60 mm"}],geometry:{...r.geometry,finHeight:Gt(r.geometry.finHeight*.97),braceSpread:Gt(r.geometry.braceSpread*1.07)},field:{...r.field,intensity:Gt(r.field.intensity*.88),deformation:Gt(r.field.deformation*.94)},metrics:{maxStress:Math.round(r.metrics.maxStress*.89),displacement:Gt(r.metrics.displacement*.94),mass:Gt(r.metrics.mass*1.01),safetyFactor:e(r.metrics.safetyFactor*1.1)}},{id:`local-${r.id}-mount`,name:"Locked-interface support",description:"Mount-joint support is redistributed inside the original installation envelope.",bestMetric:"displacement",parameters:[{label:"Support offset",value:"18 mm"},{label:"Brace spread",value:"91 mm"},{label:"Fin count",value:`${r.geometry.finCount+1}`}],geometry:{...r.geometry,finCount:r.geometry.finCount+1,braceSpread:Gt(r.geometry.braceSpread*1.04),plateThickness:Gt(r.geometry.plateThickness*1.01)},field:{...r.field,intensity:Gt(r.field.intensity*.95),deformation:Gt(r.field.deformation*.86)},metrics:{maxStress:Math.round(r.metrics.maxStress*.95),displacement:Gt(r.metrics.displacement*.87),mass:Gt(r.metrics.mass*1.02),safetyFactor:e(r.metrics.safetyFactor*1.05)}},{id:`local-${r.id}-knee`,name:"Local Pareto knee",description:"The most even local trade-off after interface and hard-constraint screening.",bestMetric:"safetyFactor",parameters:[{label:"Plate thickness",value:"8.1 mm"},{label:"Root radius",value:"R7.5 mm"},{label:"Fin spacing",value:"11.2 mm"}],geometry:{...r.geometry,finHeight:Gt(r.geometry.finHeight*1.02),braceSpread:Gt(r.geometry.braceSpread*1.03),plateThickness:Gt(r.geometry.plateThickness*.97)},field:{...r.field,intensity:Gt(r.field.intensity*.93),deformation:Gt(r.field.deformation*.92)},metrics:{maxStress:Math.round(r.metrics.maxStress*.93),displacement:Gt(r.metrics.displacement*.92),mass:Gt(r.metrics.mass*.97),safetyFactor:e(r.metrics.safetyFactor*1.08)}}]}const K0=["Generate constrained geometry","Apply mounting constraints","Apply 400 W contact load","Evaluate structural response","Rank candidate designs"],Qs=2,$g="Redesign this heatsink bracket for a 400 W thermal load in a 20% smaller envelope while keeping safety factor above 2.0.";function uw({activeIndex:r,progress:e,actions:t=K0,runningLabel:s="Generating design candidates",completeLabel:a="Generated 4 candidates"}){const l=e>=1,[c,f]=xt.useState(!l);return xt.useEffect(()=>{f(!l)},[l]),P.jsxs("section",{className:`phase3-action-block${l?" is-complete":""}${c?" is-expanded":" is-collapsed"}`,"aria-label":"Simulation progress",children:[P.jsxs("button",{type:"button",className:"phase3-action-head",onClick:()=>l&&f(h=>!h),disabled:!l,"aria-expanded":c,children:[P.jsx("span",{children:l?a:s}),l?P.jsx("span",{className:"phase3-compact-chevron","aria-hidden":"true",children:"⌄"}):P.jsxs("span",{children:[Math.round(e*100),"%"]})]}),c?P.jsxs(P.Fragment,{children:[P.jsx("div",{className:"phase3-progress-track",children:P.jsx("span",{style:{transform:`scaleX(${e})`}})}),P.jsx("ol",{children:t.map((h,p)=>{const v=p<r?"done":p===r?"active":"pending";return P.jsxs("li",{className:`is-${v}`,children:[P.jsx("span",{className:"phase3-step-status","aria-hidden":"true"}),P.jsx("span",{children:h}),P.jsx("small",{children:v==="done"?"Complete":v==="active"?"Running":"Queued"})]},h)})})]}):null]})}const fw=86;function dw({kind:r}){return r==="base"?P.jsxs("svg",{viewBox:"0 0 112 52","aria-hidden":"true",children:[P.jsx("rect",{className:"is-frame",x:"7",y:"7",width:"98",height:"38",rx:"5"}),P.jsx("rect",{className:"is-surface",x:"14",y:"14",width:"84",height:"24",rx:"4"}),P.jsx("circle",{className:"is-cutout",cx:"26",cy:"26",r:"5"}),P.jsx("circle",{className:"is-cutout",cx:"86",cy:"26",r:"5"}),P.jsxs("g",{className:"is-moving",children:[P.jsx("rect",{className:"is-highlight",x:"38",y:"19",width:"36",height:"14",rx:"3"}),P.jsx("rect",{className:"is-muted",x:"43",y:"22",width:"26",height:"8",rx:"2"})]})]}):r==="fin"?P.jsxs("svg",{viewBox:"0 0 112 52","aria-hidden":"true",children:[P.jsx("rect",{className:"is-frame",x:"7",y:"7",width:"98",height:"38",rx:"5"}),P.jsx("rect",{className:"is-surface",x:"15",y:"35",width:"82",height:"7",rx:"2"}),P.jsx("rect",{className:"is-muted",x:"38",y:"22",width:"36",height:"14",rx:"3"}),P.jsxs("g",{className:"is-moving",children:[P.jsx("rect",{className:"is-highlight",x:"40",y:"10",width:"7",height:"25",rx:"2"}),P.jsx("rect",{className:"is-highlight",x:"51",y:"7",width:"7",height:"28",rx:"2"}),P.jsx("rect",{className:"is-highlight",x:"62",y:"9",width:"7",height:"26",rx:"2"})]}),P.jsx("path",{className:"is-structural",d:"M27 35 43 22l6 4-11 9ZM85 35 69 22l-6 4 11 9Z"})]}):P.jsxs("svg",{viewBox:"0 0 112 52","aria-hidden":"true",children:[P.jsx("rect",{className:"is-frame",x:"7",y:"7",width:"98",height:"38",rx:"5"}),P.jsx("rect",{className:"is-surface",x:"15",y:"35",width:"82",height:"7",rx:"2"}),P.jsx("rect",{className:"is-muted",x:"24",y:"14",width:"25",height:"22",rx:"5"}),P.jsx("rect",{className:"is-muted",x:"63",y:"14",width:"25",height:"22",rx:"5"}),P.jsx("circle",{className:"is-cutout",cx:"36.5",cy:"25",r:"5"}),P.jsx("circle",{className:"is-cutout",cx:"75.5",cy:"25",r:"5"}),P.jsxs("g",{className:"is-moving",children:[P.jsx("rect",{className:"is-highlight",x:"48",y:"20",width:"16",height:"11",rx:"3"}),P.jsx("path",{className:"is-structural",d:"m48 21-11 14h8l10-12ZM64 21l11 14h-8L57 23Z"})]})]})}function Of({kind:r,label:e,detail:t,state:s}){return P.jsxs("figure",{className:`phase3-region-preview is-${s}`,children:[P.jsx("div",{className:"phase3-region-drawing",children:P.jsx(dw,{kind:r})}),P.jsxs("figcaption",{children:[P.jsx("strong",{children:e}),P.jsx("small",{children:t})]})]})}function kf(r,e,t){return r>=t?"done":r>=e?"active":"pending"}function hw({progress:r,baselineName:e}){const t=r>=1,s=Math.round(500*Math.min(1,r/.2)),a=r<.62?null:Math.round(500-262*Math.min(1,(r-.62)/.12)),l=r<.74?null:Math.round(238-152*Math.min(1,(r-.74)/.16)),c=r<.9?null:Math.max(1,Math.round(4*Math.min(1,(r-.9)/.1))),f=[{at:0,label:"Generate local geometry neighborhood",count:`${s} generated`},{at:.18,label:"Sample base-plate thickness and support spread",count:r<.18?"Queued":"168 sampled"},{at:.36,label:"Tune fin roots and brace-joint transitions",count:r<.36?"Queued":"124 sampled"},{at:.58,label:"Preserve mounting and contact interfaces",count:a===null?"Queued":`${a} passed`},{at:.73,label:`Screen hard constraints · Safety Factor ≥ ${Qs.toFixed(1)}`,count:l===null?"Queued":`${l} passed`},{at:.89,label:"Rank the feasible trade-off frontier",count:c===null?"Queued":`${c} retained`}];return t?P.jsxs("section",{className:"phase3-continued-analysis is-complete","aria-label":"Continued exploration complete",children:["≈500 explored · ",fw," passed constraints · 4 retained"]}):P.jsxs("section",{className:"phase3-continued-analysis","aria-label":"Continued exploration analysis",children:[P.jsxs("header",{children:[P.jsxs("span",{children:["Exploring the neighborhood around ",e]}),P.jsxs("strong",{children:[Math.round(r*100),"%"]})]}),P.jsx("div",{className:"phase3-continued-track","aria-hidden":"true",children:P.jsx("span",{style:{transform:`scaleX(${r})`}})}),P.jsxs("div",{className:"phase3-region-previews","aria-label":"Regions being modified",children:[P.jsx(Of,{kind:"base",label:"Base plate",detail:"Thickness + spread",state:kf(r,.16,.4)}),P.jsx(Of,{kind:"fin",label:"Fin root",detail:"Transition relief",state:kf(r,.34,.58)}),P.jsx(Of,{kind:"mount",label:"Mount joint",detail:"Interface locked",state:kf(r,.52,.72)})]}),P.jsx("ol",{children:f.map((h,p)=>{var g;const v=((g=f[p+1])==null?void 0:g.at)??1,_=r>=v?"done":r>=h.at?"active":"pending";return P.jsxs("li",{className:`is-${_}`,children:[P.jsx("span",{"aria-hidden":"true"}),P.jsx("p",{children:h.label}),P.jsx("small",{children:h.count})]},h.label)})}),P.jsx("p",{className:"phase3-analysis-disclaimer",children:"Illustrative deterministic screening preview; not 500 validated FEA solves."})]})}function pw(){return P.jsxs("span",{className:"phase3-best-metric",role:"img","aria-label":"Best in this iteration batch",title:"Best in this iteration batch",children:[P.jsx("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:P.jsx("path",{d:"m8 2.1 1.7 3.4 3.8.6-2.8 2.7.7 3.8L8 10.8l-3.4 1.8.7-3.8-2.8-2.7 3.8-.6L8 2.1Z"})}),P.jsx("span",{"aria-hidden":"true",children:"Best"})]})}function J0({kind:r,direction:e}){return r==="pass"?P.jsx("svg",{viewBox:"0 0 12 12","aria-hidden":"true",children:P.jsx("path",{d:"m2 6.3 2.5 2.4L10 3.4"})}):r==="fail"?P.jsx("svg",{viewBox:"0 0 12 12","aria-hidden":"true",children:P.jsx("path",{d:"m3 3 6 6M9 3 3 9"})}):P.jsx("svg",{className:e==="down"?"is-down":"",viewBox:"0 0 12 12","aria-hidden":"true",children:P.jsx("path",{d:"M6 10V2M2.8 5.2 6 2l3.2 3.2"})})}function Zg({value:r,baseline:e,lowerIsBetter:t}){const s=(r-e)/e*100;if(Math.abs(s)<1)return P.jsx("span",{className:"phase3-metric-status is-delta is-neutral",children:"—"});const a=t?s<0:s>0;return P.jsxs("span",{className:`phase3-metric-status is-delta ${a?"is-good":"is-bad"}`,children:[P.jsx(J0,{kind:a?"good":"bad",direction:s<0?"down":"up"}),Math.abs(s).toFixed(0),"%"]})}function mw({variant:r,selected:e,adopted:t,expanded:s,baseline:a,onSelect:l,onExpand:c,onAdopt:f}){const h=r.metrics.safetyFactor>=Qs,p=a?(r.metrics.safetyFactor-a.metrics.safetyFactor)/a.metrics.safetyFactor*100:null,v=(g,y)=>y!==null?P.jsx(Zg,{value:g,baseline:y,lowerIsBetter:!0}):null,_=(g,y,M,R=null,S=null)=>{const O=r.bestMetric===g&&!(g==="safetyFactor"&&h);return P.jsxs("span",{className:O?"is-best-metric":void 0,children:[P.jsxs("span",{className:"phase3-metric-head",children:[P.jsx("small",{children:y}),R]}),P.jsxs("span",{className:"phase3-metric-value-row",children:[P.jsx("strong",{children:M}),S]}),O?P.jsx(pw,{}):null]})};return P.jsxs("article",{className:["phase3-variant",e?"is-selected":"",t?"is-adopted":"",s?"is-expanded":"is-collapsed",e&&s?"has-actions":""].filter(Boolean).join(" "),children:[P.jsxs("button",{type:"button",className:"phase3-variant-select",onClick:s?l:c,"aria-pressed":e,"aria-expanded":s,"aria-label":`Preview ${r.name}`,children:[P.jsx("span",{className:"phase3-variant-radio","aria-hidden":"true"}),P.jsxs("span",{className:"phase3-variant-content",children:[P.jsxs("span",{className:"phase3-variant-title",children:[P.jsx("strong",{children:r.name}),P.jsx("small",{children:r.description})]}),s?P.jsxs(P.Fragment,{children:[P.jsx("span",{className:"phase3-variant-parameters",children:P.jsx("span",{className:"phase3-parameter-values",children:r.parameters.map(g=>P.jsxs("span",{children:[P.jsx("small",{children:g.label}),P.jsx("strong",{children:g.value})]},g.label))})}),P.jsxs("span",{className:"phase3-variant-metrics",children:[_("stress","Stress",`${r.metrics.maxStress} MPa`,null,v(r.metrics.maxStress,(a==null?void 0:a.metrics.maxStress)??null)),_("displacement","Displacement",`${r.metrics.displacement.toFixed(2)} mm`,null,v(r.metrics.displacement,(a==null?void 0:a.metrics.displacement)??null)),_("mass","Mass",`${r.metrics.mass.toFixed(2)} kg`,null,v(r.metrics.mass,(a==null?void 0:a.metrics.mass)??null)),_("safetyFactor","Safety factor",r.metrics.safetyFactor.toFixed(2),P.jsxs("span",{className:`phase3-metric-status ${h?"is-good":"is-bad"}`,role:"img","aria-label":h?"Passes safety factor criterion":`Below ${Qs.toFixed(1)}`,title:h?"Passes safety factor criterion":`Below ${Qs.toFixed(1)}`,children:[h?null:`< ${Qs.toFixed(1)}`,P.jsx(J0,{kind:h?"pass":"fail"})]}),p!==null?P.jsx(Zg,{value:r.metrics.safetyFactor,baseline:a.metrics.safetyFactor,lowerIsBetter:!1}):null)]})]}):null]}),s?null:P.jsx("span",{className:"phase3-variant-disclosure","aria-hidden":"true"})]}),e&&s?P.jsx("span",{className:"phase3-variant-actions",children:P.jsx("button",{type:"button",className:"phase3-use-button",onClick:f,disabled:t,children:t?"Design adopted":"Use this design"})}):null]})}function gw({steps:r,activeIndex:e,complete:t}){const[s,a]=xt.useState(!t);return xt.useEffect(()=>{a(!t)},[t]),P.jsxs("section",{className:`phase3-thinking${t?" is-complete":""}${s?" is-expanded":" is-collapsed"}`,children:[P.jsxs("button",{type:"button",className:"phase3-compact-process-head",onClick:()=>t&&a(l=>!l),disabled:!t,"aria-expanded":s,children:[t?P.jsx("span",{className:"phase3-thinking-check","aria-hidden":"true",children:"✓"}):P.jsx("span",{className:"phase3-spinner","aria-hidden":"true"}),P.jsx("span",{children:t?`Checked ${r.length} model constraints`:"Thinking"}),t?P.jsx("span",{className:"phase3-compact-chevron","aria-hidden":"true",children:"⌄"}):null]}),s?P.jsx("ol",{children:r.map((l,c)=>{const f=t||c<=e?"is-done":c===e+1?"is-active":"";return P.jsxs("li",{className:f,children:[P.jsx("span",{"aria-hidden":"true"}),l]},l)})}):null]})}function vw(){return typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function _w(r,{active:e=!0,wordsPerTick:t=2,intervalMs:s=34,startDelay:a=0,onDone:l}={}){const c=xt.useMemo(vw,[]),f=xt.useMemo(()=>r.match(/\S+\s*/g)??[],[r]),[h,p]=xt.useState(c?f.length:0),v=xt.useRef(!1);xt.useEffect(()=>{p(c?f.length:0),v.current=!1},[r,c,f.length]),xt.useEffect(()=>{if(c||!e||h>=f.length)return;const g=h===0?a:s,y=window.setTimeout(()=>{p(M=>Math.min(f.length,M+t))},Math.max(0,g));return()=>window.clearTimeout(y)},[e,c,h,f.length,t,s,a]);const _=h>=f.length;return xt.useEffect(()=>{!_||v.current||(v.current=!0,l==null||l())},[_,l]),{display:f.slice(0,h).join(""),done:_,isTyping:!c&&e&&!_}}function Kg({text:r,active:e=!0,wordsPerTick:t,intervalMs:s,startDelay:a,onDone:l,as:c="span",className:f}){const{display:h,isTyping:p}=_w(r,{active:e,wordsPerTick:t,intervalMs:s,startDelay:a,onDone:l}),v=c;return P.jsxs(v,{className:f,children:[h,p?P.jsx("span",{className:"phase3-typing-caret","aria-hidden":"true"}):null]})}const Jg=["Reading the active bracket and packaging envelope","Identifying mounting constraints and likely stress concentrations","Forming geometry and evaluation strategy"],Qg=560,xw=62,e0=120,yw="Peak response is concentrated around the mounting ears and fin roots. The current envelope can be reduced by branching the supports while preserving a continuous load path.",t0=["I understand the background: this bracket carries a 400 W thermal assembly through four mounting ears in a tighter envelope. I'll focus first on fin roots and mounting-ear fillets, where peak stress is most likely to concentrate.","I'll trace the load path through the mounting ears, relieve fin-root stress, and vary plate thickness and fin density while keeping the four interfaces fixed. Then I'll generate controlled variations, run a quick structural pass on each, and return the strongest candidates side by side."];function n0(r){return{...r,parameters:r.parameters.map(e=>({...e})),geometry:{...r.geometry},field:{...r.field},metrics:{...r.metrics}}}function Sw(r,e){return r.length===0?"initial":r.some(s=>s.status==="delivered"&&s.candidates.some(a=>a.id===e.id))?"continued-explore":null}function Mw({onReady:r}){const[e,t]=xt.useState(!1),[s,a]=xt.useState(0),l=xt.useRef(!1);xt.useEffect(()=>{e&&a(f=>Math.max(f,1))},[e]);const c=f=>{if(f>=t0.length-1){l.current||(l.current=!0,r());return}a(h=>Math.max(h,f+2))};return P.jsxs(P.Fragment,{children:[P.jsxs("section",{className:"phase3-diagnosis",children:[P.jsx("span",{className:"phase3-thread-label",children:"Diagnosis"}),P.jsx(Kg,{as:"p",text:yw,wordsPerTick:1,intervalMs:42,startDelay:260,onDone:()=>t(!0)})]}),P.jsx("section",{className:"phase3-response",children:t0.slice(0,s).map((f,h)=>P.jsx(Kg,{as:"p",text:f,wordsPerTick:3,intervalMs:28,startDelay:h===0?220:160,onDone:()=>c(h)},h))})]})}function Ew({onModeChange:r,activeVariant:e,onVariantChange:t,onSolveProgress:s,onSolveStart:a}){const[l,c]=xt.useState(""),[f,h]=xt.useState([]),p=xt.useRef(1),v=xt.useRef(null),_=xt.useRef(null),g=xt.useRef(null),y=xt.useRef(!0),M=xt.useRef(0),R=xt.useRef(0),S=xt.useRef(0),x=f.at(-1)??null,O=(x==null?void 0:x.status)??"idle",I=(x==null?void 0:x.thinkingIndex)??-1;x==null||x.runProgress;const C=(x==null?void 0:x.kind)==="initial"?Jg:[],F=O!=="idle"&&O!=="delivered",N=!!((x==null?void 0:x.kind)==="initial"&&x.status==="delivered"&&x.candidates.some(z=>z.id===e.id)&&l.length===0);xt.useLayoutEffect(()=>{const z=g.current;if(!z)return;z.style.height="0px";const te=Math.max(xw,Math.min(z.scrollHeight,e0));z.style.height=`${te}px`,z.style.overflowY=z.scrollHeight>e0?"auto":"hidden"},[l]);const k=(z,te)=>{h(W=>W.map(ie=>ie.id===z?{...ie,...te}:ie))};xt.useEffect(()=>{const z=v.current;if(!z)return;M.current=z.scrollTop;const te=()=>{const W=z.scrollHeight-z.scrollTop-z.clientHeight;z.scrollTop<M.current-1?y.current=!1:W<8&&(y.current=!0),M.current=z.scrollTop};return z.addEventListener("scroll",te,{passive:!0}),()=>z.removeEventListener("scroll",te)},[]),xt.useEffect(()=>{const z=v.current;z&&(f.length!==R.current&&(R.current=f.length,y.current=!0),y.current&&z.scrollTo({top:z.scrollHeight,behavior:"smooth"}))},[f,e.id]),xt.useEffect(()=>{const z=_.current,te=v.current;if(!z||!te)return;const W=new ResizeObserver(()=>{y.current&&te.scrollTo({top:te.scrollHeight})});return W.observe(z),()=>W.disconnect()},[]),xt.useEffect(()=>{if(O!=="thinking"||!x||!x.narrativeReady)return;if(I>=C.length-1){const te=window.setTimeout(()=>k(x.id,{status:"plan"}),Qg);return()=>window.clearTimeout(te)}const z=window.setTimeout(()=>k(x.id,{thinkingIndex:I+1}),Qg);return()=>window.clearTimeout(z)},[x,C.length,O,I]),xt.useEffect(()=>{if(O!=="running"||!x)return;const z=x.id,te=x.kind==="continued-explore"?.008:.018,W=window.setInterval(()=>{const ie=Math.min(1,S.current+te);S.current=ie,k(z,{runProgress:ie}),s(ie),ie>=1&&(window.clearInterval(W),k(z,{status:"delivered",runProgress:1,expandedCandidateIds:x.candidates.map($=>$.id)}))},70);return()=>window.clearInterval(W)},[x,O,s]);const T=z=>{z==null||z.preventDefault();const te=l.trim()||$g;if(F)return;const W=te.toLowerCase();W.includes("displacement")||W.includes("deformation")?r("displacement"):W.includes("safety")?r("safety"):W.includes("stress")&&r("stress");const ie=p.current++,$=Sw(f,e);if(!$)return;const Y=$==="initial"?null:n0(e),ee=Y?cw(Y):Z0.map(n0),le=$==="continued-explore";S.current=0,h(U=>[...U,{id:ie,kind:$,prompt:te,status:le?"running":"thinking",thinkingIndex:-1,runProgress:0,adoptedId:null,expandedCandidateIds:[],baselineVariant:Y,candidates:ee,narrativeReady:le}]),c(""),le&&(a(),s(0))},L=()=>{x&&(S.current=0,a(),s(0),k(x.id,{status:"running",runProgress:0}))},H=(z,te)=>{t(te),k(z,{adoptedId:te.id,expandedCandidateIds:[te.id]})},V=[{label:"Iterate base-plate parameters",prompt:`From ${e.name}, iterate base-plate thickness and support spread while preserving the mounting interfaces.`},{label:"Explore another trade-off",prompt:`From ${e.name}, explore another stiffness–mass trade-off while keeping Safety Factor ≥ 2.0.`},{label:"Reduce mass, keep safety ≥ 2.0",prompt:`From ${e.name}, reduce mass while preserving Safety Factor ≥ 2.0 and the current interface envelope.`}],Z=z=>{c(z),window.requestAnimationFrame(()=>{var te;return(te=g.current)==null?void 0:te.focus()})};return P.jsxs("section",{className:"phase3-chat","aria-label":"Ansys Copilot design workspace",children:[P.jsx("header",{className:"phase3-chat-header",children:P.jsxs("div",{className:"phase3-copilot-identity",children:[P.jsx("span",{className:"phase3-copilot-mark","aria-hidden":"true",children:P.jsx(sw,{size:32})}),P.jsxs("div",{children:[P.jsx("strong",{children:"Copilot"}),P.jsx("span",{children:"Generative structural study"})]})]})}),P.jsx("div",{ref:v,className:"phase3-thread","aria-live":"polite",children:P.jsxs("div",{ref:_,className:"phase3-thread-content",children:[f.length===0?P.jsxs("section",{className:"phase3-starter",children:[P.jsx("span",{className:"phase3-thread-label",children:"Design goal"}),P.jsx("p",{children:$g}),P.jsx("button",{type:"button",onClick:()=>T(),children:"Analyze this goal"})]}):null,f.map(z=>{const te=K0,W=Jg,ie=z.status!=="thinking",$=z.status==="delivered"?te.length:Math.min(te.length-1,Math.floor(z.runProgress*te.length)),Y=z.expandedCandidateIds.length===z.candidates.length,ee=z.baselineVariant,le=z.candidates.find(Te=>Te.id===z.adoptedId)??null,U=!!(z.adoptedId&&Y),Q=Te=>P.jsx(mw,{variant:Te,selected:e.id===Te.id,adopted:z.adoptedId===Te.id,expanded:z.expandedCandidateIds.includes(Te.id),baseline:ee,onSelect:()=>{t(Te)},onExpand:()=>{t(Te),k(z.id,{expandedCandidateIds:[...new Set([...z.expandedCandidateIds,Te.id])]})},onAdopt:()=>H(z.id,Te)},Te.id);return P.jsxs("section",{className:"phase3-round",children:[P.jsx("div",{className:"phase3-message is-user",children:P.jsx("p",{children:z.prompt})}),z.kind==="continued-explore"?P.jsxs("p",{className:"phase3-continued-intro",children:["OK — I’ll analyze this direction now. I’m continuing from"," ",P.jsx("strong",{children:ee==null?void 0:ee.name})," and moving directly into a tighter local exploration."]}):P.jsxs(P.Fragment,{children:[P.jsx(Mw,{onReady:()=>k(z.id,{narrativeReady:!0})}),P.jsx(gw,{steps:W,activeIndex:z.thinkingIndex,complete:ie})]}),z.status==="plan"?P.jsxs("section",{className:"phase3-plan",children:[P.jsx("span",{className:"phase3-thread-label",children:"Plan ready"}),P.jsx("h2",{children:ee?`Iterate further from ${ee.name}`:"Generate and compare four bracket variants"}),P.jsx("ul",{className:"phase3-plan-steps",children:ee?P.jsxs(P.Fragment,{children:[P.jsxs("li",{children:[P.jsx("span",{"aria-hidden":"true"}),"Interpret the requirement and confirm the direction from ",ee.name,"."]}),P.jsxs("li",{children:[P.jsx("span",{"aria-hidden":"true"}),"Explore a simulated preview of ≈500 constrained parameter iterations."]}),P.jsxs("li",{children:[P.jsx("span",{"aria-hidden":"true"}),"Enforce Safety Factor ≥ 2.0 and retain four Design Versions."]})]}):P.jsxs(P.Fragment,{children:[P.jsxs("li",{children:[P.jsx("span",{"aria-hidden":"true"}),"Preserve the four mounting interfaces and contact block."]}),P.jsxs("li",{children:[P.jsx("span",{"aria-hidden":"true"}),"Vary fin density, support spread, and base thickness."]}),P.jsxs("li",{children:[P.jsx("span",{"aria-hidden":"true"}),"Animate a visual structural solve and rank key metrics."]})]})}),P.jsx("p",{className:"phase3-disclaimer",children:"This demonstration uses an illustrative scalar field, not validated FEA results."}),P.jsx("button",{type:"button",className:"phase3-proceed-button",onClick:L,children:"Confirm and proceed"})]}):null,z.status==="running"||z.status==="delivered"?z.kind==="continued-explore"?P.jsx(hw,{progress:z.runProgress,baselineName:(ee==null?void 0:ee.name)??"the selected design"}):P.jsx(uw,{activeIndex:$,progress:z.runProgress,actions:te,runningLabel:ee?`Exploring ≈500 iterations from ${ee.name}`:void 0,completeLabel:ee?`≈500 explored · screened · ${z.candidates.length} retained`:void 0}):null,z.status==="delivered"?P.jsxs(P.Fragment,{children:[z.kind==="continued-explore"?P.jsx("p",{className:"phase3-continued-conclusion",children:"Four feasible directions remain after interface, safety, and trade-off screening."}):null,P.jsxs("section",{className:"phase3-deliverables",children:[P.jsxs("div",{className:"phase3-deliverables-head",children:[P.jsxs("div",{children:[P.jsx("span",{className:"phase3-thread-label",children:"Generative result"}),P.jsx("h2",{children:ee?`${z.candidates.length} iteration finalists delivered`:"Four designs delivered"})]}),P.jsx("div",{className:"phase3-deliverables-actions",children:P.jsx("span",{children:ee?`Run ${String(z.id).padStart(2,"0")} · ≈500 explored · ${z.candidates.length} retained · Baseline: ${ee.name}`:"400 W load case"})})]}),P.jsx("div",{className:"phase3-variant-list",children:le?P.jsxs(P.Fragment,{children:[Q(le),P.jsxs("button",{type:"button",className:"phase3-other-variations","aria-expanded":U,onClick:()=>k(z.id,{expandedCandidateIds:U?[le.id]:z.candidates.map(Te=>Te.id)}),children:[P.jsx("span",{children:"Other design variations"}),P.jsx("small",{children:z.candidates.length-1}),P.jsx("i",{"aria-hidden":"true"})]}),U?P.jsx("div",{className:"phase3-other-variations-list",children:z.candidates.filter(Te=>Te.id!==le.id).map(Q)}):null]}):z.candidates.map(Q)})]})]}):null]},z.id)}),P.jsx("div",{className:"phase3-thread-tail","aria-hidden":"true"})]})}),P.jsxs("form",{className:"phase3-composer",onSubmit:T,children:[N?P.jsx("div",{className:"phase3-iteration-suggestions","aria-label":"Suggested next iterations",children:V.map(z=>P.jsx("button",{type:"button",onClick:()=>Z(z.prompt),children:z.label},z.label))}):null,P.jsxs("div",{className:"phase3-composer-row",children:[P.jsx("textarea",{ref:g,id:"phase3-prompt","aria-label":"Describe a structural design goal",value:l,onChange:z=>c(z.target.value),onKeyDown:z=>{z.key==="Enter"&&!z.shiftKey&&(z.preventDefault(),T())},placeholder:O==="delivered"?"Refine the design or switch result view…":"Describe a structural design goal…",rows:1,disabled:F}),P.jsx("button",{type:"submit","aria-label":"Send prompt",disabled:F,children:P.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:P.jsx("path",{d:"m3 15 12-6L3 3l1.8 5.1L11 9l-6.2.9L3 15Z",fill:"currentColor"})})})]})]})]})}const Tw=[{id:"material",label:"Material",value:"Al 6061-T6",kind:"material"},{id:"support",label:"Fixed support",value:"4 mounting holes",kind:"support"},{id:"thermal",label:"Thermal load",value:"400 W",kind:"thermal"},{id:"force",label:"Remote force",value:"850 N",kind:"force"},{id:"gravity",label:"Gravity",value:"9.81 m/s²",kind:"gravity"},{id:"mesh",label:"Mesh size",value:"2.5 mm",kind:"mesh"}];function i0({open:r}){return P.jsx("span",{className:`phase3-chevron${r?" is-open":""}`,"aria-hidden":"true",children:P.jsx("svg",{width:"16",height:"16",viewBox:"0 0 12 12",children:P.jsx("path",{d:"M3.2 1.8 8.4 6l-5.2 4.2Z",fill:"currentColor"})})})}function ww(){return P.jsx("span",{className:"phase3-part-mark","aria-hidden":"true",children:P.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:[P.jsx("path",{d:"M3 4.5 8 2l5 2.5v7L8 14l-5-2.5Z",fill:"#d8d8d8",stroke:"#777",strokeWidth:".6"}),P.jsx("path",{d:"M3 4.5 8 7l5-2.5M8 7v7",fill:"none",stroke:"#777",strokeWidth:".6"})]})})}function Aw({kind:r}){return P.jsx("span",{className:`phase3-physics-icon is-${r}`,"aria-hidden":"true",children:r==="force"?"↓":r==="thermal"?"T":r==="gravity"?"g":r==="mesh"?"#":r==="support"?"×":"△"})}function Cw({selectedPart:r,onSelectPart:e}){const[t,s]=xt.useState(!0),[a,l]=xt.useState(!0);return P.jsxs("aside",{className:"phase3-model-tree","aria-label":"Model tree",children:[P.jsxs("button",{type:"button",className:"phase3-tree-root",onClick:()=>s(c=>!c),"aria-expanded":t,children:[P.jsx("span",{className:"phase3-tree-status","aria-hidden":"true"}),P.jsx(i0,{open:t}),P.jsx("span",{className:"phase3-tree-root-label",children:"Structure"})]}),t?P.jsx("div",{className:"phase3-tree-list",children:lw.map(c=>P.jsxs("button",{type:"button",className:`phase3-tree-row${r===c.id?" is-selected":""}`,onClick:()=>e(c.id),"aria-pressed":r===c.id,children:[P.jsx("span",{className:"phase3-tree-status","aria-hidden":"true"}),P.jsx("span",{className:"phase3-tree-guide","aria-hidden":"true"}),P.jsx(ww,{}),P.jsxs("span",{className:"phase3-tree-copy",children:[P.jsx("span",{children:c.label}),P.jsx("small",{children:c.detail})]})]},c.id))}):null,P.jsxs("button",{type:"button",className:"phase3-tree-root phase3-tree-root--physics",onClick:()=>l(c=>!c),"aria-expanded":a,children:[P.jsx("span",{className:"phase3-tree-status","aria-hidden":"true"}),P.jsx(i0,{open:a}),P.jsx("span",{className:"phase3-tree-root-label",children:"Physics"})]}),a?P.jsx("div",{className:"phase3-tree-list phase3-tree-list--physics",children:Tw.map(c=>P.jsxs("div",{className:"phase3-tree-row phase3-tree-row--static",children:[P.jsx("span",{className:"phase3-tree-status","aria-hidden":"true"}),P.jsx("span",{className:"phase3-tree-guide","aria-hidden":"true"}),P.jsx(Aw,{kind:c.kind}),P.jsxs("span",{className:"phase3-tree-copy",children:[P.jsx("span",{children:c.label}),P.jsx("small",{children:c.value})]})]},c.id))}):null]})}const Id={stress:{label:"Equivalent stress",unit:"MPa"},displacement:{label:"Total displacement",unit:"mm"},safety:{label:"Safety factor",unit:""}},Rw=["stress","displacement","safety"];function bw({mode:r,onModeChange:e}){return P.jsx("div",{className:"phase3-result-tabs",role:"tablist","aria-label":"Result display mode",children:Rw.map(t=>P.jsx("button",{type:"button",role:"tab","aria-selected":r===t,className:r===t?"is-active":"",onClick:()=>e(t),children:Id[t].label},t))})}function Pw({mode:r,variant:e}){const t=r==="stress"?e.metrics.maxStress:r==="displacement"?e.metrics.displacement:e.metrics.safetyFactor,s=a=>r==="stress"?a.toFixed(0):a.toFixed(2);return P.jsxs("section",{className:"phase3-legend","aria-label":`${Id[r].label} legend`,children:[P.jsx("div",{className:"phase3-legend-title",children:P.jsx("span",{children:Id[r].unit||"Range"})}),P.jsxs("div",{className:"phase3-legend-body",children:[P.jsx("div",{className:"phase3-legend-values",children:[1,.75,.5,.25,0].map(a=>P.jsx("span",{children:s(t*a)},a))}),P.jsx("div",{className:"phase3-legend-scale"})]})]})}const Kl=[[0,new vt("#0649d9")],[.24,new vt("#00c9ff")],[.48,new vt("#20d777")],[.72,new vt("#ffe044")],[1,new vt("#ee332b")]],r0={base:new vt("#b9dce1"),mounts:new vt("#b9cda2"),contact:new vt("#b7a6c9"),fins:new vt("#999b9e"),brace:new vt("#caa3c4")};function Lw(r,e){const t=Pr.clamp(r,0,1);let s=0;for(;s<Kl.length-2&&t>Kl[s+1][0];)s+=1;const[a,l]=Kl[s],[c,f]=Kl[s+1];return e.copy(l).lerp(f,(t-a)/(c-a))}function Nw(r,e,t,s){const a=Math.exp(-((r.x-t.field.hotspotX)**2+(r.z-t.field.hotspotZ)**2)/2.4),l=Math.exp(-(r.y**2)/.72),c=Math.min(1,Math.abs(r.x)/3.2+Math.abs(r.z)/2.7),f=Pr.clamp((a*.62+l*.24+c*.18)*t.field.intensity,0,1),h=Pr.clamp(r.y/Math.max(t.geometry.finHeight,.2)*.68+c*.26,0,1),p=e==="stress"?f:e==="displacement"?h:1-f*.82;return Pr.lerp(.08,p,Math.max(.18,s))}function Dw({variant:r,mode:e,solveProgress:t,showResults:s,selectedPart:a,onSelectPart:l}){const c=xt.useRef(null),f=xt.useRef(t),h=xt.useRef(s),p=xt.useRef(a),v=xt.useRef(l);return f.current=t,h.current=s,p.current=a,v.current=l,xt.useEffect(()=>{const _=c.current;if(!_)return;const g=_.clientWidth||800,y=_.clientHeight||800,M=new ew({antialias:!0,powerPreference:"high-performance"});M.setPixelRatio(Math.min(devicePixelRatio,2)),M.setSize(g,y),M.setClearColor(2171169,1),M.outputColorSpace=Kn,_.appendChild(M.domElement);const R=new Jx;R.background=new vt("#212121"),R.fog=new jd("#212121",14,24);const S=new oi(34,g/y,.1,60);let x=.72,O=.92,I=16.5;const C=new j(.45,1,0),F=()=>{S.position.set(C.x+I*Math.sin(O)*Math.cos(x),C.y+I*Math.cos(O),C.z+I*Math.sin(O)*Math.sin(x)),S.lookAt(C)};F(),R.add(new Jy(13624831,1384490,1.65));const N=new Sg(16777215,2.2);N.position.set(5,9,6),R.add(N);const k=new Sg(5745151,1.1);k.position.set(-5,4,-7),R.add(k);const T=new rS(18,24,4342338,2631720);T.position.y=-.32,T.material.opacity=.32,T.material.transparent=!0,R.add(T);const L=[],H=[],V=[],Z=[],z=[],te=new j,W=new j,ie=new vt,$=new vt,Y=(D,He,et,b=[0,0,0],E=!0)=>{D.computeVertexNormals(),D.normalizeNormals();const J=D.attributes.position.count,re=new Float32Array(J*3),de=r0[He];for(let je=0;je<J;je+=1)re[je*3]=de.r,re[je*3+1]=de.g,re[je*3+2]=de.b;D.setAttribute("color",new Si(re,3));const Ae=new $y({vertexColors:!0,roughness:.58,metalness:.18,flatShading:!1,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,emissive:0,emissiveIntensity:0,side:Pi}),we=new Fi(D,Ae);we.position.set(...et),we.rotation.set(...b),we.userData.partId=He;const he=new uy(D,32),me=new Kd({color:"#343a3d",transparent:!0,opacity:.52,depthWrite:!1}),Ne=new C0(he,me);return Ne.renderOrder=2,we.add(Ne),we.userData.edgeMaterial=me,R.add(we),L.push(D),L.push(he),H.push(Ae),V.push(me),Z.push(we),E&&z.push({mesh:we,original:new Float32Array(D.attributes.position.array)}),we},ee=r.geometry.plateThickness;Y(new Nr(6.3,ee,4.5,18,2,14),"base",[0,-.12,0]);const le=()=>{const D=new I0;D.absarc(0,0,.72,0,Math.PI*2,!1);const He=new Rd;He.absarc(0,0,.3,0,Math.PI*2,!0),D.holes.push(He);const et=new th(D,{depth:ee,bevelEnabled:!1,curveSegments:28,steps:2});return et.center(),et};[[-3.55,-.08,-1.75],[3.55,-.08,-1.75],[-3.55,-.08,1.75],[3.55,-.08,1.75]].forEach(([D,He,et])=>{Y(le(),"mounts",[D,He,et],[Math.PI/2,0,0])}),Y(new Nr(2.05,.52,1.72,10,4,8),"contact",[0,.28,0]);const Q=r.geometry.finCount;for(let D=0;D<Q;D+=1){const He=Q===1?.5:D/(Q-1),et=Pr.lerp(-1.62,1.62,He),b=r.geometry.finHeight*(.82+Math.sin(He*Math.PI)*.18),E=(He-.5)*.18;Y(new Nr(3.9,b,.16,16,16,2),"fins",[0,.55+b/2,et],[0,0,E])}const Te=(D,He,et)=>{const b=2.55*r.geometry.braceSpread;Y(new Jd(.13,.21,b,14,10),"brace",[D,.72,He],[0,0,et])};Te(-2.05,-1.35,-.84),Te(2.05,-1.35,.84),Te(-2.05,1.35,-.84),Te(2.05,1.35,.84);const qe=D=>{R.updateMatrixWorld(!0),z.forEach(({mesh:He,original:et})=>{const b=He.geometry.attributes.position,E=He.geometry.attributes.color,J=He.userData.partId,re=r0[J],de=h.current?D:0,Ae=He.userData.edgeMaterial;Ae.opacity=Pr.lerp(.52,.28,de);for(let we=0;we<b.count;we+=1){te.fromArray(et,we*3),W.copy(te).applyMatrix4(He.matrixWorld);const he=r.field.deformation*de*Math.max(0,W.y+.15)*(.12+Math.abs(W.x)/7);b.setXYZ(we,te.x+he*.18,te.y-he*.06,te.z+he*(W.z>=0?.15:-.15)),Lw(Nw(W,e,r,D),$),ie.copy(re).lerp($,de),E.setXYZ(we,ie.r,ie.g,ie.b)}b.needsUpdate=!0,E.needsUpdate=!0,He.geometry.computeVertexNormals()})},Ge=new iS,ce=new Be;let _e=null,pe=!1,Pe=!1,Ke=0,rt=0;const bt=()=>{Z.forEach(D=>{const He=D.material,et=D.userData.partId;et===p.current?(He.emissive.set("#ffd24a"),He.emissiveIntensity=.7):et===_e?(He.emissive.set("#54b9ff"),He.emissiveIntensity=.38):(He.emissive.set("#000000"),He.emissiveIntensity=0)})},ft=D=>{const He=M.domElement.getBoundingClientRect();ce.set((D.clientX-He.left)/He.width*2-1,-((D.clientY-He.top)/He.height)*2+1),Ge.setFromCamera(ce,S);const et=Ge.intersectObjects(Z,!1)[0];return et?et.object.userData.partId:null},ve=D=>{pe=!0,Pe=!1,Ke=D.clientX,rt=D.clientY,M.domElement.setPointerCapture(D.pointerId)},Se=D=>{if(pe){const He=D.clientX-Ke,et=D.clientY-rt;Math.abs(He)+Math.abs(et)>3&&(Pe=!0),x-=He*.006,O=Pr.clamp(O+et*.006,.24,1.42),Ke=D.clientX,rt=D.clientY,F(),M.domElement.style.cursor="grabbing"}else _e=ft(D),M.domElement.style.cursor=_e?"pointer":"grab"},ye=D=>{pe=!1,M.domElement.releasePointerCapture(D.pointerId),M.domElement.style.cursor="grab"},Ie=D=>{Pe||v.current(ft(D))},Ue=D=>{D.preventDefault(),I=Pr.clamp(I+D.deltaY*.008,10.5,24),F()};M.domElement.addEventListener("pointerdown",ve),M.domElement.addEventListener("pointermove",Se),M.domElement.addEventListener("pointerup",ye),M.domElement.addEventListener("click",Ie),M.domElement.addEventListener("wheel",Ue,{passive:!1});const lt=new ResizeObserver(()=>{const D=_.clientWidth,He=_.clientHeight;!D||!He||(S.aspect=D/He,S.updateProjectionMatrix(),M.setSize(D,He))});lt.observe(_);let $e=0,ut=0;const mt=()=>{ut=requestAnimationFrame(mt),$e%3===0&&qe(f.current),bt(),M.render(R,S),$e+=1};return mt(),()=>{cancelAnimationFrame(ut),lt.disconnect(),M.domElement.removeEventListener("pointerdown",ve),M.domElement.removeEventListener("pointermove",Se),M.domElement.removeEventListener("pointerup",ye),M.domElement.removeEventListener("click",Ie),M.domElement.removeEventListener("wheel",Ue),L.forEach(D=>D.dispose()),H.forEach(D=>D.dispose()),V.forEach(D=>D.dispose()),M.dispose(),_.contains(M.domElement)&&_.removeChild(M.domElement)}},[e,r]),P.jsx("div",{ref:c,className:"phase3-viewport-canvas",role:"application","aria-label":"Interactive bracket stress model. Drag to orbit, scroll to zoom, and click a part to select it."})}function Iw(){const[r,e]=xt.useState("contact"),[t,s]=xt.useState("stress"),[a,l]=xt.useState(Z0[0]),[c,f]=xt.useState(0),[h,p]=xt.useState(!1),v=xt.useCallback(_=>f(_),[]);return P.jsxs("div",{className:"phase3-screen",children:[P.jsx(ow,{project:"Heatsink_bracket",study:"Generative structural study"}),P.jsx("main",{className:"phase3-workspace",children:P.jsxs("div",{className:"phase3-viewport",children:[P.jsx(Dw,{variant:a,mode:t,solveProgress:c,showResults:h,selectedPart:r,onSelectPart:e}),h?P.jsxs("div",{className:"phase3-viewport-caption phase3-viewport-caption--with-controls",children:[P.jsx("span",{children:a.name}),P.jsx("small",{children:a.description})]}):null,h?P.jsx(bw,{mode:t,onModeChange:s}):null,P.jsx(Cw,{selectedPart:r,onSelectPart:e}),h?P.jsx(Pw,{mode:t,variant:a}):null,P.jsxs("div",{className:"phase3-axis","aria-hidden":"true",children:[P.jsx("i",{className:"axis-x"}),"X",P.jsx("i",{className:"axis-y"}),"Y",P.jsx("i",{className:"axis-z"}),"Z"]})]})}),P.jsx(Ew,{onModeChange:s,activeVariant:a,onVariantChange:_=>{l(_),f(1),e("fins")},onSolveProgress:v,onSolveStart:()=>p(!0)})]})}function Uw(){return P.jsx(z_,{children:P.jsx(Iw,{})})}B_.createRoot(document.getElementById("root")).render(P.jsx(Uw,{}));
