!function(t){function e(e){for(var o,i,u=e[0],l=e[1],s=e[2],c=0,f=[];c<u.length;c++)i=u[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);for(p&&p(e);f.length;)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,u=1;u<n.length;u++){var l=n[u];0!==r[l]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={18:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var p=l;a.push([106,0]),n()}({106:function(t,e,n){"use strict";CloudCmd.Upload=e;const o=n(15),r=n(1),a=n(38),i=n(2);function u(){CloudCmd.View.hide()}function l(){const t=DOM.getByDataName("js-upload-file-button");r.hide(),DOM.Events.add("change",t,t=>{let{target:e}=t;const{files:n}=e;u(),a(n)})}t.exports.init=async()=>{r.show.load("top"),await CloudCmd.View()},t.exports.show=async function(){r.show.load("top");const t=await o.get("upload"),e=i("div",{innerHTML:t});CloudCmd.View.show(e,{autoSize:!0,afterShow:l});const n=['"Droid Sans Mono"','"Ubuntu Mono"','"Consolas"',"monospace"].join(", ");i("style",{dataName:"upload-css",innerText:`[data-name=js-upload-file-button] {\n                      font-family: ${n};\n                      font-size: 16px;\n                      margin: 10px 0 10px 0;\n                   }`})},t.exports.hide=u}});
//# sourceMappingURL=upload.js.map