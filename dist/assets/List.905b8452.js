import{e as t,X as l,v as $,az as h,aC as b,ct as u,S as f,aA as w,ad as p,a3 as k,ac as A,aL as a,bN as y,c0 as C,u as v,c as d,d as S,cu as I,cv as z,cw as O,al as m,m as P,N as M,V as L}from"./index.fe3486ef.js";import{b as B}from"./Folder.f9bebc2b.js";import{u as E}from"./index.321e0edd.js";import{d as T}from"./useUtil.fc181264.js";import{p as D}from"./index.79d73f9f.js";import{g as F,O as H}from"./icon.8a2859dd.js";import{I as j}from"./helper.69ccffd9.js";import{M as N}from"./Layout.bd4089bd.js";import"./video_box.b0d04bc0.js";import"./index.e051a4ab.js";import"./Paginator.2f649000.js";import"./api.7559bd6f.js";import"./EncodingSelect.39cba868.js";import"./FolderTree.940f876e.js";const r=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],V=e=>{const{isHide:o}=T();if(o(e.obj))return null;const{setPathAs:c}=E(),{show:s}=B({id:1});return t(N.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(l,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:$()}},as:D,get href(){return e.obj.name},onMouseEnter:()=>{c(e.obj.name,e.obj.is_dir,!0)},onContextMenu:n=>{h(()=>{b(!1),u(e.index,!0,!0)}),s(n,{props:e.obj})},get children(){return[t(l,{class:"name-box",spacing:"$1",get w(){return r[0].w},get children(){return[t(f,{get when(){return w()},get children(){return t(j,{"on:click":n=>{n.stopPropagation()},get checked(){return e.obj.selected},onChange:n=>{u(e.index,n.target.checked)}})}}),t(p,{class:"icon",boxSize:"$6",get color(){return k()},get as(){return F(e.obj)},mr:"$1","on:click":n=>{e.obj.type===H.IMAGE&&(n.stopPropagation(),n.preventDefault(),A.emit("gallery",e.obj.name))}}),t(a,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),t(a,{class:"size",get w(){return r[1].w},get textAlign(){return r[1].textAlign},get children(){return y(e.obj.size)}}),t(a,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return r[2].w},get textAlign(){return r[2].textAlign},get children(){return C(e.obj.modified)}})]}})}})},re=()=>{const e=v(),[o,c]=d(),[s,n]=d(!1);S(()=>{o()&&I(o(),s())});const g=i=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:i.textAlign,cursor:"pointer",onClick:()=>{i.name===o()?n(!s()):h(()=>{c(i.name),n(!1)})}});return t(L,{class:"list",w:"$full",spacing:"$1",get children(){return[t(l,{class:"title",w:"$full",p:"$2",get children(){return[t(l,{get w(){return r[0].w},spacing:"$1",get children(){return[t(f,{get when(){return w()},get children(){return t(j,{get checked(){return z()},get indeterminate(){return O()},onChange:i=>{b(i.target.checked)}})}}),t(a,m(()=>g(r[0]),{get children(){return e(`home.obj.${r[0].name}`)}}))]}}),t(a,m({get w(){return r[1].w}},()=>g(r[1]),{get children(){return e(`home.obj.${r[1].name}`)}})),t(a,m({get w(){return r[2].w}},()=>g(r[2]),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${r[2].name}`)}}))]}}),t(P,{get each(){return M.objs},children:(i,x)=>t(V,{obj:i,get index(){return x()}})})]}})};export{re as default};
