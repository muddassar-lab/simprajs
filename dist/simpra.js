!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.simpra=o():e.simpra=o()}(self,(function(){return(()=>{"use strict";var e={272:(e,o,t)=>{t.r(o),t.d(o,{Class:()=>c,display:()=>a,select:()=>r,setCss:()=>l});const r=e=>{if("string"==typeof e)return document.querySelectorAll(e);console.error(`${e} is not a vaild selector.`)},s=e=>{if("string"==typeof e){let o;return o=r(e),o}return e},n=(e,o)=>"string"==typeof e?Array.isArray(o)?!!o.includes(e):(console.error(`methodList paramter should be an array.The methodList you passed is ${o}`),!1):(console.error(`method parameter should be string.The method you passed is ${e}`),!1),i=(e,o,t)=>{e.style.setProperty(o,t)},l=(e,o,t)=>{const r=s(e);null!=r?r.forEach((function(e){((e,o,t)=>{if("string"==typeof o&&"string"==typeof t)i(e,o,t);else if("object"==typeof o&&null==t)for(const[t,r]of Object.entries(o))i(e,t,r)})(e,o,t)})):console.error("element is undefined")},a=(e,o)=>{if(1==n(e,["show","hide"])){const t=s(o);null!=t?"show"==e?l(t,"display","block"):"hide"==e&&l(t,"display","none"):console.error(`${o} is undefined`)}},c=(e,o,t)=>{if(1==n(o,["add","remove","toggle"]))if("string"==typeof t)if("string"==typeof e||"object"==typeof e){const r=s(e);"object"==typeof r?r.forEach((e=>{((e,o,t)=>{"add"==o?(console.log(e.classList),e.classList.add(t)):"remove"==o?e.classList.remove(t):"toggle"==o&&e.classList.toggle(t)})(e,o,t)})):console.error("element is undefined")}else console.error("Selector paramter should be string or NodeList object");else console.error(`className parameter should be string.The paramter you passed is ${t}`)}}},o={};function t(r){if(o[r])return o[r].exports;var s=o[r]={exports:{}};return e[r](s,s.exports,t),s.exports}return t.d=(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(272)})()}));