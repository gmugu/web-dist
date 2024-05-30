!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,o,u=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(u.push(t.value),!n||u.length!==n);i=!0);}catch(a){c=!0,o=a}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return u}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function r(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function t(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}System.register(["./index-legacy.5c10aefb.js","./useUtil-legacy.f53581eb.js","./icon-legacy.28f725f4.js","./index-legacy.8b0c7054.js","./Layout-legacy.9726cb61.js"],(function(n,r){"use strict";var o,u,i,c,a,l,f,p,d,s,m,g,b,y,h,v,w,j,O,_,$,k,x,S,P,A,E,T,I,D,z,C,L,M,V,X,U,B,G,H,N;return{setters:[function(e){o=e.e,u=e.aa,i=e.ad,c=e.a3,a=e.N,l=e.V,f=e.bs,p=e.aL,d=e.ae,s=e.bN,m=e.c0,g=e.u,b=e.k,y=e.c1,h=e.a9,v=e.a1,w=e.B,j=e.a5,O=e.m,_=e.a6,$=e.bV,k=e.S,x=e.X,S=e.bX,P=e.v,A=e.c2,E=e.A,T=e.C,I=e.bY,D=e.c3,z=e.c,C=e.aO,L=e.G,M=e.H,V=e.a7},function(e){X=e.a,U=e.b},function(e){B=e.g,G=e.O},function(e){H=e.n},function(e){N=e.T}],execute:function(){var W=n("F",(function(e){return o(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[o(u,{boxSize:"$20",get fallback(){return o(i,{get color(){return c()},boxSize:"$20",get as(){return B(a.obj)}})},get src(){return a.obj.thumb}}),o(l,{spacing:"$2",get children(){return[o(f,{size:"lg",css:{wordBreak:"break-all"},get children(){return a.obj.name}}),o(p,{color:"$neutral10",size:"sm",get children(){return[d((function(){return s(a.obj.size)}))," · ",d((function(){return m(a.obj.modified)}))]}})]}}),o(l,{spacing:"$2",get children(){return e.children}})]}})})),F=function(){var e=g(),n=b((function(){return y(a.obj.name)})),r=X().currentObjLink;return o(k,{get when(){return n().length},get children(){return o(h,{get children(){return[o(v,{as:w,colorScheme:"success",get rightIcon(){return o(i,{as:H})},get children(){return e("home.preview.open_with")}}),o(j,{get children(){return o(O,{get each(){return n()},children:function(e){return o(_,{as:"a",target:"_blank",get href(){return $(e.value,{raw_url:a.raw_url,name:a.obj.name,d_url:r(!0)})},get children(){return e.key}})}})}})]}})}})},R=function(e){var n=g(),r=U().copyCurrentRawLink;return o(W,{get children(){return[o(x,{spacing:"$2",get children(){return[o(w,{colorScheme:"accent",onClick:function(){return r(!0)},get children(){return n("home.toolbar.copy_link")}}),o(w,{as:"a",get href(){return a.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),o(k,{get when(){return e.openWith},get children(){return o(F,{})}})]}})},Y=Object.freeze(Object.defineProperty({__proto__:null,Download:R,default:R},Symbol.toStringTag,{value:"Module"})),q=function(e){var n=X().currentObjLink,r=b((function(){return $(e.scheme,{raw_url:a.raw_url,name:a.obj.name,d_url:n(!0)})}));return o(A,{w:"$full",h:"70vh",get children(){return[o(S.iframe,{w:"$full",h:"$full",get src(){return r()}}),o(i,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:N,onClick:function(){window.open(r(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return P()},p:"$1",boxSize:"$7"})]}})},J=[{name:"HTML render",exts:["html"],component:E((function(){return T((function(){return r.import("./html-legacy.e253c70e.js")}),void 0)}))},{name:"Aliyun Video Previewer",type:G.VIDEO,provider:/^Aliyundrive(Open)?$/,component:E((function(){return T((function(){return r.import("./aliyun_video-legacy.2adf2393.js")}),void 0)}))},{name:"Markdown",type:G.TEXT,component:E((function(){return T((function(){return r.import("./markdown-legacy.65a4f24a.js")}),void 0)}))},{name:"Markdown with word wrap",type:G.TEXT,component:E((function(){return T((function(){return r.import("./markdown_with_word_wrap-legacy.316aa36c.js")}),void 0)}))},{name:"Url Open",exts:["url"],component:E((function(){return T((function(){return r.import("./url-legacy.23298a33.js")}),void 0)}))},{name:"Text Editor",type:G.TEXT,exts:["url"],component:E((function(){return T((function(){return r.import("./text-editor-legacy.5730a63c.js")}),void 0)}))},{name:"Image",type:G.IMAGE,component:E((function(){return T((function(){return r.import("./image-legacy.c997d343.js")}),void 0)}))},{name:"Video",type:G.VIDEO,component:E((function(){return T((function(){return r.import("./video-legacy.a0986bd4.js")}),void 0)}))},{name:"Audio",type:G.AUDIO,component:E((function(){return T((function(){return r.import("./audio-legacy.db660fa0.js")}),void 0)}))},{name:"Ipa",exts:["ipa","tipa"],component:E((function(){return T((function(){return r.import("./ipa-legacy.23811c0a.js")}),void 0)}))},{name:"Plist",exts:["plist"],component:E((function(){return T((function(){return r.import("./plist-legacy.f2d568c2.js")}),void 0)}))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:E((function(){return T((function(){return r.import("./aliyun_office-legacy.f315acc6.js")}),void 0)}))}],K=function(e){var n=[];return J.forEach((function(r){var t;r.provider&&!r.provider.test(e.provider)||(r.type===e.type||"*"===r.exts||null!==(t=r.exts)&&void 0!==t&&t.includes(I(e.name).toLowerCase()))&&n.push({name:r.name,component:r.component})})),D(e.name).forEach((function(e){var r;n.push({name:e.key,component:(r=e.value,function(){return o(q,{scheme:r})})})})),n.push({name:"Download",component:E((function(){return T((function(){return Promise.resolve().then((function(){return Y}))}),void 0)}))}),n},Q=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var n=b((function(){return K(t(t({},a.obj),{},{provider:a.provider}))})),r=e(z(n()[0]),2),u=r[0],i=r[1];return o(k,{get when(){return n().length>1},get fallback(){return o(R,{openWith:!0})},get children(){return o(l,{w:"$full",spacing:"$2",get children(){return[o(x,{w:"$full",spacing:"$2",get children(){return[o(C,{alwaysShowBorder:!0,get value(){return u().name},onChange:function(e){i(n().find((function(n){return n.name===e})))},get options(){return n().map((function(e){return{value:e.name}}))}}),o(F,{})]}}),o(L,{get fallback(){return o(M,{})},get children(){return o(V,{get component(){return u().component}})}})]}})}})}},Symbol.toStringTag,{value:"Module"}));n("a",Q)}}}))}();
