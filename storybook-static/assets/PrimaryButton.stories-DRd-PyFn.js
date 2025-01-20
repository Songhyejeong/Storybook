import{j as n}from"./jsx-runtime-z8MfsBtr.js";import{a as D}from"./chunk-D5ZWXAHU-DlerbUHg.js";import"./index-C9rmetsa.js";import"./v4-CtRu48qb.js";const v="bg-primary text-white",T="bg-white text-primary",w="bg-social text-white",E="bg-mono200 text-white",M="disabled:bg-mono300 text-mono200",S={dark:v,light:T,social:w,text:E},f=({theme:s,onClick:y,children:B,isDisabled:k})=>n.jsx("button",{disabled:k,className:`w-full h-[59px]  rounded-primary-button ${M} ${S[s]}`,onClick:y,children:B});f.__docgenInfo={description:"",methods:[],displayName:"PrimaryButton",props:{theme:{required:!0,tsType:{name:"union",raw:"'dark' | 'light' | 'social' | 'text'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"},{name:"literal",value:"'social'"},{name:"literal",value:"'text'"}]},description:""},isDisabled:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"string"},description:""}}};const R={title:"Button/PrimaryButton",component:f,parameters:{layout:"centered"},tags:["autodocs"],decorators:[s=>n.jsx("div",{style:{width:"360px",height:"100%"},children:n.jsx(s,{})})],argTypes:{children:{control:"text",description:"PrimaryButton의 내용"},theme:{control:"select",options:["dark","light","social","text"],description:"버튼 테마",defaultValue:"dark"},isDisabled:{control:"boolean",description:"버튼 비활성화 여부",defaultValue:!1}},args:{onClick:D("Button clicked")}},e={args:{children:"Button",theme:"dark",isDisabled:!1}},t={args:{children:"Button",theme:"light",isDisabled:!1}},r={args:{children:"Button",theme:"social",isDisabled:!1}},a={args:{children:"Button",theme:"text",isDisabled:!1}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    theme: 'dark',
    isDisabled: false
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    theme: 'light',
    isDisabled: false
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    theme: 'social',
    isDisabled: false
  }
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,x,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    theme: 'text',
    isDisabled: false
  }
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const _=["Dark","Light","Social","Text"];export{e as Dark,t as Light,r as Social,a as Text,_ as __namedExportsOrder,R as default};
