!function(e){function t(t){for(var n,u,a=t[0],l=t[1],c=t[2],f=0,d=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(s&&s(t);d.length;)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var l=r[a];0!==o[l]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={16:0},i=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/dist/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var s=l;i.push([114,0]),r()}({114:function(e,t,r){"use strict";const n=r(3);r(181);const o=r(5),i=r(4),u=r(11),a=r(1),l=i.parallel,{Dialog:c}=u,{Key:s,config:f}=CloudCmd;let d,p,y;CloudCmd.Terminal=t;const h=async()=>{const{prefix:e}=CloudCmd,t=CloudCmd.prefix+"/gritty"+"/gritty.js",r=e+"/dist/terminal.css",[o]=await n(l,[t,r]);if(o){const e=o.target.src.replace(window.location.href,"");return c.alert(`file ${e} could not be loaded`)}d=!0};function m(){CloudCmd.View.hide()}function C(e){e.emit("auth",f("username"),f("password")),e.on("reject",()=>{c.alert("Wrong credentials!")})}e.exports.init=async()=>{f("terminal")&&(a.show.load("top"),await CloudCmd.View(),await h(),function(){const e={env:{ACTIVE_DIR:u.getCurrentDirPath,PASSIVE_DIR:u.getNotCurrentDirPath,CURRENT_NAME:u.getCurrentName,CURRENT_PATH:u.getCurrentPath},prefix:CloudCmd.prefixSocket+"/gritty",socketPath:CloudCmd.prefix,fontFamily:"Droid Sans Mono"},{socket:t,terminal:r}=gritty(document.body,e);y=t,p=r,p.onKey(e=>{let{domEvent:t}=e;const{keyCode:r,shiftKey:n}=t;n&&r===s.ESC&&m()}),y.on("connect",o.with(C,t))}())},e.exports.show=function(){if(!d)return;if(!f("terminal"))return;CloudCmd.View.show(p.element,{afterShow:()=>{p.focus()}})},e.exports.hide=m}});
//# sourceMappingURL=terminal.js.map