import{u as y,aI as o,bk as d,c as C,e,c8 as I,D as _,V as g,bs as T,aL as x,S as m,bO as V,bP as F,B as i,bq as u,n as z,bM as H,m as B,o as X,k as j,X as q,al as N}from"./index.fe3486ef.js";import{P as O}from"./Paginator.2f649000.js";const A={errored:"danger",succeeded:"success",canceled:"neutral"},E=t=>{const r=y();return e(H,{get colorScheme(){var a;return(a=A[t.state])!=null?a:"info"},get children(){return r(`tasks.${t.state}`)}})},G=t=>{const r=y(),a=t.done==="undone"?"cancel":"delete",h=t.done==="done"&&t.state==="errored",[$,w]=o(()=>d.post(`/admin/task/${t.type}/${a}?tid=${t.id}`)),[s,f]=o(()=>d.post(`/admin/task/${t.type}/retry?tid=${t.id}`)),[b,k]=C(!1);return e(m,{get when(){return!b()},get children(){return e(I,{get bgColor(){return _("$background","$neutral3")()},w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[e(g,{w:"$full",alignItems:"start",spacing:"$1",get children(){return[e(T,{size:"sm",css:{wordBreak:"break-all"},get children(){return t.name}}),e(E,{get state(){return t.state}}),e(x,{css:{wordBreak:"break-all"},get children(){return t.status}}),e(m,{get when(){return t.error},get children(){return e(x,{color:"$danger9",css:{wordBreak:"break-all"},get children(){return t.error}})}}),e(V,{w:"$full",trackColor:"$info3",rounded:"$full",size:"sm",get value(){return t.progress},get children(){return e(F,{color:"$info8",rounded:"$md"})}})]}}),e(I,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return[e(m,{get when(){return t.canRetry},get children(){return e(i,{disabled:!h,display:h?"block":"none",get loading(){return s()},onClick:async()=>{const c=await f();u(c,()=>{z.info(r("tasks.retry")),k(!0)})},get children(){return r("tasks.retry")}})}}),e(i,{colorScheme:"danger",get loading(){return $()},onClick:async()=>{const c=await w();u(c,()=>{z.success(r("global.delete_success")),k(!0)})},get children(){return r(`global.${a}`)}})]}})]}})}})},J=t=>{const r=y(),[a,h]=o(()=>d.get(`/admin/task/${t.type}/${t.done}`)),[$,w]=C([]),s=async()=>{const n=await h();u(n,l=>{var P;return w((P=l==null?void 0:l.sort((D,M)=>D.id>M.id?1:-1))!=null?P:[])})};if(s(),t.done==="undone"){const n=setInterval(s,2e3);X(()=>clearInterval(n))}const[f,b]=o(()=>d.post(`/admin/task/${t.type}/clear_done`)),[k,c]=o(()=>d.post(`/admin/task/${t.type}/clear_succeeded`)),[v,L]=C(1),S=20,R=j(()=>{const n=(v()-1)*S,l=n+S;return $().slice(n,l)});return e(g,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[e(T,{size:"lg",get children(){return r(`tasks.${t.done}`)}}),e(m,{get when(){return t.done==="done"},get children(){return e(q,{spacing:"$2",get children(){return[e(i,{colorScheme:"accent",get loading(){return a()},onClick:s,get children(){return r("global.refresh")}}),e(i,{get loading(){return f()},onClick:async()=>{const n=await b();u(n,()=>s())},get children(){return r("global.clear")}}),e(i,{colorScheme:"success",get loading(){return k()},onClick:async()=>{const n=await c();u(n,()=>s())},get children(){return r("tasks.clear_succeeded")}})]}})}}),e(g,{w:"$full",spacing:"$2",get children(){return e(B,{get each(){return R()},children:n=>e(G,N(n,t))})}}),e(O,{get total(){return $().length},defaultPageSize:S,onChange:n=>{L(n)}})]}})},U=t=>{const r=y();return e(g,{w:"$full",alignItems:"start",spacing:"$4",get children(){return[e(T,{size:"xl",get children(){return r(`tasks.${t.type}`)}}),e(g,{w:"$full",spacing:"$2",get children(){return e(B,{each:["undone","done"],children:a=>e(J,{get type(){return t.type},done:a,get canRetry(){return t.canRetry}})})}})]}})};export{U as T};
