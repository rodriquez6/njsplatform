!function(e){function t(t){for(var n,u,d=t[0],a=t[1],l=t[2],f=0,p=[];f<d.length;f++)u=d[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(s&&s(t);p.length;)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,d=1;d<r.length;d++){var a=r[d];0!==o[a]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={9:0},i=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/dist/";var d=window.webpackJsonp=window.webpackJsonp||[],a=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var s=a;i.push([92,0]),r()}({92:function(e,t,r){"use strict";CloudCmd.EditNamesVim=t;const n=r(16),{Key:o}=CloudCmd,i={bindKeys:!1,beforeClose:()=>{n.rmKey(d),CloudCmd.EditNames.isChanged()}};function u(){CloudCmd.Edit.hide()}function d(e){const{keyCode:t,shiftKey:r}=e;r&&t===o.ESC&&(e.preventDefault(),u())}e.exports.init=async()=>{await CloudCmd.EditNames()},e.exports.show=()=>{n.addKey(d),CloudCmd.EditNames.show(i).getEditor().setKeyMap("vim")},e.exports.hide=u}});
//# sourceMappingURL=edit-names-vim.js.map