(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const H of document.querySelectorAll('link[rel="modulepreload"]'))d(H);new MutationObserver(H=>{for(const G of H)if(G.type==="childList")for(const W of G.addedNodes)W.tagName==="LINK"&&W.rel==="modulepreload"&&d(W)}).observe(document,{childList:!0,subtree:!0});function h(H){const G={};return H.integrity&&(G.integrity=H.integrity),H.referrerPolicy&&(G.referrerPolicy=H.referrerPolicy),H.crossOrigin==="use-credentials"?G.credentials="include":H.crossOrigin==="anonymous"?G.credentials="omit":G.credentials="same-origin",G}function d(H){if(H.ep)return;H.ep=!0;const G=h(H);fetch(H.href,G)}})();var Hp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cg(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ec={exports:{}},Fi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function dg(){if(Gp)return Fi;Gp=1;var o=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function h(d,H,G){var W=null;if(G!==void 0&&(W=""+G),H.key!==void 0&&(W=""+H.key),"key"in H){G={};for(var z in H)z!=="key"&&(G[z]=H[z])}else G=H;return H=G.ref,{$$typeof:o,type:d,key:W,ref:H!==void 0?H:null,props:G}}return Fi.Fragment=m,Fi.jsx=h,Fi.jsxs=h,Fi}var Yp;function fg(){return Yp||(Yp=1,ec.exports=dg()),ec.exports}var s=fg(),tc={exports:{}},we={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function mg(){if(Vp)return we;Vp=1;var o=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),W=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),re=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),k=Symbol.for("react.view_transition"),me=Symbol.iterator;function ge(c){return c===null||typeof c!="object"?null:(c=me&&c[me]||c["@@iterator"],typeof c=="function"?c:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,P={};function E(c,j,X){this.props=c,this.context=j,this.refs=P,this.updater=X||N}E.prototype.isReactComponent={},E.prototype.setState=function(c,j){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,j,"setState")},E.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function g(){}g.prototype=E.prototype;function R(c,j,X){this.props=c,this.context=j,this.refs=P,this.updater=X||N}var M=R.prototype=new g;M.constructor=R,B(M,E.prototype),M.isPureReactComponent=!0;var L=Array.isArray;function F(){}var ee={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function pe(c,j,X){var Y=X.ref;return{$$typeof:o,type:c,key:j,ref:Y!==void 0?Y:null,props:X}}function ve(c,j){return pe(c.type,j,c.props)}function Ne(c){return typeof c=="object"&&c!==null&&c.$$typeof===o}function Ve(c){var j={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(X){return j[X]})}var A=/\/+/g;function se(c,j){return typeof c=="object"&&c!==null&&c.key!=null?Ve(""+c.key):j.toString(36)}function C(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(F,F):(c.status="pending",c.then(function(j){c.status==="pending"&&(c.status="fulfilled",c.value=j)},function(j){c.status==="pending"&&(c.status="rejected",c.reason=j)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function K(c,j,X,Y,te){var ue=typeof c;(ue==="undefined"||ue==="boolean")&&(c=null);var de=!1;if(c===null)de=!0;else switch(ue){case"bigint":case"string":case"number":de=!0;break;case"object":switch(c.$$typeof){case o:case m:de=!0;break;case Z:return de=c._init,K(de(c._payload),j,X,Y,te)}}if(de)return te=te(c),de=Y===""?"."+se(c,0):Y,L(te)?(X="",de!=null&&(X=de.replace(A,"$&/")+"/"),K(te,j,X,"",function(De){return De})):te!=null&&(Ne(te)&&(te=ve(te,X+(te.key==null||c&&c.key===te.key?"":(""+te.key).replace(A,"$&/")+"/")+de)),j.push(te)),1;de=0;var J=Y===""?".":Y+":";if(L(c))for(var ae=0;ae<c.length;ae++)Y=c[ae],ue=J+se(Y,ae),de+=K(Y,j,X,ue,te);else if(ae=ge(c),typeof ae=="function")for(c=ae.call(c),ae=0;!(Y=c.next()).done;)Y=Y.value,ue=J+se(Y,ae++),de+=K(Y,j,X,ue,te);else if(ue==="object"){if(typeof c.then=="function")return K(C(c),j,X,Y,te);throw j=String(c),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return de}function ne(c,j,X){if(c==null)return c;var Y=[],te=0;return K(c,Y,"","",function(ue){return j.call(X,ue,te++)}),Y}function he(c){if(c._status===-1){var j=c._result,X=j();X.then(function(Y){(c._status===0||c._status===-1)&&(c._status=1,c._result=Y,X.status===void 0&&(X.status="fulfilled",X.value=Y))},function(Y){(c._status===0||c._status===-1)&&(c._status=2,c._result=Y,X.status===void 0&&(X.status="rejected",X.reason=Y))}),c._status===-1&&(c._status=0,c._result=X)}if(c._status===1)return c._result.default;throw c._result}var b=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)};function p(c){var j=ee.T,X={};X.types=j!==null?j.types:null,ee.T=X;try{var Y=c(),te=ee.S;te!==null&&te(X,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(F,b)}catch(ue){b(ue)}finally{j!==null&&X.types!==null&&(j.types=X.types),ee.T=j}}function O(c){var j=ee.T;if(j!==null){var X=j.types;X===null?j.types=[c]:X.indexOf(c)===-1&&X.push(c)}else p(O.bind(null,c))}var I={map:ne,forEach:function(c,j,X){ne(c,function(){j.apply(this,arguments)},X)},count:function(c){var j=0;return ne(c,function(){j++}),j},toArray:function(c){return ne(c,function(j){return j})||[]},only:function(c){if(!Ne(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return we.Activity=_,we.Children=I,we.Component=E,we.Fragment=h,we.Profiler=H,we.PureComponent=R,we.StrictMode=d,we.Suspense=$,we.ViewTransition=k,we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,we.__COMPILER_RUNTIME={__proto__:null,c:function(c){return ee.H.useMemoCache(c)}},we.addTransitionType=O,we.cache=function(c){return function(){return c.apply(null,arguments)}},we.cacheSignal=function(){return null},we.cloneElement=function(c,j,X){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var Y=B({},c.props),te=c.key;if(j!=null)for(ue in j.key!==void 0&&(te=""+j.key),j)!V.call(j,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&j.ref===void 0||(Y[ue]=j[ue]);var ue=arguments.length-2;if(ue===1)Y.children=X;else if(1<ue){for(var de=Array(ue),J=0;J<ue;J++)de[J]=arguments[J+2];Y.children=de}return pe(c.type,te,Y)},we.createContext=function(c){return c={$$typeof:W,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:G,_context:c},c},we.createElement=function(c,j,X){var Y,te={},ue=null;if(j!=null)for(Y in j.key!==void 0&&(ue=""+j.key),j)V.call(j,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(te[Y]=j[Y]);var de=arguments.length-2;if(de===1)te.children=X;else if(1<de){for(var J=Array(de),ae=0;ae<de;ae++)J[ae]=arguments[ae+2];te.children=J}if(c&&c.defaultProps)for(Y in de=c.defaultProps,de)te[Y]===void 0&&(te[Y]=de[Y]);return pe(c,ue,te)},we.createRef=function(){return{current:null}},we.forwardRef=function(c){return{$$typeof:z,render:c}},we.isValidElement=Ne,we.lazy=function(c){return{$$typeof:Z,_payload:{_status:-1,_result:c},_init:he}},we.memo=function(c,j){return{$$typeof:re,type:c,compare:j===void 0?null:j}},we.startTransition=p,we.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},we.use=function(c){return ee.H.use(c)},we.useActionState=function(c,j,X){return ee.H.useActionState(c,j,X)},we.useCallback=function(c,j){return ee.H.useCallback(c,j)},we.useContext=function(c){return ee.H.useContext(c)},we.useDebugValue=function(){},we.useDeferredValue=function(c,j){return ee.H.useDeferredValue(c,j)},we.useEffect=function(c,j){return ee.H.useEffect(c,j)},we.useEffectEvent=function(c){return ee.H.useEffectEvent(c)},we.useId=function(){return ee.H.useId()},we.useImperativeHandle=function(c,j,X){return ee.H.useImperativeHandle(c,j,X)},we.useInsertionEffect=function(c,j){return ee.H.useInsertionEffect(c,j)},we.useLayoutEffect=function(c,j){return ee.H.useLayoutEffect(c,j)},we.useMemo=function(c,j){return ee.H.useMemo(c,j)},we.useOptimistic=function(c,j){return ee.H.useOptimistic(c,j)},we.useReducer=function(c,j,X){return ee.H.useReducer(c,j,X)},we.useRef=function(c){return ee.H.useRef(c)},we.useState=function(c){return ee.H.useState(c)},we.useSyncExternalStore=function(c,j,X){return ee.H.useSyncExternalStore(c,j,X)},we.useTransition=function(){return ee.H.useTransition()},we.version="19.3.1",we}var Qp;function mc(){return Qp||(Qp=1,tc.exports=mg()),tc.exports}var le=mc(),nc={exports:{}},Ui={},lc={exports:{}},ac={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function pg(){return Xp||(Xp=1,(function(o){function m(C,K){var ne=C.length;C.push(K);e:for(;0<ne;){var he=ne-1>>>1,b=C[he];if(0<H(b,K))C[he]=K,C[ne]=b,ne=he;else break e}}function h(C){return C.length===0?null:C[0]}function d(C){if(C.length===0)return null;var K=C[0],ne=C.pop();if(ne!==K){C[0]=ne;e:for(var he=0,b=C.length,p=b>>>1;he<p;){var O=2*(he+1)-1,I=C[O],c=O+1,j=C[c];if(0>H(I,ne))c<b&&0>H(j,I)?(C[he]=j,C[c]=ne,he=c):(C[he]=I,C[O]=ne,he=O);else if(c<b&&0>H(j,ne))C[he]=j,C[c]=ne,he=c;else break e}}return K}function H(C,K){var ne=C.sortIndex-K.sortIndex;return ne!==0?ne:C.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var G=performance;o.unstable_now=function(){return G.now()}}else{var W=Date,z=W.now();o.unstable_now=function(){return W.now()-z}}var $=[],re=[],Z=1,_=null,k=3,me=!1,ge=!1,N=!1,B=!1,P=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;function R(C){for(var K=h(re);K!==null;){if(K.callback===null)d(re);else if(K.startTime<=C)d(re),K.sortIndex=K.expirationTime,m($,K);else break;K=h(re)}}function M(C){if(N=!1,R(C),!ge)if(h($)!==null)ge=!0,L||(L=!0,Ne());else{var K=h(re);K!==null&&se(M,K.startTime-C)}}var L=!1,F=-1,ee=5,V=-1;function pe(){return B?!0:!(o.unstable_now()-V<ee)}function ve(){if(B=!1,L){var C=o.unstable_now();V=C;var K=!0;try{e:{ge=!1,N&&(N=!1,E(F),F=-1),me=!0;var ne=k;try{t:{for(R(C),_=h($);_!==null&&!(_.expirationTime>C&&pe());){var he=_.callback;if(typeof he=="function"){_.callback=null,k=_.priorityLevel;var b=he(_.expirationTime<=C);if(C=o.unstable_now(),typeof b=="function"){_.callback=b,R(C),K=!0;break t}_===h($)&&d($),R(C)}else d($);_=h($)}if(_!==null)K=!0;else{var p=h(re);p!==null&&se(M,p.startTime-C),K=!1}}break e}finally{_=null,k=ne,me=!1}K=void 0}}finally{K?Ne():L=!1}}}var Ne;if(typeof g=="function")Ne=function(){g(ve)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,A=Ve.port2;Ve.port1.onmessage=ve,Ne=function(){A.postMessage(null)}}else Ne=function(){P(ve,0)};function se(C,K){F=P(function(){C(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(C){C.callback=null},o.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<C?Math.floor(1e3/C):5},o.unstable_getCurrentPriorityLevel=function(){return k},o.unstable_next=function(C){switch(k){case 1:case 2:case 3:var K=3;break;default:K=k}var ne=k;k=K;try{return C()}finally{k=ne}},o.unstable_requestPaint=function(){B=!0},o.unstable_runWithPriority=function(C,K){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var ne=k;k=C;try{return K()}finally{k=ne}},o.unstable_scheduleCallback=function(C,K,ne){var he=o.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?he+ne:he):ne=he,C){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=ne+b,C={id:Z++,callback:K,priorityLevel:C,startTime:ne,expirationTime:b,sortIndex:-1},ne>he?(C.sortIndex=ne,m(re,C),h($)===null&&C===h(re)&&(N?(E(F),F=-1):N=!0,se(M,ne-he))):(C.sortIndex=b,m($,C),ge||me||(ge=!0,L||(L=!0,Ne()))),C},o.unstable_shouldYield=pe,o.unstable_wrapCallback=function(C){var K=k;return function(){var ne=k;k=K;try{return C.apply(this,arguments)}finally{k=ne}}}})(ac)),ac}var Zp;function hg(){return Zp||(Zp=1,lc.exports=pg()),lc.exports}var ic={exports:{}},vt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function xg(){if(Kp)return vt;Kp=1;var o=mc();function m(Z){var _="https://react.dev/errors/"+Z;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)_+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+Z+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var d={d:{f:h,r:function(){throw Error(m(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},H=Symbol.for("react.portal"),G=Symbol.for("react.recoverable"),W=Symbol.for("react.optimistic_key");function z(Z,_,k){var me=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:me==null?null:me===W?W:""+me,children:Z,containerInfo:_,implementation:k}}var $=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function re(Z,_){if(Z==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,vt.browser=function(Z){return{$$typeof:G,_reason:Z}},vt.createPortal=function(Z,_){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(m(299));return z(Z,_,null,k)},vt.flushSync=function(Z){var _=$.T,k=d.p;try{if($.T=null,d.p=2,Z)return Z()}finally{$.T=_,d.p=k,d.d.f()}},vt.preconnect=function(Z,_){typeof Z=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,d.d.C(Z,_))},vt.prefetchDNS=function(Z){typeof Z=="string"&&d.d.D(Z)},vt.preinit=function(Z,_){if(typeof Z=="string"&&_&&typeof _.as=="string"){var k=_.as,me=re(k,_.crossOrigin),ge=typeof _.integrity=="string"?_.integrity:void 0,N=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;k==="style"?d.d.S(Z,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:me,integrity:ge,fetchPriority:N}):k==="script"&&d.d.X(Z,{crossOrigin:me,integrity:ge,fetchPriority:N,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},vt.preinitModule=function(Z,_){if(typeof Z=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var k=re(_.as,_.crossOrigin);d.d.M(Z,{crossOrigin:k,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&d.d.M(Z)},vt.preload=function(Z,_){if(typeof Z=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var k=_.as,me=re(k,_.crossOrigin);d.d.L(Z,k,{crossOrigin:me,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},vt.preloadModule=function(Z,_){if(typeof Z=="string")if(_){var k=re(_.as,_.crossOrigin);d.d.m(Z,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:k,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else d.d.m(Z)},vt.requestFormReset=function(Z){d.d.r(Z)},vt.unstable_batchedUpdates=function(Z,_){return Z(_)},vt.useFormState=function(Z,_,k){return $.H.useFormState(Z,_,k)},vt.useFormStatus=function(){return $.H.useHostTransitionStatus()},vt.version="19.3.1",vt}var Jp;function gg(){if(Jp)return ic.exports;Jp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(m){console.error(m)}}return o(),ic.exports=xg(),ic.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function yg(){if($p)return Ui;$p=1;var o=hg(),m=mc(),h=gg();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function G(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function W(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $(e){if(G(e)!==e)throw Error(d(188))}function re(e){var t=e.alternate;if(!t){if(t=G(e),t===null)throw Error(d(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return $(a),e;if(i===l)return $(a),t;i=i.sibling}throw Error(d(188))}if(n.return!==l.return)n=a,l=i;else{for(var r=!1,u=a.child;u;){if(u===n){r=!0,n=a,l=i;break}if(u===l){r=!0,l=a,n=i;break}u=u.sibling}if(!r){for(u=i.child;u;){if(u===n){r=!0,n=i,l=a;break}if(u===l){r=!0,l=i,n=a;break}u=u.sibling}if(!r)throw Error(d(189))}}if(n.alternate!==l)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?e:t}function Z(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Z(e),t!==null)return t;e=e.sibling}return null}function _(e,t,n,l,a,i){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,l,a,i)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&_(e.child,t,n,l,a,i))return!0;e=e.sibling}return!1}function k(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function me(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function ge(e){var t=[null,null],n=k(e);return n===null||N(t,e,n.child,{foundSelf:!1}),t}function N(e,t,n,l){for(;n!==null;){if(n===t)l.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(l.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&N(e,t,n.child,l))return!0;n=n.sibling}return!1}function B(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(d(559))}}var P=null,E=null;function g(e,t,n){return e===n?!0:e===t?(P=e,!0):!1}function R(e,t,n){return e===n?(E=e,!1):e===t?(E!==null&&(P=e),!0):!1}function M(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function L(e,t,n){for(var l=0,a=e;a;a=n(a))l++;a=0;for(var i=t;i;i=n(i))a++;for(;0<l-a;)e=n(e),l--;for(;0<a-l;)t=n(t),a--;for(;l--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var F=Object.assign,ee=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),pe=Symbol.for("react.portal"),ve=Symbol.for("react.fragment"),Ne=Symbol.for("react.strict_mode"),Ve=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),se=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),O=Symbol.for("react.legacy_hidden"),I=Symbol.for("react.memo_cache_sentinel"),c=Symbol.for("react.view_transition"),j=Symbol.for("react.recoverable"),X=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var te=Symbol.for("react.client.reference");function ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ve:return"Fragment";case Ve:return"Profiler";case Ne:return"StrictMode";case K:return"Suspense";case ne:return"SuspenseList";case p:return"Activity";case c:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case pe:return"Portal";case se:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case C:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case he:return t=e.displayName||null,t!==null?t:ue(e.type)||"Memo";case b:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}var de=Array.isArray,J=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,De={pending:!1,data:null,method:null,action:null},Se=[],Ie=-1;function Ge(e){return{current:e}}function ze(e){0>Ie||(e.current=Se[Ie],Se[Ie]=null,Ie--)}function _e(e,t){Ie++,Se[Ie]=e.current,e.current=t}var $e=Ge(null),ut=Ge(null),jt=Ge(null),kn=Ge(null);function Yn(e,t){switch(_e(jt,t),_e(ut,e),_e($e,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?$m(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=$m(t),e=Wm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ze($e),_e($e,e)}function tn(){ze($e),ze(ut),ze(jt)}function Vn(e){var t=e.memoizedState;t!==null&&(Ra._currentValue=t.memoizedState,_e(kn,e)),t=$e.current;var n=Wm(t,e.type);t!==n&&(_e(ut,e),_e($e,n))}function En(e){ut.current===e&&(ze($e),ze(ut)),kn.current===e&&(ze(kn),Ra._currentValue=De)}var _l,Nn;function kt(e){if(_l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_l=t&&t[1]||"",Nn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_l+e+Nn}var Sn=!1;function un(e,t){if(!e||Sn)return"";Sn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(ie){var y=ie}Reflect.construct(e,[],q)}else{try{q.call()}catch(ie){y=ie}q=!1;try{var T=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),q=!0,new e}finally{q&&(T!==void 0?Object.defineProperty(e.prototype,"props",T):delete e.prototype.props)}}}else{try{throw Error()}catch(ie){y=ie}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(ie){if(ie&&y&&typeof ie.stack=="string")return[ie.stack,y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],u=i[1];if(r&&u){var f=r.split(`
`),w=u.split(`
`);for(a=l=0;l<f.length&&!f[l].includes("DetermineComponentFrameRoot");)l++;for(;a<w.length&&!w[a].includes("DetermineComponentFrameRoot");)a++;if(l===f.length||a===w.length)for(l=f.length-1,a=w.length-1;1<=l&&0<=a&&f[l]!==w[a];)a--;for(;1<=l&&0<=a;l--,a--)if(f[l]!==w[a]){if(l!==1||a!==1)do if(l--,a--,0>a||f[l]!==w[a]){var D=`
`+f[l].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=l&&0<=a);break}}}finally{Sn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?kt(n):""}function kl(e,t){switch(e.tag){case 26:case 27:case 5:return kt(e.type);case 16:return kt("Lazy");case 13:return e.child!==t&&t!==null?kt("Suspense Fallback"):kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return un(e.type,!1);case 11:return un(e.type.render,!1);case 1:return un(e.type,!0);case 31:return kt("Activity");case 30:return kt("ViewTransition");default:return""}}function El(e){try{var t="",n=null;do t+=kl(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Jl=Object.prototype.hasOwnProperty,Va=o.unstable_scheduleCallback,Qa=o.unstable_cancelCallback,$l=o.unstable_shouldYield,Qn=o.unstable_requestPaint,lt=o.unstable_now,Q=o.unstable_getCurrentPriorityLevel,oe=o.unstable_ImmediatePriority,Ae=o.unstable_UserBlockingPriority,Qe=o.unstable_NormalPriority,Ze=o.unstable_LowPriority,Lt=o.unstable_IdlePriority,cn=o.log,wt=o.unstable_setDisableYieldValue,Nl=null,Et=null;function Xn(e){if(typeof cn=="function"&&wt(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Nl,e)}catch{}}var Rt=Math.clz32?Math.clz32:kh,wh=Math.log,_h=Math.LN2;function kh(e){return e>>>=0,e===0?32:31-(wh(e)/_h|0)|0}var Vi=256,Qi=262144,Xi=4194304;function Sl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zi(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var u=l&134217727;return u!==0?(l=u&~i,l!==0?a=Sl(l):(r&=u,r!==0?a=Sl(r):n||(n=u&~e,n!==0&&(a=Sl(n))))):(u=l&~i,u!==0?a=Sl(u):r!==0?a=Sl(r):n||(n=l&~e,n!==0&&(a=Sl(n)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:a}function Xa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function wc(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-Rt(n),a=1<<l;t|=e[l],n&=~a}return t}function Eh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _c(){var e=Xi;return Xi<<=1,(Xi&62914560)===0&&(Xi=4194304),e}function Sr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Za(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Nh(e,t,n,l,a,i){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var u=e.entanglements,f=e.expirationTimes,w=e.hiddenUpdates;for(n=r&~n;0<n;){var D=31-Rt(n),q=1<<D;u[D]=0,f[D]=-1;var y=w[D];if(y!==null)for(w[D]=null,D=0;D<y.length;D++){var T=y[D];T!==null&&(T.lane&=-536870913)}n&=~q}l!==0&&kc(e,l,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function kc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Rt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function Ec(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Rt(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function Nc(e,t){var n=t&-t;return n=(n&42)!==0?1:Tr(n),(n&(e.suspendedLanes|t))!==0?0:n}function Tr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ar(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Sc(){var e=ae.p;return e!==0?e:(e=window.event,e===void 0?32:zp(e.type))}function Tc(e,t){var n=ae.p;try{return ae.p=e,t()}finally{ae.p=n}}var Tn=Math.random().toString(36).slice(2),pt="__reactFiber$"+Tn,Ct="__reactProps$"+Tn,Wl="__reactContainer$"+Tn,Ac="__reactEvents$"+Tn,Sh="__reactListeners$"+Tn,Th="__reactHandles$"+Tn,jc="__reactResources$"+Tn,Ka="__reactMarker$"+Tn,Ki="__reactLoad$"+Tn;function Ji(e){delete e[pt],delete e[Ct],delete e[Sh],delete e[Th]}function Tl(e){var t;if(t=e[pt])return t;for(var n=e.parentNode;n;){if(t=n[Wl]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pp(e);e!==null;){if(n=e[pt])return n;e=pp(e)}return t}e=n,n=e.parentNode}return null}function Il(e){if(e=e[pt]||e[Wl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ja(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function Pl(e){var t=e[jc];return t||(t=e[jc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ct(e){e[Ka]=!0}function Cc(e){e[Ki]=void 0}var Dc=new Set,Mc={};function Al(e,t){ea(e,t),ea(e+"Capture",t)}function ea(e,t){for(Mc[e]=t,e=0;e<t.length;e++)Dc.add(t[e])}var Ah=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Oc={},zc={};function jh(e){return Jl.call(zc,e)?!0:Jl.call(Oc,e)?!1:Ah.test(e)?zc[e]=!0:(Oc[e]=!0,!1)}var Le=!1;function Bc(){var e=Le;return Le=!1,e}function $i(e,t,n){if(jh(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Wi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function An(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,l)}}function Ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ch(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jr(e){if(!e._valueTracker){var t=Lc(e)?"checked":"value";e._valueTracker=Ch(e,t,""+e[t])}}function Rc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Lc(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}var Dh=/[\n"\\]/g;function Xt(e){return e.replace(Dh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Cr(e,t,n,l,a,i,r,u){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ft(t)):e.value!==""+Ft(t)&&(e.value=""+Ft(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?Dr(e,Ft(e.value)):Dr(e,Ft(t)):n!=null?Dr(e,Ft(n)):l!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+Ft(u):e.removeAttribute("name")}function Fc(e,t,n,l,a,i,r,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){jr(e);return}n=n!=null?""+Ft(n):"",t=t!=null?""+Ft(t):n,u||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=u?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),jr(e)}function Dr(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function ta(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Uc(e,t,n){if(t!=null&&(t=""+Ft(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ft(n):""}function qc(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(d(92));if(de(l)){if(1<l.length)throw Error(d(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Ft(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),jr(e)}function na(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hc(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||Mh.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Gc(e,t,n){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="",Le=!0);for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&(Hc(e,a,l),Le=!0)}else for(var i in t)t.hasOwnProperty(i)&&Hc(e,i,t[i])}function Mr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ii(e){return zh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function dn(){}var Or=null;function zr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var la=null,aa=null;function Yc(e){var t=Il(e);if(t&&(e=t.stateNode)){var n=e[Ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(Cr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Xt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[Ct]||null;if(!a)throw Error(d(90));Cr(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&Rc(l)}break e;case"textarea":Uc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ta(e,!!n.multiple,t,!1)}}}var Br=!1;function Vc(e,t,n){if(Br)return e(t,n);Br=!0;try{var l=e(t);return l}finally{if(Br=!1,(la!==null||aa!==null)&&(Is(),la&&(t=la,e=aa,aa=la=null,Yc(t),e)))for(t=0;t<e.length;t++)Yc(e[t])}}function $a(e,t){var n=e.stateNode;if(n===null)return null;var l=n[Ct]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(d(231,t,typeof n));return n}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lr=!1;if(jn)try{var Wa={};Object.defineProperty(Wa,"passive",{get:function(){Lr=!0}}),window.addEventListener("test",Wa,Wa),window.removeEventListener("test",Wa,Wa)}catch{Lr=!1}var Zn=null,Rr=null,Pi=null;function Qc(){if(Pi)return Pi;var e,t=Rr,n=t.length,l,a="value"in Zn?Zn.value:Zn.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(l=1;l<=r&&t[n-l]===a[i-l];l++);return Pi=a.slice(e,1<l?1-l:void 0)}function es(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ts(){return!0}function Xc(){return!1}function Nt(e){function t(n,l,a,i,r){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ts:Xc,this.isPropagationStopped=Xc,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ts)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ts)},persist:function(){},isPersistent:ts}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ns=Nt(Kn),Ia=F({},Kn,{view:0,detail:0}),Bh=Nt(Ia),Fr,Ur,Pa,ls=F({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pa&&(Pa&&e.type==="mousemove"?(Fr=e.screenX-Pa.screenX,Ur=e.screenY-Pa.screenY):Ur=Fr=0,Pa=e),Fr)},movementY:function(e){return"movementY"in e?e.movementY:Ur}}),Zc=Nt(ls),Lh=F({},ls,{dataTransfer:0}),Rh=Nt(Lh),Fh=F({},Ia,{relatedTarget:0}),qr=Nt(Fh),Uh=F({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),qh=Nt(Uh),Hh=F({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gh=Nt(Hh),Yh=F({},Kn,{data:0}),Kc=Nt(Yh),Vh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xh[e])?!!t[e]:!1}function Hr(){return Zh}var Kh=F({},Ia,{key:function(e){if(e.key){var t=Vh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=es(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hr,charCode:function(e){return e.type==="keypress"?es(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?es(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jh=Nt(Kh),$h=F({},ls,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jc=Nt($h),Wh=F({},Kn,{submitter:0}),Ih=Nt(Wh),Ph=F({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hr}),e0=Nt(Ph),t0=F({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),n0=Nt(t0),l0=F({},ls,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),a0=Nt(l0),i0=F({},Kn,{newState:0,oldState:0,source:0}),s0=Nt(i0),r0=[9,13,27,32],Gr=jn&&"CompositionEvent"in window,ei=null;jn&&"documentMode"in document&&(ei=document.documentMode);var o0=jn&&"TextEvent"in window&&!ei,$c=jn&&(!Gr||ei&&8<ei&&11>=ei),Wc=" ",Ic=!1;function Pc(e,t){switch(e){case"keyup":return r0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ed(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ia=!1;function u0(e,t){switch(e){case"compositionend":return ed(t);case"keypress":return t.which!==32?null:(Ic=!0,Wc);case"textInput":return e=t.data,e===Wc&&Ic?null:e;default:return null}}function c0(e,t){if(ia)return e==="compositionend"||!Gr&&Pc(e,t)?(e=Qc(),Pi=Rr=Zn=null,ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $c&&t.locale!=="ko"?null:t.data;default:return null}}var d0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function td(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!d0[e.type]:t==="textarea"}function nd(e,t,n,l){la?aa?aa.push(l):aa=[l]:la=l,t=ar(t,"onChange"),0<t.length&&(n=new ns("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var ti=null,ni=null;function f0(e){Vm(e,0)}function as(e){var t=Ja(e);if(Rc(t))return e}function ld(e,t){if(e==="change")return t}var ad=!1;if(jn){var Yr;if(jn){var Vr="oninput"in document;if(!Vr){var id=document.createElement("div");id.setAttribute("oninput","return;"),Vr=typeof id.oninput=="function"}Yr=Vr}else Yr=!1;ad=Yr&&(!document.documentMode||9<document.documentMode)}function sd(){ti&&(ti.detachEvent("onpropertychange",rd),ni=ti=null)}function rd(e){if(e.propertyName==="value"&&as(ni)){var t=[];nd(t,ni,e,zr(e)),Vc(f0,t)}}function m0(e,t,n){e==="focusin"?(sd(),ti=t,ni=n,ti.attachEvent("onpropertychange",rd)):e==="focusout"&&sd()}function p0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return as(ni)}function h0(e,t){if(e==="click")return as(t)}function x0(e,t){if(e==="input"||e==="change")return as(t)}function g0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:g0;function li(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!Jl.call(t,a)||!Ut(e[a],t[a]))return!1}return!0}function Qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function od(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ud(e,t){var n=od(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=od(n)}}function cd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Qr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qr(e.document)}return t}function Xr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var y0=jn&&"documentMode"in document&&11>=document.documentMode,sa=null,Zr=null,ai=null,Kr=!1;function fd(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kr||sa==null||sa!==Qr(l)||(l=sa,"selectionStart"in l&&Xr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ai&&li(ai,l)||(ai=l,l=ar(Zr,"onSelect"),0<l.length&&(t=new ns("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=sa)))}function jl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ra={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionrun:jl("Transition","TransitionRun"),transitionstart:jl("Transition","TransitionStart"),transitioncancel:jl("Transition","TransitionCancel"),transitionend:jl("Transition","TransitionEnd")},Jr={},md={};jn&&(md=document.createElement("div").style,"AnimationEvent"in window||(delete ra.animationend.animation,delete ra.animationiteration.animation,delete ra.animationstart.animation),"TransitionEvent"in window||delete ra.transitionend.transition);function Cl(e){if(Jr[e])return Jr[e];if(!ra[e])return e;var t=ra[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in md)return Jr[e]=t[n];return e}var pd=Cl("animationend"),hd=Cl("animationiteration"),xd=Cl("animationstart"),b0=Cl("transitionrun"),v0=Cl("transitionstart"),w0=Cl("transitioncancel"),gd=Cl("transitionend"),yd=new Map,$r="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$r.push("scrollEnd");function nn(e,t){yd.set(e,t),Al(t,[e])}var _0=0;function Cn(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=rn.identifierPrefix;var n=_0++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function bd(e){if(e==null||typeof e=="string")return e;var t=null,n=Ta;if(n!==null)for(var l=0;l<n.length;l++){var a=e[n[l]];if(a!=null){if(a==="none")return"none";t=t==null?a:t+(" "+a)}}return t??e.default}function Dn(e,t){return e=bd(e),t=bd(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var is=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zt=[],oa=0,Wr=0;function ss(){for(var e=oa,t=Wr=oa=0;t<e;){var n=Zt[t];Zt[t++]=null;var l=Zt[t];Zt[t++]=null;var a=Zt[t];Zt[t++]=null;var i=Zt[t];if(Zt[t++]=null,l!==null&&a!==null){var r=l.pending;r===null?a.next=a:(a.next=r.next,r.next=a),l.pending=a}i!==0&&vd(n,a,i)}}function rs(e,t,n,l){Zt[oa++]=e,Zt[oa++]=t,Zt[oa++]=n,Zt[oa++]=l,Wr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Ir(e,t,n,l){return rs(e,t,n,l),os(e)}function Dl(e,t){return rs(e,null,null,t),os(e)}function vd(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,i=e.return;i!==null;)i.childLanes|=n,l=i.alternate,l!==null&&(l.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&t!==null&&(a=31-Rt(n),e=i.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),i):null}function os(e){if(50<Si)throw Si=0,Ws=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ua={};function k0(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,n,l){return new k0(e,t,n,l)}function Pr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mn(e,t){var n=e.alternate;return n===null?(n=Dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function wd(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function us(e,t,n,l,a,i){var r=0;if(l=e,typeof l=="function")Pr(l)&&(r=1);else if(typeof l=="string")r=Wx(e,n,$e.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(l){case p:return e=Dt(31,n,t,a),e.elementType=p,e.lanes=i,e;case ve:return Ml(n.children,a,i,t);case Ne:r=8,a|=24;break;case Ve:return e=Dt(12,n,t,a|2),e.elementType=Ve,e.lanes=i,e;case K:return e=Dt(13,n,t,a),e.elementType=K,e.lanes=i,e;case ne:return e=Dt(19,n,t,a),e.elementType=ne,e.lanes=i,e;case O:case c:return e=a|32,e=Dt(30,n,t,e),e.elementType=c,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case se:r=10;break e;case A:r=9;break e;case C:r=11;break e;case he:r=14;break e;case b:r=16,l=null;break e}r=29,n=Error(d(130,e===null?"null":typeof e,"")),l=null}return t=Dt(r,n,t,a),t.elementType=e,t.type=l,t.lanes=i,t}function Ml(e,t,n,l){return e=Dt(7,e,l,t),e.lanes=n,e}function eo(e,t,n){return e=Dt(6,e,null,t),e.lanes=n,e}function _d(e){var t=Dt(18,null,null,0);return t.stateNode=e,t}function to(e,t,n){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var kd=new WeakMap;function Kt(e,t){if(typeof e=="object"&&e!==null){var n=kd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:El(t)},kd.set(e,t),t)}return{value:e,source:t,stack:El(t)}}var ca=[],da=0,cs=null,ii=0,Jt=[],$t=0,Jn=null,fn=1,mn="";function On(e,t){ca[da++]=ii,ca[da++]=cs,cs=e,ii=t}function Ed(e,t,n){Jt[$t++]=fn,Jt[$t++]=mn,Jt[$t++]=Jn,Jn=e;var l=fn;e=mn;var a=32-Rt(l)-1;l&=~(1<<a),n+=1;var i=32-Rt(t)+a;if(30<i){var r=a-a%5;i=(l&(1<<r)-1).toString(32),l>>=r,a-=r,fn=1<<32-Rt(t)+a|n<<a|l,mn=i+e}else fn=1<<i|n<<a|l,mn=e}function ds(e){e.return!==null&&(On(e,1),Ed(e,1,0))}function no(e){for(;e===cs;)cs=ca[--da],ca[da]=null,ii=ca[--da],ca[da]=null;for(;e===Jn;)Jn=Jt[--$t],Jt[$t]=null,mn=Jt[--$t],Jt[$t]=null,fn=Jt[--$t],Jt[$t]=null}function Nd(e,t){Jt[$t++]=fn,Jt[$t++]=mn,Jt[$t++]=Jn,fn=t.id,mn=t.overflow,Jn=e}var dt=null,Ke=null,Te=!1,$n=null,Wt=!1,lo=Error(d(519));function Wn(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw si(Kt(t,e)),lo}function Sd(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[pt]=e,t[Ct]=l,n){case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":case"embed":Ce("load",t);break;case"video":case"audio":for(n=0;n<Ai.length;n++)Ce(Ai[n],t);break;case"source":Ce("error",t);break;case"img":case"image":case"link":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"input":Ce("invalid",t),Fc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ce("invalid",t);break;case"textarea":Ce("invalid",t),qc(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||Km(t.textContent,n)?(l.popover!=null&&(Ce("beforetoggle",t),Ce("toggle",t)),l.onScroll!=null&&Ce("scroll",t),l.onScrollEnd!=null&&Ce("scrollend",t),l.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||Wn(e,!0)}function fs(e){for(dt=e.return;dt;)switch(dt.tag){case 5:case 31:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:dt=dt.return}}function fa(e){if(e!==dt)return!1;if(!Te)return fs(e),Te=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||zu(e.type,e.memoizedProps)),n=!n),n&&Ke&&Wn(e),fs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Ke=mp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Ke=mp(e)}else t===27?(t=Ke,ml(e.type)?(e=Yu,Yu=null,Ke=e):Ke=t):Ke=dt?Pt(e.stateNode.nextSibling):null;return!0}function Ol(){Ke=dt=null,Te=!1}function ao(){var e=$n;return e!==null&&(zt===null?zt=e:zt.push.apply(zt,e),$n=null),e}function si(e){$n===null?$n=[e]:$n.push(e)}var io=Ge(null),zl=null,zn=null;function In(e,t,n){_e(io,t._currentValue),t._currentValue=n}function Bn(e){e._currentValue=io.current,ze(io)}function ms(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function so(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var r=a.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=a;for(var f=0;f<t.length;f++)if(u.context===t[f]){i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ms(i.return,n,e),l||(r=null);break e}i=u.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(d(341));r.lanes|=n,i=r.alternate,i!==null&&(i.lanes|=n),ms(r,n,e),r=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),ms(a.return,n,e),r=a.child,r=r!==null?r.sibling:null):r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Bl(e,t,n,l){e=null;for(var a=t,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(d(387));if(r=r.memoizedProps,r!==null){var u=a.type;Ut(a.pendingProps.value,r.value)||(e!==null?e.push(u):e=[u])}}else if(a===kn.current){if(r=a.alternate,r===null)throw Error(d(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Ra):e=[Ra])}a=a.return}return e!==null&&so(t,e,n,l),t.flags|=262144,e!==null}function ps(e){for(e=e.firstContext;e!==null;){if(!Ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ll(e){zl=e,zn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ht(e){return Td(zl,e)}function hs(e,t){return zl===null&&Ll(e),Td(e,t)}function Td(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},zn===null){if(e===null)throw Error(d(308));zn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else zn=zn.next=t;return n}var E0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},N0=o.unstable_scheduleCallback,S0=o.unstable_NormalPriority,at={$$typeof:se,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ro(){return{controller:new E0,data:new Map,refCount:0}}function ri(e){e.refCount--,e.refCount===0&&N0(S0,function(){e.controller.abort()})}function Ad(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var l=t[e];n.indexOf(l)===-1&&n.push(l)}}}var oi=null;function T0(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var ui=null,oo=0,Rl=0,ma=null;function A0(e,t){if(ui===null){var n=ui=[];oo=0,Rl=Nu(),ma={status:"pending",value:void 0,then:function(l){n.push(l)}}}return oo++,t.then(jd,jd),t}function jd(){if(--oo===0&&(oi=null,ui!==null)){ma!==null&&(ma.status="fulfilled");var e=ui;ui=null,Rl=0,ma=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function j0(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var Cd=J.S;J.S=function(e,t){if(km=lt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&A0(e,t),oi!==null)for(var n=Da;n!==null;)Ad(n,oi),n=n.next;if(n=e.types,n!==null){for(var l=Da;l!==null;)Ad(l,n),l=l.next;if(Rl!==0){l=oi,l===null&&(l=oi=[]);for(var a=0;a<n.length;a++){var i=n[a];l.indexOf(i)===-1&&l.push(i)}}}Cd!==null&&Cd(e,t)};var Fl=Ge(null);function uo(){var e=Fl.current;return e!==null?e:Xe.pooledCache}function xs(e,t){t===null?_e(Fl,Fl.current):_e(Fl,t.pool)}function Dd(){var e=uo();return e===null?null:{parent:at._currentValue,pool:e}}var pa=Error(d(460)),co=Error(d(474)),gs=Error(d(542)),ys={then:function(){}};function Md(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Od(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(dn,dn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bd(e),e===void 0&&!("reason"in t)?Error(d(600)):e;default:if(typeof t.status=="string")t.then(dn,dn);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bd(e),e}throw ql=t,pa}}function Ul(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ql=n,pa):n}}var ql=null;function zd(){if(ql===null)throw Error(d(459));var e=ql;return ql=null,e}function Bd(e){if(e===pa||e===gs)throw Error(d(483))}var ha=null,ci=0;function bs(e){var t=ci;return ci+=1,ha===null&&(ha=[]),Od(ha,e,t)}function Pn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function vs(e,t){throw t.$$typeof===ee?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ld(e){function t(v,x){if(e){var S=v.deletions;S===null?(v.deletions=[x],v.flags|=16):S.push(x)}}function n(v,x){if(!e)return null;for(;x!==null;)t(v,x),x=x.sibling;return null}function l(v){for(var x=new Map;v!==null;)v.key===null?x.set(v.index,v):x.set(v.key,v),v=v.sibling;return x}function a(v,x){return v=Mn(v,x),v.index=0,v.sibling=null,v}function i(v,x,S){return v.index=S,e?(S=v.alternate,S!==null?(S=S.index,S<x?(v.flags|=2,x):S):(v.flags|=134217730,x)):(v.flags|=1048576,x)}function r(v){return e&&v.alternate===null&&(v.flags|=134217730),v}function u(v,x,S,U){return x===null||x.tag!==6?(x=eo(S,v.mode,U),x.return=v,x):(x=a(x,S),x.return=v,x)}function f(v,x,S,U){var ce=S.type;return ce===ve?(v=D(v,x,S.props.children,U,S.key),Pn(v,S),v):x!==null&&(x.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===b&&Ul(ce)===x.type)?(x=a(x,S.props),Pn(x,S),x.return=v,x):(x=us(S.type,S.key,S.props,null,v.mode,U),Pn(x,S),x.return=v,x)}function w(v,x,S,U){return x===null||x.tag!==4||x.stateNode.containerInfo!==S.containerInfo||x.stateNode.implementation!==S.implementation?(x=to(S,v.mode,U),x.return=v,x):(x=a(x,S.children||[]),x.return=v,x)}function D(v,x,S,U,ce){return x===null||x.tag!==7?(x=Ml(S,v.mode,U,ce),x.return=v,x):(x=a(x,S),x.return=v,x)}function q(v,x,S){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=eo(""+x,v.mode,S),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case V:return S=us(x.type,x.key,x.props,null,v.mode,S),Pn(S,x),S.return=v,S;case pe:return x=to(x,v.mode,S),x.return=v,x;case b:return x=Ul(x),q(v,x,S)}if(de(x)||Y(x))return x=Ml(x,v.mode,S,null),x.return=v,x;if(typeof x.then=="function")return q(v,bs(x),S);if(x.$$typeof===se)return q(v,hs(v,x),S);vs(v,x)}return null}function y(v,x,S,U){var ce=x!==null?x.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return ce!==null?null:u(v,x,""+S,U);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case V:return S.key===ce?f(v,x,S,U):null;case pe:return S.key===ce?w(v,x,S,U):null;case b:return S=Ul(S),y(v,x,S,U)}if(de(S)||Y(S))return ce!==null?null:D(v,x,S,U,null);if(typeof S.then=="function")return y(v,x,bs(S),U);if(S.$$typeof===se)return y(v,x,hs(v,S),U);vs(v,S)}return null}function T(v,x,S,U,ce){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return v=v.get(S)||null,u(x,v,""+U,ce);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case V:return v=v.get(U.key===null?S:U.key)||null,f(x,v,U,ce);case pe:return v=v.get(U.key===null?S:U.key)||null,w(x,v,U,ce);case b:return U=Ul(U),T(v,x,S,U,ce)}if(de(U)||Y(U))return v=v.get(S)||null,D(x,v,U,ce,null);if(typeof U.then=="function")return T(v,x,S,bs(U),ce);if(U.$$typeof===se)return T(v,x,S,hs(x,U),ce);vs(x,U)}return null}function ie(v,x,S,U){for(var ce=null,Oe=null,xe=x,be=x=0,rt=null;xe!==null&&be<S.length;be++){xe.index>be?(rt=xe,xe=null):rt=xe.sibling;var Be=y(v,xe,S[be],U);if(Be===null){xe===null&&(xe=rt);break}e&&xe&&Be.alternate===null&&t(v,xe),x=i(Be,x,be),Oe===null?ce=Be:Oe.sibling=Be,Oe=Be,xe=rt}if(be===S.length)return n(v,xe),Te&&On(v,be),ce;if(xe===null){for(;be<S.length;be++)xe=q(v,S[be],U),xe!==null&&(x=i(xe,x,be),Oe===null?ce=xe:Oe.sibling=xe,Oe=xe);return Te&&On(v,be),ce}for(xe=l(xe);be<S.length;be++)rt=T(xe,v,be,S[be],U),rt!==null&&(e&&(Be=rt.alternate,Be!==null&&xe.delete(Be.key===null?be:Be.key)),x=i(rt,x,be),Oe===null?ce=rt:Oe.sibling=rt,Oe=rt);return e&&xe.forEach(function(yl){return t(v,yl)}),Te&&On(v,be),ce}function fe(v,x,S,U){if(S==null)throw Error(d(151));for(var ce=null,Oe=null,xe=x,be=x=0,rt=null,Be=S.next();xe!==null&&!Be.done;be++,Be=S.next()){xe.index>be?(rt=xe,xe=null):rt=xe.sibling;var yl=y(v,xe,Be.value,U);if(yl===null){xe===null&&(xe=rt);break}e&&xe&&yl.alternate===null&&t(v,xe),x=i(yl,x,be),Oe===null?ce=yl:Oe.sibling=yl,Oe=yl,xe=rt}if(Be.done)return n(v,xe),Te&&On(v,be),ce;if(xe===null){for(;!Be.done;be++,Be=S.next())Be=q(v,Be.value,U),Be!==null&&(x=i(Be,x,be),Oe===null?ce=Be:Oe.sibling=Be,Oe=Be);return Te&&On(v,be),ce}for(xe=l(xe);!Be.done;be++,Be=S.next())Be=T(xe,v,be,Be.value,U),Be!==null&&(e&&(rt=Be.alternate,rt!==null&&xe.delete(rt.key===null?be:rt.key)),x=i(Be,x,be),Oe===null?ce=Be:Oe.sibling=Be,Oe=Be);return e&&xe.forEach(function(ug){return t(v,ug)}),Te&&On(v,be),ce}function Ee(v,x,S,U){if(typeof S=="object"&&S!==null&&S.type===ve&&S.key===null&&S.props.ref===void 0&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case V:e:{for(var ce=S.key;x!==null;){if(x.key===ce){if(ce=S.type,ce===ve){if(x.tag===7){n(v,x.sibling),U=a(x,S.props.children),Pn(U,S),U.return=v,v=U;break e}}else if(x.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===b&&Ul(ce)===x.type){n(v,x.sibling),U=a(x,S.props),Pn(U,S),U.return=v,v=U;break e}n(v,x);break}else t(v,x);x=x.sibling}S.type===ve?(U=Ml(S.props.children,v.mode,U,S.key),Pn(U,S),U.return=v,v=U):(U=us(S.type,S.key,S.props,null,v.mode,U),Pn(U,S),U.return=v,v=U)}return r(v);case pe:e:{for(ce=S.key;x!==null;){if(x.key===ce)if(x.tag===4&&x.stateNode.containerInfo===S.containerInfo&&x.stateNode.implementation===S.implementation){n(v,x.sibling),U=a(x,S.children||[]),U.return=v,v=U;break e}else{n(v,x);break}else t(v,x);x=x.sibling}U=to(S,v.mode,U),U.return=v,v=U}return r(v);case b:return S=Ul(S),Ee(v,x,S,U)}if(de(S))return ie(v,x,S,U);if(Y(S)){if(ce=Y(S),typeof ce!="function")throw Error(d(150));return S=ce.call(S),fe(v,x,S,U)}if(typeof S.then=="function")return Ee(v,x,bs(S),U);if(S.$$typeof===se)return Ee(v,x,hs(v,S),U);vs(v,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,x!==null&&x.tag===6?(n(v,x.sibling),U=a(x,S),U.return=v,v=U):(n(v,x),U=eo(S,v.mode,U),U.return=v,v=U),r(v)):n(v,x)}return function(v,x,S,U){try{ci=0;var ce=Ee(v,x,S,U);return ha=null,ce}catch(xe){if(xe===pa||xe===gs)throw xe;var Oe=Dt(29,xe,null,v.mode);return Oe.lanes=U,Oe.return=v,Oe}finally{}}}var Hl=Ld(!0),Rd=Ld(!1),el=!1;function fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function tl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function nl(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Re&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=os(e),vd(e,null,n),t}return rs(e,l,t,n),os(e)}function di(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Ec(e,n)}}function po(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?a=i=r:i=i.next=r,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ho=!1;function fi(){if(ho){var e=ma;if(e!==null)throw e}}function mi(e,t,n,l){ho=!1;var a=e.updateQueue;el=!1;var i=a.firstBaseUpdate,r=a.lastBaseUpdate,u=a.shared.pending;if(u!==null){a.shared.pending=null;var f=u,w=f.next;f.next=null,r===null?i=w:r.next=w,r=f;var D=e.alternate;D!==null&&(D=D.updateQueue,u=D.lastBaseUpdate,u!==r&&(u===null?D.firstBaseUpdate=w:u.next=w,D.lastBaseUpdate=f))}if(i!==null){var q=a.baseState;r=0,D=w=f=null,u=i;do{var y=u.lane&-536870913,T=y!==u.lane;if(T?(Me&y)===y:(l&y)===y){y!==0&&y===Rl&&(ho=!0),D!==null&&(D=D.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var ie=e,fe=u;y=t;var Ee=n;switch(fe.tag){case 1:if(ie=fe.payload,typeof ie=="function"){q=ie.call(Ee,q,y);break e}q=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=fe.payload,y=typeof ie=="function"?ie.call(Ee,q,y):ie,y==null)break e;q=F({},q,y);break e;case 2:el=!0}}y=u.callback,y!==null&&(e.flags|=64,T&&(e.flags|=8192),T=a.callbacks,T===null?a.callbacks=[y]:T.push(y))}else T={lane:y,tag:u.tag,payload:u.payload,callback:u.callback,next:null},D===null?(w=D=T,f=q):D=D.next=T,r|=y;if(u=u.next,u===null){if(u=a.shared.pending,u===null)break;T=u,u=T.next,T.next=null,a.lastBaseUpdate=T,a.shared.pending=null}}while(!0);D===null&&(f=q),a.baseState=f,a.firstBaseUpdate=w,a.lastBaseUpdate=D,i===null&&(a.shared.lanes=0),ul|=r,e.lanes=r,e.memoizedState=q}}function Fd(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function Ud(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Fd(n[e],t)}var ll=Ge(null),ws=Ge(0);function qd(e,t){e=qn,_e(ws,e),_e(ll,t),qn=e|t.baseLanes}function xo(){_e(ws,qn),_e(ll,ll.current)}function go(){qn=ws.current,ze(ll),ze(ws)}var xt=Ge(null),_t=null;function al(e){var t=e.alternate;_e(gt,gt.current&1),_e(xt,e),_t===null&&(t===null||ll.current!==null||t.memoizedState!==null)&&(_t=e)}function yo(e){_e(gt,gt.current),_e(xt,e),_t===null&&(_t=e)}function Hd(e){e.tag===22?(_e(gt,gt.current),_e(xt,e),_t===null&&(_t=e)):il()}function il(){_e(gt,gt.current),_e(xt,xt.current)}function qt(e){ze(xt),_t===e&&(_t=null),ze(gt)}var gt=Ge(0);function pi(e,t){_e(xt,xt.current),_e(gt,t)}function bo(e){ze(gt),ze(xt),_t===e&&(_t=null)}function _s(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Hu(n)||Gu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ln=0,ke=null,Ye=null,it=null,ks=!1,xa=!1,Gl=!1,Es=0,hi=0,ga=null,C0=0;function et(){throw Error(d(321))}function vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ut(e[n],t[n]))return!1;return!0}function wo(e,t,n,l,a,i){return Ln=i,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,J.H=e===null||e.memoizedState===null?Nf:Sf,Gl=!1,i=n(l,a),Gl=!1,xa&&(i=Yd(t,n,l,a)),Gd(e),i}function Gd(e){J.H=Ds;var t=Ye!==null&&Ye.next!==null;if(Ln=0,it=Ye=ke=null,ks=!1,hi=0,ga=null,t)throw Error(d(300));e===null||st||(e=e.dependencies,e!==null&&ps(e)&&(st=!0))}function Yd(e,t,n,l){ke=e;var a=0;do{if(xa&&(ga=null),hi=0,xa=!1,25<=a)throw Error(d(301));if(a+=1,it=Ye=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}J.H=F0,i=t(n,l)}while(xa);return i}function D0(){var e=J.H,t=e.useState()[0];return t=typeof t.then=="function"?xi(t):t,e=e.useState()[0],(Ye!==null?Ye.memoizedState:null)!==e&&(ke.flags|=1024),t}function _o(){var e=Es!==0;return Es=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Eo(e){if(ks){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ks=!1}Ln=0,it=Ye=ke=null,xa=!1,hi=Es=0,ga=null}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?ke.memoizedState=it=e:it=it.next=e,it}function nt(){if(Ye===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=it===null?ke.memoizedState:it.next;if(t!==null)it=t,Ye=e;else{if(e===null)throw ke.alternate===null?Error(d(467)):Error(d(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},it===null?ke.memoizedState=it=e:it=it.next=e}return it}function Ns(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xi(e){var t=hi;return hi+=1,ga===null&&(ga=[]),e=Od(ga,e,t),t=ke,(it===null?t.memoizedState:it.next)===null&&(t=t.alternate,J.H=t===null||t.memoizedState===null?Nf:Sf),e}function Ss(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xi(e);if(e.$$typeof===j)return;if(e.$$typeof===se)return ht(e)}throw Error(d(438,String(e)))}function No(e){var t=null,n=ke.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=ke.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ns(),ke.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=I;return t.index++,n}function Rn(e,t){return typeof t=="function"?t(e):t}function Ts(e){var t=nt();return So(t,Ye,e)}function So(e,t,n){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=n;var a=e.baseQueue,i=l.pending;if(i!==null){if(a!==null){var r=a.next;a.next=i.next,i.next=r}t.baseQueue=a=i,l.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{t=a.next;var u=r=null,f=null,w=t,D=!1;do{var q=w.lane&-536870913;if(q!==w.lane?(Me&q)===q:(Ln&q)===q){var y=w.revertLane;if(y===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),q===Rl&&(D=!0);else if((Ln&y)===y){w=w.next,y===Rl&&(D=!0);continue}else q={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},f===null?(u=f=q,r=i):f=f.next=q,ke.lanes|=y,ul|=y;q=w.action,Gl&&n(i,q),i=w.hasEagerState?w.eagerState:n(i,q)}else y={lane:q,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},f===null?(u=f=y,r=i):f=f.next=y,ke.lanes|=q,ul|=q;w=w.next}while(w!==null&&w!==t);if(f===null?r=i:f.next=u,!Ut(i,e.memoizedState)&&(st=!0,D&&(n=ma,n!==null)))throw n;e.memoizedState=i,e.baseState=r,e.baseQueue=f,l.lastRenderedState=i}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function To(e){var t=nt(),n=t.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do i=e(i,r.action),r=r.next;while(r!==a);Ut(i,t.memoizedState)||(st=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,l]}function Vd(e,t,n){var l=ke,a=nt(),i=Te;if(i){if(n===void 0)throw Error(d(407));n=n()}else n=t();var r=!Ut((Ye||a).memoizedState,n);if(r&&(a.memoizedState=n,st=!0),a=a.queue,Co(Zd.bind(null,l,a,e),[e]),e=a.getSnapshot!==t||r||it!==null&&(it.memoizedState.tag&1)!==0,ya(e?9:8,{destroy:void 0},Xd.bind(null,l,a,n,t),null),e){if(l.flags|=2048,Xe===null)throw Error(d(349));i||(Ln&127)!==0||Qd(l,t,n)}return n}function Qd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t=Ns(),ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xd(e,t,n,l){t.value=n,t.getSnapshot=l,Kd(t)&&Jd(e)}function Zd(e,t,n){return n(function(){Kd(t)&&Jd(e)})}function Kd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ut(e,n)}catch{return!0}}function Jd(e){var t=Dl(e,2);t!==null&&Bt(t,e,2)}function Ao(e){var t=St();if(typeof e=="function"){var n=e;if(e=n(),Gl){Xn(!0);try{n()}finally{Xn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:e},t}function $d(e,t,n,l){return e.baseState=n,So(e,Ye,typeof l=="function"?l:Rn)}function M0(e,t,n,l,a){if(Cs(e))throw Error(d(485));if(e=t.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};J.T!==null?n(!0):i.isTransition=!1,l(i),n=t.pending,n===null?(i.next=t.pending=i,Wd(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Wd(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var i=J.T,r={};r.types=i!==null?i.types:null,J.T=r;try{var u=n(a,l),f=J.S;f!==null&&f(r,u),Id(e,t,u)}catch(w){jo(e,t,w)}finally{i!==null&&r.types!==null&&(i.types=r.types),J.T=i}}else try{i=n(a,l),Id(e,t,i)}catch(w){jo(e,t,w)}}function Id(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){Pd(e,t,l)},function(l){return jo(e,t,l)}):Pd(e,t,n)}function Pd(e,t,n){t.status="fulfilled",t.value=n,ef(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Wd(e,n)))}function jo(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,ef(t),t=t.next;while(t!==l)}e.action=null}function ef(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function tf(e,t){return t}function nf(e,t){if(Te){var n=Xe.formState;if(n!==null){e:{var l=ke;if(Te){if(Ke){t:{for(var a=Ke,i=Wt;a.nodeType!==8;){if(!i){a=null;break t}if(a=Pt(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){Ke=Pt(a.nextSibling),l=a.data==="F!";break e}}Wn(l)}l=!1}l&&(t=n[0])}}return n=St(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tf,lastRenderedState:t},n.queue=l,n=_f.bind(null,ke,l),l.dispatch=n,l=Ao(!1),i=Bo.bind(null,ke,!1,l.queue),l=St(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=M0.bind(null,ke,a,i,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function lf(e){var t=nt();return af(t,Ye,e)}function af(e,t,n){if(t=So(e,t,tf)[0],e=Ts(Rn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=xi(t)}catch(r){throw r===pa?gs:r}else l=t;t=nt();var a=t.queue,i=a.dispatch;return n!==t.memoizedState&&(ke.flags|=2048,ya(9,{destroy:void 0},O0.bind(null,a,n),null)),[l,i,e]}function O0(e,t){e.action=t}function sf(e){var t=nt(),n=Ye;if(n!==null)return af(t,n,e);nt(),t=t.memoizedState,n=nt();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function ya(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=ke.updateQueue,t===null&&(t=Ns(),ke.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function rf(){return nt().memoizedState}function As(e,t,n,l){var a=St();ke.flags|=e,a.memoizedState=ya(1|t,{destroy:void 0},n,l===void 0?null:l)}function js(e,t,n,l){var a=nt();l=l===void 0?null:l;var i=a.memoizedState.inst;Ye!==null&&l!==null&&vo(l,Ye.memoizedState.deps)?a.memoizedState=ya(t,i,n,l):(ke.flags|=e,a.memoizedState=ya(1|t,i,n,l))}function of(e,t){As(8390656,8,e,t)}function Co(e,t){js(2048,8,e,t)}function z0(e){ke.flags|=4;var t=ke.updateQueue;if(t===null)t=Ns(),ke.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function uf(e){var t=nt().memoizedState;return z0({ref:t,nextImpl:e}),function(){if((Re&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function cf(e,t){return js(4,2,e,t)}function df(e,t){return js(4,4,e,t)}function ff(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mf(e,t,n){n=n!=null?n.concat([e]):null,js(4,4,ff.bind(null,t,e),n)}function Do(){}function pf(e,t){var n=nt();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&vo(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function hf(e,t){var n=nt();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&vo(t,l[1]))return l[0];if(l=e(),Gl){Xn(!0);try{e()}finally{Xn(!1)}}return n.memoizedState=[l,t],l}function Mo(e,t,n){return n===void 0||(Ln&1073741824)!==0&&(Me&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Nm(),ke.lanes|=e,ul|=e,n)}function xf(e,t,n,l){return Ut(n,t)?n:ll.current!==null?(e=Mo(e,n,l),Ut(e,t)||(st=!0),e):(Ln&106)===0||(Ln&1073741824)!==0&&(Me&261930)===0?(st=!0,e.memoizedState=n):(e=Nm(),ke.lanes|=e,ul|=e,t)}function gf(e,t,n,l,a){var i=ae.p;ae.p=i!==0&&8>i?i:8;var r=J.T,u={};u.types=r!==null?r.types:null,J.T=u,Bo(e,!1,t,n);try{var f=a(),w=J.S;if(w!==null&&w(u,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var D=j0(f,l);gi(e,t,D,Vt(e))}else gi(e,t,l,Vt(e))}catch(q){gi(e,t,{then:function(){},status:"rejected",reason:q},Vt())}finally{ae.p=i,r!==null&&u.types!==null&&(r.types=u.types),J.T=r}}function B0(){}function Oo(e,t,n,l){if(e.tag!==5)throw Error(d(476));var a=yf(e).queue;gf(e,a,t,De,n===null?B0:function(){return bf(e),n(l)})}function yf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:De,baseState:De,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:De},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function bf(e){var t=yf(e);t.next===null&&(t=e.alternate.memoizedState),gi(e,t.next.queue,{},Vt())}function zo(){return ht(Ra)}function vf(){return nt().memoizedState}function wf(){return nt().memoizedState}function L0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Vt();e=tl(n);var l=nl(t,e,n);l!==null&&(Bt(l,t,n),di(l,t,n)),t={cache:ro()},e.payload=t;return}t=t.return}}function R0(e,t,n){var l=Vt();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Cs(e)?kf(t,n):(n=Ir(e,t,n,l),n!==null&&(Bt(n,e,l),Ef(n,t,l)))}function _f(e,t,n){var l=Vt();gi(e,t,n,l)}function gi(e,t,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cs(e))kf(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,u=i(r,n);if(a.hasEagerState=!0,a.eagerState=u,Ut(u,r))return rs(e,t,a,0),Xe===null&&ss(),!1}catch{}finally{}if(n=Ir(e,t,a,l),n!==null)return Bt(n,e,l),Ef(n,t,l),!0}return!1}function Bo(e,t,n,l){if(l={lane:2,revertLane:Nu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Cs(e)){if(t)throw Error(d(479))}else t=Ir(e,n,l,2),t!==null&&Bt(t,e,2)}function Cs(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function kf(e,t){xa=ks=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ef(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Ec(e,n)}}var Ds={readContext:ht,use:Ss,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useLayoutEffect:et,useInsertionEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useSyncExternalStore:et,useId:et,useHostTransitionStatus:et,useFormState:et,useActionState:et,useOptimistic:et,useMemoCache:et,useCacheRefresh:et,useEffectEvent:et},Nf={readContext:ht,use:Ss,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:of,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,As(4194308,4,ff.bind(null,t,e),n)},useLayoutEffect:function(e,t){return As(4194308,4,e,t)},useInsertionEffect:function(e,t){As(4,2,e,t)},useMemo:function(e,t){var n=St();t=t===void 0?null:t;var l=e();if(Gl){Xn(!0);try{e()}finally{Xn(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=St();if(n!==void 0){var a=n(t);if(Gl){Xn(!0);try{n(t)}finally{Xn(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=R0.bind(null,ke,e),[l.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:function(e){e=Ao(e);var t=e.queue,n=_f.bind(null,ke,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Do,useDeferredValue:function(e,t){var n=St();return Mo(n,e,t)},useTransition:function(){var e=Ao(!1);return e=gf.bind(null,ke,e.queue,!0,!1),St().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=ke,a=St();if(Te){if(n===void 0)throw Error(d(407));n=n()}else{if(n=t(),Xe===null)throw Error(d(349));(Me&127)!==0||Qd(l,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,of(Zd.bind(null,l,i,e),[e]),l.flags|=2048,ya(9,{destroy:void 0},Xd.bind(null,l,i,n,t),null),n},useId:function(){var e=St(),t=Xe.identifierPrefix;if(Te){var n=mn,l=fn;n=(l&~(1<<32-Rt(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Es++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=C0++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zo,useFormState:nf,useActionState:nf,useOptimistic:function(e){var t=St();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Bo.bind(null,ke,!0,n),n.dispatch=t,[e,t]},useMemoCache:No,useCacheRefresh:function(){return St().memoizedState=L0.bind(null,ke)},useEffectEvent:function(e){var t=St(),n={impl:e};return t.memoizedState=n,function(){if((Re&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}},Sf={readContext:ht,use:Ss,useCallback:pf,useContext:ht,useEffect:Co,useImperativeHandle:mf,useInsertionEffect:cf,useLayoutEffect:df,useMemo:hf,useReducer:Ts,useRef:rf,useState:function(){return Ts(Rn)},useDebugValue:Do,useDeferredValue:function(e,t){var n=nt();return xf(n,Ye.memoizedState,e,t)},useTransition:function(){var e=Ts(Rn)[0],t=nt().memoizedState;return[typeof e=="boolean"?e:xi(e),t]},useSyncExternalStore:Vd,useId:vf,useHostTransitionStatus:zo,useFormState:lf,useActionState:lf,useOptimistic:function(e,t){var n=nt();return $d(n,Ye,e,t)},useMemoCache:No,useCacheRefresh:wf,useEffectEvent:uf},F0={readContext:ht,use:Ss,useCallback:pf,useContext:ht,useEffect:Co,useImperativeHandle:mf,useInsertionEffect:cf,useLayoutEffect:df,useMemo:hf,useReducer:To,useRef:rf,useState:function(){return To(Rn)},useDebugValue:Do,useDeferredValue:function(e,t){var n=nt();return Ye===null?Mo(n,e,t):xf(n,Ye.memoizedState,e,t)},useTransition:function(){var e=To(Rn)[0],t=nt().memoizedState;return[typeof e=="boolean"?e:xi(e),t]},useSyncExternalStore:Vd,useId:vf,useHostTransitionStatus:zo,useFormState:sf,useActionState:sf,useOptimistic:function(e,t){var n=nt();return Ye!==null?$d(n,Ye,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:No,useCacheRefresh:wf,useEffectEvent:uf};function Lo(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:F({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ro={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Vt(),a=tl(l);a.payload=t,n!=null&&(a.callback=n),t=nl(e,a,l),t!==null&&(Bt(t,e,l),di(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Vt(),a=tl(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=nl(e,a,l),t!==null&&(Bt(t,e,l),di(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Vt(),l=tl(n);l.tag=2,t!=null&&(l.callback=t),t=nl(e,l,n),t!==null&&(Bt(t,e,n),di(t,e,n))}};function Tf(e,t,n,l,a,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,r):t.prototype&&t.prototype.isPureReactComponent?!li(n,l)||!li(a,i):!0}function Af(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Ro.enqueueReplaceState(t,t.state,null)}function Yl(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=F({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function jf(e){is(e)}function Cf(e){console.error(e)}function Df(e){is(e)}function Ms(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Mf(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Fo(e,t,n){return n=tl(n),n.tag=3,n.payload={element:null},n.callback=function(){Ms(e,t)},n}function Of(e){return e=tl(e),e.tag=3,e}function zf(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;e.payload=function(){return a(i)},e.callback=function(){Mf(t,n,l)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Mf(t,n,l),typeof a!="function"&&(cl===null?cl=new Set([this]):cl.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function U0(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Bl(t,n,a,!0),n=xt.current,n!==null){switch(n.tag){case 31:case 13:case 19:return _t===null?Ps():n.alternate===null&&tt===0&&(tt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===ys?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),_u(e,l,a)),!1;case 22:return n.flags|=65536,l===ys?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),_u(e,l,a)),!1}throw Error(d(435,n.tag))}return _u(e,l,a),Ps(),!1}if(Te)return t=xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==lo&&(e=Error(d(422),{cause:l}),si(Kt(e,n)))):(l!==lo&&(t=Error(d(423),{cause:l}),si(Kt(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=Kt(l,n),a=Fo(e.stateNode,l,a),po(e,a),tt!==4&&(tt=2)),!1;var i=Error(d(520),{cause:l});if(i=Kt(i,n),Ni===null?Ni=[i]:Ni.push(i),tt!==4&&(tt=2),t===null)return!0;l=Kt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Fo(n.stateNode,l,e),po(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(cl===null||!cl.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Of(a),zf(a,e,n,l),po(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Uo=Error(d(461)),st=!1;function ot(e,t,n,l){t.child=e===null?Rd(t,null,n,l):Hl(t,e.child,n,l)}function Bf(e,t,n,l,a){n=n.render;var i=t.ref;if("ref"in l){var r={};for(var u in l)u!=="ref"&&(r[u]=l[u])}else r=l;return Ll(t),l=wo(e,t,n,r,i,a),u=_o(),e!==null&&!st?(ko(e,t,a),Fn(e,t,a)):(Te&&u&&ds(t),t.flags|=1,ot(e,t,l,a),t.child)}function Lf(e,t,n,l,a){if(e===null){var i=n.type;return typeof i=="function"&&!Pr(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Rf(e,t,i,l,a)):(e=us(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Zo(e,a)){var r=i.memoizedProps;if(n=n.compare,n=n!==null?n:li,n(r,l)&&e.ref===t.ref)return Fn(e,t,a)}return t.flags|=1,e=Mn(i,l),e.ref=t.ref,e.return=t,t.child=e}function Rf(e,t,n,l,a){if(e!==null){var i=e.memoizedProps;if(li(i,l)&&e.ref===t.ref)if(st=!1,t.pendingProps=l=i,Zo(e,a))(e.flags&131072)!==0&&(st=!0);else return t.lanes=e.lanes,Fn(e,t,a)}return qo(e,t,n,l,a)}function Ff(e,t,n,l){var a=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(l=t.child=e.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~i}else l=0,t.child=null;return Uf(e,t,i,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&xs(t,i!==null?i.cachePool:null),i!==null?qd(t,i):xo(),Hd(t);else return l=t.lanes=536870912,Uf(e,t,i!==null?i.baseLanes|n:n,n,l)}else i!==null?(xs(t,i.cachePool),qd(t,i),il(),t.memoizedState=null):(e!==null&&xs(t,null),xo(),il());return ot(e,t,a,n),t.child}function yi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uf(e,t,n,l,a){var i=uo();return i=i===null?null:{parent:at._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&xs(t,null),xo(),Hd(t),e!==null&&Bl(e,t,l,!0),t.childLanes=a,null}function Os(e,t){return t=zs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function qf(e,t,n){return Hl(t,e.child,null,n),e=Os(t,t.pendingProps),e.flags|=2,qt(t),t.memoizedState=null,e}function q0(e,t,n){var l=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Te){if(l.mode==="hidden")return e=Os(t,l),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},yi(null,e);if(yo(t),(e=Ke)?(e=fp(e,Wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Jn!==null?{id:fn,overflow:mn}:null,retryLane:536870912,hydrationErrors:null},n=_d(e),n.return=t,t.child=n,dt=t,Ke=null)):e=null,e===null)throw Wn(t);return t.lanes=536870912,null}return Os(t,l)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(yo(t),a)if(t.flags&256)t.flags&=-257,t=qf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(st||Bl(e,t,n,!1),a=(n&e.childLanes)!==0,st||a){if(ll.current===null){if(l=Xe,l!==null&&(r=Nc(l,n),r!==0&&r!==i.retryLane))throw i.retryLane=r,Dl(e,r),Bt(l,e,r),Uo;Ps()}t=qf(e,t,n)}else e=i.treeContext,Ke=Pt(r.nextSibling),dt=t,Te=!0,$n=null,Wt=!1,e!==null&&Nd(t,e),t=Os(t,l),t.flags|=134221824;return t}return e=Mn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ba(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(d(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function qo(e,t,n,l,a){return Ll(t),n=wo(e,t,n,l,void 0,a),l=_o(),e!==null&&!st?(ko(e,t,a),Fn(e,t,a)):(Te&&l&&ds(t),t.flags|=1,ot(e,t,n,a),t.child)}function Hf(e,t,n,l,a,i){return Ll(t),t.updateQueue=null,n=Yd(t,l,n,a),Gd(e),l=_o(),e!==null&&!st?(ko(e,t,i),Fn(e,t,i)):(Te&&l&&ds(t),t.flags|=1,ot(e,t,n,i),t.child)}function Gf(e,t,n,l,a){if(Ll(t),t.stateNode===null){var i=ua,r=n.contextType;typeof r=="object"&&r!==null&&(i=ht(r)),i=new n(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ro,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},fo(t),r=n.contextType,i.context=typeof r=="object"&&r!==null?ht(r):ua,i.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Lo(t,n,r,l),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Ro.enqueueReplaceState(i,i.state,null),mi(t,l,i,a),fi(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,f=Yl(n,u);i.props=f;var w=i.context,D=n.contextType;r=ua,typeof D=="object"&&D!==null&&(r=ht(D));var q=n.getDerivedStateFromProps;D=typeof q=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,D||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||w!==r)&&Af(t,i,l,r),el=!1;var y=t.memoizedState;i.state=y,mi(t,l,i,a),fi(),w=t.memoizedState,u||y!==w||el?(typeof q=="function"&&(Lo(t,n,q,l),w=t.memoizedState),(f=el||Tf(t,n,f,l,y,w,r))?(D||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=w),i.props=l,i.state=w,i.context=r,l=f):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,mo(e,t),r=t.memoizedProps,D=Yl(n,r),i.props=D,q=t.pendingProps,y=i.context,w=n.contextType,f=ua,typeof w=="object"&&w!==null&&(f=ht(w)),u=n.getDerivedStateFromProps,(w=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==q||y!==f)&&Af(t,i,l,f),el=!1,y=t.memoizedState,i.state=y,mi(t,l,i,a),fi();var T=t.memoizedState;r!==q||y!==T||el||e!==null&&e.dependencies!==null&&ps(e.dependencies)?(typeof u=="function"&&(Lo(t,n,u,l),T=t.memoizedState),(D=el||Tf(t,n,D,l,y,T,f)||e!==null&&e.dependencies!==null&&ps(e.dependencies))?(w||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,T,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,T,f)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=T),i.props=l,i.state=T,i.context=f,l=D):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,ba(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Hl(t,e.child,null,a),t.child=Hl(t,null,n,a)):ot(e,t,n,a),t.memoizedState=i.state,e=t.child):e=Fn(e,t,a),e}function Yf(e,t,n,l){return Ol(),t.flags|=256,ot(e,t,n,l),t.child}var Ho={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Go(e){return{baseLanes:e,cachePool:Dd()}}function Yo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Yt),e}function Vf(e,t,n){var l=t.pendingProps,a=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(gt.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Te){if(a?al(t):il(),(e=Ke)?(e=fp(e,Wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Jn!==null?{id:fn,overflow:mn}:null,retryLane:536870912,hydrationErrors:null},n=_d(e),n.return=t,t.child=n,dt=t,Ke=null)):e=null,e===null)throw Wn(t);return Gu(e)?t.lanes=32:t.lanes=536870912,null}return i=l.children,l=l.fallback,a?(il(),a=t.mode,i=zs({mode:"hidden",children:i},a),l=Ml(l,a,n,null),i.return=t,l.return=t,i.sibling=l,t.child=i,l=t.child,l.memoizedState=Go(n),l.childLanes=Yo(e,r,n),t.memoizedState=Ho,yi(null,l)):(al(t),Vo(t,i))}var u=e.memoizedState;if(u!==null){var f=u.dehydrated;if(f!==null)return H0(e,t,i,r,l,f,u,n)}return a?(il(),a=l.fallback,i=t.mode,u=e.child,f=u.sibling,l=Mn(u,{mode:"hidden",children:l.children}),l.subtreeFlags=u.subtreeFlags&1206910976,f!==null?a=Mn(f,a):(a=Ml(a,i,n,null),a.flags|=2),a.return=t,l.return=t,l.sibling=a,t.child=l,yi(null,l),l=t.child,a=e.child.memoizedState,a===null?a=Go(n):(i=a.cachePool,i!==null?(u=at._currentValue,i=i.parent!==u?{parent:u,pool:u}:i):i=Dd(),a={baseLanes:a.baseLanes|n,cachePool:i}),l.memoizedState=a,l.childLanes=Yo(e,r,n),t.memoizedState=Ho,yi(e.child,l)):(al(t),n=e.child,e=n.sibling,n=Mn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Vo(e,t){return t=zs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function zs(e,t){return e=Dt(22,e,null,t),e.lanes=0,e}function Bs(e,t,n){return Hl(t,e.child,null,n),e=Vo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function H0(e,t,n,l,a,i,r,u){if(n)return t.flags&256?(al(t),t.flags&=-257,Bs(e,t,u)):t.memoizedState!==null?(il(),t.child=e.child,t.flags|=128,null):(il(),i=a.fallback,r=t.mode,a=zs({mode:"visible",children:a.children},r),i=Ml(i,r,u,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,Hl(t,e.child,null,u),a=t.child,a.memoizedState=Go(u),a.childLanes=Yo(e,l,u),t.memoizedState=Ho,yi(null,a));if(al(t),Gu(i)){if(l=i.nextSibling&&i.nextSibling.dataset,l)var f=l.dgst;return l=f,l!==""&&(a=Error(d(419)),a.stack="",a.digest=l,si({value:a,source:null,stack:null})),Bs(e,t,u)}if(st||Bl(e,t,u,!1),l=(u&e.childLanes)!==0,st||l){if(ll.current!==null)return Bs(e,t,u);if(l=Xe,l!==null&&(a=Nc(l,u),a!==0&&a!==r.retryLane))throw r.retryLane=a,Dl(e,a),Bt(l,e,a),Uo;return Hu(i)||Ps(),Bs(e,t,u)}return Hu(i)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Ke=Pt(i.nextSibling),dt=t,Te=!0,$n=null,Wt=!1,e!==null&&Nd(t,e),t=Vo(t,a.children),t.flags|=134221824,t)}function Qf(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ms(e.return,t,n)}function Xf(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&_s(n)===null&&(t=e),e=e.sibling}return t}function Ls(e,t,n,l,a,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=n,r.tailMode=a,r.treeForkCount=i)}function Qo(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Xo(e,t,n){var l=t.pendingProps,a=l.revealOrder,i=l.tail;l=l.children;var r=gt.current;if(t.flags&128)return pi(t,r),null;var u=(r&2)!==0;if(u?(r=r&1|2,t.flags|=128):r&=1,pi(t,r),a==="backwards"&&e!==null?(Qo(e),ot(e,t,l,n),Qo(e)):ot(e,t,l,n),l=Te?ii:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qf(e,n,t);else if(e.tag===19)Qf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"backwards":n=Xf(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null,Qo(t)),Ls(t,!0,a,null,i,l);break;case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&_s(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ls(t,!0,n,null,i,l);break;case"together":Ls(t,!1,null,null,void 0,l);break;case"independent":t.memoizedState=null;break;default:n=Xf(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ls(t,!1,a,n,i,l)}return t.child}function Zf(e,t,n){var l=t.pendingProps;return In(t,t.type,l.value),ot(e,t,l.children,n),t.child}function Fn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ul|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Bl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,n=Mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ps(e)))}function G0(e,t,n){switch(t.tag){case 3:Yn(t,t.stateNode.containerInfo),In(t,at,e.memoizedState.cache),Ol();break;case 27:case 5:Vn(t);break;case 4:Yn(t,t.stateNode.containerInfo);break;case 10:In(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,yo(t),null;break;case 13:var l=t.memoizedState;if(l!==null){if(l.dehydrated!==null)return al(t),t.flags|=128,null;l=Bl(e,t,n,!1);var a=t.child.childLanes;return l||(n&a)!==0?Vf(e,t,n):(al(t),e=Fn(e,t,n),e!==null?e.sibling:null)}al(t);break;case 19:if(t.flags&128)return Xo(e,t,n);if(a=(e.flags&128)!==0,l=(n&t.childLanes)!==0,l||(Bl(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return Xo(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),pi(t,gt.current),l)break;return null;case 22:return t.lanes=0,Ff(e,t,n,t.pendingProps);case 24:In(t,at,e.memoizedState.cache)}return Fn(e,t,n)}function Kf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)st=!0;else{if(!Zo(e,n)&&(t.flags&128)===0)return st=!1,G0(e,t,n);st=(e.flags&131072)!==0}else st=!1,Te&&(t.flags&1048576)!==0&&Ed(t,ii,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ul(t.elementType),t.type=e,typeof e=="function")Pr(e)?(l=Yl(e,l),t.tag=1,t=Gf(null,t,e,l,n)):(t.tag=0,t=qo(null,t,e,l,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=Bf(null,t,e,l,n);break e}else if(a===he){t.tag=14,t=Lf(null,t,e,l,n);break e}else if(a===se){t.tag=10,t.type=e,t=Zf(null,t,n);break e}}throw t=ue(e)||e,Error(d(306,t,""))}}return t;case 0:return qo(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=Yl(l,t.pendingProps),Gf(e,t,l,a,n);case 3:e:{if(Yn(t,t.stateNode.containerInfo),e===null)throw Error(d(387));l=t.pendingProps;var i=t.memoizedState;a=i.element,mo(e,t),mi(t,l,null,n);var r=t.memoizedState;if(l=r.cache,In(t,at,l),l!==i.cache&&so(t,[at],n,!0),fi(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Yf(e,t,l,n);break e}else if(l!==a){a=Kt(Error(d(424)),t),si(a),t=Yf(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ke=Pt(e.firstChild),dt=t,Te=!0,$n=null,Wt=!0,n=Rd(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Ol(),l===a){t=Fn(e,t,n);break e}ot(e,t,l,n)}t=t.child}return t;case 26:return ba(e,t),e===null?(n=bp(t.type,null,t.pendingProps,null))?t.memoizedState=n:Te||(t.stateNode=Im(t.type,t.pendingProps,jt.current,t)):t.memoizedState=bp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Vn(t),e===null&&Te&&(l=t.stateNode=hp(t.type,t.pendingProps,jt.current),dt=t,Wt=!0,a=Ke,ml(t.type)?(Yu=a,Ke=Pt(l.firstChild)):Ke=a),ot(e,t,t.pendingProps.children,n),ba(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Te&&((a=l=Ke)&&(l=Lx(l,t.type,t.pendingProps,Wt),l!==null?(t.stateNode=l,dt=t,Ke=Pt(l.firstChild),Wt=!1,a=!0):a=!1),a||Wn(t)),Vn(t),a=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,l=i.children,zu(a,i)?l=null:r!==null&&zu(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,D0,null,null,n),Ra._currentValue=a),ba(e,t),ot(e,t,l,n),t.child;case 6:return e===null&&Te&&((e=n=Ke)&&(n=Rx(n,t.pendingProps,Wt),n!==null?(t.stateNode=n,dt=t,Ke=null,e=!0):e=!1),e||Wn(t)),null;case 13:return Vf(e,t,n);case 4:return Yn(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Hl(t,null,l,n):ot(e,t,l,n),t.child;case 11:return Bf(e,t,t.type,t.pendingProps,n);case 7:return l=t.pendingProps,ba(e,t),ot(e,t,l,n),t.child;case 8:return ot(e,t,t.pendingProps.children,n),t.child;case 12:return ot(e,t,t.pendingProps.children,n),t.child;case 10:return Zf(e,t,n);case 9:return a=t.type._context,l=t.pendingProps.children,Ll(t),a=ht(a),l=l(a),t.flags|=1,ot(e,t,l,n),t.child;case 14:return Lf(e,t,t.type,t.pendingProps,n);case 15:return Rf(e,t,t.type,t.pendingProps,n);case 19:return Xo(e,t,n);case 31:return q0(e,t,n);case 22:return Ff(e,t,n,t.pendingProps);case 24:return Ll(t),l=ht(at),e===null?(a=uo(),a===null&&(a=Xe,i=ro(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:l,cache:a},fo(t),In(t,at,a)):((e.lanes&n)!==0&&(mo(e,t),mi(t,null,null,n),fi()),a=e.memoizedState,i=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),In(t,at,l)):(l=i.cache,In(t,at,l),l!==a.cache&&so(t,[at],n,!0))),ot(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),l=t.pendingProps,l.name!=null&&l.name!=="auto"?t.flags|=e===null?18882560:18874368:Te&&ds(t),e!==null&&e.memoizedProps.name!==l.name?t.flags|=4194816:ba(e,t),ot(e,t,l.children,n),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function Un(e){e.flags|=4}function Ko(e,t,n,l,a){var i;if((i=(e.mode&32)!==0)&&(i=n===null?kp(t,l):kp(t,l)&&(l.src!==n.src||l.srcSet!==n.srcSet)),i){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(jm())e.flags|=8192;else throw ql=ys,co}else e.flags&=-16777217}function Jf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ep(t))if(jm())e.flags|=8192;else throw ql=ys,co}function Rs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?_c():536870912,e.lanes|=t,Ea|=t)}function bi(e,t){if(!Te)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&1206910976,l|=a.flags&1206910976,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function Y0(e,t,n){var l=t.pendingProps;switch(no(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return Je(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Bn(at),tn(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(fa(t)?Un(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ao())),Je(t),null;case 26:var a=t.type,i=t.memoizedState;return e===null?(Un(t),i!==null?(Je(t),Jf(t,i)):(Je(t),Ko(t,a,null,l,n))):i?i!==e.memoizedState?(Un(t),Je(t),Jf(t,i)):(Je(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Un(t),Je(t),Ko(t,a,e,l,n)),null;case 27:if(En(t),n=jt.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Un(t);else{if(!l){if(t.stateNode===null)throw Error(d(166));return Je(t),t.subtreeFlags&=-33554433,null}e=$e.current,fa(t)?Sd(t):(e=hp(a,l,n),t.stateNode=e,Un(t))}return Je(t),t.subtreeFlags&=-33554433,null;case 5:if(En(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Un(t);else{if(!l){if(t.stateNode===null)throw Error(d(166));return Je(t),t.subtreeFlags&=-33554433,null}if(i=$e.current,fa(t))Sd(t);else{var r=Ci(jt.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?r.createElement(a,{is:l.is}):r.createElement(a)}}i[pt]=t,i[Ct]=l;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch(bt(i,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Un(t)}}return Je(t),t.subtreeFlags&=-33554433,Ko(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Un(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(d(166));if(e=jt.current,fa(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=dt,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Km(e.nodeValue,n)),e||Wn(t,!0)}else e=Ci(e).createTextNode(l),e[pt]=t,t.stateNode=e}return Je(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=fa(t),n!==null){if(e===null){if(!l)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[pt]=t}else Ol(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Je(t),e=!1}else n=ao(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(qt(t),t):(qt(t),null);if((t.flags&128)!==0)throw Error(d(558))}return Je(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=fa(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(d(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(d(317));a[pt]=t}else Ol(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Je(t),a=!1}else a=ao(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(qt(t),t):(qt(t),null)}return qt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rs(t,t.updateQueue),Je(t),null);case 4:return tn(),e===null&&ju(t.stateNode.containerInfo),t.flags|=67108864,Je(t),null;case 10:return Bn(t.type),Je(t),null;case 19:if(bo(t),l=t.memoizedState,l===null)return Je(t),null;if(a=(t.flags&128)!==0,i=l.rendering,i===null)if(a)bi(l,!1);else{if(tt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=_s(e),i!==null){for(t.flags|=128,bi(l,!1),e=i.updateQueue,t.updateQueue=e,Rs(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)wd(n,e),n=n.sibling;return pi(t,gt.current&1|2),Te&&On(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&lt()>Js&&(t.flags|=128,a=!0,bi(l,!1),t.lanes=4194304)}else{if(!a)if(e=_s(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rs(t,e),bi(l,!0),l.tail===null&&l.tailMode!=="collapsed"&&l.tailMode!=="visible"&&!i.alternate&&!Te)return Je(t),null}else 2*lt()-l.renderingStartTime>Js&&n!==536870912&&(t.flags|=128,a=!0,bi(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}if(l.tail!==null){e=l.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return l.rendering=e,l.tail=e.sibling,l.renderingStartTime=lt(),e.sibling=null,i=gt.current,i=a?i&1|2:i&1,l.tailMode==="visible"||l.tailMode==="collapsed"||!n||Te?pi(t,i):(n=i,_e(xt,t),_e(gt,n),_t===null&&(_t=t)),Te&&On(t,l.treeForkCount),e}return Je(t),null;case 22:case 23:return qt(t),go(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),n=t.updateQueue,n!==null&&Rs(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&ze(Fl),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Bn(at),Je(t),null;case 25:return null;case 30:return t.flags|=33554432,Je(t),null}throw Error(d(156,t.tag))}function V0(e,t){switch(no(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(at),tn(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return En(t),null;case 31:if(t.memoizedState!==null){if(qt(t),t.alternate===null)throw Error(d(340));Ol()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(qt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Ol()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return bo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return tn(),null;case 10:return Bn(t.type),null;case 22:case 23:return qt(t),go(),e!==null&&ze(Fl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bn(at),null;case 25:return null;default:return null}}function $f(e,t){switch(no(t),t.tag){case 3:Bn(at),tn();break;case 26:case 27:case 5:En(t);break;case 4:tn();break;case 31:t.memoizedState!==null&&qt(t);break;case 13:qt(t);break;case 19:bo(t);break;case 10:Bn(t.type);break;case 22:case 23:qt(t),go(),e!==null&&ze(Fl);break;case 24:Bn(at)}}function vi(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var i=n.create,r=n.inst;l=i(),r.destroy=l}n=n.next}while(n!==a)}}catch(u){qe(t,t.return,u)}}function sl(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){var r=l.inst,u=r.destroy;if(u!==void 0){r.destroy=void 0,a=t;var f=n,w=u;try{w()}catch(D){qe(a,f,D)}}}l=l.next}while(l!==i)}}catch(D){qe(t,t.return,D)}}function Wf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ud(t,n)}catch(l){qe(e,e.return,l)}}}function If(e,t,n){n.props=Yl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){qe(e,t,l)}}function pn(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:var a=e.stateNode,i=Cn(e.memoizedProps,a);(a.ref===null||a.ref.name!==i)&&(a.ref=ip(i)),l=a.ref;break;case 7:if(e.stateNode===null){var r=new Qt(e);_(e.child,!1,zx,r,void 0,void 0),e.stateNode=r}l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(u){qe(e,t,u)}}function yt(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){qe(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){qe(e,t,a)}else n.current=null}function Fs(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)dp(e.stateNode,t[n])}function Pf(e){for(var t=e.return;t!==null&&($o(t)&&dp(e.stateNode,t.stateNode),!Jo(t));)t=t.return}function wi(e){for(var t=e.return;t!==null&&($o(t)&&Bx(e.stateNode,t.stateNode),!Jo(t));)t=t.return}function Jo(e){return e.tag===5||e.tag===3||e.tag===27}function $o(e){return e&&e.tag===7&&e.stateNode!==null}function Wo(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){qe(e,e.return,a)}}function Io(e,t,n){try{var l=e.stateNode;xx(l,e.type,n,t),l[Ct]=t}catch(a){qe(e,e.return,a)}}function em(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ml(e.type)||e.tag===4}function Po(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||em(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ml(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eu(e,t,n,l){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(a),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dn)),Fs(e,l),Le=!0;else if(a!==4&&(a===27&&(Fs(e,l),l=null,ml(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(eu(e,t,n,l),e=e.sibling;e!==null;)eu(e,t,n,l),e=e.sibling}function Us(e,t,n,l){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?n.insertBefore(a,t):n.appendChild(a),Fs(e,l),Le=!0;else if(a!==4&&(a===27&&(Fs(e,l),l=null,ml(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Us(e,t,n,l),e=e.sibling;e!==null;)Us(e,t,n,l),e=e.sibling}function tm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);bt(t,l,n),t[pt]=e,t[Ct]=n}catch(i){qe(e,e.return,i)}}var qs=!1,Ht=null;function nm(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(qs=!0)}var hn=null;function lm(){var e=hn;return hn=null,e}var Mt=0;function va(e,t,n,l,a){return Mt=0,am(e.child,t,n,l,a)}function am(e,t,n,l,a){for(var i=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(l!==null){var u=Ru(r);l.push(u),u.view&&(i=!0)}else i||Ru(r).view&&(i=!0);qs=!0,lp(r,Mt===0?t:t+"_"+Mt,n),Mt++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||am(e.child,t,n,l,a)&&(i=!0));e=e.sibling}return i}function xn(e,t){for(;e!==null;)e.tag===5?ap(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||xn(e.child,t)),e=e.sibling}function Hs(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Hs(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(d(544));var n=t.name;t=Dn(t.default,t.share),t!=="none"&&(va(e,n,t,null,!1)||xn(e.child,!1))}e=e.sibling}}function tu(e,t){if(e.tag===30){var n=e.stateNode,l=e.memoizedProps,a=Cn(l,n),i=Dn(l.default,n.paired?l.share:l.enter);i!=="none"?va(e,a,i,null,!1)?(Hs(e),n.paired||t||Aa(e,l.onEnter)):xn(e.child,!1):Hs(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)tu(e,t),e=e.sibling;else Hs(e)}function nu(e){if(Ht!==null&&Ht.size!==0){var t=Ht;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,l=n.name;if(l!=null&&l!=="auto"){var a=t.get(l);if(a!==void 0){var i=Dn(n.default,n.share);if(i!=="none"&&(va(e,l,i,null,!1)?(i=e.stateNode,a.paired=i,i.paired=a,Aa(e,n.onShare)):xn(e.child,!1)),t.delete(l),t.size===0)break}}}nu(e)}e=e.sibling}}}function lu(e){if(e.tag===30){var t=e.memoizedProps,n=Cn(t,e.stateNode),l=Ht!==null?Ht.get(n):void 0,a=Dn(t.default,l!==void 0?t.share:t.exit);a!=="none"&&(va(e,n,a,null,!1)?l!==void 0?(a=e.stateNode,l.paired=a,a.paired=l,Ht.delete(n),Aa(e,t.onShare)):Aa(e,t.onExit):xn(e.child,!1)),Ht!==null&&nu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)lu(e),e=e.sibling;else Ht!==null&&nu(e)}function im(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Cn(t,e.stateNode);t=Dn(t.default,t.update),e.flags&=-5,t!=="none"&&va(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&im(e);e=e.sibling}}function au(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,xn(e.child,!1))}au(e)}e=e.sibling}}function Gs(e){if(e.tag===30)e.stateNode.paired=null,xn(e.child,!1),au(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Gs(e),e=e.sibling;else au(e)}function sm(e){for(e=e.child;e!==null;)e.tag===30?xn(e.child,!1):(e.subtreeFlags&33554432)!==0&&sm(e),e=e.sibling}function iu(e,t,n,l,a,i,r){for(var u=!1;t!==null;){if(t.tag===5){var f=t.stateNode;if(i!==null&&Mt<i.length){var w=i[Mt],D=Ru(f);(w.view||D.view)&&(u=!0);var q;if(q=(e.flags&4)===0)if(D.clip)q=!0;else{q=w.rect;var y=D.rect;q=q.y!==y.y||q.x!==y.x||q.height!==y.height||q.width!==y.width}q&&(e.flags|=4),D.abs?D=!w.abs:(w=w.rect,D=D.rect,D=w.height!==D.height||w.width!==D.width),D&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&lp(f,Mt===0?n:n+"_"+Mt,a),u&&(e.flags&4)!==0||(hn===null&&(hn=[]),hn.push(f,Mt===0?l:l+"_"+Mt,t.memoizedProps)),Mt++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:iu(e,t.child,n,l,a,i,r)&&(u=!0));t=t.sibling}return u}function rm(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,l=e.stateNode,a=Cn(n,l),i=Dn(n.default,n.update),r;r=e.memoizedState,e.memoizedState=null,l=e;var u=e.child;Mt=0,a=iu(l,u,a,a,i,r,!1),(e.flags&4)!==0&&a&&Aa(e,n.onUpdate)}else(e.subtreeFlags&33554432)!==0&&rm(e);e=e.sibling}}var ft=!1,Fe=!1,gn=!1,su=!1,om=typeof WeakSet=="function"?WeakSet:Set,mt=null,yn=!1,_i=!1,Ys=!1,ru=!1;function Q0(e,t,n){if(e=e.containerInfo,Mu=Fa,e=dd(e),Xr(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var i=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{l.nodeType,r.nodeType}catch{l=null;break e}var u=0,f=-1,w=-1,D=0,q=0,y=e,T=null;t:for(;;){for(var ie;y!==l||i!==0&&y.nodeType!==3||(f=u+i),y!==r||a!==0&&y.nodeType!==3||(w=u+a),y.nodeType===3&&(u+=y.nodeValue.length),(ie=y.firstChild)!==null;)T=y,y=ie;for(;;){if(y===e)break t;if(T===l&&++D===i&&(f=u),T===r&&++q===a&&(w=u),(ie=y.nextSibling)!==null)break;y=T,T=y.parentNode}y=ie}l=f===-1||w===-1?null:{start:f,end:w}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ou={focusedElem:e,selectionRange:l},Fa=!1,n=(n&335544064)===n,mt=t,t=n?9270:1024;mt!==null;){if(e=mt,n&&(l=e.deletions,l!==null))for(i=0;i<l.length;i++)n&&lu(l[i]);if(e.alternate===null&&(e.flags&2)!==0)n&&nm(e),Vs(n);else{if(e.tag===22){if(l=e.alternate,e.memoizedState!==null){l!==null&&l.memoizedState===null&&n&&lu(l),Vs(n);continue}else if(l!==null&&l.memoizedState!==null){n&&nm(e),Vs(n);continue}}l=e.child,(e.subtreeFlags&t)!==0&&l!==null?(l.return=e,mt=l):(n&&im(e),Vs(n))}}Ht=null}function Vs(e){for(;mt!==null;){var t=mt,n=e,l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((a&1024)!==0&&l!==null){n=void 0,a=l.memoizedProps,l=l.memoizedState;var i=t.stateNode;try{var r=Yl(t.type,a);n=i.getSnapshotBeforeUpdate(r,l),i.__reactInternalSnapshotBeforeUpdate=n}catch(u){qe(t,t.return,u)}}break;case 3:if((a&1024)!==0){if(l=t.stateNode.containerInfo,n=l.nodeType,n===9)qu(l);else if(n===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":qu(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&l!==null&&(n=Cn(l.memoizedProps,l.stateNode),a=t.memoizedProps,a=Dn(a.default,a.update),a!=="none"&&va(l,n,a,l.memoizedState=[],!0));break;default:if((a&1024)!==0)throw Error(d(163))}if(l=t.sibling,l!==null){l.return=t.return,mt=l;break}mt=t.return}}function um(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:bn(e,n),l&4&&vi(5,n);break;case 1:if(bn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){qe(n,n.return,r)}else{var a=Yl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){qe(n,n.return,r)}}l&64&&Wf(n),l&512&&pn(n,n.return);break;case 3:if(bn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ud(e,t)}catch(r){qe(n,n.return,r)}}break;case 27:t===null&&l&4&&tm(n);case 26:case 5:bn(e,n),t===null&&l&4&&Wo(n),l&512&&pn(n,n.return);break;case 12:bn(e,n);break;case 31:bn(e,n),l&4&&mm(e,n);break;case 13:bn(e,n),l&4&&pm(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=lx.bind(null,n),Fx(e,n))));break;case 22:if(l=n.memoizedState!==null||ft,!l){var i=t!==null&&t.memoizedState!==null||Fe;t=ft,a=Fe,ft=l,(Fe=i)&&!a?(l=2,(n.subtreeFlags&8772)!==0&&(l|=1),sn(e,n,l)):bn(e,n),ft=t,Fe=a}break;case 30:bn(e,n),l&512&&pn(n,n.return);break;case 7:l&512&&pn(n,n.return);default:bn(e,n)}}function ou(e,t){for(e=e.child;e!==null;)cm(e,t),e=e.sibling}function cm(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var l=n.style;typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"}else{var a=e.stateNode,i=e.memoizedProps.style,r=i!=null&&i.hasOwnProperty("display")?i.display:null;a.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(f){qe(e,e.return,f)}uu(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Le=!0}catch(f){qe(e,e.return,f)}break;case 18:try{var u=e.stateNode;t?np(u,!0):np(e.stateNode,!1)}catch(f){qe(e,e.return,f)}break;case 22:case 23:e.memoizedState===null&&ou(e,t);break;default:ou(e,t)}}function uu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,l=t;switch(n.tag){case 4:cm(n,l);break e;case 22:n.memoizedState===null&&uu(n,l);break e;default:uu(n,l)}}e=e.sibling}}function dm(e){var t=e.alternate;t!==null&&(e.alternate=null,dm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ji(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Ot=!1;function ln(e,t,n){for(n=n.child;n!==null;)fm(e,t,n),n=n.sibling}function fm(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Nl,n)}catch{}switch(n.tag){case 26:Fe||yt(n,t),ln(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Fe&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Fe||yt(n,t),wi(n);var l=We,a=Ot;ml(n.type)&&(We=n.stateNode,Ot=!1),ln(e,t,n),xp(n.stateNode,n.type,n.memoizedProps),We=l,Ot=a;break;case 5:Fe||yt(n,t),wi(n);case 6:if(n.tag===6&&wi(n),l=We,a=Ot,We=null,ln(e,t,n),We=l,Ot=a,We!==null)if(Ot)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(n.stateNode),Le=!0}catch(i){qe(n,t,i)}else try{We.removeChild(n.stateNode),Le=!0}catch(i){qe(n,t,i)}break;case 18:We!==null&&(Ot?(e=We,tp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ua(e)):tp(We,n.stateNode));break;case 4:l=We,a=Ot,We=n.stateNode.containerInfo,Ot=!0,ln(e,t,n),We=l,Ot=a;break;case 0:case 11:case 14:case 15:sl(2,n,t),Fe||sl(4,n,t),ln(e,t,n);break;case 1:Fe||(yt(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&If(n,t,l)),ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:Fe=(l=Fe)||n.memoizedState!==null,ln(e,t,n),Fe=l;break;case 30:yt(n,t),ln(e,t,n);break;case 7:Fe||yt(n,t),ln(e,t,n);break;default:ln(e,t,n)}}function mm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ua(e)}catch(n){qe(t,t.return,n)}}}function pm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ua(e)}catch(n){qe(t,t.return,n)}}function X0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new om),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new om),t;default:throw Error(d(435,e.tag))}}function Qs(e,t){var n=X0(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var a=ax.bind(null,e,l);l.then(a,a)}})}function Tt(e,t,n){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var i=l[a],r=e,u=t,f=u;e:for(;f!==null;){switch(f.tag){case 27:if(ml(f.type)){We=f.stateNode,Ot=!1;break e}break;case 5:We=f.stateNode,Ot=!1;break e;case 3:case 4:We=f.stateNode.containerInfo,Ot=!0;break e}f=f.return}if(We===null)throw Error(d(160));fm(r,u,i),We=null,Ot=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)hm(t,e,n),t=t.sibling}var an=null;function hm(e,t,n){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(l=e.updateQueue,l=l!==null?l.events:null,l!==null))for(var i=0;i<l.length;i++){var r=l[i];r.ref.impl=r.nextImpl}Tt(t,e,n),At(e),a&4&&(sl(3,e,e.return),vi(3,e),sl(5,e,e.return));break;case 1:Tt(t,e,n),At(e),a&512&&(Fe||l===null||yt(l,l.return)),a&64&&ft&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(i=an,Tt(t,e,n),At(e),a&512&&(Fe||l===null||yt(l,l.return)),a&4)if(a=l!==null?l.memoizedState:null,n=e.memoizedState,l===null)if(n===null)if(e.stateNode===null)if(ft)e.stateNode=Im(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,a=i.ownerDocument||i;t:switch(t){case"title":l=a.getElementsByTagName("title")[0],(!l||l[Ka]||l[pt]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=a.createElement(t),a.head.insertBefore(l,a.querySelector("head > title"))),bt(l,t,n),l[pt]=e,ct(l),t=l;break e;case"link":if(i=_p("link","href",a).get(t+(n.href||""))){for(r=0;r<i.length;r++)if(l=i[r],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){i.splice(r,1);break t}}l=a.createElement(t),bt(l,t,n),a.head.appendChild(l);break;case"meta":if(i=_p("meta","content",a).get(t+(n.content||""))){for(r=0;r<i.length;r++)if(l=i[r],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){i.splice(r,1);break t}}l=a.createElement(t),bt(l,t,n),a.head.appendChild(l);break;default:throw Error(d(468,t))}l[pt]=e,ct(l),t=l}e.stateNode=t}else ft||Zu(i,e.type,e.stateNode);else e.stateNode=wp(i,n,e.memoizedProps);else a!==n?(a===null?(t=l.stateNode,t===null||Fe||t.parentNode.removeChild(t)):a.count--,n===null?ft||Zu(i,e.type,e.stateNode):wp(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Io(e,e.memoizedProps,l.memoizedProps);break;case 27:Tt(t,e,n),At(e),a&512&&(Fe||l===null||yt(l,l.return)),l!==null&&a&4&&Io(e,e.memoizedProps,l.memoizedProps);break;case 5:if(i=gn,gn=!1,Tt(t,e,n),gn=i,At(e),a&512&&(Fe||l===null||yt(l,l.return)),e.flags&32){t=e.stateNode;try{na(t,""),Le=!0}catch(D){qe(e,e.return,D)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Io(e,t,l!==null?l.memoizedProps:t)),a&1024&&(su=!0);break;case 6:if(Tt(t,e,n),At(e),a&4){if(e.stateNode===null)throw Error(d(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Le=!0}catch(D){qe(e,e.return,D)}}break;case 3:if(Le=!1,sr=null,i=an,an=Di(t.containerInfo),Tt(t,e,n),an=i,At(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ua(t.containerInfo)}catch(D){qe(e,e.return,D)}su&&(su=!1,xm(e)),Le=!1;break;case 4:a=gn,gn=ft,l=Bc(),i=an,an=Di(e.stateNode.containerInfo),Tt(t,e,n),At(e),an=i,Le&&_i&&(Ys=!0),Le=l,gn=a;break;case 12:Tt(t,e,n),At(e);break;case 31:Tt(t,e,n),At(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Qs(e,t)));break;case 13:Tt(t,e,n),At(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Ks=lt()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Qs(e,t)));break;case 22:i=e.memoizedState!==null,r=l!==null&&l.memoizedState!==null;var u=ft,f=Fe,w=gn;ft=u||i,gn=w||i,Fe=f||r,Tt(t,e,n),Fe=f,gn=w,ft=u,At(e),a&8192&&(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,!i||l===null||r||ft||Fe||(t=r||Fe,n=ft,l=Fe,ft=i||ft,Fe=t,rl(e,2),ft=n,Fe=l),!i&&gn||ou(e,i)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Qs(e,n))));break;case 19:Tt(t,e,n),At(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Qs(e,t)));break;case 30:a&512&&(Fe||l===null||yt(l,l.return)),a=Bc(),i=_i,r=(n&335544064)===n,u=e.memoizedProps,_i=r&&Dn(u.default,u.update)!=="none",Tt(t,e,n),At(e),r&&l!==null&&Le&&(e.flags|=4),_i=i,Le=a;break;case 21:break;case 7:a&512&&(Fe||l===null||yt(l,l.return)),l&&l.stateNode!==null&&(l.stateNode._fragmentFiber=e);default:Tt(t,e,n),At(e)}}function At(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(em(l)){n=l;break}l=l.return}l=null;for(var a=e.return;a!==null;){if($o(a)){var i=a.stateNode;l===null?l=[i]:l.push(i)}if(Jo(a))break;a=a.return}var r=l;if(n==null)throw Error(d(160));switch(n.tag){case 27:var u=n.stateNode,f=Po(e);Us(e,f,u,r);break;case 5:var w=n.stateNode;n.flags&32&&(na(w,""),n.flags&=-33);var D=Po(e);Us(e,D,w,r);break;case 3:case 4:var q=n.stateNode.containerInfo,y=Po(e);eu(e,y,q,r);break;default:throw Error(d(161))}}catch(T){qe(e,e.return,T)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xm(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Fa=!0,t.reset(),Fa=!1),e=e.sibling}}function wa(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)gm(t,e),t=t.sibling;else rm(t)}function gm(e,t){var n=e.alternate;if(n===null)tu(e,!1);else switch(e.tag){case 3:if(ru=yn=!1,lm(),wa(t,e),!yn&&!Ys){if(e=hn,e!==null)for(var l=0;l<e.length;l+=3){n=e[l];var a=e[l+1];ap(n,e[l+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),ru=!0}hn=null;break;case 5:wa(t,e);break;case 4:l=yn,yn=!1,wa(t,e),yn&&(Ys=!0),yn=l;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?tu(e,!1):wa(t,e));break;case 30:l=yn,a=lm(),yn=!1,wa(t,e),yn&&(e.flags|=4);var i=e.memoizedProps,r=e.stateNode;t=Cn(i,r),r=Cn(n.memoizedProps,r);var u=Dn(i.default,i.update);u==="none"?t=!1:(i=n.memoizedState,n.memoizedState=null,n=e.child,Mt=0,t=iu(e,n,t,r,u,i,!0),Mt!==(i===null?0:i.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Aa(e,e.memoizedProps.onUpdate),hn=a):a!==null&&(a.push.apply(a,hn),hn=a),yn=(e.flags&32)!==0?!0:l;break;default:wa(t,e)}}function bn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)um(e,t.alternate,t),t=t.sibling}function rl(e,t){for(e=e.child;e!==null;){var n=e,l=t;switch(n.tag){case 0:case 11:case 14:case 15:sl(4,n,n.return),rl(n,l);break;case 1:yt(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&If(n,n.return,a),rl(n,l);break;case 27:(l&2)!==0&&xp(n.stateNode,n.type,n.memoizedProps);case 5:yt(n,n.return),n.tag!==5&&n.tag!==27||wi(n),rl(n,l);break;case 6:wi(n);break;case 26:yt(n,n.return),a=n.stateNode,n.memoizedState!==null||a===null||Fe||a.parentNode.removeChild(a),rl(n,l);break;case 22:n.memoizedState===null&&rl(n,l);break;case 30:yt(n,n.return),rl(n,l);break;case 7:yt(n,n.return);default:rl(n,l)}e=e.sibling}}function sn(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var l=t.alternate,a=e,i=t,r=i.flags,u=(n&1)!==0;switch(i.tag){case 0:case 11:case 15:sn(a,i,n),vi(4,i);break;case 1:if(sn(a,i,n),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(D){qe(l,l.return,D)}if(l=i,a=l.updateQueue,a!==null){var f=l.stateNode;try{var w=a.shared.hiddenCallbacks;if(w!==null)for(a.shared.hiddenCallbacks=null,a=0;a<w.length;a++)Fd(w[a],f)}catch(D){qe(l,l.return,D)}}u&&r&64&&Wf(i),pn(i,i.return);break;case 27:(n&2)!==0&&tm(i);case 5:i.tag!==5&&i.tag!==27||Pf(i),sn(a,i,n),u&&l===null&&r&4&&Wo(i),pn(i,i.return);break;case 6:Pf(i);break;case 26:f=i.stateNode,i.memoizedState!==null||f===null||ft||Zu(Di(f.ownerDocument),i.type,f),sn(a,i,n),u&&l===null&&r&4&&Wo(i),pn(i,i.return);break;case 12:sn(a,i,n);break;case 31:sn(a,i,n),u&&r&4&&mm(a,i);break;case 13:sn(a,i,n),u&&r&4&&pm(a,i);break;case 22:i.memoizedState===null&&sn(a,i,n),pn(i,i.return);break;case 30:sn(a,i,n),pn(i,i.return);break;case 7:pn(i,i.return);default:sn(a,i,n)}t=t.sibling}}function cu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ri(n))}function du(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ri(e))}function It(e,t,n,l){var a=(n&335544064)===n;if(t.subtreeFlags&(a?10262:10256))for(t=t.child;t!==null;)ym(e,t,n,l),t=t.sibling;else a&&sm(t)}function ym(e,t,n,l){var a=(n&335544064)===n;a&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Gs(t);var i=t.flags;switch(t.tag){case 0:case 11:case 15:It(e,t,n,l),i&2048&&vi(9,t);break;case 1:It(e,t,n,l);break;case 3:It(e,t,n,l),a&&ru&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),i&2048&&(i=null,t.alternate!==null&&(i=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==i&&(t.refCount++,i!=null&&ri(i)));break;case 12:if(i&2048){It(e,t,n,l),i=t.stateNode;try{var r=t.memoizedProps,u=r.id,f=r.onPostCommit;typeof f=="function"&&f(u,t.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(w){qe(t,t.return,w)}}else It(e,t,n,l);break;case 31:It(e,t,n,l);break;case 13:It(e,t,n,l);break;case 23:break;case 22:r=t.stateNode,u=t.alternate,t.memoizedState!==null?(a&&u!==null&&u.memoizedState===null&&Gs(u),r._visibility&2?It(e,t,n,l):ki(e,t)):(a&&u!==null&&u.memoizedState!==null&&Gs(t),r._visibility&2?It(e,t,n,l):(r._visibility|=2,_a(e,t,n,l,(t.subtreeFlags&10256)!==0||!1))),i&2048&&cu(u,t);break;case 24:It(e,t,n,l),i&2048&&du(t.alternate,t);break;case 30:a&&(i=t.alternate,i!==null&&(xn(i.child,!0),xn(t.child,!0))),It(e,t,n,l);break;default:It(e,t,n,l)}}function _a(e,t,n,l,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,u=n,f=l,w=r.flags;switch(r.tag){case 0:case 11:case 15:_a(i,r,u,f,a),vi(8,r);break;case 23:break;case 22:var D=r.stateNode;r.memoizedState!==null?D._visibility&2?_a(i,r,u,f,a):ki(i,r):(D._visibility|=2,_a(i,r,u,f,a)),a&&w&2048&&cu(r.alternate,r);break;case 24:_a(i,r,u,f,a),a&&w&2048&&du(r.alternate,r);break;default:_a(i,r,u,f,a)}t=t.sibling}}function ki(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:ki(n,l),a&2048&&cu(l.alternate,l);break;case 24:ki(n,l),a&2048&&du(l.alternate,l);break;default:ki(n,l)}t=t.sibling}}var Vl=8192;function Ql(e,t,n){if(e.subtreeFlags&Vl)for(e=e.child;e!==null;)bm(e,t,n),e=e.sibling}function bm(e,t,n){switch(e.tag){case 26:Ql(e,t,n),e.flags&Vl&&(e.memoizedState!==null?Ix(n,an,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Sp(n,e)));break;case 5:Ql(e,t,n),e.flags&Vl&&(e=e.stateNode,(t&335544128)===t&&Sp(n,e));break;case 3:case 4:var l=an;an=Di(e.stateNode.containerInfo),Ql(e,t,n),an=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Vl,Vl=16777216,Ql(e,t,n),Vl=l):Ql(e,t,n));break;case 30:if((e.flags&Vl)!==0&&(l=e.memoizedProps.name,l!=null&&l!=="auto")){var a=e.stateNode;a.paired=null,Ht===null&&(Ht=new Map),Ht.set(l,a)}Ql(e,t,n);break;default:Ql(e,t,n)}}function vm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ei(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];mt=l,_m(l,e)}vm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wm(e),e=e.sibling}function wm(e){switch(e.tag){case 0:case 11:case 15:Ei(e),e.flags&2048&&sl(9,e,e.return);break;case 3:Ei(e);break;case 12:Ei(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xs(e)):Ei(e);break;default:Ei(e)}}function Xs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];mt=l,_m(l,e)}vm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:sl(8,t,t.return),Xs(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Xs(t));break;default:Xs(t)}e=e.sibling}}function _m(e,t){for(;mt!==null;){var n=mt;switch(n.tag){case 0:case 11:case 15:sl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ri(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,mt=l;else e:for(n=e;mt!==null;){l=mt;var a=l.sibling,i=l.return;if(dm(l),l===n){mt=null;break e}if(a!==null){a.return=i,mt=a;break e}mt=i}}}var Z0={getCacheForType:function(e){var t=ht(at),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ht(at).controller.signal}},K0=typeof WeakMap=="function"?WeakMap:Map,Re=0,Xe=null,je=null,Me=0,Ue=0,Gt=null,ol=!1,ka=!1,fu=!1,qn=0,tt=0,ul=0,Xl=0,Zs=0,Yt=0,Ea=0,Ni=null,zt=null,mu=!1,Ks=0,km=0,Js=1/0,$s=null,cl=null,Pe=0,rn=null,Zl=null,vn=0,pu=0,hu=null,Em=null,Na=null,Sa=null,Ta=null,Si=0,Ws=null;function Vt(){return(Re&2)!==0&&Me!==0?Me&-Me:J.T!==null?Nu():Sc()}function Nm(){if(Yt===0)if((Me&536870912)===0||Te){var e=Qi;Qi<<=1,(Qi&3932160)===0&&(Qi=262144),Yt=e}else Yt=536870912;return e=xt.current,e!==null&&(e.flags|=32),Yt}function Aa(e,t){if(t!=null){var n=e.stateNode,l=n.ref;l===null&&(l=n.ref=ip(Cn(e.memoizedProps,n))),Sa===null&&(Sa=[]),Sa.push(t.bind(null,l))}}function Bt(e,t,n){(e===Xe&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(ja(e,0),dl(e,Me,Yt,!1)),Za(e,n),((Re&2)===0||e!==Xe)&&(e===Xe&&((Re&2)===0&&(Xl|=n),tt===4&&dl(e,Me,Yt,!1)),wn(e))}function Sm(e,t,n){if((Re&6)!==0)throw Error(d(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Xa(e,t),a=l?W0(e,t):gu(e,t,!0),i=l;do{if(a===0){ka&&!l&&dl(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!J0(n)){a=gu(e,t,!1),i=!1;continue}if(a===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var u=e;a=Ni;var f=u.current.memoizedState.isDehydrated;if(f&&(ja(u,r).flags|=256),r=gu(u,r,!1),r!==2&&r!==6){if(fu&&!f){u.errorRecoveryDisabledLanes|=i,Xl|=i,a=4;break e}i=zt,zt=a,i!==null&&(zt===null?zt=i:zt.push.apply(zt,i))}a=r}if(i=!1,a!==2)continue}}if(a===1){ja(e,0),dl(e,t,0,!0);break}e:{switch(l=e,i=a,i){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:dl(l,t,Yt,!ol);break e;case 2:zt=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(a=Ks+300-lt(),10<a)){if(dl(l,t,Yt,!ol),Zi(l,0,!0)!==0)break e;vn=t,l.timeoutHandle=Lu(Tm.bind(null,l,n,zt,$s,mu,t,Yt,Xl,Ea,ol,i,"Throttled",-0,0),a);break e}Tm(l,n,zt,$s,mu,t,Yt,Xl,Ea,ol,i,null,-0,0)}}break}while(!0);wn(e)}function Tm(e,t,n,l,a,i,r,u,f,w,D,q,y,T){e.timeoutHandle=-1;var ie=t.subtreeFlags,fe=(i&335544064)===i;if(q=null,(fe||ie&8192||(ie&16785408)===16785408)&&(q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},Ht=null,bm(t,i,q),fe&&(ie=q,fe=e.containerInfo,fe=(fe.nodeType===9?fe:fe.ownerDocument).__reactViewTransition,fe!=null&&(ie.count++,ie.waitingForViewTransition=!0,ie=zi.bind(ie),fe.finished.then(ie,ie))),ie=(i&62914560)===i?Ks-lt():(i&4194048)===i?km-lt():0,ie=Px(q,ie),ie!==null)){vn=i,e.cancelPendingCommit=ie(Bm.bind(null,e,t,i,n,l,a,r,u,f,w,D,q,null,y,T)),dl(e,i,r,!w);return}Bm(e,t,i,n,l,a,r,u,f,w,D,q)}function J0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],i=a.getSnapshot;a=a.value;try{if(!Ut(i(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dl(e,t,n,l){t=wc(e,t),t&=~Zs,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var i=31-Rt(a),r=1<<i;l[i]=-1,a&=~r}n!==0&&kc(e,n,t)}function Is(){return(Re&6)===0?(Ti(0),!1):!0}function xu(){if(je!==null){if(Ue===0)var e=je.return;else e=je,zn=zl=null,Eo(e),ha=null,ci=0,e=je;for(;e!==null;)$f(e.alternate,e),e=e.return;je=null}}function ja(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,bx(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),vn=0,xu(),Xe=e,je=n=Mn(e.current,null),Me=t,Ue=0,Gt=null,ol=!1,ka=Xa(e,t),fu=!1,Ea=Yt=Zs=Xl=ul=tt=0,zt=Ni=null,mu=!1,qn=wc(e,t),ss(),n}function Am(e,t){ke=null,J.H=Ds,t===pa||t===gs?(t=zd(),Ue=3):t===co?(t=zd(),Ue=4):Ue=t===Uo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Gt=t,je===null&&(tt=1,Ms(e,Kt(t,e.current)))}function jm(){var e=xt.current;return e===null?!0:(Me&4194048)===Me?_t===null:(Me&62914560)===Me||(Me&536870912)!==0?e===_t:!1}function Cm(){var e=J.H;return J.H=Ds,e===null?Ds:e}function Dm(){var e=J.A;return J.A=Z0,e}function Ps(){tt=4,ol||(Me&4194048)!==Me&&xt.current!==null||(ka=!0),(ul&134217727)===0&&(Xl&134217727)===0||Xe===null||dl(Xe,Me,Yt,!1)}function gu(e,t,n){var l=Re;Re|=2;var a=Cm(),i=Dm();(Xe!==e||Me!==t)&&($s=null,ja(e,t)),t=!1;var r=tt;e:do try{if(Ue!==0&&je!==null){var u=je,f=Gt;switch(Ue){case 8:xu(),r=6;break e;case 3:case 2:case 9:case 6:xt.current===null&&(t=!0);var w=Ue;if(Ue=0,Gt=null,Ca(e,u,f,w),n&&ka){r=0;break e}break;default:w=Ue,Ue=0,Gt=null,Ca(e,u,f,w)}}$0(),r=tt;break}catch(D){Am(e,D)}while(!0);return t&&e.shellSuspendCounter++,zn=zl=null,Re=l,J.H=a,J.A=i,je===null&&(Xe=null,Me=0,ss()),r}function $0(){for(;je!==null;)Mm(je)}function W0(e,t){var n=Re;Re|=2;var l=Cm(),a=Dm();Xe!==e||Me!==t?($s=null,Js=lt()+500,ja(e,t)):ka=Xa(e,t);e:do try{if(Ue!==0&&je!==null){t=je;var i=Gt;t:switch(Ue){case 1:Ue=0,Gt=null,Ca(e,t,i,1);break;case 2:case 9:if(Md(i)){Ue=0,Gt=null,Om(t);break}t=function(){Ue!==2&&Ue!==9||Xe!==e||(Ue=7),wn(e)},i.then(t,t);break e;case 3:Ue=7;break e;case 4:Ue=5;break e;case 7:Md(i)?(Ue=0,Gt=null,Om(t)):(Ue=0,Gt=null,Ca(e,t,i,7));break;case 5:var r=null;switch(je.tag){case 26:r=je.memoizedState;case 5:case 27:var u=je;if(r?Ep(r):u.stateNode.complete){Ue=0,Gt=null;var f=u.sibling;if(f!==null)je=f;else{var w=u.return;w!==null?(je=w,er(w)):je=null}break t}}Ue=0,Gt=null,Ca(e,t,i,5);break;case 6:Ue=0,Gt=null,Ca(e,t,i,6);break;case 8:xu(),tt=6;break e;default:throw Error(d(462))}}I0();break}catch(D){Am(e,D)}while(!0);return zn=zl=null,J.H=l,J.A=a,Re=n,je!==null?0:(Xe=null,Me=0,ss(),tt)}function I0(){for(;je!==null&&!$l();)Mm(je)}function Mm(e){var t=Kf(e.alternate,e,qn);e.memoizedProps=e.pendingProps,t===null?er(e):je=t}function Om(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Hf(n,t,t.pendingProps,t.type,void 0,Me);break;case 11:t=Hf(n,t,t.pendingProps,t.type.render,t.ref,Me);break;case 5:Eo(t);var l=t;l===dt&&(Te?(fs(l),l.tag===5&&l.stateNode!=null&&(Ke=l.stateNode)):(fs(l),Te=!0));default:$f(n,t),t=je=wd(t,qn),t=Kf(n,t,qn)}e.memoizedProps=e.pendingProps,t===null?er(e):je=t}function Ca(e,t,n,l){zn=zl=null,Eo(t),ha=null,ci=0;var a=t.return;try{if(U0(e,a,t,n,Me)){tt=1,Ms(e,Kt(n,e.current)),je=null;return}}catch(i){if(a!==null)throw je=a,i;tt=1,Ms(e,Kt(n,e.current)),je=null;return}t.flags&32768?(Te||l===1?e=!0:ka||(Me&536870912)!==0?e=!1:(ol=e=!0,(l===2||l===9||l===3||l===6)&&(l=xt.current,l!==null&&l.tag===13&&(l.flags|=16384))),zm(t,e)):er(t)}function er(e){var t=e;do{if((t.flags&32768)!==0){zm(t,ol);return}e=t.return;var n=Y0(t.alternate,t,qn);if(n!==null){je=n;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);tt===0&&(tt=5)}function zm(e,t){do{var n=V0(e.alternate,e);if(n!==null){n.flags&=32767,je=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){je=e;return}je=e=n}while(e!==null);tt=6,je=null}function Bm(e,t,n,l,a,i,r,u,f,w,D,q){e.cancelPendingCommit=null;do tr();while(Pe!==0);if((Re&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));e===Xe&&(je=Xe=null,Me=0),Zl=t,rn=e,vn=n,hu=a,Em=l,P0(e,t,n,r,u,f,q)}}function P0(e,t,n,l,a,i,r){var u=t.lanes|t.childLanes;if(pu=u,u|=Wr,Nh(e,n,u,l,a,i),Sa=null,(n&335544064)===n?(Ta=T0(e),l=10262):(Ta=null,l=10256),(t.subtreeFlags&l)!==0||(t.flags&l)!==0?(e.callbackNode=null,e.callbackPriority=0,ix(Qe,function(){return wu(),null})):(e.callbackNode=null,e.callbackPriority=0),qs=!1,l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=J.T,J.T=null,a=ae.p,ae.p=2,i=Re,Re|=4;try{Q0(e,t,n)}finally{Re=i,ae.p=a,J.T=l}}Pe=1,qs?Na=Nx(r,e.containerInfo,Ta,yu,bu,tx,vu,wu,ex):(yu(),bu(),vu())}function ex(e){if(Pe!==0){var t=rn.onRecoverableError;t(e,{componentStack:null})}}function tx(){Pe===3&&(Pe=0,gm(Zl,rn),Pe=4)}function yu(){if(Pe===1){Pe=0;var e=rn,t=Zl,n=vn,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=J.T,J.T=null;var a=ae.p;ae.p=2;var i=Re;Re|=4;try{_i=Ys=!1,hm(t,e,n),n=Ou;var r=dd(e.containerInfo),u=n.focusedElem,f=n.selectionRange;if(r!==u&&u&&u.ownerDocument&&cd(u.ownerDocument.documentElement,u)){if(f!==null&&Xr(u)){var w=f.start,D=f.end;if(D===void 0&&(D=w),"selectionStart"in u)u.selectionStart=w,u.selectionEnd=Math.min(D,u.value.length);else{var q=u.ownerDocument||document,y=q&&q.defaultView||window;if(y.getSelection){var T=y.getSelection(),ie=u.textContent.length,fe=Math.min(f.start,ie),Ee=f.end===void 0?fe:Math.min(f.end,ie);!T.extend&&fe>Ee&&(r=Ee,Ee=fe,fe=r);var v=ud(u,fe),x=ud(u,Ee);if(v&&x&&(T.rangeCount!==1||T.anchorNode!==v.node||T.anchorOffset!==v.offset||T.focusNode!==x.node||T.focusOffset!==x.offset)){var S=q.createRange();S.setStart(v.node,v.offset),T.removeAllRanges(),fe>Ee?(T.addRange(S),T.extend(x.node,x.offset)):(S.setEnd(x.node,x.offset),T.addRange(S))}}}}for(q=[],T=u;T=T.parentNode;)T.nodeType===1&&q.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<q.length;u++){var U=q[u];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}Fa=!!Mu,Ou=Mu=null}finally{Re=i,ae.p=a,J.T=l}}e.current=t,Pe=2}}function bu(){if(Pe===2){Pe=0;var e=rn,t=Zl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=J.T,J.T=null;var l=ae.p;ae.p=2;var a=Re;Re|=4;try{um(e,t.alternate,t)}finally{Re=a,ae.p=l,J.T=n}}Pe=3}}function vu(){if(Pe===4||Pe===3){Pe=0;var e=Na;Na=null,Qn();var t=rn,n=Zl,l=vn,a=Em,i=(l&335544064)===l?10262:10256;if((n.subtreeFlags&i)!==0||(n.flags&i)!==0?Pe=5:(Pe=0,Zl=rn=null,Lm(t,t.pendingLanes)),i=t.pendingLanes,i===0&&(cl=null),Ar(l),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Nl,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=J.T,i=ae.p,ae.p=2,J.T=null;try{for(var r=t.onRecoverableError,u=0;u<a.length;u++){var f=a[u];r(f.value,{componentStack:f.stack})}}finally{J.T=n,ae.p=i}}if(a=Sa,r=Ta,Ta=null,a!==null&&(Sa=null,r===null&&(r=[]),e!==null))for(f=0;f<a.length;f++)n=(0,a[f])(r),n!==void 0&&e.finished.finally(n);(vn&3)!==0&&tr(),wn(t),i=t.pendingLanes,(l&261930)!==0&&(i&42)!==0?t===Ws?Si++:(Si=0,Ws=t):(Si=0,Ws=null),Ti(0)}}function Lm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ri(t)))}function tr(){return Na!==null&&(Na.skipTransition(),Na=null),yu(),bu(),vu(),wu()}function wu(){if(Pe!==5)return!1;var e=rn,t=pu;pu=0;var n=Ar(vn),l=J.T,a=ae.p;try{ae.p=32>n?32:n,J.T=null,n=hu,hu=null;var i=rn,r=vn;if(Pe=0,Zl=rn=null,vn=0,(Re&6)!==0)throw Error(d(331));var u=Re;if(Re|=4,wm(i.current),ym(i,i.current,r,n),Re=u,Ti(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Nl,i)}catch{}return!0}finally{ae.p=a,J.T=l,Lm(e,t)}}function Rm(e,t,n){t=Kt(n,t),t=Fo(e.stateNode,t,2),e=nl(e,t,2),e!==null&&(Za(e,2),wn(e))}function qe(e,t,n){if(e.tag===3)Rm(e,e,n);else for(;t!==null;){if(t.tag===3){Rm(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(cl===null||!cl.has(l))){e=Kt(n,e),n=Of(2),l=nl(t,n,2),l!==null&&(zf(n,l,t,e),Za(l,2),wn(l));break}}t=t.return}}function _u(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new K0;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(fu=!0,a.add(n),e=nx.bind(null,e,t,n),t.then(e,e))}function nx(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Xe===e&&(Me&n)===n&&((tt===4||tt===3&&(Me&62914560)===Me&&300>lt()-Ks)&&(Re&2)===0?ja(e,0):Zs|=n,Ea===Me&&(Ea=0)),wn(e)}function Fm(e,t){t===0&&(t=_c()),e=Dl(e,t),e!==null&&(Za(e,t),wn(e))}function lx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fm(e,n)}function ax(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(t),Fm(e,n)}function ix(e,t){return Va(e,t)}var Da=null,Ma=null,ku=!1,nr=!1,Eu=!1,fl=0;function wn(e){e!==Ma&&e.next===null&&(Ma===null?Da=Ma=e:Ma=Ma.next=e),nr=!0,ku||(ku=!0,rx())}function Ti(e,t){if(!Eu&&nr){Eu=!0;do for(var n=!1,l=Da;l!==null;){if(e!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var r=l.suspendedLanes,u=l.pingedLanes;i=(1<<31-Rt(42|e)+1)-1,i&=a&~(r&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Gm(l,i))}else i=Me,i=Zi(l,l===Xe?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Xa(l,i)||(n=!0,Gm(l,i));l=l.next}while(n);Eu=!1}}function sx(){Um()}function Um(){nr=ku=!1;var e=0;fl!==0&&yx()&&(e=fl);for(var t=lt(),n=null,l=Da;l!==null;){var a=l.next,i=qm(l,t);i===0?(l.next=null,n===null?Da=a:n.next=a,a===null&&(Ma=n)):(n=l,(e!==0||(i&3)!==0)&&(nr=!0)),l=a}Pe!==0&&Pe!==5||Ti(e),fl!==0&&(fl=0)}function qm(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-Rt(i),u=1<<r,f=a[r];f===-1?((u&n)===0||(u&l)!==0)&&(a[r]=Eh(u,t)):f<=t&&(e.expiredLanes|=u),i&=~u}if(t=Xe,n=Me,n=Zi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Qa(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Xa(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&Qa(l),Ar(n)){case 2:case 8:n=Ae;break;case 32:n=Qe;break;case 268435456:n=Lt;break;default:n=Qe}return l=Hm.bind(null,e),n=Va(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&Qa(l),e.callbackPriority=2,e.callbackNode=null,2}function Hm(e,t){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(tr()&&e.callbackNode!==n)return null;var l=Me;return l=Zi(e,e===Xe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Sm(e,l,t),qm(e,lt()),e.callbackNode!=null&&e.callbackNode===n?Hm.bind(null,e):null)}function Gm(e,t){if(tr())return null;Sm(e,t,!0)}function rx(){vx(function(){(Re&6)!==0?Va(oe,sx):Um()})}function Nu(){if(fl===0){var e=Rl;e===0&&(e=Vi,Vi<<=1,(Vi&261888)===0&&(Vi=256)),fl=e}return fl}function Ym(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ii(e)}function ox(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var i=Ym((a[Ct]||null).action),r=l.submitter;r&&(t=(t=r[Ct]||null)?Ym(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var u=new ns("action","action",null,l,a);e.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(fl!==0){var f=new FormData(a,r);Oo(n,{pending:!0,data:f,method:a.method,action:i},null,f)}}else typeof i=="function"&&(u.preventDefault(),f=new FormData(a,r),Oo(n,{pending:!0,data:f,method:a.method,action:i},i,f))},currentTarget:a}]})}}for(var Su=0;Su<$r.length;Su++){var Tu=$r[Su],ux=Tu.toLowerCase(),cx=Tu[0].toUpperCase()+Tu.slice(1);nn(ux,"on"+cx)}nn(pd,"onAnimationEnd"),nn(hd,"onAnimationIteration"),nn(xd,"onAnimationStart"),nn("dblclick","onDoubleClick"),nn("focusin","onFocus"),nn("focusout","onBlur"),nn(b0,"onTransitionRun"),nn(v0,"onTransitionStart"),nn(w0,"onTransitionCancel"),nn(gd,"onTransitionEnd"),ea("onMouseEnter",["mouseout","mouseover"]),ea("onMouseLeave",["mouseout","mouseover"]),ea("onPointerEnter",["pointerout","pointerover"]),ea("onPointerLeave",["pointerout","pointerover"]),Al("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Al("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Al("onBeforeInput",["compositionend","keypress","textInput","paste"]),Al("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Al("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Al("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ai));function Vm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var r=l.length-1;0<=r;r--){var u=l[r],f=u.instance,w=u.currentTarget;if(u=u.listener,f!==i&&a.isPropagationStopped())break e;i=u,a.currentTarget=w;try{i(a)}catch(D){is(D)}a.currentTarget=null,i=f}else for(r=0;r<l.length;r++){if(u=l[r],f=u.instance,w=u.currentTarget,u=u.listener,f!==i&&a.isPropagationStopped())break e;i=u,a.currentTarget=w;try{i(a)}catch(D){is(D)}a.currentTarget=null,i=f}}}}function Ce(e,t){var n=t[Ac];n===void 0&&(n=t[Ac]=new Set);var l=e+"__bubble";n.has(l)||(Qm(t,e,2,!1),n.add(l))}function Au(e,t,n){var l=0;t&&(l|=4),Qm(n,e,l,t)}var lr="_reactListening"+Math.random().toString(36).slice(2);function ju(e){if(!e[lr]){e[lr]=!0,Dc.forEach(function(n){n!=="selectionchange"&&(dx.has(n)||Au(n,!1,e),Au(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lr]||(t[lr]=!0,Au("selectionchange",!1,t))}}function Qm(e,t,n,l){switch(zp(t)){case 2:var a=lg;break;case 8:a=ag;break;default:a=Ju}n=a.bind(null,t,n,e),a=void 0,!Lr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Cu(e,t,n,l,a){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var u=l.stateNode.containerInfo;if(u===a)break;if(r===4)for(r=l.return;r!==null;){var f=r.tag;if((f===3||f===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;u!==null;){if(r=Tl(u),r===null)return;if(f=r.tag,f===5||f===6||f===26||f===27){l=i=r;continue e}u=u.parentNode}}l=l.return}Vc(function(){var w=i,D=zr(n),q=[];e:{var y=yd.get(e);if(y!==void 0){var T=ns,ie=e;switch(e){case"keypress":if(es(n)===0)break e;case"keydown":case"keyup":T=Jh;break;case"focusin":ie="focus",T=qr;break;case"focusout":ie="blur",T=qr;break;case"beforeblur":case"afterblur":T=qr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Rh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=e0;break;case pd:case hd:case xd:T=qh;break;case gd:T=n0;break;case"scroll":case"scrollend":T=Bh;break;case"wheel":T=a0;break;case"copy":case"cut":case"paste":T=Gh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Jc;break;case"submit":T=Ih;break;case"toggle":case"beforetoggle":T=s0}var fe=(t&4)!==0,Ee=!fe&&(e==="scroll"||e==="scrollend"),v=fe?y!==null?y+"Capture":null:y;fe=[];for(var x=w,S;x!==null;){var U=x;if(S=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||S===null||v===null||(U=$a(x,v),U!=null&&fe.push(ji(x,U,S))),Ee)break;x=x.return}0<fe.length&&(y=new T(y,ie,null,n,D),q.push({event:y,listeners:fe}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",T&&n!==Or&&(ie=n.relatedTarget||n.fromElement)&&(Tl(ie)||ie[Wl]))break e;(y||T)&&(ie=D.window===D?D:(T=D.ownerDocument)?T.defaultView||T.parentWindow:window,y?(T=n.relatedTarget||n.toElement,y=w,T=T?Tl(T):null,T!==null&&(Ee=G(T),fe=T.tag,T!==Ee||fe!==5&&fe!==27&&fe!==6)&&(T=null)):(y=null,T=w),y!==T&&(fe=Zc,U="onMouseLeave",v="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(fe=Jc,U="onPointerLeave",v="onPointerEnter",x="pointer"),Ee=y==null?ie:Ja(y),S=T==null?ie:Ja(T),ie=new fe(U,x+"leave",y,n,D),ie.target=Ee,ie.relatedTarget=S,U=null,Tl(D)===w&&(fe=new fe(v,x+"enter",T,n,D),fe.target=S,fe.relatedTarget=Ee,U=fe),Ee=U,fe=y&&T?L(y,T,fx):null,y!==null&&Xm(q,ie,y,fe,!1),T!==null&&Ee!==null&&Xm(q,Ee,T,fe,!0)))}e:{if(y=w?Ja(w):window,T=y.nodeName&&y.nodeName.toLowerCase(),T==="select"||T==="input"&&y.type==="file")var ce=ld;else if(td(y))if(ad)ce=x0;else{ce=p0;var Oe=m0}else T=y.nodeName,!T||T.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?w&&Mr(w.elementType)&&(ce=ld):ce=h0;if(ce&&(ce=ce(e,w))){nd(q,ce,n,D);break e}Oe&&Oe(e,y,w)}switch(Oe=w?Ja(w):window,e){case"focusin":(td(Oe)||Oe.contentEditable==="true")&&(sa=Oe,Zr=w,ai=null);break;case"focusout":ai=Zr=sa=null;break;case"mousedown":Kr=!0;break;case"contextmenu":case"mouseup":case"dragend":Kr=!1,fd(q,n,D);break;case"selectionchange":if(y0)break;case"keydown":case"keyup":fd(q,n,D)}var xe;if(Gr)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else ia?Pc(e,n)&&(be="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(be="onCompositionStart");be&&($c&&n.locale!=="ko"&&(ia||be!=="onCompositionStart"?be==="onCompositionEnd"&&ia&&(xe=Qc()):(Zn=D,Rr="value"in Zn?Zn.value:Zn.textContent,ia=!0)),Oe=ar(w,be),0<Oe.length&&(be=new Kc(be,e,null,n,D),q.push({event:be,listeners:Oe}),xe?be.data=xe:(xe=ed(n),xe!==null&&(be.data=xe)))),(xe=o0?u0(e,n):c0(e,n))&&(be=ar(w,"onBeforeInput"),0<be.length&&(Oe=new Kc("onBeforeInput","beforeinput",null,n,D),q.push({event:Oe,listeners:be}),Oe.data=xe)),ox(q,e,w,n,D)}Vm(q,t)})}function ji(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ar(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=$a(e,n),a!=null&&l.unshift(ji(e,a,i)),a=$a(e,t),a!=null&&l.push(ji(e,a,i))),e.tag===3)return l;e=e.return}return[]}function fx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xm(e,t,n,l,a){for(var i=t._reactName,r=[];n!==null&&n!==l;){var u=n,f=u.alternate,w=u.stateNode;if(u=u.tag,f!==null&&f===l)break;u!==5&&u!==26&&u!==27||w===null||(f=w,a?(w=$a(n,i),w!=null&&r.unshift(ji(n,w,f))):a||(w=$a(n,i),w!=null&&r.push(ji(n,w,f)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var mx=/\r\n?/g,px=/\u0000|\uFFFD/g;function Zm(e){return(typeof e=="string"?e:""+e).replace(mx,`
`).replace(px,"")}function Km(e,t){return t=Zm(t),Zm(e)===t}function He(e,t,n,l,a,i){switch(n){case"children":if(typeof l=="string")t==="body"||t==="textarea"&&l===""||na(e,l);else if(typeof l=="number"||typeof l=="bigint")t!=="body"&&na(e,""+l);else return;break;case"className":Wi(e,"class",l);break;case"tabIndex":Wi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Wi(e,n,l);break;case"style":Gc(e,l,i);return;case"data":if(t!=="object"){Wi(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Ii(l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&He(e,t,"name",a.name,a,null),He(e,t,"formEncType",a.formEncType,a,null),He(e,t,"formMethod",a.formMethod,a,null),He(e,t,"formTarget",a.formTarget,a,null)):(He(e,t,"encType",a.encType,a,null),He(e,t,"method",a.method,a,null),He(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Ii(l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=dn);return;case"onScroll":l!=null&&Ce("scroll",e);return;case"onScrollEnd":l!=null&&Ce("scrollend",e);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(d(60));(i!=null?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=Ii(l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),$i(e,"popover",l);break;case"xlinkActuate":An(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":An(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":An(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":An(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":An(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":An(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":An(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":An(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":An(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":$i(e,"is",l);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=Oh.get(n)||n,$i(e,n,l);else return}Le=!0}function Du(e,t,n,l,a,i){switch(n){case"style":Gc(e,l,i);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(d(60));(i!=null?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if(typeof l=="string")na(e,l);else if(typeof l=="number"||typeof l=="bigint")na(e,""+l);else return;break;case"onScroll":l!=null&&Ce("scroll",e);return;case"onScrollEnd":l!=null&&Ce("scrollend",e);return;case"onClick":l!=null&&(e.onclick=dn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Mc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),i=n.slice(2,a?n.length-7:void 0),t=e[Ct]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(i,t,a),typeof l=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(i,l,a);break e}Le=!0,n in e?e[n]=l:l===!0?e.setAttribute(n,""):$i(e,n,l)}return}Le=!0}function bt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var l=!1,a=!1,i;for(i in n)if(n.hasOwnProperty(i)){var r=n[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:He(e,t,i,r,n,null)}}a&&He(e,t,"srcSet",n.srcSet,n,null),l&&He(e,t,"src",n.src,n,null);return;case"input":Ce("invalid",e);var u=i=r=a=null,f=null,w=null;for(l in n)if(n.hasOwnProperty(l)){var D=n[l];if(D!=null)switch(l){case"name":a=D;break;case"type":r=D;break;case"checked":f=D;break;case"defaultChecked":w=D;break;case"value":i=D;break;case"defaultValue":u=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(d(137,t));break;default:He(e,t,l,D,n,null)}}Fc(e,i,u,f,w,r,a,!1);return;case"select":Ce("invalid",e),l=r=i=null;for(a in n)if(n.hasOwnProperty(a)&&(u=n[a],u!=null))switch(a){case"value":i=u;break;case"defaultValue":r=u;break;case"multiple":l=u;default:He(e,t,a,u,n,null)}t=i,n=r,e.multiple=!!l,t!=null?ta(e,!!l,t,!1):n!=null&&ta(e,!!l,n,!0);return;case"textarea":Ce("invalid",e),i=a=l=null;for(r in n)if(n.hasOwnProperty(r)&&(u=n[r],u!=null))switch(r){case"value":l=u;break;case"defaultValue":a=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(d(91));break;default:He(e,t,r,u,n,null)}qc(e,l,a,i);return;case"option":for(f in n)if(n.hasOwnProperty(f)&&(l=n[f],l!=null))switch(f){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:He(e,t,f,l,n,null)}return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(l=0;l<Ai.length;l++)Ce(Ai[l],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in n)if(n.hasOwnProperty(w)&&(l=n[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:He(e,t,w,l,n,null)}return;default:if(Mr(t)){for(D in n)n.hasOwnProperty(D)&&(l=n[D],l!==void 0&&Du(e,t,D,l,n,void 0));return}}for(u in n)n.hasOwnProperty(u)&&(l=n[u],l!=null&&He(e,t,u,l,n,null))}var hx={};function xx(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,r=null,u=null,f=null,w=null,D=null;for(T in n){var q=n[T];if(n.hasOwnProperty(T)&&q!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":f=q;default:l.hasOwnProperty(T)||He(e,t,T,null,l,q)}}for(var y in l){var T=l[y];if(q=n[y],l.hasOwnProperty(y)&&(T!=null||q!=null))switch(y){case"type":T!==q&&(Le=!0),i=T;break;case"name":T!==q&&(Le=!0),a=T;break;case"checked":T!==q&&(Le=!0),w=T;break;case"defaultChecked":T!==q&&(Le=!0),D=T;break;case"value":T!==q&&(Le=!0),r=T;break;case"defaultValue":T!==q&&(Le=!0),u=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(d(137,t));break;default:T!==q&&He(e,t,y,T,l,q)}}Cr(e,r,u,f,w,D,i,a);return;case"select":T=r=u=y=null;for(i in n)if(f=n[i],n.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":T=f;default:l.hasOwnProperty(i)||He(e,t,i,null,l,f)}for(a in l)if(i=l[a],f=n[a],l.hasOwnProperty(a)&&(i!=null||f!=null))switch(a){case"value":i!==f&&(Le=!0),y=i;break;case"defaultValue":i!==f&&(Le=!0),u=i;break;case"multiple":i!==f&&(Le=!0),r=i;default:i!==f&&He(e,t,a,i,l,f)}t=u,n=r,l=T,y!=null?ta(e,!!n,y,!1):!!l!=!!n&&(t!=null?ta(e,!!n,t,!0):ta(e,!!n,n?[]:"",!1));return;case"textarea":T=y=null;for(u in n)if(a=n[u],n.hasOwnProperty(u)&&a!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:He(e,t,u,null,l,a)}for(r in l)if(a=l[r],i=n[r],l.hasOwnProperty(r)&&(a!=null||i!=null))switch(r){case"value":a!==i&&(Le=!0),y=a;break;case"defaultValue":a!==i&&(Le=!0),T=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(d(91));break;default:a!==i&&He(e,t,r,a,l,i)}Uc(e,y,T);return;case"option":for(var ie in n)if(y=n[ie],n.hasOwnProperty(ie)&&y!=null&&!l.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:He(e,t,ie,null,l,y)}for(f in l)if(y=l[f],T=n[f],l.hasOwnProperty(f)&&y!==T&&(y!=null||T!=null))switch(f){case"selected":y!==T&&(Le=!0),e.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:He(e,t,f,y,l,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in n)y=n[fe],n.hasOwnProperty(fe)&&y!=null&&!l.hasOwnProperty(fe)&&He(e,t,fe,null,l,y);for(w in l)if(y=l[w],T=n[w],l.hasOwnProperty(w)&&y!==T&&(y!=null||T!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(d(137,t));break;default:He(e,t,w,y,l,T)}return;default:if(Mr(t)){for(var Ee in n)y=n[Ee],n.hasOwnProperty(Ee)&&y!==void 0&&!l.hasOwnProperty(Ee)&&Du(e,t,Ee,void 0,l,y);for(D in l)y=l[D],T=n[D],!l.hasOwnProperty(D)||y===T||y===void 0&&T===void 0||Du(e,t,D,y,l,T);return}}for(var v in n)y=n[v],n.hasOwnProperty(v)&&y!=null&&!l.hasOwnProperty(v)&&He(e,t,v,null,l,y);for(q in l)y=l[q],T=n[q],!l.hasOwnProperty(q)||y===T||y==null&&T==null||He(e,t,q,y,l,T)}function Jm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],i=a.transferSize,r=a.initiatorType,u=a.duration;if(i&&u&&Jm(r)){for(r=0,u=a.responseEnd,l+=1;l<n.length;l++){var f=n[l],w=f.startTime;if(w>u)break;var D=f.transferSize,q=f.initiatorType;D&&Jm(q)&&(f=f.responseEnd,r+=D*(f<u?1:(u-w)/(f-w)))}if(--l,t+=8*(i+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Mu=null,Ou=null;function Ci(e){return e.nodeType===9?e:e.ownerDocument}function $m(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Im(e,t,n,l){return n=Ci(n).createElement(e),n[pt]=l,n[Ct]=t,bt(n,e,t),ct(n),n}function zu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bu=null;function yx(){var e=window.event;return e&&e.type==="popstate"?e===Bu?!1:(Bu=e,!0):(Bu=null,!1)}var Lu=typeof setTimeout=="function"?setTimeout:void 0,bx=typeof clearTimeout=="function"?clearTimeout:void 0,Pm=typeof Promise=="function"?Promise:void 0,ep=typeof requestAnimationFrame=="function"?requestAnimationFrame:Lu,vx=typeof queueMicrotask=="function"?queueMicrotask:typeof Pm<"u"?function(e){return Pm.resolve(null).then(e).catch(wx)}:Lu;function wx(e){setTimeout(function(){throw e})}function ml(e){return e==="head"}function tp(e,t){var n=t,l=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(a),Ua(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Vu(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Vu(n);for(var i=n.firstChild;i;){var r=i.nextSibling,u=i.nodeName;i[Ka]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=r}}else n==="body"&&Vu(e.ownerDocument.body);n=a}while(n);Ua(t)}function np(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function lp(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var l=1;else for(var a=l=0;a<t.length;a++){var i=t[a];0<i.width&&0<i.height&&l++}l===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function ap(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function _x(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Ru(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return _x(t,n,e)}function kx(e){return e.documentElement.clientHeight}function Ex(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Nx(e,t,n,l,a,i,r,u,f){var w=t.nodeType===9?t:t.ownerDocument;try{var D=w.startViewTransition({update:function(){var y=w.defaultView,T=y.navigation&&y.navigation.transition,ie=w.fonts.status;l();var fe=[];if(ie==="loaded"&&(kx(w),w.fonts.status==="loading"&&fe.push(w.fonts.ready)),ie=fe.length,e!==null)for(var Ee=e.suspenseyImages,v=0,x=0;x<Ee.length;x++){var S=Ee[x];if(!S.complete){var U=S.getBoundingClientRect();if(0<U.bottom&&0<U.right&&U.top<y.innerHeight&&U.left<y.innerWidth){if(v+=Np(S),v>rr){fe.length=ie;break}S=new Promise(Ex.bind(S)),fe.push(S)}}}if(0<fe.length)return y=Promise.race([Promise.all(fe),new Promise(function(ce){return setTimeout(ce,500)})]).then(a,a),(T?Promise.allSettled([T.finished,y]):y).then(i,i);if(a(),T)return T.finished.then(i,i);i()},types:n});w.__reactViewTransition=D;var q=[];return D.ready.then(function(){for(var y=w.documentElement.getAnimations({subtree:!0}),T=0;T<y.length;T++){var ie=y[T],fe=ie.effect,Ee=fe.pseudoElement;if(Ee!=null&&Ee.startsWith("::view-transition")){q.push(ie),ie=fe.getKeyframes();for(var v=Ee=void 0,x=!0,S=0;S<ie.length;S++){var U=ie[S],ce=U.width;if(Ee===void 0)Ee=ce;else if(Ee!==ce){x=!1;break}if(ce=U.height,v===void 0)v=ce;else if(v!==ce){x=!1;break}delete U.width,delete U.height,U.transform==="none"&&delete U.transform}x&&Ee!==void 0&&v!==void 0&&(fe.setKeyframes(ie),x=getComputedStyle(fe.target,fe.pseudoElement),x.width!==Ee||x.height!==v)&&(x=ie[0],x.width=Ee,x.height=v,x=ie[ie.length-1],x.width=Ee,x.height=v,fe.setKeyframes(ie))}}r()},function(y){w.__reactViewTransition===D&&(w.__reactViewTransition=null);try{if(typeof y=="object"&&y!==null)switch(y.name){case"InvalidStateError":(y.message==="View transition was skipped because document visibility state is hidden."||y.message==="Skipping view transition because document visibility state has become hidden."||y.message==="Skipping view transition because viewport size changed."||y.message==="Transition was aborted because of invalid state")&&(y=null)}y!==null&&f(y)}finally{l(),a(),r()}}),D.finished.finally(function(){for(var y=0;y<q.length;y++)q[y].cancel();w.__reactViewTransition===D&&(w.__reactViewTransition=null),u()}),D}catch{return l(),a(),r(),null}}function Kl(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Kl.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:F({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Kl.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),l=[],a=0;a<n.length;a++){var i=n[a].effect;i!==null&&i.target===e&&i.pseudoElement===t&&l.push(n[a])}return l},Kl.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function ip(e){return{name:e,group:new Kl("group",e),imagePair:new Kl("image-pair",e),old:new Kl("old",e),new:new Kl("new",e)}}function Qt(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Qt.prototype.addEventListener=function(e,t,n){var l=null,a=null;if(!(n!=null&&typeof n!="boolean"&&(l=n.signal||null,l!==null&&l.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(rp(i,e,t,n)===-1){var r=this,u=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(u=function(f){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,f):t.handleEvent(f)}),l!==null&&(a=r.removeEventListener.bind(r,e,t,n),l.addEventListener("abort",a,{once:!0}),a=l.removeEventListener.bind(l,"abort",a)),l=Oa(n),i.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:u,cleanup:a}),_(this._fragmentFiber.child,!1,Sx,e,u,l)}this._eventListeners=i}};function Sx(e,t,n,l){return B(e).addEventListener(t,n,l),!1}Qt.prototype.removeEventListener=function(e,t,n){var l=this._eventListeners;if(l!==null&&(t=rp(l,e,t,n),t!==-1)){var a=l[t];n=a.attachedListener;var i=a.cleanup;a=Oa(a.optionsOrUseCapture),_(this._fragmentFiber.child,!1,Tx,e,n,a),l.splice(t,1),i!==null&&i()}};function Tx(e,t,n,l){return B(e).removeEventListener(t,n,l),!1}function Oa(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function sp(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function rp(e,t,n,l){if(e.length===0)return-1;l=sp(l);for(var a=0;a<e.length;a++){var i=e[a];if(i.type===t&&i.listener===n&&sp(i.optionsOrUseCapture)===l)return a}return-1}Qt.prototype.dispatchEvent=function(e){var t=k(this._fragmentFiber);if(t===null)return!0;t=B(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var l=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var i=n[a];l.addEventListener(i.type,i.attachedListener,Oa(i.optionsOrUseCapture))}if(t.appendChild(l),e=l.dispatchEvent(e),n)for(a=0;a<n.length;a++)i=n[a],l.removeEventListener(i.type,i.attachedListener,Oa(i.optionsOrUseCapture));return t.removeChild(l),e}return t.dispatchEvent(e)},Qt.prototype.focus=function(e){_(this._fragmentFiber.child,!0,op,e,void 0,void 0)};function op(e,t){return e.tag===6?!1:(e=B(e),Ux(e,t))}Qt.prototype.focusLast=function(e){var t=[];_(this._fragmentFiber.child,!0,Fu,t,void 0,void 0);for(var n=t.length-1;0<=n&&!op(t[n],e);n--);};function Fu(e,t){return t.push(e),!1}Qt.prototype.blur=function(){var e=k(this._fragmentFiber);e!==null&&(e=B(e),e=Ci(e).activeElement,e!==null&&_(this._fragmentFiber.child,!1,Ax,e,void 0,void 0))};function Ax(e,t){return e.tag===6?!1:(e=B(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Qt.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),_(this._fragmentFiber.child,!1,jx,e,void 0,void 0)};function jx(e,t){return e.tag===6||(e=B(e),t.observe(e)),!1}Qt.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),_(this._fragmentFiber.child,!1,Cx,e,void 0,void 0);for(var n=t=0;n<on.length;n++){var l=on[n];l.fragmentInstance===this&&l.observer===e?e.unobserve(l.instance):on[t++]=l}on.length=t}};function Cx(e,t){return e.tag===6||(e=B(e),t.unobserve(e)),!1}var on=[],Uu=!1;function Dx(e,t,n){on.push({fragmentInstance:e,observer:t,instance:n}),Uu||(Uu=!0,qx(function(){Uu=!1;var l=on;on=[];for(var a=0;a<l.length;a++){var i=l[a];i.observer.unobserve(i.instance)}}))}Qt.prototype.getClientRects=function(){var e=[];return _(this._fragmentFiber.child,!1,Mx,e,void 0,void 0),e};function Mx(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=B(e),t.push.apply(t,e.getClientRects());return!1}Qt.prototype.getRootNode=function(e){var t=k(this._fragmentFiber);return t===null?this:B(t).getRootNode(e)},Qt.prototype.compareDocumentPosition=function(e){var t=k(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];_(this._fragmentFiber.child,!1,Fu,n,void 0,void 0);var l=B(t);if(n.length===0){if(n=l,me(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var a=l=n.compareDocumentPosition(e);return n===e?a=Node.DOCUMENT_POSITION_CONTAINS:l&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=ge(t)[1],n===null?a=Node.DOCUMENT_POSITION_PRECEDING:(e=B(n).compareDocumentPosition(e),a=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=B(n[0]),a=B(n[n.length-1]);var i=me(this._fragmentFiber)?t.parentElement:l;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;l=i.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),u=a.compareDocumentPosition(e),f=r&Node.DOCUMENT_POSITION_CONTAINED_BY||u&Node.DOCUMENT_POSITION_CONTAINED_BY;return u=l&&i&&r&Node.DOCUMENT_POSITION_FOLLOWING&&u&Node.DOCUMENT_POSITION_PRECEDING,t=l&&t===e||i&&a===e||f||u?Node.DOCUMENT_POSITION_CONTAINED_BY:!l&&t===e||!i&&a===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Ox(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Ox(e,t,n,l,a){var i=Tl(a);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!i)e:{for(;i!==null;){if(i.tag===7&&(i===t||i.alternate===t)){n=!0;break e}i=i.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=a.ownerDocument,a===i||a===i.documentElement||a===i.body;e:{for(i=t,t=k(t);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==t&&i.alternate!==t)){i=!0;break e}i=i.return}i=!1}return i}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!i)&&!(t=i===n)&&(t=L(n,i,M),t===null?t=!1:(_(t,!0,g,i,n),i=P,P=null,t=i!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!i)&&!(t=i===l)&&(t=L(l,i,M),t===null?t=!1:(_(t,!0,R,i,l),i=P,E=P=null,t=i!==null)),t):!1}function up(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Qt.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(d(566));var t=[];_(this._fragmentFiber.child,!1,Fu,t,void 0,void 0);var n=e!==!1;if(t.length===0){var l=ge(this._fragmentFiber);if(l=n?l[1]||l[0]||k(this._fragmentFiber):l[0]||l[1],l===null)return;if(l.tag===6){e=B(l),up(e,n);return}if(l=B(l),l.nodeType!==9){if(l.nodeType===11){n="host"in l?l.host:null,n!==null&&n.scrollIntoView(e);return}l.scrollIntoView(e)}}for(l=n?t.length-1:0;l!==(n?-1:t.length);){var a=t[l];a.tag===6?(a=B(a),up(a,n)):B(a).scrollIntoView(e),l+=n?-1:1}};function zx(e,t){return e=B(e),cp(e,t),!1}function cp(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function dp(e,t){var n=t._eventListeners;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l];e.addEventListener(a.type,a.attachedListener,Oa(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(i){for(var r=0,u=0;u<on.length;u++){var f=on[u];(f.fragmentInstance!==t||f.observer!==i||f.instance!==e)&&(on[r++]=f)}on.length=r,i.observe(e)}),cp(e,t))}function Bx(e,t){var n=t._eventListeners;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l];e.removeEventListener(a.type,a.attachedListener,Oa(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(i){typeof i.rootMargin=="string"?Dx(t,i,e):i.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function qu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":qu(n),Ji(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Lx(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ka])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Pt(e.nextSibling),e===null)break}return null}function Rx(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Pt(e.nextSibling),e===null))return null;return e}function fp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Pt(e.nextSibling),e===null))return null;return e}function Hu(e){return e.data==="$?"||e.data==="$~"}function Gu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Fx(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Yu=null;function mp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Pt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function pp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Ux(e,t){function n(){l=!0}if(e.ownerDocument.activeElement===e)return!0;var l=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return l}function qx(e){ep(function(){ep(function(t){return e(t)})})}function hp(e,t,n){switch(t=Ci(n),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function xp(e,t,n){for(var l in n){var a=n[l];n.hasOwnProperty(l)&&a!=null&&He(e,t,l,null,hx,a)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===dn&&(e.onclick=null),Ji(e)}function Vu(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ji(e)}var en=new Map,gp=new Set;function Di(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Hn=ae.d;ae.d={f:Hx,r:Gx,D:Yx,C:Vx,L:Qx,m:Xx,X:Kx,S:Zx,M:Jx};function Hx(){var e=Hn.f(),t=Is();return e||t}function Gx(e){var t=Il(e);t!==null&&t.tag===5&&t.type==="form"?bf(t):Hn.r(e)}var za=typeof document>"u"?null:document;function yp(e,t,n){var l=za;if(l&&typeof t=="string"&&t){var a=Xt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),gp.has(a)||(gp.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),bt(t,"link",e),ct(t),l.head.appendChild(t)))}}function Yx(e){Hn.D(e),yp("dns-prefetch",e,null)}function Vx(e,t){Hn.C(e,t),yp("preconnect",e,t)}function Qx(e,t,n){Hn.L(e,t,n);var l=za;if(l&&e&&t){var a='link[rel="preload"][as="'+Xt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Xt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Xt(n.imageSizes)+'"]')):a+='[href="'+Xt(e)+'"]';var i=a;switch(t){case"style":i=Ba(e);break;case"script":i=La(e)}if(!(en.has(i)||(e=F({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),en.set(i,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(Mi(i))||t==="script"&&l.querySelector(Oi(i))))){var r=l.createElement("link");bt(r,"link",e),t==="style"&&(r[Ki]=!0,r.onload=r.onerror=function(){Cc(r)}),ct(r),l.head.appendChild(r)}}}function Xx(e,t){Hn.m(e,t);var n=za;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Xt(l)+'"][href="'+Xt(e)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=La(e)}if(!en.has(i)&&(e=F({rel:"modulepreload",href:e},t),en.set(i,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Oi(i)))return}l=n.createElement("link"),bt(l,"link",e),ct(l),n.head.appendChild(l)}}}function Zx(e,t,n){Hn.S(e,t,n);var l=za;if(l&&e){var a=Pl(l).hoistableStyles,i=Ba(e);t=t||"default";var r=a.get(i);if(!r){var u={loading:0,preload:null};if(r=l.querySelector(Mi(i)))u.loading=5;else{e=F({rel:"stylesheet",href:e,"data-precedence":t},n),(n=en.get(i))&&Qu(e,n);var f=r=l.createElement("link");ct(f),bt(f,"link",e),f._p=new Promise(function(w,D){f.onload=w,f.onerror=D}),f.addEventListener("load",function(){u.loading|=1}),f.addEventListener("error",function(){u.loading|=2}),u.loading|=4,ir(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:u},a.set(i,r)}}}function Kx(e,t){Hn.X(e,t);var n=za;if(n&&e){var l=Pl(n).hoistableScripts,a=La(e),i=l.get(a);i||(i=n.querySelector(Oi(a)),i||(e=F({src:e,async:!0},t),(t=en.get(a))&&Xu(e,t),i=n.createElement("script"),ct(i),bt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function Jx(e,t){Hn.M(e,t);var n=za;if(n&&e){var l=Pl(n).hoistableScripts,a=La(e),i=l.get(a);i||(i=n.querySelector(Oi(a)),i||(e=F({src:e,async:!0,type:"module"},t),(t=en.get(a))&&Xu(e,t),i=n.createElement("script"),ct(i),bt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function bp(e,t,n,l){var a=(a=jt.current)?Di(a):null;if(!a)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Ba(n.href),t=Pl(a).hoistableStyles,l=t.get(n),l||(l={type:"style",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ba(n.href);var i=Pl(a).hoistableStyles,r=i.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=a.querySelector(Mi(e)))?i._p||(r.instance=i,r.state.loading=5):(i=en.get(e),i||(i={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},en.set(e,i)),$x(a,e,i,r.state))),t&&l===null)throw Error(d(528,""));return r}if(t&&l!==null)throw Error(d(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=La(n),t=Pl(a).hoistableScripts,l=t.get(n),l||(l={type:"script",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Ba(e){return'href="'+Xt(e)+'"'}function Mi(e){return'link[rel="stylesheet"]['+e+"]"}function vp(e){return F({},e,{"data-precedence":e.precedence,precedence:null})}function $x(e,t,n,l){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Ki]!==!0){l.loading=1;return}}else t=e.createElement("link"),t[Ki]=!0,t.onload=t.onerror=Cc.bind(null,t),bt(t,"link",n),ct(t),e.head.appendChild(t);l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2})}function La(e){return'[src="'+Xt(e)+'"]'}function Oi(e){return"script[async]"+e}function wp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Xt(n.href)+'"]');if(l)return t.instance=l,ct(l),l;var a=F({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ct(l),bt(l,"style",a),ir(l,n.precedence,e),t.instance=l;case"stylesheet":a=Ba(n.href);var i=e.querySelector(Mi(a));if(i)return t.state.loading|=4,t.instance=i,ct(i),i;l=vp(n),(a=en.get(a))&&Qu(l,a),i=(e.ownerDocument||e).createElement("link"),ct(i);var r=i;return r._p=new Promise(function(u,f){r.onload=u,r.onerror=f}),bt(i,"link",l),t.state.loading|=4,ir(i,n.precedence,e),t.instance=i;case"script":return i=La(n.src),(a=e.querySelector(Oi(i)))?(t.instance=a,ct(a),a):(l=n,(a=en.get(i))&&(l=F({},n),Xu(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),ct(a),bt(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,ir(l,n.precedence,e));return t.instance}function ir(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,r=0;r<l.length;r++){var u=l[r];if(u.dataset.precedence===t)i=u;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Qu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Xu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var sr=null;function _p(e,t,n){if(sr===null){var l=new Map,a=sr=new Map;a.set(n,l)}else a=sr,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[Ka]||i[pt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var u=l.get(r);u?u.push(i):l.set(r,[i])}}return l}function Zu(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Wx(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function kp(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function Ep(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Np(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Sp(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=Np(t),e.suspenseyImages.push(t)),e=eg.bind(e),t.decode().then(e,e))}function Ix(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Ba(l.href),i=t.querySelector(Mi(a));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=zi.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,ct(i);return}i=t.ownerDocument||t,l=vp(l),(a=en.get(a))&&Qu(l,a),i=i.createElement("link"),ct(i);var r=i;r._p=new Promise(function(u,f){r.onload=u,r.onerror=f}),bt(i,"link",l),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=zi.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var rr=0;function Px(e,t){return e.stylesheets&&e.count===0&&ur(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&ur(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&rr===0&&(rr=62500*gx());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ur(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>rr?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function Tp(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ur(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function zi(){this.count--,Tp(this)}function eg(){this.imgCount--,Tp(this)}var or=null;function ur(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,or=new Map,t.forEach(tg,e),or=null,zi.call(e))}function tg(e,t){if(!(t.state.loading&4)){var n=or.get(e);if(n)var l=n.get(null);else{n=new Map,or.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var r=a[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),l=r)}l&&n.set(null,l)}a=t.instance,r=a.getAttribute("data-precedence"),i=n.get(r)||l,i===l&&n.set(null,a),n.set(r,a),this.count++,l=zi.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Ra={$$typeof:se,Provider:null,Consumer:null,_currentValue:De,_currentValue2:De,_threadCount:0};function ng(e,t,n,l,a,i,r,u,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Sr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sr(0),this.hiddenUpdates=Sr(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.transitionTypes=null,this.incompleteTransitions=new Map}function Ap(e,t,n,l,a,i,r,u,f,w,D,q){return e=new ng(e,t,n,r,f,w,D,q,u),t=1,i===!0&&(t|=24),i=Dt(3,null,null,t),e.current=i,i.stateNode=e,t=ro(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:n,cache:t},fo(i),e}function jp(e){return e?(e=ua,e):ua}function Cp(e,t,n,l,a,i){a=jp(a),l.context===null?l.context=a:l.pendingContext=a,l=tl(t),l.payload={element:n},i=i===void 0?null:i,i!==null&&(l.callback=i),n=nl(e,l,t),n!==null&&(Bt(n,e,t),di(n,e,t))}function Dp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ku(e,t){Dp(e,t),(e=e.alternate)&&Dp(e,t)}function Mp(e){if(e.tag===13||e.tag===31){var t=Dl(e,67108864);t!==null&&Bt(t,e,67108864),Ku(e,67108864)}}function Op(e){if(e.tag===13||e.tag===31){var t=Vt();t=Tr(t);var n=Dl(e,t);n!==null&&Bt(n,e,t),Ku(e,t)}}var Fa=!0;function lg(e,t,n,l){var a=J.T;J.T=null;var i=ae.p;try{ae.p=2,Ju(e,t,n,l)}finally{ae.p=i,J.T=a}}function ag(e,t,n,l){var a=J.T;J.T=null;var i=ae.p;try{ae.p=8,Ju(e,t,n,l)}finally{ae.p=i,J.T=a}}function Ju(e,t,n,l){if(Fa){var a=$u(l);if(a===null)Cu(e,t,l,cr,n),Bp(e,l);else if(sg(a,e,t,n,l))l.stopPropagation();else if(Bp(e,l),t&4&&-1<ig.indexOf(e)){for(;a!==null;){var i=Il(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=Sl(i.pendingLanes);if(r!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;r;){var f=1<<31-Rt(r);u.entanglements[1]|=f,r&=~f}wn(i),(Re&6)===0&&(Js=lt()+500,Ti(0))}}break;case 31:case 13:u=Dl(i,2),u!==null&&Bt(u,i,2),Is(),Ku(i,2)}if(i=$u(l),i===null&&Cu(e,t,l,cr,n),i===a)break;a=i}a!==null&&l.stopPropagation()}else Cu(e,t,l,null,n)}}function $u(e){return e=zr(e),Wu(e)}var cr=null;function Wu(e){if(cr=null,e=Tl(e),e!==null){var t=G(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=W(t),e!==null)return e;e=null}else if(n===31){if(e=z(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return cr=e,null}function zp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case oe:return 2;case Ae:return 8;case Qe:case Ze:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var Iu=!1,pl=null,hl=null,xl=null,Bi=new Map,Li=new Map,gl=[],ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bp(e,t){switch(e){case"focusin":case"focusout":pl=null;break;case"dragenter":case"dragleave":hl=null;break;case"mouseover":case"mouseout":xl=null;break;case"pointerover":case"pointerout":Bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Li.delete(t.pointerId)}}function Ri(e,t,n,l,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Il(t),t!==null&&Mp(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function sg(e,t,n,l,a){switch(t){case"focusin":return pl=Ri(pl,e,t,n,l,a),!0;case"dragenter":return hl=Ri(hl,e,t,n,l,a),!0;case"mouseover":return xl=Ri(xl,e,t,n,l,a),!0;case"pointerover":var i=a.pointerId;return Bi.set(i,Ri(Bi.get(i)||null,e,t,n,l,a)),!0;case"gotpointercapture":return i=a.pointerId,Li.set(i,Ri(Li.get(i)||null,e,t,n,l,a)),!0}return!1}function Lp(e){var t=Tl(e.target);if(t!==null){var n=G(t);if(n!==null){if(t=n.tag,t===13){if(t=W(n),t!==null){e.blockedOn=t,Tc(e.priority,function(){Op(n)});return}}else if(t===31){if(t=z(n),t!==null){e.blockedOn=t,Tc(e.priority,function(){Op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$u(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Or=l,n.target.dispatchEvent(l),Or=null}else return t=Il(n),t!==null&&Mp(t),e.blockedOn=n,!1;t.shift()}return!0}function Rp(e,t,n){dr(e)&&n.delete(t)}function rg(){Iu=!1,pl!==null&&dr(pl)&&(pl=null),hl!==null&&dr(hl)&&(hl=null),xl!==null&&dr(xl)&&(xl=null),Bi.forEach(Rp),Li.forEach(Rp)}function fr(e,t){e.blockedOn===t&&(e.blockedOn=null,Iu||(Iu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,rg)))}var mr=null;function Fp(e){mr!==e&&(mr=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){mr===e&&(mr=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if(Wu(l||n)===null)continue;break}var i=Il(n);i!==null&&(e.splice(t,3),t-=3,Oo(i,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function Ua(e){function t(f){return fr(f,e)}pl!==null&&fr(pl,e),hl!==null&&fr(hl,e),xl!==null&&fr(xl,e),Bi.forEach(t),Li.forEach(t);for(var n=0;n<gl.length;n++){var l=gl[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<gl.length&&(n=gl[0],n.blockedOn===null);)Lp(n),n.blockedOn===null&&gl.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],i=n[l+1],r=a[Ct]||null;if(typeof i=="function")r||Fp(n);else if(r){var u=null;if(i&&i.hasAttribute("formAction")){if(a=i,r=i[Ct]||null)u=r.formAction;else if(Wu(a)!==null)continue}else u=r.action;typeof u=="function"?n[l+1]=u:(n.splice(l,3),l-=3),Fp(n)}}}function Up(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Pu(e){this._internalRoot=e}pr.prototype.render=Pu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var n=t.current,l=Vt();Cp(n,l,e,t,null,null)},pr.prototype.unmount=Pu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cp(e.current,2,null,e,null,null),Is(),t[Wl]=null}};function pr(e){this._internalRoot=e}pr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gl.length&&t!==0&&t<gl[n].priority;n++);gl.splice(n,0,e),n===0&&Lp(e)}};var qp=m.version;if(qp!=="19.3.1")throw Error(d(527,qp,"19.3.1"));ae.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=re(t),e=e!==null?Z(e):null,e=e===null?null:e.stateNode,e};var og={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:J,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hr.isDisabled&&hr.supportsFiber)try{Nl=hr.inject(og),Et=hr}catch{}}return Ui.createRoot=function(e,t){if(!H(e))throw Error(d(299));var n=!1,l="",a=jf,i=Cf,r=Df;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Ap(e,1,!1,null,null,n,l,null,a,i,r,Up),e[Wl]=t.current,ju(e),new Pu(t)},Ui.hydrateRoot=function(e,t,n){if(!H(e))throw Error(d(299));var l=!1,a="",i=jf,r=Cf,u=Df,f=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError),n.formState!==void 0&&(f=n.formState)),t=Ap(e,1,!0,t,n??null,l,a,f,i,r,u,Up),t.context=jp(null),n=t.current,l=Vt(),l=Tr(l),a=tl(l),a.callback=null,nl(n,a,l),n=l,t.current.lanes=n,Za(t,n),wn(t),e[Wl]=t.current,ju(e),new pr(t)},Ui.version="19.3.1",Ui}var Wp;function bg(){if(Wp)return nc.exports;Wp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(m){console.error(m)}}return o(),nc.exports=yg(),nc.exports}var vg=bg();const wg=[{id:"tkinter_window",moduleId:"module_tkinter",title:"3. Первое окно: tk.Tk(), Label, Button и реакция на нажатие",icon:"AppWindow",shortDesc:"Программа перестаёт быть списком и начинает ждать событий",theory:{story:{letter:`ВХОДЯЩЕЕ СООБЩЕНИЕ
ОТПРАВИТЕЛЬ: ЗАКАЗЧИК

Задачи хранятся, счёт идёт. Молодцы.
Показал бухгалтеру. Она посмотрела на чёрный экран, где надо вводить цифры, и ушла.
Сделайте нормально. С окном.`,task:"Окно с кнопкой. Нажимаешь — что-то происходит. Больше сегодня ничего. Задачи переедут в окно позже.",quotes:[{speaker:"Макс, техлид",text:"До этого с компьютером разговаривали только текстом. Как вы два занятия подряд."},{speaker:"Ева, QA-инженер",text:"Скобки значат «вызови прямо сейчас». Кнопке нужно имя, а не результат. Я на этом ловлю всех."},{speaker:"Алёна, продюсер",text:"Вот это уже можно показывать бухгалтеру. Терминал ей показывать больше не будем."},{speaker:"Алёна, продюсер",text:"Третий день закрыт. У нас есть окно, и оно отвечает на нажатия."}]},summary:`Программа перестаёт быть списком. Раньше программа шла строго сверху вниз: спросить пользователя → посчитать результат → напечатать в терминал → конец. Дошла до последней строки и завершилась.

Теперь всё иначе: окно висит на экране и терпеливо ждёт действий человека. Код срабатывает только тогда, когда что-то произошло: нажали кнопку, закрыли окно или нажали клавишу на клавиатуре.

Одна строчка держит всё окно: window.mainloop(). Она бесконечно ждёт событий: не нажали ли кнопку, не закрыли ли окно. Это тот же цикл while, только писать его руками не нужно. Писать mainloop() нужно всегда самой последней строкой файла!

Любой виджет создаётся ровно в два шага: сначала создаём объект tk.Label(window, ...), а затем обязательно кладём его в окно через метод label.pack(). Забыли вызвать pack() — виджет создан в памяти, но на экране его не будет видно.

Параметр command кнопки Button — главная ловушка урока! Мы пишем command=check_connection БЕЗ скобок. Со скобками функция выполнится сразу же при запуске программы, а при кликах на кнопку не сработает ни разу.

Метод config меняет то, что уже нарисовано: label.config(text="...") обновляет текст существующей надписи прямо на глазах у пользователя без создания новых элементов.`,keyRule:"Имя функции для кнопки передаётся БЕЗ скобок: command=check_connection. Скобки означают немедленный вызов при старте программы!",sections:[{heading:"Главный цикл обработки событий",text:"Метод mainloop() переводит программу в режим ожидания кликов и действий пользователя. Все виджеты создаются ДО него.",codeExample:{title:"Минимальное пустое окно",code:`import tkinter as tk

window = tk.Tk()
window.title("ProTeam Labs")
window.geometry("400x250")

window.mainloop()`,explanation:"tk.Tk() создаёт окно, geometry задаёт размеры ширина x высота, а mainloop() держит окно на экране."}}],steps:[{code:`import tkinter as tk

window = tk.Tk()
window.title("ProTeam Labs")
window.geometry("400x250")

window.mainloop()`,output:"Окно Tkinter открыто и ждет событий",explanation:"Шаг 1. Пустое серое окно размером 400x250 с заголовком ProTeam Labs. mainloop() держит окно открытым."},{code:`import tkinter as tk

window = tk.Tk()
window.title("ProTeam Labs")
window.geometry("400x250")

label = tk.Label(window, text="Терминал студии", font=("Arial", 16))
label.pack(pady=20)

window.mainloop()`,output:"В окне появилась надпись «Терминал студии»",explanation:"Шаг 2. Создали надпись Label и положили её в окно методом pack(pady=20). pady=20 задаёт внешний отступ сверху и снизу."},{code:`import tkinter as tk

window = tk.Tk()
window.title("ProTeam Labs")
window.geometry("400x250")

label = tk.Label(window, text="Терминал студии", font=("Arial", 16))
label.pack(pady=20)

button = tk.Button(window, text="Проверить связь", font=("Arial", 14))
button.pack(pady=10)

window.mainloop()`,output:"Появилась кнопка «Проверить связь» (пока без команды)",explanation:"Шаг 3. Кнопка Button нажимается (вдавливается и отпускается), но пока молчит, так как у неё нет параметра command."},{code:`import tkinter as tk

window = tk.Tk()
window.title("ProTeam Labs")
window.geometry("400x250")

label = tk.Label(window, text="Терминал студии", font=("Arial", 16))
label.pack(pady=20)

def check_connection():
    print("Связь с сервером в порядке")

button = tk.Button(
    window,
    text="Проверить связь",
    font=("Arial", 14),
    command=check_connection
)
button.pack(pady=10)

window.mainloop()`,output:"При клике на кнопку в консоли печатается «Связь с сервером в порядке»",explanation:"Шаг 4. Оживили кнопку! При клике вызывается функция check_connection. Обрати внимание: в command= имя функции указано без круглых скобок."},{code:`import tkinter as tk

window = tk.Tk()
window.title("ProTeam Labs")
window.geometry("400x250")

label = tk.Label(window, text="Терминал студии", font=("Arial", 16))
label.pack(pady=20)

def check_connection():
    label.config(text="Связь установлена")

button = tk.Button(
    window,
    text="Проверить связь",
    font=("Arial", 14),
    command=check_connection
)
button.pack(pady=10)

window.mainloop()`,output:"При клике текст надписи меняется прямо в окне на «Связь установлена»",explanation:"Шаг 5. Метод label.config(text=...) меняет надпись прямо в окне! Теперь программа действительно работает в графическом интерфейсе."}],mistakes:[{wrongCode:`import tkinter as tk

window = tk.Tk()
window.mainloop()
window.geometry("400x250")`,error:"Окно мигает и сразу закрывается либо геометрия не применяется",fixedCode:`import tkinter as tk

window = tk.Tk()
window.geometry("400x250")
window.mainloop()`,explanation:"mainloop() должен быть самой последней строкой! Всё, что написано после него, выполняется только после закрытия окна."},{wrongCode:`import tkinter as tk

window = tk.Tk()
def check():
    print("Клик!")

btn = tk.Button(window, text="Клик", command=check())
btn.pack()
window.mainloop()`,error:"Клик! (вывелось сразу при старте, при нажатии на кнопку ничего не происходит)",fixedCode:`import tkinter as tk

window = tk.Tk()
def check():
    print("Клик!")

btn = tk.Button(window, text="Клик", command=check)
btn.pack()
window.mainloop()`,explanation:"Не ставь круглые скобки в command=check! Скобки вызывают функцию прямо при запуске программы."},{wrongCode:`import tkinter as tk

window = tk.Tk()
label = tk.Label(window, text="Терминал студии")
window.mainloop()`,error:"Окно пустое, надписи не видно (виджет создан, но не упакован)",fixedCode:`import tkinter as tk

window = tk.Tk()
label = tk.Label(window, text="Терминал студии")
label.pack()
window.mainloop()`,explanation:"Забыли вызывать pack()! Без него виджет остаётся невидимым в памяти."},{wrongCode:`def check():
    label.config(text="Готово")
check()
label = tk.Label(window, text="Старт")`,error:"NameError: name 'label' is not defined",fixedCode:`label = tk.Label(window, text="Старт")
def check():
    label.config(text="Готово")
button = tk.Button(window, text="Жми", command=check)`,explanation:"Виджеты создаём выше, а функции вызываем только по кнопке, когда элементы уже готовы."}],quiz:[{code:`import tkinter as tk
window = tk.Tk()
btn = tk.Button(window, text="Клик", command=print("Старт"))`,options:["Напечатает «Старт» сразу при запуске программы, а при кликах ничего не произойдёт","Будет печатать «Старт» при каждом клике по кнопке","Вызовет синтаксическую ошибку SyntaxError","Создаст кнопку с текстом «Старт»"],correct:0,explanation:"Из-за круглых скобок print('Старт') выполнится один раз в момент создания кнопки!"},{code:`import tkinter as tk
window = tk.Tk()
lbl = tk.Label(window, text="Привет")
window.mainloop()`,options:["Откроется окно с надписью «Привет»","Откроется пустое окно, надписи не будет видно","Программа завершится ошибкой PackError"],correct:1,explanation:"Забыт вызов lbl.pack(), поэтому надпись не упакована в окно и не отображается."},{code:`label = tk.Label(window, text="Старт")
# Какая команда изменит текст надписи?`,options:['label.config(text="Новый текст")','label.text = "Новый текст"','label.change("Новый текст")','label.update_text("Новый текст")'],correct:0,explanation:"В Tkinter свойства уже созданного виджета меняются через метод .config(свойство=значение)."}],cheatsheet:["window = tk.Tk() — создание главного окна приложения","window.mainloop() — главная строчка в самом конце файла, держит окно открытым","Сначала создаём виджет: lbl = tk.Label(...), затем упаковываем: lbl.pack()","command=имя_функции — для кнопки пишем имя функции БЕЗ круглых скобок",'label.config(text="...") — меняет текст существующей надписи прямо на экране']},exercise:{task:`Создай первое окно с кнопкой и меняющейся надписью:
1. Создай окно window = tk.Tk() с заголовком window.title("ProTeam Labs") и размером window.geometry("400x250")
2. Создай надпись label = tk.Label(window, text="Терминал студии", font=("Arial", 16))
3. Упакуй надпись: label.pack(pady=20)
4. Создай функцию check_connection(), которая вызывает label.config(text="Связь установлена")
5. Создай кнопку button = tk.Button(window, text="Проверить связь", font=("Arial", 14), command=check_connection) и упакуй: button.pack(pady=10)
6. Запусти window.mainloop()`,requirements:["Создать окно tk.Tk() с размером 400x250 и заголовком 'ProTeam Labs'","Создать tk.Label со стартовым текстом 'Терминал студии' и упаковать через pack()","Создать функцию check_connection, вызывающую label.config(text='Связь установлена')","Создать tk.Button с текстом 'Проверить связь' и command=check_connection","Вызвать window.mainloop() в конце"],starterCode:`import tkinter as tk

window = tk.Tk()
window.title("ProTeam Labs")
window.geometry("400x250")

# 1. Создай label с текстом "Терминал студии"

# 2. Напиши функцию check_connection()

# 3. Создай кнопку button с command=check_connection

window.mainloop()
`,hint:`label = tk.Label(window, text="Терминал студии", font=("Arial", 16))
label.pack(pady=20)

def check_connection():
    label.config(text="Связь установлена")

button = tk.Button(window, text="Проверить связь", font=("Arial", 14), command=check_connection)
button.pack(pady=10)`,solution:`import tkinter as tk

window = tk.Tk()
window.title("ProTeam Labs")
window.geometry("400x250")

label = tk.Label(window, text="Терминал студии", font=("Arial", 16))
label.pack(pady=20)

def check_connection():
    label.config(text="Связь установлена")

button = tk.Button(
    window,
    text="Проверить связь",
    font=("Arial", 14),
    command=check_connection
)
button.pack(pady=10)

window.mainloop()`,tests:[{inputs:[],expected:""}],codeCheck:o=>/tk\.Tk\s*\(/.test(o)?/tk\.Label\s*\(/.test(o)?/tk\.Button\s*\(/.test(o)?/command\s*=\s*check_connection\b/.test(o)?/\.mainloop\s*\(/.test(o)?null:{passed:!1,message:"Не забудь вызвать window.mainloop() в конце."}:{passed:!1,message:"Передай command=check_connection (без скобок!) в кнопку."}:{passed:!1,message:"Создай кнопку tk.Button."}:{passed:!1,message:"Создай надпись tk.Label."}:{passed:!1,message:"Создай главное окно window = tk.Tk()."},testCode:`
import tkinter
assert len(tkinter.WIDGETS) >= 3, "Должно быть создано окно Tk, Label и Button"
labels = [w for w in tkinter.WIDGETS if w.kind == "Label"]
buttons = [w for w in tkinter.WIDGETS if w.kind == "Button"]
assert len(labels) >= 1, "Не найден виджет Label"
assert len(buttons) >= 1, "Не найден виджет Button"
btn = buttons[0]
lbl = labels[0]
assert "command" in btn.opts and btn.opts["command"] is not None, "У кнопки нет параметра command"
btn.invoke()
assert "Связь установлена" in lbl.opts.get("text", ""), "После клика надпись должна измениться на 'Связь установлена'"
print("OK_TK_WINDOW")
`,validate:(o,m)=>m.includes("OK_TK_WINDOW")?{passed:!0,message:"Отлично! Первое графическое окно создано и успешно реагирует на клик! 🚀"}:{passed:!1,message:"Проверь, что кнопка меняет текст надписи на «Связь установлена»."}}},{id:"tkinter_guess_number",moduleId:"module_tkinter",title:"4. Угадай число: поле ввода Entry, random, цвета и счётчик попыток",icon:"HelpCircle",shortDesc:"Принимаем ввод пользователя в окне через Entry вместо input()",theory:{story:{letter:`ВХОДЯЩЕЕ СООБЩЕНИЕ
ОТПРАВИТЕЛЬ: ЗАКАЗЧИК

Окно показал. Кнопка нажимается.
А как мне туда что-нибудь ввести? В терминале я хотя бы печатал с клавиатуры. Здесь печатать некуда.
Пока не научитесь принимать ввод в окне — дальше не двинемся.`,task:"Научиться принимать ввод в окне. Тренироваться будем на игре «Угадай число» — так быстрее и веселее, чем на скучной форме.",quotes:[{speaker:"Макс, техлид",text:"Ваш random тоже считает по формуле. Просто подставляет туда текущее время — поэтому каждый раз выходит разное."},{speaker:"Алёна, продюсер",text:"Поле, кнопка и надпись. Из этих трёх штук собрана половина программ, которыми вы пользуетесь каждый день."},{speaker:"Ева, QA-инженер",text:"Цвет человек видит раньше, чем читает текст. Поэтому в нормальных программах ошибки красные, а не просто написаны словом."},{speaker:"Алёна, продюсер",text:"Четвёртый день закрыт. Ввод в окне работает — значит, можно возвращаться к задачам."}]},summary:`Что заменяет input() в графическом окне? В консольной программе мы писали answer = input('Число: '), и программа замирала в ожидании. В окне мы ставим поле entry = tk.Entry(window): человек печатает когда хочет, а программа забирает текст в момент нажатия кнопки через entry.get().

Три ключевых элемента окна: Entry (поле ввода текста), Button (момент считывания) и Label (отображение ответа).

Главное правило поля ввода: entry.get() ВСЕГДА возвращает строку (str)! Даже если пользователь ввёл число 42, get() вернёт строку '42'. Поэтому оборачивание в int() обязательно.

Цвет текста задаётся через fg='green' (зелёный) или fg='red' (красный). Можно использовать и шестнадцатеричные коды вроде fg='#38BD60'.

Случайное число генерируется функцией random.randint(1, 100) — оба конца диапазона включены.

Команда global tries объявляет глобальный счётчик, чтобы функция не создавала новую переменную на каждом клике, а очистить поле можно через entry.delete(0, 'end').`,keyRule:"Метод entry.get() всегда отдаёт строку. Для чисел обязательно используй int(entry.get())!",sections:[{heading:"Поле ввода Entry и чтение текста",text:"Виджет Entry позволяет пользователю печатать текст. Читаем его значение через entry.get(), а очищаем через entry.delete(0, 'end').",codeExample:{title:"Создание поля ввода",code:`import tkinter as tk

window = tk.Tk()
entry = tk.Entry(window, width=10)
entry.pack(pady=10)

def get_text():
    print("Введено:", entry.get())

tk.Button(window, text="Прочитать", command=get_text).pack()
window.mainloop()`,explanation:"entry.get() возвращает текущий текст из поля."}}],steps:[{code:`import tkinter as tk
import random

secret = random.randint(1, 100)

window = tk.Tk()
window.title("Угадай число")
window.geometry("420x300")

title = tk.Label(window, text="Я загадал число от 1 до 100", font=("Arial", 15))
title.pack(pady=20)

entry = tk.Entry(window, font=("Arial", 20), width=8, justify="center")
entry.pack()

result = tk.Label(window, text="", font=("Arial", 16))
result.pack(pady=20)

window.mainloop()`,output:"Окно с заголовком и полем для ввода числа",explanation:"Шаг 1. Создали поле ввода Entry и пустую надпись result, в которую позже будет выводиться подсказка."},{code:`import tkinter as tk
import random

secret = random.randint(1, 100)

window = tk.Tk()
window.title("Угадай число")
window.geometry("420x300")

title = tk.Label(window, text="Я загадал число от 1 до 100", font=("Arial", 15))
title.pack(pady=20)

entry = tk.Entry(window, font=("Arial", 20), width=8, justify="center")
entry.pack()

result = tk.Label(window, text="", font=("Arial", 16))
result.pack(pady=20)

def check():
    answer = int(entry.get())
    if answer == secret:
        result.config(text="Точно!", fg="green")
    elif answer < secret:
        result.config(text="Моё число больше", fg="red")
    else:
        result.config(text="Моё число меньше", fg="red")

button = tk.Button(window, text="Проверить", font=("Arial", 14), command=check)
button.pack()

window.mainloop()`,output:"При проверке надпись загорается зелёным или красным цветом",explanation:"Шаг 2. Функция check() читает int(entry.get()) и подсвечивает ответ цветом через fg='green' или fg='red'."},{code:`import tkinter as tk
import random

secret = random.randint(1, 100)
tries = 0

window = tk.Tk()
window.title("Угадай число")
window.geometry("420x300")

title = tk.Label(window, text="Я загадал число от 1 до 100", font=("Arial", 15))
title.pack(pady=20)

entry = tk.Entry(window, font=("Arial", 20), width=8, justify="center")
entry.pack()

result = tk.Label(window, text="", font=("Arial", 16))
result.pack(pady=20)

def check():
    global tries
    tries = tries + 1
    answer = int(entry.get())
    if answer == secret:
        result.config(text="Угадал за " + str(tries) + " попыток!", fg="green")
    elif answer < secret:
        result.config(text="Моё число больше. Попытка " + str(tries), fg="red")
    else:
        result.config(text="Моё число меньше. Попытка " + str(tries), fg="red")

def restart():
    global secret, tries
    secret = random.randint(1, 100)
    tries = 0
    result.config(text="Загадал новое число", fg="black")
    entry.delete(0, "end")

button = tk.Button(window, text="Проверить", font=("Arial", 14), command=check)
button.pack()

restart_btn = tk.Button(window, text="Заново", font=("Arial", 12), command=restart)
restart_btn.pack(pady=10)

window.mainloop()`,output:"Полная игра со счётчиком попыток и перезапуском",explanation:"Шаги 3–4. Добавлен счётчик tries через global и кнопка «Заново», очищающая поле через entry.delete(0, 'end')."}],mistakes:[{wrongCode:`def check():
    tries = tries + 1
    ans = int(entry.get())`,error:"UnboundLocalError: local variable 'tries' referenced before assignment",fixedCode:`def check():
    global tries
    tries = tries + 1
    ans = int(entry.get())`,explanation:"Чтобы изменять глобальную переменную счётчика внутри функции, обязательно укажи global tries."},{wrongCode:'result.config(text="Точно!", color="green")',error:"TclError: unknown option '-color'",fixedCode:'result.config(text="Точно!", fg="green")',explanation:"В Tkinter цвет текста называется fg (foreground), а не color."},{wrongCode:`def restart():
    global tries
    secret = random.randint(1, 100)
    tries = 0`,error:"Число не меняется после «Заново» (secret изменился только локально)",fixedCode:`def restart():
    global secret, tries
    secret = random.randint(1, 100)
    tries = 0`,explanation:"Если не объявить global secret, новое число останется локальным и загадка не обновится."}],quiz:[{code:`val = entry.get()
# Пользователь напечатал 50. Какой тип данных у val?`,options:["str (строка '50')","int (число 50)","float (число 50.0)","tuple (кортеж ('50',))"],correct:0,explanation:"Поле ввода Entry ВСЕГДА возвращает строку, даже если там напечатаны одни цифры."},{code:`tries = 0
def click():
    # Какая строка нужна здесь для увеличения счетчика?
    tries = tries + 1`,options:["global tries","local tries","public tries","static tries"],correct:0,explanation:"Ключевое слово global сообщает Python, что переменная объявлена снаружи функции."},{code:"# Как полностью очистить поле ввода entry от текста?",options:['entry.delete(0, "end")',"entry.clear()","entry.clean()","entry.reset()"],correct:0,explanation:"Метод delete(0, 'end') удаляет символы от нулевого индекса до конца строки."}],cheatsheet:["entry = tk.Entry(window) — создание поля ввода","entry.get() — забрать строку из поля ввода","int(entry.get()) — перевод введённого текста в целое число","entry.delete(0, 'end') — полная очистка поля ввода","fg='green' / fg='red' — цвет текста надписи","global my_var — доступ к изменению глобальной переменной"]},exercise:{task:`Собери игру «Угадай число» с проверкой ввода:
1. Создай secret = random.randint(1, 100) и tries = 0
2. Создай окно window = tk.Tk() с заголовком 'Угадай число'
3. Создай поле entry = tk.Entry(window, width=8) и упакуй
4. Создай надпись result = tk.Label(window, text='') и упакуй
5. Напиши функцию check():
   - global tries; tries = tries + 1
   - answer = int(entry.get())
   - если answer == secret: result.config(text='Угадал за ' + str(tries) + ' попыток!', fg='green')
   - если answer < secret: result.config(text='Моё число больше', fg='red')
   - если answer > secret: result.config(text='Моё число меньше', fg='red')
6. Создай кнопку tk.Button(window, text='Проверить', command=check) и запусти window.mainloop()`,requirements:["Использовать модуль random для secret","Создать виджеты Entry, Button и Label","Функция check должна считывать int(entry.get()) и красить ответ в green/red","Учитывать счётчик попыток через global tries"],starterCode:`import tkinter as tk
import random

secret = random.randint(1, 100)
tries = 0

window = tk.Tk()
window.title("Угадай число")
window.geometry("420x300")

title = tk.Label(window, text="Я загадал число от 1 до 100", font=("Arial", 15))
title.pack(pady=15)

entry = tk.Entry(window, font=("Arial", 18), width=8, justify="center")
entry.pack()

result = tk.Label(window, text="", font=("Arial", 15))
result.pack(pady=15)

# Напиши функцию check() и создай кнопку button

window.mainloop()
`,hint:`def check():
    global tries
    tries += 1
    ans = int(entry.get())
    if ans == secret:
        result.config(text='Угадал!', fg='green')
    elif ans < secret:
        result.config(text='Моё число больше', fg='red')
    else:
        result.config(text='Моё число меньше', fg='red')

button = tk.Button(window, text='Проверить', command=check)
button.pack()`,solution:`import tkinter as tk
import random

secret = random.randint(1, 100)
tries = 0

window = tk.Tk()
window.title("Угадай число")
window.geometry("420x300")

title = tk.Label(window, text="Я загадал число от 1 до 100", font=("Arial", 15))
title.pack(pady=15)

entry = tk.Entry(window, font=("Arial", 18), width=8, justify="center")
entry.pack()

result = tk.Label(window, text="", font=("Arial", 15))
result.pack(pady=15)

def check():
    global tries
    tries = tries + 1
    answer = int(entry.get())
    if answer == secret:
        result.config(text="Угадал за " + str(tries) + " попыток!", fg="green")
    elif answer < secret:
        result.config(text="Моё число больше. Попытка " + str(tries), fg="red")
    else:
        result.config(text="Моё число меньше. Попытка " + str(tries), fg="red")

button = tk.Button(window, text="Проверить", font=("Arial", 14), command=check)
button.pack()

window.mainloop()`,tests:[{inputs:[],expected:""}],codeCheck:o=>/tk\.Entry\s*\(/.test(o)?/entry\.get\s*\(/.test(o)?/int\s*\(/.test(o)?/global\s+tries\b/.test(o)?null:{passed:!1,message:"Не забудь global tries внутри функции check."}:{passed:!1,message:"Преобразуй строку в число через int()."}:{passed:!1,message:"Используй entry.get() для считывания ответа."}:{passed:!1,message:"Создай поле ввода tk.Entry."},testCode:`
import tkinter
entries = [w for w in tkinter.WIDGETS if w.kind == "Entry"]
buttons = [w for w in tkinter.WIDGETS if w.kind == "Button"]
labels = [w for w in tkinter.WIDGETS if w.kind == "Label"]
assert len(entries) >= 1, "Поле Entry не найдено"
assert len(buttons) >= 1, "Кнопка Button не найдена"
assert len(labels) >= 2, "Должны быть надписи title и result"
entry_w = entries[0]
btn_w = buttons[0]
entry_w.text = "1"
btn_w.invoke()
print("OK_GUESS_GAME")
`,validate:(o,m)=>m.includes("OK_GUESS_GAME")?{passed:!0,message:"Отлично! Игра «Угадай число» с полем ввода и кнопкой работает! 🎯"}:{passed:!1,message:"Проверь работу функции check и считывание числа из entry."}}},{id:"tkinter_currency_converter",moduleId:"module_tkinter",title:"5. Конвертер валют: сетка grid(), float, messagebox и защита от ошибок",icon:"Layout",shortDesc:"Табличная верстка grid(), два поля ввода и всплывающие окна",theory:{story:{letter:`ВХОДЯЩЕЕ СООБЩЕНИЕ
ОТПРАВИТЕЛЬ: ЗАКАЗЧИК

Игру видел. Поиграл. Угадал с шести раз.
Теперь по работе: мы покупаем ассеты за доллары, а считаем всё в рублях. Каждый раз лезу в поисковик.
Сделайте конвертер. И чтобы не падал, когда секретарь введёт туда что попало.`,task:"Два поля, две кнопки, аккуратный вывод. И защита от любого ввода — программа не должна падать вообще никогда.",quotes:[{speaker:"Макс, техлид",text:"Мы сегодня округлим до двух знаков и сделаем вид, что всё хорошо. Как половина программ на свете."},{speaker:"Ева, QA-инженер",text:"Смешаете grid и pack в одном окне — оно откроется пустым. Ни ошибки, ни подсказки. Проверено на всех."},{speaker:"Ева, QA-инженер",text:"Не всякое окно означает отказ. После showinfo программа считает дальше — это предупреждение, а не стоп."},{speaker:"Алёна, продюсер",text:"Пятый день закрыт. Это первая вещь за модуль, которой может пользоваться не программист."}]},summary:`Менеджер pack() кладёт элементы стопкой друг под другом по центру. В нём трудно поставить подпись и поле ввода аккуратно в одну строчку. Для этого есть менеджер grid() — он расставляет элементы по табличной сетке строк (row) и столбцов (column), отсчёт с нуля!

Строжайшее правило: никогда не смешивайте grid() и pack() в одном окне! Окно просто откроется абсолютно пустым без каких-либо ошибок.

Параметры grid: row и column задают ячейку, columnspan=2 растягивает элемент на два столбца, а sticky='e' (East — восток) прижимает подпись к правому краю клетки.

Для денег используем float, а не int, так как суммы бывают дробными с копейками. Форматирование f'{dollars:.2f} $' красиво оставляет ровно две цифры после точки.

Три вида всплывающих окон из модуля messagebox:
- showerror('Ошибка', ...) — посчитать невозможно (ввели буквы вместо чисел)
- showwarning('Так нельзя', ...) — отрицательная сумма или нулевой курс
- showinfo('Проверьте', ...) — сумма больше миллиона, предупреждаем, но считаем дальше.`,keyRule:"Никогда не смешивай pack() и grid() внутри одного окна. Для сложных и аккуратных форм используй только grid().",sections:[{heading:"Табличная сетка grid()",text:"grid(row=номер_строки, column=номер_столбца) задает точные координаты ячейки в таблице. Нумерация начинается с нуля.",codeExample:{title:"Пример сетки grid",code:`import tkinter as tk

window = tk.Tk()
tk.Label(window, text="Логин:").grid(row=0, column=0, sticky="e", padx=5, pady=5)
tk.Entry(window).grid(row=0, column=1, padx=5, pady=5)
window.mainloop()`,explanation:"sticky='e' прижимает надпись вправо вплотную к полю ввода."}}],steps:[{code:`import tkinter as tk

window = tk.Tk()
window.title("Конвертер валют")
window.geometry("480x340")

title = tk.Label(window, text="Конвертер ProTeam Labs", font=("Arial", 17))
title.grid(row=0, column=0, columnspan=2, pady=20)

amount_label = tk.Label(window, text="Сумма:", font=("Arial", 13))
amount_label.grid(row=1, column=0, padx=10, pady=8, sticky="e")

amount_entry = tk.Entry(window, font=("Arial", 14), width=12)
amount_entry.grid(row=1, column=1, padx=10, pady=8)

rate_label = tk.Label(window, text="Курс доллара:", font=("Arial", 13))
rate_label.grid(row=2, column=0, padx=10, pady=8, sticky="e")

rate_entry = tk.Entry(window, font=("Arial", 14), width=12)
rate_entry.grid(row=2, column=1, padx=10, pady=8)

result = tk.Label(window, text="", font=("Arial", 16))
result.grid(row=4, column=0, columnspan=2, pady=20)

window.mainloop()`,output:"Табличная сетка с двумя полями и выровненными подписями",explanation:"Шаг 1. Сетка grid(): подписи слева прижаты через sticky='e', поля ввода справа в column=1."},{code:`import tkinter as tk

window = tk.Tk()
window.title("Конвертер валют")
window.geometry("480x340")

title = tk.Label(window, text="Конвертер ProTeam Labs", font=("Arial", 17))
title.grid(row=0, column=0, columnspan=2, pady=20)

amount_label = tk.Label(window, text="Сумма:", font=("Arial", 13))
amount_label.grid(row=1, column=0, padx=10, pady=8, sticky="e")

amount_entry = tk.Entry(window, font=("Arial", 14), width=12)
amount_entry.grid(row=1, column=1, padx=10, pady=8)

rate_label = tk.Label(window, text="Курс доллара:", font=("Arial", 13))
rate_label.grid(row=2, column=0, padx=10, pady=8, sticky="e")

rate_entry = tk.Entry(window, font=("Arial", 14), width=12)
rate_entry.grid(row=2, column=1, padx=10, pady=8)

result = tk.Label(window, text="", font=("Arial", 16))
result.grid(row=4, column=0, columnspan=2, pady=20)

def to_dollars():
    amount = float(amount_entry.get())
    rate = float(rate_entry.get())
    dollars = amount / rate
    result.config(text=f"{dollars:.2f} $", fg="black")

def to_rubles():
    amount = float(amount_entry.get())
    rate = float(rate_entry.get())
    rubles = amount * rate
    result.config(text=f"{rubles:.2f} руб", fg="black")

button_usd = tk.Button(window, text="В доллары", font=("Arial", 13), command=to_dollars)
button_usd.grid(row=3, column=0, padx=10, pady=10)

button_rub = tk.Button(window, text="В рубли", font=("Arial", 13), command=to_rubles)
button_rub.grid(row=3, column=1, padx=10, pady=10)

window.mainloop()`,output:"Две кнопки в одной строке row=3 считают доллары и рубли",explanation:"Шаги 2–3. Кнопки делят или умножают сумму на курс. Число форматируется через f'{dollars:.2f} $'."},{code:`import tkinter as tk
from tkinter import messagebox

window = tk.Tk()
window.title("Конвертер валют")
window.geometry("480x340")

title = tk.Label(window, text="Конвертер ProTeam Labs", font=("Arial", 17))
title.grid(row=0, column=0, columnspan=2, pady=20)

amount_label = tk.Label(window, text="Сумма:", font=("Arial", 13))
amount_label.grid(row=1, column=0, padx=10, pady=8, sticky="e")

amount_entry = tk.Entry(window, font=("Arial", 14), width=12)
amount_entry.grid(row=1, column=1, padx=10, pady=8)

rate_label = tk.Label(window, text="Курс доллара:", font=("Arial", 13))
rate_label.grid(row=2, column=0, padx=10, pady=8, sticky="e")

rate_entry = tk.Entry(window, font=("Arial", 14), width=12)
rate_entry.grid(row=2, column=1, padx=10, pady=8)

result = tk.Label(window, text="", font=("Arial", 16))
result.grid(row=4, column=0, columnspan=2, pady=20)

def get_values():
    try:
        amount = float(amount_entry.get())
        rate = float(rate_entry.get())
    except ValueError:
        messagebox.showerror("Ошибка", "Введите числа, а не текст")
        return None, None
    if amount < 0:
        messagebox.showwarning("Так нельзя", "Сумма не может быть меньше нуля")
        return None, None
    if rate <= 0:
        messagebox.showwarning("Так нельзя", "Курс должен быть больше нуля")
        return None, None
    if amount > 1000000:
        messagebox.showinfo("Проверьте", "Сумма подозрительно большая. Не лишний ли ноль?")
    return amount, rate

def to_dollars():
    amount, rate = get_values()
    if amount is None:
        return
    dollars = amount / rate
    result.config(text=f"{dollars:.2f} $", fg="green")

def to_rubles():
    amount, rate = get_values()
    if amount is None:
        return
    rubles = amount * rate
    result.config(text=f"{rubles:.2f} руб", fg="green")

button_usd = tk.Button(window, text="В доллары", font=("Arial", 13), command=to_dollars)
button_usd.grid(row=3, column=0, padx=10, pady=10)

button_rub = tk.Button(window, text="В рубли", font=("Arial", 13), command=to_rubles)
button_rub.grid(row=3, column=1, padx=10, pady=10)

window.mainloop()`,output:"Полный файл конвертера валют с тремя видами messagebox",explanation:"Шаг 4. Добавлена полная защита: от текста (showerror), от отрицательных чисел и деления на 0 (showwarning)."}],mistakes:[{wrongCode:`title.grid(row=0, column=0)
amount_entry.pack()`,error:"Окно открылось пустым без элементов (смешение grid и pack)",fixedCode:`title.grid(row=0, column=0)
amount_entry.grid(row=1, column=0)`,explanation:"В одном окне можно использовать только один менеджер геометрии: либо все pack(), либо все grid()!"},{wrongCode:"amount_label.grid(row=1, column=0, padx=10, pady=8)",error:"Подписи болтаются по центру и не выровнены по правому краю",fixedCode:'amount_label.grid(row=1, column=0, padx=10, pady=8, sticky="e")',explanation:"sticky='e' прижимает подпись к правому краю ячейки вплотную к полю ввода."},{wrongCode:`dollars = amount / rate
# если rate == 0`,error:"ZeroDivisionError: float division by zero",fixedCode:`if rate <= 0:
    messagebox.showwarning("Так нельзя", "Курс должен быть больше нуля")
    return`,explanation:"Проверяй rate <= 0 ДО деления, чтобы программа не падала с делением на ноль."}],quiz:[{code:`btn = tk.Button(window, text="OK")
# Какая строка растянет кнопку на 2 колонки сетки?`,options:["btn.grid(row=3, column=0, columnspan=2)","btn.grid(row=3, column=0, span=2)","btn.grid(row=3, column=0, width=2)"],correct:0,explanation:"Параметр columnspan задает количество столбцов сетки, которые займет виджет."},{code:`from tkinter import messagebox
# Какое окно предназначено для предупреждений (желтый треугольник)?`,options:['messagebox.showwarning("Заголовок", "Текст")','messagebox.showerror("Заголовок", "Текст")','messagebox.showinfo("Заголовок", "Текст")'],correct:0,explanation:"showwarning показывает предупреждение, showerror — ошибку, showinfo — информационное окно."},{code:`val = 12.3456
# Как вывести число ровно с 2 знаками после запятой?`,options:['f"{val:.2f}"','f"{val:2}"','f"{round(val)}"'],correct:0,explanation:":.2f внутри фигурных скобок f-строки форматирует число с 2 знаками после точки."}],cheatsheet:["widget.grid(row=0, column=0) — табличное размещение","columnspan=2 — растягивание элемента на 2 колонки","sticky='e' — прижать к правому краю (East), sticky='w' — к левому (West)",'f"{val:.2f}" — вывод дробного числа с 2 знаками после запятой',"from tkinter import messagebox — модуль всплывающих диалоговых окон"]},exercise:{task:`Собери конвертер валют на сетке grid():
1. Создай окно window = tk.Tk() с размером 480x340
2. Создай amount_entry на grid(row=1, column=1) и rate_entry на grid(row=2, column=1)
3. Создай result = tk.Label(window, text='') на grid(row=4, column=0, columnspan=2)
4. Создай кнопку button_usd на grid(row=3, column=0), считающую доллары: dollars = float(amount) / float(rate); result.config(text=f'{dollars:.2f} $')
5. Создай кнопку button_rub на grid(row=3, column=1), считающую рубли: rubles = float(amount) * float(rate); result.config(text=f'{rubles:.2f} руб')
6. Запусти window.mainloop()`,requirements:["Использовать grid() для всех элементов (никакого pack!)","Создать два поля Entry: для суммы и для курса","Кнопки на row=3 считают доллары (деление) и рубли (умножение)","Форматировать вывод через :.2f"],starterCode:`import tkinter as tk
from tkinter import messagebox

window = tk.Tk()
window.title("Конвертер валют")
window.geometry("480x340")

title = tk.Label(window, text="Конвертер ProTeam Labs", font=("Arial", 16))
title.grid(row=0, column=0, columnspan=2, pady=15)

amount_label = tk.Label(window, text="Сумма:", font=("Arial", 12))
amount_label.grid(row=1, column=0, padx=10, pady=5, sticky="e")
amount_entry = tk.Entry(window, font=("Arial", 13), width=12)
amount_entry.grid(row=1, column=1, padx=10, pady=5)

rate_label = tk.Label(window, text="Курс доллара:", font=("Arial", 12))
rate_label.grid(row=2, column=0, padx=10, pady=5, sticky="e")
rate_entry = tk.Entry(window, font=("Arial", 13), width=12)
rate_entry.grid(row=2, column=1, padx=10, pady=5)

result = tk.Label(window, text="", font=("Arial", 15))
result.grid(row=4, column=0, columnspan=2, pady=15)

# Добавь функции to_dollars, to_rubles и кнопки button_usd, button_rub

window.mainloop()
`,hint:`def to_dollars():
    amt = float(amount_entry.get())
    rt = float(rate_entry.get())
    res = amt / rt
    result.config(text=f'{res:.2f} $')

button_usd = tk.Button(window, text='В доллары', command=to_dollars)
button_usd.grid(row=3, column=0)`,solution:`import tkinter as tk
from tkinter import messagebox

window = tk.Tk()
window.title("Конвертер валют")
window.geometry("480x340")

title = tk.Label(window, text="Конвертер ProTeam Labs", font=("Arial", 16))
title.grid(row=0, column=0, columnspan=2, pady=15)

amount_label = tk.Label(window, text="Сумма:", font=("Arial", 12))
amount_label.grid(row=1, column=0, padx=10, pady=5, sticky="e")
amount_entry = tk.Entry(window, font=("Arial", 13), width=12)
amount_entry.grid(row=1, column=1, padx=10, pady=5)

rate_label = tk.Label(window, text="Курс доллара:", font=("Arial", 12))
rate_label.grid(row=2, column=0, padx=10, pady=5, sticky="e")
rate_entry = tk.Entry(window, font=("Arial", 13), width=12)
rate_entry.grid(row=2, column=1, padx=10, pady=5)

result = tk.Label(window, text="", font=("Arial", 15))
result.grid(row=4, column=0, columnspan=2, pady=15)

def to_dollars():
    amount = float(amount_entry.get())
    rate = float(rate_entry.get())
    dollars = amount / rate
    result.config(text=f"{dollars:.2f} $")

def to_rubles():
    amount = float(amount_entry.get())
    rate = float(rate_entry.get())
    rubles = amount * rate
    result.config(text=f"{rubles:.2f} руб")

button_usd = tk.Button(window, text="В доллары", command=to_dollars)
button_usd.grid(row=3, column=0, padx=10, pady=10)

button_rub = tk.Button(window, text="В рубли", command=to_rubles)
button_rub.grid(row=3, column=1, padx=10, pady=10)

window.mainloop()`,tests:[{inputs:[],expected:""}],codeCheck:o=>o.includes(".pack(")?{passed:!1,message:"Не используй pack()! В этом уроке верстка только на grid()."}:o.includes(".grid(")?/float\s*\(/.test(o)?null:{passed:!1,message:"Используй float() для считывания сумм и курса валют."}:{passed:!1,message:"Используй метод .grid() для размещения виджетов."},testCode:`
import tkinter
entries = [w for w in tkinter.WIDGETS if w.kind == "Entry"]
buttons = [w for w in tkinter.WIDGETS if w.kind == "Button"]
labels = [w for w in tkinter.WIDGETS if w.kind == "Label"]
assert len(entries) >= 2, "Должно быть 2 поля ввода Entry (сумма и курс)"
assert len(buttons) >= 2, "Должно быть 2 кнопки (в доллары и в рубли)"
amount_w, rate_w = entries[0], entries[1]
amount_w.text = "1000"
rate_w.text = "80"
btn_usd = buttons[0]
btn_usd.invoke()
print("OK_CONVERTER")
`,validate:(o,m)=>m.includes("OK_CONVERTER")?{passed:!0,message:"Превосходно! Конвертер валют на табличной сетке grid() работает! 💰"}:{passed:!1,message:"Проверь работу функций перевода в доллары и рубли."}}},{id:"tkinter_todo_list",moduleId:"module_tkinter",title:"6. Сдача проекта (ToDo-лист): виджет Listbox, отметка «сделано» и удаление",icon:"CheckCircle2",shortDesc:"Сборка всего модуля в одно готовое приложение с Listbox",theory:{story:{letter:`ВХОДЯЩЕЕ СООБЩЕНИЕ
ОТПРАВИТЕЛЬ: ЗАКАЗЧИК

Напоминаю первое письмо: мне нужен был трекер задач. Получил терминал, игру про угадайку и конвертер.
Всё хорошее. Но срок — сегодня.
Жду трекер. С окном. Сегодня принимаю.`,task:"Собрать всё, чему научились за модуль, в одно приложение. Список, добавление, отметка «сделано», удаление, счётчик.",quotes:[{speaker:"Макс, техлид",text:"Можно было бы менять строки по одной. Но тогда пришлось бы помнить, какая где. Проще стереть и нарисовать заново."},{speaker:"Алёна, продюсер",text:"Шесть рабочих дней назад вы не знали, что такое рабочая папка. Посмотрите на список."},{speaker:"Заказчик",text:"Принято. Вопросов нет. Следующий заказ пришлю на неделе."}]},summary:`Что такое Listbox: готовый список со скроллом и выделением строки мышью. Собирать такое вручную из Label заняло бы слишком много сил.

Три главные команды Listbox:
1. listbox.delete(0, 'end') — стереть все строки
2. listbox.insert('end', text) — добавить строку в конец
3. listbox.itemconfig(i, fg='gray') — покрасить строку i в серый цвет (ТОЛЬКО ПОСЛЕ того, как вставили!)

Главный принцип современных интерфейсов: стереть и нарисовать заново! Функция refresh() очищает весь listbox, пробегает по списку tasks, заново рисует задачи и красит выполненные.

listbox.curselection() возвращает кортеж выбранных индексов. Если ничего не выбрано, кортеж пуст. Обязательна проверка: if len(selected) == 0: return.

tasks[index]['done'] = not tasks[index]['done'] — оператор not легко переключает True на False и обратно.`,keyRule:"Данные отдельно, экран отдельно! Удалять и менять нужно в списке tasks, а listbox просто перерисовывать через refresh().",sections:[{heading:"Виджет списка Listbox",text:"Listbox хранит строки. Мы считываем выделенный индекс через listbox.curselection()[0], вставляем через listbox.insert('end', text) и красим через listbox.itemconfig(i, fg='gray').",codeExample:{title:"Работа со списком Listbox",code:`import tkinter as tk

window = tk.Tk()
lbox = tk.Listbox(window)
lbox.pack()
lbox.insert("end", "Первое дело")
lbox.insert("end", "Второе дело")
lbox.itemconfig(0, fg="gray")
window.mainloop()`,explanation:"itemconfig(0, fg='gray') окрашивает первую задачу в серый цвет."}}],steps:[{code:`import tkinter as tk
from tkinter import messagebox

tasks = []

window = tk.Tk()
window.title("Задачи ProTeam Labs")
window.geometry("520x480")

title = tk.Label(window, text="Задачи студии", font=("Arial", 18))
title.grid(row=0, column=0, columnspan=2, pady=15)

entry = tk.Entry(window, font=("Arial", 13), width=28)
entry.grid(row=1, column=0, padx=10, pady=8)

add_button = tk.Button(window, text="Добавить", font=("Arial", 12))
add_button.grid(row=1, column=1, padx=10, pady=8)

listbox = tk.Listbox(window, font=("Arial", 13), width=45, height=12)
listbox.grid(row=2, column=0, columnspan=2, padx=10, pady=10)

counter = tk.Label(window, text="Сделано 0 из 0", font=("Arial", 12))
counter.grid(row=4, column=0, columnspan=2, pady=10)

window.mainloop()`,output:"Окно трекера с полем, пустым списком Listbox и счетчиком",explanation:"Шаг 1. Каркас ToDo-листа на сетке grid: поле ввода, список Listbox и надпись счётчика."},{code:`import tkinter as tk
from tkinter import messagebox

tasks = []

window = tk.Tk()
window.title("Задачи ProTeam Labs")
window.geometry("520x480")

title = tk.Label(window, text="Задачи студии", font=("Arial", 18))
title.grid(row=0, column=0, columnspan=2, pady=15)

entry = tk.Entry(window, font=("Arial", 13), width=28)
entry.grid(row=1, column=0, padx=10, pady=8)

listbox = tk.Listbox(window, font=("Arial", 13), width=45, height=12)
listbox.grid(row=2, column=0, columnspan=2, padx=10, pady=10)

counter = tk.Label(window, text="Сделано 0 из 0", font=("Arial", 12))
counter.grid(row=4, column=0, columnspan=2, pady=10)

def refresh():
    listbox.delete(0, "end")
    done_count = 0
    for i in range(len(tasks)):
        listbox.insert("end", tasks[i]["name"])
        if tasks[i]["done"]:
            listbox.itemconfig(i, fg="gray")
            done_count = done_count + 1
    counter.config(text="Сделано " + str(done_count) + " из " + str(len(tasks)))

def add_task():
    name = entry.get()
    if name == "":
        messagebox.showwarning("Пусто", "Сначала напишите задачу")
        return
    tasks.append({"name": name, "done": False})
    entry.delete(0, "end")
    refresh()

add_button = tk.Button(window, text="Добавить", font=("Arial", 12), command=add_task)
add_button.grid(row=1, column=1, padx=10, pady=8)

window.mainloop()`,output:"Задачи добавляются в Listbox и поле очищается",explanation:"Шаг 2. Функция refresh() перерисовывает весь список заново, а add_task() кладёт словарь в tasks."},{code:`import tkinter as tk
from tkinter import messagebox

tasks = []

window = tk.Tk()
window.title("Задачи ProTeam Labs")
window.geometry("520x480")

title = tk.Label(window, text="Задачи студии", font=("Arial", 18))
title.grid(row=0, column=0, columnspan=2, pady=15)

entry = tk.Entry(window, font=("Arial", 13), width=28)
entry.grid(row=1, column=0, padx=10, pady=8)

listbox = tk.Listbox(window, font=("Arial", 13), width=45, height=12)
listbox.grid(row=2, column=0, columnspan=2, padx=10, pady=10)

counter = tk.Label(window, text="Сделано 0 из 0", font=("Arial", 12))
counter.grid(row=4, column=0, columnspan=2, pady=10)

def refresh():
    listbox.delete(0, "end")
    done_count = 0
    for i in range(len(tasks)):
        listbox.insert("end", tasks[i]["name"])
        if tasks[i]["done"]:
            listbox.itemconfig(i, fg="gray")
            done_count = done_count + 1
    counter.config(text="Сделано " + str(done_count) + " из " + str(len(tasks)))

def add_task():
    name = entry.get()
    if name == "":
        messagebox.showwarning("Пусто", "Сначала напишите задачу")
        return
    tasks.append({"name": name, "done": False})
    entry.delete(0, "end")
    refresh()

def toggle_task():
    selected = listbox.curselection()
    if len(selected) == 0:
        messagebox.showwarning("Не выбрано", "Сначала выберите задачу в списке")
        return
    index = selected[0]
    tasks[index]["done"] = not tasks[index]["done"]
    refresh()

def delete_task():
    selected = listbox.curselection()
    if len(selected) == 0:
        messagebox.showwarning("Не выбрано", "Сначала выберите задачу в списке")
        return
    index = selected[0]
    tasks.pop(index)
    refresh()

add_button = tk.Button(window, text="Добавить", font=("Arial", 12), command=add_task)
add_button.grid(row=1, column=1, padx=10, pady=8)

done_button = tk.Button(window, text="Сделано", font=("Arial", 12), command=toggle_task)
done_button.grid(row=3, column=0, padx=10, pady=5)

delete_button = tk.Button(window, text="Удалить", font=("Arial", 12), command=delete_task)
delete_button.grid(row=3, column=1, padx=10, pady=5)

window.mainloop()`,output:"Готовое приложение: добавление, отметка «Сделано» и удаление",explanation:"Шаги 3–4. Полный проект ToDo-листа! Кнопка «Сделано» красит в серый, а «Удалить» убирает задачу из списка."}],mistakes:[{wrongCode:`def refresh():
    for i in range(len(tasks)):
        listbox.insert("end", tasks[i]["name"])`,error:"Задачи задваиваются при каждом добавлении",fixedCode:`def refresh():
    listbox.delete(0, "end")
    for i in range(len(tasks)):
        listbox.insert("end", tasks[i]["name"])`,explanation:"Всегда вызывай listbox.delete(0, 'end') первой строкой refresh(), чтобы стереть старый список перед отрисовкой."},{wrongCode:`def toggle_task():
    index = listbox.curselection()[0]`,error:"IndexError: tuple index out of range (когда ничего не выбрано мышью)",fixedCode:`def toggle_task():
    selected = listbox.curselection()
    if len(selected) == 0:
        return
    index = selected[0]`,explanation:"Если пользователь ничего не выделил, curselection() возвращает пустой кортеж (). Всегда проверяй len(selected) == 0."},{wrongCode:`listbox.itemconfig(i, fg="gray")
listbox.insert("end", tasks[i]["name"])`,error:"Серый цвет строки не появляется (пытаемся покрасить строку, которой ещё нет)",fixedCode:`listbox.insert("end", tasks[i]["name"])
listbox.itemconfig(i, fg="gray")`,explanation:"Красить строку можно только ПОСЛЕ того, как она вставлена в Listbox."}],quiz:[{code:`selected = listbox.curselection()
# В списке выбрана вторая строка (индекс 1). Что содержит selected?`,options:["Кортеж (1,)","Число 1","Строку с текстом задачи","Список ['1']"],correct:0,explanation:"curselection() всегда возвращает кортеж индексов, поэтому номер строки берётся как selected[0]."},{code:"# Как перевернуть булево значение задачи True/False в одну строчку?",options:['task["done"] = not task["done"]','task["done"] = reverse(task["done"])','task["done"] = !task["done"]'],correct:0,explanation:"Оператор not в Python инвертирует логическое значение: not False даёт True, а not True даёт False."},{code:"# Почему удалять задачу нужно из списка tasks, а не только из listbox?",options:["tasks — это реальные данные, а listbox просто перерисовывается из них","Из listbox нельзя удалять строки","Иначе программа упадёт с ошибкой ListboxError"],correct:0,explanation:"Главный принцип архитектуры: данные отдельно, экран отдельно. При следующем вызове refresh() данные отрисуются заново."}],cheatsheet:["listbox = tk.Listbox(window) — создание списка с выделением","listbox.delete(0, 'end') — очистка всех строк списка","listbox.insert('end', text) — добавление строки в конец","listbox.itemconfig(i, fg='gray') — покраска строки i","listbox.curselection() — кортеж индексов выделенных строк"]},exercise:{task:`Собери ToDo-лист студии ProTeam Labs:
1. Создай tasks = []
2. Создай окно window = tk.Tk() с размером 520x480
3. Создай поле entry на grid(row=1, column=0) и кнопку add_button на grid(row=1, column=1)
4. Создай listbox = tk.Listbox(window, width=45, height=12) на grid(row=2, column=0, columnspan=2)
5. Создай counter = tk.Label(window, text='Сделано 0 из 0') на grid(row=4, column=0, columnspan=2)
6. Напиши refresh():
   - listbox.delete(0, 'end')
   - в цикле по tasks вставляй listbox.insert('end', tasks[i]['name'])
   - если tasks[i]['done'], то listbox.itemconfig(i, fg='gray') и увеличивай done_count
   - обновляй counter.config(text=f'Сделано {done_count} из {len(tasks)}')
7. Напиши add_task(): tasks.append({'name': entry.get(), 'done': False}); entry.delete(0, 'end'); refresh()
8. Добавь кнопки 'Сделано' (toggle_task) и 'Удалить' (delete_task) на row=3!`,requirements:["Создать список tasks и виджет tk.Listbox","Реализовать refresh() с очисткой listbox.delete(0, 'end') и окраской выполненных в 'gray'","Реализовать добавление add_task, переключение toggle_task и удаление delete_task","Обновлять текст счетчика counter"],starterCode:`import tkinter as tk
from tkinter import messagebox

tasks = []

window = tk.Tk()
window.title("Задачи ProTeam Labs")
window.geometry("520x480")

title = tk.Label(window, text="Задачи студии", font=("Arial", 16))
title.grid(row=0, column=0, columnspan=2, pady=10)

entry = tk.Entry(window, font=("Arial", 13), width=28)
entry.grid(row=1, column=0, padx=10, pady=5)

listbox = tk.Listbox(window, font=("Arial", 13), width=45, height=10)
listbox.grid(row=2, column=0, columnspan=2, padx=10, pady=10)

counter = tk.Label(window, text="Сделано 0 из 0", font=("Arial", 12))
counter.grid(row=4, column=0, columnspan=2, pady=5)

# Реализуй refresh(), add_task(), toggle_task(), delete_task() и кнопки

window.mainloop()
`,hint:`def add_task():
    name = entry.get()
    if name:
        tasks.append({'name': name, 'done': False})
        entry.delete(0, 'end')
        refresh()

add_btn = tk.Button(window, text='Добавить', command=add_task)
add_btn.grid(row=1, column=1)`,solution:`import tkinter as tk
from tkinter import messagebox

tasks = []

window = tk.Tk()
window.title("Задачи ProTeam Labs")
window.geometry("520x480")

title = tk.Label(window, text="Задачи студии", font=("Arial", 16))
title.grid(row=0, column=0, columnspan=2, pady=10)

entry = tk.Entry(window, font=("Arial", 13), width=28)
entry.grid(row=1, column=0, padx=10, pady=5)

listbox = tk.Listbox(window, font=("Arial", 13), width=45, height=10)
listbox.grid(row=2, column=0, columnspan=2, padx=10, pady=10)

counter = tk.Label(window, text="Сделано 0 из 0", font=("Arial", 12))
counter.grid(row=4, column=0, columnspan=2, pady=5)

def refresh():
    listbox.delete(0, "end")
    done_count = 0
    for i in range(len(tasks)):
        listbox.insert("end", tasks[i]["name"])
        if tasks[i]["done"]:
            listbox.itemconfig(i, fg="gray")
            done_count += 1
    counter.config(text="Сделано " + str(done_count) + " из " + str(len(tasks)))

def add_task():
    name = entry.get()
    if name == "":
        return
    tasks.append({"name": name, "done": False})
    entry.delete(0, "end")
    refresh()

def toggle_task():
    selected = listbox.curselection()
    if len(selected) == 0:
        return
    index = selected[0]
    tasks[index]["done"] = not tasks[index]["done"]
    refresh()

def delete_task():
    selected = listbox.curselection()
    if len(selected) == 0:
        return
    index = selected[0]
    tasks.pop(index)
    refresh()

add_btn = tk.Button(window, text="Добавить", command=add_task)
add_btn.grid(row=1, column=1, padx=10, pady=5)

done_btn = tk.Button(window, text="Сделано", command=toggle_task)
done_btn.grid(row=3, column=0, padx=10, pady=5)

del_btn = tk.Button(window, text="Удалить", command=delete_task)
del_btn.grid(row=3, column=1, padx=10, pady=5)

window.mainloop()`,tests:[{inputs:[],expected:""}],codeCheck:o=>/tk\.Listbox\s*\(/.test(o)?/listbox\.delete\s*\(/.test(o)?/listbox\.insert\s*\(/.test(o)?/listbox\.curselection\s*\(/.test(o)?null:{passed:!1,message:"Используй listbox.curselection() для получения выбранной задачи."}:{passed:!1,message:"Вставляй задачи через listbox.insert('end', ...)."}:{passed:!1,message:"В refresh() вызывай listbox.delete(0, 'end')."}:{passed:!1,message:"Создай виджет tk.Listbox."},testCode:`
import tkinter
listboxes = [w for w in tkinter.WIDGETS if w.kind == "Listbox"]
entries = [w for w in tkinter.WIDGETS if w.kind == "Entry"]
buttons = [w for w in tkinter.WIDGETS if w.kind == "Button"]
assert len(listboxes) >= 1, "Listbox не найден"
assert len(entries) >= 1, "Entry не найден"
assert len(buttons) >= 3, "Должно быть 3 кнопки (Добавить, Сделано, Удалить)"
lbox = listboxes[0]
ent = entries[0]
ent.text = "Тестовая задача"
buttons[0].invoke()
assert len(tasks) >= 1, "Задача не добавилась в tasks"
assert lbox.size() >= 1, "Задача не появилась в listbox"
lbox.selection_set(0)
buttons[1].invoke()
print("OK_TODO_LIST")
`,validate:(o,m)=>m.includes("OK_TODO_LIST")?{passed:!0,message:"Поздравляем! Финальный проект модуля 1 (ToDo-лист) успешно сдан Заказчику! 🏆"}:{passed:!1,message:"Проверь функции add_task, refresh и toggle_task."}}},{id:"tkinter_heroes_tavern",moduleId:"module_tkinter",title:"7. Таверна героев: файлы, модуль JSON и вечное сохранение данных",icon:"FolderOpen",shortDesc:"Программа запоминает данные в JSON-файл после закрытия окна",theory:{story:{letter:`ВХОДЯЩЕЕ СООБЩЕНИЕ
ОТПРАВИТЕЛЬ: ЗАКАЗЧИК

Ваш трекер отличный. Вбил туда двадцать дел на неделю, выключил ноутбук.
Утром запускаю — список пустой. Мне каждый раз печатать заново?
И кстати: мы стартуем RPG. Нужен реестр персонажей. Чтобы ни один маг не исчез.`,task:"Реестр персонажей RPG: имя, класс, уровень. Главное: файл heroes.json сохраняется сам при каждом изменении и не пропадает после перезапуска.",quotes:[{speaker:"Алёна, продюсер",text:"В прошлом модуле всё жило в оперативной памяти. Закрыли окно — память очистилась. Сегодня подключаем диск."},{speaker:"Макс, техлид",text:"Паять батарейки к вашим ноутбукам не будем. У нас есть диск и встроенный модуль json."},{speaker:"Ева, QA-инженер",text:"Открыли файл в режиме 'w' и программа упала — файл уже пустой. Записать не успели, а стереть успели."},{speaker:"Алёна, продюсер",text:"Седьмой день закрыт. Данные живут вечно на диске."}]},summary:`Откуда взялся JSON: Дуглас Крокфорд в 2001 году описал формат обмена данными между программами, понятный и человеку, и компьютеру. В нём хранятся настройки VS Code (settings.json), сохранения игр и ответы серверов.

JSON — это почти Python: списки [] превращаются в массивы [], словари {} — в объекты {}, но true и false пишутся с маленькой буквы, а None называется null. Кавычки в JSON только двойные!

Почему нельзя сохранить просто через str(heroes): строка '[{"name": "Артас"}]' станет плоским текстом, и data[0] вернёт квадратную скобку '[' вместо словаря героя!

Режимы открытия файлов:
- 'r' (read) — только чтение. Если файла нет, бросает FileNotFoundError.
- 'w' (write) — запись. ВНИМАНИЕ: режим 'w' стирает всё содержимое файла сразу в момент открытия!

Конструкция with open(...) as file: гарантирует, что файл закроется автоматически, даже если внутри произойдёт сбой.

Чтобы в файле был красивый русский текст без иероглифов \\u0410, указываем encoding='utf-8', ensure_ascii=False и indent=4 для удобных отступов.

Первый запуск: если файла heroes.json ещё нет, блок except FileNotFoundError перехватывает ошибку и программа спокойно начинает с пустого списка heroes = [].`,keyRule:"Всегда открывай файлы через with open(...) as file: с параметрами encoding='utf-8' и ensure_ascii=False для сохранения русского текста!",sections:[{heading:"Модуль JSON и контекстный менеджер with",text:"Модуль json позволяет сохранять структуры данных (списки словарей) в текстовый файл через json.dump() и восстанавливать через json.load().",codeExample:{title:"Сохранение и чтение в JSON",code:`import json

heroes = [{"name": "Артас", "role": "Паладин", "level": 5}]

# Сохранение в файл
with open("heroes.json", "w", encoding="utf-8") as f:
    json.dump(heroes, f, ensure_ascii=False, indent=4)

# Чтение из файла
with open("heroes.json", "r", encoding="utf-8") as f:
    loaded = json.load(f)
print(loaded[0]["name"])  # Артас`,explanation:"ensure_ascii=False сохраняет русский текст, а indent=4 форматирует отступы."}}],steps:[{code:`import tkinter as tk
from tkinter import messagebox
import json

FILENAME = "heroes.json"
heroes = []

def save_heroes():
    with open(FILENAME, "w", encoding="utf-8") as file:
        json.dump(heroes, file, ensure_ascii=False, indent=4)

def load_heroes():
    global heroes
    try:
        with open(FILENAME, "r", encoding="utf-8") as file:
            heroes = json.load(file)
    except FileNotFoundError:
        heroes = []
    except json.JSONDecodeError:
        heroes = []

window = tk.Tk()
window.title("Таверна героев")
window.geometry("560x520")

title = tk.Label(window, text="Таверна героев", font=("Arial", 18))
title.grid(row=0, column=0, columnspan=2, pady=15)

window.mainloop()`,output:"Функции save_heroes() и load_heroes() готовы",explanation:"Шаг 1. Функции сохранения и чтения JSON. FileNotFoundError перехватывается, чтобы программа не падала при первом старте."},{code:`import tkinter as tk
from tkinter import messagebox
import json

FILENAME = "heroes.json"
heroes = []

def save_heroes():
    with open(FILENAME, "w", encoding="utf-8") as file:
        json.dump(heroes, file, ensure_ascii=False, indent=4)

def load_heroes():
    global heroes
    try:
        with open(FILENAME, "r", encoding="utf-8") as file:
            heroes = json.load(file)
    except FileNotFoundError:
        heroes = []

def refresh():
    listbox.delete(0, "end")
    for i in range(len(heroes)):
        hero = heroes[i]
        line = str(i + 1) + ". " + hero["name"] + " — " + hero["role"] + " (Ур. " + str(hero["level"]) + ")"
        listbox.insert("end", line)
    status.config(text="Героев в таверне: " + str(len(heroes)))

window = tk.Tk()
window.title("Таверна героев")
window.geometry("560x520")

listbox = tk.Listbox(window, font=("Arial", 12), width=50, height=12)
listbox.grid(row=5, column=0, columnspan=2, padx=10, pady=10)
status = tk.Label(window, text="Героев в таверне: 0", font=("Arial", 11))
status.grid(row=7, column=0, columnspan=2, pady=5)

window.mainloop()`,output:"Отображение списка героев с классами и уровнями",explanation:"Шаг 2. Функция refresh() рисует строку героя: номер, имя, класс и уровень, обновляя статусную строку."},{code:`import tkinter as tk
from tkinter import messagebox
import json

FILENAME = "heroes.json"
heroes = []

window = tk.Tk()
window.title("Таверна героев")
window.geometry("560x520")

title = tk.Label(window, text="Таверна героев", font=("Arial", 18))
title.grid(row=0, column=0, columnspan=2, pady=15)

name_label = tk.Label(window, text="Имя героя:", font=("Arial", 12))
name_label.grid(row=1, column=0, padx=10, pady=5, sticky="e")
name_entry = tk.Entry(window, font=("Arial", 12), width=24)
name_entry.grid(row=1, column=1, padx=10, pady=5)

role_label = tk.Label(window, text="Класс:", font=("Arial", 12))
role_label.grid(row=2, column=0, padx=10, pady=5, sticky="e")
role_entry = tk.Entry(window, font=("Arial", 12), width=24)
role_entry.grid(row=2, column=1, padx=10, pady=5)

level_label = tk.Label(window, text="Уровень:", font=("Arial", 12))
level_label.grid(row=3, column=0, padx=10, pady=5, sticky="e")
level_entry = tk.Entry(window, font=("Arial", 12), width=24)
level_entry.grid(row=3, column=1, padx=10, pady=5)

listbox = tk.Listbox(window, font=("Arial", 12), width=50, height=12)
listbox.grid(row=5, column=0, columnspan=2, padx=10, pady=10)

status = tk.Label(window, text="Героев в таверне: 0", font=("Arial", 11))
status.grid(row=7, column=0, columnspan=2, pady=5)

def save_heroes():
    with open(FILENAME, "w", encoding="utf-8") as file:
        json.dump(heroes, file, ensure_ascii=False, indent=4)

def load_heroes():
    global heroes
    try:
        with open(FILENAME, "r", encoding="utf-8") as file:
            heroes = json.load(file)
    except FileNotFoundError:
        heroes = []

def refresh():
    listbox.delete(0, "end")
    for i in range(len(heroes)):
        hero = heroes[i]
        line = str(i + 1) + ". " + hero["name"] + " — " + hero["role"] + " (Ур. " + str(hero["level"]) + ")"
        listbox.insert("end", line)
    status.config(text="Героев в таверне: " + str(len(heroes)))

def add_hero():
    name = name_entry.get().strip()
    role = role_entry.get().strip()
    level_text = level_entry.get().strip()
    if name == "" or role == "" or level_text == "":
        messagebox.showwarning("Внимание", "Заполни все поля героя")
        return
    try:
        level = int(level_text)
    except ValueError:
        messagebox.showerror("Ошибка", "Уровень должен быть числом")
        return
    heroes.append({"name": name, "role": role, "level": level})
    save_heroes()
    refresh()
    name_entry.delete(0, "end")
    role_entry.delete(0, "end")
    level_entry.delete(0, "end")

def level_up():
    selected = listbox.curselection()
    if len(selected) == 0:
        messagebox.showwarning("Внимание", "Выбери героя в списке")
        return
    index = selected[0]
    heroes[index]["level"] = heroes[index]["level"] + 1
    save_heroes()
    refresh()
    listbox.selection_set(index)

def delete_hero():
    selected = listbox.curselection()
    if len(selected) == 0:
        messagebox.showwarning("Внимание", "Выбери героя для удаления")
        return
    index = selected[0]
    heroes.pop(index)
    save_heroes()
    refresh()

add_button = tk.Button(window, text="Добавить в отряд", font=("Arial", 12), command=add_hero)
add_button.grid(row=4, column=0, columnspan=2, pady=8)

level_button = tk.Button(window, text="Прокачать (+1 Ур.)", font=("Arial", 12), command=level_up)
level_button.grid(row=6, column=0, padx=10, pady=5)

delete_button = tk.Button(window, text="Исключить", font=("Arial", 12), command=delete_hero)
delete_button.grid(row=6, column=1, padx=10, pady=5)

load_heroes()
refresh()

window.mainloop()`,output:"Полная таверна героев: вечное сохранение на диске в heroes.json",explanation:"Шаги 3–5. Полный проект! save_heroes() вызывается сразу при любом изменении. При следующем запуске load_heroes() загрузит данные с диска."}],mistakes:[{wrongCode:`def add_hero():
    heroes.append({"name": name, "role": role, "level": level})
    refresh()`,error:"Герои не сохраняются в файл (забыли вызвать save_heroes)",fixedCode:`def add_hero():
    heroes.append({"name": name, "role": role, "level": level})
    save_heroes()
    refresh()`,explanation:"save_heroes() нужно вызывать в тот же момент, когда изменились данные в памяти."},{wrongCode:`load_heroes()
window.mainloop()`,error:"Список при старте пустой (загрузили данные, но забыли нарисовать)",fixedCode:`load_heroes()
refresh()
window.mainloop()`,explanation:"После загрузки данных из файла обязательно вызови refresh() перед mainloop()."},{wrongCode:`def level_up():
    index = selected[0]
    heroes[index]["level"] += 1
    save_heroes()
    refresh()`,error:"Прокачать героя 2 раза подряд не получается (выделение строки слетает)",fixedCode:`def level_up():
    index = selected[0]
    heroes[index]["level"] += 1
    save_heroes()
    refresh()
    listbox.selection_set(index)`,explanation:"После перерисовки списка вызови listbox.selection_set(index), чтобы вернуть выделение."}],quiz:[{code:'# Что произойдет с существующим файлом при open("heroes.json", "w")?',options:["Все данные в файле будут стёрты сразу в момент открытия","Новые данные допишутся в конец файла","Файл откроется только для чтения"],correct:0,explanation:"Режим 'w' (write) полностью очищает файл сразу при открытии!"},{code:"# Зачем указывать ensure_ascii=False при сохранении в JSON?",options:["Чтобы русские буквы сохранялись нормально, а не кодами \\u0410","Чтобы файл сохранялся быстрее","Чтобы в файле не было пробелов"],correct:0,explanation:"По умолчанию json кодирует нелатинские символы escape-последовательностями \\uXXXX. ensure_ascii=False отключает это."},{code:`try:
    with open("data.json", "r") as f: ...
# Какая ошибка возникает, если файла data.json еще нет на диске?`,options:["FileNotFoundError","ZeroDivisionError","NameError","KeyError"],correct:0,explanation:"При попытке открыть несуществующий файл в режиме 'r' Python выбрасывает FileNotFoundError."}],cheatsheet:["import json — встроенный модуль работы с форматом JSON","with open('f.json', 'w', encoding='utf-8') as f: — безопасное открытие на запись","json.dump(data, f, ensure_ascii=False, indent=4) — сохранение структуры в файл","with open('f.json', 'r', encoding='utf-8') as f: — открытие на чтение","data = json.load(f) — загрузка структуры из файла"]},exercise:{task:`Создай приложение «Таверна героев» с сохранением данных в JSON:
1. Задай константу FILENAME = 'heroes.json' и heroes = []
2. Напиши функцию save_heroes():
   with open(FILENAME, 'w', encoding='utf-8') as file:
       json.dump(heroes, file, ensure_ascii=False, indent=4)
3. Напиши функцию load_heroes():
   global heroes
   try:
       with open(FILENAME, 'r', encoding='utf-8') as file:
           heroes = json.load(file)
   except FileNotFoundError:
       heroes = []
4. Создай окно и форму с name_entry, role_entry, level_entry
5. Напиши add_hero(): добавляет {'name': ..., 'role': ..., 'level': ...}, вызывает save_heroes() и refresh()
6. Перед window.mainloop() вызови load_heroes() и refresh()!`,requirements:["Использовать модуль json и константу FILENAME = 'heroes.json'","Реализовать save_heroes() и load_heroes() с обработкой FileNotFoundError","Сохранять данные при добавлении героя через add_hero","Вызывать load_heroes() и refresh() перед window.mainloop()"],starterCode:`import tkinter as tk
from tkinter import messagebox
import json

FILENAME = "heroes.json"
heroes = []

# 1. Реализуй save_heroes() и load_heroes()

window = tk.Tk()
window.title("Таверна героев")
window.geometry("560x520")

title = tk.Label(window, text="Таверна героев", font=("Arial", 16))
title.grid(row=0, column=0, columnspan=2, pady=10)

name_entry = tk.Entry(window, width=20)
name_entry.grid(row=1, column=1, padx=5, pady=5)

role_entry = tk.Entry(window, width=20)
role_entry.grid(row=2, column=1, padx=5, pady=5)

level_entry = tk.Entry(window, width=20)
level_entry.grid(row=3, column=1, padx=5, pady=5)

listbox = tk.Listbox(window, width=45, height=10)
listbox.grid(row=5, column=0, columnspan=2, padx=10, pady=10)

# 2. Напиши refresh() и add_hero()

window.mainloop()
`,hint:`def save_heroes():
    with open(FILENAME, 'w', encoding='utf-8') as f:
        json.dump(heroes, f, ensure_ascii=False, indent=4)

def load_heroes():
    global heroes
    try:
        with open(FILENAME, 'r', encoding='utf-8') as f:
            heroes = json.load(f)
    except FileNotFoundError:
        heroes = []`,solution:`import tkinter as tk
from tkinter import messagebox
import json

FILENAME = "heroes.json"
heroes = []

def save_heroes():
    with open(FILENAME, "w", encoding="utf-8") as file:
        json.dump(heroes, file, ensure_ascii=False, indent=4)

def load_heroes():
    global heroes
    try:
        with open(FILENAME, "r", encoding="utf-8") as file:
            heroes = json.load(file)
    except FileNotFoundError:
        heroes = []

window = tk.Tk()
window.title("Таверна героев")
window.geometry("560x520")

title = tk.Label(window, text="Таверна героев", font=("Arial", 16))
title.grid(row=0, column=0, columnspan=2, pady=10)

tk.Label(window, text="Имя:").grid(row=1, column=0, sticky="e")
name_entry = tk.Entry(window, width=20)
name_entry.grid(row=1, column=1, padx=5, pady=5)

tk.Label(window, text="Класс:").grid(row=2, column=0, sticky="e")
role_entry = tk.Entry(window, width=20)
role_entry.grid(row=2, column=1, padx=5, pady=5)

tk.Label(window, text="Уровень:").grid(row=3, column=0, sticky="e")
level_entry = tk.Entry(window, width=20)
level_entry.grid(row=3, column=1, padx=5, pady=5)

listbox = tk.Listbox(window, width=45, height=10)
listbox.grid(row=5, column=0, columnspan=2, padx=10, pady=10)

def refresh():
    listbox.delete(0, "end")
    for i in range(len(heroes)):
        h = heroes[i]
        listbox.insert("end", h["name"] + " (" + h["role"] + ", ур. " + str(h["level"]) + ")")

def add_hero():
    name = name_entry.get().strip()
    role = role_entry.get().strip()
    lvl_str = level_entry.get().strip()
    if not name or not role or not lvl_str:
        return
    heroes.append({"name": name, "role": role, "level": int(lvl_str)})
    save_heroes()
    refresh()
    name_entry.delete(0, "end")
    role_entry.delete(0, "end")
    level_entry.delete(0, "end")

add_btn = tk.Button(window, text="Нанять героя", command=add_hero)
add_btn.grid(row=4, column=0, columnspan=2, pady=5)

load_heroes()
refresh()

window.mainloop()`,tests:[{inputs:[],expected:""}],codeCheck:o=>/import\s+json\b/.test(o)?/json\.dump\s*\(/.test(o)?/json\.load\s*\(/.test(o)?/FileNotFoundError/.test(o)?null:{passed:!1,message:"Обработай FileNotFoundError в блоке try/except функции load_heroes."}:{passed:!1,message:"Используй json.load(...) для загрузки героев."}:{passed:!1,message:"Используй json.dump(...) для сохранения героев."}:{passed:!1,message:"Импортируй модуль json."},testCode:`
import tkinter
import _vfs
assert "heroes.json" in _vfs.FILES, "Файл heroes.json должен существовать в файловой системе"
entries = [w for w in tkinter.WIDGETS if w.kind == "Entry"]
buttons = [w for w in tkinter.WIDGETS if w.kind == "Button"]
assert len(entries) >= 3, "Должно быть 3 поля Entry (имя, класс, уровень)"
assert len(buttons) >= 1, "Кнопка добавления героя не найдена"
entries[0].text = "Маг"
entries[1].text = "Волшебник"
entries[2].text = "10"
buttons[0].invoke()
assert len(heroes) >= 1, "Герой не добавлен в heroes"
assert "heroes.json" in _vfs.FILES and len(_vfs.FILES["heroes.json"]) > 0, "heroes.json не сохранен"
print("OK_HEROES_TAVERN")
`,validate:(o,m)=>m.includes("OK_HEROES_TAVERN")?{passed:!0,message:"Великолепно! Таверна героев успешно сохраняет персонажей в heroes.json! 🧙‍♂️⚔️"}:{passed:!1,message:"Проверь функции save_heroes, load_heroes и сохранение в heroes.json."}}},{id:"tkinter_music_player",moduleId:"module_tkinter",title:"8. Музыкальный плеер: модуль os, диалог выбора папки и pygame.mixer",icon:"Music",shortDesc:"Программа читает папку на диске, фильтрует треки и играет музыку",theory:{story:{letter:`ВХОДЯЩЕЕ СООБЩЕНИЕ
ОТПРАВИТЕЛЬ: ЗАКАЗЧИК

У меня на диске лежит двести треков. Чтобы послушать, я каждый раз лезу в папку и щёлкаю по файлу.

Сделайте плеер. Пусть сам найдёт всю музыку в папке и покажет списком.`,task:"Плеер: выбрать папку, увидеть список треков, играть, ставить на паузу, листать. И громкость ползунком.",quotes:[{speaker:"Алёна, продюсер",text:"До сих пор программа работала только со своими данными. Сегодня она впервые полезет в чужую папку на диске."},{speaker:"Макс, техлид",text:"Внутри айпода была та же задача, что у вас: прочитать папку, показать список, нажать и играть."},{speaker:"Ева, QA-инженер",text:"Первым делом я всегда жму «Отмена». Половина программ на этом падает."},{speaker:"Ева, QA-инженер",text:"Поставьте на паузу и подождите. Без проверки is_paused плеер решит, что песня кончилась, и включит следующую."},{speaker:"Алёна, продюсер",text:"Восьмой день закрыт. На следующем занятии сделаем плейлисты — и вот там нам наконец понадобятся классы."},{speaker:"Ответ Заказчика в конце",text:"Поставил вашу папку, нажал — играет. Громкость работает, листается. Одного не хватает: я хочу свой список. Не всю папку подряд, а выбранные треки в своём порядке."}]},summary:`В этом уроке мы создаем полноценный музыкальный плеер! Программа впервые выходит за рамки внутренних данных и учится работать с реальными файлами на компьютере.

Модуль os и функция os.listdir(path) возвращают все имена файлов и подпапок в указанной директории. Но нам нужны только музыкальные треки, поэтому мы фильтруем их с помощью метода endswith('.mp3'). Чтобы не потерять файлы с расширением заглавными буквами (.MP3), мы приводим имя к нижнему регистру через .lower(), но в список для воспроизведения обязательно сохраняем оригинальное имя.

Путь к папке никогда не зашивается жестко в коде. С помощью модуля from tkinter import filedialog мы вызываем filedialog.askdirectory(), открывая стандартное системное окно выбора папки. Если пользователь нажал «Отмена», функция возвращает пустую строку, и программу нужно аккуратно остановить без падения.

Воспроизведением звука управляет библиотека pygame.mixer. Мы инициализируем её один раз через pygame.mixer.init(), а затем загружаем трек через pygame.mixer.music.load(path) и запускаем pygame.mixer.music.play(). Путь склеивается через os.path.join(folder, track_name).

Новый виджет tk.Scale позволяет регулировать громкость ползунком от 0 до 100. Функция обратного вызова command=set_volume принимает новое значение в виде строки, поэтому мы переводим его в число и делим на 100: int(value) / 100.

Главная ловушка урока — автопереход между треками! Метод get_busy() возвращает False не только когда песня доиграла, но и когда она стоит на паузе. Поэтому автопереход требует трех условий: get_busy() == False, is_paused == False и current_index >= 0.`,keyRule:"Автопереход требует 3 проверок: get_busy() == False and is_paused == False and current_index >= 0. Без флага is_paused плеер на паузе переключит трек через полсекунды!",sections:[{heading:"Модуль os и чтение содержимого папки",text:"Функция os.listdir(path) возвращает список всех имен файлов и папок в директории. Чтобы оставить только музыку, фильтруем имена по расширению.",codeExample:{title:"Фильтрация музыкальных файлов",code:`import os

names = os.listdir("C:/Music")
music = []
for name in names:
    if name.lower().endswith((".mp3", ".wav", ".ogg")):
        music.append(name)
print(music)`,explanation:"name.lower() защищает от файлов вида SONG.MP3, а в список добавляется исходное имя."}},{heading:"Диалог выбора папки filedialog.askdirectory()",text:"from tkinter import filedialog позволяет пользователю самому выбрать папку с музыкой на диске. При нажатии «Отмена» возвращается пустая строка, которую важно проверить."},{heading:"Библиотека pygame.mixer",text:"pygame.mixer.init() инициализирует звуковой движок. load(path) загружает аудиофайл, play() запускает воспроизведение, pause() и unpause() ставят на паузу и снимают с неё."},{heading:"Ползунок tk.Scale и кольцевой список",text:"Виджет Scale(window, from_=0, to=100, orient='horizontal') передает значение ползунка в коллбэк строкой. Листание треков закольцовывается оператором остатка: (index + 1) % len(tracks)."}],steps:[{code:`import os

def get_tracks(path):
    result = []
    names = os.listdir(path)
    for i in range(len(names)):
        name = names[i]
        small = name.lower()
        if small.endswith(".mp3") or small.endswith(".wav") or small.endswith(".ogg"):
            result.append(name)
    result.sort()
    return result

music = get_tracks("C:/Music")
print("Найдено треков:", len(music))
print(music)`,output:`Найдено треков: 5
['01 Intro.mp3', '02 Synthwave Dream.mp3', '03 Cyberpunk City.ogg', '04 Neon Lights.wav', '05 Retro Funk.MP3']`,explanation:"Шаг 1. Функция get_tracks читает папку C:/Music, отсеивает мусор (картинки, подпапки) и сортирует треки по алфавиту."},{code:`import tkinter as tk
from tkinter import filedialog
import os

folder = ""
tracks = []

window = tk.Tk()
window.title("Выбор папки")
window.geometry("420x280")

listbox = tk.Listbox(window, width=40, height=8)
listbox.pack(pady=10)

status = tk.Label(window, text="Папка не выбрана")
status.pack(pady=5)

def get_tracks(path):
    result = []
    names = os.listdir(path)
    for i in range(len(names)):
        name = names[i]
        small = name.lower()
        if small.endswith(".mp3") or small.endswith(".wav") or small.endswith(".ogg"):
            result.append(name)
    result.sort()
    return result

def refresh():
    listbox.delete(0, "end")
    for i in range(len(tracks)):
        listbox.insert("end", tracks[i])
    status.config(text="Треков: " + str(len(tracks)))

def choose_folder():
    global folder, tracks
    chosen = filedialog.askdirectory()
    if chosen == "":
        return
    folder = chosen
    tracks = get_tracks(folder)
    refresh()

btn = tk.Button(window, text="Выбрать папку", command=choose_folder)
btn.pack(pady=5)

window.mainloop()`,output:"При нажатии кнопки «Выбрать папку» открывается окно проводника и треки добавляются в список",explanation:"Шаг 2. Добавили выбор папки через filedialog.askdirectory(). При отмене выходим по return, сохраняя прежний список."},{code:`import tkinter as tk
from tkinter import messagebox
import pygame
import os

pygame.mixer.init()

folder = "C:/Music"
tracks = ["01 Intro.mp3", "02 Synthwave Dream.mp3"]
current_index = -1

window = tk.Tk()
window.title("Плеер")
window.geometry("400x260")

listbox = tk.Listbox(window, width=35, height=5)
for t in tracks:
    listbox.insert("end", t)
listbox.pack(pady=10)

status = tk.Label(window, text="Готов к игре")
status.pack(pady=5)

def play_index(index):
    global current_index
    if len(tracks) == 0:
        return
    current_index = index
    path = os.path.join(folder, tracks[current_index])
    pygame.mixer.music.load(path)
    pygame.mixer.music.play()
    is_paused = False
    listbox.selection_clear(0, "end")
    listbox.selection_set(current_index)
    status.config(text="Играет: " + tracks[current_index])

def play():
    selected = listbox.curselection()
    if len(selected) == 0:
        messagebox.showerror("Ошибка", "Выберите трек в списке")
        return
    play_index(selected[0])

btn = tk.Button(window, text="Играть", command=play)
btn.pack(pady=5)

window.mainloop()`,output:"Выбираем трек в Listbox и нажимаем «Играть» — песня загружается в pygame.mixer и начинает воспроизводиться",explanation:"Шаг 3. Функция play_index(index) собирает полный путь через os.path.join, загружает музыку и подсвечивает трек в Listbox."},{code:`import tkinter as tk
import pygame

pygame.mixer.init()

is_paused = False
current_index = 0
tracks = ["01 Intro.mp3"]

window = tk.Tk()
window.title("Пауза")
window.geometry("320x180")

status = tk.Label(window, text="Играет: 01 Intro.mp3")
status.pack(pady=15)

def pause():
    global is_paused
    if current_index == -1:
        return
    if is_paused:
        pygame.mixer.music.unpause()
        is_paused = False
        status.config(text="Играет: " + tracks[current_index])
    else:
        pygame.mixer.music.pause()
        is_paused = True
        status.config(text="Пауза")

btn = tk.Button(window, text="Пауза / Продолжить", command=pause)
btn.pack(pady=10)

window.mainloop()`,output:"Кнопка «Пауза / Продолжить» переключает воспроизведение туда и обратно",explanation:"Шаг 4. Кнопка «Пауза»: одна кнопка, два действия. Переменная is_paused хранит текущее состояние."},{code:`tracks = ["01 Intro.mp3", "02 Beat.mp3", "03 Synth.mp3"]
current = 2

# Следующий трек (заворачивает в начало):
next_idx = (current + 1) % len(tracks)
print("Текущий:", current, "-> Следующий:", next_idx)

# Предыдущий трек с первого на последний:
prev_idx = (0 - 1) % len(tracks)
print("С 0 назад ->", prev_idx)`,output:`Текущий: 2 -> Следующий: 0
С 0 назад -> 2`,explanation:"Шаг 5. Формула (current + 1) % len(tracks) замыкает список в кольцо, избавляя от лишних условий if."},{code:`import tkinter as tk
from tkinter import messagebox
from tkinter import filedialog
import pygame
import os
import json

SETTINGS = "player_settings.json"

folder = ""
tracks = []
current_index = -1
is_paused = False

pygame.mixer.init()

window = tk.Tk()
window.title("Плеер ProTeam Labs")
window.geometry("500x520")

def get_tracks(path):
    result = []
    names = os.listdir(path)
    for i in range(len(names)):
        name = names[i]
        small = name.lower()
        if small.endswith(".mp3") or small.endswith(".wav") or small.endswith(".ogg"):
            result.append(name)
    result.sort()
    return result

def refresh():
    listbox.delete(0, "end")
    for i in range(len(tracks)):
        listbox.insert("end", tracks[i])
    status.config(text="Треков: " + str(len(tracks)))

def choose_folder():
    global folder, tracks, current_index
    chosen = filedialog.askdirectory()
    if chosen == "":
        return
    folder = chosen
    tracks = get_tracks(folder)
    current_index = -1
    pygame.mixer.music.stop()
    refresh()
    save_settings()

def play_index(index):
    global current_index, is_paused
    if len(tracks) == 0:
        return
    current_index = index
    path = os.path.join(folder, tracks[current_index])
    pygame.mixer.music.load(path)
    pygame.mixer.music.play()
    is_paused = False
    listbox.selection_clear(0, "end")
    listbox.selection_set(current_index)
    status.config(text="Играет: " + tracks[current_index])

def play():
    selected = listbox.curselection()
    if len(selected) == 0:
        messagebox.showerror("Ошибка", "Выберите трек в списке")
        return
    play_index(selected[0])

def pause():
    global is_paused
    if current_index == -1:
        return
    if is_paused:
        pygame.mixer.music.unpause()
        is_paused = False
        status.config(text="Играет: " + tracks[current_index])
    else:
        pygame.mixer.music.pause()
        is_paused = True
        status.config(text="Пауза")

def next_track():
    if len(tracks) == 0:
        return
    play_index((current_index + 1) % len(tracks))

def prev_track():
    if len(tracks) == 0:
        return
    play_index((current_index - 1) % len(tracks))

def set_volume(value):
    pygame.mixer.music.set_volume(int(value) / 100)

def check_music():
    if (pygame.mixer.music.get_busy() == False
            and is_paused == False
            and current_index >= 0):
        next_track()
    window.after(500, check_music)

def save_settings():
    data = {"folder": folder, "volume": volume_scale.get()}
    with open(SETTINGS, "w", encoding="utf-8") as file:
        json.dump(data, file, ensure_ascii=False, indent=4)

def load_settings():
    global folder, tracks
    try:
        with open(SETTINGS, "r", encoding="utf-8") as file:
            data = json.load(file)
    except FileNotFoundError:
        return
    folder = data.get("folder", "")
    volume_scale.set(data.get("volume", 70))
    if folder != "" and os.path.isdir(folder):
        tracks = get_tracks(folder)
        refresh()

def on_close():
    save_settings()
    pygame.mixer.music.stop()
    window.destroy()

folder_button = tk.Button(window, text="Выбрать папку", font=("Arial", 12), command=choose_folder)
folder_button.pack(pady=8)

listbox = tk.Listbox(window, font=("Arial", 11), width=45, height=10)
listbox.pack(pady=5)

status = tk.Label(window, text="Папка не выбрана", font=("Arial", 11))
status.pack(pady=4)

buttons = tk.Frame(window)
buttons.pack(pady=5)

prev_button = tk.Button(buttons, text="<<", width=4, command=prev_track)
prev_button.grid(row=0, column=0, padx=3)

play_button = tk.Button(buttons, text="Играть", width=8, command=play)
play_button.grid(row=0, column=1, padx=3)

pause_button = tk.Button(buttons, text="Пауза", width=8, command=pause)
pause_button.grid(row=0, column=2, padx=3)

next_button = tk.Button(buttons, text=">>", width=4, command=next_track)
next_button.grid(row=0, column=3, padx=3)

volume_scale = tk.Scale(window, from_=0, to=100, orient="horizontal", label="Громкость", command=set_volume)
volume_scale.set(70)
volume_scale.pack(pady=5)

window.protocol("WM_DELETE_WINDOW", on_close)

load_settings()
check_music()

window.mainloop()`,output:"Полнофункциональный музыкальный плеер запущен в окне Tkinter!",explanation:"Шаг 6. Итоговая программа! Читает папку, воспроизводит выбранные песни, листает треки по кругу, регулирует звук ползунком и запоминает настройки в JSON."}],mistakes:[{wrongCode:`def check_music():
    if pygame.mixer.music.get_busy() == False and current_index >= 0:
        next_track()
    window.after(500, check_music)`,error:"Логическая ошибка: при паузе плеер через полсекунды переключает песню на следующую!",fixedCode:`def check_music():
    if (pygame.mixer.music.get_busy() == False
            and is_paused == False
            and current_index >= 0):
        next_track()
    window.after(500, check_music)`,explanation:"get_busy() возвращает False и когда трек закончился, и когда стоит пауза. Обязательно проверяй and is_paused == False!"},{wrongCode:`def check_music():
    if pygame.mixer.music.get_busy() == False and is_paused == False:
        next_track()
    window.after(500, check_music)`,error:"Логическая ошибка: плеер сам включает первый трек сразу при запуске программы",fixedCode:`def check_music():
    if (pygame.mixer.music.get_busy() == False
            and is_paused == False
            and current_index >= 0):
        next_track()
    window.after(500, check_music)`,explanation:"При старте ничего еще не играло, но get_busy() уже False. Добавь проверку and current_index >= 0."},{wrongCode:`for i in range(len(names)):
    name = names[i]
    if name.endswith('.mp3'):
        result.append(name)`,error:"Файлы с заглавным расширением (SONG.MP3) бесследно пропадают из списка",fixedCode:`for i in range(len(names)):
    name = names[i]
    small = name.lower()
    if small.endswith('.mp3'):
        result.append(name)`,explanation:"Проверяй расширение через small = name.lower(), но в список result добавляй оригинальное имя name."},{wrongCode:`def set_volume():
    pygame.mixer.music.set_volume(0.5)`,error:"TypeError: set_volume() takes 0 positional arguments but 1 was given",fixedCode:`def set_volume(value):
    pygame.mixer.music.set_volume(int(value) / 100)`,explanation:"Виджет Scale при вызове command передает новое значение ползунка в качестве строкового аргумента. Функция обязана принимать параметр value!"},{wrongCode:`def set_volume(value):
    pygame.mixer.music.set_volume(int(value))`,error:"Логическая ошибка: громкость всегда максимальная (70 воспринимается как 7000% громкости)",fixedCode:`def set_volume(value):
    pygame.mixer.music.set_volume(int(value) / 100)`,explanation:"pygame.mixer.music.set_volume ожидает число от 0.0 до 1.0. Дели значение ползунка на 100."},{wrongCode:"volume_scale = tk.Scale(window, from=0, to=100)",error:"SyntaxError: invalid syntax on line 1 (from — служебное слово)",fixedCode:"volume_scale = tk.Scale(window, from_=0, to=100)",explanation:"В Python слово 'from' зарезервировано для импорта. В Tkinter параметр пишется с подчеркиванием: from_=0."}],quiz:[{code:`names = ["01 song.mp3", "COVER.JPG", "02 BEAT.MP3", "notes.txt"]
music = [n for n in names if n.lower().endswith(".mp3")]
print(len(music))`,options:["1","2","3","4"],correct:1,explanation:"И '01 song.mp3', и '02 BEAT.MP3' при вызове .lower() заканчиваются на '.mp3', поэтому в списке окажется ровно 2 трека."},{code:`current = 4
tracks_count = 5
next_track = (current + 1) % tracks_count
print(next_track)`,options:["0","4","5","1"],correct:0,explanation:"(4 + 1) % 5 = 5 % 5 = 0. Формула закольцовывает список: после последнего (4) трека начинает играть самый первый (0)."},{code:`# Почему в check_music важна проверка is_paused == False?
# Что будет без нее?`,options:["На паузе плеер через полсекунды переключит песню на следующую","Плеер перестанет воспроизводить звук","Возникнет ошибка SyntaxError","Окно сразу закроется"],correct:0,explanation:"get_busy() возвращает False не только когда трек завершился, но и когда нажата пауза! Без флага is_paused плеер решит, что трек доиграл до конца."}],cheatsheet:["from tkinter import filedialog — диалог выбора папки filedialog.askdirectory()","import os — os.listdir(path) читает имена файлов, os.path.join(a, b) склеивает путь","import pygame — pygame.mixer.init(), music.load(), play(), pause(), unpause(), set_volume()","tk.Scale(window, from_=0, to=100, orient='horizontal') — ползунок (from_ с подчеркиванием!)","window.after(500, check_music) — вызов функции через таймер 500 мс без зависания окна"]},exercise:{task:`Собери музыкальный плеер ProTeam Music Player:
1. Импортируй tkinter, filedialog, pygame, os
2. Инициализируй звук: pygame.mixer.init()
3. Напиши get_tracks(path): возвращает отсортированный список файлов с расширениями .mp3, .wav, .ogg (используй small = name.lower())
4. Напиши play_index(index): загружает os.path.join(folder, tracks[index]), вызывает play(), ставит is_paused = False и подсвечивает трек в listbox
5. Напиши pause(): переключает unpause() и pause() через флаг is_paused
6. Напиши next_track() и prev_track() с кольцевым переходом через % len(tracks)
7. Создай кнопки <<, Играть, Пауза, >> и ползунок volume_scale = tk.Scale(window, from_=0, to=100, orient='horizontal', label='Громкость', command=set_volume)
8. Запусти check_music() с проверками get_busy() == False, is_paused == False и current_index >= 0 перед window.mainloop()!`,requirements:["Использовать модули os, pygame, filedialog","Инициализировать pygame.mixer.init()","Реализовать get_tracks с фильтрацией расширений .mp3, .wav, .ogg","Реализовать play_index, pause, next_track, prev_track","Создать виджет tk.Scale с from_=0, to=100 для регулировки громкости","Реализовать функцию check_music с тройным условием автоперехода"],starterCode:`import tkinter as tk
from tkinter import messagebox
from tkinter import filedialog
import pygame
import os

folder = "C:/Music"
tracks = []
current_index = -1
is_paused = False

pygame.mixer.init()

# 1. Напиши get_tracks(path)

window = tk.Tk()
window.title("ProTeam Music Player")
window.geometry("500x480")

listbox = tk.Listbox(window, font=("Arial", 11), width=45, height=9)
listbox.pack(pady=10)

status = tk.Label(window, text="Готов к воспроизведению", font=("Arial", 11))
status.pack(pady=5)

buttons = tk.Frame(window)
buttons.pack(pady=5)

# 2. Напиши play_index(index), play(), pause(), next_track(), prev_track(), set_volume(val)

# 3. Добавь кнопки <<, Играть, Пауза, >> и volume_scale

# 4. Напиши check_music()

window.mainloop()`,hint:"Не забудь: def set_volume(value): pygame.mixer.music.set_volume(int(value) / 100), а у Scale пиши from_=0, to=100.",solution:`import tkinter as tk
from tkinter import messagebox
from tkinter import filedialog
import pygame
import os

folder = "C:/Music"
tracks = []
current_index = -1
is_paused = False

pygame.mixer.init()

def get_tracks(path):
    result = []
    names = os.listdir(path)
    for i in range(len(names)):
        name = names[i]
        small = name.lower()
        if small.endswith(".mp3") or small.endswith(".wav") or small.endswith(".ogg"):
            result.append(name)
    result.sort()
    return result

tracks = get_tracks(folder)

window = tk.Tk()
window.title("ProTeam Music Player")
window.geometry("500x480")

listbox = tk.Listbox(window, font=("Arial", 11), width=45, height=9)
for t in tracks:
    listbox.insert("end", t)
listbox.pack(pady=10)

status = tk.Label(window, text="Треков: " + str(len(tracks)), font=("Arial", 11))
status.pack(pady=5)

def play_index(index):
    global current_index, is_paused
    if len(tracks) == 0:
        return
    current_index = index
    path = os.path.join(folder, tracks[current_index])
    pygame.mixer.music.load(path)
    pygame.mixer.music.play()
    is_paused = False
    listbox.selection_clear(0, "end")
    listbox.selection_set(current_index)
    status.config(text="Играет: " + tracks[current_index])

def play():
    selected = listbox.curselection()
    if len(selected) == 0:
        messagebox.showerror("Ошибка", "Выберите трек в списке")
        return
    play_index(selected[0])

def pause():
    global is_paused
    if current_index == -1:
        return
    if is_paused:
        pygame.mixer.music.unpause()
        is_paused = False
        status.config(text="Играет: " + tracks[current_index])
    else:
        pygame.mixer.music.pause()
        is_paused = True
        status.config(text="Пауза")

def next_track():
    if len(tracks) == 0:
        return
    play_index((current_index + 1) % len(tracks))

def prev_track():
    if len(tracks) == 0:
        return
    play_index((current_index - 1) % len(tracks))

def set_volume(value):
    pygame.mixer.music.set_volume(int(value) / 100)

buttons = tk.Frame(window)
buttons.pack(pady=5)

prev_btn = tk.Button(buttons, text="<<", width=4, command=prev_track)
prev_btn.grid(row=0, column=0, padx=3)

play_btn = tk.Button(buttons, text="Играть", width=8, command=play)
play_btn.grid(row=0, column=1, padx=3)

pause_btn = tk.Button(buttons, text="Пауза", width=8, command=pause)
pause_btn.grid(row=0, column=2, padx=3)

next_btn = tk.Button(buttons, text=">>", width=4, command=next_track)
next_btn.grid(row=0, column=3, padx=3)

volume_scale = tk.Scale(window, from_=0, to=100, orient="horizontal", label="Громкость", command=set_volume)
volume_scale.set(70)
volume_scale.pack(pady=5)

def check_music():
    if (pygame.mixer.music.get_busy() == False
            and is_paused == False
            and current_index >= 0):
        next_track()
    window.after(500, check_music)

check_music()

window.mainloop()`,tests:[{inputs:[],expected:""}],codeCheck:o=>/import\s+os\b/.test(o)?/import\s+pygame\b/.test(o)?/pygame\.mixer\.init/.test(o)?/def\s+get_tracks\b/.test(o)?/tk\.Scale\b/.test(o)?null:{passed:!1,message:"Создай виджет tk.Scale для громкости."}:{passed:!1,message:"Объяви функцию get_tracks(path)."}:{passed:!1,message:"Вызови pygame.mixer.init() для инициализации звука."}:{passed:!1,message:"Импортируй модуль pygame."}:{passed:!1,message:"Импортируй модуль os."},testCode:`import tkinter
import pygame
assert callable(get_tracks), "get_tracks должна быть функцией"
t = get_tracks("C:/Music")
assert len(t) >= 4, "get_tracks должна возвращать музыкальные треки из C:/Music"
scales = [w for w in tkinter.WIDGETS if w.kind == "Scale"]
assert len(scales) >= 1, "Виджет Scale не найден в окне"
buttons = [w for w in tkinter.WIDGETS if w.kind == "Button"]
assert len(buttons) >= 3, "Должны присутствовать кнопки управления (<<, Играть, Пауза, >>)"
if "play_index" in globals():
    play_index(0)
    assert current_index == 0, "current_index должен стать 0"
    assert pygame.mixer.music.get_busy() == True, "Музыка должна начать воспроизведение"
if "pause" in globals():
    pause()
    assert is_paused == True, "is_paused должен стать True при первой паузе"
    pause()
    assert is_paused == False, "is_paused должен стать False при продолжении"
print("OK_MUSIC_PLAYER")`,validate:(o,m)=>m.includes("OK_MUSIC_PLAYER")?{passed:!0,message:"Браво! Музыкальный плеер ProTeam полностью собран и играет треки! 🎵🎧📻"}:{passed:!1,message:"Проверь функции get_tracks, play_index, pause, а также Scale и кнопки управления."}}}],br=[{id:"module_intro",title:"1. Первые шаги и вывод данных",description:"Знакомство с Python, функция print(), отображение строк и чисел",icon:"Terminal",color:"#2F6FD0",lessons:[{id:"print_hello",moduleId:"module_intro",title:"Функция print() и первая программа",icon:"Terminal",shortDesc:"Учимся выводить приветствие и фразы в терминал",theory:{summary:`Компьютер сам по себе не умеет угадывать мысли. Если ты хочешь, чтобы он что-то показал тебе на экране, ему нужно дать прямую команду.

В Python такая команда называется функцией print(). Слово «print» переводится с английского как «печать». Представь, что внутри компьютера сидит маленький робот, который выводит твои сообщения на экран монитора.

Круглые скобки после print — это коробочка. Всё, что ты положишь внутрь скобок, робот сразу напечатает.

Если мы хотим напечатать обычные слова или фразы, их обязательно нужно упаковать в кавычки: "Привет" или 'Привет'. Кавычки показывают компьютеру: это просто человеческий текст, не пытайся искать в нём команды.

Числа можно писать прямо без кавычек. Например, print(42) напечатает число 42.`,keyRule:'Текст всегда пишется внутри кавычек: print("Привет"). Числа пишутся без кавычек: print(42).',sections:[{heading:"Как работает print()",text:"Чтобы компьютер напечатал что-то на экране, мы пишем команду print, а внутри круглых скобок указываем то, что хотим вывести.",codeExample:{title:"Пример вывода текста и чисел",code:`print("Привет, мир!")
print(42)`,explanation:"Первая строка напечатает текст 'Привет, мир!', а вторая — число 42 на новой строке."}},{heading:"Одинарные и двойные кавычки",text:"В Python нет разницы между одинарными и двойными кавычками для строк. Главное — чтобы строка начиналась и заканчивалась одинаковым типом кавычек."}],steps:[{code:'print("Привет!")',output:"Привет!",explanation:"Самая простая программа. Робот берет текст из кавычек и печатает его на экране."},{code:`print("Привет, меня зовут Артём!")
print(10)`,output:`Привет, меня зовут Артём!
10`,explanation:"Каждая новая команда print печатает свой результат с новой строчки. Сначала напечатается текст, а под ним — число 10."},{code:`print("3 + 2 =")
print(3 + 2)`,output:`3 + 2 =
5`,explanation:"В первой строке в кавычках написан текст — компьютер напечатает его как есть: 3 + 2 =. Во второй строке кавычек нет, поэтому Python сам посчитает пример и выведет готовый ответ: 5."}],mistakes:[{wrongCode:'Print("Привет, мир!")',error:"NameError: name 'Print' is not defined on line 1",fixedCode:'print("Привет, мир!")',explanation:"В Python все команды пишутся маленькими буквами. Компьютер не знает команду Print с большой буквы."},{wrongCode:'print("Привет)',error:"SyntaxError: bad token T_OP on line 1",fixedCode:'print("Привет")',explanation:"Кавычки всегда должны быть парными: открыл кавычку — не забудь закрыть её в конце слова."},{wrongCode:"print(hello)",error:"NameError: name 'hello' is not defined on line 1",fixedCode:'print("hello")',explanation:"Без кавычек Python думает, что это имя переменной, которой ещё не существует. Обычные слова всегда бери в кавычки."},{wrongCode:'print("Привет"))',error:"SyntaxError: bad input on line 1",fixedCode:'print("Привет")',explanation:"Скобок должно быть ровно столько же, сколько открывалось. Здесь была лишняя закрывающая скобка."}],quiz:[{code:"print(5 + 5)",options:["5 + 5","10","55","Ошибка"],correct:1,explanation:"Здесь нет кавычек, поэтому Python выполняет сложение чисел и печатает 10."},{code:`print("Game")
print("Over")`,options:["GameOver","Game Over","Game и Over на двух строках","Ничего не выведет"],correct:2,explanation:"Каждый вызов print() по умолчанию переходит на новую строку."},{code:'print("10 + 20")',options:["30","10 + 20","1020","Ошибка"],correct:1,explanation:"Всё, что заключено в кавычки, считается текстом и выводится в точности так, как написано."}],cheatsheet:['print("текст") — вывести текст на экран (кавычки обязательны)',"print(123) — вывести число (кавычки не нужны)","print(5 + 2) — посчитает пример и выведет результат (7)","Все команды пишем маленькими буквами: print, а не Print"]},exercise:{task:`Напишите программу, которая выводит в консоль ровно две строки:
Первая строка: Привет, Python!
Вторая строка: Я начинаю программировать`,requirements:["Использовать вызов функции print()","Вывести первую строку: 'Привет, Python!'","Вывести вторую строку: 'Я начинаю программировать'"],starterCode:`# Напиши свой код здесь:
`,hint:"Используй два отдельных вызова команды print(...). Обрати внимание на восклицательный знак в конце первой фразы.",solution:`print("Привет, Python!")
print("Я начинаю программировать")`,tests:[{inputs:[],expected:`Привет, Python!
Я начинаю программировать`}],codeCheck:o=>(o.match(/\bprint\s*\(/g)||[]).length<2?{passed:!1,message:"Используй два отдельных вызова функции print() для вывода каждой строки."}:null,validate:(o,m,h)=>{if(!o.includes("print"))return{passed:!1,message:"В коде не найдена функция print().",hint:'Используй команду print("...") для вывода текста.'};const d=m.toLowerCase(),H=d.includes("привет, python")||d.includes("привет, python!"),G=d.includes("начинаю программировать");return H&&G?{passed:!0,message:"Отлично! Твоя первая программа на Python успешно вывела текст в консоль! 🎉"}:{passed:!1,message:"Вывод не полностью совпадает с заданием.",hint:"Проверь точный текст: 'Привет, Python!' и 'Я начинаю программировать'."}}}},{id:"print_arguments",moduleId:"module_intro",title:"Несколько аргументов в print()",icon:"Layers",shortDesc:"Вывод нескольких значений через запятую и разделители",theory:{summary:`В игре ты можешь собирать инвентарь: меч, щит и зелье. В функцию print() тоже можно положить сразу несколько предметов через запятую.

Всё, что мы передаем в круглые скобки команды print, программисты называют аргументами. Например, print("Счёт:", 100) выведет оба значения.

Заметил, что между словами сам собой появился пробел? Это работает стандартный разделитель sep. Слово «sep» — это сокращение от английского separator (разделитель).

Мы можем изменить этот разделитель на любой другой символ. Например, если написать sep="-", слова склеятся через дефис, а sep="" склеит их совсем без пробела.

А параметр end отвечает за то, что происходит в самом конце строки. Слово «end» переводится как «конец». По умолчанию после каждого print курсор прыгает на новую строку. Но если написать end=" ", следующий print напечатает свой текст на той же самой строке!`,keyRule:'Запятая внутри скобок разделяет разные аргументы: print("Счёт:", 100). sep меняет разделитель, end меняет конец строки.',sections:[{heading:"Печать нескольких значений",text:"Когда нужно объединить текст и числа, просто перечислите их через запятую.",codeExample:{title:"Пример с несколькими аргументами",code:`print("Мой возраст:", 14, "года")
print("Координаты:", 10, 20)`,explanation:"Python сам подставит пробелы между аргументами при выводе."}}],steps:[{code:'print("Уровень", 5, "Победа!")',output:"Уровень 5 Победа!",explanation:"Через запятую можно передавать сколько угодно аргументов. По умолчанию Python ставит между ними ровно один пробел."},{code:'print("12", "45", "00", sep=":")',output:"12:45:00",explanation:'Параметр sep=":" заменил обычные пробелы на двоеточия. Так удобно выводить время или даты.'},{code:`print("Загрузка", end="... ")
print("Готово!")`,output:"Загрузка... Готово!",explanation:'Благодаря end="... " первая строчка не перевела курсор вниз. Слово "Готово!" напечаталось сразу следом за загрузкой.'}],mistakes:[{wrongCode:'print(1, 2 sep=", ")',error:"SyntaxError: bad input on line 1",fixedCode:'print(1, 2, sep=", ")',explanation:"Все параметры внутри print() должны обязательно разделяться запятыми."},{wrongCode:"print(1, 2, sep=)",error:"SyntaxError: bad input on line 1",fixedCode:'print(1, 2, sep=" ")',explanation:"После знака равно нужно обязательно указать строку-разделитель в кавычках."},{wrongCode:'print("Привет", end=" )',error:"SyntaxError: bad token T_OP on line 1",fixedCode:'print("Привет", end=" ")',explanation:"Значение end — это тоже строка, кавычки должны быть открыты и закрыты."},{wrongCode:'print(1, 2, separater="-")',error:"TypeError: print() got an unexpected keyword argument 'separater' on line 1",fixedCode:'print(1, 2, sep="-")',explanation:"Параметр называется только sep, а не separator или separater."}],quiz:[{code:'print("A", "B", "C", sep="-")',options:["A B C","A-B-C","ABC","A - B - C"],correct:1,explanation:'Параметр sep="-" вставляет символ дефиса между каждым переданным аргументом.'},{code:`print("1", "2", end="")
print("3")`,options:["1 2\\n3","1 2 3","1 23","123"],correct:2,explanation:'Между "1" и "2" стоит пробел по умолчанию, а в конце первой строки перехода нет. Поэтому "3" приклеилась сразу к "2": получается 1 23.'},{code:`print("A", "B", sep="", end="!")
print("C")`,options:["AB!C","A B ! C","AB!\\nC","Ошибка"],correct:0,explanation:'sep="" убирает пробел между A и B, end="!" ставит восклицательный знак без переноса строки, и следом печатается C.'}],cheatsheet:["print(a, b, c) — выводит значения через пробел",'sep="..." — меняет разделитель между элементами (по умолчанию пробел)','end="..." — меняет символ в конце строки (по умолчанию перенос строки \\n)','sep="" — склеивает слова вплотную без пробелов']},exercise:{task:`Выведите в одну строку через запятую в print(): название языка, пробел не нужен вручную — передайте строку "Python" и версию числом 3.
Результат должен быть: Python 3`,requirements:["Использовать один вызов print с двумя аргументами через запятую",'Первый аргумент — строка "Python", второй — число 3'],starterCode:`# Выведи: Python 3 с помощью одного print()
`,hint:'Напиши: print("Python", 3)',solution:'print("Python", 3)',tests:[{inputs:[],expected:"Python 3"}],codeCheck:(o,m)=>/["']Python\s+3["']/.test(m)?{passed:!1,message:'Нужно вывести строку "Python" и число 3 как отдельные аргументы через запятую: print("Python", 3)',hint:'Не пиши всю фразу "Python 3" в одних кавычках.'}:!/,/.test(o)||!/\b3\b/.test(o)?{passed:!1,message:"Передай строку и число 3 через запятую внутри одного print()."}:null,validate:(o,m)=>m.trim()==="Python 3"?{passed:!0,message:"Превосходно! Ты освоил передачу нескольких аргументов в print! 🚀"}:{passed:!1,message:"Ожидался вывод: 'Python 3'",hint:'Передай в print два аргумента: строку "Python" и число 3.'}}}]},{id:"module_variables",title:"2. Переменные в Python",description:"Хранение данных, имена переменных, перезапись значений и типы",icon:"Box",color:"#B0700C",lessons:[{id:"variables_intro",moduleId:"module_variables",title:"Что такое переменная и как её создать",icon:"Box",shortDesc:"Создаем переменные, сохраняем в них числа и текст",theory:{summary:`В играх вроде Minecraft или Brawl Stars у твоего персонажа есть количество монет, здоровья или очков опыта. Компьютер должен где-то хранить эти данные, пока ты играешь.

В программировании для хранения данных придумали переменные. Переменная — это подписанная коробочка в памяти компьютера. На коробочке написано имя (ярлык), а внутри лежит значение.

Чтобы положить что-то в коробочку, используют знак равно =. В Python этот знак называется знаком присваивания.

Важное правило: слева от знака = всегда пишется имя коробочки, а справа — то, что мы в неё кладём. Например, coins = 100 создаёт коробочку coins и кладёт туда число 100.

Когда ты пишешь print(coins), компьютер открывает коробочку с этим именем, смотрит, что внутри, и выводит на экран число 100. Имя переменной пишется без кавычек! Если написать "coins" в кавычках, напечатается просто слово coins.`,keyRule:"Переменная — это коробочка с именем. Слева пишем имя, справа значение: coins = 100. Имя переменной выводим без кавычек.",sections:[{heading:"Как создать переменную",text:"В Python не нужно специально объявлять тип переменной. Компьютер сам поймёт, число это или строка.",codeExample:{title:"Создание переменных и вывод",code:`hero_name = "Рыцарь"
health = 100

print("Имя героя:", hero_name)
print("Здоровье:", health)`,explanation:"Мы создали две переменные: hero_name со строковым значением и health с числом 100."}},{heading:"Правила для имён переменных",text:"Имя переменной должно начинаться с буквы или знака подчеркивания '_'. Не может начинаться с цифры. Не должно содержать пробелов (вместо пробела используем подчеркивание: total_score)."}],steps:[{code:`score = 50
print(score)`,output:"50",explanation:"Создали переменную score со значением 50 и напечатали её содержимое на экране."},{code:`hero = "Рыцарь"
hp = 100
print(hero, "имеет здоровье:", hp)`,output:"Рыцарь имеет здоровье: 100",explanation:"В переменные можно сохранять и текст, и числа. Затем их можно выводить вместе через запятую."},{code:`coins = 20
bonus = 5
total = coins + bonus
print("Всего монет:", total)`,output:"Всего монет: 25",explanation:"Python умеет складывать значения из двух коробочек и сохранять результат в третью переменную total."}],mistakes:[{wrongCode:"10 = x",error:"SyntaxError: can't assign to literal on line 1",fixedCode:"x = 10",explanation:"Слева от знака = всегда должно стоять имя переменной, а значение — справа."},{wrongCode:`score = 100
print(Score)`,error:"NameError: name 'Score' is not defined on line 2",fixedCode:`score = 100
print(score)`,explanation:"В Python заглавные и строчные буквы различаются. score и Score — это две разные переменные."},{wrongCode:`level = 5
print("level")`,error:"Логическая ошибка: программа напечатает слово level вместо числа 5",fixedCode:`level = 5
print(level)`,explanation:"В кавычках Python видит обычный текст. Чтобы получить значение переменной, пиши её имя без кавычек."},{wrongCode:'1player = "Alex"',error:"SyntaxError: bad input on line 1",fixedCode:'player1 = "Alex"',explanation:"Имя переменной не может начинаться с цифры. Используй буквы или ставь цифру в конец."}],quiz:[{code:`gold = 25
print("gold")`,options:["25","gold","Ошибка","Ничего не выведет"],correct:1,explanation:'"gold" в кавычках — это просто текст, поэтому напечатается само слово gold.'},{code:`a = 4
b = 6
print(a + b)`,options:["a + b","46","10","4 + 6"],correct:2,explanation:"Python берёт 4 из коробки a, 6 из коробки b, складывает их и получает 10."},{code:`x = 7
print(x + y)`,options:["7y","7","None","NameError: name 'y' is not defined"],correct:3,explanation:"Переменной y ещё не существует в программе, поэтому Python выдаст ошибку NameError."}],cheatsheet:["имя = значение — положить значение в переменную","Слева от = всегда пишется имя, справа — значение","print(score) — выведет то, что лежит в переменной (без кавычек)","Имя переменной не может начинаться с цифры"]},exercise:{task:`1. Создайте переменную с именем city и присвойте ей название вашего любимого города (например, "Москва" или любой другой).
2. Создайте переменную temperature и присвойте ей число 25.
3. С помощью print() выведите эти переменные так, чтобы в консоли получилось:
Город: Москва, Температура: 25`,requirements:["Создать переменную city со строковым значением","Создать переменную temperature с числовым значением","Вывести с помощью print фразу с этими переменными"],starterCode:`# 1. Создай переменную city

# 2. Создай переменную temperature

# 3. Выведи результат через print
`,hint:'Создай city = "Москва", temperature = 25 и напиши: print("Город:", city, ", Температура:", temperature) или используй f-строку.',solution:`city = "Москва"
temperature = 25
print(f"Город: {city}, Температура: {temperature}")`,tests:[{inputs:[],expected:"Город: Москва, Температура: 25"}],codeCheck:o=>/\bcity\s*=/.test(o)?/\btemperature\s*=/.test(o)?null:{passed:!1,message:"Создай переменную temperature: temperature = 25."}:{passed:!1,message:'Создай переменную city: city = "Москва".'},validate:(o,m)=>{const h=/\bcity\s*=/.test(o),d=/\btemperature\s*=/.test(o);return h?d?!m.toLowerCase().includes("город")||!m.toLowerCase().includes("температура")?{passed:!1,message:"Вывод программы должен содержать слова 'Город' и 'Температура'.",hint:"Проверь вызов функции print()."}:{passed:!0,message:"Отлично! Ты успешно создал переменные и вывел их значения! 🎉"}:{passed:!1,message:"Не найдена переменная temperature.",hint:"Объяви переменную: temperature = 25"}:{passed:!1,message:"Не найдена переменная city.",hint:'Объяви переменную: city = "Название"'}}}},{id:"variables_reassign",moduleId:"module_variables",title:"Перезапись значений и изменение переменных",icon:"RotateCcw",shortDesc:"Как менять значение переменной по ходу программы",theory:{summary:`Вспомни телефонные заметки или черновик в тетради. Ты можешь стереть старую запись ластиком и написать на её месте новую.

Переменная называется «переменной» именно потому, что её значение может меняться в процессе работы программы.

В одной коробочке не могут одновременно лежать два значения. Когда ты кладёшь в переменную новое значение, старое значение исчезает навсегда.

Компьютер читает программу строго сверху вниз, строка за строкой, как ты читаешь книгу. Если на 1-й строчке было x = 5, а на 2-й строчке x = 10, то с этого момента x равен 10.

Мы даже можем изменять переменную на основе её прошлого значения! Например, строка coins = coins + 1 означает: «возьми старое количество монет, добавь 1 и положи обратно в ту же коробку».`,keyRule:"Переменная хранит только самое последнее значение. Новое присваивание стирает старое значение.",sections:[{heading:"Перезапись значения",text:"Достаточно повторно использовать знак '=', чтобы обновить переменную.",codeExample:{title:"Пример изменения переменной",code:`coins = 10
print("Было монет:", coins)

coins = 25
print("Стало монет:", coins)`,explanation:"Сначала coins хранила 10, а затем получила 25."}},{heading:"Увеличение на значение: += ",text:"Конструкция coins = coins + 5 или сокращенно coins += 5 прибавляет число к текущему значению переменной.",codeExample:{title:"Операторы += и -=",code:`score = 0
score += 10  # score = score + 10
score -= 2   # score = score - 2
print(score) # 8`,explanation:"Удобный способ обновлять счетчики."}}],steps:[{code:`level = 1
level = 2
print(level)`,output:"2",explanation:"Сначала положили 1, затем заменили на 2. Напечатается последнее актуальное значение — 2."},{code:`score = 100
print("Счёт в начале:", score)
score = score + 50
print("Счёт после бонуса:", score)`,output:`Счёт в начале: 100
Счёт после бонуса: 150`,explanation:"Строка score = score + 50 увеличила значение на 50. Новое значение стало 150."},{code:`a = 5
b = a
a = 10
print("a =", a)
print("b =", b)`,output:`a = 10
b = 5`,explanation:"Когда мы написали b = a, в переменную b скопировалось число 5. Последующее изменение a на b уже никак не влияет."}],mistakes:[{wrongCode:`hp = 100
hp - 20
print(hp)`,error:"Логическая ошибка: hp останется 100, потому что вычитание не сохранено",fixedCode:`hp = 100
hp = hp - 20
print(hp)`,explanation:"Чтобы значение переменной изменилось, нужно обязательно использовать знак присваивания =."},{wrongCode:`score = score + 10
print(score)`,error:"NameError: name 'score' is not defined on line 1",fixedCode:`score = 0
score = score + 10
print(score)`,explanation:"Нельзя взять значение из пустой коробки. Сначала нужно задать начальное значение, например score = 0."},{wrongCode:`x = 5
x + 1 = x`,error:"SyntaxError: can't assign to operator on line 2",fixedCode:`x = 5
x = x + 1`,explanation:"Слева от знака = всегда должно быть только одно имя переменной."}],quiz:[{code:`x = 10
x = 20
x = 30
print(x)`,options:["10","20","30","60"],correct:2,explanation:"Каждая новая строчка перезаписывает старое значение. В конце в переменной осталось 30."},{code:`a = 2
a = a * 3
print(a)`,options:["2","6","23","a * 3"],correct:1,explanation:"Python умножает старое значение (2) на 3 и сохраняет 6 обратно в a."},{code:`c = 5
d = c
c = 20
print(d)`,options:["5","20","c","Ошибка"],correct:0,explanation:"В d было скопировано исходное число 5. Последующее изменение c не меняет d."}],cheatsheet:["x = 10 — создали или перезаписали переменную","x = x + 1 — увеличили значение переменной на 1","Программа читается сверху вниз: работает самое свежее присваивание","В переменной всегда хранится только одно последнее значение"]},exercise:{task:`1. Создайте переменную balance со значением 100.
2. Увеличьте balance на 50 (используя balance += 50 или balance = balance + 50).
3. Выведите значение переменной balance в консоль.`,requirements:["Создать переменную balance = 100","Увеличить balance на 50","Вывести balance в консоль (должно быть 150)"],starterCode:`balance = 100
# Увеличь balance на 50:

# Выведи balance:
`,hint:"Напиши balance += 50, затем print(balance).",solution:`balance = 100
balance += 50
print(balance)`,tests:[{inputs:[],expected:"150"}],codeCheck:o=>/\bbalance\s*(\+=|=.*balance)/.test(o)?/\bprint\s*\(\s*balance\s*\)/.test(o)?null:{passed:!1,message:"Выведи значение balance через print(balance)."}:{passed:!1,message:"Нужно изменить значение переменной balance (например balance += 50)."},validate:(o,m)=>m.trim()==="150"?{passed:!0,message:"Прекрасно! Ты понял, как изменять значения переменных! 💰"}:{passed:!1,message:"Ожидалось, что в консоли появится число 150.",hint:"Проверь: сначала balance = 100, затем добавь 50 и напечатай print(balance)."}}},{id:"data_types",moduleId:"module_variables",title:"Основные типы данных: int, float, str, bool",icon:"Cpu",shortDesc:"Целые числа, дробные числа, строки и логические значения",theory:{summary:`В реальной жизни ты не станешь класть суп в рюкзак, а учебники — в кастрюлю. У каждой вещи есть своё назначение. В Python у данных тоже есть разные типы.

Первый тип — целые числа (называются int, от integer). Это обычные числа без дробей: 5 яблок, 3 жизни, 10 монет.

Второй тип — дробные числа с точкой (называются float). Это числа с остатком: температура 36.6, цена 99.99. Внимание: в Python в дробях ставится точка, а не запятая!

Третий тип — строки (называются str, от string). Это любой текст в кавычках: "Привет", "Игрок_1", "123". Даже цифры в кавычках становятся текстом.

Четвёртый тип — логический (называется bool). В нём есть всего два значения: True (истина/да) и False (ложь/нет). Это как переключатель света: включено или выключено. Проверить тип любого значения можно функцией type().`,keyRule:'int — целые числа (5), float — дроби с точкой (3.14), str — текст в кавычках ("Привет"), bool — True или False.',sections:[{heading:"Четыре главных базовых типа",text:`1. int — целые числа (42, -5, 0)
2. float — вещественные (дробные) числа (3.14, 0.5)
3. str — текст в кавычках ("Привет")
4. bool — логические True (истина) или False (ложь).`,codeExample:{title:"Проверка типов",code:`a = 100
b = 3.14
c = "Python"
d = True

print(type(a))
print(type(b))`,explanation:"type(a) вернет <class 'int'>, а type(b) — <class 'float'>."}}],steps:[{code:`age = 11
price = 19.5
name = "Аня"
is_online = True
print(age, price, name, is_online)`,output:"11 19.5 Аня True",explanation:"Создали 4 переменные разных типов: целое число, дробь, строка и логическое значение."},{code:`print(type(42))
print(type(3.14))
print(type("Python"))`,output:`<class 'int'>
<class 'float'>
<class 'str'>`,explanation:"Функция type() показывает, к какому типу данных относится значение."},{code:`a = 10 + 5
b = "10" + "5"
print("Числа:", a)
print("Строки:", b)`,output:`Числа: 15
Строки: 105`,explanation:'Числа складываются математически (15), а строки склеиваются буква к букве ("105"). Поэтому тип данных очень важен!'}],mistakes:[{wrongCode:`age = 11
print("Мне " + age + " лет")`,error:"TypeError: cannot concatenate 'str' and 'int' objects on line 2",fixedCode:`age = 11
print("Мне " + str(age) + " лет")`,explanation:"Нельзя складывать текст и число напрямую. Сначала нужно превратить число в строку через str()."},{wrongCode:`score = 10
print(score + "5")`,error:"TypeError: unsupported operand type(s) for +: 'int' and 'str' on line 2",fixedCode:`score = 10
print(score + 5)`,explanation:'"5" в кавычках — это строка, а не число. Убери кавычки, чтобы сложить числа.'},{wrongCode:`pi = 3,14
print(type(pi))`,error:"Логическая ошибка: Python создаст кортеж (tuple) вместо одной дроби",fixedCode:`pi = 3.14
print(type(pi))`,explanation:"В Python дробная часть отделяется точкой: 3.14, а не запятой."},{wrongCode:'print(int("привет"))',error:"ValueError: invalid literal for int() with base 10: 'привет' on line 1",fixedCode:'print(int("123"))',explanation:"Функция int() может превратить в число только строку, внутри которой записаны цифры."}],quiz:[{code:'print("3" + "4")',options:["7","34",'"34"',"Ошибка"],correct:1,explanation:'Сложение двух строк склеивает их вместе, получается "34".'},{code:`x = 5.0
print(type(x))`,options:["<class 'int'>","<class 'float'>","<class 'number'>","<class 'str'>"],correct:1,explanation:"Даже если после точки стоит ноль, любое число с точкой относится к типу float."},{code:`a = 10
b = "2"
print(a * b)`,options:["20","2222222222 (десять двоек)","Ошибка","None"],correct:1,explanation:"Умножение числа на строку в Python повторяет строку указанное количество раз."}],cheatsheet:["int — целое число: 10, -3, 0","float — дробное число через точку: 2.5, 0.1",'str — строка в кавычках: "текст"',"bool — True или False (пишутся с большой буквы)","type(x) — узнать тип данных значения x"]},exercise:{task:`Создайте три переменные:
- age со значением целого числа 16
- height со значением дробного числа 1.75
- is_student со значением True (логический тип)
Выведите их типы через print(type(age)), print(type(height)), print(type(is_student)).`,requirements:["Создать age = 16","Создать height = 1.75","Создать is_student = True","Вывести тип каждого значения"],starterCode:`# Создай переменные и выведи их типы:
`,hint:"Не забудь, что в дробных числах используется точка, а True пишется с большой буквы.",solution:`age = 16
height = 1.75
is_student = True
print(type(age))
print(type(height))
print(type(is_student))`,tests:[{inputs:[],expected:`<class 'int'>
<class 'float'>
<class 'bool'>`}],codeCheck:o=>/\btype\s*\(/.test(o)?!/\bage\b/.test(o)||!/\bheight\b/.test(o)||!/\bis_student\b/.test(o)?{passed:!1,message:"Создай переменные age, height и is_student."}:null:{passed:!1,message:"Используй функцию type(...) для вывода типов."},validate:(o,m)=>{const h=m.includes("int"),d=m.includes("float"),H=m.includes("bool");return h&&d&&H?{passed:!0,message:"Отлично! Ты познакомился с 4 главными типами данных Python! 🎯"}:{passed:!1,message:"В выводе должны присутствовать типы int, float и bool.",hint:"Используй вызовы print(type(age)), print(type(height)), print(type(is_student))."}}}}]},{id:"module_io",title:"3. Ввод данных: функция input()",description:"Взаимодействие с пользователем, чтение с клавиатуры и приведение типов",icon:"Keyboard",color:"#0A7A50",lessons:[{id:"input_strings",moduleId:"module_io",title:"Функция input() — ввод строки",icon:"Keyboard",shortDesc:"Спрашиваем имя у пользователя и отвечаем ему",theory:{summary:"Функция input() останавливает выполнение программы и ждёт, пока пользователь напечатает текст в консоли и нажмет Enter.",keyRule:"input() ВСЕГДА возвращает строку (str)! Даже если пользователь ввёл цифры, они будут строкой.",sections:[{heading:"Как использовать input()",text:"В скобках input() можно передать подсказку — текст вопроса, который увидит пользователь перед вводом.",codeExample:{title:"Пример диалога",code:`name = input("Как тебя зовут? ")
print("Привет,", name, "приятно познакомиться!")`,explanation:"Значение, которое наберет пользователь, сохранится в переменной name."}}],tips:["Добавляйте пробел в конце текста подсказки, чтобы вводимый текст не прилипал к вопросу."]},exercise:{task:`Напишите программу, которая с помощью input() спрашивает: 'Твое имя: ', а затем выводит строку:
Здравствуй, <имя>!
(например, если ввести 'Анна', должно вывести 'Здравствуй, Анна!')`,requirements:["Использовать функцию input() для сохранения имени","Вывести приветствие 'Здравствуй, <имя>!'"],starterCode:`name = input("Твое имя: ")
# Выведи приветствие:
`,hint:'Используй f-строку: print(f"Здравствуй, {name}!") или print("Здравствуй,", name + "!")',solution:`name = input("Твое имя: ")
print(f"Здравствуй, {name}!")`,tests:[{inputs:["Иван"],expected:"Здравствуй, Иван!"},{inputs:["Алиса"],expected:"Здравствуй, Алиса!"}],codeCheck:o=>/\binput\s*\(/.test(o)?null:{passed:!1,message:"Используй функцию input() для ввода имени с клавиатуры."},validate:(o,m)=>o.includes("input")?m.toLowerCase().includes("здравствуй")?{passed:!0,message:"Великолепно! Ты научился запрашивать данные у пользователя! 🤝"}:{passed:!1,message:"Вывод должен содержать слово 'Здравствуй, ...!'."}:{passed:!1,message:"В коде должна использоваться функция input()."}}},{id:"input_numbers",moduleId:"module_io",title:"Ввод чисел: int() и float()",icon:"Hash",shortDesc:"Превращаем введенный текст в настоящие числа для расчетов",theory:{summary:"Так как input() возвращает строку, операция '5' + '5' даст строку '55', а не число 10! Чтобы производить математические вычисления, введенную строку нужно обернуть в int() или float().",keyRule:"Для целых чисел используем int(input()), для дробных — float(input()).",sections:[{heading:"Сравнение: без int() и с int()",text:"Посмотрите, какая разница между сложением строк и сложением чисел:",codeExample:{title:"Оборачивание input в int",code:`# Неправильно для математики:
a = input()  # "5"
b = input()  # "3"
print(a + b) # Напечатает "53"

# Правильно:
x = int(input())
y = int(input())
print(x + y) # Напечатает 8`,explanation:"int() превращает текст из цифр в настоящее математическое число."}}]},exercise:{task:`Напишите программу, которая запрашивает число с помощью n = int(input()), а затем выводит его квадрат (число, умноженное само на себя).
Например, если ввели 7, программа выводит: 49.`,requirements:["Преобразовать ввод через int(input())","Вычислить и вывести квадрат числа"],starterCode:`num = int(input("Введите число: "))
# Посчитай квадрат и выведи его:
`,hint:"Умножь num * num или используй степень num ** 2, затем вызови print.",solution:`num = int(input("Введите число: "))
print(num ** 2)`,tests:[{inputs:["5"],expected:"25"},{inputs:["8"],expected:"64"},{inputs:["12"],expected:"144"}],codeCheck:o=>!/\bint\s*\(/.test(o)||!/\binput\s*\(/.test(o)?{passed:!1,message:"Преобразуй ввод в целое число: int(input(...))."}:/\*\*|pow|\*/.test(o)?null:{passed:!1,message:"Вычисли квадрат числа с помощью ** 2 или * num."},validate:(o,m)=>o.includes("int")?{passed:!0,message:"Отлично! Теперь ты умеешь считывать числа и производить с ними вычисления! 🧮"}:{passed:!1,message:"Не забудь использовать int() для превращения ввода в число."}}}]},{id:"module_math",title:"4. Арифметика и математические действия",description:"Сложение, вычитание, умножение, деление, целочисленное деление, остаток от деления и степень",icon:"Calculator",color:"#C4581D",lessons:[{id:"arithmetic_operators",moduleId:"module_math",title:"Арифметические операторы: +, -, *, /, //, %, **",icon:"Calculator",shortDesc:"Все математические знаки Python и их особенности",theory:{summary:"Python поддерживает все классические математические операции, а также деление нацело и остаток.",keyRule:"Обычное деление '/' ВСЕГДА возвращает float (даже 4 / 2 вернет 2.0). Деление нацело '//' отбрасывает дробь. Процент '%' находит остаток.",sections:[{heading:"Сводка операторов",text:`+ сложение (5 + 2 = 7)
- вычитание (5 - 2 = 3)
* умножение (5 * 2 = 10)
/ деление (5 / 2 = 2.5)
// деление нацело (7 // 3 = 2)
% остаток от деления (7 % 3 = 1)
** возведение в степень (2 ** 3 = 8).`,codeExample:{title:"Работа со временем через // и %",code:`total_seconds = 130
minutes = total_seconds // 60
seconds = total_seconds % 60

print("Минут:", minutes, "Секунд:", seconds)`,explanation:"130 секунд — это 2 минуты (130 // 60) и 10 секунд (130 % 60)."}}],tips:["Приоритет операций такой же, как в математике: скобки () имеют высший приоритет, затем **, затем *, /, //, %, затем +, -."]},exercise:{task:`Даны переменные a = 17 и b = 5.
Вычислите и напечатайте:
1. Результат деления нацело a // b
2. Результат остатка от деления a % b
Выведите оба результата через запятую в одном print().`,requirements:["Использовать a = 17 и b = 5","Вычислить a // b (будет 3)","Вычислить a % b (будет 2)","Вывести: 3 2"],starterCode:`a = 17
b = 5
# Выведи результат a // b и a % b:
`,hint:"Напиши: print(a // b, a % b)",solution:`a = 17
b = 5
print(a // b, a % b)`,tests:[{inputs:[],expected:"3 2"}],codeCheck:o=>/\/\//.test(o)?/%/.test(o)?null:{passed:!1,message:"Используй оператор остатка от деления %."}:{passed:!1,message:"Используй оператор целочисленного деления //."},validate:(o,m)=>m.trim()==="3 2"||m.includes("3")&&m.includes("2")?{passed:!0,message:"Превосходно! Ты освоил целочисленное деление и нахождение остатка! 📐"}:{passed:!1,message:"Ожидался вывод: 3 2",hint:"Проверь: 17 // 5 дает 3, а 17 % 5 дает 2."}}}]},{id:"module_conditions",title:"5. Условия и логика: if, elif, else",description:"Ветвление программ, проверка условий, операторы сравнения и логические связки",icon:"GitBranch",color:"#5636E0",lessons:[{id:"if_else_intro",moduleId:"module_conditions",title:"Условный оператор if и блок else",icon:"GitBranch",shortDesc:"Принятие решений в коде в зависимости от условия",theory:{summary:"Конструкция if позволяет выполнять блок кода только тогда, когда выполняется определённое условие (оно истинно — True). Если условие ложно (False), срабатывает блок else (иначе).",keyRule:"В конце строки с if и else ВСЕГДА ставится двоеточие ':', а команды внутри блока пишутся С ОТСТУПОМ в 4 пробела!",sections:[{heading:"Синтаксис и отступы",text:"Отступы в Python критически важны. По отступу Python понимает, какие строки принадлежат к условию.",codeExample:{title:"Проверка возраста",code:`age = 18

if age >= 18:
    print("Доступ разрешен")
else:
    print("Доступ ограничен")`,explanation:"Так как age равно 18, условие age >= 18 истинно, и напечатается 'Доступ разрешен'."}},{heading:"Операторы сравнения",text:`== равно (внимание: два знака равно!)
!= не равно
> больше
< меньше
>= больше или равно
<= меньше или равно.`}],tips:["Не путайте '=' (присваивание) и '==' (проверка на равенство). В условии всегда '=='!"],commonMistakes:["Забыть двоеточие ':' после if или else.","Забыть сделать отступ внутри блока."]},exercise:{task:`Напишите программу, которая проверяет переменную score = 85.
Если score >= 50, программа должна выводить: Экзамен сдан!
Иначе (в блоке else) программа должна выводить: Нужно пересдать.`,requirements:["Задать переменную score = 85","Использовать конструкцию if score >= 50: с отступом","Использовать блок else: с отступом"],starterCode:`score = 85

# Напиши проверку if / else:
`,hint:`if score >= 50:
    print("Экзамен сдан!")
else:
    print("Нужно пересдать.")`,solution:`score = 85
if score >= 50:
    print("Экзамен сдан!")
else:
    print("Нужно пересдать.")`,tests:[{inputs:[],expected:"Экзамен сдан!"}],codeCheck:o=>/\bif\b/.test(o)?/\belse\s*:/.test(o)?/>=|>/.test(o)?null:{passed:!1,message:"Проверь условие score >= 50."}:{passed:!1,message:"В коде должен присутствовать блок else:."}:{passed:!1,message:"В коде должен быть условный оператор if."},validate:(o,m)=>!o.includes("if")||!o.includes("else")?{passed:!1,message:"Не найдена конструкция if и else."}:m.includes("Экзамен сдан")?{passed:!0,message:"Отлично! Условие сработало верно! 🎉"}:{passed:!1,message:"Вывод должен быть: 'Экзамен сдан!'"}}},{id:"elif_ladder",moduleId:"module_conditions",title:"Каскадные условия: elif",icon:"ListFilter",shortDesc:"Проверка нескольких условий по очереди",theory:{summary:"Когда вариантов больше двух, используется elif (сокращение от else if — 'иначе если'). Можно ставить сколько угодно блоков elif подряд.",keyRule:"Python проверяет условия сверху вниз. Как только найдено первое верное условие, его блок выполняется, а все остальные пропускаются.",sections:[{heading:"Пример шкалы оценок",text:"Разбор баллов на словесную оценку:",codeExample:{title:"Шкала баллов",code:`points = 75

if points >= 90:
    print("Отлично (5)")
elif points >= 75:
    print("Хорошо (4)")
elif points >= 50:
    print("Удовлетворительно (3)")
else:
    print("Неудовлетворительно (2)")`,explanation:"Так как points = 75, сработает первый подходящий блок elif points >= 75."}}]},exercise:{task:`Напишите программу, которая по значению переменной grade (от 1 до 5) выводит слово:
Если grade == 5: 'Отлично'
Если grade == 4: 'Хорошо'
Иначе: 'Нужно подучить'
Проверьте для grade = 5.`,requirements:["Использовать if и elif или else","Для grade = 5 вывести 'Отлично'"],starterCode:`grade = 5

# Напиши проверку:
`,hint:`if grade == 5:
    print("Отлично")
elif grade == 4:
    print("Хорошо")
else:
    print("Нужно подучить")`,solution:`grade = 5
if grade == 5:
    print("Отлично")
elif grade == 4:
    print("Хорошо")
else:
    print("Нужно подучить")`,tests:[{inputs:[],expected:"Отлично"}],codeCheck:o=>/\bif\b/.test(o)?/\belif\b/.test(o)?/\belse\s*:/.test(o)?null:{passed:!1,message:"В коде должен присутствовать блок else:."}:{passed:!1,message:"В коде должен быть блок elif."}:{passed:!1,message:"В коде должен быть оператор if."},validate:(o,m)=>m.includes("Отлично")?{passed:!0,message:"Замечательно! Ты освоил разветвленные проверки с elif! 🌟"}:{passed:!1,message:"Ожидался вывод: 'Отлично'"}}}]},{id:"module_lists",title:"6. Списки (Lists)",description:"Коллекции элементов, квадратные скобки [], индексы с нуля и методы append, len, pop",icon:"ListOrdered",color:"#2F6FD0",lessons:[{id:"lists_basics",moduleId:"module_lists",title:"Создание списка и обращение по индексу",icon:"ListOrdered",shortDesc:"Храним несколько значений в одной переменной",theory:{summary:"Список (list) — это упорядоченная коллекция элементов в квадратных скобках []. Элементы перечисляются через запятую.",keyRule:"В программировании нумерация элементов (индексация) ВСЕГДА начинается с 0! Первый элемент имеет индекс [0], второй [1], третий [2].",sections:[{heading:"Индексы и доступ к элементам",text:"Чтобы достать нужный элемент из списка, пишем имя списка и в квадратных скобках номер индекса.",codeExample:{title:"Индексация элементов",code:`fruits = ["яблоко", "банан", "апельсин"]

print("Первый фрукт:", fruits[0]) # яблоко
print("Второй фрукт:", fruits[1]) # банан
print("Последний:", fruits[-1])   # апельсин (индекс -1 берет с конца!)`,explanation:"Индекс -1 — это удобный способ получить самый последний элемент списка."}}],tips:["Функция len(my_list) возвращает количество элементов в списке."]},exercise:{task:`1. Создайте список planets с четырьмя планетами: ["Меркурий", "Венера", "Земля", "Марс"].
2. С помощью print() выведите первую планету по индексу 0.
3. С помощью print() выведите последнюю планету по индексу -1.`,requirements:["Создать список planets с 4 названиями","Вывести planets[0]","Вывести planets[-1]"],starterCode:`# Создай список planets и выведи первый и последний элементы:
`,hint:`planets = ["Меркурий", "Венера", "Земля", "Марс"]
print(planets[0])
print(planets[-1])`,solution:`planets = ["Меркурий", "Венера", "Земля", "Марс"]
print(planets[0])
print(planets[-1])`,tests:[{inputs:[],expected:`Меркурий
Марс`}],codeCheck:o=>/\bplanets\s*=/.test(o)?/\bplanets\s*\[\s*0\s*\]/.test(o)?/\bplanets\s*\[\s*-1\s*\]/.test(o)?null:{passed:!1,message:"Получи последний элемент списка по индексу: planets[-1]."}:{passed:!1,message:"Получи первый элемент списка по индексу: planets[0]."}:{passed:!1,message:"Создай список planets."},validate:(o,m)=>{const h=m.includes("Меркурий"),d=m.includes("Марс");return h&&d?{passed:!0,message:"Отлично! Ты успешно получил доступ к элементам списка по индексам! 🪐"}:{passed:!1,message:"Вывод должен содержать 'Меркурий' и 'Марс'."}}}},{id:"lists_methods",moduleId:"module_lists",title:"Методы списков: append(), pop() и len()",icon:"PlusCircle",shortDesc:"Добавляем и удаляем элементы из списка",theory:{summary:"Списки можно изменять: добавлять в них новые элементы или удалять старые.",keyRule:"Метод .append(x) добавляет элемент x в конец списка. Метод .pop() удаляет последний элемент.",sections:[{heading:"Пример изменения списка",text:"Работа с инвентарем персонажа:",codeExample:{title:"Добавление и длина",code:`backpack = ["фонарик", "карта"]
backpack.append("компас") # Добавили компас

print("Вещей в рюкзаке:", len(backpack))
print("Список:", backpack)`,explanation:"len(backpack) вернет 3, так как теперь в списке три предмета."}}]},exercise:{task:`1. Создайте пустой список numbers = []
2. Добавьте в него числа 10, 20 и 30 с помощью трех вызовов метода numbers.append(...)
3. Напечатайте получившийся список через print(numbers).`,requirements:["Создать пустой список numbers = []","Использовать numbers.append() трижды","Вывести [10, 20, 30]"],starterCode:`numbers = []
# Добавь 10, 20, 30:

# Выведи numbers:
`,hint:`numbers.append(10)
numbers.append(20)
numbers.append(30)
print(numbers)`,solution:`numbers = []
numbers.append(10)
numbers.append(20)
numbers.append(30)
print(numbers)`,tests:[{inputs:[],expected:"[10, 20, 30]"}],codeCheck:o=>(o.match(/\bnumbers\.append\s*\(/g)||[]).length<3?{passed:!1,message:"Добавь элементы с помощью трех вызовов numbers.append(...)."}:/\bprint\s*\(\s*numbers\s*\)/.test(o)?null:{passed:!1,message:"Выведи список через print(numbers)."},validate:(o,m)=>m.includes("10")&&m.includes("20")&&m.includes("30")?{passed:!0,message:"Отлично! Список [10, 20, 30] успешно сформирован с помощью append! 🚀"}:{passed:!1,message:"Ожидался список [10, 20, 30]"}}}]},{id:"module_loops",title:"7. Циклы: for и while",description:"Многократное повторение действий, обход коллекций и генератор чисел range()",icon:"Repeat",color:"#B0700C",lessons:[{id:"for_range",moduleId:"module_loops",title:"Цикл for и функция range()",icon:"Repeat",shortDesc:"Повторяем действие заданное число раз",theory:{summary:"Цикл for используется, когда нужно повторить блок кода известное число раз или перебрать все элементы в списке.",keyRule:"range(n) генерирует числа от 0 до n-1 (ровно n повторений). Например, range(5) даст числа: 0, 1, 2, 3, 4.",sections:[{heading:"Синтаксис цикла for",text:"Каждый шаг цикла называется 'итерацией'.",codeExample:{title:"Повторение 5 раз",code:`for i in range(5):
    print("Шаг номер:", i)`,explanation:"Переменная i на каждом шаге автоматически принимает очередное число из диапазона."}},{heading:"Диапазон от и до: range(start, stop)",text:"range(1, 6) сгенерирует числа от 1 до 5 (правая граница не включается!)."}],tips:["Если нужно напечатать числа в одну строку, добавьте end=' ': print(i, end=' ')."]},exercise:{task:`С помощью цикла for и функции range() выведите числа от 1 до 5 включительно (каждое число на новой строке).
Вывод должен быть:
1
2
3
4
5`,requirements:["Использовать цикл for","Использовать range(1, 6)","Вывести числа от 1 до 5"],starterCode:`# Напиши цикл for для вывода чисел от 1 до 5:
`,hint:`for i in range(1, 6):
    print(i)`,solution:`for i in range(1, 6):
    print(i)`,tests:[{inputs:[],expected:`1
2
3
4
5`}],codeCheck:o=>/\bfor\b/.test(o)?/\brange\s*\(/.test(o)?null:{passed:!1,message:"Используй функцию range(1, 6)."}:{passed:!1,message:"Используй цикл for."},validate:(o,m,h)=>!o.includes("for")||!o.includes("range")?{passed:!1,message:"Используй цикл for и функцию range()."}:m.replace(/\s+/g," ").trim()==="1 2 3 4 5"||m.includes("1")&&m.includes("5")&&m.includes("3")?{passed:!0,message:"Превосходно! Ты освоил цикл for и range! 🔄"}:{passed:!1,message:"Ожидались числа 1, 2, 3, 4, 5."}}},{id:"while_loop",moduleId:"module_loops",title:"Цикл while (пока условие верно)",icon:"PlayCircle",shortDesc:"Повторение кода, пока выполняется условие",theory:{summary:"Цикл while работает до тех пор, пока его условие остаётся истинным (True). Как только условие становится ложным (False), цикл завершается.",keyRule:"Обязательно изменяйте переменную условия внутри цикла (например, count += 1), иначе цикл станет бесконечным и программа зависнет!",sections:[{heading:"Пример таймера",text:"Обратный отсчет:",codeExample:{title:"Отсчет с помощью while",code:`timer = 3
while timer > 0:
    print(timer)
    timer -= 1 # Уменьшаем на 1
print("Старт!")`,explanation:"Цикл выполнится для значений 3, 2, 1, затем timer станет 0, условие 0 > 0 станет ложным, и цикл закончится."}}]},exercise:{task:`Напишите цикл while, который выводит удвоенное число n, начиная с 1, пока n <= 16 (то есть: 1, 2, 4, 8, 16).
Внутри цикла умножайте n на 2: n *= 2.`,requirements:["Задать n = 1 перед циклом","Использовать while n <= 16:","Печатать print(n) и умножать n *= 2"],starterCode:`n = 1
while n <= 16:
    # Выведи n и умножь n на 2:
`,hint:`while n <= 16:
    print(n)
    n *= 2`,solution:`n = 1
while n <= 16:
    print(n)
    n *= 2`,tests:[{inputs:[],expected:`1
2
4
8
16`}],codeCheck:o=>/\bwhile\b/.test(o)?/\*=\s*2|\b=\s*n\s*\*\s*2/.test(o)?null:{passed:!1,message:"Умножай n на 2 внутри цикла: n *= 2."}:{passed:!1,message:"Используй цикл while."},validate:(o,m)=>o.includes("while")?m.includes("1")&&m.includes("2")&&m.includes("4")&&m.includes("16")?{passed:!0,message:"Отличная работа! Цикл while отработал безупречно! ⏱️"}:{passed:!1,message:"Ожидались числа: 1, 2, 4, 8, 16."}:{passed:!1,message:"В коде должен использоваться цикл while."}}}]},{id:"module_functions",title:"8. Функции: def и return",description:"Создание собственных переиспользуемых функций, параметры и возврат значений",icon:"Code2",color:"#0A7A50",lessons:[{id:"func_intro",moduleId:"module_functions",title:"Объявление функции через def",icon:"Code2",shortDesc:"Учимся объединять команды в именованную функцию",theory:{summary:"Функция — это обособленный блок кода, которому мы даем имя. Функцию можно вызывать многократно из разных мест программы.",keyRule:"Функция объявляется ключевым словом def, затем имя_функции(параметры):. Оператор return возвращает результат работы функции.",sections:[{heading:"Как создать и вызвать функцию",text:"Объявление функции не запускает её сразу — оно лишь учит компьютер новому действию. Чтобы код сработал, функцию нужно вызвать по имени со скобками.",codeExample:{title:"Функция сложения двух чисел",code:`def add(a, b):
    return a + b

result = add(10, 25)
print("Результат:", result) # 35`,explanation:"Параметры a и b принимают числа 10 и 25, а return возвращает их сумму 35."}}],tips:["Если функция ничего явно не возвращает через return, она автоматически возвращает значение None."]},exercise:{task:`1. Напишите функцию square(x), которая принимает одно число x и возвращает его квадрат (x * x или x ** 2).
2. Вызовите функцию для числа 6 и выведите результат через print(square(6)). В консоли должно появиться 36.`,requirements:["Объявить функцию def square(x):","Использовать return для возврата x * x","Вывести print(square(6)) (должно быть 36)"],starterCode:`# 1. Объяви функцию square(x):

# 2. Вызови её для числа 6 и выведи результат:
`,hint:`def square(x):
    return x * x

print(square(6))`,solution:`def square(x):
    return x * x

print(square(6))`,tests:[{inputs:[],expected:"36"}],codeCheck:o=>/\bdef\s+square\s*\(/.test(o)?/\breturn\b/.test(o)?null:{passed:!1,message:"Функция должна возвращать результат через return."}:{passed:!1,message:"Объяви функцию square: def square(x):"},testCode:`assert callable(square), "Функция square должна быть объявлена"
assert square(3) == 9, "square(3) должна возвращать 9"
assert square(10) == 100, "square(10) должна возвращать 100"`,validate:(o,m)=>!o.includes("def")||!o.includes("return")?{passed:!1,message:"Функция должна быть объявлена через def и возвращать значение через return."}:m.trim()==="36"||m.includes("36")?{passed:!0,message:"Великолепно! Ты создал свою первую функцию в Python! 🎯"}:{passed:!1,message:"Ожидался вывод: 36"}}}]},{id:"module_tkinter",title:"9. Графический интерфейс с Tkinter",description:"Создание оконных приложений (GUI): главное окно Tk(), надписи Label, кнопки Button, поля ввода Entry, Listbox и JSON",icon:"AppWindow",color:"#5636E0",lessons:wg}];function _g(o){for(const m of br)for(const h of m.lessons)if(h.id===o)return h;return null}function pc(){const o=[];for(const m of br)for(const h of m.lessons)o.push(h);return o}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Eg=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(m,h,d)=>d?d.toUpperCase():h.toLowerCase()),Ip=o=>{const m=Eg(o);return m.charAt(0).toUpperCase()+m.slice(1)},fh=(...o)=>o.filter((m,h,d)=>!!m&&m.trim()!==""&&d.indexOf(m)===h).join(" ").trim(),Ng=o=>{for(const m in o)if(m.startsWith("aria-")||m==="role"||m==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Sg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=le.forwardRef(({color:o="currentColor",size:m=24,strokeWidth:h=2,absoluteStrokeWidth:d,className:H="",children:G,iconNode:W,...z},$)=>le.createElement("svg",{ref:$,...Sg,width:m,height:m,stroke:o,strokeWidth:d?Number(h)*24/Number(m):h,className:fh("lucide",H),...!G&&!Ng(z)&&{"aria-hidden":"true"},...z},[...W.map(([re,Z])=>le.createElement(re,Z)),...Array.isArray(G)?G:[G]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=(o,m)=>{const h=le.forwardRef(({className:d,...H},G)=>le.createElement(Tg,{ref:G,iconNode:m,className:fh(`lucide-${kg(Ip(o))}`,`lucide-${o}`,d),...H}));return h.displayName=Ip(o),h};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]],mh=ye("app-window",Ag);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],xr=ye("arrow-left",jg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Pp=ye("arrow-right",Cg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],kr=ye("book-open",Dg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Og=ye("box",Mg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Bg=ye("calculator",zg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],qi=ye("check",Lg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Fg=ye("chevron-down",Rg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],qg=ye("circle-alert",Ug);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ha=ye("circle-check",Hg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Yg=ye("circle-play",Gg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],Qg=ye("circle-plus",Vg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ph=ye("circle-question-mark",Xg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],eh=ye("circle-x",Zg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],wl=ye("code-xml",Kg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Er=ye("copy",Jg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],uc=ye("corner-down-left",$g);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Ig=ye("cpu",Wg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],e1=ye("download",Pg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]],n1=ye("file-code",t1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],th=ye("file-text",l1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],hc=ye("folder-open",a1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],s1=ye("git-branch",i1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],o1=ye("hash",r1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],c1=ye("info",u1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],f1=ye("keyboard",d1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],p1=ye("layers",m1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],x1=ye("lightbulb",h1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M9 19h6",key:"456am0"}]],y1=ye("list-filter",g1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]],v1=ye("list-ordered",b1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],_1=ye("mail",w1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],E1=ye("message-square",k1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]],S1=ye("mouse-pointer-click",N1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],A1=ye("music",T1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],C1=ye("package",j1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],M1=ye("panels-top-left",D1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Hi=ye("play",O1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],nh=ye("plus",z1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],L1=ye("repeat",B1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],xc=ye("rotate-ccw",R1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Ga=ye("search",F1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],vr=ye("sparkles",U1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],gc=ye("square",q1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],sc=ye("target",H1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Gi=ye("terminal",G1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Yi=ye("trash-2",Y1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],cc=ye("triangle-alert",V1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],hh=ye("trophy",Q1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Z1=ye("upload",X1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],J1=ye("volume-2",K1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],W1=ye("volume-x",$1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],dc=ye("x",I1);let qa=null,vl=!0;function Nr(){if(typeof window>"u")return null;if(!qa){const o=window.AudioContext||window.webkitAudioContext;o&&(qa=new o)}return qa&&qa.state==="suspended"&&qa.resume(),qa}function P1(o){return vl=!vl,vl}function ey(){return vl}function Gn(){if(vl)try{const o=Nr();if(!o)return;const m=o.createOscillator(),h=o.createGain();m.type="sine",m.frequency.setValueAtTime(700,o.currentTime),m.frequency.exponentialRampToValueAtTime(280,o.currentTime+.05),h.gain.setValueAtTime(.07,o.currentTime),h.gain.exponentialRampToValueAtTime(.001,o.currentTime+.05),m.connect(h),h.connect(o.destination),m.start(),m.stop(o.currentTime+.05)}catch{}}function rc(){if(vl)try{const o=Nr();if(!o)return;const m=o.createOscillator(),h=o.createGain();m.type="sawtooth",m.frequency.setValueAtTime(160,o.currentTime),m.frequency.exponentialRampToValueAtTime(50,o.currentTime+.25),h.gain.setValueAtTime(.2,o.currentTime),h.gain.exponentialRampToValueAtTime(.001,o.currentTime+.25),m.connect(h),h.connect(o.destination),m.start(),m.stop(o.currentTime+.25)}catch{}}function yr(){if(vl)try{const o=Nr();if(!o)return;[523.25,659.25,783.99,1046.5].forEach((h,d)=>{const H=o.currentTime+d*.09,G=o.createOscillator(),W=o.createGain();G.type="triangle",G.frequency.setValueAtTime(h,H),W.gain.setValueAtTime(.14,H),W.gain.exponentialRampToValueAtTime(.001,H+.45),G.connect(W),W.connect(o.destination),G.start(H),G.stop(H+.45)})}catch{}}function _n(){if(vl)try{const o=Nr();if(!o)return;const m=o.createOscillator(),h=o.createGain();m.type="sine";const d=o.currentTime;m.frequency.setValueAtTime(800,d),m.frequency.exponentialRampToValueAtTime(1400,d+.04),h.gain.setValueAtTime(.15,d),h.gain.exponentialRampToValueAtTime(.001,d+.05),m.connect(h),h.connect(o.destination),m.start(d),m.stop(d+.05)}catch{}}const ty=({currentTab:o,onSelectTab:m,solvedCount:h,totalCount:d,soundEnabled:H,onToggleSound:G,onResetProgress:W})=>s.jsx("nav",{className:"bg-white border-b border-[#E3E3E9] sticky top-0 z-40 px-3 md:px-6 py-3 font-mono select-none",children:s.jsxs("div",{className:"max-w-[1360px] mx-auto flex items-center justify-between gap-4 flex-wrap",children:[s.jsxs("div",{onClick:()=>{_n(),m("lessons")},className:"flex items-center gap-3 cursor-pointer group",children:[s.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-br from-[#0A54C4] via-[#5636E0] to-[#F5A800] p-0.5 shadow-xs",children:s.jsx("div",{className:"w-full h-full bg-[#12121A] rounded-[10px] flex items-center justify-center",children:s.jsx(Gi,{className:"w-4 h-4 text-[#4FF0A7] group-hover:scale-110 transition-transform"})})}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsx("span",{className:"text-[16px] font-black tracking-tight text-[#0B0B0F]",children:"Python"}),s.jsx("span",{className:"text-[16px] font-black tracking-tight text-[#0A54C4]",children:"Станция"})]}),s.jsx("div",{className:"text-[10px] font-bold text-[#63636E] uppercase tracking-wider",children:"Курс и Справочник"})]})]}),s.jsxs("div",{className:"flex items-center gap-1 bg-[#F1F1F4] p-1 rounded-xl border border-[#E3E3E9]",children:[s.jsxs("button",{onClick:()=>{_n(),m("lessons")},className:`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${o==="lessons"?"bg-white text-[#0B0B0F] shadow-xs":"text-[#63636E] hover:text-[#0B0B0F]"}`,children:[s.jsx(kr,{className:"w-3.5 h-3.5 text-[#0A54C4]"}),s.jsx("span",{children:"Уроки"})]}),s.jsxs("button",{onClick:()=>{_n(),m("handbook")},className:`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${o==="handbook"?"bg-white text-[#0B0B0F] shadow-xs":"text-[#63636E] hover:text-[#0B0B0F]"}`,children:[s.jsx(Ga,{className:"w-3.5 h-3.5 text-[#B0700C]"}),s.jsx("span",{children:"Справочник функций"})]}),s.jsxs("button",{onClick:()=>{_n(),m("sandbox")},className:`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${o==="sandbox"?"bg-white text-[#0B0B0F] shadow-xs":"text-[#63636E] hover:text-[#0B0B0F]"}`,children:[s.jsx(wl,{className:"w-3.5 h-3.5 text-[#0A7A50]"}),s.jsx("span",{children:"Песочница"})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("div",{className:"hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F1F1F4] border border-[#E3E3E9] text-[11.5px] font-bold text-[#63636E]",children:[s.jsx(hh,{className:"w-3.5 h-3.5 text-[#F5A800]"}),s.jsxs("span",{children:["Пройдено: ",s.jsxs("strong",{className:"text-[#0B0B0F]",children:[h,"/",d]})]})]}),s.jsx("button",{onClick:G,className:"p-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#63636E] hover:text-[#0B0B0F] transition-colors cursor-pointer",title:H?"Выключить звук":"Включить звук",children:H?s.jsx(J1,{className:"w-4 h-4 text-[#0A7A50]"}):s.jsx(W1,{className:"w-4 h-4"})}),s.jsx("button",{onClick:W,className:"p-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#63636E] hover:text-[#D4126C] transition-colors cursor-pointer",title:"Сбросить прогресс",children:s.jsx(xc,{className:"w-4 h-4"})})]})]})}),ny={Terminal:Gi,Layers:p1,Box:Og,RotateCcw:xc,Cpu:Ig,Keyboard:f1,Hash:o1,Calculator:Bg,GitBranch:s1,ListFilter:y1,ListOrdered:v1,PlusCircle:Qg,Repeat:L1,PlayCircle:Yg,Code2:wl,AppWindow:mh,Layout:M1,MousePointerClick:S1,Music:A1},ly=({solvedLessons:o,onSelectLesson:m,onOpenHandbook:h,onOpenSandbox:d})=>{const H=pc(),G=H.length,W=o.length,z=G>0?Math.round(W/G*100):0;return s.jsxs("div",{className:"max-w-[1360px] mx-auto p-3 md:p-6 space-y-6 font-mono select-none",children:[s.jsxs("div",{className:"bg-gradient-to-br from-[#0B0B14] via-[#161626] to-[#251A4A] text-white p-6 md:p-8 rounded-3xl border border-[#2C2C3A] shadow-lg relative overflow-hidden",children:[s.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-[#5636E0]/20 rounded-full blur-3xl pointer-events-none"}),s.jsx("div",{className:"absolute bottom-0 left-1/3 w-72 h-72 bg-[#0A54C4]/20 rounded-full blur-3xl pointer-events-none"}),s.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",children:[s.jsxs("div",{className:"space-y-3 max-w-2xl",children:[s.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-[11px] font-bold tracking-wide backdrop-blur-xs",children:[s.jsx(vr,{className:"w-3.5 h-3.5 text-[#F5A800]"}),s.jsx("span",{children:"Интерактивная станция Python 3"})]}),s.jsx("h1",{className:"text-[24px] md:text-[32px] font-black tracking-tight leading-tight",children:"Практический курс Python с нуля"}),s.jsx("p",{className:"text-[13px] md:text-[14px] text-[#A0A0B2] leading-relaxed",children:"Теория с живыми примерами и мгновенная проверка кода в браузере. Выполняй задания, получай подсказки и изучай встроенные функции."}),s.jsxs("div",{className:"flex items-center gap-3 pt-2 flex-wrap",children:[s.jsxs("button",{onClick:()=>{_n();const $=H.find(re=>!o.includes(re.id))||H[0];$&&m($.id)},className:"px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0A54C4] to-[#0A7A50] text-white font-black text-[13px] flex items-center gap-2 hover:brightness-110 active:scale-98 transition-all cursor-pointer shadow-md",children:[s.jsx(Hi,{className:"w-4 h-4 fill-white"}),s.jsx("span",{children:W===0?"Начать первый урок":"Продолжить обучение"})]}),s.jsxs("button",{onClick:()=>{_n(),h()},className:"px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-[13px] flex items-center gap-2 transition-all cursor-pointer border border-white/10",children:[s.jsx(Ga,{className:"w-4 h-4 text-[#F5A800]"}),s.jsx("span",{children:"Поиск по функциям"})]}),s.jsxs("button",{onClick:()=>{_n(),d()},className:"px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-[13px] flex items-center gap-2 transition-all cursor-pointer border border-white/10",children:[s.jsx(wl,{className:"w-4 h-4 text-[#4FF0A7]"}),s.jsx("span",{children:"Песочница Python"})]})]})]}),s.jsxs("div",{className:"w-full md:w-72 bg-white/10 backdrop-blur-md border border-white/15 p-5 rounded-2xl space-y-3.5",children:[s.jsxs("div",{className:"flex items-center justify-between text-[12px] font-bold",children:[s.jsxs("span",{className:"flex items-center gap-1.5 text-white/90",children:[s.jsx(hh,{className:"w-4 h-4 text-[#F5A800]"}),s.jsx("span",{children:"Твой прогресс"})]}),s.jsxs("span",{className:"text-[#4FF0A7] font-black",children:[z,"%"]})]}),s.jsx("div",{className:"w-full h-2.5 bg-black/40 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-[#0A54C4] to-[#4FF0A7] transition-all duration-500 rounded-full",style:{width:`${z}%`}})}),s.jsxs("div",{className:"text-[11.5px] text-white/70 flex items-center justify-between",children:[s.jsx("span",{children:"Решено заданий:"}),s.jsxs("strong",{className:"text-white",children:[W," из ",G]})]})]})]})]}),s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("h2",{className:"text-[20px] font-black text-[#0B0B0F]",children:"Программа уроков"}),s.jsxs("span",{className:"text-[12px] font-bold text-[#63636E]",children:[br.length," модулей · ",G," уроков с проверкой"]})]}),s.jsx("div",{className:"space-y-5",children:br.map(($,re)=>{const Z=$.lessons.filter(k=>o.includes(k.id)).length,_=Z===$.lessons.length;return s.jsxs("div",{className:"bg-white border-[1.5px] border-[#E3E3E9] rounded-2xl p-5 md:p-6 shadow-xs space-y-4",children:[s.jsxs("div",{className:"flex items-center justify-between gap-3 flex-wrap border-b border-[#E3E3E9] pb-3.5",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-xl text-white flex items-center justify-center font-black text-[15px] shadow-xs",style:{backgroundColor:$.color},children:re+1}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-[17px] font-black text-[#0B0B0F]",children:$.title}),s.jsx("p",{className:"text-[12px] text-[#63636E]",children:$.description})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("span",{className:"text-[11.5px] font-bold text-[#63636E] bg-[#F1F1F4] px-3 py-1 rounded-lg",children:[Z," / ",$.lessons.length," пройдено"]}),_&&s.jsxs("span",{className:"text-[11.5px] font-extrabold text-[#0A7A50] bg-[#0A7A50]/15 px-2.5 py-1 rounded-lg flex items-center gap-1",children:[s.jsx(Ha,{className:"w-3.5 h-3.5"}),"Завершен"]})]})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:$.lessons.map(k=>{const me=o.includes(k.id),ge=ny[k.icon]||wl;return s.jsxs("div",{onClick:()=>{_n(),m(k.id)},className:`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between group ${me?"bg-[#F7FBF8] border-[#0A7A50]/30 hover:border-[#0A7A50]":"bg-[#F7F7FA] border-[#E3E3E9] hover:bg-white hover:border-[#0A54C4] hover:shadow-xs"}`,children:[s.jsxs("div",{className:"space-y-2.5",children:[s.jsxs("div",{className:"flex items-start justify-between gap-2",children:[s.jsx("div",{className:"w-8 h-8 rounded-lg bg-white border border-[#E3E3E9] flex items-center justify-center group-hover:border-[#0A54C4] transition-colors shadow-2xs",children:s.jsx(ge,{className:"w-4 h-4 text-[#0A54C4]"})}),me?s.jsxs("span",{className:"flex items-center gap-1 text-[11px] font-extrabold text-[#0A7A50] bg-[#0A7A50]/15 px-2 py-0.5 rounded-md",children:[s.jsx(Ha,{className:"w-3 h-3"}),"Решено"]}):s.jsx("span",{className:"text-[10.5px] font-bold text-[#63636E] bg-[#E3E3E9]/60 px-2 py-0.5 rounded-md",children:"Новое"})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-[14px] font-black text-[#0B0B0F] group-hover:text-[#0A54C4] transition-colors",children:k.title}),s.jsx("p",{className:"text-[12px] text-[#63636E] leading-relaxed mt-1 line-clamp-2",children:k.shortDesc})]})]}),s.jsx("div",{className:"pt-3 mt-3 border-t border-[#E3E3E9]/80 flex items-center justify-between text-[11.5px] font-bold text-[#0A54C4] group-hover:underline",children:s.jsx("span",{children:me?"Повторить урок →":"Открыть урок →"})})]},k.id)})})]},$.id)})})]})]})};var yc={};(function o(m,h,d,H){var G=!!(m.Worker&&m.Blob&&m.Promise&&m.OffscreenCanvas&&m.OffscreenCanvasRenderingContext2D&&m.HTMLCanvasElement&&m.HTMLCanvasElement.prototype.transferControlToOffscreen&&m.URL&&m.URL.createObjectURL),W=typeof Path2D=="function"&&typeof DOMMatrix=="function",z=(function(){if(!m.OffscreenCanvas)return!1;try{var b=new OffscreenCanvas(1,1),p=b.getContext("2d");p.fillRect(0,0,1,1);var O=b.transferToImageBitmap();p.createPattern(O,"no-repeat")}catch{return!1}return!0})();function $(){}function re(b){var p=h.exports.Promise,O=p!==void 0?p:m.Promise;return typeof O=="function"?new O(b):(b($,$),null)}var Z=(function(b,p){return{transform:function(O){if(b)return O;if(p.has(O))return p.get(O);var I=new OffscreenCanvas(O.width,O.height),c=I.getContext("2d");return c.drawImage(O,0,0),p.set(O,I),I},clear:function(){p.clear()}}})(z,new Map),_=(function(){var b=Math.floor(16.666666666666668),p,O,I={},c=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(p=function(j){var X=Math.random();return I[X]=requestAnimationFrame(function Y(te){c===te||c+b-1<te?(c=te,delete I[X],j()):I[X]=requestAnimationFrame(Y)}),X},O=function(j){I[j]&&cancelAnimationFrame(I[j])}):(p=function(j){return setTimeout(j,b)},O=function(j){return clearTimeout(j)}),{frame:p,cancel:O}})(),k=(function(){var b,p,O={};function I(c){function j(X,Y){c.postMessage({options:X||{},callback:Y})}c.init=function(Y){var te=Y.transferControlToOffscreen();c.postMessage({canvas:te},[te])},c.fire=function(Y,te,ue){if(p)return j(Y,null),p;var de=Math.random().toString(36).slice(2);return p=re(function(J){function ae(De){De.data.callback===de&&(delete O[de],c.removeEventListener("message",ae),p=null,Z.clear(),ue(),J())}c.addEventListener("message",ae),j(Y,de),O[de]=ae.bind(null,{data:{callback:de}})}),p},c.reset=function(){c.postMessage({reset:!0});for(var Y in O)O[Y](),delete O[Y]}}return function(){if(b)return b;if(!d&&G){var c=["var CONFETTI, SIZE = {}, module = {};","("+o.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{b=new Worker(URL.createObjectURL(new Blob([c])))}catch(j){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",j),null}I(b)}return b}})(),me={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function ge(b,p){return p?p(b):b}function N(b){return b!=null}function B(b,p,O){return ge(b&&N(b[p])?b[p]:me[p],O)}function P(b){return b<0?0:Math.floor(b)}function E(b,p){return Math.floor(Math.random()*(p-b))+b}function g(b){return parseInt(b,16)}function R(b){return b.map(M)}function M(b){var p=String(b).replace(/[^0-9a-f]/gi,"");return p.length<6&&(p=p[0]+p[0]+p[1]+p[1]+p[2]+p[2]),{r:g(p.substring(0,2)),g:g(p.substring(2,4)),b:g(p.substring(4,6))}}function L(b){var p=B(b,"origin",Object);return p.x=B(p,"x",Number),p.y=B(p,"y",Number),p}function F(b){b.width=document.documentElement.clientWidth,b.height=document.documentElement.clientHeight}function ee(b){var p=b.getBoundingClientRect();b.width=p.width,b.height=p.height}function V(b){var p=document.createElement("canvas");return p.style.position="fixed",p.style.top="0px",p.style.left="0px",p.style.pointerEvents="none",p.style.zIndex=b,p}function pe(b,p,O,I,c,j,X,Y,te){b.save(),b.translate(p,O),b.rotate(j),b.scale(I,c),b.arc(0,0,1,X,Y,te),b.restore()}function ve(b){var p=b.angle*(Math.PI/180),O=b.spread*(Math.PI/180);return{x:b.x,y:b.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:b.startVelocity*.5+Math.random()*b.startVelocity,angle2D:-p+(.5*O-Math.random()*O),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:b.color,shape:b.shape,tick:0,totalTicks:b.ticks,decay:b.decay,drift:b.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:b.gravity*3,ovalScalar:.6,scalar:b.scalar,flat:b.flat}}function Ne(b,p){p.x+=Math.cos(p.angle2D)*p.velocity+p.drift,p.y+=Math.sin(p.angle2D)*p.velocity+p.gravity,p.velocity*=p.decay,p.flat?(p.wobble=0,p.wobbleX=p.x+10*p.scalar,p.wobbleY=p.y+10*p.scalar,p.tiltSin=0,p.tiltCos=0,p.random=1):(p.wobble+=p.wobbleSpeed,p.wobbleX=p.x+10*p.scalar*Math.cos(p.wobble),p.wobbleY=p.y+10*p.scalar*Math.sin(p.wobble),p.tiltAngle+=.1,p.tiltSin=Math.sin(p.tiltAngle),p.tiltCos=Math.cos(p.tiltAngle),p.random=Math.random()+2);var O=p.tick++/p.totalTicks,I=p.x+p.random*p.tiltCos,c=p.y+p.random*p.tiltSin,j=p.wobbleX+p.random*p.tiltCos,X=p.wobbleY+p.random*p.tiltSin;if(b.fillStyle="rgba("+p.color.r+", "+p.color.g+", "+p.color.b+", "+(1-O)+")",b.beginPath(),W&&p.shape.type==="path"&&typeof p.shape.path=="string"&&Array.isArray(p.shape.matrix))b.fill(K(p.shape.path,p.shape.matrix,p.x,p.y,Math.abs(j-I)*.1,Math.abs(X-c)*.1,Math.PI/10*p.wobble));else if(p.shape.type==="bitmap"){var Y=Math.PI/10*p.wobble,te=Math.abs(j-I)*.1,ue=Math.abs(X-c)*.1,de=p.shape.bitmap.width*p.scalar,J=p.shape.bitmap.height*p.scalar,ae=new DOMMatrix([Math.cos(Y)*te,Math.sin(Y)*te,-Math.sin(Y)*ue,Math.cos(Y)*ue,p.x,p.y]);ae.multiplySelf(new DOMMatrix(p.shape.matrix));var De=b.createPattern(Z.transform(p.shape.bitmap),"no-repeat");De.setTransform(ae),b.globalAlpha=1-O,b.fillStyle=De,b.fillRect(p.x-de/2,p.y-J/2,de,J),b.globalAlpha=1}else if(p.shape==="circle")b.ellipse?b.ellipse(p.x,p.y,Math.abs(j-I)*p.ovalScalar,Math.abs(X-c)*p.ovalScalar,Math.PI/10*p.wobble,0,2*Math.PI):pe(b,p.x,p.y,Math.abs(j-I)*p.ovalScalar,Math.abs(X-c)*p.ovalScalar,Math.PI/10*p.wobble,0,2*Math.PI);else if(p.shape==="star")for(var Se=Math.PI/2*3,Ie=4*p.scalar,Ge=8*p.scalar,ze=p.x,_e=p.y,$e=5,ut=Math.PI/$e;$e--;)ze=p.x+Math.cos(Se)*Ge,_e=p.y+Math.sin(Se)*Ge,b.lineTo(ze,_e),Se+=ut,ze=p.x+Math.cos(Se)*Ie,_e=p.y+Math.sin(Se)*Ie,b.lineTo(ze,_e),Se+=ut;else b.moveTo(Math.floor(p.x),Math.floor(p.y)),b.lineTo(Math.floor(p.wobbleX),Math.floor(c)),b.lineTo(Math.floor(j),Math.floor(X)),b.lineTo(Math.floor(I),Math.floor(p.wobbleY));return b.closePath(),b.fill(),p.tick<p.totalTicks}function Ve(b,p,O,I,c){var j=p.slice(),X=b.getContext("2d"),Y,te,ue=re(function(de){function J(){Y=te=null,X.clearRect(0,0,I.width,I.height),Z.clear(),c(),de()}function ae(){d&&!(I.width===H.width&&I.height===H.height)&&(I.width=b.width=H.width,I.height=b.height=H.height),!I.width&&!I.height&&(O(b),I.width=b.width,I.height=b.height),X.clearRect(0,0,I.width,I.height),j=j.filter(function(De){return Ne(X,De)}),j.length?Y=_.frame(ae):J()}Y=_.frame(ae),te=J});return{addFettis:function(de){return j=j.concat(de),ue},canvas:b,promise:ue,reset:function(){Y&&_.cancel(Y),te&&te()}}}function A(b,p){var O=!b,I=!!B(p||{},"resize"),c=!1,j=B(p,"disableForReducedMotion",Boolean),X=G&&!!B(p||{},"useWorker"),Y=X?k():null,te=O?F:ee,ue=b&&Y?!!b.__confetti_initialized:!1,de=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,J;function ae(Se,Ie,Ge){for(var ze=B(Se,"particleCount",P),_e=B(Se,"angle",Number),$e=B(Se,"spread",Number),ut=B(Se,"startVelocity",Number),jt=B(Se,"decay",Number),kn=B(Se,"gravity",Number),Yn=B(Se,"drift",Number),tn=B(Se,"colors",R),Vn=B(Se,"ticks",Number),En=B(Se,"shapes"),_l=B(Se,"scalar"),Nn=!!B(Se,"flat"),kt=L(Se),Sn=ze,un=[],kl=b.width*kt.x,El=b.height*kt.y;Sn--;)un.push(ve({x:kl,y:El,angle:_e,spread:$e,startVelocity:ut,color:tn[Sn%tn.length],shape:En[E(0,En.length)],ticks:Vn,decay:jt,gravity:kn,drift:Yn,scalar:_l,flat:Nn}));return J?J.addFettis(un):(J=Ve(b,un,te,Ie,Ge),J.promise)}function De(Se){var Ie=j||B(Se,"disableForReducedMotion",Boolean),Ge=B(Se,"zIndex",Number);if(Ie&&de)return re(function(ut){ut()});O&&J?b=J.canvas:O&&!b&&(b=V(Ge),document.body.appendChild(b)),I&&!ue&&te(b);var ze={width:b.width,height:b.height};Y&&!ue&&Y.init(b),ue=!0,Y&&(b.__confetti_initialized=!0);function _e(){if(Y){var ut={getBoundingClientRect:function(){if(!O)return b.getBoundingClientRect()}};te(ut),Y.postMessage({resize:{width:ut.width,height:ut.height}});return}ze.width=ze.height=null}function $e(){J=null,I&&(c=!1,m.removeEventListener("resize",_e)),O&&b&&(document.body.contains(b)&&document.body.removeChild(b),b=null,ue=!1)}return I&&!c&&(c=!0,m.addEventListener("resize",_e,!1)),Y?Y.fire(Se,ze,$e):ae(Se,ze,$e)}return De.reset=function(){Y&&Y.reset(),J&&J.reset()},De}var se;function C(){return se||(se=A(null,{useWorker:!0,resize:!0})),se}function K(b,p,O,I,c,j,X){var Y=new Path2D(b),te=new Path2D;te.addPath(Y,new DOMMatrix(p));var ue=new Path2D;return ue.addPath(te,new DOMMatrix([Math.cos(X)*c,Math.sin(X)*c,-Math.sin(X)*j,Math.cos(X)*j,O,I])),ue}function ne(b){if(!W)throw new Error("path confetti are not supported in this browser");var p,O;typeof b=="string"?p=b:(p=b.path,O=b.matrix);var I=new Path2D(p),c=document.createElement("canvas"),j=c.getContext("2d");if(!O){for(var X=1e3,Y=X,te=X,ue=0,de=0,J,ae,De=0;De<X;De+=2)for(var Se=0;Se<X;Se+=2)j.isPointInPath(I,De,Se,"nonzero")&&(Y=Math.min(Y,De),te=Math.min(te,Se),ue=Math.max(ue,De),de=Math.max(de,Se));J=ue-Y,ae=de-te;var Ie=10,Ge=Math.min(Ie/J,Ie/ae);O=[Ge,0,0,Ge,-Math.round(J/2+Y)*Ge,-Math.round(ae/2+te)*Ge]}return{type:"path",path:p,matrix:O}}function he(b){var p,O=1,I="#000000",c='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof b=="string"?p=b:(p=b.text,O="scalar"in b?b.scalar:O,c="fontFamily"in b?b.fontFamily:c,I="color"in b?b.color:I);var j=10*O,X=""+j+"px "+c,Y=new OffscreenCanvas(j,j),te=Y.getContext("2d");te.font=X;var ue=te.measureText(p),de=Math.ceil(ue.actualBoundingBoxRight+ue.actualBoundingBoxLeft),J=Math.ceil(ue.actualBoundingBoxAscent+ue.actualBoundingBoxDescent),ae=2,De=ue.actualBoundingBoxLeft+ae,Se=ue.actualBoundingBoxAscent+ae;de+=ae+ae,J+=ae+ae,Y=new OffscreenCanvas(de,J),te=Y.getContext("2d"),te.font=X,te.fillStyle=I,te.fillText(p,De,Se);var Ie=1/O;return{type:"bitmap",bitmap:Y.transferToImageBitmap(),matrix:[Ie,0,0,Ie,-de*Ie/2,-J*Ie/2]}}h.exports=function(){return C().apply(this,arguments)},h.exports.reset=function(){C().reset()},h.exports.create=A,h.exports.shapeFromPath=ne,h.exports.shapeFromText=he})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),yc,!1);const ay=yc.exports;yc.exports.create;var oc={exports:{}},lh;function iy(){return lh||(lh=1,(function(o){var m=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var h=(function(d){var H=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,G=0,W={},z={manual:d.Prism&&d.Prism.manual,disableWorkerMessageHandler:d.Prism&&d.Prism.disableWorkerMessageHandler,util:{encode:function E(g){return g instanceof $?new $(g.type,E(g.content),g.alias):Array.isArray(g)?g.map(E):g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(E){return Object.prototype.toString.call(E).slice(8,-1)},objId:function(E){return E.__id||Object.defineProperty(E,"__id",{value:++G}),E.__id},clone:function E(g,R){R=R||{};var M,L;switch(z.util.type(g)){case"Object":if(L=z.util.objId(g),R[L])return R[L];M={},R[L]=M;for(var F in g)g.hasOwnProperty(F)&&(M[F]=E(g[F],R));return M;case"Array":return L=z.util.objId(g),R[L]?R[L]:(M=[],R[L]=M,g.forEach(function(ee,V){M[V]=E(ee,R)}),M);default:return g}},getLanguage:function(E){for(;E;){var g=H.exec(E.className);if(g)return g[1].toLowerCase();E=E.parentElement}return"none"},setLanguage:function(E,g){E.className=E.className.replace(RegExp(H,"gi"),""),E.classList.add("language-"+g)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(M){var E=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(M.stack)||[])[1];if(E){var g=document.getElementsByTagName("script");for(var R in g)if(g[R].src==E)return g[R]}return null}},isActive:function(E,g,R){for(var M="no-"+g;E;){var L=E.classList;if(L.contains(g))return!0;if(L.contains(M))return!1;E=E.parentElement}return!!R}},languages:{plain:W,plaintext:W,text:W,txt:W,extend:function(E,g){var R=z.util.clone(z.languages[E]);for(var M in g)R[M]=g[M];return R},insertBefore:function(E,g,R,M){M=M||z.languages;var L=M[E],F={};for(var ee in L)if(L.hasOwnProperty(ee)){if(ee==g)for(var V in R)R.hasOwnProperty(V)&&(F[V]=R[V]);R.hasOwnProperty(ee)||(F[ee]=L[ee])}var pe=M[E];return M[E]=F,z.languages.DFS(z.languages,function(ve,Ne){Ne===pe&&ve!=E&&(this[ve]=F)}),F},DFS:function E(g,R,M,L){L=L||{};var F=z.util.objId;for(var ee in g)if(g.hasOwnProperty(ee)){R.call(g,ee,g[ee],M||ee);var V=g[ee],pe=z.util.type(V);pe==="Object"&&!L[F(V)]?(L[F(V)]=!0,E(V,R,null,L)):pe==="Array"&&!L[F(V)]&&(L[F(V)]=!0,E(V,R,ee,L))}}},plugins:{},highlightAll:function(E,g){z.highlightAllUnder(document,E,g)},highlightAllUnder:function(E,g,R){var M={callback:R,container:E,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};z.hooks.run("before-highlightall",M),M.elements=Array.prototype.slice.apply(M.container.querySelectorAll(M.selector)),z.hooks.run("before-all-elements-highlight",M);for(var L=0,F;F=M.elements[L++];)z.highlightElement(F,g===!0,M.callback)},highlightElement:function(E,g,R){var M=z.util.getLanguage(E),L=z.languages[M];z.util.setLanguage(E,M);var F=E.parentElement;F&&F.nodeName.toLowerCase()==="pre"&&z.util.setLanguage(F,M);var ee=E.textContent,V={element:E,language:M,grammar:L,code:ee};function pe(Ne){V.highlightedCode=Ne,z.hooks.run("before-insert",V),V.element.innerHTML=V.highlightedCode,z.hooks.run("after-highlight",V),z.hooks.run("complete",V),R&&R.call(V.element)}if(z.hooks.run("before-sanity-check",V),F=V.element.parentElement,F&&F.nodeName.toLowerCase()==="pre"&&!F.hasAttribute("tabindex")&&F.setAttribute("tabindex","0"),!V.code){z.hooks.run("complete",V),R&&R.call(V.element);return}if(z.hooks.run("before-highlight",V),!V.grammar){pe(z.util.encode(V.code));return}if(g&&d.Worker){var ve=new Worker(z.filename);ve.onmessage=function(Ne){pe(Ne.data)},ve.postMessage(JSON.stringify({language:V.language,code:V.code,immediateClose:!0}))}else pe(z.highlight(V.code,V.grammar,V.language))},highlight:function(E,g,R){var M={code:E,grammar:g,language:R};if(z.hooks.run("before-tokenize",M),!M.grammar)throw new Error('The language "'+M.language+'" has no grammar.');return M.tokens=z.tokenize(M.code,M.grammar),z.hooks.run("after-tokenize",M),$.stringify(z.util.encode(M.tokens),M.language)},tokenize:function(E,g){var R=g.rest;if(R){for(var M in R)g[M]=R[M];delete g.rest}var L=new _;return k(L,L.head,E),Z(E,L,g,L.head,0),ge(L)},hooks:{all:{},add:function(E,g){var R=z.hooks.all;R[E]=R[E]||[],R[E].push(g)},run:function(E,g){var R=z.hooks.all[E];if(!(!R||!R.length))for(var M=0,L;L=R[M++];)L(g)}},Token:$};d.Prism=z;function $(E,g,R,M){this.type=E,this.content=g,this.alias=R,this.length=(M||"").length|0}$.stringify=function E(g,R){if(typeof g=="string")return g;if(Array.isArray(g)){var M="";return g.forEach(function(pe){M+=E(pe,R)}),M}var L={type:g.type,content:E(g.content,R),tag:"span",classes:["token",g.type],attributes:{},language:R},F=g.alias;F&&(Array.isArray(F)?Array.prototype.push.apply(L.classes,F):L.classes.push(F)),z.hooks.run("wrap",L);var ee="";for(var V in L.attributes)ee+=" "+V+'="'+(L.attributes[V]||"").replace(/"/g,"&quot;")+'"';return"<"+L.tag+' class="'+L.classes.join(" ")+'"'+ee+">"+L.content+"</"+L.tag+">"};function re(E,g,R,M){E.lastIndex=g;var L=E.exec(R);if(L&&M&&L[1]){var F=L[1].length;L.index+=F,L[0]=L[0].slice(F)}return L}function Z(E,g,R,M,L,F){for(var ee in R)if(!(!R.hasOwnProperty(ee)||!R[ee])){var V=R[ee];V=Array.isArray(V)?V:[V];for(var pe=0;pe<V.length;++pe){if(F&&F.cause==ee+","+pe)return;var ve=V[pe],Ne=ve.inside,Ve=!!ve.lookbehind,A=!!ve.greedy,se=ve.alias;if(A&&!ve.pattern.global){var C=ve.pattern.toString().match(/[imsuy]*$/)[0];ve.pattern=RegExp(ve.pattern.source,C+"g")}for(var K=ve.pattern||ve,ne=M.next,he=L;ne!==g.tail&&!(F&&he>=F.reach);he+=ne.value.length,ne=ne.next){var b=ne.value;if(g.length>E.length)return;if(!(b instanceof $)){var p=1,O;if(A){if(O=re(K,he,E,Ve),!O||O.index>=E.length)break;var X=O.index,I=O.index+O[0].length,c=he;for(c+=ne.value.length;X>=c;)ne=ne.next,c+=ne.value.length;if(c-=ne.value.length,he=c,ne.value instanceof $)continue;for(var j=ne;j!==g.tail&&(c<I||typeof j.value=="string");j=j.next)p++,c+=j.value.length;p--,b=E.slice(he,c),O.index-=he}else if(O=re(K,0,b,Ve),!O)continue;var X=O.index,Y=O[0],te=b.slice(0,X),ue=b.slice(X+Y.length),de=he+b.length;F&&de>F.reach&&(F.reach=de);var J=ne.prev;te&&(J=k(g,J,te),he+=te.length),me(g,J,p);var ae=new $(ee,Ne?z.tokenize(Y,Ne):Y,se,Y);if(ne=k(g,J,ae),ue&&k(g,ne,ue),p>1){var De={cause:ee+","+pe,reach:de};Z(E,g,R,ne.prev,he,De),F&&De.reach>F.reach&&(F.reach=De.reach)}}}}}}function _(){var E={value:null,prev:null,next:null},g={value:null,prev:E,next:null};E.next=g,this.head=E,this.tail=g,this.length=0}function k(E,g,R){var M=g.next,L={value:R,prev:g,next:M};return g.next=L,M.prev=L,E.length++,L}function me(E,g,R){for(var M=g.next,L=0;L<R&&M!==E.tail;L++)M=M.next;g.next=M,M.prev=g,E.length-=L}function ge(E){for(var g=[],R=E.head.next;R!==E.tail;)g.push(R.value),R=R.next;return g}if(!d.document)return d.addEventListener&&(z.disableWorkerMessageHandler||d.addEventListener("message",function(E){var g=JSON.parse(E.data),R=g.language,M=g.code,L=g.immediateClose;d.postMessage(z.highlight(M,z.languages[R],R)),L&&d.close()},!1)),z;var N=z.util.currentScript();N&&(z.filename=N.src,N.hasAttribute("data-manual")&&(z.manual=!0));function B(){z.manual||z.highlightAll()}if(!z.manual){var P=document.readyState;P==="loading"||P==="interactive"&&N&&N.defer?document.addEventListener("DOMContentLoaded",B):window.requestAnimationFrame?window.requestAnimationFrame(B):window.setTimeout(B,16)}return z})(m);o.exports&&(o.exports=h),typeof Hp<"u"&&(Hp.Prism=h),h.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},h.languages.markup.tag.inside["attr-value"].inside.entity=h.languages.markup.entity,h.languages.markup.doctype.inside["internal-subset"].inside=h.languages.markup,h.hooks.add("wrap",function(d){d.type==="entity"&&(d.attributes.title=d.content.replace(/&amp;/,"&"))}),Object.defineProperty(h.languages.markup.tag,"addInlined",{value:function(H,G){var W={};W["language-"+G]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:h.languages[G]},W.cdata=/^<!\[CDATA\[|\]\]>$/i;var z={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:W}};z["language-"+G]={pattern:/[\s\S]+/,inside:h.languages[G]};var $={};$[H]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return H}),"i"),lookbehind:!0,greedy:!0,inside:z},h.languages.insertBefore("markup","cdata",$)}}),Object.defineProperty(h.languages.markup.tag,"addAttribute",{value:function(d,H){h.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+d+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[H,"language-"+H],inside:h.languages[H]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),h.languages.html=h.languages.markup,h.languages.mathml=h.languages.markup,h.languages.svg=h.languages.markup,h.languages.xml=h.languages.extend("markup",{}),h.languages.ssml=h.languages.xml,h.languages.atom=h.languages.xml,h.languages.rss=h.languages.xml,(function(d){var H=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;d.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+H.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+H.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+H.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+H.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:H,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},d.languages.css.atrule.inside.rest=d.languages.css;var G=d.languages.markup;G&&(G.tag.addInlined("style","css"),G.tag.addAttribute("style","css"))})(h),h.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},h.languages.javascript=h.languages.extend("clike",{"class-name":[h.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),h.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,h.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:h.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:h.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:h.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:h.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:h.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),h.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:h.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),h.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),h.languages.markup&&(h.languages.markup.tag.addInlined("script","javascript"),h.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),h.languages.js=h.languages.javascript,(function(){if(typeof h>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var d="Loading…",H=function(N,B){return"✖ Error "+N+" while fetching file: "+B},G="✖ Error: File does not exist or is empty",W={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},z="data-src-status",$="loading",re="loaded",Z="failed",_="pre[data-src]:not(["+z+'="'+re+'"]):not(['+z+'="'+$+'"])';function k(N,B,P){var E=new XMLHttpRequest;E.open("GET",N,!0),E.onreadystatechange=function(){E.readyState==4&&(E.status<400&&E.responseText?B(E.responseText):E.status>=400?P(H(E.status,E.statusText)):P(G))},E.send(null)}function me(N){var B=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(N||"");if(B){var P=Number(B[1]),E=B[2],g=B[3];return E?g?[P,Number(g)]:[P,void 0]:[P,P]}}h.hooks.add("before-highlightall",function(N){N.selector+=", "+_}),h.hooks.add("before-sanity-check",function(N){var B=N.element;if(B.matches(_)){N.code="",B.setAttribute(z,$);var P=B.appendChild(document.createElement("CODE"));P.textContent=d;var E=B.getAttribute("data-src"),g=N.language;if(g==="none"){var R=(/\.(\w+)$/.exec(E)||[,"none"])[1];g=W[R]||R}h.util.setLanguage(P,g),h.util.setLanguage(B,g);var M=h.plugins.autoloader;M&&M.loadLanguages(g),k(E,function(L){B.setAttribute(z,re);var F=me(B.getAttribute("data-range"));if(F){var ee=L.split(/\r\n?|\n/g),V=F[0],pe=F[1]==null?ee.length:F[1];V<0&&(V+=ee.length),V=Math.max(0,Math.min(V-1,ee.length)),pe<0&&(pe+=ee.length),pe=Math.max(0,Math.min(pe,ee.length)),L=ee.slice(V,pe).join(`
`),B.hasAttribute("data-start")||B.setAttribute("data-start",String(V+1))}P.textContent=L,h.highlightElement(P)},function(L){B.setAttribute(z,Z),P.textContent=L})}}),h.plugins.fileHighlight={highlight:function(B){for(var P=(B||document).querySelectorAll(_),E=0,g;g=P[E++];)h.highlightElement(g)}};var ge=!1;h.fileHighlight=function(){ge||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),ge=!0),h.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(oc)),oc.exports}var sy=iy();const bl=cg(sy);var ah={},ih;function ry(){return ih||(ih=1,Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python),ah}ry();const xh=({value:o,onChange:m,onRun:h,placeholder:d="# Напиши код на Python 3...",activeLine:H=null,errorLine:G=null,rows:W=15})=>{const z=le.useRef(null),$=le.useRef(null),re=le.useRef(null),Z=o.split(`
`),_=Math.max(Z.length,W),k=()=>{if(z.current){const N=z.current.scrollTop,B=z.current.scrollLeft;$.current&&($.current.scrollTop=N,$.current.scrollLeft=B),re.current&&(re.current.scrollTop=N)}},me=N=>{var E;if((N.ctrlKey||N.metaKey)&&N.key==="Enter"){N.preventDefault(),h==null||h();return}if(N.key==="Tab"){N.preventDefault();const g=N.currentTarget.selectionStart,R=N.currentTarget.selectionEnd;if(N.shiftKey){const L=o.substring(0,g).lastIndexOf(`
`),F=L===-1?0:L+1,V=((E=o.substring(F,g).match(/^ {1,4}/))==null?void 0:E[0].length)||0;if(V>0){const pe=o.substring(0,F)+o.substring(F+V);m(pe),setTimeout(()=>{z.current&&(z.current.selectionStart=z.current.selectionEnd=Math.max(F,g-V))},0)}}else{const M=o.substring(0,g)+"    "+o.substring(R);m(M),setTimeout(()=>{z.current&&(z.current.selectionStart=z.current.selectionEnd=g+4)},0)}return}if(N.key==="Enter"&&!N.ctrlKey&&!N.metaKey){N.preventDefault();const g=N.currentTarget.selectionStart,R=N.currentTarget.selectionEnd,M=o.substring(0,g),L=o.substring(R),F=M.lastIndexOf(`
`),ee=F===-1?M:M.substring(F+1),V=ee.match(/^[ \t]*/),pe=V?V[0]:"",Ne=ee.trim().endsWith(":"),Ve=M.slice(-1),A=L.slice(0,1),se=Ve==="("&&A===")"||Ve==="["&&A==="]"||Ve==="{"&&A==="}";let C=`
`+pe,K=g+1+pe.length;if(Ne&&(C+="    ",K+=4),se){const he=pe+"    ";C=`
`+he+`
`+pe,K=g+1+he.length}const ne=M+C+L;m(ne),setTimeout(()=>{z.current&&(z.current.selectionStart=z.current.selectionEnd=K)},0);return}const B={"(":")","[":"]","{":"}",'"':'"',"'":"'"};if(B[N.key]&&!N.ctrlKey&&!N.metaKey&&!N.altKey){const g=N.key,R=B[N.key],M=N.currentTarget.selectionStart,L=N.currentTarget.selectionEnd,F=o[M];if((g==='"'||g==="'")&&M===L&&F===g){N.preventDefault(),setTimeout(()=>{z.current&&(z.current.selectionStart=z.current.selectionEnd=M+1)},0);return}if(M!==L){N.preventDefault();const V=o.substring(M,L),pe=o.substring(0,M)+g+V+R+o.substring(L);m(pe),setTimeout(()=>{z.current&&(z.current.selectionStart=M+1,z.current.selectionEnd=L+1)},0);return}N.preventDefault();const ee=o.substring(0,M)+g+R+o.substring(L);m(ee),setTimeout(()=>{z.current&&(z.current.selectionStart=z.current.selectionEnd=M+1)},0);return}if([")","]","}",'"',"'"].includes(N.key)&&!N.ctrlKey&&!N.metaKey&&!N.altKey){const g=N.currentTarget.selectionStart,R=N.currentTarget.selectionEnd;if(g===R&&o[g]===N.key){N.preventDefault(),setTimeout(()=>{z.current&&(z.current.selectionStart=z.current.selectionEnd=g+1)},0);return}}if(N.key==="Backspace"&&!N.ctrlKey&&!N.metaKey){const g=N.currentTarget.selectionStart,R=N.currentTarget.selectionEnd;if(g===R&&g>0){const M=o[g-1],L=o[g];if(M==="("&&L===")"||M==="["&&L==="]"||M==="{"&&L==="}"||M==='"'&&L==='"'||M==="'"&&L==="'"){N.preventDefault();const ee=o.substring(0,g-1)+o.substring(g+1);m(ee),setTimeout(()=>{z.current&&(z.current.selectionStart=z.current.selectionEnd=g-1)},0);return}}}},ge=bl.highlight(o+(o.endsWith(`
`)?" ":""),bl.languages.python,"python");return s.jsxs("div",{className:"relative border-2 border-[#E3E3E9] focus-within:border-[#0A54C4] rounded-xl overflow-hidden bg-[#16161F] text-white flex min-h-[380px] shadow-2xs",children:[s.jsx("div",{ref:re,className:"w-11 bg-[#12121A] text-[#636375] py-3.5 px-1.5 text-right font-mono text-[13px] leading-6 select-none border-r border-[#2C2C3A] overflow-hidden shrink-0",children:Array.from({length:_}).map((N,B)=>{const P=B+1,E=H===P,g=G===P;return s.jsx("div",{className:`h-6 leading-6 ${g?"text-[#FF3860] font-black bg-[#FF3860]/20 rounded-xs":E?"text-[#F5A800] font-black bg-[#F5A800]/20 rounded-xs":""}`,children:P},B)})}),s.jsxs("div",{className:"relative flex-1 overflow-hidden",children:[s.jsx("pre",{ref:$,"aria-hidden":"true",className:"absolute inset-0 m-0 p-3.5 font-mono text-[13px] leading-6 pointer-events-none overflow-hidden whitespace-pre tab-[4] selection:bg-transparent",dangerouslySetInnerHTML:{__html:ge}}),s.jsx("textarea",{ref:z,value:o,onChange:N=>m(N.target.value),onScroll:k,onKeyDown:me,spellCheck:!1,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",className:"absolute inset-0 w-full h-full bg-transparent text-transparent caret-white p-3.5 font-mono text-[13px] leading-6 resize-none focus:outline-none selection:bg-[#5636E0]/40 whitespace-pre overflow-auto tab-[4]",placeholder:d})]})]})},oy=[{id:"all",label:"Все"},{id:"io",label:"Ввод и вывод"},{id:"types",label:"Типы данных"},{id:"math",label:"Математика"},{id:"strings",label:"Строки"},{id:"lists",label:"Списки"},{id:"dicts",label:"Словари"},{id:"iter",label:"Циклы и итерации"},{id:"modules",label:"Модули (math, random)"},{id:"tkinter",label:"Графика (Tkinter)"}],sh=[{id:"print",name:"print()",category:"io",categoryLabel:"Ввод и вывод",syntax:"print(*objects, sep=' ', end='\\n')",shortDesc:"Выводит переданные объекты в консоль.",fullDesc:"Главная функция для отображения информации. Можно передавать несколько аргументов через запятую. Параметр sep задает разделитель (по умолчанию пробел), а end — символ в конце (по умолчанию перенос строки).",params:[{name:"*objects",type:"any",desc:"Один или несколько объектов для вывода"},{name:"sep",type:"str",desc:"Разделитель между значениями (по умолчанию ' ')"},{name:"end",type:"str",desc:"Символ окончания строки (по умолчанию '\\n')"}],returns:"None",example:`# Вывод текста и чисел
name = "Алексей"
age = 15
print("Привет,", name, "тебе", age, "лет!")
print("1", "2", "3", sep="-")`,output:`Привет, Алексей тебе 15 лет!
1-2-3`,tags:["печать","вывод","консоль","терминал","print","display","отобразить"]},{id:"input",name:"input()",category:"io",categoryLabel:"Ввод и вывод",syntax:"input([prompt])",shortDesc:"Считывает строку, введенную пользователем с клавиатуры.",fullDesc:"Приостанавливает выполнение программы и ждет, пока пользователь напечатает текст и нажмет Enter. Всегда возвращает значение строкового типа (str). Для чисел требуется преобразование через int() или float().",params:[{name:"prompt",type:"str",desc:"Текст подсказки, который увидит пользователь"}],returns:"str (введенная строка)",example:`name = input("Как тебя зовут? ")
age = int(input("Сколько тебе лет? "))
print(f"Привет, {name}! В следующем году тебе будет {age + 1}.")`,output:"Привет, Анна! В следующем году тебе будет 15.",tags:["ввод","клавиатура","считать","пользователь","запрос","input","read","ask"]},{id:"type",name:"type()",category:"types",categoryLabel:"Типы данных",syntax:"type(object)",shortDesc:"Возвращает тип переданного объекта.",fullDesc:"Позволяет узнать, к какому типу принадлежит переменная или значение (например, int, float, str, list, bool).",returns:"type (тип объекта)",example:`x = 42
y = 3.14
s = "Python"
print(type(x))  # <class 'int'>
print(type(y))  # <class 'float'>
print(type(s))  # <class 'str'>`,output:`<class 'int'>
<class 'float'>
<class 'str'>`,tags:["тип","проверка","int","str","float","класс","type"]},{id:"int",name:"int()",category:"types",categoryLabel:"Типы данных",syntax:"int(x, base=10)",shortDesc:"Преобразует строку или дробное число в целое число.",fullDesc:"Отбрасывает дробную часть у чисел float или переводит строку, состоящую из цифр, в целое число (int). Вызывает ValueError, если строку нельзя преобразовать.",returns:"int (целое число)",example:`num_str = "120"
num = int(num_str)
print(num + 30)

f = 9.99
print(int(f))  # 9 (дробная часть отбрасывается)`,output:`150
9`,tags:["целое","число","конвертация","перевод","int","integer"]},{id:"float",name:"float()",category:"types",categoryLabel:"Типы данных",syntax:"float(x)",shortDesc:"Преобразует число или строку в вещественное (дробное) число.",fullDesc:"Создает число с плавающей точкой из целого числа или строки. В качестве разделителя дроби в Python всегда используется точка.",returns:"float (дробное число)",example:`x = float("3.14")
y = float(10)
print(x * 2)
print(y)`,output:`6.28
10.0`,tags:["дробь","плавающая точка","вещественное","float","decimal"]},{id:"str",name:"str()",category:"types",categoryLabel:"Типы данных",syntax:"str(object='')",shortDesc:"Преобразует переданный объект в строку.",fullDesc:"Позволяет превратить число, список или любой другой объект в строковое представление для склеивания или форматирования.",returns:"str (строка)",example:`score = 98
msg = "Твой рекорд: " + str(score) + " очков"
print(msg)`,output:"Твой рекорд: 98 очков",tags:["строка","текст","конвертация","str","string"]},{id:"bool",name:"bool()",category:"types",categoryLabel:"Типы данных",syntax:"bool(x)",shortDesc:"Возвращает логическое значение (True или False).",fullDesc:'Число 0, пустые строки "", пустые списки [] и None превращаются в False. Все непустые значения превращаются в True.',returns:"bool (True / False)",example:`print(bool(0))      # False
print(bool(42))     # True
print(bool(""))     # False
print(bool("Hi"))   # True`,output:`False
True
False
True`,tags:["логика","булево","истина","ложь","true","false","bool"]},{id:"len",name:"len()",category:"lists",categoryLabel:"Списки и коллекции",syntax:"len(s)",shortDesc:"Возвращает количество элементов в последовательности (длину).",fullDesc:"Работает со строками (количество символов), списками (количество элементов), словарями (количество ключей), кортежами и множествами.",returns:"int (количество элементов)",example:`word = "Программирование"
print("Символов в слове:", len(word))

items = ["яблоко", "банан", "груша"]
print("Элементов в списке:", len(items))`,output:`Символов в слове: 16
Элементов в списке: 3`,tags:["длина","размер","количество","элементы","len","length","size","count"]},{id:"sum",name:"sum()",category:"math",categoryLabel:"Математика",syntax:"sum(iterable, start=0)",shortDesc:"Суммирует все числовые элементы в коллекции.",fullDesc:"Принимает список, кортеж или range чисел и возвращает их общую сумму.",returns:"число (int или float)",example:`marks = [5, 4, 5, 5, 4]
total = sum(marks)
average = total / len(marks)
print(f"Сумма: {total}, Средний балл: {average}")`,output:"Сумма: 23, Средний балл: 4.6",tags:["сумма","сложить","все","итог","sum","total","average"]},{id:"min",name:"min()",category:"math",categoryLabel:"Математика",syntax:"min(arg1, arg2, *args) или min(iterable)",shortDesc:"Возвращает наименьший элемент среди переданных значений.",fullDesc:"Можно передавать элементы отдельными аргументами или целый список. У строк сравнивает по алфавиту (кодам символов).",returns:"наименьший элемент",example:`print(min(12, 5, 89, 3, 21))
scores = [120, 80, 240, 65]
print("Худший результат:", min(scores))`,output:`3
Худший результат: 65`,tags:["минимум","наименьший","минимальный","min","smallest"]},{id:"max",name:"max()",category:"math",categoryLabel:"Математика",syntax:"max(arg1, arg2, *args) или max(iterable)",shortDesc:"Возвращает наибольший элемент среди переданных значений.",fullDesc:"Находит рекорд или максимальное число в списке или среди аргументов.",returns:"наибольший элемент",example:`print(max(10, 42, 17))
temperatures = [22.5, 26.1, 25.4, 28.0]
print("Пик жары:", max(temperatures))`,output:`42
Пик жары: 28.0`,tags:["максимум","наибольший","рекорд","max","largest"]},{id:"abs",name:"abs()",category:"math",categoryLabel:"Математика",syntax:"abs(x)",shortDesc:"Возвращает модуль (абсолютную величину) числа.",fullDesc:"Превращает любое отрицательное число в положительное. Положительные числа оставляет без изменений.",returns:"число >= 0",example:`delta = 10 - 25
print("Разница:", abs(delta))
print(abs(-3.14))`,output:`Разница: 15
3.14`,tags:["модуль","абсолютное","знак","abs","absolute"]},{id:"round",name:"round()",category:"math",categoryLabel:"Математика",syntax:"round(number, ndigits=None)",shortDesc:"Округляет число до указанного количества знаков после запятой.",fullDesc:"Если ndigits опущен, округляет до ближайшего целого. Если указан, сохраняет указанное число знаков.",returns:"int или float",example:`pi = 3.14159265
print(round(pi))       # 3
print(round(pi, 2))    # 3.14
print(round(pi, 4))    # 3.1416`,output:`3
3.14
3.1416`,tags:["округление","знаки","дробь","round","approx"]},{id:"pow",name:"pow()",category:"math",categoryLabel:"Математика",syntax:"pow(base, exp, mod=None)",shortDesc:"Возводит число base в степень exp.",fullDesc:"Эквивалентно оператору `base ** exp`. Третий необязательный параметр mod позволяет взять остаток по модулю: `(base ** exp) % mod`.",returns:"число",example:`print(pow(2, 8))   # 256
print(pow(5, 3))   # 125
print(2 ** 8)      # То же самое: 256`,output:`256
125
256`,tags:["степень","возведение","pow","power","квадрат","куб"]},{id:"range",name:"range()",category:"iter",categoryLabel:"Циклы и итерации",syntax:"range(stop) или range(start, stop[, step])",shortDesc:"Генерирует последовательность чисел для цикла for.",fullDesc:"Создает неизменяемую арифметическую прогрессию от start до stop (не включая stop) с шагом step. Незаменима для циклов for.",params:[{name:"start",type:"int",desc:"Начальное число (по умолчанию 0)"},{name:"stop",type:"int",desc:"Конечное число (НЕ включается)"},{name:"step",type:"int",desc:"Шаг приращения (по умолчанию 1)"}],returns:"range (итерируемый объект)",example:`# От 0 до 4
for i in range(5):
    print(i, end=" ")
print()

# От 10 до 20 с шагом 2
for x in range(10, 21, 2):
    print(x, end=" ")`,output:`0 1 2 3 4 
10 12 14 16 18 20 `,tags:["диапазон","цикл","шаг","числа","for","range","итерация"]},{id:"enumerate",name:"enumerate()",category:"iter",categoryLabel:"Циклы и итерации",syntax:"enumerate(iterable, start=0)",shortDesc:"Возвращает пары (номер, элемент) при проходе по списку.",fullDesc:"Позволяет в цикле for сразу получать и индекс элемента, и само значение без использования ручных счётчиков.",returns:"итератор пар (индекс, элемент)",example:`fruits = ["яблоко", "груша", "апельсин"]
for index, item in enumerate(fruits, start=1):
    print(f"{index}. {item}")`,output:`1. яблоко
2. груша
3. апельсин`,tags:["нумерация","индекс","счетчик","enumerate","номер"]},{id:"sorted",name:"sorted()",category:"iter",categoryLabel:"Циклы и итерации",syntax:"sorted(iterable, key=None, reverse=False)",shortDesc:"Возвращает новый отсортированный список из элементов коллекции.",fullDesc:"Не изменяет исходный список, а создает новый. Флаг reverse=True сортирует по убыванию.",returns:"новый list",example:`nums = [9, 1, 4, 3, 7]
sorted_nums = sorted(nums)
descending = sorted(nums, reverse=True)
print("По возрастанию:", sorted_nums)
print("По убыванию:", descending)
print("Исходный остался цел:", nums)`,output:`По возрастанию: [1, 3, 4, 7, 9]
По убыванию: [9, 7, 4, 3, 1]
Исходный остался цел: [9, 1, 4, 3, 7]`,tags:["сортировка","порядок","упорядочить","sorted","sort","алфавит"]},{id:"reversed",name:"reversed()",category:"iter",categoryLabel:"Циклы и итерации",syntax:"reversed(seq)",shortDesc:"Возвращает обратный итератор для последовательности.",fullDesc:"Позволяет обойти список или строку с конца к началу без создания копии.",returns:"итератор",example:`words = ["начало", "середина", "конец"]
for w in reversed(words):
    print(w)`,output:`конец
середина
начало`,tags:["разворот","обратный","с конца","reversed","reverse"]},{id:"zip",name:"zip()",category:"iter",categoryLabel:"Циклы и итерации",syntax:"zip(*iterables)",shortDesc:"Сшивает несколько списков в пары (кортежи).",fullDesc:"Объединяет элементы из нескольких списков с одинаковыми индексами в кортежи. Останавливается, когда заканчивается самый короткий список.",returns:"итератор кортежей",example:`names = ["Аня", "Боря", "Вова"]
scores = [95, 87, 91]
for name, score in zip(names, scores):
    print(f"{name}: {score} баллов")`,output:`Аня: 95 баллов
Боря: 87 баллов
Вова: 91 баллов`,tags:["склеить","пары","кортеж","параллельно","zip"]},{id:"str_upper",name:"str.upper()",category:"strings",categoryLabel:"Строки",syntax:"string.upper()",shortDesc:"Переводит все символы строки в верхний регистр (ЗАГЛАВНЫЕ).",fullDesc:"Возвращает новую копию строки, где все буквы стали заглавными.",returns:"str",example:`msg = "привет, мир!"
print(msg.upper())`,output:"ПРИВЕТ, МИР!",tags:["регистр","заглавные","капс","upper","uppercase"]},{id:"str_lower",name:"str.lower()",category:"strings",categoryLabel:"Строки",syntax:"string.lower()",shortDesc:"Переводит все символы строки в нижний регистр (строчные).",fullDesc:"Удобно использовать для сравнения строк без учета регистра (например, при проверке ответов пользователя).",returns:"str",example:`answer = "ДА"
if answer.lower() == "да":
    print("Пользователь согласился!")`,output:"Пользователь согласился!",tags:["регистр","строчные","маленькие","lower","lowercase"]},{id:"str_strip",name:"str.strip()",category:"strings",categoryLabel:"Строки",syntax:"string.strip([chars])",shortDesc:"Удаляет пробелы и переносы строк с начала и с конца строки.",fullDesc:"Очень полезен после вызова input(), чтобы убрать случайные пробелы, набранные пользователем.",returns:"str",example:`dirty = "   секретный пароль   \\n"
clean = dirty.strip()
print(f"[{clean}]")`,output:"[секретный пароль]",tags:["очистка","пробелы","края","strip","trim"]},{id:"str_replace",name:"str.replace()",category:"strings",categoryLabel:"Строки",syntax:"string.replace(old, new[, count])",shortDesc:"Заменяет все вхождения подстроки old на подстроку new.",fullDesc:"Не меняет оригинальную строку, а возвращает новую. Необязательный аргумент count ограничивает число замен.",returns:"str",example:`text = "Я люблю Java. Java классный язык."
result = text.replace("Java", "Python")
print(result)`,output:"Я люблю Python. Python классный язык.",tags:["замена","подстрока","поменять","replace","substitute"]},{id:"str_split",name:"str.split()",category:"strings",categoryLabel:"Строки",syntax:"string.split(sep=None, maxsplit=-1)",shortDesc:"Разбивает строку на список подстрок по разделителю.",fullDesc:"Если разделитель sep не указан, делит строку по любым пробельным символам (пробелы, табы, переносы).",returns:"list[str]",example:`raw = "10 20 30 40 50"
numbers = raw.split()
print(numbers)  # ['10', '20', '30', '40', '50']

tags = "игры,код,питон,учеба"
print(tags.split(","))`,output:`['10', '20', '30', '40', '50']
['игры', 'код', 'питон', 'учеба']`,tags:["разбить","разделитель","список","split","деление"]},{id:"str_join",name:"str.join()",category:"strings",categoryLabel:"Строки",syntax:"separator.join(iterable)",shortDesc:"Склеивает элементы списка в единую строку через разделитель.",fullDesc:"Все элементы в списке должны быть строками (str).",returns:"str",example:`words = ["Я", "изучаю", "Python", "3"]
sentence = " ".join(words)
print(sentence)

csv_line = ";".join(["1", "Иван", "100"])
print(csv_line)`,output:`Я изучаю Python 3
1;Иван;100`,tags:["склеить","объединить","соединить","join","строка"]},{id:"str_find",name:"str.find()",category:"strings",categoryLabel:"Строки",syntax:"string.find(sub[, start[, end]])",shortDesc:"Ищет индекс первого вхождения подстроки sub. Возвращает -1, если не найдено.",fullDesc:"Позволяет быстро узнать позицию символа или слова внутри строки.",returns:"int (индекс или -1)",example:`email = "student@school.ru"
at_index = email.find("@")
print("Символ @ на позиции:", at_index)
print("Домен:", email[at_index + 1:])`,output:`Символ @ на позиции: 7
Домен: school.ru`,tags:["поиск","индекс","найти","find","search","позиция"]},{id:"str_startswith",name:"str.startswith()",category:"strings",categoryLabel:"Строки",syntax:"string.startswith(prefix)",shortDesc:"Проверяет, начинается ли строка с указанного префикса.",fullDesc:"Возвращает True или False. Полезно для фильтрации команд, ссылок или расширений.",returns:"bool",example:`url = "https://python.org"
if url.startswith("https://"):
    print("Безопасное соединение")`,output:"Безопасное соединение",tags:["префикс","начало","startswith","проверка"]},{id:"str_isdigit",name:"str.isdigit()",category:"strings",categoryLabel:"Строки",syntax:"string.isdigit()",shortDesc:"Проверяет, состоит ли строка только из цифр.",fullDesc:"Идеально подходит для валидации ввода перед вызовом int().",returns:"bool",example:`user_val = "12345"
if user_val.isdigit():
    num = int(user_val)
    print("Число корректно:", num)
else:
    print("Ошибка: введите только цифры!")`,output:"Число корректно: 12345",tags:["цифры","валидация","isdigit","проверка числа"]},{id:"list_append",name:"list.append()",category:"lists",categoryLabel:"Списки",syntax:"list.append(item)",shortDesc:"Добавляет один новый элемент в самый конец списка.",fullDesc:"Изменяет сам список на месте и возвращает None.",returns:"None",example:`inventory = ["меч", "щит"]
inventory.append("зелье здоровья")
print(inventory)`,output:"['меч', 'щит', 'зелье здоровья']",tags:["добавить","конец","список","append","добавление"]},{id:"list_pop",name:"list.pop()",category:"lists",categoryLabel:"Списки",syntax:"list.pop([index])",shortDesc:"Удаляет элемент по индексу и возвращает его значение.",fullDesc:"Если индекс не указан, удаляет и возвращает самый последний элемент списка.",returns:"удаленный элемент",example:`stack = [10, 20, 30]
last = stack.pop()
print("Удален:", last)
print("Осталось в списке:", stack)`,output:`Удален: 30
Осталось в списке: [10, 20]`,tags:["удалить","извлечь","стек","pop","remove"]},{id:"list_insert",name:"list.insert()",category:"lists",categoryLabel:"Списки",syntax:"list.insert(index, item)",shortDesc:"Вставляет элемент в список по указанному индексу.",fullDesc:"Все элементы, начиная с указанного индекса, сдвигаются вправо.",returns:"None",example:`players = ["Алиса", "Чарли"]
players.insert(1, "Боб")  # Вставляем на позицию 1
print(players)`,output:"['Алиса', 'Боб', 'Чарли']",tags:["вставить","позиция","индекс","insert"]},{id:"list_remove",name:"list.remove()",category:"lists",categoryLabel:"Списки",syntax:"list.remove(value)",shortDesc:"Удаляет первое вхождение элемента со значением value из списка.",fullDesc:"Если элемента нет в списке, возникает ошибка ValueError.",returns:"None",example:`colors = ["красный", "синий", "зеленый", "синий"]
colors.remove("синий")  # удалит только первый синий
print(colors)`,output:"['красный', 'зеленый', 'синий']",tags:["удаление","значение","remove","стереть"]},{id:"list_count",name:"list.count()",category:"lists",categoryLabel:"Списки",syntax:"list.count(value)",shortDesc:"Считает, сколько раз значение value встречается в списке.",fullDesc:"Возвращает целое неотрицательное число.",returns:"int",example:`grades = [5, 4, 5, 3, 5, 4]
print("Количество пятерок:", grades.count(5))`,output:"Количество пятерок: 3",tags:["подсчет","вхождения","сколько","count"]},{id:"list_sort",name:"list.sort()",category:"lists",categoryLabel:"Списки",syntax:"list.sort(key=None, reverse=False)",shortDesc:"Сортирует список на месте (изменяя сам список).",fullDesc:"В отличие от функции sorted(), не создает новый список, а меняет текущий и возвращает None.",returns:"None",example:`numbers = [42, 10, 5, 99, 1]
numbers.sort()
print(numbers)`,output:"[1, 5, 10, 42, 99]",tags:["сортировать","порядок","sort","на месте"]},{id:"dict_keys",name:"dict.keys()",category:"dicts",categoryLabel:"Словари",syntax:"dict.keys()",shortDesc:"Возвращает коллекцию всех ключей словаря.",fullDesc:"Позволяет итерироваться по всем ключам словаря в цикле for или проверить наличие ключа оператором `in`.",returns:"dict_keys",example:`hero = {"имя": "Артур", "класс": "Воин", "сила": 18}
print(list(hero.keys()))`,output:"['имя', 'класс', 'сила']",tags:["ключи","словарь","keys","список ключей"]},{id:"dict_values",name:"dict.values()",category:"dicts",categoryLabel:"Словари",syntax:"dict.values()",shortDesc:"Возвращает коллекцию всех значений словаря.",fullDesc:"Позволяет суммировать значения словаря (например, цены товаров) или выводить их без ключей.",returns:"dict_values",example:`prices = {"хлеб": 40, "молоко": 80, "сыр": 150}
print("Общая сумма:", sum(prices.values()))`,output:"Общая сумма: 270",tags:["значения","словарь","values","данные"]},{id:"dict_items",name:"dict.items()",category:"dicts",categoryLabel:"Словари",syntax:"dict.items()",shortDesc:"Возвращает пары (ключ, значение) словаря.",fullDesc:"Очень удобен в цикле: `for key, val in d.items(): ...`",returns:"dict_items",example:`capitals = {"Россия": "Москва", "Франция": "Париж"}
for country, city in capitals.items():
    print(f"Столица страны {country} — {city}")`,output:`Столица страны Россия — Москва
Столица страны Франция — Париж`,tags:["пары","ключ-значение","items","обход словаря"]},{id:"dict_get",name:"dict.get()",category:"dicts",categoryLabel:"Словари",syntax:"dict.get(key, default=None)",shortDesc:"Безопасно извлекает значение по ключу без ошибки KeyError.",fullDesc:"Если ключ отсутствует в словаре, возвращает значение по умолчанию (default), а не вызывает ошибку.",returns:"значение или default",example:`user = {"name": "Ольга"}
age = user.get("age", "Не указан")
print("Возраст:", age)`,output:"Возраст: Не указан",tags:["получить","безопасно","default","get","по умолчанию"]},{id:"math_sqrt",name:"math.sqrt()",category:"modules",categoryLabel:"Модули",syntax:"math.sqrt(x)",shortDesc:"Вычисляет квадратный корень из неотрицательного числа x.",fullDesc:"Требует предварительного `import math`. Число x должно быть >= 0.",returns:"float",example:`import math

c = math.sqrt(25)
print(c)  # 5.0

# Теорема Пифагора
a, b = 3, 4
hypotenuse = math.sqrt(a**2 + b**2)
print("Гипотенуза:", hypotenuse)`,output:`5.0
Гипотенуза: 5.0`,tags:["корень","квадратный","math","sqrt","пифагор"]},{id:"math_pi",name:"math.pi",category:"modules",categoryLabel:"Модули",syntax:"math.pi",shortDesc:"Константа числа Пи (≈ 3.141592653589793).",fullDesc:"Отношение длины окружности к ее диаметру.",returns:"float",example:`import math

radius = 5
circle_area = math.pi * (radius ** 2)
print(f"Площадь круга: {circle_area:.2f}")`,output:"Площадь круга: 78.54",tags:["пи","число пи","math","pi","круг"]},{id:"random_randint",name:"random.randint()",category:"modules",categoryLabel:"Модули",syntax:"random.randint(a, b)",shortDesc:"Возвращает случайное целое число N такое, что a <= N <= b.",fullDesc:"Обе границы a и b ВКЛЮЧАЮТСЯ в диапазон. Требует `import random`.",returns:"int",example:`import random

random.seed(42)
dice = random.randint(1, 6)
print("Бросок кубика:", dice)`,output:"Бросок кубика: 3",tags:["рандом","случайное","кубик","randint","random","генерация"]},{id:"random_choice",name:"random.choice()",category:"modules",categoryLabel:"Модули",syntax:"random.choice(sequence)",shortDesc:"Выбирает один случайный элемент из непустого списка или строки.",fullDesc:"Требует `import random`. Список не должен быть пустым.",returns:"один элемент",example:`import random

random.seed(42)
options = ["Камень", "Ножницы", "Бумага"]
bot_move = random.choice(options)
print("Ход бота:", bot_move)`,output:"Ход бота: Ножницы",tags:["выбор","случайный","элемент","choice","random"]},{id:"random_shuffle",name:"random.shuffle()",category:"modules",categoryLabel:"Модули",syntax:"random.shuffle(x)",shortDesc:"Перемешивает элементы списка в случайном порядке на месте.",fullDesc:"Изменяет сам переданный список и возвращает None.",returns:"None",example:`import random

random.seed(42)
deck = [1, 2, 3, 4, 5]
random.shuffle(deck)
print("Перемешанная колода:", deck)`,output:"Перемешанная колода: [1, 5, 3, 4, 2]",tags:["перемешать","колода","тасовать","shuffle","random"]},{id:"tkinter_tk",name:"tkinter.Tk()",category:"tkinter",categoryLabel:"Графика (Tkinter)",syntax:"root = tkinter.Tk()",shortDesc:"Создает главное базовое окно графического приложения. (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",fullDesc:"Корневой объект любого GUI-приложения в Tkinter. Инициализирует графическую подсистему и создает окно на рабочем столе. Примечание: Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE.",returns:"Tk (объект окна)",example:`import tkinter as tk

root = tk.Tk()
root.title("Мое окно")
root.geometry("300x200")
root.mainloop()
print("Окно Tkinter успешно создано!")`,output:"Окно Tkinter успешно создано!",tags:["окно","главное","tkinter","tk","gui","интерфейс","создать окно"]},{id:"tkinter_mainloop",name:"window.mainloop()",category:"tkinter",categoryLabel:"Графика (Tkinter)",syntax:"root.mainloop()",shortDesc:"Запускает цикл обработки событий окна. (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",fullDesc:"Слушает действия пользователя: клики мыши, ввод текста, закрытие окна. Без вызова этого метода окно не будет реагировать или сразу закроется. Примечание: Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE.",returns:"None",example:`import tkinter as tk

root = tk.Tk()
# Все виджеты создаются до mainloop!
root.mainloop()
print("Цикл событий mainloop завершен")`,output:"Цикл событий mainloop завершен",tags:["цикл","события","запуск","mainloop","tkinter","слушать"]},{id:"tkinter_label",name:"tkinter.Label()",category:"tkinter",categoryLabel:"Графика (Tkinter)",syntax:"label = tk.Label(master, text='...', font=(...))",shortDesc:"Текстовая надпись для отображения текста. (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",fullDesc:"Один из базовых виджетов Tkinter. Позволяет выводить подсказки, заголовки и результаты расчетов в окне. Примечание: Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE.",params:[{name:"master",type:"widget",desc:"Родительский элемент (окно или фрейм)"},{name:"text",type:"str",desc:"Отображаемый текст надписи"},{name:"font",type:"tuple",desc:"Шрифт, например ('Arial', 14, 'bold')"},{name:"bg / fg",type:"str",desc:"Цвет фона (bg) и текста (fg)"}],returns:"Label (виджет)",example:`import tkinter as tk

root = tk.Tk()
label = tk.Label(root, text="Привет, ученик!", fg="blue")
label.pack(pady=10)
root.mainloop()
print("Надпись Label размещена")`,output:"Надпись Label размещена",tags:["текст","надпись","label","лейбл","tkinter","виджет"]},{id:"tkinter_button",name:"tkinter.Button()",category:"tkinter",categoryLabel:"Графика (Tkinter)",syntax:"button = tk.Button(master, text='...', command=func)",shortDesc:"Интерактивная кнопка для выполнения функции при нажатии. (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",fullDesc:"Параметр command связывает кнопку с функцией в коде. Важно передавать имя функции без круглых скобок! Примечание: Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE.",params:[{name:"master",type:"widget",desc:"Родительское окно"},{name:"text",type:"str",desc:"Текст на кнопке"},{name:"command",type:"callable",desc:"Функция, вызываемая при клике мышью"}],returns:"Button (виджет)",example:`import tkinter as tk

def say_hi():
    print("Кнопка нажата!")

root = tk.Tk()
btn = tk.Button(root, text="Нажми меня", command=say_hi)
btn.pack(pady=10)
btn.invoke()
root.mainloop()`,output:"Кнопка нажата!",tags:["кнопка","клик","нажатие","button","command","действие","tkinter"]},{id:"tkinter_entry",name:"tkinter.Entry()",category:"tkinter",categoryLabel:"Графика (Tkinter)",syntax:"entry = tk.Entry(master, width=20)",shortDesc:"Однострочное текстовое поле для ввода данных пользователем. (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",fullDesc:"Аналог функции input() в графическом интерфейсе. Считывается методом entry.get(). Очищается через entry.delete(0, tk.END). Примечание: Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE.",params:[{name:"master",type:"widget",desc:"Родительское окно"},{name:"width",type:"int",desc:"Ширина поля в символах"},{name:"show",type:"str",desc:"Символ маскировки, например '*' для паролей"}],returns:"Entry (виджет)",example:`import tkinter as tk

root = tk.Tk()
entry = tk.Entry(root, width=25)
entry.pack(pady=5)
entry.insert(0, "Python")

def print_text():
    print("Введено:", entry.get())

btn = tk.Button(root, text="Считать", command=print_text)
btn.pack()
btn.invoke()
root.mainloop()`,output:"Введено: Python",tags:["ввод","поле ввода","entry","текст","get","форма","tkinter"]},{id:"tkinter_pack",name:"widget.pack()",category:"tkinter",categoryLabel:"Графика (Tkinter)",syntax:"widget.pack(side='top', fill='none', padx=0, pady=0)",shortDesc:"Менеджер геометрии для простой последовательной упаковки виджетов. (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",fullDesc:"Автоматически упаковывает виджеты друг под другом (по умолчанию) или в ряд. Параметры padx и pady задают отступы. Примечание: Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE.",params:[{name:"side",type:"str",desc:"'top', 'bottom', 'left', 'right'"},{name:"padx / pady",type:"int",desc:"Отступы по горизонтали и вертикали"},{name:"fill",type:"str",desc:"'x', 'y' или 'both' — растяжение виджета"}],returns:"None",example:`import tkinter as tk

root = tk.Tk()
tk.Label(root, text="Сверху").pack(side="top", pady=5)
tk.Button(root, text="Кнопка").pack(pady=10)
root.mainloop()
print("Виджеты упакованы через pack()")`,output:"Виджеты упакованы через pack()",tags:["упаковать","размещение","pack","отступы","позиционирование","tkinter"]},{id:"tkinter_grid",name:"widget.grid()",category:"tkinter",categoryLabel:"Графика (Tkinter)",syntax:"widget.grid(row=0, column=0, padx=5, pady=5)",shortDesc:"Табличный менеджер геометрии (строки и столбцы). (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",fullDesc:"Размещает виджеты в ячейках таблицы. Идеален для аккуратных форм и калькуляторов. Нельзя смешивать с pack() в одном окне! Примечание: Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE.",params:[{name:"row",type:"int",desc:"Номер строки (с 0)"},{name:"column",type:"int",desc:"Номер столбца (с 0)"},{name:"columnspan",type:"int",desc:"Объединение нескольких колонок"},{name:"padx / pady",type:"int",desc:"Отступы между ячейками"}],returns:"None",example:`import tkinter as tk

root = tk.Tk()
tk.Label(root, text="Имя:").grid(row=0, column=0)
tk.Entry(root).grid(row=0, column=1)
tk.Button(root, text="OK").grid(row=1, column=0, columnspan=2)
root.mainloop()
print("Виджеты размещены в сетке grid()")`,output:"Виджеты размещены в сетке grid()",tags:["сетка","таблица","grid","строки","столбцы","ячейка","tkinter"]},{id:"tkinter_geometry",name:"window.geometry()",category:"tkinter",categoryLabel:"Графика (Tkinter)",syntax:"root.geometry('ширинаxвысота+x+y')",shortDesc:"Устанавливает размеры окна и его положение на экране. (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",fullDesc:"Принимает строку вида 'ШиринаxВысота' в пикселях с маленькой латинской буквой 'x' (например: '400x300'). Примечание: Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE.",returns:"None",example:`import tkinter as tk

root = tk.Tk()
root.geometry("500x400") # Ширина 500px, высота 400px
root.mainloop()
print("Размер окна установлен: 500x400")`,output:"Размер окна установлен: 500x400",tags:["размер","ширина","высота","geometry","пиксели","tkinter"]},{id:"tkinter_config",name:"widget.config()",category:"tkinter",categoryLabel:"Графика (Tkinter)",syntax:"widget.config(text='...', bg='...')",shortDesc:"Динамически изменяет свойства уже созданного виджета. (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",fullDesc:"Позволяет обновлять текст, цвета и шрифты надписей или кнопок во время работы программы. Примечание: Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE.",returns:"None",example:`import tkinter as tk

root = tk.Tk()
label = tk.Label(root, text="Старый текст")
label.pack()

def update():
    label.config(text="Новый текст!", fg="green")
    print("Текст надписи обновлен:", label.opts.get("text"))

btn = tk.Button(root, text="Обновить", command=update)
btn.pack()
btn.invoke()
root.mainloop()`,output:"Текст надписи обновлен: Новый текст!",tags:["изменить","свойства","текст","цвет","config","configure","tkinter"]}],gh=({onInsertCode:o,onOpenInSandbox:m,isModal:h=!1,onClose:d})=>{const[H,G]=le.useState(""),[W,z]=le.useState("all"),[$,re]=le.useState(null),[Z,_]=le.useState(null),k=le.useRef(null);le.useEffect(()=>{var N;(N=k.current)==null||N.focus()},[]),le.useEffect(()=>{const N=B=>{var P;B.key==="/"&&document.activeElement!==k.current?(B.preventDefault(),(P=k.current)==null||P.focus()):B.key==="Escape"&&($?re(null):h&&d&&d())};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[h,d,$]);const me=le.useMemo(()=>{const N=H.trim().toLowerCase();return sh.filter(B=>{if(!(W==="all"||B.category===W))return!1;if(!N)return!0;const E=B.name.toLowerCase().includes(N),g=B.syntax.toLowerCase().includes(N),R=B.shortDesc.toLowerCase().includes(N),M=B.fullDesc.toLowerCase().includes(N),L=B.tags.some(F=>F.toLowerCase().includes(N));return E||g||R||M||L})},[H,W]),ge=(N,B)=>{navigator.clipboard.writeText(B),Gn(),_(N),setTimeout(()=>_(null),2e3)};return s.jsx("div",{className:`font-mono text-[#0B0B0F] ${h?"fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 md:p-6":"max-w-[1360px] mx-auto p-3 md:p-6 space-y-5"}`,children:s.jsxs("div",{className:`bg-white border-[1.5px] border-[#E3E3E9] rounded-2xl shadow-xl flex flex-col overflow-hidden ${h?"w-full max-w-5xl max-h-[90vh]":"w-full min-h-[750px]"}`,children:[s.jsxs("div",{className:"p-4 md:p-6 border-b border-[#E3E3E9] bg-gradient-to-r from-[#F7F7FA] to-white flex items-center justify-between gap-4 flex-wrap",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A54C4] to-[#5636E0] text-white flex items-center justify-center shadow-xs",children:s.jsx(kr,{className:"w-5 h-5"})}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("h2",{className:"text-[18px] md:text-[20px] font-black tracking-tight text-[#0B0B0F]",children:"Справочник и поиск по функциям Python"}),s.jsxs("span",{className:"text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#E3E3E9] text-[#63636E]",children:[sh.length," функций"]})]}),s.jsx("p",{className:"text-[12px] text-[#63636E]",children:"Быстрый интерактивный поиск синтаксиса, параметров и примеров кода"})]})]}),s.jsx("div",{className:"flex items-center gap-2",children:h&&d&&s.jsx("button",{onClick:d,className:"p-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#63636E] hover:text-[#0B0B0F] transition-colors cursor-pointer",title:"Закрыть (Esc)",children:s.jsx(dc,{className:"w-5 h-5"})})})]}),s.jsxs("div",{className:"p-4 md:p-6 border-b border-[#E3E3E9] space-y-3 bg-[#FCFCFD]",children:[s.jsxs("div",{className:"relative",children:[s.jsx(Ga,{className:"w-5 h-5 text-[#63636E] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"}),s.jsx("input",{ref:k,type:"text",value:H,onChange:N=>G(N.target.value),placeholder:"Поиск по названию или описанию (например: print, ввод, len, split, рандом)...",className:"w-full bg-white border-2 border-[#E3E3E9] focus:border-[#0A54C4] rounded-xl pl-12 pr-10 py-3 text-[14px] font-mono outline-none shadow-2xs transition-all"}),H&&s.jsx("button",{onClick:()=>G(""),className:"absolute right-3.5 top-1/2 -translate-y-1/2 text-[#63636E] hover:text-[#0B0B0F] p-1 cursor-pointer",title:"Очистить",children:s.jsx(dc,{className:"w-4 h-4"})})]}),s.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none",children:oy.map(N=>s.jsx("button",{onClick:()=>{z(N.id),_n()},className:`px-3 py-1.5 rounded-lg text-[11.5px] font-bold whitespace-nowrap transition-all cursor-pointer ${W===N.id?"bg-[#0A54C4] text-white shadow-xs":"bg-[#F1F1F4] text-[#63636E] hover:bg-[#E3E3E9] hover:text-[#0B0B0F]"}`,children:N.label},N.id))}),s.jsxs("div",{className:"text-[11.5px] text-[#63636E] flex items-center justify-between",children:[s.jsxs("span",{children:["Найдено: ",s.jsx("strong",{children:me.length})]}),s.jsxs("span",{className:"text-[10.5px] text-[#63636E]/70 hidden sm:inline",children:["Нажмите ",s.jsx("strong",{children:"/"})," в любом месте для быстрого перехода к поиску"]})]})]}),s.jsx("div",{className:"flex-1 overflow-y-auto p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:me.length===0?s.jsxs("div",{className:"col-span-full py-16 text-center text-[#63636E] space-y-3",children:[s.jsx(Ga,{className:"w-10 h-10 mx-auto opacity-30"}),s.jsxs("div",{className:"text-[15px] font-bold",children:["Ничего не найдено по запросу «",H,"»"]}),s.jsxs("p",{className:"text-[12px] max-w-sm mx-auto",children:["Попробуй ввести английское название функции (например: ",s.jsx("code",{children:"range"}),", ",s.jsx("code",{children:"append"}),") или ключевое слово (например: ",s.jsx("code",{children:"длина"}),", ",s.jsx("code",{children:"число"}),")."]}),s.jsx("button",{onClick:()=>{G(""),z("all")},className:"px-4 py-2 bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0B0B0F] rounded-xl text-[12px] font-bold transition-all cursor-pointer",children:"Сбросить фильтры"})]}):me.map(N=>s.jsxs("div",{className:"bg-[#F7F7FA] hover:bg-white rounded-xl border border-[#E3E3E9] hover:border-[#0A54C4] p-4.5 flex flex-col justify-between transition-all shadow-2xs hover:shadow-sm group space-y-3",children:[s.jsxs("div",{className:"space-y-2.5",children:[s.jsxs("div",{className:"flex items-start justify-between gap-2",children:[s.jsxs("div",{children:[s.jsx("span",{className:"text-[10px] font-extrabold uppercase tracking-wider text-[#0A54C4] bg-[#0A54C4]/10 px-2 py-0.5 rounded-md",children:N.categoryLabel}),s.jsx("h3",{className:"text-[17px] font-black text-[#0B0B0F] mt-1 group-hover:text-[#0A54C4] transition-colors",children:N.name})]}),s.jsx("button",{onClick:()=>ge(N.id,N.example),className:"p-1.5 rounded-lg hover:bg-[#E3E3E9] text-[#63636E] transition-colors cursor-pointer",title:"Скопировать пример",children:Z===N.id?s.jsx(qi,{className:"w-4 h-4 text-[#0A7A50]"}):s.jsx(Er,{className:"w-4 h-4"})})]}),s.jsx("div",{className:"bg-[#16161F] text-[#4FF0A7] px-2.5 py-1.5 rounded-lg text-[12px] font-mono overflow-x-auto",children:s.jsx("code",{children:N.syntax})}),s.jsx("p",{className:"text-[12px] text-[#63636E] leading-relaxed",children:N.shortDesc}),s.jsxs("div",{className:"bg-white border border-[#E3E3E9] rounded-lg p-2.5 text-[11px] space-y-1 font-mono",children:[s.jsx("div",{className:"text-[10px] font-bold uppercase text-[#63636E]",children:"Пример:"}),s.jsx("pre",{className:"text-[#0B0B0F] overflow-x-auto whitespace-pre-wrap leading-tight",children:N.example})]})]}),s.jsxs("div",{className:"pt-2 border-t border-[#E3E3E9] flex items-center justify-between gap-2 text-[11.5px] font-bold",children:[o&&s.jsxs("button",{onClick:()=>{o(N.example),Gn()},className:"text-[#0A54C4] hover:underline flex items-center gap-1 cursor-pointer",children:[s.jsx(wl,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Вставить в код"})]}),m&&s.jsxs("button",{onClick:()=>{m(N.example),Gn()},className:"text-[#5636E0] hover:underline flex items-center gap-1 cursor-pointer ml-auto",children:[s.jsx(Hi,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Песочница"})]})]})]},N.id))})]})})},uy=`END = "end"
WIDGETS = []
LOG = []

class Widget:
    def __init__(self, master=None, **kw):
        self.master = master
        self.opts = dict(kw)
        self.layout = None
        self.kind = self.__class__.__name__
        WIDGETS.append(self)
    def pack(self, **kw):
        self.layout = ("pack", kw)
    def grid(self, **kw):
        self.layout = ("grid", kw)
    def place(self, **kw):
        self.layout = ("place", kw)
    def config(self, **kw):
        self.opts.update(kw)
    configure = config
    def cget(self, key):
        return self.opts.get(key, "")
    def bind(self, event, func):
        self.opts["bind:" + event] = func
    def destroy(self):
        if self in WIDGETS:
            WIDGETS.remove(self)

class Tk(Widget):
    def title(self, t):
        self.opts["title"] = t
    def geometry(self, g):
        self.opts["geometry"] = g
    def resizable(self, *a):
        pass
    def mainloop(self):
        pass
    def after(self, ms, func=None, *args):
        self.opts["after"] = (ms, func)
    def protocol(self, name, func=None):
        self.opts["protocol:" + str(name)] = func

class Label(Widget):
    pass

class Frame(Widget):
    pass

class Button(Widget):
    def invoke(self):
        if "command" in self.opts and self.opts["command"] is not None:
            self.opts["command"]()

class Entry(Widget):
    def __init__(self, master=None, **kw):
        Widget.__init__(self, master, **kw)
        self.text = ""
    def get(self):
        return self.text
    def insert(self, index, s):
        s = str(s)
        if index == 0 or index == "0":
            self.text = s + self.text
        else:
            self.text = self.text + s
    def delete(self, first, last=None):
        self.text = ""

class Listbox(Widget):
    def __init__(self, master=None, **kw):
        Widget.__init__(self, master, **kw)
        self.items = []
        self.item_opts = []
        self.selected = []
    def insert(self, index, *items):
        for it in items:
            if index == "end" or index == END:
                self.items.append(str(it))
                self.item_opts.append({})
            else:
                self.items.insert(int(index), str(it))
                self.item_opts.insert(int(index), {})
    def delete(self, first, last=None):
        if last == "end" or last == END:
            self.items = self.items[:int(first)]
            self.item_opts = self.item_opts[:int(first)]
        elif last is None:
            self.items.pop(int(first))
            self.item_opts.pop(int(first))
        else:
            del self.items[int(first):int(last) + 1]
            del self.item_opts[int(first):int(last) + 1]
        self.selected = []
    def get(self, first, last=None):
        if last is None:
            return self.items[int(first)]
        if last == "end" or last == END:
            return tuple(self.items[int(first):])
        return tuple(self.items[int(first):int(last) + 1])
    def size(self):
        return len(self.items)
    def curselection(self):
        return tuple(self.selected)
    def selection_set(self, index):
        self.selected = [int(index)]
    def selection_clear(self, first=0, last=None):
        self.selected = []
    def itemconfig(self, index, **kw):
        self.item_opts[int(index)].update(kw)
    itemconfigure = itemconfig

class StringVar:
    def __init__(self, value=""):
        self.v = value
    def get(self):
        return self.v
    def set(self, v):
        self.v = v

class IntVar(StringVar):
    def __init__(self, value=0):
        StringVar.__init__(self, value)

class BooleanVar(StringVar):
    def __init__(self, value=False):
        self.v = bool(value)
    def get(self):
        return bool(self.v)
    def set(self, v):
        self.v = bool(v)

class Scale(Widget):
    def __init__(self, master=None, **kw):
        Widget.__init__(self, master, **kw)
        self.val = kw.get("from_", kw.get("from", 0))
    def get(self):
        return self.val
    def set(self, val):
        self.val = int(val) if isinstance(val, (int, float)) else val
        if "command" in self.opts and self.opts["command"] is not None:
            self.opts["command"](str(self.val))

class Checkbutton(Widget):
    def __init__(self, master=None, **kw):
        Widget.__init__(self, master, **kw)
        self.var = kw.get("variable", None)
    def select(self):
        if self.var is not None:
            self.var.set(True)
    def deselect(self):
        if self.var is not None:
            self.var.set(False)
    def toggle(self):
        if self.var is not None:
            self.var.set(not self.var.get())
`,cy=`import tkinter
ANSWER_YES = True

def _show(kind, title, message):
    tkinter.LOG.append((kind, title, message))
    print("[" + kind + "] " + str(title) + ": " + str(message))

def showinfo(title="", message="", **kw):
    _show("info", title, message)
    return "ok"

def showwarning(title="", message="", **kw):
    _show("warning", title, message)
    return "ok"

def showerror(title="", message="", **kw):
    _show("error", title, message)
    return "ok"

def askyesno(title="", message="", **kw):
    _show("вопрос", title, message)
    return ANSWER_YES
`,dy=`import tkinter

CHOSEN_DIR = "C:/Music"

def askdirectory(**kw):
    tkinter.LOG.append(("filedialog", "Выбор папки", CHOSEN_DIR))
    return CHOSEN_DIR

def askopenfilename(**kw):
    return ""

def asksaveasfilename(**kw):
    return ""
`,rh=`# Pygame & Pygame.mixer stub for Skulpt

class _Music:
    def __init__(self):
        self._current_track = ""
        self._is_playing = False
        self._is_paused = False
        self._volume = 1.0

    def load(self, path):
        self._current_track = str(path)

    def play(self, loops=0, start=0.0):
        self._is_playing = True
        self._is_paused = False

    def pause(self):
        if self._is_playing:
            self._is_paused = True

    def unpause(self):
        if self._is_playing:
            self._is_paused = False

    def stop(self):
        self._is_playing = False
        self._is_paused = False

    def set_volume(self, vol):
        self._volume = max(0.0, min(1.0, float(vol)))

    def get_volume(self):
        return self._volume

    def get_busy(self):
        return self._is_playing and not self._is_paused

class _Mixer:
    def __init__(self):
        self.music = _Music()

    def init(self, *a, **kw):
        pass

    def quit(self):
        self.music.stop()

mixer = _Mixer()

def init():
    pass

def quit():
    mixer.quit()
`,oh=`# OS module stub for Skulpt

class _Path:
    def join(self, *parts):
        res = []
        for p in parts:
            p_str = str(p).rstrip("/\\\\")
            if p_str:
                res.append(p_str)
        return "/".join(res)

    def isdir(self, p):
        s = str(p).strip()
        if not s:
            return False
        return not any(s.lower().endswith(ext) for ext in [".mp3", ".wav", ".ogg", ".txt", ".json", ".jpg", ".png", ".py"])

    def isfile(self, p):
        s = str(p).strip()
        if not s:
            return False
        return any(s.lower().endswith(ext) for ext in [".mp3", ".wav", ".ogg", ".txt", ".json", ".jpg", ".png", ".py"])

    def exists(self, p):
        return bool(str(p).strip())

    def split(self, p):
        s = str(p)
        if "/" in s:
            parts = s.rsplit("/", 1)
            return (parts[0], parts[1])
        if "\\\\" in s:
            parts = s.rsplit("\\\\", 1)
            return (parts[0], parts[1])
        return ("", s)

    def splitext(self, p):
        s = str(p)
        dot = s.rfind(".")
        if dot != -1 and dot > s.rfind("/"):
            return (s[:dot], s[dot:])
        return (s, "")

path = _Path()

DEFAULT_MUSIC_FILES = [
    "01 Intro.mp3",
    "02 Synthwave Dream.mp3",
    "03 Cyberpunk City.ogg",
    "04 Neon Lights.wav",
    "05 Retro Funk.MP3",
    "cover.jpg",
    "readme.txt",
    "Старое"
]

def listdir(p="."):
    p_str = str(p).strip()
    if not p_str:
        raise FileNotFoundError("[Errno 2] No such file or directory: ''")
    return list(DEFAULT_MUSIC_FILES)
`,fy=`
FILES = {}
class FileNotFoundError(Exception):
    pass
class _File:
    def __init__(self, name, mode):
        self.name = name
        self.mode = mode
        if "r" in mode:
            if name not in FILES:
                raise FileNotFoundError("[Errno 2] No such file or directory: '" + name + "'")
            self.data = FILES[name]
        elif "a" in mode:
            self.data = FILES.get(name, "")
        else:
            self.data = ""
        self.pos = 0
    def read(self):
        r = self.data[self.pos:]
        self.pos = len(self.data)
        return r
    def readlines(self):
        return [l + "\\n" for l in self.read().split("\\n") if l != ""]
    def write(self, s):
        self.data = self.data + s
    def close(self):
        if "r" not in self.mode:
            FILES[self.name] = self.data
    def __enter__(self):
        return self
    def __exit__(self, a, b, c):
        self.close()
def open(name, mode="r", encoding=None):
    return _File(name, mode)
`,my=`
class JSONDecodeError(ValueError):
    pass
def _esc(s, ea):
    s = s.replace("\\\\", "\\\\\\\\").replace('"', '\\\\"').replace("\\n", "\\\\n")
    return '"' + s + '"'
def dumps(o, ensure_ascii=True, indent=None, _lvl=0):
    pad = "" if indent is None else "\\n" + " " * (indent * (_lvl + 1))
    end = "" if indent is None else "\\n" + " " * (indent * _lvl)
    sep = ", " if indent is None else ","
    if o is None: return "null"
    if o is True: return "true"
    if o is False: return "false"
    if isinstance(o, (int, float)): return str(o)
    if isinstance(o, str): return _esc(o, ensure_ascii)
    if isinstance(o, (list, tuple)):
        if len(o) == 0: return "[]"
        return "[" + sep.join([pad + dumps(x, ensure_ascii, indent, _lvl + 1) for x in o]) + end + "]"
    if isinstance(o, dict):
        if len(o) == 0: return "{}"
        return "{" + sep.join([pad + _esc(str(k), ensure_ascii) + ": " + dumps(o[k], ensure_ascii, indent, _lvl + 1) for k in o]) + end + "}"
    raise TypeError("Object of type " + type(o).__name__ + " is not JSON serializable")
def dump(o, f, ensure_ascii=True, indent=None):
    f.write(dumps(o, ensure_ascii, indent))
class _P:
    def __init__(self, s):
        self.s = s
        self.i = 0
    def ws(self):
        while self.i < len(self.s) and self.s[self.i] in " \\t\\n\\r":
            self.i += 1
    def err(self, m):
        raise JSONDecodeError(m + ": char " + str(self.i))
    def val(self):
        self.ws()
        if self.i >= len(self.s): self.err("Expecting value")
        c = self.s[self.i]
        if c == "{": return self.obj()
        if c == "[": return self.arr()
        if c == '"': return self.str_()
        for w, v in (("true", True), ("false", False), ("null", None)):
            if self.s[self.i:self.i + len(w)] == w:
                self.i += len(w)
                return v
        j = self.i
        while j < len(self.s) and self.s[j] in "-+.0123456789eE": j += 1
        if j == self.i: self.err("Expecting value")
        t = self.s[self.i:j]
        self.i = j
        if "." in t or "e" in t or "E" in t: return float(t)
        return int(t)
    def str_(self):
        self.i += 1
        r = ""
        while True:
            if self.i >= len(self.s): self.err("Unterminated string")
            c = self.s[self.i]
            if c == '"':
                self.i += 1
                return r
            if c == "\\\\":
                self.i += 1
                n = self.s[self.i]
                r += {"n": "\\n", "t": "\\t"}.get(n, n)
            else:
                r += c
            self.i += 1
    def arr(self):
        self.i += 1
        r = []
        self.ws()
        if self.s[self.i] == "]":
            self.i += 1
            return r
        while True:
            r.append(self.val())
            self.ws()
            c = self.s[self.i] if self.i < len(self.s) else ""
            self.i += 1
            if c == "]": return r
            if c != ",": self.err("Expecting ',' delimiter")
    def obj(self):
        self.i += 1
        r = {}
        self.ws()
        if self.s[self.i] == "}":
            self.i += 1
            return r
        while True:
            self.ws()
            if self.s[self.i] != '"': self.err("Expecting property name enclosed in double quotes")
            k = self.str_()
            self.ws()
            if self.s[self.i] != ":": self.err("Expecting ':' delimiter")
            self.i += 1
            r[k] = self.val()
            self.ws()
            c = self.s[self.i] if self.i < len(self.s) else ""
            self.i += 1
            if c == "}": return r
            if c != ",": self.err("Expecting ',' delimiter")
def loads(s):
    p = _P(s)
    v = p.val()
    p.ws()
    if p.i != len(s): p.err("Extra data")
    return v
def load(f):
    return loads(f.read())
`,bc="python_virtual_files";function Ya(){if(typeof window>"u")return{};try{const o=localStorage.getItem(bc);return o?JSON.parse(o):{}}catch{return{}}}function fc(o){if(!(typeof window>"u"))try{localStorage.setItem(bc,JSON.stringify(o))}catch{}}function vc(){if(!(typeof window>"u"))try{localStorage.removeItem(bc)}catch{}}let gr=null;function yh(){return typeof window>"u"?Promise.resolve():window.Sk&&window.Sk.importMainWithBody?(uh(),Promise.resolve()):gr||(gr=new Promise((o,m)=>{const h=d=>new Promise((H,G)=>{if(document.querySelector(`script[src="${d}"]`)){H();return}const W=document.createElement("script");W.src=d,W.async=!0,W.onload=()=>H(),W.onerror=z=>G(z),document.head.appendChild(W)});Promise.all([h("https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt.min.js"),h("https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt-stdlib.js")]).then(()=>{uh(),o()}).catch(d=>{console.warn("Failed loading Skulpt CDN",d),m(d)})}),gr)}function uh(){const o=window.Sk;o&&(o.builtinFiles||(o.builtinFiles={files:{}}),o.builtinFiles.files||(o.builtinFiles.files={}),delete o.builtinFiles.files["src/lib/tkinter.js"],delete o.builtinFiles.files["src/lib/tkinter/__init__.js"],delete o.builtinFiles.files["src/lib/json.js"],delete o.builtinFiles.files["src/lib/json/__init__.js"],delete o.builtinFiles.files["src/lib/os.py"],delete o.builtinFiles.files["src/lib/os.js"],delete o.builtinFiles.files["src/lib/os/__init__.js"],delete o.builtinFiles.files["src/lib/os/__init__.py"],o.builtinFiles.files["src/lib/tkinter/__init__.py"]=uy,o.builtinFiles.files["src/lib/tkinter/messagebox.py"]=cy,o.builtinFiles.files["src/lib/tkinter/filedialog.py"]=dy,o.builtinFiles.files["src/lib/_vfs.py"]=fy,o.builtinFiles.files["src/lib/json/__init__.py"]=my,o.builtinFiles.files["src/lib/pygame/__init__.py"]=rh,o.builtinFiles.files["src/lib/pygame.py"]=rh,o.builtinFiles.files["src/lib/os.py"]=oh,o.builtinFiles.files["src/lib/os/__init__.py"]=oh)}const py="Программа работает слишком долго. Похоже, цикл while никогда не заканчивается — проверь, меняется ли переменная в условии";async function wr(o,m={}){await yh();const h=window.Sk;if(!h)return{success:!1,output:"Ошибка: Skulpt не загружен",logs:[],error:"Интерпретатор не готов"};h.yieldLimit=100;let d="",H=0,G=!1;const W=1e3,z="Программа напечатала слишком много строк. Похоже, цикл не заканчивается — проверь, меняется ли переменная в условии",$=[],re=m.inputs?[...m.inputs]:void 0,Z=m.timeoutMs??5e3;let _=Date.now();h.configure({output:N=>{var P;d+=N;for(let E=0;E<N.length;E++)N[E]===`
`&&H++;if(H>W)throw G=!0,new Error(z);const B=N.trim();B&&$.push(B),(P=m.onOutput)==null||P.call(m,N)},read:N=>{if(h.builtinFiles&&h.builtinFiles.files){if(h.builtinFiles.files[N]!==void 0)return h.builtinFiles.files[N];const B=N.replace(/\.js$/,"/__init__.js");if(h.builtinFiles.files[B]!==void 0)return h.builtinFiles.files[B];const P=N.replace(/\.py$/,"/__init__.py");if(h.builtinFiles.files[P]!==void 0)return h.builtinFiles.files[P]}throw new Error(`Модуль не найден: '${N}'`)},killableWhile:!0,killableFor:!0,inputfun:N=>{var B,P;if(N&&((B=m.onOutput)==null||B.call(m,N)),re!==void 0){const E=re.length>0?re.shift():"";return(P=m.onOutput)==null||P.call(m,E+`
`),_=Date.now(),Promise.resolve(E)}return m.onInput?m.onInput(N).then(E=>(_=Date.now(),E)):Promise.resolve("")},inputfunTakesPrompt:!0,__future__:h.python3});let k=null;try{k=await h.misceval.asyncToPromise(()=>h.importModule("_vfs",!1,!0)),h.builtins.open=k.$d.open,h.builtins.FileNotFoundError=k.$d.FileNotFoundError;const N=m.virtualFiles??Ya();k.$d.FILES=new h.builtin.dict([]);for(const[B,P]of Object.entries(N))h.abstr.objectSetItem(k.$d.FILES,new h.builtin.str(B),new h.builtin.str(P))}catch(N){console.warn("VFS init error:",N)}try{const N=h.sysmodules?h.sysmodules.quick$lookup(new h.builtin.str("tkinter")):null;N&&N.$d&&(N.$d.WIDGETS=new h.builtin.list([]),N.$d.LOG=new h.builtin.list([]))}catch{}const me=m.testCode?o+`
`+m.testCode:o,ge=()=>{var B;let N={};if(k&&k.$d&&k.$d.FILES)try{const P=h.ffi.remapToJs(k.$d.FILES);P&&typeof P=="object"&&(N=P,m.persistFiles!==!1&&fc(N),(B=m.onFilesChanged)==null||B.call(m,N))}catch(P){console.warn("Remap VFS files warning:",P)}return N};try{await h.misceval.asyncToPromise(()=>h.importMainWithBody("<stdin>",!1,me,!0),{"*":B=>{var P;if((P=m.isStopped)!=null&&P.call(m))throw new Error("🛑 Остановлено пользователем");if(G||H>W)throw new Error(z);if(!(B&&B.data&&B.data.type==="Sk.promise")&&Date.now()-_>Z)throw new Error(py)}});const N=ge();return{success:!0,output:d,logs:$,files:N}}catch(N){const B=ge();let P=N.toString?N.toString():String(N);(G||H>W||P.includes("слишком много строк"))&&(P=z);const E=P.match(/line\s+(\d+)/i)||P.match(/строка\s+(\d+)/i),g=E?parseInt(E[1],10):void 0;return{success:!1,output:d,logs:$,files:B,error:P,errorLine:g}}}function hy(o){let m=o.replace(/"""[\s\S]*?"""/g,'""').replace(/'''[\s\S]*?'''/g,"''");return m=m.replace(/"(?:\\.|[^"\\])*"/g,'""').replace(/'(?:\\.|[^'\\])*'/g,"''"),m=m.replace(/#.*$/gm,""),m}function ch(o){return o.split(`
`).map(m=>m.trimEnd()).join(`
`).trim()}async function xy(o,m){const h=m.trim(),d=o.exercise.starterCode.trim();if(h===d||h==="")return{passed:!1,message:"Ты ещё ничего не изменил.",hint:"Напиши код решения задачи в редакторе."};const H=hy(m);if(o.exercise.codeCheck){const G=o.exercise.codeCheck(H,m);if(G&&!G.passed)return G}for(let G=0;G<o.exercise.tests.length;G++){const W=o.exercise.tests[G],z=await wr(m,{inputs:W.inputs,testCode:o.exercise.testCode});if(!z.success)return{passed:!1,message:`Ошибка при выполнении: ${z.error}`,hint:"Проверь правильность синтаксиса и отступов."};const $=ch(z.output),re=ch(W.expected);if($!==re){const Z=W.inputs.length>0?W.inputs.join(", "):"(нет ввода)";return{passed:!1,message:`Тест ${G+1} не пройден.
Ввели: ${Z}
Ждали:
${re}
Получилось:
${$}`,hint:o.exercise.hint}}}return{passed:!0,message:"Все тесты успешно пройдены!"}}const bh=({isOpen:o,onClose:m,onFilesChanged:h})=>{const[d,H]=le.useState({}),[G,W]=le.useState(null),[z,$]=le.useState(!1),[re,Z]=le.useState(!1),[_,k]=le.useState(""),me=()=>{const g=Ya();H(g);const R=Object.keys(g);R.length>0?(!G||!g[G])&&W(R[0]):W(null)};if(le.useEffect(()=>{o&&me()},[o]),!o)return null;const ge=Object.keys(d),N=()=>{window.confirm("Удалить все созданные виртуальные файлы?")&&(vc(),H({}),W(null),h==null||h())},B=(g,R)=>{R.stopPropagation();const M={...d};if(delete M[g],fc(M),H(M),G===g){const L=Object.keys(M);W(L.length>0?L[0]:null)}h==null||h()},P=()=>{!G||d[G]===void 0||(navigator.clipboard.writeText(d[G]),$(!0),setTimeout(()=>$(!1),1500))},E=g=>{g.preventDefault();const R=_.trim();if(!R)return;if(d[R]!==void 0){alert("Файл с таким именем уже существует");return}const M={...d,[R]:""};fc(M),H(M),W(R),k(""),Z(!1),h==null||h()};return s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4",children:s.jsxs("div",{className:"bg-white rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-2xl max-w-2xl w-full flex flex-col max-h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-150",children:[s.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-[#E3E3E9] bg-[#F7F7FA]",children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx("div",{className:"w-8 h-8 rounded-lg bg-[#0A7A50]/15 text-[#0A7A50] flex items-center justify-center",children:s.jsx(hc,{className:"w-4 h-4"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-[15px] font-black text-[#0B0B0F]",children:"Виртуальные файлы программы"}),s.jsxs("p",{className:"text-[11px] text-[#63636E]",children:["Файлы, созданные через ",s.jsx("code",{className:"text-[#0A54C4]",children:"open(...)"})," в Python (сохраняются между запусками)"]})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[ge.length>0&&s.jsxs("button",{onClick:N,className:"px-2.5 py-1.5 rounded-lg border border-[#D4126C]/30 text-[#D4126C] hover:bg-[#D4126C]/10 text-[11px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer",title:"Очистить все файлы",children:[s.jsx(Yi,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Очистить все"})]}),s.jsx("button",{onClick:m,className:"p-1.5 rounded-lg hover:bg-[#E3E3E9] text-[#63636E] transition-colors cursor-pointer",children:s.jsx(dc,{className:"w-4 h-4"})})]})]}),ge.length===0?s.jsxs("div",{className:"p-8 text-center space-y-3",children:[s.jsx("div",{className:"w-12 h-12 rounded-full bg-[#F1F1F4] text-[#63636E] flex items-center justify-center mx-auto",children:s.jsx(th,{className:"w-6 h-6"})}),s.jsx("p",{className:"text-[13px] font-bold text-[#0B0B0F]",children:"Пока нет созданных файлов"}),s.jsx("p",{className:"text-[12px] text-[#63636E] max-w-md mx-auto",children:"Когда твоя программа выполнит код записи в файл, например:"}),s.jsx("pre",{className:"bg-[#15151D] text-[#4FF0A7] p-3 rounded-xl text-[12px] font-mono inline-block text-left max-w-md",children:`with open("notes.txt", "w") as f:
    f.write("Привет из Python!")`}),s.jsx("p",{className:"text-[11.5px] text-[#63636E]",children:"Файл автоматически появится здесь и сохранится даже после перезапуска!"}),re?s.jsxs("form",{onSubmit:E,className:"flex items-center justify-center gap-2 mt-3",children:[s.jsx("input",{type:"text",value:_,onChange:g=>k(g.target.value),placeholder:"Имя файла (напр. data.txt)",className:"px-3 py-1.5 text-[12px] border border-[#E3E3E9] rounded-lg outline-none font-mono",autoFocus:!0}),s.jsx("button",{type:"submit",className:"px-3 py-1.5 bg-[#0A7A50] text-white text-[12px] font-bold rounded-lg cursor-pointer",children:"Добавить"}),s.jsx("button",{type:"button",onClick:()=>Z(!1),className:"px-2.5 py-1.5 text-[12px] text-[#63636E] hover:text-[#0B0B0F] cursor-pointer",children:"Отмена"})]}):s.jsx("div",{children:s.jsxs("button",{onClick:()=>Z(!0),className:"mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0A7A50] text-white text-[11.5px] font-bold rounded-lg hover:brightness-110 cursor-pointer shadow-xs",children:[s.jsx(nh,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Создать тестовый файл вручную"})]})})]}):s.jsxs("div",{className:"flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden min-h-[300px]",children:[s.jsxs("div",{className:"md:col-span-4 border-r border-[#E3E3E9] p-2 space-y-1 overflow-y-auto bg-[#FAFAFC]",children:[s.jsxs("div",{className:"flex items-center justify-between px-2 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#63636E]",children:[s.jsxs("span",{children:["Файлы (",ge.length,")"]}),s.jsxs("button",{onClick:()=>Z(!0),className:"text-[#0A7A50] hover:underline flex items-center gap-0.5 font-bold cursor-pointer",children:[s.jsx(nh,{className:"w-3 h-3"}),s.jsx("span",{children:"Создать"})]})]}),re&&s.jsxs("form",{onSubmit:E,className:"p-2 bg-white rounded-lg border border-[#0A7A50] space-y-1.5",children:[s.jsx("input",{type:"text",value:_,onChange:g=>k(g.target.value),placeholder:"Имя файла...",className:"w-full px-2 py-1 text-[11px] border border-[#E3E3E9] rounded font-mono outline-none",autoFocus:!0}),s.jsxs("div",{className:"flex items-center justify-end gap-1",children:[s.jsx("button",{type:"button",onClick:()=>Z(!1),className:"px-2 py-0.5 text-[10px] text-[#63636E]",children:"Отмена"}),s.jsx("button",{type:"submit",className:"px-2 py-0.5 text-[10px] bg-[#0A7A50] text-white rounded font-bold",children:"OK"})]})]}),ge.map(g=>{const R=G===g,M=d[g]||"";M.split(`
`).length;const L=new Blob([M]).size;return s.jsxs("div",{onClick:()=>W(g),className:`flex items-center justify-between p-2 rounded-xl text-[12px] font-mono cursor-pointer transition-colors group ${R?"bg-[#0A7A50]/15 text-[#0A7A50] font-bold border border-[#0A7A50]/30":"hover:bg-[#EAEAEF] text-[#0B0B0F]"}`,children:[s.jsxs("div",{className:"flex items-center gap-2 truncate",children:[s.jsx(th,{className:"w-3.5 h-3.5 shrink-0"}),s.jsx("span",{className:"truncate",children:g})]}),s.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[s.jsxs("span",{className:"text-[10px] text-[#63636E]",children:[L," б"]}),s.jsx("button",{onClick:F=>B(g,F),className:"opacity-0 group-hover:opacity-100 p-1 hover:text-[#D4126C] rounded transition-opacity",title:"Удалить файл",children:s.jsx(Yi,{className:"w-3 h-3"})})]})]},g)})]}),s.jsx("div",{className:"md:col-span-8 flex flex-col bg-[#15151D] text-[#E3E3E9] overflow-hidden",children:G?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-[#2C2C3A] bg-[#1E1E28] text-[11px] font-mono",children:[s.jsx("span",{className:"text-[#4FF0A7] font-bold",children:G}),s.jsx("button",{onClick:P,className:"flex items-center gap-1 px-2 py-1 rounded bg-[#2C2C3A] hover:bg-[#38384A] text-white cursor-pointer transition-colors text-[10.5px]",children:z?s.jsxs(s.Fragment,{children:[s.jsx(qi,{className:"w-3 h-3 text-[#4FF0A7]"}),s.jsx("span",{children:"Скопировано"})]}):s.jsxs(s.Fragment,{children:[s.jsx(Er,{className:"w-3 h-3"}),s.jsx("span",{children:"Копировать"})]})})]}),s.jsx("div",{className:"flex-1 p-3 font-mono text-[12px] overflow-auto whitespace-pre leading-relaxed select-text",children:d[G]||s.jsx("span",{className:"text-[#8E8EA0] italic",children:"(файл пуст)"})})]}):s.jsx("div",{className:"flex-1 flex items-center justify-center text-[#8E8EA0] text-[12px]",children:"Выберите файл слева для просмотра"})})]}),s.jsxs("div",{className:"p-3 border-t border-[#E3E3E9] bg-[#F7F7FA] flex items-center justify-between text-[11px] text-[#63636E]",children:[s.jsxs("span",{children:["Всего файлов: ",ge.length]}),s.jsx("button",{onClick:m,className:"px-3 py-1.5 bg-[#0B0B0F] hover:bg-[#2C2C3A] text-white font-bold rounded-lg cursor-pointer transition-colors text-[11.5px]",children:"Закрыть"})]})]})})};function _r(){var z,$,re,Z;const o=typeof window<"u"?window.Sk:null;if(!o||!o.sysmodules)return{hasTk:!1,root:null,widgets:[],log:[]};let m=null;try{m=o.sysmodules.quick$lookup(new o.builtin.str("tkinter"))}catch{}if(!m||!m.$d)return{hasTk:!1,root:null,widgets:[],log:[]};const h=m.$d.WIDGETS&&m.$d.WIDGETS.v?m.$d.WIDGETS.v:[],d=m.$d.LOG&&m.$d.LOG.v?m.$d.LOG.v:[];if(h.length===0)return{hasTk:!1,root:null,widgets:[],log:[]};let H=null;const G=[];for(let _=0;_<h.length;_++){const k=h[_];if(!k)continue;let me="Widget";k.$d&&k.$d.kind?me=typeof k.$d.kind=="string"?k.$d.kind:k.$d.kind.v||"Widget":k.kind&&(me=typeof k.kind=="string"?k.kind:k.kind.v||"Widget");let ge={};if(k.$d&&k.$d.opts)try{const V=o.ffi.remapToJs(k.$d.opts);V&&typeof V=="object"&&(ge=V)}catch{}let N=null,B={};if(k.$d&&k.$d.layout&&k.$d.layout.v){const V=k.$d.layout.v;if(V.length>=2){N=((z=V[0])==null?void 0:z.v)||V[0];try{B=o.ffi.remapToJs(V[1])||{}}catch{}}}let P="";k.$d&&k.$d.text!==void 0?P=typeof k.$d.text=="string"?k.$d.text:k.$d.text.v!==void 0?String(k.$d.text.v):String(k.$d.text):k.text!==void 0&&(P=typeof k.text=="string"?k.text:k.text.v!==void 0?String(k.text.v):String(k.text));let E=[];k.$d&&k.$d.items&&k.$d.items.v&&(E=k.$d.items.v.map(V=>V&&V.v!==void 0?String(V.v):String(V)));let g=[];if(k.$d&&k.$d.item_opts&&k.$d.item_opts.v)try{const V=o.ffi.remapToJs(k.$d.item_opts);Array.isArray(V)&&(g=V)}catch{}let R=[];k.$d&&k.$d.selected&&k.$d.selected.v&&(R=k.$d.selected.v.map(V=>V&&V.v!==void 0?Number(V.v):Number(V)));let M;k.$d&&k.$d.val!==void 0?M=typeof k.$d.val=="number"?k.$d.val:k.$d.val.v!==void 0?Number(k.$d.val.v):Number(k.$d.val):k.val!==void 0?M=typeof k.val=="number"?k.val:k.val.v!==void 0?Number(k.val.v):Number(k.val):ge.from_!==void 0?M=Number(ge.from_):ge.from!==void 0&&(M=Number(ge.from));let L;const F=(($=k.$d)==null?void 0:$.var)||k.var;if(F){const V=((re=F.$d)==null?void 0:re.v)!==void 0?F.$d.v:F.v;L=(V==null?void 0:V.v)!==void 0?!!V.v:!!V}const ee={pyWidget:k,id:_,kind:me,master:((Z=k.$d)==null?void 0:Z.master)||k.master,opts:ge,layoutType:N,layoutOpts:B,text:P,items:E,itemOpts:g,selected:R,val:M,isChecked:L};me==="Tk"?H=ee:G.push(ee)}const W=[];for(let _=0;_<d.length;_++){const k=d[_];try{const me=o.ffi.remapToJs(k);Array.isArray(me)&&me.length>=3&&W.push({kind:String(me[0]),title:String(me[1]),message:String(me[2])})}catch{}}return{hasTk:H!==null||G.length>0,root:H,widgets:G,log:W}}const vh=({onStop:o,onRefresh:m,isAlive:h})=>{var Ne,Ve;const[d,H]=le.useState(()=>_r()),[G,W]=le.useState(null),[z,$]=le.useState(0),re=le.useCallback(()=>{const A=_r();if(H(A),A.log.length>z){const se=A.log[A.log.length-1];W(se),$(A.log.length)}},[z]);if(le.useEffect(()=>{re()},[re]),!d.hasTk)return null;const{root:Z,widgets:_}=d,k=((Ne=Z==null?void 0:Z.opts)==null?void 0:Ne.title)||"Tkinter Window",me=((Ve=Z==null?void 0:Z.opts)==null?void 0:Ve.geometry)||"400x260";let ge=420,N=260;const B=String(me).match(/(\d+)x(\d+)/);B&&(ge=Math.max(300,Math.min(680,parseInt(B[1],10))),N=Math.max(180,Math.min(500,parseInt(B[2],10))));const P=async A=>{const se=window.Sk;if(se)try{let C=null;A.pyWidget&&A.pyWidget.$d&&A.pyWidget.$d.opts&&(C=se.abstr.objectGetItem(A.pyWidget.$d.opts,new se.builtin.str("command"),!0)),!C&&A.opts&&typeof A.opts.command=="function"&&(C=A.opts.command),C&&C!==se.builtin.none.none$&&await se.misceval.asyncToPromise(()=>se.misceval.callsimOrSuspendArray(C,[]))}catch(C){console.warn("Tkinter button command error:",C)}finally{re(),m==null||m()}},E=(A,se)=>{const C=window.Sk;if(A.pyWidget){const K=C?new C.builtin.str(se):se;A.pyWidget.$d&&(A.pyWidget.$d.text=K),A.pyWidget.text=K}re()},g=(A,se)=>{const C=window.Sk;if(A.pyWidget&&C){const K=new C.builtin.list([new C.builtin.int_(se)]);A.pyWidget.$d&&(A.pyWidget.$d.selected=K),A.pyWidget.selected=K}re()},R=async(A,se)=>{var ne,he;g(A,se);const C=window.Sk;if(!C)return;let K=null;if((he=(ne=A.pyWidget)==null?void 0:ne.$d)!=null&&he.opts)try{K=C.abstr.objectGetItem(A.pyWidget.$d.opts,new C.builtin.str("bind:<Double-Button-1>"),!0),(!K||K===C.builtin.none.none$)&&(K=C.abstr.objectGetItem(A.pyWidget.$d.opts,new C.builtin.str("bind:<Double-1>"),!0))}catch{}if(K&&K!==C.builtin.none.none$)try{await C.misceval.asyncToPromise(()=>C.misceval.callsimOrSuspendArray(K,[new C.builtin.object]))}catch{try{await C.misceval.asyncToPromise(()=>C.misceval.callsimOrSuspendArray(K,[]))}catch(b){console.warn("Tkinter Listbox double-click error:",b)}}finally{re(),m==null||m()}},M=async(A,se)=>{const C=window.Sk;A.pyWidget&&(A.pyWidget.$d&&(A.pyWidget.$d.val=C?new C.builtin.int_(se):se),A.pyWidget.val=se);try{let K=null;A.pyWidget&&A.pyWidget.$d&&A.pyWidget.$d.opts&&(K=C.abstr.objectGetItem(A.pyWidget.$d.opts,new C.builtin.str("command"),!0)),!K&&A.opts&&typeof A.opts.command=="function"&&(K=A.opts.command),K&&K!==C.builtin.none.none$&&await C.misceval.asyncToPromise(()=>C.misceval.callsimOrSuspendArray(K,[new C.builtin.str(String(se))]))}catch(K){console.warn("Tkinter Scale command error:",K)}finally{re(),m==null||m()}},L=async A=>{var K,ne,he,b;const se=window.Sk,C=((ne=(K=A.pyWidget)==null?void 0:K.$d)==null?void 0:ne.var)||((he=A.pyWidget)==null?void 0:he.var);if(C){const p=((b=C.$d)==null?void 0:b.v)!==void 0?C.$d.v:C.v,I=!((p==null?void 0:p.v)!==void 0?!!p.v:!!p);C.$d&&(C.$d.v=se?new se.builtin.bool(I):I),C.v=I}try{let p=null;A.pyWidget&&A.pyWidget.$d&&A.pyWidget.$d.opts&&(p=se.abstr.objectGetItem(A.pyWidget.$d.opts,new se.builtin.str("command"),!0)),!p&&A.opts&&typeof A.opts.command=="function"&&(p=A.opts.command),p&&p!==se.builtin.none.none$&&await se.misceval.asyncToPromise(()=>se.misceval.callsimOrSuspendArray(p,[]))}catch(p){console.warn("Tkinter Checkbutton command error:",p)}finally{re(),m==null||m()}},F=async()=>{var se,C;const A=window.Sk;if(A&&((C=(se=Z==null?void 0:Z.pyWidget)==null?void 0:se.$d)!=null&&C.opts)){let K=null;try{K=A.abstr.objectGetItem(Z.pyWidget.$d.opts,new A.builtin.str("protocol:WM_DELETE_WINDOW"),!0)}catch{}if(K&&K!==A.builtin.none.none$)try{await A.misceval.asyncToPromise(()=>A.misceval.callsimOrSuspendArray(K,[]))}catch(ne){console.warn("protocol WM_DELETE_WINDOW error:",ne)}}o==null||o()},ee=A=>{if(!A)return{fontSize:"14px"};if(typeof A=="number")return{fontSize:`${A}px`};if(Array.isArray(A)){const se=A[1]?`${A[1]}px`:"14px",C=A[2]==="bold"?"bold":"normal";return{fontSize:se,fontWeight:C}}if(typeof A=="string"){const C=A.split(" ").find(K=>/^\d+$/.test(K));return{fontSize:C?`${C}px`:"14px"}}return{fontSize:"14px"}},V=_.some(A=>A.layoutType==="grid"),pe=A=>{const se=ee(A.opts.font),C=A.opts.fg||A.opts.foreground||void 0,K=A.opts.bg||A.opts.background||void 0,ne=A.opts.width?`${A.opts.width*8+16}px`:void 0,he=A.layoutOpts.pady?Number(A.layoutOpts.pady):4,b=A.layoutOpts.padx?Number(A.layoutOpts.padx):4,p={marginTop:`${he}px`,marginBottom:`${he}px`,marginLeft:`${b}px`,marginRight:`${b}px`};if(A.layoutType==="grid"){const O=A.layoutOpts.row!==void 0?Number(A.layoutOpts.row):0,I=A.layoutOpts.column!==void 0?Number(A.layoutOpts.column):0,c=A.layoutOpts.columnspan!==void 0?Number(A.layoutOpts.columnspan):1;p.gridRow=`${O+1}`,p.gridColumn=`${I+1} / span ${c}`}switch(A.kind){case"Label":return s.jsx("div",{style:{...p,color:C||"#1F2937",backgroundColor:K||"transparent",...se},className:"select-text leading-snug font-medium transition-colors",children:A.opts.text||""},A.id);case"Button":return s.jsx("div",{style:p,children:s.jsx("button",{onClick:()=>P(A),style:{color:C||"#111827",backgroundColor:K||"#E5E7EB",width:ne||"auto",...se},className:"px-3.5 py-1.5 rounded-md border border-[#9CA3AF] shadow-xs hover:brightness-95 active:brightness-90 active:scale-98 transition-all cursor-pointer font-semibold",children:A.opts.text||"Button"})},A.id);case"Entry":return s.jsx("div",{style:p,className:"w-full max-w-[320px]",children:s.jsx("input",{type:"text",value:A.text,onChange:O=>E(A,O.target.value),style:{color:C||"#111827",backgroundColor:K||"#FFFFFF",width:ne||"100%",...se},className:"px-2.5 py-1 rounded-md border border-[#9CA3AF] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none shadow-inner transition-all font-mono",placeholder:"Ввод текста..."})},A.id);case"Listbox":return s.jsx("div",{style:p,className:"w-full max-w-[380px]",children:s.jsx("div",{style:{backgroundColor:K||"#FFFFFF",minHeight:"120px",maxHeight:"220px"},className:"border border-[#9CA3AF] rounded-md overflow-y-auto divide-y divide-[#E5E7EB] font-sans text-[13px] shadow-inner",children:A.items.length===0?s.jsx("div",{className:"p-3 text-[12px] text-[#9CA3AF] italic text-center",children:"Список пуст"}):A.items.map((O,I)=>{var X;const c=A.selected.includes(I),j=((X=A.itemOpts[I])==null?void 0:X.fg)||C||"#1F2937";return s.jsx("div",{onClick:()=>g(A,I),onDoubleClick:()=>R(A,I),style:{color:j},className:`px-3 py-1.5 cursor-pointer select-none transition-colors ${c?"bg-[#2563EB] text-white font-semibold":"hover:bg-[#F3F4F6]"}`,title:"Клик — выделить, двойной клик — запустить",children:O},I)})})},A.id);case"Scale":{const O=A.opts.from_!==void 0?Number(A.opts.from_):A.opts.from!==void 0?Number(A.opts.from):0,I=A.opts.to!==void 0?Number(A.opts.to):100,c=A.opts.label||"",j=A.val??O;return s.jsxs("div",{style:p,className:"flex flex-col items-center gap-1 w-full max-w-[280px]",children:[c&&s.jsxs("div",{className:"text-[12px] font-semibold text-[#374151] self-start flex justify-between w-full",children:[s.jsx("span",{children:c}),s.jsx("span",{className:"font-mono text-[#0055EA] font-bold",children:j})]}),s.jsx("input",{type:"range",min:O,max:I,value:j,onChange:X=>M(A,Number(X.target.value)),className:"w-full accent-[#0055EA] cursor-pointer h-2 bg-[#D1D5DB] rounded-lg"}),!c&&s.jsx("div",{className:"text-[11px] font-mono text-[#4B5563] self-end",children:j})]},A.id)}case"Checkbutton":return s.jsx("div",{style:p,className:"flex items-center gap-2 select-none",children:s.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[s.jsx("input",{type:"checkbox",checked:!!A.isChecked,onChange:()=>L(A),className:"w-4 h-4 rounded text-[#0055EA] focus:ring-[#0055EA] accent-[#0055EA] cursor-pointer"}),s.jsx("span",{style:{color:C||"#1F2937",...se},className:"text-[13px] font-medium",children:A.opts.text||""})]})},A.id);case"Frame":return s.jsx("div",{style:{...p,backgroundColor:K||"transparent"},className:"p-1 border border-dashed border-[#D1D5DB] rounded-md w-full flex flex-wrap items-center justify-center gap-1",children:_.filter(O=>O.master===A.pyWidget).map(O=>pe(O))},A.id);default:return null}},ve=_.filter(A=>!A.master||A.master===(Z==null?void 0:Z.pyWidget));return s.jsxs("div",{className:"mt-4 pt-3 border-t border-[#E3E3E9] space-y-2",children:[s.jsxs("div",{className:"flex items-center justify-between text-[11px] font-bold text-[#63636E]",children:[s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsx(mh,{className:"w-4 h-4 text-[#0A54C4]"}),s.jsx("span",{className:"uppercase tracking-wider",children:"Предпросмотр окна Tkinter"}),h&&s.jsxs("span",{className:"flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0A7A50]/15 text-[#0A7A50] text-[10.5px]",children:[s.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#0A7A50] animate-pulse"}),"Окно активно"]})]}),o&&h&&s.jsxs("button",{onClick:F,className:"text-[11px] text-[#D4126C] hover:underline flex items-center gap-1 font-bold cursor-pointer",children:[s.jsx(gc,{className:"w-3 h-3 fill-current"}),s.jsx("span",{children:"Закрыть окно"})]})]}),s.jsx("div",{className:"flex justify-center p-2 bg-[#F1F1F4] rounded-2xl border border-[#E3E3E9] shadow-inner overflow-x-auto",children:s.jsxs("div",{style:{width:`${ge}px`,minHeight:`${N}px`},className:"relative bg-[#ECE9D8] rounded-t-lg rounded-b-md border-2 border-[#7F9DB9] shadow-xl flex flex-col font-sans transition-all text-[#111827]",children:[s.jsxs("div",{className:"bg-gradient-to-r from-[#0055EA] via-[#0A64E8] to-[#1E82F0] text-white px-2.5 py-1.5 rounded-t-[5px] flex items-center justify-between select-none shadow-xs",children:[s.jsxs("div",{className:"flex items-center gap-1.5 text-[12px] font-bold tracking-tight truncate max-w-[280px]",children:[s.jsx(vr,{className:"w-3.5 h-3.5 text-[#FED766]"}),s.jsx("span",{children:k})]}),s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx("div",{className:"w-3.5 h-3.5 rounded-xs bg-white/20 border border-white/40 flex items-center justify-center text-[9px] hover:bg-white/30 cursor-default",children:"_"}),s.jsx("div",{className:"w-3.5 h-3.5 rounded-xs bg-white/20 border border-white/40 flex items-center justify-center text-[9px] hover:bg-white/30 cursor-default",children:"□"}),s.jsx("button",{onClick:F,className:"w-3.5 h-3.5 rounded-xs bg-[#E81123] hover:bg-[#F1424F] text-white flex items-center justify-center text-[10px] cursor-pointer",title:"Закрыть окно",children:"✕"})]})]}),s.jsxs("div",{className:"relative p-4 flex-1 flex flex-col items-center justify-start bg-[#F0F0F0]",children:[V?s.jsx("div",{className:"grid grid-cols-4 gap-2 w-full justify-items-center items-center",children:ve.map(A=>pe(A))}):s.jsx("div",{className:"flex flex-col items-center justify-start w-full space-y-1",children:ve.map(A=>pe(A))}),G&&s.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center p-4 z-50 animate-in fade-in duration-150",children:s.jsxs("div",{className:"bg-white border-2 border-[#0055EA] rounded-lg shadow-2xl p-4 max-w-[320px] w-full space-y-3 font-sans",children:[s.jsxs("div",{className:"flex items-start gap-3",children:[G.kind==="info"&&s.jsx(c1,{className:"w-6 h-6 text-[#2563EB] shrink-0"}),G.kind==="warning"&&s.jsx(cc,{className:"w-6 h-6 text-[#F59E0B] shrink-0"}),G.kind==="error"&&s.jsx(qg,{className:"w-6 h-6 text-[#EF4444] shrink-0"}),G.kind==="вопрос"&&s.jsx(ph,{className:"w-6 h-6 text-[#8B5CF6] shrink-0"}),s.jsxs("div",{className:"flex-1 space-y-1",children:[s.jsx("div",{className:"font-bold text-[13px] text-[#111827]",children:G.title||"Сообщение"}),s.jsx("div",{className:"text-[12px] text-[#4B5563] leading-relaxed break-words whitespace-pre-wrap",children:G.message})]})]}),s.jsx("div",{className:"flex justify-end pt-1",children:s.jsx("button",{onClick:()=>W(null),className:"px-4 py-1 bg-[#E5E7EB] hover:bg-[#D1D5DB] text-[#111827] text-[12px] font-bold rounded border border-[#9CA3AF] cursor-pointer",children:"OK"})})]})})]})]})}),s.jsx("div",{className:"text-center text-[11px] text-[#63636E] italic",children:"Это упрощённый предпросмотр. Настоящее окно — в VS Code."})]})},gy=({lesson:o,isSolved:m,onSolveLesson:h,onSelectLesson:d,onBackToCourse:H,onOpenSandboxWithCode:G})=>{const[W,z]=le.useState(o.exercise.starterCode),[$,re]=le.useState(`Готов к запуску кода.
`),[Z,_]=le.useState(!1),[k,me]=le.useState(null),[ge,N]=le.useState(""),[B,P]=le.useState(!1),[E,g]=le.useState(!1),[R,M]=le.useState(null),[L,F]=le.useState({status:"none",message:""}),[ee,V]=le.useState(!1),[pe,ve]=le.useState(!1),[Ne,Ve]=le.useState(()=>typeof window<"u"?Object.keys(Ya()).length:0),A=()=>{Ve(Object.keys(Ya()).length)},[se,C]=le.useState(!1),[K,ne]=le.useState({summary:!0,steps:!1,mistakes:!1,quiz:!1,cheatsheet:!1,exercise:!1}),[he,b]=le.useState({}),[p,O]=le.useState({}),I=async(Q,oe)=>{O(Qe=>({...Qe,[Q]:{running:!0,output:""}}));let Ae="";try{const Qe=await wr(oe,{onOutput:Ze=>{Ae+=Ze,O(Lt=>({...Lt,[Q]:{running:!0,output:Ae}}))}});O(Ze=>({...Ze,[Q]:{running:!1,output:Qe.output||Ae||"(программа выполнилась без вывода)"}}))}catch(Qe){const Ze=(Qe==null?void 0:Qe.message)||String(Qe);O(Lt=>({...Lt,[Q]:{running:!1,output:Ae?`${Ae}
${Ze}`:Ze}}))}},c=(Q,oe,Ae)=>{b(Qe=>({...Qe,[Q]:oe})),oe===Ae?Gn():rc()},j=le.useRef(null),X=le.useRef(null),Y=le.useRef(!1),te=le.useRef(""),ue=le.useRef(0),de=le.useRef(null),J=()=>{if(de.current&&(clearTimeout(de.current),de.current=null),te.current){const Q=te.current;te.current="",re(oe=>oe+Q),ue.current=Date.now()}},ae=(Q,oe=!1)=>{te.current+=Q;const Ae=Date.now();oe||Ae-ue.current>=100?J():de.current||(de.current=setTimeout(J,Math.max(10,100-(Ae-ue.current))))};le.useEffect(()=>()=>{de.current&&clearTimeout(de.current)},[]),le.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"});const Q=localStorage.getItem(`code_${o.id}`);z(Q!==null?Q:o.exercise.starterCode),J(),te.current="",re(`Готов к запуску кода.
`),F({status:"none",message:""}),P(!1),g(!1),C(!1),ne({summary:!0,steps:!1,mistakes:!1,quiz:!1,cheatsheet:!1,exercise:!1}),b({}),O({})},[o.id]);const De=Q=>{z(Q),localStorage.setItem(`code_${o.id}`,Q)},Se=Q=>{De(Q),Gn()},Ie=(Q,oe)=>{navigator.clipboard.writeText(oe),M(Q),Gn(),setTimeout(()=>M(null),1800)};le.useEffect(()=>{j.current&&(j.current.scrollTop=j.current.scrollHeight)},[$,k]),le.useEffect(()=>{k&&setTimeout(()=>{var Q;return(Q=X.current)==null?void 0:Q.focus()},50)},[k]);const Ge=pc(),ze=Ge.findIndex(Q=>Q.id===o.id),_e=ze>0?Ge[ze-1]:null,$e=ze<Ge.length-1?Ge[ze+1]:null,ut=Q=>{if(Q.preventDefault(),k!=null&&k.resolve){const oe=ge;ae(oe+`
`,!0);const Ae=k.resolve;me(null),N(""),Ae(oe)}},jt=()=>{Y.current=!1,k!=null&&k.resolve&&k.resolve(""),me(null),_(!1),C(!1),J(),ae(`
🛑 Остановлено пользователем
`,!0)},kn=async()=>{Z&&(jt(),await new Promise(Q=>setTimeout(Q,60))),C(!1),Y.current=!0,_(!0),Gn(),te.current="",ue.current=Date.now(),re(`▶ Запуск программы...
`);try{const Q=await wr(W,{onOutput:oe=>ae(oe),onInput:oe=>(J(),new Promise(Ae=>{me({resolve:Ae})})),onFilesChanged:()=>{A()},isStopped:()=>!Y.current});Q.success?(ae(`✨ Программа завершена
`,!0),_r().hasTk&&C(!0)):Q.error&&ae(`
❌ ${Q.error}
`,!0)}catch(Q){const oe=Q.toString?Q.toString():String(Q);ae(`
❌ ${oe}
`,!0)}finally{J(),Y.current=!1,_(!1),me(null)}},Yn=async()=>{Z&&jt(),C(!1),Gn(),Y.current=!0,_(!0),te.current="",ue.current=Date.now(),re(`🔍 Проверка решения...
`);try{const Q=await xy(o,W);Q.passed?(F({status:"success",message:Q.message}),ae(`
✅ `+Q.message+`
`,!0),yr(),ay({particleCount:50,spread:70,origin:{y:.6}}),h(o.id)):(F({status:"error",message:Q.message,hint:Q.hint}),ae(`
❌ ${Q.message}
`,!0),rc())}catch(Q){const oe=Q.toString?Q.toString():String(Q);ae(`
❌ Ошибка при проверке: ${oe}
`,!0),F({status:"error",message:`Проверка завершилась с ошибкой: ${oe}`,hint:"Проверь синтаксис, закрывающие кавычки, двоеточия и отступы."}),rc()}finally{J(),Y.current=!1,_(!1),me(null)}},tn=()=>{confirm("Сбросить код к начальному шаблону урока?")&&(De(o.exercise.starterCode),F({status:"none",message:""}))},Vn=le.useRef(null),[En,_l]=le.useState("intro"),Nn=!!o.theory.steps&&o.theory.steps.length>0,kt=!Nn&&!!o.theory.sections&&o.theory.sections.length>0,Sn=!!o.theory.mistakes&&o.theory.mistakes.length>0||!!o.theory.commonMistakes&&o.theory.commonMistakes.length>0,un=!!o.theory.quiz&&o.theory.quiz.length>0,kl=o.theory.cheatsheet&&o.theory.cheatsheet.length>0?o.theory.cheatsheet:o.theory.tips||[],El=[...o.theory.story?[{id:"story",label:"Сюжет"}]:[],{id:"summary",label:"Простыми словами"},...Nn||kt?[{id:"steps",label:"Разбор по шагам"}]:[],...Sn?[{id:"mistakes",label:"Частые ошибки"}]:[],...un?[{id:"quiz",label:"Проверь себя"}]:[],...kl.length>0?[{id:"cheatsheet",label:"Шпаргалка"}]:[],{id:"practice",label:"Практика"}];le.useEffect(()=>{const Q=El.map(Ae=>document.getElementById(`sec-${Ae.id}`)).filter(Boolean);if(Q.length===0)return;const oe=new IntersectionObserver(Ae=>{const Qe=Ae.filter(Ze=>Ze.isIntersecting).sort((Ze,Lt)=>Ze.boundingClientRect.top-Lt.boundingClientRect.top);Qe[0]&&_l(Qe[0].target.id.replace("sec-",""))},{rootMargin:"-90px 0px -60% 0px"});return Q.forEach(Ae=>oe.observe(Ae)),()=>oe.disconnect()},[o.id]);const Jl=Q=>{var oe;(oe=document.getElementById(`sec-${Q}`))==null||oe.scrollIntoView({behavior:"smooth",block:"start"})},Va=Q=>{Se(Q),setTimeout(()=>{var oe;(oe=Vn.current)==null||oe.scrollIntoView({behavior:"smooth",block:"start"})},30)},Qa=Q=>O(oe=>{const Ae={...oe};return delete Ae[Q],Ae}),$l=Q=>{const{id:oe,code:Ae,label:Qe,tone:Ze="default",expected:Lt,canInsert:cn=!0}=Q,wt=p[oe],Nl=Ze==="wrong"?"border-[#D4126C]/60":Ze==="fixed"?"border-[#0A7A50]/60":"border-[#2C2C3A]",Et=Ze==="wrong"?"text-[#FF85A1]":Ze==="fixed"?"text-[#4FF0A7]":"text-[#8E8EA0]";return s.jsxs("div",{className:`rounded-2xl overflow-hidden border ${Nl} bg-[#16161F] shadow-sm`,children:[s.jsxs("div",{className:"flex items-center justify-between gap-2 px-4 py-2.5 border-b border-[#2C2C3A] bg-[#1C1C28]",children:[s.jsx("span",{className:`text-[12px] font-bold uppercase tracking-wider ${Et}`,children:Qe||"Python"}),s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsxs("button",{onClick:()=>I(oe,Ae),disabled:wt==null?void 0:wt.running,className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A7A50] hover:bg-[#0C9663] text-white text-[12px] font-bold transition-colors cursor-pointer disabled:opacity-50",title:"Запустить этот пример прямо здесь",children:[s.jsx(Hi,{className:"w-3.5 h-3.5 fill-white"}),s.jsx("span",{children:wt!=null&&wt.running?"Запуск...":"Запустить"})]}),cn&&s.jsxs("button",{onClick:()=>Va(Ae),className:"hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[12px] font-bold transition-colors cursor-pointer",title:"Вставить код в редактор практики",children:[s.jsx(uc,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"В редактор"})]}),s.jsx("button",{onClick:()=>Ie(oe,Ae),className:"inline-flex items-center gap-1 px-2 py-1.5 rounded-lg text-[#A6A6B8] hover:text-white hover:bg-white/10 text-[12px] font-bold transition-colors cursor-pointer",title:"Скопировать код",children:R===oe?s.jsx(qi,{className:"w-3.5 h-3.5 text-[#4FF0A7]"}):s.jsx(Er,{className:"w-3.5 h-3.5"})})]})]}),s.jsx("pre",{className:"px-5 py-4 text-[14px] leading-[1.7] text-[#E3E3E9] overflow-x-auto whitespace-pre select-text",children:s.jsx("code",{dangerouslySetInnerHTML:{__html:bl.highlight(Ae,bl.languages.python,"python")}})}),wt?s.jsxs("div",{className:"border-t border-[#2C2C3A] bg-[#0B0B0F] px-5 py-3",children:[s.jsxs("div",{className:"flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#4FF0A7] mb-1.5",children:[s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx(Gi,{className:"w-3.5 h-3.5"}),"Вывод"]}),s.jsx("button",{onClick:()=>Qa(oe),className:"text-[#8E8EA0] hover:text-white normal-case tracking-normal cursor-pointer",children:"Скрыть"})]}),s.jsx("pre",{className:`text-[13.5px] leading-relaxed whitespace-pre-wrap select-text ${Ze==="wrong"?"text-[#FF85A1]":"text-[#4FF0A7]"}`,children:wt.output||"…"})]}):Lt?s.jsxs("div",{className:"border-t border-[#2C2C3A] bg-[#0B0B0F] px-5 py-3",children:[s.jsx("div",{className:"text-[11px] font-bold uppercase tracking-wider text-[#8E8EA0] mb-1.5",children:"Результат"}),s.jsx("pre",{className:"text-[13.5px] leading-relaxed text-[#4FF0A7] whitespace-pre-wrap select-text",children:Lt})]}):null]})},Qn=(Q,oe,Ae,Qe,Ze)=>s.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[s.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center shrink-0",style:{backgroundColor:`${Ze}1A`,color:Ze},children:s.jsx(Qe,{className:"w-5 h-5"})}),s.jsxs("h2",{className:"text-[22px] md:text-[26px] font-black text-[#0B0B0F] leading-tight",children:[s.jsxs("span",{className:"text-[#A6A6B8] mr-2",children:[oe,"."]}),Ae]})]});let lt=0;return s.jsxs("div",{className:"font-mono",children:[ee&&s.jsx(gh,{isModal:!0,onClose:()=>V(!1),onInsertCode:Q=>{De(W+`
`+Q),V(!1)},onOpenInSandbox:G}),s.jsxs("div",{className:"max-w-[1240px] mx-auto px-4 md:px-6 pt-6 xl:grid xl:grid-cols-[220px_minmax(0,1fr)] xl:gap-10",children:[s.jsx("aside",{className:"hidden xl:block",children:s.jsxs("nav",{className:"sticky top-24 space-y-1",children:[s.jsxs("button",{onClick:H,className:"flex items-center gap-1.5 mb-4 text-[12.5px] font-bold text-[#63636E] hover:text-[#0A54C4] cursor-pointer transition-colors",children:[s.jsx(xr,{className:"w-3.5 h-3.5"}),"Все уроки"]}),s.jsx("div",{className:"text-[11px] font-black uppercase tracking-wider text-[#A6A6B8] mb-2",children:"В этом уроке"}),El.map(Q=>s.jsx("button",{onClick:()=>Jl(Q.id),className:`w-full text-left px-3 py-2 rounded-lg text-[13px] font-bold border-l-2 transition-all cursor-pointer ${En===Q.id?"border-[#5636E0] bg-white text-[#0B0B0F] shadow-xs":"border-transparent text-[#63636E] hover:text-[#0B0B0F] hover:bg-white/60"} ${Q.id==="practice"?"mt-2 text-[#D4126C]":""}`,children:Q.label},Q.id))]})}),s.jsxs("article",{className:"min-w-0",children:[s.jsxs("header",{className:"max-w-[820px] mx-auto pb-8 border-b border-[#E3E3E9]",children:[s.jsxs("div",{className:"flex items-center justify-between gap-3 flex-wrap mb-5",children:[s.jsxs("button",{onClick:H,className:"xl:hidden flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-[#E3E3E9] text-[#0B0B0F] font-bold text-[12px] transition-all cursor-pointer border border-[#E3E3E9]",children:[s.jsx(xr,{className:"w-3.5 h-3.5"}),"Все уроки"]}),s.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[s.jsxs("button",{onClick:()=>V(!0),className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-[#E3E3E9] text-[#0A54C4] font-bold text-[12px] transition-all cursor-pointer border border-[#E3E3E9]",title:"Открыть справочник функций",children:[s.jsx(Ga,{className:"w-3.5 h-3.5"}),s.jsx("span",{className:"hidden sm:inline",children:"Справочник"})]}),s.jsx("button",{disabled:!_e,onClick:()=>_e&&d(_e.id),className:"flex items-center gap-1 px-3 py-2 rounded-xl bg-white hover:bg-[#E3E3E9] border border-[#E3E3E9] disabled:opacity-40 text-[#0B0B0F] font-bold text-[12px] transition-all cursor-pointer disabled:cursor-not-allowed",title:"Предыдущий урок",children:s.jsx(xr,{className:"w-3.5 h-3.5"})}),s.jsx("button",{disabled:!$e,onClick:()=>$e&&d($e.id),className:"flex items-center gap-1 px-3 py-2 rounded-xl bg-white hover:bg-[#E3E3E9] border border-[#E3E3E9] disabled:opacity-40 text-[#0B0B0F] font-bold text-[12px] transition-all cursor-pointer disabled:cursor-not-allowed",title:"Следующий урок",children:s.jsx(Pp,{className:"w-3.5 h-3.5"})})]})]}),s.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[s.jsxs("span",{className:"text-[12.5px] font-bold text-[#63636E]",children:["Урок ",ze+1," из ",Ge.length]}),m&&s.jsxs("span",{className:"inline-flex items-center gap-1 text-[11.5px] font-extrabold px-2 py-0.5 rounded-md bg-[#0A7A50]/15 text-[#0A7A50]",children:[s.jsx(Ha,{className:"w-3.5 h-3.5"}),"Пройден"]})]}),s.jsx("h1",{className:"text-[28px] md:text-[38px] font-black text-[#0B0B0F] leading-[1.15]",children:o.title}),s.jsxs("button",{onClick:()=>Jl("practice"),className:"mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#D4126C] hover:underline cursor-pointer",children:[s.jsx(sc,{className:"w-4 h-4"}),"Сразу к практике",s.jsx(Fg,{className:"w-4 h-4"})]})]}),s.jsxs("div",{className:"max-w-[820px] mx-auto",children:[o.theory.story&&s.jsx("section",{id:"sec-story",className:"scroll-mt-24 pt-10",children:s.jsxs("div",{className:"bg-gradient-to-br from-[#1C1C28] to-[#121218] text-white rounded-2xl p-5 md:p-7 border border-[#2D2D3D] shadow-md space-y-5",children:[o.theory.story.letter&&s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center gap-2 text-[12px] font-black uppercase tracking-wider text-[#FED766]",children:[s.jsx(_1,{className:"w-4 h-4"}),s.jsx("span",{children:"Входящее сообщение: Заказчик"})]}),s.jsx("div",{className:"text-[14.5px] leading-[1.75] text-[#E3E3E9] whitespace-pre-line border-l-2 border-[#FED766] pl-4",children:o.theory.story.letter})]}),o.theory.story.task&&s.jsxs("div",{className:"flex items-start gap-3 text-[14px] leading-relaxed text-[#C9C9D3] bg-[#1A1A26] p-4 rounded-xl border border-[#2E2E40]",children:[s.jsx(sc,{className:"w-5 h-5 text-[#4FF0A7] shrink-0 mt-0.5"}),s.jsxs("div",{children:[s.jsx("span",{className:"font-bold text-white",children:"Задача на день: "}),o.theory.story.task]})]}),o.theory.story.quotes&&o.theory.story.quotes.length>0&&s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"text-[11.5px] font-black uppercase tracking-wider text-[#8E8EA0] flex items-center gap-1.5",children:[s.jsx(E1,{className:"w-4 h-4 text-[#A5B4FC]"}),s.jsx("span",{children:"Реплики команды ProTeam"})]}),o.theory.story.quotes.map((Q,oe)=>s.jsxs("div",{className:"text-[14px] leading-relaxed",children:[s.jsxs("span",{className:"font-bold text-[#A5B4FC]",children:[Q.speaker,": "]}),s.jsxs("span",{className:"text-[#E3E3E9] italic",children:["«",Q.text,"»"]})]},oe))]})]})}),s.jsxs("section",{id:"sec-summary",className:"scroll-mt-24 pt-12",children:[Qn("summary",++lt,"Простыми словами",kr,"#0A54C4"),s.jsx("div",{className:"space-y-5 text-[15.5px] leading-[1.8] text-[#22222B]",children:o.theory.summary.split(`

`).map((Q,oe)=>s.jsx("p",{className:"whitespace-pre-line",children:Q},oe))}),o.theory.keyRule&&s.jsxs("div",{className:"mt-7 bg-gradient-to-br from-[#0A54C4]/10 to-[#5636E0]/10 border-l-4 border-[#5636E0] rounded-r-2xl p-5 space-y-2",children:[s.jsxs("div",{className:"flex items-center gap-1.5 text-[12px] font-black uppercase tracking-wider text-[#5636E0]",children:[s.jsx(vr,{className:"w-4 h-4"}),s.jsx("span",{children:"Главное правило"})]}),s.jsx("div",{className:"text-[15px] font-bold text-[#0B0B0F] leading-relaxed",children:o.theory.keyRule})]})]}),(Nn||kt)&&s.jsxs("section",{id:"sec-steps",className:"scroll-mt-24 pt-14",children:[Qn("steps",++lt,"Разбор по шагам",wl,"#0A7A50"),s.jsxs("div",{className:"space-y-12",children:[Nn&&o.theory.steps.map((Q,oe)=>s.jsxs("div",{className:"space-y-4",children:[s.jsxs("h3",{className:"flex items-center gap-2.5 text-[17px] font-black text-[#0B0B0F]",children:[s.jsx("span",{className:"inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#0A7A50] text-white text-[13px]",children:oe+1}),"Шаг ",oe+1]}),s.jsx("p",{className:"text-[15.5px] leading-[1.8] text-[#22222B]",children:Q.explanation.replace(/^\s*Шаг\s*\d+\s*[.:)]\s*/i,"")}),$l({id:`step_${oe}`,code:Q.code,label:`Пример ${oe+1}`,expected:Q.output})]},oe)),kt&&o.theory.sections.map((Q,oe)=>s.jsxs("div",{className:"space-y-4",children:[s.jsx("h3",{className:"text-[18px] font-black text-[#0B0B0F]",children:Q.heading}),s.jsx("p",{className:"text-[15.5px] leading-[1.8] text-[#22222B] whitespace-pre-line",children:Q.text}),Q.codeExample&&s.jsxs(s.Fragment,{children:[$l({id:`sec_${oe}`,code:Q.codeExample.code,label:Q.codeExample.title}),Q.codeExample.explanation&&s.jsx("p",{className:"text-[14.5px] leading-[1.75] text-[#44444F]",children:Q.codeExample.explanation})]})]},oe))]})]}),Sn&&s.jsxs("section",{id:"sec-mistakes",className:"scroll-mt-24 pt-14",children:[Qn("mistakes",++lt,"Частые ошибки",cc,"#D4126C"),o.theory.mistakes&&o.theory.mistakes.length>0?s.jsx("div",{className:"space-y-12",children:o.theory.mistakes.map((Q,oe)=>s.jsxs("div",{className:"space-y-4",children:[s.jsxs("h3",{className:"text-[17px] font-black text-[#0B0B0F]",children:["Ошибка ",oe+1]}),$l({id:`mistake_wrong_${oe}`,code:Q.wrongCode,label:"❌ Код с ошибкой",tone:"wrong"}),s.jsxs("div",{className:"bg-[#1C0008] border border-[#D4126C]/50 rounded-xl px-5 py-3 text-[13.5px] leading-relaxed text-[#FF85A1]",children:[s.jsx("span",{className:"text-[#FFA3B9] font-bold block mb-1 text-[11px] uppercase tracking-wider",children:"Ошибка в консоли"}),s.jsx("span",{className:"whitespace-pre-wrap",children:Q.error})]}),s.jsx("p",{className:"text-[15.5px] leading-[1.8] text-[#22222B]",children:Q.explanation}),$l({id:`mistake_fixed_${oe}`,code:Q.fixedCode,label:"✅ Как исправить",tone:"fixed"})]},oe))}):s.jsx("ul",{className:"space-y-3",children:o.theory.commonMistakes.map((Q,oe)=>s.jsxs("li",{className:"flex items-start gap-3 text-[15px] leading-relaxed text-[#22222B]",children:[s.jsx(cc,{className:"w-4 h-4 text-[#D4126C] shrink-0 mt-1.5"}),s.jsx("span",{children:Q})]},oe))})]}),un&&s.jsxs("section",{id:"sec-quiz",className:"scroll-mt-24 pt-14",children:[Qn("quiz",++lt,"Проверь себя",Ha,"#5636E0"),s.jsx("div",{className:"space-y-8",children:o.theory.quiz.map((Q,oe)=>{const Ae=he[oe],Qe=Ae!==void 0,Ze=Ae===Q.correct;return s.jsxs("div",{className:"bg-white border border-[#E3E3E9] rounded-2xl p-5 md:p-6 space-y-4 shadow-xs",children:[s.jsxs("div",{className:"flex items-center justify-between text-[12.5px] font-bold",children:[s.jsxs("span",{className:"text-[#5636E0]",children:["Вопрос ",oe+1," из ",o.theory.quiz.length]}),s.jsx("span",{className:"text-[#63636E]",children:"Что выведет этот код?"})]}),s.jsx("pre",{className:"bg-[#16161F] text-[#E3E3E9] px-5 py-4 rounded-xl text-[14px] leading-[1.7] overflow-x-auto whitespace-pre",children:s.jsx("code",{dangerouslySetInnerHTML:{__html:bl.highlight(Q.code,bl.languages.python,"python")}})}),s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:Q.options.map((Lt,cn)=>{let wt="w-full text-left px-4 py-3 rounded-xl text-[14px] border-[1.5px] transition-all cursor-pointer flex items-center justify-between gap-2 whitespace-pre-wrap ";return Qe?cn===Q.correct?wt+="bg-[#0A7A50]/10 border-[#0A7A50] text-[#0A7A50] font-bold":Ae===cn&&!Ze?wt+="bg-[#D4126C]/10 border-[#D4126C] text-[#D4126C] font-bold":wt+="bg-white border-[#E3E3E9] opacity-50 text-[#8E8EA0]":wt+="bg-white hover:bg-[#F1F1F4] hover:border-[#5636E0]/50 border-[#E3E3E9] text-[#0B0B0F]",s.jsxs("button",{onClick:()=>c(oe,cn,Q.correct),className:wt,children:[s.jsx("span",{children:Lt}),Qe&&cn===Q.correct&&s.jsx(qi,{className:"w-4 h-4 shrink-0"}),Qe&&Ae===cn&&!Ze&&s.jsx(eh,{className:"w-4 h-4 shrink-0"})]},cn)})}),Qe&&s.jsxs("div",{className:`p-4 rounded-xl text-[14px] leading-relaxed border ${Ze?"bg-[#F0FFF6] border-[#0A7A50]/30 text-[#0A5A3C]":"bg-[#FFF0F5] border-[#D4126C]/30 text-[#A00E52]"}`,children:[s.jsx("span",{className:"font-bold block mb-1",children:Ze?"🎉 Правильно!":"Почти! Обрати внимание:"}),Q.explanation]})]},oe)})})]}),kl.length>0&&s.jsxs("section",{id:"sec-cheatsheet",className:"scroll-mt-24 pt-14",children:[Qn("cheatsheet",++lt,"Шпаргалка",x1,"#B0700C"),s.jsx("div",{className:"bg-[#FFFBF0] border border-[#B0700C]/25 rounded-2xl p-5 md:p-6 space-y-3",children:kl.map((Q,oe)=>s.jsxs("div",{className:"flex items-start gap-3 text-[14.5px] leading-relaxed text-[#22222B]",children:[s.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-[#B0700C] mt-2.5 shrink-0"}),s.jsx("span",{className:"whitespace-pre-wrap",children:Q})]},oe))})]})]}),s.jsxs("section",{id:"sec-practice",ref:Vn,className:"scroll-mt-20 pt-16",children:[s.jsx("div",{className:"max-w-[820px] mx-auto",children:Qn("practice",++lt,"Практика",sc,"#D4126C")}),s.jsxs("div",{className:"space-y-5",children:[s.jsx("div",{children:s.jsxs("div",{className:"bg-white border-2 border-[#D4126C]/30 rounded-2xl p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 shadow-xs",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-[11.5px] font-black uppercase tracking-wider text-[#D4126C] mb-2",children:"Условие задачи"}),s.jsx("div",{className:"text-[14.5px] leading-[1.75] text-[#0B0B0F] whitespace-pre-line",children:o.exercise.task})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:"text-[11.5px] font-black uppercase tracking-wider text-[#63636E]",children:"Критерии проверки"}),o.exercise.requirements.map((Q,oe)=>s.jsxs("div",{className:"flex items-start gap-2.5 text-[13.5px] leading-relaxed text-[#0B0B0F]",children:[s.jsx("div",{className:"w-5 h-5 rounded-full border-[1.5px] border-[#0A54C4] text-[#0A54C4] flex items-center justify-center text-[10.5px] font-bold shrink-0 mt-0.5",children:oe+1}),s.jsx("span",{children:Q})]},oe))]}),s.jsxs("div",{className:"border border-[#E3E3E9] rounded-xl overflow-hidden",children:[s.jsxs("button",{onClick:()=>P(!B),className:"w-full px-3.5 py-2.5 bg-[#F7F7FA] hover:bg-[#E3E3E9] text-left text-[13px] font-bold text-[#0B0B0F] flex items-center justify-between cursor-pointer transition-colors",children:[s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx(ph,{className:"w-4 h-4 text-[#B0700C]"}),"Нужна подсказка?"]}),s.jsx("span",{className:"text-[11.5px] text-[#63636E]",children:B?"Скрыть":"Показать"})]}),B&&s.jsxs("div",{className:"p-3.5 bg-white text-[13.5px] leading-relaxed text-[#44444F] border-t border-[#E3E3E9] whitespace-pre-line",children:["💡 ",o.exercise.hint]})]}),m&&s.jsxs("div",{className:"border border-[#0A7A50]/30 rounded-xl overflow-hidden",children:[s.jsxs("button",{onClick:()=>g(!E),className:"w-full px-3.5 py-2.5 bg-[#0A7A50]/10 hover:bg-[#0A7A50]/20 text-left text-[13px] font-bold text-[#0A7A50] flex items-center justify-between cursor-pointer transition-colors",children:[s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx(vr,{className:"w-4 h-4"}),"Авторский вариант решения"]}),s.jsx("span",{className:"text-[11.5px]",children:E?"Скрыть":"Показать"})]}),E&&s.jsx("pre",{className:"px-4 py-3 bg-[#16161F] text-[#E3E3E9] text-[13px] leading-relaxed border-t border-[#0A7A50]/30 overflow-x-auto whitespace-pre",children:s.jsx("code",{dangerouslySetInnerHTML:{__html:bl.highlight(o.exercise.solution,bl.languages.python,"python")}})})]}),s.jsxs("button",{onClick:tn,className:"text-[12px] font-bold text-[#63636E] hover:text-[#D4126C] flex items-center gap-1.5 transition-colors cursor-pointer",children:[s.jsx(xc,{className:"w-3.5 h-3.5"}),"Сбросить код к начальному"]})]})]})}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-5 items-start",children:[s.jsxs("div",{className:"bg-white p-4 rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-xs space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between border-b border-[#E3E3E9] pb-3 text-[11px] font-extrabold tracking-wider uppercase text-[#63636E]",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(wl,{className:"w-4 h-4 text-[#0A54C4]"}),s.jsx("span",{children:"Редактор Python 3"})]}),s.jsxs("div",{className:"text-[11px] font-bold normal-case tracking-normal",children:["Запуск: ",s.jsx("kbd",{className:"px-1.5 py-0.5 rounded bg-[#F1F1F4] border border-[#E3E3E9]",children:"Ctrl+Enter"})]})]}),s.jsx(xh,{value:W,onChange:De,onRun:kn,placeholder:"# Напиши решение на Python 3...",rows:16}),s.jsxs("div",{className:"flex items-center gap-2.5 flex-wrap",children:[s.jsxs("button",{onClick:kn,disabled:Z&&!k,className:"flex-1 min-w-[140px] bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0B0B0F] font-bold rounded-xl py-3 px-4 text-[13px] flex items-center justify-center gap-2 transition-all cursor-pointer border border-[#E3E3E9]",children:[s.jsx(Hi,{className:"w-4 h-4 fill-current text-[#0A54C4]"}),"Запустить код"]}),s.jsxs("button",{onClick:Yn,disabled:Z,className:"flex-1 min-w-[180px] bg-gradient-to-r from-[#0A54C4] to-[#0A7A50] text-white font-extrabold rounded-xl py-3 px-5 text-[13px] flex items-center justify-center gap-2 hover:brightness-110 transition-all cursor-pointer shadow-md disabled:opacity-50",children:[s.jsx(Ha,{className:"w-4 h-4"}),"Проверить решение"]}),Z&&s.jsxs("button",{onClick:jt,className:"border-[1.5px] border-[#D4126C] text-[#D4126C] hover:bg-[#D4126C]/10 rounded-xl px-4 py-3 font-bold transition-all cursor-pointer flex items-center gap-1.5 text-[12px]",children:[s.jsx(gc,{className:"w-4 h-4 fill-current"}),"Стоп"]})]})]}),s.jsxs("div",{className:"space-y-4 min-w-0 lg:sticky lg:top-24",children:[L.status==="success"&&s.jsxs("div",{className:"bg-[#0A7A50]/15 border-2 border-[#0A7A50] rounded-2xl p-4 flex items-start gap-3.5 shadow-xs",children:[s.jsx("div",{className:"w-9 h-9 rounded-xl bg-[#0A7A50] text-white flex items-center justify-center shrink-0",children:s.jsx(Ha,{className:"w-5 h-5"})}),s.jsxs("div",{className:"flex-1 space-y-1",children:[s.jsx("h4",{className:"text-[15px] font-black text-[#0A7A50]",children:"Задание решено верно!"}),s.jsx("p",{className:"text-[13.5px] text-[#0B0B0F] leading-relaxed",children:L.message})]})]}),L.status==="error"&&s.jsxs("div",{className:"bg-[#D4126C]/10 border-2 border-[#D4126C] rounded-2xl p-4 flex items-start gap-3.5 shadow-xs",children:[s.jsx("div",{className:"w-9 h-9 rounded-xl bg-[#D4126C] text-white flex items-center justify-center shrink-0",children:s.jsx(eh,{className:"w-5 h-5"})}),s.jsxs("div",{className:"flex-1 space-y-1",children:[s.jsx("h4",{className:"text-[15px] font-black text-[#D4126C]",children:"Пока не сошлось"}),s.jsx("p",{className:"text-[13.5px] text-[#0B0B0F] leading-relaxed",children:L.message}),L.hint&&s.jsxs("div",{className:"text-[12.5px] text-[#44444F] bg-white p-3 rounded-lg border border-[#E3E3E9] mt-2 leading-relaxed",children:["💡 Подсказка: ",L.hint]})]})]}),s.jsxs("div",{className:"bg-white p-4 rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-xs space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between border-b border-[#E3E3E9] pb-3 text-[11px] font-extrabold tracking-wider uppercase text-[#63636E]",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(Gi,{className:"w-4 h-4 text-[#0A7A50]"}),s.jsx("span",{children:"Терминал"})]}),s.jsxs("div",{className:"flex items-center gap-2.5 normal-case tracking-normal",children:[s.jsxs("button",{onClick:()=>ve(!0),className:"text-[11.5px] text-[#0A54C4] hover:underline flex items-center gap-1 font-bold cursor-pointer",title:"Показать виртуальные файлы",children:[s.jsx(hc,{className:"w-3.5 h-3.5"}),"Файлы",Ne>0?` (${Ne})`:""]}),Ne>0&&s.jsxs("button",{onClick:()=>{window.confirm("Очистить все виртуальные файлы?")&&(vc(),A())},className:"text-[11px] text-[#D4126C] hover:underline flex items-center gap-0.5 cursor-pointer font-bold",children:[s.jsx(Yi,{className:"w-3 h-3"}),"Очистить файлы"]}),s.jsx("button",{onClick:()=>re(`Терминал очищен.
`),className:"text-[11px] text-[#63636E] hover:text-[#0B0B0F] cursor-pointer",children:"Очистить"})]})]}),s.jsx("div",{ref:j,className:"bg-[#15151D] text-[#E3E3E9] p-4 rounded-xl border border-[#2C2C3A] min-h-[200px] max-h-[360px] overflow-y-auto text-[13px] leading-relaxed",children:s.jsxs("div",{className:"whitespace-pre-wrap break-words select-text",children:[$,k&&s.jsxs("form",{onSubmit:ut,className:"inline-flex items-center gap-2 mt-1",children:[s.jsx("span",{className:"text-[#0A7A50] font-bold select-none",children:">>>"}),s.jsx("input",{ref:X,type:"text",value:ge,onChange:Q=>N(Q.target.value),placeholder:"Введи значение и нажми Enter...",className:"bg-[#1E1E28] text-white px-2.5 py-1 rounded-md border border-[#0A7A50] outline-none text-[12.5px] min-w-[200px]"}),s.jsxs("button",{type:"submit",className:"px-2.5 py-1 rounded-md bg-[#0A7A50] hover:bg-[#0C9663] text-white font-bold text-[11.5px] flex items-center gap-1 cursor-pointer",children:[s.jsx(uc,{className:"w-3 h-3"}),"Enter"]})]})]})})]}),se&&s.jsx(vh,{isAlive:se,onStop:()=>C(!1)})]})]})]})]}),s.jsxs("nav",{className:"max-w-[820px] mx-auto mt-16 pt-8 border-t border-[#E3E3E9] grid grid-cols-1 sm:grid-cols-2 gap-3",children:[_e?s.jsxs("button",{onClick:()=>d(_e.id),className:"text-left bg-white border border-[#E3E3E9] hover:border-[#5636E0]/50 rounded-2xl p-4 transition-all cursor-pointer",children:[s.jsxs("div",{className:"text-[11.5px] font-bold text-[#63636E] flex items-center gap-1 mb-1",children:[s.jsx(xr,{className:"w-3.5 h-3.5"})," Предыдущий урок"]}),s.jsx("div",{className:"text-[14px] font-black text-[#0B0B0F]",children:_e.title})]}):s.jsx("div",{}),$e&&s.jsxs("button",{onClick:()=>d($e.id),className:`text-right rounded-2xl p-4 transition-all cursor-pointer border ${m?"bg-gradient-to-r from-[#0A54C4] to-[#5636E0] text-white border-transparent hover:brightness-110":"bg-white border-[#E3E3E9] hover:border-[#5636E0]/50"}`,children:[s.jsxs("div",{className:`text-[11.5px] font-bold flex items-center justify-end gap-1 mb-1 ${m?"text-white/80":"text-[#63636E]"}`,children:["Следующий урок ",s.jsx(Pp,{className:"w-3.5 h-3.5"})]}),s.jsx("div",{className:`text-[14px] font-black ${m?"text-white":"text-[#0B0B0F]"}`,children:$e.title})]})]})]})]}),s.jsx(bh,{isOpen:pe,onClose:()=>ve(!1),onFilesChanged:A})]})},dh=[{id:"guess_game",title:"Игра «Угадай число» (random)",desc:"Подключение модуля random, цикл while и интерактивный input()",code:`import random

print("Я загадал число от 1 до 20. Попробуй угадать!")
secret = random.randint(1, 20)
attempts = 0

while True:
    guess = int(input("Твой вариант: "))
    attempts += 1
    
    if guess < secret:
        print("Загаданное число больше!")
    elif guess > secret:
        print("Загаданное число меньше!")
    else:
        print(f"Поздравляю! Ты угадал число {secret} за {attempts} попыток!")
        break
`},{id:"calc",title:"Калькулятор (input и float)",desc:"Ввод двух чисел и выбор математического действия",code:`print("=== Калькулятор Python ===")
num1 = float(input("Введите первое число: "))
op = input("Выберите действие (+, -, *, /): ")
num2 = float(input("Введите второе число: "))

if op == "+":
    res = num1 + num2
elif op == "-":
    res = num1 - num2
elif op == "*":
    res = num1 * num2
elif op == "/":
    res = num1 / num2 if num2 != 0 else "Ошибка: деление на ноль"
else:
    res = "Неизвестная операция"

print(f"Результат: {res}")
`},{id:"math_funcs",title:"Модуль math (математика)",desc:"Корни, тригонометрия, число Pi и округление",code:`import math

x = float(input("Введите число: "))
print(f"Квадратный корень sqrt({x}) = {math.sqrt(x) if x >= 0 else 'не существует в R'}")
print(f"Округление вверх: {math.ceil(x)}")
print(f"Округление вниз: {math.floor(x)}")
print(f"Число Пи = {math.pi}")
`},{id:"list_analysis",title:"Анализ списка оценок",desc:"Работа со списками, min, max, sum и среднее арифметическое",code:`grades = [5, 4, 3, 5, 5, 4, 4, 5]
print("Все оценки:", grades)
print("Всего оценок:", len(grades))
print("Максимальная:", max(grades))
print("Минимальная:", min(grades))
avg = sum(grades) / len(grades)
print(f"Средний балл: {avg:.2f}")
`},{id:"tkinter_gui",title:"Окно Tkinter (GUI)",desc:"Главное окно tk.Tk(), надпись Label, кнопка Button и поле ввода Entry. (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",code:`import tkinter as tk

def on_click():
    name = entry.get()
    print(f"Привет из окна Tkinter, {name}!")
    lbl.config(text=f"Привет, {name}!", fg="green")

root = tk.Tk()
root.title("Мое первое GUI приложение")
root.geometry("380x250")

lbl_title = tk.Label(root, text="Приложение Tkinter", font=("Arial", 14, "bold"))
lbl_title.pack(pady=10)

lbl = tk.Label(root, text="Введите ваше имя:")
lbl.pack(pady=5)

entry = tk.Entry(root, width=25)
entry.pack(pady=5)

btn = tk.Button(root, text="Нажми меня", command=on_click)
btn.pack(pady=10)

root.mainloop()
print("Графический цикл mainloop завершен.")
`}],yy=[{name:"random",desc:"Случайные числа (randint, choice, shuffle)",code:`import random
`},{name:"math",desc:"Математика (sqrt, pi, ceil, floor, factorial)",code:`import math
`},{name:"string",desc:"Наборы символов (ascii_letters, digits)",code:`import string
`},{name:"tkinter",desc:"Графика GUI (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",code:`import tkinter as tk
`}],by=({initialCode:o,onOpenHandbook:m})=>{const[h,d]=le.useState(o||`# Добро пожаловать в Песочницу Python 3!
# Здесь можно писать любые программы и запускать их

name = input("Как тебя зовут? ")
print(f"Привет, {name}! Удачи в программировании на Python 3!")
`),[H,G]=le.useState(`Готов к запуску кода.
`),[W,z]=le.useState(!1),[$,re]=le.useState(null),[Z,_]=le.useState(""),[k,me]=le.useState(null),[ge,N]=le.useState(!1),[B,P]=le.useState(()=>typeof window<"u"?Object.keys(Ya()).length:0),E=()=>{P(Object.keys(Ya()).length)},[g,R]=le.useState(!1),[M,L]=le.useState("editor"),F=le.useRef(null),ee=le.useRef(null),V=le.useRef(null),pe=le.useRef(!1);le.useEffect(()=>{o&&d(o)},[o]),le.useEffect(()=>{F.current&&(F.current.scrollTop=F.current.scrollHeight)},[H,$]),le.useEffect(()=>{$&&setTimeout(()=>{var O;return(O=ee.current)==null?void 0:O.focus()},50)},[$]);const ve=O=>{me(O),setTimeout(()=>me(null),2500)},Ne=le.useRef(""),Ve=le.useRef(0),A=le.useRef(null),se=()=>{if(A.current&&(clearTimeout(A.current),A.current=null),Ne.current){const O=Ne.current;Ne.current="",G(I=>I+O),Ve.current=Date.now()}},C=(O,I=!1)=>{Ne.current+=O;const c=Date.now();I||c-Ve.current>=100?se():A.current||(A.current=setTimeout(se,Math.max(10,100-(c-Ve.current))))};le.useEffect(()=>()=>{A.current&&clearTimeout(A.current)},[]);const K=O=>{if(O.preventDefault(),$!=null&&$.resolve){const I=Z;C(I+`
`,!0);const c=$.resolve;re(null),_(""),c(I)}},ne=()=>{pe.current=!1,$!=null&&$.resolve&&$.resolve(""),re(null),z(!1),R(!1),se(),C(`
🛑 Остановлено пользователем
`,!0)},he=async()=>{W&&(ne(),await new Promise(O=>setTimeout(O,60))),R(!1),pe.current=!0,z(!0),Gn(),Ne.current="",Ve.current=Date.now(),G(`▶ Запуск программы...
`);try{const O=await wr(h,{onOutput:I=>C(I),onInput:I=>(se(),new Promise(c=>{re({resolve:c})})),onFilesChanged:()=>{E()},isStopped:()=>!pe.current});O.success?(C(`✨ Программа завершена
`,!0),yr(),_r().hasTk&&R(!0)):O.error&&C(`
❌ ${O.error}
`,!0)}catch(O){const I=O.toString?O.toString():String(O);C(`
❌ ${I}
`,!0)}finally{se(),pe.current=!1,z(!1),re(null)}},b=()=>{const O=new Blob([h],{type:"text/x-python"}),I=URL.createObjectURL(O),c=document.createElement("a");c.href=I,c.download="script.py",c.click(),URL.revokeObjectURL(I),yr(),ve("Файл сохранён как script.py")},p=O=>{var j;const I=(j=O.target.files)==null?void 0:j[0];if(!I)return;const c=new FileReader;c.onload=X=>{var te;const Y=(te=X.target)==null?void 0:te.result;Y&&(d(Y),yr(),ve(`Файл ${I.name} загружен`))},c.readAsText(I)};return s.jsxs("div",{className:"max-w-[1360px] mx-auto p-3 md:p-6 space-y-4 font-mono select-none",children:[k&&s.jsxs("div",{className:"fixed bottom-6 right-6 z-50 bg-[#0A7A50] text-white px-4 py-2.5 rounded-xl shadow-lg font-bold text-[12.5px] flex items-center gap-2",children:[s.jsx(qi,{className:"w-4 h-4"}),k]}),s.jsx("input",{ref:V,type:"file",accept:".py,.txt",className:"hidden",onChange:p}),s.jsxs("header",{className:"flex items-center justify-between gap-4 flex-wrap bg-white p-3 md:p-4 rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-xs",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-br from-[#0A54C4] to-[#0A7A50] flex items-center justify-center text-white shadow-xs",children:s.jsx(wl,{className:"w-5 h-5"})}),s.jsxs("div",{children:[s.jsx("h1",{className:"text-[17px] font-black text-[#0B0B0F]",children:"Песочница Python 3"}),s.jsx("p",{className:"text-[11.5px] text-[#63636E]",children:"Свободное написание, тестирование и запуск любых программ"})]})]}),s.jsxs("div",{className:"flex items-center gap-1.5 bg-[#F1F1F4] p-1 rounded-xl border border-[#E3E3E9]",children:[s.jsx("button",{onClick:()=>L("editor"),className:`px-3 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer ${M==="editor"?"bg-white text-[#0B0B0F] shadow-xs":"text-[#63636E] hover:text-[#0B0B0F]"}`,children:"💻 Код"}),s.jsxs("button",{onClick:()=>L("templates"),className:`px-3 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${M==="templates"?"bg-white text-[#0B0B0F] shadow-xs":"text-[#63636E] hover:text-[#0B0B0F]"}`,children:[s.jsx(kr,{className:"w-3.5 h-3.5 text-[#0A54C4]"}),"Примеры (",dh.length,")"]}),s.jsxs("button",{onClick:()=>L("libraries"),className:`px-3 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${M==="libraries"?"bg-white text-[#0B0B0F] shadow-xs":"text-[#63636E] hover:text-[#0B0B0F]"}`,children:[s.jsx(C1,{className:"w-3.5 h-3.5 text-[#0A7A50]"}),"Библиотеки"]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[m&&s.jsxs("button",{onClick:m,className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0A54C4] font-bold text-[12px] transition-all cursor-pointer border border-[#E3E3E9]",title:"Открыть справочник функций",children:[s.jsx(Ga,{className:"w-3.5 h-3.5"}),s.jsx("span",{className:"hidden sm:inline",children:"Справочник"})]}),s.jsxs("button",{onClick:b,className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0B0B0F] font-bold text-[12px] transition-all cursor-pointer border border-[#E3E3E9]",title:"Скачать script.py",children:[s.jsx(e1,{className:"w-3.5 h-3.5"}),s.jsx("span",{className:"hidden sm:inline",children:"Скачать .py"})]}),s.jsxs("button",{onClick:()=>{var O;return(O=V.current)==null?void 0:O.click()},className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0B0B0F] font-bold text-[12px] transition-all cursor-pointer border border-[#E3E3E9]",title:"Загрузить файл с компьютера",children:[s.jsx(Z1,{className:"w-3.5 h-3.5"}),s.jsx("span",{className:"hidden sm:inline",children:"Загрузить"})]})]})]}),M==="templates"&&s.jsxs("div",{className:"bg-white border-[1.5px] border-[#E3E3E9] rounded-2xl p-5 space-y-4 shadow-xs",children:[s.jsxs("div",{className:"pb-3 border-b border-[#E3E3E9]",children:[s.jsx("h3",{className:"text-[16px] font-black text-[#0B0B0F]",children:"Готовые примеры программ"}),s.jsx("p",{className:"text-[12px] text-[#63636E]",children:"Кликни на пример, чтобы загрузить его в редактор и запустить"})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3",children:dh.map(O=>s.jsxs("div",{onClick:()=>{d(O.code),L("editor"),ve(`Загружен пример: «${O.title}»`)},className:"bg-[#F7F7FA] hover:bg-white p-4 rounded-xl border border-[#E3E3E9] hover:border-[#0A54C4] transition-all cursor-pointer flex flex-col justify-between group shadow-2xs hover:shadow-xs",children:[s.jsxs("div",{children:[s.jsx("h4",{className:"font-black text-[13.5px] text-[#0B0B0F] group-hover:text-[#0A54C4] transition-colors mb-1.5",children:O.title}),s.jsx("p",{className:"text-[12px] text-[#63636E] leading-relaxed mb-3",children:O.desc})]}),s.jsx("span",{className:"text-[11.5px] font-bold text-[#0A54C4] pt-2 border-t border-[#E3E3E9]",children:"Открыть код →"})]},O.id))})]}),M==="libraries"&&s.jsxs("div",{className:"bg-white border-[1.5px] border-[#E3E3E9] rounded-2xl p-5 space-y-4 shadow-xs",children:[s.jsxs("div",{className:"pb-3 border-b border-[#E3E3E9]",children:[s.jsx("h3",{className:"text-[16px] font-black text-[#0B0B0F]",children:"Библиотеки Python 3"}),s.jsx("p",{className:"text-[12px] text-[#63636E]",children:"Нажми на модуль, чтобы вставить команду import в начало программы"})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:yy.map(O=>s.jsxs("div",{onClick:()=>{h.includes(O.name)?ve(`Модуль ${O.name} уже импортирован`):(d(O.code+h),ve(`Импортирован модуль ${O.name}`)),L("editor")},className:"bg-[#F7F7FA] hover:bg-white p-4 rounded-xl border border-[#E3E3E9] hover:border-[#0A7A50] transition-all cursor-pointer group shadow-2xs hover:shadow-xs",children:[s.jsxs("div",{className:"font-bold text-[#0A7A50] text-[14px] mb-1",children:["import ",O.name]}),s.jsx("div",{className:"text-[12px] text-[#63636E] mb-2",children:O.desc}),s.jsx("span",{className:"text-[11.5px] font-bold text-[#0A7A50] group-hover:underline",children:"+ Добавить в код"})]},O.name))})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-4 items-start",children:[s.jsxs("div",{className:"lg:col-span-7 bg-white p-4 rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-xs space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between border-b border-[#E3E3E9] pb-3 text-[11px] font-extrabold tracking-wider uppercase text-[#63636E]",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(n1,{className:"w-4 h-4 text-[#0A54C4]"}),s.jsx("span",{children:"script.py"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:()=>{navigator.clipboard.writeText(h),ve("Код скопирован")},className:"p-1.5 rounded-lg hover:bg-[#F1F1F4] text-[#63636E] transition-colors cursor-pointer",title:"Скопировать",children:s.jsx(Er,{className:"w-3.5 h-3.5"})}),s.jsx("button",{onClick:()=>d(""),className:"p-1.5 rounded-lg hover:bg-[#F1F1F4] text-[#63636E] hover:text-[#D4126C] transition-colors cursor-pointer",title:"Очистить код",children:s.jsx(Yi,{className:"w-3.5 h-3.5"})})]})]}),s.jsx(xh,{value:h,onChange:d,onRun:he,placeholder:"# Напиши любой код на Python...",rows:15}),s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsxs("button",{onClick:he,disabled:W&&!$,className:"flex-1 bg-gradient-to-r from-[#0A54C4] to-[#0A7A50] text-white font-extrabold rounded-xl py-3 px-6 text-[13px] flex items-center justify-center gap-2 hover:brightness-110 active:scale-98 disabled:opacity-50 transition-all cursor-pointer shadow-md",children:[s.jsx(Hi,{className:"w-4 h-4 fill-white"}),s.jsx("span",{children:W?"Выполняется...":"Запустить код (Ctrl+Enter)"})]}),W&&s.jsxs("button",{onClick:ne,className:"border-[1.5px] border-[#D4126C] text-[#D4126C] hover:bg-[#D4126C]/10 rounded-xl px-4 py-3 font-bold transition-all cursor-pointer flex items-center gap-1.5 text-[12px]",children:[s.jsx(gc,{className:"w-4 h-4 fill-current"}),s.jsx("span",{children:"Стоп"})]})]})]}),s.jsxs("div",{className:"lg:col-span-5 bg-white p-4 rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-xs space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between border-b border-[#E3E3E9] pb-3 text-[11px] font-extrabold tracking-wider uppercase text-[#63636E]",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(Gi,{className:"w-4 h-4 text-[#0A7A50]"}),s.jsx("span",{children:"Терминал вывода"})]}),s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsxs("button",{onClick:()=>N(!0),className:"text-[11px] text-[#0A54C4] hover:text-[#083E91] hover:underline flex items-center gap-1 font-bold cursor-pointer",title:"Показать виртуальные файлы",children:[s.jsx(hc,{className:"w-3.5 h-3.5"}),s.jsxs("span",{children:["Файлы",B>0?` (${B})`:""]})]}),B>0&&s.jsxs("button",{onClick:()=>{window.confirm("Очистить все виртуальные файлы?")&&(vc(),E(),ve("Файлы очищены"))},className:"text-[10.5px] text-[#D4126C] hover:underline flex items-center gap-0.5 cursor-pointer font-bold",title:"Очистить файлы",children:[s.jsx(Yi,{className:"w-3 h-3"}),s.jsx("span",{children:"Очистить файлы"})]}),s.jsx("button",{onClick:()=>G(`Терминал очищен.
`),className:"text-[10px] text-[#63636E] hover:text-[#0B0B0F] cursor-pointer",children:"Очистить"})]})]}),s.jsx("div",{ref:F,className:"bg-[#15151D] text-[#E3E3E9] p-4 rounded-2xl border border-[#2C2C3A] min-h-[380px] max-h-[500px] overflow-y-auto font-mono text-[12.5px] leading-relaxed flex flex-col justify-between",children:s.jsxs("div",{className:"whitespace-pre-wrap break-words",children:[H,$&&s.jsxs("form",{onSubmit:K,className:"inline-flex items-center gap-2 mt-1",children:[s.jsx("span",{className:"text-[#0A7A50] font-bold select-none",children:">>>"}),s.jsx("input",{ref:ee,type:"text",value:Z,onChange:O=>_(O.target.value),placeholder:"Введи ответ и нажми Enter...",className:"bg-[#1E1E28] text-white px-2.5 py-1 rounded-md border border-[#0A7A50] outline-none text-[12px] font-mono shadow-inner min-w-[200px]"}),s.jsxs("button",{type:"submit",className:"px-2.5 py-1 rounded-md bg-[#0A7A50] hover:bg-[#0C9663] text-white font-bold text-[11.5px] flex items-center gap-1 cursor-pointer",children:[s.jsx(uc,{className:"w-3 h-3"}),s.jsx("span",{children:"Enter"})]})]})]})}),g&&s.jsx(vh,{isAlive:g,onStop:()=>R(!1)})]})]}),s.jsx(bh,{isOpen:ge,onClose:()=>N(!1),onFilesChanged:E})]})};function vy(){const[o,m]=le.useState("lessons"),[h,d]=le.useState(null),[H,G]=le.useState(()=>{try{const E=localStorage.getItem("python_solved_lessons");return E?JSON.parse(E):[]}catch{return[]}}),[W,z]=le.useState(()=>ey()),[$,re]=le.useState(void 0);le.useEffect(()=>{yh().catch(()=>{})},[]);const Z=E=>{if(!H.includes(E)){const g=[...H,E];G(g);try{localStorage.setItem("python_solved_lessons",JSON.stringify(g))}catch(R){console.warn(R)}}},_=()=>{confirm("Вы уверены, что хотите сбросить отметки о пройденных уроках?")&&(G([]),localStorage.removeItem("python_solved_lessons"),_n())},k=()=>{const E=P1();z(E)},me=E=>{d(E),m("lessons"),window.scrollTo({top:0,left:0,behavior:"instant"})},ge=()=>{d(null),window.scrollTo({top:0,left:0,behavior:"instant"})},N=E=>{re(E),m("sandbox"),window.scrollTo({top:0,left:0,behavior:"instant"})},B=pc(),P=h?_g(h):null;return s.jsxs("div",{className:"min-h-screen bg-[#F1F1F4] text-[#0B0B0F] font-mono flex flex-col",children:[s.jsx(ty,{currentTab:o,onSelectTab:E=>{m(E)},solvedCount:H.length,totalCount:B.length,soundEnabled:W,onToggleSound:k,onResetProgress:_}),s.jsxs("main",{className:"flex-1 pb-12",children:[o==="lessons"&&s.jsx(s.Fragment,{children:P?s.jsx(gy,{lesson:P,isSolved:H.includes(P.id),onSolveLesson:Z,onSelectLesson:me,onBackToCourse:ge,onOpenSandboxWithCode:N}):s.jsx(ly,{solvedLessons:H,onSelectLesson:me,onOpenHandbook:()=>m("handbook"),onOpenSandbox:()=>m("sandbox")})}),o==="handbook"&&s.jsx(gh,{isModal:!1,onOpenInSandbox:N}),o==="sandbox"&&s.jsx(by,{initialCode:$,onOpenHandbook:()=>m("handbook")})]}),s.jsx("footer",{className:"border-t border-[#E3E3E9] py-5 px-4 text-center text-[11.5px] text-[#63636E] bg-white",children:s.jsxs("div",{className:"max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2",children:[s.jsx("span",{children:"Python Станция · Интерактивная среда обучения Python 3"}),s.jsx("span",{children:"Задания и теория настраиваются напрямую в коде программы"})]})})]})}vg.createRoot(document.getElementById("root")).render(s.jsx(le.StrictMode,{children:s.jsx(vy,{})}));
