import{a as I,N as i,an as S,cx as y,bY as j,aI as L,bk as N,_ as O,ar as P,bq as g,n as w,o as W,c as q,e as v,R as A}from"./index.fe3486ef.js";import{a as C}from"./useUtil.fc181264.js";import{O as R}from"./icon.8a2859dd.js";import{A as T,V as z}from"./video_box.b0d04bc0.js";import{H as B,a as V}from"./hls.6cf5bc55.js";import"./api.7559bd6f.js";import"./index.e051a4ab.js";import"./index.79d73f9f.js";import"./Layout.bd4089bd.js";import"./EncodingSelect.39cba868.js";import"./index.321e0edd.js";import"./FolderTree.940f876e.js";const ee=()=>{const{replace:_,pathname:c}=I(),{proxyLink:p}=C();let s=i.objs.filter(e=>e.type===R.VIDEO);s.length===0&&(s=[i.obj]);let a,l={id:c(),container:"#video-player",title:i.obj.name,volume:.5,autoplay:S("video_autoplay"),autoSize:!1,autoMini:!0,loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[],whitelist:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},type:"m3u8",customType:{m3u8:function(e,n){const t=new B;t.loadSource(n),t.attachMedia(e),e.src||(e.src=n)}},lang:["en","zh-cn","zh-tw"].includes(y().toLowerCase())?y().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0};const u=i.related.find(e=>{for(const n of[".srt",".ass",".vtt"])if(e.name.endsWith(n))return!0;return!1}),d=i.related.find(e=>{for(const n of[".xml"])if(e.name.endsWith(n))return!0;return!1});u&&(l.subtitle={url:p(u,!0),type:j(u.name)}),d&&(l.plugins=[V({danmuku:p(d,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"})]);const[M,f]=L(()=>N.post("/fs/other",{path:c(),password:O(),method:"video_preview"}));P(async()=>{const e=await f();g(e,n=>{const t=n.video_preview_play_info.live_transcoding_task_list.filter(r=>r.url);if(t.length===0){w.error("No transcoding video found");return}l.url=t[t.length-1].url,l.quality=t.map((r,o)=>({html:r.template_id,url:r.url,default:o===t.length-1})),a=new T(l),a.on("video:ended",()=>{if(!k())return;const r=s.findIndex(o=>o.name===i.obj.name);r<s.length-1&&_(s[r+1].name)}),u&&a.on("video:play",r=>{a.subtitle.url=p(u,!0)}),m=window.setInterval(b,1e3*60*14)})});let m,h;async function b(){const e=await f();g(e,async n=>{const t=n.video_preview_play_info.live_transcoding_task_list.filter(o=>o.url);if(t.length===0){w.error("No transcoding video found");return}const r=t.map((o,F)=>({html:o.template_id,url:o.url,default:F===t.length-1}));a.quality=r,h=a.currentTime,await a.switchUrl(r[r.length-1].url),setTimeout(()=>{a.seek=h},1e3)})}W(()=>{a==null||a.destroy(),window.clearInterval(m)});const[k,x]=q();return v(z,{onAutoNextChange:x,get children(){return v(A,{w:"$full",h:"60vh",id:"video-player"})}})};export{ee as default};
