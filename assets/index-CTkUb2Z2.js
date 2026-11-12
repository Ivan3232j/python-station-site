(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))d(j);new MutationObserver(j=>{for(const R of j)if(R.type==="childList")for(const W of R.addedNodes)W.tagName==="LINK"&&W.rel==="modulepreload"&&d(W)}).observe(document,{childList:!0,subtree:!0});function m(j){const R={};return j.integrity&&(R.integrity=j.integrity),j.referrerPolicy&&(R.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?R.credentials="include":j.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function d(j){if(j.ep)return;j.ep=!0;const R=m(j);fetch(j.href,R)}})();var Hm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ec={exports:{}},Ri={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function dx(){if(Gm)return Ri;Gm=1;var o=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function m(d,j,R){var W=null;if(R!==void 0&&(W=""+R),j.key!==void 0&&(W=""+j.key),"key"in j){R={};for(var w in j)w!=="key"&&(R[w]=j[w])}else R=j;return j=R.ref,{$$typeof:o,type:d,key:W,ref:j!==void 0?j:null,props:R}}return Ri.Fragment=f,Ri.jsx=m,Ri.jsxs=m,Ri}var Vm;function fx(){return Vm||(Vm=1,ec.exports=dx()),ec.exports}var s=fx(),tc={exports:{}},_e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function px(){if(Ym)return _e;Ym=1;var o=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),W=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),ae=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),T=Symbol.for("react.view_transition"),re=Symbol.iterator;function ue(c){return c===null||typeof c!="object"?null:(c=re&&c[re]||c["@@iterator"],typeof c=="function"?c:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,ee={};function N(c,g,C){this.props=c,this.context=g,this.refs=ee,this.updater=C||A}N.prototype.isReactComponent={},N.prototype.setState=function(c,g){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,g,"setState")},N.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function b(){}b.prototype=N.prototype;function U(c,g,C){this.props=c,this.context=g,this.refs=ee,this.updater=C||A}var B=U.prototype=new b;B.constructor=U,z(B,N.prototype),B.isPureReactComponent=!0;var F=Array.isArray;function V(){}var le={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function me(c,g,C){var L=C.ref;return{$$typeof:o,type:c,key:g,ref:L!==void 0?L:null,props:C}}function we(c,g){return me(c.type,g,c.props)}function Ae(c){return typeof c=="object"&&c!==null&&c.$$typeof===o}function Qe(c){var g={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(C){return g[C]})}var Le=/\/+/g;function Ne(c,g){return typeof c=="object"&&c!==null&&c.key!=null?Qe(""+c.key):g.toString(36)}function P(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(V,V):(c.status="pending",c.then(function(g){c.status==="pending"&&(c.status="fulfilled",c.value=g)},function(g){c.status==="pending"&&(c.status="rejected",c.reason=g)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function fe(c,g,C,L,Z){var te=typeof c;(te==="undefined"||te==="boolean")&&(c=null);var I=!1;if(c===null)I=!0;else switch(te){case"bigint":case"string":case"number":I=!0;break;case"object":switch(c.$$typeof){case o:case f:I=!0;break;case $:return I=c._init,fe(I(c._payload),g,C,L,Z)}}if(I)return Z=Z(c),I=L===""?"."+Ne(c,0):L,F(Z)?(C="",I!=null&&(C=I.replace(Le,"$&/")+"/"),fe(Z,g,C,"",function(xe){return xe})):Z!=null&&(Ae(Z)&&(Z=we(Z,C+(Z.key==null||c&&c.key===Z.key?"":(""+Z.key).replace(Le,"$&/")+"/")+I)),g.push(Z)),1;I=0;var G=L===""?".":L+":";if(F(c))for(var J=0;J<c.length;J++)L=c[J],te=G+Ne(L,J),I+=fe(L,g,C,te,Z);else if(J=ue(c),typeof J=="function")for(c=J.call(c),J=0;!(L=c.next()).done;)L=L.value,te=G+Ne(L,J++),I+=fe(L,g,C,te,Z);else if(te==="object"){if(typeof c.then=="function")return fe(P(c),g,C,L,Z);throw g=String(c),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.")}return I}function se(c,g,C){if(c==null)return c;var L=[],Z=0;return fe(c,L,"","",function(te){return g.call(C,te,Z++)}),L}function ge(c){if(c._status===-1){var g=c._result,C=g();C.then(function(L){(c._status===0||c._status===-1)&&(c._status=1,c._result=L,C.status===void 0&&(C.status="fulfilled",C.value=L))},function(L){(c._status===0||c._status===-1)&&(c._status=2,c._result=L,C.status===void 0&&(C.status="rejected",C.reason=L))}),c._status===-1&&(c._status=0,c._result=C)}if(c._status===1)return c._result.default;throw c._result}var _=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var g=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(g))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)};function y(c){var g=le.T,C={};C.types=g!==null?g.types:null,le.T=C;try{var L=c(),Z=le.S;Z!==null&&Z(C,L),typeof L=="object"&&L!==null&&typeof L.then=="function"&&L.then(V,_)}catch(te){_(te)}finally{g!==null&&C.types!==null&&(g.types=C.types),le.T=g}}function H(c){var g=le.T;if(g!==null){var C=g.types;C===null?g.types=[c]:C.indexOf(c)===-1&&C.push(c)}else y(H.bind(null,c))}var h={map:se,forEach:function(c,g,C){se(c,function(){g.apply(this,arguments)},C)},count:function(c){var g=0;return se(c,function(){g++}),g},toArray:function(c){return se(c,function(g){return g})||[]},only:function(c){if(!Ae(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return _e.Activity=S,_e.Children=h,_e.Component=N,_e.Fragment=m,_e.Profiler=j,_e.PureComponent=U,_e.StrictMode=d,_e.Suspense=q,_e.ViewTransition=T,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=le,_e.__COMPILER_RUNTIME={__proto__:null,c:function(c){return le.H.useMemoCache(c)}},_e.addTransitionType=H,_e.cache=function(c){return function(){return c.apply(null,arguments)}},_e.cacheSignal=function(){return null},_e.cloneElement=function(c,g,C){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var L=z({},c.props),Z=c.key;if(g!=null)for(te in g.key!==void 0&&(Z=""+g.key),g)!X.call(g,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&g.ref===void 0||(L[te]=g[te]);var te=arguments.length-2;if(te===1)L.children=C;else if(1<te){for(var I=Array(te),G=0;G<te;G++)I[G]=arguments[G+2];L.children=I}return me(c.type,Z,L)},_e.createContext=function(c){return c={$$typeof:W,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:R,_context:c},c},_e.createElement=function(c,g,C){var L,Z={},te=null;if(g!=null)for(L in g.key!==void 0&&(te=""+g.key),g)X.call(g,L)&&L!=="key"&&L!=="__self"&&L!=="__source"&&(Z[L]=g[L]);var I=arguments.length-2;if(I===1)Z.children=C;else if(1<I){for(var G=Array(I),J=0;J<I;J++)G[J]=arguments[J+2];Z.children=G}if(c&&c.defaultProps)for(L in I=c.defaultProps,I)Z[L]===void 0&&(Z[L]=I[L]);return me(c,te,Z)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(c){return{$$typeof:w,render:c}},_e.isValidElement=Ae,_e.lazy=function(c){return{$$typeof:$,_payload:{_status:-1,_result:c},_init:ge}},_e.memo=function(c,g){return{$$typeof:ae,type:c,compare:g===void 0?null:g}},_e.startTransition=y,_e.unstable_useCacheRefresh=function(){return le.H.useCacheRefresh()},_e.use=function(c){return le.H.use(c)},_e.useActionState=function(c,g,C){return le.H.useActionState(c,g,C)},_e.useCallback=function(c,g){return le.H.useCallback(c,g)},_e.useContext=function(c){return le.H.useContext(c)},_e.useDebugValue=function(){},_e.useDeferredValue=function(c,g){return le.H.useDeferredValue(c,g)},_e.useEffect=function(c,g){return le.H.useEffect(c,g)},_e.useEffectEvent=function(c){return le.H.useEffectEvent(c)},_e.useId=function(){return le.H.useId()},_e.useImperativeHandle=function(c,g,C){return le.H.useImperativeHandle(c,g,C)},_e.useInsertionEffect=function(c,g){return le.H.useInsertionEffect(c,g)},_e.useLayoutEffect=function(c,g){return le.H.useLayoutEffect(c,g)},_e.useMemo=function(c,g){return le.H.useMemo(c,g)},_e.useOptimistic=function(c,g){return le.H.useOptimistic(c,g)},_e.useReducer=function(c,g,C){return le.H.useReducer(c,g,C)},_e.useRef=function(c){return le.H.useRef(c)},_e.useState=function(c){return le.H.useState(c)},_e.useSyncExternalStore=function(c,g,C){return le.H.useSyncExternalStore(c,g,C)},_e.useTransition=function(){return le.H.useTransition()},_e.version="19.3.1",_e}var Qm;function pc(){return Qm||(Qm=1,tc.exports=px()),tc.exports}var ne=pc(),nc={exports:{}},Ui={},lc={exports:{}},ac={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function mx(){return Xm||(Xm=1,(function(o){function f(P,fe){var se=P.length;P.push(fe);e:for(;0<se;){var ge=se-1>>>1,_=P[ge];if(0<j(_,fe))P[ge]=fe,P[se]=_,se=ge;else break e}}function m(P){return P.length===0?null:P[0]}function d(P){if(P.length===0)return null;var fe=P[0],se=P.pop();if(se!==fe){P[0]=se;e:for(var ge=0,_=P.length,y=_>>>1;ge<y;){var H=2*(ge+1)-1,h=P[H],c=H+1,g=P[c];if(0>j(h,se))c<_&&0>j(g,h)?(P[ge]=g,P[c]=se,ge=c):(P[ge]=h,P[H]=se,ge=H);else if(c<_&&0>j(g,se))P[ge]=g,P[c]=se,ge=c;else break e}}return fe}function j(P,fe){var se=P.sortIndex-fe.sortIndex;return se!==0?se:P.id-fe.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var R=performance;o.unstable_now=function(){return R.now()}}else{var W=Date,w=W.now();o.unstable_now=function(){return W.now()-w}}var q=[],ae=[],$=1,S=null,T=3,re=!1,ue=!1,A=!1,z=!1,ee=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;function U(P){for(var fe=m(ae);fe!==null;){if(fe.callback===null)d(ae);else if(fe.startTime<=P)d(ae),fe.sortIndex=fe.expirationTime,f(q,fe);else break;fe=m(ae)}}function B(P){if(A=!1,U(P),!ue)if(m(q)!==null)ue=!0,F||(F=!0,Ae());else{var fe=m(ae);fe!==null&&Ne(B,fe.startTime-P)}}var F=!1,V=-1,le=5,X=-1;function me(){return z?!0:!(o.unstable_now()-X<le)}function we(){if(z=!1,F){var P=o.unstable_now();X=P;var fe=!0;try{e:{ue=!1,A&&(A=!1,N(V),V=-1),re=!0;var se=T;try{t:{for(U(P),S=m(q);S!==null&&!(S.expirationTime>P&&me());){var ge=S.callback;if(typeof ge=="function"){S.callback=null,T=S.priorityLevel;var _=ge(S.expirationTime<=P);if(P=o.unstable_now(),typeof _=="function"){S.callback=_,U(P),fe=!0;break t}S===m(q)&&d(q),U(P)}else d(q);S=m(q)}if(S!==null)fe=!0;else{var y=m(ae);y!==null&&Ne(B,y.startTime-P),fe=!1}}break e}finally{S=null,T=se,re=!1}fe=void 0}}finally{fe?Ae():F=!1}}}var Ae;if(typeof b=="function")Ae=function(){b(we)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,Le=Qe.port2;Qe.port1.onmessage=we,Ae=function(){Le.postMessage(null)}}else Ae=function(){ee(we,0)};function Ne(P,fe){V=ee(function(){P(o.unstable_now())},fe)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return T},o.unstable_next=function(P){switch(T){case 1:case 2:case 3:var fe=3;break;default:fe=T}var se=T;T=fe;try{return P()}finally{T=se}},o.unstable_requestPaint=function(){z=!0},o.unstable_runWithPriority=function(P,fe){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var se=T;T=P;try{return fe()}finally{T=se}},o.unstable_scheduleCallback=function(P,fe,se){var ge=o.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?ge+se:ge):se=ge,P){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=se+_,P={id:$++,callback:fe,priorityLevel:P,startTime:se,expirationTime:_,sortIndex:-1},se>ge?(P.sortIndex=se,f(ae,P),m(q)===null&&P===m(ae)&&(A?(N(V),V=-1):A=!0,Ne(B,se-ge))):(P.sortIndex=_,f(q,P),ue||re||(ue=!0,F||(F=!0,Ae()))),P},o.unstable_shouldYield=me,o.unstable_wrapCallback=function(P){var fe=T;return function(){var se=T;T=fe;try{return P.apply(this,arguments)}finally{T=se}}}})(ac)),ac}var Zm;function hx(){return Zm||(Zm=1,lc.exports=mx()),lc.exports}var ic={exports:{}},vt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function gx(){if(Km)return vt;Km=1;var o=pc();function f($){var S="https://react.dev/errors/"+$;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)S+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+$+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(){}var d={d:{f:m,r:function(){throw Error(f(522))},D:m,C:m,L:m,m,X:m,S:m,M:m},p:0,findDOMNode:null},j=Symbol.for("react.portal"),R=Symbol.for("react.recoverable"),W=Symbol.for("react.optimistic_key");function w($,S,T){var re=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:j,key:re==null?null:re===W?W:""+re,children:$,containerInfo:S,implementation:T}}var q=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ae($,S){if($==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,vt.browser=function($){return{$$typeof:R,_reason:$}},vt.createPortal=function($,S){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(f(299));return w($,S,null,T)},vt.flushSync=function($){var S=q.T,T=d.p;try{if(q.T=null,d.p=2,$)return $()}finally{q.T=S,d.p=T,d.d.f()}},vt.preconnect=function($,S){typeof $=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,d.d.C($,S))},vt.prefetchDNS=function($){typeof $=="string"&&d.d.D($)},vt.preinit=function($,S){if(typeof $=="string"&&S&&typeof S.as=="string"){var T=S.as,re=ae(T,S.crossOrigin),ue=typeof S.integrity=="string"?S.integrity:void 0,A=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;T==="style"?d.d.S($,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:re,integrity:ue,fetchPriority:A}):T==="script"&&d.d.X($,{crossOrigin:re,integrity:ue,fetchPriority:A,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},vt.preinitModule=function($,S){if(typeof $=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var T=ae(S.as,S.crossOrigin);d.d.M($,{crossOrigin:T,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0})}}else S==null&&d.d.M($)},vt.preload=function($,S){if(typeof $=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var T=S.as,re=ae(T,S.crossOrigin);d.d.L($,T,{crossOrigin:re,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},vt.preloadModule=function($,S){if(typeof $=="string")if(S){var T=ae(S.as,S.crossOrigin);d.d.m($,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:T,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0})}else d.d.m($)},vt.requestFormReset=function($){d.d.r($)},vt.unstable_batchedUpdates=function($,S){return $(S)},vt.useFormState=function($,S,T){return q.H.useFormState($,S,T)},vt.useFormStatus=function(){return q.H.useHostTransitionStatus()},vt.version="19.3.1",vt}var $m;function xx(){if($m)return ic.exports;$m=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(f){console.error(f)}}return o(),ic.exports=gx(),ic.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function yx(){if(Jm)return Ui;Jm=1;var o=hx(),f=pc(),m=xx();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function R(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function W(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function q(e){if(R(e)!==e)throw Error(d(188))}function ae(e){var t=e.alternate;if(!t){if(t=R(e),t===null)throw Error(d(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return q(a),e;if(i===l)return q(a),t;i=i.sibling}throw Error(d(188))}if(n.return!==l.return)n=a,l=i;else{for(var r=!1,u=a.child;u;){if(u===n){r=!0,n=a,l=i;break}if(u===l){r=!0,l=a,n=i;break}u=u.sibling}if(!r){for(u=i.child;u;){if(u===n){r=!0,n=i,l=a;break}if(u===l){r=!0,l=i,n=a;break}u=u.sibling}if(!r)throw Error(d(189))}}if(n.alternate!==l)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?e:t}function $(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=$(e),t!==null)return t;e=e.sibling}return null}function S(e,t,n,l,a,i){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,l,a,i)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&S(e.child,t,n,l,a,i))return!0;e=e.sibling}return!1}function T(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function re(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function ue(e){var t=[null,null],n=T(e);return n===null||A(t,e,n.child,{foundSelf:!1}),t}function A(e,t,n,l){for(;n!==null;){if(n===t)l.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(l.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&A(e,t,n.child,l))return!0;n=n.sibling}return!1}function z(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(d(559))}}var ee=null,N=null;function b(e,t,n){return e===n?!0:e===t?(ee=e,!0):!1}function U(e,t,n){return e===n?(N=e,!1):e===t?(N!==null&&(ee=e),!0):!1}function B(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function F(e,t,n){for(var l=0,a=e;a;a=n(a))l++;a=0;for(var i=t;i;i=n(i))a++;for(;0<l-a;)e=n(e),l--;for(;0<a-l;)t=n(t),a--;for(;l--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var V=Object.assign,le=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),me=Symbol.for("react.portal"),we=Symbol.for("react.fragment"),Ae=Symbol.for("react.strict_mode"),Qe=Symbol.for("react.profiler"),Le=Symbol.for("react.consumer"),Ne=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),H=Symbol.for("react.legacy_hidden"),h=Symbol.for("react.memo_cache_sentinel"),c=Symbol.for("react.view_transition"),g=Symbol.for("react.recoverable"),C=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=C&&e[C]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Symbol.for("react.client.reference");function te(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Z?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case we:return"Fragment";case Qe:return"Profiler";case Ae:return"StrictMode";case fe:return"Suspense";case se:return"SuspenseList";case y:return"Activity";case c:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case me:return"Portal";case Ne:return e.displayName||"Context";case Le:return(e._context.displayName||"Context")+".Consumer";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ge:return t=e.displayName||null,t!==null?t:te(e.type)||"Memo";case _:t=e._payload,e=e._init;try{return te(e(t))}catch{}}return null}var I=Array.isArray,G=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xe={pending:!1,data:null,method:null,action:null},ye=[],Me=-1;function Re(e){return{current:e}}function je(e){0>Me||(e.current=ye[Me],ye[Me]=null,Me--)}function ve(e,t){Me++,ye[Me]=e.current,e.current=t}var Ie=Re(null),ut=Re(null),jt=Re(null),kn=Re(null);function Yn(e,t){switch(ve(jt,t),ve(ut,e),ve(Ie,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Jp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Jp(t),e=Ip(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}je(Ie),ve(Ie,e)}function tn(){je(Ie),je(ut),je(jt)}function Qn(e){var t=e.memoizedState;t!==null&&(Fa._currentValue=t.memoizedState,ve(kn,e)),t=Ie.current;var n=Ip(t,e.type);t!==n&&(ve(ut,e),ve(Ie,n))}function En(e){ut.current===e&&(je(Ie),je(ut)),kn.current===e&&(je(kn),Fa._currentValue=xe)}var _l,Sn;function kt(e){if(_l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_l=t&&t[1]||"",Sn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_l+e+Sn}var Nn=!1;function un(e,t){if(!e||Nn)return"";Nn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(ie){var v=ie}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(ie){v=ie}Q=!1;try{var M=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Q=!0,new e}finally{Q&&(M!==void 0?Object.defineProperty(e.prototype,"props",M):delete e.prototype.props)}}}else{try{throw Error()}catch(ie){v=ie}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(ie){if(ie&&v&&typeof ie.stack=="string")return[ie.stack,v.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],u=i[1];if(r&&u){var p=r.split(`
`),E=u.split(`
`);for(a=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;a<E.length&&!E[a].includes("DetermineComponentFrameRoot");)a++;if(l===p.length||a===E.length)for(l=p.length-1,a=E.length-1;1<=l&&0<=a&&p[l]!==E[a];)a--;for(;1<=l&&0<=a;l--,a--)if(p[l]!==E[a]){if(l!==1||a!==1)do if(l--,a--,0>a||p[l]!==E[a]){var O=`
`+p[l].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=l&&0<=a);break}}}finally{Nn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?kt(n):""}function kl(e,t){switch(e.tag){case 26:case 27:case 5:return kt(e.type);case 16:return kt("Lazy");case 13:return e.child!==t&&t!==null?kt("Suspense Fallback"):kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return un(e.type,!1);case 11:return un(e.type.render,!1);case 1:return un(e.type,!0);case 31:return kt("Activity");case 30:return kt("ViewTransition");default:return""}}function El(e){try{var t="",n=null;do t+=kl(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var $l=Object.prototype.hasOwnProperty,Ya=o.unstable_scheduleCallback,Qa=o.unstable_cancelCallback,Jl=o.unstable_shouldYield,Xn=o.unstable_requestPaint,lt=o.unstable_now,K=o.unstable_getCurrentPriorityLevel,oe=o.unstable_ImmediatePriority,Se=o.unstable_UserBlockingPriority,Ue=o.unstable_NormalPriority,Ke=o.unstable_LowPriority,Lt=o.unstable_IdlePriority,cn=o.log,wt=o.unstable_setDisableYieldValue,Sl=null,Et=null;function Zn(e){if(typeof cn=="function"&&wt(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Sl,e)}catch{}}var Ft=Math.clz32?Math.clz32:k0,w0=Math.log,_0=Math.LN2;function k0(e){return e>>>=0,e===0?32:31-(w0(e)/_0|0)|0}var Zi=256,Ki=262144,$i=4194304;function Nl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ji(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var u=l&134217727;return u!==0?(l=u&~i,l!==0?a=Nl(l):(r&=u,r!==0?a=Nl(r):n||(n=u&~e,n!==0&&(a=Nl(n))))):(u=l&~i,u!==0?a=Nl(u):r!==0?a=Nl(r):n||(n=l&~e,n!==0&&(a=Nl(n)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:a}function Xa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function wc(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-Ft(n),a=1<<l;t|=e[l],n&=~a}return t}function E0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _c(){var e=$i;return $i<<=1,($i&62914560)===0&&($i=4194304),e}function Nr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Za(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function S0(e,t,n,l,a,i){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var u=e.entanglements,p=e.expirationTimes,E=e.hiddenUpdates;for(n=r&~n;0<n;){var O=31-Ft(n),Q=1<<O;u[O]=0,p[O]=-1;var v=E[O];if(v!==null)for(E[O]=null,O=0;O<v.length;O++){var M=v[O];M!==null&&(M.lane&=-536870913)}n&=~Q}l!==0&&kc(e,l,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function kc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Ft(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function Ec(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Ft(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function Sc(e,t){var n=t&-t;return n=(n&42)!==0?1:Tr(n),(n&(e.suspendedLanes|t))!==0?0:n}function Tr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ar(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Nc(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:zm(e.type))}function Tc(e,t){var n=J.p;try{return J.p=e,t()}finally{J.p=n}}var Tn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Tn,Ct="__reactProps$"+Tn,Il="__reactContainer$"+Tn,Ac="__reactEvents$"+Tn,N0="__reactListeners$"+Tn,T0="__reactHandles$"+Tn,jc="__reactResources$"+Tn,Ka="__reactMarker$"+Tn,Ii="__reactLoad$"+Tn;function Wi(e){delete e[mt],delete e[Ct],delete e[N0],delete e[T0]}function Tl(e){var t;if(t=e[mt])return t;for(var n=e.parentNode;n;){if(t=n[Il]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mm(e);e!==null;){if(n=e[mt])return n;e=mm(e)}return t}e=n,n=e.parentNode}return null}function Wl(e){if(e=e[mt]||e[Il]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function $a(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function Pl(e){var t=e[jc];return t||(t=e[jc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ct(e){e[Ka]=!0}function Cc(e){e[Ii]=void 0}var Dc=new Set,Mc={};function Al(e,t){ea(e,t),ea(e+"Capture",t)}function ea(e,t){for(Mc[e]=t,e=0;e<t.length;e++)Dc.add(t[e])}var A0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Oc={},zc={};function j0(e){return $l.call(zc,e)?!0:$l.call(Oc,e)?!1:A0.test(e)?zc[e]=!0:(Oc[e]=!0,!1)}var Fe=!1;function Bc(){var e=Fe;return Fe=!1,e}function Pi(e,t,n){if(j0(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function es(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function An(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,l)}}function Rt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function C0(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jr(e){if(!e._valueTracker){var t=Lc(e)?"checked":"value";e._valueTracker=C0(e,t,""+e[t])}}function Fc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Lc(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}var D0=/[\n"\\]/g;function Xt(e){return e.replace(D0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Cr(e,t,n,l,a,i,r,u){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Rt(t)):e.value!==""+Rt(t)&&(e.value=""+Rt(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?Dr(e,Rt(e.value)):Dr(e,Rt(t)):n!=null?Dr(e,Rt(n)):l!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+Rt(u):e.removeAttribute("name")}function Rc(e,t,n,l,a,i,r,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){jr(e);return}n=n!=null?""+Rt(n):"",t=t!=null?""+Rt(t):n,u||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=u?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),jr(e)}function Dr(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function ta(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Rt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Uc(e,t,n){if(t!=null&&(t=""+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Rt(n):""}function qc(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(d(92));if(I(l)){if(1<l.length)throw Error(d(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Rt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),jr(e)}function na(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var M0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hc(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||M0.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Gc(e,t,n){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="",Fe=!0);for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&(Hc(e,a,l),Fe=!0)}else for(var i in t)t.hasOwnProperty(i)&&Hc(e,i,t[i])}function Mr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var O0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),z0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ts(e){return z0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function dn(){}var Or=null;function zr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var la=null,aa=null;function Vc(e){var t=Wl(e);if(t&&(e=t.stateNode)){var n=e[Ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(Cr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Xt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[Ct]||null;if(!a)throw Error(d(90));Cr(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&Fc(l)}break e;case"textarea":Uc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ta(e,!!n.multiple,t,!1)}}}var Br=!1;function Yc(e,t,n){if(Br)return e(t,n);Br=!0;try{var l=e(t);return l}finally{if(Br=!1,(la!==null||aa!==null)&&(tr(),la&&(t=la,e=aa,aa=la=null,Vc(t),e)))for(t=0;t<e.length;t++)Vc(e[t])}}function Ja(e,t){var n=e.stateNode;if(n===null)return null;var l=n[Ct]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(d(231,t,typeof n));return n}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lr=!1;if(jn)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){Lr=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{Lr=!1}var Kn=null,Fr=null,ns=null;function Qc(){if(ns)return ns;var e,t=Fr,n=t.length,l,a="value"in Kn?Kn.value:Kn.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(l=1;l<=r&&t[n-l]===a[i-l];l++);return ns=a.slice(e,1<l?1-l:void 0)}function ls(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function as(){return!0}function Xc(){return!1}function St(e){function t(n,l,a,i,r){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?as:Xc,this.isPropagationStopped=Xc,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=as)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=as)},persist:function(){},isPersistent:as}),t}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},is=St($n),Wa=V({},$n,{view:0,detail:0}),B0=St(Wa),Rr,Ur,Pa,ss=V({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pa&&(Pa&&e.type==="mousemove"?(Rr=e.screenX-Pa.screenX,Ur=e.screenY-Pa.screenY):Ur=Rr=0,Pa=e),Rr)},movementY:function(e){return"movementY"in e?e.movementY:Ur}}),Zc=St(ss),L0=V({},ss,{dataTransfer:0}),F0=St(L0),R0=V({},Wa,{relatedTarget:0}),qr=St(R0),U0=V({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),q0=St(U0),H0=V({},$n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),G0=St(H0),V0=V({},$n,{data:0}),Kc=St(V0),Y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=X0[e])?!!t[e]:!1}function Hr(){return Z0}var K0=V({},Wa,{key:function(e){if(e.key){var t=Y0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ls(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Q0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hr,charCode:function(e){return e.type==="keypress"?ls(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ls(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$0=St(K0),J0=V({},ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$c=St(J0),I0=V({},$n,{submitter:0}),W0=St(I0),P0=V({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hr}),eh=St(P0),th=V({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),nh=St(th),lh=V({},ss,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ah=St(lh),ih=V({},$n,{newState:0,oldState:0,source:0}),sh=St(ih),rh=[9,13,27,32],Gr=jn&&"CompositionEvent"in window,ei=null;jn&&"documentMode"in document&&(ei=document.documentMode);var oh=jn&&"TextEvent"in window&&!ei,Jc=jn&&(!Gr||ei&&8<ei&&11>=ei),Ic=" ",Wc=!1;function Pc(e,t){switch(e){case"keyup":return rh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ed(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ia=!1;function uh(e,t){switch(e){case"compositionend":return ed(t);case"keypress":return t.which!==32?null:(Wc=!0,Ic);case"textInput":return e=t.data,e===Ic&&Wc?null:e;default:return null}}function ch(e,t){if(ia)return e==="compositionend"||!Gr&&Pc(e,t)?(e=Qc(),ns=Fr=Kn=null,ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jc&&t.locale!=="ko"?null:t.data;default:return null}}var dh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function td(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dh[e.type]:t==="textarea"}function nd(e,t,n,l){la?aa?aa.push(l):aa=[l]:la=l,t=rr(t,"onChange"),0<t.length&&(n=new is("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var ti=null,ni=null;function fh(e){Yp(e,0)}function rs(e){var t=$a(e);if(Fc(t))return e}function ld(e,t){if(e==="change")return t}var ad=!1;if(jn){var Vr;if(jn){var Yr="oninput"in document;if(!Yr){var id=document.createElement("div");id.setAttribute("oninput","return;"),Yr=typeof id.oninput=="function"}Vr=Yr}else Vr=!1;ad=Vr&&(!document.documentMode||9<document.documentMode)}function sd(){ti&&(ti.detachEvent("onpropertychange",rd),ni=ti=null)}function rd(e){if(e.propertyName==="value"&&rs(ni)){var t=[];nd(t,ni,e,zr(e)),Yc(fh,t)}}function ph(e,t,n){e==="focusin"?(sd(),ti=t,ni=n,ti.attachEvent("onpropertychange",rd)):e==="focusout"&&sd()}function mh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rs(ni)}function hh(e,t){if(e==="click")return rs(t)}function gh(e,t){if(e==="input"||e==="change")return rs(t)}function xh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:xh;function li(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!$l.call(t,a)||!Ut(e[a],t[a]))return!1}return!0}function Qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function od(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ud(e,t){var n=od(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=od(n)}}function cd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Qr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qr(e.document)}return t}function Xr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var yh=jn&&"documentMode"in document&&11>=document.documentMode,sa=null,Zr=null,ai=null,Kr=!1;function fd(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kr||sa==null||sa!==Qr(l)||(l=sa,"selectionStart"in l&&Xr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ai&&li(ai,l)||(ai=l,l=rr(Zr,"onSelect"),0<l.length&&(t=new is("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=sa)))}function jl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ra={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionrun:jl("Transition","TransitionRun"),transitionstart:jl("Transition","TransitionStart"),transitioncancel:jl("Transition","TransitionCancel"),transitionend:jl("Transition","TransitionEnd")},$r={},pd={};jn&&(pd=document.createElement("div").style,"AnimationEvent"in window||(delete ra.animationend.animation,delete ra.animationiteration.animation,delete ra.animationstart.animation),"TransitionEvent"in window||delete ra.transitionend.transition);function Cl(e){if($r[e])return $r[e];if(!ra[e])return e;var t=ra[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pd)return $r[e]=t[n];return e}var md=Cl("animationend"),hd=Cl("animationiteration"),gd=Cl("animationstart"),bh=Cl("transitionrun"),vh=Cl("transitionstart"),wh=Cl("transitioncancel"),xd=Cl("transitionend"),yd=new Map,Jr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jr.push("scrollEnd");function nn(e,t){yd.set(e,t),Al(t,[e])}var _h=0;function Cn(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=rn.identifierPrefix;var n=_h++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function bd(e){if(e==null||typeof e=="string")return e;var t=null,n=Ta;if(n!==null)for(var l=0;l<n.length;l++){var a=e[n[l]];if(a!=null){if(a==="none")return"none";t=t==null?a:t+(" "+a)}}return t??e.default}function Dn(e,t){return e=bd(e),t=bd(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var os=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zt=[],oa=0,Ir=0;function us(){for(var e=oa,t=Ir=oa=0;t<e;){var n=Zt[t];Zt[t++]=null;var l=Zt[t];Zt[t++]=null;var a=Zt[t];Zt[t++]=null;var i=Zt[t];if(Zt[t++]=null,l!==null&&a!==null){var r=l.pending;r===null?a.next=a:(a.next=r.next,r.next=a),l.pending=a}i!==0&&vd(n,a,i)}}function cs(e,t,n,l){Zt[oa++]=e,Zt[oa++]=t,Zt[oa++]=n,Zt[oa++]=l,Ir|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Wr(e,t,n,l){return cs(e,t,n,l),ds(e)}function Dl(e,t){return cs(e,null,null,t),ds(e)}function vd(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,i=e.return;i!==null;)i.childLanes|=n,l=i.alternate,l!==null&&(l.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&t!==null&&(a=31-Ft(n),e=i.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),i):null}function ds(e){if(50<Ni)throw Ni=0,er=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ua={};function kh(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,n,l){return new kh(e,t,n,l)}function Pr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mn(e,t){var n=e.alternate;return n===null?(n=Dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function wd(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function fs(e,t,n,l,a,i){var r=0;if(l=e,typeof l=="function")Pr(l)&&(r=1);else if(typeof l=="string")r=Ig(e,n,Ie.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(l){case y:return e=Dt(31,n,t,a),e.elementType=y,e.lanes=i,e;case we:return Ml(n.children,a,i,t);case Ae:r=8,a|=24;break;case Qe:return e=Dt(12,n,t,a|2),e.elementType=Qe,e.lanes=i,e;case fe:return e=Dt(13,n,t,a),e.elementType=fe,e.lanes=i,e;case se:return e=Dt(19,n,t,a),e.elementType=se,e.lanes=i,e;case H:case c:return e=a|32,e=Dt(30,n,t,e),e.elementType=c,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case Ne:r=10;break e;case Le:r=9;break e;case P:r=11;break e;case ge:r=14;break e;case _:r=16,l=null;break e}r=29,n=Error(d(130,e===null?"null":typeof e,"")),l=null}return t=Dt(r,n,t,a),t.elementType=e,t.type=l,t.lanes=i,t}function Ml(e,t,n,l){return e=Dt(7,e,l,t),e.lanes=n,e}function eo(e,t,n){return e=Dt(6,e,null,t),e.lanes=n,e}function _d(e){var t=Dt(18,null,null,0);return t.stateNode=e,t}function to(e,t,n){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var kd=new WeakMap;function Kt(e,t){if(typeof e=="object"&&e!==null){var n=kd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:El(t)},kd.set(e,t),t)}return{value:e,source:t,stack:El(t)}}var ca=[],da=0,ps=null,ii=0,$t=[],Jt=0,Jn=null,fn=1,pn="";function On(e,t){ca[da++]=ii,ca[da++]=ps,ps=e,ii=t}function Ed(e,t,n){$t[Jt++]=fn,$t[Jt++]=pn,$t[Jt++]=Jn,Jn=e;var l=fn;e=pn;var a=32-Ft(l)-1;l&=~(1<<a),n+=1;var i=32-Ft(t)+a;if(30<i){var r=a-a%5;i=(l&(1<<r)-1).toString(32),l>>=r,a-=r,fn=1<<32-Ft(t)+a|n<<a|l,pn=i+e}else fn=1<<i|n<<a|l,pn=e}function ms(e){e.return!==null&&(On(e,1),Ed(e,1,0))}function no(e){for(;e===ps;)ps=ca[--da],ca[da]=null,ii=ca[--da],ca[da]=null;for(;e===Jn;)Jn=$t[--Jt],$t[Jt]=null,pn=$t[--Jt],$t[Jt]=null,fn=$t[--Jt],$t[Jt]=null}function Sd(e,t){$t[Jt++]=fn,$t[Jt++]=pn,$t[Jt++]=Jn,fn=t.id,pn=t.overflow,Jn=e}var dt=null,$e=null,Te=!1,In=null,It=!1,lo=Error(d(519));function Wn(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw si(Kt(t,e)),lo}function Nd(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[mt]=e,t[Ct]=l,n){case"dialog":De("cancel",t),De("close",t);break;case"iframe":case"object":case"embed":De("load",t);break;case"video":case"audio":for(n=0;n<Ai.length;n++)De(Ai[n],t);break;case"source":De("error",t);break;case"img":case"image":case"link":De("error",t),De("load",t);break;case"details":De("toggle",t);break;case"input":De("invalid",t),Rc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":De("invalid",t);break;case"textarea":De("invalid",t),qc(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||Kp(t.textContent,n)?(l.popover!=null&&(De("beforetoggle",t),De("toggle",t)),l.onScroll!=null&&De("scroll",t),l.onScrollEnd!=null&&De("scrollend",t),l.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||Wn(e,!0)}function hs(e){for(dt=e.return;dt;)switch(dt.tag){case 5:case 31:case 13:It=!1;return;case 27:case 3:It=!0;return;default:dt=dt.return}}function fa(e){if(e!==dt)return!1;if(!Te)return hs(e),Te=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||zu(e.type,e.memoizedProps)),n=!n),n&&$e&&Wn(e),hs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));$e=pm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));$e=pm(e)}else t===27?(t=$e,ml(e.type)?(e=Vu,Vu=null,$e=e):$e=t):$e=dt?Pt(e.stateNode.nextSibling):null;return!0}function Ol(){$e=dt=null,Te=!1}function ao(){var e=In;return e!==null&&(zt===null?zt=e:zt.push.apply(zt,e),In=null),e}function si(e){In===null?In=[e]:In.push(e)}var io=Re(null),zl=null,zn=null;function Pn(e,t,n){ve(io,t._currentValue),t._currentValue=n}function Bn(e){e._currentValue=io.current,je(io)}function gs(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function so(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var r=a.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=a;for(var p=0;p<t.length;p++)if(u.context===t[p]){i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),gs(i.return,n,e),l||(r=null);break e}i=u.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(d(341));r.lanes|=n,i=r.alternate,i!==null&&(i.lanes|=n),gs(r,n,e),r=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),gs(a.return,n,e),r=a.child,r=r!==null?r.sibling:null):r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Bl(e,t,n,l){e=null;for(var a=t,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(d(387));if(r=r.memoizedProps,r!==null){var u=a.type;Ut(a.pendingProps.value,r.value)||(e!==null?e.push(u):e=[u])}}else if(a===kn.current){if(r=a.alternate,r===null)throw Error(d(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Fa):e=[Fa])}a=a.return}return e!==null&&so(t,e,n,l),t.flags|=262144,e!==null}function xs(e){for(e=e.firstContext;e!==null;){if(!Ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ll(e){zl=e,zn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ht(e){return Td(zl,e)}function ys(e,t){return zl===null&&Ll(e),Td(e,t)}function Td(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},zn===null){if(e===null)throw Error(d(308));zn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else zn=zn.next=t;return n}var Eh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Sh=o.unstable_scheduleCallback,Nh=o.unstable_NormalPriority,at={$$typeof:Ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ro(){return{controller:new Eh,data:new Map,refCount:0}}function ri(e){e.refCount--,e.refCount===0&&Sh(Nh,function(){e.controller.abort()})}function Ad(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var l=t[e];n.indexOf(l)===-1&&n.push(l)}}}var oi=null;function Th(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var ui=null,oo=0,Fl=0,pa=null;function Ah(e,t){if(ui===null){var n=ui=[];oo=0,Fl=Su(),pa={status:"pending",value:void 0,then:function(l){n.push(l)}}}return oo++,t.then(jd,jd),t}function jd(){if(--oo===0&&(oi=null,ui!==null)){pa!==null&&(pa.status="fulfilled");var e=ui;ui=null,Fl=0,pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function jh(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var Cd=G.S;G.S=function(e,t){if(kp=lt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ah(e,t),oi!==null)for(var n=Da;n!==null;)Ad(n,oi),n=n.next;if(n=e.types,n!==null){for(var l=Da;l!==null;)Ad(l,n),l=l.next;if(Fl!==0){l=oi,l===null&&(l=oi=[]);for(var a=0;a<n.length;a++){var i=n[a];l.indexOf(i)===-1&&l.push(i)}}}Cd!==null&&Cd(e,t)};var Rl=Re(null);function uo(){var e=Rl.current;return e!==null?e:Ze.pooledCache}function bs(e,t){t===null?ve(Rl,Rl.current):ve(Rl,t.pool)}function Dd(){var e=uo();return e===null?null:{parent:at._currentValue,pool:e}}var ma=Error(d(460)),co=Error(d(474)),vs=Error(d(542)),ws={then:function(){}};function Md(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Od(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(dn,dn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bd(e),e===void 0&&!("reason"in t)?Error(d(600)):e;default:if(typeof t.status=="string")t.then(dn,dn);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bd(e),e}throw ql=t,ma}}function Ul(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ql=n,ma):n}}var ql=null;function zd(){if(ql===null)throw Error(d(459));var e=ql;return ql=null,e}function Bd(e){if(e===ma||e===vs)throw Error(d(483))}var ha=null,ci=0;function _s(e){var t=ci;return ci+=1,ha===null&&(ha=[]),Od(ha,e,t)}function el(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ks(e,t){throw t.$$typeof===le?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ld(e){function t(k,x){if(e){var D=k.deletions;D===null?(k.deletions=[x],k.flags|=16):D.push(x)}}function n(k,x){if(!e)return null;for(;x!==null;)t(k,x),x=x.sibling;return null}function l(k){for(var x=new Map;k!==null;)k.key===null?x.set(k.index,k):x.set(k.key,k),k=k.sibling;return x}function a(k,x){return k=Mn(k,x),k.index=0,k.sibling=null,k}function i(k,x,D){return k.index=D,e?(D=k.alternate,D!==null?(D=D.index,D<x?(k.flags|=2,x):D):(k.flags|=134217730,x)):(k.flags|=1048576,x)}function r(k){return e&&k.alternate===null&&(k.flags|=134217730),k}function u(k,x,D,Y){return x===null||x.tag!==6?(x=eo(D,k.mode,Y),x.return=k,x):(x=a(x,D),x.return=k,x)}function p(k,x,D,Y){var ce=D.type;return ce===we?(k=O(k,x,D.props.children,Y,D.key),el(k,D),k):x!==null&&(x.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===_&&Ul(ce)===x.type)?(x=a(x,D.props),el(x,D),x.return=k,x):(x=fs(D.type,D.key,D.props,null,k.mode,Y),el(x,D),x.return=k,x)}function E(k,x,D,Y){return x===null||x.tag!==4||x.stateNode.containerInfo!==D.containerInfo||x.stateNode.implementation!==D.implementation?(x=to(D,k.mode,Y),x.return=k,x):(x=a(x,D.children||[]),x.return=k,x)}function O(k,x,D,Y,ce){return x===null||x.tag!==7?(x=Ml(D,k.mode,Y,ce),x.return=k,x):(x=a(x,D),x.return=k,x)}function Q(k,x,D){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=eo(""+x,k.mode,D),x.return=k,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case X:return D=fs(x.type,x.key,x.props,null,k.mode,D),el(D,x),D.return=k,D;case me:return x=to(x,k.mode,D),x.return=k,x;case _:return x=Ul(x),Q(k,x,D)}if(I(x)||L(x))return x=Ml(x,k.mode,D,null),x.return=k,x;if(typeof x.then=="function")return Q(k,_s(x),D);if(x.$$typeof===Ne)return Q(k,ys(k,x),D);ks(k,x)}return null}function v(k,x,D,Y){var ce=x!==null?x.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return ce!==null?null:u(k,x,""+D,Y);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case X:return D.key===ce?p(k,x,D,Y):null;case me:return D.key===ce?E(k,x,D,Y):null;case _:return D=Ul(D),v(k,x,D,Y)}if(I(D)||L(D))return ce!==null?null:O(k,x,D,Y,null);if(typeof D.then=="function")return v(k,x,_s(D),Y);if(D.$$typeof===Ne)return v(k,x,ys(k,D),Y);ks(k,D)}return null}function M(k,x,D,Y,ce){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return k=k.get(D)||null,u(x,k,""+Y,ce);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case X:return k=k.get(Y.key===null?D:Y.key)||null,p(x,k,Y,ce);case me:return k=k.get(Y.key===null?D:Y.key)||null,E(x,k,Y,ce);case _:return Y=Ul(Y),M(k,x,D,Y,ce)}if(I(Y)||L(Y))return k=k.get(D)||null,O(x,k,Y,ce,null);if(typeof Y.then=="function")return M(k,x,D,_s(Y),ce);if(Y.$$typeof===Ne)return M(k,x,D,ys(x,Y),ce);ks(x,Y)}return null}function ie(k,x,D,Y){for(var ce=null,ze=null,pe=x,be=x=0,rt=null;pe!==null&&be<D.length;be++){pe.index>be?(rt=pe,pe=null):rt=pe.sibling;var Be=v(k,pe,D[be],Y);if(Be===null){pe===null&&(pe=rt);break}e&&pe&&Be.alternate===null&&t(k,pe),x=i(Be,x,be),ze===null?ce=Be:ze.sibling=Be,ze=Be,pe=rt}if(be===D.length)return n(k,pe),Te&&On(k,be),ce;if(pe===null){for(;be<D.length;be++)pe=Q(k,D[be],Y),pe!==null&&(x=i(pe,x,be),ze===null?ce=pe:ze.sibling=pe,ze=pe);return Te&&On(k,be),ce}for(pe=l(pe);be<D.length;be++)rt=M(pe,k,be,D[be],Y),rt!==null&&(e&&(Be=rt.alternate,Be!==null&&pe.delete(Be.key===null?be:Be.key)),x=i(rt,x,be),ze===null?ce=rt:ze.sibling=rt,ze=rt);return e&&pe.forEach(function(bl){return t(k,bl)}),Te&&On(k,be),ce}function de(k,x,D,Y){if(D==null)throw Error(d(151));for(var ce=null,ze=null,pe=x,be=x=0,rt=null,Be=D.next();pe!==null&&!Be.done;be++,Be=D.next()){pe.index>be?(rt=pe,pe=null):rt=pe.sibling;var bl=v(k,pe,Be.value,Y);if(bl===null){pe===null&&(pe=rt);break}e&&pe&&bl.alternate===null&&t(k,pe),x=i(bl,x,be),ze===null?ce=bl:ze.sibling=bl,ze=bl,pe=rt}if(Be.done)return n(k,pe),Te&&On(k,be),ce;if(pe===null){for(;!Be.done;be++,Be=D.next())Be=Q(k,Be.value,Y),Be!==null&&(x=i(Be,x,be),ze===null?ce=Be:ze.sibling=Be,ze=Be);return Te&&On(k,be),ce}for(pe=l(pe);!Be.done;be++,Be=D.next())Be=M(pe,k,be,Be.value,Y),Be!==null&&(e&&(rt=Be.alternate,rt!==null&&pe.delete(rt.key===null?be:rt.key)),x=i(Be,x,be),ze===null?ce=Be:ze.sibling=Be,ze=Be);return e&&pe.forEach(function(ux){return t(k,ux)}),Te&&On(k,be),ce}function Ee(k,x,D,Y){if(typeof D=="object"&&D!==null&&D.type===we&&D.key===null&&D.props.ref===void 0&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case X:e:{for(var ce=D.key;x!==null;){if(x.key===ce){if(ce=D.type,ce===we){if(x.tag===7){n(k,x.sibling),Y=a(x,D.props.children),el(Y,D),Y.return=k,k=Y;break e}}else if(x.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===_&&Ul(ce)===x.type){n(k,x.sibling),Y=a(x,D.props),el(Y,D),Y.return=k,k=Y;break e}n(k,x);break}else t(k,x);x=x.sibling}D.type===we?(Y=Ml(D.props.children,k.mode,Y,D.key),el(Y,D),Y.return=k,k=Y):(Y=fs(D.type,D.key,D.props,null,k.mode,Y),el(Y,D),Y.return=k,k=Y)}return r(k);case me:e:{for(ce=D.key;x!==null;){if(x.key===ce)if(x.tag===4&&x.stateNode.containerInfo===D.containerInfo&&x.stateNode.implementation===D.implementation){n(k,x.sibling),Y=a(x,D.children||[]),Y.return=k,k=Y;break e}else{n(k,x);break}else t(k,x);x=x.sibling}Y=to(D,k.mode,Y),Y.return=k,k=Y}return r(k);case _:return D=Ul(D),Ee(k,x,D,Y)}if(I(D))return ie(k,x,D,Y);if(L(D)){if(ce=L(D),typeof ce!="function")throw Error(d(150));return D=ce.call(D),de(k,x,D,Y)}if(typeof D.then=="function")return Ee(k,x,_s(D),Y);if(D.$$typeof===Ne)return Ee(k,x,ys(k,D),Y);ks(k,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,x!==null&&x.tag===6?(n(k,x.sibling),Y=a(x,D),Y.return=k,k=Y):(n(k,x),Y=eo(D,k.mode,Y),Y.return=k,k=Y),r(k)):n(k,x)}return function(k,x,D,Y){try{ci=0;var ce=Ee(k,x,D,Y);return ha=null,ce}catch(pe){if(pe===ma||pe===vs)throw pe;var ze=Dt(29,pe,null,k.mode);return ze.lanes=Y,ze.return=k,ze}finally{}}}var Hl=Ld(!0),Fd=Ld(!1),tl=!1;function fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function po(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function nl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ll(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(qe&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=ds(e),vd(e,null,n),t}return cs(e,l,t,n),ds(e)}function di(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Ec(e,n)}}function mo(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?a=i=r:i=i.next=r,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ho=!1;function fi(){if(ho){var e=pa;if(e!==null)throw e}}function pi(e,t,n,l){ho=!1;var a=e.updateQueue;tl=!1;var i=a.firstBaseUpdate,r=a.lastBaseUpdate,u=a.shared.pending;if(u!==null){a.shared.pending=null;var p=u,E=p.next;p.next=null,r===null?i=E:r.next=E,r=p;var O=e.alternate;O!==null&&(O=O.updateQueue,u=O.lastBaseUpdate,u!==r&&(u===null?O.firstBaseUpdate=E:u.next=E,O.lastBaseUpdate=p))}if(i!==null){var Q=a.baseState;r=0,O=E=p=null,u=i;do{var v=u.lane&-536870913,M=v!==u.lane;if(M?(Oe&v)===v:(l&v)===v){v!==0&&v===Fl&&(ho=!0),O!==null&&(O=O.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var ie=e,de=u;v=t;var Ee=n;switch(de.tag){case 1:if(ie=de.payload,typeof ie=="function"){Q=ie.call(Ee,Q,v);break e}Q=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=de.payload,v=typeof ie=="function"?ie.call(Ee,Q,v):ie,v==null)break e;Q=V({},Q,v);break e;case 2:tl=!0}}v=u.callback,v!==null&&(e.flags|=64,M&&(e.flags|=8192),M=a.callbacks,M===null?a.callbacks=[v]:M.push(v))}else M={lane:v,tag:u.tag,payload:u.payload,callback:u.callback,next:null},O===null?(E=O=M,p=Q):O=O.next=M,r|=v;if(u=u.next,u===null){if(u=a.shared.pending,u===null)break;M=u,u=M.next,M.next=null,a.lastBaseUpdate=M,a.shared.pending=null}}while(!0);O===null&&(p=Q),a.baseState=p,a.firstBaseUpdate=E,a.lastBaseUpdate=O,i===null&&(a.shared.lanes=0),cl|=r,e.lanes=r,e.memoizedState=Q}}function Rd(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function Ud(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Rd(n[e],t)}var al=Re(null),Es=Re(0);function qd(e,t){e=qn,ve(Es,e),ve(al,t),qn=e|t.baseLanes}function go(){ve(Es,qn),ve(al,al.current)}function xo(){qn=Es.current,je(al),je(Es)}var gt=Re(null),_t=null;function il(e){var t=e.alternate;ve(xt,xt.current&1),ve(gt,e),_t===null&&(t===null||al.current!==null||t.memoizedState!==null)&&(_t=e)}function yo(e){ve(xt,xt.current),ve(gt,e),_t===null&&(_t=e)}function Hd(e){e.tag===22?(ve(xt,xt.current),ve(gt,e),_t===null&&(_t=e)):sl()}function sl(){ve(xt,xt.current),ve(gt,gt.current)}function qt(e){je(gt),_t===e&&(_t=null),je(xt)}var xt=Re(0);function mi(e,t){ve(gt,gt.current),ve(xt,t)}function bo(e){je(xt),je(gt),_t===e&&(_t=null)}function Ss(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Hu(n)||Gu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ln=0,ke=null,Xe=null,it=null,Ns=!1,ga=!1,Gl=!1,Ts=0,hi=0,xa=null,Ch=0;function et(){throw Error(d(321))}function vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ut(e[n],t[n]))return!1;return!0}function wo(e,t,n,l,a,i){return Ln=i,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,G.H=e===null||e.memoizedState===null?Sf:Nf,Gl=!1,i=n(l,a),Gl=!1,ga&&(i=Vd(t,n,l,a)),Gd(e),i}function Gd(e){G.H=zs;var t=Xe!==null&&Xe.next!==null;if(Ln=0,it=Xe=ke=null,Ns=!1,hi=0,xa=null,t)throw Error(d(300));e===null||st||(e=e.dependencies,e!==null&&xs(e)&&(st=!0))}function Vd(e,t,n,l){ke=e;var a=0;do{if(ga&&(xa=null),hi=0,ga=!1,25<=a)throw Error(d(301));if(a+=1,it=Xe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}G.H=Rh,i=t(n,l)}while(ga);return i}function Dh(){var e=G.H,t=e.useState()[0];return t=typeof t.then=="function"?gi(t):t,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(ke.flags|=1024),t}function _o(){var e=Ts!==0;return Ts=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Eo(e){if(Ns){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ns=!1}Ln=0,it=Xe=ke=null,ga=!1,hi=Ts=0,xa=null}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?ke.memoizedState=it=e:it=it.next=e,it}function nt(){if(Xe===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=it===null?ke.memoizedState:it.next;if(t!==null)it=t,Xe=e;else{if(e===null)throw ke.alternate===null?Error(d(467)):Error(d(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},it===null?ke.memoizedState=it=e:it=it.next=e}return it}function As(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gi(e){var t=hi;return hi+=1,xa===null&&(xa=[]),e=Od(xa,e,t),t=ke,(it===null?t.memoizedState:it.next)===null&&(t=t.alternate,G.H=t===null||t.memoizedState===null?Sf:Nf),e}function js(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gi(e);if(e.$$typeof===g)return;if(e.$$typeof===Ne)return ht(e)}throw Error(d(438,String(e)))}function So(e){var t=null,n=ke.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=ke.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=As(),ke.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=h;return t.index++,n}function Fn(e,t){return typeof t=="function"?t(e):t}function Cs(e){var t=nt();return No(t,Xe,e)}function No(e,t,n){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=n;var a=e.baseQueue,i=l.pending;if(i!==null){if(a!==null){var r=a.next;a.next=i.next,i.next=r}t.baseQueue=a=i,l.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{t=a.next;var u=r=null,p=null,E=t,O=!1;do{var Q=E.lane&-536870913;if(Q!==E.lane?(Oe&Q)===Q:(Ln&Q)===Q){var v=E.revertLane;if(v===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),Q===Fl&&(O=!0);else if((Ln&v)===v){E=E.next,v===Fl&&(O=!0);continue}else Q={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(u=p=Q,r=i):p=p.next=Q,ke.lanes|=v,cl|=v;Q=E.action,Gl&&n(i,Q),i=E.hasEagerState?E.eagerState:n(i,Q)}else v={lane:Q,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(u=p=v,r=i):p=p.next=v,ke.lanes|=Q,cl|=Q;E=E.next}while(E!==null&&E!==t);if(p===null?r=i:p.next=u,!Ut(i,e.memoizedState)&&(st=!0,O&&(n=pa,n!==null)))throw n;e.memoizedState=i,e.baseState=r,e.baseQueue=p,l.lastRenderedState=i}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function To(e){var t=nt(),n=t.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do i=e(i,r.action),r=r.next;while(r!==a);Ut(i,t.memoizedState)||(st=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,l]}function Yd(e,t,n){var l=ke,a=nt(),i=Te;if(i){if(n===void 0)throw Error(d(407));n=n()}else n=t();var r=!Ut((Xe||a).memoizedState,n);if(r&&(a.memoizedState=n,st=!0),a=a.queue,Co(Zd.bind(null,l,a,e),[e]),e=a.getSnapshot!==t||r||it!==null&&(it.memoizedState.tag&1)!==0,ya(e?9:8,{destroy:void 0},Xd.bind(null,l,a,n,t),null),e){if(l.flags|=2048,Ze===null)throw Error(d(349));i||(Ln&127)!==0||Qd(l,t,n)}return n}function Qd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t=As(),ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xd(e,t,n,l){t.value=n,t.getSnapshot=l,Kd(t)&&$d(e)}function Zd(e,t,n){return n(function(){Kd(t)&&$d(e)})}function Kd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ut(e,n)}catch{return!0}}function $d(e){var t=Dl(e,2);t!==null&&Bt(t,e,2)}function Ao(e){var t=Nt();if(typeof e=="function"){var n=e;if(e=n(),Gl){Zn(!0);try{n()}finally{Zn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:e},t}function Jd(e,t,n,l){return e.baseState=n,No(e,Xe,typeof l=="function"?l:Fn)}function Mh(e,t,n,l,a){if(Os(e))throw Error(d(485));if(e=t.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};G.T!==null?n(!0):i.isTransition=!1,l(i),n=t.pending,n===null?(i.next=t.pending=i,Id(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Id(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var i=G.T,r={};r.types=i!==null?i.types:null,G.T=r;try{var u=n(a,l),p=G.S;p!==null&&p(r,u),Wd(e,t,u)}catch(E){jo(e,t,E)}finally{i!==null&&r.types!==null&&(i.types=r.types),G.T=i}}else try{i=n(a,l),Wd(e,t,i)}catch(E){jo(e,t,E)}}function Wd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){Pd(e,t,l)},function(l){return jo(e,t,l)}):Pd(e,t,n)}function Pd(e,t,n){t.status="fulfilled",t.value=n,ef(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Id(e,n)))}function jo(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,ef(t),t=t.next;while(t!==l)}e.action=null}function ef(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function tf(e,t){return t}function nf(e,t){if(Te){var n=Ze.formState;if(n!==null){e:{var l=ke;if(Te){if($e){t:{for(var a=$e,i=It;a.nodeType!==8;){if(!i){a=null;break t}if(a=Pt(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){$e=Pt(a.nextSibling),l=a.data==="F!";break e}}Wn(l)}l=!1}l&&(t=n[0])}}return n=Nt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tf,lastRenderedState:t},n.queue=l,n=_f.bind(null,ke,l),l.dispatch=n,l=Ao(!1),i=Bo.bind(null,ke,!1,l.queue),l=Nt(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=Mh.bind(null,ke,a,i,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function lf(e){var t=nt();return af(t,Xe,e)}function af(e,t,n){if(t=No(e,t,tf)[0],e=Cs(Fn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=gi(t)}catch(r){throw r===ma?vs:r}else l=t;t=nt();var a=t.queue,i=a.dispatch;return n!==t.memoizedState&&(ke.flags|=2048,ya(9,{destroy:void 0},Oh.bind(null,a,n),null)),[l,i,e]}function Oh(e,t){e.action=t}function sf(e){var t=nt(),n=Xe;if(n!==null)return af(t,n,e);nt(),t=t.memoizedState,n=nt();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function ya(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=ke.updateQueue,t===null&&(t=As(),ke.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function rf(){return nt().memoizedState}function Ds(e,t,n,l){var a=Nt();ke.flags|=e,a.memoizedState=ya(1|t,{destroy:void 0},n,l===void 0?null:l)}function Ms(e,t,n,l){var a=nt();l=l===void 0?null:l;var i=a.memoizedState.inst;Xe!==null&&l!==null&&vo(l,Xe.memoizedState.deps)?a.memoizedState=ya(t,i,n,l):(ke.flags|=e,a.memoizedState=ya(1|t,i,n,l))}function of(e,t){Ds(8390656,8,e,t)}function Co(e,t){Ms(2048,8,e,t)}function zh(e){ke.flags|=4;var t=ke.updateQueue;if(t===null)t=As(),ke.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function uf(e){var t=nt().memoizedState;return zh({ref:t,nextImpl:e}),function(){if((qe&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function cf(e,t){return Ms(4,2,e,t)}function df(e,t){return Ms(4,4,e,t)}function ff(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pf(e,t,n){n=n!=null?n.concat([e]):null,Ms(4,4,ff.bind(null,t,e),n)}function Do(){}function mf(e,t){var n=nt();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&vo(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function hf(e,t){var n=nt();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&vo(t,l[1]))return l[0];if(l=e(),Gl){Zn(!0);try{e()}finally{Zn(!1)}}return n.memoizedState=[l,t],l}function Mo(e,t,n){return n===void 0||(Ln&1073741824)!==0&&(Oe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Sp(),ke.lanes|=e,cl|=e,n)}function gf(e,t,n,l){return Ut(n,t)?n:al.current!==null?(e=Mo(e,n,l),Ut(e,t)||(st=!0),e):(Ln&106)===0||(Ln&1073741824)!==0&&(Oe&261930)===0?(st=!0,e.memoizedState=n):(e=Sp(),ke.lanes|=e,cl|=e,t)}function xf(e,t,n,l,a){var i=J.p;J.p=i!==0&&8>i?i:8;var r=G.T,u={};u.types=r!==null?r.types:null,G.T=u,Bo(e,!1,t,n);try{var p=a(),E=G.S;if(E!==null&&E(u,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var O=jh(p,l);xi(e,t,O,Yt(e))}else xi(e,t,l,Yt(e))}catch(Q){xi(e,t,{then:function(){},status:"rejected",reason:Q},Yt())}finally{J.p=i,r!==null&&u.types!==null&&(r.types=u.types),G.T=r}}function Bh(){}function Oo(e,t,n,l){if(e.tag!==5)throw Error(d(476));var a=yf(e).queue;xf(e,a,t,xe,n===null?Bh:function(){return bf(e),n(l)})}function yf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:xe,baseState:xe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:xe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function bf(e){var t=yf(e);t.next===null&&(t=e.alternate.memoizedState),xi(e,t.next.queue,{},Yt())}function zo(){return ht(Fa)}function vf(){return nt().memoizedState}function wf(){return nt().memoizedState}function Lh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Yt();e=nl(n);var l=ll(t,e,n);l!==null&&(Bt(l,t,n),di(l,t,n)),t={cache:ro()},e.payload=t;return}t=t.return}}function Fh(e,t,n){var l=Yt();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Os(e)?kf(t,n):(n=Wr(e,t,n,l),n!==null&&(Bt(n,e,l),Ef(n,t,l)))}function _f(e,t,n){var l=Yt();xi(e,t,n,l)}function xi(e,t,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Os(e))kf(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,u=i(r,n);if(a.hasEagerState=!0,a.eagerState=u,Ut(u,r))return cs(e,t,a,0),Ze===null&&us(),!1}catch{}finally{}if(n=Wr(e,t,a,l),n!==null)return Bt(n,e,l),Ef(n,t,l),!0}return!1}function Bo(e,t,n,l){if(l={lane:2,revertLane:Su(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Os(e)){if(t)throw Error(d(479))}else t=Wr(e,n,l,2),t!==null&&Bt(t,e,2)}function Os(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function kf(e,t){ga=Ns=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ef(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Ec(e,n)}}var zs={readContext:ht,use:js,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useLayoutEffect:et,useInsertionEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useSyncExternalStore:et,useId:et,useHostTransitionStatus:et,useFormState:et,useActionState:et,useOptimistic:et,useMemoCache:et,useCacheRefresh:et,useEffectEvent:et},Sf={readContext:ht,use:js,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:of,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ds(4194308,4,ff.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ds(4194308,4,e,t)},useInsertionEffect:function(e,t){Ds(4,2,e,t)},useMemo:function(e,t){var n=Nt();t=t===void 0?null:t;var l=e();if(Gl){Zn(!0);try{e()}finally{Zn(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Nt();if(n!==void 0){var a=n(t);if(Gl){Zn(!0);try{n(t)}finally{Zn(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=Fh.bind(null,ke,e),[l.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ao(e);var t=e.queue,n=_f.bind(null,ke,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Do,useDeferredValue:function(e,t){var n=Nt();return Mo(n,e,t)},useTransition:function(){var e=Ao(!1);return e=xf.bind(null,ke,e.queue,!0,!1),Nt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=ke,a=Nt();if(Te){if(n===void 0)throw Error(d(407));n=n()}else{if(n=t(),Ze===null)throw Error(d(349));(Oe&127)!==0||Qd(l,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,of(Zd.bind(null,l,i,e),[e]),l.flags|=2048,ya(9,{destroy:void 0},Xd.bind(null,l,i,n,t),null),n},useId:function(){var e=Nt(),t=Ze.identifierPrefix;if(Te){var n=pn,l=fn;n=(l&~(1<<32-Ft(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ts++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Ch++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zo,useFormState:nf,useActionState:nf,useOptimistic:function(e){var t=Nt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Bo.bind(null,ke,!0,n),n.dispatch=t,[e,t]},useMemoCache:So,useCacheRefresh:function(){return Nt().memoizedState=Lh.bind(null,ke)},useEffectEvent:function(e){var t=Nt(),n={impl:e};return t.memoizedState=n,function(){if((qe&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}},Nf={readContext:ht,use:js,useCallback:mf,useContext:ht,useEffect:Co,useImperativeHandle:pf,useInsertionEffect:cf,useLayoutEffect:df,useMemo:hf,useReducer:Cs,useRef:rf,useState:function(){return Cs(Fn)},useDebugValue:Do,useDeferredValue:function(e,t){var n=nt();return gf(n,Xe.memoizedState,e,t)},useTransition:function(){var e=Cs(Fn)[0],t=nt().memoizedState;return[typeof e=="boolean"?e:gi(e),t]},useSyncExternalStore:Yd,useId:vf,useHostTransitionStatus:zo,useFormState:lf,useActionState:lf,useOptimistic:function(e,t){var n=nt();return Jd(n,Xe,e,t)},useMemoCache:So,useCacheRefresh:wf,useEffectEvent:uf},Rh={readContext:ht,use:js,useCallback:mf,useContext:ht,useEffect:Co,useImperativeHandle:pf,useInsertionEffect:cf,useLayoutEffect:df,useMemo:hf,useReducer:To,useRef:rf,useState:function(){return To(Fn)},useDebugValue:Do,useDeferredValue:function(e,t){var n=nt();return Xe===null?Mo(n,e,t):gf(n,Xe.memoizedState,e,t)},useTransition:function(){var e=To(Fn)[0],t=nt().memoizedState;return[typeof e=="boolean"?e:gi(e),t]},useSyncExternalStore:Yd,useId:vf,useHostTransitionStatus:zo,useFormState:sf,useActionState:sf,useOptimistic:function(e,t){var n=nt();return Xe!==null?Jd(n,Xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:So,useCacheRefresh:wf,useEffectEvent:uf};function Lo(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fo={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Yt(),a=nl(l);a.payload=t,n!=null&&(a.callback=n),t=ll(e,a,l),t!==null&&(Bt(t,e,l),di(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Yt(),a=nl(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=ll(e,a,l),t!==null&&(Bt(t,e,l),di(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Yt(),l=nl(n);l.tag=2,t!=null&&(l.callback=t),t=ll(e,l,n),t!==null&&(Bt(t,e,n),di(t,e,n))}};function Tf(e,t,n,l,a,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,r):t.prototype&&t.prototype.isPureReactComponent?!li(n,l)||!li(a,i):!0}function Af(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Fo.enqueueReplaceState(t,t.state,null)}function Vl(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=V({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function jf(e){os(e)}function Cf(e){console.error(e)}function Df(e){os(e)}function Bs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Mf(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Ro(e,t,n){return n=nl(n),n.tag=3,n.payload={element:null},n.callback=function(){Bs(e,t)},n}function Of(e){return e=nl(e),e.tag=3,e}function zf(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;e.payload=function(){return a(i)},e.callback=function(){Mf(t,n,l)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Mf(t,n,l),typeof a!="function"&&(dl===null?dl=new Set([this]):dl.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function Uh(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Bl(t,n,a,!0),n=gt.current,n!==null){switch(n.tag){case 31:case 13:case 19:return _t===null?nr():n.alternate===null&&tt===0&&(tt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===ws?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),_u(e,l,a)),!1;case 22:return n.flags|=65536,l===ws?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),_u(e,l,a)),!1}throw Error(d(435,n.tag))}return _u(e,l,a),nr(),!1}if(Te)return t=gt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==lo&&(e=Error(d(422),{cause:l}),si(Kt(e,n)))):(l!==lo&&(t=Error(d(423),{cause:l}),si(Kt(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=Kt(l,n),a=Ro(e.stateNode,l,a),mo(e,a),tt!==4&&(tt=2)),!1;var i=Error(d(520),{cause:l});if(i=Kt(i,n),Si===null?Si=[i]:Si.push(i),tt!==4&&(tt=2),t===null)return!0;l=Kt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ro(n.stateNode,l,e),mo(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(dl===null||!dl.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Of(a),zf(a,e,n,l),mo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Uo=Error(d(461)),st=!1;function ot(e,t,n,l){t.child=e===null?Fd(t,null,n,l):Hl(t,e.child,n,l)}function Bf(e,t,n,l,a){n=n.render;var i=t.ref;if("ref"in l){var r={};for(var u in l)u!=="ref"&&(r[u]=l[u])}else r=l;return Ll(t),l=wo(e,t,n,r,i,a),u=_o(),e!==null&&!st?(ko(e,t,a),Rn(e,t,a)):(Te&&u&&ms(t),t.flags|=1,ot(e,t,l,a),t.child)}function Lf(e,t,n,l,a){if(e===null){var i=n.type;return typeof i=="function"&&!Pr(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Ff(e,t,i,l,a)):(e=fs(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Zo(e,a)){var r=i.memoizedProps;if(n=n.compare,n=n!==null?n:li,n(r,l)&&e.ref===t.ref)return Rn(e,t,a)}return t.flags|=1,e=Mn(i,l),e.ref=t.ref,e.return=t,t.child=e}function Ff(e,t,n,l,a){if(e!==null){var i=e.memoizedProps;if(li(i,l)&&e.ref===t.ref)if(st=!1,t.pendingProps=l=i,Zo(e,a))(e.flags&131072)!==0&&(st=!0);else return t.lanes=e.lanes,Rn(e,t,a)}return qo(e,t,n,l,a)}function Rf(e,t,n,l){var a=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(l=t.child=e.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~i}else l=0,t.child=null;return Uf(e,t,i,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&bs(t,i!==null?i.cachePool:null),i!==null?qd(t,i):go(),Hd(t);else return l=t.lanes=536870912,Uf(e,t,i!==null?i.baseLanes|n:n,n,l)}else i!==null?(bs(t,i.cachePool),qd(t,i),sl(),t.memoizedState=null):(e!==null&&bs(t,null),go(),sl());return ot(e,t,a,n),t.child}function yi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uf(e,t,n,l,a){var i=uo();return i=i===null?null:{parent:at._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&bs(t,null),go(),Hd(t),e!==null&&Bl(e,t,l,!0),t.childLanes=a,null}function Ls(e,t){return t=Fs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function qf(e,t,n){return Hl(t,e.child,null,n),e=Ls(t,t.pendingProps),e.flags|=2,qt(t),t.memoizedState=null,e}function qh(e,t,n){var l=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Te){if(l.mode==="hidden")return e=Ls(t,l),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},yi(null,e);if(yo(t),(e=$e)?(e=fm(e,It),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Jn!==null?{id:fn,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},n=_d(e),n.return=t,t.child=n,dt=t,$e=null)):e=null,e===null)throw Wn(t);return t.lanes=536870912,null}return Ls(t,l)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(yo(t),a)if(t.flags&256)t.flags&=-257,t=qf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(st||Bl(e,t,n,!1),a=(n&e.childLanes)!==0,st||a){if(al.current===null){if(l=Ze,l!==null&&(r=Sc(l,n),r!==0&&r!==i.retryLane))throw i.retryLane=r,Dl(e,r),Bt(l,e,r),Uo;nr()}t=qf(e,t,n)}else e=i.treeContext,$e=Pt(r.nextSibling),dt=t,Te=!0,In=null,It=!1,e!==null&&Sd(t,e),t=Ls(t,l),t.flags|=134221824;return t}return e=Mn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ba(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(d(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function qo(e,t,n,l,a){return Ll(t),n=wo(e,t,n,l,void 0,a),l=_o(),e!==null&&!st?(ko(e,t,a),Rn(e,t,a)):(Te&&l&&ms(t),t.flags|=1,ot(e,t,n,a),t.child)}function Hf(e,t,n,l,a,i){return Ll(t),t.updateQueue=null,n=Vd(t,l,n,a),Gd(e),l=_o(),e!==null&&!st?(ko(e,t,i),Rn(e,t,i)):(Te&&l&&ms(t),t.flags|=1,ot(e,t,n,i),t.child)}function Gf(e,t,n,l,a){if(Ll(t),t.stateNode===null){var i=ua,r=n.contextType;typeof r=="object"&&r!==null&&(i=ht(r)),i=new n(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fo,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},fo(t),r=n.contextType,i.context=typeof r=="object"&&r!==null?ht(r):ua,i.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Lo(t,n,r,l),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Fo.enqueueReplaceState(i,i.state,null),pi(t,l,i,a),fi(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,p=Vl(n,u);i.props=p;var E=i.context,O=n.contextType;r=ua,typeof O=="object"&&O!==null&&(r=ht(O));var Q=n.getDerivedStateFromProps;O=typeof Q=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||E!==r)&&Af(t,i,l,r),tl=!1;var v=t.memoizedState;i.state=v,pi(t,l,i,a),fi(),E=t.memoizedState,u||v!==E||tl?(typeof Q=="function"&&(Lo(t,n,Q,l),E=t.memoizedState),(p=tl||Tf(t,n,p,l,v,E,r))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=E),i.props=l,i.state=E,i.context=r,l=p):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,po(e,t),r=t.memoizedProps,O=Vl(n,r),i.props=O,Q=t.pendingProps,v=i.context,E=n.contextType,p=ua,typeof E=="object"&&E!==null&&(p=ht(E)),u=n.getDerivedStateFromProps,(E=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==Q||v!==p)&&Af(t,i,l,p),tl=!1,v=t.memoizedState,i.state=v,pi(t,l,i,a),fi();var M=t.memoizedState;r!==Q||v!==M||tl||e!==null&&e.dependencies!==null&&xs(e.dependencies)?(typeof u=="function"&&(Lo(t,n,u,l),M=t.memoizedState),(O=tl||Tf(t,n,O,l,v,M,p)||e!==null&&e.dependencies!==null&&xs(e.dependencies))?(E||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,M,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,M,p)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=M),i.props=l,i.state=M,i.context=p,l=O):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,ba(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Hl(t,e.child,null,a),t.child=Hl(t,null,n,a)):ot(e,t,n,a),t.memoizedState=i.state,e=t.child):e=Rn(e,t,a),e}function Vf(e,t,n,l){return Ol(),t.flags|=256,ot(e,t,n,l),t.child}var Ho={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Go(e){return{baseLanes:e,cachePool:Dd()}}function Vo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Vt),e}function Yf(e,t,n){var l=t.pendingProps,a=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(xt.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Te){if(a?il(t):sl(),(e=$e)?(e=fm(e,It),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Jn!==null?{id:fn,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},n=_d(e),n.return=t,t.child=n,dt=t,$e=null)):e=null,e===null)throw Wn(t);return Gu(e)?t.lanes=32:t.lanes=536870912,null}return i=l.children,l=l.fallback,a?(sl(),a=t.mode,i=Fs({mode:"hidden",children:i},a),l=Ml(l,a,n,null),i.return=t,l.return=t,i.sibling=l,t.child=i,l=t.child,l.memoizedState=Go(n),l.childLanes=Vo(e,r,n),t.memoizedState=Ho,yi(null,l)):(il(t),Yo(t,i))}var u=e.memoizedState;if(u!==null){var p=u.dehydrated;if(p!==null)return Hh(e,t,i,r,l,p,u,n)}return a?(sl(),a=l.fallback,i=t.mode,u=e.child,p=u.sibling,l=Mn(u,{mode:"hidden",children:l.children}),l.subtreeFlags=u.subtreeFlags&1206910976,p!==null?a=Mn(p,a):(a=Ml(a,i,n,null),a.flags|=2),a.return=t,l.return=t,l.sibling=a,t.child=l,yi(null,l),l=t.child,a=e.child.memoizedState,a===null?a=Go(n):(i=a.cachePool,i!==null?(u=at._currentValue,i=i.parent!==u?{parent:u,pool:u}:i):i=Dd(),a={baseLanes:a.baseLanes|n,cachePool:i}),l.memoizedState=a,l.childLanes=Vo(e,r,n),t.memoizedState=Ho,yi(e.child,l)):(il(t),n=e.child,e=n.sibling,n=Mn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Yo(e,t){return t=Fs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Fs(e,t){return e=Dt(22,e,null,t),e.lanes=0,e}function Rs(e,t,n){return Hl(t,e.child,null,n),e=Yo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hh(e,t,n,l,a,i,r,u){if(n)return t.flags&256?(il(t),t.flags&=-257,Rs(e,t,u)):t.memoizedState!==null?(sl(),t.child=e.child,t.flags|=128,null):(sl(),i=a.fallback,r=t.mode,a=Fs({mode:"visible",children:a.children},r),i=Ml(i,r,u,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,Hl(t,e.child,null,u),a=t.child,a.memoizedState=Go(u),a.childLanes=Vo(e,l,u),t.memoizedState=Ho,yi(null,a));if(il(t),Gu(i)){if(l=i.nextSibling&&i.nextSibling.dataset,l)var p=l.dgst;return l=p,l!==""&&(a=Error(d(419)),a.stack="",a.digest=l,si({value:a,source:null,stack:null})),Rs(e,t,u)}if(st||Bl(e,t,u,!1),l=(u&e.childLanes)!==0,st||l){if(al.current!==null)return Rs(e,t,u);if(l=Ze,l!==null&&(a=Sc(l,u),a!==0&&a!==r.retryLane))throw r.retryLane=a,Dl(e,a),Bt(l,e,a),Uo;return Hu(i)||nr(),Rs(e,t,u)}return Hu(i)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,$e=Pt(i.nextSibling),dt=t,Te=!0,In=null,It=!1,e!==null&&Sd(t,e),t=Yo(t,a.children),t.flags|=134221824,t)}function Qf(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),gs(e.return,t,n)}function Xf(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Ss(n)===null&&(t=e),e=e.sibling}return t}function Us(e,t,n,l,a,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=n,r.tailMode=a,r.treeForkCount=i)}function Qo(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Xo(e,t,n){var l=t.pendingProps,a=l.revealOrder,i=l.tail;l=l.children;var r=xt.current;if(t.flags&128)return mi(t,r),null;var u=(r&2)!==0;if(u?(r=r&1|2,t.flags|=128):r&=1,mi(t,r),a==="backwards"&&e!==null?(Qo(e),ot(e,t,l,n),Qo(e)):ot(e,t,l,n),l=Te?ii:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qf(e,n,t);else if(e.tag===19)Qf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"backwards":n=Xf(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null,Qo(t)),Us(t,!0,a,null,i,l);break;case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ss(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Us(t,!0,n,null,i,l);break;case"together":Us(t,!1,null,null,void 0,l);break;case"independent":t.memoizedState=null;break;default:n=Xf(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Us(t,!1,a,n,i,l)}return t.child}function Zf(e,t,n){var l=t.pendingProps;return Pn(t,t.type,l.value),ot(e,t,l.children,n),t.child}function Rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Bl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,n=Mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&xs(e)))}function Gh(e,t,n){switch(t.tag){case 3:Yn(t,t.stateNode.containerInfo),Pn(t,at,e.memoizedState.cache),Ol();break;case 27:case 5:Qn(t);break;case 4:Yn(t,t.stateNode.containerInfo);break;case 10:Pn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,yo(t),null;break;case 13:var l=t.memoizedState;if(l!==null){if(l.dehydrated!==null)return il(t),t.flags|=128,null;l=Bl(e,t,n,!1);var a=t.child.childLanes;return l||(n&a)!==0?Yf(e,t,n):(il(t),e=Rn(e,t,n),e!==null?e.sibling:null)}il(t);break;case 19:if(t.flags&128)return Xo(e,t,n);if(a=(e.flags&128)!==0,l=(n&t.childLanes)!==0,l||(Bl(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return Xo(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),mi(t,xt.current),l)break;return null;case 22:return t.lanes=0,Rf(e,t,n,t.pendingProps);case 24:Pn(t,at,e.memoizedState.cache)}return Rn(e,t,n)}function Kf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)st=!0;else{if(!Zo(e,n)&&(t.flags&128)===0)return st=!1,Gh(e,t,n);st=(e.flags&131072)!==0}else st=!1,Te&&(t.flags&1048576)!==0&&Ed(t,ii,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ul(t.elementType),t.type=e,typeof e=="function")Pr(e)?(l=Vl(e,l),t.tag=1,t=Gf(null,t,e,l,n)):(t.tag=0,t=qo(null,t,e,l,n));else{if(e!=null){var a=e.$$typeof;if(a===P){t.tag=11,t=Bf(null,t,e,l,n);break e}else if(a===ge){t.tag=14,t=Lf(null,t,e,l,n);break e}else if(a===Ne){t.tag=10,t.type=e,t=Zf(null,t,n);break e}}throw t=te(e)||e,Error(d(306,t,""))}}return t;case 0:return qo(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=Vl(l,t.pendingProps),Gf(e,t,l,a,n);case 3:e:{if(Yn(t,t.stateNode.containerInfo),e===null)throw Error(d(387));l=t.pendingProps;var i=t.memoizedState;a=i.element,po(e,t),pi(t,l,null,n);var r=t.memoizedState;if(l=r.cache,Pn(t,at,l),l!==i.cache&&so(t,[at],n,!0),fi(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Vf(e,t,l,n);break e}else if(l!==a){a=Kt(Error(d(424)),t),si(a),t=Vf(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=Pt(e.firstChild),dt=t,Te=!0,In=null,It=!0,n=Fd(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Ol(),l===a){t=Rn(e,t,n);break e}ot(e,t,l,n)}t=t.child}return t;case 26:return ba(e,t),e===null?(n=bm(t.type,null,t.pendingProps,null))?t.memoizedState=n:Te||(t.stateNode=Wp(t.type,t.pendingProps,jt.current,t)):t.memoizedState=bm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Qn(t),e===null&&Te&&(l=t.stateNode=hm(t.type,t.pendingProps,jt.current),dt=t,It=!0,a=$e,ml(t.type)?(Vu=a,$e=Pt(l.firstChild)):$e=a),ot(e,t,t.pendingProps.children,n),ba(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Te&&((a=l=$e)&&(l=Lg(l,t.type,t.pendingProps,It),l!==null?(t.stateNode=l,dt=t,$e=Pt(l.firstChild),It=!1,a=!0):a=!1),a||Wn(t)),Qn(t),a=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,l=i.children,zu(a,i)?l=null:r!==null&&zu(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,Dh,null,null,n),Fa._currentValue=a),ba(e,t),ot(e,t,l,n),t.child;case 6:return e===null&&Te&&((e=n=$e)&&(n=Fg(n,t.pendingProps,It),n!==null?(t.stateNode=n,dt=t,$e=null,e=!0):e=!1),e||Wn(t)),null;case 13:return Yf(e,t,n);case 4:return Yn(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Hl(t,null,l,n):ot(e,t,l,n),t.child;case 11:return Bf(e,t,t.type,t.pendingProps,n);case 7:return l=t.pendingProps,ba(e,t),ot(e,t,l,n),t.child;case 8:return ot(e,t,t.pendingProps.children,n),t.child;case 12:return ot(e,t,t.pendingProps.children,n),t.child;case 10:return Zf(e,t,n);case 9:return a=t.type._context,l=t.pendingProps.children,Ll(t),a=ht(a),l=l(a),t.flags|=1,ot(e,t,l,n),t.child;case 14:return Lf(e,t,t.type,t.pendingProps,n);case 15:return Ff(e,t,t.type,t.pendingProps,n);case 19:return Xo(e,t,n);case 31:return qh(e,t,n);case 22:return Rf(e,t,n,t.pendingProps);case 24:return Ll(t),l=ht(at),e===null?(a=uo(),a===null&&(a=Ze,i=ro(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:l,cache:a},fo(t),Pn(t,at,a)):((e.lanes&n)!==0&&(po(e,t),pi(t,null,null,n),fi()),a=e.memoizedState,i=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Pn(t,at,l)):(l=i.cache,Pn(t,at,l),l!==a.cache&&so(t,[at],n,!0))),ot(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),l=t.pendingProps,l.name!=null&&l.name!=="auto"?t.flags|=e===null?18882560:18874368:Te&&ms(t),e!==null&&e.memoizedProps.name!==l.name?t.flags|=4194816:ba(e,t),ot(e,t,l.children,n),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function Un(e){e.flags|=4}function Ko(e,t,n,l,a){var i;if((i=(e.mode&32)!==0)&&(i=n===null?km(t,l):km(t,l)&&(l.src!==n.src||l.srcSet!==n.srcSet)),i){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(jp())e.flags|=8192;else throw ql=ws,co}else e.flags&=-16777217}function $f(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Em(t))if(jp())e.flags|=8192;else throw ql=ws,co}function qs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?_c():536870912,e.lanes|=t,Ea|=t)}function bi(e,t){if(!Te)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&1206910976,l|=a.flags&1206910976,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function Vh(e,t,n){var l=t.pendingProps;switch(no(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return Je(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Bn(at),tn(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(fa(t)?Un(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ao())),Je(t),null;case 26:var a=t.type,i=t.memoizedState;return e===null?(Un(t),i!==null?(Je(t),$f(t,i)):(Je(t),Ko(t,a,null,l,n))):i?i!==e.memoizedState?(Un(t),Je(t),$f(t,i)):(Je(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Un(t),Je(t),Ko(t,a,e,l,n)),null;case 27:if(En(t),n=jt.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Un(t);else{if(!l){if(t.stateNode===null)throw Error(d(166));return Je(t),t.subtreeFlags&=-33554433,null}e=Ie.current,fa(t)?Nd(t):(e=hm(a,l,n),t.stateNode=e,Un(t))}return Je(t),t.subtreeFlags&=-33554433,null;case 5:if(En(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Un(t);else{if(!l){if(t.stateNode===null)throw Error(d(166));return Je(t),t.subtreeFlags&=-33554433,null}if(i=Ie.current,fa(t))Nd(t);else{var r=Ci(jt.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?r.createElement(a,{is:l.is}):r.createElement(a)}}i[mt]=t,i[Ct]=l;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch(bt(i,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Un(t)}}return Je(t),t.subtreeFlags&=-33554433,Ko(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Un(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(d(166));if(e=jt.current,fa(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=dt,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Kp(e.nodeValue,n)),e||Wn(t,!0)}else e=Ci(e).createTextNode(l),e[mt]=t,t.stateNode=e}return Je(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=fa(t),n!==null){if(e===null){if(!l)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[mt]=t}else Ol(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Je(t),e=!1}else n=ao(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(qt(t),t):(qt(t),null);if((t.flags&128)!==0)throw Error(d(558))}return Je(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=fa(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(d(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(d(317));a[mt]=t}else Ol(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Je(t),a=!1}else a=ao(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(qt(t),t):(qt(t),null)}return qt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),qs(t,t.updateQueue),Je(t),null);case 4:return tn(),e===null&&ju(t.stateNode.containerInfo),t.flags|=67108864,Je(t),null;case 10:return Bn(t.type),Je(t),null;case 19:if(bo(t),l=t.memoizedState,l===null)return Je(t),null;if(a=(t.flags&128)!==0,i=l.rendering,i===null)if(a)bi(l,!1);else{if(tt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ss(e),i!==null){for(t.flags|=128,bi(l,!1),e=i.updateQueue,t.updateQueue=e,qs(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)wd(n,e),n=n.sibling;return mi(t,xt.current&1|2),Te&&On(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&lt()>Ws&&(t.flags|=128,a=!0,bi(l,!1),t.lanes=4194304)}else{if(!a)if(e=Ss(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,qs(t,e),bi(l,!0),l.tail===null&&l.tailMode!=="collapsed"&&l.tailMode!=="visible"&&!i.alternate&&!Te)return Je(t),null}else 2*lt()-l.renderingStartTime>Ws&&n!==536870912&&(t.flags|=128,a=!0,bi(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}if(l.tail!==null){e=l.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return l.rendering=e,l.tail=e.sibling,l.renderingStartTime=lt(),e.sibling=null,i=xt.current,i=a?i&1|2:i&1,l.tailMode==="visible"||l.tailMode==="collapsed"||!n||Te?mi(t,i):(n=i,ve(gt,t),ve(xt,n),_t===null&&(_t=t)),Te&&On(t,l.treeForkCount),e}return Je(t),null;case 22:case 23:return qt(t),xo(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),n=t.updateQueue,n!==null&&qs(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&je(Rl),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Bn(at),Je(t),null;case 25:return null;case 30:return t.flags|=33554432,Je(t),null}throw Error(d(156,t.tag))}function Yh(e,t){switch(no(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(at),tn(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return En(t),null;case 31:if(t.memoizedState!==null){if(qt(t),t.alternate===null)throw Error(d(340));Ol()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(qt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Ol()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return bo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return tn(),null;case 10:return Bn(t.type),null;case 22:case 23:return qt(t),xo(),e!==null&&je(Rl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bn(at),null;case 25:return null;default:return null}}function Jf(e,t){switch(no(t),t.tag){case 3:Bn(at),tn();break;case 26:case 27:case 5:En(t);break;case 4:tn();break;case 31:t.memoizedState!==null&&qt(t);break;case 13:qt(t);break;case 19:bo(t);break;case 10:Bn(t.type);break;case 22:case 23:qt(t),xo(),e!==null&&je(Rl);break;case 24:Bn(at)}}function vi(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var i=n.create,r=n.inst;l=i(),r.destroy=l}n=n.next}while(n!==a)}}catch(u){Ve(t,t.return,u)}}function rl(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){var r=l.inst,u=r.destroy;if(u!==void 0){r.destroy=void 0,a=t;var p=n,E=u;try{E()}catch(O){Ve(a,p,O)}}}l=l.next}while(l!==i)}}catch(O){Ve(t,t.return,O)}}function If(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ud(t,n)}catch(l){Ve(e,e.return,l)}}}function Wf(e,t,n){n.props=Vl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Ve(e,t,l)}}function mn(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:var a=e.stateNode,i=Cn(e.memoizedProps,a);(a.ref===null||a.ref.name!==i)&&(a.ref=im(i)),l=a.ref;break;case 7:if(e.stateNode===null){var r=new Qt(e);S(e.child,!1,zg,r,void 0,void 0),e.stateNode=r}l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(u){Ve(e,t,u)}}function yt(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){Ve(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Ve(e,t,a)}else n.current=null}function Hs(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)dm(e.stateNode,t[n])}function Pf(e){for(var t=e.return;t!==null&&(Jo(t)&&dm(e.stateNode,t.stateNode),!$o(t));)t=t.return}function wi(e){for(var t=e.return;t!==null&&(Jo(t)&&Bg(e.stateNode,t.stateNode),!$o(t));)t=t.return}function $o(e){return e.tag===5||e.tag===3||e.tag===27}function Jo(e){return e&&e.tag===7&&e.stateNode!==null}function Io(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){Ve(e,e.return,a)}}function Wo(e,t,n){try{var l=e.stateNode;gg(l,e.type,n,t),l[Ct]=t}catch(a){Ve(e,e.return,a)}}function ep(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ml(e.type)||e.tag===4}function Po(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ep(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ml(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eu(e,t,n,l){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(a),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dn)),Hs(e,l),Fe=!0;else if(a!==4&&(a===27&&(Hs(e,l),l=null,ml(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(eu(e,t,n,l),e=e.sibling;e!==null;)eu(e,t,n,l),e=e.sibling}function Gs(e,t,n,l){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?n.insertBefore(a,t):n.appendChild(a),Hs(e,l),Fe=!0;else if(a!==4&&(a===27&&(Hs(e,l),l=null,ml(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Gs(e,t,n,l),e=e.sibling;e!==null;)Gs(e,t,n,l),e=e.sibling}function tp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);bt(t,l,n),t[mt]=e,t[Ct]=n}catch(i){Ve(e,e.return,i)}}var Vs=!1,Ht=null;function np(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Vs=!0)}var hn=null;function lp(){var e=hn;return hn=null,e}var Mt=0;function va(e,t,n,l,a){return Mt=0,ap(e.child,t,n,l,a)}function ap(e,t,n,l,a){for(var i=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(l!==null){var u=Fu(r);l.push(u),u.view&&(i=!0)}else i||Fu(r).view&&(i=!0);Vs=!0,lm(r,Mt===0?t:t+"_"+Mt,n),Mt++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||ap(e.child,t,n,l,a)&&(i=!0));e=e.sibling}return i}function gn(e,t){for(;e!==null;)e.tag===5?am(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||gn(e.child,t)),e=e.sibling}function Ys(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Ys(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(d(544));var n=t.name;t=Dn(t.default,t.share),t!=="none"&&(va(e,n,t,null,!1)||gn(e.child,!1))}e=e.sibling}}function tu(e,t){if(e.tag===30){var n=e.stateNode,l=e.memoizedProps,a=Cn(l,n),i=Dn(l.default,n.paired?l.share:l.enter);i!=="none"?va(e,a,i,null,!1)?(Ys(e),n.paired||t||Aa(e,l.onEnter)):gn(e.child,!1):Ys(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)tu(e,t),e=e.sibling;else Ys(e)}function nu(e){if(Ht!==null&&Ht.size!==0){var t=Ht;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,l=n.name;if(l!=null&&l!=="auto"){var a=t.get(l);if(a!==void 0){var i=Dn(n.default,n.share);if(i!=="none"&&(va(e,l,i,null,!1)?(i=e.stateNode,a.paired=i,i.paired=a,Aa(e,n.onShare)):gn(e.child,!1)),t.delete(l),t.size===0)break}}}nu(e)}e=e.sibling}}}function lu(e){if(e.tag===30){var t=e.memoizedProps,n=Cn(t,e.stateNode),l=Ht!==null?Ht.get(n):void 0,a=Dn(t.default,l!==void 0?t.share:t.exit);a!=="none"&&(va(e,n,a,null,!1)?l!==void 0?(a=e.stateNode,l.paired=a,a.paired=l,Ht.delete(n),Aa(e,t.onShare)):Aa(e,t.onExit):gn(e.child,!1)),Ht!==null&&nu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)lu(e),e=e.sibling;else Ht!==null&&nu(e)}function ip(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Cn(t,e.stateNode);t=Dn(t.default,t.update),e.flags&=-5,t!=="none"&&va(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&ip(e);e=e.sibling}}function au(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,gn(e.child,!1))}au(e)}e=e.sibling}}function Qs(e){if(e.tag===30)e.stateNode.paired=null,gn(e.child,!1),au(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Qs(e),e=e.sibling;else au(e)}function sp(e){for(e=e.child;e!==null;)e.tag===30?gn(e.child,!1):(e.subtreeFlags&33554432)!==0&&sp(e),e=e.sibling}function iu(e,t,n,l,a,i,r){for(var u=!1;t!==null;){if(t.tag===5){var p=t.stateNode;if(i!==null&&Mt<i.length){var E=i[Mt],O=Fu(p);(E.view||O.view)&&(u=!0);var Q;if(Q=(e.flags&4)===0)if(O.clip)Q=!0;else{Q=E.rect;var v=O.rect;Q=Q.y!==v.y||Q.x!==v.x||Q.height!==v.height||Q.width!==v.width}Q&&(e.flags|=4),O.abs?O=!E.abs:(E=E.rect,O=O.rect,O=E.height!==O.height||E.width!==O.width),O&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&lm(p,Mt===0?n:n+"_"+Mt,a),u&&(e.flags&4)!==0||(hn===null&&(hn=[]),hn.push(p,Mt===0?l:l+"_"+Mt,t.memoizedProps)),Mt++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:iu(e,t.child,n,l,a,i,r)&&(u=!0));t=t.sibling}return u}function rp(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,l=e.stateNode,a=Cn(n,l),i=Dn(n.default,n.update),r;r=e.memoizedState,e.memoizedState=null,l=e;var u=e.child;Mt=0,a=iu(l,u,a,a,i,r,!1),(e.flags&4)!==0&&a&&Aa(e,n.onUpdate)}else(e.subtreeFlags&33554432)!==0&&rp(e);e=e.sibling}}var ft=!1,He=!1,xn=!1,su=!1,op=typeof WeakSet=="function"?WeakSet:Set,pt=null,yn=!1,_i=!1,Xs=!1,ru=!1;function Qh(e,t,n){if(e=e.containerInfo,Mu=Ra,e=dd(e),Xr(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var i=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{l.nodeType,r.nodeType}catch{l=null;break e}var u=0,p=-1,E=-1,O=0,Q=0,v=e,M=null;t:for(;;){for(var ie;v!==l||i!==0&&v.nodeType!==3||(p=u+i),v!==r||a!==0&&v.nodeType!==3||(E=u+a),v.nodeType===3&&(u+=v.nodeValue.length),(ie=v.firstChild)!==null;)M=v,v=ie;for(;;){if(v===e)break t;if(M===l&&++O===i&&(p=u),M===r&&++Q===a&&(E=u),(ie=v.nextSibling)!==null)break;v=M,M=v.parentNode}v=ie}l=p===-1||E===-1?null:{start:p,end:E}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ou={focusedElem:e,selectionRange:l},Ra=!1,n=(n&335544064)===n,pt=t,t=n?9270:1024;pt!==null;){if(e=pt,n&&(l=e.deletions,l!==null))for(i=0;i<l.length;i++)n&&lu(l[i]);if(e.alternate===null&&(e.flags&2)!==0)n&&np(e),Zs(n);else{if(e.tag===22){if(l=e.alternate,e.memoizedState!==null){l!==null&&l.memoizedState===null&&n&&lu(l),Zs(n);continue}else if(l!==null&&l.memoizedState!==null){n&&np(e),Zs(n);continue}}l=e.child,(e.subtreeFlags&t)!==0&&l!==null?(l.return=e,pt=l):(n&&ip(e),Zs(n))}}Ht=null}function Zs(e){for(;pt!==null;){var t=pt,n=e,l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((a&1024)!==0&&l!==null){n=void 0,a=l.memoizedProps,l=l.memoizedState;var i=t.stateNode;try{var r=Vl(t.type,a);n=i.getSnapshotBeforeUpdate(r,l),i.__reactInternalSnapshotBeforeUpdate=n}catch(u){Ve(t,t.return,u)}}break;case 3:if((a&1024)!==0){if(l=t.stateNode.containerInfo,n=l.nodeType,n===9)qu(l);else if(n===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":qu(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&l!==null&&(n=Cn(l.memoizedProps,l.stateNode),a=t.memoizedProps,a=Dn(a.default,a.update),a!=="none"&&va(l,n,a,l.memoizedState=[],!0));break;default:if((a&1024)!==0)throw Error(d(163))}if(l=t.sibling,l!==null){l.return=t.return,pt=l;break}pt=t.return}}function up(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:bn(e,n),l&4&&vi(5,n);break;case 1:if(bn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){Ve(n,n.return,r)}else{var a=Vl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Ve(n,n.return,r)}}l&64&&If(n),l&512&&mn(n,n.return);break;case 3:if(bn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ud(e,t)}catch(r){Ve(n,n.return,r)}}break;case 27:t===null&&l&4&&tp(n);case 26:case 5:bn(e,n),t===null&&l&4&&Io(n),l&512&&mn(n,n.return);break;case 12:bn(e,n);break;case 31:bn(e,n),l&4&&pp(e,n);break;case 13:bn(e,n),l&4&&mp(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=lg.bind(null,n),Rg(e,n))));break;case 22:if(l=n.memoizedState!==null||ft,!l){var i=t!==null&&t.memoizedState!==null||He;t=ft,a=He,ft=l,(He=i)&&!a?(l=2,(n.subtreeFlags&8772)!==0&&(l|=1),sn(e,n,l)):bn(e,n),ft=t,He=a}break;case 30:bn(e,n),l&512&&mn(n,n.return);break;case 7:l&512&&mn(n,n.return);default:bn(e,n)}}function ou(e,t){for(e=e.child;e!==null;)cp(e,t),e=e.sibling}function cp(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var l=n.style;typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"}else{var a=e.stateNode,i=e.memoizedProps.style,r=i!=null&&i.hasOwnProperty("display")?i.display:null;a.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(p){Ve(e,e.return,p)}uu(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Fe=!0}catch(p){Ve(e,e.return,p)}break;case 18:try{var u=e.stateNode;t?nm(u,!0):nm(e.stateNode,!1)}catch(p){Ve(e,e.return,p)}break;case 22:case 23:e.memoizedState===null&&ou(e,t);break;default:ou(e,t)}}function uu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,l=t;switch(n.tag){case 4:cp(n,l);break e;case 22:n.memoizedState===null&&uu(n,l);break e;default:uu(n,l)}}e=e.sibling}}function dp(e){var t=e.alternate;t!==null&&(e.alternate=null,dp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Ot=!1;function ln(e,t,n){for(n=n.child;n!==null;)fp(e,t,n),n=n.sibling}function fp(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 26:He||yt(n,t),ln(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!He&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:He||yt(n,t),wi(n);var l=We,a=Ot;ml(n.type)&&(We=n.stateNode,Ot=!1),ln(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),We=l,Ot=a;break;case 5:He||yt(n,t),wi(n);case 6:if(n.tag===6&&wi(n),l=We,a=Ot,We=null,ln(e,t,n),We=l,Ot=a,We!==null)if(Ot)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(n.stateNode),Fe=!0}catch(i){Ve(n,t,i)}else try{We.removeChild(n.stateNode),Fe=!0}catch(i){Ve(n,t,i)}break;case 18:We!==null&&(Ot?(e=We,tm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ua(e)):tm(We,n.stateNode));break;case 4:l=We,a=Ot,We=n.stateNode.containerInfo,Ot=!0,ln(e,t,n),We=l,Ot=a;break;case 0:case 11:case 14:case 15:rl(2,n,t),He||rl(4,n,t),ln(e,t,n);break;case 1:He||(yt(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Wf(n,t,l)),ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:He=(l=He)||n.memoizedState!==null,ln(e,t,n),He=l;break;case 30:yt(n,t),ln(e,t,n);break;case 7:He||yt(n,t),ln(e,t,n);break;default:ln(e,t,n)}}function pp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ua(e)}catch(n){Ve(t,t.return,n)}}}function mp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ua(e)}catch(n){Ve(t,t.return,n)}}function Xh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new op),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new op),t;default:throw Error(d(435,e.tag))}}function Ks(e,t){var n=Xh(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var a=ag.bind(null,e,l);l.then(a,a)}})}function Tt(e,t,n){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var i=l[a],r=e,u=t,p=u;e:for(;p!==null;){switch(p.tag){case 27:if(ml(p.type)){We=p.stateNode,Ot=!1;break e}break;case 5:We=p.stateNode,Ot=!1;break e;case 3:case 4:We=p.stateNode.containerInfo,Ot=!0;break e}p=p.return}if(We===null)throw Error(d(160));fp(r,u,i),We=null,Ot=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)hp(t,e,n),t=t.sibling}var an=null;function hp(e,t,n){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(l=e.updateQueue,l=l!==null?l.events:null,l!==null))for(var i=0;i<l.length;i++){var r=l[i];r.ref.impl=r.nextImpl}Tt(t,e,n),At(e),a&4&&(rl(3,e,e.return),vi(3,e),rl(5,e,e.return));break;case 1:Tt(t,e,n),At(e),a&512&&(He||l===null||yt(l,l.return)),a&64&&ft&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(i=an,Tt(t,e,n),At(e),a&512&&(He||l===null||yt(l,l.return)),a&4)if(a=l!==null?l.memoizedState:null,n=e.memoizedState,l===null)if(n===null)if(e.stateNode===null)if(ft)e.stateNode=Wp(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,a=i.ownerDocument||i;t:switch(t){case"title":l=a.getElementsByTagName("title")[0],(!l||l[Ka]||l[mt]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=a.createElement(t),a.head.insertBefore(l,a.querySelector("head > title"))),bt(l,t,n),l[mt]=e,ct(l),t=l;break e;case"link":if(i=_m("link","href",a).get(t+(n.href||""))){for(r=0;r<i.length;r++)if(l=i[r],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){i.splice(r,1);break t}}l=a.createElement(t),bt(l,t,n),a.head.appendChild(l);break;case"meta":if(i=_m("meta","content",a).get(t+(n.content||""))){for(r=0;r<i.length;r++)if(l=i[r],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){i.splice(r,1);break t}}l=a.createElement(t),bt(l,t,n),a.head.appendChild(l);break;default:throw Error(d(468,t))}l[mt]=e,ct(l),t=l}e.stateNode=t}else ft||Zu(i,e.type,e.stateNode);else e.stateNode=wm(i,n,e.memoizedProps);else a!==n?(a===null?(t=l.stateNode,t===null||He||t.parentNode.removeChild(t)):a.count--,n===null?ft||Zu(i,e.type,e.stateNode):wm(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Wo(e,e.memoizedProps,l.memoizedProps);break;case 27:Tt(t,e,n),At(e),a&512&&(He||l===null||yt(l,l.return)),l!==null&&a&4&&Wo(e,e.memoizedProps,l.memoizedProps);break;case 5:if(i=xn,xn=!1,Tt(t,e,n),xn=i,At(e),a&512&&(He||l===null||yt(l,l.return)),e.flags&32){t=e.stateNode;try{na(t,""),Fe=!0}catch(O){Ve(e,e.return,O)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Wo(e,t,l!==null?l.memoizedProps:t)),a&1024&&(su=!0);break;case 6:if(Tt(t,e,n),At(e),a&4){if(e.stateNode===null)throw Error(d(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Fe=!0}catch(O){Ve(e,e.return,O)}}break;case 3:if(Fe=!1,ur=null,i=an,an=Di(t.containerInfo),Tt(t,e,n),an=i,At(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ua(t.containerInfo)}catch(O){Ve(e,e.return,O)}su&&(su=!1,gp(e)),Fe=!1;break;case 4:a=xn,xn=ft,l=Bc(),i=an,an=Di(e.stateNode.containerInfo),Tt(t,e,n),At(e),an=i,Fe&&_i&&(Xs=!0),Fe=l,xn=a;break;case 12:Tt(t,e,n),At(e);break;case 31:Tt(t,e,n),At(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Ks(e,t)));break;case 13:Tt(t,e,n),At(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Is=lt()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Ks(e,t)));break;case 22:i=e.memoizedState!==null,r=l!==null&&l.memoizedState!==null;var u=ft,p=He,E=xn;ft=u||i,xn=E||i,He=p||r,Tt(t,e,n),He=p,xn=E,ft=u,At(e),a&8192&&(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,!i||l===null||r||ft||He||(t=r||He,n=ft,l=He,ft=i||ft,He=t,ol(e,2),ft=n,He=l),!i&&xn||ou(e,i)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Ks(e,n))));break;case 19:Tt(t,e,n),At(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Ks(e,t)));break;case 30:a&512&&(He||l===null||yt(l,l.return)),a=Bc(),i=_i,r=(n&335544064)===n,u=e.memoizedProps,_i=r&&Dn(u.default,u.update)!=="none",Tt(t,e,n),At(e),r&&l!==null&&Fe&&(e.flags|=4),_i=i,Fe=a;break;case 21:break;case 7:a&512&&(He||l===null||yt(l,l.return)),l&&l.stateNode!==null&&(l.stateNode._fragmentFiber=e);default:Tt(t,e,n),At(e)}}function At(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(ep(l)){n=l;break}l=l.return}l=null;for(var a=e.return;a!==null;){if(Jo(a)){var i=a.stateNode;l===null?l=[i]:l.push(i)}if($o(a))break;a=a.return}var r=l;if(n==null)throw Error(d(160));switch(n.tag){case 27:var u=n.stateNode,p=Po(e);Gs(e,p,u,r);break;case 5:var E=n.stateNode;n.flags&32&&(na(E,""),n.flags&=-33);var O=Po(e);Gs(e,O,E,r);break;case 3:case 4:var Q=n.stateNode.containerInfo,v=Po(e);eu(e,v,Q,r);break;default:throw Error(d(161))}}catch(M){Ve(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;gp(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Ra=!0,t.reset(),Ra=!1),e=e.sibling}}function wa(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)xp(t,e),t=t.sibling;else rp(t)}function xp(e,t){var n=e.alternate;if(n===null)tu(e,!1);else switch(e.tag){case 3:if(ru=yn=!1,lp(),wa(t,e),!yn&&!Xs){if(e=hn,e!==null)for(var l=0;l<e.length;l+=3){n=e[l];var a=e[l+1];am(n,e[l+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),ru=!0}hn=null;break;case 5:wa(t,e);break;case 4:l=yn,yn=!1,wa(t,e),yn&&(Xs=!0),yn=l;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?tu(e,!1):wa(t,e));break;case 30:l=yn,a=lp(),yn=!1,wa(t,e),yn&&(e.flags|=4);var i=e.memoizedProps,r=e.stateNode;t=Cn(i,r),r=Cn(n.memoizedProps,r);var u=Dn(i.default,i.update);u==="none"?t=!1:(i=n.memoizedState,n.memoizedState=null,n=e.child,Mt=0,t=iu(e,n,t,r,u,i,!0),Mt!==(i===null?0:i.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Aa(e,e.memoizedProps.onUpdate),hn=a):a!==null&&(a.push.apply(a,hn),hn=a),yn=(e.flags&32)!==0?!0:l;break;default:wa(t,e)}}function bn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)up(e,t.alternate,t),t=t.sibling}function ol(e,t){for(e=e.child;e!==null;){var n=e,l=t;switch(n.tag){case 0:case 11:case 14:case 15:rl(4,n,n.return),ol(n,l);break;case 1:yt(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Wf(n,n.return,a),ol(n,l);break;case 27:(l&2)!==0&&gm(n.stateNode,n.type,n.memoizedProps);case 5:yt(n,n.return),n.tag!==5&&n.tag!==27||wi(n),ol(n,l);break;case 6:wi(n);break;case 26:yt(n,n.return),a=n.stateNode,n.memoizedState!==null||a===null||He||a.parentNode.removeChild(a),ol(n,l);break;case 22:n.memoizedState===null&&ol(n,l);break;case 30:yt(n,n.return),ol(n,l);break;case 7:yt(n,n.return);default:ol(n,l)}e=e.sibling}}function sn(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var l=t.alternate,a=e,i=t,r=i.flags,u=(n&1)!==0;switch(i.tag){case 0:case 11:case 15:sn(a,i,n),vi(4,i);break;case 1:if(sn(a,i,n),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(O){Ve(l,l.return,O)}if(l=i,a=l.updateQueue,a!==null){var p=l.stateNode;try{var E=a.shared.hiddenCallbacks;if(E!==null)for(a.shared.hiddenCallbacks=null,a=0;a<E.length;a++)Rd(E[a],p)}catch(O){Ve(l,l.return,O)}}u&&r&64&&If(i),mn(i,i.return);break;case 27:(n&2)!==0&&tp(i);case 5:i.tag!==5&&i.tag!==27||Pf(i),sn(a,i,n),u&&l===null&&r&4&&Io(i),mn(i,i.return);break;case 6:Pf(i);break;case 26:p=i.stateNode,i.memoizedState!==null||p===null||ft||Zu(Di(p.ownerDocument),i.type,p),sn(a,i,n),u&&l===null&&r&4&&Io(i),mn(i,i.return);break;case 12:sn(a,i,n);break;case 31:sn(a,i,n),u&&r&4&&pp(a,i);break;case 13:sn(a,i,n),u&&r&4&&mp(a,i);break;case 22:i.memoizedState===null&&sn(a,i,n),mn(i,i.return);break;case 30:sn(a,i,n),mn(i,i.return);break;case 7:mn(i,i.return);default:sn(a,i,n)}t=t.sibling}}function cu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ri(n))}function du(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ri(e))}function Wt(e,t,n,l){var a=(n&335544064)===n;if(t.subtreeFlags&(a?10262:10256))for(t=t.child;t!==null;)yp(e,t,n,l),t=t.sibling;else a&&sp(t)}function yp(e,t,n,l){var a=(n&335544064)===n;a&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Qs(t);var i=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(e,t,n,l),i&2048&&vi(9,t);break;case 1:Wt(e,t,n,l);break;case 3:Wt(e,t,n,l),a&&ru&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),i&2048&&(i=null,t.alternate!==null&&(i=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==i&&(t.refCount++,i!=null&&ri(i)));break;case 12:if(i&2048){Wt(e,t,n,l),i=t.stateNode;try{var r=t.memoizedProps,u=r.id,p=r.onPostCommit;typeof p=="function"&&p(u,t.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(E){Ve(t,t.return,E)}}else Wt(e,t,n,l);break;case 31:Wt(e,t,n,l);break;case 13:Wt(e,t,n,l);break;case 23:break;case 22:r=t.stateNode,u=t.alternate,t.memoizedState!==null?(a&&u!==null&&u.memoizedState===null&&Qs(u),r._visibility&2?Wt(e,t,n,l):ki(e,t)):(a&&u!==null&&u.memoizedState!==null&&Qs(t),r._visibility&2?Wt(e,t,n,l):(r._visibility|=2,_a(e,t,n,l,(t.subtreeFlags&10256)!==0||!1))),i&2048&&cu(u,t);break;case 24:Wt(e,t,n,l),i&2048&&du(t.alternate,t);break;case 30:a&&(i=t.alternate,i!==null&&(gn(i.child,!0),gn(t.child,!0))),Wt(e,t,n,l);break;default:Wt(e,t,n,l)}}function _a(e,t,n,l,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,u=n,p=l,E=r.flags;switch(r.tag){case 0:case 11:case 15:_a(i,r,u,p,a),vi(8,r);break;case 23:break;case 22:var O=r.stateNode;r.memoizedState!==null?O._visibility&2?_a(i,r,u,p,a):ki(i,r):(O._visibility|=2,_a(i,r,u,p,a)),a&&E&2048&&cu(r.alternate,r);break;case 24:_a(i,r,u,p,a),a&&E&2048&&du(r.alternate,r);break;default:_a(i,r,u,p,a)}t=t.sibling}}function ki(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:ki(n,l),a&2048&&cu(l.alternate,l);break;case 24:ki(n,l),a&2048&&du(l.alternate,l);break;default:ki(n,l)}t=t.sibling}}var Yl=8192;function Ql(e,t,n){if(e.subtreeFlags&Yl)for(e=e.child;e!==null;)bp(e,t,n),e=e.sibling}function bp(e,t,n){switch(e.tag){case 26:Ql(e,t,n),e.flags&Yl&&(e.memoizedState!==null?Wg(n,an,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Nm(n,e)));break;case 5:Ql(e,t,n),e.flags&Yl&&(e=e.stateNode,(t&335544128)===t&&Nm(n,e));break;case 3:case 4:var l=an;an=Di(e.stateNode.containerInfo),Ql(e,t,n),an=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Yl,Yl=16777216,Ql(e,t,n),Yl=l):Ql(e,t,n));break;case 30:if((e.flags&Yl)!==0&&(l=e.memoizedProps.name,l!=null&&l!=="auto")){var a=e.stateNode;a.paired=null,Ht===null&&(Ht=new Map),Ht.set(l,a)}Ql(e,t,n);break;default:Ql(e,t,n)}}function vp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ei(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];pt=l,_p(l,e)}vp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wp(e),e=e.sibling}function wp(e){switch(e.tag){case 0:case 11:case 15:Ei(e),e.flags&2048&&rl(9,e,e.return);break;case 3:Ei(e);break;case 12:Ei(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,$s(e)):Ei(e);break;default:Ei(e)}}function $s(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];pt=l,_p(l,e)}vp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:rl(8,t,t.return),$s(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,$s(t));break;default:$s(t)}e=e.sibling}}function _p(e,t){for(;pt!==null;){var n=pt;switch(n.tag){case 0:case 11:case 15:rl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ri(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,pt=l;else e:for(n=e;pt!==null;){l=pt;var a=l.sibling,i=l.return;if(dp(l),l===n){pt=null;break e}if(a!==null){a.return=i,pt=a;break e}pt=i}}}var Zh={getCacheForType:function(e){var t=ht(at),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ht(at).controller.signal}},Kh=typeof WeakMap=="function"?WeakMap:Map,qe=0,Ze=null,Ce=null,Oe=0,Ge=0,Gt=null,ul=!1,ka=!1,fu=!1,qn=0,tt=0,cl=0,Xl=0,Js=0,Vt=0,Ea=0,Si=null,zt=null,pu=!1,Is=0,kp=0,Ws=1/0,Ps=null,dl=null,Pe=0,rn=null,Zl=null,vn=0,mu=0,hu=null,Ep=null,Sa=null,Na=null,Ta=null,Ni=0,er=null;function Yt(){return(qe&2)!==0&&Oe!==0?Oe&-Oe:G.T!==null?Su():Nc()}function Sp(){if(Vt===0)if((Oe&536870912)===0||Te){var e=Ki;Ki<<=1,(Ki&3932160)===0&&(Ki=262144),Vt=e}else Vt=536870912;return e=gt.current,e!==null&&(e.flags|=32),Vt}function Aa(e,t){if(t!=null){var n=e.stateNode,l=n.ref;l===null&&(l=n.ref=im(Cn(e.memoizedProps,n))),Na===null&&(Na=[]),Na.push(t.bind(null,l))}}function Bt(e,t,n){(e===Ze&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(ja(e,0),fl(e,Oe,Vt,!1)),Za(e,n),((qe&2)===0||e!==Ze)&&(e===Ze&&((qe&2)===0&&(Xl|=n),tt===4&&fl(e,Oe,Vt,!1)),wn(e))}function Np(e,t,n){if((qe&6)!==0)throw Error(d(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Xa(e,t),a=l?Ih(e,t):xu(e,t,!0),i=l;do{if(a===0){ka&&!l&&fl(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!$h(n)){a=xu(e,t,!1),i=!1;continue}if(a===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var u=e;a=Si;var p=u.current.memoizedState.isDehydrated;if(p&&(ja(u,r).flags|=256),r=xu(u,r,!1),r!==2&&r!==6){if(fu&&!p){u.errorRecoveryDisabledLanes|=i,Xl|=i,a=4;break e}i=zt,zt=a,i!==null&&(zt===null?zt=i:zt.push.apply(zt,i))}a=r}if(i=!1,a!==2)continue}}if(a===1){ja(e,0),fl(e,t,0,!0);break}e:{switch(l=e,i=a,i){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:fl(l,t,Vt,!ul);break e;case 2:zt=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(a=Is+300-lt(),10<a)){if(fl(l,t,Vt,!ul),Ji(l,0,!0)!==0)break e;vn=t,l.timeoutHandle=Lu(Tp.bind(null,l,n,zt,Ps,pu,t,Vt,Xl,Ea,ul,i,"Throttled",-0,0),a);break e}Tp(l,n,zt,Ps,pu,t,Vt,Xl,Ea,ul,i,null,-0,0)}}break}while(!0);wn(e)}function Tp(e,t,n,l,a,i,r,u,p,E,O,Q,v,M){e.timeoutHandle=-1;var ie=t.subtreeFlags,de=(i&335544064)===i;if(Q=null,(de||ie&8192||(ie&16785408)===16785408)&&(Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},Ht=null,bp(t,i,Q),de&&(ie=Q,de=e.containerInfo,de=(de.nodeType===9?de:de.ownerDocument).__reactViewTransition,de!=null&&(ie.count++,ie.waitingForViewTransition=!0,ie=zi.bind(ie),de.finished.then(ie,ie))),ie=(i&62914560)===i?Is-lt():(i&4194048)===i?kp-lt():0,ie=Pg(Q,ie),ie!==null)){vn=i,e.cancelPendingCommit=ie(Bp.bind(null,e,t,i,n,l,a,r,u,p,E,O,Q,null,v,M)),fl(e,i,r,!E);return}Bp(e,t,i,n,l,a,r,u,p,E,O,Q)}function $h(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],i=a.getSnapshot;a=a.value;try{if(!Ut(i(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fl(e,t,n,l){t=wc(e,t),t&=~Js,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var i=31-Ft(a),r=1<<i;l[i]=-1,a&=~r}n!==0&&kc(e,n,t)}function tr(){return(qe&6)===0?(Ti(0),!1):!0}function gu(){if(Ce!==null){if(Ge===0)var e=Ce.return;else e=Ce,zn=zl=null,Eo(e),ha=null,ci=0,e=Ce;for(;e!==null;)Jf(e.alternate,e),e=e.return;Ce=null}}function ja(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,bg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),vn=0,gu(),Ze=e,Ce=n=Mn(e.current,null),Oe=t,Ge=0,Gt=null,ul=!1,ka=Xa(e,t),fu=!1,Ea=Vt=Js=Xl=cl=tt=0,zt=Si=null,pu=!1,qn=wc(e,t),us(),n}function Ap(e,t){ke=null,G.H=zs,t===ma||t===vs?(t=zd(),Ge=3):t===co?(t=zd(),Ge=4):Ge=t===Uo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Gt=t,Ce===null&&(tt=1,Bs(e,Kt(t,e.current)))}function jp(){var e=gt.current;return e===null?!0:(Oe&4194048)===Oe?_t===null:(Oe&62914560)===Oe||(Oe&536870912)!==0?e===_t:!1}function Cp(){var e=G.H;return G.H=zs,e===null?zs:e}function Dp(){var e=G.A;return G.A=Zh,e}function nr(){tt=4,ul||(Oe&4194048)!==Oe&&gt.current!==null||(ka=!0),(cl&134217727)===0&&(Xl&134217727)===0||Ze===null||fl(Ze,Oe,Vt,!1)}function xu(e,t,n){var l=qe;qe|=2;var a=Cp(),i=Dp();(Ze!==e||Oe!==t)&&(Ps=null,ja(e,t)),t=!1;var r=tt;e:do try{if(Ge!==0&&Ce!==null){var u=Ce,p=Gt;switch(Ge){case 8:gu(),r=6;break e;case 3:case 2:case 9:case 6:gt.current===null&&(t=!0);var E=Ge;if(Ge=0,Gt=null,Ca(e,u,p,E),n&&ka){r=0;break e}break;default:E=Ge,Ge=0,Gt=null,Ca(e,u,p,E)}}Jh(),r=tt;break}catch(O){Ap(e,O)}while(!0);return t&&e.shellSuspendCounter++,zn=zl=null,qe=l,G.H=a,G.A=i,Ce===null&&(Ze=null,Oe=0,us()),r}function Jh(){for(;Ce!==null;)Mp(Ce)}function Ih(e,t){var n=qe;qe|=2;var l=Cp(),a=Dp();Ze!==e||Oe!==t?(Ps=null,Ws=lt()+500,ja(e,t)):ka=Xa(e,t);e:do try{if(Ge!==0&&Ce!==null){t=Ce;var i=Gt;t:switch(Ge){case 1:Ge=0,Gt=null,Ca(e,t,i,1);break;case 2:case 9:if(Md(i)){Ge=0,Gt=null,Op(t);break}t=function(){Ge!==2&&Ge!==9||Ze!==e||(Ge=7),wn(e)},i.then(t,t);break e;case 3:Ge=7;break e;case 4:Ge=5;break e;case 7:Md(i)?(Ge=0,Gt=null,Op(t)):(Ge=0,Gt=null,Ca(e,t,i,7));break;case 5:var r=null;switch(Ce.tag){case 26:r=Ce.memoizedState;case 5:case 27:var u=Ce;if(r?Em(r):u.stateNode.complete){Ge=0,Gt=null;var p=u.sibling;if(p!==null)Ce=p;else{var E=u.return;E!==null?(Ce=E,lr(E)):Ce=null}break t}}Ge=0,Gt=null,Ca(e,t,i,5);break;case 6:Ge=0,Gt=null,Ca(e,t,i,6);break;case 8:gu(),tt=6;break e;default:throw Error(d(462))}}Wh();break}catch(O){Ap(e,O)}while(!0);return zn=zl=null,G.H=l,G.A=a,qe=n,Ce!==null?0:(Ze=null,Oe=0,us(),tt)}function Wh(){for(;Ce!==null&&!Jl();)Mp(Ce)}function Mp(e){var t=Kf(e.alternate,e,qn);e.memoizedProps=e.pendingProps,t===null?lr(e):Ce=t}function Op(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Hf(n,t,t.pendingProps,t.type,void 0,Oe);break;case 11:t=Hf(n,t,t.pendingProps,t.type.render,t.ref,Oe);break;case 5:Eo(t);var l=t;l===dt&&(Te?(hs(l),l.tag===5&&l.stateNode!=null&&($e=l.stateNode)):(hs(l),Te=!0));default:Jf(n,t),t=Ce=wd(t,qn),t=Kf(n,t,qn)}e.memoizedProps=e.pendingProps,t===null?lr(e):Ce=t}function Ca(e,t,n,l){zn=zl=null,Eo(t),ha=null,ci=0;var a=t.return;try{if(Uh(e,a,t,n,Oe)){tt=1,Bs(e,Kt(n,e.current)),Ce=null;return}}catch(i){if(a!==null)throw Ce=a,i;tt=1,Bs(e,Kt(n,e.current)),Ce=null;return}t.flags&32768?(Te||l===1?e=!0:ka||(Oe&536870912)!==0?e=!1:(ul=e=!0,(l===2||l===9||l===3||l===6)&&(l=gt.current,l!==null&&l.tag===13&&(l.flags|=16384))),zp(t,e)):lr(t)}function lr(e){var t=e;do{if((t.flags&32768)!==0){zp(t,ul);return}e=t.return;var n=Vh(t.alternate,t,qn);if(n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);tt===0&&(tt=5)}function zp(e,t){do{var n=Yh(e.alternate,e);if(n!==null){n.flags&=32767,Ce=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ce=e;return}Ce=e=n}while(e!==null);tt=6,Ce=null}function Bp(e,t,n,l,a,i,r,u,p,E,O,Q){e.cancelPendingCommit=null;do ar();while(Pe!==0);if((qe&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));e===Ze&&(Ce=Ze=null,Oe=0),Zl=t,rn=e,vn=n,hu=a,Ep=l,Ph(e,t,n,r,u,p,Q)}}function Ph(e,t,n,l,a,i,r){var u=t.lanes|t.childLanes;if(mu=u,u|=Ir,S0(e,n,u,l,a,i),Na=null,(n&335544064)===n?(Ta=Th(e),l=10262):(Ta=null,l=10256),(t.subtreeFlags&l)!==0||(t.flags&l)!==0?(e.callbackNode=null,e.callbackPriority=0,ig(Ue,function(){return wu(),null})):(e.callbackNode=null,e.callbackPriority=0),Vs=!1,l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=G.T,G.T=null,a=J.p,J.p=2,i=qe,qe|=4;try{Qh(e,t,n)}finally{qe=i,J.p=a,G.T=l}}Pe=1,Vs?Sa=Sg(r,e.containerInfo,Ta,yu,bu,tg,vu,wu,eg):(yu(),bu(),vu())}function eg(e){if(Pe!==0){var t=rn.onRecoverableError;t(e,{componentStack:null})}}function tg(){Pe===3&&(Pe=0,xp(Zl,rn),Pe=4)}function yu(){if(Pe===1){Pe=0;var e=rn,t=Zl,n=vn,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=G.T,G.T=null;var a=J.p;J.p=2;var i=qe;qe|=4;try{_i=Xs=!1,hp(t,e,n),n=Ou;var r=dd(e.containerInfo),u=n.focusedElem,p=n.selectionRange;if(r!==u&&u&&u.ownerDocument&&cd(u.ownerDocument.documentElement,u)){if(p!==null&&Xr(u)){var E=p.start,O=p.end;if(O===void 0&&(O=E),"selectionStart"in u)u.selectionStart=E,u.selectionEnd=Math.min(O,u.value.length);else{var Q=u.ownerDocument||document,v=Q&&Q.defaultView||window;if(v.getSelection){var M=v.getSelection(),ie=u.textContent.length,de=Math.min(p.start,ie),Ee=p.end===void 0?de:Math.min(p.end,ie);!M.extend&&de>Ee&&(r=Ee,Ee=de,de=r);var k=ud(u,de),x=ud(u,Ee);if(k&&x&&(M.rangeCount!==1||M.anchorNode!==k.node||M.anchorOffset!==k.offset||M.focusNode!==x.node||M.focusOffset!==x.offset)){var D=Q.createRange();D.setStart(k.node,k.offset),M.removeAllRanges(),de>Ee?(M.addRange(D),M.extend(x.node,x.offset)):(D.setEnd(x.node,x.offset),M.addRange(D))}}}}for(Q=[],M=u;M=M.parentNode;)M.nodeType===1&&Q.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<Q.length;u++){var Y=Q[u];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Ra=!!Mu,Ou=Mu=null}finally{qe=i,J.p=a,G.T=l}}e.current=t,Pe=2}}function bu(){if(Pe===2){Pe=0;var e=rn,t=Zl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=G.T,G.T=null;var l=J.p;J.p=2;var a=qe;qe|=4;try{up(e,t.alternate,t)}finally{qe=a,J.p=l,G.T=n}}Pe=3}}function vu(){if(Pe===4||Pe===3){Pe=0;var e=Sa;Sa=null,Xn();var t=rn,n=Zl,l=vn,a=Ep,i=(l&335544064)===l?10262:10256;if((n.subtreeFlags&i)!==0||(n.flags&i)!==0?Pe=5:(Pe=0,Zl=rn=null,Lp(t,t.pendingLanes)),i=t.pendingLanes,i===0&&(dl=null),Ar(l),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Sl,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=G.T,i=J.p,J.p=2,G.T=null;try{for(var r=t.onRecoverableError,u=0;u<a.length;u++){var p=a[u];r(p.value,{componentStack:p.stack})}}finally{G.T=n,J.p=i}}if(a=Na,r=Ta,Ta=null,a!==null&&(Na=null,r===null&&(r=[]),e!==null))for(p=0;p<a.length;p++)n=(0,a[p])(r),n!==void 0&&e.finished.finally(n);(vn&3)!==0&&ar(),wn(t),i=t.pendingLanes,(l&261930)!==0&&(i&42)!==0?t===er?Ni++:(Ni=0,er=t):(Ni=0,er=null),Ti(0)}}function Lp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ri(t)))}function ar(){return Sa!==null&&(Sa.skipTransition(),Sa=null),yu(),bu(),vu(),wu()}function wu(){if(Pe!==5)return!1;var e=rn,t=mu;mu=0;var n=Ar(vn),l=G.T,a=J.p;try{J.p=32>n?32:n,G.T=null,n=hu,hu=null;var i=rn,r=vn;if(Pe=0,Zl=rn=null,vn=0,(qe&6)!==0)throw Error(d(331));var u=qe;if(qe|=4,wp(i.current),yp(i,i.current,r,n),qe=u,Ti(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Sl,i)}catch{}return!0}finally{J.p=a,G.T=l,Lp(e,t)}}function Fp(e,t,n){t=Kt(n,t),t=Ro(e.stateNode,t,2),e=ll(e,t,2),e!==null&&(Za(e,2),wn(e))}function Ve(e,t,n){if(e.tag===3)Fp(e,e,n);else for(;t!==null;){if(t.tag===3){Fp(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(dl===null||!dl.has(l))){e=Kt(n,e),n=Of(2),l=ll(t,n,2),l!==null&&(zf(n,l,t,e),Za(l,2),wn(l));break}}t=t.return}}function _u(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Kh;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(fu=!0,a.add(n),e=ng.bind(null,e,t,n),t.then(e,e))}function ng(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ze===e&&(Oe&n)===n&&((tt===4||tt===3&&(Oe&62914560)===Oe&&300>lt()-Is)&&(qe&2)===0?ja(e,0):Js|=n,Ea===Oe&&(Ea=0)),wn(e)}function Rp(e,t){t===0&&(t=_c()),e=Dl(e,t),e!==null&&(Za(e,t),wn(e))}function lg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rp(e,n)}function ag(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(t),Rp(e,n)}function ig(e,t){return Ya(e,t)}var Da=null,Ma=null,ku=!1,ir=!1,Eu=!1,pl=0;function wn(e){e!==Ma&&e.next===null&&(Ma===null?Da=Ma=e:Ma=Ma.next=e),ir=!0,ku||(ku=!0,rg())}function Ti(e,t){if(!Eu&&ir){Eu=!0;do for(var n=!1,l=Da;l!==null;){if(e!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var r=l.suspendedLanes,u=l.pingedLanes;i=(1<<31-Ft(42|e)+1)-1,i&=a&~(r&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Gp(l,i))}else i=Oe,i=Ji(l,l===Ze?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Xa(l,i)||(n=!0,Gp(l,i));l=l.next}while(n);Eu=!1}}function sg(){Up()}function Up(){ir=ku=!1;var e=0;pl!==0&&yg()&&(e=pl);for(var t=lt(),n=null,l=Da;l!==null;){var a=l.next,i=qp(l,t);i===0?(l.next=null,n===null?Da=a:n.next=a,a===null&&(Ma=n)):(n=l,(e!==0||(i&3)!==0)&&(ir=!0)),l=a}Pe!==0&&Pe!==5||Ti(e),pl!==0&&(pl=0)}function qp(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-Ft(i),u=1<<r,p=a[r];p===-1?((u&n)===0||(u&l)!==0)&&(a[r]=E0(u,t)):p<=t&&(e.expiredLanes|=u),i&=~u}if(t=Ze,n=Oe,n=Ji(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Qa(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Xa(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&Qa(l),Ar(n)){case 2:case 8:n=Se;break;case 32:n=Ue;break;case 268435456:n=Lt;break;default:n=Ue}return l=Hp.bind(null,e),n=Ya(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&Qa(l),e.callbackPriority=2,e.callbackNode=null,2}function Hp(e,t){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ar()&&e.callbackNode!==n)return null;var l=Oe;return l=Ji(e,e===Ze?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Np(e,l,t),qp(e,lt()),e.callbackNode!=null&&e.callbackNode===n?Hp.bind(null,e):null)}function Gp(e,t){if(ar())return null;Np(e,t,!0)}function rg(){vg(function(){(qe&6)!==0?Ya(oe,sg):Up()})}function Su(){if(pl===0){var e=Fl;e===0&&(e=Zi,Zi<<=1,(Zi&261888)===0&&(Zi=256)),pl=e}return pl}function Vp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ts(e)}function og(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var i=Vp((a[Ct]||null).action),r=l.submitter;r&&(t=(t=r[Ct]||null)?Vp(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var u=new is("action","action",null,l,a);e.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(pl!==0){var p=new FormData(a,r);Oo(n,{pending:!0,data:p,method:a.method,action:i},null,p)}}else typeof i=="function"&&(u.preventDefault(),p=new FormData(a,r),Oo(n,{pending:!0,data:p,method:a.method,action:i},i,p))},currentTarget:a}]})}}for(var Nu=0;Nu<Jr.length;Nu++){var Tu=Jr[Nu],ug=Tu.toLowerCase(),cg=Tu[0].toUpperCase()+Tu.slice(1);nn(ug,"on"+cg)}nn(md,"onAnimationEnd"),nn(hd,"onAnimationIteration"),nn(gd,"onAnimationStart"),nn("dblclick","onDoubleClick"),nn("focusin","onFocus"),nn("focusout","onBlur"),nn(bh,"onTransitionRun"),nn(vh,"onTransitionStart"),nn(wh,"onTransitionCancel"),nn(xd,"onTransitionEnd"),ea("onMouseEnter",["mouseout","mouseover"]),ea("onMouseLeave",["mouseout","mouseover"]),ea("onPointerEnter",["pointerout","pointerover"]),ea("onPointerLeave",["pointerout","pointerover"]),Al("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Al("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Al("onBeforeInput",["compositionend","keypress","textInput","paste"]),Al("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Al("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Al("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ai));function Yp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var r=l.length-1;0<=r;r--){var u=l[r],p=u.instance,E=u.currentTarget;if(u=u.listener,p!==i&&a.isPropagationStopped())break e;i=u,a.currentTarget=E;try{i(a)}catch(O){os(O)}a.currentTarget=null,i=p}else for(r=0;r<l.length;r++){if(u=l[r],p=u.instance,E=u.currentTarget,u=u.listener,p!==i&&a.isPropagationStopped())break e;i=u,a.currentTarget=E;try{i(a)}catch(O){os(O)}a.currentTarget=null,i=p}}}}function De(e,t){var n=t[Ac];n===void 0&&(n=t[Ac]=new Set);var l=e+"__bubble";n.has(l)||(Qp(t,e,2,!1),n.add(l))}function Au(e,t,n){var l=0;t&&(l|=4),Qp(n,e,l,t)}var sr="_reactListening"+Math.random().toString(36).slice(2);function ju(e){if(!e[sr]){e[sr]=!0,Dc.forEach(function(n){n!=="selectionchange"&&(dg.has(n)||Au(n,!1,e),Au(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[sr]||(t[sr]=!0,Au("selectionchange",!1,t))}}function Qp(e,t,n,l){switch(zm(t)){case 2:var a=lx;break;case 8:a=ax;break;default:a=$u}n=a.bind(null,t,n,e),a=void 0,!Lr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Cu(e,t,n,l,a){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var u=l.stateNode.containerInfo;if(u===a)break;if(r===4)for(r=l.return;r!==null;){var p=r.tag;if((p===3||p===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;u!==null;){if(r=Tl(u),r===null)return;if(p=r.tag,p===5||p===6||p===26||p===27){l=i=r;continue e}u=u.parentNode}}l=l.return}Yc(function(){var E=i,O=zr(n),Q=[];e:{var v=yd.get(e);if(v!==void 0){var M=is,ie=e;switch(e){case"keypress":if(ls(n)===0)break e;case"keydown":case"keyup":M=$0;break;case"focusin":ie="focus",M=qr;break;case"focusout":ie="blur",M=qr;break;case"beforeblur":case"afterblur":M=qr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=F0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=eh;break;case md:case hd:case gd:M=q0;break;case xd:M=nh;break;case"scroll":case"scrollend":M=B0;break;case"wheel":M=ah;break;case"copy":case"cut":case"paste":M=G0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=$c;break;case"submit":M=W0;break;case"toggle":case"beforetoggle":M=sh}var de=(t&4)!==0,Ee=!de&&(e==="scroll"||e==="scrollend"),k=de?v!==null?v+"Capture":null:v;de=[];for(var x=E,D;x!==null;){var Y=x;if(D=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||D===null||k===null||(Y=Ja(x,k),Y!=null&&de.push(ji(x,Y,D))),Ee)break;x=x.return}0<de.length&&(v=new M(v,ie,null,n,O),Q.push({event:v,listeners:de}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",M&&n!==Or&&(ie=n.relatedTarget||n.fromElement)&&(Tl(ie)||ie[Il]))break e;(v||M)&&(ie=O.window===O?O:(M=O.ownerDocument)?M.defaultView||M.parentWindow:window,v?(M=n.relatedTarget||n.toElement,v=E,M=M?Tl(M):null,M!==null&&(Ee=R(M),de=M.tag,M!==Ee||de!==5&&de!==27&&de!==6)&&(M=null)):(v=null,M=E),v!==M&&(de=Zc,Y="onMouseLeave",k="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(de=$c,Y="onPointerLeave",k="onPointerEnter",x="pointer"),Ee=v==null?ie:$a(v),D=M==null?ie:$a(M),ie=new de(Y,x+"leave",v,n,O),ie.target=Ee,ie.relatedTarget=D,Y=null,Tl(O)===E&&(de=new de(k,x+"enter",M,n,O),de.target=D,de.relatedTarget=Ee,Y=de),Ee=Y,de=v&&M?F(v,M,fg):null,v!==null&&Xp(Q,ie,v,de,!1),M!==null&&Ee!==null&&Xp(Q,Ee,M,de,!0)))}e:{if(v=E?$a(E):window,M=v.nodeName&&v.nodeName.toLowerCase(),M==="select"||M==="input"&&v.type==="file")var ce=ld;else if(td(v))if(ad)ce=gh;else{ce=mh;var ze=ph}else M=v.nodeName,!M||M.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?E&&Mr(E.elementType)&&(ce=ld):ce=hh;if(ce&&(ce=ce(e,E))){nd(Q,ce,n,O);break e}ze&&ze(e,v,E)}switch(ze=E?$a(E):window,e){case"focusin":(td(ze)||ze.contentEditable==="true")&&(sa=ze,Zr=E,ai=null);break;case"focusout":ai=Zr=sa=null;break;case"mousedown":Kr=!0;break;case"contextmenu":case"mouseup":case"dragend":Kr=!1,fd(Q,n,O);break;case"selectionchange":if(yh)break;case"keydown":case"keyup":fd(Q,n,O)}var pe;if(Gr)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else ia?Pc(e,n)&&(be="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(be="onCompositionStart");be&&(Jc&&n.locale!=="ko"&&(ia||be!=="onCompositionStart"?be==="onCompositionEnd"&&ia&&(pe=Qc()):(Kn=O,Fr="value"in Kn?Kn.value:Kn.textContent,ia=!0)),ze=rr(E,be),0<ze.length&&(be=new Kc(be,e,null,n,O),Q.push({event:be,listeners:ze}),pe?be.data=pe:(pe=ed(n),pe!==null&&(be.data=pe)))),(pe=oh?uh(e,n):ch(e,n))&&(be=rr(E,"onBeforeInput"),0<be.length&&(ze=new Kc("onBeforeInput","beforeinput",null,n,O),Q.push({event:ze,listeners:be}),ze.data=pe)),og(Q,e,E,n,O)}Yp(Q,t)})}function ji(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rr(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=Ja(e,n),a!=null&&l.unshift(ji(e,a,i)),a=Ja(e,t),a!=null&&l.push(ji(e,a,i))),e.tag===3)return l;e=e.return}return[]}function fg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xp(e,t,n,l,a){for(var i=t._reactName,r=[];n!==null&&n!==l;){var u=n,p=u.alternate,E=u.stateNode;if(u=u.tag,p!==null&&p===l)break;u!==5&&u!==26&&u!==27||E===null||(p=E,a?(E=Ja(n,i),E!=null&&r.unshift(ji(n,E,p))):a||(E=Ja(n,i),E!=null&&r.push(ji(n,E,p)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var pg=/\r\n?/g,mg=/\u0000|\uFFFD/g;function Zp(e){return(typeof e=="string"?e:""+e).replace(pg,`
`).replace(mg,"")}function Kp(e,t){return t=Zp(t),Zp(e)===t}function Ye(e,t,n,l,a,i){switch(n){case"children":if(typeof l=="string")t==="body"||t==="textarea"&&l===""||na(e,l);else if(typeof l=="number"||typeof l=="bigint")t!=="body"&&na(e,""+l);else return;break;case"className":es(e,"class",l);break;case"tabIndex":es(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":es(e,n,l);break;case"style":Gc(e,l,i);return;case"data":if(t!=="object"){es(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ts(l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Ye(e,t,"name",a.name,a,null),Ye(e,t,"formEncType",a.formEncType,a,null),Ye(e,t,"formMethod",a.formMethod,a,null),Ye(e,t,"formTarget",a.formTarget,a,null)):(Ye(e,t,"encType",a.encType,a,null),Ye(e,t,"method",a.method,a,null),Ye(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ts(l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=dn);return;case"onScroll":l!=null&&De("scroll",e);return;case"onScrollEnd":l!=null&&De("scrollend",e);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(d(60));(i!=null?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=ts(l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":De("beforetoggle",e),De("toggle",e),Pi(e,"popover",l);break;case"xlinkActuate":An(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":An(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":An(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":An(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":An(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":An(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":An(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":An(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":An(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Pi(e,"is",l);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=O0.get(n)||n,Pi(e,n,l);else return}Fe=!0}function Du(e,t,n,l,a,i){switch(n){case"style":Gc(e,l,i);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(d(60));(i!=null?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if(typeof l=="string")na(e,l);else if(typeof l=="number"||typeof l=="bigint")na(e,""+l);else return;break;case"onScroll":l!=null&&De("scroll",e);return;case"onScrollEnd":l!=null&&De("scrollend",e);return;case"onClick":l!=null&&(e.onclick=dn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Mc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),i=n.slice(2,a?n.length-7:void 0),t=e[Ct]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(i,t,a),typeof l=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(i,l,a);break e}Fe=!0,n in e?e[n]=l:l===!0?e.setAttribute(n,""):Pi(e,n,l)}return}Fe=!0}function bt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",e),De("load",e);var l=!1,a=!1,i;for(i in n)if(n.hasOwnProperty(i)){var r=n[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Ye(e,t,i,r,n,null)}}a&&Ye(e,t,"srcSet",n.srcSet,n,null),l&&Ye(e,t,"src",n.src,n,null);return;case"input":De("invalid",e);var u=i=r=a=null,p=null,E=null;for(l in n)if(n.hasOwnProperty(l)){var O=n[l];if(O!=null)switch(l){case"name":a=O;break;case"type":r=O;break;case"checked":p=O;break;case"defaultChecked":E=O;break;case"value":i=O;break;case"defaultValue":u=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(d(137,t));break;default:Ye(e,t,l,O,n,null)}}Rc(e,i,u,p,E,r,a,!1);return;case"select":De("invalid",e),l=r=i=null;for(a in n)if(n.hasOwnProperty(a)&&(u=n[a],u!=null))switch(a){case"value":i=u;break;case"defaultValue":r=u;break;case"multiple":l=u;default:Ye(e,t,a,u,n,null)}t=i,n=r,e.multiple=!!l,t!=null?ta(e,!!l,t,!1):n!=null&&ta(e,!!l,n,!0);return;case"textarea":De("invalid",e),i=a=l=null;for(r in n)if(n.hasOwnProperty(r)&&(u=n[r],u!=null))switch(r){case"value":l=u;break;case"defaultValue":a=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(d(91));break;default:Ye(e,t,r,u,n,null)}qc(e,l,a,i);return;case"option":for(p in n)if(n.hasOwnProperty(p)&&(l=n[p],l!=null))switch(p){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ye(e,t,p,l,n,null)}return;case"dialog":De("beforetoggle",e),De("toggle",e),De("cancel",e),De("close",e);break;case"iframe":case"object":De("load",e);break;case"video":case"audio":for(l=0;l<Ai.length;l++)De(Ai[l],e);break;case"image":De("error",e),De("load",e);break;case"details":De("toggle",e);break;case"embed":case"source":case"link":De("error",e),De("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(l=n[E],l!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Ye(e,t,E,l,n,null)}return;default:if(Mr(t)){for(O in n)n.hasOwnProperty(O)&&(l=n[O],l!==void 0&&Du(e,t,O,l,n,void 0));return}}for(u in n)n.hasOwnProperty(u)&&(l=n[u],l!=null&&Ye(e,t,u,l,n,null))}var hg={};function gg(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,r=null,u=null,p=null,E=null,O=null;for(M in n){var Q=n[M];if(n.hasOwnProperty(M)&&Q!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":p=Q;default:l.hasOwnProperty(M)||Ye(e,t,M,null,l,Q)}}for(var v in l){var M=l[v];if(Q=n[v],l.hasOwnProperty(v)&&(M!=null||Q!=null))switch(v){case"type":M!==Q&&(Fe=!0),i=M;break;case"name":M!==Q&&(Fe=!0),a=M;break;case"checked":M!==Q&&(Fe=!0),E=M;break;case"defaultChecked":M!==Q&&(Fe=!0),O=M;break;case"value":M!==Q&&(Fe=!0),r=M;break;case"defaultValue":M!==Q&&(Fe=!0),u=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(d(137,t));break;default:M!==Q&&Ye(e,t,v,M,l,Q)}}Cr(e,r,u,p,E,O,i,a);return;case"select":M=r=u=v=null;for(i in n)if(p=n[i],n.hasOwnProperty(i)&&p!=null)switch(i){case"value":break;case"multiple":M=p;default:l.hasOwnProperty(i)||Ye(e,t,i,null,l,p)}for(a in l)if(i=l[a],p=n[a],l.hasOwnProperty(a)&&(i!=null||p!=null))switch(a){case"value":i!==p&&(Fe=!0),v=i;break;case"defaultValue":i!==p&&(Fe=!0),u=i;break;case"multiple":i!==p&&(Fe=!0),r=i;default:i!==p&&Ye(e,t,a,i,l,p)}t=u,n=r,l=M,v!=null?ta(e,!!n,v,!1):!!l!=!!n&&(t!=null?ta(e,!!n,t,!0):ta(e,!!n,n?[]:"",!1));return;case"textarea":M=v=null;for(u in n)if(a=n[u],n.hasOwnProperty(u)&&a!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:Ye(e,t,u,null,l,a)}for(r in l)if(a=l[r],i=n[r],l.hasOwnProperty(r)&&(a!=null||i!=null))switch(r){case"value":a!==i&&(Fe=!0),v=a;break;case"defaultValue":a!==i&&(Fe=!0),M=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(d(91));break;default:a!==i&&Ye(e,t,r,a,l,i)}Uc(e,v,M);return;case"option":for(var ie in n)if(v=n[ie],n.hasOwnProperty(ie)&&v!=null&&!l.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Ye(e,t,ie,null,l,v)}for(p in l)if(v=l[p],M=n[p],l.hasOwnProperty(p)&&v!==M&&(v!=null||M!=null))switch(p){case"selected":v!==M&&(Fe=!0),e.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:Ye(e,t,p,v,l,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in n)v=n[de],n.hasOwnProperty(de)&&v!=null&&!l.hasOwnProperty(de)&&Ye(e,t,de,null,l,v);for(E in l)if(v=l[E],M=n[E],l.hasOwnProperty(E)&&v!==M&&(v!=null||M!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(d(137,t));break;default:Ye(e,t,E,v,l,M)}return;default:if(Mr(t)){for(var Ee in n)v=n[Ee],n.hasOwnProperty(Ee)&&v!==void 0&&!l.hasOwnProperty(Ee)&&Du(e,t,Ee,void 0,l,v);for(O in l)v=l[O],M=n[O],!l.hasOwnProperty(O)||v===M||v===void 0&&M===void 0||Du(e,t,O,v,l,M);return}}for(var k in n)v=n[k],n.hasOwnProperty(k)&&v!=null&&!l.hasOwnProperty(k)&&Ye(e,t,k,null,l,v);for(Q in l)v=l[Q],M=n[Q],!l.hasOwnProperty(Q)||v===M||v==null&&M==null||Ye(e,t,Q,v,l,M)}function $p(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],i=a.transferSize,r=a.initiatorType,u=a.duration;if(i&&u&&$p(r)){for(r=0,u=a.responseEnd,l+=1;l<n.length;l++){var p=n[l],E=p.startTime;if(E>u)break;var O=p.transferSize,Q=p.initiatorType;O&&$p(Q)&&(p=p.responseEnd,r+=O*(p<u?1:(u-E)/(p-E)))}if(--l,t+=8*(i+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Mu=null,Ou=null;function Ci(e){return e.nodeType===9?e:e.ownerDocument}function Jp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ip(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Wp(e,t,n,l){return n=Ci(n).createElement(e),n[mt]=l,n[Ct]=t,bt(n,e,t),ct(n),n}function zu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bu=null;function yg(){var e=window.event;return e&&e.type==="popstate"?e===Bu?!1:(Bu=e,!0):(Bu=null,!1)}var Lu=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,Pp=typeof Promise=="function"?Promise:void 0,em=typeof requestAnimationFrame=="function"?requestAnimationFrame:Lu,vg=typeof queueMicrotask=="function"?queueMicrotask:typeof Pp<"u"?function(e){return Pp.resolve(null).then(e).catch(wg)}:Lu;function wg(e){setTimeout(function(){throw e})}function ml(e){return e==="head"}function tm(e,t){var n=t,l=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(a),Ua(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Yu(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Yu(n);for(var i=n.firstChild;i;){var r=i.nextSibling,u=i.nodeName;i[Ka]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=r}}else n==="body"&&Yu(e.ownerDocument.body);n=a}while(n);Ua(t)}function nm(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function lm(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var l=1;else for(var a=l=0;a<t.length;a++){var i=t[a];0<i.width&&0<i.height&&l++}l===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function am(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function _g(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Fu(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return _g(t,n,e)}function kg(e){return e.documentElement.clientHeight}function Eg(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Sg(e,t,n,l,a,i,r,u,p){var E=t.nodeType===9?t:t.ownerDocument;try{var O=E.startViewTransition({update:function(){var v=E.defaultView,M=v.navigation&&v.navigation.transition,ie=E.fonts.status;l();var de=[];if(ie==="loaded"&&(kg(E),E.fonts.status==="loading"&&de.push(E.fonts.ready)),ie=de.length,e!==null)for(var Ee=e.suspenseyImages,k=0,x=0;x<Ee.length;x++){var D=Ee[x];if(!D.complete){var Y=D.getBoundingClientRect();if(0<Y.bottom&&0<Y.right&&Y.top<v.innerHeight&&Y.left<v.innerWidth){if(k+=Sm(D),k>cr){de.length=ie;break}D=new Promise(Eg.bind(D)),de.push(D)}}}if(0<de.length)return v=Promise.race([Promise.all(de),new Promise(function(ce){return setTimeout(ce,500)})]).then(a,a),(M?Promise.allSettled([M.finished,v]):v).then(i,i);if(a(),M)return M.finished.then(i,i);i()},types:n});E.__reactViewTransition=O;var Q=[];return O.ready.then(function(){for(var v=E.documentElement.getAnimations({subtree:!0}),M=0;M<v.length;M++){var ie=v[M],de=ie.effect,Ee=de.pseudoElement;if(Ee!=null&&Ee.startsWith("::view-transition")){Q.push(ie),ie=de.getKeyframes();for(var k=Ee=void 0,x=!0,D=0;D<ie.length;D++){var Y=ie[D],ce=Y.width;if(Ee===void 0)Ee=ce;else if(Ee!==ce){x=!1;break}if(ce=Y.height,k===void 0)k=ce;else if(k!==ce){x=!1;break}delete Y.width,delete Y.height,Y.transform==="none"&&delete Y.transform}x&&Ee!==void 0&&k!==void 0&&(de.setKeyframes(ie),x=getComputedStyle(de.target,de.pseudoElement),x.width!==Ee||x.height!==k)&&(x=ie[0],x.width=Ee,x.height=k,x=ie[ie.length-1],x.width=Ee,x.height=k,de.setKeyframes(ie))}}r()},function(v){E.__reactViewTransition===O&&(E.__reactViewTransition=null);try{if(typeof v=="object"&&v!==null)switch(v.name){case"InvalidStateError":(v.message==="View transition was skipped because document visibility state is hidden."||v.message==="Skipping view transition because document visibility state has become hidden."||v.message==="Skipping view transition because viewport size changed."||v.message==="Transition was aborted because of invalid state")&&(v=null)}v!==null&&p(v)}finally{l(),a(),r()}}),O.finished.finally(function(){for(var v=0;v<Q.length;v++)Q[v].cancel();E.__reactViewTransition===O&&(E.__reactViewTransition=null),u()}),O}catch{return l(),a(),r(),null}}function Kl(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Kl.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:V({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Kl.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),l=[],a=0;a<n.length;a++){var i=n[a].effect;i!==null&&i.target===e&&i.pseudoElement===t&&l.push(n[a])}return l},Kl.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function im(e){return{name:e,group:new Kl("group",e),imagePair:new Kl("image-pair",e),old:new Kl("old",e),new:new Kl("new",e)}}function Qt(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Qt.prototype.addEventListener=function(e,t,n){var l=null,a=null;if(!(n!=null&&typeof n!="boolean"&&(l=n.signal||null,l!==null&&l.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(rm(i,e,t,n)===-1){var r=this,u=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(u=function(p){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,p):t.handleEvent(p)}),l!==null&&(a=r.removeEventListener.bind(r,e,t,n),l.addEventListener("abort",a,{once:!0}),a=l.removeEventListener.bind(l,"abort",a)),l=Oa(n),i.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:u,cleanup:a}),S(this._fragmentFiber.child,!1,Ng,e,u,l)}this._eventListeners=i}};function Ng(e,t,n,l){return z(e).addEventListener(t,n,l),!1}Qt.prototype.removeEventListener=function(e,t,n){var l=this._eventListeners;if(l!==null&&(t=rm(l,e,t,n),t!==-1)){var a=l[t];n=a.attachedListener;var i=a.cleanup;a=Oa(a.optionsOrUseCapture),S(this._fragmentFiber.child,!1,Tg,e,n,a),l.splice(t,1),i!==null&&i()}};function Tg(e,t,n,l){return z(e).removeEventListener(t,n,l),!1}function Oa(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function sm(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function rm(e,t,n,l){if(e.length===0)return-1;l=sm(l);for(var a=0;a<e.length;a++){var i=e[a];if(i.type===t&&i.listener===n&&sm(i.optionsOrUseCapture)===l)return a}return-1}Qt.prototype.dispatchEvent=function(e){var t=T(this._fragmentFiber);if(t===null)return!0;t=z(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var l=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var i=n[a];l.addEventListener(i.type,i.attachedListener,Oa(i.optionsOrUseCapture))}if(t.appendChild(l),e=l.dispatchEvent(e),n)for(a=0;a<n.length;a++)i=n[a],l.removeEventListener(i.type,i.attachedListener,Oa(i.optionsOrUseCapture));return t.removeChild(l),e}return t.dispatchEvent(e)},Qt.prototype.focus=function(e){S(this._fragmentFiber.child,!0,om,e,void 0,void 0)};function om(e,t){return e.tag===6?!1:(e=z(e),Ug(e,t))}Qt.prototype.focusLast=function(e){var t=[];S(this._fragmentFiber.child,!0,Ru,t,void 0,void 0);for(var n=t.length-1;0<=n&&!om(t[n],e);n--);};function Ru(e,t){return t.push(e),!1}Qt.prototype.blur=function(){var e=T(this._fragmentFiber);e!==null&&(e=z(e),e=Ci(e).activeElement,e!==null&&S(this._fragmentFiber.child,!1,Ag,e,void 0,void 0))};function Ag(e,t){return e.tag===6?!1:(e=z(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Qt.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),S(this._fragmentFiber.child,!1,jg,e,void 0,void 0)};function jg(e,t){return e.tag===6||(e=z(e),t.observe(e)),!1}Qt.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),S(this._fragmentFiber.child,!1,Cg,e,void 0,void 0);for(var n=t=0;n<on.length;n++){var l=on[n];l.fragmentInstance===this&&l.observer===e?e.unobserve(l.instance):on[t++]=l}on.length=t}};function Cg(e,t){return e.tag===6||(e=z(e),t.unobserve(e)),!1}var on=[],Uu=!1;function Dg(e,t,n){on.push({fragmentInstance:e,observer:t,instance:n}),Uu||(Uu=!0,qg(function(){Uu=!1;var l=on;on=[];for(var a=0;a<l.length;a++){var i=l[a];i.observer.unobserve(i.instance)}}))}Qt.prototype.getClientRects=function(){var e=[];return S(this._fragmentFiber.child,!1,Mg,e,void 0,void 0),e};function Mg(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=z(e),t.push.apply(t,e.getClientRects());return!1}Qt.prototype.getRootNode=function(e){var t=T(this._fragmentFiber);return t===null?this:z(t).getRootNode(e)},Qt.prototype.compareDocumentPosition=function(e){var t=T(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];S(this._fragmentFiber.child,!1,Ru,n,void 0,void 0);var l=z(t);if(n.length===0){if(n=l,re(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var a=l=n.compareDocumentPosition(e);return n===e?a=Node.DOCUMENT_POSITION_CONTAINS:l&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=ue(t)[1],n===null?a=Node.DOCUMENT_POSITION_PRECEDING:(e=z(n).compareDocumentPosition(e),a=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=z(n[0]),a=z(n[n.length-1]);var i=re(this._fragmentFiber)?t.parentElement:l;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;l=i.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),u=a.compareDocumentPosition(e),p=r&Node.DOCUMENT_POSITION_CONTAINED_BY||u&Node.DOCUMENT_POSITION_CONTAINED_BY;return u=l&&i&&r&Node.DOCUMENT_POSITION_FOLLOWING&&u&Node.DOCUMENT_POSITION_PRECEDING,t=l&&t===e||i&&a===e||p||u?Node.DOCUMENT_POSITION_CONTAINED_BY:!l&&t===e||!i&&a===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Og(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Og(e,t,n,l,a){var i=Tl(a);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!i)e:{for(;i!==null;){if(i.tag===7&&(i===t||i.alternate===t)){n=!0;break e}i=i.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=a.ownerDocument,a===i||a===i.documentElement||a===i.body;e:{for(i=t,t=T(t);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==t&&i.alternate!==t)){i=!0;break e}i=i.return}i=!1}return i}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!i)&&!(t=i===n)&&(t=F(n,i,B),t===null?t=!1:(S(t,!0,b,i,n),i=ee,ee=null,t=i!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!i)&&!(t=i===l)&&(t=F(l,i,B),t===null?t=!1:(S(t,!0,U,i,l),i=ee,N=ee=null,t=i!==null)),t):!1}function um(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Qt.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(d(566));var t=[];S(this._fragmentFiber.child,!1,Ru,t,void 0,void 0);var n=e!==!1;if(t.length===0){var l=ue(this._fragmentFiber);if(l=n?l[1]||l[0]||T(this._fragmentFiber):l[0]||l[1],l===null)return;if(l.tag===6){e=z(l),um(e,n);return}if(l=z(l),l.nodeType!==9){if(l.nodeType===11){n="host"in l?l.host:null,n!==null&&n.scrollIntoView(e);return}l.scrollIntoView(e)}}for(l=n?t.length-1:0;l!==(n?-1:t.length);){var a=t[l];a.tag===6?(a=z(a),um(a,n)):z(a).scrollIntoView(e),l+=n?-1:1}};function zg(e,t){return e=z(e),cm(e,t),!1}function cm(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function dm(e,t){var n=t._eventListeners;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l];e.addEventListener(a.type,a.attachedListener,Oa(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(i){for(var r=0,u=0;u<on.length;u++){var p=on[u];(p.fragmentInstance!==t||p.observer!==i||p.instance!==e)&&(on[r++]=p)}on.length=r,i.observe(e)}),cm(e,t))}function Bg(e,t){var n=t._eventListeners;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l];e.removeEventListener(a.type,a.attachedListener,Oa(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(i){typeof i.rootMargin=="string"?Dg(t,i,e):i.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function qu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":qu(n),Wi(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Lg(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ka])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Pt(e.nextSibling),e===null)break}return null}function Fg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Pt(e.nextSibling),e===null))return null;return e}function fm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Pt(e.nextSibling),e===null))return null;return e}function Hu(e){return e.data==="$?"||e.data==="$~"}function Gu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Rg(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Vu=null;function pm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Pt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function mm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Ug(e,t){function n(){l=!0}if(e.ownerDocument.activeElement===e)return!0;var l=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return l}function qg(e){em(function(){em(function(t){return e(t)})})}function hm(e,t,n){switch(t=Ci(n),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function gm(e,t,n){for(var l in n){var a=n[l];n.hasOwnProperty(l)&&a!=null&&Ye(e,t,l,null,hg,a)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===dn&&(e.onclick=null),Wi(e)}function Yu(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wi(e)}var en=new Map,xm=new Set;function Di(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Hn=J.d;J.d={f:Hg,r:Gg,D:Vg,C:Yg,L:Qg,m:Xg,X:Kg,S:Zg,M:$g};function Hg(){var e=Hn.f(),t=tr();return e||t}function Gg(e){var t=Wl(e);t!==null&&t.tag===5&&t.type==="form"?bf(t):Hn.r(e)}var za=typeof document>"u"?null:document;function ym(e,t,n){var l=za;if(l&&typeof t=="string"&&t){var a=Xt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),xm.has(a)||(xm.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),bt(t,"link",e),ct(t),l.head.appendChild(t)))}}function Vg(e){Hn.D(e),ym("dns-prefetch",e,null)}function Yg(e,t){Hn.C(e,t),ym("preconnect",e,t)}function Qg(e,t,n){Hn.L(e,t,n);var l=za;if(l&&e&&t){var a='link[rel="preload"][as="'+Xt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Xt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Xt(n.imageSizes)+'"]')):a+='[href="'+Xt(e)+'"]';var i=a;switch(t){case"style":i=Ba(e);break;case"script":i=La(e)}if(!(en.has(i)||(e=V({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),en.set(i,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(Mi(i))||t==="script"&&l.querySelector(Oi(i))))){var r=l.createElement("link");bt(r,"link",e),t==="style"&&(r[Ii]=!0,r.onload=r.onerror=function(){Cc(r)}),ct(r),l.head.appendChild(r)}}}function Xg(e,t){Hn.m(e,t);var n=za;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Xt(l)+'"][href="'+Xt(e)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=La(e)}if(!en.has(i)&&(e=V({rel:"modulepreload",href:e},t),en.set(i,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Oi(i)))return}l=n.createElement("link"),bt(l,"link",e),ct(l),n.head.appendChild(l)}}}function Zg(e,t,n){Hn.S(e,t,n);var l=za;if(l&&e){var a=Pl(l).hoistableStyles,i=Ba(e);t=t||"default";var r=a.get(i);if(!r){var u={loading:0,preload:null};if(r=l.querySelector(Mi(i)))u.loading=5;else{e=V({rel:"stylesheet",href:e,"data-precedence":t},n),(n=en.get(i))&&Qu(e,n);var p=r=l.createElement("link");ct(p),bt(p,"link",e),p._p=new Promise(function(E,O){p.onload=E,p.onerror=O}),p.addEventListener("load",function(){u.loading|=1}),p.addEventListener("error",function(){u.loading|=2}),u.loading|=4,or(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:u},a.set(i,r)}}}function Kg(e,t){Hn.X(e,t);var n=za;if(n&&e){var l=Pl(n).hoistableScripts,a=La(e),i=l.get(a);i||(i=n.querySelector(Oi(a)),i||(e=V({src:e,async:!0},t),(t=en.get(a))&&Xu(e,t),i=n.createElement("script"),ct(i),bt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function $g(e,t){Hn.M(e,t);var n=za;if(n&&e){var l=Pl(n).hoistableScripts,a=La(e),i=l.get(a);i||(i=n.querySelector(Oi(a)),i||(e=V({src:e,async:!0,type:"module"},t),(t=en.get(a))&&Xu(e,t),i=n.createElement("script"),ct(i),bt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function bm(e,t,n,l){var a=(a=jt.current)?Di(a):null;if(!a)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Ba(n.href),t=Pl(a).hoistableStyles,l=t.get(n),l||(l={type:"style",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ba(n.href);var i=Pl(a).hoistableStyles,r=i.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=a.querySelector(Mi(e)))?i._p||(r.instance=i,r.state.loading=5):(i=en.get(e),i||(i={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},en.set(e,i)),Jg(a,e,i,r.state))),t&&l===null)throw Error(d(528,""));return r}if(t&&l!==null)throw Error(d(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=La(n),t=Pl(a).hoistableScripts,l=t.get(n),l||(l={type:"script",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Ba(e){return'href="'+Xt(e)+'"'}function Mi(e){return'link[rel="stylesheet"]['+e+"]"}function vm(e){return V({},e,{"data-precedence":e.precedence,precedence:null})}function Jg(e,t,n,l){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Ii]!==!0){l.loading=1;return}}else t=e.createElement("link"),t[Ii]=!0,t.onload=t.onerror=Cc.bind(null,t),bt(t,"link",n),ct(t),e.head.appendChild(t);l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2})}function La(e){return'[src="'+Xt(e)+'"]'}function Oi(e){return"script[async]"+e}function wm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Xt(n.href)+'"]');if(l)return t.instance=l,ct(l),l;var a=V({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ct(l),bt(l,"style",a),or(l,n.precedence,e),t.instance=l;case"stylesheet":a=Ba(n.href);var i=e.querySelector(Mi(a));if(i)return t.state.loading|=4,t.instance=i,ct(i),i;l=vm(n),(a=en.get(a))&&Qu(l,a),i=(e.ownerDocument||e).createElement("link"),ct(i);var r=i;return r._p=new Promise(function(u,p){r.onload=u,r.onerror=p}),bt(i,"link",l),t.state.loading|=4,or(i,n.precedence,e),t.instance=i;case"script":return i=La(n.src),(a=e.querySelector(Oi(i)))?(t.instance=a,ct(a),a):(l=n,(a=en.get(i))&&(l=V({},n),Xu(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),ct(a),bt(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,or(l,n.precedence,e));return t.instance}function or(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,r=0;r<l.length;r++){var u=l[r];if(u.dataset.precedence===t)i=u;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Qu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Xu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ur=null;function _m(e,t,n){if(ur===null){var l=new Map,a=ur=new Map;a.set(n,l)}else a=ur,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[Ka]||i[mt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var u=l.get(r);u?u.push(i):l.set(r,[i])}}return l}function Zu(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Ig(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function km(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function Em(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Sm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Nm(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=Sm(t),e.suspenseyImages.push(t)),e=ex.bind(e),t.decode().then(e,e))}function Wg(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Ba(l.href),i=t.querySelector(Mi(a));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=zi.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,ct(i);return}i=t.ownerDocument||t,l=vm(l),(a=en.get(a))&&Qu(l,a),i=i.createElement("link"),ct(i);var r=i;r._p=new Promise(function(u,p){r.onload=u,r.onerror=p}),bt(i,"link",l),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=zi.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var cr=0;function Pg(e,t){return e.stylesheets&&e.count===0&&fr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&fr(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&cr===0&&(cr=62500*xg());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fr(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>cr?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function Tm(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)fr(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function zi(){this.count--,Tm(this)}function ex(){this.imgCount--,Tm(this)}var dr=null;function fr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dr=new Map,t.forEach(tx,e),dr=null,zi.call(e))}function tx(e,t){if(!(t.state.loading&4)){var n=dr.get(e);if(n)var l=n.get(null);else{n=new Map,dr.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var r=a[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),l=r)}l&&n.set(null,l)}a=t.instance,r=a.getAttribute("data-precedence"),i=n.get(r)||l,i===l&&n.set(null,a),n.set(r,a),this.count++,l=zi.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Fa={$$typeof:Ne,Provider:null,Consumer:null,_currentValue:xe,_currentValue2:xe,_threadCount:0};function nx(e,t,n,l,a,i,r,u,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Nr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nr(0),this.hiddenUpdates=Nr(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.transitionTypes=null,this.incompleteTransitions=new Map}function Am(e,t,n,l,a,i,r,u,p,E,O,Q){return e=new nx(e,t,n,r,p,E,O,Q,u),t=1,i===!0&&(t|=24),i=Dt(3,null,null,t),e.current=i,i.stateNode=e,t=ro(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:n,cache:t},fo(i),e}function jm(e){return e?(e=ua,e):ua}function Cm(e,t,n,l,a,i){a=jm(a),l.context===null?l.context=a:l.pendingContext=a,l=nl(t),l.payload={element:n},i=i===void 0?null:i,i!==null&&(l.callback=i),n=ll(e,l,t),n!==null&&(Bt(n,e,t),di(n,e,t))}function Dm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ku(e,t){Dm(e,t),(e=e.alternate)&&Dm(e,t)}function Mm(e){if(e.tag===13||e.tag===31){var t=Dl(e,67108864);t!==null&&Bt(t,e,67108864),Ku(e,67108864)}}function Om(e){if(e.tag===13||e.tag===31){var t=Yt();t=Tr(t);var n=Dl(e,t);n!==null&&Bt(n,e,t),Ku(e,t)}}var Ra=!0;function lx(e,t,n,l){var a=G.T;G.T=null;var i=J.p;try{J.p=2,$u(e,t,n,l)}finally{J.p=i,G.T=a}}function ax(e,t,n,l){var a=G.T;G.T=null;var i=J.p;try{J.p=8,$u(e,t,n,l)}finally{J.p=i,G.T=a}}function $u(e,t,n,l){if(Ra){var a=Ju(l);if(a===null)Cu(e,t,l,pr,n),Bm(e,l);else if(sx(a,e,t,n,l))l.stopPropagation();else if(Bm(e,l),t&4&&-1<ix.indexOf(e)){for(;a!==null;){var i=Wl(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=Nl(i.pendingLanes);if(r!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;r;){var p=1<<31-Ft(r);u.entanglements[1]|=p,r&=~p}wn(i),(qe&6)===0&&(Ws=lt()+500,Ti(0))}}break;case 31:case 13:u=Dl(i,2),u!==null&&Bt(u,i,2),tr(),Ku(i,2)}if(i=Ju(l),i===null&&Cu(e,t,l,pr,n),i===a)break;a=i}a!==null&&l.stopPropagation()}else Cu(e,t,l,null,n)}}function Ju(e){return e=zr(e),Iu(e)}var pr=null;function Iu(e){if(pr=null,e=Tl(e),e!==null){var t=R(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=W(t),e!==null)return e;e=null}else if(n===31){if(e=w(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pr=e,null}function zm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case oe:return 2;case Se:return 8;case Ue:case Ke:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var Wu=!1,hl=null,gl=null,xl=null,Bi=new Map,Li=new Map,yl=[],ix="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bm(e,t){switch(e){case"focusin":case"focusout":hl=null;break;case"dragenter":case"dragleave":gl=null;break;case"mouseover":case"mouseout":xl=null;break;case"pointerover":case"pointerout":Bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Li.delete(t.pointerId)}}function Fi(e,t,n,l,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Wl(t),t!==null&&Mm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function sx(e,t,n,l,a){switch(t){case"focusin":return hl=Fi(hl,e,t,n,l,a),!0;case"dragenter":return gl=Fi(gl,e,t,n,l,a),!0;case"mouseover":return xl=Fi(xl,e,t,n,l,a),!0;case"pointerover":var i=a.pointerId;return Bi.set(i,Fi(Bi.get(i)||null,e,t,n,l,a)),!0;case"gotpointercapture":return i=a.pointerId,Li.set(i,Fi(Li.get(i)||null,e,t,n,l,a)),!0}return!1}function Lm(e){var t=Tl(e.target);if(t!==null){var n=R(t);if(n!==null){if(t=n.tag,t===13){if(t=W(n),t!==null){e.blockedOn=t,Tc(e.priority,function(){Om(n)});return}}else if(t===31){if(t=w(n),t!==null){e.blockedOn=t,Tc(e.priority,function(){Om(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ju(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Or=l,n.target.dispatchEvent(l),Or=null}else return t=Wl(n),t!==null&&Mm(t),e.blockedOn=n,!1;t.shift()}return!0}function Fm(e,t,n){mr(e)&&n.delete(t)}function rx(){Wu=!1,hl!==null&&mr(hl)&&(hl=null),gl!==null&&mr(gl)&&(gl=null),xl!==null&&mr(xl)&&(xl=null),Bi.forEach(Fm),Li.forEach(Fm)}function hr(e,t){e.blockedOn===t&&(e.blockedOn=null,Wu||(Wu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,rx)))}var gr=null;function Rm(e){gr!==e&&(gr=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){gr===e&&(gr=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if(Iu(l||n)===null)continue;break}var i=Wl(n);i!==null&&(e.splice(t,3),t-=3,Oo(i,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function Ua(e){function t(p){return hr(p,e)}hl!==null&&hr(hl,e),gl!==null&&hr(gl,e),xl!==null&&hr(xl,e),Bi.forEach(t),Li.forEach(t);for(var n=0;n<yl.length;n++){var l=yl[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<yl.length&&(n=yl[0],n.blockedOn===null);)Lm(n),n.blockedOn===null&&yl.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],i=n[l+1],r=a[Ct]||null;if(typeof i=="function")r||Rm(n);else if(r){var u=null;if(i&&i.hasAttribute("formAction")){if(a=i,r=i[Ct]||null)u=r.formAction;else if(Iu(a)!==null)continue}else u=r.action;typeof u=="function"?n[l+1]=u:(n.splice(l,3),l-=3),Rm(n)}}}function Um(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Pu(e){this._internalRoot=e}xr.prototype.render=Pu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var n=t.current,l=Yt();Cm(n,l,e,t,null,null)},xr.prototype.unmount=Pu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cm(e.current,2,null,e,null,null),tr(),t[Il]=null}};function xr(e){this._internalRoot=e}xr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yl.length&&t!==0&&t<yl[n].priority;n++);yl.splice(n,0,e),n===0&&Lm(e)}};var qm=f.version;if(qm!=="19.3.1")throw Error(d(527,qm,"19.3.1"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=ae(t),e=e!==null?$(e):null,e=e===null?null:e.stateNode,e};var ox={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{Sl=yr.inject(ox),Et=yr}catch{}}return Ui.createRoot=function(e,t){if(!j(e))throw Error(d(299));var n=!1,l="",a=jf,i=Cf,r=Df;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Am(e,1,!1,null,null,n,l,null,a,i,r,Um),e[Il]=t.current,ju(e),new Pu(t)},Ui.hydrateRoot=function(e,t,n){if(!j(e))throw Error(d(299));var l=!1,a="",i=jf,r=Cf,u=Df,p=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError),n.formState!==void 0&&(p=n.formState)),t=Am(e,1,!0,t,n??null,l,a,p,i,r,u,Um),t.context=jm(null),n=t.current,l=Yt(),l=Tr(l),a=nl(l),a.callback=null,ll(n,a,l),n=l,t.current.lanes=n,Za(t,n),wn(t),e[Il]=t.current,ju(e),new xr(t)},Ui.version="19.3.1",Ui}var Im;function bx(){if(Im)return nc.exports;Im=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(f){console.error(f)}}return o(),nc.exports=yx(),nc.exports}var vx=bx();const wx=[{id:"tkinter_window",moduleId:"module_tkinter",title:"3. Первое окно: tk.Tk(), Label, Button и реакция на нажатие",icon:"AppWindow",shortDesc:"Программа перестаёт быть списком и начинает ждать событий",theory:{story:{letter:`ВХОДЯЩЕЕ СООБЩЕНИЕ
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
`,validate:(o,f)=>f.includes("OK_TK_WINDOW")?{passed:!0,message:"Отлично! Первое графическое окно создано и успешно реагирует на клик! 🚀"}:{passed:!1,message:"Проверь, что кнопка меняет текст надписи на «Связь установлена»."}}},{id:"tkinter_guess_number",moduleId:"module_tkinter",title:"4. Угадай число: поле ввода Entry, random, цвета и счётчик попыток",icon:"HelpCircle",shortDesc:"Принимаем ввод пользователя в окне через Entry вместо input()",theory:{story:{letter:`ВХОДЯЩЕЕ СООБЩЕНИЕ
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
`,validate:(o,f)=>f.includes("OK_GUESS_GAME")?{passed:!0,message:"Отлично! Игра «Угадай число» с полем ввода и кнопкой работает! 🎯"}:{passed:!1,message:"Проверь работу функции check и считывание числа из entry."}}},{id:"tkinter_currency_converter",moduleId:"module_tkinter",title:"5. Конвертер валют: сетка grid(), float, messagebox и защита от ошибок",icon:"Layout",shortDesc:"Табличная верстка grid(), два поля ввода и всплывающие окна",theory:{story:{letter:`ВХОДЯЩЕЕ СООБЩЕНИЕ
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
`,validate:(o,f)=>f.includes("OK_CONVERTER")?{passed:!0,message:"Превосходно! Конвертер валют на табличной сетке grid() работает! 💰"}:{passed:!1,message:"Проверь работу функций перевода в доллары и рубли."}}},{id:"tkinter_todo_list",moduleId:"module_tkinter",title:"6. Сдача проекта (ToDo-лист): виджет Listbox, отметка «сделано» и удаление",icon:"CheckCircle2",shortDesc:"Сборка всего модуля в одно готовое приложение с Listbox",theory:{story:{letter:`ВХОДЯЩЕЕ СООБЩЕНИЕ
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
`,validate:(o,f)=>f.includes("OK_TODO_LIST")?{passed:!0,message:"Поздравляем! Финальный проект модуля 1 (ToDo-лист) успешно сдан Заказчику! 🏆"}:{passed:!1,message:"Проверь функции add_task, refresh и toggle_task."}}},{id:"tkinter_heroes_tavern",moduleId:"module_tkinter",title:"7. Таверна героев: файлы, модуль JSON и вечное сохранение данных",icon:"FolderOpen",shortDesc:"Программа запоминает данные в JSON-файл после закрытия окна",theory:{story:{letter:`ВХОДЯЩЕЕ СООБЩЕНИЕ
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
`,validate:(o,f)=>f.includes("OK_HEROES_TAVERN")?{passed:!0,message:"Великолепно! Таверна героев успешно сохраняет персонажей в heroes.json! 🧙‍♂️⚔️"}:{passed:!1,message:"Проверь функции save_heroes, load_heroes и сохранение в heroes.json."}}},{id:"tkinter_music_player",moduleId:"module_tkinter",title:"8. Музыкальный плеер: модуль os, диалог выбора папки и pygame.mixer",icon:"Music",shortDesc:"Программа читает папку на диске, фильтрует треки и играет музыку",theory:{story:{letter:`ВХОДЯЩЕЕ СООБЩЕНИЕ
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
print("OK_MUSIC_PLAYER")`,validate:(o,f)=>f.includes("OK_MUSIC_PLAYER")?{passed:!0,message:"Браво! Музыкальный плеер ProTeam полностью собран и играет треки! 🎵🎧📻"}:{passed:!1,message:"Проверь функции get_tracks, play_index, pause, а также Scale и кнопки управления."}}},{id:"tkinter_drum_machine",moduleId:"module_tkinter",title:"9. Драм-машина: классы (class), self, Sound и игра с клавиатуры",icon:"Keyboard",shortDesc:"Один чертёж class Pad — восемь барабанных пэдов со звуком, вспышкой и клавишами 1–8",theory:{story:{letter:`ВХОДЯЩЕЕ СООБЩЕНИЕ
ОТПРАВИТЕЛЬ: ЗАКАЗЧИК

Плеер работает, слушаю каждый день.

Новая задача. Наш саунд-дизайнер просит драм-машину: восемь кнопок, каждая со своим звуком. Нажал — ударило.

И чтобы можно было играть с клавиатуры. Мышкой ритм не настучишь.`,task:"Восемь пэдов, свои короткие звуки, вспышка при ударе и игра с клавиатуры.",quotes:[{speaker:"Алёна, продюсер",text:"Задача на день: восемь пэдов, свои звуки, игра с клавиатуры."},{speaker:"Макс, техлид",text:"Чертёж один, а пэдов по нему можно наделать сколько угодно."},{speaker:"Макс, техлид",text:"Шестнадцать функций на восемь кнопок. Попросят шестнадцать пэдов — вы уволитесь."},{speaker:"Ева, QA-инженер",text:"Скобки после hit — и звук бьёт при запуске, а кнопка мёртвая. Проверено."},{speaker:"Макс, техлид",text:"У легендарной Roland TR-808 было 16 кнопок, и внутри каждая устроена одинаково. Сегодня сделаем так же."},{speaker:"Алёна, продюсер",text:"Восемь кнопок, один класс. Если завтра попросят сто — поменяется одна строка."}]},summary:`Класс — это чертёж, а объект — вещь, сделанная по этому чертежу. Чертёж class Pad говорит: у каждого пэда есть звук, клавиша, цвет и кнопка, и каждый пэд умеет ударить (hit) и погаснуть (reset). Сами пэды — бочка, малый, хэт — это объекты. Чертёж один, объектов восемь.

Главное правило: объект нужен, когда у данных есть поведение. Обычная функция ничего не помнит между вызовами. Если делать 8 кнопок без класса, придётся написать 8 звуков, 8 кнопок и 16 почти одинаковых функций (hit_kick, reset_kick...). А если написать одну функцию hit(sound) и передать command=hit(kick), скобки вызовут её сразу при запуске, и кнопка останется мёртвой.

Объект решает это через self: self — это ссылка на конкретный объект («я сам»). Внутри __init__ мы сохраняем self.sound, self.key, self.color и self.button, а кнопке отдаём command=self.hit БЕЗ скобок. Когда кнопку нажмут позже, метод hit(self) точно знает, чей звук играть и какую кнопку перекрасить!

Для коротких барабанных звуков вместо mixer.music (который играет одну длинную песню) используется pygame.mixer.Sound(file). Такие звуки можно запускать мгновенно и даже одновременно.

А чтобы играть ритм с клавиатуры, мы привязываем ко всему окну событие нажатия клавиш: window.bind("<Key>", on_key). В функцию приходит объект event, и в event.char лежит символ нажатой клавиши ("1"–"8").

Минутка истории: в 1980 году драм-машина Roland TR-808 провалилась в продаже — барабаны звучали «ненастоящими», и её сняли с производства. Подержанные 808 отдавали за копейки, их раскупили музыканты без денег на живых барабанщиков — и из этого звука родился хип-хоп. А классы в реальных программах и играх повсюду: сама кнопка tk.Button — объект класса Button, сто гоблинов в RPG создаются из одного класса Goblin, а в FL Studio каждая клавиша — объект со своей нотой и цветом.`,keyRule:"Объект нужен, когда у данных есть поведение! Всё своё объект хранит в self (self.sound, self.button), а методу в кнопке скобки не нужны: command=self.hit.",sections:[{heading:"Чертёж class Pad и метод __init__",text:"class Pad: описывает устройство любого пэда. Метод __init__ запускается автоматически при создании Pad(...), а self позволяет объекту запомнить свои данные.",codeExample:{title:"Минимальный класс Pad",code:`class Pad:
    def __init__(self, name, file, key, color, row, column):
        self.sound = pygame.mixer.Sound(file)
        self.key = key
        self.color = color
        self.button = tk.Button(window, text=name + "\\n" + key, command=self.hit)
        self.button.grid(row=row, column=column, padx=5, pady=5)`,explanation:"Без self. переменная исчезнет сразу после окончания __init__."}},{heading:"Короткие звуки pygame.mixer.Sound и клавиатура",text:'pygame.mixer.Sound(file) загружает короткий сэмпл, который можно проигрывать много раз одновременно. window.bind("<Key>", on_key) перехватывает нажатия клавиш, передавая event.char.'}],steps:[{code:`import tkinter as tk
import pygame

pygame.mixer.init()

window = tk.Tk()
window.title("Драм-машина ProTeam Labs")
window.config(bg="#2B2B3D")


class Pad:
    def __init__(self, name, key, row, column):
        self.key = key
        self.button = tk.Button(window, text=name + "\\n" + key, font=("Arial", 13),
                                width=8, height=3, bg="gray")
        self.button.grid(row=row, column=column, padx=5, pady=5)


kick = Pad("Бочка", "1", 0, 0)
snare = Pad("Малый", "2", 0, 1)

window.mainloop()`,output:"В тёмном окне появились две серые кнопки «Бочка / 1» и «Малый / 2»",explanation:"Шаг 1. Чертёж и две кнопки. Имя класса пишется с большой буквы (Pad). __init__ создаёт кнопку с переносом строки \\n и ставит её в сетку grid."},{code:`import tkinter as tk
import pygame

pygame.mixer.init()

window = tk.Tk()
window.title("Драм-машина ProTeam Labs")
window.config(bg="#2B2B3D")


class Pad:
    def __init__(self, name, file, key, row, column):
        self.sound = pygame.mixer.Sound(file)
        self.key = key
        self.button = tk.Button(window, text=name + "\\n" + key, font=("Arial", 13),
                                width=8, height=3, bg="gray", command=self.hit)
        self.button.grid(row=row, column=column, padx=5, pady=5)

    def hit(self):
        self.sound.play()


kick = Pad("Бочка", "sounds/kick.wav", "1", 0, 0)
snare = Pad("Малый", "sounds/snare.wav", "2", 0, 1)

window.mainloop()`,output:"При нажатии на «Бочка» звучит бочка, на «Малый» — малый барабан",explanation:"Шаг 2. Добавляем звук через pygame.mixer.Sound(file) и метод hit(self). В command=self.hit пишем без скобок: каждый пэд играет именно свой звук."},{code:`import tkinter as tk
import pygame

pygame.mixer.init()

window = tk.Tk()
window.title("Драм-машина ProTeam Labs")
window.config(bg="#2B2B3D")


class Pad:
    def __init__(self, name, file, key, color, row, column):
        self.sound = pygame.mixer.Sound(file)
        self.key = key
        self.color = color
        self.button = tk.Button(window, text=name + "\\n" + key, font=("Arial", 13),
                                width=8, height=3, bg="gray", command=self.hit)
        self.button.grid(row=row, column=column, padx=5, pady=5)

    def hit(self):
        self.sound.play()
        self.button.config(bg=self.color)
        window.after(150, self.reset)

    def reset(self):
        self.button.config(bg="gray")


kick = Pad("Бочка", "sounds/kick.wav", "1", "#833AE0", 0, 0)
snare = Pad("Малый", "sounds/snare.wav", "2", "#FF7842", 0, 1)

window.mainloop()`,output:"Пэд при ударе вспыхивает своим цветом и через 150 мс гаснет обратно в серый",explanation:"Шаг 3. Вспышка! Пэд запоминает self.color, красит свою кнопку при ударе и через window.after(150, self.reset) возвращает серый цвет (тоже без скобок)."},{code:`import tkinter as tk
import pygame

pygame.mixer.init()

window = tk.Tk()
window.title("Драм-машина ProTeam Labs")
window.config(bg="#2B2B3D")


class Pad:
    def __init__(self, name, file, key, color, row, column):
        self.sound = pygame.mixer.Sound(file)
        self.key = key
        self.color = color
        self.button = tk.Button(window, text=name + "\\n" + key, font=("Arial", 13),
                                width=8, height=3, bg="gray", command=self.hit)
        self.button.grid(row=row, column=column, padx=5, pady=5)

    def hit(self):
        self.sound.play()
        self.button.config(bg=self.color)
        window.after(150, self.reset)

    def reset(self):
        self.button.config(bg="gray")


pads = [
    Pad("Бочка", "sounds/kick.wav", "1", "#833AE0", 0, 0),
    Pad("Малый", "sounds/snare.wav", "2", "#FF7842", 0, 1),
    Pad("Хэт", "sounds/hat.wav", "3", "#38BD60", 0, 2),
    Pad("Хлопок", "sounds/clap.wav", "4", "#FA82CC", 0, 3),
    Pad("Том", "sounds/tom.wav", "5", "#5E5EFF", 1, 0),
    Pad("Тарелка", "sounds/crash.wav", "6", "#FFDC40", 1, 1),
    Pad("Перкуссия", "sounds/perc.wav", "7", "#833AE0", 1, 2),
    Pad("Бас", "sounds/bass.wav", "8", "#FF7842", 1, 3),
]

window.mainloop()`,output:"Сетка 2×4 из восьми цветных барабанных пэдов в окне",explanation:"Шаг 4. Восемь пэдов списком! Объекты можно хранить в списке, как числа или строки. Было бы 16 функций — стал один класс и восемь строк."},{code:`import tkinter as tk
import pygame

pygame.mixer.init()

window = tk.Tk()
window.title("Драм-машина ProTeam Labs")
window.config(bg="#2B2B3D")


class Pad:
    def __init__(self, name, file, key, color, row, column):
        self.sound = pygame.mixer.Sound(file)
        self.key = key
        self.color = color
        self.button = tk.Button(window, text=name + "\\n" + key, font=("Arial", 13),
                                width=8, height=3, bg="gray", command=self.hit)
        self.button.grid(row=row, column=column, padx=5, pady=5)

    def hit(self):
        self.sound.play()
        self.button.config(bg=self.color)
        window.after(150, self.reset)

    def reset(self):
        self.button.config(bg="gray")


pads = [
    Pad("Бочка", "sounds/kick.wav", "1", "#833AE0", 0, 0),
    Pad("Малый", "sounds/snare.wav", "2", "#FF7842", 0, 1),
    Pad("Хэт", "sounds/hat.wav", "3", "#38BD60", 0, 2),
    Pad("Хлопок", "sounds/clap.wav", "4", "#FA82CC", 0, 3),
    Pad("Том", "sounds/tom.wav", "5", "#5E5EFF", 1, 0),
    Pad("Тарелка", "sounds/crash.wav", "6", "#FFDC40", 1, 1),
    Pad("Перкуссия", "sounds/perc.wav", "7", "#833AE0", 1, 2),
    Pad("Бас", "sounds/bass.wav", "8", "#FF7842", 1, 3),
]


def on_key(event):
    for pad in pads:
        if pad.key == event.char:
            pad.hit()


window.bind("<Key>", on_key)
window.mainloop()`,output:"Драм-машина готова! Цифры 1–8 на клавиатуре и клики мышкой бьют звуками и мигают",explanation:'Шаг 5. Итоговый код с клавиатурой! window.bind("<Key>", on_key) ловит нажатия клавиш, сравнивает event.char с pad.key и вызывает pad.hit() (уже со скобками, потому что бьём прямо сейчас). Используем цифры, чтобы не зависеть от русской раскладки!'}],mistakes:[{wrongCode:"self.button = tk.Button(window, text=name, command=self.hit())",error:"Звук ударяет один раз при запуске, а кнопка потом молчит",fixedCode:"self.button = tk.Button(window, text=name, command=self.hit)",explanation:"Скобки вызвали метод сразу при создании кнопки, и в command ушёл результат None."},{wrongCode:`def __init__(self, name, file, key, color, row, column):
    sound = pygame.mixer.Sound(file)

def hit(self):
    self.sound.play()`,error:"AttributeError: 'Pad' object has no attribute 'sound'",fixedCode:`def __init__(self, name, file, key, color, row, column):
    self.sound = pygame.mixer.Sound(file)

def hit(self):
    self.sound.play()`,explanation:"Без self. переменная sound — обычная локальная переменная внутри __init__. Она исчезает, как только __init__ завершился."},{wrongCode:`def hit():
    self.sound.play()`,error:"TypeError: hit() takes 0 positional arguments but 1 was given",fixedCode:`def hit(self):
    self.sound.play()`,explanation:"Python сам передаёт объект первым аргументом в метод, поэтому первым параметром всегда нужно принимать self."},{wrongCode:'Pad("Бочка", "sounds/kick.wav", "1", 0, 0)',error:"TypeError: __init__() missing 1 required positional argument: 'column'",fixedCode:'Pad("Бочка", "sounds/kick.wav", "1", "#833AE0", 0, 0)',explanation:"Забыли цвет! Python раздал аргументы по порядку: 0 ушёл в color, второй 0 — в row, а для column ничего не осталось."},{wrongCode:`# Запуск программы не из той папки, где лежит sounds/
sound = pygame.mixer.Sound("sounds/kick.wav")`,error:"FileNotFoundError: No file 'sounds/kick.wav' found in working directory",fixedCode:`# На компьютере открывай в VS Code именно папку урока со звуками
sound = pygame.mixer.Sound("sounds/kick.wav")`,explanation:"При запуске на компьютере папка sounds со звуками должна лежать рядом со скриптом, а в VS Code должна быть открыта сама папка урока."}],quiz:[{code:`# Найди баг! Какая из кнопок сработает при запуске и останется мёртвой?
btn1 = tk.Button(window, text="1", command=pad1.hit)
btn2 = tk.Button(window, text="2", command=pad2.hit())`,options:["btn2 ударит при запуске и замолчит; btn1 будет работать правильно","btn1 ударит при запуске, а btn2 будет работать","Обе кнопки будут работать одинаково","Программа сразу выдаст SyntaxError"],correct:0,explanation:"Скобки в command=pad2.hit() вызывают метод сразу во время создания кнопки и передают в command значение None."},{code:`# Что выведет программа?
# pad1 нажали 3 раза, а pad2 — 1 раз. У каждого в __init__ есть self.count = 0.
print(pad1.count, pad2.count)`,options:["3 1","4 4","1 3","0 0"],correct:0,explanation:"У каждого объекта Pad своё собственное хранилище self.count, поэтому счётчики не перемешиваются."},{code:`class Pad:
    def __init__(self, key):
        key = key

p = Pad("1")
print(p.key)`,options:["AttributeError: 'Pad' object has no attribute 'key'","1","None","key"],correct:0,explanation:"Без self.key = key значение не сохраняется в объекте и исчезает после завершения __init__."}],cheatsheet:["class Pad: — объявление класса (чертежа), имя всегда с большой буквы","def __init__(self, ...): — конструктор, вызывается при создании Pad(...)","self.sound = ... — сохранение данных внутри конкретного объекта","command=self.hit — передача метода кнопке БЕЗ круглых скобок","pygame.mixer.Sound(file) и sound.play() — короткие звуки, играют одновременно","window.bind('<Key>', on_key) — ловит нажатия клавиш, символ лежит в event.char"]},exercise:{task:`Собери драм-машину ProTeam Labs на одном классе Pad:
1. Создай окно window = tk.Tk() с заголовком "Драм-машина ProTeam Labs" и тёмным фоном window.config(bg="#2B2B3D")
2. Объяви класс Pad с методами:
   - __init__(self, name, file, key, color, row, column): сохраняет self.sound = pygame.mixer.Sound(file), self.key = key, self.color = color, создаёт кнопку self.button = tk.Button(window, text=name + "\\n" + key, font=("Arial", 13), width=8, height=3, bg="gray", command=self.hit) и ставит её в grid(row=row, column=column, padx=5, pady=5)
   - hit(self): вызывает self.sound.play(), красит кнопку self.button.config(bg=self.color) и планирует window.after(150, self.reset)
   - reset(self): возвращает цвет self.button.config(bg="gray")
3. Создай список pads из 8 пэдов (2 строки по 4 столбца, клавиши "1"–"8", файлы sounds/kick.wav, snare.wav, hat.wav, clap.wav, tom.wav, crash.wav, perc.wav, bass.wav)
4. Напиши on_key(event): перебирает pads и при pad.key == event.char вызывает pad.hit()
5. Привяжи window.bind("<Key>", on_key) и вызови window.mainloop()!

Бонус (+SP после сдачи): попробуй добавить кнопку «Тишина» (command=pygame.mixer.stop), счётчик ударов self.count или ползунок громкости Scale!`,requirements:["Объявить класс Pad с методами __init__, hit и reset","Сохранять в self: self.sound, self.key, self.color и self.button","Передать command=self.hit и window.after(150, self.reset) без скобок","Создать список pads из 8 объектов Pad на сетке 2×4","Реализовать on_key(event) с проверкой event.char и window.bind('<Key>', on_key)"],starterCode:`import tkinter as tk
import pygame

pygame.mixer.init()

window = tk.Tk()
window.title("Драм-машина ProTeam Labs")
window.config(bg="#2B2B3D")

# 1. Объяви класс Pad (методы __init__, hit, reset):


# 2. Создай список pads из 8 пэдов (клавиши "1".."8"):


# 3. Напиши on_key(event) и привяжи window.bind("<Key>", on_key):


window.mainloop()
`,hint:`class Pad:
    def __init__(self, name, file, key, color, row, column):
        self.sound = pygame.mixer.Sound(file)
        self.key = key
        self.color = color
        self.button = tk.Button(window, text=name + "\\n" + key, font=("Arial", 13),
                                width=8, height=3, bg="gray", command=self.hit)
        self.button.grid(row=row, column=column, padx=5, pady=5)

    def hit(self):
        self.sound.play()
        self.button.config(bg=self.color)
        window.after(150, self.reset)

    def reset(self):
        self.button.config(bg="gray")`,solution:`import tkinter as tk
import pygame

pygame.mixer.init()

window = tk.Tk()
window.title("Драм-машина ProTeam Labs")
window.config(bg="#2B2B3D")


class Pad:
    def __init__(self, name, file, key, color, row, column):
        self.sound = pygame.mixer.Sound(file)
        self.key = key
        self.color = color
        self.button = tk.Button(window, text=name + "\\n" + key, font=("Arial", 13),
                                width=8, height=3, bg="gray", command=self.hit)
        self.button.grid(row=row, column=column, padx=5, pady=5)

    def hit(self):
        self.sound.play()
        self.button.config(bg=self.color)
        window.after(150, self.reset)

    def reset(self):
        self.button.config(bg="gray")


pads = [
    Pad("Бочка", "sounds/kick.wav", "1", "#833AE0", 0, 0),
    Pad("Малый", "sounds/snare.wav", "2", "#FF7842", 0, 1),
    Pad("Хэт", "sounds/hat.wav", "3", "#38BD60", 0, 2),
    Pad("Хлопок", "sounds/clap.wav", "4", "#FA82CC", 0, 3),
    Pad("Том", "sounds/tom.wav", "5", "#5E5EFF", 1, 0),
    Pad("Тарелка", "sounds/crash.wav", "6", "#FFDC40", 1, 1),
    Pad("Перкуссия", "sounds/perc.wav", "7", "#833AE0", 1, 2),
    Pad("Бас", "sounds/bass.wav", "8", "#FF7842", 1, 3),
]


def on_key(event):
    for pad in pads:
        if pad.key == event.char:
            pad.hit()


window.bind("<Key>", on_key)
window.mainloop()`,tests:[{inputs:[],expected:"OK_DRUM_MACHINE"}],codeCheck:o=>/\bclass\s+Pad\b/.test(o)?/\bdef\s+__init__\s*\(\s*self\b/.test(o)?/\bdef\s+hit\s*\(\s*self\b/.test(o)?/pygame\.mixer\.Sound\s*\(/.test(o)?/window\.bind\s*\(/.test(o)?null:{passed:!1,message:"Привяжи обработку клавиш через window.bind('<Key>', on_key)."}:{passed:!1,message:"Загружай звук через pygame.mixer.Sound(file)."}:{passed:!1,message:"Добавь метод hit(self) в класс Pad."}:{passed:!1,message:"Добавь метод __init__(self, ...) в класс Pad."}:{passed:!1,message:"Объяви класс Pad: class Pad:"},testCode:`
import tkinter
assert "Pad" in globals(), "Класс Pad не найден"
assert "pads" in globals() and isinstance(pads, list), "Создай список pads"
assert len(pads) >= 8, "В списке pads должно быть не меньше 8 пэдов"
buttons = [w for w in tkinter.WIDGETS if w.kind == "Button"]
assert len(buttons) >= 8, "В окне должно быть не меньше 8 кнопок"
p0 = pads[0]
assert hasattr(p0, "sound") and hasattr(p0, "key") and hasattr(p0, "color") and hasattr(p0, "button"), "В __init__ сохрани self.sound, self.key, self.color и self.button"
before_cnt = p0.sound._play_count
p0.hit()
assert p0.sound._play_count > before_cnt, "Метод hit() должен вызывать self.sound.play()"
assert p0.button.cget("bg") == p0.color, "Метод hit() должен красить кнопку в self.color"
p0.reset()
assert p0.button.cget("bg") == "gray", "Метод reset() должен возвращать цвет 'gray'"
root_tk = [w for w in tkinter.WIDGETS if w.kind == "Tk"][0]
assert "bind:<Key>" in root_tk.opts, "Привяжи клавиатуру через window.bind('<Key>', on_key)"
p1 = pads[1]
cnt1 = p1.sound._play_count
root_tk.opts["bind:<Key>"](tkinter.Event(char=p1.key))
assert p1.sound._play_count > cnt1, "Нажатие клавиши из pad.key должно вызывать pad.hit()"
print("OK_DRUM_MACHINE")
`,validate:(o,f)=>f.includes("OK_DRUM_MACHINE")?{passed:!0,message:"Ачивка «Восемь по цене одного» получена! Драм-машина на одном классе Pad работает идеально! 🥁🎶"}:{passed:!1,message:"Проверь класс Pad, список из 8 пэдов и привязку клавиш window.bind('<Key>', on_key)."}}},{id:"tkinter_sequencer",moduleId:"module_tkinter",title:"10. Секвенсор: таймер window.after(), сетка 4×8 и кнопка Старт/Стоп",icon:"Repeat",shortDesc:"Ритм играет сам по кругу: 32 клетки одного класса Step и будильник tick()",theory:{story:{letter:`ВХОДЯЩЕЕ СООБЩЕНИЕ
ОТПРАВИТЕЛЬ: ЗАКАЗЧИК

Драм-машина отличная, саунд-дизайнер не отходит от неё.

Но пока он стучит ритм, руки заняты. Хочет, чтобы ритм играл сам: расставил удары по клеткам, нажал «Старт», и машина играет по кругу.`,task:"Сетка клеток 4×8, бегунок и кнопка «Старт / Стоп».",quotes:[{speaker:"Алёна, продюсер",text:"Задача на день: сетка клеток, бегунок и кнопка «Старт»."},{speaker:"Макс, техлид",text:"Секвенсор — та же музыкальная шкатулка. Включённая клетка — штырёк, бегунок — барабан."},{speaker:"Ева, QA-инженер",text:"Окно белое и не отвечает. Программа не сломалась, она занята циклом while True и не успевает нарисовать окно."},{speaker:"Макс, техлид",text:"after — это будильник. Не «жди 250 миллисекунд», а «напомни мне через 250»."},{speaker:"Ева, QA-инженер",text:"Не вызывайте tick() второй раз в кнопке. Будильников станет два, ритм ускорится вдвое."},{speaker:"Алёна, продюсер",text:"Будильник, который заводит сам себя. Запомните его: в играх так устроено вообще всё."}]},summary:`Секвенсор — это сетка 4×8: каждая строка отвечает за инструмент (бочка, малый, хэт, хлопок), а каждый столбец (0–7) — за момент времени. Бегунок идёт по столбцам слева направо, играет всё, что включено в текущем столбце, и дойдя до конца начинает сначала.

Клеток целых 32, а класс один — Step! Вспомним правило: объект нужен, когда у данных есть поведение. Клетка хранит звук, цвет, номер столбца и состояние self.on (True/False), а умеет две вещи: переключаться в toggle() через self.on = not self.on и играть звук в play(), только если включена.

Главная загадка урока: как запускать шаг каждые 250 миллисекунд? Если написать бесконечный цикл while True и time.sleep(0.25), окно станет белым и зависнет. Почему? Потому что window.mainloop() — это уже бесконечный цикл, который рисует кнопки и ловит клики. Пока крутится наш while True, до mainloop() очередь никогда не доходит.

Решение — будильник window.after(250, tick): «не жди, а напомни мне через 250 мс вызвать tick». В конце функции tick() сама заводит себя заново: window.after(250, tick). Получается цикл, который совсем не мешает окну!

Чтобы ритм можно было ставить на паузу, вводим флаг playing = False и кнопку «Старт / Стоп». Очень важно: window.after(250, tick) должен стоять ВНЕ условия if playing:, иначе при нажатии «Стоп» будильник перестанет перезаводиться, и кнопка «Старт» больше ничего не запустит. Саму tick() вызываем ровно один раз перед mainloop().

Минутка истории: в 1796 году в Женеве придумали музыкальную шкатулку — барабан со штырьками цеплял язычки и проигрывал мелодию по кругу. В FL Studio, GarageBand, игровых движках (где каждый кадр — такой же tick) и таймерах автосохранения всё устроено по тому же принципу!`,keyRule:"window.after(250, tick) ставь ВНЕ условия if playing:, чтобы будильник не умирал на паузе! А функцию tick() вызывай только один раз перед window.mainloop() — никогда не вызывай её внутри start_stop().",sections:[{heading:"Клетка Step и переключатель на not",text:"self.on = not self.on мгновенно переворачивает состояние клетки (False -> True -> False). Метод play(self) играет звук только при self.on == True.",codeExample:{title:"Безопасный цикл на window.after",code:`import tkinter as tk

window = tk.Tk()

def tick():
    print("тик")
    window.after(250, tick)

tick()
window.mainloop()`,explanation:"window.after(250, tick) просит Tkinter вызвать tick через 250 мс, оставляя окно отзывчивым."}},{heading:"Сетка 4×8 и кнопка Старт/Стоп",text:"Четыре цикла по range(8) создают 32 клетки. В tick() проверяем if playing: и играем клетки текущего столбца current, а window.after(250, tick) ставим после блока if."}],steps:[{code:`import tkinter as tk
import pygame

pygame.mixer.init()

window = tk.Tk()
window.title("Секвенсор ProTeam Labs")
window.config(bg="#2B2B3D")


class Step:
    def __init__(self, color, row, column):
        self.color = color
        self.column = column
        self.on = False
        self.button = tk.Button(window, width=3, height=2, bg="gray", command=self.toggle)
        self.button.grid(row=row, column=column, padx=3, pady=3)

    def toggle(self):
        self.on = not self.on
        if self.on:
            self.button.config(bg=self.color, text="●")
        else:
            self.button.config(bg="gray", text="")


steps = []
for column in range(8):
    steps.append(Step("#833AE0", 0, column))

window.mainloop()`,output:"Одна строка из 8 клеток; клик включает и выключает точку «●» и цвет",explanation:"Шаг 1. Одна строка клеток. self.on = not self.on — переключатель, а символ «●» виден на любой системе, даже если Mac не перекрашивает кнопку."},{code:`import tkinter as tk
import pygame

pygame.mixer.init()

window = tk.Tk()
window.title("Секвенсор ProTeam Labs")
window.config(bg="#2B2B3D")


class Step:
    def __init__(self, sound, color, row, column):
        self.sound = sound
        self.color = color
        self.column = column
        self.on = False
        self.button = tk.Button(window, width=3, height=2, bg="gray", command=self.toggle)
        self.button.grid(row=row, column=column, padx=3, pady=3)

    def toggle(self):
        self.on = not self.on
        if self.on:
            self.button.config(bg=self.color, text="●")
        else:
            self.button.config(bg="gray", text="")

    def play(self):
        if self.on:
            self.sound.play()


kick = pygame.mixer.Sound("sounds/kick.wav")
snare = pygame.mixer.Sound("sounds/snare.wav")
hat = pygame.mixer.Sound("sounds/hat.wav")
clap = pygame.mixer.Sound("sounds/clap.wav")

steps = []

for column in range(8):
    steps.append(Step(kick, "#833AE0", 0, column))

for column in range(8):
    steps.append(Step(snare, "#FF7842", 1, column))

for column in range(8):
    steps.append(Step(hat, "#38BD60", 2, column))

for column in range(8):
    steps.append(Step(clap, "#FA82CC", 3, column))

window.mainloop()`,output:"Сетка 4×8: фиолетовая бочка, оранжевый малый, зелёный хэт и розовый хлопок",explanation:"Шаг 2. Сетка 4×8 со звуками. Все 8 клеток строки получают один и тот же загруженный объект Sound. (Для продвинутых: эти 4 цикла можно заменить одним вложенным циклом for row in range(4): for column in range(8):)."},{code:`import tkinter as tk
import pygame

pygame.mixer.init()

window = tk.Tk()
window.title("Секвенсор ProTeam Labs")
window.config(bg="#2B2B3D")


class Step:
    def __init__(self, sound, color, row, column):
        self.sound = sound
        self.color = color
        self.column = column
        self.on = False
        self.button = tk.Button(window, width=3, height=2, bg="gray", command=self.toggle)
        self.button.grid(row=row, column=column, padx=3, pady=3)

    def toggle(self):
        self.on = not self.on
        if self.on:
            self.button.config(bg=self.color, text="●")
        else:
            self.button.config(bg="gray", text="")

    def play(self):
        if self.on:
            self.sound.play()


kick = pygame.mixer.Sound("sounds/kick.wav")
snare = pygame.mixer.Sound("sounds/snare.wav")
hat = pygame.mixer.Sound("sounds/hat.wav")
clap = pygame.mixer.Sound("sounds/clap.wav")

steps = []

for column in range(8):
    steps.append(Step(kick, "#833AE0", 0, column))

for column in range(8):
    steps.append(Step(snare, "#FF7842", 1, column))

for column in range(8):
    steps.append(Step(hat, "#38BD60", 2, column))

for column in range(8):
    steps.append(Step(clap, "#FA82CC", 3, column))

current = 0


def tick():
    global current
    for step in steps:
        if step.column == current:
            step.play()

    current = current + 1
    if current == 8:
        current = 0
    window.after(250, tick)


tick()
window.mainloop()`,output:"Включите несколько клеток — и ритм сразу заиграет по кругу каждые 250 мс!",explanation:"Шаг 3. Бегунок! current хранит номер текущего столбца (0..7). На каждом тике играют только клетки с step.column == current, затем current сдвигается и на 8 сбрасывается в 0."},{code:`import tkinter as tk
import pygame

pygame.mixer.init()

window = tk.Tk()
window.title("Секвенсор ProTeam Labs")
window.config(bg="#2B2B3D")


class Step:
    def __init__(self, sound, color, row, column):
        self.sound = sound
        self.color = color
        self.column = column
        self.on = False
        self.button = tk.Button(window, width=3, height=2, bg="gray", command=self.toggle)
        self.button.grid(row=row, column=column, padx=3, pady=3)

    def toggle(self):
        self.on = not self.on
        if self.on:
            self.button.config(bg=self.color, text="●")
        else:
            self.button.config(bg="gray", text="")

    def play(self):
        if self.on:
            self.sound.play()


kick = pygame.mixer.Sound("sounds/kick.wav")
snare = pygame.mixer.Sound("sounds/snare.wav")
hat = pygame.mixer.Sound("sounds/hat.wav")
clap = pygame.mixer.Sound("sounds/clap.wav")

steps = []

for column in range(8):
    steps.append(Step(kick, "#833AE0", 0, column))

for column in range(8):
    steps.append(Step(snare, "#FF7842", 1, column))

for column in range(8):
    steps.append(Step(hat, "#38BD60", 2, column))

for column in range(8):
    steps.append(Step(clap, "#FA82CC", 3, column))

current = 0
playing = False


def tick():
    global current
    if playing:
        for step in steps:
            if step.column == current:
                step.play()

        current = current + 1
        if current == 8:
            current = 0
    window.after(250, tick)


def start_stop():
    global playing
    playing = not playing
    if playing:
        start_button.config(text="Стоп")
    else:
        start_button.config(text="Старт")


start_button = tk.Button(window, text="Старт", font=("Arial", 13), command=start_stop)
start_button.grid(row=5, column=0, columnspan=8, pady=10)

tick()
window.mainloop()`,output:"Готовый секвенсор! «Старт» запускает ритм, «Стоп» останавливает, повторный «Старт» продолжает с того же места",explanation:"Шаг 4. Итоговый код со Старт/Стоп! Кнопка растянута через columnspan=8 на всю ширину сетки. window.after(250, tick) стоит вне if playing:, поэтому будильник не останавливается на паузе."}],mistakes:[{wrongCode:`while True:
    tick()
    time.sleep(0.25)`,error:"Окно зависло, белое и не отвечает на клики",fixedCode:`def tick():
    # шаг секвенсора
    window.after(250, tick)

tick()
window.mainloop()`,explanation:"Бесконечный цикл while True не пускает программу до window.mainloop(), и окно не может ни нарисоваться, ни обработать клики."},{wrongCode:`def tick():
    global current
    for step in steps:
        if step.column == current:
            step.play()
    current = current + 1
    if current == 8:
        current = 0`,error:"Сыграл один шаг при запуске — и полная тишина",fixedCode:`def tick():
    global current
    for step in steps:
        if step.column == current:
            step.play()
    current = current + 1
    if current == 8:
        current = 0
    window.after(250, tick)`,explanation:"Нет будильника на следующий шаг. В самом конце tick() обязательно нужна строка window.after(250, tick)."},{wrongCode:`def tick():
    global current
    if playing:
        for step in steps:
            if step.column == current:
                step.play()
        current = (current + 1) % 8
        window.after(250, tick)`,error:"После нажатия «Стоп» кнопка «Старт» больше не запускает ритм",fixedCode:`def tick():
    global current
    if playing:
        for step in steps:
            if step.column == current:
                step.play()
        current = (current + 1) % 8
    window.after(250, tick)`,explanation:"window.after попал внутрь if playing:. Когда playing стал False, будильник не завёлся, и цикл умер навсегда."},{wrongCode:`def start_stop():
    global playing
    playing = not playing
    tick()`,error:"После каждого нажатия «Старт» ритм ускоряется вдвое!",fixedCode:`def start_stop():
    global playing
    playing = not playing
    # tick() НЕ вызываем здесь — он уже тикает сам!`,explanation:"Каждый вызов tick() заводит ещё один параллельный будильник. tick() нужно вызвать ровно один раз в конце программы."},{wrongCode:`if current == 9:
    current = 0
lamps[current].config(bg="#FFDC40")`,error:"IndexError: list index out of range",fixedCode:`if current == 8:
    current = 0
lamps[current].config(bg="#FFDC40")`,explanation:"Столбцов 8, их индексы от 0 до 7. Когда current доходит до 8, такого столбца уже нет — сбрасывать нужно на 8."}],quiz:[{code:`def tick():
    global current
    if playing:
        current = (current + 1) % 8
        window.after(250, tick)
# Что произойдёт, если нажать «Стоп», а потом снова «Старт»?`,options:["Секвенсор остановится и больше не запустится","Ритм ускорится вдвое","Всё продолжит работать нормально","Возникнет ошибка ZeroDivisionError"],correct:0,explanation:"Пока playing == False, условие не срабатывает и window.after не вызывается. Цепочка будильников обрывается навсегда."},{code:`def start_stop():
    global playing
    playing = not playing
    tick()
# Почему это ошибка, если tick() уже вызван перед mainloop()?`,options:["Заведётся второй будильник, и ритм будет играть в 2 раза быстрее","Окно сразу закроется","Кнопка перестанет менять текст","Звуки перестанут проигрываться"],correct:0,explanation:"Каждый вызов tick() запускает свою цепочку window.after. Через два нажатия «Старт» будильников станет уже два, потом три!"},{code:`on = False
for i in range(3):
    on = not on
print(on)`,options:["True","False","None","3"],correct:0,explanation:"Шаг 1: False -> True. Шаг 2: True -> False. Шаг 3: False -> True."}],cheatsheet:["class Step: — один класс для всех 32 клеток сетки 4×8","self.on = not self.on — переключатель True/False в одну строку","for column in range(8): steps.append(Step(...)) — создание строки клеток циклом","global current — нужно внутри функции, которая перезаписывает current","window.after(250, tick) — будильник без зависания; ставить ВНЕ if playing:","tick() вызываем один раз в самом конце перед window.mainloop()"]},exercise:{task:`Собери пошаговый секвенсор 4×8 ProTeam Labs:
1. Создай окно window = tk.Tk() с заголовком "Секвенсор ProTeam Labs" и фоном window.config(bg="#2B2B3D")
2. Объяви класс Step:
   - __init__(self, sound, color, row, column): сохраняет self.sound, self.color, self.column, self.on = False, создаёт self.button = tk.Button(window, width=3, height=2, bg="gray", command=self.toggle) и размещает её через grid(row=row, column=column, padx=3, pady=3)
   - toggle(self): переворачивает self.on = not self.on; если включена — bg=self.color, text="●", иначе bg="gray", text=""
   - play(self): если self.on, вызывает self.sound.play()
3. Загрузи 4 звука (kick, snare, hat, clap) и циклами создай 32 клетки в списке steps (строки 0–3, столбцы 0–7)
4. Создай переменные current = 0 и playing = False
5. Напиши tick(): global current; если playing, проиграй все клетки с step.column == current, сдвинь current (при 8 сбрось в 0); и ВНЕ if playing: вызови window.after(250, tick)
6. Напиши start_stop() и создай кнопку start_button = tk.Button(window, text="Старт", font=("Arial", 13), command=start_stop) на grid(row=5, column=0, columnspan=8, pady=10)
7. Вызови tick() один раз и window.mainloop()!

Бонус (+SP после сдачи): добавь кнопку «Очистить», жёлтые лампочки-индикаторы под сеткой (row=4) или ползунок скорости Scale(from_=100, to=500)!`,requirements:["Объявить класс Step с методами __init__, toggle и play","Создать 32 клетки (сетка 4×8) в списке steps","Создать глобальные переменные current = 0 и playing = False","Реализовать tick() с window.after(250, tick) ВНЕ блока if playing:","Реализовать start_stop() и кнопку Старт с columnspan=8","Вызвать tick() один раз перед window.mainloop()"],starterCode:`import tkinter as tk
import pygame

pygame.mixer.init()

window = tk.Tk()
window.title("Секвенсор ProTeam Labs")
window.config(bg="#2B2B3D")

# 1. Объяви класс Step (__init__, toggle, play):


kick = pygame.mixer.Sound("sounds/kick.wav")
snare = pygame.mixer.Sound("sounds/snare.wav")
hat = pygame.mixer.Sound("sounds/hat.wav")
clap = pygame.mixer.Sound("sounds/clap.wav")

steps = []

# 2. Создай сетку 4x8 в списке steps:


current = 0
playing = False

# 3. Напиши функции tick() и start_stop(), создай start_button:


# 4. Запусти tick() и window.mainloop():
`,hint:`def tick():
    global current
    if playing:
        for step in steps:
            if step.column == current:
                step.play()
        current = current + 1
        if current == 8:
            current = 0
    window.after(250, tick)`,solution:`import tkinter as tk
import pygame

pygame.mixer.init()

window = tk.Tk()
window.title("Секвенсор ProTeam Labs")
window.config(bg="#2B2B3D")


class Step:
    def __init__(self, sound, color, row, column):
        self.sound = sound
        self.color = color
        self.column = column
        self.on = False
        self.button = tk.Button(window, width=3, height=2, bg="gray", command=self.toggle)
        self.button.grid(row=row, column=column, padx=3, pady=3)

    def toggle(self):
        self.on = not self.on
        if self.on:
            self.button.config(bg=self.color, text="●")
        else:
            self.button.config(bg="gray", text="")

    def play(self):
        if self.on:
            self.sound.play()


kick = pygame.mixer.Sound("sounds/kick.wav")
snare = pygame.mixer.Sound("sounds/snare.wav")
hat = pygame.mixer.Sound("sounds/hat.wav")
clap = pygame.mixer.Sound("sounds/clap.wav")

steps = []

for column in range(8):
    steps.append(Step(kick, "#833AE0", 0, column))

for column in range(8):
    steps.append(Step(snare, "#FF7842", 1, column))

for column in range(8):
    steps.append(Step(hat, "#38BD60", 2, column))

for column in range(8):
    steps.append(Step(clap, "#FA82CC", 3, column))

current = 0
playing = False


def tick():
    global current
    if playing:
        for step in steps:
            if step.column == current:
                step.play()

        current = current + 1
        if current == 8:
            current = 0
    window.after(250, tick)


def start_stop():
    global playing
    playing = not playing
    if playing:
        start_button.config(text="Стоп")
    else:
        start_button.config(text="Старт")


start_button = tk.Button(window, text="Старт", font=("Arial", 13), command=start_stop)
start_button.grid(row=5, column=0, columnspan=8, pady=10)

tick()
window.mainloop()`,tests:[{inputs:[],expected:"OK_SEQUENCER"}],codeCheck:o=>/\bclass\s+Step\b/.test(o)?/\bdef\s+toggle\s*\(\s*self\b/.test(o)?/\bdef\s+play\s*\(\s*self\b/.test(o)?/\bdef\s+tick\s*\(\s*\)/.test(o)?/window\.after\s*\(/.test(o)?/\bdef\s+start_stop\s*\(\s*\)/.test(o)?null:{passed:!1,message:"Объяви функцию start_stop() для кнопки Старт/Стоп."}:{passed:!1,message:"Используй window.after(..., tick) для цикла без зависания."}:{passed:!1,message:"Объяви функцию tick()."}:{passed:!1,message:"Добавь метод play(self) в класс Step."}:{passed:!1,message:"Добавь метод toggle(self) в класс Step."}:{passed:!1,message:"Объяви класс Step: class Step:"},testCode:`
import tkinter
assert "Step" in globals(), "Класс Step не найден"
assert "steps" in globals() and isinstance(steps, list), "Создай список steps"
assert len(steps) >= 32, "В сетке 4x8 должно быть 32 клетки"
assert "playing" in globals(), "Создай переменную playing = False"
assert "current" in globals(), "Создай переменную current = 0"
assert callable(tick) and callable(start_stop), "Объяви функции tick() и start_stop()"
s0 = steps[0]
assert hasattr(s0, "sound") and hasattr(s0, "color") and hasattr(s0, "column") and hasattr(s0, "on") and hasattr(s0, "button"), "В Step.__init__ сохрани self.sound, self.color, self.column, self.on и self.button"
was_on = s0.on
s0.toggle()
assert s0.on != was_on, "Метод toggle() должен переключать self.on"
if not s0.on:
    s0.toggle()
assert "●" in s0.button.cget("text"), "Включённая клетка должна показывать '●'"
start_stop()
assert playing == True, "Первый вызов start_stop() должен ставить playing = True"
current = 0
cnt_before = s0.sound._play_count
tick()
assert s0.sound._play_count > cnt_before, "tick() должен проигрывать включённые клетки текущего столбца"
assert current == 1, "tick() должен увеличивать current на 1"
current = 7
tick()
assert current == 0, "После столбца 7 переменная current должна сбрасываться в 0"
assert len(tkinter.AFTER_QUEUE) >= 1, "В конце tick() вызывай window.after(250, tick)"
start_stop()
assert playing == False, "Повторный вызов start_stop() должен ставить playing = False"
print("OK_SEQUENCER")
`,validate:(o,f)=>f.includes("OK_SEQUENCER")?{passed:!0,message:"Ачивка «Сам себе барабанщик» получена! Секвенсор 4×8 с будильником tick() готов к битам! 🎛️🥁"}:{passed:!1,message:"Проверь класс Step, 32 клетки в steps, функции tick() и start_stop()."}}}],wr=[{id:"module_intro",title:"1. Первые шаги и вывод данных",description:"Знакомство с Python, функция print(), отображение строк и чисел",icon:"Terminal",color:"#2F6FD0",lessons:[{id:"print_hello",moduleId:"module_intro",title:"Функция print() и первая программа",icon:"Terminal",shortDesc:"Учимся выводить приветствие и фразы в терминал",theory:{summary:`Компьютер сам по себе не умеет угадывать мысли. Если ты хочешь, чтобы он что-то показал тебе на экране, ему нужно дать прямую команду.

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
Я начинаю программировать`}],codeCheck:o=>(o.match(/\bprint\s*\(/g)||[]).length<2?{passed:!1,message:"Используй два отдельных вызова функции print() для вывода каждой строки."}:null,validate:(o,f,m)=>{if(!o.includes("print"))return{passed:!1,message:"В коде не найдена функция print().",hint:'Используй команду print("...") для вывода текста.'};const d=f.toLowerCase(),j=d.includes("привет, python")||d.includes("привет, python!"),R=d.includes("начинаю программировать");return j&&R?{passed:!0,message:"Отлично! Твоя первая программа на Python успешно вывела текст в консоль! 🎉"}:{passed:!1,message:"Вывод не полностью совпадает с заданием.",hint:"Проверь точный текст: 'Привет, Python!' и 'Я начинаю программировать'."}}}},{id:"print_arguments",moduleId:"module_intro",title:"Несколько аргументов в print()",icon:"Layers",shortDesc:"Вывод нескольких значений через запятую и разделители",theory:{summary:`В игре ты можешь собирать инвентарь: меч, щит и зелье. В функцию print() тоже можно положить сразу несколько предметов через запятую.

Всё, что мы передаем в круглые скобки команды print, программисты называют аргументами. Например, print("Счёт:", 100) выведет оба значения.

Заметил, что между словами сам собой появился пробел? Это работает стандартный разделитель sep. Слово «sep» — это сокращение от английского separator (разделитель).

Мы можем изменить этот разделитель на любой другой символ. Например, если написать sep="-", слова склеятся через дефис, а sep="" склеит их совсем без пробела.

А параметр end отвечает за то, что происходит в самом конце строки. Слово «end» переводится как «конец». По умолчанию после каждого print курсор прыгает на новую строку. Но если написать end=" ", следующий print напечатает свой текст на той же самой строке!`,keyRule:'Запятая внутри скобок разделяет разные аргументы: print("Счёт:", 100). sep меняет разделитель, end меняет конец строки.',sections:[{heading:"Печать нескольких значений",text:"Когда нужно объединить текст и числа, просто перечислите их через запятую.",codeExample:{title:"Пример с несколькими аргументами",code:`print("Мой возраст:", 14, "года")
print("Координаты:", 10, 20)`,explanation:"Python сам подставит пробелы между аргументами при выводе."}}],steps:[{code:'print("Уровень", 5, "Победа!")',output:"Уровень 5 Победа!",explanation:"Через запятую можно передавать сколько угодно аргументов. По умолчанию Python ставит между ними ровно один пробел."},{code:'print("12", "45", "00", sep=":")',output:"12:45:00",explanation:'Параметр sep=":" заменил обычные пробелы на двоеточия. Так удобно выводить время или даты.'},{code:`print("Загрузка", end="... ")
print("Готово!")`,output:"Загрузка... Готово!",explanation:'Благодаря end="... " первая строчка не перевела курсор вниз. Слово "Готово!" напечаталось сразу следом за загрузкой.'}],mistakes:[{wrongCode:'print(1, 2 sep=", ")',error:"SyntaxError: bad input on line 1",fixedCode:'print(1, 2, sep=", ")',explanation:"Все параметры внутри print() должны обязательно разделяться запятыми."},{wrongCode:"print(1, 2, sep=)",error:"SyntaxError: bad input on line 1",fixedCode:'print(1, 2, sep=" ")',explanation:"После знака равно нужно обязательно указать строку-разделитель в кавычках."},{wrongCode:'print("Привет", end=" )',error:"SyntaxError: bad token T_OP on line 1",fixedCode:'print("Привет", end=" ")',explanation:"Значение end — это тоже строка, кавычки должны быть открыты и закрыты."},{wrongCode:'print(1, 2, separater="-")',error:"TypeError: print() got an unexpected keyword argument 'separater' on line 1",fixedCode:'print(1, 2, sep="-")',explanation:"Параметр называется только sep, а не separator или separater."}],quiz:[{code:'print("A", "B", "C", sep="-")',options:["A B C","A-B-C","ABC","A - B - C"],correct:1,explanation:'Параметр sep="-" вставляет символ дефиса между каждым переданным аргументом.'},{code:`print("1", "2", end="")
print("3")`,options:["1 2\\n3","1 2 3","1 23","123"],correct:2,explanation:'Между "1" и "2" стоит пробел по умолчанию, а в конце первой строки перехода нет. Поэтому "3" приклеилась сразу к "2": получается 1 23.'},{code:`print("A", "B", sep="", end="!")
print("C")`,options:["AB!C","A B ! C","AB!\\nC","Ошибка"],correct:0,explanation:'sep="" убирает пробел между A и B, end="!" ставит восклицательный знак без переноса строки, и следом печатается C.'}],cheatsheet:["print(a, b, c) — выводит значения через пробел",'sep="..." — меняет разделитель между элементами (по умолчанию пробел)','end="..." — меняет символ в конце строки (по умолчанию перенос строки \\n)','sep="" — склеивает слова вплотную без пробелов']},exercise:{task:`Выведите в одну строку через запятую в print(): название языка, пробел не нужен вручную — передайте строку "Python" и версию числом 3.
Результат должен быть: Python 3`,requirements:["Использовать один вызов print с двумя аргументами через запятую",'Первый аргумент — строка "Python", второй — число 3'],starterCode:`# Выведи: Python 3 с помощью одного print()
`,hint:'Напиши: print("Python", 3)',solution:'print("Python", 3)',tests:[{inputs:[],expected:"Python 3"}],codeCheck:(o,f)=>/["']Python\s+3["']/.test(f)?{passed:!1,message:'Нужно вывести строку "Python" и число 3 как отдельные аргументы через запятую: print("Python", 3)',hint:'Не пиши всю фразу "Python 3" в одних кавычках.'}:!/,/.test(o)||!/\b3\b/.test(o)?{passed:!1,message:"Передай строку и число 3 через запятую внутри одного print()."}:null,validate:(o,f)=>f.trim()==="Python 3"?{passed:!0,message:"Превосходно! Ты освоил передачу нескольких аргументов в print! 🚀"}:{passed:!1,message:"Ожидался вывод: 'Python 3'",hint:'Передай в print два аргумента: строку "Python" и число 3.'}}}]},{id:"module_variables",title:"2. Переменные в Python",description:"Хранение данных, имена переменных, перезапись значений и типы",icon:"Box",color:"#B0700C",lessons:[{id:"variables_intro",moduleId:"module_variables",title:"Что такое переменная и как её создать",icon:"Box",shortDesc:"Создаем переменные, сохраняем в них числа и текст",theory:{summary:`В играх вроде Minecraft или Brawl Stars у твоего персонажа есть количество монет, здоровья или очков опыта. Компьютер должен где-то хранить эти данные, пока ты играешь.

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
print(f"Город: {city}, Температура: {temperature}")`,tests:[{inputs:[],expected:"Город: Москва, Температура: 25"}],codeCheck:o=>/\bcity\s*=/.test(o)?/\btemperature\s*=/.test(o)?null:{passed:!1,message:"Создай переменную temperature: temperature = 25."}:{passed:!1,message:'Создай переменную city: city = "Москва".'},validate:(o,f)=>{const m=/\bcity\s*=/.test(o),d=/\btemperature\s*=/.test(o);return m?d?!f.toLowerCase().includes("город")||!f.toLowerCase().includes("температура")?{passed:!1,message:"Вывод программы должен содержать слова 'Город' и 'Температура'.",hint:"Проверь вызов функции print()."}:{passed:!0,message:"Отлично! Ты успешно создал переменные и вывел их значения! 🎉"}:{passed:!1,message:"Не найдена переменная temperature.",hint:"Объяви переменную: temperature = 25"}:{passed:!1,message:"Не найдена переменная city.",hint:'Объяви переменную: city = "Название"'}}}},{id:"variables_reassign",moduleId:"module_variables",title:"Перезапись значений и изменение переменных",icon:"RotateCcw",shortDesc:"Как менять значение переменной по ходу программы",theory:{summary:`Вспомни телефонные заметки или черновик в тетради. Ты можешь стереть старую запись ластиком и написать на её месте новую.

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
print(balance)`,tests:[{inputs:[],expected:"150"}],codeCheck:o=>/\bbalance\s*(\+=|=.*balance)/.test(o)?/\bprint\s*\(\s*balance\s*\)/.test(o)?null:{passed:!1,message:"Выведи значение balance через print(balance)."}:{passed:!1,message:"Нужно изменить значение переменной balance (например balance += 50)."},validate:(o,f)=>f.trim()==="150"?{passed:!0,message:"Прекрасно! Ты понял, как изменять значения переменных! 💰"}:{passed:!1,message:"Ожидалось, что в консоли появится число 150.",hint:"Проверь: сначала balance = 100, затем добавь 50 и напечатай print(balance)."}}},{id:"data_types",moduleId:"module_variables",title:"Основные типы данных: int, float, str, bool",icon:"Cpu",shortDesc:"Целые числа, дробные числа, строки и логические значения",theory:{summary:`В реальной жизни ты не станешь класть суп в рюкзак, а учебники — в кастрюлю. У каждой вещи есть своё назначение. В Python у данных тоже есть разные типы.

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
<class 'bool'>`}],codeCheck:o=>/\btype\s*\(/.test(o)?!/\bage\b/.test(o)||!/\bheight\b/.test(o)||!/\bis_student\b/.test(o)?{passed:!1,message:"Создай переменные age, height и is_student."}:null:{passed:!1,message:"Используй функцию type(...) для вывода типов."},validate:(o,f)=>{const m=f.includes("int"),d=f.includes("float"),j=f.includes("bool");return m&&d&&j?{passed:!0,message:"Отлично! Ты познакомился с 4 главными типами данных Python! 🎯"}:{passed:!1,message:"В выводе должны присутствовать типы int, float и bool.",hint:"Используй вызовы print(type(age)), print(type(height)), print(type(is_student))."}}}}]},{id:"module_io",title:"3. Ввод данных: функция input()",description:"Взаимодействие с пользователем, чтение с клавиатуры и приведение типов",icon:"Keyboard",color:"#0A7A50",lessons:[{id:"input_strings",moduleId:"module_io",title:"Функция input() — ввод строки",icon:"Keyboard",shortDesc:"Спрашиваем имя у пользователя и отвечаем ему",theory:{summary:"Функция input() останавливает выполнение программы и ждёт, пока пользователь напечатает текст в консоли и нажмет Enter.",keyRule:"input() ВСЕГДА возвращает строку (str)! Даже если пользователь ввёл цифры, они будут строкой.",sections:[{heading:"Как использовать input()",text:"В скобках input() можно передать подсказку — текст вопроса, который увидит пользователь перед вводом.",codeExample:{title:"Пример диалога",code:`name = input("Как тебя зовут? ")
print("Привет,", name, "приятно познакомиться!")`,explanation:"Значение, которое наберет пользователь, сохранится в переменной name."}}],tips:["Добавляйте пробел в конце текста подсказки, чтобы вводимый текст не прилипал к вопросу."]},exercise:{task:`Напишите программу, которая с помощью input() спрашивает: 'Твое имя: ', а затем выводит строку:
Здравствуй, <имя>!
(например, если ввести 'Анна', должно вывести 'Здравствуй, Анна!')`,requirements:["Использовать функцию input() для сохранения имени","Вывести приветствие 'Здравствуй, <имя>!'"],starterCode:`name = input("Твое имя: ")
# Выведи приветствие:
`,hint:'Используй f-строку: print(f"Здравствуй, {name}!") или print("Здравствуй,", name + "!")',solution:`name = input("Твое имя: ")
print(f"Здравствуй, {name}!")`,tests:[{inputs:["Иван"],expected:"Здравствуй, Иван!"},{inputs:["Алиса"],expected:"Здравствуй, Алиса!"}],codeCheck:o=>/\binput\s*\(/.test(o)?null:{passed:!1,message:"Используй функцию input() для ввода имени с клавиатуры."},validate:(o,f)=>o.includes("input")?f.toLowerCase().includes("здравствуй")?{passed:!0,message:"Великолепно! Ты научился запрашивать данные у пользователя! 🤝"}:{passed:!1,message:"Вывод должен содержать слово 'Здравствуй, ...!'."}:{passed:!1,message:"В коде должна использоваться функция input()."}}},{id:"input_numbers",moduleId:"module_io",title:"Ввод чисел: int() и float()",icon:"Hash",shortDesc:"Превращаем введенный текст в настоящие числа для расчетов",theory:{summary:"Так как input() возвращает строку, операция '5' + '5' даст строку '55', а не число 10! Чтобы производить математические вычисления, введенную строку нужно обернуть в int() или float().",keyRule:"Для целых чисел используем int(input()), для дробных — float(input()).",sections:[{heading:"Сравнение: без int() и с int()",text:"Посмотрите, какая разница между сложением строк и сложением чисел:",codeExample:{title:"Оборачивание input в int",code:`# Неправильно для математики:
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
print(num ** 2)`,tests:[{inputs:["5"],expected:"25"},{inputs:["8"],expected:"64"},{inputs:["12"],expected:"144"}],codeCheck:o=>!/\bint\s*\(/.test(o)||!/\binput\s*\(/.test(o)?{passed:!1,message:"Преобразуй ввод в целое число: int(input(...))."}:/\*\*|pow|\*/.test(o)?null:{passed:!1,message:"Вычисли квадрат числа с помощью ** 2 или * num."},validate:(o,f)=>o.includes("int")?{passed:!0,message:"Отлично! Теперь ты умеешь считывать числа и производить с ними вычисления! 🧮"}:{passed:!1,message:"Не забудь использовать int() для превращения ввода в число."}}}]},{id:"module_math",title:"4. Арифметика и математические действия",description:"Сложение, вычитание, умножение, деление, целочисленное деление, остаток от деления и степень",icon:"Calculator",color:"#C4581D",lessons:[{id:"arithmetic_operators",moduleId:"module_math",title:"Арифметические операторы: +, -, *, /, //, %, **",icon:"Calculator",shortDesc:"Все математические знаки Python и их особенности",theory:{summary:"Python поддерживает все классические математические операции, а также деление нацело и остаток.",keyRule:"Обычное деление '/' ВСЕГДА возвращает float (даже 4 / 2 вернет 2.0). Деление нацело '//' отбрасывает дробь. Процент '%' находит остаток.",sections:[{heading:"Сводка операторов",text:`+ сложение (5 + 2 = 7)
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
print(a // b, a % b)`,tests:[{inputs:[],expected:"3 2"}],codeCheck:o=>/\/\//.test(o)?/%/.test(o)?null:{passed:!1,message:"Используй оператор остатка от деления %."}:{passed:!1,message:"Используй оператор целочисленного деления //."},validate:(o,f)=>f.trim()==="3 2"||f.includes("3")&&f.includes("2")?{passed:!0,message:"Превосходно! Ты освоил целочисленное деление и нахождение остатка! 📐"}:{passed:!1,message:"Ожидался вывод: 3 2",hint:"Проверь: 17 // 5 дает 3, а 17 % 5 дает 2."}}}]},{id:"module_conditions",title:"5. Условия и логика: if, elif, else",description:"Ветвление программ, проверка условий, операторы сравнения и логические связки",icon:"GitBranch",color:"#5636E0",lessons:[{id:"if_else_intro",moduleId:"module_conditions",title:"Условный оператор if и блок else",icon:"GitBranch",shortDesc:"Принятие решений в коде в зависимости от условия",theory:{summary:"Конструкция if позволяет выполнять блок кода только тогда, когда выполняется определённое условие (оно истинно — True). Если условие ложно (False), срабатывает блок else (иначе).",keyRule:"В конце строки с if и else ВСЕГДА ставится двоеточие ':', а команды внутри блока пишутся С ОТСТУПОМ в 4 пробела!",sections:[{heading:"Синтаксис и отступы",text:"Отступы в Python критически важны. По отступу Python понимает, какие строки принадлежат к условию.",codeExample:{title:"Проверка возраста",code:`age = 18

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
    print("Нужно пересдать.")`,tests:[{inputs:[],expected:"Экзамен сдан!"}],codeCheck:o=>/\bif\b/.test(o)?/\belse\s*:/.test(o)?/>=|>/.test(o)?null:{passed:!1,message:"Проверь условие score >= 50."}:{passed:!1,message:"В коде должен присутствовать блок else:."}:{passed:!1,message:"В коде должен быть условный оператор if."},validate:(o,f)=>!o.includes("if")||!o.includes("else")?{passed:!1,message:"Не найдена конструкция if и else."}:f.includes("Экзамен сдан")?{passed:!0,message:"Отлично! Условие сработало верно! 🎉"}:{passed:!1,message:"Вывод должен быть: 'Экзамен сдан!'"}}},{id:"elif_ladder",moduleId:"module_conditions",title:"Каскадные условия: elif",icon:"ListFilter",shortDesc:"Проверка нескольких условий по очереди",theory:{summary:"Когда вариантов больше двух, используется elif (сокращение от else if — 'иначе если'). Можно ставить сколько угодно блоков elif подряд.",keyRule:"Python проверяет условия сверху вниз. Как только найдено первое верное условие, его блок выполняется, а все остальные пропускаются.",sections:[{heading:"Пример шкалы оценок",text:"Разбор баллов на словесную оценку:",codeExample:{title:"Шкала баллов",code:`points = 75

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
    print("Нужно подучить")`,tests:[{inputs:[],expected:"Отлично"}],codeCheck:o=>/\bif\b/.test(o)?/\belif\b/.test(o)?/\belse\s*:/.test(o)?null:{passed:!1,message:"В коде должен присутствовать блок else:."}:{passed:!1,message:"В коде должен быть блок elif."}:{passed:!1,message:"В коде должен быть оператор if."},validate:(o,f)=>f.includes("Отлично")?{passed:!0,message:"Замечательно! Ты освоил разветвленные проверки с elif! 🌟"}:{passed:!1,message:"Ожидался вывод: 'Отлично'"}}}]},{id:"module_lists",title:"6. Списки (Lists)",description:"Коллекции элементов, квадратные скобки [], индексы с нуля и методы append, len, pop",icon:"ListOrdered",color:"#2F6FD0",lessons:[{id:"lists_basics",moduleId:"module_lists",title:"Создание списка и обращение по индексу",icon:"ListOrdered",shortDesc:"Храним несколько значений в одной переменной",theory:{summary:"Список (list) — это упорядоченная коллекция элементов в квадратных скобках []. Элементы перечисляются через запятую.",keyRule:"В программировании нумерация элементов (индексация) ВСЕГДА начинается с 0! Первый элемент имеет индекс [0], второй [1], третий [2].",sections:[{heading:"Индексы и доступ к элементам",text:"Чтобы достать нужный элемент из списка, пишем имя списка и в квадратных скобках номер индекса.",codeExample:{title:"Индексация элементов",code:`fruits = ["яблоко", "банан", "апельсин"]

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
Марс`}],codeCheck:o=>/\bplanets\s*=/.test(o)?/\bplanets\s*\[\s*0\s*\]/.test(o)?/\bplanets\s*\[\s*-1\s*\]/.test(o)?null:{passed:!1,message:"Получи последний элемент списка по индексу: planets[-1]."}:{passed:!1,message:"Получи первый элемент списка по индексу: planets[0]."}:{passed:!1,message:"Создай список planets."},validate:(o,f)=>{const m=f.includes("Меркурий"),d=f.includes("Марс");return m&&d?{passed:!0,message:"Отлично! Ты успешно получил доступ к элементам списка по индексам! 🪐"}:{passed:!1,message:"Вывод должен содержать 'Меркурий' и 'Марс'."}}}},{id:"lists_methods",moduleId:"module_lists",title:"Методы списков: append(), pop() и len()",icon:"PlusCircle",shortDesc:"Добавляем и удаляем элементы из списка",theory:{summary:"Списки можно изменять: добавлять в них новые элементы или удалять старые.",keyRule:"Метод .append(x) добавляет элемент x в конец списка. Метод .pop() удаляет последний элемент.",sections:[{heading:"Пример изменения списка",text:"Работа с инвентарем персонажа:",codeExample:{title:"Добавление и длина",code:`backpack = ["фонарик", "карта"]
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
print(numbers)`,tests:[{inputs:[],expected:"[10, 20, 30]"}],codeCheck:o=>(o.match(/\bnumbers\.append\s*\(/g)||[]).length<3?{passed:!1,message:"Добавь элементы с помощью трех вызовов numbers.append(...)."}:/\bprint\s*\(\s*numbers\s*\)/.test(o)?null:{passed:!1,message:"Выведи список через print(numbers)."},validate:(o,f)=>f.includes("10")&&f.includes("20")&&f.includes("30")?{passed:!0,message:"Отлично! Список [10, 20, 30] успешно сформирован с помощью append! 🚀"}:{passed:!1,message:"Ожидался список [10, 20, 30]"}}}]},{id:"module_loops",title:"7. Циклы: for и while",description:"Многократное повторение действий, обход коллекций и генератор чисел range()",icon:"Repeat",color:"#B0700C",lessons:[{id:"for_range",moduleId:"module_loops",title:"Цикл for и функция range()",icon:"Repeat",shortDesc:"Повторяем действие заданное число раз",theory:{summary:"Цикл for используется, когда нужно повторить блок кода известное число раз или перебрать все элементы в списке.",keyRule:"range(n) генерирует числа от 0 до n-1 (ровно n повторений). Например, range(5) даст числа: 0, 1, 2, 3, 4.",sections:[{heading:"Синтаксис цикла for",text:"Каждый шаг цикла называется 'итерацией'.",codeExample:{title:"Повторение 5 раз",code:`for i in range(5):
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
5`}],codeCheck:o=>/\bfor\b/.test(o)?/\brange\s*\(/.test(o)?null:{passed:!1,message:"Используй функцию range(1, 6)."}:{passed:!1,message:"Используй цикл for."},validate:(o,f,m)=>!o.includes("for")||!o.includes("range")?{passed:!1,message:"Используй цикл for и функцию range()."}:f.replace(/\s+/g," ").trim()==="1 2 3 4 5"||f.includes("1")&&f.includes("5")&&f.includes("3")?{passed:!0,message:"Превосходно! Ты освоил цикл for и range! 🔄"}:{passed:!1,message:"Ожидались числа 1, 2, 3, 4, 5."}}},{id:"while_loop",moduleId:"module_loops",title:"Цикл while (пока условие верно)",icon:"PlayCircle",shortDesc:"Повторение кода, пока выполняется условие",theory:{summary:"Цикл while работает до тех пор, пока его условие остаётся истинным (True). Как только условие становится ложным (False), цикл завершается.",keyRule:"Обязательно изменяйте переменную условия внутри цикла (например, count += 1), иначе цикл станет бесконечным и программа зависнет!",sections:[{heading:"Пример таймера",text:"Обратный отсчет:",codeExample:{title:"Отсчет с помощью while",code:`timer = 3
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
16`}],codeCheck:o=>/\bwhile\b/.test(o)?/\*=\s*2|\b=\s*n\s*\*\s*2/.test(o)?null:{passed:!1,message:"Умножай n на 2 внутри цикла: n *= 2."}:{passed:!1,message:"Используй цикл while."},validate:(o,f)=>o.includes("while")?f.includes("1")&&f.includes("2")&&f.includes("4")&&f.includes("16")?{passed:!0,message:"Отличная работа! Цикл while отработал безупречно! ⏱️"}:{passed:!1,message:"Ожидались числа: 1, 2, 4, 8, 16."}:{passed:!1,message:"В коде должен использоваться цикл while."}}}]},{id:"module_functions",title:"8. Функции: def и return",description:"Создание собственных переиспользуемых функций, параметры и возврат значений",icon:"Code2",color:"#0A7A50",lessons:[{id:"func_intro",moduleId:"module_functions",title:"Объявление функции через def",icon:"Code2",shortDesc:"Учимся объединять команды в именованную функцию",theory:{summary:"Функция — это обособленный блок кода, которому мы даем имя. Функцию можно вызывать многократно из разных мест программы.",keyRule:"Функция объявляется ключевым словом def, затем имя_функции(параметры):. Оператор return возвращает результат работы функции.",sections:[{heading:"Как создать и вызвать функцию",text:"Объявление функции не запускает её сразу — оно лишь учит компьютер новому действию. Чтобы код сработал, функцию нужно вызвать по имени со скобками.",codeExample:{title:"Функция сложения двух чисел",code:`def add(a, b):
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
assert square(10) == 100, "square(10) должна возвращать 100"`,validate:(o,f)=>!o.includes("def")||!o.includes("return")?{passed:!1,message:"Функция должна быть объявлена через def и возвращать значение через return."}:f.trim()==="36"||f.includes("36")?{passed:!0,message:"Великолепно! Ты создал свою первую функцию в Python! 🎯"}:{passed:!1,message:"Ожидался вывод: 36"}}}]},{id:"module_tkinter",title:"9. Графический интерфейс с Tkinter",description:"Создание оконных приложений (GUI): виджеты, JSON, музыкальный плеер, классы в драм-машине и пошаговый секвенсор",icon:"AppWindow",color:"#5636E0",lessons:wx}];function _x(o){for(const f of wr)for(const m of f.lessons)if(m.id===o)return m;return null}function mc(){const o=[];for(const f of wr)for(const m of f.lessons)o.push(m);return o}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ex=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(f,m,d)=>d?d.toUpperCase():m.toLowerCase()),Wm=o=>{const f=Ex(o);return f.charAt(0).toUpperCase()+f.slice(1)},f0=(...o)=>o.filter((f,m,d)=>!!f&&f.trim()!==""&&d.indexOf(f)===m).join(" ").trim(),Sx=o=>{for(const f in o)if(f.startsWith("aria-")||f==="role"||f==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Nx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=ne.forwardRef(({color:o="currentColor",size:f=24,strokeWidth:m=2,absoluteStrokeWidth:d,className:j="",children:R,iconNode:W,...w},q)=>ne.createElement("svg",{ref:q,...Nx,width:f,height:f,stroke:o,strokeWidth:d?Number(m)*24/Number(f):m,className:f0("lucide",j),...!R&&!Sx(w)&&{"aria-hidden":"true"},...w},[...W.map(([ae,$])=>ne.createElement(ae,$)),...Array.isArray(R)?R:[R]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=(o,f)=>{const m=ne.forwardRef(({className:d,...j},R)=>ne.createElement(Tx,{ref:R,iconNode:f,className:f0(`lucide-${kx(Wm(o))}`,`lucide-${o}`,d),...j}));return m.displayName=Wm(o),m};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]],p0=he("app-window",Ax);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],br=he("arrow-left",jx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Pm=he("arrow-right",Cx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Er=he("book-open",Dx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Ox=he("box",Mx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Bx=he("calculator",zx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Gi=he("check",Lx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Rx=he("chevron-down",Fx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],qx=he("circle-alert",Ux);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ha=he("circle-check",Hx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Vx=he("circle-play",Gx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],Qx=he("circle-plus",Yx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],m0=he("circle-question-mark",Xx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],e0=he("circle-x",Zx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],wl=he("code-xml",Kx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Sr=he("copy",$x);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],uc=he("corner-down-left",Jx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Wx=he("cpu",Ix);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],ey=he("download",Px);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]],ny=he("file-code",ty);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],t0=he("file-text",ly);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],hc=he("folder-open",ay);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],sy=he("git-branch",iy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],oy=he("hash",ry);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],cy=he("info",uy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],fy=he("keyboard",dy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],my=he("layers",py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],gy=he("lightbulb",hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M9 19h6",key:"456am0"}]],yy=he("list-filter",xy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]],vy=he("list-ordered",by);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],_y=he("mail",wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Ey=he("message-square",ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]],Ny=he("mouse-pointer-click",Sy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Ay=he("music",Ty);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Cy=he("package",jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],My=he("panels-top-left",Dy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Vi=he("play",Oy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],n0=he("plus",zy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],Ly=he("repeat",By);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],gc=he("rotate-ccw",Fy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Ga=he("search",Ry);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],_r=he("sparkles",Uy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],xc=he("square",qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],sc=he("target",Hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Yi=he("terminal",Gy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Qi=he("trash-2",Vy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],cc=he("triangle-alert",Yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],h0=he("trophy",Qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Zy=he("upload",Xy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],$y=he("volume-2",Ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Iy=he("volume-x",Jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],dc=he("x",Wy);let qa=null,Vn=!0;function Xi(){if(typeof window>"u")return null;if(!qa){const o=window.AudioContext||window.webkitAudioContext;o&&(qa=new o)}return qa&&qa.state==="suspended"&&qa.resume(),qa}function Py(o){return Vn=!Vn,Vn}function e1(){return Vn}function Gn(){if(Vn)try{const o=Xi();if(!o)return;const f=o.createOscillator(),m=o.createGain();f.type="sine",f.frequency.setValueAtTime(700,o.currentTime),f.frequency.exponentialRampToValueAtTime(280,o.currentTime+.05),m.gain.setValueAtTime(.07,o.currentTime),m.gain.exponentialRampToValueAtTime(.001,o.currentTime+.05),f.connect(m),m.connect(o.destination),f.start(),f.stop(o.currentTime+.05)}catch{}}function rc(){if(Vn)try{const o=Xi();if(!o)return;const f=o.createOscillator(),m=o.createGain();f.type="sawtooth",f.frequency.setValueAtTime(160,o.currentTime),f.frequency.exponentialRampToValueAtTime(50,o.currentTime+.25),m.gain.setValueAtTime(.2,o.currentTime),m.gain.exponentialRampToValueAtTime(.001,o.currentTime+.25),f.connect(m),m.connect(o.destination),f.start(),f.stop(o.currentTime+.25)}catch{}}function vr(){if(Vn)try{const o=Xi();if(!o)return;[523.25,659.25,783.99,1046.5].forEach((m,d)=>{const j=o.currentTime+d*.09,R=o.createOscillator(),W=o.createGain();R.type="triangle",R.frequency.setValueAtTime(m,j),W.gain.setValueAtTime(.14,j),W.gain.exponentialRampToValueAtTime(.001,j+.45),R.connect(W),W.connect(o.destination),R.start(j),R.stop(j+.45)})}catch{}}function _n(){if(Vn)try{const o=Xi();if(!o)return;const f=o.createOscillator(),m=o.createGain();f.type="sine";const d=o.currentTime;f.frequency.setValueAtTime(800,d),f.frequency.exponentialRampToValueAtTime(1400,d+.04),m.gain.setValueAtTime(.15,d),m.gain.exponentialRampToValueAtTime(.001,d+.05),f.connect(m),m.connect(o.destination),f.start(d),f.stop(d+.05)}catch{}}function t1(o,f=1){if(!Vn)return;const m=Math.max(0,Math.min(1,f));if(!(m<=0))try{const d=Xi();if(!d)return;const j=d.currentTime,R=o.toLowerCase(),W=(w,q,ae,$,S=0)=>{const T=Math.max(1,Math.floor(d.sampleRate*w)),re=d.createBuffer(1,T,d.sampleRate),ue=re.getChannelData(0);for(let N=0;N<T;N++)ue[N]=Math.random()*2-1;const A=d.createBufferSource();A.buffer=re;const z=d.createBiquadFilter();z.type=q,z.frequency.setValueAtTime(ae,j+S);const ee=d.createGain();ee.gain.setValueAtTime($*m,j+S),ee.gain.exponentialRampToValueAtTime(.001,j+S+w),A.connect(z),z.connect(ee),ee.connect(d.destination),A.start(j+S),A.stop(j+S+w)};if(R.includes("kick")){const w=d.createOscillator(),q=d.createGain();w.type="sine",w.frequency.setValueAtTime(150,j),w.frequency.exponentialRampToValueAtTime(42,j+.16),q.gain.setValueAtTime(.45*m,j),q.gain.exponentialRampToValueAtTime(.001,j+.18),w.connect(q),q.connect(d.destination),w.start(j),w.stop(j+.18)}else if(R.includes("snare")){W(.14,"highpass",1e3,.25);const w=d.createOscillator(),q=d.createGain();w.type="triangle",w.frequency.setValueAtTime(190,j),w.frequency.exponentialRampToValueAtTime(90,j+.08),q.gain.setValueAtTime(.22*m,j),q.gain.exponentialRampToValueAtTime(.001,j+.09),w.connect(q),q.connect(d.destination),w.start(j),w.stop(j+.09)}else if(R.includes("hat"))W(.06,"highpass",6500,.18);else if(R.includes("clap"))W(.03,"bandpass",1800,.22,0),W(.03,"bandpass",1800,.22,.012),W(.12,"bandpass",1600,.26,.024);else if(R.includes("tom")){const w=d.createOscillator(),q=d.createGain();w.type="sine",w.frequency.setValueAtTime(210,j),w.frequency.exponentialRampToValueAtTime(85,j+.18),q.gain.setValueAtTime(.35*m,j),q.gain.exponentialRampToValueAtTime(.001,j+.19),w.connect(q),q.connect(d.destination),w.start(j),w.stop(j+.19)}else if(R.includes("crash"))W(.45,"highpass",4200,.22);else if(R.includes("perc")){const w=d.createOscillator(),q=d.createGain();w.type="triangle",w.frequency.setValueAtTime(760,j),w.frequency.exponentialRampToValueAtTime(480,j+.07),q.gain.setValueAtTime(.24*m,j),q.gain.exponentialRampToValueAtTime(.001,j+.08),w.connect(q),q.connect(d.destination),w.start(j),w.stop(j+.08)}else if(R.includes("bass")){const w=d.createOscillator(),q=d.createBiquadFilter(),ae=d.createGain();w.type="sawtooth",w.frequency.setValueAtTime(110,j),w.frequency.exponentialRampToValueAtTime(55,j+.22),q.type="lowpass",q.frequency.setValueAtTime(480,j),ae.gain.setValueAtTime(.3*m,j),ae.gain.exponentialRampToValueAtTime(.001,j+.24),w.connect(q),q.connect(ae),ae.connect(d.destination),w.start(j),w.stop(j+.24)}else if(R.includes("cowbell")){const w=d.createBiquadFilter();w.type="bandpass",w.frequency.setValueAtTime(750,j);const q=d.createGain();q.gain.setValueAtTime(.22*m,j),q.gain.exponentialRampToValueAtTime(.001,j+.16),w.connect(q),q.connect(d.destination),[540,800].forEach(ae=>{const $=d.createOscillator();$.type="square",$.frequency.setValueAtTime(ae,j),$.connect(w),$.start(j),$.stop(j+.16)})}else{const w=d.createOscillator(),q=d.createGain();w.type="sine",w.frequency.setValueAtTime(440,j),w.frequency.exponentialRampToValueAtTime(220,j+.1),q.gain.setValueAtTime(.25*m,j),q.gain.exponentialRampToValueAtTime(.001,j+.11),w.connect(q),q.connect(d.destination),w.start(j),w.stop(j+.11)}}catch{}}const n1=({currentTab:o,onSelectTab:f,solvedCount:m,totalCount:d,soundEnabled:j,onToggleSound:R,onResetProgress:W})=>s.jsx("nav",{className:"bg-white border-b border-[#E3E3E9] sticky top-0 z-40 px-3 md:px-6 py-3 font-mono select-none",children:s.jsxs("div",{className:"max-w-[1360px] mx-auto flex items-center justify-between gap-4 flex-wrap",children:[s.jsxs("div",{onClick:()=>{_n(),f("lessons")},className:"flex items-center gap-3 cursor-pointer group",children:[s.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-br from-[#0A54C4] via-[#5636E0] to-[#F5A800] p-0.5 shadow-xs",children:s.jsx("div",{className:"w-full h-full bg-[#12121A] rounded-[10px] flex items-center justify-center",children:s.jsx(Yi,{className:"w-4 h-4 text-[#4FF0A7] group-hover:scale-110 transition-transform"})})}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsx("span",{className:"text-[16px] font-black tracking-tight text-[#0B0B0F]",children:"Python"}),s.jsx("span",{className:"text-[16px] font-black tracking-tight text-[#0A54C4]",children:"Станция"})]}),s.jsx("div",{className:"text-[10px] font-bold text-[#63636E] uppercase tracking-wider",children:"Курс и Справочник"})]})]}),s.jsxs("div",{className:"flex items-center gap-1 bg-[#F1F1F4] p-1 rounded-xl border border-[#E3E3E9]",children:[s.jsxs("button",{onClick:()=>{_n(),f("lessons")},className:`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${o==="lessons"?"bg-white text-[#0B0B0F] shadow-xs":"text-[#63636E] hover:text-[#0B0B0F]"}`,children:[s.jsx(Er,{className:"w-3.5 h-3.5 text-[#0A54C4]"}),s.jsx("span",{children:"Уроки"})]}),s.jsxs("button",{onClick:()=>{_n(),f("handbook")},className:`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${o==="handbook"?"bg-white text-[#0B0B0F] shadow-xs":"text-[#63636E] hover:text-[#0B0B0F]"}`,children:[s.jsx(Ga,{className:"w-3.5 h-3.5 text-[#B0700C]"}),s.jsx("span",{children:"Справочник функций"})]}),s.jsxs("button",{onClick:()=>{_n(),f("sandbox")},className:`px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${o==="sandbox"?"bg-white text-[#0B0B0F] shadow-xs":"text-[#63636E] hover:text-[#0B0B0F]"}`,children:[s.jsx(wl,{className:"w-3.5 h-3.5 text-[#0A7A50]"}),s.jsx("span",{children:"Песочница"})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("div",{className:"hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F1F1F4] border border-[#E3E3E9] text-[11.5px] font-bold text-[#63636E]",children:[s.jsx(h0,{className:"w-3.5 h-3.5 text-[#F5A800]"}),s.jsxs("span",{children:["Пройдено: ",s.jsxs("strong",{className:"text-[#0B0B0F]",children:[m,"/",d]})]})]}),s.jsx("button",{onClick:R,className:"p-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#63636E] hover:text-[#0B0B0F] transition-colors cursor-pointer",title:j?"Выключить звук":"Включить звук",children:j?s.jsx($y,{className:"w-4 h-4 text-[#0A7A50]"}):s.jsx(Iy,{className:"w-4 h-4"})}),s.jsx("button",{onClick:W,className:"p-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#63636E] hover:text-[#D4126C] transition-colors cursor-pointer",title:"Сбросить прогресс",children:s.jsx(gc,{className:"w-4 h-4"})})]})]})}),l1={Terminal:Yi,Layers:my,Box:Ox,RotateCcw:gc,Cpu:Wx,Keyboard:fy,Hash:oy,Calculator:Bx,GitBranch:sy,ListFilter:yy,ListOrdered:vy,PlusCircle:Qx,Repeat:Ly,PlayCircle:Vx,Code2:wl,AppWindow:p0,Layout:My,MousePointerClick:Ny,Music:Ay},a1=({solvedLessons:o,onSelectLesson:f,onOpenHandbook:m,onOpenSandbox:d})=>{const j=mc(),R=j.length,W=o.length,w=R>0?Math.round(W/R*100):0;return s.jsxs("div",{className:"max-w-[1360px] mx-auto p-3 md:p-6 space-y-6 font-mono select-none",children:[s.jsxs("div",{className:"bg-gradient-to-br from-[#0B0B14] via-[#161626] to-[#251A4A] text-white p-6 md:p-8 rounded-3xl border border-[#2C2C3A] shadow-lg relative overflow-hidden",children:[s.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-[#5636E0]/20 rounded-full blur-3xl pointer-events-none"}),s.jsx("div",{className:"absolute bottom-0 left-1/3 w-72 h-72 bg-[#0A54C4]/20 rounded-full blur-3xl pointer-events-none"}),s.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",children:[s.jsxs("div",{className:"space-y-3 max-w-2xl",children:[s.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-[11px] font-bold tracking-wide backdrop-blur-xs",children:[s.jsx(_r,{className:"w-3.5 h-3.5 text-[#F5A800]"}),s.jsx("span",{children:"Интерактивная станция Python 3"})]}),s.jsx("h1",{className:"text-[24px] md:text-[32px] font-black tracking-tight leading-tight",children:"Практический курс Python с нуля"}),s.jsx("p",{className:"text-[13px] md:text-[14px] text-[#A0A0B2] leading-relaxed",children:"Теория с живыми примерами и мгновенная проверка кода в браузере. Выполняй задания, получай подсказки и изучай встроенные функции."}),s.jsxs("div",{className:"flex items-center gap-3 pt-2 flex-wrap",children:[s.jsxs("button",{onClick:()=>{_n();const q=j.find(ae=>!o.includes(ae.id))||j[0];q&&f(q.id)},className:"px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0A54C4] to-[#0A7A50] text-white font-black text-[13px] flex items-center gap-2 hover:brightness-110 active:scale-98 transition-all cursor-pointer shadow-md",children:[s.jsx(Vi,{className:"w-4 h-4 fill-white"}),s.jsx("span",{children:W===0?"Начать первый урок":"Продолжить обучение"})]}),s.jsxs("button",{onClick:()=>{_n(),m()},className:"px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-[13px] flex items-center gap-2 transition-all cursor-pointer border border-white/10",children:[s.jsx(Ga,{className:"w-4 h-4 text-[#F5A800]"}),s.jsx("span",{children:"Поиск по функциям"})]}),s.jsxs("button",{onClick:()=>{_n(),d()},className:"px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-[13px] flex items-center gap-2 transition-all cursor-pointer border border-white/10",children:[s.jsx(wl,{className:"w-4 h-4 text-[#4FF0A7]"}),s.jsx("span",{children:"Песочница Python"})]})]})]}),s.jsxs("div",{className:"w-full md:w-72 bg-white/10 backdrop-blur-md border border-white/15 p-5 rounded-2xl space-y-3.5",children:[s.jsxs("div",{className:"flex items-center justify-between text-[12px] font-bold",children:[s.jsxs("span",{className:"flex items-center gap-1.5 text-white/90",children:[s.jsx(h0,{className:"w-4 h-4 text-[#F5A800]"}),s.jsx("span",{children:"Твой прогресс"})]}),s.jsxs("span",{className:"text-[#4FF0A7] font-black",children:[w,"%"]})]}),s.jsx("div",{className:"w-full h-2.5 bg-black/40 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-[#0A54C4] to-[#4FF0A7] transition-all duration-500 rounded-full",style:{width:`${w}%`}})}),s.jsxs("div",{className:"text-[11.5px] text-white/70 flex items-center justify-between",children:[s.jsx("span",{children:"Решено заданий:"}),s.jsxs("strong",{className:"text-white",children:[W," из ",R]})]})]})]})]}),s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("h2",{className:"text-[20px] font-black text-[#0B0B0F]",children:"Программа уроков"}),s.jsxs("span",{className:"text-[12px] font-bold text-[#63636E]",children:[wr.length," модулей · ",R," уроков с проверкой"]})]}),s.jsx("div",{className:"space-y-5",children:wr.map((q,ae)=>{const $=q.lessons.filter(T=>o.includes(T.id)).length,S=$===q.lessons.length;return s.jsxs("div",{className:"bg-white border-[1.5px] border-[#E3E3E9] rounded-2xl p-5 md:p-6 shadow-xs space-y-4",children:[s.jsxs("div",{className:"flex items-center justify-between gap-3 flex-wrap border-b border-[#E3E3E9] pb-3.5",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-xl text-white flex items-center justify-center font-black text-[15px] shadow-xs",style:{backgroundColor:q.color},children:ae+1}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-[17px] font-black text-[#0B0B0F]",children:q.title}),s.jsx("p",{className:"text-[12px] text-[#63636E]",children:q.description})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("span",{className:"text-[11.5px] font-bold text-[#63636E] bg-[#F1F1F4] px-3 py-1 rounded-lg",children:[$," / ",q.lessons.length," пройдено"]}),S&&s.jsxs("span",{className:"text-[11.5px] font-extrabold text-[#0A7A50] bg-[#0A7A50]/15 px-2.5 py-1 rounded-lg flex items-center gap-1",children:[s.jsx(Ha,{className:"w-3.5 h-3.5"}),"Завершен"]})]})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:q.lessons.map(T=>{const re=o.includes(T.id),ue=l1[T.icon]||wl;return s.jsxs("div",{onClick:()=>{_n(),f(T.id)},className:`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between group ${re?"bg-[#F7FBF8] border-[#0A7A50]/30 hover:border-[#0A7A50]":"bg-[#F7F7FA] border-[#E3E3E9] hover:bg-white hover:border-[#0A54C4] hover:shadow-xs"}`,children:[s.jsxs("div",{className:"space-y-2.5",children:[s.jsxs("div",{className:"flex items-start justify-between gap-2",children:[s.jsx("div",{className:"w-8 h-8 rounded-lg bg-white border border-[#E3E3E9] flex items-center justify-center group-hover:border-[#0A54C4] transition-colors shadow-2xs",children:s.jsx(ue,{className:"w-4 h-4 text-[#0A54C4]"})}),re?s.jsxs("span",{className:"flex items-center gap-1 text-[11px] font-extrabold text-[#0A7A50] bg-[#0A7A50]/15 px-2 py-0.5 rounded-md",children:[s.jsx(Ha,{className:"w-3 h-3"}),"Решено"]}):s.jsx("span",{className:"text-[10.5px] font-bold text-[#63636E] bg-[#E3E3E9]/60 px-2 py-0.5 rounded-md",children:"Новое"})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-[14px] font-black text-[#0B0B0F] group-hover:text-[#0A54C4] transition-colors",children:T.title}),s.jsx("p",{className:"text-[12px] text-[#63636E] leading-relaxed mt-1 line-clamp-2",children:T.shortDesc})]})]}),s.jsx("div",{className:"pt-3 mt-3 border-t border-[#E3E3E9]/80 flex items-center justify-between text-[11.5px] font-bold text-[#0A54C4] group-hover:underline",children:s.jsx("span",{children:re?"Повторить урок →":"Открыть урок →"})})]},T.id)})})]},q.id)})})]})]})};var yc={};(function o(f,m,d,j){var R=!!(f.Worker&&f.Blob&&f.Promise&&f.OffscreenCanvas&&f.OffscreenCanvasRenderingContext2D&&f.HTMLCanvasElement&&f.HTMLCanvasElement.prototype.transferControlToOffscreen&&f.URL&&f.URL.createObjectURL),W=typeof Path2D=="function"&&typeof DOMMatrix=="function",w=(function(){if(!f.OffscreenCanvas)return!1;try{var _=new OffscreenCanvas(1,1),y=_.getContext("2d");y.fillRect(0,0,1,1);var H=_.transferToImageBitmap();y.createPattern(H,"no-repeat")}catch{return!1}return!0})();function q(){}function ae(_){var y=m.exports.Promise,H=y!==void 0?y:f.Promise;return typeof H=="function"?new H(_):(_(q,q),null)}var $=(function(_,y){return{transform:function(H){if(_)return H;if(y.has(H))return y.get(H);var h=new OffscreenCanvas(H.width,H.height),c=h.getContext("2d");return c.drawImage(H,0,0),y.set(H,h),h},clear:function(){y.clear()}}})(w,new Map),S=(function(){var _=Math.floor(16.666666666666668),y,H,h={},c=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(y=function(g){var C=Math.random();return h[C]=requestAnimationFrame(function L(Z){c===Z||c+_-1<Z?(c=Z,delete h[C],g()):h[C]=requestAnimationFrame(L)}),C},H=function(g){h[g]&&cancelAnimationFrame(h[g])}):(y=function(g){return setTimeout(g,_)},H=function(g){return clearTimeout(g)}),{frame:y,cancel:H}})(),T=(function(){var _,y,H={};function h(c){function g(C,L){c.postMessage({options:C||{},callback:L})}c.init=function(L){var Z=L.transferControlToOffscreen();c.postMessage({canvas:Z},[Z])},c.fire=function(L,Z,te){if(y)return g(L,null),y;var I=Math.random().toString(36).slice(2);return y=ae(function(G){function J(xe){xe.data.callback===I&&(delete H[I],c.removeEventListener("message",J),y=null,$.clear(),te(),G())}c.addEventListener("message",J),g(L,I),H[I]=J.bind(null,{data:{callback:I}})}),y},c.reset=function(){c.postMessage({reset:!0});for(var L in H)H[L](),delete H[L]}}return function(){if(_)return _;if(!d&&R){var c=["var CONFETTI, SIZE = {}, module = {};","("+o.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{_=new Worker(URL.createObjectURL(new Blob([c])))}catch(g){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",g),null}h(_)}return _}})(),re={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function ue(_,y){return y?y(_):_}function A(_){return _!=null}function z(_,y,H){return ue(_&&A(_[y])?_[y]:re[y],H)}function ee(_){return _<0?0:Math.floor(_)}function N(_,y){return Math.floor(Math.random()*(y-_))+_}function b(_){return parseInt(_,16)}function U(_){return _.map(B)}function B(_){var y=String(_).replace(/[^0-9a-f]/gi,"");return y.length<6&&(y=y[0]+y[0]+y[1]+y[1]+y[2]+y[2]),{r:b(y.substring(0,2)),g:b(y.substring(2,4)),b:b(y.substring(4,6))}}function F(_){var y=z(_,"origin",Object);return y.x=z(y,"x",Number),y.y=z(y,"y",Number),y}function V(_){_.width=document.documentElement.clientWidth,_.height=document.documentElement.clientHeight}function le(_){var y=_.getBoundingClientRect();_.width=y.width,_.height=y.height}function X(_){var y=document.createElement("canvas");return y.style.position="fixed",y.style.top="0px",y.style.left="0px",y.style.pointerEvents="none",y.style.zIndex=_,y}function me(_,y,H,h,c,g,C,L,Z){_.save(),_.translate(y,H),_.rotate(g),_.scale(h,c),_.arc(0,0,1,C,L,Z),_.restore()}function we(_){var y=_.angle*(Math.PI/180),H=_.spread*(Math.PI/180);return{x:_.x,y:_.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:_.startVelocity*.5+Math.random()*_.startVelocity,angle2D:-y+(.5*H-Math.random()*H),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:_.color,shape:_.shape,tick:0,totalTicks:_.ticks,decay:_.decay,drift:_.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:_.gravity*3,ovalScalar:.6,scalar:_.scalar,flat:_.flat}}function Ae(_,y){y.x+=Math.cos(y.angle2D)*y.velocity+y.drift,y.y+=Math.sin(y.angle2D)*y.velocity+y.gravity,y.velocity*=y.decay,y.flat?(y.wobble=0,y.wobbleX=y.x+10*y.scalar,y.wobbleY=y.y+10*y.scalar,y.tiltSin=0,y.tiltCos=0,y.random=1):(y.wobble+=y.wobbleSpeed,y.wobbleX=y.x+10*y.scalar*Math.cos(y.wobble),y.wobbleY=y.y+10*y.scalar*Math.sin(y.wobble),y.tiltAngle+=.1,y.tiltSin=Math.sin(y.tiltAngle),y.tiltCos=Math.cos(y.tiltAngle),y.random=Math.random()+2);var H=y.tick++/y.totalTicks,h=y.x+y.random*y.tiltCos,c=y.y+y.random*y.tiltSin,g=y.wobbleX+y.random*y.tiltCos,C=y.wobbleY+y.random*y.tiltSin;if(_.fillStyle="rgba("+y.color.r+", "+y.color.g+", "+y.color.b+", "+(1-H)+")",_.beginPath(),W&&y.shape.type==="path"&&typeof y.shape.path=="string"&&Array.isArray(y.shape.matrix))_.fill(fe(y.shape.path,y.shape.matrix,y.x,y.y,Math.abs(g-h)*.1,Math.abs(C-c)*.1,Math.PI/10*y.wobble));else if(y.shape.type==="bitmap"){var L=Math.PI/10*y.wobble,Z=Math.abs(g-h)*.1,te=Math.abs(C-c)*.1,I=y.shape.bitmap.width*y.scalar,G=y.shape.bitmap.height*y.scalar,J=new DOMMatrix([Math.cos(L)*Z,Math.sin(L)*Z,-Math.sin(L)*te,Math.cos(L)*te,y.x,y.y]);J.multiplySelf(new DOMMatrix(y.shape.matrix));var xe=_.createPattern($.transform(y.shape.bitmap),"no-repeat");xe.setTransform(J),_.globalAlpha=1-H,_.fillStyle=xe,_.fillRect(y.x-I/2,y.y-G/2,I,G),_.globalAlpha=1}else if(y.shape==="circle")_.ellipse?_.ellipse(y.x,y.y,Math.abs(g-h)*y.ovalScalar,Math.abs(C-c)*y.ovalScalar,Math.PI/10*y.wobble,0,2*Math.PI):me(_,y.x,y.y,Math.abs(g-h)*y.ovalScalar,Math.abs(C-c)*y.ovalScalar,Math.PI/10*y.wobble,0,2*Math.PI);else if(y.shape==="star")for(var ye=Math.PI/2*3,Me=4*y.scalar,Re=8*y.scalar,je=y.x,ve=y.y,Ie=5,ut=Math.PI/Ie;Ie--;)je=y.x+Math.cos(ye)*Re,ve=y.y+Math.sin(ye)*Re,_.lineTo(je,ve),ye+=ut,je=y.x+Math.cos(ye)*Me,ve=y.y+Math.sin(ye)*Me,_.lineTo(je,ve),ye+=ut;else _.moveTo(Math.floor(y.x),Math.floor(y.y)),_.lineTo(Math.floor(y.wobbleX),Math.floor(c)),_.lineTo(Math.floor(g),Math.floor(C)),_.lineTo(Math.floor(h),Math.floor(y.wobbleY));return _.closePath(),_.fill(),y.tick<y.totalTicks}function Qe(_,y,H,h,c){var g=y.slice(),C=_.getContext("2d"),L,Z,te=ae(function(I){function G(){L=Z=null,C.clearRect(0,0,h.width,h.height),$.clear(),c(),I()}function J(){d&&!(h.width===j.width&&h.height===j.height)&&(h.width=_.width=j.width,h.height=_.height=j.height),!h.width&&!h.height&&(H(_),h.width=_.width,h.height=_.height),C.clearRect(0,0,h.width,h.height),g=g.filter(function(xe){return Ae(C,xe)}),g.length?L=S.frame(J):G()}L=S.frame(J),Z=G});return{addFettis:function(I){return g=g.concat(I),te},canvas:_,promise:te,reset:function(){L&&S.cancel(L),Z&&Z()}}}function Le(_,y){var H=!_,h=!!z(y||{},"resize"),c=!1,g=z(y,"disableForReducedMotion",Boolean),C=R&&!!z(y||{},"useWorker"),L=C?T():null,Z=H?V:le,te=_&&L?!!_.__confetti_initialized:!1,I=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,G;function J(ye,Me,Re){for(var je=z(ye,"particleCount",ee),ve=z(ye,"angle",Number),Ie=z(ye,"spread",Number),ut=z(ye,"startVelocity",Number),jt=z(ye,"decay",Number),kn=z(ye,"gravity",Number),Yn=z(ye,"drift",Number),tn=z(ye,"colors",U),Qn=z(ye,"ticks",Number),En=z(ye,"shapes"),_l=z(ye,"scalar"),Sn=!!z(ye,"flat"),kt=F(ye),Nn=je,un=[],kl=_.width*kt.x,El=_.height*kt.y;Nn--;)un.push(we({x:kl,y:El,angle:ve,spread:Ie,startVelocity:ut,color:tn[Nn%tn.length],shape:En[N(0,En.length)],ticks:Qn,decay:jt,gravity:kn,drift:Yn,scalar:_l,flat:Sn}));return G?G.addFettis(un):(G=Qe(_,un,Z,Me,Re),G.promise)}function xe(ye){var Me=g||z(ye,"disableForReducedMotion",Boolean),Re=z(ye,"zIndex",Number);if(Me&&I)return ae(function(ut){ut()});H&&G?_=G.canvas:H&&!_&&(_=X(Re),document.body.appendChild(_)),h&&!te&&Z(_);var je={width:_.width,height:_.height};L&&!te&&L.init(_),te=!0,L&&(_.__confetti_initialized=!0);function ve(){if(L){var ut={getBoundingClientRect:function(){if(!H)return _.getBoundingClientRect()}};Z(ut),L.postMessage({resize:{width:ut.width,height:ut.height}});return}je.width=je.height=null}function Ie(){G=null,h&&(c=!1,f.removeEventListener("resize",ve)),H&&_&&(document.body.contains(_)&&document.body.removeChild(_),_=null,te=!1)}return h&&!c&&(c=!0,f.addEventListener("resize",ve,!1)),L?L.fire(ye,je,Ie):J(ye,je,Ie)}return xe.reset=function(){L&&L.reset(),G&&G.reset()},xe}var Ne;function P(){return Ne||(Ne=Le(null,{useWorker:!0,resize:!0})),Ne}function fe(_,y,H,h,c,g,C){var L=new Path2D(_),Z=new Path2D;Z.addPath(L,new DOMMatrix(y));var te=new Path2D;return te.addPath(Z,new DOMMatrix([Math.cos(C)*c,Math.sin(C)*c,-Math.sin(C)*g,Math.cos(C)*g,H,h])),te}function se(_){if(!W)throw new Error("path confetti are not supported in this browser");var y,H;typeof _=="string"?y=_:(y=_.path,H=_.matrix);var h=new Path2D(y),c=document.createElement("canvas"),g=c.getContext("2d");if(!H){for(var C=1e3,L=C,Z=C,te=0,I=0,G,J,xe=0;xe<C;xe+=2)for(var ye=0;ye<C;ye+=2)g.isPointInPath(h,xe,ye,"nonzero")&&(L=Math.min(L,xe),Z=Math.min(Z,ye),te=Math.max(te,xe),I=Math.max(I,ye));G=te-L,J=I-Z;var Me=10,Re=Math.min(Me/G,Me/J);H=[Re,0,0,Re,-Math.round(G/2+L)*Re,-Math.round(J/2+Z)*Re]}return{type:"path",path:y,matrix:H}}function ge(_){var y,H=1,h="#000000",c='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof _=="string"?y=_:(y=_.text,H="scalar"in _?_.scalar:H,c="fontFamily"in _?_.fontFamily:c,h="color"in _?_.color:h);var g=10*H,C=""+g+"px "+c,L=new OffscreenCanvas(g,g),Z=L.getContext("2d");Z.font=C;var te=Z.measureText(y),I=Math.ceil(te.actualBoundingBoxRight+te.actualBoundingBoxLeft),G=Math.ceil(te.actualBoundingBoxAscent+te.actualBoundingBoxDescent),J=2,xe=te.actualBoundingBoxLeft+J,ye=te.actualBoundingBoxAscent+J;I+=J+J,G+=J+J,L=new OffscreenCanvas(I,G),Z=L.getContext("2d"),Z.font=C,Z.fillStyle=h,Z.fillText(y,xe,ye);var Me=1/H;return{type:"bitmap",bitmap:L.transferToImageBitmap(),matrix:[Me,0,0,Me,-I*Me/2,-G*Me/2]}}m.exports=function(){return P().apply(this,arguments)},m.exports.reset=function(){P().reset()},m.exports.create=Le,m.exports.shapeFromPath=se,m.exports.shapeFromText=ge})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),yc,!1);const i1=yc.exports;yc.exports.create;var oc={exports:{}},l0;function s1(){return l0||(l0=1,(function(o){var f=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var m=(function(d){var j=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,R=0,W={},w={manual:d.Prism&&d.Prism.manual,disableWorkerMessageHandler:d.Prism&&d.Prism.disableWorkerMessageHandler,util:{encode:function N(b){return b instanceof q?new q(b.type,N(b.content),b.alias):Array.isArray(b)?b.map(N):b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(N){return Object.prototype.toString.call(N).slice(8,-1)},objId:function(N){return N.__id||Object.defineProperty(N,"__id",{value:++R}),N.__id},clone:function N(b,U){U=U||{};var B,F;switch(w.util.type(b)){case"Object":if(F=w.util.objId(b),U[F])return U[F];B={},U[F]=B;for(var V in b)b.hasOwnProperty(V)&&(B[V]=N(b[V],U));return B;case"Array":return F=w.util.objId(b),U[F]?U[F]:(B=[],U[F]=B,b.forEach(function(le,X){B[X]=N(le,U)}),B);default:return b}},getLanguage:function(N){for(;N;){var b=j.exec(N.className);if(b)return b[1].toLowerCase();N=N.parentElement}return"none"},setLanguage:function(N,b){N.className=N.className.replace(RegExp(j,"gi"),""),N.classList.add("language-"+b)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(B){var N=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(B.stack)||[])[1];if(N){var b=document.getElementsByTagName("script");for(var U in b)if(b[U].src==N)return b[U]}return null}},isActive:function(N,b,U){for(var B="no-"+b;N;){var F=N.classList;if(F.contains(b))return!0;if(F.contains(B))return!1;N=N.parentElement}return!!U}},languages:{plain:W,plaintext:W,text:W,txt:W,extend:function(N,b){var U=w.util.clone(w.languages[N]);for(var B in b)U[B]=b[B];return U},insertBefore:function(N,b,U,B){B=B||w.languages;var F=B[N],V={};for(var le in F)if(F.hasOwnProperty(le)){if(le==b)for(var X in U)U.hasOwnProperty(X)&&(V[X]=U[X]);U.hasOwnProperty(le)||(V[le]=F[le])}var me=B[N];return B[N]=V,w.languages.DFS(w.languages,function(we,Ae){Ae===me&&we!=N&&(this[we]=V)}),V},DFS:function N(b,U,B,F){F=F||{};var V=w.util.objId;for(var le in b)if(b.hasOwnProperty(le)){U.call(b,le,b[le],B||le);var X=b[le],me=w.util.type(X);me==="Object"&&!F[V(X)]?(F[V(X)]=!0,N(X,U,null,F)):me==="Array"&&!F[V(X)]&&(F[V(X)]=!0,N(X,U,le,F))}}},plugins:{},highlightAll:function(N,b){w.highlightAllUnder(document,N,b)},highlightAllUnder:function(N,b,U){var B={callback:U,container:N,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};w.hooks.run("before-highlightall",B),B.elements=Array.prototype.slice.apply(B.container.querySelectorAll(B.selector)),w.hooks.run("before-all-elements-highlight",B);for(var F=0,V;V=B.elements[F++];)w.highlightElement(V,b===!0,B.callback)},highlightElement:function(N,b,U){var B=w.util.getLanguage(N),F=w.languages[B];w.util.setLanguage(N,B);var V=N.parentElement;V&&V.nodeName.toLowerCase()==="pre"&&w.util.setLanguage(V,B);var le=N.textContent,X={element:N,language:B,grammar:F,code:le};function me(Ae){X.highlightedCode=Ae,w.hooks.run("before-insert",X),X.element.innerHTML=X.highlightedCode,w.hooks.run("after-highlight",X),w.hooks.run("complete",X),U&&U.call(X.element)}if(w.hooks.run("before-sanity-check",X),V=X.element.parentElement,V&&V.nodeName.toLowerCase()==="pre"&&!V.hasAttribute("tabindex")&&V.setAttribute("tabindex","0"),!X.code){w.hooks.run("complete",X),U&&U.call(X.element);return}if(w.hooks.run("before-highlight",X),!X.grammar){me(w.util.encode(X.code));return}if(b&&d.Worker){var we=new Worker(w.filename);we.onmessage=function(Ae){me(Ae.data)},we.postMessage(JSON.stringify({language:X.language,code:X.code,immediateClose:!0}))}else me(w.highlight(X.code,X.grammar,X.language))},highlight:function(N,b,U){var B={code:N,grammar:b,language:U};if(w.hooks.run("before-tokenize",B),!B.grammar)throw new Error('The language "'+B.language+'" has no grammar.');return B.tokens=w.tokenize(B.code,B.grammar),w.hooks.run("after-tokenize",B),q.stringify(w.util.encode(B.tokens),B.language)},tokenize:function(N,b){var U=b.rest;if(U){for(var B in U)b[B]=U[B];delete b.rest}var F=new S;return T(F,F.head,N),$(N,F,b,F.head,0),ue(F)},hooks:{all:{},add:function(N,b){var U=w.hooks.all;U[N]=U[N]||[],U[N].push(b)},run:function(N,b){var U=w.hooks.all[N];if(!(!U||!U.length))for(var B=0,F;F=U[B++];)F(b)}},Token:q};d.Prism=w;function q(N,b,U,B){this.type=N,this.content=b,this.alias=U,this.length=(B||"").length|0}q.stringify=function N(b,U){if(typeof b=="string")return b;if(Array.isArray(b)){var B="";return b.forEach(function(me){B+=N(me,U)}),B}var F={type:b.type,content:N(b.content,U),tag:"span",classes:["token",b.type],attributes:{},language:U},V=b.alias;V&&(Array.isArray(V)?Array.prototype.push.apply(F.classes,V):F.classes.push(V)),w.hooks.run("wrap",F);var le="";for(var X in F.attributes)le+=" "+X+'="'+(F.attributes[X]||"").replace(/"/g,"&quot;")+'"';return"<"+F.tag+' class="'+F.classes.join(" ")+'"'+le+">"+F.content+"</"+F.tag+">"};function ae(N,b,U,B){N.lastIndex=b;var F=N.exec(U);if(F&&B&&F[1]){var V=F[1].length;F.index+=V,F[0]=F[0].slice(V)}return F}function $(N,b,U,B,F,V){for(var le in U)if(!(!U.hasOwnProperty(le)||!U[le])){var X=U[le];X=Array.isArray(X)?X:[X];for(var me=0;me<X.length;++me){if(V&&V.cause==le+","+me)return;var we=X[me],Ae=we.inside,Qe=!!we.lookbehind,Le=!!we.greedy,Ne=we.alias;if(Le&&!we.pattern.global){var P=we.pattern.toString().match(/[imsuy]*$/)[0];we.pattern=RegExp(we.pattern.source,P+"g")}for(var fe=we.pattern||we,se=B.next,ge=F;se!==b.tail&&!(V&&ge>=V.reach);ge+=se.value.length,se=se.next){var _=se.value;if(b.length>N.length)return;if(!(_ instanceof q)){var y=1,H;if(Le){if(H=ae(fe,ge,N,Qe),!H||H.index>=N.length)break;var C=H.index,h=H.index+H[0].length,c=ge;for(c+=se.value.length;C>=c;)se=se.next,c+=se.value.length;if(c-=se.value.length,ge=c,se.value instanceof q)continue;for(var g=se;g!==b.tail&&(c<h||typeof g.value=="string");g=g.next)y++,c+=g.value.length;y--,_=N.slice(ge,c),H.index-=ge}else if(H=ae(fe,0,_,Qe),!H)continue;var C=H.index,L=H[0],Z=_.slice(0,C),te=_.slice(C+L.length),I=ge+_.length;V&&I>V.reach&&(V.reach=I);var G=se.prev;Z&&(G=T(b,G,Z),ge+=Z.length),re(b,G,y);var J=new q(le,Ae?w.tokenize(L,Ae):L,Ne,L);if(se=T(b,G,J),te&&T(b,se,te),y>1){var xe={cause:le+","+me,reach:I};$(N,b,U,se.prev,ge,xe),V&&xe.reach>V.reach&&(V.reach=xe.reach)}}}}}}function S(){var N={value:null,prev:null,next:null},b={value:null,prev:N,next:null};N.next=b,this.head=N,this.tail=b,this.length=0}function T(N,b,U){var B=b.next,F={value:U,prev:b,next:B};return b.next=F,B.prev=F,N.length++,F}function re(N,b,U){for(var B=b.next,F=0;F<U&&B!==N.tail;F++)B=B.next;b.next=B,B.prev=b,N.length-=F}function ue(N){for(var b=[],U=N.head.next;U!==N.tail;)b.push(U.value),U=U.next;return b}if(!d.document)return d.addEventListener&&(w.disableWorkerMessageHandler||d.addEventListener("message",function(N){var b=JSON.parse(N.data),U=b.language,B=b.code,F=b.immediateClose;d.postMessage(w.highlight(B,w.languages[U],U)),F&&d.close()},!1)),w;var A=w.util.currentScript();A&&(w.filename=A.src,A.hasAttribute("data-manual")&&(w.manual=!0));function z(){w.manual||w.highlightAll()}if(!w.manual){var ee=document.readyState;ee==="loading"||ee==="interactive"&&A&&A.defer?document.addEventListener("DOMContentLoaded",z):window.requestAnimationFrame?window.requestAnimationFrame(z):window.setTimeout(z,16)}return w})(f);o.exports&&(o.exports=m),typeof Hm<"u"&&(Hm.Prism=m),m.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},m.languages.markup.tag.inside["attr-value"].inside.entity=m.languages.markup.entity,m.languages.markup.doctype.inside["internal-subset"].inside=m.languages.markup,m.hooks.add("wrap",function(d){d.type==="entity"&&(d.attributes.title=d.content.replace(/&amp;/,"&"))}),Object.defineProperty(m.languages.markup.tag,"addInlined",{value:function(j,R){var W={};W["language-"+R]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:m.languages[R]},W.cdata=/^<!\[CDATA\[|\]\]>$/i;var w={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:W}};w["language-"+R]={pattern:/[\s\S]+/,inside:m.languages[R]};var q={};q[j]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return j}),"i"),lookbehind:!0,greedy:!0,inside:w},m.languages.insertBefore("markup","cdata",q)}}),Object.defineProperty(m.languages.markup.tag,"addAttribute",{value:function(d,j){m.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+d+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[j,"language-"+j],inside:m.languages[j]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),m.languages.html=m.languages.markup,m.languages.mathml=m.languages.markup,m.languages.svg=m.languages.markup,m.languages.xml=m.languages.extend("markup",{}),m.languages.ssml=m.languages.xml,m.languages.atom=m.languages.xml,m.languages.rss=m.languages.xml,(function(d){var j=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;d.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+j.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+j.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+j.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+j.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:j,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},d.languages.css.atrule.inside.rest=d.languages.css;var R=d.languages.markup;R&&(R.tag.addInlined("style","css"),R.tag.addAttribute("style","css"))})(m),m.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},m.languages.javascript=m.languages.extend("clike",{"class-name":[m.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),m.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,m.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:m.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:m.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:m.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:m.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:m.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),m.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:m.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),m.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),m.languages.markup&&(m.languages.markup.tag.addInlined("script","javascript"),m.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),m.languages.js=m.languages.javascript,(function(){if(typeof m>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var d="Loading…",j=function(A,z){return"✖ Error "+A+" while fetching file: "+z},R="✖ Error: File does not exist or is empty",W={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},w="data-src-status",q="loading",ae="loaded",$="failed",S="pre[data-src]:not(["+w+'="'+ae+'"]):not(['+w+'="'+q+'"])';function T(A,z,ee){var N=new XMLHttpRequest;N.open("GET",A,!0),N.onreadystatechange=function(){N.readyState==4&&(N.status<400&&N.responseText?z(N.responseText):N.status>=400?ee(j(N.status,N.statusText)):ee(R))},N.send(null)}function re(A){var z=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(A||"");if(z){var ee=Number(z[1]),N=z[2],b=z[3];return N?b?[ee,Number(b)]:[ee,void 0]:[ee,ee]}}m.hooks.add("before-highlightall",function(A){A.selector+=", "+S}),m.hooks.add("before-sanity-check",function(A){var z=A.element;if(z.matches(S)){A.code="",z.setAttribute(w,q);var ee=z.appendChild(document.createElement("CODE"));ee.textContent=d;var N=z.getAttribute("data-src"),b=A.language;if(b==="none"){var U=(/\.(\w+)$/.exec(N)||[,"none"])[1];b=W[U]||U}m.util.setLanguage(ee,b),m.util.setLanguage(z,b);var B=m.plugins.autoloader;B&&B.loadLanguages(b),T(N,function(F){z.setAttribute(w,ae);var V=re(z.getAttribute("data-range"));if(V){var le=F.split(/\r\n?|\n/g),X=V[0],me=V[1]==null?le.length:V[1];X<0&&(X+=le.length),X=Math.max(0,Math.min(X-1,le.length)),me<0&&(me+=le.length),me=Math.max(0,Math.min(me,le.length)),F=le.slice(X,me).join(`
`),z.hasAttribute("data-start")||z.setAttribute("data-start",String(X+1))}ee.textContent=F,m.highlightElement(ee)},function(F){z.setAttribute(w,$),ee.textContent=F})}}),m.plugins.fileHighlight={highlight:function(z){for(var ee=(z||document).querySelectorAll(S),N=0,b;b=ee[N++];)m.highlightElement(b)}};var ue=!1;m.fileHighlight=function(){ue||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),ue=!0),m.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(oc)),oc.exports}var r1=s1();const vl=cx(r1);var a0={},i0;function o1(){return i0||(i0=1,Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python),a0}o1();const g0=({value:o,onChange:f,onRun:m,placeholder:d="# Напиши код на Python 3...",activeLine:j=null,errorLine:R=null,rows:W=15})=>{const w=ne.useRef(null),q=ne.useRef(null),ae=ne.useRef(null),$=o.split(`
`),S=Math.max($.length,W),T=()=>{if(w.current){const A=w.current.scrollTop,z=w.current.scrollLeft;q.current&&(q.current.scrollTop=A,q.current.scrollLeft=z),ae.current&&(ae.current.scrollTop=A)}},re=A=>{var N;if((A.ctrlKey||A.metaKey)&&A.key==="Enter"){A.preventDefault(),m==null||m();return}if(A.key==="Tab"){A.preventDefault();const b=A.currentTarget.selectionStart,U=A.currentTarget.selectionEnd;if(A.shiftKey){const F=o.substring(0,b).lastIndexOf(`
`),V=F===-1?0:F+1,X=((N=o.substring(V,b).match(/^ {1,4}/))==null?void 0:N[0].length)||0;if(X>0){const me=o.substring(0,V)+o.substring(V+X);f(me),setTimeout(()=>{w.current&&(w.current.selectionStart=w.current.selectionEnd=Math.max(V,b-X))},0)}}else{const B=o.substring(0,b)+"    "+o.substring(U);f(B),setTimeout(()=>{w.current&&(w.current.selectionStart=w.current.selectionEnd=b+4)},0)}return}if(A.key==="Enter"&&!A.ctrlKey&&!A.metaKey){A.preventDefault();const b=A.currentTarget.selectionStart,U=A.currentTarget.selectionEnd,B=o.substring(0,b),F=o.substring(U),V=B.lastIndexOf(`
`),le=V===-1?B:B.substring(V+1),X=le.match(/^[ \t]*/),me=X?X[0]:"",Ae=le.trim().endsWith(":"),Qe=B.slice(-1),Le=F.slice(0,1),Ne=Qe==="("&&Le===")"||Qe==="["&&Le==="]"||Qe==="{"&&Le==="}";let P=`
`+me,fe=b+1+me.length;if(Ae&&(P+="    ",fe+=4),Ne){const ge=me+"    ";P=`
`+ge+`
`+me,fe=b+1+ge.length}const se=B+P+F;f(se),setTimeout(()=>{w.current&&(w.current.selectionStart=w.current.selectionEnd=fe)},0);return}const z={"(":")","[":"]","{":"}",'"':'"',"'":"'"};if(z[A.key]&&!A.ctrlKey&&!A.metaKey&&!A.altKey){const b=A.key,U=z[A.key],B=A.currentTarget.selectionStart,F=A.currentTarget.selectionEnd,V=o[B];if((b==='"'||b==="'")&&B===F&&V===b){A.preventDefault(),setTimeout(()=>{w.current&&(w.current.selectionStart=w.current.selectionEnd=B+1)},0);return}if(B!==F){A.preventDefault();const X=o.substring(B,F),me=o.substring(0,B)+b+X+U+o.substring(F);f(me),setTimeout(()=>{w.current&&(w.current.selectionStart=B+1,w.current.selectionEnd=F+1)},0);return}A.preventDefault();const le=o.substring(0,B)+b+U+o.substring(F);f(le),setTimeout(()=>{w.current&&(w.current.selectionStart=w.current.selectionEnd=B+1)},0);return}if([")","]","}",'"',"'"].includes(A.key)&&!A.ctrlKey&&!A.metaKey&&!A.altKey){const b=A.currentTarget.selectionStart,U=A.currentTarget.selectionEnd;if(b===U&&o[b]===A.key){A.preventDefault(),setTimeout(()=>{w.current&&(w.current.selectionStart=w.current.selectionEnd=b+1)},0);return}}if(A.key==="Backspace"&&!A.ctrlKey&&!A.metaKey){const b=A.currentTarget.selectionStart,U=A.currentTarget.selectionEnd;if(b===U&&b>0){const B=o[b-1],F=o[b];if(B==="("&&F===")"||B==="["&&F==="]"||B==="{"&&F==="}"||B==='"'&&F==='"'||B==="'"&&F==="'"){A.preventDefault();const le=o.substring(0,b-1)+o.substring(b+1);f(le),setTimeout(()=>{w.current&&(w.current.selectionStart=w.current.selectionEnd=b-1)},0);return}}}},ue=vl.highlight(o+(o.endsWith(`
`)?" ":""),vl.languages.python,"python");return s.jsxs("div",{className:"relative border-2 border-[#E3E3E9] focus-within:border-[#0A54C4] rounded-xl overflow-hidden bg-[#16161F] text-white flex min-h-[380px] shadow-2xs",children:[s.jsx("div",{ref:ae,className:"w-11 bg-[#12121A] text-[#636375] py-3.5 px-1.5 text-right font-mono text-[13px] leading-6 select-none border-r border-[#2C2C3A] overflow-hidden shrink-0",children:Array.from({length:S}).map((A,z)=>{const ee=z+1,N=j===ee,b=R===ee;return s.jsx("div",{className:`h-6 leading-6 ${b?"text-[#FF3860] font-black bg-[#FF3860]/20 rounded-xs":N?"text-[#F5A800] font-black bg-[#F5A800]/20 rounded-xs":""}`,children:ee},z)})}),s.jsxs("div",{className:"relative flex-1 overflow-hidden",children:[s.jsx("pre",{ref:q,"aria-hidden":"true",className:"absolute inset-0 m-0 p-3.5 font-mono text-[13px] leading-6 pointer-events-none overflow-hidden whitespace-pre tab-[4] selection:bg-transparent",dangerouslySetInnerHTML:{__html:ue}}),s.jsx("textarea",{ref:w,value:o,onChange:A=>f(A.target.value),onScroll:T,onKeyDown:re,spellCheck:!1,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",className:"absolute inset-0 w-full h-full bg-transparent text-transparent caret-white p-3.5 font-mono text-[13px] leading-6 resize-none focus:outline-none selection:bg-[#5636E0]/40 whitespace-pre overflow-auto tab-[4]",placeholder:d})]})]})},u1=[{id:"all",label:"Все"},{id:"io",label:"Ввод и вывод"},{id:"types",label:"Типы данных"},{id:"math",label:"Математика"},{id:"strings",label:"Строки"},{id:"lists",label:"Списки"},{id:"dicts",label:"Словари"},{id:"iter",label:"Циклы и итерации"},{id:"modules",label:"Модули (math, random)"},{id:"tkinter",label:"Графика (Tkinter)"}],s0=[{id:"print",name:"print()",category:"io",categoryLabel:"Ввод и вывод",syntax:"print(*objects, sep=' ', end='\\n')",shortDesc:"Выводит переданные объекты в консоль.",fullDesc:"Главная функция для отображения информации. Можно передавать несколько аргументов через запятую. Параметр sep задает разделитель (по умолчанию пробел), а end — символ в конце (по умолчанию перенос строки).",params:[{name:"*objects",type:"any",desc:"Один или несколько объектов для вывода"},{name:"sep",type:"str",desc:"Разделитель между значениями (по умолчанию ' ')"},{name:"end",type:"str",desc:"Символ окончания строки (по умолчанию '\\n')"}],returns:"None",example:`# Вывод текста и чисел
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
root.mainloop()`,output:"Текст надписи обновлен: Новый текст!",tags:["изменить","свойства","текст","цвет","config","configure","tkinter"]}],x0=({onInsertCode:o,onOpenInSandbox:f,isModal:m=!1,onClose:d})=>{const[j,R]=ne.useState(""),[W,w]=ne.useState("all"),[q,ae]=ne.useState(null),[$,S]=ne.useState(null),T=ne.useRef(null);ne.useEffect(()=>{var A;(A=T.current)==null||A.focus()},[]),ne.useEffect(()=>{const A=z=>{var ee;z.key==="/"&&document.activeElement!==T.current?(z.preventDefault(),(ee=T.current)==null||ee.focus()):z.key==="Escape"&&(q?ae(null):m&&d&&d())};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[m,d,q]);const re=ne.useMemo(()=>{const A=j.trim().toLowerCase();return s0.filter(z=>{if(!(W==="all"||z.category===W))return!1;if(!A)return!0;const N=z.name.toLowerCase().includes(A),b=z.syntax.toLowerCase().includes(A),U=z.shortDesc.toLowerCase().includes(A),B=z.fullDesc.toLowerCase().includes(A),F=z.tags.some(V=>V.toLowerCase().includes(A));return N||b||U||B||F})},[j,W]),ue=(A,z)=>{navigator.clipboard.writeText(z),Gn(),S(A),setTimeout(()=>S(null),2e3)};return s.jsx("div",{className:`font-mono text-[#0B0B0F] ${m?"fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 md:p-6":"max-w-[1360px] mx-auto p-3 md:p-6 space-y-5"}`,children:s.jsxs("div",{className:`bg-white border-[1.5px] border-[#E3E3E9] rounded-2xl shadow-xl flex flex-col overflow-hidden ${m?"w-full max-w-5xl max-h-[90vh]":"w-full min-h-[750px]"}`,children:[s.jsxs("div",{className:"p-4 md:p-6 border-b border-[#E3E3E9] bg-gradient-to-r from-[#F7F7FA] to-white flex items-center justify-between gap-4 flex-wrap",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A54C4] to-[#5636E0] text-white flex items-center justify-center shadow-xs",children:s.jsx(Er,{className:"w-5 h-5"})}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("h2",{className:"text-[18px] md:text-[20px] font-black tracking-tight text-[#0B0B0F]",children:"Справочник и поиск по функциям Python"}),s.jsxs("span",{className:"text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#E3E3E9] text-[#63636E]",children:[s0.length," функций"]})]}),s.jsx("p",{className:"text-[12px] text-[#63636E]",children:"Быстрый интерактивный поиск синтаксиса, параметров и примеров кода"})]})]}),s.jsx("div",{className:"flex items-center gap-2",children:m&&d&&s.jsx("button",{onClick:d,className:"p-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#63636E] hover:text-[#0B0B0F] transition-colors cursor-pointer",title:"Закрыть (Esc)",children:s.jsx(dc,{className:"w-5 h-5"})})})]}),s.jsxs("div",{className:"p-4 md:p-6 border-b border-[#E3E3E9] space-y-3 bg-[#FCFCFD]",children:[s.jsxs("div",{className:"relative",children:[s.jsx(Ga,{className:"w-5 h-5 text-[#63636E] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"}),s.jsx("input",{ref:T,type:"text",value:j,onChange:A=>R(A.target.value),placeholder:"Поиск по названию или описанию (например: print, ввод, len, split, рандом)...",className:"w-full bg-white border-2 border-[#E3E3E9] focus:border-[#0A54C4] rounded-xl pl-12 pr-10 py-3 text-[14px] font-mono outline-none shadow-2xs transition-all"}),j&&s.jsx("button",{onClick:()=>R(""),className:"absolute right-3.5 top-1/2 -translate-y-1/2 text-[#63636E] hover:text-[#0B0B0F] p-1 cursor-pointer",title:"Очистить",children:s.jsx(dc,{className:"w-4 h-4"})})]}),s.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none",children:u1.map(A=>s.jsx("button",{onClick:()=>{w(A.id),_n()},className:`px-3 py-1.5 rounded-lg text-[11.5px] font-bold whitespace-nowrap transition-all cursor-pointer ${W===A.id?"bg-[#0A54C4] text-white shadow-xs":"bg-[#F1F1F4] text-[#63636E] hover:bg-[#E3E3E9] hover:text-[#0B0B0F]"}`,children:A.label},A.id))}),s.jsxs("div",{className:"text-[11.5px] text-[#63636E] flex items-center justify-between",children:[s.jsxs("span",{children:["Найдено: ",s.jsx("strong",{children:re.length})]}),s.jsxs("span",{className:"text-[10.5px] text-[#63636E]/70 hidden sm:inline",children:["Нажмите ",s.jsx("strong",{children:"/"})," в любом месте для быстрого перехода к поиску"]})]})]}),s.jsx("div",{className:"flex-1 overflow-y-auto p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:re.length===0?s.jsxs("div",{className:"col-span-full py-16 text-center text-[#63636E] space-y-3",children:[s.jsx(Ga,{className:"w-10 h-10 mx-auto opacity-30"}),s.jsxs("div",{className:"text-[15px] font-bold",children:["Ничего не найдено по запросу «",j,"»"]}),s.jsxs("p",{className:"text-[12px] max-w-sm mx-auto",children:["Попробуй ввести английское название функции (например: ",s.jsx("code",{children:"range"}),", ",s.jsx("code",{children:"append"}),") или ключевое слово (например: ",s.jsx("code",{children:"длина"}),", ",s.jsx("code",{children:"число"}),")."]}),s.jsx("button",{onClick:()=>{R(""),w("all")},className:"px-4 py-2 bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0B0B0F] rounded-xl text-[12px] font-bold transition-all cursor-pointer",children:"Сбросить фильтры"})]}):re.map(A=>s.jsxs("div",{className:"bg-[#F7F7FA] hover:bg-white rounded-xl border border-[#E3E3E9] hover:border-[#0A54C4] p-4.5 flex flex-col justify-between transition-all shadow-2xs hover:shadow-sm group space-y-3",children:[s.jsxs("div",{className:"space-y-2.5",children:[s.jsxs("div",{className:"flex items-start justify-between gap-2",children:[s.jsxs("div",{children:[s.jsx("span",{className:"text-[10px] font-extrabold uppercase tracking-wider text-[#0A54C4] bg-[#0A54C4]/10 px-2 py-0.5 rounded-md",children:A.categoryLabel}),s.jsx("h3",{className:"text-[17px] font-black text-[#0B0B0F] mt-1 group-hover:text-[#0A54C4] transition-colors",children:A.name})]}),s.jsx("button",{onClick:()=>ue(A.id,A.example),className:"p-1.5 rounded-lg hover:bg-[#E3E3E9] text-[#63636E] transition-colors cursor-pointer",title:"Скопировать пример",children:$===A.id?s.jsx(Gi,{className:"w-4 h-4 text-[#0A7A50]"}):s.jsx(Sr,{className:"w-4 h-4"})})]}),s.jsx("div",{className:"bg-[#16161F] text-[#4FF0A7] px-2.5 py-1.5 rounded-lg text-[12px] font-mono overflow-x-auto",children:s.jsx("code",{children:A.syntax})}),s.jsx("p",{className:"text-[12px] text-[#63636E] leading-relaxed",children:A.shortDesc}),s.jsxs("div",{className:"bg-white border border-[#E3E3E9] rounded-lg p-2.5 text-[11px] space-y-1 font-mono",children:[s.jsx("div",{className:"text-[10px] font-bold uppercase text-[#63636E]",children:"Пример:"}),s.jsx("pre",{className:"text-[#0B0B0F] overflow-x-auto whitespace-pre-wrap leading-tight",children:A.example})]})]}),s.jsxs("div",{className:"pt-2 border-t border-[#E3E3E9] flex items-center justify-between gap-2 text-[11.5px] font-bold",children:[o&&s.jsxs("button",{onClick:()=>{o(A.example),Gn()},className:"text-[#0A54C4] hover:underline flex items-center gap-1 cursor-pointer",children:[s.jsx(wl,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Вставить в код"})]}),f&&s.jsxs("button",{onClick:()=>{f(A.example),Gn()},className:"text-[#5636E0] hover:underline flex items-center gap-1 cursor-pointer ml-auto",children:[s.jsx(Vi,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Песочница"})]})]})]},A.id))})]})})},c1=`END = "end"
WIDGETS = []
LOG = []
AFTER_QUEUE = []

class Event:
    def __init__(self, char="", keysym=""):
        self.char = char
        self.keysym = keysym

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
        if func is not None:
            AFTER_QUEUE.append((ms, func, args))
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
`,d1=`import tkinter
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
`,f1=`import tkinter

CHOSEN_DIR = "C:/Music"

def askdirectory(**kw):
    tkinter.LOG.append(("filedialog", "Выбор папки", CHOSEN_DIR))
    return CHOSEN_DIR

def askopenfilename(**kw):
    return ""

def asksaveasfilename(**kw):
    return ""
`,r0=`# Pygame & Pygame.mixer stub for Skulpt

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

class _Sound:
    def __init__(self, file):
        self.file = str(file)
        self._volume = 1.0
        self._play_count = 0

    def play(self, loops=0, maxtime=0, fade_ms=0):
        self._play_count = self._play_count + 1
        mixer._sound_queue.append((self.file, self._volume))

    def stop(self):
        pass

    def set_volume(self, vol):
        self._volume = max(0.0, min(1.0, float(vol)))

    def get_volume(self):
        return self._volume

class _Mixer:
    def __init__(self):
        self.music = _Music()
        self._sound_queue = []

    def init(self, *a, **kw):
        pass

    def Sound(self, file):
        return _Sound(file)

    def stop(self):
        self.music.stop()
        self._sound_queue = []

    def quit(self):
        self.stop()

mixer = _Mixer()

def init():
    pass

def quit():
    mixer.quit()
`,o0=`# OS module stub for Skulpt

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
`,p1=`
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
`,m1=`
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
`,bc="python_virtual_files";function Va(){if(typeof window>"u")return{};try{const o=localStorage.getItem(bc);return o?JSON.parse(o):{}}catch{return{}}}function fc(o){if(!(typeof window>"u"))try{localStorage.setItem(bc,JSON.stringify(o))}catch{}}function vc(){if(!(typeof window>"u"))try{localStorage.removeItem(bc)}catch{}}let qi=null;function y0(){return typeof window>"u"?Promise.resolve():window.Sk&&window.Sk.importMainWithBody?(u0(),Promise.resolve()):qi||(qi=new Promise((o,f)=>{const m=d=>new Promise((j,R)=>{if(document.querySelector(`script[src="${d}"]`)){j();return}const W=document.createElement("script");W.src=d,W.async=!1,W.onload=()=>j(),W.onerror=w=>R(w),document.head.appendChild(W)});m("https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt.min.js").then(()=>m("https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt-stdlib.js")).then(()=>{u0(),o()}).catch(d=>{console.warn("Failed loading Skulpt CDN",d),qi=null,f(d)})}),qi)}function u0(){const o=window.Sk;o&&(o.builtinFiles||(o.builtinFiles={files:{}}),o.builtinFiles.files||(o.builtinFiles.files={}),delete o.builtinFiles.files["src/lib/tkinter.js"],delete o.builtinFiles.files["src/lib/tkinter/__init__.js"],delete o.builtinFiles.files["src/lib/json.js"],delete o.builtinFiles.files["src/lib/json/__init__.js"],delete o.builtinFiles.files["src/lib/os.py"],delete o.builtinFiles.files["src/lib/os.js"],delete o.builtinFiles.files["src/lib/os/__init__.js"],delete o.builtinFiles.files["src/lib/os/__init__.py"],o.builtinFiles.files["src/lib/tkinter/__init__.py"]=c1,o.builtinFiles.files["src/lib/tkinter/messagebox.py"]=d1,o.builtinFiles.files["src/lib/tkinter/filedialog.py"]=f1,o.builtinFiles.files["src/lib/_vfs.py"]=p1,o.builtinFiles.files["src/lib/json/__init__.py"]=m1,o.builtinFiles.files["src/lib/pygame/__init__.py"]=r0,o.builtinFiles.files["src/lib/pygame.py"]=r0,o.builtinFiles.files["src/lib/os.py"]=o0,o.builtinFiles.files["src/lib/os/__init__.py"]=o0)}const h1="Программа работает слишком долго. Похоже, цикл while никогда не заканчивается — проверь, меняется ли переменная в условии";async function kr(o,f={}){await y0();const m=window.Sk;if(!m)return{success:!1,output:"Ошибка: Skulpt не загружен",logs:[],error:"Интерпретатор не готов"};m.yieldLimit=100;let d="",j=0,R=!1;const W=1e3,w="Программа напечатала слишком много строк. Похоже, цикл не заканчивается — проверь, меняется ли переменная в условии",q=[],ae=f.inputs?[...f.inputs]:void 0,$=f.timeoutMs??5e3;let S=Date.now();m.configure({output:A=>{var ee;d+=A;for(let N=0;N<A.length;N++)A[N]===`
`&&j++;if(j>W)throw R=!0,new Error(w);const z=A.trim();z&&q.push(z),(ee=f.onOutput)==null||ee.call(f,A)},read:A=>{if(m.builtinFiles&&m.builtinFiles.files){if(m.builtinFiles.files[A]!==void 0)return m.builtinFiles.files[A];const z=A.replace(/\.js$/,"/__init__.js");if(m.builtinFiles.files[z]!==void 0)return m.builtinFiles.files[z];const ee=A.replace(/\.py$/,"/__init__.py");if(m.builtinFiles.files[ee]!==void 0)return m.builtinFiles.files[ee]}throw new Error(`Модуль не найден: '${A}'`)},killableWhile:!0,killableFor:!0,inputfun:A=>{var z,ee;if(A&&((z=f.onOutput)==null||z.call(f,A)),ae!==void 0){const N=ae.length>0?ae.shift():"";return(ee=f.onOutput)==null||ee.call(f,N+`
`),S=Date.now(),Promise.resolve(N)}return f.onInput?f.onInput(A).then(N=>(S=Date.now(),N)):Promise.resolve("")},inputfunTakesPrompt:!0,__future__:m.python3});let T=null;try{T=await m.misceval.asyncToPromise(()=>m.importModule("_vfs",!1,!0)),m.builtins.open=T.$d.open,m.builtins.FileNotFoundError=T.$d.FileNotFoundError;const A=f.virtualFiles??Va();T.$d.FILES=new m.builtin.dict([]);for(const[z,ee]of Object.entries(A))m.abstr.objectSetItem(T.$d.FILES,new m.builtin.str(z),new m.builtin.str(ee))}catch(A){console.warn("VFS init error:",A)}try{const A=m.sysmodules?m.sysmodules.quick$lookup(new m.builtin.str("tkinter")):null;A&&A.$d&&(A.$d.WIDGETS=new m.builtin.list([]),A.$d.LOG=new m.builtin.list([]),A.$d.AFTER_QUEUE=new m.builtin.list([]));const z=m.sysmodules?m.sysmodules.quick$lookup(new m.builtin.str("pygame")):null;z&&z.$d&&z.$d.mixer&&z.$d.mixer.$d&&(z.$d.mixer.$d._sound_queue=new m.builtin.list([]))}catch{}const re=f.testCode?o+`
`+f.testCode:o,ue=()=>{var z;let A={};if(T&&T.$d&&T.$d.FILES)try{const ee=m.ffi.remapToJs(T.$d.FILES);ee&&typeof ee=="object"&&(A=ee,f.persistFiles!==!1&&fc(A),(z=f.onFilesChanged)==null||z.call(f,A))}catch(ee){console.warn("Remap VFS files warning:",ee)}return A};try{await m.misceval.asyncToPromise(()=>m.importMainWithBody("<stdin>",!1,re,!0),{"*":z=>{var ee;if((ee=f.isStopped)!=null&&ee.call(f))throw new Error("🛑 Остановлено пользователем");if(R||j>W)throw new Error(w);if(!(z&&z.data&&z.data.type==="Sk.promise")&&Date.now()-S>$)throw new Error(h1)}});const A=ue();return{success:!0,output:d,logs:q,files:A}}catch(A){const z=ue();let ee=A.toString?A.toString():String(A);(R||j>W||ee.includes("слишком много строк"))&&(ee=w);const N=ee.match(/line\s+(\d+)/i)||ee.match(/строка\s+(\d+)/i),b=N?parseInt(N[1],10):void 0;return{success:!1,output:d,logs:q,files:z,error:ee,errorLine:b}}}function g1(o){let f=o.replace(/"""[\s\S]*?"""/g,'""').replace(/'''[\s\S]*?'''/g,"''");return f=f.replace(/"(?:\\.|[^"\\])*"/g,'""').replace(/'(?:\\.|[^'\\])*'/g,"''"),f=f.replace(/#.*$/gm,""),f}function c0(o){return o.split(`
`).map(f=>f.trimEnd()).join(`
`).trim()}async function x1(o,f){const m=f.trim(),d=o.exercise.starterCode.trim();if(m===d||m==="")return{passed:!1,message:"Ты ещё ничего не изменил.",hint:"Напиши код решения задачи в редакторе."};const j=g1(f);if(o.exercise.codeCheck){const R=o.exercise.codeCheck(j,f);if(R&&!R.passed)return R}for(let R=0;R<o.exercise.tests.length;R++){const W=o.exercise.tests[R],w=await kr(f,{inputs:W.inputs,testCode:o.exercise.testCode});if(!w.success)return{passed:!1,message:`Ошибка при выполнении: ${w.error}`,hint:"Проверь правильность синтаксиса и отступов."};const q=c0(w.output),ae=c0(W.expected);if(q!==ae){const $=W.inputs.length>0?W.inputs.join(", "):"(нет ввода)";return{passed:!1,message:`Тест ${R+1} не пройден.
Ввели: ${$}
Ждали:
${ae}
Получилось:
${q}`,hint:o.exercise.hint}}}return{passed:!0,message:"Все тесты успешно пройдены!"}}const b0=({isOpen:o,onClose:f,onFilesChanged:m})=>{const[d,j]=ne.useState({}),[R,W]=ne.useState(null),[w,q]=ne.useState(!1),[ae,$]=ne.useState(!1),[S,T]=ne.useState(""),re=()=>{const b=Va();j(b);const U=Object.keys(b);U.length>0?(!R||!b[R])&&W(U[0]):W(null)};if(ne.useEffect(()=>{o&&re()},[o]),!o)return null;const ue=Object.keys(d),A=()=>{window.confirm("Удалить все созданные виртуальные файлы?")&&(vc(),j({}),W(null),m==null||m())},z=(b,U)=>{U.stopPropagation();const B={...d};if(delete B[b],fc(B),j(B),R===b){const F=Object.keys(B);W(F.length>0?F[0]:null)}m==null||m()},ee=()=>{!R||d[R]===void 0||(navigator.clipboard.writeText(d[R]),q(!0),setTimeout(()=>q(!1),1500))},N=b=>{b.preventDefault();const U=S.trim();if(!U)return;if(d[U]!==void 0){alert("Файл с таким именем уже существует");return}const B={...d,[U]:""};fc(B),j(B),W(U),T(""),$(!1),m==null||m()};return s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4",children:s.jsxs("div",{className:"bg-white rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-2xl max-w-2xl w-full flex flex-col max-h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-150",children:[s.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-[#E3E3E9] bg-[#F7F7FA]",children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx("div",{className:"w-8 h-8 rounded-lg bg-[#0A7A50]/15 text-[#0A7A50] flex items-center justify-center",children:s.jsx(hc,{className:"w-4 h-4"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-[15px] font-black text-[#0B0B0F]",children:"Виртуальные файлы программы"}),s.jsxs("p",{className:"text-[11px] text-[#63636E]",children:["Файлы, созданные через ",s.jsx("code",{className:"text-[#0A54C4]",children:"open(...)"})," в Python (сохраняются между запусками)"]})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[ue.length>0&&s.jsxs("button",{onClick:A,className:"px-2.5 py-1.5 rounded-lg border border-[#D4126C]/30 text-[#D4126C] hover:bg-[#D4126C]/10 text-[11px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer",title:"Очистить все файлы",children:[s.jsx(Qi,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Очистить все"})]}),s.jsx("button",{onClick:f,className:"p-1.5 rounded-lg hover:bg-[#E3E3E9] text-[#63636E] transition-colors cursor-pointer",children:s.jsx(dc,{className:"w-4 h-4"})})]})]}),ue.length===0?s.jsxs("div",{className:"p-8 text-center space-y-3",children:[s.jsx("div",{className:"w-12 h-12 rounded-full bg-[#F1F1F4] text-[#63636E] flex items-center justify-center mx-auto",children:s.jsx(t0,{className:"w-6 h-6"})}),s.jsx("p",{className:"text-[13px] font-bold text-[#0B0B0F]",children:"Пока нет созданных файлов"}),s.jsx("p",{className:"text-[12px] text-[#63636E] max-w-md mx-auto",children:"Когда твоя программа выполнит код записи в файл, например:"}),s.jsx("pre",{className:"bg-[#15151D] text-[#4FF0A7] p-3 rounded-xl text-[12px] font-mono inline-block text-left max-w-md",children:`with open("notes.txt", "w") as f:
    f.write("Привет из Python!")`}),s.jsx("p",{className:"text-[11.5px] text-[#63636E]",children:"Файл автоматически появится здесь и сохранится даже после перезапуска!"}),ae?s.jsxs("form",{onSubmit:N,className:"flex items-center justify-center gap-2 mt-3",children:[s.jsx("input",{type:"text",value:S,onChange:b=>T(b.target.value),placeholder:"Имя файла (напр. data.txt)",className:"px-3 py-1.5 text-[12px] border border-[#E3E3E9] rounded-lg outline-none font-mono",autoFocus:!0}),s.jsx("button",{type:"submit",className:"px-3 py-1.5 bg-[#0A7A50] text-white text-[12px] font-bold rounded-lg cursor-pointer",children:"Добавить"}),s.jsx("button",{type:"button",onClick:()=>$(!1),className:"px-2.5 py-1.5 text-[12px] text-[#63636E] hover:text-[#0B0B0F] cursor-pointer",children:"Отмена"})]}):s.jsx("div",{children:s.jsxs("button",{onClick:()=>$(!0),className:"mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0A7A50] text-white text-[11.5px] font-bold rounded-lg hover:brightness-110 cursor-pointer shadow-xs",children:[s.jsx(n0,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Создать тестовый файл вручную"})]})})]}):s.jsxs("div",{className:"flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden min-h-[300px]",children:[s.jsxs("div",{className:"md:col-span-4 border-r border-[#E3E3E9] p-2 space-y-1 overflow-y-auto bg-[#FAFAFC]",children:[s.jsxs("div",{className:"flex items-center justify-between px-2 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#63636E]",children:[s.jsxs("span",{children:["Файлы (",ue.length,")"]}),s.jsxs("button",{onClick:()=>$(!0),className:"text-[#0A7A50] hover:underline flex items-center gap-0.5 font-bold cursor-pointer",children:[s.jsx(n0,{className:"w-3 h-3"}),s.jsx("span",{children:"Создать"})]})]}),ae&&s.jsxs("form",{onSubmit:N,className:"p-2 bg-white rounded-lg border border-[#0A7A50] space-y-1.5",children:[s.jsx("input",{type:"text",value:S,onChange:b=>T(b.target.value),placeholder:"Имя файла...",className:"w-full px-2 py-1 text-[11px] border border-[#E3E3E9] rounded font-mono outline-none",autoFocus:!0}),s.jsxs("div",{className:"flex items-center justify-end gap-1",children:[s.jsx("button",{type:"button",onClick:()=>$(!1),className:"px-2 py-0.5 text-[10px] text-[#63636E]",children:"Отмена"}),s.jsx("button",{type:"submit",className:"px-2 py-0.5 text-[10px] bg-[#0A7A50] text-white rounded font-bold",children:"OK"})]})]}),ue.map(b=>{const U=R===b,B=d[b]||"";B.split(`
`).length;const F=new Blob([B]).size;return s.jsxs("div",{onClick:()=>W(b),className:`flex items-center justify-between p-2 rounded-xl text-[12px] font-mono cursor-pointer transition-colors group ${U?"bg-[#0A7A50]/15 text-[#0A7A50] font-bold border border-[#0A7A50]/30":"hover:bg-[#EAEAEF] text-[#0B0B0F]"}`,children:[s.jsxs("div",{className:"flex items-center gap-2 truncate",children:[s.jsx(t0,{className:"w-3.5 h-3.5 shrink-0"}),s.jsx("span",{className:"truncate",children:b})]}),s.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[s.jsxs("span",{className:"text-[10px] text-[#63636E]",children:[F," б"]}),s.jsx("button",{onClick:V=>z(b,V),className:"opacity-0 group-hover:opacity-100 p-1 hover:text-[#D4126C] rounded transition-opacity",title:"Удалить файл",children:s.jsx(Qi,{className:"w-3 h-3"})})]})]},b)})]}),s.jsx("div",{className:"md:col-span-8 flex flex-col bg-[#15151D] text-[#E3E3E9] overflow-hidden",children:R?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-[#2C2C3A] bg-[#1E1E28] text-[11px] font-mono",children:[s.jsx("span",{className:"text-[#4FF0A7] font-bold",children:R}),s.jsx("button",{onClick:ee,className:"flex items-center gap-1 px-2 py-1 rounded bg-[#2C2C3A] hover:bg-[#38384A] text-white cursor-pointer transition-colors text-[10.5px]",children:w?s.jsxs(s.Fragment,{children:[s.jsx(Gi,{className:"w-3 h-3 text-[#4FF0A7]"}),s.jsx("span",{children:"Скопировано"})]}):s.jsxs(s.Fragment,{children:[s.jsx(Sr,{className:"w-3 h-3"}),s.jsx("span",{children:"Копировать"})]})})]}),s.jsx("div",{className:"flex-1 p-3 font-mono text-[12px] overflow-auto whitespace-pre leading-relaxed select-text",children:d[R]||s.jsx("span",{className:"text-[#8E8EA0] italic",children:"(файл пуст)"})})]}):s.jsx("div",{className:"flex-1 flex items-center justify-center text-[#8E8EA0] text-[12px]",children:"Выберите файл слева для просмотра"})})]}),s.jsxs("div",{className:"p-3 border-t border-[#E3E3E9] bg-[#F7F7FA] flex items-center justify-between text-[11px] text-[#63636E]",children:[s.jsxs("span",{children:["Всего файлов: ",ue.length]}),s.jsx("button",{onClick:f,className:"px-3 py-1.5 bg-[#0B0B0F] hover:bg-[#2C2C3A] text-white font-bold rounded-lg cursor-pointer transition-colors text-[11.5px]",children:"Закрыть"})]})]})})};function Hi(){var w,q,ae,$;const o=typeof window<"u"?window.Sk:null;if(!o||!o.sysmodules)return{hasTk:!1,root:null,widgets:[],log:[]};let f=null;try{f=o.sysmodules.quick$lookup(new o.builtin.str("tkinter"))}catch{}if(!f||!f.$d)return{hasTk:!1,root:null,widgets:[],log:[]};const m=f.$d.WIDGETS&&f.$d.WIDGETS.v?f.$d.WIDGETS.v:[],d=f.$d.LOG&&f.$d.LOG.v?f.$d.LOG.v:[];if(m.length===0)return{hasTk:!1,root:null,widgets:[],log:[]};let j=null;const R=[];for(let S=0;S<m.length;S++){const T=m[S];if(!T)continue;let re="Widget";T.$d&&T.$d.kind?re=typeof T.$d.kind=="string"?T.$d.kind:T.$d.kind.v||"Widget":T.kind&&(re=typeof T.kind=="string"?T.kind:T.kind.v||"Widget");let ue={};if(T.$d&&T.$d.opts)try{const X=o.ffi.remapToJs(T.$d.opts);X&&typeof X=="object"&&(ue=X)}catch{}let A=null,z={};if(T.$d&&T.$d.layout&&T.$d.layout.v){const X=T.$d.layout.v;if(X.length>=2){A=((w=X[0])==null?void 0:w.v)||X[0];try{z=o.ffi.remapToJs(X[1])||{}}catch{}}}let ee="";T.$d&&T.$d.text!==void 0?ee=typeof T.$d.text=="string"?T.$d.text:T.$d.text.v!==void 0?String(T.$d.text.v):String(T.$d.text):T.text!==void 0&&(ee=typeof T.text=="string"?T.text:T.text.v!==void 0?String(T.text.v):String(T.text));let N=[];T.$d&&T.$d.items&&T.$d.items.v&&(N=T.$d.items.v.map(X=>X&&X.v!==void 0?String(X.v):String(X)));let b=[];if(T.$d&&T.$d.item_opts&&T.$d.item_opts.v)try{const X=o.ffi.remapToJs(T.$d.item_opts);Array.isArray(X)&&(b=X)}catch{}let U=[];T.$d&&T.$d.selected&&T.$d.selected.v&&(U=T.$d.selected.v.map(X=>X&&X.v!==void 0?Number(X.v):Number(X)));let B;T.$d&&T.$d.val!==void 0?B=typeof T.$d.val=="number"?T.$d.val:T.$d.val.v!==void 0?Number(T.$d.val.v):Number(T.$d.val):T.val!==void 0?B=typeof T.val=="number"?T.val:T.val.v!==void 0?Number(T.val.v):Number(T.val):ue.from_!==void 0?B=Number(ue.from_):ue.from!==void 0&&(B=Number(ue.from));let F;const V=((q=T.$d)==null?void 0:q.var)||T.var;if(V){const X=((ae=V.$d)==null?void 0:ae.v)!==void 0?V.$d.v:V.v;F=(X==null?void 0:X.v)!==void 0?!!X.v:!!X}const le={pyWidget:T,id:S,kind:re,master:(($=T.$d)==null?void 0:$.master)||T.master,opts:ue,layoutType:A,layoutOpts:z,text:ee,items:N,itemOpts:b,selected:U,val:B,isChecked:F};re==="Tk"?j=le:R.push(le)}const W=[];for(let S=0;S<d.length;S++){const T=d[S];try{const re=o.ffi.remapToJs(T);Array.isArray(re)&&re.length>=3&&W.push({kind:String(re[0]),title:String(re[1]),message:String(re[2])})}catch{}}return{hasTk:j!==null||R.length>0,root:j,widgets:R,log:W}}const v0=({onStop:o,onRefresh:f,isAlive:m})=>{var ge,_,y,H;const[d,j]=ne.useState(()=>Hi()),[R,W]=ne.useState(null),[w,q]=ne.useState(0),ae=ne.useRef(new Set),$=ne.useRef(m);$.current=m;const S=ne.useCallback(()=>{var c,g,C;const h=typeof window<"u"?window.Sk:null;if(!(!h||!h.sysmodules))try{const L=h.sysmodules.quick$lookup(new h.builtin.str("pygame")),Z=(C=(g=(c=L==null?void 0:L.$d)==null?void 0:c.mixer)==null?void 0:g.$d)==null?void 0:C._sound_queue;if(Z&&Array.isArray(Z.v)&&Z.v.length>0){const te=Z.v.splice(0,Z.v.length);for(const I of te)try{const G=h.ffi.remapToJs(I);if(Array.isArray(G)&&G.length>=1){const J=String(G[0]),xe=G.length>=2?Number(G[1]):1;t1(J,xe)}}catch{}}}catch{}},[]),T=ne.useRef(()=>{}),re=ne.useCallback(()=>{S();const h=Hi();if(j(h),h.log.length>w){const c=h.log[h.log.length-1];W(c),q(h.log.length)}$.current&&T.current()},[w,S]);if(T.current=()=>{var c;const h=typeof window<"u"?window.Sk:null;if(!(!h||!h.sysmodules||!$.current))try{const g=h.sysmodules.quick$lookup(new h.builtin.str("tkinter")),C=(c=g==null?void 0:g.$d)==null?void 0:c.AFTER_QUEUE;if(!C||!Array.isArray(C.v)||C.v.length===0)return;const L=C.v.splice(0,C.v.length);for(const Z of L){if(!Z||!Array.isArray(Z.v)||Z.v.length<2)continue;const te=Z.v[0],I=Z.v[1],G=Z.v[2],J=Math.max(16,Number((te==null?void 0:te.v)!==void 0?te.v:te)||16),xe=G&&Array.isArray(G.v)?G.v:[],ye=window.setTimeout(async()=>{if(ae.current.delete(ye),!!$.current){if(I&&I!==h.builtin.none.none$)try{await h.misceval.asyncToPromise(()=>h.misceval.callsimOrSuspendArray(I,xe))}catch(Me){console.warn("Tkinter after callback error:",Me)}$.current&&(re(),f==null||f())}},J);ae.current.add(ye)}}catch{}},ne.useEffect(()=>{if(!m){ae.current.forEach(h=>window.clearTimeout(h)),ae.current.clear();return}return re(),()=>{ae.current.forEach(h=>window.clearTimeout(h)),ae.current.clear()}},[m,re]),ne.useEffect(()=>{if(!m)return;const h=async c=>{var I,G,J,xe,ye;const g=(((I=document.activeElement)==null?void 0:I.tagName)||"").toUpperCase();if(g==="TEXTAREA"||g==="INPUT"||g==="SELECT"||c.metaKey||c.ctrlKey||c.altKey)return;const C=window.Sk;if(!C||!C.sysmodules)return;const Z=(xe=(J=(G=Hi().root)==null?void 0:G.pyWidget)==null?void 0:J.$d)==null?void 0:xe.opts;if(!Z)return;let te=null;try{te=C.abstr.objectGetItem(Z,new C.builtin.str("bind:<Key>"),!0)}catch{}if(!(!te||te===C.builtin.none.none$))try{const Me=C.sysmodules.quick$lookup(new C.builtin.str("tkinter")),Re=(ye=Me==null?void 0:Me.$d)==null?void 0:ye.Event,je=c.key.length===1?c.key:"";let ve=null;Re?ve=await C.misceval.asyncToPromise(()=>C.misceval.callsimOrSuspendArray(Re,[new C.builtin.str(je),new C.builtin.str(c.key)])):ve=new C.builtin.object,await C.misceval.asyncToPromise(()=>C.misceval.callsimOrSuspendArray(te,[ve]))}catch(Me){console.warn("Tkinter Key bind error:",Me)}finally{re(),f==null||f()}};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[m,re,f]),!d.hasTk)return null;const{root:ue,widgets:A}=d,z=((ge=ue==null?void 0:ue.opts)==null?void 0:ge.title)||"Tkinter Window",ee=((_=ue==null?void 0:ue.opts)==null?void 0:_.geometry)||"400x260";let N=420,b=260;const U=String(ee).match(/(\d+)x(\d+)/);U&&(N=Math.max(300,Math.min(680,parseInt(U[1],10))),b=Math.max(180,Math.min(500,parseInt(U[2],10))));const B=async h=>{const c=window.Sk;if(c)try{let g=null;h.pyWidget&&h.pyWidget.$d&&h.pyWidget.$d.opts&&(g=c.abstr.objectGetItem(h.pyWidget.$d.opts,new c.builtin.str("command"),!0)),!g&&h.opts&&typeof h.opts.command=="function"&&(g=h.opts.command),g&&g!==c.builtin.none.none$&&await c.misceval.asyncToPromise(()=>c.misceval.callsimOrSuspendArray(g,[]))}catch(g){console.warn("Tkinter button command error:",g)}finally{re(),f==null||f()}},F=(h,c)=>{const g=window.Sk;if(h.pyWidget){const C=g?new g.builtin.str(c):c;h.pyWidget.$d&&(h.pyWidget.$d.text=C),h.pyWidget.text=C}re()},V=(h,c)=>{const g=window.Sk;if(h.pyWidget&&g){const C=new g.builtin.list([new g.builtin.int_(c)]);h.pyWidget.$d&&(h.pyWidget.$d.selected=C),h.pyWidget.selected=C}re()},le=async(h,c)=>{var L,Z;V(h,c);const g=window.Sk;if(!g)return;let C=null;if((Z=(L=h.pyWidget)==null?void 0:L.$d)!=null&&Z.opts)try{C=g.abstr.objectGetItem(h.pyWidget.$d.opts,new g.builtin.str("bind:<Double-Button-1>"),!0),(!C||C===g.builtin.none.none$)&&(C=g.abstr.objectGetItem(h.pyWidget.$d.opts,new g.builtin.str("bind:<Double-1>"),!0))}catch{}if(C&&C!==g.builtin.none.none$)try{await g.misceval.asyncToPromise(()=>g.misceval.callsimOrSuspendArray(C,[new g.builtin.object]))}catch{try{await g.misceval.asyncToPromise(()=>g.misceval.callsimOrSuspendArray(C,[]))}catch(te){console.warn("Tkinter Listbox double-click error:",te)}}finally{re(),f==null||f()}},X=async(h,c)=>{const g=window.Sk;h.pyWidget&&(h.pyWidget.$d&&(h.pyWidget.$d.val=g?new g.builtin.int_(c):c),h.pyWidget.val=c);try{let C=null;h.pyWidget&&h.pyWidget.$d&&h.pyWidget.$d.opts&&(C=g.abstr.objectGetItem(h.pyWidget.$d.opts,new g.builtin.str("command"),!0)),!C&&h.opts&&typeof h.opts.command=="function"&&(C=h.opts.command),C&&C!==g.builtin.none.none$&&await g.misceval.asyncToPromise(()=>g.misceval.callsimOrSuspendArray(C,[new g.builtin.str(String(c))]))}catch(C){console.warn("Tkinter Scale command error:",C)}finally{re(),f==null||f()}},me=async h=>{var C,L,Z,te;const c=window.Sk,g=((L=(C=h.pyWidget)==null?void 0:C.$d)==null?void 0:L.var)||((Z=h.pyWidget)==null?void 0:Z.var);if(g){const I=((te=g.$d)==null?void 0:te.v)!==void 0?g.$d.v:g.v,J=!((I==null?void 0:I.v)!==void 0?!!I.v:!!I);g.$d&&(g.$d.v=c?new c.builtin.bool(J):J),g.v=J}try{let I=null;h.pyWidget&&h.pyWidget.$d&&h.pyWidget.$d.opts&&(I=c.abstr.objectGetItem(h.pyWidget.$d.opts,new c.builtin.str("command"),!0)),!I&&h.opts&&typeof h.opts.command=="function"&&(I=h.opts.command),I&&I!==c.builtin.none.none$&&await c.misceval.asyncToPromise(()=>c.misceval.callsimOrSuspendArray(I,[]))}catch(I){console.warn("Tkinter Checkbutton command error:",I)}finally{re(),f==null||f()}},we=async()=>{var c,g;const h=window.Sk;if(h&&((g=(c=ue==null?void 0:ue.pyWidget)==null?void 0:c.$d)!=null&&g.opts)){let C=null;try{C=h.abstr.objectGetItem(ue.pyWidget.$d.opts,new h.builtin.str("protocol:WM_DELETE_WINDOW"),!0)}catch{}if(C&&C!==h.builtin.none.none$)try{await h.misceval.asyncToPromise(()=>h.misceval.callsimOrSuspendArray(C,[]))}catch(L){console.warn("protocol WM_DELETE_WINDOW error:",L)}}o==null||o()},Ae=h=>{if(!h)return{fontSize:"14px"};if(typeof h=="number")return{fontSize:`${h}px`};if(Array.isArray(h)){const c=h[1]?`${h[1]}px`:"14px",g=h[2]==="bold"?"bold":"normal";return{fontSize:c,fontWeight:g}}if(typeof h=="string"){const g=h.split(" ").find(C=>/^\d+$/.test(C));return{fontSize:g?`${g}px`:"14px"}}return{fontSize:"14px"}},Qe=A.filter(h=>!h.master||h.master===(ue==null?void 0:ue.pyWidget)),Le=Qe.filter(h=>h.layoutType==="grid"),Ne=Le.length>0,P=Ne?Math.max(1,...Le.map(h=>Number(h.layoutOpts.column??0)+Number(h.layoutOpts.columnspan??1))):4;!U&&Ne&&P>=6&&(N=Math.max(N,Math.min(680,P*48+40)));const fe=((y=ue==null?void 0:ue.opts)==null?void 0:y.bg)||((H=ue==null?void 0:ue.opts)==null?void 0:H.background)||"#F0F0F0",se=h=>{const c=Ae(h.opts.font),g=h.opts.fg||h.opts.foreground||void 0,C=h.opts.bg||h.opts.background||void 0,L=h.opts.width?`${h.opts.width*8+16}px`:void 0,Z=h.layoutOpts.pady?Number(h.layoutOpts.pady):4,te=h.layoutOpts.padx?Number(h.layoutOpts.padx):4,I={marginTop:`${Z}px`,marginBottom:`${Z}px`,marginLeft:`${te}px`,marginRight:`${te}px`};if(h.layoutType==="grid"){const G=h.layoutOpts.row!==void 0?Number(h.layoutOpts.row):0,J=h.layoutOpts.column!==void 0?Number(h.layoutOpts.column):0,xe=h.layoutOpts.columnspan!==void 0?Number(h.layoutOpts.columnspan):1;I.gridRow=`${G+1}`,I.gridColumn=`${J+1} / span ${xe}`}switch(h.kind){case"Label":return s.jsx("div",{style:{...I,color:g||"#1F2937",backgroundColor:C||"transparent",minWidth:L,minHeight:C&&!h.opts.text?"10px":void 0,borderRadius:C&&!h.opts.text?"4px":void 0,...c},className:"select-text leading-snug font-medium transition-colors",children:h.opts.text||""},h.id);case"Button":{const G=h.opts.height?`${Number(h.opts.height)*20+8}px`:void 0,J=h.opts.width&&Number(h.opts.width)<=4;return s.jsx("div",{style:I,children:s.jsx("button",{onClick:()=>B(h),style:{color:g||"#111827",backgroundColor:C||"#E5E7EB",width:L||"auto",minHeight:G,...c},className:`${J?"px-1 py-1":"px-3.5 py-1.5"} rounded-md border border-[#9CA3AF] shadow-xs hover:brightness-95 active:brightness-90 active:scale-98 transition-all cursor-pointer font-semibold whitespace-pre-line leading-tight`,children:h.opts.text??"Button"})},h.id)}case"Entry":return s.jsx("div",{style:I,className:"w-full max-w-[320px]",children:s.jsx("input",{type:"text",value:h.text,onChange:G=>F(h,G.target.value),style:{color:g||"#111827",backgroundColor:C||"#FFFFFF",width:L||"100%",...c},className:"px-2.5 py-1 rounded-md border border-[#9CA3AF] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none shadow-inner transition-all font-mono",placeholder:"Ввод текста..."})},h.id);case"Listbox":return s.jsx("div",{style:I,className:"w-full max-w-[380px]",children:s.jsx("div",{style:{backgroundColor:C||"#FFFFFF",minHeight:"120px",maxHeight:"220px"},className:"border border-[#9CA3AF] rounded-md overflow-y-auto divide-y divide-[#E5E7EB] font-sans text-[13px] shadow-inner",children:h.items.length===0?s.jsx("div",{className:"p-3 text-[12px] text-[#9CA3AF] italic text-center",children:"Список пуст"}):h.items.map((G,J)=>{var Me;const xe=h.selected.includes(J),ye=((Me=h.itemOpts[J])==null?void 0:Me.fg)||g||"#1F2937";return s.jsx("div",{onClick:()=>V(h,J),onDoubleClick:()=>le(h,J),style:{color:ye},className:`px-3 py-1.5 cursor-pointer select-none transition-colors ${xe?"bg-[#2563EB] text-white font-semibold":"hover:bg-[#F3F4F6]"}`,title:"Клик — выделить, двойной клик — запустить",children:G},J)})})},h.id);case"Scale":{const G=h.opts.from_!==void 0?Number(h.opts.from_):h.opts.from!==void 0?Number(h.opts.from):0,J=h.opts.to!==void 0?Number(h.opts.to):100,xe=h.opts.label||"",ye=h.val??G;return s.jsxs("div",{style:I,className:"flex flex-col items-center gap-1 w-full max-w-[280px] bg-white/90 px-2.5 py-1.5 rounded-lg",children:[xe&&s.jsxs("div",{className:"text-[12px] font-semibold text-[#374151] self-start flex justify-between w-full",children:[s.jsx("span",{children:xe}),s.jsx("span",{className:"font-mono text-[#0055EA] font-bold",children:ye})]}),s.jsx("input",{type:"range",min:G,max:J,value:ye,onChange:Me=>X(h,Number(Me.target.value)),className:"w-full accent-[#0055EA] cursor-pointer h-2 bg-[#D1D5DB] rounded-lg"}),!xe&&s.jsx("div",{className:"text-[11px] font-mono text-[#4B5563] self-end",children:ye})]},h.id)}case"Checkbutton":return s.jsx("div",{style:I,className:"flex items-center gap-2 select-none",children:s.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[s.jsx("input",{type:"checkbox",checked:!!h.isChecked,onChange:()=>me(h),className:"w-4 h-4 rounded text-[#0055EA] focus:ring-[#0055EA] accent-[#0055EA] cursor-pointer"}),s.jsx("span",{style:{color:g||"#1F2937",...c},className:"text-[13px] font-medium",children:h.opts.text||""})]})},h.id);case"Frame":return s.jsx("div",{style:{...I,backgroundColor:C||"transparent"},className:"p-1 border border-dashed border-[#D1D5DB] rounded-md w-full flex flex-wrap items-center justify-center gap-1",children:A.filter(G=>G.master===h.pyWidget).map(G=>se(G))},h.id);default:return null}};return s.jsxs("div",{className:"mt-4 pt-3 border-t border-[#E3E3E9] space-y-2",children:[s.jsxs("div",{className:"flex items-center justify-between text-[11px] font-bold text-[#63636E]",children:[s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsx(p0,{className:"w-4 h-4 text-[#0A54C4]"}),s.jsx("span",{className:"uppercase tracking-wider",children:"Предпросмотр окна Tkinter"}),m&&s.jsxs("span",{className:"flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0A7A50]/15 text-[#0A7A50] text-[10.5px]",children:[s.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#0A7A50] animate-pulse"}),"Окно активно"]})]}),o&&m&&s.jsxs("button",{onClick:we,className:"text-[11px] text-[#D4126C] hover:underline flex items-center gap-1 font-bold cursor-pointer",children:[s.jsx(xc,{className:"w-3 h-3 fill-current"}),s.jsx("span",{children:"Закрыть окно"})]})]}),s.jsx("div",{className:"flex justify-center p-2 bg-[#F1F1F4] rounded-2xl border border-[#E3E3E9] shadow-inner overflow-x-auto",children:s.jsxs("div",{style:{width:`${N}px`,minHeight:`${b}px`},className:"relative bg-[#ECE9D8] rounded-t-lg rounded-b-md border-2 border-[#7F9DB9] shadow-xl flex flex-col font-sans transition-all text-[#111827]",children:[s.jsxs("div",{className:"bg-gradient-to-r from-[#0055EA] via-[#0A64E8] to-[#1E82F0] text-white px-2.5 py-1.5 rounded-t-[5px] flex items-center justify-between select-none shadow-xs",children:[s.jsxs("div",{className:"flex items-center gap-1.5 text-[12px] font-bold tracking-tight truncate max-w-[280px]",children:[s.jsx(_r,{className:"w-3.5 h-3.5 text-[#FED766]"}),s.jsx("span",{children:z})]}),s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx("div",{className:"w-3.5 h-3.5 rounded-xs bg-white/20 border border-white/40 flex items-center justify-center text-[9px] hover:bg-white/30 cursor-default",children:"_"}),s.jsx("div",{className:"w-3.5 h-3.5 rounded-xs bg-white/20 border border-white/40 flex items-center justify-center text-[9px] hover:bg-white/30 cursor-default",children:"□"}),s.jsx("button",{onClick:we,className:"w-3.5 h-3.5 rounded-xs bg-[#E81123] hover:bg-[#F1424F] text-white flex items-center justify-center text-[10px] cursor-pointer",title:"Закрыть окно",children:"✕"})]})]}),s.jsxs("div",{style:{backgroundColor:fe},className:"relative p-4 flex-1 flex flex-col items-center justify-start transition-colors",children:[Ne?s.jsx("div",{style:{gridTemplateColumns:`repeat(${P}, minmax(0, 1fr))`},className:"grid gap-1.5 w-full justify-items-center items-center",children:Qe.map(h=>se(h))}):s.jsx("div",{className:"flex flex-col items-center justify-start w-full space-y-1",children:Qe.map(h=>se(h))}),R&&s.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center p-4 z-50 animate-in fade-in duration-150",children:s.jsxs("div",{className:"bg-white border-2 border-[#0055EA] rounded-lg shadow-2xl p-4 max-w-[320px] w-full space-y-3 font-sans",children:[s.jsxs("div",{className:"flex items-start gap-3",children:[R.kind==="info"&&s.jsx(cy,{className:"w-6 h-6 text-[#2563EB] shrink-0"}),R.kind==="warning"&&s.jsx(cc,{className:"w-6 h-6 text-[#F59E0B] shrink-0"}),R.kind==="error"&&s.jsx(qx,{className:"w-6 h-6 text-[#EF4444] shrink-0"}),R.kind==="вопрос"&&s.jsx(m0,{className:"w-6 h-6 text-[#8B5CF6] shrink-0"}),s.jsxs("div",{className:"flex-1 space-y-1",children:[s.jsx("div",{className:"font-bold text-[13px] text-[#111827]",children:R.title||"Сообщение"}),s.jsx("div",{className:"text-[12px] text-[#4B5563] leading-relaxed break-words whitespace-pre-wrap",children:R.message})]})]}),s.jsx("div",{className:"flex justify-end pt-1",children:s.jsx("button",{onClick:()=>W(null),className:"px-4 py-1 bg-[#E5E7EB] hover:bg-[#D1D5DB] text-[#111827] text-[12px] font-bold rounded border border-[#9CA3AF] cursor-pointer",children:"OK"})})]})})]})]})}),s.jsx("div",{className:"text-center text-[11px] text-[#63636E] italic",children:"Это упрощённый предпросмотр. Настоящее окно — в VS Code."})]})},y1=({lesson:o,isSolved:f,onSolveLesson:m,onSelectLesson:d,onBackToCourse:j,onOpenSandboxWithCode:R})=>{const[W,w]=ne.useState(o.exercise.starterCode),[q,ae]=ne.useState(`Готов к запуску кода.
`),[$,S]=ne.useState(!1),[T,re]=ne.useState(null),[ue,A]=ne.useState(""),[z,ee]=ne.useState(!1),[N,b]=ne.useState(!1),[U,B]=ne.useState(null),[F,V]=ne.useState({status:"none",message:""}),[le,X]=ne.useState(!1),[me,we]=ne.useState(!1),[Ae,Qe]=ne.useState(()=>typeof window<"u"?Object.keys(Va()).length:0),Le=()=>{Qe(Object.keys(Va()).length)},[Ne,P]=ne.useState(!1),[fe,se]=ne.useState({summary:!0,steps:!1,mistakes:!1,quiz:!1,cheatsheet:!1,exercise:!1}),[ge,_]=ne.useState({}),[y,H]=ne.useState({}),h=async(K,oe)=>{H(Ue=>({...Ue,[K]:{running:!0,output:""}}));let Se="";try{const Ue=await kr(oe,{onOutput:Ke=>{Se+=Ke,H(Lt=>({...Lt,[K]:{running:!0,output:Se}}))}});H(Ke=>({...Ke,[K]:{running:!1,output:Ue.success?Ue.output||Se||"(программа выполнилась без вывода)":`${Ue.output||Se}${Ue.output||Se?`
`:""}❌ ${Ue.error}`}}))}catch(Ue){const Ke=(Ue==null?void 0:Ue.message)||String(Ue);H(Lt=>({...Lt,[K]:{running:!1,output:Se?`${Se}
${Ke}`:Ke}}))}},c=(K,oe,Se)=>{_(Ue=>({...Ue,[K]:oe})),oe===Se?Gn():rc()},g=ne.useRef(null),C=ne.useRef(null),L=ne.useRef(!1),Z=ne.useRef(""),te=ne.useRef(0),I=ne.useRef(null),G=()=>{if(I.current&&(clearTimeout(I.current),I.current=null),Z.current){const K=Z.current;Z.current="",ae(oe=>oe+K),te.current=Date.now()}},J=(K,oe=!1)=>{Z.current+=K;const Se=Date.now();oe||Se-te.current>=100?G():I.current||(I.current=setTimeout(G,Math.max(10,100-(Se-te.current))))};ne.useEffect(()=>()=>{I.current&&clearTimeout(I.current)},[]),ne.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"});const K=localStorage.getItem(`code_${o.id}`);w(K!==null?K:o.exercise.starterCode),G(),Z.current="",ae(`Готов к запуску кода.
`),V({status:"none",message:""}),ee(!1),b(!1),P(!1),se({summary:!0,steps:!1,mistakes:!1,quiz:!1,cheatsheet:!1,exercise:!1}),_({}),H({})},[o.id]);const xe=K=>{w(K),localStorage.setItem(`code_${o.id}`,K)},ye=K=>{xe(K),Gn()},Me=(K,oe)=>{navigator.clipboard.writeText(oe),B(K),Gn(),setTimeout(()=>B(null),1800)};ne.useEffect(()=>{g.current&&(g.current.scrollTop=g.current.scrollHeight)},[q,T]),ne.useEffect(()=>{T&&setTimeout(()=>{var K;return(K=C.current)==null?void 0:K.focus()},50)},[T]);const Re=mc(),je=Re.findIndex(K=>K.id===o.id),ve=je>0?Re[je-1]:null,Ie=je<Re.length-1?Re[je+1]:null,ut=K=>{if(K.preventDefault(),T!=null&&T.resolve){const oe=ue;J(oe+`
`,!0);const Se=T.resolve;re(null),A(""),Se(oe)}},jt=()=>{L.current=!1,T!=null&&T.resolve&&T.resolve(""),re(null),S(!1),P(!1),G(),J(`
🛑 Остановлено пользователем
`,!0)},kn=async()=>{$&&(jt(),await new Promise(K=>setTimeout(K,60))),P(!1),L.current=!0,S(!0),Gn(),Z.current="",te.current=Date.now(),ae(`▶ Запуск программы...
`);try{const K=await kr(W,{onOutput:oe=>J(oe),onInput:oe=>(G(),new Promise(Se=>{re({resolve:Se})})),onFilesChanged:()=>{Le()},isStopped:()=>!L.current});K.success?(J(`✨ Программа завершена
`,!0),Hi().hasTk&&P(!0)):K.error&&J(`
❌ ${K.error}
`,!0)}catch(K){const oe=K.toString?K.toString():String(K);J(`
❌ ${oe}
`,!0)}finally{G(),L.current=!1,S(!1),re(null)}},Yn=async()=>{$&&jt(),P(!1),Gn(),L.current=!0,S(!0),Z.current="",te.current=Date.now(),ae(`🔍 Проверка решения...
`);try{const K=await x1(o,W);K.passed?(V({status:"success",message:K.message}),J(`
✅ `+K.message+`
`,!0),vr(),i1({particleCount:50,spread:70,origin:{y:.6}}),m(o.id)):(V({status:"error",message:K.message,hint:K.hint}),J(`
❌ ${K.message}
`,!0),rc())}catch(K){const oe=K.toString?K.toString():String(K);J(`
❌ Ошибка при проверке: ${oe}
`,!0),V({status:"error",message:`Проверка завершилась с ошибкой: ${oe}`,hint:"Проверь синтаксис, закрывающие кавычки, двоеточия и отступы."}),rc()}finally{G(),L.current=!1,S(!1),re(null)}},tn=()=>{confirm("Сбросить код к начальному шаблону урока?")&&(xe(o.exercise.starterCode),V({status:"none",message:""}))},Qn=ne.useRef(null),[En,_l]=ne.useState("intro"),Sn=!!o.theory.steps&&o.theory.steps.length>0,kt=!Sn&&!!o.theory.sections&&o.theory.sections.length>0,Nn=!!o.theory.mistakes&&o.theory.mistakes.length>0||!!o.theory.commonMistakes&&o.theory.commonMistakes.length>0,un=!!o.theory.quiz&&o.theory.quiz.length>0,kl=o.theory.cheatsheet&&o.theory.cheatsheet.length>0?o.theory.cheatsheet:o.theory.tips||[],El=[...o.theory.story?[{id:"story",label:"Сюжет"}]:[],{id:"summary",label:"Простыми словами"},...Sn||kt?[{id:"steps",label:"Разбор по шагам"}]:[],...Nn?[{id:"mistakes",label:"Частые ошибки"}]:[],...un?[{id:"quiz",label:"Проверь себя"}]:[],...kl.length>0?[{id:"cheatsheet",label:"Шпаргалка"}]:[],{id:"practice",label:"Практика"}];ne.useEffect(()=>{const K=El.map(Se=>document.getElementById(`sec-${Se.id}`)).filter(Boolean);if(K.length===0)return;const oe=new IntersectionObserver(Se=>{const Ue=Se.filter(Ke=>Ke.isIntersecting).sort((Ke,Lt)=>Ke.boundingClientRect.top-Lt.boundingClientRect.top);Ue[0]&&_l(Ue[0].target.id.replace("sec-",""))},{rootMargin:"-90px 0px -60% 0px"});return K.forEach(Se=>oe.observe(Se)),()=>oe.disconnect()},[o.id]);const $l=K=>{var oe;(oe=document.getElementById(`sec-${K}`))==null||oe.scrollIntoView({behavior:"smooth",block:"start"})},Ya=K=>{ye(K),setTimeout(()=>{var oe;(oe=Qn.current)==null||oe.scrollIntoView({behavior:"smooth",block:"start"})},30)},Qa=K=>H(oe=>{const Se={...oe};return delete Se[K],Se}),Jl=K=>{const{id:oe,code:Se,label:Ue,tone:Ke="default",expected:Lt,canInsert:cn=!0}=K,wt=y[oe],Sl=Ke==="wrong"?"border-[#D4126C]/60":Ke==="fixed"?"border-[#0A7A50]/60":"border-[#2C2C3A]",Et=Ke==="wrong"?"text-[#FF85A1]":Ke==="fixed"?"text-[#4FF0A7]":"text-[#8E8EA0]";return s.jsxs("div",{className:`rounded-2xl overflow-hidden border ${Sl} bg-[#16161F] shadow-sm`,children:[s.jsxs("div",{className:"flex items-center justify-between gap-2 px-4 py-2.5 border-b border-[#2C2C3A] bg-[#1C1C28]",children:[s.jsx("span",{className:`text-[12px] font-bold uppercase tracking-wider ${Et}`,children:Ue||"Python"}),s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsxs("button",{onClick:()=>h(oe,Se),disabled:wt==null?void 0:wt.running,className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A7A50] hover:bg-[#0C9663] text-white text-[12px] font-bold transition-colors cursor-pointer disabled:opacity-50",title:"Запустить этот пример прямо здесь",children:[s.jsx(Vi,{className:"w-3.5 h-3.5 fill-white"}),s.jsx("span",{children:wt!=null&&wt.running?"Запуск...":"Запустить"})]}),cn&&s.jsxs("button",{onClick:()=>Ya(Se),className:"hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[12px] font-bold transition-colors cursor-pointer",title:"Вставить код в редактор практики",children:[s.jsx(uc,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"В редактор"})]}),s.jsx("button",{onClick:()=>Me(oe,Se),className:"inline-flex items-center gap-1 px-2 py-1.5 rounded-lg text-[#A6A6B8] hover:text-white hover:bg-white/10 text-[12px] font-bold transition-colors cursor-pointer",title:"Скопировать код",children:U===oe?s.jsx(Gi,{className:"w-3.5 h-3.5 text-[#4FF0A7]"}):s.jsx(Sr,{className:"w-3.5 h-3.5"})})]})]}),s.jsx("pre",{className:"px-5 py-4 text-[14px] leading-[1.7] text-[#E3E3E9] overflow-x-auto whitespace-pre select-text",children:s.jsx("code",{dangerouslySetInnerHTML:{__html:vl.highlight(Se,vl.languages.python,"python")}})}),wt?s.jsxs("div",{className:"border-t border-[#2C2C3A] bg-[#0B0B0F] px-5 py-3",children:[s.jsxs("div",{className:"flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#4FF0A7] mb-1.5",children:[s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx(Yi,{className:"w-3.5 h-3.5"}),"Вывод"]}),s.jsx("button",{onClick:()=>Qa(oe),className:"text-[#8E8EA0] hover:text-white normal-case tracking-normal cursor-pointer",children:"Скрыть"})]}),s.jsx("pre",{className:`text-[13.5px] leading-relaxed whitespace-pre-wrap select-text ${Ke==="wrong"?"text-[#FF85A1]":"text-[#4FF0A7]"}`,children:wt.output||"…"})]}):Lt?s.jsxs("div",{className:"border-t border-[#2C2C3A] bg-[#0B0B0F] px-5 py-3",children:[s.jsx("div",{className:"text-[11px] font-bold uppercase tracking-wider text-[#8E8EA0] mb-1.5",children:"Результат"}),s.jsx("pre",{className:"text-[13.5px] leading-relaxed text-[#4FF0A7] whitespace-pre-wrap select-text",children:Lt})]}):null]})},Xn=(K,oe,Se,Ue,Ke)=>s.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[s.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center shrink-0",style:{backgroundColor:`${Ke}1A`,color:Ke},children:s.jsx(Ue,{className:"w-5 h-5"})}),s.jsxs("h2",{className:"text-[22px] md:text-[26px] font-black text-[#0B0B0F] leading-tight",children:[s.jsxs("span",{className:"text-[#A6A6B8] mr-2",children:[oe,"."]}),Se]})]});let lt=0;return s.jsxs("div",{className:"font-mono",children:[le&&s.jsx(x0,{isModal:!0,onClose:()=>X(!1),onInsertCode:K=>{xe(W+`
`+K),X(!1)},onOpenInSandbox:R}),s.jsxs("div",{className:"max-w-[1240px] mx-auto px-4 md:px-6 pt-6 xl:grid xl:grid-cols-[220px_minmax(0,1fr)] xl:gap-10",children:[s.jsx("aside",{className:"hidden xl:block",children:s.jsxs("nav",{className:"sticky top-24 space-y-1",children:[s.jsxs("button",{onClick:j,className:"flex items-center gap-1.5 mb-4 text-[12.5px] font-bold text-[#63636E] hover:text-[#0A54C4] cursor-pointer transition-colors",children:[s.jsx(br,{className:"w-3.5 h-3.5"}),"Все уроки"]}),s.jsx("div",{className:"text-[11px] font-black uppercase tracking-wider text-[#A6A6B8] mb-2",children:"В этом уроке"}),El.map(K=>s.jsx("button",{onClick:()=>$l(K.id),className:`w-full text-left px-3 py-2 rounded-lg text-[13px] font-bold border-l-2 transition-all cursor-pointer ${En===K.id?"border-[#5636E0] bg-white text-[#0B0B0F] shadow-xs":"border-transparent text-[#63636E] hover:text-[#0B0B0F] hover:bg-white/60"} ${K.id==="practice"?"mt-2 text-[#D4126C]":""}`,children:K.label},K.id))]})}),s.jsxs("article",{className:"min-w-0",children:[s.jsxs("header",{className:"max-w-[820px] mx-auto pb-8 border-b border-[#E3E3E9]",children:[s.jsxs("div",{className:"flex items-center justify-between gap-3 flex-wrap mb-5",children:[s.jsxs("button",{onClick:j,className:"xl:hidden flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-[#E3E3E9] text-[#0B0B0F] font-bold text-[12px] transition-all cursor-pointer border border-[#E3E3E9]",children:[s.jsx(br,{className:"w-3.5 h-3.5"}),"Все уроки"]}),s.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[s.jsxs("button",{onClick:()=>X(!0),className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-[#E3E3E9] text-[#0A54C4] font-bold text-[12px] transition-all cursor-pointer border border-[#E3E3E9]",title:"Открыть справочник функций",children:[s.jsx(Ga,{className:"w-3.5 h-3.5"}),s.jsx("span",{className:"hidden sm:inline",children:"Справочник"})]}),s.jsx("button",{disabled:!ve,onClick:()=>ve&&d(ve.id),className:"flex items-center gap-1 px-3 py-2 rounded-xl bg-white hover:bg-[#E3E3E9] border border-[#E3E3E9] disabled:opacity-40 text-[#0B0B0F] font-bold text-[12px] transition-all cursor-pointer disabled:cursor-not-allowed",title:"Предыдущий урок",children:s.jsx(br,{className:"w-3.5 h-3.5"})}),s.jsx("button",{disabled:!Ie,onClick:()=>Ie&&d(Ie.id),className:"flex items-center gap-1 px-3 py-2 rounded-xl bg-white hover:bg-[#E3E3E9] border border-[#E3E3E9] disabled:opacity-40 text-[#0B0B0F] font-bold text-[12px] transition-all cursor-pointer disabled:cursor-not-allowed",title:"Следующий урок",children:s.jsx(Pm,{className:"w-3.5 h-3.5"})})]})]}),s.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[s.jsxs("span",{className:"text-[12.5px] font-bold text-[#63636E]",children:["Урок ",je+1," из ",Re.length]}),f&&s.jsxs("span",{className:"inline-flex items-center gap-1 text-[11.5px] font-extrabold px-2 py-0.5 rounded-md bg-[#0A7A50]/15 text-[#0A7A50]",children:[s.jsx(Ha,{className:"w-3.5 h-3.5"}),"Пройден"]})]}),s.jsx("h1",{className:"text-[28px] md:text-[38px] font-black text-[#0B0B0F] leading-[1.15]",children:o.title}),s.jsxs("button",{onClick:()=>$l("practice"),className:"mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#D4126C] hover:underline cursor-pointer",children:[s.jsx(sc,{className:"w-4 h-4"}),"Сразу к практике",s.jsx(Rx,{className:"w-4 h-4"})]})]}),s.jsxs("div",{className:"max-w-[820px] mx-auto",children:[o.theory.story&&s.jsx("section",{id:"sec-story",className:"scroll-mt-24 pt-10",children:s.jsxs("div",{className:"bg-gradient-to-br from-[#1C1C28] to-[#121218] text-white rounded-2xl p-5 md:p-7 border border-[#2D2D3D] shadow-md space-y-5",children:[o.theory.story.letter&&s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center gap-2 text-[12px] font-black uppercase tracking-wider text-[#FED766]",children:[s.jsx(_y,{className:"w-4 h-4"}),s.jsx("span",{children:"Входящее сообщение: Заказчик"})]}),s.jsx("div",{className:"text-[14.5px] leading-[1.75] text-[#E3E3E9] whitespace-pre-line border-l-2 border-[#FED766] pl-4",children:o.theory.story.letter})]}),o.theory.story.task&&s.jsxs("div",{className:"flex items-start gap-3 text-[14px] leading-relaxed text-[#C9C9D3] bg-[#1A1A26] p-4 rounded-xl border border-[#2E2E40]",children:[s.jsx(sc,{className:"w-5 h-5 text-[#4FF0A7] shrink-0 mt-0.5"}),s.jsxs("div",{children:[s.jsx("span",{className:"font-bold text-white",children:"Задача на день: "}),o.theory.story.task]})]}),o.theory.story.quotes&&o.theory.story.quotes.length>0&&s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"text-[11.5px] font-black uppercase tracking-wider text-[#8E8EA0] flex items-center gap-1.5",children:[s.jsx(Ey,{className:"w-4 h-4 text-[#A5B4FC]"}),s.jsx("span",{children:"Реплики команды ProTeam"})]}),o.theory.story.quotes.map((K,oe)=>s.jsxs("div",{className:"text-[14px] leading-relaxed",children:[s.jsxs("span",{className:"font-bold text-[#A5B4FC]",children:[K.speaker,": "]}),s.jsxs("span",{className:"text-[#E3E3E9] italic",children:["«",K.text,"»"]})]},oe))]})]})}),s.jsxs("section",{id:"sec-summary",className:"scroll-mt-24 pt-12",children:[Xn("summary",++lt,"Простыми словами",Er,"#0A54C4"),s.jsx("div",{className:"space-y-5 text-[15.5px] leading-[1.8] text-[#22222B]",children:o.theory.summary.split(`

`).map((K,oe)=>s.jsx("p",{className:"whitespace-pre-line",children:K},oe))}),o.theory.keyRule&&s.jsxs("div",{className:"mt-7 bg-gradient-to-br from-[#0A54C4]/10 to-[#5636E0]/10 border-l-4 border-[#5636E0] rounded-r-2xl p-5 space-y-2",children:[s.jsxs("div",{className:"flex items-center gap-1.5 text-[12px] font-black uppercase tracking-wider text-[#5636E0]",children:[s.jsx(_r,{className:"w-4 h-4"}),s.jsx("span",{children:"Главное правило"})]}),s.jsx("div",{className:"text-[15px] font-bold text-[#0B0B0F] leading-relaxed",children:o.theory.keyRule})]})]}),(Sn||kt)&&s.jsxs("section",{id:"sec-steps",className:"scroll-mt-24 pt-14",children:[Xn("steps",++lt,"Разбор по шагам",wl,"#0A7A50"),s.jsxs("div",{className:"space-y-12",children:[Sn&&o.theory.steps.map((K,oe)=>s.jsxs("div",{className:"space-y-4",children:[s.jsxs("h3",{className:"flex items-center gap-2.5 text-[17px] font-black text-[#0B0B0F]",children:[s.jsx("span",{className:"inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#0A7A50] text-white text-[13px]",children:oe+1}),"Шаг ",oe+1]}),s.jsx("p",{className:"text-[15.5px] leading-[1.8] text-[#22222B]",children:K.explanation.replace(/^\s*Шаг\s*\d+\s*[.:)]\s*/i,"")}),Jl({id:`step_${oe}`,code:K.code,label:`Пример ${oe+1}`,expected:K.output})]},oe)),kt&&o.theory.sections.map((K,oe)=>s.jsxs("div",{className:"space-y-4",children:[s.jsx("h3",{className:"text-[18px] font-black text-[#0B0B0F]",children:K.heading}),s.jsx("p",{className:"text-[15.5px] leading-[1.8] text-[#22222B] whitespace-pre-line",children:K.text}),K.codeExample&&s.jsxs(s.Fragment,{children:[Jl({id:`sec_${oe}`,code:K.codeExample.code,label:K.codeExample.title}),K.codeExample.explanation&&s.jsx("p",{className:"text-[14.5px] leading-[1.75] text-[#44444F]",children:K.codeExample.explanation})]})]},oe))]})]}),Nn&&s.jsxs("section",{id:"sec-mistakes",className:"scroll-mt-24 pt-14",children:[Xn("mistakes",++lt,"Частые ошибки",cc,"#D4126C"),o.theory.mistakes&&o.theory.mistakes.length>0?s.jsx("div",{className:"space-y-12",children:o.theory.mistakes.map((K,oe)=>s.jsxs("div",{className:"space-y-4",children:[s.jsxs("h3",{className:"text-[17px] font-black text-[#0B0B0F]",children:["Ошибка ",oe+1]}),Jl({id:`mistake_wrong_${oe}`,code:K.wrongCode,label:"❌ Код с ошибкой",tone:"wrong"}),s.jsxs("div",{className:"bg-[#1C0008] border border-[#D4126C]/50 rounded-xl px-5 py-3 text-[13.5px] leading-relaxed text-[#FF85A1]",children:[s.jsx("span",{className:"text-[#FFA3B9] font-bold block mb-1 text-[11px] uppercase tracking-wider",children:"Ошибка в консоли"}),s.jsx("span",{className:"whitespace-pre-wrap",children:K.error})]}),s.jsx("p",{className:"text-[15.5px] leading-[1.8] text-[#22222B]",children:K.explanation}),Jl({id:`mistake_fixed_${oe}`,code:K.fixedCode,label:"✅ Как исправить",tone:"fixed"})]},oe))}):s.jsx("ul",{className:"space-y-3",children:o.theory.commonMistakes.map((K,oe)=>s.jsxs("li",{className:"flex items-start gap-3 text-[15px] leading-relaxed text-[#22222B]",children:[s.jsx(cc,{className:"w-4 h-4 text-[#D4126C] shrink-0 mt-1.5"}),s.jsx("span",{children:K})]},oe))})]}),un&&s.jsxs("section",{id:"sec-quiz",className:"scroll-mt-24 pt-14",children:[Xn("quiz",++lt,"Проверь себя",Ha,"#5636E0"),s.jsx("div",{className:"space-y-8",children:o.theory.quiz.map((K,oe)=>{const Se=ge[oe],Ue=Se!==void 0,Ke=Se===K.correct;return s.jsxs("div",{className:"bg-white border border-[#E3E3E9] rounded-2xl p-5 md:p-6 space-y-4 shadow-xs",children:[s.jsxs("div",{className:"flex items-center justify-between text-[12.5px] font-bold",children:[s.jsxs("span",{className:"text-[#5636E0]",children:["Вопрос ",oe+1," из ",o.theory.quiz.length]}),s.jsx("span",{className:"text-[#63636E]",children:"Что выведет этот код?"})]}),s.jsx("pre",{className:"bg-[#16161F] text-[#E3E3E9] px-5 py-4 rounded-xl text-[14px] leading-[1.7] overflow-x-auto whitespace-pre",children:s.jsx("code",{dangerouslySetInnerHTML:{__html:vl.highlight(K.code,vl.languages.python,"python")}})}),s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:K.options.map((Lt,cn)=>{let wt="w-full text-left px-4 py-3 rounded-xl text-[14px] border-[1.5px] transition-all cursor-pointer flex items-center justify-between gap-2 whitespace-pre-wrap ";return Ue?cn===K.correct?wt+="bg-[#0A7A50]/10 border-[#0A7A50] text-[#0A7A50] font-bold":Se===cn&&!Ke?wt+="bg-[#D4126C]/10 border-[#D4126C] text-[#D4126C] font-bold":wt+="bg-white border-[#E3E3E9] opacity-50 text-[#8E8EA0]":wt+="bg-white hover:bg-[#F1F1F4] hover:border-[#5636E0]/50 border-[#E3E3E9] text-[#0B0B0F]",s.jsxs("button",{onClick:()=>c(oe,cn,K.correct),className:wt,children:[s.jsx("span",{children:Lt}),Ue&&cn===K.correct&&s.jsx(Gi,{className:"w-4 h-4 shrink-0"}),Ue&&Se===cn&&!Ke&&s.jsx(e0,{className:"w-4 h-4 shrink-0"})]},cn)})}),Ue&&s.jsxs("div",{className:`p-4 rounded-xl text-[14px] leading-relaxed border ${Ke?"bg-[#F0FFF6] border-[#0A7A50]/30 text-[#0A5A3C]":"bg-[#FFF0F5] border-[#D4126C]/30 text-[#A00E52]"}`,children:[s.jsx("span",{className:"font-bold block mb-1",children:Ke?"🎉 Правильно!":"Почти! Обрати внимание:"}),K.explanation]})]},oe)})})]}),kl.length>0&&s.jsxs("section",{id:"sec-cheatsheet",className:"scroll-mt-24 pt-14",children:[Xn("cheatsheet",++lt,"Шпаргалка",gy,"#B0700C"),s.jsx("div",{className:"bg-[#FFFBF0] border border-[#B0700C]/25 rounded-2xl p-5 md:p-6 space-y-3",children:kl.map((K,oe)=>s.jsxs("div",{className:"flex items-start gap-3 text-[14.5px] leading-relaxed text-[#22222B]",children:[s.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-[#B0700C] mt-2.5 shrink-0"}),s.jsx("span",{className:"whitespace-pre-wrap",children:K})]},oe))})]})]}),s.jsxs("section",{id:"sec-practice",ref:Qn,className:"scroll-mt-20 pt-16",children:[s.jsx("div",{className:"max-w-[820px] mx-auto",children:Xn("practice",++lt,"Практика",sc,"#D4126C")}),s.jsxs("div",{className:"space-y-5",children:[s.jsx("div",{children:s.jsxs("div",{className:"bg-white border-2 border-[#D4126C]/30 rounded-2xl p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 shadow-xs",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-[11.5px] font-black uppercase tracking-wider text-[#D4126C] mb-2",children:"Условие задачи"}),s.jsx("div",{className:"text-[14.5px] leading-[1.75] text-[#0B0B0F] whitespace-pre-line",children:o.exercise.task})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:"text-[11.5px] font-black uppercase tracking-wider text-[#63636E]",children:"Критерии проверки"}),o.exercise.requirements.map((K,oe)=>s.jsxs("div",{className:"flex items-start gap-2.5 text-[13.5px] leading-relaxed text-[#0B0B0F]",children:[s.jsx("div",{className:"w-5 h-5 rounded-full border-[1.5px] border-[#0A54C4] text-[#0A54C4] flex items-center justify-center text-[10.5px] font-bold shrink-0 mt-0.5",children:oe+1}),s.jsx("span",{children:K})]},oe))]}),s.jsxs("div",{className:"border border-[#E3E3E9] rounded-xl overflow-hidden",children:[s.jsxs("button",{onClick:()=>ee(!z),className:"w-full px-3.5 py-2.5 bg-[#F7F7FA] hover:bg-[#E3E3E9] text-left text-[13px] font-bold text-[#0B0B0F] flex items-center justify-between cursor-pointer transition-colors",children:[s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx(m0,{className:"w-4 h-4 text-[#B0700C]"}),"Нужна подсказка?"]}),s.jsx("span",{className:"text-[11.5px] text-[#63636E]",children:z?"Скрыть":"Показать"})]}),z&&s.jsxs("div",{className:"p-3.5 bg-white text-[13.5px] leading-relaxed text-[#44444F] border-t border-[#E3E3E9] whitespace-pre-line",children:["💡 ",o.exercise.hint]})]}),f&&s.jsxs("div",{className:"border border-[#0A7A50]/30 rounded-xl overflow-hidden",children:[s.jsxs("button",{onClick:()=>b(!N),className:"w-full px-3.5 py-2.5 bg-[#0A7A50]/10 hover:bg-[#0A7A50]/20 text-left text-[13px] font-bold text-[#0A7A50] flex items-center justify-between cursor-pointer transition-colors",children:[s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx(_r,{className:"w-4 h-4"}),"Авторский вариант решения"]}),s.jsx("span",{className:"text-[11.5px]",children:N?"Скрыть":"Показать"})]}),N&&s.jsx("pre",{className:"px-4 py-3 bg-[#16161F] text-[#E3E3E9] text-[13px] leading-relaxed border-t border-[#0A7A50]/30 overflow-x-auto whitespace-pre",children:s.jsx("code",{dangerouslySetInnerHTML:{__html:vl.highlight(o.exercise.solution,vl.languages.python,"python")}})})]}),s.jsxs("button",{onClick:tn,className:"text-[12px] font-bold text-[#63636E] hover:text-[#D4126C] flex items-center gap-1.5 transition-colors cursor-pointer",children:[s.jsx(gc,{className:"w-3.5 h-3.5"}),"Сбросить код к начальному"]})]})]})}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-5 items-start",children:[s.jsxs("div",{className:"bg-white p-4 rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-xs space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between border-b border-[#E3E3E9] pb-3 text-[11px] font-extrabold tracking-wider uppercase text-[#63636E]",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(wl,{className:"w-4 h-4 text-[#0A54C4]"}),s.jsx("span",{children:"Редактор Python 3"})]}),s.jsxs("div",{className:"text-[11px] font-bold normal-case tracking-normal",children:["Запуск: ",s.jsx("kbd",{className:"px-1.5 py-0.5 rounded bg-[#F1F1F4] border border-[#E3E3E9]",children:"Ctrl+Enter"})]})]}),s.jsx(g0,{value:W,onChange:xe,onRun:kn,placeholder:"# Напиши решение на Python 3...",rows:16}),s.jsxs("div",{className:"flex items-center gap-2.5 flex-wrap",children:[s.jsxs("button",{onClick:kn,disabled:$&&!T,className:"flex-1 min-w-[140px] bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0B0B0F] font-bold rounded-xl py-3 px-4 text-[13px] flex items-center justify-center gap-2 transition-all cursor-pointer border border-[#E3E3E9]",children:[s.jsx(Vi,{className:"w-4 h-4 fill-current text-[#0A54C4]"}),"Запустить код"]}),s.jsxs("button",{onClick:Yn,disabled:$,className:"flex-1 min-w-[180px] bg-gradient-to-r from-[#0A54C4] to-[#0A7A50] text-white font-extrabold rounded-xl py-3 px-5 text-[13px] flex items-center justify-center gap-2 hover:brightness-110 transition-all cursor-pointer shadow-md disabled:opacity-50",children:[s.jsx(Ha,{className:"w-4 h-4"}),"Проверить решение"]}),$&&s.jsxs("button",{onClick:jt,className:"border-[1.5px] border-[#D4126C] text-[#D4126C] hover:bg-[#D4126C]/10 rounded-xl px-4 py-3 font-bold transition-all cursor-pointer flex items-center gap-1.5 text-[12px]",children:[s.jsx(xc,{className:"w-4 h-4 fill-current"}),"Стоп"]})]})]}),s.jsxs("div",{className:"space-y-4 min-w-0 lg:sticky lg:top-24",children:[F.status==="success"&&s.jsxs("div",{className:"bg-[#0A7A50]/15 border-2 border-[#0A7A50] rounded-2xl p-4 flex items-start gap-3.5 shadow-xs",children:[s.jsx("div",{className:"w-9 h-9 rounded-xl bg-[#0A7A50] text-white flex items-center justify-center shrink-0",children:s.jsx(Ha,{className:"w-5 h-5"})}),s.jsxs("div",{className:"flex-1 space-y-1",children:[s.jsx("h4",{className:"text-[15px] font-black text-[#0A7A50]",children:"Задание решено верно!"}),s.jsx("p",{className:"text-[13.5px] text-[#0B0B0F] leading-relaxed",children:F.message})]})]}),F.status==="error"&&s.jsxs("div",{className:"bg-[#D4126C]/10 border-2 border-[#D4126C] rounded-2xl p-4 flex items-start gap-3.5 shadow-xs",children:[s.jsx("div",{className:"w-9 h-9 rounded-xl bg-[#D4126C] text-white flex items-center justify-center shrink-0",children:s.jsx(e0,{className:"w-5 h-5"})}),s.jsxs("div",{className:"flex-1 space-y-1",children:[s.jsx("h4",{className:"text-[15px] font-black text-[#D4126C]",children:"Пока не сошлось"}),s.jsx("p",{className:"text-[13.5px] text-[#0B0B0F] leading-relaxed",children:F.message}),F.hint&&s.jsxs("div",{className:"text-[12.5px] text-[#44444F] bg-white p-3 rounded-lg border border-[#E3E3E9] mt-2 leading-relaxed",children:["💡 Подсказка: ",F.hint]})]})]}),s.jsxs("div",{className:"bg-white p-4 rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-xs space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between border-b border-[#E3E3E9] pb-3 text-[11px] font-extrabold tracking-wider uppercase text-[#63636E]",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(Yi,{className:"w-4 h-4 text-[#0A7A50]"}),s.jsx("span",{children:"Терминал"})]}),s.jsxs("div",{className:"flex items-center gap-2.5 normal-case tracking-normal",children:[s.jsxs("button",{onClick:()=>we(!0),className:"text-[11.5px] text-[#0A54C4] hover:underline flex items-center gap-1 font-bold cursor-pointer",title:"Показать виртуальные файлы",children:[s.jsx(hc,{className:"w-3.5 h-3.5"}),"Файлы",Ae>0?` (${Ae})`:""]}),Ae>0&&s.jsxs("button",{onClick:()=>{window.confirm("Очистить все виртуальные файлы?")&&(vc(),Le())},className:"text-[11px] text-[#D4126C] hover:underline flex items-center gap-0.5 cursor-pointer font-bold",children:[s.jsx(Qi,{className:"w-3 h-3"}),"Очистить файлы"]}),s.jsx("button",{onClick:()=>ae(`Терминал очищен.
`),className:"text-[11px] text-[#63636E] hover:text-[#0B0B0F] cursor-pointer",children:"Очистить"})]})]}),s.jsx("div",{ref:g,className:"bg-[#15151D] text-[#E3E3E9] p-4 rounded-xl border border-[#2C2C3A] min-h-[200px] max-h-[360px] overflow-y-auto text-[13px] leading-relaxed",children:s.jsxs("div",{className:"whitespace-pre-wrap break-words select-text",children:[q,T&&s.jsxs("form",{onSubmit:ut,className:"inline-flex items-center gap-2 mt-1",children:[s.jsx("span",{className:"text-[#0A7A50] font-bold select-none",children:">>>"}),s.jsx("input",{ref:C,type:"text",value:ue,onChange:K=>A(K.target.value),placeholder:"Введи значение и нажми Enter...",className:"bg-[#1E1E28] text-white px-2.5 py-1 rounded-md border border-[#0A7A50] outline-none text-[12.5px] min-w-[200px]"}),s.jsxs("button",{type:"submit",className:"px-2.5 py-1 rounded-md bg-[#0A7A50] hover:bg-[#0C9663] text-white font-bold text-[11.5px] flex items-center gap-1 cursor-pointer",children:[s.jsx(uc,{className:"w-3 h-3"}),"Enter"]})]})]})})]}),Ne&&s.jsx(v0,{isAlive:Ne,onStop:()=>P(!1)})]})]})]})]}),s.jsxs("nav",{className:"max-w-[820px] mx-auto mt-16 pt-8 border-t border-[#E3E3E9] grid grid-cols-1 sm:grid-cols-2 gap-3",children:[ve?s.jsxs("button",{onClick:()=>d(ve.id),className:"text-left bg-white border border-[#E3E3E9] hover:border-[#5636E0]/50 rounded-2xl p-4 transition-all cursor-pointer",children:[s.jsxs("div",{className:"text-[11.5px] font-bold text-[#63636E] flex items-center gap-1 mb-1",children:[s.jsx(br,{className:"w-3.5 h-3.5"})," Предыдущий урок"]}),s.jsx("div",{className:"text-[14px] font-black text-[#0B0B0F]",children:ve.title})]}):s.jsx("div",{}),Ie&&s.jsxs("button",{onClick:()=>d(Ie.id),className:`text-right rounded-2xl p-4 transition-all cursor-pointer border ${f?"bg-gradient-to-r from-[#0A54C4] to-[#5636E0] text-white border-transparent hover:brightness-110":"bg-white border-[#E3E3E9] hover:border-[#5636E0]/50"}`,children:[s.jsxs("div",{className:`text-[11.5px] font-bold flex items-center justify-end gap-1 mb-1 ${f?"text-white/80":"text-[#63636E]"}`,children:["Следующий урок ",s.jsx(Pm,{className:"w-3.5 h-3.5"})]}),s.jsx("div",{className:`text-[14px] font-black ${f?"text-white":"text-[#0B0B0F]"}`,children:Ie.title})]})]})]})]}),s.jsx(b0,{isOpen:me,onClose:()=>we(!1),onFilesChanged:Le})]})},d0=[{id:"guess_game",title:"Игра «Угадай число» (random)",desc:"Подключение модуля random, цикл while и интерактивный input()",code:`import random

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
`}],b1=[{name:"random",desc:"Случайные числа (randint, choice, shuffle)",code:`import random
`},{name:"math",desc:"Математика (sqrt, pi, ceil, floor, factorial)",code:`import math
`},{name:"string",desc:"Наборы символов (ascii_letters, digits)",code:`import string
`},{name:"tkinter",desc:"Графика GUI (Здесь окно не рисуется. Чтобы увидеть настоящее окно, запусти код дома в Thonny или IDLE)",code:`import tkinter as tk
`}],v1=({initialCode:o,onOpenHandbook:f})=>{const[m,d]=ne.useState(o||`# Добро пожаловать в Песочницу Python 3!
# Здесь можно писать любые программы и запускать их

name = input("Как тебя зовут? ")
print(f"Привет, {name}! Удачи в программировании на Python 3!")
`),[j,R]=ne.useState(`Готов к запуску кода.
`),[W,w]=ne.useState(!1),[q,ae]=ne.useState(null),[$,S]=ne.useState(""),[T,re]=ne.useState(null),[ue,A]=ne.useState(!1),[z,ee]=ne.useState(()=>typeof window<"u"?Object.keys(Va()).length:0),N=()=>{ee(Object.keys(Va()).length)},[b,U]=ne.useState(!1),[B,F]=ne.useState("editor"),V=ne.useRef(null),le=ne.useRef(null),X=ne.useRef(null),me=ne.useRef(!1);ne.useEffect(()=>{o&&d(o)},[o]),ne.useEffect(()=>{V.current&&(V.current.scrollTop=V.current.scrollHeight)},[j,q]),ne.useEffect(()=>{q&&setTimeout(()=>{var H;return(H=le.current)==null?void 0:H.focus()},50)},[q]);const we=H=>{re(H),setTimeout(()=>re(null),2500)},Ae=ne.useRef(""),Qe=ne.useRef(0),Le=ne.useRef(null),Ne=()=>{if(Le.current&&(clearTimeout(Le.current),Le.current=null),Ae.current){const H=Ae.current;Ae.current="",R(h=>h+H),Qe.current=Date.now()}},P=(H,h=!1)=>{Ae.current+=H;const c=Date.now();h||c-Qe.current>=100?Ne():Le.current||(Le.current=setTimeout(Ne,Math.max(10,100-(c-Qe.current))))};ne.useEffect(()=>()=>{Le.current&&clearTimeout(Le.current)},[]);const fe=H=>{if(H.preventDefault(),q!=null&&q.resolve){const h=$;P(h+`
`,!0);const c=q.resolve;ae(null),S(""),c(h)}},se=()=>{me.current=!1,q!=null&&q.resolve&&q.resolve(""),ae(null),w(!1),U(!1),Ne(),P(`
🛑 Остановлено пользователем
`,!0)},ge=async()=>{W&&(se(),await new Promise(H=>setTimeout(H,60))),U(!1),me.current=!0,w(!0),Gn(),Ae.current="",Qe.current=Date.now(),R(`▶ Запуск программы...
`);try{const H=await kr(m,{onOutput:h=>P(h),onInput:h=>(Ne(),new Promise(c=>{ae({resolve:c})})),onFilesChanged:()=>{N()},isStopped:()=>!me.current});H.success?(P(`✨ Программа завершена
`,!0),vr(),Hi().hasTk&&U(!0)):H.error&&P(`
❌ ${H.error}
`,!0)}catch(H){const h=H.toString?H.toString():String(H);P(`
❌ ${h}
`,!0)}finally{Ne(),me.current=!1,w(!1),ae(null)}},_=()=>{const H=new Blob([m],{type:"text/x-python"}),h=URL.createObjectURL(H),c=document.createElement("a");c.href=h,c.download="script.py",c.click(),URL.revokeObjectURL(h),vr(),we("Файл сохранён как script.py")},y=H=>{var g;const h=(g=H.target.files)==null?void 0:g[0];if(!h)return;const c=new FileReader;c.onload=C=>{var Z;const L=(Z=C.target)==null?void 0:Z.result;L&&(d(L),vr(),we(`Файл ${h.name} загружен`))},c.readAsText(h)};return s.jsxs("div",{className:"max-w-[1360px] mx-auto p-3 md:p-6 space-y-4 font-mono select-none",children:[T&&s.jsxs("div",{className:"fixed bottom-6 right-6 z-50 bg-[#0A7A50] text-white px-4 py-2.5 rounded-xl shadow-lg font-bold text-[12.5px] flex items-center gap-2",children:[s.jsx(Gi,{className:"w-4 h-4"}),T]}),s.jsx("input",{ref:X,type:"file",accept:".py,.txt",className:"hidden",onChange:y}),s.jsxs("header",{className:"flex items-center justify-between gap-4 flex-wrap bg-white p-3 md:p-4 rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-xs",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-br from-[#0A54C4] to-[#0A7A50] flex items-center justify-center text-white shadow-xs",children:s.jsx(wl,{className:"w-5 h-5"})}),s.jsxs("div",{children:[s.jsx("h1",{className:"text-[17px] font-black text-[#0B0B0F]",children:"Песочница Python 3"}),s.jsx("p",{className:"text-[11.5px] text-[#63636E]",children:"Свободное написание, тестирование и запуск любых программ"})]})]}),s.jsxs("div",{className:"flex items-center gap-1.5 bg-[#F1F1F4] p-1 rounded-xl border border-[#E3E3E9]",children:[s.jsx("button",{onClick:()=>F("editor"),className:`px-3 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer ${B==="editor"?"bg-white text-[#0B0B0F] shadow-xs":"text-[#63636E] hover:text-[#0B0B0F]"}`,children:"💻 Код"}),s.jsxs("button",{onClick:()=>F("templates"),className:`px-3 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${B==="templates"?"bg-white text-[#0B0B0F] shadow-xs":"text-[#63636E] hover:text-[#0B0B0F]"}`,children:[s.jsx(Er,{className:"w-3.5 h-3.5 text-[#0A54C4]"}),"Примеры (",d0.length,")"]}),s.jsxs("button",{onClick:()=>F("libraries"),className:`px-3 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${B==="libraries"?"bg-white text-[#0B0B0F] shadow-xs":"text-[#63636E] hover:text-[#0B0B0F]"}`,children:[s.jsx(Cy,{className:"w-3.5 h-3.5 text-[#0A7A50]"}),"Библиотеки"]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[f&&s.jsxs("button",{onClick:f,className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0A54C4] font-bold text-[12px] transition-all cursor-pointer border border-[#E3E3E9]",title:"Открыть справочник функций",children:[s.jsx(Ga,{className:"w-3.5 h-3.5"}),s.jsx("span",{className:"hidden sm:inline",children:"Справочник"})]}),s.jsxs("button",{onClick:_,className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0B0B0F] font-bold text-[12px] transition-all cursor-pointer border border-[#E3E3E9]",title:"Скачать script.py",children:[s.jsx(ey,{className:"w-3.5 h-3.5"}),s.jsx("span",{className:"hidden sm:inline",children:"Скачать .py"})]}),s.jsxs("button",{onClick:()=>{var H;return(H=X.current)==null?void 0:H.click()},className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F1F1F4] hover:bg-[#E3E3E9] text-[#0B0B0F] font-bold text-[12px] transition-all cursor-pointer border border-[#E3E3E9]",title:"Загрузить файл с компьютера",children:[s.jsx(Zy,{className:"w-3.5 h-3.5"}),s.jsx("span",{className:"hidden sm:inline",children:"Загрузить"})]})]})]}),B==="templates"&&s.jsxs("div",{className:"bg-white border-[1.5px] border-[#E3E3E9] rounded-2xl p-5 space-y-4 shadow-xs",children:[s.jsxs("div",{className:"pb-3 border-b border-[#E3E3E9]",children:[s.jsx("h3",{className:"text-[16px] font-black text-[#0B0B0F]",children:"Готовые примеры программ"}),s.jsx("p",{className:"text-[12px] text-[#63636E]",children:"Кликни на пример, чтобы загрузить его в редактор и запустить"})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3",children:d0.map(H=>s.jsxs("div",{onClick:()=>{d(H.code),F("editor"),we(`Загружен пример: «${H.title}»`)},className:"bg-[#F7F7FA] hover:bg-white p-4 rounded-xl border border-[#E3E3E9] hover:border-[#0A54C4] transition-all cursor-pointer flex flex-col justify-between group shadow-2xs hover:shadow-xs",children:[s.jsxs("div",{children:[s.jsx("h4",{className:"font-black text-[13.5px] text-[#0B0B0F] group-hover:text-[#0A54C4] transition-colors mb-1.5",children:H.title}),s.jsx("p",{className:"text-[12px] text-[#63636E] leading-relaxed mb-3",children:H.desc})]}),s.jsx("span",{className:"text-[11.5px] font-bold text-[#0A54C4] pt-2 border-t border-[#E3E3E9]",children:"Открыть код →"})]},H.id))})]}),B==="libraries"&&s.jsxs("div",{className:"bg-white border-[1.5px] border-[#E3E3E9] rounded-2xl p-5 space-y-4 shadow-xs",children:[s.jsxs("div",{className:"pb-3 border-b border-[#E3E3E9]",children:[s.jsx("h3",{className:"text-[16px] font-black text-[#0B0B0F]",children:"Библиотеки Python 3"}),s.jsx("p",{className:"text-[12px] text-[#63636E]",children:"Нажми на модуль, чтобы вставить команду import в начало программы"})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:b1.map(H=>s.jsxs("div",{onClick:()=>{m.includes(H.name)?we(`Модуль ${H.name} уже импортирован`):(d(H.code+m),we(`Импортирован модуль ${H.name}`)),F("editor")},className:"bg-[#F7F7FA] hover:bg-white p-4 rounded-xl border border-[#E3E3E9] hover:border-[#0A7A50] transition-all cursor-pointer group shadow-2xs hover:shadow-xs",children:[s.jsxs("div",{className:"font-bold text-[#0A7A50] text-[14px] mb-1",children:["import ",H.name]}),s.jsx("div",{className:"text-[12px] text-[#63636E] mb-2",children:H.desc}),s.jsx("span",{className:"text-[11.5px] font-bold text-[#0A7A50] group-hover:underline",children:"+ Добавить в код"})]},H.name))})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-4 items-start",children:[s.jsxs("div",{className:"lg:col-span-7 bg-white p-4 rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-xs space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between border-b border-[#E3E3E9] pb-3 text-[11px] font-extrabold tracking-wider uppercase text-[#63636E]",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(ny,{className:"w-4 h-4 text-[#0A54C4]"}),s.jsx("span",{children:"script.py"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:()=>{navigator.clipboard.writeText(m),we("Код скопирован")},className:"p-1.5 rounded-lg hover:bg-[#F1F1F4] text-[#63636E] transition-colors cursor-pointer",title:"Скопировать",children:s.jsx(Sr,{className:"w-3.5 h-3.5"})}),s.jsx("button",{onClick:()=>d(""),className:"p-1.5 rounded-lg hover:bg-[#F1F1F4] text-[#63636E] hover:text-[#D4126C] transition-colors cursor-pointer",title:"Очистить код",children:s.jsx(Qi,{className:"w-3.5 h-3.5"})})]})]}),s.jsx(g0,{value:m,onChange:d,onRun:ge,placeholder:"# Напиши любой код на Python...",rows:15}),s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsxs("button",{onClick:ge,disabled:W&&!q,className:"flex-1 bg-gradient-to-r from-[#0A54C4] to-[#0A7A50] text-white font-extrabold rounded-xl py-3 px-6 text-[13px] flex items-center justify-center gap-2 hover:brightness-110 active:scale-98 disabled:opacity-50 transition-all cursor-pointer shadow-md",children:[s.jsx(Vi,{className:"w-4 h-4 fill-white"}),s.jsx("span",{children:W?"Выполняется...":"Запустить код (Ctrl+Enter)"})]}),W&&s.jsxs("button",{onClick:se,className:"border-[1.5px] border-[#D4126C] text-[#D4126C] hover:bg-[#D4126C]/10 rounded-xl px-4 py-3 font-bold transition-all cursor-pointer flex items-center gap-1.5 text-[12px]",children:[s.jsx(xc,{className:"w-4 h-4 fill-current"}),s.jsx("span",{children:"Стоп"})]})]})]}),s.jsxs("div",{className:"lg:col-span-5 bg-white p-4 rounded-2xl border-[1.5px] border-[#E3E3E9] shadow-xs space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between border-b border-[#E3E3E9] pb-3 text-[11px] font-extrabold tracking-wider uppercase text-[#63636E]",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(Yi,{className:"w-4 h-4 text-[#0A7A50]"}),s.jsx("span",{children:"Терминал вывода"})]}),s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsxs("button",{onClick:()=>A(!0),className:"text-[11px] text-[#0A54C4] hover:text-[#083E91] hover:underline flex items-center gap-1 font-bold cursor-pointer",title:"Показать виртуальные файлы",children:[s.jsx(hc,{className:"w-3.5 h-3.5"}),s.jsxs("span",{children:["Файлы",z>0?` (${z})`:""]})]}),z>0&&s.jsxs("button",{onClick:()=>{window.confirm("Очистить все виртуальные файлы?")&&(vc(),N(),we("Файлы очищены"))},className:"text-[10.5px] text-[#D4126C] hover:underline flex items-center gap-0.5 cursor-pointer font-bold",title:"Очистить файлы",children:[s.jsx(Qi,{className:"w-3 h-3"}),s.jsx("span",{children:"Очистить файлы"})]}),s.jsx("button",{onClick:()=>R(`Терминал очищен.
`),className:"text-[10px] text-[#63636E] hover:text-[#0B0B0F] cursor-pointer",children:"Очистить"})]})]}),s.jsx("div",{ref:V,className:"bg-[#15151D] text-[#E3E3E9] p-4 rounded-2xl border border-[#2C2C3A] min-h-[380px] max-h-[500px] overflow-y-auto font-mono text-[12.5px] leading-relaxed flex flex-col justify-between",children:s.jsxs("div",{className:"whitespace-pre-wrap break-words",children:[j,q&&s.jsxs("form",{onSubmit:fe,className:"inline-flex items-center gap-2 mt-1",children:[s.jsx("span",{className:"text-[#0A7A50] font-bold select-none",children:">>>"}),s.jsx("input",{ref:le,type:"text",value:$,onChange:H=>S(H.target.value),placeholder:"Введи ответ и нажми Enter...",className:"bg-[#1E1E28] text-white px-2.5 py-1 rounded-md border border-[#0A7A50] outline-none text-[12px] font-mono shadow-inner min-w-[200px]"}),s.jsxs("button",{type:"submit",className:"px-2.5 py-1 rounded-md bg-[#0A7A50] hover:bg-[#0C9663] text-white font-bold text-[11.5px] flex items-center gap-1 cursor-pointer",children:[s.jsx(uc,{className:"w-3 h-3"}),s.jsx("span",{children:"Enter"})]})]})]})}),b&&s.jsx(v0,{isAlive:b,onStop:()=>U(!1)})]})]}),s.jsx(b0,{isOpen:ue,onClose:()=>A(!1),onFilesChanged:N})]})};function w1(){const[o,f]=ne.useState("lessons"),[m,d]=ne.useState(null),[j,R]=ne.useState(()=>{try{const N=localStorage.getItem("python_solved_lessons");return N?JSON.parse(N):[]}catch{return[]}}),[W,w]=ne.useState(()=>e1()),[q,ae]=ne.useState(void 0);ne.useEffect(()=>{y0().catch(()=>{})},[]);const $=N=>{if(!j.includes(N)){const b=[...j,N];R(b);try{localStorage.setItem("python_solved_lessons",JSON.stringify(b))}catch(U){console.warn(U)}}},S=()=>{confirm("Вы уверены, что хотите сбросить отметки о пройденных уроках?")&&(R([]),localStorage.removeItem("python_solved_lessons"),_n())},T=()=>{const N=Py();w(N)},re=N=>{d(N),f("lessons"),window.scrollTo({top:0,left:0,behavior:"instant"})},ue=()=>{d(null),window.scrollTo({top:0,left:0,behavior:"instant"})},A=N=>{ae(N),f("sandbox"),window.scrollTo({top:0,left:0,behavior:"instant"})},z=mc(),ee=m?_x(m):null;return s.jsxs("div",{className:"min-h-screen bg-[#F1F1F4] text-[#0B0B0F] font-mono flex flex-col",children:[s.jsx(n1,{currentTab:o,onSelectTab:N=>{f(N)},solvedCount:j.length,totalCount:z.length,soundEnabled:W,onToggleSound:T,onResetProgress:S}),s.jsxs("main",{className:"flex-1 pb-12",children:[o==="lessons"&&s.jsx(s.Fragment,{children:ee?s.jsx(y1,{lesson:ee,isSolved:j.includes(ee.id),onSolveLesson:$,onSelectLesson:re,onBackToCourse:ue,onOpenSandboxWithCode:A}):s.jsx(a1,{solvedLessons:j,onSelectLesson:re,onOpenHandbook:()=>f("handbook"),onOpenSandbox:()=>f("sandbox")})}),o==="handbook"&&s.jsx(x0,{isModal:!1,onOpenInSandbox:A}),o==="sandbox"&&s.jsx(v1,{initialCode:q,onOpenHandbook:()=>f("handbook")})]}),s.jsx("footer",{className:"border-t border-[#E3E3E9] py-5 px-4 text-center text-[11.5px] text-[#63636E] bg-white",children:s.jsxs("div",{className:"max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2",children:[s.jsx("span",{children:"Python Станция · Интерактивная среда обучения Python 3"}),s.jsx("span",{children:"Задания и теория настраиваются напрямую в коде программы"})]})})]})}vx.createRoot(document.getElementById("root")).render(s.jsx(ne.StrictMode,{children:s.jsx(w1,{})}));
