import{j as e,a as r,F as m}from"./marked.esm-dbrxtycE.js";import"./index-BMVQvedj.js";import{D as d}from"./data-editor-all-vh5PYcJs.js";import{B as c,D as u,P as C,M as h,u as g,d as f}from"./utils-O3xu-yRM.js";import{S as D}from"./story-utils-K2EZnGjM.js";import"./iframe-qD4w8K__.js";import"../sb-preview/runtime.js";import"./image-window-loader-ae1-l40w.js";import"./throttle-7EuXLZa7.js";import"./_baseIteratee-WTHxv43n.js";import"./flatten-qRvRBp6y.js";import"./scrolling-data-grid-GIDCmpe8.js";import"./index-PWBWJyi_.js";import"./index.esm-Ejw8GwRl.js";import"./index-wocATsGp.js";const V={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e(D,{children:e(c,{title:"Copy support",description:r(m,{children:[r(u,{children:["Large amounts of data can be copied and customized using"," ",e(C,{children:"getCellsForSelection"}),"."]}),e(h,{children:"The data is copied into a format ready to be pasted into Excel or Google Sheets"}),e("textarea",{placeholder:"Copy something below and paste it here...",style:{width:"100%",marginBottom:20,borderRadius:9,minHeight:200,padding:10}})]}),children:e(t,{})})})]},o=()=>{const{cols:t,getCellContent:i,onColumnResize:l,setCellValue:p}=g(10,!1);return e(d,{...f,getCellContent:i,rowMarkers:"both",columns:t,onCellEdited:p,onColumnResize:l,rows:400})};var a,s,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useMockDataGenerator(10, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} rowMarkers="both" columns={cols} onCellEdited={setCellValue} onColumnResize={onColumnResize} rows={400} />;
}`,...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const _=["CopySupport"];export{o as CopySupport,_ as __namedExportsOrder,V as default};