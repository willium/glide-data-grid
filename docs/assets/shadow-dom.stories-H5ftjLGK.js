import{j as e,a as u,F as h}from"./marked.esm-dbrxtycE.js";import{R as l}from"./index-BMVQvedj.js";import{D as f}from"./data-editor-all-QKtwKayM.js";import{B as w,D,P as g,u as R,d as S}from"./utils-R4daMEP1.js";import{S as y}from"./story-utils-K2EZnGjM.js";import{R as C}from"./index-wocATsGp.js";import"./iframe-ai2fO41v.js";import"../sb-preview/runtime.js";import"./image-window-loader-ArmVyMQr.js";import"./throttle-7EuXLZa7.js";import"./_baseIteratee-WTHxv43n.js";import"./flatten-qRvRBp6y.js";import"./scrolling-data-grid-8mduaMVo.js";import"./index-PWBWJyi_.js";import"./index.esm-Ejw8GwRl.js";const q={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e(y,{children:e(w,{title:"Shadow DOM",description:u(D,{children:["Columns in the data grid may be grouped by setting their ",e(g,{children:"group"})," ","property."]}),children:e(t,{})})})]},c=()=>{const{cols:t,getCellContent:o}=R(20,!1,!1);return e(E,{render:()=>e(f,{...S,getCellContent:o,columns:t,rows:1e3,height:"100%",rowMarkers:"both"})})},M=t=>{const o=document.createElement("style");for(const r of document.styleSheets)try{if(r.cssRules!==void 0){const s=[...r.cssRules].map(i=>i.cssText).join(`
`);o.append(document.createTextNode(s))}}catch(s){console.warn("Cannot access stylesheet rules due to CORS policy",s)}t.append(o)},E=({className:t,render:o})=>{const r=l.useRef(null),s=l.useRef(!0);return l.useEffect(()=>{if(r.current===null||s.current){s.current=!1;return}const a=r.current.attachShadow({mode:"open"});window.glideShadowRoot=a,M(a);const n=document.createElement("div");return n.style.height="100%",a.append(n),a.pare,C.render(e(h,{children:o()}),n),()=>{n.remove()}},[o]),e("div",{ref:r,className:t,style:{height:"100%"}})};var d,p,m;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(20, false, false);
  return <ShadowDOMWrapper render={() => <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={1000} height={"100%"} rowMarkers="both" />} />;
}`,...(m=(p=c.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const z=["ShadowDOM"];export{c as ShadowDOM,z as __namedExportsOrder,q as default};
