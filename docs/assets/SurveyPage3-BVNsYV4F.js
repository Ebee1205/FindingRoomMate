import{B as N,V as c,_ as U}from"./VLabel-5BJrJH49.js";import{_ as j,r as n,o as C,a as h,q as f,c as w,w as s,b as B,d as t,h as F,f as d,g as P,m as E}from"./index-DzJmHazX.js";import{V}from"./VSelect-CbHD9Ft0.js";import{V as S}from"./VTextField-qbQIaGqn.js";import"./VInput-MOF2dALf.js";import"./VSelectionControl-Bh6TJgY3.js";import"./VChip-C2b9vwAI.js";const J="흡연/음주",O="자신의 흡연과 음주 습관에 대해 솔직하게 공유해주세요.",T={__name:"SurveyPage3",setup(L){const g=n(0),y=n([{title:"비흡연",value:0},{title:"연초",value:1},{title:"전자담배",value:2}]),i=n(null),r=n(null),p=n(0),$=n([{title:"주",value:0},{title:"달",value:1}]),u=n(null),m=n("");C(()=>{b()}),h(()=>{}),f(g,(l,e)=>{console.log(`--- smoke changed from ${e} to ${l}`),v("smoke",l)}),f([r,p,u],([l,e,o],[a,I,k])=>{console.log(`dymCnt changed from ${a} to ${l}`),console.log(`dym changed from ${I} to ${e}`),console.log(`drinkCnt changed from ${k} to ${o}`);const _=`${String(l).padStart(2,"0")}-${e}-${String(o).padStart(2,"0")}`;i.value=_,console.log(`Formatted drink: ${i.value}`),v("drink",i.value)}),f(m,(l,e)=>{console.log(`--- sdEtc changed from ${e} to ${l}`),v("sdEtc",l)});function b(){localStorage.setItem("userProgress",JSON.stringify({currentStep:3})),console.log("Updated localStorage userProgress:",localStorage.getItem("userProgress"));const l=localStorage.getItem("userSurvey");if(l){const e=JSON.parse(l);g.value=e.smoke||0,i.value=e.drink||"00-0-0";const o=i.value.split("-");r.value=o.length>0?parseInt(o[0],10):0,p.value=o.length>1?parseInt(o[1],10):0,u.value=o.length>2?parseInt(o[2],10):0,m.value=e.sdEtc||""}}function v(l,e){const o=JSON.parse(localStorage.getItem("userSurvey"))||{};o[l]=e,localStorage.setItem("userSurvey",JSON.stringify(o)),console.log(`Updated localStorage userSurvey: ${l} = ${e}`)}function x(l){let e=l.replace(/[^0-9]/g,"");return parseInt(e,10)||0}return(l,e)=>{const o=U;return B(),w(N,null,{default:s(()=>[t(o,{title:J,desc:O}),t(d,{"no-gutters":"",justify:"start"},{default:s(()=>[t(c,null,{default:s(()=>e[7]||(e[7]=[F("흡연여부를 선택해주세요")])),_:1})]),_:1}),t(d,{"no-gutters":"",justify:"center",class:"mt-1"},{default:s(()=>[t(V,{variant:"outlined",rounded:"lg","bg-color":"#FFFFFF","base-color":"#FF5858",color:"#FF5858","item-color":"#FF5858","hide-details":"",items:y.value,modelValue:g.value,"onUpdate:modelValue":e[0]||(e[0]=a=>g.value=a)},null,8,["items","modelValue"])]),_:1}),t(d,{"no-gutters":"",justify:"start",class:"margin-top-28"},{default:s(()=>[t(c,null,{default:s(()=>e[8]||(e[8]=[F("음주 빈도를 입력해주세요")])),_:1})]),_:1}),t(d,{"no-gutters":"",justify:"center",class:"mt-6"},{default:s(()=>[t(P,{class:"d-flex | justify-center | align-center"},{default:s(()=>[t(S,{variant:"underlined","base-color":"#FF5858",color:"#FF5858","item-color":"#FF5858","hide-details":"",class:"custom-text-field","max-width":"40px","min-width":"40px",placeholder:"0",modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=a=>r.value=a),maxlength:"2",onInput:e[2]||(e[2]=a=>r.value=x(r.value))},null,8,["modelValue"]),t(V,{variant:"outlined",rounded:"lg","bg-color":"#FFFFFF","base-color":"#FF5858",color:"#FF5858","item-color":"#FF5858","hide-details":"",items:$.value,"max-width":"80px","min-width":"80px",class:"ml-2 | mr-2",modelValue:p.value,"onUpdate:modelValue":e[3]||(e[3]=a=>p.value=a)},null,8,["items","modelValue"]),t(c,null,{default:s(()=>e[9]||(e[9]=[F(" 에 ")])),_:1}),t(S,{variant:"underlined","base-color":"#FF5858",color:"#FF5858","item-color":"#FF5858","hide-details":"",class:"custom-text-field | ml-7 | mr-2","max-width":"40px","min-width":"40px",placeholder:"0",modelValue:u.value,"onUpdate:modelValue":e[4]||(e[4]=a=>u.value=a),maxlength:"2",onInput:e[5]||(e[5]=a=>u.value=x(u.value))},null,8,["modelValue"]),t(c,null,{default:s(()=>e[10]||(e[10]=[F(" 번 ")])),_:1})]),_:1})]),_:1}),t(d,{"no-gutters":"",justify:"start",class:"margin-top-52"},{default:s(()=>e[11]||(e[11]=[E("label",{class:"custom-label",innerHTML:"흡연/음주에 대해 하고싶은 말이 있다면 적어주세요"},null,-1)])),_:1}),t(d,{"no-gutters":"",justify:"center",class:"mt-1"},{default:s(()=>[t(S,{variant:"outlined",rounded:"lg","bg-color":"#FFFFFF","base-color":"#FF5858",color:"#FF5858","item-color":"#FF5858",placeholder:"술 주사, 흡연 습관 등",modelValue:m.value,"onUpdate:modelValue":e[6]||(e[6]=a=>m.value=a),maxlength:"30"},{"append-inner":s(()=>[t(c,{class:"count-label",text:`${m.value.length}/30`},null,8,["text"])]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},K=j(T,[["__scopeId","data-v-bd00558b"]]);export{K as default};
