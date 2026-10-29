(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const G of document.querySelectorAll('link[rel="modulepreload"]'))d(G);new MutationObserver(G=>{for(const H of G)if(H.type==="childList")for(const I of H.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&d(I)}).observe(document,{childList:!0,subtree:!0});function h(G){const H={};return G.integrity&&(H.integrity=G.integrity),G.referrerPolicy&&(H.referrerPolicy=G.referrerPolicy),G.crossOrigin==="use-credentials"?H.credentials="include":G.crossOrigin==="anonymous"?H.credentials="omit":H.credentials="same-origin",H}function d(G){if(G.ep)return;G.ep=!0;const H=h(G);fetch(G.href,H)}})();var Op=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cg(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Qu={exports:{}},Ai={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function dg(){if(zp)return Ai;zp=1;var o=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function h(d,G,H){var I=null;if(H!==void 0&&(I=""+H),G.key!==void 0&&(I=""+G.key),"key"in G){H={};for(var z in G)z!=="key"&&(H[z]=G[z])}else H=G;return G=H.ref,{$$typeof:o,type:d,key:I,ref:G!==void 0?G:null,props:H}}return Ai.Fragment=m,Ai.jsx=h,Ai.jsxs=h,Ai}var Bp;function fg(){return Bp||(Bp=1,Qu.exports=dg()),Qu.exports}var s=fg(),Xu={exports:{}},we={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function mg(){if(Fp)return we;Fp=1;var o=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),I=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),oe=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),E=Symbol.for("react.view_transition"),me=Symbol.iterator;function ge(c){return c===null||typeof c!="object"?null:(c=me&&c[me]||c["@@iterator"],typeof c=="function"?c:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,ne={};function k(c,D,Z){this.props=c,this.context=D,this.refs=ne,this.updater=Z||S}k.prototype.isReactComponent={},k.prototype.setState=function(c,D){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,D,"setState")},k.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function g(){}g.prototype=k.prototype;function L(c,D,Z){this.props=c,this.context=D,this.refs=ne,this.updater=Z||S}var M=L.prototype=new g;M.constructor=L,F(M,k.prototype),M.isPureReactComponent=!0;var B=Array.isArray;function R(){}var ee={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function pe(c,D,Z){var Y=Z.ref;return{$$typeof:o,type:c,key:D,ref:Y!==void 0?Y:null,props:Z}}function ve(c,D){return pe(c.type,D,c.props)}function Ae(c){return typeof c=="object"&&c!==null&&c.$$typeof===o}function Ve(c){var D={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(Z){return D[Z]})}var j=/\/+/g;function re(c,D){return typeof c=="object"&&c!==null&&c.key!=null?Ve(""+c.key):D.toString(36)}function T(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(R,R):(c.status="pending",c.then(function(D){c.status==="pending"&&(c.status="fulfilled",c.value=D)},function(D){c.status==="pending"&&(c.status="rejected",c.reason=D)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function V(c,D,Z,Y,te){var ue=typeof c;(ue==="undefined"||ue==="boolean")&&(c=null);var de=!1;if(c===null)de=!0;else switch(ue){case"bigint":case"string":case"number":de=!0;break;case"object":switch(c.$$typeof){case o:case m:de=!0;break;case K:return de=c._init,V(de(c._payload),D,Z,Y,te)}}if(de)return te=te(c),de=Y===""?"."+re(c,0):Y,B(te)?(Z="",de!=null&&(Z=de.replace(j,"$&/")+"/"),V(te,D,Z,"",function(Se){return Se})):te!=null&&(Ae(te)&&(te=ve(te,Z+(te.key==null||c&&c.key===te.key?"":(""+te.key).replace(j,"$&/")+"/")+de)),D.push(te)),1;de=0;var J=Y===""?".":Y+":";if(B(c))for(var ie=0;ie<c.length;ie++)Y=c[ie],ue=J+re(Y,ie),de+=V(Y,D,Z,ue,te);else if(ie=ge(c),typeof ie=="function")for(c=ie.call(c),ie=0;!(Y=c.next()).done;)Y=Y.value,ue=J+re(Y,ie++),de+=V(Y,D,Z,ue,te);else if(ue==="object"){if(typeof c.then=="function")return V(T(c),D,Z,Y,te);throw D=String(c),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return de}function P(c,D,Z){if(c==null)return c;var Y=[],te=0;return V(c,Y,"","",function(ue){return D.call(Z,ue,te++)}),Y}function he(c){if(c._status===-1){var D=c._result,Z=D();Z.then(function(Y){(c._status===0||c._status===-1)&&(c._status=1,c._result=Y,Z.status===void 0&&(Z.status="fulfilled",Z.value=Y))},function(Y){(c._status===0||c._status===-1)&&(c._status=2,c._result=Y,Z.status===void 0&&(Z.status="rejected",Z.reason=Y))}),c._status===-1&&(c._status=0,c._result=Z)}if(c._status===1)return c._result.default;throw c._result}var b=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)};function p(c){var D=ee.T,Z={};Z.types=D!==null?D.types:null,ee.T=Z;try{var Y=c(),te=ee.S;te!==null&&te(Z,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(R,b)}catch(ue){b(ue)}finally{D!==null&&Z.types!==null&&(D.types=Z.types),ee.T=D}}function O(c){var D=ee.T;if(D!==null){var Z=D.types;Z===null?D.types=[c]:Z.indexOf(c)===-1&&Z.push(c)}else p(O.bind(null,c))}var W={map:P,forEach:function(c,D,Z){P(c,function(){D.apply(this,arguments)},Z)},count:function(c){var D=0;return P(c,function(){D++}),D},toArray:function(c){return P(c,function(D){return D})||[]},only:function(c){if(!Ae(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return we.Activity=_,we.Children=W,we.Component=k,we.Fragment=h,we.Profiler=G,we.PureComponent=L,we.StrictMode=d,we.Suspense=$,we.ViewTransition=E,we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,we.__COMPILER_RUNTIME={__proto__:null,c:function(c){return ee.H.useMemoCache(c)}},we.addTransitionType=O,we.cache=function(c){return function(){return c.apply(null,arguments)}},we.cacheSignal=function(){return null},we.cloneElement=function(c,D,Z){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var Y=F({},c.props),te=c.key;if(D!=null)for(ue in D.key!==void 0&&(te=""+D.key),D)!Q.call(D,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&D.ref===void 0||(Y[ue]=D[ue]);var ue=arguments.length-2;if(ue===1)Y.children=Z;else if(1<ue){for(var de=Array(ue),J=0;J<ue;J++)de[J]=arguments[J+2];Y.children=de}return pe(c.type,te,Y)},we.createContext=function(c){return c={$$typeof:I,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:H,_context:c},c},we.createElement=function(c,D,Z){var Y,te={},ue=null;if(D!=null)for(Y in D.key!==void 0&&(ue=""+D.key),D)Q.call(D,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(te[Y]=D[Y]);var de=arguments.length-2;if(de===1)te.children=Z;else if(1<de){for(var J=Array(de),ie=0;ie<de;ie++)J[ie]=arguments[ie+2];te.children=J}if(c&&c.defaultProps)for(Y in de=c.defaultProps,de)te[Y]===void 0&&(te[Y]=de[Y]);return pe(c,ue,te)},we.createRef=function(){return{current:null}},we.forwardRef=function(c){return{$$typeof:z,render:c}},we.isValidElement=Ae,we.lazy=function(c){return{$$typeof:K,_payload:{_status:-1,_result:c},_init:he}},we.memo=function(c,D){return{$$typeof:oe,type:c,compare:D===void 0?null:D}},we.startTransition=p,we.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},we.use=function(c){return ee.H.use(c)},we.useActionState=function(c,D,Z){return ee.H.useActionState(c,D,Z)},we.useCallback=function(c,D){return ee.H.useCallback(c,D)},we.useContext=function(c){return ee.H.useContext(c)},we.useDebugValue=function(){},we.useDeferredValue=function(c,D){return ee.H.useDeferredValue(c,D)},we.useEffect=function(c,D){return ee.H.useEffect(c,D)},we.useEffectEvent=function(c){return ee.H.useEffectEvent(c)},we.useId=function(){return ee.H.useId()},we.useImperativeHandle=function(c,D,Z){return ee.H.useImperativeHandle(c,D,Z)},we.useInsertionEffect=function(c,D){return ee.H.useInsertionEffect(c,D)},we.useLayoutEffect=function(c,D){return ee.H.useLayoutEffect(c,D)},we.useMemo=function(c,D){return ee.H.useMemo(c,D)},we.useOptimistic=function(c,D){return ee.H.useOptimistic(c,D)},we.useReducer=function(c,D,Z){return ee.H.useReducer(c,D,Z)},we.useRef=function(c){return ee.H.useRef(c)},we.useState=function(c){return ee.H.useState(c)},we.useSyncExternalStore=function(c,D,Z){return ee.H.useSyncExternalStore(c,D,Z)},we.useTransition=function(){return ee.H.useTransition()},we.version="19.3.1",we}var Lp;function nc(){return Lp||(Lp=1,Xu.exports=mg()),Xu.exports}var le=nc(),Zu={exports:{}},ji={},Ku={exports:{}},Ju={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function pg(){return Rp||(Rp=1,(function(o){function m(T,V){var P=T.length;T.push(V);e:for(;0<P;){var he=P-1>>>1,b=T[he];if(0<G(b,V))T[he]=V,T[P]=b,P=he;else break e}}function h(T){return T.length===0?null:T[0]}function d(T){if(T.length===0)return null;var V=T[0],P=T.pop();if(P!==V){T[0]=P;e:for(var he=0,b=T.length,p=b>>>1;he<p;){var O=2*(he+1)-1,W=T[O],c=O+1,D=T[c];if(0>G(W,P))c<b&&0>G(D,W)?(T[he]=D,T[c]=P,he=c):(T[he]=W,T[O]=P,he=O);else if(c<b&&0>G(D,P))T[he]=D,T[c]=P,he=c;else break e}}return V}function G(T,V){var P=T.sortIndex-V.sortIndex;return P!==0?P:T.id-V.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var H=performance;o.unstable_now=function(){return H.now()}}else{var I=Date,z=I.now();o.unstable_now=function(){return I.now()-z}}var $=[],oe=[],K=1,_=null,E=3,me=!1,ge=!1,S=!1,F=!1,ne=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;function L(T){for(var V=h(oe);V!==null;){if(V.callback===null)d(oe);else if(V.startTime<=T)d(oe),V.sortIndex=V.expirationTime,m($,V);else break;V=h(oe)}}function M(T){if(S=!1,L(T),!ge)if(h($)!==null)ge=!0,B||(B=!0,Ae());else{var V=h(oe);V!==null&&re(M,V.startTime-T)}}var B=!1,R=-1,ee=5,Q=-1;function pe(){return F?!0:!(o.unstable_now()-Q<ee)}function ve(){if(F=!1,B){var T=o.unstable_now();Q=T;var V=!0;try{e:{ge=!1,S&&(S=!1,k(R),R=-1),me=!0;var P=E;try{t:{for(L(T),_=h($);_!==null&&!(_.expirationTime>T&&pe());){var he=_.callback;if(typeof he=="function"){_.callback=null,E=_.priorityLevel;var b=he(_.expirationTime<=T);if(T=o.unstable_now(),typeof b=="function"){_.callback=b,L(T),V=!0;break t}_===h($)&&d($),L(T)}else d($);_=h($)}if(_!==null)V=!0;else{var p=h(oe);p!==null&&re(M,p.startTime-T),V=!1}}break e}finally{_=null,E=P,me=!1}V=void 0}}finally{V?Ae():B=!1}}}var Ae;if(typeof g=="function")Ae=function(){g(ve)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,j=Ve.port2;Ve.port1.onmessage=ve,Ae=function(){j.postMessage(null)}}else Ae=function(){ne(ve,0)};function re(T,V){R=ne(function(){T(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(T){T.callback=null},o.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<T?Math.floor(1e3/T):5},o.unstable_getCurrentPriorityLevel=function(){return E},o.unstable_next=function(T){switch(E){case 1:case 2:case 3:var V=3;break;default:V=E}var P=E;E=V;try{return T()}finally{E=P}},o.unstable_requestPaint=function(){F=!0},o.unstable_runWithPriority=function(T,V){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var P=E;E=T;try{return V()}finally{E=P}},o.unstable_scheduleCallback=function(T,V,P){var he=o.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?he+P:he):P=he,T){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=P+b,T={id:K++,callback:V,priorityLevel:T,startTime:P,expirationTime:b,sortIndex:-1},P>he?(T.sortIndex=P,m(oe,T),h($)===null&&T===h(oe)&&(S?(k(R),R=-1):S=!0,re(M,P-he))):(T.sortIndex=b,m($,T),ge||me||(ge=!0,B||(B=!0,Ae()))),T},o.unstable_shouldYield=pe,o.unstable_wrapCallback=function(T){var V=E;return function(){var P=E;E=V;try{return T.apply(this,arguments)}finally{E=P}}}})(Ju)),Ju}var Up;function hg(){return Up||(Up=1,Ku.exports=pg()),Ku.exports}var $u={exports:{}},vt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function xg(){if(qp)return vt;qp=1;var o=nc();function m(K){var _="https://react.dev/errors/"+K;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)_+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+K+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var d={d:{f:h,r:function(){throw Error(m(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},G=Symbol.for("react.portal"),H=Symbol.for("react.recoverable"),I=Symbol.for("react.optimistic_key");function z(K,_,E){var me=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:G,key:me==null?null:me===I?I:""+me,children:K,containerInfo:_,implementation:E}}var $=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function oe(K,_){if(K==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,vt.browser=function(K){return{$$typeof:H,_reason:K}},vt.createPortal=function(K,_){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(m(299));return z(K,_,null,E)},vt.flushSync=function(K){var _=$.T,E=d.p;try{if($.T=null,d.p=2,K)return K()}finally{$.T=_,d.p=E,d.d.f()}},vt.preconnect=function(K,_){typeof K=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,d.d.C(K,_))},vt.prefetchDNS=function(K){typeof K=="string"&&d.d.D(K)},vt.preinit=function(K,_){if(typeof K=="string"&&_&&typeof _.as=="string"){var E=_.as,me=oe(E,_.crossOrigin),ge=typeof _.integrity=="string"?_.integrity:void 0,S=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;E==="style"?d.d.S(K,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:me,integrity:ge,fetchPriority:S}):E==="script"&&d.d.X(K,{crossOrigin:me,integrity:ge,fetchPriority:S,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},vt.preinitModule=function(K,_){if(typeof K=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var E=oe(_.as,_.crossOrigin);d.d.M(K,{crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&d.d.M(K)},vt.preload=function(K,_){if(typeof K=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var E=_.as,me=oe(E,_.crossOrigin);d.d.L(K,E,{crossOrigin:me,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},vt.preloadModule=function(K,_){if(typeof K=="string")if(_){var E=oe(_.as,_.crossOrigin);d.d.m(K,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else d.d.m(K)},vt.requestFormReset=function(K){d.d.r(K)},vt.unstable_batchedUpdates=function(K,_){return K(_)},vt.useFormState=function(K,_,E){return $.H.useFormState(K,_,E)},vt.useFormStatus=function(){return $.H.useHostTransitionStatus()},vt.version="19.3.1",vt}var Hp;function gg(){if(Hp)return $u.exports;Hp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(m){console.error(m)}}return o(),$u.exports=xg(),$u.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function yg(){if(Gp)return ji;Gp=1;var o=hg(),m=nc(),h=gg();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function G(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function H(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function I(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $(e){if(H(e)!==e)throw Error(d(188))}function oe(e){var t=e.alternate;if(!t){if(t=H(e),t===null)throw Error(d(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return $(a),e;if(i===l)return $(a),t;i=i.sibling}throw Error(d(188))}if(n.return!==l.return)n=a,l=i;else{for(var r=!1,u=a.child;u;){if(u===n){r=!0,n=a,l=i;break}if(u===l){r=!0,l=a,n=i;break}u=u.sibling}if(!r){for(u=i.child;u;){if(u===n){r=!0,n=i,l=a;break}if(u===l){r=!0,l=i,n=a;break}u=u.sibling}if(!r)throw Error(d(189))}}if(n.alternate!==l)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?e:t}function K(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=K(e),t!==null)return t;e=e.sibling}return null}function _(e,t,n,l,a,i){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,l,a,i)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&_(e.child,t,n,l,a,i))return!0;e=e.sibling}return!1}function E(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function me(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function ge(e){var t=[null,null],n=E(e);return n===null||S(t,e,n.child,{foundSelf:!1}),t}function S(e,t,n,l){for(;n!==null;){if(n===t)l.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(l.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&S(e,t,n.child,l))return!0;n=n.sibling}return!1}function F(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(d(559))}}var ne=null,k=null;function g(e,t,n){return e===n?!0:e===t?(ne=e,!0):!1}function L(e,t,n){return e===n?(k=e,!1):e===t?(k!==null&&(ne=e),!0):!1}function M(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function B(e,t,n){for(var l=0,a=e;a;a=n(a))l++;a=0;for(var i=t;i;i=n(i))a++;for(;0<l-a;)e=n(e),l--;for(;0<a-l;)t=n(t),a--;for(;l--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var R=Object.assign,ee=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),pe=Symbol.for("react.portal"),ve=Symbol.for("react.fragment"),Ae=Symbol.for("react.strict_mode"),Ve=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),re=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),O=Symbol.for("react.legacy_hidden"),W=Symbol.for("react.memo_cache_sentinel"),c=Symbol.for("react.view_transition"),D=Symbol.for("react.recoverable"),Z=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=Z&&e[Z]||e["@@iterator"],typeof e=="function"?e:null)}var te=Symbol.for("react.client.reference");function ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ve:return"Fragment";case Ve:return"Profiler";case Ae:return"StrictMode";case V:return"Suspense";case P:return"SuspenseList";case p:return"Activity";case c:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case pe:return"Portal";case re:return e.displayName||"Context";case j:return(e._context.displayName||"Context")+".Consumer";case T:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case he:return t=e.displayName||null,t!==null?t:ue(e.type)||"Memo";case b:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}var de=Array.isArray,J=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Se={pending:!1,data:null,method:null,action:null},_e=[],Xe=-1;function Je(e){return{current:e}}function Oe(e){0>Xe||(e.current=_e[Xe],_e[Xe]=null,Xe--)}function Ee(e,t){Xe++,_e[Xe]=e.current,e.current=t}var et=Je(null),We=Je(null),Qt=Je(null),un=Je(null);function _n(e,t){switch(Ee(Qt,t),Ee(We,e),Ee(et,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Gm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Gm(t),e=Ym(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Oe(et),Ee(et,e)}function tn(){Oe(et),Oe(We),Oe(Qt)}function pl(e){var t=e.memoizedState;t!==null&&(Na._currentValue=t.memoizedState,Ee(un,e)),t=et.current;var n=Ym(t,e.type);t!==n&&(Ee(We,e),Ee(et,n))}function X(e){We.current===e&&(Oe(et),Oe(We)),un.current===e&&(Oe(un),Na._currentValue=Se)}var se,Re;function Be(e){if(se===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);se=t&&t[1]||"",Re=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+se+e+Re}var Ie=!1;function ot(e,t){if(!e||Ie)return"";Ie=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(ae){var y=ae}Reflect.construct(e,[],q)}else{try{q.call()}catch(ae){y=ae}q=!1;try{var A=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),q=!0,new e}finally{q&&(A!==void 0?Object.defineProperty(e.prototype,"props",A):delete e.prototype.props)}}}else{try{throw Error()}catch(ae){y=ae}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(ae){if(ae&&y&&typeof ae.stack=="string")return[ae.stack,y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],u=i[1];if(r&&u){var f=r.split(`
`),w=u.split(`
`);for(a=l=0;l<f.length&&!f[l].includes("DetermineComponentFrameRoot");)l++;for(;a<w.length&&!w[a].includes("DetermineComponentFrameRoot");)a++;if(l===f.length||a===w.length)for(l=f.length-1,a=w.length-1;1<=l&&0<=a&&f[l]!==w[a];)a--;for(;1<=l&&0<=a;l--,a--)if(f[l]!==w[a]){if(l!==1||a!==1)do if(l--,a--,0>a||f[l]!==w[a]){var C=`
`+f[l].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=l&&0<=a);break}}}finally{Ie=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Be(n):""}function At(e,t){switch(e.tag){case 26:case 27:case 5:return Be(e.type);case 16:return Be("Lazy");case 13:return e.child!==t&&t!==null?Be("Suspense Fallback"):Be("Suspense");case 19:return Be("SuspenseList");case 0:case 15:return ot(e.type,!1);case 11:return ot(e.type.render,!1);case 1:return ot(e.type,!0);case 31:return Be("Activity");case 30:return Be("ViewTransition");default:return""}}function wt(e){try{var t="",n=null;do t+=At(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var pr=Object.prototype.hasOwnProperty,hr=o.unstable_scheduleCallback,xr=o.unstable_cancelCallback,hh=o.unstable_shouldYield,xh=o.unstable_requestPaint,zt=o.unstable_now,gh=o.unstable_getCurrentPriorityLevel,cc=o.unstable_ImmediatePriority,dc=o.unstable_UserBlockingPriority,Mi=o.unstable_NormalPriority,yh=o.unstable_LowPriority,fc=o.unstable_IdlePriority,bh=o.log,vh=o.unstable_setDisableYieldValue,za=null,Bt=null;function Un(e){if(typeof bh=="function"&&vh(e),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(za,e)}catch{}}var Ft=Math.clz32?Math.clz32:Eh,wh=Math.log,_h=Math.LN2;function Eh(e){return e>>>=0,e===0?32:31-(wh(e)/_h|0)|0}var Oi=256,zi=262144,Bi=4194304;function hl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fi(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var u=l&134217727;return u!==0?(l=u&~i,l!==0?a=hl(l):(r&=u,r!==0?a=hl(r):n||(n=u&~e,n!==0&&(a=hl(n))))):(u=l&~i,u!==0?a=hl(u):r!==0?a=hl(r):n||(n=l&~e,n!==0&&(a=hl(n)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:a}function Ba(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function mc(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-Ft(n),a=1<<l;t|=e[l],n&=~a}return t}function kh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pc(){var e=Bi;return Bi<<=1,(Bi&62914560)===0&&(Bi=4194304),e}function gr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Nh(e,t,n,l,a,i){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var u=e.entanglements,f=e.expirationTimes,w=e.hiddenUpdates;for(n=r&~n;0<n;){var C=31-Ft(n),q=1<<C;u[C]=0,f[C]=-1;var y=w[C];if(y!==null)for(w[C]=null,C=0;C<y.length;C++){var A=y[C];A!==null&&(A.lane&=-536870913)}n&=~q}l!==0&&hc(e,l,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function hc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Ft(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function xc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Ft(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function gc(e,t){var n=t&-t;return n=(n&42)!==0?1:yr(n),(n&(e.suspendedLanes|t))!==0?0:n}function yr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function br(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function yc(){var e=ie.p;return e!==0?e:(e=window.event,e===void 0?32:Sp(e.type))}function bc(e,t){var n=ie.p;try{return ie.p=e,t()}finally{ie.p=n}}var En=Math.random().toString(36).slice(2),pt="__reactFiber$"+En,jt="__reactProps$"+En,Ul="__reactContainer$"+En,vc="__reactEvents$"+En,Sh="__reactListeners$"+En,Ah="__reactHandles$"+En,wc="__reactResources$"+En,La="__reactMarker$"+En,Li="__reactLoad$"+En;function Ri(e){delete e[pt],delete e[jt],delete e[Sh],delete e[Ah]}function xl(e){var t;if(t=e[pt])return t;for(var n=e.parentNode;n;){if(t=n[Ul]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sp(e);e!==null;){if(n=e[pt])return n;e=sp(e)}return t}e=n,n=e.parentNode}return null}function ql(e){if(e=e[pt]||e[Ul]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ra(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function Hl(e){var t=e[wc];return t||(t=e[wc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ct(e){e[La]=!0}function _c(e){e[Li]=void 0}var Ec=new Set,kc={};function gl(e,t){Gl(e,t),Gl(e+"Capture",t)}function Gl(e,t){for(kc[e]=t,e=0;e<t.length;e++)Ec.add(t[e])}var jh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nc={},Sc={};function Th(e){return pr.call(Sc,e)?!0:pr.call(Nc,e)?!1:jh.test(e)?Sc[e]=!0:(Nc[e]=!0,!1)}var Fe=!1;function Ac(){var e=Fe;return Fe=!1,e}function Ui(e,t,n){if(Th(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function qi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function kn(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,l)}}function Lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ch(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vr(e){if(!e._valueTracker){var t=jc(e)?"checked":"value";e._valueTracker=Ch(e,t,""+e[t])}}function Tc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=jc(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}var Dh=/[\n"\\]/g;function Xt(e){return e.replace(Dh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function wr(e,t,n,l,a,i,r,u){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Lt(t)):e.value!==""+Lt(t)&&(e.value=""+Lt(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?_r(e,Lt(e.value)):_r(e,Lt(t)):n!=null?_r(e,Lt(n)):l!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+Lt(u):e.removeAttribute("name")}function Cc(e,t,n,l,a,i,r,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){vr(e);return}n=n!=null?""+Lt(n):"",t=t!=null?""+Lt(t):n,u||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=u?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),vr(e)}function _r(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Yl(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Dc(e,t,n){if(t!=null&&(t=""+Lt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Lt(n):""}function Mc(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(d(92));if(de(l)){if(1<l.length)throw Error(d(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Lt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),vr(e)}function Vl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Oc(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||Mh.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function zc(e,t,n){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="",Fe=!0);for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&(Oc(e,a,l),Fe=!0)}else for(var i in t)t.hasOwnProperty(i)&&Oc(e,i,t[i])}function Er(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hi(e){return zh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function cn(){}var kr=null;function Nr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ql=null,Xl=null;function Bc(e){var t=ql(e);if(t&&(e=t.stateNode)){var n=e[jt]||null;e:switch(e=t.stateNode,t.type){case"input":if(wr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Xt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[jt]||null;if(!a)throw Error(d(90));wr(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&Tc(l)}break e;case"textarea":Dc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Yl(e,!!n.multiple,t,!1)}}}var Sr=!1;function Fc(e,t,n){if(Sr)return e(t,n);Sr=!0;try{var l=e(t);return l}finally{if(Sr=!1,(Ql!==null||Xl!==null)&&(Hs(),Ql&&(t=Ql,e=Xl,Xl=Ql=null,Bc(t),e)))for(t=0;t<e.length;t++)Bc(e[t])}}function Ua(e,t){var n=e.stateNode;if(n===null)return null;var l=n[jt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(d(231,t,typeof n));return n}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ar=!1;if(Nn)try{var qa={};Object.defineProperty(qa,"passive",{get:function(){Ar=!0}}),window.addEventListener("test",qa,qa),window.removeEventListener("test",qa,qa)}catch{Ar=!1}var qn=null,jr=null,Gi=null;function Lc(){if(Gi)return Gi;var e,t=jr,n=t.length,l,a="value"in qn?qn.value:qn.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(l=1;l<=r&&t[n-l]===a[i-l];l++);return Gi=a.slice(e,1<l?1-l:void 0)}function Yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vi(){return!0}function Rc(){return!1}function Et(e){function t(n,l,a,i,r){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Vi:Rc,this.isPropagationStopped=Rc,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qi=Et(Hn),Ha=R({},Hn,{view:0,detail:0}),Bh=Et(Ha),Tr,Cr,Ga,Xi=R({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ga&&(Ga&&e.type==="mousemove"?(Tr=e.screenX-Ga.screenX,Cr=e.screenY-Ga.screenY):Cr=Tr=0,Ga=e),Tr)},movementY:function(e){return"movementY"in e?e.movementY:Cr}}),Uc=Et(Xi),Fh=R({},Xi,{dataTransfer:0}),Lh=Et(Fh),Rh=R({},Ha,{relatedTarget:0}),Dr=Et(Rh),Uh=R({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),qh=Et(Uh),Hh=R({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gh=Et(Hh),Yh=R({},Hn,{data:0}),qc=Et(Yh),Vh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xh[e])?!!t[e]:!1}function Mr(){return Zh}var Kh=R({},Ha,{key:function(e){if(e.key){var t=Vh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mr,charCode:function(e){return e.type==="keypress"?Yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jh=Et(Kh),$h=R({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hc=Et($h),Wh=R({},Hn,{submitter:0}),Ih=Et(Wh),Ph=R({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mr}),e0=Et(Ph),t0=R({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),n0=Et(t0),l0=R({},Xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),a0=Et(l0),i0=R({},Hn,{newState:0,oldState:0,source:0}),s0=Et(i0),r0=[9,13,27,32],Or=Nn&&"CompositionEvent"in window,Ya=null;Nn&&"documentMode"in document&&(Ya=document.documentMode);var o0=Nn&&"TextEvent"in window&&!Ya,Gc=Nn&&(!Or||Ya&&8<Ya&&11>=Ya),Yc=" ",Vc=!1;function Qc(e,t){switch(e){case"keyup":return r0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zl=!1;function u0(e,t){switch(e){case"compositionend":return Xc(t);case"keypress":return t.which!==32?null:(Vc=!0,Yc);case"textInput":return e=t.data,e===Yc&&Vc?null:e;default:return null}}function c0(e,t){if(Zl)return e==="compositionend"||!Or&&Qc(e,t)?(e=Lc(),Gi=jr=qn=null,Zl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gc&&t.locale!=="ko"?null:t.data;default:return null}}var d0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!d0[e.type]:t==="textarea"}function Kc(e,t,n,l){Ql?Xl?Xl.push(l):Xl=[l]:Ql=l,t=Zs(t,"onChange"),0<t.length&&(n=new Qi("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Va=null,Qa=null;function f0(e){Fm(e,0)}function Zi(e){var t=Ra(e);if(Tc(t))return e}function Jc(e,t){if(e==="change")return t}var $c=!1;if(Nn){var zr;if(Nn){var Br="oninput"in document;if(!Br){var Wc=document.createElement("div");Wc.setAttribute("oninput","return;"),Br=typeof Wc.oninput=="function"}zr=Br}else zr=!1;$c=zr&&(!document.documentMode||9<document.documentMode)}function Ic(){Va&&(Va.detachEvent("onpropertychange",Pc),Qa=Va=null)}function Pc(e){if(e.propertyName==="value"&&Zi(Qa)){var t=[];Kc(t,Qa,e,Nr(e)),Fc(f0,t)}}function m0(e,t,n){e==="focusin"?(Ic(),Va=t,Qa=n,Va.attachEvent("onpropertychange",Pc)):e==="focusout"&&Ic()}function p0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zi(Qa)}function h0(e,t){if(e==="click")return Zi(t)}function x0(e,t){if(e==="input"||e==="change")return Zi(t)}function g0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:g0;function Xa(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!pr.call(t,a)||!Rt(e[a],t[a]))return!1}return!0}function Fr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function td(e,t){var n=ed(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ed(n)}}function nd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ld(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Fr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fr(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var y0=Nn&&"documentMode"in document&&11>=document.documentMode,Kl=null,Rr=null,Za=null,Ur=!1;function ad(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ur||Kl==null||Kl!==Fr(l)||(l=Kl,"selectionStart"in l&&Lr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Za&&Xa(Za,l)||(Za=l,l=Zs(Rr,"onSelect"),0<l.length&&(t=new Qi("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Kl)))}function yl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jl={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionrun:yl("Transition","TransitionRun"),transitionstart:yl("Transition","TransitionStart"),transitioncancel:yl("Transition","TransitionCancel"),transitionend:yl("Transition","TransitionEnd")},qr={},id={};Nn&&(id=document.createElement("div").style,"AnimationEvent"in window||(delete Jl.animationend.animation,delete Jl.animationiteration.animation,delete Jl.animationstart.animation),"TransitionEvent"in window||delete Jl.transitionend.transition);function bl(e){if(qr[e])return qr[e];if(!Jl[e])return e;var t=Jl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in id)return qr[e]=t[n];return e}var sd=bl("animationend"),rd=bl("animationiteration"),od=bl("animationstart"),b0=bl("transitionrun"),v0=bl("transitionstart"),w0=bl("transitioncancel"),ud=bl("transitionend"),cd=new Map,Hr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hr.push("scrollEnd");function nn(e,t){cd.set(e,t),gl(t,[e])}var _0=0;function Sn(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=rn.identifierPrefix;var n=_0++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function dd(e){if(e==null||typeof e=="string")return e;var t=null,n=ha;if(n!==null)for(var l=0;l<n.length;l++){var a=e[n[l]];if(a!=null){if(a==="none")return"none";t=t==null?a:t+(" "+a)}}return t??e.default}function An(e,t){return e=dd(e),t=dd(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Ki=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zt=[],$l=0,Gr=0;function Ji(){for(var e=$l,t=Gr=$l=0;t<e;){var n=Zt[t];Zt[t++]=null;var l=Zt[t];Zt[t++]=null;var a=Zt[t];Zt[t++]=null;var i=Zt[t];if(Zt[t++]=null,l!==null&&a!==null){var r=l.pending;r===null?a.next=a:(a.next=r.next,r.next=a),l.pending=a}i!==0&&fd(n,a,i)}}function $i(e,t,n,l){Zt[$l++]=e,Zt[$l++]=t,Zt[$l++]=n,Zt[$l++]=l,Gr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Yr(e,t,n,l){return $i(e,t,n,l),Wi(e)}function vl(e,t){return $i(e,null,null,t),Wi(e)}function fd(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,i=e.return;i!==null;)i.childLanes|=n,l=i.alternate,l!==null&&(l.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&t!==null&&(a=31-Ft(n),e=i.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),i):null}function Wi(e){if(50<hi)throw hi=0,qs=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Wl={};function E0(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,l){return new E0(e,t,n,l)}function Vr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function md(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ii(e,t,n,l,a,i){var r=0;if(l=e,typeof l=="function")Vr(l)&&(r=1);else if(typeof l=="string")r=Wx(e,n,et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(l){case p:return e=Tt(31,n,t,a),e.elementType=p,e.lanes=i,e;case ve:return wl(n.children,a,i,t);case Ae:r=8,a|=24;break;case Ve:return e=Tt(12,n,t,a|2),e.elementType=Ve,e.lanes=i,e;case V:return e=Tt(13,n,t,a),e.elementType=V,e.lanes=i,e;case P:return e=Tt(19,n,t,a),e.elementType=P,e.lanes=i,e;case O:case c:return e=a|32,e=Tt(30,n,t,e),e.elementType=c,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case re:r=10;break e;case j:r=9;break e;case T:r=11;break e;case he:r=14;break e;case b:r=16,l=null;break e}r=29,n=Error(d(130,e===null?"null":typeof e,"")),l=null}return t=Tt(r,n,t,a),t.elementType=e,t.type=l,t.lanes=i,t}function wl(e,t,n,l){return e=Tt(7,e,l,t),e.lanes=n,e}function Qr(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function pd(e){var t=Tt(18,null,null,0);return t.stateNode=e,t}function Xr(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var hd=new WeakMap;function Kt(e,t){if(typeof e=="object"&&e!==null){var n=hd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:wt(t)},hd.set(e,t),t)}return{value:e,source:t,stack:wt(t)}}var Il=[],Pl=0,Pi=null,Ka=0,Jt=[],$t=0,Gn=null,dn=1,fn="";function Tn(e,t){Il[Pl++]=Ka,Il[Pl++]=Pi,Pi=e,Ka=t}function xd(e,t,n){Jt[$t++]=dn,Jt[$t++]=fn,Jt[$t++]=Gn,Gn=e;var l=dn;e=fn;var a=32-Ft(l)-1;l&=~(1<<a),n+=1;var i=32-Ft(t)+a;if(30<i){var r=a-a%5;i=(l&(1<<r)-1).toString(32),l>>=r,a-=r,dn=1<<32-Ft(t)+a|n<<a|l,fn=i+e}else dn=1<<i|n<<a|l,fn=e}function es(e){e.return!==null&&(Tn(e,1),xd(e,1,0))}function Zr(e){for(;e===Pi;)Pi=Il[--Pl],Il[Pl]=null,Ka=Il[--Pl],Il[Pl]=null;for(;e===Gn;)Gn=Jt[--$t],Jt[$t]=null,fn=Jt[--$t],Jt[$t]=null,dn=Jt[--$t],Jt[$t]=null}function gd(e,t){Jt[$t++]=dn,Jt[$t++]=fn,Jt[$t++]=Gn,dn=t.id,fn=t.overflow,Gn=e}var dt=null,Ze=null,je=!1,Yn=null,Wt=!1,Kr=Error(d(519));function Vn(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ja(Kt(t,e)),Kr}function yd(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[pt]=e,t[jt]=l,n){case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":case"embed":Ce("load",t);break;case"video":case"audio":for(n=0;n<gi.length;n++)Ce(gi[n],t);break;case"source":Ce("error",t);break;case"img":case"image":case"link":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"input":Ce("invalid",t),Cc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ce("invalid",t);break;case"textarea":Ce("invalid",t),Mc(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||qm(t.textContent,n)?(l.popover!=null&&(Ce("beforetoggle",t),Ce("toggle",t)),l.onScroll!=null&&Ce("scroll",t),l.onScrollEnd!=null&&Ce("scrollend",t),l.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Vn(e,!0)}function ts(e){for(dt=e.return;dt;)switch(dt.tag){case 5:case 31:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:dt=dt.return}}function ea(e){if(e!==dt)return!1;if(!je)return ts(e),je=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Nu(e.type,e.memoizedProps)),n=!n),n&&Ze&&Vn(e),ts(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Ze=ip(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Ze=ip(e)}else t===27?(t=Ze,sl(e.type)?(e=zu,zu=null,Ze=e):Ze=t):Ze=dt?Pt(e.stateNode.nextSibling):null;return!0}function _l(){Ze=dt=null,je=!1}function Jr(){var e=Yn;return e!==null&&(Mt===null?Mt=e:Mt.push.apply(Mt,e),Yn=null),e}function Ja(e){Yn===null?Yn=[e]:Yn.push(e)}var $r=Je(null),El=null,Cn=null;function Qn(e,t,n){Ee($r,t._currentValue),t._currentValue=n}function Dn(e){e._currentValue=$r.current,Oe($r)}function ns(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Wr(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var r=a.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=a;for(var f=0;f<t.length;f++)if(u.context===t[f]){i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ns(i.return,n,e),l||(r=null);break e}i=u.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(d(341));r.lanes|=n,i=r.alternate,i!==null&&(i.lanes|=n),ns(r,n,e),r=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),ns(a.return,n,e),r=a.child,r=r!==null?r.sibling:null):r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function kl(e,t,n,l){e=null;for(var a=t,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(d(387));if(r=r.memoizedProps,r!==null){var u=a.type;Rt(a.pendingProps.value,r.value)||(e!==null?e.push(u):e=[u])}}else if(a===un.current){if(r=a.alternate,r===null)throw Error(d(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Na):e=[Na])}a=a.return}return e!==null&&Wr(t,e,n,l),t.flags|=262144,e!==null}function ls(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Nl(e){El=e,Cn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ht(e){return bd(El,e)}function as(e,t){return El===null&&Nl(e),bd(e,t)}function bd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Cn===null){if(e===null)throw Error(d(308));Cn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Cn=Cn.next=t;return n}var k0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},N0=o.unstable_scheduleCallback,S0=o.unstable_NormalPriority,at={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ir(){return{controller:new k0,data:new Map,refCount:0}}function $a(e){e.refCount--,e.refCount===0&&N0(S0,function(){e.controller.abort()})}function vd(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var l=t[e];n.indexOf(l)===-1&&n.push(l)}}}var Wa=null;function A0(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ia=null,Pr=0,Sl=0,ta=null;function j0(e,t){if(Ia===null){var n=Ia=[];Pr=0,Sl=xu(),ta={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Pr++,t.then(wd,wd),t}function wd(){if(--Pr===0&&(Wa=null,Ia!==null)){ta!==null&&(ta.status="fulfilled");var e=Ia;Ia=null,Sl=0,ta=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function T0(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var _d=J.S;J.S=function(e,t){if(hm=zt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&j0(e,t),Wa!==null)for(var n=ba;n!==null;)vd(n,Wa),n=n.next;if(n=e.types,n!==null){for(var l=ba;l!==null;)vd(l,n),l=l.next;if(Sl!==0){l=Wa,l===null&&(l=Wa=[]);for(var a=0;a<n.length;a++){var i=n[a];l.indexOf(i)===-1&&l.push(i)}}}_d!==null&&_d(e,t)};var Al=Je(null);function eo(){var e=Al.current;return e!==null?e:Qe.pooledCache}function is(e,t){t===null?Ee(Al,Al.current):Ee(Al,t.pool)}function Ed(){var e=eo();return e===null?null:{parent:at._currentValue,pool:e}}var na=Error(d(460)),to=Error(d(474)),ss=Error(d(542)),rs={then:function(){}};function kd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Nd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ad(e),e===void 0&&!("reason"in t)?Error(d(600)):e;default:if(typeof t.status=="string")t.then(cn,cn);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ad(e),e}throw Tl=t,na}}function jl(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Tl=n,na):n}}var Tl=null;function Sd(){if(Tl===null)throw Error(d(459));var e=Tl;return Tl=null,e}function Ad(e){if(e===na||e===ss)throw Error(d(483))}var la=null,Pa=0;function os(e){var t=Pa;return Pa+=1,la===null&&(la=[]),Nd(la,e,t)}function Xn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function us(e,t){throw t.$$typeof===ee?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function jd(e){function t(v,x){if(e){var N=v.deletions;N===null?(v.deletions=[x],v.flags|=16):N.push(x)}}function n(v,x){if(!e)return null;for(;x!==null;)t(v,x),x=x.sibling;return null}function l(v){for(var x=new Map;v!==null;)v.key===null?x.set(v.index,v):x.set(v.key,v),v=v.sibling;return x}function a(v,x){return v=jn(v,x),v.index=0,v.sibling=null,v}function i(v,x,N){return v.index=N,e?(N=v.alternate,N!==null?(N=N.index,N<x?(v.flags|=2,x):N):(v.flags|=134217730,x)):(v.flags|=1048576,x)}function r(v){return e&&v.alternate===null&&(v.flags|=134217730),v}function u(v,x,N,U){return x===null||x.tag!==6?(x=Qr(N,v.mode,U),x.return=v,x):(x=a(x,N),x.return=v,x)}function f(v,x,N,U){var ce=N.type;return ce===ve?(v=C(v,x,N.props.children,U,N.key),Xn(v,N),v):x!==null&&(x.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===b&&jl(ce)===x.type)?(x=a(x,N.props),Xn(x,N),x.return=v,x):(x=Ii(N.type,N.key,N.props,null,v.mode,U),Xn(x,N),x.return=v,x)}function w(v,x,N,U){return x===null||x.tag!==4||x.stateNode.containerInfo!==N.containerInfo||x.stateNode.implementation!==N.implementation?(x=Xr(N,v.mode,U),x.return=v,x):(x=a(x,N.children||[]),x.return=v,x)}function C(v,x,N,U,ce){return x===null||x.tag!==7?(x=wl(N,v.mode,U,ce),x.return=v,x):(x=a(x,N),x.return=v,x)}function q(v,x,N){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Qr(""+x,v.mode,N),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Q:return N=Ii(x.type,x.key,x.props,null,v.mode,N),Xn(N,x),N.return=v,N;case pe:return x=Xr(x,v.mode,N),x.return=v,x;case b:return x=jl(x),q(v,x,N)}if(de(x)||Y(x))return x=wl(x,v.mode,N,null),x.return=v,x;if(typeof x.then=="function")return q(v,os(x),N);if(x.$$typeof===re)return q(v,as(v,x),N);us(v,x)}return null}function y(v,x,N,U){var ce=x!==null?x.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return ce!==null?null:u(v,x,""+N,U);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Q:return N.key===ce?f(v,x,N,U):null;case pe:return N.key===ce?w(v,x,N,U):null;case b:return N=jl(N),y(v,x,N,U)}if(de(N)||Y(N))return ce!==null?null:C(v,x,N,U,null);if(typeof N.then=="function")return y(v,x,os(N),U);if(N.$$typeof===re)return y(v,x,as(v,N),U);us(v,N)}return null}function A(v,x,N,U,ce){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return v=v.get(N)||null,u(x,v,""+U,ce);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Q:return v=v.get(U.key===null?N:U.key)||null,f(x,v,U,ce);case pe:return v=v.get(U.key===null?N:U.key)||null,w(x,v,U,ce);case b:return U=jl(U),A(v,x,N,U,ce)}if(de(U)||Y(U))return v=v.get(N)||null,C(x,v,U,ce,null);if(typeof U.then=="function")return A(v,x,N,os(U),ce);if(U.$$typeof===re)return A(v,x,N,as(x,U),ce);us(x,U)}return null}function ae(v,x,N,U){for(var ce=null,Me=null,xe=x,be=x=0,rt=null;xe!==null&&be<N.length;be++){xe.index>be?(rt=xe,xe=null):rt=xe.sibling;var ze=y(v,xe,N[be],U);if(ze===null){xe===null&&(xe=rt);break}e&&xe&&ze.alternate===null&&t(v,xe),x=i(ze,x,be),Me===null?ce=ze:Me.sibling=ze,Me=ze,xe=rt}if(be===N.length)return n(v,xe),je&&Tn(v,be),ce;if(xe===null){for(;be<N.length;be++)xe=q(v,N[be],U),xe!==null&&(x=i(xe,x,be),Me===null?ce=xe:Me.sibling=xe,Me=xe);return je&&Tn(v,be),ce}for(xe=l(xe);be<N.length;be++)rt=A(xe,v,be,N[be],U),rt!==null&&(e&&(ze=rt.alternate,ze!==null&&xe.delete(ze.key===null?be:ze.key)),x=i(rt,x,be),Me===null?ce=rt:Me.sibling=rt,Me=rt);return e&&xe.forEach(function(dl){return t(v,dl)}),je&&Tn(v,be),ce}function fe(v,x,N,U){if(N==null)throw Error(d(151));for(var ce=null,Me=null,xe=x,be=x=0,rt=null,ze=N.next();xe!==null&&!ze.done;be++,ze=N.next()){xe.index>be?(rt=xe,xe=null):rt=xe.sibling;var dl=y(v,xe,ze.value,U);if(dl===null){xe===null&&(xe=rt);break}e&&xe&&dl.alternate===null&&t(v,xe),x=i(dl,x,be),Me===null?ce=dl:Me.sibling=dl,Me=dl,xe=rt}if(ze.done)return n(v,xe),je&&Tn(v,be),ce;if(xe===null){for(;!ze.done;be++,ze=N.next())ze=q(v,ze.value,U),ze!==null&&(x=i(ze,x,be),Me===null?ce=ze:Me.sibling=ze,Me=ze);return je&&Tn(v,be),ce}for(xe=l(xe);!ze.done;be++,ze=N.next())ze=A(xe,v,be,ze.value,U),ze!==null&&(e&&(rt=ze.alternate,rt!==null&&xe.delete(rt.key===null?be:rt.key)),x=i(ze,x,be),Me===null?ce=ze:Me.sibling=ze,Me=ze);return e&&xe.forEach(function(ug){return t(v,ug)}),je&&Tn(v,be),ce}function Ne(v,x,N,U){if(typeof N=="object"&&N!==null&&N.type===ve&&N.key===null&&N.props.ref===void 0&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case Q:e:{for(var ce=N.key;x!==null;){if(x.key===ce){if(ce=N.type,ce===ve){if(x.tag===7){n(v,x.sibling),U=a(x,N.props.children),Xn(U,N),U.return=v,v=U;break e}}else if(x.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===b&&jl(ce)===x.type){n(v,x.sibling),U=a(x,N.props),Xn(U,N),U.return=v,v=U;break e}n(v,x);break}else t(v,x);x=x.sibling}N.type===ve?(U=wl(N.props.children,v.mode,U,N.key),Xn(U,N),U.return=v,v=U):(U=Ii(N.type,N.key,N.props,null,v.mode,U),Xn(U,N),U.return=v,v=U)}return r(v);case pe:e:{for(ce=N.key;x!==null;){if(x.key===ce)if(x.tag===4&&x.stateNode.containerInfo===N.containerInfo&&x.stateNode.implementation===N.implementation){n(v,x.sibling),U=a(x,N.children||[]),U.return=v,v=U;break e}else{n(v,x);break}else t(v,x);x=x.sibling}U=Xr(N,v.mode,U),U.return=v,v=U}return r(v);case b:return N=jl(N),Ne(v,x,N,U)}if(de(N))return ae(v,x,N,U);if(Y(N)){if(ce=Y(N),typeof ce!="function")throw Error(d(150));return N=ce.call(N),fe(v,x,N,U)}if(typeof N.then=="function")return Ne(v,x,os(N),U);if(N.$$typeof===re)return Ne(v,x,as(v,N),U);us(v,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,x!==null&&x.tag===6?(n(v,x.sibling),U=a(x,N),U.return=v,v=U):(n(v,x),U=Qr(N,v.mode,U),U.return=v,v=U),r(v)):n(v,x)}return function(v,x,N,U){try{Pa=0;var ce=Ne(v,x,N,U);return la=null,ce}catch(xe){if(xe===na||xe===ss)throw xe;var Me=Tt(29,xe,null,v.mode);return Me.lanes=U,Me.return=v,Me}finally{}}}var Cl=jd(!0),Td=jd(!1),Zn=!1;function no(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Jn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Le&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=Wi(e),fd(e,null,n),t}return $i(e,l,t,n),Wi(e)}function ei(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,xc(e,n)}}function ao(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?a=i=r:i=i.next=r,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var io=!1;function ti(){if(io){var e=ta;if(e!==null)throw e}}function ni(e,t,n,l){io=!1;var a=e.updateQueue;Zn=!1;var i=a.firstBaseUpdate,r=a.lastBaseUpdate,u=a.shared.pending;if(u!==null){a.shared.pending=null;var f=u,w=f.next;f.next=null,r===null?i=w:r.next=w,r=f;var C=e.alternate;C!==null&&(C=C.updateQueue,u=C.lastBaseUpdate,u!==r&&(u===null?C.firstBaseUpdate=w:u.next=w,C.lastBaseUpdate=f))}if(i!==null){var q=a.baseState;r=0,C=w=f=null,u=i;do{var y=u.lane&-536870913,A=y!==u.lane;if(A?(De&y)===y:(l&y)===y){y!==0&&y===Sl&&(io=!0),C!==null&&(C=C.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var ae=e,fe=u;y=t;var Ne=n;switch(fe.tag){case 1:if(ae=fe.payload,typeof ae=="function"){q=ae.call(Ne,q,y);break e}q=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=fe.payload,y=typeof ae=="function"?ae.call(Ne,q,y):ae,y==null)break e;q=R({},q,y);break e;case 2:Zn=!0}}y=u.callback,y!==null&&(e.flags|=64,A&&(e.flags|=8192),A=a.callbacks,A===null?a.callbacks=[y]:A.push(y))}else A={lane:y,tag:u.tag,payload:u.payload,callback:u.callback,next:null},C===null?(w=C=A,f=q):C=C.next=A,r|=y;if(u=u.next,u===null){if(u=a.shared.pending,u===null)break;A=u,u=A.next,A.next=null,a.lastBaseUpdate=A,a.shared.pending=null}}while(!0);C===null&&(f=q),a.baseState=f,a.firstBaseUpdate=w,a.lastBaseUpdate=C,i===null&&(a.shared.lanes=0),nl|=r,e.lanes=r,e.memoizedState=q}}function Cd(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function Dd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Cd(n[e],t)}var $n=Je(null),cs=Je(0);function Md(e,t){e=Fn,Ee(cs,e),Ee($n,t),Fn=e|t.baseLanes}function so(){Ee(cs,Fn),Ee($n,$n.current)}function ro(){Fn=cs.current,Oe($n),Oe(cs)}var xt=Je(null),_t=null;function Wn(e){var t=e.alternate;Ee(gt,gt.current&1),Ee(xt,e),_t===null&&(t===null||$n.current!==null||t.memoizedState!==null)&&(_t=e)}function oo(e){Ee(gt,gt.current),Ee(xt,e),_t===null&&(_t=e)}function Od(e){e.tag===22?(Ee(gt,gt.current),Ee(xt,e),_t===null&&(_t=e)):In()}function In(){Ee(gt,gt.current),Ee(xt,xt.current)}function Ut(e){Oe(xt),_t===e&&(_t=null),Oe(gt)}var gt=Je(0);function li(e,t){Ee(xt,xt.current),Ee(gt,t)}function uo(e){Oe(gt),Oe(xt),_t===e&&(_t=null)}function ds(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Mu(n)||Ou(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mn=0,ke=null,Ye=null,it=null,fs=!1,aa=!1,Dl=!1,ms=0,ai=0,ia=null,C0=0;function tt(){throw Error(d(321))}function co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function fo(e,t,n,l,a,i){return Mn=i,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,J.H=e===null||e.memoizedState===null?gf:yf,Dl=!1,i=n(l,a),Dl=!1,aa&&(i=Bd(t,n,l,a)),zd(e),i}function zd(e){J.H=vs;var t=Ye!==null&&Ye.next!==null;if(Mn=0,it=Ye=ke=null,fs=!1,ai=0,ia=null,t)throw Error(d(300));e===null||st||(e=e.dependencies,e!==null&&ls(e)&&(st=!0))}function Bd(e,t,n,l){ke=e;var a=0;do{if(aa&&(ia=null),ai=0,aa=!1,25<=a)throw Error(d(301));if(a+=1,it=Ye=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}J.H=R0,i=t(n,l)}while(aa);return i}function D0(){var e=J.H,t=e.useState()[0];return t=typeof t.then=="function"?ii(t):t,e=e.useState()[0],(Ye!==null?Ye.memoizedState:null)!==e&&(ke.flags|=1024),t}function mo(){var e=ms!==0;return ms=0,e}function po(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ho(e){if(fs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fs=!1}Mn=0,it=Ye=ke=null,aa=!1,ai=ms=0,ia=null}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?ke.memoizedState=it=e:it=it.next=e,it}function lt(){if(Ye===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=it===null?ke.memoizedState:it.next;if(t!==null)it=t,Ye=e;else{if(e===null)throw ke.alternate===null?Error(d(467)):Error(d(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},it===null?ke.memoizedState=it=e:it=it.next=e}return it}function ps(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ii(e){var t=ai;return ai+=1,ia===null&&(ia=[]),e=Nd(ia,e,t),t=ke,(it===null?t.memoizedState:it.next)===null&&(t=t.alternate,J.H=t===null||t.memoizedState===null?gf:yf),e}function hs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ii(e);if(e.$$typeof===D)return;if(e.$$typeof===re)return ht(e)}throw Error(d(438,String(e)))}function xo(e){var t=null,n=ke.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=ke.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ps(),ke.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=W;return t.index++,n}function On(e,t){return typeof t=="function"?t(e):t}function xs(e){var t=lt();return go(t,Ye,e)}function go(e,t,n){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=n;var a=e.baseQueue,i=l.pending;if(i!==null){if(a!==null){var r=a.next;a.next=i.next,i.next=r}t.baseQueue=a=i,l.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{t=a.next;var u=r=null,f=null,w=t,C=!1;do{var q=w.lane&-536870913;if(q!==w.lane?(De&q)===q:(Mn&q)===q){var y=w.revertLane;if(y===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),q===Sl&&(C=!0);else if((Mn&y)===y){w=w.next,y===Sl&&(C=!0);continue}else q={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},f===null?(u=f=q,r=i):f=f.next=q,ke.lanes|=y,nl|=y;q=w.action,Dl&&n(i,q),i=w.hasEagerState?w.eagerState:n(i,q)}else y={lane:q,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},f===null?(u=f=y,r=i):f=f.next=y,ke.lanes|=q,nl|=q;w=w.next}while(w!==null&&w!==t);if(f===null?r=i:f.next=u,!Rt(i,e.memoizedState)&&(st=!0,C&&(n=ta,n!==null)))throw n;e.memoizedState=i,e.baseState=r,e.baseQueue=f,l.lastRenderedState=i}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function yo(e){var t=lt(),n=t.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do i=e(i,r.action),r=r.next;while(r!==a);Rt(i,t.memoizedState)||(st=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,l]}function Fd(e,t,n){var l=ke,a=lt(),i=je;if(i){if(n===void 0)throw Error(d(407));n=n()}else n=t();var r=!Rt((Ye||a).memoizedState,n);if(r&&(a.memoizedState=n,st=!0),a=a.queue,wo(Ud.bind(null,l,a,e),[e]),e=a.getSnapshot!==t||r||it!==null&&(it.memoizedState.tag&1)!==0,sa(e?9:8,{destroy:void 0},Rd.bind(null,l,a,n,t),null),e){if(l.flags|=2048,Qe===null)throw Error(d(349));i||(Mn&127)!==0||Ld(l,t,n)}return n}function Ld(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t=ps(),ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rd(e,t,n,l){t.value=n,t.getSnapshot=l,qd(t)&&Hd(e)}function Ud(e,t,n){return n(function(){qd(t)&&Hd(e)})}function qd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function Hd(e){var t=vl(e,2);t!==null&&Ot(t,e,2)}function bo(e){var t=kt();if(typeof e=="function"){var n=e;if(e=n(),Dl){Un(!0);try{n()}finally{Un(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:e},t}function Gd(e,t,n,l){return e.baseState=n,go(e,Ye,typeof l=="function"?l:On)}function M0(e,t,n,l,a){if(bs(e))throw Error(d(485));if(e=t.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};J.T!==null?n(!0):i.isTransition=!1,l(i),n=t.pending,n===null?(i.next=t.pending=i,Yd(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Yd(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var i=J.T,r={};r.types=i!==null?i.types:null,J.T=r;try{var u=n(a,l),f=J.S;f!==null&&f(r,u),Vd(e,t,u)}catch(w){vo(e,t,w)}finally{i!==null&&r.types!==null&&(i.types=r.types),J.T=i}}else try{i=n(a,l),Vd(e,t,i)}catch(w){vo(e,t,w)}}function Vd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){Qd(e,t,l)},function(l){return vo(e,t,l)}):Qd(e,t,n)}function Qd(e,t,n){t.status="fulfilled",t.value=n,Xd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yd(e,n)))}function vo(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Xd(t),t=t.next;while(t!==l)}e.action=null}function Xd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zd(e,t){return t}function Kd(e,t){if(je){var n=Qe.formState;if(n!==null){e:{var l=ke;if(je){if(Ze){t:{for(var a=Ze,i=Wt;a.nodeType!==8;){if(!i){a=null;break t}if(a=Pt(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){Ze=Pt(a.nextSibling),l=a.data==="F!";break e}}Vn(l)}l=!1}l&&(t=n[0])}}return n=kt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zd,lastRenderedState:t},n.queue=l,n=pf.bind(null,ke,l),l.dispatch=n,l=bo(!1),i=So.bind(null,ke,!1,l.queue),l=kt(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=M0.bind(null,ke,a,i,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function Jd(e){var t=lt();return $d(t,Ye,e)}function $d(e,t,n){if(t=go(e,t,Zd)[0],e=xs(On)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ii(t)}catch(r){throw r===na?ss:r}else l=t;t=lt();var a=t.queue,i=a.dispatch;return n!==t.memoizedState&&(ke.flags|=2048,sa(9,{destroy:void 0},O0.bind(null,a,n),null)),[l,i,e]}function O0(e,t){e.action=t}function Wd(e){var t=lt(),n=Ye;if(n!==null)return $d(t,n,e);lt(),t=t.memoizedState,n=lt();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function sa(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=ke.updateQueue,t===null&&(t=ps(),ke.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Id(){return lt().memoizedState}function gs(e,t,n,l){var a=kt();ke.flags|=e,a.memoizedState=sa(1|t,{destroy:void 0},n,l===void 0?null:l)}function ys(e,t,n,l){var a=lt();l=l===void 0?null:l;var i=a.memoizedState.inst;Ye!==null&&l!==null&&co(l,Ye.memoizedState.deps)?a.memoizedState=sa(t,i,n,l):(ke.flags|=e,a.memoizedState=sa(1|t,i,n,l))}function Pd(e,t){gs(8390656,8,e,t)}function wo(e,t){ys(2048,8,e,t)}function z0(e){ke.flags|=4;var t=ke.updateQueue;if(t===null)t=ps(),ke.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ef(e){var t=lt().memoizedState;return z0({ref:t,nextImpl:e}),function(){if((Le&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function tf(e,t){return ys(4,2,e,t)}function nf(e,t){return ys(4,4,e,t)}function lf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function af(e,t,n){n=n!=null?n.concat([e]):null,ys(4,4,lf.bind(null,t,e),n)}function _o(){}function sf(e,t){var n=lt();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&co(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function rf(e,t){var n=lt();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&co(t,l[1]))return l[0];if(l=e(),Dl){Un(!0);try{e()}finally{Un(!1)}}return n.memoizedState=[l,t],l}function Eo(e,t,n){return n===void 0||(Mn&1073741824)!==0&&(De&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=gm(),ke.lanes|=e,nl|=e,n)}function of(e,t,n,l){return Rt(n,t)?n:$n.current!==null?(e=Eo(e,n,l),Rt(e,t)||(st=!0),e):(Mn&106)===0||(Mn&1073741824)!==0&&(De&261930)===0?(st=!0,e.memoizedState=n):(e=gm(),ke.lanes|=e,nl|=e,t)}function uf(e,t,n,l,a){var i=ie.p;ie.p=i!==0&&8>i?i:8;var r=J.T,u={};u.types=r!==null?r.types:null,J.T=u,So(e,!1,t,n);try{var f=a(),w=J.S;if(w!==null&&w(u,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var C=T0(f,l);si(e,t,C,Yt(e))}else si(e,t,l,Yt(e))}catch(q){si(e,t,{then:function(){},status:"rejected",reason:q},Yt())}finally{ie.p=i,r!==null&&u.types!==null&&(r.types=u.types),J.T=r}}function B0(){}function ko(e,t,n,l){if(e.tag!==5)throw Error(d(476));var a=cf(e).queue;uf(e,a,t,Se,n===null?B0:function(){return df(e),n(l)})}function cf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Se,baseState:Se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:Se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function df(e){var t=cf(e);t.next===null&&(t=e.alternate.memoizedState),si(e,t.next.queue,{},Yt())}function No(){return ht(Na)}function ff(){return lt().memoizedState}function mf(){return lt().memoizedState}function F0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Yt();e=Kn(n);var l=Jn(t,e,n);l!==null&&(Ot(l,t,n),ei(l,t,n)),t={cache:Ir()},e.payload=t;return}t=t.return}}function L0(e,t,n){var l=Yt();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},bs(e)?hf(t,n):(n=Yr(e,t,n,l),n!==null&&(Ot(n,e,l),xf(n,t,l)))}function pf(e,t,n){var l=Yt();si(e,t,n,l)}function si(e,t,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(bs(e))hf(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,u=i(r,n);if(a.hasEagerState=!0,a.eagerState=u,Rt(u,r))return $i(e,t,a,0),Qe===null&&Ji(),!1}catch{}finally{}if(n=Yr(e,t,a,l),n!==null)return Ot(n,e,l),xf(n,t,l),!0}return!1}function So(e,t,n,l){if(l={lane:2,revertLane:xu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},bs(e)){if(t)throw Error(d(479))}else t=Yr(e,n,l,2),t!==null&&Ot(t,e,2)}function bs(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function hf(e,t){aa=fs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xf(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,xc(e,n)}}var vs={readContext:ht,use:hs,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useLayoutEffect:tt,useInsertionEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useSyncExternalStore:tt,useId:tt,useHostTransitionStatus:tt,useFormState:tt,useActionState:tt,useOptimistic:tt,useMemoCache:tt,useCacheRefresh:tt,useEffectEvent:tt},gf={readContext:ht,use:hs,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:Pd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,gs(4194308,4,lf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gs(4194308,4,e,t)},useInsertionEffect:function(e,t){gs(4,2,e,t)},useMemo:function(e,t){var n=kt();t=t===void 0?null:t;var l=e();if(Dl){Un(!0);try{e()}finally{Un(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=kt();if(n!==void 0){var a=n(t);if(Dl){Un(!0);try{n(t)}finally{Un(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=L0.bind(null,ke,e),[l.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:function(e){e=bo(e);var t=e.queue,n=pf.bind(null,ke,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:_o,useDeferredValue:function(e,t){var n=kt();return Eo(n,e,t)},useTransition:function(){var e=bo(!1);return e=uf.bind(null,ke,e.queue,!0,!1),kt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=ke,a=kt();if(je){if(n===void 0)throw Error(d(407));n=n()}else{if(n=t(),Qe===null)throw Error(d(349));(De&127)!==0||Ld(l,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Pd(Ud.bind(null,l,i,e),[e]),l.flags|=2048,sa(9,{destroy:void 0},Rd.bind(null,l,i,n,t),null),n},useId:function(){var e=kt(),t=Qe.identifierPrefix;if(je){var n=fn,l=dn;n=(l&~(1<<32-Ft(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ms++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=C0++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:No,useFormState:Kd,useActionState:Kd,useOptimistic:function(e){var t=kt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=So.bind(null,ke,!0,n),n.dispatch=t,[e,t]},useMemoCache:xo,useCacheRefresh:function(){return kt().memoizedState=F0.bind(null,ke)},useEffectEvent:function(e){var t=kt(),n={impl:e};return t.memoizedState=n,function(){if((Le&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}},yf={readContext:ht,use:hs,useCallback:sf,useContext:ht,useEffect:wo,useImperativeHandle:af,useInsertionEffect:tf,useLayoutEffect:nf,useMemo:rf,useReducer:xs,useRef:Id,useState:function(){return xs(On)},useDebugValue:_o,useDeferredValue:function(e,t){var n=lt();return of(n,Ye.memoizedState,e,t)},useTransition:function(){var e=xs(On)[0],t=lt().memoizedState;return[typeof e=="boolean"?e:ii(e),t]},useSyncExternalStore:Fd,useId:ff,useHostTransitionStatus:No,useFormState:Jd,useActionState:Jd,useOptimistic:function(e,t){var n=lt();return Gd(n,Ye,e,t)},useMemoCache:xo,useCacheRefresh:mf,useEffectEvent:ef},R0={readContext:ht,use:hs,useCallback:sf,useContext:ht,useEffect:wo,useImperativeHandle:af,useInsertionEffect:tf,useLayoutEffect:nf,useMemo:rf,useReducer:yo,useRef:Id,useState:function(){return yo(On)},useDebugValue:_o,useDeferredValue:function(e,t){var n=lt();return Ye===null?Eo(n,e,t):of(n,Ye.memoizedState,e,t)},useTransition:function(){var e=yo(On)[0],t=lt().memoizedState;return[typeof e=="boolean"?e:ii(e),t]},useSyncExternalStore:Fd,useId:ff,useHostTransitionStatus:No,useFormState:Wd,useActionState:Wd,useOptimistic:function(e,t){var n=lt();return Ye!==null?Gd(n,Ye,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:xo,useCacheRefresh:mf,useEffectEvent:ef};function Ao(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:R({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jo={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Yt(),a=Kn(l);a.payload=t,n!=null&&(a.callback=n),t=Jn(e,a,l),t!==null&&(Ot(t,e,l),ei(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Yt(),a=Kn(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Jn(e,a,l),t!==null&&(Ot(t,e,l),ei(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Yt(),l=Kn(n);l.tag=2,t!=null&&(l.callback=t),t=Jn(e,l,n),t!==null&&(Ot(t,e,n),ei(t,e,n))}};function bf(e,t,n,l,a,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,r):t.prototype&&t.prototype.isPureReactComponent?!Xa(n,l)||!Xa(a,i):!0}function vf(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&jo.enqueueReplaceState(t,t.state,null)}function Ml(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=R({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function wf(e){Ki(e)}function _f(e){console.error(e)}function Ef(e){Ki(e)}function ws(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function kf(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function To(e,t,n){return n=Kn(n),n.tag=3,n.payload={element:null},n.callback=function(){ws(e,t)},n}function Nf(e){return e=Kn(e),e.tag=3,e}function Sf(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;e.payload=function(){return a(i)},e.callback=function(){kf(t,n,l)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){kf(t,n,l),typeof a!="function"&&(ll===null?ll=new Set([this]):ll.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function U0(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&kl(t,n,a,!0),n=xt.current,n!==null){switch(n.tag){case 31:case 13:case 19:return _t===null?Gs():n.alternate===null&&nt===0&&(nt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===rs?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),mu(e,l,a)),!1;case 22:return n.flags|=65536,l===rs?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),mu(e,l,a)),!1}throw Error(d(435,n.tag))}return mu(e,l,a),Gs(),!1}if(je)return t=xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==Kr&&(e=Error(d(422),{cause:l}),Ja(Kt(e,n)))):(l!==Kr&&(t=Error(d(423),{cause:l}),Ja(Kt(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=Kt(l,n),a=To(e.stateNode,l,a),ao(e,a),nt!==4&&(nt=2)),!1;var i=Error(d(520),{cause:l});if(i=Kt(i,n),pi===null?pi=[i]:pi.push(i),nt!==4&&(nt=2),t===null)return!0;l=Kt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=To(n.stateNode,l,e),ao(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ll===null||!ll.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Nf(a),Sf(a,e,n,l),ao(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Co=Error(d(461)),st=!1;function ut(e,t,n,l){t.child=e===null?Td(t,null,n,l):Cl(t,e.child,n,l)}function Af(e,t,n,l,a){n=n.render;var i=t.ref;if("ref"in l){var r={};for(var u in l)u!=="ref"&&(r[u]=l[u])}else r=l;return Nl(t),l=fo(e,t,n,r,i,a),u=mo(),e!==null&&!st?(po(e,t,a),zn(e,t,a)):(je&&u&&es(t),t.flags|=1,ut(e,t,l,a),t.child)}function jf(e,t,n,l,a){if(e===null){var i=n.type;return typeof i=="function"&&!Vr(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Tf(e,t,i,l,a)):(e=Ii(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Ro(e,a)){var r=i.memoizedProps;if(n=n.compare,n=n!==null?n:Xa,n(r,l)&&e.ref===t.ref)return zn(e,t,a)}return t.flags|=1,e=jn(i,l),e.ref=t.ref,e.return=t,t.child=e}function Tf(e,t,n,l,a){if(e!==null){var i=e.memoizedProps;if(Xa(i,l)&&e.ref===t.ref)if(st=!1,t.pendingProps=l=i,Ro(e,a))(e.flags&131072)!==0&&(st=!0);else return t.lanes=e.lanes,zn(e,t,a)}return Do(e,t,n,l,a)}function Cf(e,t,n,l){var a=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(l=t.child=e.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~i}else l=0,t.child=null;return Df(e,t,i,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&is(t,i!==null?i.cachePool:null),i!==null?Md(t,i):so(),Od(t);else return l=t.lanes=536870912,Df(e,t,i!==null?i.baseLanes|n:n,n,l)}else i!==null?(is(t,i.cachePool),Md(t,i),In(),t.memoizedState=null):(e!==null&&is(t,null),so(),In());return ut(e,t,a,n),t.child}function ri(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Df(e,t,n,l,a){var i=eo();return i=i===null?null:{parent:at._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&is(t,null),so(),Od(t),e!==null&&kl(e,t,l,!0),t.childLanes=a,null}function _s(e,t){return t=Es({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Mf(e,t,n){return Cl(t,e.child,null,n),e=_s(t,t.pendingProps),e.flags|=2,Ut(t),t.memoizedState=null,e}function q0(e,t,n){var l=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(je){if(l.mode==="hidden")return e=_s(t,l),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},ri(null,e);if(oo(t),(e=Ze)?(e=ap(e,Wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:dn,overflow:fn}:null,retryLane:536870912,hydrationErrors:null},n=pd(e),n.return=t,t.child=n,dt=t,Ze=null)):e=null,e===null)throw Vn(t);return t.lanes=536870912,null}return _s(t,l)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(oo(t),a)if(t.flags&256)t.flags&=-257,t=Mf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(st||kl(e,t,n,!1),a=(n&e.childLanes)!==0,st||a){if($n.current===null){if(l=Qe,l!==null&&(r=gc(l,n),r!==0&&r!==i.retryLane))throw i.retryLane=r,vl(e,r),Ot(l,e,r),Co;Gs()}t=Mf(e,t,n)}else e=i.treeContext,Ze=Pt(r.nextSibling),dt=t,je=!0,Yn=null,Wt=!1,e!==null&&gd(t,e),t=_s(t,l),t.flags|=134221824;return t}return e=jn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ra(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(d(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Do(e,t,n,l,a){return Nl(t),n=fo(e,t,n,l,void 0,a),l=mo(),e!==null&&!st?(po(e,t,a),zn(e,t,a)):(je&&l&&es(t),t.flags|=1,ut(e,t,n,a),t.child)}function Of(e,t,n,l,a,i){return Nl(t),t.updateQueue=null,n=Bd(t,l,n,a),zd(e),l=mo(),e!==null&&!st?(po(e,t,i),zn(e,t,i)):(je&&l&&es(t),t.flags|=1,ut(e,t,n,i),t.child)}function zf(e,t,n,l,a){if(Nl(t),t.stateNode===null){var i=Wl,r=n.contextType;typeof r=="object"&&r!==null&&(i=ht(r)),i=new n(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=jo,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},no(t),r=n.contextType,i.context=typeof r=="object"&&r!==null?ht(r):Wl,i.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Ao(t,n,r,l),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&jo.enqueueReplaceState(i,i.state,null),ni(t,l,i,a),ti(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,f=Ml(n,u);i.props=f;var w=i.context,C=n.contextType;r=Wl,typeof C=="object"&&C!==null&&(r=ht(C));var q=n.getDerivedStateFromProps;C=typeof q=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,C||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||w!==r)&&vf(t,i,l,r),Zn=!1;var y=t.memoizedState;i.state=y,ni(t,l,i,a),ti(),w=t.memoizedState,u||y!==w||Zn?(typeof q=="function"&&(Ao(t,n,q,l),w=t.memoizedState),(f=Zn||bf(t,n,f,l,y,w,r))?(C||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=w),i.props=l,i.state=w,i.context=r,l=f):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,lo(e,t),r=t.memoizedProps,C=Ml(n,r),i.props=C,q=t.pendingProps,y=i.context,w=n.contextType,f=Wl,typeof w=="object"&&w!==null&&(f=ht(w)),u=n.getDerivedStateFromProps,(w=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==q||y!==f)&&vf(t,i,l,f),Zn=!1,y=t.memoizedState,i.state=y,ni(t,l,i,a),ti();var A=t.memoizedState;r!==q||y!==A||Zn||e!==null&&e.dependencies!==null&&ls(e.dependencies)?(typeof u=="function"&&(Ao(t,n,u,l),A=t.memoizedState),(C=Zn||bf(t,n,C,l,y,A,f)||e!==null&&e.dependencies!==null&&ls(e.dependencies))?(w||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,A,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,A,f)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=A),i.props=l,i.state=A,i.context=f,l=C):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,ra(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Cl(t,e.child,null,a),t.child=Cl(t,null,n,a)):ut(e,t,n,a),t.memoizedState=i.state,e=t.child):e=zn(e,t,a),e}function Bf(e,t,n,l){return _l(),t.flags|=256,ut(e,t,n,l),t.child}var Mo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Oo(e){return{baseLanes:e,cachePool:Ed()}}function zo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Gt),e}function Ff(e,t,n){var l=t.pendingProps,a=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(gt.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(je){if(a?Wn(t):In(),(e=Ze)?(e=ap(e,Wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:dn,overflow:fn}:null,retryLane:536870912,hydrationErrors:null},n=pd(e),n.return=t,t.child=n,dt=t,Ze=null)):e=null,e===null)throw Vn(t);return Ou(e)?t.lanes=32:t.lanes=536870912,null}return i=l.children,l=l.fallback,a?(In(),a=t.mode,i=Es({mode:"hidden",children:i},a),l=wl(l,a,n,null),i.return=t,l.return=t,i.sibling=l,t.child=i,l=t.child,l.memoizedState=Oo(n),l.childLanes=zo(e,r,n),t.memoizedState=Mo,ri(null,l)):(Wn(t),Bo(t,i))}var u=e.memoizedState;if(u!==null){var f=u.dehydrated;if(f!==null)return H0(e,t,i,r,l,f,u,n)}return a?(In(),a=l.fallback,i=t.mode,u=e.child,f=u.sibling,l=jn(u,{mode:"hidden",children:l.children}),l.subtreeFlags=u.subtreeFlags&1206910976,f!==null?a=jn(f,a):(a=wl(a,i,n,null),a.flags|=2),a.return=t,l.return=t,l.sibling=a,t.child=l,ri(null,l),l=t.child,a=e.child.memoizedState,a===null?a=Oo(n):(i=a.cachePool,i!==null?(u=at._currentValue,i=i.parent!==u?{parent:u,pool:u}:i):i=Ed(),a={baseLanes:a.baseLanes|n,cachePool:i}),l.memoizedState=a,l.childLanes=zo(e,r,n),t.memoizedState=Mo,ri(e.child,l)):(Wn(t),n=e.child,e=n.sibling,n=jn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Bo(e,t){return t=Es({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Es(e,t){return e=Tt(22,e,null,t),e.lanes=0,e}function ks(e,t,n){return Cl(t,e.child,null,n),e=Bo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function H0(e,t,n,l,a,i,r,u){if(n)return t.flags&256?(Wn(t),t.flags&=-257,ks(e,t,u)):t.memoizedState!==null?(In(),t.child=e.child,t.flags|=128,null):(In(),i=a.fallback,r=t.mode,a=Es({mode:"visible",children:a.children},r),i=wl(i,r,u,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,Cl(t,e.child,null,u),a=t.child,a.memoizedState=Oo(u),a.childLanes=zo(e,l,u),t.memoizedState=Mo,ri(null,a));if(Wn(t),Ou(i)){if(l=i.nextSibling&&i.nextSibling.dataset,l)var f=l.dgst;return l=f,l!==""&&(a=Error(d(419)),a.stack="",a.digest=l,Ja({value:a,source:null,stack:null})),ks(e,t,u)}if(st||kl(e,t,u,!1),l=(u&e.childLanes)!==0,st||l){if($n.current!==null)return ks(e,t,u);if(l=Qe,l!==null&&(a=gc(l,u),a!==0&&a!==r.retryLane))throw r.retryLane=a,vl(e,a),Ot(l,e,a),Co;return Mu(i)||Gs(),ks(e,t,u)}return Mu(i)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Ze=Pt(i.nextSibling),dt=t,je=!0,Yn=null,Wt=!1,e!==null&&gd(t,e),t=Bo(t,a.children),t.flags|=134221824,t)}function Lf(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ns(e.return,t,n)}function Rf(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&ds(n)===null&&(t=e),e=e.sibling}return t}function Ns(e,t,n,l,a,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=n,r.tailMode=a,r.treeForkCount=i)}function Fo(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Lo(e,t,n){var l=t.pendingProps,a=l.revealOrder,i=l.tail;l=l.children;var r=gt.current;if(t.flags&128)return li(t,r),null;var u=(r&2)!==0;if(u?(r=r&1|2,t.flags|=128):r&=1,li(t,r),a==="backwards"&&e!==null?(Fo(e),ut(e,t,l,n),Fo(e)):ut(e,t,l,n),l=je?Ka:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lf(e,n,t);else if(e.tag===19)Lf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"backwards":n=Rf(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null,Fo(t)),Ns(t,!0,a,null,i,l);break;case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ds(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ns(t,!0,n,null,i,l);break;case"together":Ns(t,!1,null,null,void 0,l);break;case"independent":t.memoizedState=null;break;default:n=Rf(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ns(t,!1,a,n,i,l)}return t.child}function Uf(e,t,n){var l=t.pendingProps;return Qn(t,t.type,l.value),ut(e,t,l.children,n),t.child}function zn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(kl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,n=jn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ro(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ls(e)))}function G0(e,t,n){switch(t.tag){case 3:_n(t,t.stateNode.containerInfo),Qn(t,at,e.memoizedState.cache),_l();break;case 27:case 5:pl(t);break;case 4:_n(t,t.stateNode.containerInfo);break;case 10:Qn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,oo(t),null;break;case 13:var l=t.memoizedState;if(l!==null){if(l.dehydrated!==null)return Wn(t),t.flags|=128,null;l=kl(e,t,n,!1);var a=t.child.childLanes;return l||(n&a)!==0?Ff(e,t,n):(Wn(t),e=zn(e,t,n),e!==null?e.sibling:null)}Wn(t);break;case 19:if(t.flags&128)return Lo(e,t,n);if(a=(e.flags&128)!==0,l=(n&t.childLanes)!==0,l||(kl(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return Lo(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),li(t,gt.current),l)break;return null;case 22:return t.lanes=0,Cf(e,t,n,t.pendingProps);case 24:Qn(t,at,e.memoizedState.cache)}return zn(e,t,n)}function qf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)st=!0;else{if(!Ro(e,n)&&(t.flags&128)===0)return st=!1,G0(e,t,n);st=(e.flags&131072)!==0}else st=!1,je&&(t.flags&1048576)!==0&&xd(t,Ka,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=jl(t.elementType),t.type=e,typeof e=="function")Vr(e)?(l=Ml(e,l),t.tag=1,t=zf(null,t,e,l,n)):(t.tag=0,t=Do(null,t,e,l,n));else{if(e!=null){var a=e.$$typeof;if(a===T){t.tag=11,t=Af(null,t,e,l,n);break e}else if(a===he){t.tag=14,t=jf(null,t,e,l,n);break e}else if(a===re){t.tag=10,t.type=e,t=Uf(null,t,n);break e}}throw t=ue(e)||e,Error(d(306,t,""))}}return t;case 0:return Do(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=Ml(l,t.pendingProps),zf(e,t,l,a,n);case 3:e:{if(_n(t,t.stateNode.containerInfo),e===null)throw Error(d(387));l=t.pendingProps;var i=t.memoizedState;a=i.element,lo(e,t),ni(t,l,null,n);var r=t.memoizedState;if(l=r.cache,Qn(t,at,l),l!==i.cache&&Wr(t,[at],n,!0),ti(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Bf(e,t,l,n);break e}else if(l!==a){a=Kt(Error(d(424)),t),Ja(a),t=Bf(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=Pt(e.firstChild),dt=t,je=!0,Yn=null,Wt=!0,n=Td(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(_l(),l===a){t=zn(e,t,n);break e}ut(e,t,l,n)}t=t.child}return t;case 26:return ra(e,t),e===null?(n=dp(t.type,null,t.pendingProps,null))?t.memoizedState=n:je||(t.stateNode=Vm(t.type,t.pendingProps,Qt.current,t)):t.memoizedState=dp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return pl(t),e===null&&je&&(l=t.stateNode=rp(t.type,t.pendingProps,Qt.current),dt=t,Wt=!0,a=Ze,sl(t.type)?(zu=a,Ze=Pt(l.firstChild)):Ze=a),ut(e,t,t.pendingProps.children,n),ra(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&je&&((a=l=Ze)&&(l=Fx(l,t.type,t.pendingProps,Wt),l!==null?(t.stateNode=l,dt=t,Ze=Pt(l.firstChild),Wt=!1,a=!0):a=!1),a||Vn(t)),pl(t),a=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,l=i.children,Nu(a,i)?l=null:r!==null&&Nu(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=fo(e,t,D0,null,null,n),Na._currentValue=a),ra(e,t),ut(e,t,l,n),t.child;case 6:return e===null&&je&&((e=n=Ze)&&(n=Lx(n,t.pendingProps,Wt),n!==null?(t.stateNode=n,dt=t,Ze=null,e=!0):e=!1),e||Vn(t)),null;case 13:return Ff(e,t,n);case 4:return _n(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Cl(t,null,l,n):ut(e,t,l,n),t.child;case 11:return Af(e,t,t.type,t.pendingProps,n);case 7:return l=t.pendingProps,ra(e,t),ut(e,t,l,n),t.child;case 8:return ut(e,t,t.pendingProps.children,n),t.child;case 12:return ut(e,t,t.pendingProps.children,n),t.child;case 10:return Uf(e,t,n);case 9:return a=t.type._context,l=t.pendingProps.children,Nl(t),a=ht(a),l=l(a),t.flags|=1,ut(e,t,l,n),t.child;case 14:return jf(e,t,t.type,t.pendingProps,n);case 15:return Tf(e,t,t.type,t.pendingProps,n);case 19:return Lo(e,t,n);case 31:return q0(e,t,n);case 22:return Cf(e,t,n,t.pendingProps);case 24:return Nl(t),l=ht(at),e===null?(a=eo(),a===null&&(a=Qe,i=Ir(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:l,cache:a},no(t),Qn(t,at,a)):((e.lanes&n)!==0&&(lo(e,t),ni(t,null,null,n),ti()),a=e.memoizedState,i=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Qn(t,at,l)):(l=i.cache,Qn(t,at,l),l!==a.cache&&Wr(t,[at],n,!0))),ut(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),l=t.pendingProps,l.name!=null&&l.name!=="auto"?t.flags|=e===null?18882560:18874368:je&&es(t),e!==null&&e.memoizedProps.name!==l.name?t.flags|=4194816:ra(e,t),ut(e,t,l.children,n),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function Bn(e){e.flags|=4}function Uo(e,t,n,l,a){var i;if((i=(e.mode&32)!==0)&&(i=n===null?hp(t,l):hp(t,l)&&(l.src!==n.src||l.srcSet!==n.srcSet)),i){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(wm())e.flags|=8192;else throw Tl=rs,to}else e.flags&=-16777217}function Hf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!xp(t))if(wm())e.flags|=8192;else throw Tl=rs,to}function Ss(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?pc():536870912,e.lanes|=t,fa|=t)}function oi(e,t){if(!je)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&1206910976,l|=a.flags&1206910976,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function Y0(e,t,n){var l=t.pendingProps;switch(Zr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return Ke(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Dn(at),tn(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ea(t)?Bn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Jr())),Ke(t),null;case 26:var a=t.type,i=t.memoizedState;return e===null?(Bn(t),i!==null?(Ke(t),Hf(t,i)):(Ke(t),Uo(t,a,null,l,n))):i?i!==e.memoizedState?(Bn(t),Ke(t),Hf(t,i)):(Ke(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Bn(t),Ke(t),Uo(t,a,e,l,n)),null;case 27:if(X(t),n=Qt.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Bn(t);else{if(!l){if(t.stateNode===null)throw Error(d(166));return Ke(t),t.subtreeFlags&=-33554433,null}e=et.current,ea(t)?yd(t):(e=rp(a,l,n),t.stateNode=e,Bn(t))}return Ke(t),t.subtreeFlags&=-33554433,null;case 5:if(X(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Bn(t);else{if(!l){if(t.stateNode===null)throw Error(d(166));return Ke(t),t.subtreeFlags&=-33554433,null}if(i=et.current,ea(t))yd(t);else{var r=bi(Qt.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?r.createElement(a,{is:l.is}):r.createElement(a)}}i[pt]=t,i[jt]=l;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch(bt(i,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Bn(t)}}return Ke(t),t.subtreeFlags&=-33554433,Uo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Bn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(d(166));if(e=Qt.current,ea(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=dt,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||qm(e.nodeValue,n)),e||Vn(t,!0)}else e=bi(e).createTextNode(l),e[pt]=t,t.stateNode=e}return Ke(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=ea(t),n!==null){if(e===null){if(!l)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[pt]=t}else _l(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),e=!1}else n=Jr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ut(t),t):(Ut(t),null);if((t.flags&128)!==0)throw Error(d(558))}return Ke(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ea(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(d(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(d(317));a[pt]=t}else _l(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),a=!1}else a=Jr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ut(t),t):(Ut(t),null)}return Ut(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ss(t,t.updateQueue),Ke(t),null);case 4:return tn(),e===null&&vu(t.stateNode.containerInfo),t.flags|=67108864,Ke(t),null;case 10:return Dn(t.type),Ke(t),null;case 19:if(uo(t),l=t.memoizedState,l===null)return Ke(t),null;if(a=(t.flags&128)!==0,i=l.rendering,i===null)if(a)oi(l,!1);else{if(nt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ds(e),i!==null){for(t.flags|=128,oi(l,!1),e=i.updateQueue,t.updateQueue=e,Ss(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)md(n,e),n=n.sibling;return li(t,gt.current&1|2),je&&Tn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&zt()>Rs&&(t.flags|=128,a=!0,oi(l,!1),t.lanes=4194304)}else{if(!a)if(e=ds(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ss(t,e),oi(l,!0),l.tail===null&&l.tailMode!=="collapsed"&&l.tailMode!=="visible"&&!i.alternate&&!je)return Ke(t),null}else 2*zt()-l.renderingStartTime>Rs&&n!==536870912&&(t.flags|=128,a=!0,oi(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}if(l.tail!==null){e=l.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return l.rendering=e,l.tail=e.sibling,l.renderingStartTime=zt(),e.sibling=null,i=gt.current,i=a?i&1|2:i&1,l.tailMode==="visible"||l.tailMode==="collapsed"||!n||je?li(t,i):(n=i,Ee(xt,t),Ee(gt,n),_t===null&&(_t=t)),je&&Tn(t,l.treeForkCount),e}return Ke(t),null;case 22:case 23:return Ut(t),ro(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),n=t.updateQueue,n!==null&&Ss(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&Oe(Al),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Dn(at),Ke(t),null;case 25:return null;case 30:return t.flags|=33554432,Ke(t),null}throw Error(d(156,t.tag))}function V0(e,t){switch(Zr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dn(at),tn(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return X(t),null;case 31:if(t.memoizedState!==null){if(Ut(t),t.alternate===null)throw Error(d(340));_l()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ut(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));_l()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return uo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return tn(),null;case 10:return Dn(t.type),null;case 22:case 23:return Ut(t),ro(),e!==null&&Oe(Al),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Dn(at),null;case 25:return null;default:return null}}function Gf(e,t){switch(Zr(t),t.tag){case 3:Dn(at),tn();break;case 26:case 27:case 5:X(t);break;case 4:tn();break;case 31:t.memoizedState!==null&&Ut(t);break;case 13:Ut(t);break;case 19:uo(t);break;case 10:Dn(t.type);break;case 22:case 23:Ut(t),ro(),e!==null&&Oe(Al);break;case 24:Dn(at)}}function ui(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var i=n.create,r=n.inst;l=i(),r.destroy=l}n=n.next}while(n!==a)}}catch(u){He(t,t.return,u)}}function Pn(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){var r=l.inst,u=r.destroy;if(u!==void 0){r.destroy=void 0,a=t;var f=n,w=u;try{w()}catch(C){He(a,f,C)}}}l=l.next}while(l!==i)}}catch(C){He(t,t.return,C)}}function Yf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Dd(t,n)}catch(l){He(e,e.return,l)}}}function Vf(e,t,n){n.props=Ml(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){He(e,t,l)}}function mn(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:var a=e.stateNode,i=Sn(e.memoizedProps,a);(a.ref===null||a.ref.name!==i)&&(a.ref=Wm(i)),l=a.ref;break;case 7:if(e.stateNode===null){var r=new Vt(e);_(e.child,!1,zx,r,void 0,void 0),e.stateNode=r}l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(u){He(e,t,u)}}function yt(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){He(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){He(e,t,a)}else n.current=null}function As(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)lp(e.stateNode,t[n])}function Qf(e){for(var t=e.return;t!==null&&(Ho(t)&&lp(e.stateNode,t.stateNode),!qo(t));)t=t.return}function ci(e){for(var t=e.return;t!==null&&(Ho(t)&&Bx(e.stateNode,t.stateNode),!qo(t));)t=t.return}function qo(e){return e.tag===5||e.tag===3||e.tag===27}function Ho(e){return e&&e.tag===7&&e.stateNode!==null}function Go(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){He(e,e.return,a)}}function Yo(e,t,n){try{var l=e.stateNode;xx(l,e.type,n,t),l[jt]=t}catch(a){He(e,e.return,a)}}function Xf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&sl(e.type)||e.tag===4}function Vo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&sl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qo(e,t,n,l){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(a),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn)),As(e,l),Fe=!0;else if(a!==4&&(a===27&&(As(e,l),l=null,sl(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Qo(e,t,n,l),e=e.sibling;e!==null;)Qo(e,t,n,l),e=e.sibling}function js(e,t,n,l){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?n.insertBefore(a,t):n.appendChild(a),As(e,l),Fe=!0;else if(a!==4&&(a===27&&(As(e,l),l=null,sl(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(js(e,t,n,l),e=e.sibling;e!==null;)js(e,t,n,l),e=e.sibling}function Zf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);bt(t,l,n),t[pt]=e,t[jt]=n}catch(i){He(e,e.return,i)}}var Ts=!1,qt=null;function Kf(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Ts=!0)}var pn=null;function Jf(){var e=pn;return pn=null,e}var Ct=0;function oa(e,t,n,l,a){return Ct=0,$f(e.child,t,n,l,a)}function $f(e,t,n,l,a){for(var i=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(l!==null){var u=ju(r);l.push(u),u.view&&(i=!0)}else i||ju(r).view&&(i=!0);Ts=!0,Jm(r,Ct===0?t:t+"_"+Ct,n),Ct++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||$f(e.child,t,n,l,a)&&(i=!0));e=e.sibling}return i}function hn(e,t){for(;e!==null;)e.tag===5?$m(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||hn(e.child,t)),e=e.sibling}function Cs(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Cs(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(d(544));var n=t.name;t=An(t.default,t.share),t!=="none"&&(oa(e,n,t,null,!1)||hn(e.child,!1))}e=e.sibling}}function Xo(e,t){if(e.tag===30){var n=e.stateNode,l=e.memoizedProps,a=Sn(l,n),i=An(l.default,n.paired?l.share:l.enter);i!=="none"?oa(e,a,i,null,!1)?(Cs(e),n.paired||t||xa(e,l.onEnter)):hn(e.child,!1):Cs(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Xo(e,t),e=e.sibling;else Cs(e)}function Zo(e){if(qt!==null&&qt.size!==0){var t=qt;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,l=n.name;if(l!=null&&l!=="auto"){var a=t.get(l);if(a!==void 0){var i=An(n.default,n.share);if(i!=="none"&&(oa(e,l,i,null,!1)?(i=e.stateNode,a.paired=i,i.paired=a,xa(e,n.onShare)):hn(e.child,!1)),t.delete(l),t.size===0)break}}}Zo(e)}e=e.sibling}}}function Ko(e){if(e.tag===30){var t=e.memoizedProps,n=Sn(t,e.stateNode),l=qt!==null?qt.get(n):void 0,a=An(t.default,l!==void 0?t.share:t.exit);a!=="none"&&(oa(e,n,a,null,!1)?l!==void 0?(a=e.stateNode,l.paired=a,a.paired=l,qt.delete(n),xa(e,t.onShare)):xa(e,t.onExit):hn(e.child,!1)),qt!==null&&Zo(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ko(e),e=e.sibling;else qt!==null&&Zo(e)}function Wf(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Sn(t,e.stateNode);t=An(t.default,t.update),e.flags&=-5,t!=="none"&&oa(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Wf(e);e=e.sibling}}function Jo(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,hn(e.child,!1))}Jo(e)}e=e.sibling}}function Ds(e){if(e.tag===30)e.stateNode.paired=null,hn(e.child,!1),Jo(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ds(e),e=e.sibling;else Jo(e)}function If(e){for(e=e.child;e!==null;)e.tag===30?hn(e.child,!1):(e.subtreeFlags&33554432)!==0&&If(e),e=e.sibling}function $o(e,t,n,l,a,i,r){for(var u=!1;t!==null;){if(t.tag===5){var f=t.stateNode;if(i!==null&&Ct<i.length){var w=i[Ct],C=ju(f);(w.view||C.view)&&(u=!0);var q;if(q=(e.flags&4)===0)if(C.clip)q=!0;else{q=w.rect;var y=C.rect;q=q.y!==y.y||q.x!==y.x||q.height!==y.height||q.width!==y.width}q&&(e.flags|=4),C.abs?C=!w.abs:(w=w.rect,C=C.rect,C=w.height!==C.height||w.width!==C.width),C&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Jm(f,Ct===0?n:n+"_"+Ct,a),u&&(e.flags&4)!==0||(pn===null&&(pn=[]),pn.push(f,Ct===0?l:l+"_"+Ct,t.memoizedProps)),Ct++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:$o(e,t.child,n,l,a,i,r)&&(u=!0));t=t.sibling}return u}function Pf(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,l=e.stateNode,a=Sn(n,l),i=An(n.default,n.update),r;r=e.memoizedState,e.memoizedState=null,l=e;var u=e.child;Ct=0,a=$o(l,u,a,a,i,r,!1),(e.flags&4)!==0&&a&&xa(e,n.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Pf(e);e=e.sibling}}var ft=!1,Ue=!1,xn=!1,Wo=!1,em=typeof WeakSet=="function"?WeakSet:Set,mt=null,gn=!1,di=!1,Ms=!1,Io=!1;function Q0(e,t,n){if(e=e.containerInfo,Eu=Sa,e=ld(e),Lr(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var i=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{l.nodeType,r.nodeType}catch{l=null;break e}var u=0,f=-1,w=-1,C=0,q=0,y=e,A=null;t:for(;;){for(var ae;y!==l||i!==0&&y.nodeType!==3||(f=u+i),y!==r||a!==0&&y.nodeType!==3||(w=u+a),y.nodeType===3&&(u+=y.nodeValue.length),(ae=y.firstChild)!==null;)A=y,y=ae;for(;;){if(y===e)break t;if(A===l&&++C===i&&(f=u),A===r&&++q===a&&(w=u),(ae=y.nextSibling)!==null)break;y=A,A=y.parentNode}y=ae}l=f===-1||w===-1?null:{start:f,end:w}}else l=null}l=l||{start:0,end:0}}else l=null;for(ku={focusedElem:e,selectionRange:l},Sa=!1,n=(n&335544064)===n,mt=t,t=n?9270:1024;mt!==null;){if(e=mt,n&&(l=e.deletions,l!==null))for(i=0;i<l.length;i++)n&&Ko(l[i]);if(e.alternate===null&&(e.flags&2)!==0)n&&Kf(e),Os(n);else{if(e.tag===22){if(l=e.alternate,e.memoizedState!==null){l!==null&&l.memoizedState===null&&n&&Ko(l),Os(n);continue}else if(l!==null&&l.memoizedState!==null){n&&Kf(e),Os(n);continue}}l=e.child,(e.subtreeFlags&t)!==0&&l!==null?(l.return=e,mt=l):(n&&Wf(e),Os(n))}}qt=null}function Os(e){for(;mt!==null;){var t=mt,n=e,l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((a&1024)!==0&&l!==null){n=void 0,a=l.memoizedProps,l=l.memoizedState;var i=t.stateNode;try{var r=Ml(t.type,a);n=i.getSnapshotBeforeUpdate(r,l),i.__reactInternalSnapshotBeforeUpdate=n}catch(u){He(t,t.return,u)}}break;case 3:if((a&1024)!==0){if(l=t.stateNode.containerInfo,n=l.nodeType,n===9)Du(l);else if(n===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":Du(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&l!==null&&(n=Sn(l.memoizedProps,l.stateNode),a=t.memoizedProps,a=An(a.default,a.update),a!=="none"&&oa(l,n,a,l.memoizedState=[],!0));break;default:if((a&1024)!==0)throw Error(d(163))}if(l=t.sibling,l!==null){l.return=t.return,mt=l;break}mt=t.return}}function tm(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:yn(e,n),l&4&&ui(5,n);break;case 1:if(yn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){He(n,n.return,r)}else{var a=Ml(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){He(n,n.return,r)}}l&64&&Yf(n),l&512&&mn(n,n.return);break;case 3:if(yn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Dd(e,t)}catch(r){He(n,n.return,r)}}break;case 27:t===null&&l&4&&Zf(n);case 26:case 5:yn(e,n),t===null&&l&4&&Go(n),l&512&&mn(n,n.return);break;case 12:yn(e,n);break;case 31:yn(e,n),l&4&&im(e,n);break;case 13:yn(e,n),l&4&&sm(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=lx.bind(null,n),Rx(e,n))));break;case 22:if(l=n.memoizedState!==null||ft,!l){var i=t!==null&&t.memoizedState!==null||Ue;t=ft,a=Ue,ft=l,(Ue=i)&&!a?(l=2,(n.subtreeFlags&8772)!==0&&(l|=1),sn(e,n,l)):yn(e,n),ft=t,Ue=a}break;case 30:yn(e,n),l&512&&mn(n,n.return);break;case 7:l&512&&mn(n,n.return);default:yn(e,n)}}function Po(e,t){for(e=e.child;e!==null;)nm(e,t),e=e.sibling}function nm(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var l=n.style;typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"}else{var a=e.stateNode,i=e.memoizedProps.style,r=i!=null&&i.hasOwnProperty("display")?i.display:null;a.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(f){He(e,e.return,f)}eu(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Fe=!0}catch(f){He(e,e.return,f)}break;case 18:try{var u=e.stateNode;t?Km(u,!0):Km(e.stateNode,!1)}catch(f){He(e,e.return,f)}break;case 22:case 23:e.memoizedState===null&&Po(e,t);break;default:Po(e,t)}}function eu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,l=t;switch(n.tag){case 4:nm(n,l);break e;case 22:n.memoizedState===null&&eu(n,l);break e;default:eu(n,l)}}e=e.sibling}}function lm(e){var t=e.alternate;t!==null&&(e.alternate=null,lm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ri(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Dt=!1;function ln(e,t,n){for(n=n.child;n!==null;)am(e,t,n),n=n.sibling}function am(e,t,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(za,n)}catch{}switch(n.tag){case 26:Ue||yt(n,t),ln(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Ue&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ue||yt(n,t),ci(n);var l=$e,a=Dt;sl(n.type)&&($e=n.stateNode,Dt=!1),ln(e,t,n),op(n.stateNode,n.type,n.memoizedProps),$e=l,Dt=a;break;case 5:Ue||yt(n,t),ci(n);case 6:if(n.tag===6&&ci(n),l=$e,a=Dt,$e=null,ln(e,t,n),$e=l,Dt=a,$e!==null)if(Dt)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(n.stateNode),Fe=!0}catch(i){He(n,t,i)}else try{$e.removeChild(n.stateNode),Fe=!0}catch(i){He(n,t,i)}break;case 18:$e!==null&&(Dt?(e=$e,Zm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Aa(e)):Zm($e,n.stateNode));break;case 4:l=$e,a=Dt,$e=n.stateNode.containerInfo,Dt=!0,ln(e,t,n),$e=l,Dt=a;break;case 0:case 11:case 14:case 15:Pn(2,n,t),Ue||Pn(4,n,t),ln(e,t,n);break;case 1:Ue||(yt(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Vf(n,t,l)),ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:Ue=(l=Ue)||n.memoizedState!==null,ln(e,t,n),Ue=l;break;case 30:yt(n,t),ln(e,t,n);break;case 7:Ue||yt(n,t),ln(e,t,n);break;default:ln(e,t,n)}}function im(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Aa(e)}catch(n){He(t,t.return,n)}}}function sm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Aa(e)}catch(n){He(t,t.return,n)}}function X0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new em),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new em),t;default:throw Error(d(435,e.tag))}}function zs(e,t){var n=X0(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var a=ax.bind(null,e,l);l.then(a,a)}})}function Nt(e,t,n){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var i=l[a],r=e,u=t,f=u;e:for(;f!==null;){switch(f.tag){case 27:if(sl(f.type)){$e=f.stateNode,Dt=!1;break e}break;case 5:$e=f.stateNode,Dt=!1;break e;case 3:case 4:$e=f.stateNode.containerInfo,Dt=!0;break e}f=f.return}if($e===null)throw Error(d(160));am(r,u,i),$e=null,Dt=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)rm(t,e,n),t=t.sibling}var an=null;function rm(e,t,n){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(l=e.updateQueue,l=l!==null?l.events:null,l!==null))for(var i=0;i<l.length;i++){var r=l[i];r.ref.impl=r.nextImpl}Nt(t,e,n),St(e),a&4&&(Pn(3,e,e.return),ui(3,e),Pn(5,e,e.return));break;case 1:Nt(t,e,n),St(e),a&512&&(Ue||l===null||yt(l,l.return)),a&64&&ft&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(i=an,Nt(t,e,n),St(e),a&512&&(Ue||l===null||yt(l,l.return)),a&4)if(a=l!==null?l.memoizedState:null,n=e.memoizedState,l===null)if(n===null)if(e.stateNode===null)if(ft)e.stateNode=Vm(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,a=i.ownerDocument||i;t:switch(t){case"title":l=a.getElementsByTagName("title")[0],(!l||l[La]||l[pt]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=a.createElement(t),a.head.insertBefore(l,a.querySelector("head > title"))),bt(l,t,n),l[pt]=e,ct(l),t=l;break e;case"link":if(i=pp("link","href",a).get(t+(n.href||""))){for(r=0;r<i.length;r++)if(l=i[r],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){i.splice(r,1);break t}}l=a.createElement(t),bt(l,t,n),a.head.appendChild(l);break;case"meta":if(i=pp("meta","content",a).get(t+(n.content||""))){for(r=0;r<i.length;r++)if(l=i[r],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){i.splice(r,1);break t}}l=a.createElement(t),bt(l,t,n),a.head.appendChild(l);break;default:throw Error(d(468,t))}l[pt]=e,ct(l),t=l}e.stateNode=t}else ft||Ru(i,e.type,e.stateNode);else e.stateNode=mp(i,n,e.memoizedProps);else a!==n?(a===null?(t=l.stateNode,t===null||Ue||t.parentNode.removeChild(t)):a.count--,n===null?ft||Ru(i,e.type,e.stateNode):mp(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Yo(e,e.memoizedProps,l.memoizedProps);break;case 27:Nt(t,e,n),St(e),a&512&&(Ue||l===null||yt(l,l.return)),l!==null&&a&4&&Yo(e,e.memoizedProps,l.memoizedProps);break;case 5:if(i=xn,xn=!1,Nt(t,e,n),xn=i,St(e),a&512&&(Ue||l===null||yt(l,l.return)),e.flags&32){t=e.stateNode;try{Vl(t,""),Fe=!0}catch(C){He(e,e.return,C)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Yo(e,t,l!==null?l.memoizedProps:t)),a&1024&&(Wo=!0);break;case 6:if(Nt(t,e,n),St(e),a&4){if(e.stateNode===null)throw Error(d(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Fe=!0}catch(C){He(e,e.return,C)}}break;case 3:if(Fe=!1,Js=null,i=an,an=vi(t.containerInfo),Nt(t,e,n),an=i,St(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Aa(t.containerInfo)}catch(C){He(e,e.return,C)}Wo&&(Wo=!1,om(e)),Fe=!1;break;case 4:a=xn,xn=ft,l=Ac(),i=an,an=vi(e.stateNode.containerInfo),Nt(t,e,n),St(e),an=i,Fe&&di&&(Ms=!0),Fe=l,xn=a;break;case 12:Nt(t,e,n),St(e);break;case 31:Nt(t,e,n),St(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,zs(e,t)));break;case 13:Nt(t,e,n),St(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Ls=zt()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,zs(e,t)));break;case 22:i=e.memoizedState!==null,r=l!==null&&l.memoizedState!==null;var u=ft,f=Ue,w=xn;ft=u||i,xn=w||i,Ue=f||r,Nt(t,e,n),Ue=f,xn=w,ft=u,St(e),a&8192&&(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,!i||l===null||r||ft||Ue||(t=r||Ue,n=ft,l=Ue,ft=i||ft,Ue=t,el(e,2),ft=n,Ue=l),!i&&xn||Po(e,i)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,zs(e,n))));break;case 19:Nt(t,e,n),St(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,zs(e,t)));break;case 30:a&512&&(Ue||l===null||yt(l,l.return)),a=Ac(),i=di,r=(n&335544064)===n,u=e.memoizedProps,di=r&&An(u.default,u.update)!=="none",Nt(t,e,n),St(e),r&&l!==null&&Fe&&(e.flags|=4),di=i,Fe=a;break;case 21:break;case 7:a&512&&(Ue||l===null||yt(l,l.return)),l&&l.stateNode!==null&&(l.stateNode._fragmentFiber=e);default:Nt(t,e,n),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Xf(l)){n=l;break}l=l.return}l=null;for(var a=e.return;a!==null;){if(Ho(a)){var i=a.stateNode;l===null?l=[i]:l.push(i)}if(qo(a))break;a=a.return}var r=l;if(n==null)throw Error(d(160));switch(n.tag){case 27:var u=n.stateNode,f=Vo(e);js(e,f,u,r);break;case 5:var w=n.stateNode;n.flags&32&&(Vl(w,""),n.flags&=-33);var C=Vo(e);js(e,C,w,r);break;case 3:case 4:var q=n.stateNode.containerInfo,y=Vo(e);Qo(e,y,q,r);break;default:throw Error(d(161))}}catch(A){He(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function om(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;om(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Sa=!0,t.reset(),Sa=!1),e=e.sibling}}function ua(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)um(t,e),t=t.sibling;else Pf(t)}function um(e,t){var n=e.alternate;if(n===null)Xo(e,!1);else switch(e.tag){case 3:if(Io=gn=!1,Jf(),ua(t,e),!gn&&!Ms){if(e=pn,e!==null)for(var l=0;l<e.length;l+=3){n=e[l];var a=e[l+1];$m(n,e[l+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Io=!0}pn=null;break;case 5:ua(t,e);break;case 4:l=gn,gn=!1,ua(t,e),gn&&(Ms=!0),gn=l;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Xo(e,!1):ua(t,e));break;case 30:l=gn,a=Jf(),gn=!1,ua(t,e),gn&&(e.flags|=4);var i=e.memoizedProps,r=e.stateNode;t=Sn(i,r),r=Sn(n.memoizedProps,r);var u=An(i.default,i.update);u==="none"?t=!1:(i=n.memoizedState,n.memoizedState=null,n=e.child,Ct=0,t=$o(e,n,t,r,u,i,!0),Ct!==(i===null?0:i.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(xa(e,e.memoizedProps.onUpdate),pn=a):a!==null&&(a.push.apply(a,pn),pn=a),gn=(e.flags&32)!==0?!0:l;break;default:ua(t,e)}}function yn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tm(e,t.alternate,t),t=t.sibling}function el(e,t){for(e=e.child;e!==null;){var n=e,l=t;switch(n.tag){case 0:case 11:case 14:case 15:Pn(4,n,n.return),el(n,l);break;case 1:yt(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Vf(n,n.return,a),el(n,l);break;case 27:(l&2)!==0&&op(n.stateNode,n.type,n.memoizedProps);case 5:yt(n,n.return),n.tag!==5&&n.tag!==27||ci(n),el(n,l);break;case 6:ci(n);break;case 26:yt(n,n.return),a=n.stateNode,n.memoizedState!==null||a===null||Ue||a.parentNode.removeChild(a),el(n,l);break;case 22:n.memoizedState===null&&el(n,l);break;case 30:yt(n,n.return),el(n,l);break;case 7:yt(n,n.return);default:el(n,l)}e=e.sibling}}function sn(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var l=t.alternate,a=e,i=t,r=i.flags,u=(n&1)!==0;switch(i.tag){case 0:case 11:case 15:sn(a,i,n),ui(4,i);break;case 1:if(sn(a,i,n),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(C){He(l,l.return,C)}if(l=i,a=l.updateQueue,a!==null){var f=l.stateNode;try{var w=a.shared.hiddenCallbacks;if(w!==null)for(a.shared.hiddenCallbacks=null,a=0;a<w.length;a++)Cd(w[a],f)}catch(C){He(l,l.return,C)}}u&&r&64&&Yf(i),mn(i,i.return);break;case 27:(n&2)!==0&&Zf(i);case 5:i.tag!==5&&i.tag!==27||Qf(i),sn(a,i,n),u&&l===null&&r&4&&Go(i),mn(i,i.return);break;case 6:Qf(i);break;case 26:f=i.stateNode,i.memoizedState!==null||f===null||ft||Ru(vi(f.ownerDocument),i.type,f),sn(a,i,n),u&&l===null&&r&4&&Go(i),mn(i,i.return);break;case 12:sn(a,i,n);break;case 31:sn(a,i,n),u&&r&4&&im(a,i);break;case 13:sn(a,i,n),u&&r&4&&sm(a,i);break;case 22:i.memoizedState===null&&sn(a,i,n),mn(i,i.return);break;case 30:sn(a,i,n),mn(i,i.return);break;case 7:mn(i,i.return);default:sn(a,i,n)}t=t.sibling}}function tu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&$a(n))}function nu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$a(e))}function It(e,t,n,l){var a=(n&335544064)===n;if(t.subtreeFlags&(a?10262:10256))for(t=t.child;t!==null;)cm(e,t,n,l),t=t.sibling;else a&&If(t)}function cm(e,t,n,l){var a=(n&335544064)===n;a&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Ds(t);var i=t.flags;switch(t.tag){case 0:case 11:case 15:It(e,t,n,l),i&2048&&ui(9,t);break;case 1:It(e,t,n,l);break;case 3:It(e,t,n,l),a&&Io&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),i&2048&&(i=null,t.alternate!==null&&(i=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==i&&(t.refCount++,i!=null&&$a(i)));break;case 12:if(i&2048){It(e,t,n,l),i=t.stateNode;try{var r=t.memoizedProps,u=r.id,f=r.onPostCommit;typeof f=="function"&&f(u,t.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(w){He(t,t.return,w)}}else It(e,t,n,l);break;case 31:It(e,t,n,l);break;case 13:It(e,t,n,l);break;case 23:break;case 22:r=t.stateNode,u=t.alternate,t.memoizedState!==null?(a&&u!==null&&u.memoizedState===null&&Ds(u),r._visibility&2?It(e,t,n,l):fi(e,t)):(a&&u!==null&&u.memoizedState!==null&&Ds(t),r._visibility&2?It(e,t,n,l):(r._visibility|=2,ca(e,t,n,l,(t.subtreeFlags&10256)!==0||!1))),i&2048&&tu(u,t);break;case 24:It(e,t,n,l),i&2048&&nu(t.alternate,t);break;case 30:a&&(i=t.alternate,i!==null&&(hn(i.child,!0),hn(t.child,!0))),It(e,t,n,l);break;default:It(e,t,n,l)}}function ca(e,t,n,l,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,u=n,f=l,w=r.flags;switch(r.tag){case 0:case 11:case 15:ca(i,r,u,f,a),ui(8,r);break;case 23:break;case 22:var C=r.stateNode;r.memoizedState!==null?C._visibility&2?ca(i,r,u,f,a):fi(i,r):(C._visibility|=2,ca(i,r,u,f,a)),a&&w&2048&&tu(r.alternate,r);break;case 24:ca(i,r,u,f,a),a&&w&2048&&nu(r.alternate,r);break;default:ca(i,r,u,f,a)}t=t.sibling}}function fi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:fi(n,l),a&2048&&tu(l.alternate,l);break;case 24:fi(n,l),a&2048&&nu(l.alternate,l);break;default:fi(n,l)}t=t.sibling}}var Ol=8192;function zl(e,t,n){if(e.subtreeFlags&Ol)for(e=e.child;e!==null;)dm(e,t,n),e=e.sibling}function dm(e,t,n){switch(e.tag){case 26:zl(e,t,n),e.flags&Ol&&(e.memoizedState!==null?Ix(n,an,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&yp(n,e)));break;case 5:zl(e,t,n),e.flags&Ol&&(e=e.stateNode,(t&335544128)===t&&yp(n,e));break;case 3:case 4:var l=an;an=vi(e.stateNode.containerInfo),zl(e,t,n),an=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Ol,Ol=16777216,zl(e,t,n),Ol=l):zl(e,t,n));break;case 30:if((e.flags&Ol)!==0&&(l=e.memoizedProps.name,l!=null&&l!=="auto")){var a=e.stateNode;a.paired=null,qt===null&&(qt=new Map),qt.set(l,a)}zl(e,t,n);break;default:zl(e,t,n)}}function fm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function mi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];mt=l,pm(l,e)}fm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mm(e),e=e.sibling}function mm(e){switch(e.tag){case 0:case 11:case 15:mi(e),e.flags&2048&&Pn(9,e,e.return);break;case 3:mi(e);break;case 12:mi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Bs(e)):mi(e);break;default:mi(e)}}function Bs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];mt=l,pm(l,e)}fm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Pn(8,t,t.return),Bs(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Bs(t));break;default:Bs(t)}e=e.sibling}}function pm(e,t){for(;mt!==null;){var n=mt;switch(n.tag){case 0:case 11:case 15:Pn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:$a(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,mt=l;else e:for(n=e;mt!==null;){l=mt;var a=l.sibling,i=l.return;if(lm(l),l===n){mt=null;break e}if(a!==null){a.return=i,mt=a;break e}mt=i}}}var Z0={getCacheForType:function(e){var t=ht(at),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ht(at).controller.signal}},K0=typeof WeakMap=="function"?WeakMap:Map,Le=0,Qe=null,Te=null,De=0,qe=0,Ht=null,tl=!1,da=!1,lu=!1,Fn=0,nt=0,nl=0,Bl=0,Fs=0,Gt=0,fa=0,pi=null,Mt=null,au=!1,Ls=0,hm=0,Rs=1/0,Us=null,ll=null,Pe=0,rn=null,Fl=null,bn=0,iu=0,su=null,xm=null,ma=null,pa=null,ha=null,hi=0,qs=null;function Yt(){return(Le&2)!==0&&De!==0?De&-De:J.T!==null?xu():yc()}function gm(){if(Gt===0)if((De&536870912)===0||je){var e=zi;zi<<=1,(zi&3932160)===0&&(zi=262144),Gt=e}else Gt=536870912;return e=xt.current,e!==null&&(e.flags|=32),Gt}function xa(e,t){if(t!=null){var n=e.stateNode,l=n.ref;l===null&&(l=n.ref=Wm(Sn(e.memoizedProps,n))),pa===null&&(pa=[]),pa.push(t.bind(null,l))}}function Ot(e,t,n){(e===Qe&&(qe===2||qe===9)||e.cancelPendingCommit!==null)&&(ga(e,0),al(e,De,Gt,!1)),Fa(e,n),((Le&2)===0||e!==Qe)&&(e===Qe&&((Le&2)===0&&(Bl|=n),nt===4&&al(e,De,Gt,!1)),vn(e))}function ym(e,t,n){if((Le&6)!==0)throw Error(d(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ba(e,t),a=l?W0(e,t):ou(e,t,!0),i=l;do{if(a===0){da&&!l&&al(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!J0(n)){a=ou(e,t,!1),i=!1;continue}if(a===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var u=e;a=pi;var f=u.current.memoizedState.isDehydrated;if(f&&(ga(u,r).flags|=256),r=ou(u,r,!1),r!==2&&r!==6){if(lu&&!f){u.errorRecoveryDisabledLanes|=i,Bl|=i,a=4;break e}i=Mt,Mt=a,i!==null&&(Mt===null?Mt=i:Mt.push.apply(Mt,i))}a=r}if(i=!1,a!==2)continue}}if(a===1){ga(e,0),al(e,t,0,!0);break}e:{switch(l=e,i=a,i){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:al(l,t,Gt,!tl);break e;case 2:Mt=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(a=Ls+300-zt(),10<a)){if(al(l,t,Gt,!tl),Fi(l,0,!0)!==0)break e;bn=t,l.timeoutHandle=Au(bm.bind(null,l,n,Mt,Us,au,t,Gt,Bl,fa,tl,i,"Throttled",-0,0),a);break e}bm(l,n,Mt,Us,au,t,Gt,Bl,fa,tl,i,null,-0,0)}}break}while(!0);vn(e)}function bm(e,t,n,l,a,i,r,u,f,w,C,q,y,A){e.timeoutHandle=-1;var ae=t.subtreeFlags,fe=(i&335544064)===i;if(q=null,(fe||ae&8192||(ae&16785408)===16785408)&&(q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},qt=null,dm(t,i,q),fe&&(ae=q,fe=e.containerInfo,fe=(fe.nodeType===9?fe:fe.ownerDocument).__reactViewTransition,fe!=null&&(ae.count++,ae.waitingForViewTransition=!0,ae=Ei.bind(ae),fe.finished.then(ae,ae))),ae=(i&62914560)===i?Ls-zt():(i&4194048)===i?hm-zt():0,ae=Px(q,ae),ae!==null)){bn=i,e.cancelPendingCommit=ae(Am.bind(null,e,t,i,n,l,a,r,u,f,w,C,q,null,y,A)),al(e,i,r,!w);return}Am(e,t,i,n,l,a,r,u,f,w,C,q)}function J0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],i=a.getSnapshot;a=a.value;try{if(!Rt(i(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function al(e,t,n,l){t=mc(e,t),t&=~Fs,t&=~Bl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var i=31-Ft(a),r=1<<i;l[i]=-1,a&=~r}n!==0&&hc(e,n,t)}function Hs(){return(Le&6)===0?(xi(0),!1):!0}function ru(){if(Te!==null){if(qe===0)var e=Te.return;else e=Te,Cn=El=null,ho(e),la=null,Pa=0,e=Te;for(;e!==null;)Gf(e.alternate,e),e=e.return;Te=null}}function ga(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,bx(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),bn=0,ru(),Qe=e,Te=n=jn(e.current,null),De=t,qe=0,Ht=null,tl=!1,da=Ba(e,t),lu=!1,fa=Gt=Fs=Bl=nl=nt=0,Mt=pi=null,au=!1,Fn=mc(e,t),Ji(),n}function vm(e,t){ke=null,J.H=vs,t===na||t===ss?(t=Sd(),qe=3):t===to?(t=Sd(),qe=4):qe=t===Co?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ht=t,Te===null&&(nt=1,ws(e,Kt(t,e.current)))}function wm(){var e=xt.current;return e===null?!0:(De&4194048)===De?_t===null:(De&62914560)===De||(De&536870912)!==0?e===_t:!1}function _m(){var e=J.H;return J.H=vs,e===null?vs:e}function Em(){var e=J.A;return J.A=Z0,e}function Gs(){nt=4,tl||(De&4194048)!==De&&xt.current!==null||(da=!0),(nl&134217727)===0&&(Bl&134217727)===0||Qe===null||al(Qe,De,Gt,!1)}function ou(e,t,n){var l=Le;Le|=2;var a=_m(),i=Em();(Qe!==e||De!==t)&&(Us=null,ga(e,t)),t=!1;var r=nt;e:do try{if(qe!==0&&Te!==null){var u=Te,f=Ht;switch(qe){case 8:ru(),r=6;break e;case 3:case 2:case 9:case 6:xt.current===null&&(t=!0);var w=qe;if(qe=0,Ht=null,ya(e,u,f,w),n&&da){r=0;break e}break;default:w=qe,qe=0,Ht=null,ya(e,u,f,w)}}$0(),r=nt;break}catch(C){vm(e,C)}while(!0);return t&&e.shellSuspendCounter++,Cn=El=null,Le=l,J.H=a,J.A=i,Te===null&&(Qe=null,De=0,Ji()),r}function $0(){for(;Te!==null;)km(Te)}function W0(e,t){var n=Le;Le|=2;var l=_m(),a=Em();Qe!==e||De!==t?(Us=null,Rs=zt()+500,ga(e,t)):da=Ba(e,t);e:do try{if(qe!==0&&Te!==null){t=Te;var i=Ht;t:switch(qe){case 1:qe=0,Ht=null,ya(e,t,i,1);break;case 2:case 9:if(kd(i)){qe=0,Ht=null,Nm(t);break}t=function(){qe!==2&&qe!==9||Qe!==e||(qe=7),vn(e)},i.then(t,t);break e;case 3:qe=7;break e;case 4:qe=5;break e;case 7:kd(i)?(qe=0,Ht=null,Nm(t)):(qe=0,Ht=null,ya(e,t,i,7));break;case 5:var r=null;switch(Te.tag){case 26:r=Te.memoizedState;case 5:case 27:var u=Te;if(r?xp(r):u.stateNode.complete){qe=0,Ht=null;var f=u.sibling;if(f!==null)Te=f;else{var w=u.return;w!==null?(Te=w,Ys(w)):Te=null}break t}}qe=0,Ht=null,ya(e,t,i,5);break;case 6:qe=0,Ht=null,ya(e,t,i,6);break;case 8:ru(),nt=6;break e;default:throw Error(d(462))}}I0();break}catch(C){vm(e,C)}while(!0);return Cn=El=null,J.H=l,J.A=a,Le=n,Te!==null?0:(Qe=null,De=0,Ji(),nt)}function I0(){for(;Te!==null&&!hh();)km(Te)}function km(e){var t=qf(e.alternate,e,Fn);e.memoizedProps=e.pendingProps,t===null?Ys(e):Te=t}function Nm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Of(n,t,t.pendingProps,t.type,void 0,De);break;case 11:t=Of(n,t,t.pendingProps,t.type.render,t.ref,De);break;case 5:ho(t);var l=t;l===dt&&(je?(ts(l),l.tag===5&&l.stateNode!=null&&(Ze=l.stateNode)):(ts(l),je=!0));default:Gf(n,t),t=Te=md(t,Fn),t=qf(n,t,Fn)}e.memoizedProps=e.pendingProps,t===null?Ys(e):Te=t}function ya(e,t,n,l){Cn=El=null,ho(t),la=null,Pa=0;var a=t.return;try{if(U0(e,a,t,n,De)){nt=1,ws(e,Kt(n,e.current)),Te=null;return}}catch(i){if(a!==null)throw Te=a,i;nt=1,ws(e,Kt(n,e.current)),Te=null;return}t.flags&32768?(je||l===1?e=!0:da||(De&536870912)!==0?e=!1:(tl=e=!0,(l===2||l===9||l===3||l===6)&&(l=xt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Sm(t,e)):Ys(t)}function Ys(e){var t=e;do{if((t.flags&32768)!==0){Sm(t,tl);return}e=t.return;var n=Y0(t.alternate,t,Fn);if(n!==null){Te=n;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);nt===0&&(nt=5)}function Sm(e,t){do{var n=V0(e.alternate,e);if(n!==null){n.flags&=32767,Te=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Te=e;return}Te=e=n}while(e!==null);nt=6,Te=null}function Am(e,t,n,l,a,i,r,u,f,w,C,q){e.cancelPendingCommit=null;do Vs();while(Pe!==0);if((Le&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));e===Qe&&(Te=Qe=null,De=0),Fl=t,rn=e,bn=n,su=a,xm=l,P0(e,t,n,r,u,f,q)}}function P0(e,t,n,l,a,i,r){var u=t.lanes|t.childLanes;if(iu=u,u|=Gr,Nh(e,n,u,l,a,i),pa=null,(n&335544064)===n?(ha=A0(e),l=10262):(ha=null,l=10256),(t.subtreeFlags&l)!==0||(t.flags&l)!==0?(e.callbackNode=null,e.callbackPriority=0,ix(Mi,function(){return fu(),null})):(e.callbackNode=null,e.callbackPriority=0),Ts=!1,l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=J.T,J.T=null,a=ie.p,ie.p=2,i=Le,Le|=4;try{Q0(e,t,n)}finally{Le=i,ie.p=a,J.T=l}}Pe=1,Ts?ma=Nx(r,e.containerInfo,ha,uu,cu,tx,du,fu,ex):(uu(),cu(),du())}function ex(e){if(Pe!==0){var t=rn.onRecoverableError;t(e,{componentStack:null})}}function tx(){Pe===3&&(Pe=0,um(Fl,rn),Pe=4)}function uu(){if(Pe===1){Pe=0;var e=rn,t=Fl,n=bn,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=J.T,J.T=null;var a=ie.p;ie.p=2;var i=Le;Le|=4;try{di=Ms=!1,rm(t,e,n),n=ku;var r=ld(e.containerInfo),u=n.focusedElem,f=n.selectionRange;if(r!==u&&u&&u.ownerDocument&&nd(u.ownerDocument.documentElement,u)){if(f!==null&&Lr(u)){var w=f.start,C=f.end;if(C===void 0&&(C=w),"selectionStart"in u)u.selectionStart=w,u.selectionEnd=Math.min(C,u.value.length);else{var q=u.ownerDocument||document,y=q&&q.defaultView||window;if(y.getSelection){var A=y.getSelection(),ae=u.textContent.length,fe=Math.min(f.start,ae),Ne=f.end===void 0?fe:Math.min(f.end,ae);!A.extend&&fe>Ne&&(r=Ne,Ne=fe,fe=r);var v=td(u,fe),x=td(u,Ne);if(v&&x&&(A.rangeCount!==1||A.anchorNode!==v.node||A.anchorOffset!==v.offset||A.focusNode!==x.node||A.focusOffset!==x.offset)){var N=q.createRange();N.setStart(v.node,v.offset),A.removeAllRanges(),fe>Ne?(A.addRange(N),A.extend(x.node,x.offset)):(N.setEnd(x.node,x.offset),A.addRange(N))}}}}for(q=[],A=u;A=A.parentNode;)A.nodeType===1&&q.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<q.length;u++){var U=q[u];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}Sa=!!Eu,ku=Eu=null}finally{Le=i,ie.p=a,J.T=l}}e.current=t,Pe=2}}function cu(){if(Pe===2){Pe=0;var e=rn,t=Fl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=J.T,J.T=null;var l=ie.p;ie.p=2;var a=Le;Le|=4;try{tm(e,t.alternate,t)}finally{Le=a,ie.p=l,J.T=n}}Pe=3}}function du(){if(Pe===4||Pe===3){Pe=0;var e=ma;ma=null,xh();var t=rn,n=Fl,l=bn,a=xm,i=(l&335544064)===l?10262:10256;if((n.subtreeFlags&i)!==0||(n.flags&i)!==0?Pe=5:(Pe=0,Fl=rn=null,jm(t,t.pendingLanes)),i=t.pendingLanes,i===0&&(ll=null),br(l),n=n.stateNode,Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(za,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=J.T,i=ie.p,ie.p=2,J.T=null;try{for(var r=t.onRecoverableError,u=0;u<a.length;u++){var f=a[u];r(f.value,{componentStack:f.stack})}}finally{J.T=n,ie.p=i}}if(a=pa,r=ha,ha=null,a!==null&&(pa=null,r===null&&(r=[]),e!==null))for(f=0;f<a.length;f++)n=(0,a[f])(r),n!==void 0&&e.finished.finally(n);(bn&3)!==0&&Vs(),vn(t),i=t.pendingLanes,(l&261930)!==0&&(i&42)!==0?t===qs?hi++:(hi=0,qs=t):(hi=0,qs=null),xi(0)}}function jm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$a(t)))}function Vs(){return ma!==null&&(ma.skipTransition(),ma=null),uu(),cu(),du(),fu()}function fu(){if(Pe!==5)return!1;var e=rn,t=iu;iu=0;var n=br(bn),l=J.T,a=ie.p;try{ie.p=32>n?32:n,J.T=null,n=su,su=null;var i=rn,r=bn;if(Pe=0,Fl=rn=null,bn=0,(Le&6)!==0)throw Error(d(331));var u=Le;if(Le|=4,mm(i.current),cm(i,i.current,r,n),Le=u,xi(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(za,i)}catch{}return!0}finally{ie.p=a,J.T=l,jm(e,t)}}function Tm(e,t,n){t=Kt(n,t),t=To(e.stateNode,t,2),e=Jn(e,t,2),e!==null&&(Fa(e,2),vn(e))}function He(e,t,n){if(e.tag===3)Tm(e,e,n);else for(;t!==null;){if(t.tag===3){Tm(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ll===null||!ll.has(l))){e=Kt(n,e),n=Nf(2),l=Jn(t,n,2),l!==null&&(Sf(n,l,t,e),Fa(l,2),vn(l));break}}t=t.return}}function mu(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new K0;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(lu=!0,a.add(n),e=nx.bind(null,e,t,n),t.then(e,e))}function nx(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Qe===e&&(De&n)===n&&((nt===4||nt===3&&(De&62914560)===De&&300>zt()-Ls)&&(Le&2)===0?ga(e,0):Fs|=n,fa===De&&(fa=0)),vn(e)}function Cm(e,t){t===0&&(t=pc()),e=vl(e,t),e!==null&&(Fa(e,t),vn(e))}function lx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cm(e,n)}function ax(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(t),Cm(e,n)}function ix(e,t){return hr(e,t)}var ba=null,va=null,pu=!1,Qs=!1,hu=!1,il=0;function vn(e){e!==va&&e.next===null&&(va===null?ba=va=e:va=va.next=e),Qs=!0,pu||(pu=!0,rx())}function xi(e,t){if(!hu&&Qs){hu=!0;do for(var n=!1,l=ba;l!==null;){if(e!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var r=l.suspendedLanes,u=l.pingedLanes;i=(1<<31-Ft(42|e)+1)-1,i&=a&~(r&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,zm(l,i))}else i=De,i=Fi(l,l===Qe?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Ba(l,i)||(n=!0,zm(l,i));l=l.next}while(n);hu=!1}}function sx(){Dm()}function Dm(){Qs=pu=!1;var e=0;il!==0&&yx()&&(e=il);for(var t=zt(),n=null,l=ba;l!==null;){var a=l.next,i=Mm(l,t);i===0?(l.next=null,n===null?ba=a:n.next=a,a===null&&(va=n)):(n=l,(e!==0||(i&3)!==0)&&(Qs=!0)),l=a}Pe!==0&&Pe!==5||xi(e),il!==0&&(il=0)}function Mm(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-Ft(i),u=1<<r,f=a[r];f===-1?((u&n)===0||(u&l)!==0)&&(a[r]=kh(u,t)):f<=t&&(e.expiredLanes|=u),i&=~u}if(t=Qe,n=De,n=Fi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(qe===2||qe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&xr(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ba(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&xr(l),br(n)){case 2:case 8:n=dc;break;case 32:n=Mi;break;case 268435456:n=fc;break;default:n=Mi}return l=Om.bind(null,e),n=hr(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&xr(l),e.callbackPriority=2,e.callbackNode=null,2}function Om(e,t){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Vs()&&e.callbackNode!==n)return null;var l=De;return l=Fi(e,e===Qe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(ym(e,l,t),Mm(e,zt()),e.callbackNode!=null&&e.callbackNode===n?Om.bind(null,e):null)}function zm(e,t){if(Vs())return null;ym(e,t,!0)}function rx(){vx(function(){(Le&6)!==0?hr(cc,sx):Dm()})}function xu(){if(il===0){var e=Sl;e===0&&(e=Oi,Oi<<=1,(Oi&261888)===0&&(Oi=256)),il=e}return il}function Bm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Hi(e)}function ox(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var i=Bm((a[jt]||null).action),r=l.submitter;r&&(t=(t=r[jt]||null)?Bm(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var u=new Qi("action","action",null,l,a);e.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(il!==0){var f=new FormData(a,r);ko(n,{pending:!0,data:f,method:a.method,action:i},null,f)}}else typeof i=="function"&&(u.preventDefault(),f=new FormData(a,r),ko(n,{pending:!0,data:f,method:a.method,action:i},i,f))},currentTarget:a}]})}}for(var gu=0;gu<Hr.length;gu++){var yu=Hr[gu],ux=yu.toLowerCase(),cx=yu[0].toUpperCase()+yu.slice(1);nn(ux,"on"+cx)}nn(sd,"onAnimationEnd"),nn(rd,"onAnimationIteration"),nn(od,"onAnimationStart"),nn("dblclick","onDoubleClick"),nn("focusin","onFocus"),nn("focusout","onBlur"),nn(b0,"onTransitionRun"),nn(v0,"onTransitionStart"),nn(w0,"onTransitionCancel"),nn(ud,"onTransitionEnd"),Gl("onMouseEnter",["mouseout","mouseover"]),Gl("onMouseLeave",["mouseout","mouseover"]),Gl("onPointerEnter",["pointerout","pointerover"]),Gl("onPointerLeave",["pointerout","pointerover"]),gl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gl("onBeforeInput",["compositionend","keypress","textInput","paste"]),gl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gi));function Fm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var r=l.length-1;0<=r;r--){var u=l[r],f=u.instance,w=u.currentTarget;if(u=u.listener,f!==i&&a.isPropagationStopped())break e;i=u,a.currentTarget=w;try{i(a)}catch(C){Ki(C)}a.currentTarget=null,i=f}else for(r=0;r<l.length;r++){if(u=l[r],f=u.instance,w=u.currentTarget,u=u.listener,f!==i&&a.isPropagationStopped())break e;i=u,a.currentTarget=w;try{i(a)}catch(C){Ki(C)}a.currentTarget=null,i=f}}}}function Ce(e,t){var n=t[vc];n===void 0&&(n=t[vc]=new Set);var l=e+"__bubble";n.has(l)||(Lm(t,e,2,!1),n.add(l))}function bu(e,t,n){var l=0;t&&(l|=4),Lm(n,e,l,t)}var Xs="_reactListening"+Math.random().toString(36).slice(2);function vu(e){if(!e[Xs]){e[Xs]=!0,Ec.forEach(function(n){n!=="selectionchange"&&(dx.has(n)||bu(n,!1,e),bu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xs]||(t[Xs]=!0,bu("selectionchange",!1,t))}}function Lm(e,t,n,l){switch(Sp(t)){case 2:var a=lg;break;case 8:a=ag;break;default:a=qu}n=a.bind(null,t,n,e),a=void 0,!Ar||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function wu(e,t,n,l,a){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var u=l.stateNode.containerInfo;if(u===a)break;if(r===4)for(r=l.return;r!==null;){var f=r.tag;if((f===3||f===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;u!==null;){if(r=xl(u),r===null)return;if(f=r.tag,f===5||f===6||f===26||f===27){l=i=r;continue e}u=u.parentNode}}l=l.return}Fc(function(){var w=i,C=Nr(n),q=[];e:{var y=cd.get(e);if(y!==void 0){var A=Qi,ae=e;switch(e){case"keypress":if(Yi(n)===0)break e;case"keydown":case"keyup":A=Jh;break;case"focusin":ae="focus",A=Dr;break;case"focusout":ae="blur",A=Dr;break;case"beforeblur":case"afterblur":A=Dr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Uc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Lh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=e0;break;case sd:case rd:case od:A=qh;break;case ud:A=n0;break;case"scroll":case"scrollend":A=Bh;break;case"wheel":A=a0;break;case"copy":case"cut":case"paste":A=Gh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Hc;break;case"submit":A=Ih;break;case"toggle":case"beforetoggle":A=s0}var fe=(t&4)!==0,Ne=!fe&&(e==="scroll"||e==="scrollend"),v=fe?y!==null?y+"Capture":null:y;fe=[];for(var x=w,N;x!==null;){var U=x;if(N=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||N===null||v===null||(U=Ua(x,v),U!=null&&fe.push(yi(x,U,N))),Ne)break;x=x.return}0<fe.length&&(y=new A(y,ae,null,n,C),q.push({event:y,listeners:fe}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",A&&n!==kr&&(ae=n.relatedTarget||n.fromElement)&&(xl(ae)||ae[Ul]))break e;(y||A)&&(ae=C.window===C?C:(A=C.ownerDocument)?A.defaultView||A.parentWindow:window,y?(A=n.relatedTarget||n.toElement,y=w,A=A?xl(A):null,A!==null&&(Ne=H(A),fe=A.tag,A!==Ne||fe!==5&&fe!==27&&fe!==6)&&(A=null)):(y=null,A=w),y!==A&&(fe=Uc,U="onMouseLeave",v="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(fe=Hc,U="onPointerLeave",v="onPointerEnter",x="pointer"),Ne=y==null?ae:Ra(y),N=A==null?ae:Ra(A),ae=new fe(U,x+"leave",y,n,C),ae.target=Ne,ae.relatedTarget=N,U=null,xl(C)===w&&(fe=new fe(v,x+"enter",A,n,C),fe.target=N,fe.relatedTarget=Ne,U=fe),Ne=U,fe=y&&A?B(y,A,fx):null,y!==null&&Rm(q,ae,y,fe,!1),A!==null&&Ne!==null&&Rm(q,Ne,A,fe,!0)))}e:{if(y=w?Ra(w):window,A=y.nodeName&&y.nodeName.toLowerCase(),A==="select"||A==="input"&&y.type==="file")var ce=Jc;else if(Zc(y))if($c)ce=x0;else{ce=p0;var Me=m0}else A=y.nodeName,!A||A.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?w&&Er(w.elementType)&&(ce=Jc):ce=h0;if(ce&&(ce=ce(e,w))){Kc(q,ce,n,C);break e}Me&&Me(e,y,w)}switch(Me=w?Ra(w):window,e){case"focusin":(Zc(Me)||Me.contentEditable==="true")&&(Kl=Me,Rr=w,Za=null);break;case"focusout":Za=Rr=Kl=null;break;case"mousedown":Ur=!0;break;case"contextmenu":case"mouseup":case"dragend":Ur=!1,ad(q,n,C);break;case"selectionchange":if(y0)break;case"keydown":case"keyup":ad(q,n,C)}var xe;if(Or)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else Zl?Qc(e,n)&&(be="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(be="onCompositionStart");be&&(Gc&&n.locale!=="ko"&&(Zl||be!=="onCompositionStart"?be==="onCompositionEnd"&&Zl&&(xe=Lc()):(qn=C,jr="value"in qn?qn.value:qn.textContent,Zl=!0)),Me=Zs(w,be),0<Me.length&&(be=new qc(be,e,null,n,C),q.push({event:be,listeners:Me}),xe?be.data=xe:(xe=Xc(n),xe!==null&&(be.data=xe)))),(xe=o0?u0(e,n):c0(e,n))&&(be=Zs(w,"onBeforeInput"),0<be.length&&(Me=new qc("onBeforeInput","beforeinput",null,n,C),q.push({event:Me,listeners:be}),Me.data=xe)),ox(q,e,w,n,C)}Fm(q,t)})}function yi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zs(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=Ua(e,n),a!=null&&l.unshift(yi(e,a,i)),a=Ua(e,t),a!=null&&l.push(yi(e,a,i))),e.tag===3)return l;e=e.return}return[]}function fx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Rm(e,t,n,l,a){for(var i=t._reactName,r=[];n!==null&&n!==l;){var u=n,f=u.alternate,w=u.stateNode;if(u=u.tag,f!==null&&f===l)break;u!==5&&u!==26&&u!==27||w===null||(f=w,a?(w=Ua(n,i),w!=null&&r.unshift(yi(n,w,f))):a||(w=Ua(n,i),w!=null&&r.push(yi(n,w,f)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var mx=/\r\n?/g,px=/\u0000|\uFFFD/g;function Um(e){return(typeof e=="string"?e:""+e).replace(mx,`
`).replace(px,"")}function qm(e,t){return t=Um(t),Um(e)===t}function Ge(e,t,n,l,a,i){switch(n){case"children":if(typeof l=="string")t==="body"||t==="textarea"&&l===""||Vl(e,l);else if(typeof l=="number"||typeof l=="bigint")t!=="body"&&Vl(e,""+l);else return;break;case"className":qi(e,"class",l);break;case"tabIndex":qi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":qi(e,n,l);break;case"style":zc(e,l,i);return;case"data":if(t!=="object"){qi(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Hi(l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Ge(e,t,"name",a.name,a,null),Ge(e,t,"formEncType",a.formEncType,a,null),Ge(e,t,"formMethod",a.formMethod,a,null),Ge(e,t,"formTarget",a.formTarget,a,null)):(Ge(e,t,"encType",a.encType,a,null),Ge(e,t,"method",a.method,a,null),Ge(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Hi(l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=cn);return;case"onScroll":l!=null&&Ce("scroll",e);return;case"onScrollEnd":l!=null&&Ce("scrollend",e);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(d(60));(i!=null?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=Hi(l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),Ui(e,"popover",l);break;case"xlinkActuate":kn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":kn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":kn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":kn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":kn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":kn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":kn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":kn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":kn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ui(e,"is",l);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=Oh.get(n)||n,Ui(e,n,l);else return}Fe=!0}function _u(e,t,n,l,a,i){switch(n){case"style":zc(e,l,i);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(d(60));(i!=null?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if(typeof l=="string")Vl(e,l);else if(typeof l=="number"||typeof l=="bigint")Vl(e,""+l);else return;break;case"onScroll":l!=null&&Ce("scroll",e);return;case"onScrollEnd":l!=null&&Ce("scrollend",e);return;case"onClick":l!=null&&(e.onclick=cn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!kc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),i=n.slice(2,a?n.length-7:void 0),t=e[jt]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(i,t,a),typeof l=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(i,l,a);break e}Fe=!0,n in e?e[n]=l:l===!0?e.setAttribute(n,""):Ui(e,n,l)}return}Fe=!0}function bt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var l=!1,a=!1,i;for(i in n)if(n.hasOwnProperty(i)){var r=n[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Ge(e,t,i,r,n,null)}}a&&Ge(e,t,"srcSet",n.srcSet,n,null),l&&Ge(e,t,"src",n.src,n,null);return;case"input":Ce("invalid",e);var u=i=r=a=null,f=null,w=null;for(l in n)if(n.hasOwnProperty(l)){var C=n[l];if(C!=null)switch(l){case"name":a=C;break;case"type":r=C;break;case"checked":f=C;break;case"defaultChecked":w=C;break;case"value":i=C;break;case"defaultValue":u=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(d(137,t));break;default:Ge(e,t,l,C,n,null)}}Cc(e,i,u,f,w,r,a,!1);return;case"select":Ce("invalid",e),l=r=i=null;for(a in n)if(n.hasOwnProperty(a)&&(u=n[a],u!=null))switch(a){case"value":i=u;break;case"defaultValue":r=u;break;case"multiple":l=u;default:Ge(e,t,a,u,n,null)}t=i,n=r,e.multiple=!!l,t!=null?Yl(e,!!l,t,!1):n!=null&&Yl(e,!!l,n,!0);return;case"textarea":Ce("invalid",e),i=a=l=null;for(r in n)if(n.hasOwnProperty(r)&&(u=n[r],u!=null))switch(r){case"value":l=u;break;case"defaultValue":a=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(d(91));break;default:Ge(e,t,r,u,n,null)}Mc(e,l,a,i);return;case"option":for(f in n)if(n.hasOwnProperty(f)&&(l=n[f],l!=null))switch(f){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ge(e,t,f,l,n,null)}return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(l=0;l<gi.length;l++)Ce(gi[l],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in n)if(n.hasOwnProperty(w)&&(l=n[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Ge(e,t,w,l,n,null)}return;default:if(Er(t)){for(C in n)n.hasOwnProperty(C)&&(l=n[C],l!==void 0&&_u(e,t,C,l,n,void 0));return}}for(u in n)n.hasOwnProperty(u)&&(l=n[u],l!=null&&Ge(e,t,u,l,n,null))}var hx={};function xx(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,r=null,u=null,f=null,w=null,C=null;for(A in n){var q=n[A];if(n.hasOwnProperty(A)&&q!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":f=q;default:l.hasOwnProperty(A)||Ge(e,t,A,null,l,q)}}for(var y in l){var A=l[y];if(q=n[y],l.hasOwnProperty(y)&&(A!=null||q!=null))switch(y){case"type":A!==q&&(Fe=!0),i=A;break;case"name":A!==q&&(Fe=!0),a=A;break;case"checked":A!==q&&(Fe=!0),w=A;break;case"defaultChecked":A!==q&&(Fe=!0),C=A;break;case"value":A!==q&&(Fe=!0),r=A;break;case"defaultValue":A!==q&&(Fe=!0),u=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(d(137,t));break;default:A!==q&&Ge(e,t,y,A,l,q)}}wr(e,r,u,f,w,C,i,a);return;case"select":A=r=u=y=null;for(i in n)if(f=n[i],n.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":A=f;default:l.hasOwnProperty(i)||Ge(e,t,i,null,l,f)}for(a in l)if(i=l[a],f=n[a],l.hasOwnProperty(a)&&(i!=null||f!=null))switch(a){case"value":i!==f&&(Fe=!0),y=i;break;case"defaultValue":i!==f&&(Fe=!0),u=i;break;case"multiple":i!==f&&(Fe=!0),r=i;default:i!==f&&Ge(e,t,a,i,l,f)}t=u,n=r,l=A,y!=null?Yl(e,!!n,y,!1):!!l!=!!n&&(t!=null?Yl(e,!!n,t,!0):Yl(e,!!n,n?[]:"",!1));return;case"textarea":A=y=null;for(u in n)if(a=n[u],n.hasOwnProperty(u)&&a!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:Ge(e,t,u,null,l,a)}for(r in l)if(a=l[r],i=n[r],l.hasOwnProperty(r)&&(a!=null||i!=null))switch(r){case"value":a!==i&&(Fe=!0),y=a;break;case"defaultValue":a!==i&&(Fe=!0),A=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(d(91));break;default:a!==i&&Ge(e,t,r,a,l,i)}Dc(e,y,A);return;case"option":for(var ae in n)if(y=n[ae],n.hasOwnProperty(ae)&&y!=null&&!l.hasOwnProperty(ae))switch(ae){case"selected":e.selected=!1;break;default:Ge(e,t,ae,null,l,y)}for(f in l)if(y=l[f],A=n[f],l.hasOwnProperty(f)&&y!==A&&(y!=null||A!=null))switch(f){case"selected":y!==A&&(Fe=!0),e.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:Ge(e,t,f,y,l,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in n)y=n[fe],n.hasOwnProperty(fe)&&y!=null&&!l.hasOwnProperty(fe)&&Ge(e,t,fe,null,l,y);for(w in l)if(y=l[w],A=n[w],l.hasOwnProperty(w)&&y!==A&&(y!=null||A!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(d(137,t));break;default:Ge(e,t,w,y,l,A)}return;default:if(Er(t)){for(var Ne in n)y=n[Ne],n.hasOwnProperty(Ne)&&y!==void 0&&!l.hasOwnProperty(Ne)&&_u(e,t,Ne,void 0,l,y);for(C in l)y=l[C],A=n[C],!l.hasOwnProperty(C)||y===A||y===void 0&&A===void 0||_u(e,t,C,y,l,A);return}}for(var v in n)y=n[v],n.hasOwnProperty(v)&&y!=null&&!l.hasOwnProperty(v)&&Ge(e,t,v,null,l,y);for(q in l)y=l[q],A=n[q],!l.hasOwnProperty(q)||y===A||y==null&&A==null||Ge(e,t,q,y,l,A)}function Hm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],i=a.transferSize,r=a.initiatorType,u=a.duration;if(i&&u&&Hm(r)){for(r=0,u=a.responseEnd,l+=1;l<n.length;l++){var f=n[l],w=f.startTime;if(w>u)break;var C=f.transferSize,q=f.initiatorType;C&&Hm(q)&&(f=f.responseEnd,r+=C*(f<u?1:(u-w)/(f-w)))}if(--l,t+=8*(i+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Eu=null,ku=null;function bi(e){return e.nodeType===9?e:e.ownerDocument}function Gm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ym(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Vm(e,t,n,l){return n=bi(n).createElement(e),n[pt]=l,n[jt]=t,bt(n,e,t),ct(n),n}function Nu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Su=null;function yx(){var e=window.event;return e&&e.type==="popstate"?e===Su?!1:(Su=e,!0):(Su=null,!1)}var Au=typeof setTimeout=="function"?setTimeout:void 0,bx=typeof clearTimeout=="function"?clearTimeout:void 0,Qm=typeof Promise=="function"?Promise:void 0,Xm=typeof requestAnimationFrame=="function"?requestAnimationFrame:Au,vx=typeof queueMicrotask=="function"?queueMicrotask:typeof Qm<"u"?function(e){return Qm.resolve(null).then(e).catch(wx)}:Au;function wx(e){setTimeout(function(){throw e})}function sl(e){return e==="head"}function Zm(e,t){var n=t,l=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(a),Aa(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Bu(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Bu(n);for(var i=n.firstChild;i;){var r=i.nextSibling,u=i.nodeName;i[La]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=r}}else n==="body"&&Bu(e.ownerDocument.body);n=a}while(n);Aa(t)}function Km(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function Jm(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var l=1;else for(var a=l=0;a<t.length;a++){var i=t[a];0<i.width&&0<i.height&&l++}l===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function $m(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function _x(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function ju(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return _x(t,n,e)}function Ex(e){return e.documentElement.clientHeight}function kx(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Nx(e,t,n,l,a,i,r,u,f){var w=t.nodeType===9?t:t.ownerDocument;try{var C=w.startViewTransition({update:function(){var y=w.defaultView,A=y.navigation&&y.navigation.transition,ae=w.fonts.status;l();var fe=[];if(ae==="loaded"&&(Ex(w),w.fonts.status==="loading"&&fe.push(w.fonts.ready)),ae=fe.length,e!==null)for(var Ne=e.suspenseyImages,v=0,x=0;x<Ne.length;x++){var N=Ne[x];if(!N.complete){var U=N.getBoundingClientRect();if(0<U.bottom&&0<U.right&&U.top<y.innerHeight&&U.left<y.innerWidth){if(v+=gp(N),v>$s){fe.length=ae;break}N=new Promise(kx.bind(N)),fe.push(N)}}}if(0<fe.length)return y=Promise.race([Promise.all(fe),new Promise(function(ce){return setTimeout(ce,500)})]).then(a,a),(A?Promise.allSettled([A.finished,y]):y).then(i,i);if(a(),A)return A.finished.then(i,i);i()},types:n});w.__reactViewTransition=C;var q=[];return C.ready.then(function(){for(var y=w.documentElement.getAnimations({subtree:!0}),A=0;A<y.length;A++){var ae=y[A],fe=ae.effect,Ne=fe.pseudoElement;if(Ne!=null&&Ne.startsWith("::view-transition")){q.push(ae),ae=fe.getKeyframes();for(var v=Ne=void 0,x=!0,N=0;N<ae.length;N++){var U=ae[N],ce=U.width;if(Ne===void 0)Ne=ce;else if(Ne!==ce){x=!1;break}if(ce=U.height,v===void 0)v=ce;else if(v!==ce){x=!1;break}delete U.width,delete U.height,U.transform==="none"&&delete U.transform}x&&Ne!==void 0&&v!==void 0&&(fe.setKeyframes(ae),x=getComputedStyle(fe.target,fe.pseudoElement),x.width!==Ne||x.height!==v)&&(x=ae[0],x.width=Ne,x.height=v,x=ae[ae.length-1],x.width=Ne,x.height=v,fe.setKeyframes(ae))}}r()},function(y){w.__reactViewTransition===C&&(w.__reactViewTransition=null);try{if(typeof y=="object"&&y!==null)switch(y.name){case"InvalidStateError":(y.message==="View transition was skipped because document visibility state is hidden."||y.message==="Skipping view transition because document visibility state has become hidden."||y.message==="Skipping view transition because viewport size changed."||y.message==="Transition was aborted because of invalid state")&&(y=null)}y!==null&&f(y)}finally{l(),a(),r()}}),C.finished.finally(function(){for(var y=0;y<q.length;y++)q[y].cancel();w.__reactViewTransition===C&&(w.__reactViewTransition=null),u()}),C}catch{return l(),a(),r(),null}}function Ll(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Ll.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:R({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Ll.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),l=[],a=0;a<n.length;a++){var i=n[a].effect;i!==null&&i.target===e&&i.pseudoElement===t&&l.push(n[a])}return l},Ll.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Wm(e){return{name:e,group:new Ll("group",e),imagePair:new Ll("image-pair",e),old:new Ll("old",e),new:new Ll("new",e)}}function Vt(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Vt.prototype.addEventListener=function(e,t,n){var l=null,a=null;if(!(n!=null&&typeof n!="boolean"&&(l=n.signal||null,l!==null&&l.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(Pm(i,e,t,n)===-1){var r=this,u=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(u=function(f){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,f):t.handleEvent(f)}),l!==null&&(a=r.removeEventListener.bind(r,e,t,n),l.addEventListener("abort",a,{once:!0}),a=l.removeEventListener.bind(l,"abort",a)),l=wa(n),i.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:u,cleanup:a}),_(this._fragmentFiber.child,!1,Sx,e,u,l)}this._eventListeners=i}};function Sx(e,t,n,l){return F(e).addEventListener(t,n,l),!1}Vt.prototype.removeEventListener=function(e,t,n){var l=this._eventListeners;if(l!==null&&(t=Pm(l,e,t,n),t!==-1)){var a=l[t];n=a.attachedListener;var i=a.cleanup;a=wa(a.optionsOrUseCapture),_(this._fragmentFiber.child,!1,Ax,e,n,a),l.splice(t,1),i!==null&&i()}};function Ax(e,t,n,l){return F(e).removeEventListener(t,n,l),!1}function wa(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Im(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Pm(e,t,n,l){if(e.length===0)return-1;l=Im(l);for(var a=0;a<e.length;a++){var i=e[a];if(i.type===t&&i.listener===n&&Im(i.optionsOrUseCapture)===l)return a}return-1}Vt.prototype.dispatchEvent=function(e){var t=E(this._fragmentFiber);if(t===null)return!0;t=F(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var l=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var i=n[a];l.addEventListener(i.type,i.attachedListener,wa(i.optionsOrUseCapture))}if(t.appendChild(l),e=l.dispatchEvent(e),n)for(a=0;a<n.length;a++)i=n[a],l.removeEventListener(i.type,i.attachedListener,wa(i.optionsOrUseCapture));return t.removeChild(l),e}return t.dispatchEvent(e)},Vt.prototype.focus=function(e){_(this._fragmentFiber.child,!0,ep,e,void 0,void 0)};function ep(e,t){return e.tag===6?!1:(e=F(e),Ux(e,t))}Vt.prototype.focusLast=function(e){var t=[];_(this._fragmentFiber.child,!0,Tu,t,void 0,void 0);for(var n=t.length-1;0<=n&&!ep(t[n],e);n--);};function Tu(e,t){return t.push(e),!1}Vt.prototype.blur=function(){var e=E(this._fragmentFiber);e!==null&&(e=F(e),e=bi(e).activeElement,e!==null&&_(this._fragmentFiber.child,!1,jx,e,void 0,void 0))};function jx(e,t){return e.tag===6?!1:(e=F(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Vt.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),_(this._fragmentFiber.child,!1,Tx,e,void 0,void 0)};function Tx(e,t){return e.tag===6||(e=F(e),t.observe(e)),!1}Vt.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),_(this._fragmentFiber.child,!1,Cx,e,void 0,void 0);for(var n=t=0;n<on.length;n++){var l=on[n];l.fragmentInstance===this&&l.observer===e?e.unobserve(l.instance):on[t++]=l}on.length=t}};function Cx(e,t){return e.tag===6||(e=F(e),t.unobserve(e)),!1}var on=[],Cu=!1;function Dx(e,t,n){on.push({fragmentInstance:e,observer:t,instance:n}),Cu||(Cu=!0,qx(function(){Cu=!1;var l=on;on=[];for(var a=0;a<l.length;a++){var i=l[a];i.observer.unobserve(i.instance)}}))}Vt.prototype.getClientRects=function(){var e=[];return _(this._fragmentFiber.child,!1,Mx,e,void 0,void 0),e};function Mx(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=F(e),t.push.apply(t,e.getClientRects());return!1}Vt.prototype.getRootNode=function(e){var t=E(this._fragmentFiber);return t===null?this:F(t).getRootNode(e)},Vt.prototype.compareDocumentPosition=function(e){var t=E(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];_(this._fragmentFiber.child,!1,Tu,n,void 0,void 0);var l=F(t);if(n.length===0){if(n=l,me(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var a=l=n.compareDocumentPosition(e);return n===e?a=Node.DOCUMENT_POSITION_CONTAINS:l&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=ge(t)[1],n===null?a=Node.DOCUMENT_POSITION_PRECEDING:(e=F(n).compareDocumentPosition(e),a=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=F(n[0]),a=F(n[n.length-1]);var i=me(this._fragmentFiber)?t.parentElement:l;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;l=i.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),u=a.compareDocumentPosition(e),f=r&Node.DOCUMENT_POSITION_CONTAINED_BY||u&Node.DOCUMENT_POSITION_CONTAINED_BY;return u=l&&i&&r&Node.DOCUMENT_POSITION_FOLLOWING&&u&Node.DOCUMENT_POSITION_PRECEDING,t=l&&t===e||i&&a===e||f||u?Node.DOCUMENT_POSITION_CONTAINED_BY:!l&&t===e||!i&&a===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Ox(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Ox(e,t,n,l,a){var i=xl(a);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!i)e:{for(;i!==null;){if(i.tag===7&&(i===t||i.alternate===t)){n=!0;break e}i=i.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=a.ownerDocument,a===i||a===i.documentElement||a===i.body;e:{for(i=t,t=E(t);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==t&&i.alternate!==t)){i=!0;break e}i=i.return}i=!1}return i}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!i)&&!(t=i===n)&&(t=B(n,i,M),t===null?t=!1:(_(t,!0,g,i,n),i=ne,ne=null,t=i!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!i)&&!(t=i===l)&&(t=B(l,i,M),t===null?t=!1:(_(t,!0,L,i,l),i=ne,k=ne=null,t=i!==null)),t):!1}function tp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Vt.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(d(566));var t=[];_(this._fragmentFiber.child,!1,Tu,t,void 0,void 0);var n=e!==!1;if(t.length===0){var l=ge(this._fragmentFiber);if(l=n?l[1]||l[0]||E(this._fragmentFiber):l[0]||l[1],l===null)return;if(l.tag===6){e=F(l),tp(e,n);return}if(l=F(l),l.nodeType!==9){if(l.nodeType===11){n="host"in l?l.host:null,n!==null&&n.scrollIntoView(e);return}l.scrollIntoView(e)}}for(l=n?t.length-1:0;l!==(n?-1:t.length);){var a=t[l];a.tag===6?(a=F(a),tp(a,n)):F(a).scrollIntoView(e),l+=n?-1:1}};function zx(e,t){return e=F(e),np(e,t),!1}function np(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function lp(e,t){var n=t._eventListeners;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l];e.addEventListener(a.type,a.attachedListener,wa(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(i){for(var r=0,u=0;u<on.length;u++){var f=on[u];(f.fragmentInstance!==t||f.observer!==i||f.instance!==e)&&(on[r++]=f)}on.length=r,i.observe(e)}),np(e,t))}function Bx(e,t){var n=t._eventListeners;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l];e.removeEventListener(a.type,a.attachedListener,wa(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(i){typeof i.rootMargin=="string"?Dx(t,i,e):i.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Du(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Du(n),Ri(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Fx(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[La])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Pt(e.nextSibling),e===null)break}return null}function Lx(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Pt(e.nextSibling),e===null))return null;return e}function ap(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Pt(e.nextSibling),e===null))return null;return e}function Mu(e){return e.data==="$?"||e.data==="$~"}function Ou(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Rx(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var zu=null;function ip(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Pt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function sp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Ux(e,t){function n(){l=!0}if(e.ownerDocument.activeElement===e)return!0;var l=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return l}function qx(e){Xm(function(){Xm(function(t){return e(t)})})}function rp(e,t,n){switch(t=bi(n),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function op(e,t,n){for(var l in n){var a=n[l];n.hasOwnProperty(l)&&a!=null&&Ge(e,t,l,null,hx,a)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===cn&&(e.onclick=null),Ri(e)}function Bu(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ri(e)}var en=new Map,up=new Set;function vi(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Ln=ie.d;ie.d={f:Hx,r:Gx,D:Yx,C:Vx,L:Qx,m:Xx,X:Kx,S:Zx,M:Jx};function Hx(){var e=Ln.f(),t=Hs();return e||t}function Gx(e){var t=ql(e);t!==null&&t.tag===5&&t.type==="form"?df(t):Ln.r(e)}var _a=typeof document>"u"?null:document;function cp(e,t,n){var l=_a;if(l&&typeof t=="string"&&t){var a=Xt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),up.has(a)||(up.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),bt(t,"link",e),ct(t),l.head.appendChild(t)))}}function Yx(e){Ln.D(e),cp("dns-prefetch",e,null)}function Vx(e,t){Ln.C(e,t),cp("preconnect",e,t)}function Qx(e,t,n){Ln.L(e,t,n);var l=_a;if(l&&e&&t){var a='link[rel="preload"][as="'+Xt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Xt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Xt(n.imageSizes)+'"]')):a+='[href="'+Xt(e)+'"]';var i=a;switch(t){case"style":i=Ea(e);break;case"script":i=ka(e)}if(!(en.has(i)||(e=R({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),en.set(i,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(wi(i))||t==="script"&&l.querySelector(_i(i))))){var r=l.createElement("link");bt(r,"link",e),t==="style"&&(r[Li]=!0,r.onload=r.onerror=function(){_c(r)}),ct(r),l.head.appendChild(r)}}}function Xx(e,t){Ln.m(e,t);var n=_a;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Xt(l)+'"][href="'+Xt(e)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ka(e)}if(!en.has(i)&&(e=R({rel:"modulepreload",href:e},t),en.set(i,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(_i(i)))return}l=n.createElement("link"),bt(l,"link",e),ct(l),n.head.appendChild(l)}}}function Zx(e,t,n){Ln.S(e,t,n);var l=_a;if(l&&e){var a=Hl(l).hoistableStyles,i=Ea(e);t=t||"default";var r=a.get(i);if(!r){var u={loading:0,preload:null};if(r=l.querySelector(wi(i)))u.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},n),(n=en.get(i))&&Fu(e,n);var f=r=l.createElement("link");ct(f),bt(f,"link",e),f._p=new Promise(function(w,C){f.onload=w,f.onerror=C}),f.addEventListener("load",function(){u.loading|=1}),f.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Ks(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:u},a.set(i,r)}}}function Kx(e,t){Ln.X(e,t);var n=_a;if(n&&e){var l=Hl(n).hoistableScripts,a=ka(e),i=l.get(a);i||(i=n.querySelector(_i(a)),i||(e=R({src:e,async:!0},t),(t=en.get(a))&&Lu(e,t),i=n.createElement("script"),ct(i),bt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function Jx(e,t){Ln.M(e,t);var n=_a;if(n&&e){var l=Hl(n).hoistableScripts,a=ka(e),i=l.get(a);i||(i=n.querySelector(_i(a)),i||(e=R({src:e,async:!0,type:"module"},t),(t=en.get(a))&&Lu(e,t),i=n.createElement("script"),ct(i),bt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function dp(e,t,n,l){var a=(a=Qt.current)?vi(a):null;if(!a)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Ea(n.href),t=Hl(a).hoistableStyles,l=t.get(n),l||(l={type:"style",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ea(n.href);var i=Hl(a).hoistableStyles,r=i.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=a.querySelector(wi(e)))?i._p||(r.instance=i,r.state.loading=5):(i=en.get(e),i||(i={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},en.set(e,i)),$x(a,e,i,r.state))),t&&l===null)throw Error(d(528,""));return r}if(t&&l!==null)throw Error(d(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=ka(n),t=Hl(a).hoistableScripts,l=t.get(n),l||(l={type:"script",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Ea(e){return'href="'+Xt(e)+'"'}function wi(e){return'link[rel="stylesheet"]['+e+"]"}function fp(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function $x(e,t,n,l){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Li]!==!0){l.loading=1;return}}else t=e.createElement("link"),t[Li]=!0,t.onload=t.onerror=_c.bind(null,t),bt(t,"link",n),ct(t),e.head.appendChild(t);l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2})}function ka(e){return'[src="'+Xt(e)+'"]'}function _i(e){return"script[async]"+e}function mp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Xt(n.href)+'"]');if(l)return t.instance=l,ct(l),l;var a=R({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ct(l),bt(l,"style",a),Ks(l,n.precedence,e),t.instance=l;case"stylesheet":a=Ea(n.href);var i=e.querySelector(wi(a));if(i)return t.state.loading|=4,t.instance=i,ct(i),i;l=fp(n),(a=en.get(a))&&Fu(l,a),i=(e.ownerDocument||e).createElement("link"),ct(i);var r=i;return r._p=new Promise(function(u,f){r.onload=u,r.onerror=f}),bt(i,"link",l),t.state.loading|=4,Ks(i,n.precedence,e),t.instance=i;case"script":return i=ka(n.src),(a=e.querySelector(_i(i)))?(t.instance=a,ct(a),a):(l=n,(a=en.get(i))&&(l=R({},n),Lu(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),ct(a),bt(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ks(l,n.precedence,e));return t.instance}function Ks(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,r=0;r<l.length;r++){var u=l[r];if(u.dataset.precedence===t)i=u;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Fu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Lu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Js=null;function pp(e,t,n){if(Js===null){var l=new Map,a=Js=new Map;a.set(n,l)}else a=Js,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[La]||i[pt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var u=l.get(r);u?u.push(i):l.set(r,[i])}}return l}function Ru(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Wx(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function hp(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function xp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function gp(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function yp(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=gp(t),e.suspenseyImages.push(t)),e=eg.bind(e),t.decode().then(e,e))}function Ix(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Ea(l.href),i=t.querySelector(wi(a));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ei.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,ct(i);return}i=t.ownerDocument||t,l=fp(l),(a=en.get(a))&&Fu(l,a),i=i.createElement("link"),ct(i);var r=i;r._p=new Promise(function(u,f){r.onload=u,r.onerror=f}),bt(i,"link",l),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ei.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var $s=0;function Px(e,t){return e.stylesheets&&e.count===0&&Is(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&Is(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&$s===0&&($s=62500*gx());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Is(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>$s?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function bp(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Is(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Ei(){this.count--,bp(this)}function eg(){this.imgCount--,bp(this)}var Ws=null;function Is(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ws=new Map,t.forEach(tg,e),Ws=null,Ei.call(e))}function tg(e,t){if(!(t.state.loading&4)){var n=Ws.get(e);if(n)var l=n.get(null);else{n=new Map,Ws.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var r=a[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),l=r)}l&&n.set(null,l)}a=t.instance,r=a.getAttribute("data-precedence"),i=n.get(r)||l,i===l&&n.set(null,a),n.set(r,a),this.count++,l=Ei.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Na={$$typeof:re,Provider:null,Consumer:null,_currentValue:Se,_currentValue2:Se,_threadCount:0};function ng(e,t,n,l,a,i,r,u,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gr(0),this.hiddenUpdates=gr(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.transitionTypes=null,this.incompleteTransitions=new Map}function vp(e,t,n,l,a,i,r,u,f,w,C,q){return e=new ng(e,t,n,r,f,w,C,q,u),t=1,i===!0&&(t|=24),i=Tt(3,null,null,t),e.current=i,i.stateNode=e,t=Ir(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:n,cache:t},no(i),e}function wp(e){return e?(e=Wl,e):Wl}function _p(e,t,n,l,a,i){a=wp(a),l.context===null?l.context=a:l.pendingContext=a,l=Kn(t),l.payload={element:n},i=i===void 0?null:i,i!==null&&(l.callback=i),n=Jn(e,l,t),n!==null&&(Ot(n,e,t),ei(n,e,t))}function Ep(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Uu(e,t){Ep(e,t),(e=e.alternate)&&Ep(e,t)}function kp(e){if(e.tag===13||e.tag===31){var t=vl(e,67108864);t!==null&&Ot(t,e,67108864),Uu(e,67108864)}}function Np(e){if(e.tag===13||e.tag===31){var t=Yt();t=yr(t);var n=vl(e,t);n!==null&&Ot(n,e,t),Uu(e,t)}}var Sa=!0;function lg(e,t,n,l){var a=J.T;J.T=null;var i=ie.p;try{ie.p=2,qu(e,t,n,l)}finally{ie.p=i,J.T=a}}function ag(e,t,n,l){var a=J.T;J.T=null;var i=ie.p;try{ie.p=8,qu(e,t,n,l)}finally{ie.p=i,J.T=a}}function qu(e,t,n,l){if(Sa){var a=Hu(l);if(a===null)wu(e,t,l,Ps,n),Ap(e,l);else if(sg(a,e,t,n,l))l.stopPropagation();else if(Ap(e,l),t&4&&-1<ig.indexOf(e)){for(;a!==null;){var i=ql(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=hl(i.pendingLanes);if(r!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;r;){var f=1<<31-Ft(r);u.entanglements[1]|=f,r&=~f}vn(i),(Le&6)===0&&(Rs=zt()+500,xi(0))}}break;case 31:case 13:u=vl(i,2),u!==null&&Ot(u,i,2),Hs(),Uu(i,2)}if(i=Hu(l),i===null&&wu(e,t,l,Ps,n),i===a)break;a=i}a!==null&&l.stopPropagation()}else wu(e,t,l,null,n)}}function Hu(e){return e=Nr(e),Gu(e)}var Ps=null;function Gu(e){if(Ps=null,e=xl(e),e!==null){var t=H(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=I(t),e!==null)return e;e=null}else if(n===31){if(e=z(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ps=e,null}function Sp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gh()){case cc:return 2;case dc:return 8;case Mi:case yh:return 32;case fc:return 268435456;default:return 32}default:return 32}}var Yu=!1,rl=null,ol=null,ul=null,ki=new Map,Ni=new Map,cl=[],ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ap(e,t){switch(e){case"focusin":case"focusout":rl=null;break;case"dragenter":case"dragleave":ol=null;break;case"mouseover":case"mouseout":ul=null;break;case"pointerover":case"pointerout":ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ni.delete(t.pointerId)}}function Si(e,t,n,l,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},t!==null&&(t=ql(t),t!==null&&kp(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function sg(e,t,n,l,a){switch(t){case"focusin":return rl=Si(rl,e,t,n,l,a),!0;case"dragenter":return ol=Si(ol,e,t,n,l,a),!0;case"mouseover":return ul=Si(ul,e,t,n,l,a),!0;case"pointerover":var i=a.pointerId;return ki.set(i,Si(ki.get(i)||null,e,t,n,l,a)),!0;case"gotpointercapture":return i=a.pointerId,Ni.set(i,Si(Ni.get(i)||null,e,t,n,l,a)),!0}return!1}function jp(e){var t=xl(e.target);if(t!==null){var n=H(t);if(n!==null){if(t=n.tag,t===13){if(t=I(n),t!==null){e.blockedOn=t,bc(e.priority,function(){Np(n)});return}}else if(t===31){if(t=z(n),t!==null){e.blockedOn=t,bc(e.priority,function(){Np(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function er(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hu(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);kr=l,n.target.dispatchEvent(l),kr=null}else return t=ql(n),t!==null&&kp(t),e.blockedOn=n,!1;t.shift()}return!0}function Tp(e,t,n){er(e)&&n.delete(t)}function rg(){Yu=!1,rl!==null&&er(rl)&&(rl=null),ol!==null&&er(ol)&&(ol=null),ul!==null&&er(ul)&&(ul=null),ki.forEach(Tp),Ni.forEach(Tp)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Yu||(Yu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,rg)))}var nr=null;function Cp(e){nr!==e&&(nr=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){nr===e&&(nr=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if(Gu(l||n)===null)continue;break}var i=ql(n);i!==null&&(e.splice(t,3),t-=3,ko(i,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function Aa(e){function t(f){return tr(f,e)}rl!==null&&tr(rl,e),ol!==null&&tr(ol,e),ul!==null&&tr(ul,e),ki.forEach(t),Ni.forEach(t);for(var n=0;n<cl.length;n++){var l=cl[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<cl.length&&(n=cl[0],n.blockedOn===null);)jp(n),n.blockedOn===null&&cl.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],i=n[l+1],r=a[jt]||null;if(typeof i=="function")r||Cp(n);else if(r){var u=null;if(i&&i.hasAttribute("formAction")){if(a=i,r=i[jt]||null)u=r.formAction;else if(Gu(a)!==null)continue}else u=r.action;typeof u=="function"?n[l+1]=u:(n.splice(l,3),l-=3),Cp(n)}}}function Dp(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Vu(e){this._internalRoot=e}lr.prototype.render=Vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var n=t.current,l=Yt();_p(n,l,e,t,null,null)},lr.prototype.unmount=Vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_p(e.current,2,null,e,null,null),Hs(),t[Ul]=null}};function lr(e){this._internalRoot=e}lr.prototype.unstable_scheduleHydration=function(e){if(e){var t=yc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<cl.length&&t!==0&&t<cl[n].priority;n++);cl.splice(n,0,e),n===0&&jp(e)}};var Mp=m.version;if(Mp!=="19.3.1")throw Error(d(527,Mp,"19.3.1"));ie.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=oe(t),e=e!==null?K(e):null,e=e===null?null:e.stateNode,e};var og={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:J,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ar=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ar.isDisabled&&ar.supportsFiber)try{za=ar.inject(og),Bt=ar}catch{}}return ji.createRoot=function(e,t){if(!G(e))throw Error(d(299));var n=!1,l="",a=wf,i=_f,r=Ef;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=vp(e,1,!1,null,null,n,l,null,a,i,r,Dp),e[Ul]=t.current,vu(e),new Vu(t)},ji.hydrateRoot=function(e,t,n){if(!G(e))throw Error(d(299));var l=!1,a="",i=wf,r=_f,u=Ef,f=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError),n.formState!==void 0&&(f=n.formState)),t=vp(e,1,!0,t,n??null,l,a,f,i,r,u,Dp),t.context=wp(null),n=t.current,l=Yt(),l=yr(l),a=Kn(l),a.callback=null,Jn(n,a,l),n=l,t.current.lanes=n,Fa(t,n),vn(t),e[Ul]=t.current,vu(e),new lr(t)},ji.version="19.3.1",ji}var Yp;function bg(){if(Yp)return Zu.exports;Yp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(m){console.error(m)}}return o(),Zu.exports=yg(),Zu.exports}var vg=bg();const wg=[{id:"tkinter_window",moduleId:"module_tkinter",title:"3. Первое окно: tk.Tk(), Label, Button и реакция на нажатие",icon:"AppWindow",shortDesc:"Программа перестаёт быть списком и начинает ждать событий",theory:{story:{letter:`ВХОДЯЩЕЕ СООБЩЕНИЕ
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

window.mainloop()`,tests:[{inputs:[],expected:"OK_TK_WINDOW"}],codeCheck:o=>/tk\.Tk\s*\(/.test(o)?/tk\.Label\s*\(/.test(o)?/tk\.Button\s*\(/.test(o)?/command\s*=\s*check_connection\b/.test(o)?/\.mainloop\s*\(/.test(o)?null:{passed:!1,message:"Не забудь вызвать window.mainloop() в конце."}:{passed:!1,message:"Передай command=check_connection (без скобок!) в кнопку."}:{passed:!1,message:"Создай кнопку tk.Button."}:{passed:!1,message:"Создай надпись tk.Label."}:{passed:!1,message:"Создай главное окно window = tk.Tk()."},testCode:`
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

window.mainloop()`,tests:[{inputs:[],expected:"OK_GUESS_GAME"}],codeCheck:o=>/tk\.Entry\s*\(/.test(o)?/entry\.get\s*\(/.test(o)?/int\s*\(/.test(o)?/global\s+tries\b/.test(o)?null:{passed:!1,message:"Не забудь global tries внутри функции check."}:{passed:!1,message:"Преобразуй строку в число через int()."}:{passed:!1,message:"Используй entry.get() для считывания ответа."}:{passed:!1,message:"Создай поле ввода tk.Entry."},testCode:`
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

window.mainloop()`,tests:[{inputs:[],expected:"OK_CONVERTER"}],codeCheck:o=>o.includes(".pack(")?{passed:!1,message:"Не используй pack()! В этом уроке верстка только на grid()."}:o.includes(".grid(")?/float\s*\(/.test(o)?null:{passed:!1,message:"Используй float() для считывания сумм и курса валют."}:{passed:!1,message:"Используй метод .grid() для размещения виджетов."},testCode:`
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

window.mainloop()`,tests:[{inputs:[],expected:"OK_TODO_LIST"}],codeCheck:o=>/tk\.Listbox\s*\(/.test(o)?/listbox\.delete\s*\(/.test(o)?/listbox\.insert\s*\(/.test(o)?/listbox\.curselection\s*\(/.test(o)?null:{passed:!1,message:"Используй listbox.curselection() для получения выбранной задачи."}:{passed:!1,message:"Вставляй задачи через listbox.insert('end', ...)."}:{passed:!1,message:"В refresh() вызывай listbox.delete(0, 'end')."}:{passed:!1,message:"Создай виджет tk.Listbox."},testCode:`
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

window.mainloop()`,tests:[{inputs:[],expected:"OK_HEROES_TAVERN"}],codeCheck:o=>/import\s+json\b/.test(o)?/json\.dump\s*\(/.test(o)?/json\.load\s*\(/.test(o)?/FileNotFoundError/.test(o)?null:{passed:!1,message:"Обработай FileNotFoundError в блоке try/except функции load_heroes."}:{passed:!1,message:"Используй json.load(...) для загрузки героев."}:{passed:!1,message:"Используй json.dump(...) для сохранения героев."}:{passed:!1,message:"Импортируй модуль json."},testCode:`
import tkinter
entries = [w for w in tkinter.WIDGETS if w.kind == "Entry"]
buttons = [w for w in tkinter.WIDGETS if w.kind == "Button"]
assert len(entries) >= 3, "Должно быть 3 поля Entry (имя, класс, уровень)"
assert len(buttons) >= 1, "Кнопка добавления героя не найдена"
entries[0].text = "Маг"
entries[1].text = "Волшебник"
entries[2].text = "10"
buttons[0].invoke()
assert len(heroes) >= 1, "Герой не добавлен в heroes"
assert len(open("heroes.json").read()) > 0, "heroes.json не сохранен"
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

window.mainloop()`,tests:[{inputs:[],expected:"OK_MUSIC_PLAYER"}],codeCheck:o=>/import\s+os\b/.test(o)?/import\s+pygame\b/.test(o)?/pygame\.mixer\.init/.test(o)?/def\s+get_tracks\b/.test(o)?/tk\.Scale\b/.test(o)?null:{passed:!1,message:"Создай виджет tk.Scale для громкости."}:{passed:!1,message:"Объяви функцию get_tracks(path)."}:{passed:!1,message:"Вызови pygame.mixer.init() для инициализации звука."}:{passed:!1,message:"Импортируй модуль pygame."}:{passed:!1,message:"Импортируй модуль os."},testCode:`import tkinter
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
print("OK_MUSIC_PLAYER")`,validate:(o,m)=>m.includes("OK_MUSIC_PLAYER")?{passed:!0,message:"Браво! Музыкальный плеер ProTeam полностью собран и играет треки! 🎵🎧📻"}:{passed:!1,message:"Проверь функции get_tracks, play_index, pause, а также Scale и кнопки управления."}}}],rr=[{id:"module_intro",title:"1. Первые шаги и вывод данных",description:"Знакомство с Python, функция print(), отображение строк и чисел",icon:"Terminal",color:"#2F6FD0",lessons:[{id:"print_hello",moduleId:"module_intro",title:"Функция print() и первая программа",icon:"Terminal",shortDesc:"Учимся выводить приветствие и фразы в терминал",theory:{summary:`Компьютер сам по себе не умеет угадывать мысли. Если ты хочешь, чтобы он что-то показал тебе на экране, ему нужно дать прямую команду.

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
Я начинаю программировать`}],codeCheck:o=>(o.match(/\bprint\s*\(/g)||[]).length<2?{passed:!1,message:"Используй два отдельных вызова функции print() для вывода каждой строки."}:null,validate:(o,m,h)=>{if(!o.includes("print"))return{passed:!1,message:"В коде не найдена функция print().",hint:'Используй команду print("...") для вывода текста.'};const d=m.toLowerCase(),G=d.includes("привет, python")||d.includes("привет, python!"),H=d.includes("начинаю программировать");return G&&H?{passed:!0,message:"Отлично! Твоя первая программа на Python успешно вывела текст в консоль! 🎉"}:{passed:!1,message:"Вывод не полностью совпадает с заданием.",hint:"Проверь точный текст: 'Привет, Python!' и 'Я начинаю программировать'."}}}},{id:"print_arguments",moduleId:"module_intro",title:"Несколько аргументов в print()",icon:"Layers",shortDesc:"Вывод нескольких значений через запятую и разделители",theory:{summary:`В игре ты можешь собирать инвентарь: меч, щит и зелье. В функцию print() тоже можно положить сразу несколько предметов через запятую.

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
<class 'bool'>`}],codeCheck:o=>/\btype\s*\(/.test(o)?!/\bage\b/.test(o)||!/\bheight\b/.test(o)||!/\bis_student\b/.test(o)?{passed:!1,message:"Создай переменные age, height и is_student."}:null:{passed:!1,message:"Используй функцию type(...) для вывода типов."},validate:(o,m)=>{const h=m.includes("int"),d=m.includes("float"),G=m.includes("bool");return h&&d&&G?{passed:!0,message:"Отлично! Ты познакомился с 4 главными типами данных Python! 🎯"}:{passed:!1,message:"В выводе должны присутствовать типы int, float и bool.",hint:"Используй вызовы print(type(age)), print(type(height)), print(type(is_student))."}}}}]},{id:"module_io",title:"3. Ввод данных: функция input()",description:"Взаимодействие с пользователем, чтение с клавиатуры и приведение типов",icon:"Keyboard",color:"#0A7A50",lessons:[{id:"input_strings",moduleId:"module_io",title:"Функция input() — ввод строки",icon:"Keyboard",shortDesc:"Спрашиваем имя у пользователя и отвечаем ему",theory:{summary:"Функция input() останавливает выполнение программы и ждёт, пока пользователь напечатает текст в консоли и нажмет Enter.",keyRule:"input() ВСЕГДА возвращает строку (str)! Даже если пользователь ввёл цифры, они будут строкой.",sections:[{heading:"Как использовать input()",text:"В скобках input() можно передать подсказку — текст вопроса, который увидит пользователь перед вводом.",codeExample:{title:"Пример диалога",code:`name = input("Как тебя зовут? ")
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
assert square(10) == 100, "square(10) должна возвращать 100"`,validate:(o,m)=>!o.includes("def")||!o.includes("return")?{passed:!1,message:"Функция должна быть объявлена через def и возвращать значение через return."}:m.trim()==="36"||m.includes("36")?{passed:!0,message:"Великолепно! Ты создал свою первую функцию в Python! 🎯"}:{passed:!1,message:"Ожидался вывод: 36"}}}]},{id:"module_tkinter",title:"9. Графический интерфейс с Tkinter",description:"Создание оконных приложений (GUI): главное окно Tk(), надписи Label, кнопки Button, поля ввода Entry, Listbox и JSON",icon:"AppWindow",color:"#5636E0",lessons:wg}];function _g(o){for(const m of rr)for(const h of m.lessons)if(h.id===o)return h;return null}function lc(){const o=[];for(const m of rr)for(const h of m.lessons)o.push(h);return o}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),kg=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(m,h,d)=>d?d.toUpperCase():h.toLowerCase()),Vp=o=>{const m=kg(o);return m.charAt(0).toUpperCase()+m.slice(1)},ih=(...o)=>o.filter((m,h,d)=>!!m&&m.trim()!==""&&d.indexOf(m)===h).join(" ").trim(),Ng=o=>{for(const m in o)if(m.startsWith("aria-")||m==="role"||m==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Sg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=le.forwardRef(({color:o="currentColor",size:m=24,strokeWidth:h=2,absoluteStrokeWidth:d,className:G="",children:H,iconNode:I,...z},$)=>le.createElement("svg",{ref:$,...Sg,width:m,height:m,stroke:o,strokeWidth:d?Number(h)*24/Number(m):h,className:ih("lucide",G),...!H&&!Ng(z)&&{"aria-hidden":"true"},...z},[...I.map(([oe,K])=>le.createElement(oe,K)),...Array.isArray(H)?H:[H]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=(o,m)=>{const h=le.forwardRef(({className:d,...G},H)=>le.createElement(Ag,{ref:H,iconNode:m,className:ih(`lucide-${Eg(Vp(o))}`,`lucide-${o}`,d),...G}));return h.displayName=Vp(o),h};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]],sh=ye("app-window",jg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Cg=ye("arrow-left",Tg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Wu=ye("arrow-right",Dg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],cr=ye("book-open",Mg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],zg=ye("box",Og);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Fg=ye("calculator",Bg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],dr=ye("check",Lg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ja=ye("chevron-down",Rg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],qg=ye("circle-alert",Ug);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Da=ye("circle-check",Hg);/**
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
 */const Xg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],rh=ye("circle-question-mark",Xg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Qp=ye("circle-x",Zg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],ml=ye("code-xml",Kg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Ci=ye("copy",Jg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],Ca=ye("corner-down-left",$g);/**
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
 */const l1=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Xp=ye("file-text",l1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],ac=ye("folder-open",a1);/**
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
 */const h1=[["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M9 19h6",key:"456am0"}]],x1=ye("list-filter",h1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]],y1=ye("list-ordered",g1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],v1=ye("mail",b1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],_1=ye("message-square",w1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]],k1=ye("mouse-pointer-click",E1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],S1=ye("music",N1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],j1=ye("package",A1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],C1=ye("panels-top-left",T1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Rl=ye("play",D1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Zp=ye("plus",M1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],z1=ye("repeat",O1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],ic=ye("rotate-ccw",B1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Ma=ye("search",F1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ti=ye("sparkles",L1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],sc=ye("square",R1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Kp=ye("target",U1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],fr=ye("terminal",q1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Di=ye("trash-2",H1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],oh=ye("triangle-alert",G1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],uh=ye("trophy",Y1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Q1=ye("upload",V1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Z1=ye("volume-2",X1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],J1=ye("volume-x",K1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ec=ye("x",$1);let Ta=null,fl=!0;function mr(){if(typeof window>"u")return null;if(!Ta){const o=window.AudioContext||window.webkitAudioContext;o&&(Ta=new o)}return Ta&&Ta.state==="suspended"&&Ta.resume(),Ta}function W1(o){return fl=!fl,fl}function I1(){return fl}function Rn(){if(fl)try{const o=mr();if(!o)return;const m=o.createOscillator(),h=o.createGain();m.type="sine",m.frequency.setValueAtTime(700,o.currentTime),m.frequency.exponentialRampToValueAtTime(280,o.currentTime+.05),h.gain.setValueAtTime(.07,o.currentTime),h.gain.exponentialRampToValueAtTime(.001,o.currentTime+.05),m.connect(h),h.connect(o.destination),m.start(),m.stop(o.currentTime+.05)}catch{}}function Iu(){if(fl)try{const o=mr();if(!o)return;const m=o.createOscillator(),h=o.createGain();m.type="sawtooth",m.frequency.setValueAtTime(160,o.currentTime),m.frequency.exponentialRampToValueAtTime(50,o.currentTime+.25),h.gain.setValueAtTime(.2,o.currentTime),h.gain.exponentialRampToValueAtTime(.001,o.currentTime+.25),m.connect(h),h.connect(o.destination),m.start(),m.stop(o.currentTime+.25)}catch{}}function sr(){if(fl)try{const o=mr();if(!o)return;[523.25,659.25,783.99,1046.5].forEach((h,d)=>{const G=o.currentTime+d*.09,H=o.createOscillator(),I=o.createGain();H.type="triangle",H.frequency.setValueAtTime(h,G),I.gain.setValueAtTime(.14,G),I.gain.exponentialRampToValueAtTime(.001,G+.45),H.connect(I),I.connect(o.destination),H.start(G),H.stop(G+.45)})}catch{}}function wn(){if(fl)try{const o=mr();if(!o)return;const m=o.createOscillator(),h=o.createGain();m.type="sine";const d=o.currentTime;m.frequency.setValueAtTime(800,d),m.frequency.exponentialRampToValueAtTime(1400,d+.04),h.gain.setValueAtTime(.15,d),h.gain.exponentialRampToValueAtTime(.001,d+.05),m.connect(h),h.connect(o.destination),m.start(d),m.stop(d+.05)}catch{}}const P1=({currentTab:o,onSelectTab:m,solvedCount:h,totalCount:d,soundEnabled:G,onToggleSound:H,onResetProgress:I})=>s.jsx("nav",{className:"bg-white border-b border-[#E3E3E9] sticky top-0 z-40 px-3 md:px-6 py-3 font-mono select-none",children:s.jsxs("div",{className:"max-w-[1360px] mx-auto flex items-center justify-between gap-4 flex-wrap",children:[s.jsxs("div",{onClick:()=>{wn(),m("lessons")},className:"flex items-center gap-3 cursor-pointer group",children:[s.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-br from-[#0A54C4] via-[#5636E0] to-[#F5A800] p-0.5 shadow-xs",children:s.jsx("div",{className:"w-full h-full bg-[#12121A] rounded-[10px] flex items-center justify-center",children:s.jsx(fr,{className:"w-4 h-4 text-[#4FF0A7] group-hover:scale-110 transition-transform"})})}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsx("span",{className:"text-[16px] font-black tracking-tight text-[#0B0B0F]",children:"Python"}),s.jsx("span",{className:"text-[16px] font-black tracking-tight text-[#0A54C4]",children:"Станция"})]}),s.jsx("div",{className:"text-[10px] font-bold text-[#63636E] uppercase tracking-wider",children:"Курс и Справочник"})]})]}),s.jsxs("div",{className:"flex items-center gap-1 bg-[#F1F1F4] p-1 rounded-xl border border-[#E3E3E9]",children:[s.jsxs("button",{onClick:()=>{wn(),m("lessons")},className:`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${o==="lessons"?"bg-white text-[#0B0B0F] shadow-xs":"text-[#63636E] hover:text-[#0B0B0F]"}`,children:[s.jsx(cr,{className:"w-3.5 h-3.5 text-[#0A54C4]"}),s.jsx("span",{children:"Уроки"})]}),s.jsxs("button",{onClick:()=>{wn(),m("handbook")},className:`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${o==="handbook"?"bg-white text-[#0B0B0F] shadow-xs":"text-[#63636E] hover:text-[#0B0B0F]"}`,children:[s.jsx(Ma,{className:"w-3.5 h-3.5 text-[#B0700C]"}),s.jsx("span",{children:"Справочник функций"})]}),s.jsxs("button",{onClick:()=>{wn(),m("sandbox")},className:`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${o==="sandbox"?"bg-white text-[#0B0B0F] shadow-xs":"text-[#63636E] hover:text-[#0B0B0F]"}`,children:[s.jsx(ml,{className:"w-3.5 h-3.5 text-[#0A7A50]"}),s.jsx("span",{children:"Песочница"})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("div",{className:"hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F1F1F4] border border-[#E3E3E9] text-[11.5px] font-bold text-[#63636E]",children:[s.jsx(uh,{className:"w-3.5 h-3.5 text-[#F5A800]"}),s.jsxs("span",{children:["Пройдено: ",s.jsxs("strong",{className:"text-[#0B0B0F]",children:[h,"/",d]})]})]}),s.jsx("button",{onClick:H,className:"p-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#63636E] hover:text-[#0B0B0F] transition-colors cursor-pointer",title:G?"Выключить звук":"Включить звук",children:G?s.jsx(Z1,{className:"w-4 h-4 text-[#0A7A50]"}):s.jsx(J1,{className:"w-4 h-4"})}),s.jsx("button",{onClick:I,className:"p-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#63636E] hover:text-[#D4126C] transition-colors cursor-pointer",title:"Сбросить прогресс",children:s.jsx(ic,{className:"w-4 h-4"})})]})]})}),ey={Terminal:fr,Layers:p1,Box:zg,RotateCcw:ic,Cpu:Ig,Keyboard:f1,Hash:o1,Calculator:Fg,GitBranch:s1,ListFilter:x1,ListOrdered:y1,PlusCircle:Qg,Repeat:z1,PlayCircle:Yg,Code2:ml,AppWindow:sh,Layout:C1,MousePointerClick:k1,Music:S1},ty=({solvedLessons:o,onSelectLesson:m,onOpenHandbook:h,onOpenSandbox:d})=>{const G=lc(),H=G.length,I=o.length,z=H>0?Math.round(I/H*100):0;return s.jsxs("div",{className:"max-w-[1360px] mx-auto p-3 md:p-6 space-y-6 font-mono select-none",children:[s.jsxs("div",{className:"bg-gradient-to-br from-[#0B0B14] via-[#161626] to-[#251A4A] text-white p-6 md:p-8 rounded-3xl border border-[#2C2C3A] shadow-lg relative overflow-hidden",children:[s.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-[#5636E0]/20 rounded-full blur-3xl pointer-events-none"}),s.jsx("div",{className:"absolute bottom-0 left-1/3 w-72 h-72 bg-[#0A54C4]/20 rounded-full blur-3xl pointer-events-none"}),s.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",children:[s.jsxs("div",{className:"space-y-3 max-w-2xl",children:[s.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-[11px] font-bold tracking-wide backdrop-blur-xs",children:[s.jsx(Ti,{className:"w-3.5 h-3.5 text-[#F5A800]"}),s.jsx("span",{children:"Интерактивная станция Python 3"})]}),s.jsx("h1",{className:"text-[24px] md:text-[32px] font-black tracking-tight leading-tight",children:"Практический курс Python с нуля"}),s.jsx("p",{className:"text-[13px] md:text-[14px] text-[#A0A0B2] leading-relaxed",children:"Теория с живыми примерами и мгновенная проверка кода в браузере. Выполняй задания, получай подсказки и изучай встроенные функции."}),s.jsxs("div",{className:"flex items-center gap-3 pt-2 flex-wrap",children:[s.jsxs("button",{onClick:()=>{wn();const $=G.find(oe=>!o.includes(oe.id))||G[0];$&&m($.id)},className:"px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0A54C4] to-[#0A7A50] text-white font-black text-[13px] flex items-center gap-2 hover:brightness-110 active:scale-98 transition-all cursor-pointer shadow-md",children:[s.jsx(Rl,{className:"w-4 h-4 fill-white"}),s.jsx("span",{children:I===0?"Начать первый урок":"Продолжить обучение"})]}),s.jsxs("button",{onClick:()=>{wn(),h()},className:"px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-[13px] flex items-center gap-2 transition-all cursor-pointer border border-white/10",children:[s.jsx(Ma,{className:"w-4 h-4 text-[#F5A800]"}),s.jsx("span",{children:"Поиск по функциям"})]}),s.jsxs("button",{onClick:()=>{wn(),d()},className:"px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-[13px] flex items-center gap-2 transition-all cursor-pointer border border-white/10",children:[s.jsx(ml,{className:"w-4 h-4 text-[#4FF0A7]"}),s.jsx("span",{children:"Песочница Python"})]})]})]}),s.jsxs("div",{className:"w-full md:w-72 bg-white/10 backdrop-blur-md border border-white/15 p-5 rounded-2xl space-y-3.5",children:[s.jsxs("div",{className:"flex items-center justify-between text-[12px] font-bold",children:[s.jsxs("span",{className:"flex items-center gap-1.5 text-white/90",children:[s.jsx(uh,{className:"w-4 h-4 text-[#F5A800]"}),s.jsx("span",{children:"Твой прогресс"})]}),s.jsxs("span",{className:"text-[#4FF0A7] font-black",children:[z,"%"]})]}),s.jsx("div",{className:"w-full h-2.5 bg-black/40 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-[#0A54C4] to-[#4FF0A7] transition-all duration-500 rounded-full",style:{width:`${z}%`}})}),s.jsxs("div",{className:"text-[11.5px] text-white/70 flex items-center justify-between",children:[s.jsx("span",{children:"Решено заданий:"}),s.jsxs("strong",{className:"text-white",children:[I," из ",H]})]})]})]})]}),s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("h2",{className:"text-[20px] font-black text-[#0B0B0F]",children:"Программа уроков"}),s.jsxs("span",{className:"text-[12px] font-bold text-[#63636E]",children:[rr.length," модулей · ",H," уроков с проверкой"]})]}),s.jsx("div",{className:"space-y-5",children:rr.map(($,oe)=>{const K=$.lessons.filter(E=>o.includes(E.id)).length,_=K===$.lessons.length;return s.jsxs("div",{className:"bg-white border-[1.5px] border-[#E3E3E9] rounded-2xl p-5 md:p-6 shadow-xs space-y-4",children:[s.jsxs("div",{className:"flex items-center justify-between gap-3 flex-wrap border-b border-[#E3E3E9] pb-3.5",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-xl text-white flex items-center justify-center font-black text-[15px] shadow-xs",style:{backgroundColor:$.color},children:oe+1}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-[17px] font-black text-[#0B0B0F]",children:$.title}),s.jsx("p",{className:"text-[12px] text-[#63636E]",children:$.description})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("span",{className:"text-[11.5px] font-bold text-[#63636E] bg-[#F1F1F4] px-3 py-1 rounded-lg",children:[K," / ",$.lessons.length," пройдено"]}),_&&s.jsxs("span",{className:"text-[11.5px] font-extrabold text-[#0A7A50] bg-[#0A7A50]/15 px-2.5 py-1 rounded-lg flex items-center gap-1",children:[s.jsx(Da,{className:"w-3.5 h-3.5"}),"Завершен"]})]})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:$.lessons.map(E=>{const me=o.includes(E.id),ge=ey[E.icon]||ml;return s.jsxs("div",{onClick:()=>{wn(),m(E.id)},className:`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between group ${me?"bg-[#F7FBF8] border-[#0A7A50]/30 hover:border-[#0A7A50]":"bg-[#F7F7FA] border-[#E3E3E9] hover:bg-white hover:border-[#0A54C4] hover:shadow-xs"}`,children:[s.jsxs("div",{className:"space-y-2.5",children:[s.jsxs("div",{className:"flex items-start justify-between gap-2",children:[s.jsx("div",{className:"w-8 h-8 rounded-lg bg-white border border-[#E3E3E9] flex items-center justify-center group-hover:border-[#0A54C4] transition-colors shadow-2xs",children:s.jsx(ge,{className:"w-4 h-4 text-[#0A54C4]"})}),me?s.jsxs("span",{className:"flex items-center gap-1 text-[11px] font-extrabold text-[#0A7A50] bg-[#0A7A50]/15 px-2 py-0.5 rounded-md",children:[s.jsx(Da,{className:"w-3 h-3"}),"Решено"]}):s.jsx("span",{className:"text-[10.5px] font-bold text-[#63636E] bg-[#E3E3E9]/60 px-2 py-0.5 rounded-md",children:"Новое"})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-[14px] font-black text-[#0B0B0F] group-hover:text-[#0A54C4] transition-colors",children:E.title}),s.jsx("p",{className:"text-[12px] text-[#63636E] leading-relaxed mt-1 line-clamp-2",children:E.shortDesc})]})]}),s.jsx("div",{className:"pt-3 mt-3 border-t border-[#E3E3E9]/80 flex items-center justify-between text-[11.5px] font-bold text-[#0A54C4] group-hover:underline",children:s.jsx("span",{children:me?"Повторить урок →":"Открыть урок →"})})]},E.id)})})]},$.id)})})]})]})};var rc={};(function o(m,h,d,G){var H=!!(m.Worker&&m.Blob&&m.Promise&&m.OffscreenCanvas&&m.OffscreenCanvasRenderingContext2D&&m.HTMLCanvasElement&&m.HTMLCanvasElement.prototype.transferControlToOffscreen&&m.URL&&m.URL.createObjectURL),I=typeof Path2D=="function"&&typeof DOMMatrix=="function",z=(function(){if(!m.OffscreenCanvas)return!1;try{var b=new OffscreenCanvas(1,1),p=b.getContext("2d");p.fillRect(0,0,1,1);var O=b.transferToImageBitmap();p.createPattern(O,"no-repeat")}catch{return!1}return!0})();function $(){}function oe(b){var p=h.exports.Promise,O=p!==void 0?p:m.Promise;return typeof O=="function"?new O(b):(b($,$),null)}var K=(function(b,p){return{transform:function(O){if(b)return O;if(p.has(O))return p.get(O);var W=new OffscreenCanvas(O.width,O.height),c=W.getContext("2d");return c.drawImage(O,0,0),p.set(O,W),W},clear:function(){p.clear()}}})(z,new Map),_=(function(){var b=Math.floor(16.666666666666668),p,O,W={},c=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(p=function(D){var Z=Math.random();return W[Z]=requestAnimationFrame(function Y(te){c===te||c+b-1<te?(c=te,delete W[Z],D()):W[Z]=requestAnimationFrame(Y)}),Z},O=function(D){W[D]&&cancelAnimationFrame(W[D])}):(p=function(D){return setTimeout(D,b)},O=function(D){return clearTimeout(D)}),{frame:p,cancel:O}})(),E=(function(){var b,p,O={};function W(c){function D(Z,Y){c.postMessage({options:Z||{},callback:Y})}c.init=function(Y){var te=Y.transferControlToOffscreen();c.postMessage({canvas:te},[te])},c.fire=function(Y,te,ue){if(p)return D(Y,null),p;var de=Math.random().toString(36).slice(2);return p=oe(function(J){function ie(Se){Se.data.callback===de&&(delete O[de],c.removeEventListener("message",ie),p=null,K.clear(),ue(),J())}c.addEventListener("message",ie),D(Y,de),O[de]=ie.bind(null,{data:{callback:de}})}),p},c.reset=function(){c.postMessage({reset:!0});for(var Y in O)O[Y](),delete O[Y]}}return function(){if(b)return b;if(!d&&H){var c=["var CONFETTI, SIZE = {}, module = {};","("+o.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{b=new Worker(URL.createObjectURL(new Blob([c])))}catch(D){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",D),null}W(b)}return b}})(),me={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function ge(b,p){return p?p(b):b}function S(b){return b!=null}function F(b,p,O){return ge(b&&S(b[p])?b[p]:me[p],O)}function ne(b){return b<0?0:Math.floor(b)}function k(b,p){return Math.floor(Math.random()*(p-b))+b}function g(b){return parseInt(b,16)}function L(b){return b.map(M)}function M(b){var p=String(b).replace(/[^0-9a-f]/gi,"");return p.length<6&&(p=p[0]+p[0]+p[1]+p[1]+p[2]+p[2]),{r:g(p.substring(0,2)),g:g(p.substring(2,4)),b:g(p.substring(4,6))}}function B(b){var p=F(b,"origin",Object);return p.x=F(p,"x",Number),p.y=F(p,"y",Number),p}function R(b){b.width=document.documentElement.clientWidth,b.height=document.documentElement.clientHeight}function ee(b){var p=b.getBoundingClientRect();b.width=p.width,b.height=p.height}function Q(b){var p=document.createElement("canvas");return p.style.position="fixed",p.style.top="0px",p.style.left="0px",p.style.pointerEvents="none",p.style.zIndex=b,p}function pe(b,p,O,W,c,D,Z,Y,te){b.save(),b.translate(p,O),b.rotate(D),b.scale(W,c),b.arc(0,0,1,Z,Y,te),b.restore()}function ve(b){var p=b.angle*(Math.PI/180),O=b.spread*(Math.PI/180);return{x:b.x,y:b.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:b.startVelocity*.5+Math.random()*b.startVelocity,angle2D:-p+(.5*O-Math.random()*O),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:b.color,shape:b.shape,tick:0,totalTicks:b.ticks,decay:b.decay,drift:b.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:b.gravity*3,ovalScalar:.6,scalar:b.scalar,flat:b.flat}}function Ae(b,p){p.x+=Math.cos(p.angle2D)*p.velocity+p.drift,p.y+=Math.sin(p.angle2D)*p.velocity+p.gravity,p.velocity*=p.decay,p.flat?(p.wobble=0,p.wobbleX=p.x+10*p.scalar,p.wobbleY=p.y+10*p.scalar,p.tiltSin=0,p.tiltCos=0,p.random=1):(p.wobble+=p.wobbleSpeed,p.wobbleX=p.x+10*p.scalar*Math.cos(p.wobble),p.wobbleY=p.y+10*p.scalar*Math.sin(p.wobble),p.tiltAngle+=.1,p.tiltSin=Math.sin(p.tiltAngle),p.tiltCos=Math.cos(p.tiltAngle),p.random=Math.random()+2);var O=p.tick++/p.totalTicks,W=p.x+p.random*p.tiltCos,c=p.y+p.random*p.tiltSin,D=p.wobbleX+p.random*p.tiltCos,Z=p.wobbleY+p.random*p.tiltSin;if(b.fillStyle="rgba("+p.color.r+", "+p.color.g+", "+p.color.b+", "+(1-O)+")",b.beginPath(),I&&p.shape.type==="path"&&typeof p.shape.path=="string"&&Array.isArray(p.shape.matrix))b.fill(V(p.shape.path,p.shape.matrix,p.x,p.y,Math.abs(D-W)*.1,Math.abs(Z-c)*.1,Math.PI/10*p.wobble));else if(p.shape.type==="bitmap"){var Y=Math.PI/10*p.wobble,te=Math.abs(D-W)*.1,ue=Math.abs(Z-c)*.1,de=p.shape.bitmap.width*p.scalar,J=p.shape.bitmap.height*p.scalar,ie=new DOMMatrix([Math.cos(Y)*te,Math.sin(Y)*te,-Math.sin(Y)*ue,Math.cos(Y)*ue,p.x,p.y]);ie.multiplySelf(new DOMMatrix(p.shape.matrix));var Se=b.createPattern(K.transform(p.shape.bitmap),"no-repeat");Se.setTransform(ie),b.globalAlpha=1-O,b.fillStyle=Se,b.fillRect(p.x-de/2,p.y-J/2,de,J),b.globalAlpha=1}else if(p.shape==="circle")b.ellipse?b.ellipse(p.x,p.y,Math.abs(D-W)*p.ovalScalar,Math.abs(Z-c)*p.ovalScalar,Math.PI/10*p.wobble,0,2*Math.PI):pe(b,p.x,p.y,Math.abs(D-W)*p.ovalScalar,Math.abs(Z-c)*p.ovalScalar,Math.PI/10*p.wobble,0,2*Math.PI);else if(p.shape==="star")for(var _e=Math.PI/2*3,Xe=4*p.scalar,Je=8*p.scalar,Oe=p.x,Ee=p.y,et=5,We=Math.PI/et;et--;)Oe=p.x+Math.cos(_e)*Je,Ee=p.y+Math.sin(_e)*Je,b.lineTo(Oe,Ee),_e+=We,Oe=p.x+Math.cos(_e)*Xe,Ee=p.y+Math.sin(_e)*Xe,b.lineTo(Oe,Ee),_e+=We;else b.moveTo(Math.floor(p.x),Math.floor(p.y)),b.lineTo(Math.floor(p.wobbleX),Math.floor(c)),b.lineTo(Math.floor(D),Math.floor(Z)),b.lineTo(Math.floor(W),Math.floor(p.wobbleY));return b.closePath(),b.fill(),p.tick<p.totalTicks}function Ve(b,p,O,W,c){var D=p.slice(),Z=b.getContext("2d"),Y,te,ue=oe(function(de){function J(){Y=te=null,Z.clearRect(0,0,W.width,W.height),K.clear(),c(),de()}function ie(){d&&!(W.width===G.width&&W.height===G.height)&&(W.width=b.width=G.width,W.height=b.height=G.height),!W.width&&!W.height&&(O(b),W.width=b.width,W.height=b.height),Z.clearRect(0,0,W.width,W.height),D=D.filter(function(Se){return Ae(Z,Se)}),D.length?Y=_.frame(ie):J()}Y=_.frame(ie),te=J});return{addFettis:function(de){return D=D.concat(de),ue},canvas:b,promise:ue,reset:function(){Y&&_.cancel(Y),te&&te()}}}function j(b,p){var O=!b,W=!!F(p||{},"resize"),c=!1,D=F(p,"disableForReducedMotion",Boolean),Z=H&&!!F(p||{},"useWorker"),Y=Z?E():null,te=O?R:ee,ue=b&&Y?!!b.__confetti_initialized:!1,de=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,J;function ie(_e,Xe,Je){for(var Oe=F(_e,"particleCount",ne),Ee=F(_e,"angle",Number),et=F(_e,"spread",Number),We=F(_e,"startVelocity",Number),Qt=F(_e,"decay",Number),un=F(_e,"gravity",Number),_n=F(_e,"drift",Number),tn=F(_e,"colors",L),pl=F(_e,"ticks",Number),X=F(_e,"shapes"),se=F(_e,"scalar"),Re=!!F(_e,"flat"),Be=B(_e),Ie=Oe,ot=[],At=b.width*Be.x,wt=b.height*Be.y;Ie--;)ot.push(ve({x:At,y:wt,angle:Ee,spread:et,startVelocity:We,color:tn[Ie%tn.length],shape:X[k(0,X.length)],ticks:pl,decay:Qt,gravity:un,drift:_n,scalar:se,flat:Re}));return J?J.addFettis(ot):(J=Ve(b,ot,te,Xe,Je),J.promise)}function Se(_e){var Xe=D||F(_e,"disableForReducedMotion",Boolean),Je=F(_e,"zIndex",Number);if(Xe&&de)return oe(function(We){We()});O&&J?b=J.canvas:O&&!b&&(b=Q(Je),document.body.appendChild(b)),W&&!ue&&te(b);var Oe={width:b.width,height:b.height};Y&&!ue&&Y.init(b),ue=!0,Y&&(b.__confetti_initialized=!0);function Ee(){if(Y){var We={getBoundingClientRect:function(){if(!O)return b.getBoundingClientRect()}};te(We),Y.postMessage({resize:{width:We.width,height:We.height}});return}Oe.width=Oe.height=null}function et(){J=null,W&&(c=!1,m.removeEventListener("resize",Ee)),O&&b&&(document.body.contains(b)&&document.body.removeChild(b),b=null,ue=!1)}return W&&!c&&(c=!0,m.addEventListener("resize",Ee,!1)),Y?Y.fire(_e,Oe,et):ie(_e,Oe,et)}return Se.reset=function(){Y&&Y.reset(),J&&J.reset()},Se}var re;function T(){return re||(re=j(null,{useWorker:!0,resize:!0})),re}function V(b,p,O,W,c,D,Z){var Y=new Path2D(b),te=new Path2D;te.addPath(Y,new DOMMatrix(p));var ue=new Path2D;return ue.addPath(te,new DOMMatrix([Math.cos(Z)*c,Math.sin(Z)*c,-Math.sin(Z)*D,Math.cos(Z)*D,O,W])),ue}function P(b){if(!I)throw new Error("path confetti are not supported in this browser");var p,O;typeof b=="string"?p=b:(p=b.path,O=b.matrix);var W=new Path2D(p),c=document.createElement("canvas"),D=c.getContext("2d");if(!O){for(var Z=1e3,Y=Z,te=Z,ue=0,de=0,J,ie,Se=0;Se<Z;Se+=2)for(var _e=0;_e<Z;_e+=2)D.isPointInPath(W,Se,_e,"nonzero")&&(Y=Math.min(Y,Se),te=Math.min(te,_e),ue=Math.max(ue,Se),de=Math.max(de,_e));J=ue-Y,ie=de-te;var Xe=10,Je=Math.min(Xe/J,Xe/ie);O=[Je,0,0,Je,-Math.round(J/2+Y)*Je,-Math.round(ie/2+te)*Je]}return{type:"path",path:p,matrix:O}}function he(b){var p,O=1,W="#000000",c='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof b=="string"?p=b:(p=b.text,O="scalar"in b?b.scalar:O,c="fontFamily"in b?b.fontFamily:c,W="color"in b?b.color:W);var D=10*O,Z=""+D+"px "+c,Y=new OffscreenCanvas(D,D),te=Y.getContext("2d");te.font=Z;var ue=te.measureText(p),de=Math.ceil(ue.actualBoundingBoxRight+ue.actualBoundingBoxLeft),J=Math.ceil(ue.actualBoundingBoxAscent+ue.actualBoundingBoxDescent),ie=2,Se=ue.actualBoundingBoxLeft+ie,_e=ue.actualBoundingBoxAscent+ie;de+=ie+ie,J+=ie+ie,Y=new OffscreenCanvas(de,J),te=Y.getContext("2d"),te.font=Z,te.fillStyle=W,te.fillText(p,Se,_e);var Xe=1/O;return{type:"bitmap",bitmap:Y.transferToImageBitmap(),matrix:[Xe,0,0,Xe,-de*Xe/2,-J*Xe/2]}}h.exports=function(){return T().apply(this,arguments)},h.exports.reset=function(){T().reset()},h.exports.create=j,h.exports.shapeFromPath=P,h.exports.shapeFromText=he})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),rc,!1);const ny=rc.exports;rc.exports.create;var Pu={exports:{}},Jp;function ly(){return Jp||(Jp=1,(function(o){var m=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var h=(function(d){var G=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,H=0,I={},z={manual:d.Prism&&d.Prism.manual,disableWorkerMessageHandler:d.Prism&&d.Prism.disableWorkerMessageHandler,util:{encode:function k(g){return g instanceof $?new $(g.type,k(g.content),g.alias):Array.isArray(g)?g.map(k):g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(k){return Object.prototype.toString.call(k).slice(8,-1)},objId:function(k){return k.__id||Object.defineProperty(k,"__id",{value:++H}),k.__id},clone:function k(g,L){L=L||{};var M,B;switch(z.util.type(g)){case"Object":if(B=z.util.objId(g),L[B])return L[B];M={},L[B]=M;for(var R in g)g.hasOwnProperty(R)&&(M[R]=k(g[R],L));return M;case"Array":return B=z.util.objId(g),L[B]?L[B]:(M=[],L[B]=M,g.forEach(function(ee,Q){M[Q]=k(ee,L)}),M);default:return g}},getLanguage:function(k){for(;k;){var g=G.exec(k.className);if(g)return g[1].toLowerCase();k=k.parentElement}return"none"},setLanguage:function(k,g){k.className=k.className.replace(RegExp(G,"gi"),""),k.classList.add("language-"+g)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(M){var k=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(M.stack)||[])[1];if(k){var g=document.getElementsByTagName("script");for(var L in g)if(g[L].src==k)return g[L]}return null}},isActive:function(k,g,L){for(var M="no-"+g;k;){var B=k.classList;if(B.contains(g))return!0;if(B.contains(M))return!1;k=k.parentElement}return!!L}},languages:{plain:I,plaintext:I,text:I,txt:I,extend:function(k,g){var L=z.util.clone(z.languages[k]);for(var M in g)L[M]=g[M];return L},insertBefore:function(k,g,L,M){M=M||z.languages;var B=M[k],R={};for(var ee in B)if(B.hasOwnProperty(ee)){if(ee==g)for(var Q in L)L.hasOwnProperty(Q)&&(R[Q]=L[Q]);L.hasOwnProperty(ee)||(R[ee]=B[ee])}var pe=M[k];return M[k]=R,z.languages.DFS(z.languages,function(ve,Ae){Ae===pe&&ve!=k&&(this[ve]=R)}),R},DFS:function k(g,L,M,B){B=B||{};var R=z.util.objId;for(var ee in g)if(g.hasOwnProperty(ee)){L.call(g,ee,g[ee],M||ee);var Q=g[ee],pe=z.util.type(Q);pe==="Object"&&!B[R(Q)]?(B[R(Q)]=!0,k(Q,L,null,B)):pe==="Array"&&!B[R(Q)]&&(B[R(Q)]=!0,k(Q,L,ee,B))}}},plugins:{},highlightAll:function(k,g){z.highlightAllUnder(document,k,g)},highlightAllUnder:function(k,g,L){var M={callback:L,container:k,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};z.hooks.run("before-highlightall",M),M.elements=Array.prototype.slice.apply(M.container.querySelectorAll(M.selector)),z.hooks.run("before-all-elements-highlight",M);for(var B=0,R;R=M.elements[B++];)z.highlightElement(R,g===!0,M.callback)},highlightElement:function(k,g,L){var M=z.util.getLanguage(k),B=z.languages[M];z.util.setLanguage(k,M);var R=k.parentElement;R&&R.nodeName.toLowerCase()==="pre"&&z.util.setLanguage(R,M);var ee=k.textContent,Q={element:k,language:M,grammar:B,code:ee};function pe(Ae){Q.highlightedCode=Ae,z.hooks.run("before-insert",Q),Q.element.innerHTML=Q.highlightedCode,z.hooks.run("after-highlight",Q),z.hooks.run("complete",Q),L&&L.call(Q.element)}if(z.hooks.run("before-sanity-check",Q),R=Q.element.parentElement,R&&R.nodeName.toLowerCase()==="pre"&&!R.hasAttribute("tabindex")&&R.setAttribute("tabindex","0"),!Q.code){z.hooks.run("complete",Q),L&&L.call(Q.element);return}if(z.hooks.run("before-highlight",Q),!Q.grammar){pe(z.util.encode(Q.code));return}if(g&&d.Worker){var ve=new Worker(z.filename);ve.onmessage=function(Ae){pe(Ae.data)},ve.postMessage(JSON.stringify({language:Q.language,code:Q.code,immediateClose:!0}))}else pe(z.highlight(Q.code,Q.grammar,Q.language))},highlight:function(k,g,L){var M={code:k,grammar:g,language:L};if(z.hooks.run("before-tokenize",M),!M.grammar)throw new Error('The language "'+M.language+'" has no grammar.');return M.tokens=z.tokenize(M.code,M.grammar),z.hooks.run("after-tokenize",M),$.stringify(z.util.encode(M.tokens),M.language)},tokenize:function(k,g){var L=g.rest;if(L){for(var M in L)g[M]=L[M];delete g.rest}var B=new _;return E(B,B.head,k),K(k,B,g,B.head,0),ge(B)},hooks:{all:{},add:function(k,g){var L=z.hooks.all;L[k]=L[k]||[],L[k].push(g)},run:function(k,g){var L=z.hooks.all[k];if(!(!L||!L.length))for(var M=0,B;B=L[M++];)B(g)}},Token:$};d.Prism=z;function $(k,g,L,M){this.type=k,this.content=g,this.alias=L,this.length=(M||"").length|0}$.stringify=function k(g,L){if(typeof g=="string")return g;if(Array.isArray(g)){var M="";return g.forEach(function(pe){M+=k(pe,L)}),M}var B={type:g.type,content:k(g.content,L),tag:"span",classes:["token",g.type],attributes:{},language:L},R=g.alias;R&&(Array.isArray(R)?Array.prototype.push.apply(B.classes,R):B.classes.push(R)),z.hooks.run("wrap",B);var ee="";for(var Q in B.attributes)ee+=" "+Q+'="'+(B.attributes[Q]||"").replace(/"/g,"&quot;")+'"';return"<"+B.tag+' class="'+B.classes.join(" ")+'"'+ee+">"+B.content+"</"+B.tag+">"};function oe(k,g,L,M){k.lastIndex=g;var B=k.exec(L);if(B&&M&&B[1]){var R=B[1].length;B.index+=R,B[0]=B[0].slice(R)}return B}function K(k,g,L,M,B,R){for(var ee in L)if(!(!L.hasOwnProperty(ee)||!L[ee])){var Q=L[ee];Q=Array.isArray(Q)?Q:[Q];for(var pe=0;pe<Q.length;++pe){if(R&&R.cause==ee+","+pe)return;var ve=Q[pe],Ae=ve.inside,Ve=!!ve.lookbehind,j=!!ve.greedy,re=ve.alias;if(j&&!ve.pattern.global){var T=ve.pattern.toString().match(/[imsuy]*$/)[0];ve.pattern=RegExp(ve.pattern.source,T+"g")}for(var V=ve.pattern||ve,P=M.next,he=B;P!==g.tail&&!(R&&he>=R.reach);he+=P.value.length,P=P.next){var b=P.value;if(g.length>k.length)return;if(!(b instanceof $)){var p=1,O;if(j){if(O=oe(V,he,k,Ve),!O||O.index>=k.length)break;var Z=O.index,W=O.index+O[0].length,c=he;for(c+=P.value.length;Z>=c;)P=P.next,c+=P.value.length;if(c-=P.value.length,he=c,P.value instanceof $)continue;for(var D=P;D!==g.tail&&(c<W||typeof D.value=="string");D=D.next)p++,c+=D.value.length;p--,b=k.slice(he,c),O.index-=he}else if(O=oe(V,0,b,Ve),!O)continue;var Z=O.index,Y=O[0],te=b.slice(0,Z),ue=b.slice(Z+Y.length),de=he+b.length;R&&de>R.reach&&(R.reach=de);var J=P.prev;te&&(J=E(g,J,te),he+=te.length),me(g,J,p);var ie=new $(ee,Ae?z.tokenize(Y,Ae):Y,re,Y);if(P=E(g,J,ie),ue&&E(g,P,ue),p>1){var Se={cause:ee+","+pe,reach:de};K(k,g,L,P.prev,he,Se),R&&Se.reach>R.reach&&(R.reach=Se.reach)}}}}}}function _(){var k={value:null,prev:null,next:null},g={value:null,prev:k,next:null};k.next=g,this.head=k,this.tail=g,this.length=0}function E(k,g,L){var M=g.next,B={value:L,prev:g,next:M};return g.next=B,M.prev=B,k.length++,B}function me(k,g,L){for(var M=g.next,B=0;B<L&&M!==k.tail;B++)M=M.next;g.next=M,M.prev=g,k.length-=B}function ge(k){for(var g=[],L=k.head.next;L!==k.tail;)g.push(L.value),L=L.next;return g}if(!d.document)return d.addEventListener&&(z.disableWorkerMessageHandler||d.addEventListener("message",function(k){var g=JSON.parse(k.data),L=g.language,M=g.code,B=g.immediateClose;d.postMessage(z.highlight(M,z.languages[L],L)),B&&d.close()},!1)),z;var S=z.util.currentScript();S&&(z.filename=S.src,S.hasAttribute("data-manual")&&(z.manual=!0));function F(){z.manual||z.highlightAll()}if(!z.manual){var ne=document.readyState;ne==="loading"||ne==="interactive"&&S&&S.defer?document.addEventListener("DOMContentLoaded",F):window.requestAnimationFrame?window.requestAnimationFrame(F):window.setTimeout(F,16)}return z})(m);o.exports&&(o.exports=h),typeof Op<"u"&&(Op.Prism=h),h.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},h.languages.markup.tag.inside["attr-value"].inside.entity=h.languages.markup.entity,h.languages.markup.doctype.inside["internal-subset"].inside=h.languages.markup,h.hooks.add("wrap",function(d){d.type==="entity"&&(d.attributes.title=d.content.replace(/&amp;/,"&"))}),Object.defineProperty(h.languages.markup.tag,"addInlined",{value:function(G,H){var I={};I["language-"+H]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:h.languages[H]},I.cdata=/^<!\[CDATA\[|\]\]>$/i;var z={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:I}};z["language-"+H]={pattern:/[\s\S]+/,inside:h.languages[H]};var $={};$[G]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return G}),"i"),lookbehind:!0,greedy:!0,inside:z},h.languages.insertBefore("markup","cdata",$)}}),Object.defineProperty(h.languages.markup.tag,"addAttribute",{value:function(d,G){h.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+d+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[G,"language-"+G],inside:h.languages[G]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),h.languages.html=h.languages.markup,h.languages.mathml=h.languages.markup,h.languages.svg=h.languages.markup,h.languages.xml=h.languages.extend("markup",{}),h.languages.ssml=h.languages.xml,h.languages.atom=h.languages.xml,h.languages.rss=h.languages.xml,(function(d){var G=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;d.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+G.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+G.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+G.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+G.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:G,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},d.languages.css.atrule.inside.rest=d.languages.css;var H=d.languages.markup;H&&(H.tag.addInlined("style","css"),H.tag.addAttribute("style","css"))})(h),h.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},h.languages.javascript=h.languages.extend("clike",{"class-name":[h.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),h.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,h.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:h.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:h.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:h.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:h.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:h.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),h.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:h.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),h.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),h.languages.markup&&(h.languages.markup.tag.addInlined("script","javascript"),h.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),h.languages.js=h.languages.javascript,(function(){if(typeof h>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var d="Loading…",G=function(S,F){return"✖ Error "+S+" while fetching file: "+F},H="✖ Error: File does not exist or is empty",I={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},z="data-src-status",$="loading",oe="loaded",K="failed",_="pre[data-src]:not(["+z+'="'+oe+'"]):not(['+z+'="'+$+'"])';function E(S,F,ne){var k=new XMLHttpRequest;k.open("GET",S,!0),k.onreadystatechange=function(){k.readyState==4&&(k.status<400&&k.responseText?F(k.responseText):k.status>=400?ne(G(k.status,k.statusText)):ne(H))},k.send(null)}function me(S){var F=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(S||"");if(F){var ne=Number(F[1]),k=F[2],g=F[3];return k?g?[ne,Number(g)]:[ne,void 0]:[ne,ne]}}h.hooks.add("before-highlightall",function(S){S.selector+=", "+_}),h.hooks.add("before-sanity-check",function(S){var F=S.element;if(F.matches(_)){S.code="",F.setAttribute(z,$);var ne=F.appendChild(document.createElement("CODE"));ne.textContent=d;var k=F.getAttribute("data-src"),g=S.language;if(g==="none"){var L=(/\.(\w+)$/.exec(k)||[,"none"])[1];g=I[L]||L}h.util.setLanguage(ne,g),h.util.setLanguage(F,g);var M=h.plugins.autoloader;M&&M.loadLanguages(g),E(k,function(B){F.setAttribute(z,oe);var R=me(F.getAttribute("data-range"));if(R){var ee=B.split(/\r\n?|\n/g),Q=R[0],pe=R[1]==null?ee.length:R[1];Q<0&&(Q+=ee.length),Q=Math.max(0,Math.min(Q-1,ee.length)),pe<0&&(pe+=ee.length),pe=Math.max(0,Math.min(pe,ee.length)),B=ee.slice(Q,pe).join(`
`),F.hasAttribute("data-start")||F.setAttribute("data-start",String(Q+1))}ne.textContent=B,h.highlightElement(ne)},function(B){F.setAttribute(z,K),ne.textContent=B})}}),h.plugins.fileHighlight={highlight:function(F){for(var ne=(F||document).querySelectorAll(_),k=0,g;g=ne[k++];)h.highlightElement(g)}};var ge=!1;h.fileHighlight=function(){ge||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),ge=!0),h.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(Pu)),Pu.exports}var ay=ly();const $p=cg(ay);var Wp={},Ip;function iy(){return Ip||(Ip=1,Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python),Wp}iy();const ch=({value:o,onChange:m,onRun:h,placeholder:d="# Напиши код на Python 3...",activeLine:G=null,errorLine:H=null,rows:I=15})=>{const z=le.useRef(null),$=le.useRef(null),oe=le.useRef(null),K=o.split(`
`),_=Math.max(K.length,I),E=()=>{if(z.current){const S=z.current.scrollTop,F=z.current.scrollLeft;$.current&&($.current.scrollTop=S,$.current.scrollLeft=F),oe.current&&(oe.current.scrollTop=S)}},me=S=>{var k;if((S.ctrlKey||S.metaKey)&&S.key==="Enter"){S.preventDefault(),h==null||h();return}if(S.key==="Tab"){S.preventDefault();const g=S.currentTarget.selectionStart,L=S.currentTarget.selectionEnd;if(S.shiftKey){const B=o.substring(0,g).lastIndexOf(`
`),R=B===-1?0:B+1,Q=((k=o.substring(R,g).match(/^ {1,4}/))==null?void 0:k[0].length)||0;if(Q>0){const pe=o.substring(0,R)+o.substring(R+Q);m(pe),setTimeout(()=>{z.current&&(z.current.selectionStart=z.current.selectionEnd=Math.max(R,g-Q))},0)}}else{const M=o.substring(0,g)+"    "+o.substring(L);m(M),setTimeout(()=>{z.current&&(z.current.selectionStart=z.current.selectionEnd=g+4)},0)}return}if(S.key==="Enter"&&!S.ctrlKey&&!S.metaKey){S.preventDefault();const g=S.currentTarget.selectionStart,L=S.currentTarget.selectionEnd,M=o.substring(0,g),B=o.substring(L),R=M.lastIndexOf(`
`),ee=R===-1?M:M.substring(R+1),Q=ee.match(/^[ \t]*/),pe=Q?Q[0]:"",Ae=ee.trim().endsWith(":"),Ve=M.slice(-1),j=B.slice(0,1),re=Ve==="("&&j===")"||Ve==="["&&j==="]"||Ve==="{"&&j==="}";let T=`
`+pe,V=g+1+pe.length;if(Ae&&(T+="    ",V+=4),re){const he=pe+"    ";T=`
`+he+`
`+pe,V=g+1+he.length}const P=M+T+B;m(P),setTimeout(()=>{z.current&&(z.current.selectionStart=z.current.selectionEnd=V)},0);return}const F={"(":")","[":"]","{":"}",'"':'"',"'":"'"};if(F[S.key]&&!S.ctrlKey&&!S.metaKey&&!S.altKey){const g=S.key,L=F[S.key],M=S.currentTarget.selectionStart,B=S.currentTarget.selectionEnd,R=o[M];if((g==='"'||g==="'")&&M===B&&R===g){S.preventDefault(),setTimeout(()=>{z.current&&(z.current.selectionStart=z.current.selectionEnd=M+1)},0);return}if(M!==B){S.preventDefault();const Q=o.substring(M,B),pe=o.substring(0,M)+g+Q+L+o.substring(B);m(pe),setTimeout(()=>{z.current&&(z.current.selectionStart=M+1,z.current.selectionEnd=B+1)},0);return}S.preventDefault();const ee=o.substring(0,M)+g+L+o.substring(B);m(ee),setTimeout(()=>{z.current&&(z.current.selectionStart=z.current.selectionEnd=M+1)},0);return}if([")","]","}",'"',"'"].includes(S.key)&&!S.ctrlKey&&!S.metaKey&&!S.altKey){const g=S.currentTarget.selectionStart,L=S.currentTarget.selectionEnd;if(g===L&&o[g]===S.key){S.preventDefault(),setTimeout(()=>{z.current&&(z.current.selectionStart=z.current.selectionEnd=g+1)},0);return}}if(S.key==="Backspace"&&!S.ctrlKey&&!S.metaKey){const g=S.currentTarget.selectionStart,L=S.currentTarget.selectionEnd;if(g===L&&g>0){const M=o[g-1],B=o[g];if(M==="("&&B===")"||M==="["&&B==="]"||M==="{"&&B==="}"||M==='"'&&B==='"'||M==="'"&&B==="'"){S.preventDefault();const ee=o.substring(0,g-1)+o.substring(g+1);m(ee),setTimeout(()=>{z.current&&(z.current.selectionStart=z.current.selectionEnd=g-1)},0);return}}}},ge=$p.highlight(o+(o.endsWith(`
`)?" ":""),$p.languages.python,"python");return s.jsxs("div",{className:"relative border-2 border-[#E3E3E9] focus-within:border-[#0A54C4] rounded-xl overflow-hidden bg-[#16161F] text-white flex min-h-[380px] shadow-2xs",children:[s.jsx("div",{ref:oe,className:"w-11 bg-[#12121A] text-[#636375] py-3.5 px-1.5 text-right font-mono text-[13px] leading-6 select-none border-r border-[#2C2C3A] overflow-hidden shrink-0",children:Array.from({length:_}).map((S,F)=>{const ne=F+1,k=G===ne,g=H===ne;return s.jsx("div",{className:`h-6 leading-6 ${g?"text-[#FF3860] font-black bg-[#FF3860]/20 rounded-xs":k?"text-[#F5A800] font-black bg-[#F5A800]/20 rounded-xs":""}`,children:ne},F)})}),s.jsxs("div",{className:"relative flex-1 overflow-hidden",children:[s.jsx("pre",{ref:$,"aria-hidden":"true",className:"absolute inset-0 m-0 p-3.5 font-mono text-[13px] leading-6 pointer-events-none overflow-hidden whitespace-pre tab-[4] selection:bg-transparent",dangerouslySetInnerHTML:{__html:ge}}),s.jsx("textarea",{ref:z,value:o,onChange:S=>m(S.target.value),onScroll:E,onKeyDown:me,spellCheck:!1,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",className:"absolute inset-0 w-full h-full bg-transparent text-transparent caret-white p-3.5 font-mono text-[13px] leading-6 resize-none focus:outline-none selection:bg-[#5636E0]/40 whitespace-pre overflow-auto tab-[4]",placeholder:d})]})]})},sy=[{id:"all",label:"Все"},{id:"io",label:"Ввод и вывод"},{id:"types",label:"Типы данных"},{id:"math",label:"Математика"},{id:"strings",label:"Строки"},{id:"lists",label:"Списки"},{id:"dicts",label:"Словари"},{id:"iter",label:"Циклы и итерации"},{id:"modules",label:"Модули (math, random)"},{id:"tkinter",label:"Графика (Tkinter)"}],Pp=[{id:"print",name:"print()",category:"io",categoryLabel:"Ввод и вывод",syntax:"print(*objects, sep=' ', end='\\n')",shortDesc:"Выводит переданные объекты в консоль.",fullDesc:"Главная функция для отображения информации. Можно передавать несколько аргументов через запятую. Параметр sep задает разделитель (по умолчанию пробел), а end — символ в конце (по умолчанию перенос строки).",params:[{name:"*objects",type:"any",desc:"Один или несколько объектов для вывода"},{name:"sep",type:"str",desc:"Разделитель между значениями (по умолчанию ' ')"},{name:"end",type:"str",desc:"Символ окончания строки (по умолчанию '\\n')"}],returns:"None",example:`# Вывод текста и чисел
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
root.mainloop()`,output:"Текст надписи обновлен: Новый текст!",tags:["изменить","свойства","текст","цвет","config","configure","tkinter"]}],dh=({onInsertCode:o,onOpenInSandbox:m,isModal:h=!1,onClose:d})=>{const[G,H]=le.useState(""),[I,z]=le.useState("all"),[$,oe]=le.useState(null),[K,_]=le.useState(null),E=le.useRef(null);le.useEffect(()=>{var S;(S=E.current)==null||S.focus()},[]),le.useEffect(()=>{const S=F=>{var ne;F.key==="/"&&document.activeElement!==E.current?(F.preventDefault(),(ne=E.current)==null||ne.focus()):F.key==="Escape"&&($?oe(null):h&&d&&d())};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[h,d,$]);const me=le.useMemo(()=>{const S=G.trim().toLowerCase();return Pp.filter(F=>{if(!(I==="all"||F.category===I))return!1;if(!S)return!0;const k=F.name.toLowerCase().includes(S),g=F.syntax.toLowerCase().includes(S),L=F.shortDesc.toLowerCase().includes(S),M=F.fullDesc.toLowerCase().includes(S),B=F.tags.some(R=>R.toLowerCase().includes(S));return k||g||L||M||B})},[G,I]),ge=(S,F)=>{navigator.clipboard.writeText(F),Rn(),_(S),setTimeout(()=>_(null),2e3)};return s.jsx("div",{className:`font-mono text-[#0B0B0F] ${h?"fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 md:p-6":"max-w-[1360px] mx-auto p-3 md:p-6 space-y-5"}`,children:s.jsxs("div",{className:`bg-white border-[1.5px] border-[#E3E3E9] rounded-2xl shadow-xl flex flex-col overflow-hidden ${h?"w-full max-w-5xl max-h-[90vh]":"w-full min-h-[750px]"}`,children:[s.jsxs("div",{className:"p-4 md:p-6 border-b border-[#E3E3E9] bg-gradient-to-r from-[#F7F7FA] to-white flex items-center justify-between gap-4 flex-wrap",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A54C4] to-[#5636E0] text-white flex items-center justify-center shadow-xs",children:s.jsx(cr,{className:"w-5 h-5"})}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("h2",{className:"text-[18px] md:text-[20px] font-black tracking-tight text-[#0B0B0F]",children:"Справочник и поиск по функциям Python"}),s.jsxs("span",{className:"text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#E3E3E9] text-[#63636E]",children:[Pp.length," функций"]})]}),s.jsx("p",{className:"text-[12px] text-[#63636E]",children:"Быстрый интерактивный поиск синтаксиса, параметров и примеров кода"})]})]}),s.jsx("div",{className:"flex items-center gap-2",children:h&&d&&s.jsx("button",{onClick:d,className:"p-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#63636E] hover:text-[#0B0B0F] transition-colors cursor-pointer",title:"Закрыть (Esc)",children:s.jsx(ec,{className:"w-5 h-5"})})})]}),s.jsxs("div",{className:"p-4 md:p-6 border-b border-[#E3E3E9] space-y-3 bg-[#FCFCFD]",children:[s.jsxs("div",{className:"relative",children:[s.jsx(Ma,{className:"w-5 h-5 text-[#63636E] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"}),s.jsx("input",{ref:E,type:"text",value:G,onChange:S=>H(S.target.value),placeholder:"Поиск по названию или описанию (например: print, ввод, len, split, рандом)...",className:"w-full bg-white border-2 border-[#E3E3E9] focus:border-[#0A54C4] rounded-xl pl-12 pr-10 py-3 text-[14px] font-mono outline-none shadow-2xs transition-all"}),G&&s.jsx("button",{onClick:()=>H(""),className:"absolute right-3.5 top-1/2 -translate-y-1/2 text-[#63636E] hover:text-[#0B0B0F] p-1 cursor-pointer",title:"Очистить",children:s.jsx(ec,{className:"w-4 h-4"})})]}),s.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none",children:sy.map(S=>s.jsx("button",{onClick:()=>{z(S.id),wn()},className:`px-3 py-1.5 rounded-lg text-[11.5px] font-bold whitespace-nowrap transition-all cursor-pointer ${I===S.id?"bg-[#0A54C4] text-white shadow-xs":"bg-[#F1F1F4] text-[#63636E] hover:bg-[#E3E3E9] hover:text-[#0B0B0F]"}`,children:S.label},S.id))}),s.jsxs("div",{className:"text-[11.5px] text-[#63636E] flex items-center justify-between",children:[s.jsxs("span",{children:["Найдено: ",s.jsx("strong",{children:me.length})]}),s.jsxs("span",{className:"text-[10.5px] text-[#63636E]/70 hidden sm:inline",children:["Нажмите ",s.jsx("strong",{children:"/"})," в любом месте для быстрого перехода к поиску"]})]})]}),s.jsx("div",{className:"flex-1 overflow-y-auto p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:me.length===0?s.jsxs("div",{className:"col-span-full py-16 text-center text-[#63636E] space-y-3",children:[s.jsx(Ma,{className:"w-10 h-10 mx-auto opacity-30"}),s.jsxs("div",{className:"text-[15px] font-bold",children:["Ничего не найдено по запросу «",G,"»"]}),s.jsxs("p",{className:"text-[12px] max-w-sm mx-auto",children:["Попробуй ввести английское название функции (например: ",s.jsx("code",{children:"range"}),", ",s.jsx("code",{children:"append"}),") или ключевое слово (например: ",s.jsx("code",{children:"длина"}),", ",s.jsx("code",{children:"число"}),")."]}),s.jsx("button",{onClick:()=>{H(""),z("all")},className:"px-4 py-2 bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0B0B0F] rounded-xl text-[12px] font-bold transition-all cursor-pointer",children:"Сбросить фильтры"})]}):me.map(S=>s.jsxs("div",{className:"bg-[#F7F7FA] hover:bg-white rounded-xl border border-[#E3E3E9] hover:border-[#0A54C4] p-4.5 flex flex-col justify-between transition-all shadow-2xs hover:shadow-sm group space-y-3",children:[s.jsxs("div",{className:"space-y-2.5",children:[s.jsxs("div",{className:"flex items-start justify-between gap-2",children:[s.jsxs("div",{children:[s.jsx("span",{className:"text-[10px] font-extrabold uppercase tracking-wider text-[#0A54C4] bg-[#0A54C4]/10 px-2 py-0.5 rounded-md",children:S.categoryLabel}),s.jsx("h3",{className:"text-[17px] font-black text-[#0B0B0F] mt-1 group-hover:text-[#0A54C4] transition-colors",children:S.name})]}),s.jsx("button",{onClick:()=>ge(S.id,S.example),className:"p-1.5 rounded-lg hover:bg-[#E3E3E9] text-[#63636E] transition-colors cursor-pointer",title:"Скопировать пример",children:K===S.id?s.jsx(dr,{className:"w-4 h-4 text-[#0A7A50]"}):s.jsx(Ci,{className:"w-4 h-4"})})]}),s.jsx("div",{className:"bg-[#16161F] text-[#4FF0A7] px-2.5 py-1.5 rounded-lg text-[12px] font-mono overflow-x-auto",children:s.jsx("code",{children:S.syntax})}),s.jsx("p",{className:"text-[12px] text-[#63636E] leading-relaxed",children:S.shortDesc}),s.jsxs("div",{className:"bg-white border border-[#E3E3E9] rounded-lg p-2.5 text-[11px] space-y-1 font-mono",children:[s.jsx("div",{className:"text-[10px] font-bold uppercase text-[#63636E]",children:"Пример:"}),s.jsx("pre",{className:"text-[#0B0B0F] overflow-x-auto whitespace-pre-wrap leading-tight",children:S.example})]})]}),s.jsxs("div",{className:"pt-2 border-t border-[#E3E3E9] flex items-center justify-between gap-2 text-[11.5px] font-bold",children:[o&&s.jsxs("button",{onClick:()=>{o(S.example),Rn()},className:"text-[#0A54C4] hover:underline flex items-center gap-1 cursor-pointer",children:[s.jsx(ml,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Вставить в код"})]}),m&&s.jsxs("button",{onClick:()=>{m(S.example),Rn()},className:"text-[#5636E0] hover:underline flex items-center gap-1 cursor-pointer ml-auto",children:[s.jsx(Rl,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Песочница"})]})]})]},S.id))})]})})},ry=`END = "end"
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
`,oy=`import tkinter
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
`,uy=`import tkinter

CHOSEN_DIR = "C:/Music"

def askdirectory(**kw):
    tkinter.LOG.append(("filedialog", "Выбор папки", CHOSEN_DIR))
    return CHOSEN_DIR

def askopenfilename(**kw):
    return ""

def asksaveasfilename(**kw):
    return ""
`,eh=`# Pygame & Pygame.mixer stub for Skulpt

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
`,th=`# OS module stub for Skulpt

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
`,cy=`
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
`,dy=`
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
`,oc="python_virtual_files";function Oa(){if(typeof window>"u")return{};try{const o=localStorage.getItem(oc);return o?JSON.parse(o):{}}catch{return{}}}function tc(o){if(!(typeof window>"u"))try{localStorage.setItem(oc,JSON.stringify(o))}catch{}}function uc(){if(!(typeof window>"u"))try{localStorage.removeItem(oc)}catch{}}let ir=null;function fh(){return typeof window>"u"?Promise.resolve():window.Sk&&window.Sk.importMainWithBody?(nh(),Promise.resolve()):ir||(ir=new Promise((o,m)=>{const h=d=>new Promise((G,H)=>{if(document.querySelector(`script[src="${d}"]`)){G();return}const I=document.createElement("script");I.src=d,I.async=!0,I.onload=()=>G(),I.onerror=z=>H(z),document.head.appendChild(I)});Promise.all([h("https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt.min.js"),h("https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt-stdlib.js")]).then(()=>{nh(),o()}).catch(d=>{console.warn("Failed loading Skulpt CDN",d),m(d)})}),ir)}function nh(){const o=window.Sk;o&&(o.builtinFiles||(o.builtinFiles={files:{}}),o.builtinFiles.files||(o.builtinFiles.files={}),delete o.builtinFiles.files["src/lib/tkinter.js"],delete o.builtinFiles.files["src/lib/tkinter/__init__.js"],delete o.builtinFiles.files["src/lib/json.js"],delete o.builtinFiles.files["src/lib/json/__init__.js"],delete o.builtinFiles.files["src/lib/os.py"],delete o.builtinFiles.files["src/lib/os.js"],delete o.builtinFiles.files["src/lib/os/__init__.js"],delete o.builtinFiles.files["src/lib/os/__init__.py"],o.builtinFiles.files["src/lib/tkinter/__init__.py"]=ry,o.builtinFiles.files["src/lib/tkinter/messagebox.py"]=oy,o.builtinFiles.files["src/lib/tkinter/filedialog.py"]=uy,o.builtinFiles.files["src/lib/_vfs.py"]=cy,o.builtinFiles.files["src/lib/json/__init__.py"]=dy,o.builtinFiles.files["src/lib/pygame/__init__.py"]=eh,o.builtinFiles.files["src/lib/pygame.py"]=eh,o.builtinFiles.files["src/lib/os.py"]=th,o.builtinFiles.files["src/lib/os/__init__.py"]=th)}const fy="Программа работает слишком долго. Похоже, цикл while никогда не заканчивается — проверь, меняется ли переменная в условии";async function or(o,m={}){await fh();const h=window.Sk;if(!h)return{success:!1,output:"Ошибка: Skulpt не загружен",logs:[],error:"Интерпретатор не готов"};h.yieldLimit=100;let d="",G=0,H=!1;const I=1e3,z="Программа напечатала слишком много строк. Похоже, цикл не заканчивается — проверь, меняется ли переменная в условии",$=[],oe=m.inputs?[...m.inputs]:void 0,K=m.timeoutMs??5e3;let _=Date.now();h.configure({output:S=>{var ne;d+=S;for(let k=0;k<S.length;k++)S[k]===`
`&&G++;if(G>I)throw H=!0,new Error(z);const F=S.trim();F&&$.push(F),(ne=m.onOutput)==null||ne.call(m,S)},read:S=>{if(h.builtinFiles&&h.builtinFiles.files&&h.builtinFiles.files[S]!==void 0)return h.builtinFiles.files[S];throw new Error(`Модуль не найден: '${S}'`)},killableWhile:!0,killableFor:!0,inputfun:S=>{var F,ne;if(S&&((F=m.onOutput)==null||F.call(m,S)),oe!==void 0){const k=oe.length>0?oe.shift():"";return(ne=m.onOutput)==null||ne.call(m,k+`
`),_=Date.now(),Promise.resolve(k)}return m.onInput?m.onInput(S).then(k=>(_=Date.now(),k)):Promise.resolve("")},inputfunTakesPrompt:!0,__future__:h.python3});let E=null;try{E=await h.misceval.asyncToPromise(()=>h.importModule("_vfs",!1,!0)),h.builtins.open=E.$d.open,h.builtins.FileNotFoundError=E.$d.FileNotFoundError;const S=m.virtualFiles??Oa();E.$d.FILES=new h.builtin.dict([]);for(const[F,ne]of Object.entries(S))h.abstr.objectSetItem(E.$d.FILES,new h.builtin.str(F),new h.builtin.str(ne))}catch(S){console.warn("VFS init error:",S)}try{const S=h.sysmodules?h.sysmodules.quick$lookup(new h.builtin.str("tkinter")):null;S&&S.$d&&(S.$d.WIDGETS=new h.builtin.list([]),S.$d.LOG=new h.builtin.list([]))}catch{}const me=m.testCode?o+`
`+m.testCode:o,ge=()=>{var F;let S={};if(E&&E.$d&&E.$d.FILES)try{const ne=h.ffi.remapToJs(E.$d.FILES);ne&&typeof ne=="object"&&(S=ne,m.persistFiles!==!1&&tc(S),(F=m.onFilesChanged)==null||F.call(m,S))}catch(ne){console.warn("Remap VFS files warning:",ne)}return S};try{await h.misceval.asyncToPromise(()=>h.importMainWithBody("<stdin>",!1,me,!0),{"*":F=>{var ne;if((ne=m.isStopped)!=null&&ne.call(m))throw new Error("🛑 Остановлено пользователем");if(H||G>I)throw new Error(z);if(!(F&&F.data&&F.data.type==="Sk.promise")&&Date.now()-_>K)throw new Error(fy)}});const S=ge();return{success:!0,output:d,logs:$,files:S}}catch(S){const F=ge();let ne=S.toString?S.toString():String(S);(H||G>I||ne.includes("слишком много строк"))&&(ne=z);const k=ne.match(/line\s+(\d+)/i)||ne.match(/строка\s+(\d+)/i),g=k?parseInt(k[1],10):void 0;return{success:!1,output:d,logs:$,files:F,error:ne,errorLine:g}}}function my(o){let m=o.replace(/"""[\s\S]*?"""/g,'""').replace(/'''[\s\S]*?'''/g,"''");return m=m.replace(/"(?:\\.|[^"\\])*"/g,'""').replace(/'(?:\\.|[^'\\])*'/g,"''"),m=m.replace(/#.*$/gm,""),m}function lh(o){return o.split(`
`).map(m=>m.trimEnd()).join(`
`).trim()}async function py(o,m){const h=m.trim(),d=o.exercise.starterCode.trim();if(h===d||h==="")return{passed:!1,message:"Ты ещё ничего не изменил.",hint:"Напиши код решения задачи в редакторе."};const G=my(m);if(o.exercise.codeCheck){const H=o.exercise.codeCheck(G,m);if(H&&!H.passed)return H}for(let H=0;H<o.exercise.tests.length;H++){const I=o.exercise.tests[H],z=await or(m,{inputs:I.inputs,testCode:o.exercise.testCode});if(!z.success)return{passed:!1,message:`Ошибка при выполнении: ${z.error}`,hint:"Проверь правильность синтаксиса и отступов."};const $=lh(z.output),oe=lh(I.expected);if($!==oe){const K=I.inputs.length>0?I.inputs.join(", "):"(нет ввода)";return{passed:!1,message:`Тест ${H+1} не пройден.
Ввели: ${K}
Ждали:
${oe}
Получилось:
${$}`,hint:o.exercise.hint}}}return{passed:!0,message:"Все тесты успешно пройдены!"}}const mh=({isOpen:o,onClose:m,onFilesChanged:h})=>{const[d,G]=le.useState({}),[H,I]=le.useState(null),[z,$]=le.useState(!1),[oe,K]=le.useState(!1),[_,E]=le.useState(""),me=()=>{const g=Oa();G(g);const L=Object.keys(g);L.length>0?(!H||!g[H])&&I(L[0]):I(null)};if(le.useEffect(()=>{o&&me()},[o]),!o)return null;const ge=Object.keys(d),S=()=>{window.confirm("Удалить все созданные виртуальные файлы?")&&(uc(),G({}),I(null),h==null||h())},F=(g,L)=>{L.stopPropagation();const M={...d};if(delete M[g],tc(M),G(M),H===g){const B=Object.keys(M);I(B.length>0?B[0]:null)}h==null||h()},ne=()=>{!H||d[H]===void 0||(navigator.clipboard.writeText(d[H]),$(!0),setTimeout(()=>$(!1),1500))},k=g=>{g.preventDefault();const L=_.trim();if(!L)return;if(d[L]!==void 0){alert("Файл с таким именем уже существует");return}const M={...d,[L]:""};tc(M),G(M),I(L),E(""),K(!1),h==null||h()};return s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4",children:s.jsxs("div",{className:"bg-white rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-2xl max-w-2xl w-full flex flex-col max-h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-150",children:[s.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-[#E3E3E9] bg-[#F7F7FA]",children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx("div",{className:"w-8 h-8 rounded-lg bg-[#0A7A50]/15 text-[#0A7A50] flex items-center justify-center",children:s.jsx(ac,{className:"w-4 h-4"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-[15px] font-black text-[#0B0B0F]",children:"Виртуальные файлы программы"}),s.jsxs("p",{className:"text-[11px] text-[#63636E]",children:["Файлы, созданные через ",s.jsx("code",{className:"text-[#0A54C4]",children:"open(...)"})," в Python (сохраняются между запусками)"]})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[ge.length>0&&s.jsxs("button",{onClick:S,className:"px-2.5 py-1.5 rounded-lg border border-[#D4126C]/30 text-[#D4126C] hover:bg-[#D4126C]/10 text-[11px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer",title:"Очистить все файлы",children:[s.jsx(Di,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Очистить все"})]}),s.jsx("button",{onClick:m,className:"p-1.5 rounded-lg hover:bg-[#E3E3E9] text-[#63636E] transition-colors cursor-pointer",children:s.jsx(ec,{className:"w-4 h-4"})})]})]}),ge.length===0?s.jsxs("div",{className:"p-8 text-center space-y-3",children:[s.jsx("div",{className:"w-12 h-12 rounded-full bg-[#F1F1F4] text-[#63636E] flex items-center justify-center mx-auto",children:s.jsx(Xp,{className:"w-6 h-6"})}),s.jsx("p",{className:"text-[13px] font-bold text-[#0B0B0F]",children:"Пока нет созданных файлов"}),s.jsx("p",{className:"text-[12px] text-[#63636E] max-w-md mx-auto",children:"Когда твоя программа выполнит код записи в файл, например:"}),s.jsx("pre",{className:"bg-[#15151D] text-[#4FF0A7] p-3 rounded-xl text-[12px] font-mono inline-block text-left max-w-md",children:`with open("notes.txt", "w") as f:
    f.write("Привет из Python!")`}),s.jsx("p",{className:"text-[11.5px] text-[#63636E]",children:"Файл автоматически появится здесь и сохранится даже после перезапуска!"}),oe?s.jsxs("form",{onSubmit:k,className:"flex items-center justify-center gap-2 mt-3",children:[s.jsx("input",{type:"text",value:_,onChange:g=>E(g.target.value),placeholder:"Имя файла (напр. data.txt)",className:"px-3 py-1.5 text-[12px] border border-[#E3E3E9] rounded-lg outline-none font-mono",autoFocus:!0}),s.jsx("button",{type:"submit",className:"px-3 py-1.5 bg-[#0A7A50] text-white text-[12px] font-bold rounded-lg cursor-pointer",children:"Добавить"}),s.jsx("button",{type:"button",onClick:()=>K(!1),className:"px-2.5 py-1.5 text-[12px] text-[#63636E] hover:text-[#0B0B0F] cursor-pointer",children:"Отмена"})]}):s.jsx("div",{children:s.jsxs("button",{onClick:()=>K(!0),className:"mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0A7A50] text-white text-[11.5px] font-bold rounded-lg hover:brightness-110 cursor-pointer shadow-xs",children:[s.jsx(Zp,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Создать тестовый файл вручную"})]})})]}):s.jsxs("div",{className:"flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden min-h-[300px]",children:[s.jsxs("div",{className:"md:col-span-4 border-r border-[#E3E3E9] p-2 space-y-1 overflow-y-auto bg-[#FAFAFC]",children:[s.jsxs("div",{className:"flex items-center justify-between px-2 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#63636E]",children:[s.jsxs("span",{children:["Файлы (",ge.length,")"]}),s.jsxs("button",{onClick:()=>K(!0),className:"text-[#0A7A50] hover:underline flex items-center gap-0.5 font-bold cursor-pointer",children:[s.jsx(Zp,{className:"w-3 h-3"}),s.jsx("span",{children:"Создать"})]})]}),oe&&s.jsxs("form",{onSubmit:k,className:"p-2 bg-white rounded-lg border border-[#0A7A50] space-y-1.5",children:[s.jsx("input",{type:"text",value:_,onChange:g=>E(g.target.value),placeholder:"Имя файла...",className:"w-full px-2 py-1 text-[11px] border border-[#E3E3E9] rounded font-mono outline-none",autoFocus:!0}),s.jsxs("div",{className:"flex items-center justify-end gap-1",children:[s.jsx("button",{type:"button",onClick:()=>K(!1),className:"px-2 py-0.5 text-[10px] text-[#63636E]",children:"Отмена"}),s.jsx("button",{type:"submit",className:"px-2 py-0.5 text-[10px] bg-[#0A7A50] text-white rounded font-bold",children:"OK"})]})]}),ge.map(g=>{const L=H===g,M=d[g]||"";M.split(`
`).length;const B=new Blob([M]).size;return s.jsxs("div",{onClick:()=>I(g),className:`flex items-center justify-between p-2 rounded-xl text-[12px] font-mono cursor-pointer transition-colors group ${L?"bg-[#0A7A50]/15 text-[#0A7A50] font-bold border border-[#0A7A50]/30":"hover:bg-[#EAEAEF] text-[#0B0B0F]"}`,children:[s.jsxs("div",{className:"flex items-center gap-2 truncate",children:[s.jsx(Xp,{className:"w-3.5 h-3.5 shrink-0"}),s.jsx("span",{className:"truncate",children:g})]}),s.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[s.jsxs("span",{className:"text-[10px] text-[#63636E]",children:[B," б"]}),s.jsx("button",{onClick:R=>F(g,R),className:"opacity-0 group-hover:opacity-100 p-1 hover:text-[#D4126C] rounded transition-opacity",title:"Удалить файл",children:s.jsx(Di,{className:"w-3 h-3"})})]})]},g)})]}),s.jsx("div",{className:"md:col-span-8 flex flex-col bg-[#15151D] text-[#E3E3E9] overflow-hidden",children:H?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-[#2C2C3A] bg-[#1E1E28] text-[11px] font-mono",children:[s.jsx("span",{className:"text-[#4FF0A7] font-bold",children:H}),s.jsx("button",{onClick:ne,className:"flex items-center gap-1 px-2 py-1 rounded bg-[#2C2C3A] hover:bg-[#38384A] text-white cursor-pointer transition-colors text-[10.5px]",children:z?s.jsxs(s.Fragment,{children:[s.jsx(dr,{className:"w-3 h-3 text-[#4FF0A7]"}),s.jsx("span",{children:"Скопировано"})]}):s.jsxs(s.Fragment,{children:[s.jsx(Ci,{className:"w-3 h-3"}),s.jsx("span",{children:"Копировать"})]})})]}),s.jsx("div",{className:"flex-1 p-3 font-mono text-[12px] overflow-auto whitespace-pre leading-relaxed select-text",children:d[H]||s.jsx("span",{className:"text-[#8E8EA0] italic",children:"(файл пуст)"})})]}):s.jsx("div",{className:"flex-1 flex items-center justify-center text-[#8E8EA0] text-[12px]",children:"Выберите файл слева для просмотра"})})]}),s.jsxs("div",{className:"p-3 border-t border-[#E3E3E9] bg-[#F7F7FA] flex items-center justify-between text-[11px] text-[#63636E]",children:[s.jsxs("span",{children:["Всего файлов: ",ge.length]}),s.jsx("button",{onClick:m,className:"px-3 py-1.5 bg-[#0B0B0F] hover:bg-[#2C2C3A] text-white font-bold rounded-lg cursor-pointer transition-colors text-[11.5px]",children:"Закрыть"})]})]})})};function ur(){var z,$,oe,K;const o=typeof window<"u"?window.Sk:null;if(!o||!o.sysmodules)return{hasTk:!1,root:null,widgets:[],log:[]};let m=null;try{m=o.sysmodules.quick$lookup(new o.builtin.str("tkinter"))}catch{}if(!m||!m.$d)return{hasTk:!1,root:null,widgets:[],log:[]};const h=m.$d.WIDGETS&&m.$d.WIDGETS.v?m.$d.WIDGETS.v:[],d=m.$d.LOG&&m.$d.LOG.v?m.$d.LOG.v:[];if(h.length===0)return{hasTk:!1,root:null,widgets:[],log:[]};let G=null;const H=[];for(let _=0;_<h.length;_++){const E=h[_];if(!E)continue;let me="Widget";E.$d&&E.$d.kind?me=typeof E.$d.kind=="string"?E.$d.kind:E.$d.kind.v||"Widget":E.kind&&(me=typeof E.kind=="string"?E.kind:E.kind.v||"Widget");let ge={};if(E.$d&&E.$d.opts)try{const Q=o.ffi.remapToJs(E.$d.opts);Q&&typeof Q=="object"&&(ge=Q)}catch{}let S=null,F={};if(E.$d&&E.$d.layout&&E.$d.layout.v){const Q=E.$d.layout.v;if(Q.length>=2){S=((z=Q[0])==null?void 0:z.v)||Q[0];try{F=o.ffi.remapToJs(Q[1])||{}}catch{}}}let ne="";E.$d&&E.$d.text!==void 0?ne=typeof E.$d.text=="string"?E.$d.text:E.$d.text.v!==void 0?String(E.$d.text.v):String(E.$d.text):E.text!==void 0&&(ne=typeof E.text=="string"?E.text:E.text.v!==void 0?String(E.text.v):String(E.text));let k=[];E.$d&&E.$d.items&&E.$d.items.v&&(k=E.$d.items.v.map(Q=>Q&&Q.v!==void 0?String(Q.v):String(Q)));let g=[];if(E.$d&&E.$d.item_opts&&E.$d.item_opts.v)try{const Q=o.ffi.remapToJs(E.$d.item_opts);Array.isArray(Q)&&(g=Q)}catch{}let L=[];E.$d&&E.$d.selected&&E.$d.selected.v&&(L=E.$d.selected.v.map(Q=>Q&&Q.v!==void 0?Number(Q.v):Number(Q)));let M;E.$d&&E.$d.val!==void 0?M=typeof E.$d.val=="number"?E.$d.val:E.$d.val.v!==void 0?Number(E.$d.val.v):Number(E.$d.val):E.val!==void 0?M=typeof E.val=="number"?E.val:E.val.v!==void 0?Number(E.val.v):Number(E.val):ge.from_!==void 0?M=Number(ge.from_):ge.from!==void 0&&(M=Number(ge.from));let B;const R=(($=E.$d)==null?void 0:$.var)||E.var;if(R){const Q=((oe=R.$d)==null?void 0:oe.v)!==void 0?R.$d.v:R.v;B=(Q==null?void 0:Q.v)!==void 0?!!Q.v:!!Q}const ee={pyWidget:E,id:_,kind:me,master:((K=E.$d)==null?void 0:K.master)||E.master,opts:ge,layoutType:S,layoutOpts:F,text:ne,items:k,itemOpts:g,selected:L,val:M,isChecked:B};me==="Tk"?G=ee:H.push(ee)}const I=[];for(let _=0;_<d.length;_++){const E=d[_];try{const me=o.ffi.remapToJs(E);Array.isArray(me)&&me.length>=3&&I.push({kind:String(me[0]),title:String(me[1]),message:String(me[2])})}catch{}}return{hasTk:G!==null||H.length>0,root:G,widgets:H,log:I}}const ph=({onStop:o,onRefresh:m,isAlive:h})=>{var Ae,Ve;const[d,G]=le.useState(()=>ur()),[H,I]=le.useState(null),[z,$]=le.useState(0),oe=le.useCallback(()=>{const j=ur();if(G(j),j.log.length>z){const re=j.log[j.log.length-1];I(re),$(j.log.length)}},[z]);if(le.useEffect(()=>{oe()},[oe]),!d.hasTk)return null;const{root:K,widgets:_}=d,E=((Ae=K==null?void 0:K.opts)==null?void 0:Ae.title)||"Tkinter Window",me=((Ve=K==null?void 0:K.opts)==null?void 0:Ve.geometry)||"400x260";let ge=420,S=260;const F=String(me).match(/(\d+)x(\d+)/);F&&(ge=Math.max(300,Math.min(680,parseInt(F[1],10))),S=Math.max(180,Math.min(500,parseInt(F[2],10))));const ne=async j=>{const re=window.Sk;if(re)try{let T=null;j.pyWidget&&j.pyWidget.$d&&j.pyWidget.$d.opts&&(T=re.abstr.objectGetItem(j.pyWidget.$d.opts,new re.builtin.str("command"),!0)),!T&&j.opts&&typeof j.opts.command=="function"&&(T=j.opts.command),T&&T!==re.builtin.none.none$&&await re.misceval.asyncToPromise(()=>re.misceval.callsimOrSuspendArray(T,[]))}catch(T){console.warn("Tkinter button command error:",T)}finally{oe(),m==null||m()}},k=(j,re)=>{const T=window.Sk;if(j.pyWidget){const V=T?new T.builtin.str(re):re;j.pyWidget.$d&&(j.pyWidget.$d.text=V),j.pyWidget.text=V}oe()},g=(j,re)=>{const T=window.Sk;if(j.pyWidget&&T){const V=new T.builtin.list([new T.builtin.int_(re)]);j.pyWidget.$d&&(j.pyWidget.$d.selected=V),j.pyWidget.selected=V}oe()},L=async(j,re)=>{var P,he;g(j,re);const T=window.Sk;if(!T)return;let V=null;if((he=(P=j.pyWidget)==null?void 0:P.$d)!=null&&he.opts)try{V=T.abstr.objectGetItem(j.pyWidget.$d.opts,new T.builtin.str("bind:<Double-Button-1>"),!0),(!V||V===T.builtin.none.none$)&&(V=T.abstr.objectGetItem(j.pyWidget.$d.opts,new T.builtin.str("bind:<Double-1>"),!0))}catch{}if(V&&V!==T.builtin.none.none$)try{await T.misceval.asyncToPromise(()=>T.misceval.callsimOrSuspendArray(V,[new T.builtin.object]))}catch{try{await T.misceval.asyncToPromise(()=>T.misceval.callsimOrSuspendArray(V,[]))}catch(b){console.warn("Tkinter Listbox double-click error:",b)}}finally{oe(),m==null||m()}},M=async(j,re)=>{const T=window.Sk;j.pyWidget&&(j.pyWidget.$d&&(j.pyWidget.$d.val=T?new T.builtin.int_(re):re),j.pyWidget.val=re);try{let V=null;j.pyWidget&&j.pyWidget.$d&&j.pyWidget.$d.opts&&(V=T.abstr.objectGetItem(j.pyWidget.$d.opts,new T.builtin.str("command"),!0)),!V&&j.opts&&typeof j.opts.command=="function"&&(V=j.opts.command),V&&V!==T.builtin.none.none$&&await T.misceval.asyncToPromise(()=>T.misceval.callsimOrSuspendArray(V,[new T.builtin.str(String(re))]))}catch(V){console.warn("Tkinter Scale command error:",V)}finally{oe(),m==null||m()}},B=async j=>{var V,P,he,b;const re=window.Sk,T=((P=(V=j.pyWidget)==null?void 0:V.$d)==null?void 0:P.var)||((he=j.pyWidget)==null?void 0:he.var);if(T){const p=((b=T.$d)==null?void 0:b.v)!==void 0?T.$d.v:T.v,W=!((p==null?void 0:p.v)!==void 0?!!p.v:!!p);T.$d&&(T.$d.v=re?new re.builtin.bool(W):W),T.v=W}try{let p=null;j.pyWidget&&j.pyWidget.$d&&j.pyWidget.$d.opts&&(p=re.abstr.objectGetItem(j.pyWidget.$d.opts,new re.builtin.str("command"),!0)),!p&&j.opts&&typeof j.opts.command=="function"&&(p=j.opts.command),p&&p!==re.builtin.none.none$&&await re.misceval.asyncToPromise(()=>re.misceval.callsimOrSuspendArray(p,[]))}catch(p){console.warn("Tkinter Checkbutton command error:",p)}finally{oe(),m==null||m()}},R=async()=>{var re,T;const j=window.Sk;if(j&&((T=(re=K==null?void 0:K.pyWidget)==null?void 0:re.$d)!=null&&T.opts)){let V=null;try{V=j.abstr.objectGetItem(K.pyWidget.$d.opts,new j.builtin.str("protocol:WM_DELETE_WINDOW"),!0)}catch{}if(V&&V!==j.builtin.none.none$)try{await j.misceval.asyncToPromise(()=>j.misceval.callsimOrSuspendArray(V,[]))}catch(P){console.warn("protocol WM_DELETE_WINDOW error:",P)}}o==null||o()},ee=j=>{if(!j)return{fontSize:"14px"};if(typeof j=="number")return{fontSize:`${j}px`};if(Array.isArray(j)){const re=j[1]?`${j[1]}px`:"14px",T=j[2]==="bold"?"bold":"normal";return{fontSize:re,fontWeight:T}}if(typeof j=="string"){const T=j.split(" ").find(V=>/^\d+$/.test(V));return{fontSize:T?`${T}px`:"14px"}}return{fontSize:"14px"}},Q=_.some(j=>j.layoutType==="grid"),pe=j=>{const re=ee(j.opts.font),T=j.opts.fg||j.opts.foreground||void 0,V=j.opts.bg||j.opts.background||void 0,P=j.opts.width?`${j.opts.width*8+16}px`:void 0,he=j.layoutOpts.pady?Number(j.layoutOpts.pady):4,b=j.layoutOpts.padx?Number(j.layoutOpts.padx):4,p={marginTop:`${he}px`,marginBottom:`${he}px`,marginLeft:`${b}px`,marginRight:`${b}px`};if(j.layoutType==="grid"){const O=j.layoutOpts.row!==void 0?Number(j.layoutOpts.row):0,W=j.layoutOpts.column!==void 0?Number(j.layoutOpts.column):0,c=j.layoutOpts.columnspan!==void 0?Number(j.layoutOpts.columnspan):1;p.gridRow=`${O+1}`,p.gridColumn=`${W+1} / span ${c}`}switch(j.kind){case"Label":return s.jsx("div",{style:{...p,color:T||"#1F2937",backgroundColor:V||"transparent",...re},className:"select-text leading-snug font-medium transition-colors",children:j.opts.text||""},j.id);case"Button":return s.jsx("div",{style:p,children:s.jsx("button",{onClick:()=>ne(j),style:{color:T||"#111827",backgroundColor:V||"#E5E7EB",width:P||"auto",...re},className:"px-3.5 py-1.5 rounded-md border border-[#9CA3AF] shadow-xs hover:brightness-95 active:brightness-90 active:scale-98 transition-all cursor-pointer font-semibold",children:j.opts.text||"Button"})},j.id);case"Entry":return s.jsx("div",{style:p,className:"w-full max-w-[320px]",children:s.jsx("input",{type:"text",value:j.text,onChange:O=>k(j,O.target.value),style:{color:T||"#111827",backgroundColor:V||"#FFFFFF",width:P||"100%",...re},className:"px-2.5 py-1 rounded-md border border-[#9CA3AF] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none shadow-inner transition-all font-mono",placeholder:"Ввод текста..."})},j.id);case"Listbox":return s.jsx("div",{style:p,className:"w-full max-w-[380px]",children:s.jsx("div",{style:{backgroundColor:V||"#FFFFFF",minHeight:"120px",maxHeight:"220px"},className:"border border-[#9CA3AF] rounded-md overflow-y-auto divide-y divide-[#E5E7EB] font-sans text-[13px] shadow-inner",children:j.items.length===0?s.jsx("div",{className:"p-3 text-[12px] text-[#9CA3AF] italic text-center",children:"Список пуст"}):j.items.map((O,W)=>{var Z;const c=j.selected.includes(W),D=((Z=j.itemOpts[W])==null?void 0:Z.fg)||T||"#1F2937";return s.jsx("div",{onClick:()=>g(j,W),onDoubleClick:()=>L(j,W),style:{color:D},className:`px-3 py-1.5 cursor-pointer select-none transition-colors ${c?"bg-[#2563EB] text-white font-semibold":"hover:bg-[#F3F4F6]"}`,title:"Клик — выделить, двойной клик — запустить",children:O},W)})})},j.id);case"Scale":{const O=j.opts.from_!==void 0?Number(j.opts.from_):j.opts.from!==void 0?Number(j.opts.from):0,W=j.opts.to!==void 0?Number(j.opts.to):100,c=j.opts.label||"",D=j.val??O;return s.jsxs("div",{style:p,className:"flex flex-col items-center gap-1 w-full max-w-[280px]",children:[c&&s.jsxs("div",{className:"text-[12px] font-semibold text-[#374151] self-start flex justify-between w-full",children:[s.jsx("span",{children:c}),s.jsx("span",{className:"font-mono text-[#0055EA] font-bold",children:D})]}),s.jsx("input",{type:"range",min:O,max:W,value:D,onChange:Z=>M(j,Number(Z.target.value)),className:"w-full accent-[#0055EA] cursor-pointer h-2 bg-[#D1D5DB] rounded-lg"}),!c&&s.jsx("div",{className:"text-[11px] font-mono text-[#4B5563] self-end",children:D})]},j.id)}case"Checkbutton":return s.jsx("div",{style:p,className:"flex items-center gap-2 select-none",children:s.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[s.jsx("input",{type:"checkbox",checked:!!j.isChecked,onChange:()=>B(j),className:"w-4 h-4 rounded text-[#0055EA] focus:ring-[#0055EA] accent-[#0055EA] cursor-pointer"}),s.jsx("span",{style:{color:T||"#1F2937",...re},className:"text-[13px] font-medium",children:j.opts.text||""})]})},j.id);case"Frame":return s.jsx("div",{style:{...p,backgroundColor:V||"transparent"},className:"p-1 border border-dashed border-[#D1D5DB] rounded-md w-full flex flex-wrap items-center justify-center gap-1",children:_.filter(O=>O.master===j.pyWidget).map(O=>pe(O))},j.id);default:return null}},ve=_.filter(j=>!j.master||j.master===(K==null?void 0:K.pyWidget));return s.jsxs("div",{className:"mt-4 pt-3 border-t border-[#E3E3E9] space-y-2",children:[s.jsxs("div",{className:"flex items-center justify-between text-[11px] font-bold text-[#63636E]",children:[s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsx(sh,{className:"w-4 h-4 text-[#0A54C4]"}),s.jsx("span",{className:"uppercase tracking-wider",children:"Предпросмотр окна Tkinter"}),h&&s.jsxs("span",{className:"flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0A7A50]/15 text-[#0A7A50] text-[10.5px]",children:[s.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#0A7A50] animate-pulse"}),"Окно активно"]})]}),o&&h&&s.jsxs("button",{onClick:R,className:"text-[11px] text-[#D4126C] hover:underline flex items-center gap-1 font-bold cursor-pointer",children:[s.jsx(sc,{className:"w-3 h-3 fill-current"}),s.jsx("span",{children:"Закрыть окно"})]})]}),s.jsx("div",{className:"flex justify-center p-2 bg-[#F1F1F4] rounded-2xl border border-[#E3E3E9] shadow-inner overflow-x-auto",children:s.jsxs("div",{style:{width:`${ge}px`,minHeight:`${S}px`},className:"relative bg-[#ECE9D8] rounded-t-lg rounded-b-md border-2 border-[#7F9DB9] shadow-xl flex flex-col font-sans transition-all text-[#111827]",children:[s.jsxs("div",{className:"bg-gradient-to-r from-[#0055EA] via-[#0A64E8] to-[#1E82F0] text-white px-2.5 py-1.5 rounded-t-[5px] flex items-center justify-between select-none shadow-xs",children:[s.jsxs("div",{className:"flex items-center gap-1.5 text-[12px] font-bold tracking-tight truncate max-w-[280px]",children:[s.jsx(Ti,{className:"w-3.5 h-3.5 text-[#FED766]"}),s.jsx("span",{children:E})]}),s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx("div",{className:"w-3.5 h-3.5 rounded-xs bg-white/20 border border-white/40 flex items-center justify-center text-[9px] hover:bg-white/30 cursor-default",children:"_"}),s.jsx("div",{className:"w-3.5 h-3.5 rounded-xs bg-white/20 border border-white/40 flex items-center justify-center text-[9px] hover:bg-white/30 cursor-default",children:"□"}),s.jsx("button",{onClick:R,className:"w-3.5 h-3.5 rounded-xs bg-[#E81123] hover:bg-[#F1424F] text-white flex items-center justify-center text-[10px] cursor-pointer",title:"Закрыть окно",children:"✕"})]})]}),s.jsxs("div",{className:"relative p-4 flex-1 flex flex-col items-center justify-start bg-[#F0F0F0]",children:[Q?s.jsx("div",{className:"grid grid-cols-4 gap-2 w-full justify-items-center items-center",children:ve.map(j=>pe(j))}):s.jsx("div",{className:"flex flex-col items-center justify-start w-full space-y-1",children:ve.map(j=>pe(j))}),H&&s.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center p-4 z-50 animate-in fade-in duration-150",children:s.jsxs("div",{className:"bg-white border-2 border-[#0055EA] rounded-lg shadow-2xl p-4 max-w-[320px] w-full space-y-3 font-sans",children:[s.jsxs("div",{className:"flex items-start gap-3",children:[H.kind==="info"&&s.jsx(c1,{className:"w-6 h-6 text-[#2563EB] shrink-0"}),H.kind==="warning"&&s.jsx(oh,{className:"w-6 h-6 text-[#F59E0B] shrink-0"}),H.kind==="error"&&s.jsx(qg,{className:"w-6 h-6 text-[#EF4444] shrink-0"}),H.kind==="вопрос"&&s.jsx(rh,{className:"w-6 h-6 text-[#8B5CF6] shrink-0"}),s.jsxs("div",{className:"flex-1 space-y-1",children:[s.jsx("div",{className:"font-bold text-[13px] text-[#111827]",children:H.title||"Сообщение"}),s.jsx("div",{className:"text-[12px] text-[#4B5563] leading-relaxed break-words whitespace-pre-wrap",children:H.message})]})]}),s.jsx("div",{className:"flex justify-end pt-1",children:s.jsx("button",{onClick:()=>I(null),className:"px-4 py-1 bg-[#E5E7EB] hover:bg-[#D1D5DB] text-[#111827] text-[12px] font-bold rounded border border-[#9CA3AF] cursor-pointer",children:"OK"})})]})})]})]})}),s.jsx("div",{className:"text-center text-[11px] text-[#63636E] italic",children:"Это упрощённый предпросмотр. Настоящее окно — в VS Code."})]})},hy=({lesson:o,isSolved:m,onSolveLesson:h,onSelectLesson:d,onBackToCourse:G,onOpenSandboxWithCode:H})=>{const[I,z]=le.useState(o.exercise.starterCode),[$,oe]=le.useState(`Готов к запуску кода.
`),[K,_]=le.useState(!1),[E,me]=le.useState(null),[ge,S]=le.useState(""),[F,ne]=le.useState(!1),[k,g]=le.useState(!1),[L,M]=le.useState(null),[B,R]=le.useState({status:"none",message:""}),[ee,Q]=le.useState(!1),[pe,ve]=le.useState(!1),[Ae,Ve]=le.useState(()=>typeof window<"u"?Object.keys(Oa()).length:0),j=()=>{Ve(Object.keys(Oa()).length)},[re,T]=le.useState(!1),[V,P]=le.useState({summary:!0,steps:!1,mistakes:!1,quiz:!1,cheatsheet:!1,exercise:!1}),[he,b]=le.useState({}),[p,O]=le.useState({}),W=async(X,se)=>{O(Be=>({...Be,[X]:{running:!0,output:""}}));let Re="";try{const Be=await or(se,{onOutput:Ie=>{Re+=Ie,O(ot=>({...ot,[X]:{running:!0,output:Re}}))}});O(Ie=>({...Ie,[X]:{running:!1,output:Be.output||Re||"(программа выполнилась без вывода)"}}))}catch(Be){const Ie=(Be==null?void 0:Be.message)||String(Be);O(ot=>({...ot,[X]:{running:!1,output:Re?`${Re}
${Ie}`:Ie}}))}},c=X=>{P(se=>({...se,[X]:!se[X]}))},D=(X,se,Re)=>{b(Be=>({...Be,[X]:se})),se===Re?Rn():Iu()},Z=le.useRef(null),Y=le.useRef(null),te=le.useRef(!1),ue=le.useRef(""),de=le.useRef(0),J=le.useRef(null),ie=()=>{if(J.current&&(clearTimeout(J.current),J.current=null),ue.current){const X=ue.current;ue.current="",oe(se=>se+X),de.current=Date.now()}},Se=(X,se=!1)=>{ue.current+=X;const Re=Date.now();se||Re-de.current>=100?ie():J.current||(J.current=setTimeout(ie,Math.max(10,100-(Re-de.current))))};le.useEffect(()=>()=>{J.current&&clearTimeout(J.current)},[]),le.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"});const X=localStorage.getItem(`code_${o.id}`);z(X!==null?X:o.exercise.starterCode),ie(),ue.current="",oe(`Готов к запуску кода.
`),R({status:"none",message:""}),ne(!1),g(!1),T(!1),P({summary:!0,steps:!1,mistakes:!1,quiz:!1,cheatsheet:!1,exercise:!1}),b({}),O({})},[o.id]);const _e=X=>{z(X),localStorage.setItem(`code_${o.id}`,X)},Xe=X=>{_e(X),Rn()},Je=(X,se)=>{navigator.clipboard.writeText(se),M(X),Rn(),setTimeout(()=>M(null),1800)};le.useEffect(()=>{Z.current&&(Z.current.scrollTop=Z.current.scrollHeight)},[$,E]),le.useEffect(()=>{E&&setTimeout(()=>{var X;return(X=Y.current)==null?void 0:X.focus()},50)},[E]);const Oe=lc(),Ee=Oe.findIndex(X=>X.id===o.id),et=Ee>0?Oe[Ee-1]:null,We=Ee<Oe.length-1?Oe[Ee+1]:null,Qt=X=>{if(X.preventDefault(),E!=null&&E.resolve){const se=ge;Se(se+`
`,!0);const Re=E.resolve;me(null),S(""),Re(se)}},un=()=>{te.current=!1,E!=null&&E.resolve&&E.resolve(""),me(null),_(!1),T(!1),ie(),Se(`
🛑 Остановлено пользователем
`,!0)},_n=async()=>{K&&(un(),await new Promise(X=>setTimeout(X,60))),T(!1),te.current=!0,_(!0),Rn(),ue.current="",de.current=Date.now(),oe(`▶ Запуск программы...
`);try{const X=await or(I,{onOutput:se=>Se(se),onInput:se=>(ie(),new Promise(Re=>{me({resolve:Re})})),onFilesChanged:()=>{j()},isStopped:()=>!te.current});X.success?(Se(`✨ Программа завершена
`,!0),ur().hasTk&&T(!0)):X.error&&Se(`
❌ ${X.error}
`,!0)}catch(X){const se=X.toString?X.toString():String(X);Se(`
❌ ${se}
`,!0)}finally{ie(),te.current=!1,_(!1),me(null)}},tn=async()=>{K&&un(),T(!1),Rn(),te.current=!0,_(!0),ue.current="",de.current=Date.now(),oe(`🔍 Проверка решения...
`);try{const X=await py(o,I);X.passed?(R({status:"success",message:X.message}),Se(`
✅ `+X.message+`
`,!0),sr(),ny({particleCount:50,spread:70,origin:{y:.6}}),h(o.id)):(R({status:"error",message:X.message,hint:X.hint}),Se(`
❌ ${X.message}
`,!0),Iu())}catch(X){const se=X.toString?X.toString():String(X);Se(`
❌ Ошибка при проверке: ${se}
`,!0),R({status:"error",message:`Проверка завершилась с ошибкой: ${se}`,hint:"Проверь синтаксис, закрывающие кавычки, двоеточия и отступы."}),Iu()}finally{ie(),te.current=!1,_(!1),me(null)}},pl=()=>{confirm("Сбросить код к начальному шаблону урока?")&&(_e(o.exercise.starterCode),R({status:"none",message:""}))};return s.jsxs("div",{className:"max-w-[1400px] mx-auto p-3 md:p-6 space-y-4 font-mono select-none",children:[ee&&s.jsx(dh,{isModal:!0,onClose:()=>Q(!1),onInsertCode:X=>{_e(I+`
`+X),Q(!1)},onOpenInSandbox:H}),s.jsxs("header",{className:"flex items-center justify-between gap-4 flex-wrap bg-white p-3 md:p-4 rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-xs",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("button",{onClick:G,className:"flex items-center gap-2 px-3 py-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0B0B0F] font-bold text-[12px] transition-all cursor-pointer",children:"← Все уроки"}),s.jsx("div",{className:"h-5 w-[1.5px] bg-[#E3E3E9] hidden sm:block"}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("span",{className:"text-[11px] font-bold text-[#63636E]",children:["Урок ",Ee+1," из ",Oe.length]}),m&&s.jsxs("span",{className:"inline-flex items-center gap-1 text-[11px] font-extrabold px-2 py-0.5 rounded-md bg-[#0A7A50]/15 text-[#0A7A50]",children:[s.jsx(Da,{className:"w-3 h-3"}),"Пройден"]})]}),s.jsx("h1",{className:"text-[16px] md:text-[18px] font-black text-[#0B0B0F]",children:o.title})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("button",{onClick:()=>Q(!0),className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0A54C4] font-bold text-[12px] transition-all cursor-pointer border border-[#E3E3E9]",title:"Открыть справочник функций (нажмите /)",children:[s.jsx(Ma,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Справочник функций"})]}),s.jsxs("button",{disabled:!et,onClick:()=>et&&d(et.id),className:"flex items-center gap-1 px-3 py-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] disabled:opacity-40 text-[#0B0B0F] font-bold text-[12px] transition-all cursor-pointer disabled:cursor-not-allowed",children:[s.jsx(Cg,{className:"w-3.5 h-3.5"}),s.jsx("span",{className:"hidden sm:inline",children:"Назад"})]}),s.jsxs("button",{disabled:!We,onClick:()=>We&&d(We.id),className:"flex items-center gap-1 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#0A54C4] to-[#5636E0] text-white font-bold text-[12px] hover:brightness-110 disabled:opacity-40 transition-all cursor-pointer disabled:cursor-not-allowed shadow-xs",children:[s.jsx("span",{className:"hidden sm:inline",children:"Вперед"}),s.jsx(Wu,{className:"w-3.5 h-3.5"})]})]})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-4 items-start",children:[s.jsxs("div",{className:"lg:col-span-5 bg-white rounded-2xl border-[1.5px] border-[#E3E3E9] p-4 md:p-5 shadow-xs space-y-3.5 max-h-[860px] overflow-y-auto",children:[s.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-[#E3E3E9] text-[11px] text-[#63636E]",children:[s.jsx("span",{className:"font-bold uppercase tracking-wider",children:"Разделы урока"}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:()=>P({summary:!0,steps:!0,mistakes:!0,quiz:!0,cheatsheet:!0,exercise:!0}),className:"hover:text-[#0A54C4] font-bold cursor-pointer transition-colors",children:"Развернуть все"}),s.jsx("span",{children:"•"}),s.jsx("button",{onClick:()=>P({summary:!1,steps:!1,mistakes:!1,quiz:!1,cheatsheet:!1,exercise:!1}),className:"hover:text-[#0A54C4] font-bold cursor-pointer transition-colors",children:"Свернуть все"})]})]}),o.theory.story&&s.jsxs("div",{className:"bg-gradient-to-br from-[#1C1C28] to-[#121218] text-white rounded-2xl p-4 border border-[#2D2D3D] shadow-md space-y-3",children:[o.theory.story.letter&&s.jsxs("div",{className:"bg-[#242436] rounded-xl p-3.5 border border-[#3E3E54] space-y-2",children:[s.jsxs("div",{className:"flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-[#FED766]",children:[s.jsx(v1,{className:"w-4 h-4 text-[#FED766]"}),s.jsx("span",{children:"Входящее сообщение: Заказчик"})]}),s.jsx("div",{className:"text-[12.5px] font-mono leading-relaxed text-[#E3E3E9] whitespace-pre-line border-l-2 border-[#FED766] pl-3 py-0.5",children:o.theory.story.letter})]}),o.theory.story.task&&s.jsxs("div",{className:"flex items-start gap-2.5 text-[12.5px] text-[#A6A6B8] bg-[#1A1A26] p-3 rounded-xl border border-[#2E2E40]",children:[s.jsx(Kp,{className:"w-4 h-4 text-[#0A7A50] shrink-0 mt-0.5"}),s.jsxs("div",{children:[s.jsx("span",{className:"font-bold text-white",children:"Задача на день: "}),s.jsx("span",{children:o.theory.story.task})]})]}),o.theory.story.quotes&&o.theory.story.quotes.length>0&&s.jsxs("div",{className:"space-y-2 pt-1",children:[s.jsxs("div",{className:"text-[10.5px] font-black uppercase tracking-wider text-[#8E8EA0] flex items-center gap-1.5",children:[s.jsx(_1,{className:"w-3.5 h-3.5 text-[#5636E0]"}),s.jsx("span",{children:"Реплики команды ProTeam"})]}),s.jsx("div",{className:"space-y-2",children:o.theory.story.quotes.map((X,se)=>s.jsxs("div",{className:"bg-[#181822] rounded-xl p-2.5 border border-[#2A2A3C] text-[12px] space-y-1",children:[s.jsxs("div",{className:"font-bold text-[#A5B4FC] text-[11.5px] flex items-center gap-1.5",children:[s.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#5636E0]"}),s.jsxs("span",{children:[X.speaker,":"]})]}),s.jsxs("p",{className:"text-[#E3E3E9] italic pl-3 leading-snug",children:["«",X.text,"»"]})]},se))})]})]}),s.jsxs("div",{className:"border border-[#E3E3E9] rounded-xl overflow-hidden bg-white shadow-2xs",children:[s.jsxs("button",{onClick:()=>c("summary"),className:"w-full p-3.5 bg-[#F7F7FA] hover:bg-[#F1F1F4] flex items-center justify-between text-left transition-colors cursor-pointer",children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx("div",{className:"w-7 h-7 rounded-lg bg-[#0A54C4]/10 text-[#0A54C4] flex items-center justify-center",children:s.jsx(cr,{className:"w-4 h-4"})}),s.jsx("span",{className:"font-extrabold text-[13.5px] text-[#0B0B0F]",children:"1. Простыми словами"})]}),s.jsx(ja,{className:`w-4 h-4 text-[#63636E] transition-transform duration-200 ${V.summary?"rotate-180 text-[#0A54C4]":""}`})]}),V.summary&&s.jsxs("div",{className:"p-4 space-y-3.5 border-t border-[#E3E3E9]",children:[s.jsx("div",{className:"space-y-2.5 text-[13px] leading-relaxed text-[#0B0B0F]",children:o.theory.summary.split(`

`).map((X,se)=>s.jsx("p",{className:"bg-[#F7F7FA] p-3 rounded-xl border border-[#E3E3E9]/80",children:X},se))}),o.theory.keyRule&&s.jsxs("div",{className:"bg-gradient-to-br from-[#0A54C4]/10 to-[#5636E0]/10 border border-[#0A54C4]/30 rounded-xl p-3.5 space-y-1.5",children:[s.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-[#0A54C4]",children:[s.jsx(Ti,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Главное правило:"})]}),s.jsx("div",{className:"text-[12.5px] font-bold text-[#0B0B0F] leading-snug",children:o.theory.keyRule})]}),(!o.theory.steps||o.theory.steps.length===0)&&o.theory.sections&&o.theory.sections.length>0&&s.jsx("div",{className:"space-y-3 pt-2 border-t border-[#E3E3E9]",children:o.theory.sections.map((X,se)=>s.jsxs("div",{className:"space-y-2",children:[s.jsx("h4",{className:"text-[13px] font-black text-[#0B0B0F]",children:X.heading}),s.jsx("p",{className:"text-[12.5px] text-[#63636E] leading-relaxed whitespace-pre-line",children:X.text}),X.codeExample&&s.jsxs("div",{className:"bg-[#16161F] text-[#E3E3E9] rounded-xl p-3 text-[12px] font-mono space-y-2 border border-[#2C2C3A]",children:[s.jsxs("div",{className:"flex items-center justify-between text-[11px] text-[#4FF0A7] border-b border-[#2C2C3A] pb-1.5",children:[s.jsx("span",{className:"font-bold",children:X.codeExample.title}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("button",{onClick:()=>Xe(X.codeExample.code),className:"flex items-center gap-1 text-[10.5px] text-[#4FF0A7] hover:underline cursor-pointer",children:[s.jsx(Ca,{className:"w-3 h-3"}),s.jsx("span",{children:"Вставить в редактор"})]}),s.jsxs("button",{onClick:()=>Je(`sec_${se}`,X.codeExample.code),className:"flex items-center gap-1 text-[10.5px] text-[#8E8EA0] hover:text-white cursor-pointer",children:[s.jsx(Ci,{className:"w-3 h-3"}),s.jsx("span",{children:L===`sec_${se}`?"Скопировано!":"Копировать"})]})]})]}),s.jsx("pre",{className:"text-white overflow-x-auto whitespace-pre leading-relaxed",children:X.codeExample.code})]})]},se))}),s.jsxs("button",{onClick:()=>P(X=>({...X,steps:!0})),className:"w-full py-2 px-3 rounded-lg bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0A54C4] font-bold text-[12px] flex items-center justify-center gap-1.5 cursor-pointer transition-colors",children:[s.jsx("span",{children:"Перейти к разбору по шагам"}),s.jsx(Wu,{className:"w-3.5 h-3.5"})]})]})]}),s.jsxs("div",{className:"border border-[#E3E3E9] rounded-xl overflow-hidden bg-white shadow-2xs",children:[s.jsxs("button",{onClick:()=>c("steps"),className:"w-full p-3.5 bg-[#F7F7FA] hover:bg-[#F1F1F4] flex items-center justify-between text-left transition-colors cursor-pointer",children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx("div",{className:"w-7 h-7 rounded-lg bg-[#0A7A50]/10 text-[#0A7A50] flex items-center justify-center",children:s.jsx(ml,{className:"w-4 h-4"})}),s.jsx("span",{className:"font-extrabold text-[13.5px] text-[#0B0B0F]",children:"2. Разбор по шагам"}),o.theory.steps&&o.theory.steps.length>0&&s.jsxs("span",{className:"px-2 py-0.5 rounded-full text-[10.5px] font-black bg-[#0A7A50]/15 text-[#0A7A50]",children:[o.theory.steps.length," шага"]})]}),s.jsx(ja,{className:`w-4 h-4 text-[#63636E] transition-transform duration-200 ${V.steps?"rotate-180 text-[#0A7A50]":""}`})]}),V.steps&&s.jsx("div",{className:"p-4 space-y-4 border-t border-[#E3E3E9]",children:o.theory.steps&&o.theory.steps.length>0?o.theory.steps.map((X,se)=>{var Re,Be;return s.jsxs("div",{className:"border border-[#E3E3E9] rounded-xl p-3.5 space-y-2.5 bg-[#FAFAFC]",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("span",{className:"inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-[#0A7A50] bg-[#0A7A50]/10 px-2 py-0.5 rounded-md",children:["Шаг ",se+1]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("button",{onClick:()=>W(`step_${se}`,X.code),disabled:(Re=p[`step_${se}`])==null?void 0:Re.running,className:"inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0A7A50] hover:bg-[#086140] text-white text-[11px] font-bold transition-colors cursor-pointer shadow-2xs disabled:opacity-50",title:"Запустить этот пример прямо здесь",children:[s.jsx(Rl,{className:"w-3 h-3 fill-white"}),s.jsx("span",{children:(Be=p[`step_${se}`])!=null&&Be.running?"Запуск...":"Запустить"})]}),s.jsxs("button",{onClick:()=>Xe(X.code),className:"inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0A54C4] hover:bg-[#08429E] text-white text-[11px] font-bold transition-colors cursor-pointer shadow-2xs",title:"Вставить этот код в редактор справа",children:[s.jsx(Ca,{className:"w-3 h-3"}),s.jsx("span",{children:"Вставить в редактор"})]}),s.jsxs("button",{onClick:()=>Je(`step_${se}`,X.code),className:"inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white border border-[#E3E3E9] text-[#63636E] hover:text-[#0B0B0F] text-[11px] font-bold transition-colors cursor-pointer",children:[s.jsx(Ci,{className:"w-3 h-3"}),s.jsx("span",{children:L===`step_${se}`?"Скопировано!":""})]})]})]}),s.jsx("div",{className:"bg-[#16161F] text-white rounded-lg p-2.5 text-[12px] font-mono overflow-x-auto whitespace-pre",children:X.code}),p[`step_${se}`]&&s.jsxs("div",{className:"bg-[#0B0B0F] border border-[#0A7A50]/40 rounded-lg p-2.5 text-[11.5px] font-mono text-white space-y-1",children:[s.jsxs("div",{className:"flex items-center justify-between text-[10.5px] text-[#4FF0A7] border-b border-[#2C2C3A] pb-1",children:[s.jsx("span",{className:"font-bold",children:"Вывод runPython:"}),s.jsx("button",{onClick:()=>O(Ie=>{const ot={...Ie};return delete ot[`step_${se}`],ot}),className:"text-[#8E8EA0] hover:text-white text-[10px] cursor-pointer",children:"Скрыть"})]}),s.jsx("pre",{className:"text-[#4FF0A7] whitespace-pre-wrap",children:p[`step_${se}`].output})]}),s.jsxs("div",{className:"bg-[#0B0B0F] text-[#4FF0A7] rounded-lg p-2 text-[11.5px] font-mono flex items-start gap-2 border border-[#2C2C3A]",children:[s.jsx("span",{className:"text-[#8E8EA0] shrink-0",children:"Ожидаемый вывод:"}),s.jsx("span",{className:"whitespace-pre-line",children:X.output})]}),s.jsx("div",{className:"text-[12px] text-[#44444F] leading-snug",children:X.explanation})]},se)}):s.jsx("div",{className:"text-[12px] text-[#63636E] italic bg-[#F7F7FA] p-3 rounded-lg",children:"Разбор по шагам для этого урока находится в разработке. Смотри примеры в разделе «Простыми словами»."})})]}),s.jsxs("div",{className:"border border-[#E3E3E9] rounded-xl overflow-hidden bg-white shadow-2xs",children:[s.jsxs("button",{onClick:()=>c("mistakes"),className:"w-full p-3.5 bg-[#F7F7FA] hover:bg-[#F1F1F4] flex items-center justify-between text-left transition-colors cursor-pointer",children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx("div",{className:"w-7 h-7 rounded-lg bg-[#D4126C]/10 text-[#D4126C] flex items-center justify-center",children:s.jsx(oh,{className:"w-4 h-4"})}),s.jsx("span",{className:"font-extrabold text-[13.5px] text-[#0B0B0F]",children:"3. Частые ошибки"}),o.theory.mistakes&&o.theory.mistakes.length>0&&s.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10.5px] font-black bg-[#D4126C]/15 text-[#D4126C]",children:o.theory.mistakes.length})]}),s.jsx(ja,{className:`w-4 h-4 text-[#63636E] transition-transform duration-200 ${V.mistakes?"rotate-180 text-[#D4126C]":""}`})]}),V.mistakes&&s.jsx("div",{className:"p-4 space-y-3.5 border-t border-[#E3E3E9]",children:o.theory.mistakes&&o.theory.mistakes.length>0?o.theory.mistakes.map((X,se)=>{var Re,Be,Ie,ot;return s.jsxs("div",{className:"border border-[#E3E3E9] rounded-xl p-3.5 space-y-2 bg-[#FAFAFC]",children:[s.jsxs("div",{className:"space-y-1",children:[s.jsxs("div",{className:"flex items-center justify-between text-[11px] font-bold text-[#D4126C]",children:[s.jsx("span",{children:"❌ Код с ошибкой:"}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("button",{onClick:()=>W(`mistake_wrong_${se}`,X.wrongCode),disabled:(Re=p[`mistake_wrong_${se}`])==null?void 0:Re.running,className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#D4126C] text-white hover:bg-[#B00E57] text-[10.5px] font-bold transition-colors cursor-pointer shadow-2xs disabled:opacity-50",title:"Запустить ошибочный код и увидеть реальную ошибку",children:[s.jsx(Rl,{className:"w-2.5 h-2.5 fill-white"}),s.jsx("span",{children:(Be=p[`mistake_wrong_${se}`])!=null&&Be.running?"...":"Запустить"})]}),s.jsxs("button",{onClick:()=>Xe(X.wrongCode),className:"inline-flex items-center gap-1 text-[10.5px] text-[#D4126C] hover:underline cursor-pointer",title:"Вставить ошибочный код, чтобы увидеть ошибку в терминале",children:[s.jsx(Ca,{className:"w-3 h-3"}),s.jsx("span",{children:"Вставить ошибку"})]})]})]}),s.jsx("pre",{className:"bg-[#FFF0F5] border border-[#D4126C]/30 text-[#0B0B0F] p-2 rounded-lg text-[12px] font-mono overflow-x-auto whitespace-pre",children:X.wrongCode}),p[`mistake_wrong_${se}`]&&s.jsxs("div",{className:"bg-[#1C0008] border border-[#D4126C]/50 rounded-lg p-2 text-[11px] font-mono text-[#FF85A1] space-y-1",children:[s.jsxs("div",{className:"flex items-center justify-between text-[10px] text-[#FFA3B9] border-b border-[#D4126C]/30 pb-0.5",children:[s.jsx("span",{className:"font-bold",children:"Вывод runPython:"}),s.jsx("button",{onClick:()=>O(At=>{const wt={...At};return delete wt[`mistake_wrong_${se}`],wt}),className:"text-[#FFA3B9] hover:underline text-[10px] cursor-pointer",children:"Скрыть"})]}),s.jsx("pre",{className:"whitespace-pre-wrap",children:p[`mistake_wrong_${se}`].output})]})]}),s.jsxs("div",{className:"bg-[#1C0008] border border-[#D4126C]/50 rounded-lg p-2 text-[11px] font-mono text-[#FF85A1] leading-snug",children:[s.jsx("span",{className:"text-[#FFA3B9] font-bold block mb-0.5",children:"Ошибка в консоли:"}),X.error]}),s.jsxs("div",{className:"space-y-1 pt-1",children:[s.jsxs("div",{className:"flex items-center justify-between text-[11px] font-bold text-[#0A7A50]",children:[s.jsx("span",{children:"✅ Как исправить:"}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("button",{onClick:()=>W(`mistake_fixed_${se}`,X.fixedCode),disabled:(Ie=p[`mistake_fixed_${se}`])==null?void 0:Ie.running,className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#0A7A50] text-white hover:bg-[#086140] text-[10.5px] font-bold transition-colors cursor-pointer shadow-2xs disabled:opacity-50",title:"Запустить исправленный код",children:[s.jsx(Rl,{className:"w-2.5 h-2.5 fill-white"}),s.jsx("span",{children:(ot=p[`mistake_fixed_${se}`])!=null&&ot.running?"...":"Запустить"})]}),s.jsxs("button",{onClick:()=>Xe(X.fixedCode),className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#0A54C4] text-white hover:bg-[#08429E] text-[10.5px] font-bold transition-colors cursor-pointer shadow-2xs",title:"Вставить исправленный код в редактор",children:[s.jsx(Ca,{className:"w-3 h-3"}),s.jsx("span",{children:"Вставить в редактор"})]})]})]}),s.jsx("pre",{className:"bg-[#F0FFF6] border border-[#0A7A50]/30 text-[#0B0B0F] p-2 rounded-lg text-[12px] font-mono overflow-x-auto whitespace-pre",children:X.fixedCode}),p[`mistake_fixed_${se}`]&&s.jsxs("div",{className:"bg-[#0B0B0F] border border-[#0A7A50]/40 rounded-lg p-2 text-[11px] font-mono text-white space-y-1",children:[s.jsxs("div",{className:"flex items-center justify-between text-[10px] text-[#4FF0A7] border-b border-[#2C2C3A] pb-0.5",children:[s.jsx("span",{className:"font-bold",children:"Вывод runPython:"}),s.jsx("button",{onClick:()=>O(At=>{const wt={...At};return delete wt[`mistake_fixed_${se}`],wt}),className:"text-[#8E8EA0] hover:text-white text-[10px] cursor-pointer",children:"Скрыть"})]}),s.jsx("pre",{className:"text-[#4FF0A7] whitespace-pre-wrap",children:p[`mistake_fixed_${se}`].output})]})]}),s.jsx("p",{className:"text-[12px] text-[#555562] leading-snug pt-0.5",children:X.explanation})]},se)}):o.theory.commonMistakes&&o.theory.commonMistakes.length>0?s.jsx("ul",{className:"list-disc list-inside space-y-1.5 text-[12.5px] text-[#0B0B0F]",children:o.theory.commonMistakes.map((X,se)=>s.jsx("li",{children:X},se))}):s.jsx("div",{className:"text-[12px] text-[#63636E] italic bg-[#F7F7FA] p-3 rounded-lg",children:"Раздел частых ошибок для этого урока находится в разработке."})})]}),s.jsxs("div",{className:"border border-[#E3E3E9] rounded-xl overflow-hidden bg-white shadow-2xs",children:[s.jsxs("button",{onClick:()=>c("quiz"),className:"w-full p-3.5 bg-[#F7F7FA] hover:bg-[#F1F1F4] flex items-center justify-between text-left transition-colors cursor-pointer",children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx("div",{className:"w-7 h-7 rounded-lg bg-[#5636E0]/10 text-[#5636E0] flex items-center justify-center",children:s.jsx(Da,{className:"w-4 h-4"})}),s.jsx("span",{className:"font-extrabold text-[13.5px] text-[#0B0B0F]",children:"4. Проверь себя"}),o.theory.quiz&&o.theory.quiz.length>0&&s.jsxs("span",{className:"px-2 py-0.5 rounded-full text-[10.5px] font-black bg-[#5636E0]/15 text-[#5636E0]",children:[o.theory.quiz.length," вопроса"]})]}),s.jsx(ja,{className:`w-4 h-4 text-[#63636E] transition-transform duration-200 ${V.quiz?"rotate-180 text-[#5636E0]":""}`})]}),V.quiz&&s.jsx("div",{className:"p-4 space-y-4 border-t border-[#E3E3E9]",children:o.theory.quiz&&o.theory.quiz.length>0?o.theory.quiz.map((X,se)=>{const Re=he[se],Be=Re!==void 0,Ie=Re===X.correct;return s.jsxs("div",{className:"border border-[#E3E3E9] rounded-xl p-3.5 space-y-2.5 bg-[#FAFAFC]",children:[s.jsxs("div",{className:"flex items-center justify-between text-[11px] font-bold text-[#63636E]",children:[s.jsxs("span",{children:["Вопрос ",se+1," из ",o.theory.quiz.length]}),s.jsx("span",{className:"text-[#0B0B0F]",children:"Что выведет этот код?"})]}),s.jsx("pre",{className:"bg-[#16161F] text-white p-2.5 rounded-lg text-[12px] font-mono overflow-x-auto whitespace-pre",children:X.code}),s.jsx("div",{className:"space-y-1.5 pt-1",children:X.options.map((ot,At)=>{let wt="w-full text-left p-2.5 rounded-lg text-[12px] font-mono border transition-all cursor-pointer flex items-center justify-between ";return Be?At===X.correct?wt+="bg-[#0A7A50]/15 border-[#0A7A50] text-[#0A7A50] font-bold":Re===At&&!Ie?wt+="bg-[#D4126C]/15 border-[#D4126C] text-[#D4126C] font-bold":wt+="bg-white border-[#E3E3E9] opacity-50 text-[#8E8EA0]":wt+="bg-white hover:bg-[#F1F1F4] border-[#E3E3E9] text-[#0B0B0F]",s.jsxs("button",{onClick:()=>D(se,At,X.correct),className:wt,children:[s.jsx("span",{children:ot}),Be&&At===X.correct&&s.jsx(dr,{className:"w-4 h-4 text-[#0A7A50] shrink-0"}),Be&&Re===At&&!Ie&&s.jsx(Qp,{className:"w-4 h-4 text-[#D4126C] shrink-0"})]},At)})}),Be&&s.jsxs("div",{className:`p-2.5 rounded-lg text-[11.5px] leading-snug border ${Ie?"bg-[#F0FFF6] border-[#0A7A50]/30 text-[#0A7A50]":"bg-[#FFF0F5] border-[#D4126C]/30 text-[#D4126C]"}`,children:[s.jsx("span",{className:"font-bold block mb-0.5",children:Ie?"🎉 Правильно!":"Почти! Обрати внимание:"}),X.explanation]})]},se)}):s.jsx("div",{className:"text-[12px] text-[#63636E] italic bg-[#F7F7FA] p-3 rounded-lg",children:"Интерактивные вопросы для этого урока готовятся."})})]}),s.jsxs("div",{className:"border border-[#E3E3E9] rounded-xl overflow-hidden bg-white shadow-2xs",children:[s.jsxs("button",{onClick:()=>c("cheatsheet"),className:"w-full p-3.5 bg-[#F7F7FA] hover:bg-[#F1F1F4] flex items-center justify-between text-left transition-colors cursor-pointer",children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx("div",{className:"w-7 h-7 rounded-lg bg-[#B0700C]/10 text-[#B0700C] flex items-center justify-center",children:s.jsx(Ti,{className:"w-4 h-4"})}),s.jsx("span",{className:"font-extrabold text-[13.5px] text-[#0B0B0F]",children:"5. Шпаргалка"})]}),s.jsx(ja,{className:`w-4 h-4 text-[#63636E] transition-transform duration-200 ${V.cheatsheet?"rotate-180 text-[#B0700C]":""}`})]}),V.cheatsheet&&s.jsx("div",{className:"p-4 space-y-2 border-t border-[#E3E3E9]",children:o.theory.cheatsheet&&o.theory.cheatsheet.length>0?o.theory.cheatsheet.map((X,se)=>s.jsxs("div",{className:"flex items-start gap-2 bg-[#FAFAFC] border border-[#E3E3E9] p-2.5 rounded-lg text-[12px] text-[#0B0B0F]",children:[s.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-[#B0700C] mt-2 shrink-0"}),s.jsx("span",{className:"font-mono",children:X})]},se)):o.theory.tips&&o.theory.tips.length>0?o.theory.tips.map((X,se)=>s.jsxs("div",{className:"flex items-start gap-2 bg-[#FAFAFC] border border-[#E3E3E9] p-2.5 rounded-lg text-[12px] text-[#0B0B0F]",children:[s.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-[#B0700C] mt-2 shrink-0"}),s.jsx("span",{children:X})]},se)):s.jsx("div",{className:"text-[12px] text-[#63636E] italic bg-[#F7F7FA] p-3 rounded-lg",children:"Шпаргалка готовится."})})]}),s.jsxs("div",{className:"border-2 border-[#D4126C]/40 rounded-xl overflow-hidden bg-white shadow-xs",children:[s.jsxs("button",{onClick:()=>c("exercise"),className:"w-full p-3.5 bg-gradient-to-r from-[#D4126C]/10 to-[#5636E0]/10 hover:brightness-95 flex items-center justify-between text-left transition-all cursor-pointer",children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx("div",{className:"w-7 h-7 rounded-lg bg-[#D4126C] text-white flex items-center justify-center shadow-2xs",children:s.jsx(Kp,{className:"w-4 h-4"})}),s.jsxs("div",{children:[s.jsx("div",{className:"font-black text-[13.5px] text-[#0B0B0F]",children:"Практическое задание"}),s.jsx("div",{className:"text-[11px] text-[#63636E]",children:"Решение проверяется автоматически по тестам"})]})]}),s.jsx(ja,{className:`w-4 h-4 text-[#D4126C] transition-transform duration-200 ${V.exercise?"rotate-180":""}`})]}),V.exercise&&s.jsxs("div",{className:"p-4 space-y-4 border-t border-[#E3E3E9]",children:[s.jsxs("div",{className:"bg-[#F7F7FA] border border-[#E3E3E9] p-3.5 rounded-xl space-y-1.5",children:[s.jsx("div",{className:"text-[11px] font-black uppercase tracking-wider text-[#D4126C]",children:"Условие задачи:"}),s.jsx("div",{className:"text-[13px] font-medium text-[#0B0B0F] leading-relaxed whitespace-pre-line",children:o.exercise.task})]}),s.jsxs("div",{className:"space-y-1.5",children:[s.jsx("div",{className:"text-[11px] font-extrabold uppercase text-[#63636E]",children:"Критерии проверки:"}),o.exercise.requirements.map((X,se)=>s.jsxs("div",{className:"flex items-start gap-2 text-[12px] text-[#0B0B0F] bg-white border border-[#E3E3E9] p-2 rounded-lg",children:[s.jsx("div",{className:"w-4 h-4 rounded-full border border-[#0A54C4] text-[#0A54C4] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5",children:se+1}),s.jsx("span",{children:X})]},se))]}),s.jsxs("div",{className:"border border-[#E3E3E9] rounded-xl overflow-hidden",children:[s.jsxs("button",{onClick:()=>ne(!F),className:"w-full p-2.5 bg-[#F7F7FA] hover:bg-[#E3E3E9] text-left text-[12px] font-bold text-[#0B0B0F] flex items-center justify-between cursor-pointer transition-colors",children:[s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx(rh,{className:"w-4 h-4 text-[#B0700C]"}),s.jsx("span",{children:"Нужна подсказка?"})]}),s.jsx("span",{className:"text-[11px] text-[#63636E]",children:F?"Скрыть":"Показать"})]}),F&&s.jsxs("div",{className:"p-3 bg-white text-[12px] text-[#63636E] border-t border-[#E3E3E9] whitespace-pre-line",children:["💡 ",o.exercise.hint]})]}),m&&s.jsxs("div",{className:"border border-[#0A7A50]/30 rounded-xl overflow-hidden",children:[s.jsxs("button",{onClick:()=>g(!k),className:"w-full p-2.5 bg-[#0A7A50]/10 hover:bg-[#0A7A50]/20 text-left text-[12px] font-bold text-[#0A7A50] flex items-center justify-between cursor-pointer transition-colors",children:[s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx(Ti,{className:"w-4 h-4"}),s.jsx("span",{children:"Авторский вариант решения"})]}),s.jsx("span",{className:"text-[11px]",children:k?"Скрыть":"Показать"})]}),k&&s.jsx("div",{className:"p-3 bg-[#16161F] text-[#4FF0A7] text-[12px] font-mono border-t border-[#0A7A50]/30 overflow-x-auto whitespace-pre",children:o.exercise.solution})]}),s.jsx("div",{className:"flex items-center justify-between pt-1",children:s.jsxs("button",{onClick:pl,className:"text-[11.5px] font-bold text-[#63636E] hover:text-[#D4126C] flex items-center gap-1.5 transition-colors cursor-pointer",children:[s.jsx(ic,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Сбросить код к начальному"})]})})]})]})]}),s.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[s.jsxs("div",{className:"bg-white p-4 rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-xs space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between border-b border-[#E3E3E9] pb-3 text-[11px] font-extrabold tracking-wider uppercase text-[#63636E]",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(ml,{className:"w-4 h-4 text-[#0A54C4]"}),s.jsx("span",{children:"Редактор Python 3"})]}),s.jsxs("div",{className:"text-[11px] font-bold text-[#63636E]",children:["Запуск: ",s.jsx("kbd",{className:"px-1.5 py-0.5 rounded bg-[#F1F1F4] border border-[#E3E3E9]",children:"Ctrl+Enter"})]})]}),s.jsx(ch,{value:I,onChange:_e,onRun:_n,placeholder:"# Напиши решение на Python 3...",rows:13}),s.jsxs("div",{className:"flex items-center gap-2.5 flex-wrap",children:[s.jsxs("button",{onClick:_n,disabled:K&&!E,className:"flex-1 min-w-[140px] bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0B0B0F] font-bold rounded-xl py-3 px-4 text-[12.5px] flex items-center justify-center gap-2 transition-all cursor-pointer border border-[#E3E3E9]",children:[s.jsx(Rl,{className:"w-4 h-4 fill-current text-[#0A54C4]"}),s.jsx("span",{children:"Запустить код"})]}),s.jsxs("button",{onClick:tn,disabled:K,className:"flex-1 min-w-[180px] bg-gradient-to-r from-[#0A54C4] to-[#0A7A50] text-white font-extrabold rounded-xl py-3 px-5 text-[12.5px] flex items-center justify-center gap-2 hover:brightness-110 active:scale-98 transition-all cursor-pointer shadow-md disabled:opacity-50",children:[s.jsx(Da,{className:"w-4 h-4"}),s.jsx("span",{children:"Проверить решение"})]}),K&&s.jsxs("button",{onClick:un,className:"border-[1.5px] border-[#D4126C] text-[#D4126C] hover:bg-[#D4126C]/10 rounded-xl px-4 py-3 font-bold transition-all cursor-pointer flex items-center gap-1.5 text-[12px]",children:[s.jsx(sc,{className:"w-4 h-4 fill-current"}),s.jsx("span",{children:"Стоп"})]})]})]}),B.status==="success"&&s.jsxs("div",{className:"bg-[#0A7A50]/15 border-2 border-[#0A7A50] rounded-2xl p-4 flex items-start gap-3.5 shadow-xs",children:[s.jsx("div",{className:"w-9 h-9 rounded-xl bg-[#0A7A50] text-white flex items-center justify-center shrink-0",children:s.jsx(Da,{className:"w-5 h-5"})}),s.jsxs("div",{className:"flex-1 space-y-1",children:[s.jsx("h4",{className:"text-[14px] font-black text-[#0A7A50]",children:"Задание решено верно!"}),s.jsx("p",{className:"text-[12.5px] text-[#0B0B0F] leading-snug",children:B.message}),We&&s.jsxs("button",{onClick:()=>d(We.id),className:"mt-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0A7A50] text-white text-[12px] font-bold hover:brightness-110 cursor-pointer shadow-xs",children:[s.jsxs("span",{children:["Следующий урок: ",We.title]}),s.jsx(Wu,{className:"w-3.5 h-3.5"})]})]})]}),B.status==="error"&&s.jsxs("div",{className:"bg-[#D4126C]/10 border-2 border-[#D4126C] rounded-2xl p-4 flex items-start gap-3.5 shadow-xs",children:[s.jsx("div",{className:"w-9 h-9 rounded-xl bg-[#D4126C] text-white flex items-center justify-center shrink-0",children:s.jsx(Qp,{className:"w-5 h-5"})}),s.jsxs("div",{className:"flex-1 space-y-1",children:[s.jsx("h4",{className:"text-[14px] font-black text-[#D4126C]",children:"Пока не сошлось"}),s.jsx("p",{className:"text-[12.5px] text-[#0B0B0F] leading-snug",children:B.message}),B.hint&&s.jsxs("div",{className:"text-[11.5px] text-[#63636E] bg-white p-2.5 rounded-lg border border-[#E3E3E9] mt-2",children:["💡 Подсказка: ",B.hint]})]})]}),s.jsxs("div",{className:"bg-white p-4 rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-xs space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between border-b border-[#E3E3E9] pb-3 text-[11px] font-extrabold tracking-wider uppercase text-[#63636E]",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(fr,{className:"w-4 h-4 text-[#0A7A50]"}),s.jsx("span",{children:"Вывод программы (Терминал)"})]}),s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsxs("button",{onClick:()=>ve(!0),className:"text-[11px] text-[#0A54C4] hover:text-[#083E91] hover:underline flex items-center gap-1 font-bold cursor-pointer",title:"Показать виртуальные файлы",children:[s.jsx(ac,{className:"w-3.5 h-3.5"}),s.jsxs("span",{children:["Файлы",Ae>0?` (${Ae})`:""]})]}),Ae>0&&s.jsxs("button",{onClick:()=>{window.confirm("Очистить все виртуальные файлы?")&&(uc(),j())},className:"text-[10.5px] text-[#D4126C] hover:underline flex items-center gap-0.5 cursor-pointer font-bold",title:"Очистить файлы",children:[s.jsx(Di,{className:"w-3 h-3"}),s.jsx("span",{children:"Очистить файлы"})]}),s.jsx("button",{onClick:()=>oe(`Терминал очищен.
`),className:"text-[10px] text-[#63636E] hover:text-[#0B0B0F] cursor-pointer",children:"Очистить"})]})]}),s.jsx("div",{ref:Z,className:"bg-[#15151D] text-[#E3E3E9] p-4 rounded-xl border border-[#2C2C3A] min-h-[220px] max-h-[300px] overflow-y-auto font-mono text-[12.5px] leading-relaxed flex flex-col justify-between",children:s.jsxs("div",{className:"whitespace-pre-wrap break-words",children:[$,E&&s.jsxs("form",{onSubmit:Qt,className:"inline-flex items-center gap-2 mt-1",children:[s.jsx("span",{className:"text-[#0A7A50] font-bold select-none",children:">>>"}),s.jsx("input",{ref:Y,type:"text",value:ge,onChange:X=>S(X.target.value),placeholder:"Введи значение и нажми Enter...",className:"bg-[#1E1E28] text-white px-2.5 py-1 rounded-md border border-[#0A7A50] outline-none text-[12px] font-mono shadow-inner min-w-[200px]"}),s.jsxs("button",{type:"submit",className:"px-2.5 py-1 rounded-md bg-[#0A7A50] hover:bg-[#0C9663] text-white font-bold text-[11.5px] flex items-center gap-1 cursor-pointer",children:[s.jsx(Ca,{className:"w-3 h-3"}),s.jsx("span",{children:"Enter"})]})]})]})})]}),re&&s.jsx(ph,{isAlive:re,onStop:()=>T(!1)})]})]}),s.jsx(mh,{isOpen:pe,onClose:()=>ve(!1),onFilesChanged:j})]})},ah=[{id:"guess_game",title:"Игра «Угадай число» (random)",desc:"Подключение модуля random, цикл while и интерактивный input()",code:`import random

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
`}],xy=[{name:"random",desc:"Случайные числа (randint, choice, shuffle)",code:`import random
`},{name:"math",desc:"Математика (sqrt, pi, ceil, floor, factorial)",code:`import math
`},{name:"string",desc:"Наборы символов (ascii_letters, digits)",code:`import string
`},{name:"tkinter",desc:"Графика GUI (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",code:`import tkinter as tk
`}],gy=({initialCode:o,onOpenHandbook:m})=>{const[h,d]=le.useState(o||`# Добро пожаловать в Песочницу Python 3!
# Здесь можно писать любые программы и запускать их

name = input("Как тебя зовут? ")
print(f"Привет, {name}! Удачи в программировании на Python 3!")
`),[G,H]=le.useState(`Готов к запуску кода.
`),[I,z]=le.useState(!1),[$,oe]=le.useState(null),[K,_]=le.useState(""),[E,me]=le.useState(null),[ge,S]=le.useState(!1),[F,ne]=le.useState(()=>typeof window<"u"?Object.keys(Oa()).length:0),k=()=>{ne(Object.keys(Oa()).length)},[g,L]=le.useState(!1),[M,B]=le.useState("editor"),R=le.useRef(null),ee=le.useRef(null),Q=le.useRef(null),pe=le.useRef(!1);le.useEffect(()=>{o&&d(o)},[o]),le.useEffect(()=>{R.current&&(R.current.scrollTop=R.current.scrollHeight)},[G,$]),le.useEffect(()=>{$&&setTimeout(()=>{var O;return(O=ee.current)==null?void 0:O.focus()},50)},[$]);const ve=O=>{me(O),setTimeout(()=>me(null),2500)},Ae=le.useRef(""),Ve=le.useRef(0),j=le.useRef(null),re=()=>{if(j.current&&(clearTimeout(j.current),j.current=null),Ae.current){const O=Ae.current;Ae.current="",H(W=>W+O),Ve.current=Date.now()}},T=(O,W=!1)=>{Ae.current+=O;const c=Date.now();W||c-Ve.current>=100?re():j.current||(j.current=setTimeout(re,Math.max(10,100-(c-Ve.current))))};le.useEffect(()=>()=>{j.current&&clearTimeout(j.current)},[]);const V=O=>{if(O.preventDefault(),$!=null&&$.resolve){const W=K;T(W+`
`,!0);const c=$.resolve;oe(null),_(""),c(W)}},P=()=>{pe.current=!1,$!=null&&$.resolve&&$.resolve(""),oe(null),z(!1),L(!1),re(),T(`
🛑 Остановлено пользователем
`,!0)},he=async()=>{I&&(P(),await new Promise(O=>setTimeout(O,60))),L(!1),pe.current=!0,z(!0),Rn(),Ae.current="",Ve.current=Date.now(),H(`▶ Запуск программы...
`);try{const O=await or(h,{onOutput:W=>T(W),onInput:W=>(re(),new Promise(c=>{oe({resolve:c})})),onFilesChanged:()=>{k()},isStopped:()=>!pe.current});O.success?(T(`✨ Программа завершена
`,!0),sr(),ur().hasTk&&L(!0)):O.error&&T(`
❌ ${O.error}
`,!0)}catch(O){const W=O.toString?O.toString():String(O);T(`
❌ ${W}
`,!0)}finally{re(),pe.current=!1,z(!1),oe(null)}},b=()=>{const O=new Blob([h],{type:"text/x-python"}),W=URL.createObjectURL(O),c=document.createElement("a");c.href=W,c.download="script.py",c.click(),URL.revokeObjectURL(W),sr(),ve("Файл сохранён как script.py")},p=O=>{var D;const W=(D=O.target.files)==null?void 0:D[0];if(!W)return;const c=new FileReader;c.onload=Z=>{var te;const Y=(te=Z.target)==null?void 0:te.result;Y&&(d(Y),sr(),ve(`Файл ${W.name} загружен`))},c.readAsText(W)};return s.jsxs("div",{className:"max-w-[1360px] mx-auto p-3 md:p-6 space-y-4 font-mono select-none",children:[E&&s.jsxs("div",{className:"fixed bottom-6 right-6 z-50 bg-[#0A7A50] text-white px-4 py-2.5 rounded-xl shadow-lg font-bold text-[12.5px] flex items-center gap-2",children:[s.jsx(dr,{className:"w-4 h-4"}),E]}),s.jsx("input",{ref:Q,type:"file",accept:".py,.txt",className:"hidden",onChange:p}),s.jsxs("header",{className:"flex items-center justify-between gap-4 flex-wrap bg-white p-3 md:p-4 rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-xs",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-br from-[#0A54C4] to-[#0A7A50] flex items-center justify-center text-white shadow-xs",children:s.jsx(ml,{className:"w-5 h-5"})}),s.jsxs("div",{children:[s.jsx("h1",{className:"text-[17px] font-black text-[#0B0B0F]",children:"Песочница Python 3"}),s.jsx("p",{className:"text-[11.5px] text-[#63636E]",children:"Свободное написание, тестирование и запуск любых программ"})]})]}),s.jsxs("div",{className:"flex items-center gap-1.5 bg-[#F1F1F4] p-1 rounded-xl border border-[#E3E3E9]",children:[s.jsx("button",{onClick:()=>B("editor"),className:`px-3 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer ${M==="editor"?"bg-white text-[#0B0B0F] shadow-xs":"text-[#63636E] hover:text-[#0B0B0F]"}`,children:"💻 Код"}),s.jsxs("button",{onClick:()=>B("templates"),className:`px-3 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${M==="templates"?"bg-white text-[#0B0B0F] shadow-xs":"text-[#63636E] hover:text-[#0B0B0F]"}`,children:[s.jsx(cr,{className:"w-3.5 h-3.5 text-[#0A54C4]"}),"Примеры (",ah.length,")"]}),s.jsxs("button",{onClick:()=>B("libraries"),className:`px-3 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${M==="libraries"?"bg-white text-[#0B0B0F] shadow-xs":"text-[#63636E] hover:text-[#0B0B0F]"}`,children:[s.jsx(j1,{className:"w-3.5 h-3.5 text-[#0A7A50]"}),"Библиотеки"]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[m&&s.jsxs("button",{onClick:m,className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0A54C4] font-bold text-[12px] transition-all cursor-pointer border border-[#E3E3E9]",title:"Открыть справочник функций",children:[s.jsx(Ma,{className:"w-3.5 h-3.5"}),s.jsx("span",{className:"hidden sm:inline",children:"Справочник"})]}),s.jsxs("button",{onClick:b,className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0B0B0F] font-bold text-[12px] transition-all cursor-pointer border border-[#E3E3E9]",title:"Скачать script.py",children:[s.jsx(e1,{className:"w-3.5 h-3.5"}),s.jsx("span",{className:"hidden sm:inline",children:"Скачать .py"})]}),s.jsxs("button",{onClick:()=>{var O;return(O=Q.current)==null?void 0:O.click()},className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0B0B0F] font-bold text-[12px] transition-all cursor-pointer border border-[#E3E3E9]",title:"Загрузить файл с компьютера",children:[s.jsx(Q1,{className:"w-3.5 h-3.5"}),s.jsx("span",{className:"hidden sm:inline",children:"Загрузить"})]})]})]}),M==="templates"&&s.jsxs("div",{className:"bg-white border-[1.5px] border-[#E3E3E9] rounded-2xl p-5 space-y-4 shadow-xs",children:[s.jsxs("div",{className:"pb-3 border-b border-[#E3E3E9]",children:[s.jsx("h3",{className:"text-[16px] font-black text-[#0B0B0F]",children:"Готовые примеры программ"}),s.jsx("p",{className:"text-[12px] text-[#63636E]",children:"Кликни на пример, чтобы загрузить его в редактор и запустить"})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3",children:ah.map(O=>s.jsxs("div",{onClick:()=>{d(O.code),B("editor"),ve(`Загружен пример: «${O.title}»`)},className:"bg-[#F7F7FA] hover:bg-white p-4 rounded-xl border border-[#E3E3E9] hover:border-[#0A54C4] transition-all cursor-pointer flex flex-col justify-between group shadow-2xs hover:shadow-xs",children:[s.jsxs("div",{children:[s.jsx("h4",{className:"font-black text-[13.5px] text-[#0B0B0F] group-hover:text-[#0A54C4] transition-colors mb-1.5",children:O.title}),s.jsx("p",{className:"text-[12px] text-[#63636E] leading-relaxed mb-3",children:O.desc})]}),s.jsx("span",{className:"text-[11.5px] font-bold text-[#0A54C4] pt-2 border-t border-[#E3E3E9]",children:"Открыть код →"})]},O.id))})]}),M==="libraries"&&s.jsxs("div",{className:"bg-white border-[1.5px] border-[#E3E3E9] rounded-2xl p-5 space-y-4 shadow-xs",children:[s.jsxs("div",{className:"pb-3 border-b border-[#E3E3E9]",children:[s.jsx("h3",{className:"text-[16px] font-black text-[#0B0B0F]",children:"Библиотеки Python 3"}),s.jsx("p",{className:"text-[12px] text-[#63636E]",children:"Нажми на модуль, чтобы вставить команду import в начало программы"})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:xy.map(O=>s.jsxs("div",{onClick:()=>{h.includes(O.name)?ve(`Модуль ${O.name} уже импортирован`):(d(O.code+h),ve(`Импортирован модуль ${O.name}`)),B("editor")},className:"bg-[#F7F7FA] hover:bg-white p-4 rounded-xl border border-[#E3E3E9] hover:border-[#0A7A50] transition-all cursor-pointer group shadow-2xs hover:shadow-xs",children:[s.jsxs("div",{className:"font-bold text-[#0A7A50] text-[14px] mb-1",children:["import ",O.name]}),s.jsx("div",{className:"text-[12px] text-[#63636E] mb-2",children:O.desc}),s.jsx("span",{className:"text-[11.5px] font-bold text-[#0A7A50] group-hover:underline",children:"+ Добавить в код"})]},O.name))})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-4 items-start",children:[s.jsxs("div",{className:"lg:col-span-7 bg-white p-4 rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-xs space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between border-b border-[#E3E3E9] pb-3 text-[11px] font-extrabold tracking-wider uppercase text-[#63636E]",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(n1,{className:"w-4 h-4 text-[#0A54C4]"}),s.jsx("span",{children:"script.py"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:()=>{navigator.clipboard.writeText(h),ve("Код скопирован")},className:"p-1.5 rounded-lg hover:bg-[#F1F1F4] text-[#63636E] transition-colors cursor-pointer",title:"Скопировать",children:s.jsx(Ci,{className:"w-3.5 h-3.5"})}),s.jsx("button",{onClick:()=>d(""),className:"p-1.5 rounded-lg hover:bg-[#F1F1F4] text-[#63636E] hover:text-[#D4126C] transition-colors cursor-pointer",title:"Очистить код",children:s.jsx(Di,{className:"w-3.5 h-3.5"})})]})]}),s.jsx(ch,{value:h,onChange:d,onRun:he,placeholder:"# Напиши любой код на Python...",rows:15}),s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsxs("button",{onClick:he,disabled:I&&!$,className:"flex-1 bg-gradient-to-r from-[#0A54C4] to-[#0A7A50] text-white font-extrabold rounded-xl py-3 px-6 text-[13px] flex items-center justify-center gap-2 hover:brightness-110 active:scale-98 disabled:opacity-50 transition-all cursor-pointer shadow-md",children:[s.jsx(Rl,{className:"w-4 h-4 fill-white"}),s.jsx("span",{children:I?"Выполняется...":"Запустить код (Ctrl+Enter)"})]}),I&&s.jsxs("button",{onClick:P,className:"border-[1.5px] border-[#D4126C] text-[#D4126C] hover:bg-[#D4126C]/10 rounded-xl px-4 py-3 font-bold transition-all cursor-pointer flex items-center gap-1.5 text-[12px]",children:[s.jsx(sc,{className:"w-4 h-4 fill-current"}),s.jsx("span",{children:"Стоп"})]})]})]}),s.jsxs("div",{className:"lg:col-span-5 bg-white p-4 rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-xs space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between border-b border-[#E3E3E9] pb-3 text-[11px] font-extrabold tracking-wider uppercase text-[#63636E]",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(fr,{className:"w-4 h-4 text-[#0A7A50]"}),s.jsx("span",{children:"Терминал вывода"})]}),s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsxs("button",{onClick:()=>S(!0),className:"text-[11px] text-[#0A54C4] hover:text-[#083E91] hover:underline flex items-center gap-1 font-bold cursor-pointer",title:"Показать виртуальные файлы",children:[s.jsx(ac,{className:"w-3.5 h-3.5"}),s.jsxs("span",{children:["Файлы",F>0?` (${F})`:""]})]}),F>0&&s.jsxs("button",{onClick:()=>{window.confirm("Очистить все виртуальные файлы?")&&(uc(),k(),ve("Файлы очищены"))},className:"text-[10.5px] text-[#D4126C] hover:underline flex items-center gap-0.5 cursor-pointer font-bold",title:"Очистить файлы",children:[s.jsx(Di,{className:"w-3 h-3"}),s.jsx("span",{children:"Очистить файлы"})]}),s.jsx("button",{onClick:()=>H(`Терминал очищен.
`),className:"text-[10px] text-[#63636E] hover:text-[#0B0B0F] cursor-pointer",children:"Очистить"})]})]}),s.jsx("div",{ref:R,className:"bg-[#15151D] text-[#E3E3E9] p-4 rounded-2xl border border-[#2C2C3A] min-h-[380px] max-h-[500px] overflow-y-auto font-mono text-[12.5px] leading-relaxed flex flex-col justify-between",children:s.jsxs("div",{className:"whitespace-pre-wrap break-words",children:[G,$&&s.jsxs("form",{onSubmit:V,className:"inline-flex items-center gap-2 mt-1",children:[s.jsx("span",{className:"text-[#0A7A50] font-bold select-none",children:">>>"}),s.jsx("input",{ref:ee,type:"text",value:K,onChange:O=>_(O.target.value),placeholder:"Введи ответ и нажми Enter...",className:"bg-[#1E1E28] text-white px-2.5 py-1 rounded-md border border-[#0A7A50] outline-none text-[12px] font-mono shadow-inner min-w-[200px]"}),s.jsxs("button",{type:"submit",className:"px-2.5 py-1 rounded-md bg-[#0A7A50] hover:bg-[#0C9663] text-white font-bold text-[11.5px] flex items-center gap-1 cursor-pointer",children:[s.jsx(Ca,{className:"w-3 h-3"}),s.jsx("span",{children:"Enter"})]})]})]})}),g&&s.jsx(ph,{isAlive:g,onStop:()=>L(!1)})]})]}),s.jsx(mh,{isOpen:ge,onClose:()=>S(!1),onFilesChanged:k})]})};function yy(){const[o,m]=le.useState("lessons"),[h,d]=le.useState(null),[G,H]=le.useState(()=>{try{const k=localStorage.getItem("python_solved_lessons");return k?JSON.parse(k):[]}catch{return[]}}),[I,z]=le.useState(()=>I1()),[$,oe]=le.useState(void 0);le.useEffect(()=>{fh().catch(()=>{})},[]);const K=k=>{if(!G.includes(k)){const g=[...G,k];H(g);try{localStorage.setItem("python_solved_lessons",JSON.stringify(g))}catch(L){console.warn(L)}}},_=()=>{confirm("Вы уверены, что хотите сбросить отметки о пройденных уроках?")&&(H([]),localStorage.removeItem("python_solved_lessons"),wn())},E=()=>{const k=W1();z(k)},me=k=>{d(k),m("lessons"),window.scrollTo({top:0,left:0,behavior:"instant"})},ge=()=>{d(null),window.scrollTo({top:0,left:0,behavior:"instant"})},S=k=>{oe(k),m("sandbox"),window.scrollTo({top:0,left:0,behavior:"instant"})},F=lc(),ne=h?_g(h):null;return s.jsxs("div",{className:"min-h-screen bg-[#F1F1F4] text-[#0B0B0F] font-mono flex flex-col",children:[s.jsx(P1,{currentTab:o,onSelectTab:k=>{m(k)},solvedCount:G.length,totalCount:F.length,soundEnabled:I,onToggleSound:E,onResetProgress:_}),s.jsxs("main",{className:"flex-1 pb-12",children:[o==="lessons"&&s.jsx(s.Fragment,{children:ne?s.jsx(hy,{lesson:ne,isSolved:G.includes(ne.id),onSolveLesson:K,onSelectLesson:me,onBackToCourse:ge,onOpenSandboxWithCode:S}):s.jsx(ty,{solvedLessons:G,onSelectLesson:me,onOpenHandbook:()=>m("handbook"),onOpenSandbox:()=>m("sandbox")})}),o==="handbook"&&s.jsx(dh,{isModal:!1,onOpenInSandbox:S}),o==="sandbox"&&s.jsx(gy,{initialCode:$,onOpenHandbook:()=>m("handbook")})]}),s.jsx("footer",{className:"border-t border-[#E3E3E9] py-5 px-4 text-center text-[11.5px] text-[#63636E] bg-white",children:s.jsxs("div",{className:"max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2",children:[s.jsx("span",{children:"Python Станция · Интерактивная среда обучения Python 3"}),s.jsx("span",{children:"Задания и теория настраиваются напрямую в коде программы"})]})})]})}vg.createRoot(document.getElementById("root")).render(s.jsx(le.StrictMode,{children:s.jsx(yy,{})}));
