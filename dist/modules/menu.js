!function(e){function t(t){for(var o,u,l=t[0],c=t[1],d=t[2],s=0,f=[];s<l.length;s++)u=l[s],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&f.push(r[u][0]),r[u]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(a&&a(t);f.length;)f.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={13:0},i=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/dist/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var a=c;i.push([93,0]),n()}({93:function(e,t,n){"use strict";const o=n(5),r=n(8),i=n(21),u=n(2),{FS:l}=n(6),{getIdBySrc:c}=n(14),d=n(18),{config:a,Key:s}=CloudCmd,{Buffer:f,Events:p,Dialog:C,Images:m}=DOM,h=DOM.CurrentInfo,y=C.alert.noFiles,g=r((async function(e){const[t,n]=await h.getData();if(t)return;const{name:o}=h;CloudCmd.execFromModule(e,"uploadFile",o,n),CloudCmd.log(`Uploading to ${o}...`)}));let w,x,O;function D(){x.hide(),O.hide()}function M(e){let t,n,{type:r}=e;"context"===r?(t="context",n=s.unsetBind):"file"===r&&(t="contextFile");return{icon:!0,beforeClose:s.setBind,beforeShow:o.with(v,n),beforeClick:P,name:t}}function b(e){const t={Paste:f.paste,New:{File:DOM.promptNewFile,Directory:DOM.promptNewDir},Upload:()=>{CloudCmd.Upload.show()},"Upload From Cloud":S,"(Un)Select All":DOM.toggleAllSelectedFiles};return e&&(t["Log Out"]=CloudCmd.logOut),t}function F(e,t){if(".."!==h.name)return e();t()}function v(e,t){const{name:n}=t;let r="contextFile"!==function(e){return e?".."===DOM.getCurrentName(e)?"context":"contextFile":"context"}(DOM.getCurrentByPosition({x:t.x,y:t.y}));return"contextFile"===t.name&&(r=!r),r&&(w=n),o(e),r&&(r=function(e,t){const{panel:n}=h;if(!n)return!1;const o=document.elementFromPoint(e,t),r=n.querySelectorAll('[data-name="js-path"] *');return~[].indexOf.call(r,o)}(t.x,t.y)),r}function P(e){return w!==e}function S(){m.show.load("top"),CloudCmd.execFromModule("Cloud","saveFile",async(e,t)=>{const n=DOM.getCurrentDirPath()+e,[o]=await d.write(n,t);o||await CloudCmd.refresh({currentName:e})})}function j(){!function(e){const{prefixURL:t}=CloudCmd,n=Date.now(),o=DOM.getActiveFiles();if(!o.length)return y();for(const r of o){const o=DOM.isSelected(r),i=DOM.isCurrentIsDir(r),d=DOM.getCurrentPath(r);CloudCmd.log(`downloading file ${d}...`);const a=encodeURI(d).replace(/#/g,"%23"),s=c(d);let f;f=i?t+"/pack"+a+DOM.getPackerExt(e):t+l+a+"?download";const p=u("iframe",{id:s+"-"+n,async:!1,className:"hidden",src:f}),{body:C}=document,m=C.removeChild.bind(C,p);setTimeout(m,3e4),o&&DOM.toggleSelectedFile(r)}}(a("packer"))}function k(){const e=h.element.getBoundingClientRect();return{x:Math.round(e.left+e.width/3),y:Math.round(e.top)}}function E(e){const{F9:t,ESC:n}=s,o=e.keyCode;if(s.isBind()){if(o===n)return D();if(o===t){const t=k();x.show(t.x,t.y),e.preventDefault()}}}e.exports.ENABLED=!1,CloudCmd.Menu=t,e.exports.init=()=>{const{isAuth:e,menuDataFile:t}=function(){const e=CloudCmd.config("auth"),t=b(e),n={View:()=>{CloudCmd.View.show()},Edit:()=>{const e=a("vim")?"EditFileVim":"EditFile";CloudCmd[e].show()},Rename:()=>{setTimeout(DOM.renameCurrent,100)},Delete:()=>{CloudCmd.Operation.show("delete")},Pack:()=>{CloudCmd.Operation.show("pack")},Extract:()=>{CloudCmd.Operation.show("extract")},Download:j,"Upload To Cloud":g("Cloud"),Cut:()=>{F(f.cut,y)},Copy:()=>{F(f.copy,y)},...t};return{isAuth:e,menuDataFile:n}}(),n=DOM.getFM(),o=b(e),r=M({type:"context"}),u=M({type:"file"});x=i(n,r,o),O=i(n,u,t),x.addContextMenuListener(),O.addContextMenuListener(),p.addKey(E)},e.exports.hide=D,e.exports.show=e=>{const{x:t,y:n}=function(e){return e?{x:e.x,y:e.y}:k()}(e);x.show(t,n),O.show(t,n),m.hide()}}});
//# sourceMappingURL=menu.js.map