//@pilet v:2(webpackChunkpr_addnewtask,{})
System.register(["react"],(function(e,t){var r={};return{setters:[function(e){r.Fragment=e.Fragment,r.createElement=e.createElement}],execute:function(){e((()=>{var e={722:(e,t,r)=>{const n=r(905).R;t.s=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},905:(e,t,r)=>{function n(e,t){var r=document.createElement("a");r.href=e;for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,o=0,a=n.length;o!==t&&a>=0;){"/"===n[--a]&&o++}if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var i=n.slice(0,a+1);return r.protocol+"//"+r.host+i}t.R=n;var o=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}},954:e=>{"use strict";e.exports=r}},n={};function o(t){var r=n[t];if(r!==undefined)return r.exports;var a=n[t]={exports:{}};return e[t](a,a.exports,o),a.exports}o.y=t,o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(s){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!e;)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})();var a,i,s,c={};return(0,o(722).s)(1),a=document,i=o.p+"main.css",(s=a.createElement("link")).setAttribute("data-origin","add-new-task"),s.type="text/css",s.rel="stylesheet",s.href=i,a.head.appendChild(s),(()=>{"use strict";o.r(c),o.d(c,{setup:()=>r});var e=o(954),t=function(e,t){t.preventDefault();var r=t.target.task.value;e.setData("new_task",r),console.log(e.getData("new_task"))};function r(r){r.registerTile((function(){return e.createElement(e.Fragment,null,e.createElement("form",{onSubmit:function(e){return t(r,e)}},e.createElement("div",{style:{display:"inline"}},e.createElement("input",{type:"text",name:"task",id:"task"}),e.createElement("button",{type:"submit"},"Add New Task"))))}),{initialColumns:2,initialRows:2})}})(),c})())}}}));
//# sourceMappingURL=index.js.map