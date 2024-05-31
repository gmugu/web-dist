import{e,aa as O,ad as _,a3 as T,N as i,V as l,bs as y,aL as I,ae as h,bN as P,bZ as $,u as b,k as d,b_ as k,a9 as x,a1 as L,B as m,a5 as S,m as A,a6 as D,b$ as v,S as g,X as f,bW as V,v as j,c0 as R,A as o,C as a,bX as C,c1 as M,c as z,aO as F,G as B,H as W,a7 as X}from"./index.6cb868e0.js";import{a as w,b as H}from"./useUtil.2877fb57.js";import{g as U,O as u}from"./icon.7ef57fcd.js";import{n as G}from"./index.9d59aaa5.js";import{T as N}from"./Layout.a66b6715.js";const Z=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(O,{boxSize:"$20",get fallback(){return e(_,{get color(){return T()},boxSize:"$20",get as(){return U(i.obj)}})},get src(){return i.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(y,{size:"lg",css:{wordBreak:"break-all"},get children(){return i.obj.name}}),e(I,{color:"$neutral10",size:"sm",get children(){return[h(()=>P(i.obj.size))," \xB7 ",h(()=>$(i.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),E=()=>{const r=b(),n=d(()=>k(i.obj.name)),{currentObjLink:s}=w();return e(g,{get when(){return n().length},get children(){return e(x,{get children(){return[e(L,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:G})},get children(){return r("home.preview.open_with")}}),e(S,{get children(){return e(A,{get each(){return n()},children:t=>e(D,{as:"a",target:"_blank",get href(){return v(t.value,{raw_url:i.raw_url,name:i.obj.name,d_url:s(!0)})},get children(){return t.key}})})}})]}})}})},p=r=>{const n=b(),{copyCurrentRawLink:s}=H();return e(Z,{get children(){return[e(f,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>s(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return i.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(E,{})}})]}})},q=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),J=r=>{const{currentObjLink:n}=w(),s=d(()=>v(r.scheme,{raw_url:i.raw_url,name:i.obj.name,d_url:n(!0)}));return e(R,{w:"$full",h:"70vh",get children(){return[e(V.iframe,{w:"$full",h:"$full",get src(){return s()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:N,onClick:()=>{window.open(s(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return j()},p:"$1",boxSize:"$7"})]}})},K=r=>()=>e(J,{scheme:r}),Q=[{name:"HTML render",exts:["html"],component:o(()=>a(()=>import("./html.bf04a021.js"),["assets/html.bf04a021.js","assets/index.6cb868e0.js","assets/index.d81a3e4b.css","assets/useUtil.2877fb57.js","assets/api.d8ba5a0b.js","assets/EncodingSelect.49c375b2.js"]))},{name:"Aliyun Video Previewer",type:u.VIDEO,provider:/^Aliyundrive(Open)?$/,component:o(()=>a(()=>import("./aliyun_video.ffa8eb3c.js"),["assets/aliyun_video.ffa8eb3c.js","assets/index.6cb868e0.js","assets/index.d81a3e4b.css","assets/useUtil.2877fb57.js","assets/api.d8ba5a0b.js","assets/icon.7ef57fcd.js","assets/index.4a5df914.js","assets/index.9d59aaa5.js","assets/Layout.a66b6715.js","assets/EncodingSelect.49c375b2.js","assets/index.1e125732.js","assets/FolderTree.8a692814.js","assets/video_box.d7e6a61c.js"]))},{name:"Markdown",type:u.TEXT,component:o(()=>a(()=>import("./markdown.0abcb126.js"),["assets/markdown.0abcb126.js","assets/index.6cb868e0.js","assets/index.d81a3e4b.css","assets/useUtil.2877fb57.js","assets/api.d8ba5a0b.js","assets/EncodingSelect.49c375b2.js"]))},{name:"Markdown with word wrap",type:u.TEXT,component:o(()=>a(()=>import("./markdown_with_word_wrap.6e2aa6ae.js"),["assets/markdown_with_word_wrap.6e2aa6ae.js","assets/index.6cb868e0.js","assets/index.d81a3e4b.css","assets/useUtil.2877fb57.js","assets/api.d8ba5a0b.js","assets/EncodingSelect.49c375b2.js"]))},{name:"Url Open",exts:["url"],component:o(()=>a(()=>import("./url.bbb29fd9.js"),["assets/url.bbb29fd9.js","assets/index.6cb868e0.js","assets/index.d81a3e4b.css","assets/useUtil.2877fb57.js","assets/api.d8ba5a0b.js","assets/icon.7ef57fcd.js","assets/index.4a5df914.js","assets/index.9d59aaa5.js","assets/Layout.a66b6715.js","assets/EncodingSelect.49c375b2.js","assets/index.1e125732.js","assets/FolderTree.8a692814.js"]))},{name:"Text Editor",type:u.TEXT,exts:["url"],component:o(()=>a(()=>import("./text-editor.dbfd7af4.js"),["assets/text-editor.dbfd7af4.js","assets/index.6cb868e0.js","assets/index.d81a3e4b.css","assets/useUtil.2877fb57.js","assets/api.d8ba5a0b.js","assets/EncodingSelect.49c375b2.js"]))},{name:"Image",type:u.IMAGE,component:o(()=>a(()=>import("./image.4359b7ab.js"),["assets/image.4359b7ab.js","assets/index.6cb868e0.js","assets/index.d81a3e4b.css","assets/ImageWithError.57983e52.js"]))},{name:"Video",type:u.VIDEO,component:o(()=>a(()=>import("./video.0d2e2097.js"),["assets/video.0d2e2097.js","assets/index.6cb868e0.js","assets/index.d81a3e4b.css","assets/useUtil.2877fb57.js","assets/api.d8ba5a0b.js","assets/icon.7ef57fcd.js","assets/index.4a5df914.js","assets/index.9d59aaa5.js","assets/Layout.a66b6715.js","assets/EncodingSelect.49c375b2.js","assets/index.1e125732.js","assets/FolderTree.8a692814.js","assets/video_box.d7e6a61c.js"]))},{name:"Audio",type:u.AUDIO,component:o(()=>a(()=>import("./audio.042a2719.js"),["assets/audio.042a2719.js","assets/audio.e5b5af14.css","assets/index.6cb868e0.js","assets/index.d81a3e4b.css","assets/useUtil.2877fb57.js","assets/api.d8ba5a0b.js","assets/icon.7ef57fcd.js","assets/index.4a5df914.js","assets/index.9d59aaa5.js","assets/Layout.a66b6715.js","assets/EncodingSelect.49c375b2.js","assets/index.1e125732.js","assets/FolderTree.8a692814.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:o(()=>a(()=>import("./ipa.2c138613.js"),["assets/ipa.2c138613.js","assets/index.6cb868e0.js","assets/index.d81a3e4b.css","assets/useUtil.2877fb57.js","assets/api.d8ba5a0b.js","assets/icon.7ef57fcd.js","assets/index.4a5df914.js","assets/index.9d59aaa5.js","assets/Layout.a66b6715.js","assets/EncodingSelect.49c375b2.js","assets/index.1e125732.js","assets/FolderTree.8a692814.js"]))},{name:"Plist",exts:["plist"],component:o(()=>a(()=>import("./plist.dcaac301.js"),["assets/plist.dcaac301.js","assets/index.6cb868e0.js","assets/index.d81a3e4b.css","assets/useUtil.2877fb57.js","assets/api.d8ba5a0b.js","assets/icon.7ef57fcd.js","assets/index.4a5df914.js","assets/index.9d59aaa5.js","assets/Layout.a66b6715.js","assets/EncodingSelect.49c375b2.js","assets/index.1e125732.js","assets/FolderTree.8a692814.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:o(()=>a(()=>import("./aliyun_office.7155b5c9.js"),["assets/aliyun_office.7155b5c9.js","assets/index.6cb868e0.js","assets/index.d81a3e4b.css"]))}],Y=r=>{const n=[];return Q.forEach(t=>{var c;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((c=t.exts)==null?void 0:c.includes(C(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),M(r.name).forEach(t=>{n.push({name:t.key,component:K(t.value)})}),n.push({name:"Download",component:o(()=>a(()=>Promise.resolve().then(()=>q),void 0))}),n},ee=()=>{const r=d(()=>Y({...i.obj,provider:i.provider})),[n,s]=z(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(f,{w:"$full",spacing:"$2",get children(){return[e(F,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{s(r().find(c=>c.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(E,{})]}}),e(B,{get fallback(){return e(W,{})},get children(){return e(X,{get component(){return n().component}})}})]}})}})},ie=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{Z as F,ie as a};
