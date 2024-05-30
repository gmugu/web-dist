import{bk as n,b as c}from"./index.fe3486ef.js";const i=(s="/",t="")=>n.post("/fs/get",{path:s,password:t}),u=(s="/",t="",e=1,o=0,r=!1,a)=>n.post("/fs/list",{path:s,password:t,page:e,per_page:o,refresh:r},{cancelToken:a}),d=(s="/",t="",e=!1)=>n.post("/fs/dirs",{path:s,password:t,force_root:e}),m=s=>n.post("/fs/mkdir",{path:s}),y=(s,t)=>n.post("/fs/rename",{path:s,name:t}),v=(s,t)=>n.post("/fs/batch_rename",{src_dir:s,rename_objects:t}),h=(s,t,e)=>n.post("/fs/move",{src_dir:s,dst_dir:t,names:e}),l=(s,t)=>n.post("/fs/recursive_move",{src_dir:s,dst_dir:t}),b=(s,t,e)=>n.post("/fs/copy",{src_dir:s,dst_dir:t,names:e}),w=(s,t)=>n.post("/fs/remove",{dir:s,names:t}),x=s=>n.post("/fs/remove_empty_directory",{src_dir:s}),R=(s,t)=>n.put("/fs/put",void 0,{headers:{"File-Path":encodeURIComponent(s),Password:t}}),_=(s,t,e)=>n.post(`/fs/add_${e}`,{path:s,urls:t}),f=async(s,t=!0)=>{try{const e=await c.get(s,{responseType:"blob",params:t?{ts:new Date().getTime()}:void 0}),o=await e.data.arrayBuffer(),r=e.headers["content-type"];return{content:o,contentType:r}}catch(e){return t?await f(s,!1):{content:`Failed to fetch ${s}: ${e}`,contentType:""}}},T=async(s,t,e="",o=0,r=1,a=100)=>n.post("/fs/search",{parent:s,keywords:t,scope:o,page:r,per_page:a,password:e}),g=async(s=["/"],t=-1)=>n.post("/admin/index/build",{paths:s,max_depth:t}),k=async(s=[],t=-1)=>n.post("/admin/index/update",{paths:s,max_depth:t});export{f as a,b,h as c,w as d,y as e,u as f,R as g,m as h,l as i,x as j,v as k,i as l,d as m,T as n,_ as o,g as p,k as u};
