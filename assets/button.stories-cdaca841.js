import{r as q}from"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";var F={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=q,C=Symbol.for("react.element"),I=Symbol.for("react.fragment"),V=Object.prototype.hasOwnProperty,A=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D={key:!0,ref:!0,__self:!0,__source:!0};function $(a,r,s){var e,t={},n=null,f=null;s!==void 0&&(n=""+s),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(f=r.ref);for(e in r)V.call(r,e)&&!D.hasOwnProperty(e)&&(t[e]=r[e]);if(a&&a.defaultProps)for(e in r=a.defaultProps,r)t[e]===void 0&&(t[e]=r[e]);return{$$typeof:C,type:a,key:n,ref:f,props:t,_owner:A.current}}p.Fragment=I;p.jsx=$;p.jsxs=$;F.exports=p;var U=F.exports;const J="_button_x4cly_1",Y="_primary_x4cly_23",z="_secondary_x4cly_40",G="_tertiary_x4cly_57",H="_link_x4cly_77",K="_fullWidth_x4cly_96",m={button:J,primary:Y,secondary:z,tertiary:G,link:H,fullWidth:K},y=a=>{const{variant:r="primary",fullWidth:s,className:e,as:t="button",...n}=a;return U.jsx(t,{className:`${m.button} ${m[r]} ${s?m.fullWidth:""} ${e}`,...n})};try{y.displayName="Button",y.__docgenInfo={description:"",displayName:"Button",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const X={title:"Components/Button",component:y,tags:["autodocs"],argTypes:{variant:{options:["primary","secondary","tertiary","link"],control:{type:"radio"}}}},o={args:{variant:"primary",children:"Primary Button",disabled:!1}},i={args:{variant:"secondary",children:"Secondary Button",disabled:!1}},l={args:{variant:"tertiary",children:"Tertiary Button",disabled:!1}},c={args:{variant:"link",children:"Tertiary Button",disabled:!1}},d={args:{variant:"primary",children:"Full Width Button",disabled:!1,fullWidth:!0}},u={args:{variant:"primary",children:"Link that looks like a button",as:"a"}};var _,h,v;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: false
  }
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var g,b,k;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    disabled: false
  }
}`,...(k=(b=i.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var x,B,S;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
    disabled: false
  }
}`,...(S=(B=l.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var W,T,E;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    children: 'Tertiary Button',
    disabled: false
  }
}`,...(E=(T=c.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var L,N,O;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true
  }
}`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var P,R,j;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Link that looks like a button',
    as: 'a'
  }
}`,...(j=(R=u.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};const Z=["Primary","Secondary","Tertiary","Link","FullWidth","AsLink"];export{u as AsLink,d as FullWidth,c as Link,o as Primary,i as Secondary,l as Tertiary,Z as __namedExportsOrder,X as default};
//# sourceMappingURL=button.stories-cdaca841.js.map
