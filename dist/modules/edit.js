!function(t){function e(e){for(var n,u,f=e[0],a=e[1],s=e[2],d=0,l=[];d<f.length;d++)u=f[d],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&l.push(r[u][0]),r[u]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(c&&c(e);l.length;)l.shift()();return i.push.apply(i,s||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,f=1;f<o.length;f++){var a=o[f];0!==r[a]&&(n=!1)}n&&(i.splice(e--,1),t=u(u.s=o[0]))}return t}var n={},r={5:0},i=[];function u(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.m=t,u.c=n,u.d=function(t,e,o){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(o,n,function(e){return t[e]}.bind(null,n));return o},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/dist/";var f=window.webpackJsonp=window.webpackJsonp||[],a=f.push.bind(f);f.push=e,f=f.slice();for(var s=0;s<f.length;s++)e(f[s]);var c=a;i.push([83,0]),o()}({83:function(t,e,o){"use strict";const{promisify:n}=o(13),r=o(3),i=o(2),u=o(4),{MAX_FILE_SIZE:f}=o(6),{time:a,timeEnd:s}=o(10),c=u.js;CloudCmd.Edit=e;const d=CloudCmd.config("editor");let l,p,h=!0;const w={afterShow:()=>{p.moveCursorTo(0,0).focus()}};function y(t,e){if("function"!=typeof e)throw Error(t+" should be a function!")}function m(){return p}t.exports.init=async()=>{const t=function(){const t=i("div",{style:'width      : 100%;height     : 100%;font-family: "Droid Sans Mono";',notAppend:!0});return l=t,t}();await CloudCmd.View(),await b(t)},t.exports.show=t=>{h||(CloudCmd.View.show(l,function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e={...t,...w};return t.afterShow?(y("options.afterShow",t.afterShow),e.afterShow=()=>{w.afterShow(),t.afterShow()},e):e}(t)),m().setOptions({fontSize:16}))},t.exports.getEditor=m,t.exports.getElement=()=>l,t.exports.hide=()=>{CloudCmd.View.hide()};const b=async t=>{const e=`${CloudCmd.prefix}/${d}`,o=CloudCmd.prefix,i=`${CloudCmd.prefixSocket}/${d}`,u=`${e}/${d}.js`;a("Edit load"),await c(u);const l=n(window[d]),[w]=await r(l,t,{maxSize:f,prefix:e,prefixSocket:i,socketPath:o});s("Edit load"),p=w,h=!1}}});
//# sourceMappingURL=edit.js.map