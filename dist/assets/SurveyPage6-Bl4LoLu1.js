import{B as S,V as o,_ as b}from"./VLabel-DWHcoES-.js";import{_ as v,r as f,o as F,a as k,q as g,c as _,w as s,b as V,d as t,h as a,f as r}from"./index-D_aSzeTt.js";import{V as p}from"./VSlider-B0vmowhI.js";import"./VInput-CXdlvjSU.js";const x="일상생활",w="사소하지만 안맞으면 불편한 것들이 있죠.<br>그중 몇가지만 여쭤볼게요.",j={__name:"SurveyPage6",setup(z){const n=f(0),i=f(0),d=f(0);F(()=>{y()}),k(()=>{}),g(n,(l,e)=>{console.log(`--- noise changed from ${e} to ${l}`),c("noise",l)}),g(i,(l,e)=>{console.log(`--- share changed from ${e} to ${l}`),c("share",l)}),g(d,(l,e)=>{console.log(`--- home changed from ${e} to ${l}`),c("home",l)});function y(){localStorage.setItem("userProgress",JSON.stringify({currentStep:6})),console.log("Updated localStorage userProgress:",localStorage.getItem("userProgress"));const l=localStorage.getItem("userSurvey");if(l){const e=JSON.parse(l);n.value=e.noise||0,i.value=e.share||0,d.value=e.home||0}}function c(l,e){const m=JSON.parse(localStorage.getItem("userSurvey"))||{};m[l]=e,localStorage.setItem("userSurvey",JSON.stringify(m)),console.log(`Updated localStorage userSurvey: ${l} = ${e}`)}return(l,e)=>{const m=b;return V(),_(S,null,{default:s(()=>[t(m,{title:x,desc:w}),t(r,{"no-gutters":"",justify:"start"},{default:s(()=>[t(o,null,{default:s(()=>e[3]||(e[3]=[a("휴대전화 소리는 어떻게 틀고 있나요?")])),_:1})]),_:1}),t(r,{"no-gutters":"",justify:"center",class:"mt-3"},{default:s(()=>[t(p,{max:4,step:1,modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=u=>n.value=u),color:"#FF5858","thumb-color":"#FF5858","track-color":"#D9D9D9","track-fill-color":"#FF5858","tick-size":"4","show-ticks":"always","track-size":"4","thumb-size":"16","hide-details":""},null,8,["modelValue"])]),_:1}),t(r,{"no-gutters":"",class:"justify-space-between | pt-2"},{default:s(()=>[t(o,{class:"small-label"},{default:s(()=>e[4]||(e[4]=[a("무조건 이어폰 착용")])),_:1}),t(o,{class:"small-label"},{default:s(()=>e[5]||(e[5]=[a("대부분 스피커 모드")])),_:1})]),_:1}),t(r,{"no-gutters":"",justify:"start",class:"margin-top-42"},{default:s(()=>[t(o,null,{default:s(()=>e[6]||(e[6]=[a("룸메이트와의 물건공유는 어느정도로 하나요?")])),_:1})]),_:1}),t(r,{"no-gutters":"",justify:"center",class:"mt-3"},{default:s(()=>[t(p,{max:4,step:1,modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=u=>i.value=u),color:"#FF5858","thumb-color":"#FF5858","track-color":"#D9D9D9","track-fill-color":"#FF5858","tick-size":"4","show-ticks":"always","track-size":"4","thumb-size":"16","hide-details":""},null,8,["modelValue"])]),_:1}),t(r,{"no-gutters":"",class:"justify-space-between | pt-2"},{default:s(()=>[t(o,{class:"small-label"},{default:s(()=>e[7]||(e[7]=[a("전혀 안함")])),_:1}),t(o,{class:"small-label"},{default:s(()=>e[8]||(e[8]=[a("공용물건구비")])),_:1})]),_:1}),t(r,{"no-gutters":"",justify:"start",class:"margin-top-42"},{default:s(()=>[t(o,null,{default:s(()=>e[9]||(e[9]=[a("본가로 귀가주기는 어느정도로 생각하세요?")])),_:1})]),_:1}),t(r,{"no-gutters":"",justify:"center",class:"mt-3"},{default:s(()=>[t(p,{max:4,step:1,modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=u=>d.value=u),color:"#FF5858","thumb-color":"#FF5858","track-color":"#D9D9D9","track-fill-color":"#FF5858","tick-size":"4","show-ticks":"always","track-size":"4","thumb-size":"16","hide-details":""},null,8,["modelValue"])]),_:1}),t(r,{"no-gutters":"",class:"justify-space-between | pt-2"},{default:s(()=>[t(o,{class:"small-label"},{default:s(()=>e[10]||(e[10]=[a("매주마다 귀가")])),_:1}),t(o,{class:"small-label"},{default:s(()=>e[11]||(e[11]=[a("학기중엔 본가 안 감")])),_:1})]),_:1})]),_:1})}}},U=v(j,[["__scopeId","data-v-a4eba26e"]]);export{U as default};
