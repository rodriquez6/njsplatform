var serviceWorkerOption = {
  "assets": [
    "/columns/name-size-date.css",
    "/columns/name-size.css"
  ]
};
        
        !function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=0)}([function(t,e,n){"use strict";const r=n(1),o=n(2),i=o((t,e)=>e.waitUntil(t())),c=o((t,e)=>{const{request:n}=e,{url:r}=n,o=a(r);r.endsWith("/")||/\^\/fs/.test(o)||"GET"===n.method&&(t=>"basic"===t.type)(n)&&(o.startsWith("/api")||/^socket.io/.test(o)||e.respondWith(t(e)))}),a=t=>new URL(t).pathname,u="cloudcmd: Mon Jan 30 2023 20:34:07 GMT+0200 (Eastern European Standard Time)",s=(t,e)=>"/"!==t?e:(t=>new Request(t,{credentials:"same-origin"}))("/");self.addEventListener("install",i((async function(){console.info("cloudcmd: sw: install: "+u),await self.skipWaiting()}))),self.addEventListener("fetch",c((async function(t){const{request:e}=t,{url:n}=e,o=a(n),i=s(o,t.request),c=await caches.open(u),f=await c.match(e);if(f)return f;const[l,d]=await r(fetch,i,{credentials:"same-origin"});return l?new Response(l.message):(await async function(t,e){return(await caches.open(u)).put(t,e)}(e,d.clone()),d)}))),self.addEventListener("activate",i((async function(){console.info("cloudcmd: sw: activate: "+u),await self.clients.claim();const t=await caches.keys(),e=caches.delete.bind(caches);await Promise.all(t.map(e))})))},function(t,e,n){"use strict";t.exports=async(t,...e)=>{!function(t){if("function"!=typeof t)throw Error("fn should be a function!")}(t);try{return[null,await t(...e)]}catch(t){return[t]}}},function(t,e,n){"use strict";const r=(t,...e)=>{if(function(t){if("function"!=typeof t)throw Error("fn should be function!")}(t),e.length>=t.length)return t(...e);const n=(...n)=>r(t,...e,...n),o=t.length-e.length-1;return(t=>[function(e){return t(...arguments)},function(e,n){return t(...arguments)},function(e,n,r){return t(...arguments)},function(e,n,r,o){return t(...arguments)},function(e,n,r,o,i){return t(...arguments)}])(n)[o]||n};t.exports=r}]);
//# sourceMappingURL=sw.js.map