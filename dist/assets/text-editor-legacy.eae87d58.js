!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(k){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new S(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return L()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=O(c,n);if(a){if(a===h)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,c),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}n.wrap=f;var h={};function p(){}function d(){}function y(){}var v={};l(v,c,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(P([])));m&&m!==r&&o.call(m,c)&&(v=m);var b=y.prototype=p.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(e,n){function r(i,c,a,u){var l=s(e[i],e,c);if("throw"!==l.type){var f=l.arg,h=f.value;return h&&"object"==t(h)&&o.call(h,"__await")?n.resolve(h.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):n.resolve(h).then((function(t){f.value=t,a(f)}),(function(t){return r("throw",t,a,u)}))}u(l.arg)}var i;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}}function O(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=y,l(b,"constructor",y),l(y,"constructor",d),d.displayName=l(y,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},n.awrap=function(t){return{__await:t}},w(j.prototype),l(j.prototype,a,(function(){return this})),n.AsyncIterator=j,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var c=new j(f(t,e,r,o),i);return n.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},w(b),l(b,u,"Generator"),l(b,c,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},n.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},n}function n(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(l){return void n(l)}a.done?e(u):Promise.resolve(u).then(r,o)}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],c=!0,a=!1;try{for(n=n.call(t);!(c=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(u){a=!0,o=u}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./index-legacy.24700acc.js","./useUtil-legacy.27267beb.js","./EncodingSelect-legacy.dc5500e4.js","./api-legacy.be25ba52.js"],(function(t){"use strict";var o,i,c,a,u,l,f,s,h,p,d,y,v,g,m,b,w,j,O,E,x,S,P,L,k;return{setters:[function(t){o=t.cy,i=t.c,c=t.e,a=t.U,u=t.ar,l=t.d,f=t.o,s=t.R,h=t.bU,p=t.k,d=t.a,y=t.u,v=t.aI,g=t.bk,m=t.E,b=t.S,w=t.N,j=t.aD,O=t.B,E=t.bq,x=t.n,S=t.V},function(t){P=t.e,L=t.c},function(t){k=t.E},function(){}],execute:function(){function I(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){I(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function _(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function D(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){D(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function q(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight((function(t,e){return e(t)}),t)}}function G(t){return function e(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=t.length?t.apply(this,o):function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e.apply(n,[].concat(o,r))}}}function R(t){return{}.toString.call(t).includes("Object")}function M(t){return"function"==typeof t}var U=G((function(t,e){throw new Error(t[e]||t.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),z={changes:function(t,e){return R(e)||U("changeType"),Object.keys(e).some((function(e){return n=t,r=e,!Object.prototype.hasOwnProperty.call(n,r);var n,r}))&&U("changeField"),e},selector:function(t){M(t)||U("selectorType")},handler:function(t){M(t)||R(t)||U("handlerType"),R(t)&&Object.values(t).some((function(t){return!M(t)}))&&U("handlersType")},initial:function(t){var e;t||U("initialIsRequired"),R(t)||U("initialType"),e=t,Object.keys(e).length||U("initialContent")}};function $(t,e){return M(e)?e(t.current):e}function B(t,e){return t.current=N(N({},t.current),e),e}function V(t,e,n){return M(e)?e(t.current):Object.keys(n).forEach((function(n){var r;return null===(r=e[n])||void 0===r?void 0:r.call(e,t.current[n])})),n}var Y={create:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};z.initial(t),z.handler(e);var n={current:t},r=G(V)(n,e),o=G(B)(n),i=G(z.changes)(t),c=G($)(n);function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(t){return t};return z.selector(t),t(n.current)}function u(t){q(r,o,i,c)(t)}return[a,u]}};var H,J={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},K=(H=function(t,e){throw new Error(t[e]||t.default)},function t(){for(var e=this,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return r.length>=H.length?H.apply(this,r):function(){for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return t.apply(e,[].concat(r,o))}})(J),Q={config:function(t){var e;return t||K("configIsRequired"),e=t,{}.toString.call(e).includes("Object")||K("configType"),t.urls?(console.warn(J.deprecation),{paths:{vs:t.urls.monacoBase}}):t}};function W(t,e){return Object.keys(e).forEach((function(n){e[n]instanceof Object&&t[n]&&Object.assign(e[n],W(t[n],e[n]))})),A(A({},t),e)}var X={type:"cancelation",msg:"operation is manually canceled"};function Z(t){var e=!1,n=new Promise((function(n,r){t.then((function(t){return e?r(X):n(t)})),t.catch(r)}));return n.cancel=function(){return e=!0},n}var tt,et,nt=Y.create({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}),rt=(et=2,function(t){if(Array.isArray(t))return t}(tt=nt)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(tt,et)||function(t,e){if(t){if("string"==typeof t)return C(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(t,e):void 0}}(tt,et)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),ot=rt[0],it=rt[1];function ct(t){return document.body.appendChild(t)}function at(t){var e,n,r=ot((function(t){return{config:t.config,reject:t.reject}})),o=(e="".concat(r.config.paths.vs,"/loader.js"),n=document.createElement("script"),e&&(n.src=e),n);return o.onload=function(){return t()},o.onerror=r.reject,o}function ut(){var t=ot((function(t){return{config:t.config,resolve:t.resolve,reject:t.reject}})),e=window.require;e.config(t.config),e(["vs/editor/editor.main"],(function(e){lt(e),t.resolve(e)}),(function(e){t.reject(e)}))}function lt(t){ot().monaco||it({monaco:t})}var ft,st=new Promise((function(t,e){return it({resolve:t,reject:e})})),ht={config:function(t){var e=Q.config(t),n=e.monaco,r=_(e,["monaco"]);it((function(t){return{config:W(t.config,r),monaco:n}}))},init:function(){var t=ot((function(t){return{monaco:t.monaco,isInitialized:t.isInitialized,resolve:t.resolve}}));if(!t.isInitialized){if(it({isInitialized:!0}),t.monaco)return t.resolve(t.monaco),Z(st);if(window.monaco&&window.monaco.editor)return lt(window.monaco),t.resolve(window.monaco),Z(st);!function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight((function(t,e){return e(t)}),t)}}(ct,at)(ut)}return Z(st)},__getMonacoInstance:function(){return ot((function(t){return t.monaco}))}};ht.config({paths:{vs:o}});var pt=function(t){var e=r(i(!0),2),n=e[0],o=e[1];return ht.init().then((function(t){ft=t,o(!1)})),c(a,{get loading(){return n()},get children(){return c(dt,t)}})},dt=function(t){var e,n,r;return u((function(){n=ft.editor.create(e,{value:t.value,theme:t.theme}),r=ft.editor.createModel(t.value,t.language,t.path?ft.Uri.parse(t.path):void 0),n.setModel(r),n.onDidChangeModelContent((function(){var e;null===(e=t.onChange)||void 0===e||e.call(t,n.getValue())}))})),l((function(){n.setValue(t.value)})),l((function(){ft.editor.setTheme(t.theme)})),f((function(){r&&r.dispose(),n&&n.dispose()})),c(s,{w:"$full",h:"70vh",ref:function(t){"function"==typeof e?e(t):e=t}})};function yt(t){var o=h().colorMode,a=p((function(){return"light"===o()?"vs":"vs-dark"})),u=d().pathname,f=L(t.data),s=f.isString,P=f.text,I=r(i("utf-8"),2),T=I[0],A=I[1],_=r(i(P(T())),2),C=_[0],D=_[1],F=y(),N=r(v((function(){return g.put("/fs/put",C(),{headers:{"File-Path":encodeURIComponent(u()),"Content-Type":t.contentType||"text/plain"}})})),2),q=N[0],G=N[1];return l(m(T,(function(t){D(P(t)),console.log(C())}))),c(S,{w:"$full",alignItems:"start",spacing:"$2",pos:"relative",get children(){return[c(b,{when:!s,get children(){return c(k,{get encoding(){return T()},setEncoding:A})}}),c(pt,{get value(){return C()},get theme(){return a()},get path(){return w.obj.name},onChange:function(t){D(t)}}),c(b,{get when(){return j("write")||w.write},get children(){return c(O,{get loading(){return q()},onClick:(t=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var c=t.apply(e,r);function a(t){n(c,o,i,a,u,"next",t)}function u(t){n(c,o,i,a,u,"throw",t)}a(void 0)}))}}(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G();case 2:n=t.sent,E(n,(function(){x.success(F("global.save_success"))}));case 4:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)}),get children(){return F("global.save")}});var t}})]}})}t("default",(function(){var t=r(P(),1)[0];return c(a,{get loading(){return t.loading},get children(){return c(yt,{get data(){var e;return null===(e=t())||void 0===e?void 0:e.content},get contentType(){var e;return null===(e=t())||void 0===e?void 0:e.contentType}})}})}))}}}))}();
