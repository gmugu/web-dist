import{e,bs as i,aa as w,u as y,n as b,c as k,aI as r,bk as c,bL as R,o as C,V as o,m as x,a7 as L,al as T,I as B,X as F,B as g,bn as H,cr as N,aJ as V}from"./index.6cb868e0.js";const W=n=>e(i,{get children(){return n.content}}),z=n=>e(w,{get src(){return n.content}}),D={string:W,image:z},M=()=>{const n=y();b.info(n("manage.messenger-tips"));const[a,l]=k(""),[u,d]=r(()=>c.post("/admin/message/get")),[p,m]=r(()=>c.post("/admin/message/send",{message:a()})),[h,S]=R([]),s=async()=>{const t=await d();H(t,f=>{S(N($=>$.push(f)))})},I=async()=>{const t=await m();V(t)},v=setInterval(s,1e3);return C(()=>clearInterval(v)),e(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return n("manage.received_msgs")}}),e(x,{each:h,children:t=>e(L,T({get component(){return D[t.type]}},t))})]}}),e(B,{w:"$full",get value(){return a()},onInput:t=>l(t.currentTarget.value)}),e(F,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return u()},onClick:s,get children(){return n("manage.receive")}}),e(g,{get loading(){return p()},onClick:I,get children(){return n("manage.send")}})]}})]}})};export{M as Messenger,D as Shower,M as default};
