//@pilet v:2(webpackChunkpr_todolist,{})
System.register(["react"],(function(e,t){var r={};return{setters:[function(e){r.Fragment=e.Fragment,r.createElement=e.createElement,r.useEffect=e.useEffect,r.useState=e.useState}],execute:function(){e((()=>{var e={722:(e,t,r)=>{const n=r(905).R;t.s=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},905:(e,t,r)=>{function n(e,t){var r=document.createElement("a");r.href=e;for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,o=0,a=n.length;o!==t&&a>=0;){"/"===n[--a]&&o++}if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var i=n.slice(0,a+1);return r.protocol+"//"+r.host+i}t.R=n;var o=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}},954:e=>{"use strict";e.exports=r}},n={};function o(t){var r=n[t];if(r!==undefined)return r.exports;var a=n[t]={exports:{}};return e[t](a,a.exports,o),a.exports}o.y=t,o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(l){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!e;)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})();var a,i,l,u={};return(0,o(722).s)(1),a=document,i=o.p+"main.css",(l=a.createElement("link")).setAttribute("data-origin","todo-list"),l.type="text/css",l.rel="stylesheet",l.href=i,a.head.appendChild(l),(()=>{"use strict";o.r(u),o.d(u,{setup:()=>i});var e=o(954);function t(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r["return"]&&(i=r["return"](),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(n){n.registerTile((function(){var o=r(e.useState([{id:1,task:"Create document"},{id:2,task:"Create application"},{id:3,task:"Create SRS document"}]),2),a=o[0],i=o[1];return e.useEffect((function(){var e=n.getData("new_task");if(console.log("task",e),""!==e){var r={id:a.length+1,task:e};i((function(e){return[].concat(t(e),[r])}))}}),[n.getData("app")]),e.createElement(e.Fragment,null,e.createElement("table",{style:{marginLeft:"100px"}},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"ID"),e.createElement("th",null,"Task"))),e.createElement("tbody",null,a.map((function(t){return e.createElement("tr",{key:t.id},e.createElement("td",null,t.id),e.createElement("td",null,t.task))})))))}))}})(),u})())}}}));
//# sourceMappingURL=index.js.map