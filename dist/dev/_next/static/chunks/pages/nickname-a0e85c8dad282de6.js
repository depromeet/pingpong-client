(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[945],{1034:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nickname",function(){return l(3013)}])},9807:function(e,t,l){"use strict";var s=l(5893),n=l(2989);let c=e=>{let{buttonStyle:t=n.S.PRIMARY,type:l="button",position:c="right",children:a,disabled:r=!1,onClick:i,className:u}=e;return(0,s.jsx)("div",{className:"flex w-full",children:(0,s.jsx)("button",{type:l,className:"btn-".concat(t.toLowerCase()," ").concat("text-button px-24 py-16 rounded-xl"," ").concat(u),onClick:i,disabled:r,children:a})})};t.Z=c},8794:function(e,t,l){"use strict";var s=l(5893),n=l(5675),c=l.n(n);let a=e=>{var t;let{type:l="text",onChange:n,className:a,showCount:r,error:i,maxLength:u=200,...o}=e,x=()=>{n&&n("")};return(0,s.jsxs)("div",{className:"relative w-full flex flex-col text-b2 ".concat(a),children:[(0,s.jsx)("input",{type:l,className:"w-full pl-[12px] pr-[46px] py-[12.5px] border border-gray-200 focus:border-primary-dark focus:outline-none placeholder:text-gray-300 rounded-[8px] ".concat(i&&"!border-primary-error"),onChange:e=>n&&n(e.target.value),maxLength:u,...o}),o.value&&(0,s.jsxs)("button",{type:"button",className:"absolute right-0 w-[20px] h-[20px] m-[13px] rounded-full my-[13px] bg-[#CFCFCF] grid place-items-center",onClick:x,children:[(0,s.jsx)("span",{className:"hidden",children:"내용 삭제"}),(0,s.jsx)("i",{className:"relative",children:(0,s.jsx)(c(),{src:"/icons/x-icon.svg",alt:"button",width:10,height:10})})]}),(0,s.jsxs)("div",{className:"".concat(i||r?"":"hidden"," flex w-full mt-2 text-b4 ").concat(i?"justify-between":"justify-end"),children:[i&&(0,s.jsx)("span",{className:"text-primary-error ml-1 ",children:i}),r&&(0,s.jsxs)("span",{className:"text-gray-400 !justify-self-end pt-[8px]",children:[null===(t=o.value)||void 0===t?void 0:t.length,"/",u,"자"]})]})]})};t.Z=a},2989:function(e,t,l){"use strict";l.d(t,{S:function(){return n},c:function(){return s}});let s={DARK:"DARK",LIGHT:"LIGHT",OUTLINE:"OUTLINE"},n={PRIMARY:"PRIMARY",SECONDARY:"SECONDARY"}},3013:function(e,t,l){"use strict";l.r(t);var s=l(5893),n=l(5675),c=l.n(n),a=l(1664),r=l.n(a),i=l(7294),u=l(9807),o=l(8794);let x=()=>{let[e,t]=(0,i.useState)("");return(0,s.jsx)("main",{className:"relatvie w-screen h-screen p-[16px]",children:(0,s.jsxs)("div",{className:"relative w-full h-full",children:[(0,s.jsxs)("h1",{className:"text-h2 pt-[15%]",children:["Ping-Pong에서 사용할",(0,s.jsx)("br",{}),"이름을 입력해주세요."]}),(0,s.jsxs)("ul",{className:"mt-[16px]",children:[(0,s.jsxs)("li",{className:"flex itesm-center gap-3 text-b3 text-gray-500",children:[(0,s.jsx)(c(),{src:"/icons/check.svg",alt:"check",width:10,height:10}),"공백 포함 2자 이상 10자 이하"]}),(0,s.jsxs)("li",{className:"flex itesm-center gap-3 text-b3 text-gray-500",children:[(0,s.jsx)(c(),{src:"/icons/check.svg",alt:"check",width:10,height:10}),"한글/영어만 사용이 가능해요"]})]}),(0,s.jsx)(o.Z,{className:"mt-[24px] flex",value:e,onChange:e=>t(e.replace(/[0-9]/,"")),placeholder:"이름을 입력해주세요."}),(0,s.jsx)("div",{className:"absolute left-0 bottom-0 w-full",children:(0,s.jsx)(r(),{href:"/",children:(0,s.jsx)(u.Z,{className:"w-full",onClick:()=>null,disabled:e.length<2||e.length>10,children:"완료"})})})]})})};t.default=x}},function(e){e.O(0,[675,664,774,888,179],function(){return e(e.s=1034)}),_N_E=e.O()}]);