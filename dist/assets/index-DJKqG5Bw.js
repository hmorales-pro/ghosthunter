(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var jc={exports:{}},Ro={},Fc={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yr=Symbol.for("react.element"),Yh=Symbol.for("react.portal"),qh=Symbol.for("react.fragment"),Xh=Symbol.for("react.strict_mode"),Jh=Symbol.for("react.profiler"),Zh=Symbol.for("react.provider"),ep=Symbol.for("react.context"),tp=Symbol.for("react.forward_ref"),np=Symbol.for("react.suspense"),rp=Symbol.for("react.memo"),ip=Symbol.for("react.lazy"),Ql=Symbol.iterator;function op(e){return e===null||typeof e!="object"?null:(e=Ql&&e[Ql]||e["@@iterator"],typeof e=="function"?e:null)}var zc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$c=Object.assign,Vc={};function Qn(e,t,n){this.props=e,this.context=t,this.refs=Vc,this.updater=n||zc}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bc(){}Bc.prototype=Qn.prototype;function za(e,t,n){this.props=e,this.context=t,this.refs=Vc,this.updater=n||zc}var $a=za.prototype=new Bc;$a.constructor=za;$c($a,Qn.prototype);$a.isPureReactComponent=!0;var Yl=Array.isArray,Wc=Object.prototype.hasOwnProperty,Va={current:null},Hc={key:!0,ref:!0,__self:!0,__source:!0};function Kc(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Wc.call(t,r)&&!Hc.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Yr,type:e,key:o,ref:s,props:i,_owner:Va.current}}function sp(e,t){return{$$typeof:Yr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ba(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yr}function ap(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ql=/\/+/g;function Zo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ap(""+e.key):t.toString(36)}function Oi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Yr:case Yh:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Zo(s,0):r,Yl(i)?(n="",e!=null&&(n=e.replace(ql,"$&/")+"/"),Oi(i,t,n,"",function(u){return u})):i!=null&&(Ba(i)&&(i=sp(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ql,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Yl(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Zo(o,a);s+=Oi(o,t,n,l,i)}else if(l=op(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Zo(o,a++),s+=Oi(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ci(e,t,n){if(e==null)return e;var r=[],i=0;return Oi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function lp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Ai={transition:null},up={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Ai,ReactCurrentOwner:Va};function Gc(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:ci,forEach:function(e,t,n){ci(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ci(e,function(){t++}),t},toArray:function(e){return ci(e,function(t){return t})||[]},only:function(e){if(!Ba(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Qn;D.Fragment=qh;D.Profiler=Jh;D.PureComponent=za;D.StrictMode=Xh;D.Suspense=np;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=up;D.act=Gc;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$c({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Va.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Wc.call(t,l)&&!Hc.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Yr,type:e.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:ep,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zh,_context:e},e.Consumer=e};D.createElement=Kc;D.createFactory=function(e){var t=Kc.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:tp,render:e}};D.isValidElement=Ba;D.lazy=function(e){return{$$typeof:ip,_payload:{_status:-1,_result:e},_init:lp}};D.memo=function(e,t){return{$$typeof:rp,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Ai.transition;Ai.transition={};try{e()}finally{Ai.transition=t}};D.unstable_act=Gc;D.useCallback=function(e,t){return fe.current.useCallback(e,t)};D.useContext=function(e){return fe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};D.useEffect=function(e,t){return fe.current.useEffect(e,t)};D.useId=function(){return fe.current.useId()};D.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return fe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};D.useRef=function(e){return fe.current.useRef(e)};D.useState=function(e){return fe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return fe.current.useTransition()};D.version="18.3.1";Fc.exports=D;var N=Fc.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp=N,dp=Symbol.for("react.element"),fp=Symbol.for("react.fragment"),hp=Object.prototype.hasOwnProperty,pp=cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mp={key:!0,ref:!0,__self:!0,__source:!0};function Qc(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)hp.call(t,r)&&!mp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:dp,type:e,key:o,ref:s,props:i,_owner:pp.current}}Ro.Fragment=fp;Ro.jsx=Qc;Ro.jsxs=Qc;jc.exports=Ro;var _=jc.exports,Yc={exports:{}},Ie={},qc={exports:{}},Xc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,R){var O=I.length;I.push(R);e:for(;0<O;){var G=O-1>>>1,J=I[G];if(0<i(J,R))I[G]=R,I[O]=J,O=G;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var R=I[0],O=I.pop();if(O!==R){I[0]=O;e:for(var G=0,J=I.length,li=J>>>1;G<li;){var Qt=2*(G+1)-1,Jo=I[Qt],Yt=Qt+1,ui=I[Yt];if(0>i(Jo,O))Yt<J&&0>i(ui,Jo)?(I[G]=ui,I[Yt]=O,G=Yt):(I[G]=Jo,I[Qt]=O,G=Qt);else if(Yt<J&&0>i(ui,O))I[G]=ui,I[Yt]=O,G=Yt;else break e}}return R}function i(I,R){var O=I.sortIndex-R.sortIndex;return O!==0?O:I.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,m=null,f=3,g=!1,v=!1,S=!1,U=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=I)r(u),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(u)}}function y(I){if(S=!1,p(I),!v)if(n(l)!==null)v=!0,qo(E);else{var R=n(u);R!==null&&Xo(y,R.startTime-I)}}function E(I,R){v=!1,S&&(S=!1,h(P),P=-1),g=!0;var O=f;try{for(p(R),m=n(l);m!==null&&(!(m.expirationTime>R)||I&&!De());){var G=m.callback;if(typeof G=="function"){m.callback=null,f=m.priorityLevel;var J=G(m.expirationTime<=R);R=e.unstable_now(),typeof J=="function"?m.callback=J:m===n(l)&&r(l),p(R)}else r(l);m=n(l)}if(m!==null)var li=!0;else{var Qt=n(u);Qt!==null&&Xo(y,Qt.startTime-R),li=!1}return li}finally{m=null,f=O,g=!1}}var C=!1,T=null,P=-1,F=5,A=-1;function De(){return!(e.unstable_now()-A<F)}function Jn(){if(T!==null){var I=e.unstable_now();A=I;var R=!0;try{R=T(!0,I)}finally{R?Zn():(C=!1,T=null)}}else C=!1}var Zn;if(typeof c=="function")Zn=function(){c(Jn)};else if(typeof MessageChannel<"u"){var Gl=new MessageChannel,Qh=Gl.port2;Gl.port1.onmessage=Jn,Zn=function(){Qh.postMessage(null)}}else Zn=function(){U(Jn,0)};function qo(I){T=I,C||(C=!0,Zn())}function Xo(I,R){P=U(function(){I(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,qo(E))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var O=f;f=R;try{return I()}finally{f=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,R){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var O=f;f=I;try{return R()}finally{f=O}},e.unstable_scheduleCallback=function(I,R,O){var G=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?G+O:G):O=G,I){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=O+J,I={id:d++,callback:R,priorityLevel:I,startTime:O,expirationTime:J,sortIndex:-1},O>G?(I.sortIndex=O,t(u,I),n(l)===null&&I===n(u)&&(S?(h(P),P=-1):S=!0,Xo(y,O-G))):(I.sortIndex=J,t(l,I),v||g||(v=!0,qo(E))),I},e.unstable_shouldYield=De,e.unstable_wrapCallback=function(I){var R=f;return function(){var O=f;f=R;try{return I.apply(this,arguments)}finally{f=O}}}})(Xc);qc.exports=Xc;var gp=qc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp=N,ke=gp;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jc=new Set,xr={};function pn(e,t){zn(e,t),zn(e+"Capture",t)}function zn(e,t){for(xr[e]=t,e=0;e<t.length;e++)Jc.add(t[e])}var st=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Us=Object.prototype.hasOwnProperty,yp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xl={},Jl={};function wp(e){return Us.call(Jl,e)?!0:Us.call(Xl,e)?!1:yp.test(e)?Jl[e]=!0:(Xl[e]=!0,!1)}function _p(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sp(e,t,n,r){if(t===null||typeof t>"u"||_p(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wa=/[\-:]([a-z])/g;function Ha(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wa,Ha);ie[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wa,Ha);ie[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wa,Ha);ie[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ka(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sp(t,n,i,r)&&(n=null),r||i===null?wp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ht=vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,di=Symbol.for("react.element"),yn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),Ga=Symbol.for("react.strict_mode"),bs=Symbol.for("react.profiler"),Zc=Symbol.for("react.provider"),ed=Symbol.for("react.context"),Qa=Symbol.for("react.forward_ref"),js=Symbol.for("react.suspense"),Fs=Symbol.for("react.suspense_list"),Ya=Symbol.for("react.memo"),gt=Symbol.for("react.lazy"),td=Symbol.for("react.offscreen"),Zl=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=Zl&&e[Zl]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,es;function dr(e){if(es===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);es=t&&t[1]||""}return`
`+es+e}var ts=!1;function ns(e,t){if(!e||ts)return"";ts=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ts=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dr(e):""}function Ep(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=ns(e.type,!1),e;case 11:return e=ns(e.type.render,!1),e;case 1:return e=ns(e.type,!0),e;default:return""}}function zs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wn:return"Fragment";case yn:return"Portal";case bs:return"Profiler";case Ga:return"StrictMode";case js:return"Suspense";case Fs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ed:return(e.displayName||"Context")+".Consumer";case Zc:return(e._context.displayName||"Context")+".Provider";case Qa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ya:return t=e.displayName||null,t!==null?t:zs(e.type)||"Memo";case gt:t=e._payload,e=e._init;try{return zs(e(t))}catch{}}return null}function kp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zs(t);case 8:return t===Ga?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ip(e){var t=nd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fi(e){e._valueTracker||(e._valueTracker=Ip(e))}function rd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=nd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $s(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function eu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ut(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function id(e,t){t=t.checked,t!=null&&Ka(e,"checked",t,!1)}function Vs(e,t){id(e,t);var n=Ut(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bs(e,t.type,Ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function tu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bs(e,t,n){(t!=="number"||Xi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function Rn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ws(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(fr(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ut(n)}}function od(e,t){var n=Ut(t.value),r=Ut(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ru(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hi,ad=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(hi=hi||document.createElement("div"),hi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cp=["Webkit","ms","Moz","O"];Object.keys(vr).forEach(function(e){Cp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vr[t]=vr[e]})});function ld(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vr.hasOwnProperty(e)&&vr[e]?(""+t).trim():t+"px"}function ud(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ld(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Tp=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ks(e,t){if(t){if(Tp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Gs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qs=null;function qa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,On=null,An=null;function iu(e){if(e=Jr(e)){if(typeof Ys!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Mo(t),Ys(e.stateNode,e.type,t))}}function cd(e){On?An?An.push(e):An=[e]:On=e}function dd(){if(On){var e=On,t=An;if(An=On=null,iu(e),t)for(e=0;e<t.length;e++)iu(t[e])}}function fd(e,t){return e(t)}function hd(){}var rs=!1;function pd(e,t,n){if(rs)return e(t,n);rs=!0;try{return fd(e,t,n)}finally{rs=!1,(On!==null||An!==null)&&(hd(),dd())}}function Rr(e,t){var n=e.stateNode;if(n===null)return null;var r=Mo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var qs=!1;if(st)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){qs=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{qs=!1}function Pp(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var yr=!1,Ji=null,Zi=!1,Xs=null,xp={onError:function(e){yr=!0,Ji=e}};function Np(e,t,n,r,i,o,s,a,l){yr=!1,Ji=null,Pp.apply(xp,arguments)}function Rp(e,t,n,r,i,o,s,a,l){if(Np.apply(this,arguments),yr){if(yr){var u=Ji;yr=!1,Ji=null}else throw Error(w(198));Zi||(Zi=!0,Xs=u)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function md(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ou(e){if(mn(e)!==e)throw Error(w(188))}function Op(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ou(i),e;if(o===r)return ou(i),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function gd(e){return e=Op(e),e!==null?vd(e):null}function vd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vd(e);if(t!==null)return t;e=e.sibling}return null}var yd=ke.unstable_scheduleCallback,su=ke.unstable_cancelCallback,Ap=ke.unstable_shouldYield,Dp=ke.unstable_requestPaint,Q=ke.unstable_now,Lp=ke.unstable_getCurrentPriorityLevel,Xa=ke.unstable_ImmediatePriority,wd=ke.unstable_UserBlockingPriority,eo=ke.unstable_NormalPriority,Mp=ke.unstable_LowPriority,_d=ke.unstable_IdlePriority,Oo=null,Ke=null;function Up(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Oo,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:Fp,bp=Math.log,jp=Math.LN2;function Fp(e){return e>>>=0,e===0?32:31-(bp(e)/jp|0)|0}var pi=64,mi=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function to(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=hr(a):(o&=s,o!==0&&(r=hr(o)))}else s=n&~i,s!==0?r=hr(s):o!==0&&(r=hr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),i=1<<n,r|=e[n],t&=~i;return r}function zp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $p(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Fe(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=zp(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Js(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sd(){var e=pi;return pi<<=1,!(pi&4194240)&&(pi=64),e}function is(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function Vp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Fe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ja(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function Ed(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var kd,Za,Id,Cd,Td,Zs=!1,gi=[],Tt=null,Pt=null,xt=null,Or=new Map,Ar=new Map,yt=[],Bp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function au(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ar.delete(t.pointerId)}}function nr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Jr(t),t!==null&&Za(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Wp(e,t,n,r,i){switch(t){case"focusin":return Tt=nr(Tt,e,t,n,r,i),!0;case"dragenter":return Pt=nr(Pt,e,t,n,r,i),!0;case"mouseover":return xt=nr(xt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Or.set(o,nr(Or.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ar.set(o,nr(Ar.get(o)||null,e,t,n,r,i)),!0}return!1}function Pd(e){var t=en(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=md(n),t!==null){e.blockedOn=t,Td(e.priority,function(){Id(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Di(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ea(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qs=r,n.target.dispatchEvent(r),Qs=null}else return t=Jr(n),t!==null&&Za(t),e.blockedOn=n,!1;t.shift()}return!0}function lu(e,t,n){Di(e)&&n.delete(t)}function Hp(){Zs=!1,Tt!==null&&Di(Tt)&&(Tt=null),Pt!==null&&Di(Pt)&&(Pt=null),xt!==null&&Di(xt)&&(xt=null),Or.forEach(lu),Ar.forEach(lu)}function rr(e,t){e.blockedOn===t&&(e.blockedOn=null,Zs||(Zs=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,Hp)))}function Dr(e){function t(i){return rr(i,e)}if(0<gi.length){rr(gi[0],e);for(var n=1;n<gi.length;n++){var r=gi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tt!==null&&rr(Tt,e),Pt!==null&&rr(Pt,e),xt!==null&&rr(xt,e),Or.forEach(t),Ar.forEach(t),n=0;n<yt.length;n++)r=yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yt.length&&(n=yt[0],n.blockedOn===null);)Pd(n),n.blockedOn===null&&yt.shift()}var Dn=ht.ReactCurrentBatchConfig,no=!0;function Kp(e,t,n,r){var i=M,o=Dn.transition;Dn.transition=null;try{M=1,el(e,t,n,r)}finally{M=i,Dn.transition=o}}function Gp(e,t,n,r){var i=M,o=Dn.transition;Dn.transition=null;try{M=4,el(e,t,n,r)}finally{M=i,Dn.transition=o}}function el(e,t,n,r){if(no){var i=ea(e,t,n,r);if(i===null)ps(e,t,r,ro,n),au(e,r);else if(Wp(i,e,t,n,r))r.stopPropagation();else if(au(e,r),t&4&&-1<Bp.indexOf(e)){for(;i!==null;){var o=Jr(i);if(o!==null&&kd(o),o=ea(e,t,n,r),o===null&&ps(e,t,r,ro,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ps(e,t,r,null,n)}}var ro=null;function ea(e,t,n,r){if(ro=null,e=qa(r),e=en(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=md(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ro=e,null}function xd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lp()){case Xa:return 1;case wd:return 4;case eo:case Mp:return 16;case _d:return 536870912;default:return 16}default:return 16}}var It=null,tl=null,Li=null;function Nd(){if(Li)return Li;var e,t=tl,n=t.length,r,i="value"in It?It.value:It.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Li=i.slice(e,1<r?1-r:void 0)}function Mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vi(){return!0}function uu(){return!1}function Ce(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?vi:uu,this.isPropagationStopped=uu,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vi)},persist:function(){},isPersistent:vi}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=Ce(Yn),Xr=H({},Yn,{view:0,detail:0}),Qp=Ce(Xr),os,ss,ir,Ao=H({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ir&&(ir&&e.type==="mousemove"?(os=e.screenX-ir.screenX,ss=e.screenY-ir.screenY):ss=os=0,ir=e),os)},movementY:function(e){return"movementY"in e?e.movementY:ss}}),cu=Ce(Ao),Yp=H({},Ao,{dataTransfer:0}),qp=Ce(Yp),Xp=H({},Xr,{relatedTarget:0}),as=Ce(Xp),Jp=H({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Zp=Ce(Jp),em=H({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tm=Ce(em),nm=H({},Yn,{data:0}),du=Ce(nm),rm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},im={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=om[e])?!!t[e]:!1}function rl(){return sm}var am=H({},Xr,{key:function(e){if(e.key){var t=rm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?im[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rl,charCode:function(e){return e.type==="keypress"?Mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lm=Ce(am),um=H({},Ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fu=Ce(um),cm=H({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rl}),dm=Ce(cm),fm=H({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),hm=Ce(fm),pm=H({},Ao,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mm=Ce(pm),gm=[9,13,27,32],il=st&&"CompositionEvent"in window,wr=null;st&&"documentMode"in document&&(wr=document.documentMode);var vm=st&&"TextEvent"in window&&!wr,Rd=st&&(!il||wr&&8<wr&&11>=wr),hu=" ",pu=!1;function Od(e,t){switch(e){case"keyup":return gm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ad(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function ym(e,t){switch(e){case"compositionend":return Ad(t);case"keypress":return t.which!==32?null:(pu=!0,hu);case"textInput":return e=t.data,e===hu&&pu?null:e;default:return null}}function wm(e,t){if(_n)return e==="compositionend"||!il&&Od(e,t)?(e=Nd(),Li=tl=It=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rd&&t.locale!=="ko"?null:t.data;default:return null}}var _m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_m[e.type]:t==="textarea"}function Dd(e,t,n,r){cd(r),t=io(t,"onChange"),0<t.length&&(n=new nl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _r=null,Lr=null;function Sm(e){Wd(e,0)}function Do(e){var t=kn(e);if(rd(t))return e}function Em(e,t){if(e==="change")return t}var Ld=!1;if(st){var ls;if(st){var us="oninput"in document;if(!us){var gu=document.createElement("div");gu.setAttribute("oninput","return;"),us=typeof gu.oninput=="function"}ls=us}else ls=!1;Ld=ls&&(!document.documentMode||9<document.documentMode)}function vu(){_r&&(_r.detachEvent("onpropertychange",Md),Lr=_r=null)}function Md(e){if(e.propertyName==="value"&&Do(Lr)){var t=[];Dd(t,Lr,e,qa(e)),pd(Sm,t)}}function km(e,t,n){e==="focusin"?(vu(),_r=t,Lr=n,_r.attachEvent("onpropertychange",Md)):e==="focusout"&&vu()}function Im(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Do(Lr)}function Cm(e,t){if(e==="click")return Do(t)}function Tm(e,t){if(e==="input"||e==="change")return Do(t)}function Pm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ve=typeof Object.is=="function"?Object.is:Pm;function Mr(e,t){if(Ve(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Us.call(t,i)||!Ve(e[i],t[i]))return!1}return!0}function yu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wu(e,t){var n=yu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yu(n)}}function Ud(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ud(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bd(){for(var e=window,t=Xi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xi(e.document)}return t}function ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xm(e){var t=bd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ud(n.ownerDocument.documentElement,n)){if(r!==null&&ol(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=wu(n,o);var s=wu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nm=st&&"documentMode"in document&&11>=document.documentMode,Sn=null,ta=null,Sr=null,na=!1;function _u(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;na||Sn==null||Sn!==Xi(r)||(r=Sn,"selectionStart"in r&&ol(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&Mr(Sr,r)||(Sr=r,r=io(ta,"onSelect"),0<r.length&&(t=new nl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function yi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:yi("Animation","AnimationEnd"),animationiteration:yi("Animation","AnimationIteration"),animationstart:yi("Animation","AnimationStart"),transitionend:yi("Transition","TransitionEnd")},cs={},jd={};st&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function Lo(e){if(cs[e])return cs[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jd)return cs[e]=t[n];return e}var Fd=Lo("animationend"),zd=Lo("animationiteration"),$d=Lo("animationstart"),Vd=Lo("transitionend"),Bd=new Map,Su="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,t){Bd.set(e,t),pn(t,[e])}for(var ds=0;ds<Su.length;ds++){var fs=Su[ds],Rm=fs.toLowerCase(),Om=fs[0].toUpperCase()+fs.slice(1);jt(Rm,"on"+Om)}jt(Fd,"onAnimationEnd");jt(zd,"onAnimationIteration");jt($d,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(Vd,"onTransitionEnd");zn("onMouseEnter",["mouseout","mouseover"]);zn("onMouseLeave",["mouseout","mouseover"]);zn("onPointerEnter",["pointerout","pointerover"]);zn("onPointerLeave",["pointerout","pointerover"]);pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Am=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function Eu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Rp(r,t,void 0,e),e.currentTarget=null}function Wd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Eu(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Eu(i,a,u),o=l}}}if(Zi)throw e=Xs,Zi=!1,Xs=null,e}function z(e,t){var n=t[aa];n===void 0&&(n=t[aa]=new Set);var r=e+"__bubble";n.has(r)||(Hd(t,e,2,!1),n.add(r))}function hs(e,t,n){var r=0;t&&(r|=4),Hd(n,e,r,t)}var wi="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[wi]){e[wi]=!0,Jc.forEach(function(n){n!=="selectionchange"&&(Am.has(n)||hs(n,!1,e),hs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wi]||(t[wi]=!0,hs("selectionchange",!1,t))}}function Hd(e,t,n,r){switch(xd(t)){case 1:var i=Kp;break;case 4:i=Gp;break;default:i=el}n=i.bind(null,t,n,e),i=void 0,!qs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ps(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=en(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}pd(function(){var u=o,d=qa(n),m=[];e:{var f=Bd.get(e);if(f!==void 0){var g=nl,v=e;switch(e){case"keypress":if(Mi(n)===0)break e;case"keydown":case"keyup":g=lm;break;case"focusin":v="focus",g=as;break;case"focusout":v="blur",g=as;break;case"beforeblur":case"afterblur":g=as;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=cu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=qp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=dm;break;case Fd:case zd:case $d:g=Zp;break;case Vd:g=hm;break;case"scroll":g=Qp;break;case"wheel":g=mm;break;case"copy":case"cut":case"paste":g=tm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=fu}var S=(t&4)!==0,U=!S&&e==="scroll",h=S?f!==null?f+"Capture":null:f;S=[];for(var c=u,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,h!==null&&(y=Rr(c,h),y!=null&&S.push(br(c,y,p)))),U)break;c=c.return}0<S.length&&(f=new g(f,v,null,n,d),m.push({event:f,listeners:S}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==Qs&&(v=n.relatedTarget||n.fromElement)&&(en(v)||v[at]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?en(v):null,v!==null&&(U=mn(v),v!==U||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(S=cu,y="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=fu,y="onPointerLeave",h="onPointerEnter",c="pointer"),U=g==null?f:kn(g),p=v==null?f:kn(v),f=new S(y,c+"leave",g,n,d),f.target=U,f.relatedTarget=p,y=null,en(d)===u&&(S=new S(h,c+"enter",v,n,d),S.target=p,S.relatedTarget=U,y=S),U=y,g&&v)t:{for(S=g,h=v,c=0,p=S;p;p=vn(p))c++;for(p=0,y=h;y;y=vn(y))p++;for(;0<c-p;)S=vn(S),c--;for(;0<p-c;)h=vn(h),p--;for(;c--;){if(S===h||h!==null&&S===h.alternate)break t;S=vn(S),h=vn(h)}S=null}else S=null;g!==null&&ku(m,f,g,S,!1),v!==null&&U!==null&&ku(m,U,v,S,!0)}}e:{if(f=u?kn(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var E=Em;else if(mu(f))if(Ld)E=Tm;else{E=Im;var C=km}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=Cm);if(E&&(E=E(e,u))){Dd(m,E,n,d);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Bs(f,"number",f.value)}switch(C=u?kn(u):window,e){case"focusin":(mu(C)||C.contentEditable==="true")&&(Sn=C,ta=u,Sr=null);break;case"focusout":Sr=ta=Sn=null;break;case"mousedown":na=!0;break;case"contextmenu":case"mouseup":case"dragend":na=!1,_u(m,n,d);break;case"selectionchange":if(Nm)break;case"keydown":case"keyup":_u(m,n,d)}var T;if(il)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else _n?Od(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Rd&&n.locale!=="ko"&&(_n||P!=="onCompositionStart"?P==="onCompositionEnd"&&_n&&(T=Nd()):(It=d,tl="value"in It?It.value:It.textContent,_n=!0)),C=io(u,P),0<C.length&&(P=new du(P,e,null,n,d),m.push({event:P,listeners:C}),T?P.data=T:(T=Ad(n),T!==null&&(P.data=T)))),(T=vm?ym(e,n):wm(e,n))&&(u=io(u,"onBeforeInput"),0<u.length&&(d=new du("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:u}),d.data=T))}Wd(m,t)})}function br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function io(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Rr(e,n),o!=null&&r.unshift(br(e,o,i)),o=Rr(e,t),o!=null&&r.push(br(e,o,i))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ku(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Rr(n,o),l!=null&&s.unshift(br(n,l,a))):i||(l=Rr(n,o),l!=null&&s.push(br(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Dm=/\r\n?/g,Lm=/\u0000|\uFFFD/g;function Iu(e){return(typeof e=="string"?e:""+e).replace(Dm,`
`).replace(Lm,"")}function _i(e,t,n){if(t=Iu(t),Iu(e)!==t&&n)throw Error(w(425))}function oo(){}var ra=null,ia=null;function oa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sa=typeof setTimeout=="function"?setTimeout:void 0,Mm=typeof clearTimeout=="function"?clearTimeout:void 0,Cu=typeof Promise=="function"?Promise:void 0,Um=typeof queueMicrotask=="function"?queueMicrotask:typeof Cu<"u"?function(e){return Cu.resolve(null).then(e).catch(bm)}:sa;function bm(e){setTimeout(function(){throw e})}function ms(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Dr(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Tu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qn=Math.random().toString(36).slice(2),He="__reactFiber$"+qn,jr="__reactProps$"+qn,at="__reactContainer$"+qn,aa="__reactEvents$"+qn,jm="__reactListeners$"+qn,Fm="__reactHandles$"+qn;function en(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[at]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Tu(e);e!==null;){if(n=e[He])return n;e=Tu(e)}return t}e=n,n=e.parentNode}return null}function Jr(e){return e=e[He]||e[at],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Mo(e){return e[jr]||null}var la=[],In=-1;function Ft(e){return{current:e}}function $(e){0>In||(e.current=la[In],la[In]=null,In--)}function j(e,t){In++,la[In]=e.current,e.current=t}var bt={},le=Ft(bt),ge=Ft(!1),an=bt;function $n(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function so(){$(ge),$(le)}function Pu(e,t,n){if(le.current!==bt)throw Error(w(168));j(le,t),j(ge,n)}function Kd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(w(108,kp(e)||"Unknown",i));return H({},n,r)}function ao(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,an=le.current,j(le,e),j(ge,ge.current),!0}function xu(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=Kd(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,$(ge),$(le),j(le,e)):$(ge),j(ge,n)}var Xe=null,Uo=!1,gs=!1;function Gd(e){Xe===null?Xe=[e]:Xe.push(e)}function zm(e){Uo=!0,Gd(e)}function zt(){if(!gs&&Xe!==null){gs=!0;var e=0,t=M;try{var n=Xe;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xe=null,Uo=!1}catch(i){throw Xe!==null&&(Xe=Xe.slice(e+1)),yd(Xa,zt),i}finally{M=t,gs=!1}}return null}var Cn=[],Tn=0,lo=null,uo=0,Te=[],Pe=0,ln=null,Ze=1,et="";function qt(e,t){Cn[Tn++]=uo,Cn[Tn++]=lo,lo=e,uo=t}function Qd(e,t,n){Te[Pe++]=Ze,Te[Pe++]=et,Te[Pe++]=ln,ln=e;var r=Ze;e=et;var i=32-Fe(r)-1;r&=~(1<<i),n+=1;var o=32-Fe(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ze=1<<32-Fe(t)+i|n<<i|r,et=o+e}else Ze=1<<o|n<<i|r,et=e}function sl(e){e.return!==null&&(qt(e,1),Qd(e,1,0))}function al(e){for(;e===lo;)lo=Cn[--Tn],Cn[Tn]=null,uo=Cn[--Tn],Cn[Tn]=null;for(;e===ln;)ln=Te[--Pe],Te[Pe]=null,et=Te[--Pe],Te[Pe]=null,Ze=Te[--Pe],Te[Pe]=null}var Ee=null,_e=null,V=!1,be=null;function Yd(e,t){var n=xe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Nu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,_e=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ln!==null?{id:Ze,overflow:et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,_e=null,!0):!1;default:return!1}}function ua(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ca(e){if(V){var t=_e;if(t){var n=t;if(!Nu(e,t)){if(ua(e))throw Error(w(418));t=Nt(n.nextSibling);var r=Ee;t&&Nu(e,t)?Yd(r,n):(e.flags=e.flags&-4097|2,V=!1,Ee=e)}}else{if(ua(e))throw Error(w(418));e.flags=e.flags&-4097|2,V=!1,Ee=e}}}function Ru(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function Si(e){if(e!==Ee)return!1;if(!V)return Ru(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!oa(e.type,e.memoizedProps)),t&&(t=_e)){if(ua(e))throw qd(),Error(w(418));for(;t;)Yd(e,t),t=Nt(t.nextSibling)}if(Ru(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=Ee?Nt(e.stateNode.nextSibling):null;return!0}function qd(){for(var e=_e;e;)e=Nt(e.nextSibling)}function Vn(){_e=Ee=null,V=!1}function ll(e){be===null?be=[e]:be.push(e)}var $m=ht.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Ei(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ou(e){var t=e._init;return t(e._payload)}function Xd(e){function t(h,c){if(e){var p=h.deletions;p===null?(h.deletions=[c],h.flags|=16):p.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function i(h,c){return h=Dt(h,c),h.index=0,h.sibling=null,h}function o(h,c,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<c?(h.flags|=2,c):p):(h.flags|=2,c)):(h.flags|=1048576,c)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,c,p,y){return c===null||c.tag!==6?(c=ks(p,h.mode,y),c.return=h,c):(c=i(c,p),c.return=h,c)}function l(h,c,p,y){var E=p.type;return E===wn?d(h,c,p.props.children,y,p.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===gt&&Ou(E)===c.type)?(y=i(c,p.props),y.ref=or(h,c,p),y.return=h,y):(y=Vi(p.type,p.key,p.props,null,h.mode,y),y.ref=or(h,c,p),y.return=h,y)}function u(h,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Is(p,h.mode,y),c.return=h,c):(c=i(c,p.children||[]),c.return=h,c)}function d(h,c,p,y,E){return c===null||c.tag!==7?(c=sn(p,h.mode,y,E),c.return=h,c):(c=i(c,p),c.return=h,c)}function m(h,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ks(""+c,h.mode,p),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case di:return p=Vi(c.type,c.key,c.props,null,h.mode,p),p.ref=or(h,null,c),p.return=h,p;case yn:return c=Is(c,h.mode,p),c.return=h,c;case gt:var y=c._init;return m(h,y(c._payload),p)}if(fr(c)||er(c))return c=sn(c,h.mode,p,null),c.return=h,c;Ei(h,c)}return null}function f(h,c,p,y){var E=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(h,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case di:return p.key===E?l(h,c,p,y):null;case yn:return p.key===E?u(h,c,p,y):null;case gt:return E=p._init,f(h,c,E(p._payload),y)}if(fr(p)||er(p))return E!==null?null:d(h,c,p,y,null);Ei(h,p)}return null}function g(h,c,p,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(p)||null,a(c,h,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case di:return h=h.get(y.key===null?p:y.key)||null,l(c,h,y,E);case yn:return h=h.get(y.key===null?p:y.key)||null,u(c,h,y,E);case gt:var C=y._init;return g(h,c,p,C(y._payload),E)}if(fr(y)||er(y))return h=h.get(p)||null,d(c,h,y,E,null);Ei(c,y)}return null}function v(h,c,p,y){for(var E=null,C=null,T=c,P=c=0,F=null;T!==null&&P<p.length;P++){T.index>P?(F=T,T=null):F=T.sibling;var A=f(h,T,p[P],y);if(A===null){T===null&&(T=F);break}e&&T&&A.alternate===null&&t(h,T),c=o(A,c,P),C===null?E=A:C.sibling=A,C=A,T=F}if(P===p.length)return n(h,T),V&&qt(h,P),E;if(T===null){for(;P<p.length;P++)T=m(h,p[P],y),T!==null&&(c=o(T,c,P),C===null?E=T:C.sibling=T,C=T);return V&&qt(h,P),E}for(T=r(h,T);P<p.length;P++)F=g(T,h,P,p[P],y),F!==null&&(e&&F.alternate!==null&&T.delete(F.key===null?P:F.key),c=o(F,c,P),C===null?E=F:C.sibling=F,C=F);return e&&T.forEach(function(De){return t(h,De)}),V&&qt(h,P),E}function S(h,c,p,y){var E=er(p);if(typeof E!="function")throw Error(w(150));if(p=E.call(p),p==null)throw Error(w(151));for(var C=E=null,T=c,P=c=0,F=null,A=p.next();T!==null&&!A.done;P++,A=p.next()){T.index>P?(F=T,T=null):F=T.sibling;var De=f(h,T,A.value,y);if(De===null){T===null&&(T=F);break}e&&T&&De.alternate===null&&t(h,T),c=o(De,c,P),C===null?E=De:C.sibling=De,C=De,T=F}if(A.done)return n(h,T),V&&qt(h,P),E;if(T===null){for(;!A.done;P++,A=p.next())A=m(h,A.value,y),A!==null&&(c=o(A,c,P),C===null?E=A:C.sibling=A,C=A);return V&&qt(h,P),E}for(T=r(h,T);!A.done;P++,A=p.next())A=g(T,h,P,A.value,y),A!==null&&(e&&A.alternate!==null&&T.delete(A.key===null?P:A.key),c=o(A,c,P),C===null?E=A:C.sibling=A,C=A);return e&&T.forEach(function(Jn){return t(h,Jn)}),V&&qt(h,P),E}function U(h,c,p,y){if(typeof p=="object"&&p!==null&&p.type===wn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case di:e:{for(var E=p.key,C=c;C!==null;){if(C.key===E){if(E=p.type,E===wn){if(C.tag===7){n(h,C.sibling),c=i(C,p.props.children),c.return=h,h=c;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===gt&&Ou(E)===C.type){n(h,C.sibling),c=i(C,p.props),c.ref=or(h,C,p),c.return=h,h=c;break e}n(h,C);break}else t(h,C);C=C.sibling}p.type===wn?(c=sn(p.props.children,h.mode,y,p.key),c.return=h,h=c):(y=Vi(p.type,p.key,p.props,null,h.mode,y),y.ref=or(h,c,p),y.return=h,h=y)}return s(h);case yn:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(h,c.sibling),c=i(c,p.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=Is(p,h.mode,y),c.return=h,h=c}return s(h);case gt:return C=p._init,U(h,c,C(p._payload),y)}if(fr(p))return v(h,c,p,y);if(er(p))return S(h,c,p,y);Ei(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(h,c.sibling),c=i(c,p),c.return=h,h=c):(n(h,c),c=ks(p,h.mode,y),c.return=h,h=c),s(h)):n(h,c)}return U}var Bn=Xd(!0),Jd=Xd(!1),co=Ft(null),fo=null,Pn=null,ul=null;function cl(){ul=Pn=fo=null}function dl(e){var t=co.current;$(co),e._currentValue=t}function da(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ln(e,t){fo=e,ul=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(ul!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(fo===null)throw Error(w(308));Pn=e,fo.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var tn=null;function fl(e){tn===null?tn=[e]:tn.push(e)}function Zd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,fl(t)):(n.next=i.next,i.next=n),t.interleaved=n,lt(e,r)}function lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vt=!1;function hl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ef(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,lt(e,n)}return i=r.interleaved,i===null?(t.next=t,fl(r)):(t.next=i.next,i.next=t),r.interleaved=t,lt(e,n)}function Ui(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ja(e,n)}}function Au(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ho(e,t,n,r){var i=e.updateQueue;vt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var m=i.baseState;s=0,d=u=l=null,a=o;do{var f=a.lane,g=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,S=a;switch(f=t,g=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){m=v.call(g,m,f);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,f=typeof v=="function"?v.call(g,m,f):v,f==null)break e;m=H({},m,f);break e;case 2:vt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=m):d=d.next=g,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=m),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);cn|=s,e.lanes=s,e.memoizedState=m}}function Du(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var Zr={},Ge=Ft(Zr),Fr=Ft(Zr),zr=Ft(Zr);function nn(e){if(e===Zr)throw Error(w(174));return e}function pl(e,t){switch(j(zr,t),j(Fr,e),j(Ge,Zr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Hs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Hs(t,e)}$(Ge),j(Ge,t)}function Wn(){$(Ge),$(Fr),$(zr)}function tf(e){nn(zr.current);var t=nn(Ge.current),n=Hs(t,e.type);t!==n&&(j(Fr,e),j(Ge,n))}function ml(e){Fr.current===e&&($(Ge),$(Fr))}var B=Ft(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vs=[];function gl(){for(var e=0;e<vs.length;e++)vs[e]._workInProgressVersionPrimary=null;vs.length=0}var bi=ht.ReactCurrentDispatcher,ys=ht.ReactCurrentBatchConfig,un=0,W=null,q=null,Z=null,mo=!1,Er=!1,$r=0,Vm=0;function oe(){throw Error(w(321))}function vl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ve(e[n],t[n]))return!1;return!0}function yl(e,t,n,r,i,o){if(un=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bi.current=e===null||e.memoizedState===null?Km:Gm,e=n(r,i),Er){o=0;do{if(Er=!1,$r=0,25<=o)throw Error(w(301));o+=1,Z=q=null,t.updateQueue=null,bi.current=Qm,e=n(r,i)}while(Er)}if(bi.current=go,t=q!==null&&q.next!==null,un=0,Z=q=W=null,mo=!1,t)throw Error(w(300));return e}function wl(){var e=$r!==0;return $r=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?W.memoizedState=Z=e:Z=Z.next=e,Z}function Oe(){if(q===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var t=Z===null?W.memoizedState:Z.next;if(t!==null)Z=t,q=e;else{if(e===null)throw Error(w(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},Z===null?W.memoizedState=Z=e:Z=Z.next=e}return Z}function Vr(e,t){return typeof t=="function"?t(e):t}function ws(e){var t=Oe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=q,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((un&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=m,s=r):l=l.next=m,W.lanes|=d,cn|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Ve(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,W.lanes|=o,cn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _s(e){var t=Oe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ve(o,t.memoizedState)||(me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function nf(){}function rf(e,t){var n=W,r=Oe(),i=t(),o=!Ve(r.memoizedState,i);if(o&&(r.memoizedState=i,me=!0),r=r.queue,_l(af.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Br(9,sf.bind(null,n,r,i,t),void 0,null),ee===null)throw Error(w(349));un&30||of(n,t,i)}return i}function of(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sf(e,t,n,r){t.value=n,t.getSnapshot=r,lf(t)&&uf(e)}function af(e,t,n){return n(function(){lf(t)&&uf(e)})}function lf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ve(e,n)}catch{return!0}}function uf(e){var t=lt(e,1);t!==null&&ze(t,e,1,-1)}function Lu(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vr,lastRenderedState:e},t.queue=e,e=e.dispatch=Hm.bind(null,W,e),[t.memoizedState,e]}function Br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cf(){return Oe().memoizedState}function ji(e,t,n,r){var i=We();W.flags|=e,i.memoizedState=Br(1|t,n,void 0,r===void 0?null:r)}function bo(e,t,n,r){var i=Oe();r=r===void 0?null:r;var o=void 0;if(q!==null){var s=q.memoizedState;if(o=s.destroy,r!==null&&vl(r,s.deps)){i.memoizedState=Br(t,n,o,r);return}}W.flags|=e,i.memoizedState=Br(1|t,n,o,r)}function Mu(e,t){return ji(8390656,8,e,t)}function _l(e,t){return bo(2048,8,e,t)}function df(e,t){return bo(4,2,e,t)}function ff(e,t){return bo(4,4,e,t)}function hf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pf(e,t,n){return n=n!=null?n.concat([e]):null,bo(4,4,hf.bind(null,t,e),n)}function Sl(){}function mf(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gf(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vf(e,t,n){return un&21?(Ve(n,t)||(n=Sd(),W.lanes|=n,cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function Bm(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=ys.transition;ys.transition={};try{e(!1),t()}finally{M=n,ys.transition=r}}function yf(){return Oe().memoizedState}function Wm(e,t,n){var r=At(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wf(e))_f(t,n);else if(n=Zd(e,t,n,r),n!==null){var i=ce();ze(n,e,r,i),Sf(n,t,r)}}function Hm(e,t,n){var r=At(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wf(e))_f(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Ve(a,s)){var l=t.interleaved;l===null?(i.next=i,fl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Zd(e,t,i,r),n!==null&&(i=ce(),ze(n,e,r,i),Sf(n,t,r))}}function wf(e){var t=e.alternate;return e===W||t!==null&&t===W}function _f(e,t){Er=mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ja(e,n)}}var go={readContext:Re,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Km={readContext:Re,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:Mu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ji(4194308,4,hf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ji(4194308,4,e,t)},useInsertionEffect:function(e,t){return ji(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Wm.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:Lu,useDebugValue:Sl,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=Lu(!1),t=e[0];return e=Bm.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,i=We();if(V){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),ee===null)throw Error(w(349));un&30||of(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Mu(af.bind(null,r,o,e),[e]),r.flags|=2048,Br(9,sf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=We(),t=ee.identifierPrefix;if(V){var n=et,r=Ze;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Vm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Gm={readContext:Re,useCallback:mf,useContext:Re,useEffect:_l,useImperativeHandle:pf,useInsertionEffect:df,useLayoutEffect:ff,useMemo:gf,useReducer:ws,useRef:cf,useState:function(){return ws(Vr)},useDebugValue:Sl,useDeferredValue:function(e){var t=Oe();return vf(t,q.memoizedState,e)},useTransition:function(){var e=ws(Vr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:nf,useSyncExternalStore:rf,useId:yf,unstable_isNewReconciler:!1},Qm={readContext:Re,useCallback:mf,useContext:Re,useEffect:_l,useImperativeHandle:pf,useInsertionEffect:df,useLayoutEffect:ff,useMemo:gf,useReducer:_s,useRef:cf,useState:function(){return _s(Vr)},useDebugValue:Sl,useDeferredValue:function(e){var t=Oe();return q===null?t.memoizedState=e:vf(t,q.memoizedState,e)},useTransition:function(){var e=_s(Vr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:nf,useSyncExternalStore:rf,useId:yf,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jo={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),i=At(e),o=it(r,i);o.payload=t,n!=null&&(o.callback=n),t=Rt(e,o,i),t!==null&&(ze(t,e,i,r),Ui(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),i=At(e),o=it(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Rt(e,o,i),t!==null&&(ze(t,e,i,r),Ui(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=At(e),i=it(n,r);i.tag=2,t!=null&&(i.callback=t),t=Rt(e,i,r),t!==null&&(ze(t,e,r,n),Ui(t,e,r))}};function Uu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,o):!0}function Ef(e,t,n){var r=!1,i=bt,o=t.contextType;return typeof o=="object"&&o!==null?o=Re(o):(i=ve(t)?an:le.current,r=t.contextTypes,o=(r=r!=null)?$n(e,i):bt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function bu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&jo.enqueueReplaceState(t,t.state,null)}function ha(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},hl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Re(o):(o=ve(t)?an:le.current,i.context=$n(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(fa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&jo.enqueueReplaceState(i,i.state,null),ho(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Hn(e,t){try{var n="",r=t;do n+=Ep(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ss(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function pa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ym=typeof WeakMap=="function"?WeakMap:Map;function kf(e,t,n){n=it(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yo||(yo=!0,Ia=r),pa(e,t)},n}function If(e,t,n){n=it(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){pa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){pa(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ym;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ug.bind(null,e,t,n),t.then(e,e))}function Fu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=it(-1,1),t.tag=2,Rt(n,t,1))),n.lanes|=1),e)}var qm=ht.ReactCurrentOwner,me=!1;function ue(e,t,n,r){t.child=e===null?Jd(t,null,n,r):Bn(t,e.child,n,r)}function $u(e,t,n,r,i){n=n.render;var o=t.ref;return Ln(t,i),r=yl(e,t,n,r,o,i),n=wl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ut(e,t,i)):(V&&n&&sl(t),t.flags|=1,ue(e,t,r,i),t.child)}function Vu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Nl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Cf(e,t,o,r,i)):(e=Vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Mr,n(s,r)&&e.ref===t.ref)return ut(e,t,i)}return t.flags|=1,e=Dt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Cf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Mr(o,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,ut(e,t,i)}return ma(e,t,n,r,i)}function Tf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(Nn,we),we|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,j(Nn,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,j(Nn,we),we|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,j(Nn,we),we|=r;return ue(e,t,i,n),t.child}function Pf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ma(e,t,n,r,i){var o=ve(n)?an:le.current;return o=$n(t,o),Ln(t,i),n=yl(e,t,n,r,o,i),r=wl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ut(e,t,i)):(V&&r&&sl(t),t.flags|=1,ue(e,t,n,i),t.child)}function Bu(e,t,n,r,i){if(ve(n)){var o=!0;ao(t)}else o=!1;if(Ln(t,i),t.stateNode===null)Fi(e,t),Ef(t,n,r),ha(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Re(u):(u=ve(n)?an:le.current,u=$n(t,u));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&bu(t,s,r,u),vt=!1;var f=t.memoizedState;s.state=f,ho(t,r,s,i),l=t.memoizedState,a!==r||f!==l||ge.current||vt?(typeof d=="function"&&(fa(t,n,d,r),l=t.memoizedState),(a=vt||Uu(t,n,a,r,f,l,u))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ef(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Me(t.type,a),s.props=u,m=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Re(l):(l=ve(n)?an:le.current,l=$n(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||f!==l)&&bu(t,s,r,l),vt=!1,f=t.memoizedState,s.state=f,ho(t,r,s,i);var v=t.memoizedState;a!==m||f!==v||ge.current||vt?(typeof g=="function"&&(fa(t,n,g,r),v=t.memoizedState),(u=vt||Uu(t,n,u,r,f,v,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return ga(e,t,n,r,o,i)}function ga(e,t,n,r,i,o){Pf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&xu(t,n,!1),ut(e,t,o);r=t.stateNode,qm.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Bn(t,e.child,null,o),t.child=Bn(t,null,a,o)):ue(e,t,a,o),t.memoizedState=r.state,i&&xu(t,n,!0),t.child}function xf(e){var t=e.stateNode;t.pendingContext?Pu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Pu(e,t.context,!1),pl(e,t.containerInfo)}function Wu(e,t,n,r,i){return Vn(),ll(i),t.flags|=256,ue(e,t,n,r),t.child}var va={dehydrated:null,treeContext:null,retryLane:0};function ya(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nf(e,t,n){var r=t.pendingProps,i=B.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),j(B,i&1),e===null)return ca(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=$o(s,r,0,null),e=sn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ya(n),t.memoizedState=va,e):El(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Xm(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Dt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Dt(a,o):(o=sn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ya(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=va,r}return o=e.child,e=o.sibling,r=Dt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function El(e,t){return t=$o({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ki(e,t,n,r){return r!==null&&ll(r),Bn(t,e.child,null,n),e=El(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xm(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ss(Error(w(422))),ki(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=$o({mode:"visible",children:r.children},i,0,null),o=sn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Bn(t,e.child,null,s),t.child.memoizedState=ya(s),t.memoizedState=va,o);if(!(t.mode&1))return ki(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(w(419)),r=Ss(o,r,void 0),ki(e,t,s,r)}if(a=(s&e.childLanes)!==0,me||a){if(r=ee,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,lt(e,i),ze(r,e,i,-1))}return xl(),r=Ss(Error(w(421))),ki(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=cg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,_e=Nt(i.nextSibling),Ee=t,V=!0,be=null,e!==null&&(Te[Pe++]=Ze,Te[Pe++]=et,Te[Pe++]=ln,Ze=e.id,et=e.overflow,ln=t),t=El(t,r.children),t.flags|=4096,t)}function Hu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),da(e.return,t,n)}function Es(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Rf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ue(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hu(e,n,t);else if(e.tag===19)Hu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(j(B,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Es(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Es(t,!0,n,null,o);break;case"together":Es(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jm(e,t,n){switch(t.tag){case 3:xf(t),Vn();break;case 5:tf(t);break;case 1:ve(t.type)&&ao(t);break;case 4:pl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;j(co,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(j(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?Nf(e,t,n):(j(B,B.current&1),e=ut(e,t,n),e!==null?e.sibling:null);j(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Rf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,Tf(e,t,n)}return ut(e,t,n)}var Of,wa,Af,Df;Of=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wa=function(){};Af=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,nn(Ge.current);var o=null;switch(n){case"input":i=$s(e,i),r=$s(e,r),o=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":i=Ws(e,i),r=Ws(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oo)}Ks(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&z("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Df=function(e,t,n,r){n!==r&&(t.flags|=4)};function sr(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Zm(e,t,n){var r=t.pendingProps;switch(al(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ve(t.type)&&so(),se(t),null;case 3:return r=t.stateNode,Wn(),$(ge),$(le),gl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Si(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,be!==null&&(Pa(be),be=null))),wa(e,t),se(t),null;case 5:ml(t);var i=nn(zr.current);if(n=t.type,e!==null&&t.stateNode!=null)Af(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return se(t),null}if(e=nn(Ge.current),Si(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[He]=t,r[jr]=o,e=(t.mode&1)!==0,n){case"dialog":z("cancel",r),z("close",r);break;case"iframe":case"object":case"embed":z("load",r);break;case"video":case"audio":for(i=0;i<pr.length;i++)z(pr[i],r);break;case"source":z("error",r);break;case"img":case"image":case"link":z("error",r),z("load",r);break;case"details":z("toggle",r);break;case"input":eu(r,o),z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},z("invalid",r);break;case"textarea":nu(r,o),z("invalid",r)}Ks(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&_i(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&_i(r.textContent,a,e),i=["children",""+a]):xr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&z("scroll",r)}switch(n){case"input":fi(r),tu(r,o,!0);break;case"textarea":fi(r),ru(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=oo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[He]=t,e[jr]=r,Of(e,t,!1,!1),t.stateNode=e;e:{switch(s=Gs(n,r),n){case"dialog":z("cancel",e),z("close",e),i=r;break;case"iframe":case"object":case"embed":z("load",e),i=r;break;case"video":case"audio":for(i=0;i<pr.length;i++)z(pr[i],e);i=r;break;case"source":z("error",e),i=r;break;case"img":case"image":case"link":z("error",e),z("load",e),i=r;break;case"details":z("toggle",e),i=r;break;case"input":eu(e,r),i=$s(e,r),z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),z("invalid",e);break;case"textarea":nu(e,r),i=Ws(e,r),z("invalid",e);break;default:i=r}Ks(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?ud(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ad(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Nr(e,l):typeof l=="number"&&Nr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(xr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&z("scroll",e):l!=null&&Ka(e,o,l,s))}switch(n){case"input":fi(e),tu(e,r,!1);break;case"textarea":fi(e),ru(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ut(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Rn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Rn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Df(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=nn(zr.current),nn(Ge.current),Si(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(o=r.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:_i(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_i(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return se(t),null;case 13:if($(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&_e!==null&&t.mode&1&&!(t.flags&128))qd(),Vn(),t.flags|=98560,o=!1;else if(o=Si(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[He]=t}else Vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else be!==null&&(Pa(be),be=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?X===0&&(X=3):xl())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return Wn(),wa(e,t),e===null&&Ur(t.stateNode.containerInfo),se(t),null;case 10:return dl(t.type._context),se(t),null;case 17:return ve(t.type)&&so(),se(t),null;case 19:if($(B),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)sr(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=po(e),s!==null){for(t.flags|=128,sr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return j(B,B.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>Kn&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304)}else{if(!r)if(e=po(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!V)return se(t),null}else 2*Q()-o.renderingStartTime>Kn&&n!==1073741824&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=B.current,j(B,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Pl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function eg(e,t){switch(al(t),t.tag){case 1:return ve(t.type)&&so(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(),$(ge),$(le),gl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ml(t),null;case 13:if($(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));Vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(B),null;case 4:return Wn(),null;case 10:return dl(t.type._context),null;case 22:case 23:return Pl(),null;case 24:return null;default:return null}}var Ii=!1,ae=!1,tg=typeof WeakSet=="function"?WeakSet:Set,k=null;function xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function _a(e,t,n){try{n()}catch(r){K(e,t,r)}}var Ku=!1;function ng(e,t){if(ra=no,e=bd(),ol(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,m=e,f=null;t:for(;;){for(var g;m!==n||i!==0&&m.nodeType!==3||(a=s+i),m!==o||r!==0&&m.nodeType!==3||(l=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(g=m.firstChild)!==null;)f=m,m=g;for(;;){if(m===e)break t;if(f===n&&++u===i&&(a=s),f===o&&++d===r&&(l=s),(g=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ia={focusedElem:e,selectionRange:n},no=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,U=v.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?S:Me(t.type,S),U);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){K(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return v=Ku,Ku=!1,v}function kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&_a(t,n,o)}i=i.next}while(i!==r)}}function Fo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Sa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Lf(e){var t=e.alternate;t!==null&&(e.alternate=null,Lf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[jr],delete t[aa],delete t[jm],delete t[Fm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mf(e){return e.tag===5||e.tag===3||e.tag===4}function Gu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oo));else if(r!==4&&(e=e.child,e!==null))for(Ea(e,t,n),e=e.sibling;e!==null;)Ea(e,t,n),e=e.sibling}function ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ka(e,t,n),e=e.sibling;e!==null;)ka(e,t,n),e=e.sibling}var te=null,Ue=!1;function pt(e,t,n){for(n=n.child;n!==null;)Uf(e,t,n),n=n.sibling}function Uf(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Oo,n)}catch{}switch(n.tag){case 5:ae||xn(n,t);case 6:var r=te,i=Ue;te=null,pt(e,t,n),te=r,Ue=i,te!==null&&(Ue?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Ue?(e=te,n=n.stateNode,e.nodeType===8?ms(e.parentNode,n):e.nodeType===1&&ms(e,n),Dr(e)):ms(te,n.stateNode));break;case 4:r=te,i=Ue,te=n.stateNode.containerInfo,Ue=!0,pt(e,t,n),te=r,Ue=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&_a(n,t,s),i=i.next}while(i!==r)}pt(e,t,n);break;case 1:if(!ae&&(xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}pt(e,t,n);break;case 21:pt(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,pt(e,t,n),ae=r):pt(e,t,n);break;default:pt(e,t,n)}}function Qu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new tg),t.forEach(function(r){var i=dg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Ue=!1;break e;case 3:te=a.stateNode.containerInfo,Ue=!0;break e;case 4:te=a.stateNode.containerInfo,Ue=!0;break e}a=a.return}if(te===null)throw Error(w(160));Uf(o,s,i),te=null,Ue=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){K(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bf(t,e),t=t.sibling}function bf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),Be(e),r&4){try{kr(3,e,e.return),Fo(3,e)}catch(S){K(e,e.return,S)}try{kr(5,e,e.return)}catch(S){K(e,e.return,S)}}break;case 1:Le(t,e),Be(e),r&512&&n!==null&&xn(n,n.return);break;case 5:if(Le(t,e),Be(e),r&512&&n!==null&&xn(n,n.return),e.flags&32){var i=e.stateNode;try{Nr(i,"")}catch(S){K(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&id(i,o),Gs(a,s);var u=Gs(a,o);for(s=0;s<l.length;s+=2){var d=l[s],m=l[s+1];d==="style"?ud(i,m):d==="dangerouslySetInnerHTML"?ad(i,m):d==="children"?Nr(i,m):Ka(i,d,m,u)}switch(a){case"input":Vs(i,o);break;case"textarea":od(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Rn(i,!!o.multiple,g,!1):f!==!!o.multiple&&(o.defaultValue!=null?Rn(i,!!o.multiple,o.defaultValue,!0):Rn(i,!!o.multiple,o.multiple?[]:"",!1))}i[jr]=o}catch(S){K(e,e.return,S)}}break;case 6:if(Le(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(S){K(e,e.return,S)}}break;case 3:if(Le(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(S){K(e,e.return,S)}break;case 4:Le(t,e),Be(e);break;case 13:Le(t,e),Be(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Cl=Q())),r&4&&Qu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(u=ae)||d,Le(t,e),ae=u):Le(t,e),Be(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(k=e,d=e.child;d!==null;){for(m=k=d;k!==null;){switch(f=k,g=f.child,f.tag){case 0:case 11:case 14:case 15:kr(4,f,f.return);break;case 1:xn(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(S){K(r,n,S)}}break;case 5:xn(f,f.return);break;case 22:if(f.memoizedState!==null){qu(m);continue}}g!==null?(g.return=f,k=g):qu(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{i=m.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,l=m.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ld("display",s))}catch(S){K(e,e.return,S)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(S){K(e,e.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Le(t,e),Be(e),r&4&&Qu(e);break;case 21:break;default:Le(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Mf(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Nr(i,""),r.flags&=-33);var o=Gu(e);ka(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Gu(e);Ea(e,a,s);break;default:throw Error(w(161))}}catch(l){K(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rg(e,t,n){k=e,jf(e)}function jf(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var i=k,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ii;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ae;a=Ii;var u=ae;if(Ii=s,(ae=l)&&!u)for(k=i;k!==null;)s=k,l=s.child,s.tag===22&&s.memoizedState!==null?Xu(i):l!==null?(l.return=s,k=l):Xu(i);for(;o!==null;)k=o,jf(o),o=o.sibling;k=i,Ii=a,ae=u}Yu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,k=o):Yu(e)}}function Yu(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Fo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Du(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Du(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&Dr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ae||t.flags&512&&Sa(t)}catch(f){K(t,t.return,f)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function qu(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function Xu(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fo(4,t)}catch(l){K(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){K(t,i,l)}}var o=t.return;try{Sa(t)}catch(l){K(t,o,l)}break;case 5:var s=t.return;try{Sa(t)}catch(l){K(t,s,l)}}}catch(l){K(t,t.return,l)}if(t===e){k=null;break}var a=t.sibling;if(a!==null){a.return=t.return,k=a;break}k=t.return}}var ig=Math.ceil,vo=ht.ReactCurrentDispatcher,kl=ht.ReactCurrentOwner,Ne=ht.ReactCurrentBatchConfig,L=0,ee=null,Y=null,re=0,we=0,Nn=Ft(0),X=0,Wr=null,cn=0,zo=0,Il=0,Ir=null,pe=null,Cl=0,Kn=1/0,qe=null,yo=!1,Ia=null,Ot=null,Ci=!1,Ct=null,wo=0,Cr=0,Ca=null,zi=-1,$i=0;function ce(){return L&6?Q():zi!==-1?zi:zi=Q()}function At(e){return e.mode&1?L&2&&re!==0?re&-re:$m.transition!==null?($i===0&&($i=Sd()),$i):(e=M,e!==0||(e=window.event,e=e===void 0?16:xd(e.type)),e):1}function ze(e,t,n,r){if(50<Cr)throw Cr=0,Ca=null,Error(w(185));qr(e,n,r),(!(L&2)||e!==ee)&&(e===ee&&(!(L&2)&&(zo|=n),X===4&&wt(e,re)),ye(e,r),n===1&&L===0&&!(t.mode&1)&&(Kn=Q()+500,Uo&&zt()))}function ye(e,t){var n=e.callbackNode;$p(e,t);var r=to(e,e===ee?re:0);if(r===0)n!==null&&su(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&su(n),t===1)e.tag===0?zm(Ju.bind(null,e)):Gd(Ju.bind(null,e)),Um(function(){!(L&6)&&zt()}),n=null;else{switch(Ed(r)){case 1:n=Xa;break;case 4:n=wd;break;case 16:n=eo;break;case 536870912:n=_d;break;default:n=eo}n=Kf(n,Ff.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ff(e,t){if(zi=-1,$i=0,L&6)throw Error(w(327));var n=e.callbackNode;if(Mn()&&e.callbackNode!==n)return null;var r=to(e,e===ee?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_o(e,r);else{t=r;var i=L;L|=2;var o=$f();(ee!==e||re!==t)&&(qe=null,Kn=Q()+500,on(e,t));do try{ag();break}catch(a){zf(e,a)}while(!0);cl(),vo.current=o,L=i,Y!==null?t=0:(ee=null,re=0,t=X)}if(t!==0){if(t===2&&(i=Js(e),i!==0&&(r=i,t=Ta(e,i))),t===1)throw n=Wr,on(e,0),wt(e,r),ye(e,Q()),n;if(t===6)wt(e,r);else{if(i=e.current.alternate,!(r&30)&&!og(i)&&(t=_o(e,r),t===2&&(o=Js(e),o!==0&&(r=o,t=Ta(e,o))),t===1))throw n=Wr,on(e,0),wt(e,r),ye(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Xt(e,pe,qe);break;case 3:if(wt(e,r),(r&130023424)===r&&(t=Cl+500-Q(),10<t)){if(to(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=sa(Xt.bind(null,e,pe,qe),t);break}Xt(e,pe,qe);break;case 4:if(wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Fe(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ig(r/1960))-r,10<r){e.timeoutHandle=sa(Xt.bind(null,e,pe,qe),r);break}Xt(e,pe,qe);break;case 5:Xt(e,pe,qe);break;default:throw Error(w(329))}}}return ye(e,Q()),e.callbackNode===n?Ff.bind(null,e):null}function Ta(e,t){var n=Ir;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=_o(e,t),e!==2&&(t=pe,pe=n,t!==null&&Pa(t)),e}function Pa(e){pe===null?pe=e:pe.push.apply(pe,e)}function og(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ve(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wt(e,t){for(t&=~Il,t&=~zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function Ju(e){if(L&6)throw Error(w(327));Mn();var t=to(e,0);if(!(t&1))return ye(e,Q()),null;var n=_o(e,t);if(e.tag!==0&&n===2){var r=Js(e);r!==0&&(t=r,n=Ta(e,r))}if(n===1)throw n=Wr,on(e,0),wt(e,t),ye(e,Q()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xt(e,pe,qe),ye(e,Q()),null}function Tl(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(Kn=Q()+500,Uo&&zt())}}function dn(e){Ct!==null&&Ct.tag===0&&!(L&6)&&Mn();var t=L;L|=1;var n=Ne.transition,r=M;try{if(Ne.transition=null,M=1,e)return e()}finally{M=r,Ne.transition=n,L=t,!(L&6)&&zt()}}function Pl(){we=Nn.current,$(Nn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Mm(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(al(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&so();break;case 3:Wn(),$(ge),$(le),gl();break;case 5:ml(r);break;case 4:Wn();break;case 13:$(B);break;case 19:$(B);break;case 10:dl(r.type._context);break;case 22:case 23:Pl()}n=n.return}if(ee=e,Y=e=Dt(e.current,null),re=we=t,X=0,Wr=null,Il=zo=cn=0,pe=Ir=null,tn!==null){for(t=0;t<tn.length;t++)if(n=tn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}tn=null}return e}function zf(e,t){do{var n=Y;try{if(cl(),bi.current=go,mo){for(var r=W.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}mo=!1}if(un=0,Z=q=W=null,Er=!1,$r=0,kl.current=null,n===null||n.return===null){X=1,Wr=t,Y=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Fu(s);if(g!==null){g.flags&=-257,zu(g,s,a,o,t),g.mode&1&&ju(o,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var S=new Set;S.add(l),t.updateQueue=S}else v.add(l);break e}else{if(!(t&1)){ju(o,u,t),xl();break e}l=Error(w(426))}}else if(V&&a.mode&1){var U=Fu(s);if(U!==null){!(U.flags&65536)&&(U.flags|=256),zu(U,s,a,o,t),ll(Hn(l,a));break e}}o=l=Hn(l,a),X!==4&&(X=2),Ir===null?Ir=[o]:Ir.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=kf(o,l,t);Au(o,h);break e;case 1:a=l;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ot===null||!Ot.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=If(o,a,t);Au(o,y);break e}}o=o.return}while(o!==null)}Bf(n)}catch(E){t=E,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function $f(){var e=vo.current;return vo.current=go,e===null?go:e}function xl(){(X===0||X===3||X===2)&&(X=4),ee===null||!(cn&268435455)&&!(zo&268435455)||wt(ee,re)}function _o(e,t){var n=L;L|=2;var r=$f();(ee!==e||re!==t)&&(qe=null,on(e,t));do try{sg();break}catch(i){zf(e,i)}while(!0);if(cl(),L=n,vo.current=r,Y!==null)throw Error(w(261));return ee=null,re=0,X}function sg(){for(;Y!==null;)Vf(Y)}function ag(){for(;Y!==null&&!Ap();)Vf(Y)}function Vf(e){var t=Hf(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?Bf(e):Y=t,kl.current=null}function Bf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=eg(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(n=Zm(n,t,we),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);X===0&&(X=5)}function Xt(e,t,n){var r=M,i=Ne.transition;try{Ne.transition=null,M=1,lg(e,t,n,r)}finally{Ne.transition=i,M=r}return null}function lg(e,t,n,r){do Mn();while(Ct!==null);if(L&6)throw Error(w(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Vp(e,o),e===ee&&(Y=ee=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ci||(Ci=!0,Kf(eo,function(){return Mn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ne.transition,Ne.transition=null;var s=M;M=1;var a=L;L|=4,kl.current=null,ng(e,n),bf(n,e),xm(ia),no=!!ra,ia=ra=null,e.current=n,rg(n),Dp(),L=a,M=s,Ne.transition=o}else e.current=n;if(Ci&&(Ci=!1,Ct=e,wo=i),o=e.pendingLanes,o===0&&(Ot=null),Up(n.stateNode),ye(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yo)throw yo=!1,e=Ia,Ia=null,e;return wo&1&&e.tag!==0&&Mn(),o=e.pendingLanes,o&1?e===Ca?Cr++:(Cr=0,Ca=e):Cr=0,zt(),null}function Mn(){if(Ct!==null){var e=Ed(wo),t=Ne.transition,n=M;try{if(Ne.transition=null,M=16>e?16:e,Ct===null)var r=!1;else{if(e=Ct,Ct=null,wo=0,L&6)throw Error(w(331));var i=L;for(L|=4,k=e.current;k!==null;){var o=k,s=o.child;if(k.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(k=u;k!==null;){var d=k;switch(d.tag){case 0:case 11:case 15:kr(8,d,o)}var m=d.child;if(m!==null)m.return=d,k=m;else for(;k!==null;){d=k;var f=d.sibling,g=d.return;if(Lf(d),d===u){k=null;break}if(f!==null){f.return=g,k=f;break}k=g}}}var v=o.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var U=S.sibling;S.sibling=null,S=U}while(S!==null)}}k=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,k=s;else e:for(;k!==null;){if(o=k,o.flags&2048)switch(o.tag){case 0:case 11:case 15:kr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,k=h;break e}k=o.return}}var c=e.current;for(k=c;k!==null;){s=k;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,k=p;else e:for(s=c;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fo(9,a)}}catch(E){K(a,a.return,E)}if(a===s){k=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,k=y;break e}k=a.return}}if(L=i,zt(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Oo,e)}catch{}r=!0}return r}finally{M=n,Ne.transition=t}}return!1}function Zu(e,t,n){t=Hn(n,t),t=kf(e,t,1),e=Rt(e,t,1),t=ce(),e!==null&&(qr(e,1,t),ye(e,t))}function K(e,t,n){if(e.tag===3)Zu(e,e,n);else for(;t!==null;){if(t.tag===3){Zu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=Hn(n,e),e=If(t,e,1),t=Rt(t,e,1),e=ce(),t!==null&&(qr(t,1,e),ye(t,e));break}}t=t.return}}function ug(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(re&n)===n&&(X===4||X===3&&(re&130023424)===re&&500>Q()-Cl?on(e,0):Il|=n),ye(e,t)}function Wf(e,t){t===0&&(e.mode&1?(t=mi,mi<<=1,!(mi&130023424)&&(mi=4194304)):t=1);var n=ce();e=lt(e,t),e!==null&&(qr(e,t,n),ye(e,n))}function cg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wf(e,n)}function dg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),Wf(e,n)}var Hf;Hf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Jm(e,t,n);me=!!(e.flags&131072)}else me=!1,V&&t.flags&1048576&&Qd(t,uo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fi(e,t),e=t.pendingProps;var i=$n(t,le.current);Ln(t,n),i=yl(null,t,r,e,i,n);var o=wl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(o=!0,ao(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hl(t),i.updater=jo,t.stateNode=i,i._reactInternals=t,ha(t,r,e,n),t=ga(null,t,r,!0,o,n)):(t.tag=0,V&&o&&sl(t),ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=hg(r),e=Me(r,e),i){case 0:t=ma(null,t,r,e,n);break e;case 1:t=Bu(null,t,r,e,n);break e;case 11:t=$u(null,t,r,e,n);break e;case 14:t=Vu(null,t,r,Me(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),ma(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Bu(e,t,r,i,n);case 3:e:{if(xf(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ef(e,t),ho(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Hn(Error(w(423)),t),t=Wu(e,t,r,n,i);break e}else if(r!==i){i=Hn(Error(w(424)),t),t=Wu(e,t,r,n,i);break e}else for(_e=Nt(t.stateNode.containerInfo.firstChild),Ee=t,V=!0,be=null,n=Jd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vn(),r===i){t=ut(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return tf(t),e===null&&ca(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,oa(r,i)?s=null:o!==null&&oa(r,o)&&(t.flags|=32),Pf(e,t),ue(e,t,s,n),t.child;case 6:return e===null&&ca(t),null;case 13:return Nf(e,t,n);case 4:return pl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Bn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),$u(e,t,r,i,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,j(co,r._currentValue),r._currentValue=s,o!==null)if(Ve(o.value,s)){if(o.children===i.children&&!ge.current){t=ut(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=it(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),da(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(w(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),da(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ln(t,n),i=Re(i),r=r(i),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,i=Me(r,t.pendingProps),i=Me(r.type,i),Vu(e,t,r,i,n);case 15:return Cf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Fi(e,t),t.tag=1,ve(r)?(e=!0,ao(t)):e=!1,Ln(t,n),Ef(t,r,i),ha(t,r,i,n),ga(null,t,r,!0,e,n);case 19:return Rf(e,t,n);case 22:return Tf(e,t,n)}throw Error(w(156,t.tag))};function Kf(e,t){return yd(e,t)}function fg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(e,t,n,r){return new fg(e,t,n,r)}function Nl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hg(e){if(typeof e=="function")return Nl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qa)return 11;if(e===Ya)return 14}return 2}function Dt(e,t){var n=e.alternate;return n===null?(n=xe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vi(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Nl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case wn:return sn(n.children,i,o,t);case Ga:s=8,i|=8;break;case bs:return e=xe(12,n,t,i|2),e.elementType=bs,e.lanes=o,e;case js:return e=xe(13,n,t,i),e.elementType=js,e.lanes=o,e;case Fs:return e=xe(19,n,t,i),e.elementType=Fs,e.lanes=o,e;case td:return $o(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zc:s=10;break e;case ed:s=9;break e;case Qa:s=11;break e;case Ya:s=14;break e;case gt:s=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=xe(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function sn(e,t,n,r){return e=xe(7,e,r,t),e.lanes=n,e}function $o(e,t,n,r){return e=xe(22,e,r,t),e.elementType=td,e.lanes=n,e.stateNode={isHidden:!1},e}function ks(e,t,n){return e=xe(6,e,null,t),e.lanes=n,e}function Is(e,t,n){return t=xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=is(0),this.expirationTimes=is(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=is(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rl(e,t,n,r,i,o,s,a,l){return e=new pg(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=xe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hl(o),e}function mg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Gf(e){if(!e)return bt;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ve(n))return Kd(e,n,t)}return t}function Qf(e,t,n,r,i,o,s,a,l){return e=Rl(n,r,!0,e,i,o,s,a,l),e.context=Gf(null),n=e.current,r=ce(),i=At(n),o=it(r,i),o.callback=t??null,Rt(n,o,i),e.current.lanes=i,qr(e,i,r),ye(e,r),e}function Vo(e,t,n,r){var i=t.current,o=ce(),s=At(i);return n=Gf(n),t.context===null?t.context=n:t.pendingContext=n,t=it(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rt(i,t,s),e!==null&&(ze(e,i,s,o),Ui(e,i,s)),s}function So(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ec(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ol(e,t){ec(e,t),(e=e.alternate)&&ec(e,t)}function gg(){return null}var Yf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Al(e){this._internalRoot=e}Bo.prototype.render=Al.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Vo(e,t,null,null)};Bo.prototype.unmount=Al.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){Vo(null,e,null,null)}),t[at]=null}};function Bo(e){this._internalRoot=e}Bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yt.length&&t!==0&&t<yt[n].priority;n++);yt.splice(n,0,e),n===0&&Pd(e)}};function Dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tc(){}function vg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=So(s);o.call(u)}}var s=Qf(t,r,e,0,null,!1,!1,"",tc);return e._reactRootContainer=s,e[at]=s.current,Ur(e.nodeType===8?e.parentNode:e),dn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=So(l);a.call(u)}}var l=Rl(e,0,!1,null,null,!1,!1,"",tc);return e._reactRootContainer=l,e[at]=l.current,Ur(e.nodeType===8?e.parentNode:e),dn(function(){Vo(t,l,n,r)}),l}function Ho(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=So(s);a.call(l)}}Vo(t,s,e,i)}else s=vg(n,t,e,i,r);return So(s)}kd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hr(t.pendingLanes);n!==0&&(Ja(t,n|1),ye(t,Q()),!(L&6)&&(Kn=Q()+500,zt()))}break;case 13:dn(function(){var r=lt(e,1);if(r!==null){var i=ce();ze(r,e,1,i)}}),Ol(e,1)}};Za=function(e){if(e.tag===13){var t=lt(e,134217728);if(t!==null){var n=ce();ze(t,e,134217728,n)}Ol(e,134217728)}};Id=function(e){if(e.tag===13){var t=At(e),n=lt(e,t);if(n!==null){var r=ce();ze(n,e,t,r)}Ol(e,t)}};Cd=function(){return M};Td=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Ys=function(e,t,n){switch(t){case"input":if(Vs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Mo(r);if(!i)throw Error(w(90));rd(r),Vs(r,i)}}}break;case"textarea":od(e,n);break;case"select":t=n.value,t!=null&&Rn(e,!!n.multiple,t,!1)}};fd=Tl;hd=dn;var yg={usingClientEntryPoint:!1,Events:[Jr,kn,Mo,cd,dd,Tl]},ar={findFiberByHostInstance:en,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wg={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gd(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||gg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ti=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ti.isDisabled&&Ti.supportsFiber)try{Oo=Ti.inject(wg),Ke=Ti}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yg;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dl(t))throw Error(w(200));return mg(e,t,null,n)};Ie.createRoot=function(e,t){if(!Dl(e))throw Error(w(299));var n=!1,r="",i=Yf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Rl(e,1,!1,null,null,n,!1,r,i),e[at]=t.current,Ur(e.nodeType===8?e.parentNode:e),new Al(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=gd(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return dn(e)};Ie.hydrate=function(e,t,n){if(!Wo(t))throw Error(w(200));return Ho(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!Dl(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Yf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Qf(t,null,e,1,n??null,i,!1,o,s),e[at]=t.current,Ur(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Bo(t)};Ie.render=function(e,t,n){if(!Wo(t))throw Error(w(200));return Ho(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!Wo(e))throw Error(w(40));return e._reactRootContainer?(dn(function(){Ho(null,null,e,!1,function(){e._reactRootContainer=null,e[at]=null})}),!0):!1};Ie.unstable_batchedUpdates=Tl;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wo(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Ho(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function qf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qf)}catch(e){console.error(e)}}qf(),Yc.exports=Ie;var _g=Yc.exports,Xf,nc=_g;Xf=nc.createRoot,nc.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Sg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),$t=(e,t)=>{const n=N.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:a="",children:l,...u},d)=>N.createElement("svg",{ref:d,...Sg,width:i,height:i,stroke:r,strokeWidth:s?Number(o)*24/Number(i):o,className:["lucide",`lucide-${Eg(e)}`,a].join(" "),...u},[...t.map(([m,f])=>N.createElement(m,f)),...Array.isArray(l)?l:[l]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=$t("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=$t("Ghost",[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=$t("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=$t("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=$t("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=$t("ThumbsDown",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",key:"s6e0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=$t("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",key:"y3tblf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=$t("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);let Rg={data:""},Og=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Rg,Ag=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Dg=/\/\*[^]*?\*\/|  +/g,rc=/\n+/g,_t=(e,t)=>{let n="",r="",i="";for(let o in e){let s=e[o];o[0]=="@"?o[1]=="i"?n=o+" "+s+";":r+=o[1]=="f"?_t(s,o):o+"{"+_t(s,o[1]=="k"?"":t)+"}":typeof s=="object"?r+=_t(s,t?t.replace(/([^,])+/g,a=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):o):s!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=_t.p?_t.p(o,s):o+":"+s+";")}return n+(t&&i?t+"{"+i+"}":i)+r},Ye={},Jf=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Jf(e[n]);return t}return e},Lg=(e,t,n,r,i)=>{let o=Jf(e),s=Ye[o]||(Ye[o]=(l=>{let u=0,d=11;for(;u<l.length;)d=101*d+l.charCodeAt(u++)>>>0;return"go"+d})(o));if(!Ye[s]){let l=o!==e?e:(u=>{let d,m,f=[{}];for(;d=Ag.exec(u.replace(Dg,""));)d[4]?f.shift():d[3]?(m=d[3].replace(rc," ").trim(),f.unshift(f[0][m]=f[0][m]||{})):f[0][d[1]]=d[2].replace(rc," ").trim();return f[0]})(e);Ye[s]=_t(i?{["@keyframes "+s]:l}:l,n?"":"."+s)}let a=n&&Ye.g?Ye.g:null;return n&&(Ye.g=Ye[s]),((l,u,d,m)=>{m?u.data=u.data.replace(m,l):u.data.indexOf(l)===-1&&(u.data=d?l+u.data:u.data+l)})(Ye[s],t,r,a),s},Mg=(e,t,n)=>e.reduce((r,i,o)=>{let s=t[o];if(s&&s.call){let a=s(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;s=l?"."+l:a&&typeof a=="object"?a.props?"":_t(a,""):a===!1?"":a}return r+i+(s??"")},"");function Ko(e){let t=this||{},n=e.call?e(t.p):e;return Lg(n.unshift?n.raw?Mg(n,[].slice.call(arguments,1),t.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(t.p):i),{}):n,Og(t.target),t.g,t.o,t.k)}let Zf,xa,Na;Ko.bind({g:1});let ct=Ko.bind({k:1});function Ug(e,t,n,r){_t.p=t,Zf=e,xa=n,Na=r}function Vt(e,t){let n=this||{};return function(){let r=arguments;function i(o,s){let a=Object.assign({},o),l=a.className||i.className;n.p=Object.assign({theme:xa&&xa()},a),n.o=/ *go\d+/.test(l),a.className=Ko.apply(n,r)+(l?" "+l:"");let u=e;return e[0]&&(u=a.as||e,delete a.as),Na&&u[0]&&Na(a),Zf(u,a)}return i}}var bg=e=>typeof e=="function",Eo=(e,t)=>bg(e)?e(t):e,jg=(()=>{let e=0;return()=>(++e).toString()})(),eh=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Fg=20,Bi=new Map,zg=1e3,ic=e=>{if(Bi.has(e))return;let t=setTimeout(()=>{Bi.delete(e),gn({type:4,toastId:e})},zg);Bi.set(e,t)},$g=e=>{let t=Bi.get(e);t&&clearTimeout(t)},Ra=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Fg)};case 1:return t.toast.id&&$g(t.toast.id),{...e,toasts:e.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case 2:let{toast:n}=t;return e.toasts.find(o=>o.id===n.id)?Ra(e,{type:1,toast:n}):Ra(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?ic(r):e.toasts.forEach(o=>{ic(o.id)}),{...e,toasts:e.toasts.map(o=>o.id===r||r===void 0?{...o,visible:!1}:o)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(o=>o.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},Wi=[],Hi={toasts:[],pausedAt:void 0},gn=e=>{Hi=Ra(Hi,e),Wi.forEach(t=>{t(Hi)})},Vg={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Bg=(e={})=>{let[t,n]=N.useState(Hi);N.useEffect(()=>(Wi.push(n),()=>{let i=Wi.indexOf(n);i>-1&&Wi.splice(i,1)}),[t]);let r=t.toasts.map(i=>{var o,s;return{...e,...e[i.type],...i,duration:i.duration||((o=e[i.type])==null?void 0:o.duration)||(e==null?void 0:e.duration)||Vg[i.type],style:{...e.style,...(s=e[i.type])==null?void 0:s.style,...i.style}}});return{...t,toasts:r}},Wg=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(n==null?void 0:n.id)||jg()}),ei=e=>(t,n)=>{let r=Wg(t,e,n);return gn({type:2,toast:r}),r.id},Se=(e,t)=>ei("blank")(e,t);Se.error=ei("error");Se.success=ei("success");Se.loading=ei("loading");Se.custom=ei("custom");Se.dismiss=e=>{gn({type:3,toastId:e})};Se.remove=e=>gn({type:4,toastId:e});Se.promise=(e,t,n)=>{let r=Se.loading(t.loading,{...n,...n==null?void 0:n.loading});return e.then(i=>(Se.success(Eo(t.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{Se.error(Eo(t.error,i),{id:r,...n,...n==null?void 0:n.error})}),e};var Hg=(e,t)=>{gn({type:1,toast:{id:e,height:t}})},Kg=()=>{gn({type:5,time:Date.now()})},Gg=e=>{let{toasts:t,pausedAt:n}=Bg(e);N.useEffect(()=>{if(n)return;let o=Date.now(),s=t.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(o-a.createdAt);if(l<0){a.visible&&Se.dismiss(a.id);return}return setTimeout(()=>Se.dismiss(a.id),l)});return()=>{s.forEach(a=>a&&clearTimeout(a))}},[t,n]);let r=N.useCallback(()=>{n&&gn({type:6,time:Date.now()})},[n]),i=N.useCallback((o,s)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:u}=s||{},d=t.filter(g=>(g.position||u)===(o.position||u)&&g.height),m=d.findIndex(g=>g.id===o.id),f=d.filter((g,v)=>v<m&&g.visible).length;return d.filter(g=>g.visible).slice(...a?[f+1]:[0,f]).reduce((g,v)=>g+(v.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:Hg,startPause:Kg,endPause:r,calculateOffset:i}}},Qg=ct`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Yg=ct`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,qg=ct`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Xg=Vt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Qg} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Yg} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${qg} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Jg=ct`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Zg=Vt("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Jg} 1s linear infinite;
`,ev=ct`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,tv=ct`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,nv=Vt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ev} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${tv} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,rv=Vt("div")`
  position: absolute;
`,iv=Vt("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ov=ct`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,sv=Vt("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ov} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,av=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return t!==void 0?typeof t=="string"?N.createElement(sv,null,t):t:n==="blank"?null:N.createElement(iv,null,N.createElement(Zg,{...r}),n!=="loading"&&N.createElement(rv,null,n==="error"?N.createElement(Xg,{...r}):N.createElement(nv,{...r})))},lv=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,uv=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,cv="0%{opacity:0;} 100%{opacity:1;}",dv="0%{opacity:1;} 100%{opacity:0;}",fv=Vt("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,hv=Vt("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,pv=(e,t)=>{let n=e.includes("top")?1:-1,[r,i]=eh()?[cv,dv]:[lv(n),uv(n)];return{animation:t?`${ct(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${ct(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},mv=N.memo(({toast:e,position:t,style:n,children:r})=>{let i=e.height?pv(e.position||t||"top-center",e.visible):{opacity:0},o=N.createElement(av,{toast:e}),s=N.createElement(hv,{...e.ariaProps},Eo(e.message,e));return N.createElement(fv,{className:e.className,style:{...i,...n,...e.style}},typeof r=="function"?r({icon:o,message:s}):N.createElement(N.Fragment,null,o,s))});Ug(N.createElement);var gv=({id:e,className:t,style:n,onHeightUpdate:r,children:i})=>{let o=N.useCallback(s=>{if(s){let a=()=>{let l=s.getBoundingClientRect().height;r(e,l)};a(),new MutationObserver(a).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return N.createElement("div",{ref:o,className:t,style:n},i)},vv=(e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:eh()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...i}},yv=Ko`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Pi=16,wv=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:r,children:i,containerStyle:o,containerClassName:s})=>{let{toasts:a,handlers:l}=Gg(n);return N.createElement("div",{style:{position:"fixed",zIndex:9999,top:Pi,left:Pi,right:Pi,bottom:Pi,pointerEvents:"none",...o},className:s,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(u=>{let d=u.position||t,m=l.calculateOffset(u,{reverseOrder:e,gutter:r,defaultPosition:t}),f=vv(d,m);return N.createElement(gv,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?yv:"",style:f},u.type==="custom"?Eo(u.message,u):i?i(u):N.createElement(mv,{toast:u,position:d}))}))},Zt=Se;function ne(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function _v(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}const xi=43200,oc=1440;let Sv={};function Ev(){return Sv}function sc(e){const t=ne(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Ki(e,t){const n=ne(e),r=ne(t),i=n.getTime()-r.getTime();return i<0?-1:i>0?1:i}function kv(e){return _v(e,Date.now())}function Iv(e,t){const n=ne(e),r=ne(t),i=n.getFullYear()-r.getFullYear(),o=n.getMonth()-r.getMonth();return i*12+o}function Cv(e){return t=>{const r=(e?Math[e]:Math.trunc)(t);return r===0?0:r}}function Tv(e,t){return+ne(e)-+ne(t)}function Pv(e){const t=ne(e);return t.setHours(23,59,59,999),t}function xv(e){const t=ne(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function Nv(e){const t=ne(e);return+Pv(t)==+xv(t)}function Rv(e,t){const n=ne(e),r=ne(t),i=Ki(n,r),o=Math.abs(Iv(n,r));let s;if(o<1)s=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-i*o);let a=Ki(n,r)===-i;Nv(ne(e))&&o===1&&Ki(e,r)===1&&(a=!1),s=i*(o-Number(a))}return s===0?0:s}function Ov(e,t,n){const r=Tv(e,t)/1e3;return Cv(n==null?void 0:n.roundingMethod)(r)}const Av={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Dv=(e,t,n)=>{let r;const i=Av[e];return typeof i=="string"?r=i:t===1?r=i.one:r=i.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Ts(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Lv={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Mv={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Uv={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},bv={date:Ts({formats:Lv,defaultWidth:"full"}),time:Ts({formats:Mv,defaultWidth:"full"}),dateTime:Ts({formats:Uv,defaultWidth:"full"})},jv={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Fv=(e,t,n,r)=>jv[e];function lr(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let i;if(r==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,a=n!=null&&n.width?String(n.width):s;i=e.formattingValues[a]||e.formattingValues[s]}else{const s=e.defaultWidth,a=n!=null&&n.width?String(n.width):e.defaultWidth;i=e.values[a]||e.values[s]}const o=e.argumentCallback?e.argumentCallback(t):t;return i[o]}}const zv={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},$v={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Vv={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Bv={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Wv={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Hv={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Kv=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Gv={ordinalNumber:Kv,era:lr({values:zv,defaultWidth:"wide"}),quarter:lr({values:$v,defaultWidth:"wide",argumentCallback:e=>e-1}),month:lr({values:Vv,defaultWidth:"wide"}),day:lr({values:Bv,defaultWidth:"wide"}),dayPeriod:lr({values:Wv,defaultWidth:"wide",formattingValues:Hv,defaultFormattingWidth:"wide"})};function ur(e){return(t,n={})=>{const r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(i);if(!o)return null;const s=o[0],a=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(a)?Yv(a,m=>m.test(s)):Qv(a,m=>m.test(s));let u;u=e.valueCallback?e.valueCallback(l):l,u=n.valueCallback?n.valueCallback(u):u;const d=t.slice(s.length);return{value:u,rest:d}}}function Qv(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Yv(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function qv(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const i=r[0],o=t.match(e.parsePattern);if(!o)return null;let s=e.valueCallback?e.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;const a=t.slice(i.length);return{value:s,rest:a}}}const Xv=/^(\d+)(th|st|nd|rd)?/i,Jv=/\d+/i,Zv={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ey={any:[/^b/i,/^(a|c)/i]},ty={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ny={any:[/1/i,/2/i,/3/i,/4/i]},ry={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},iy={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},oy={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},sy={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ay={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ly={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},uy={ordinalNumber:qv({matchPattern:Xv,parsePattern:Jv,valueCallback:e=>parseInt(e,10)}),era:ur({matchPatterns:Zv,defaultMatchWidth:"wide",parsePatterns:ey,defaultParseWidth:"any"}),quarter:ur({matchPatterns:ty,defaultMatchWidth:"wide",parsePatterns:ny,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ur({matchPatterns:ry,defaultMatchWidth:"wide",parsePatterns:iy,defaultParseWidth:"any"}),day:ur({matchPatterns:oy,defaultMatchWidth:"wide",parsePatterns:sy,defaultParseWidth:"any"}),dayPeriod:ur({matchPatterns:ay,defaultMatchWidth:"any",parsePatterns:ly,defaultParseWidth:"any"})},cy={code:"en-US",formatDistance:Dv,formatLong:bv,formatRelative:Fv,localize:Gv,match:uy,options:{weekStartsOn:0,firstWeekContainsDate:1}};function dy(e,t,n){const r=Ev(),i=(n==null?void 0:n.locale)??r.locale??cy,o=2520,s=Ki(e,t);if(isNaN(s))throw new RangeError("Invalid time value");const a=Object.assign({},n,{addSuffix:n==null?void 0:n.addSuffix,comparison:s});let l,u;s>0?(l=ne(t),u=ne(e)):(l=ne(e),u=ne(t));const d=Ov(u,l),m=(sc(u)-sc(l))/1e3,f=Math.round((d-m)/60);let g;if(f<2)return n!=null&&n.includeSeconds?d<5?i.formatDistance("lessThanXSeconds",5,a):d<10?i.formatDistance("lessThanXSeconds",10,a):d<20?i.formatDistance("lessThanXSeconds",20,a):d<40?i.formatDistance("halfAMinute",0,a):d<60?i.formatDistance("lessThanXMinutes",1,a):i.formatDistance("xMinutes",1,a):f===0?i.formatDistance("lessThanXMinutes",1,a):i.formatDistance("xMinutes",f,a);if(f<45)return i.formatDistance("xMinutes",f,a);if(f<90)return i.formatDistance("aboutXHours",1,a);if(f<oc){const v=Math.round(f/60);return i.formatDistance("aboutXHours",v,a)}else{if(f<o)return i.formatDistance("xDays",1,a);if(f<xi){const v=Math.round(f/oc);return i.formatDistance("xDays",v,a)}else if(f<xi*2)return g=Math.round(f/xi),i.formatDistance("aboutXMonths",g,a)}if(g=Rv(u,l),g<12){const v=Math.round(f/xi);return i.formatDistance("xMonths",v,a)}else{const v=g%12,S=Math.trunc(g/12);return v<3?i.formatDistance("aboutXYears",S,a):v<9?i.formatDistance("overXYears",S,a):i.formatDistance("almostXYears",S+1,a)}}function fy(e,t){return dy(e,kv(e),t)}function hy({company:e,onVote:t,onComment:n}){return _.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow",children:[_.jsxs("div",{className:"flex items-start justify-between",children:[_.jsxs("div",{children:[_.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:e.name}),_.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:["Reported ",fy(new Date(e.created_at),{addSuffix:!0})]})]}),_.jsx(kg,{className:"text-red-500 h-5 w-5"})]}),_.jsx("p",{className:"mt-3 text-gray-700",children:e.description}),_.jsxs("div",{className:"mt-4 flex items-center space-x-4",children:[_.jsxs("div",{className:"flex items-center space-x-2",children:[_.jsx("button",{onClick:()=>t(e.id,1),className:`p-1 rounded hover:bg-gray-100 ${e.userVote===1?"text-green-600":"text-gray-600"}`,children:_.jsx(xg,{className:`h-5 w-5 ${e.userVote===1?"fill-green-600":""}`})}),_.jsx("span",{className:`font-medium ${e.votes>0?"text-green-600":e.votes<0?"text-red-600":"text-gray-600"}`,children:e.votes}),_.jsx("button",{onClick:()=>t(e.id,-1),className:`p-1 rounded hover:bg-gray-100 ${e.userVote===-1?"text-red-600":"text-gray-600"}`,children:_.jsx(Pg,{className:`h-5 w-5 ${e.userVote===-1?"fill-red-600":""}`})})]}),_.jsxs("button",{onClick:()=>n(e.id),className:"flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors",children:[_.jsx(Cg,{className:"h-5 w-5"}),_.jsx("span",{children:e.comments})]}),_.jsx("span",{className:"text-sm text-gray-500",children:e.location})]})]})}const Ps="ghost-guard-companies",Ni="ghost-guard-votes";function cr(e,t){const n=localStorage.getItem(e);return n?JSON.parse(n):t}function ac(e,t){localStorage.setItem(e,JSON.stringify(t))}class th{getCompanies(){return cr(Ps,[]).map(n=>({...n,votes:this.getVoteCount(n.id)}))}addCompany(t){const n=cr(Ps,[]),r={...t,id:crypto.randomUUID(),votes:0,comments:0,created_at:new Date().toISOString()};return n.push(r),ac(Ps,n),r}getVoteCount(t){const n=cr(Ni,[]);return n.filter(r=>r.companyId===t&&r.value===1).length-n.filter(r=>r.companyId===t&&r.value===-1).length}vote(t,n,r){const o=cr(Ni,[]).filter(s=>!(s.companyId===t&&s.userId===n));return o.push({id:crypto.randomUUID(),companyId:t,userId:n,value:r,createdAt:new Date().toISOString()}),ac(Ni,o),!0}getUserVote(t,n){const i=cr(Ni,[]).find(o=>o.companyId===t&&o.userId===n);return i?i.value:0}}const py=new th;function my({onSubmit:e,user:t,onAuthRequired:n}){const[r,i]=N.useState(!1),[o,s]=N.useState({name:"",description:"",location:""}),a=async u=>{if(u.preventDefault(),!t){n();return}try{py.addCompany(o),Zt.success("Company reported successfully!"),i(!1),s({name:"",description:"",location:""}),e()}catch(d){Zt.error("Failed to submit report"),console.error("Error submitting report:",d)}},l=()=>{if(!t){n();return}i(!0)};return _.jsx("div",{className:"mb-8",children:r?_.jsxs("form",{onSubmit:a,className:"bg-white rounded-lg shadow-md p-6",children:[_.jsxs("div",{className:"space-y-4",children:[_.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Company Name"}),_.jsx("input",{type:"text",required:!0,value:o.name,onChange:u=>s(d=>({...d,name:u.target.value})),className:"mt-1 block w-full"})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"What Happened?"}),_.jsx("textarea",{required:!0,value:o.description,onChange:u=>s(d=>({...d,description:u.target.value})),rows:3,className:"mt-1 block w-full"})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Location"}),_.jsx("input",{type:"text",value:o.location,onChange:u=>s(d=>({...d,location:u.target.value})),className:"mt-1 block w-full"})]})]}),_.jsxs("div",{className:"mt-4 flex justify-end space-x-3",children:[_.jsx("button",{type:"button",onClick:()=>i(!1),className:"px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900",children:"Cancel"}),_.jsx("button",{type:"submit",className:"px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500",children:"Submit Report"})]})]}):_.jsxs("button",{onClick:l,className:"w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg py-3 px-4 flex items-center justify-center space-x-2 hover:from-purple-700 hover:to-blue-700 transition-all",children:[_.jsx(Tg,{className:"h-5 w-5"}),_.jsx("span",{children:"Report a Company"})]})})}var lc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},gy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},rh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=o>>2,m=(o&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(f=64)),r.push(n[d],n[m],n[f],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(nh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):gy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const m=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||m==null)throw new vy;const f=o<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),m!==64){const v=u<<6&192|m;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class vy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yy=function(e){const t=nh(e);return rh.encodeByteArray(t,!0)},ih=function(e){return yy(e).replace(/\./g,"")},oh=function(e){try{return rh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=()=>wy().__FIREBASE_DEFAULTS__,Sy=()=>{if(typeof process>"u"||typeof lc>"u")return;const e=lc.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ey=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&oh(e[1]);return t&&JSON.parse(t)},Ll=()=>{try{return _y()||Sy()||Ey()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ky=e=>{var t,n;return(n=(t=Ll())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},sh=()=>{var e;return(e=Ll())===null||e===void 0?void 0:e.config},ah=e=>{var t;return(t=Ll())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function Ty(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Py(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function xy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ny(){const e=de();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ry(){try{return typeof indexedDB=="object"}catch{return!1}}function Oy(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="FirebaseError";class Bt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ay,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ti.prototype.create)}}class ti{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Dy(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Bt(i,a,r)}}function Dy(e,t){return e.replace(Ly,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Ly=/\{\$([^}]+)}/g;function My(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ko(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(uc(o)&&uc(s)){if(!ko(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function uc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function mr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function gr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Uy(e,t){const n=new by(e,t);return n.subscribe.bind(n)}class by{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jy(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=xs),i.error===void 0&&(i.error=xs),i.complete===void 0&&(i.complete=xs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jy(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function xs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e){return e&&e._delegate?e._delegate:e}class Gn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Iy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($y(t))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Jt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Jt){return this.instances.has(t)}getOptions(t=Jt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zy(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Jt){return this.component?this.component.multipleInstances?t:Jt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zy(e){return e===Jt?void 0:e}function $y(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Fy(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(b||(b={}));const By={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},Wy=b.INFO,Hy={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},Ky=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Hy[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class lh{constructor(t){this.name=t,this._logLevel=Wy,this._logHandler=Ky,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in b))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?By[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...t),this._logHandler(this,b.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...t),this._logHandler(this,b.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,b.INFO,...t),this._logHandler(this,b.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,b.WARN,...t),this._logHandler(this,b.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...t),this._logHandler(this,b.ERROR,...t)}}const Gy=(e,t)=>t.some(n=>e instanceof n);let cc,dc;function Qy(){return cc||(cc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yy(){return dc||(dc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uh=new WeakMap,Oa=new WeakMap,ch=new WeakMap,Ns=new WeakMap,Ml=new WeakMap;function qy(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Lt(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&uh.set(n,e)}).catch(()=>{}),Ml.set(t,e),t}function Xy(e){if(Oa.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Oa.set(e,t)}let Aa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Oa.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ch.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Jy(e){Aa=e(Aa)}function Zy(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Rs(this),t,...n);return ch.set(r,t.sort?t.sort():[t]),Lt(r)}:Yy().includes(e)?function(...t){return e.apply(Rs(this),t),Lt(uh.get(this))}:function(...t){return Lt(e.apply(Rs(this),t))}}function e0(e){return typeof e=="function"?Zy(e):(e instanceof IDBTransaction&&Xy(e),Gy(e,Qy())?new Proxy(e,Aa):e)}function Lt(e){if(e instanceof IDBRequest)return qy(e);if(Ns.has(e))return Ns.get(e);const t=e0(e);return t!==e&&(Ns.set(e,t),Ml.set(t,e)),t}const Rs=e=>Ml.get(e);function t0(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Lt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Lt(s.result),l.oldVersion,l.newVersion,Lt(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const n0=["get","getKey","getAll","getAllKeys","count"],r0=["put","add","delete","clear"],Os=new Map;function fc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Os.get(t))return Os.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=r0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||n0.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Os.set(t,o),o}Jy(e=>({...e,get:(t,n,r)=>fc(t,n)||e.get(t,n,r),has:(t,n)=>!!fc(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(o0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function o0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Da="@firebase/app",hc="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=new lh("@firebase/app"),s0="@firebase/app-compat",a0="@firebase/analytics-compat",l0="@firebase/analytics",u0="@firebase/app-check-compat",c0="@firebase/app-check",d0="@firebase/auth",f0="@firebase/auth-compat",h0="@firebase/database",p0="@firebase/data-connect",m0="@firebase/database-compat",g0="@firebase/functions",v0="@firebase/functions-compat",y0="@firebase/installations",w0="@firebase/installations-compat",_0="@firebase/messaging",S0="@firebase/messaging-compat",E0="@firebase/performance",k0="@firebase/performance-compat",I0="@firebase/remote-config",C0="@firebase/remote-config-compat",T0="@firebase/storage",P0="@firebase/storage-compat",x0="@firebase/firestore",N0="@firebase/vertexai-preview",R0="@firebase/firestore-compat",O0="firebase",A0="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="[DEFAULT]",D0={[Da]:"fire-core",[s0]:"fire-core-compat",[l0]:"fire-analytics",[a0]:"fire-analytics-compat",[c0]:"fire-app-check",[u0]:"fire-app-check-compat",[d0]:"fire-auth",[f0]:"fire-auth-compat",[h0]:"fire-rtdb",[p0]:"fire-data-connect",[m0]:"fire-rtdb-compat",[g0]:"fire-fn",[v0]:"fire-fn-compat",[y0]:"fire-iid",[w0]:"fire-iid-compat",[_0]:"fire-fcm",[S0]:"fire-fcm-compat",[E0]:"fire-perf",[k0]:"fire-perf-compat",[I0]:"fire-rc",[C0]:"fire-rc-compat",[T0]:"fire-gcs",[P0]:"fire-gcs-compat",[x0]:"fire-fst",[R0]:"fire-fst-compat",[N0]:"fire-vertex","fire-js":"fire-js",[O0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new Map,L0=new Map,Ma=new Map;function pc(e,t){try{e.container.addComponent(t)}catch(n){dt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Hr(e){const t=e.name;if(Ma.has(t))return dt.debug(`There were multiple attempts to register component ${t}.`),!1;Ma.set(t,e);for(const n of Io.values())pc(n,e);for(const n of L0.values())pc(n,e);return!0}function dh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function je(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mt=new ti("app","Firebase",M0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=A0;function fh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:La,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Mt.create("bad-app-name",{appName:String(i)});if(n||(n=sh()),!n)throw Mt.create("no-options");const o=Io.get(i);if(o){if(ko(n,o.options)&&ko(r,o.config))return o;throw Mt.create("duplicate-app",{appName:i})}const s=new Vy(i);for(const l of Ma.values())s.addComponent(l);const a=new U0(n,r,s);return Io.set(i,a),a}function b0(e=La){const t=Io.get(e);if(!t&&e===La&&sh())return fh();if(!t)throw Mt.create("no-app",{appName:e});return t}function Un(e,t,n){var r;let i=(r=D0[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),dt.warn(a.join(" "));return}Hr(new Gn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="firebase-heartbeat-database",F0=1,Kr="firebase-heartbeat-store";let As=null;function hh(){return As||(As=t0(j0,F0,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Kr)}catch(n){console.warn(n)}}}}).catch(e=>{throw Mt.create("idb-open",{originalErrorMessage:e.message})})),As}async function z0(e){try{const n=(await hh()).transaction(Kr),r=await n.objectStore(Kr).get(ph(e));return await n.done,r}catch(t){if(t instanceof Bt)dt.warn(t.message);else{const n=Mt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});dt.warn(n.message)}}}async function mc(e,t){try{const r=(await hh()).transaction(Kr,"readwrite");await r.objectStore(Kr).put(t,ph(e)),await r.done}catch(n){if(n instanceof Bt)dt.warn(n.message);else{const r=Mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dt.warn(r.message)}}}function ph(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=1024,V0=30*24*60*60*1e3;class B0{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new H0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=gc();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=V0}),this._storage.overwrite(this._heartbeatsCache))}catch(r){dt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gc(),{heartbeatsToSend:r,unsentEntries:i}=W0(this._heartbeatsCache.heartbeats),o=ih(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return dt.warn(n),""}}}function gc(){return new Date().toISOString().substring(0,10)}function W0(e,t=$0){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),vc(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class H0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ry()?Oy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await z0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function vc(e){return ih(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(e){Hr(new Gn("platform-logger",t=>new i0(t),"PRIVATE")),Hr(new Gn("heartbeat",t=>new B0(t),"PRIVATE")),Un(Da,hc,e),Un(Da,hc,"esm2017"),Un("fire-js","")}K0("");function Ul(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function mh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const G0=mh,gh=new ti("auth","Firebase",mh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new lh("@firebase/auth");function Q0(e,...t){Co.logLevel<=b.WARN&&Co.warn(`Auth (${ri}): ${e}`,...t)}function Gi(e,...t){Co.logLevel<=b.ERROR&&Co.error(`Auth (${ri}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e,...t){throw jl(e,...t)}function $e(e,...t){return jl(e,...t)}function bl(e,t,n){const r=Object.assign(Object.assign({},G0()),{[t]:n});return new ti("auth","Firebase",r).create(t,{appName:e.name})}function ot(e){return bl(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Y0(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Ae(e,"argument-error"),bl(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jl(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return gh.create(e,...t)}function x(e,t,...n){if(!e)throw jl(t,...n)}function tt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Gi(t),new Error(t)}function ft(e,t){e||tt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function q0(){return yc()==="http:"||yc()==="https:"}function yc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(q0()||Py()||"connection"in navigator)?navigator.onLine:!0}function J0(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,n){this.shortDelay=t,this.longDelay=n,ft(n>t,"Short delay should be less than long delay!"),this.isMobile=Cy()||xy()}get(){return X0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(e,t){ft(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=new ii(3e4,6e4);function Ht(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Kt(e,t,n,r,i={}){return yh(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=ni(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},o);return Ty()||(u.referrerPolicy="no-referrer"),vh.fetch()(wh(e,e.config.apiHost,n,a),u)})}async function yh(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Z0),t);try{const i=new n1(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Ri(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ri(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Ri(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Ri(e,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw bl(e,d,u);Ae(e,d)}}catch(i){if(i instanceof Bt)throw i;Ae(e,"network-request-failed",{message:String(i)})}}async function oi(e,t,n,r,i={}){const o=await Kt(e,t,n,r,i);return"mfaPendingCredential"in o&&Ae(e,"multi-factor-auth-required",{_serverResponse:o}),o}function wh(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Fl(e.config,i):`${e.config.apiScheme}://${i}`}function t1(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class n1{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($e(this.auth,"network-request-failed")),e1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ri(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$e(e,t,r);return i.customData._tokenResponse=n,i}function wc(e){return e!==void 0&&e.enterprise!==void 0}class r1{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return t1(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function i1(e,t){return Kt(e,"GET","/v2/recaptchaConfig",Ht(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(e,t){return Kt(e,"POST","/v1/accounts:delete",t)}async function _h(e,t){return Kt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function s1(e,t=!1){const n=Wt(e),r=await n.getIdToken(t),i=zl(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Tr(Ds(i.auth_time)),issuedAtTime:Tr(Ds(i.iat)),expirationTime:Tr(Ds(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ds(e){return Number(e)*1e3}function zl(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Gi("JWT malformed, contained fewer than 3 sections"),null;try{const i=oh(n);return i?JSON.parse(i):(Gi("Failed to decode base64 JWT payload"),null)}catch(i){return Gi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _c(e){const t=zl(e);return x(t,"internal-error"),x(typeof t.exp<"u","internal-error"),x(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Bt&&a1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function a1({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tr(this.lastLoginAt),this.creationTime=Tr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Gr(e,_h(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Sh(o.providerUserInfo):[],a=c1(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new ba(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,m)}async function u1(e){const t=Wt(e);await To(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function c1(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Sh(e){return e.map(t=>{var{providerId:n}=t,r=Ul(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(e,t){const n=await yh(e,{},async()=>{const r=ni({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=wh(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",vh.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function f1(e,t){return Kt(e,"POST","/v2/accounts:revokeToken",Ht(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){x(t.idToken,"internal-error"),x(typeof t.idToken<"u","internal-error"),x(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):_c(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){x(t.length!==0,"internal-error");const n=_c(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await d1(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new bn;return r&&(x(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(x(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new bn,this.toJSON())}_performRefresh(){return tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e,t){x(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class nt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Ul(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new l1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ba(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Gr(this,this.stsTokenManager.getToken(this.auth,t));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return s1(this,t)}reload(){return u1(this)}_assign(t){this!==t&&(x(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new nt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await To(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(je(this.auth.app))return Promise.reject(ot(this.auth));const t=await this.getIdToken();return await Gr(this,o1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,d;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,U=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:y,isAnonymous:E,providerData:C,stsTokenManager:T}=n;x(p&&T,t,"internal-error");const P=bn.fromJSON(this.name,T);x(typeof p=="string",t,"internal-error"),mt(m,t.name),mt(f,t.name),x(typeof y=="boolean",t,"internal-error"),x(typeof E=="boolean",t,"internal-error"),mt(g,t.name),mt(v,t.name),mt(S,t.name),mt(U,t.name),mt(h,t.name),mt(c,t.name);const F=new nt({uid:p,auth:t,email:f,emailVerified:y,displayName:m,isAnonymous:E,photoURL:v,phoneNumber:g,tenantId:S,stsTokenManager:P,createdAt:h,lastLoginAt:c});return C&&Array.isArray(C)&&(F.providerData=C.map(A=>Object.assign({},A))),U&&(F._redirectEventId=U),F}static async _fromIdTokenResponse(t,n,r=!1){const i=new bn;i.updateFromServerResponse(n);const o=new nt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await To(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];x(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Sh(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new bn;a.updateFromIdToken(r);const l=new nt({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ba(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=new Map;function rt(e){ft(e instanceof Function,"Expected a class definition");let t=Sc.get(e);return t?(ft(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Sc.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Eh.type="NONE";const Ec=Eh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(e,t,n){return`firebase:${e}:${t}:${n}`}class jn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Qi(this.userKey,i.apiKey,o),this.fullPersistenceKey=Qi("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?nt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new jn(rt(Ec),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||rt(Ec);const s=Qi(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const m=nt._fromJSON(t,d);u!==o&&(a=m),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new jn(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new jn(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Th(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(kh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(xh(t))return"Blackberry";if(Nh(t))return"Webos";if(Ih(t))return"Safari";if((t.includes("chrome/")||Ch(t))&&!t.includes("edge/"))return"Chrome";if(Ph(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kh(e=de()){return/firefox\//i.test(e)}function Ih(e=de()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ch(e=de()){return/crios\//i.test(e)}function Th(e=de()){return/iemobile/i.test(e)}function Ph(e=de()){return/android/i.test(e)}function xh(e=de()){return/blackberry/i.test(e)}function Nh(e=de()){return/webos/i.test(e)}function $l(e=de()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function h1(e=de()){var t;return $l(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function p1(){return Ny()&&document.documentMode===10}function Rh(e=de()){return $l(e)||Ph(e)||Nh(e)||xh(e)||/windows phone/i.test(e)||Th(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(e,t=[]){let n;switch(e){case"Browser":n=kc(de());break;case"Worker":n=`${kc(de())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ri}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g1(e,t={}){return Kt(e,"GET","/v2/passwordPolicy",Ht(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=6;class y1{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:v1,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ic(this),this.idTokenSubscription=new Ic(this),this.beforeStateQueue=new m1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=rt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await jn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await _h(this,{idToken:t}),r=await nt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(je(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await To(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=J0()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(je(this.app))return Promise.reject(ot(this));const n=t?Wt(t):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&x(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return je(this.app)?Promise.reject(ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return je(this.app)?Promise.reject(ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await g1(this),n=new y1(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ti("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await f1(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&rt(t)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await jn.create(this,[rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Oh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Q0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gt(e){return Wt(e)}class Ic{constructor(t){this.auth=t,this.observer=null,this.addObserver=Uy(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _1(e){Go=e}function Ah(e){return Go.loadJS(e)}function S1(){return Go.recaptchaEnterpriseScript}function E1(){return Go.gapiScript}function k1(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const I1="recaptcha-enterprise",C1="NO_RECAPTCHA";class T1{constructor(t){this.type=I1,this.auth=Gt(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{i1(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new r1(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;wc(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(C1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&wc(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=S1();l.length!==0&&(l+=a),Ah(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function Cc(e,t,n,r=!1){const i=new T1(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function ja(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Cc(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Cc(e,t,n,n==="getOobCode");return r(e,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(e,t){const n=dh(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(ko(o,t??{}))return i;Ae(i,"already-initialized")}return n.initialize({options:t})}function x1(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function N1(e,t,n){const r=Gt(e);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=Dh(t),{host:s,port:a}=R1(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),O1()}function Dh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function R1(e){const t=Dh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Tc(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Tc(s)}}}function Tc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function O1(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return tt("not implemented")}_getIdTokenResponse(t){return tt("not implemented")}_linkToIdToken(t,n){return tt("not implemented")}_getReauthenticationResolver(t){return tt("not implemented")}}async function A1(e,t){return Kt(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D1(e,t){return oi(e,"POST","/v1/accounts:signInWithPassword",Ht(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L1(e,t){return oi(e,"POST","/v1/accounts:signInWithEmailLink",Ht(e,t))}async function M1(e,t){return oi(e,"POST","/v1/accounts:signInWithEmailLink",Ht(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Vl{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Qr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Qr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ja(t,n,"signInWithPassword",D1);case"emailLink":return L1(t,{email:this._email,oobCode:this._password});default:Ae(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ja(t,r,"signUpPassword",A1);case"emailLink":return M1(t,{idToken:n,email:this._email,oobCode:this._password});default:Ae(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(e,t){return oi(e,"POST","/v1/accounts:signInWithIdp",Ht(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1="http://localhost";class fn extends Vl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new fn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ae("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Ul(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new fn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Fn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Fn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Fn(t,n)}buildRequest(){const t={requestUri:U1,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ni(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function j1(e){const t=mr(gr(e)).link,n=t?mr(gr(t)).deep_link_id:null,r=mr(gr(e)).deep_link_id;return(r?mr(gr(r)).link:null)||r||n||t||e}class Bl{constructor(t){var n,r,i,o,s,a;const l=mr(gr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,m=b1((i=l.mode)!==null&&i!==void 0?i:null);x(u&&d&&m,"argument-error"),this.apiKey=u,this.operation=m,this.code=d,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=j1(t);try{return new Bl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this.providerId=Xn.PROVIDER_ID}static credential(t,n){return Qr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Bl.parseLink(n);return x(r,"argument-error"),Qr._fromEmailAndCode(t,r.code,r.tenantId)}}Xn.PROVIDER_ID="password";Xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Wl{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends si{constructor(){super("facebook.com")}static credential(t){return fn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return St.credential(t.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends si{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return fn._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Je.credentialFromTaggedObject(t)}static credentialFromError(t){return Je.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Je.credential(n,r)}catch{return null}}}Je.GOOGLE_SIGN_IN_METHOD="google.com";Je.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends si{constructor(){super("github.com")}static credential(t){return fn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Et.credential(t.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends si{constructor(){super("twitter.com")}static credential(t,n){return fn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F1(e,t){return oi(e,"POST","/v1/accounts:signUp",Ht(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await nt._fromIdTokenResponse(t,r,i),s=Pc(r);return new hn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Pc(r);return new hn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Pc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends Bt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Po.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Po(t,n,r,i)}}function Lh(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Po._fromErrorAndOperation(e,o,t,r):o})}async function z1(e,t,n=!1){const r=await Gr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return hn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(e,t,n=!1){const{auth:r}=e;if(je(r.app))return Promise.reject(ot(r));const i="reauthenticate";try{const o=await Gr(e,Lh(r,i,t,e),n);x(o.idToken,r,"internal-error");const s=zl(o.idToken);x(s,r,"internal-error");const{sub:a}=s;return x(e.uid===a,r,"user-mismatch"),hn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ae(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mh(e,t,n=!1){if(je(e.app))return Promise.reject(ot(e));const r="signIn",i=await Lh(e,r,t),o=await hn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function V1(e,t){return Mh(Gt(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uh(e){const t=Gt(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function B1(e,t,n){if(je(e.app))return Promise.reject(ot(e));const r=Gt(e),s=await ja(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",F1).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Uh(e),l}),a=await hn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function W1(e,t,n){return je(e.app)?Promise.reject(ot(e)):V1(Wt(e),Xn.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Uh(e),r})}function H1(e,t,n,r){return Wt(e).onIdTokenChanged(t,n,r)}function K1(e,t,n){return Wt(e).beforeAuthStateChanged(t,n)}function G1(e,t,n,r){return Wt(e).onAuthStateChanged(t,n,r)}const xo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xo,"1"),this.storage.removeItem(xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=1e3,Y1=10;class jh extends bh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Rh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);p1()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Y1):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Q1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}jh.type="LOCAL";const q1=jh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh extends bh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Fh.type="SESSION";const zh=Fh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Qo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await X1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Hl("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(m){const f=m;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(f.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function Z1(e){Qe().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function ew(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tw(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function nw(){return $h()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh="firebaseLocalStorageDb",rw=1,No="firebaseLocalStorage",Bh="fbase_key";class ai{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yo(e,t){return e.transaction([No],t?"readwrite":"readonly").objectStore(No)}function iw(){const e=indexedDB.deleteDatabase(Vh);return new ai(e).toPromise()}function Fa(){const e=indexedDB.open(Vh,rw);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(No,{keyPath:Bh})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(No)?t(r):(r.close(),await iw(),t(await Fa()))})})}async function xc(e,t,n){const r=Yo(e,!0).put({[Bh]:t,value:n});return new ai(r).toPromise()}async function ow(e,t){const n=Yo(e,!1).get(t),r=await new ai(n).toPromise();return r===void 0?null:r.value}function Nc(e,t){const n=Yo(e,!0).delete(t);return new ai(n).toPromise()}const sw=800,aw=3;class Wh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fa(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>aw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $h()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qo._getInstance(nw()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await ew(),!this.activeServiceWorker)return;this.sender=new J1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||tw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Fa();return await xc(t,xo,"1"),await Nc(t,xo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>ow(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Yo(i,!1).getAll();return new ai(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wh.type="LOCAL";const lw=Wh;new ii(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(e,t){return t?rt(t):(x(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends Vl{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Fn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Fn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Fn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function uw(e){return Mh(e.auth,new Kl(e),e.bypassAuthState)}function cw(e){const{auth:t,user:n}=e;return x(n,t,"internal-error"),$1(n,new Kl(e),e.bypassAuthState)}async function dw(e){const{auth:t,user:n}=e;return x(n,t,"internal-error"),z1(n,new Kl(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return uw;case"linkViaPopup":case"linkViaRedirect":return dw;case"reauthViaPopup":case"reauthViaRedirect":return cw;default:Ae(this.auth,"internal-error")}}resolve(t){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=new ii(2e3,1e4);async function hw(e,t,n){if(je(e.app))return Promise.reject($e(e,"operation-not-supported-in-this-environment"));const r=Gt(e);Y0(e,t,Wl);const i=Hh(r,n);return new rn(r,"signInViaPopup",t,i).executeNotNull()}class rn extends Kh{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,rn.currentPopupAction&&rn.currentPopupAction.cancel(),rn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return x(t,this.auth,"internal-error"),t}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const t=Hl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject($e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($e(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,fw.get())};t()}}rn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw="pendingRedirect",Yi=new Map;class mw extends Kh{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Yi.get(this.auth._key());if(!t){try{const r=await gw(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Yi.set(this.auth._key(),t)}return this.bypassAuthState||Yi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gw(e,t){const n=ww(t),r=yw(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vw(e,t){Yi.set(e._key(),t)}function yw(e){return rt(e._redirectPersistence)}function ww(e){return Qi(pw,e.config.apiKey,e.name)}async function _w(e,t,n=!1){if(je(e.app))return Promise.reject(ot(e));const r=Gt(e),i=Hh(r,t),s=await new mw(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=10*60*1e3;class Ew{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!kw(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Gh(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($e(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Sw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rc(t))}saveEventToCache(t){this.cachedEventUids.add(Rc(t)),this.lastProcessedEventTime=Date.now()}}function Rc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Gh({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function kw(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gh(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iw(e,t={}){return Kt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tw=/^https?/;async function Pw(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Iw(e);for(const n of t)try{if(xw(n))return}catch{}Ae(e,"unauthorized-domain")}function xw(e){const t=Ua(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!Tw.test(n))return!1;if(Cw.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=new ii(3e4,6e4);function Oc(){const e=Qe().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Rw(e){return new Promise((t,n)=>{var r,i,o;function s(){Oc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Oc(),n($e(e,"network-request-failed"))},timeout:Nw.get()})}if(!((i=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Qe().gapi)===null||o===void 0)&&o.load)s();else{const a=k1("iframefcb");return Qe()[a]=()=>{gapi.load?s():n($e(e,"network-request-failed"))},Ah(`${E1()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw qi=null,t})}let qi=null;function Ow(e){return qi=qi||Rw(e),qi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=new ii(5e3,15e3),Dw="__/auth/iframe",Lw="emulator/auth/iframe",Mw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Uw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bw(e){const t=e.config;x(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Fl(t,Lw):`https://${e.config.authDomain}/${Dw}`,r={apiKey:t.apiKey,appName:e.name,v:ri},i=Uw.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${ni(r).slice(1)}`}async function jw(e){const t=await Ow(e),n=Qe().gapi;return x(n,e,"internal-error"),t.open({where:document.body,url:bw(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mw,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=$e(e,"network-request-failed"),a=Qe().setTimeout(()=>{o(s)},Aw.get());function l(){Qe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zw=500,$w=600,Vw="_blank",Bw="http://localhost";class Ac{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ww(e,t,n,r=zw,i=$w){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Fw),{width:r.toString(),height:i.toString(),top:o,left:s}),u=de().toLowerCase();n&&(a=Ch(u)?Vw:n),kh(u)&&(t=t||Bw,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[g,v])=>`${f}${g}=${v},`,"");if(h1(u)&&a!=="_self")return Hw(t||"",a),new Ac(null);const m=window.open(t||"",a,d);x(m,e,"popup-blocked");try{m.focus()}catch{}return new Ac(m)}function Hw(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw="__/auth/handler",Gw="emulator/auth/handler",Qw=encodeURIComponent("fac");async function Dc(e,t,n,r,i,o){x(e.config.authDomain,e,"auth-domain-config-required"),x(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ri,eventId:i};if(t instanceof Wl){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",My(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,m]of Object.entries({}))s[d]=m}if(t instanceof si){const d=t.getScopes().filter(m=>m!=="");d.length>0&&(s.scopes=d.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await e._getAppCheckToken(),u=l?`#${Qw}=${encodeURIComponent(l)}`:"";return`${Yw(e)}?${ni(a).slice(1)}${u}`}function Yw({config:e}){return e.emulator?Fl(e,Gw):`https://${e.authDomain}/${Kw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="webStorageSupport";class qw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zh,this._completeRedirectFn=_w,this._overrideRedirectResult=vw}async _openPopup(t,n,r,i){var o;ft((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Dc(t,n,r,Ua(),i);return Ww(t,s,Hl())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Dc(t,n,r,Ua(),i);return Z1(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(ft(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await jw(t),r=new Ew(t);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ls,{type:Ls},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Ls];s!==void 0&&n(!!s),Ae(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Pw(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rh()||Ih()||$l()}}const Xw=qw;var Lc="@firebase/auth",Mc="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function e_(e){Hr(new Gn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;x(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oh(e)},u=new w1(r,i,o,l);return x1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Hr(new Gn("auth-internal",t=>{const n=Gt(t.getProvider("auth").getImmediate());return(r=>new Jw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Un(Lc,Mc,Zw(e)),Un(Lc,Mc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=5*60,n_=ah("authIdTokenMaxAge")||t_;let Uc=null;const r_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>n_)return;const i=n==null?void 0:n.token;Uc!==i&&(Uc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function i_(e=b0()){const t=dh(e,"auth");if(t.isInitialized())return t.getImmediate();const n=P1(e,{popupRedirectResolver:Xw,persistence:[lw,q1,zh]}),r=ah("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=r_(o.toString());K1(n,s,()=>s(n.currentUser)),H1(n,a=>s(a))}}const i=ky("auth");return i&&N1(n,`http://${i}`),n}function o_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}_1({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=$e("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",o_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});e_("Browser");var s_="firebase",a_="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Un(s_,a_,"app");const l_={apiKey:"AIzaSyC9CvO65aZQULgL-OEan6sbIuwBP33R4dw",authDomain:"ghosthunter-3541e.firebaseapp.com",projectId:"ghosthunter-3541e",storageBucket:"ghosthunter-3541e.firebasestorage.app",messagingSenderId:"819267394906",appId:"1:819267394906:web:89b48634b6c61a3eb6e763",measurementId:"G-LF8HCVVE5V"},u_=fh(l_),Pr=i_(u_),bc=new Je;function c_({isOpen:e,onClose:t}){const[n,r]=N.useState(!1),[i,o]=N.useState(""),[s,a]=N.useState(""),[l,u]=N.useState(!1);if(!e)return null;const d=async f=>{if(f.preventDefault(),!l){u(!0);try{n?(await B1(Pr,i,s),Zt.success("Account created successfully!")):(await W1(Pr,i,s),Zt.success("Logged in successfully!")),t()}catch(g){const v=g.code==="auth/popup-closed-by-user"?"Sign in was cancelled":g.message;Zt.error(v)}finally{u(!1)}}},m=async()=>{if(!l){u(!0);try{bc.setCustomParameters({prompt:"select_account"}),await hw(Pr,bc),Zt.success("Logged in successfully!"),t()}catch(f){const g=f.code==="auth/popup-closed-by-user"?"Sign in was cancelled":f.message;Zt.error(g)}finally{u(!1)}}};return _.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:_.jsxs("div",{className:"bg-white rounded-lg p-8 max-w-md w-full relative",children:[_.jsx("button",{onClick:t,className:"absolute top-4 right-4 text-gray-500 hover:text-gray-700",disabled:l,children:_.jsx(Ng,{className:"h-6 w-6"})}),_.jsx("h2",{className:"text-2xl font-bold mb-6",children:n?"Create Account":"Sign In"}),_.jsxs("form",{onSubmit:d,className:"space-y-4",children:[_.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Email"}),_.jsx("input",{type:"email",required:!0,value:i,onChange:f=>o(f.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500",disabled:l})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Password"}),_.jsx("input",{type:"password",required:!0,value:s,onChange:f=>a(f.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500",disabled:l})]}),_.jsxs("button",{type:"submit",className:"w-full bg-purple-600 text-white rounded-md py-2 hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",disabled:l,children:[l?"Processing...":n?"Sign Up":"Sign In"," with Email"]})]}),_.jsx("div",{className:"mt-4",children:_.jsxs("button",{onClick:m,className:"w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-md py-2 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",disabled:l,children:[_.jsx(Ig,{className:"h-5 w-5"}),_.jsx("span",{children:l?"Processing...":"Continue with Google"})]})}),_.jsxs("p",{className:"mt-4 text-center text-sm text-gray-600",children:[n?"Already have an account?":"Don't have an account?"," ",_.jsx("button",{onClick:()=>r(!n),className:"text-purple-600 hover:text-purple-700",disabled:l,children:n?"Sign In":"Sign Up"})]})]})})}const Ms=new th;function d_(){const[e,t]=N.useState([]),[n,r]=N.useState(!0),[i,o]=N.useState(null),[s,a]=N.useState(null),[l,u]=N.useState(!1),d=()=>{try{o(null);const g=Ms.getCompanies().map(v=>({...v,userVote:s?Ms.getUserVote(v.id,s.uid):0}));t(g)}catch(g){o("Unable to load companies. Please try again later."),console.error("Error fetching companies:",g)}finally{r(!1)}};N.useEffect(()=>{const g=G1(Pr,v=>{a(v)});return()=>g()},[]),N.useEffect(()=>{d()},[s]);const m=(g,v)=>{if(!s){u(!0);return}try{Ms.vote(g,s.uid,v),d()}catch(S){console.error("Error voting:",S)}},f=g=>{if(!s){u(!0);return}console.log("Comment on company:",g)};return _.jsxs("div",{className:"min-h-screen bg-gray-50",children:[_.jsx(wv,{position:"top-right"}),_.jsx(c_,{isOpen:l,onClose:()=>u(!1)}),_.jsx("header",{className:"bg-white shadow-sm",children:_.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-6",children:[_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{className:"flex items-center space-x-3",children:[_.jsx(Cs,{className:"h-8 w-8 text-purple-600"}),_.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Ghost Guard"})]}),s?_.jsx("button",{onClick:()=>Pr.signOut(),className:"text-sm text-gray-600 hover:text-gray-900",children:"Sign Out"}):_.jsx("button",{onClick:()=>u(!0),className:"text-sm text-purple-600 hover:text-purple-900",children:"Sign In"})]}),_.jsx("p",{className:"mt-2 text-gray-600",children:"Track companies that ghost job candidates"})]})}),_.jsxs("main",{className:"max-w-4xl mx-auto px-4 py-8",children:[_.jsx(my,{onSubmit:d,user:s,onAuthRequired:()=>u(!0)}),i?_.jsx("div",{className:"text-center py-12",children:_.jsx("div",{className:"bg-red-50 p-4 rounded-lg",children:_.jsx("p",{className:"text-red-600",children:i})})}):n?_.jsx("div",{className:"text-center py-12",children:_.jsxs("div",{className:"animate-pulse flex flex-col items-center",children:[_.jsx(Cs,{className:"h-12 w-12 text-gray-400 mb-4"}),_.jsx("p",{className:"text-gray-500",children:"Loading reports..."})]})}):e.length===0?_.jsxs("div",{className:"text-center py-12",children:[_.jsx(Cs,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),_.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"No Reports Yet"}),_.jsx("p",{className:"mt-2 text-gray-500",children:"Be the first to report a company!"})]}):_.jsx("div",{className:"space-y-6",children:e.map(g=>_.jsx(hy,{company:g,onVote:m,onComment:f},g.id))})]})]})}Xf(document.getElementById("root")).render(_.jsx(N.StrictMode,{children:_.jsx(d_,{})}));
