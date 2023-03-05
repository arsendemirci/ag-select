(function(){"use strict";var e={730:function(e,t,l){var o=l(963),a=l(252),n=l(577);const i=e=>((0,a.dD)("data-v-9bdabcce"),e=e(),(0,a.Cn)(),e),d={class:"wrapper"},s=i((()=>(0,a._)("header",null,[(0,a._)("h1",null,"Ag Select"),(0,a._)("h3",null,"vue3 select component")],-1))),r=i((()=>(0,a._)("h2",null,"Primitive model example",-1))),u=i((()=>(0,a._)("p",null," You can output a primitive value while your list is still with key and values as in the example below: ",-1))),c={class:"v-model"},p={class:"value"},m=i((()=>(0,a._)("h2",null,"Object model example",-1))),v=i((()=>(0,a._)("p",null," If you need both key and value as an object binded to the component check this example: ",-1))),h={class:"v-model"},f={class:"value"},g=i((()=>(0,a._)("h2",null,"Select with search",-1))),_=i((()=>(0,a._)("p",null,[(0,a.Uk)(" Search functionality is optional you can enable it by just adding "),(0,a._)("b",null,"search"),(0,a.Uk)(" attribute, see example below: ")],-1))),x={class:"v-model"},w={class:"value"},b=i((()=>(0,a._)("h2",null,"Select from array of strings",-1))),y=i((()=>(0,a._)("p",null," You can populate the select list with array of primitives instead of objects, your model output will be primitive automatically. ",-1))),V={class:"v-model"},k={class:"value"},O=i((()=>(0,a._)("h2",null,"Select With Custom Template",-1))),S=i((()=>(0,a._)("p",null,[(0,a.Uk)(" you can use "),(0,a._)("b",null,"option"),(0,a.Uk)(" slot to customize the select item with your own template, see the example: ")],-1))),C={class:"option"},U={class:"option-value"},L={class:"option-text"},P={class:"v-model"},j={class:"value"};function I(e,t,l,o,i,I){const T=(0,a.up)("ag-select");return(0,a.wg)(),(0,a.iD)("div",d,[s,(0,a._)("div",null,[r,u,(0,a.Wm)(T,{options:i.languages,"read-text":"text","read-value":"id",placeholder:"Select Language",modelValue:i.model1,"onUpdate:modelValue":t[0]||(t[0]=e=>i.model1=e)},null,8,["options","modelValue"]),(0,a._)("div",c,[(0,a.Uk)(" Model Value : "),(0,a._)("span",p,(0,n.zw)(i.model1),1)])]),(0,a._)("div",null,[m,v,(0,a.Wm)(T,{options:i.languages,"read-text":"text","read-value":"id",placeholder:"Select Language",modelValue:i.model2,"onUpdate:modelValue":t[1]||(t[1]=e=>i.model2=e)},null,8,["options","modelValue"]),(0,a._)("div",h,[(0,a.Uk)(" Model Value : "),(0,a._)("span",f,(0,n.zw)(i.model2),1)])]),(0,a._)("div",null,[g,_,(0,a.Wm)(T,{options:i.languages,"read-text":"text","read-value":"id",placeholder:"Select Language",search:"",modelValue:i.model3,"onUpdate:modelValue":t[2]||(t[2]=e=>i.model3=e)},null,8,["options","modelValue"]),(0,a._)("div",x,[(0,a.Uk)(" Model Value : "),(0,a._)("span",w,(0,n.zw)(i.model3),1)])]),(0,a._)("div",null,[b,y,(0,a.Wm)(T,{options:i.friends,placeholder:"Select Friend",modelValue:i.model4,"onUpdate:modelValue":t[3]||(t[3]=e=>i.model4=e)},null,8,["options","modelValue"]),(0,a._)("div",V,[(0,a.Uk)(" Model Value : "),(0,a._)("span",k,(0,n.zw)(i.model4),1)])]),(0,a._)("div",null,[O,S,(0,a.Wm)(T,{options:i.languages,"read-value":"id","read-text":"text",placeholder:"Select Language",modelValue:i.model5,"onUpdate:modelValue":t[4]||(t[4]=e=>i.model5=e)},{option:(0,a.w5)((({value:e,text:t})=>[(0,a._)("div",C,[(0,a._)("div",U,(0,n.zw)(e),1),(0,a._)("div",L,(0,n.zw)(t),1)])])),_:1},8,["options","modelValue"]),(0,a._)("div",P,[(0,a.Uk)(" Model Value : "),(0,a._)("span",j,(0,n.zw)(i.model5),1)])])])}var T=l(262);const M=["id"],A=["onClick"],z={key:0,class:"search"},R=["id"],D=["id","onClick"];var F={__name:"AgSelect",props:{options:Array,placeholder:String,readValue:String,readText:String,search:Boolean,value:[String,Number,Object],modelValue:[String,Number,Object]},emits:["update:modelValue"],setup(e,{emit:t}){const l=e,i="search_"+Math.floor(100*Math.random()),d="wrapper_"+Math.floor(100*Math.random());(0,a.bv)((()=>{x()}));const s=(0,T.qj)({selectedOption:null,openList:!1,immediateRan:!1,searchVal:"",searchId:i,wrapperId:d,openAbove:!1,isPrimitive:(0,a.Fl)((()=>l.options&&l.options[0]&&!("object"==typeof l.options[0]||"function"==typeof l.options[0])))}),r=(0,a.Fl)((()=>s.selectedOption?s.selectedOption.text:l.placeholder)),u=(0,a.Fl)((()=>{let e=l.options;return e.length?(e=e.map((e=>({value:s.isPrimitive?e:e[l.readValue],text:s.isPrimitive?e:e[l.readText]}))),l.search&&s.searchVal?e.filter((e=>e.text.toLocaleLowerCase("tr-TR").includes(s.searchVal.toLocaleLowerCase("tr-TR")))):e):[]})),c=(0,a.Fl)((()=>!("object"==typeof l.modelValue||"function"==typeof l.modelValue)));function p(e){s.selectedOption={value:e.value,text:e.text},_()}const m=e=>{(!e.relatedTarget||e.relatedTarget.id!=s.searchId&&e.relatedTarget.id!=s.wrapperId)&&(s.openList=!1)};function v(e){return!!s.selectedOption&&s.selectedOption.value==(s.isPrimitive?e:e.value)}const h=e=>{e.target===e.currentTarget&&(s.openList=!s.openList,s.openList&&l.search&&document.getElementById(s.searchId).focus())},f=e=>{s.searchVal=e.target.value},g=()=>{s.selectedOption=null,_()},_=()=>{t("update:modelValue",c.value||s.isPrimitive?s.selectedOption?s.selectedOption.value:null:s.selectedOption),s.openList=!1},x=()=>{const e=document.getElementById(s.wrapperId),t=e.getBoundingClientRect(),l=window.innerHeight-t.bottom;s.openAbove=l<300};return(0,a.YP)((()=>l.modelValue),(e=>{if(e){let t;t=e.value?u.value.find((t=>t.value==e.value)):u.value.find((t=>t.value==e)),s.selectedOption=t?{value:t.value,text:t.text}:null}else s.selectedOption=null}),{immediate:!0}),(0,a.YP)((()=>s.openList),(e=>{e&&x()})),(e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,n.C_)(["select-wrapper",{open:s.openList}]),onClick:h,tabindex:"-1",onBlur:m,id:s.wrapperId},[(0,a._)("div",{class:"current",onClick:h},[(0,a._)("span",{class:(0,n.C_)({"is-selected":!!s.selectedOption}),onClick:h},(0,n.zw)((0,T.SU)(r)),3),s.selectedOption?((0,a.wg)(),(0,a.iD)("i",{key:0,onClick:(0,o.iM)(g,["stop"]),class:"clear"},"×",8,A)):(0,a.kq)("",!0)]),(0,a._)("div",{class:(0,n.C_)(["list-wrapper",{"show-up":s.openAbove}])},[l.search?((0,a.wg)(),(0,a.iD)("div",z,[(0,a._)("input",{onInput:f,type:"text",id:s.searchId,placeholder:"Search",onBlur:m},null,40,R)])):(0,a.kq)("",!0),(0,a._)("ul",{class:(0,n.C_)(["list",{"search-list":l.search}])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,T.SU)(u),((t,l)=>((0,a.wg)(),(0,a.iD)("li",{class:(0,n.C_)([{selected:v(t)},"option"]),key:l+1,id:"ag__opt"+(l+1),onClick:(0,o.iM)((()=>{p(t)}),["stop"])},[(0,a.WI)(e.$slots,"option",(0,n.vs)((0,a.F4)(t)),(()=>[(0,a.Uk)((0,n.zw)(t["text"]),1)]))],10,D)))),128))],2)],2)],42,M))}},W=l(744);const B=(0,W.Z)(F,[["__scopeId","data-v-d267a98a"]]);var J=B,Y={name:"App",data(){return{model1:12,model2:{value:1,text:"VueJS"},model3:{value:3,text:"Angular"},model4:"",model5:null,languages:[{id:1,text:"VueJS"},{id:2,text:"ReactJS"},{id:3,text:"Angular"},{id:4,text:"JavaScript"},{id:5,text:"Go"},{id:6,text:"Java"},{id:7,text:"Python"},{id:8,text:"ASP.NET"},{id:9,text:"C#"},{id:10,text:"Perl"},{id:11,text:"Swift"},{id:12,text:"TypeScript"},{id:13,text:"PHP"},{id:14,text:"Kotlin"},{id:15,text:"Ruby"},{id:16,text:"Rust"}],friends:["Ross","Rachel","Chandler","Monica","Joey","Phoebe"]}},components:{AgSelect:J}};const E=(0,W.Z)(Y,[["render",I],["__scopeId","data-v-9bdabcce"]]);var q=E;(0,o.ri)(q).mount("#app")}},t={};function l(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,l),n.exports}l.m=e,function(){var e=[];l.O=function(t,o,a,n){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],n=e[u][2];for(var d=!0,s=0;s<o.length;s++)(!1&n||i>=n)&&Object.keys(l.O).every((function(e){return l.O[e](o[s])}))?o.splice(s--,1):(d=!1,n<i&&(i=n));if(d){e.splice(u--,1);var r=a();void 0!==r&&(t=r)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[o,a,n]}}(),function(){l.d=function(e,t){for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,n,i=o[0],d=o[1],s=o[2],r=0;if(i.some((function(t){return 0!==e[t]}))){for(a in d)l.o(d,a)&&(l.m[a]=d[a]);if(s)var u=s(l)}for(t&&t(o);r<i.length;r++)n=i[r],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(u)},o=self["webpackChunkag_select"]=self["webpackChunkag_select"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=l.O(void 0,[998],(function(){return l(730)}));o=l.O(o)})();
//# sourceMappingURL=app.09a1e14c.js.map