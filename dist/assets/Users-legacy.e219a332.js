!function(){function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(O){l=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),c=new S(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(e.method=o,e.arg=i;;){var c=e.delegate;if(c){var a=L(c,e);if(a){if(a===h)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=f(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,c),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}e.wrap=s;var h={};function d(){}function p(){}function g(){}var y={};l(y,c,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(j([])));m&&m!==n&&o.call(m,c)&&(y=m);var w=g.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function x(r,e){function n(i,c,a,u){var l=f(r[i],r,c);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==t(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,u)}))}u(l.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}}function L(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(o.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=g,l(w,"constructor",g),l(g,"constructor",p),p.displayName=l(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,a,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var c=new x(s(t,r,n,o),i);return e.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},b(w),l(w,u,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return c.type="throw",c.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],c=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var a=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(c)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:j(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},e}function e(t,r,e,n,o,i,c){try{var a=t[i](c),u=a.value}catch(l){return void e(l)}a.done?r(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var c=t.apply(r,n);function a(t){e(c,o,i,a,u,"next",t)}function u(t){e(c,o,i,a,u,"throw",t)}a(void 0)}))}}function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,o,i=[],c=!0,a=!1;try{for(e=e.call(t);!(c=(n=e.next()).done)&&(i.push(n.value),!r||i.length!==r);c=!0);}catch(u){a=!0,o=u}finally{try{c||null==e.return||e.return()}finally{if(a)throw o}}return i}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}System.register(["./index-legacy.24700acc.js","./index-legacy.59cd8023.js","./DeletePopover-legacy.90163ccd.js","./Wether-legacy.ec37ab7e.js"],(function(t){"use strict";var e,i,c,a,u,l,s,f,h,d,p,g,y,v,m,w,b,x,L,E,_,S,j,k,O,$,P;return{setters:[function(t){e=t.u,i=t.a,c=t.aI,a=t.bk,u=t.c,l=t.ce,s=t.e,f=t.X,h=t.B,d=t.R,p=t.cf,g=t.cg,y=t.ch,v=t.m,m=t.ci,w=t.cj,b=t.ck,x=t.bq,L=t.n,E=t.V,_=t.bM,S=t.ak,j=t.am,k=t.Z},function(t){O=t.o},function(t){$=t.D},function(t){P=t.W}],execute:function(){var A=function(t){var r=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return s(_,{get colorScheme(){return r[t.role].color},get children(){return r[t.role].name}})},G=function(t){var r=e();return s(f,{spacing:"$0_5",get children(){return s(v,{each:S,children:function(e,n){return s(j,{get label(){return r("users.permissions.".concat(e))},get children(){return s(d,{boxSize:"$2",rounded:"$full",get bg(){return r=k.can(t.user,n()),"$".concat(r?"success":"danger","9");var r}})}})}})}})};t("default",(function(){var t=e();O("manage.sidemenu.users");var _=i().to,S=o(c((function(){return a.get("/admin/user/list")})),2),j=S[0],k=S[1],I=o(u([]),2),N=I[0],C=I[1],T=function(){var t=n(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k();case 2:e=t.sent,x(e,(function(t){return C(t.content)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();T();var F=o(l((function(t){return a.post("/admin/user/delete?id=".concat(t))})),2),D=F[0],M=F[1],W=o(l((function(t){return a.post("/admin/user/cancel_2fa?id=".concat(t))})),2),X=W[0],Y=W[1];return s(E,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[s(f,{spacing:"$2",get children(){return[s(h,{colorScheme:"accent",get loading(){return j()},onClick:T,get children(){return t("global.refresh")}}),s(h,{onClick:function(){_("/@manage/users/add")},get children(){return t("global.add")}})]}}),s(d,{w:"$full",overflowX:"auto",get children(){return s(p,{highlightOnHover:!0,dense:!0,get children(){return[s(g,{get children(){return s(y,{get children(){return[s(v,{each:["username","base_path","role","permission","available"],children:function(r){return s(m,{get children(){return t("users.".concat(r))}})}}),s(m,{get children(){return t("global.operations")}})]}})}}),s(w,{get children(){return s(v,{get each(){return N()},children:function(e){return s(y,{get children(){return[s(b,{get children(){return e.username}}),s(b,{get children(){return e.base_path}}),s(b,{get children(){return s(A,{get role(){return e.role}})}}),s(b,{get children(){return s(G,{user:e})}}),s(b,{get children(){return s(P,{get yes(){return!e.disabled}})}}),s(b,{get children(){return s(f,{spacing:"$2",get children(){return[s(h,{onClick:function(){_("/@manage/users/edit/".concat(e.id))},get children(){return t("global.edit")}}),s($,{get name(){return e.username},get loading(){return D()===e.id},onClick:(i=n(r().mark((function n(){var o;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,M(e.id);case 2:o=r.sent,x(o,(function(){L.success(t("global.delete_success")),T()}));case 4:case"end":return r.stop()}}),n)}))),function(){return i.apply(this,arguments)})}),s(h,{colorScheme:"accent",get loading(){return X()===e.id},onClick:(o=n(r().mark((function n(){var o;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Y(e.id);case 2:o=r.sent,x(o,(function(){L.success(t("users.cancel_2fa_success")),T()}));case 4:case"end":return r.stop()}}),n)}))),function(){return o.apply(this,arguments)}),get children(){return t("users.cancel_2fa")}})];var o,i}})}})]}})}})}})]}})}})]}})}))}}}))}();
