import{a as e,y as a,l as t,b as r,s as n,j as s,V as c,p as o}from"./vendor.d718a546.js";!function(e=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(t){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[a]=e=>new Promise(((t,s)=>{const c=new URL(e,r);if(self[a].moduleMap[c])return t(self[a].moduleMap[c]);const o=new Blob([`import * as m from '${c}';`,`${a}.moduleMap['${c}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){s(new Error(`Failed to import: ${e}`)),n(l)},onload(){t(self[a].moduleMap[c]),n(l)}});document.head.appendChild(l)})),self[a].moduleMap={}}}("/");const l=()=>e("header",null,e("img",{src:"/logo.4e5aea09.svg",width:64,height:64,className:"header__logo",alt:"logo"}),e("div",{className:"header__text-container"},e("div",{className:"header__title"},"qrscan-pwa"),e("div",{className:"header__description"},"QR Code Scanner as a PWA")));const d=()=>e("footer",null,e("span",{className:"footer__text"},"Source-code available at"),e("a",{href:"http://github.com/kutsan/qrcode-pwa",className:"footer__project-link",target:"_blank",rel:"noopener noreferrer"},"kutsan/qrcode-pwa"));const i=({active:a,decodedData:t,onNewScan:r})=>{if(!a)return null;const n=new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g);let s;return s=""===t?e("span",{className:"results__empty"},"There is no data to show."):t.match(n)?e("a",{className:"results__link",href:t,target:"_blank",rel:"noopener noreferrer"},t):t,e("div",{className:"results"},e("div",{className:"results__data"},s),e("div",{className:"results__button-container"},e("button",{type:"button",className:"results__button",onClick:r},e("img",{className:"results__scan-icon",src:"/scan.8f5d45de.svg",alt:"New Scan"}),e("span",null,"New Scan"))))};const u=()=>e(a,null,e("div",{className:"scanner-border scanner-border--top-left"}),e("div",{className:"scanner-border scanner-border--top-right"}),e("div",{className:"scanner-border scanner-border--bottom-left"}),e("div",{className:"scanner-border scanner-border--bottom-right"})),m=({active:a,onSuccessfulScan:c})=>{const o=n(null),l=n(null),{stream:d,error:i,status:m,stopMediaStream:p,startMediaStream:v}=(()=>{const[e,a]=t(null),[n,s]=t(null),[c,o]=t("pending"),l=async()=>{o("pending");try{const e=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment"}});a(e),o("resolved")}catch(e){s(e),o("rejected")}};return r((()=>{l()}),[]),{stream:e,error:n,status:c,stopMediaStream:()=>{var a;null!==(a=e)&&"getTracks"in a&&(e.getTracks().forEach((a=>{a.stop(),e.removeTrack(a)})),o("stopped"))},startMediaStream:l}})(),_=async()=>{if(!(l&&l.current&&o&&o.current))return;const e=l.current.getContext("2d");if(!e)return;const{width:a,height:t}=l.current;e.drawImage(o.current,0,0,a,t);const r=e.getImageData(0,0,a,t),n=s(r.data,a,t);null===n?setTimeout(_,500):(c(n.data),p(),o.current.srcObject=null)};return r((()=>{"resolved"===m&&o&&o.current&&(o.current.srcObject=d,o.current.play())}),[m,d]),r((()=>{a&&"stopped"===m&&v()}),[a]),e("div",{className:"scanner "+(a?"":"scanner--hidden")},e("div",{className:"scanner__aspect-ratio-container"},e("canvas",{ref:l,className:"scanner__canvas"}),e("video",{ref:o,onCanPlay:()=>{l&&l.current&&o&&o.current&&(l.current.width=o.current.videoWidth,l.current.height=o.current.videoHeight,null!==i||_())},className:"scanner__video"}),e(u,null)),e("div",{className:"scanner-tip"},e("div",null,"Scan a QR code with your camera to see what it says.")))};c(e(o,null,e((()=>{const[r,n]=t(null);return e(a,null,e(l,null),e("main",null,e(m,{active:null===r,onSuccessfulScan:e=>n(e)}),null!==r&&e(i,{active:null!==r,decodedData:r,onNewScan:()=>n(null)})),e(d,null))}),null)),document.getElementById("root"));
