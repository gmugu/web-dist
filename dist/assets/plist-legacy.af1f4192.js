!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,c,i=[],o=!0,u=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(a){u=!0,c=a}finally{try{o||null==t.return||t.return()}finally{if(u)throw c}}return i}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.b40dd7d8.js","./File-legacy.ad77c979.js","./useUtil-legacy.a33a0e72.js","./api-legacy.f6695d4f.js","./icon-legacy.e25f5f03.js","./index-legacy.446cb7f3.js","./index-legacy.5e5e8cfd.js","./Layout-legacy.6857cdd9.js","./EncodingSelect-legacy.1ef3cc07.js","./index-legacy.8e9fb514.js","./FolderTree-legacy.77c94da4.js"],(function(e){"use strict";var t,r,c,i,o,u;return{setters:[function(n){t=n.u,r=n.c,c=n.e,i=n.B,o=n.N},function(n){u=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),a=n(r(!1),2),l=a[0],f=a[1];return c(u,{get children(){return c(i,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+o.raw_url},onClick:function(){f(!0)},get children(){return e("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();
