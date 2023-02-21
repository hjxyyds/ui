"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");const r=e.defineComponent({name:"SButton",setup(t,{slots:n}){return()=>e.createVNode("button",{class:`
      py-2 
      px-4 
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white 
      bg-green-500 
      hover:bg-green-700 
      border-none 
      cursor-pointer 
      `},[n.default?n.default():""])}}),d={name:"SFCButton"},l=(t,n)=>{const o=t.__vccOpts||t;for(const[s,a]of n)o[s]=a;return o};function m(t,n,o,s,a,i){return e.openBlock(),e.createElementBlock("button",null,"SFC Button")}const u=l(d,[["render",m]]),c=e.defineComponent({name:"JSXButton",render(){return e.createVNode("button",null,[e.createTextVNode("JSX Button")])}}),p={install(t){t.component(r.name,r),t.component(u.name,u),t.component(c.name,c)}};exports.JSXButton=c;exports.MyButton=r;exports.SFCButton=u;exports.default=p;
//# sourceMappingURL=smarty-ui.js.map
