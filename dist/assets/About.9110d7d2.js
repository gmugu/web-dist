import{u as a,Q as r,e as t,U as o}from"./index.6cb868e0.js";import{o as n}from"./index.4a5df914.js";import{M as s}from"./EncodingSelect.49c375b2.js";import"./useUtil.2877fb57.js";import"./api.d8ba5a0b.js";const i=async()=>await(await fetch("https://jsd.nn.ci/gh/alist-org/alist@main/README.md")).text(),l=()=>{a(),n("manage.sidemenu.about");const[e]=r(i);return t(o,{get loading(){return e.loading},get children(){return t(s,{get children(){return e()}})}})};export{l as default};
