var __wpo = {"assets":{"main":["/0.bundle.js","/bundle.js","/style.css","/0.bundle.js.map","/bundle.js.map","/style.css.map","/","/manifest.json","/favicon.ico"],"additional":[],"optional":[]},"externals":[],"hashesMap":{"83ba1690fbfdfca51a08b16b3191c47b53ef53b1":"/0.bundle.js","5dd58b9496c220b7b92d734ef28c685c19ed2a19":"/bundle.js","8d74399e538e40d42886d42f996ed8e53aa4c727":"/style.css","76c103fb9c4027bcae52caca29b41318abcebb08":"/0.bundle.js.map","d6df172aabf9032776375b96e768b56e5fd5184f":"/bundle.js.map","7cc595a5f512c0501ef0288229c0dedeb383f8cd":"/style.css.map","10e506eea4a6d6c97923638c7629f7667812a41c":"/","824ea15804e9001326a734d443d4cd852bb2e134":"/manifest.json","5bc4a5adc67e3675fb9ff243dd9d8b095a18976e":"/favicon.ico"},"strategy":"changed","responseStrategy":"cache-first","version":"5/7/2017, 11:29:01 AM","name":"webpack-offline","pluginVersion":"4.6.1","relativePaths":false};

(function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=1)})([function(n,e){},function(n,e,t){"use strict";function r(n,e){function t(){if(!R.additional.length)return Promise.resolve();u&&console.log("[SW]:","Caching additional");var n=void 0;return n="changed"===S?f("additional"):r("additional"),n.catch(function(n){console.error("[SW]:","Cache section `additional` failed to load")})}function r(e){var t=R[e];return caches.open(E).then(function(e){return O(e,t,{bust:n.version,request:n.prefetchRequest})}).then(function(){s("Cached assets: "+e,t)}).catch(function(n){throw console.error(n),n})}function f(e){return h().then(function(t){if(!t)return r(e);var o=t[0],i=t[1],c=t[2],a=c.hashmap,u=c.version;if(!c.hashmap||u===n.version)return r(e);var f=Object.keys(a).map(function(n){return a[n]}),l=i.map(function(n){var e=new URL(n.url);return e.search="",e.toString()}),h=R[e],d=[],v=h.filter(function(n){return l.indexOf(n)===-1||f.indexOf(n)===-1});Object.keys(U).forEach(function(n){var e=U[n];if(h.indexOf(e)!==-1&&v.indexOf(e)===-1&&d.indexOf(e)===-1){var t=a[n];t&&l.indexOf(t)!==-1?d.push([t,e]):v.push(e)}}),s("Changed assets: "+e,v),s("Moved assets: "+e,d);var p=Promise.all(d.map(function(n){return o.match(n[0]).then(function(e){return[n[1],e]})}));return caches.open(E).then(function(e){var t=p.then(function(n){return Promise.all(n.map(function(n){return e.put(n[0],n[1])}))});return Promise.all([t,O(e,v,{bust:n.version,request:n.prefetchRequest})])})})}function l(){return caches.keys().then(function(n){var e=n.map(function(n){if(0===n.indexOf(q)&&0!==n.indexOf(E))return console.log("[SW]:","Delete cache:",n),caches.delete(n)});return Promise.all(e)})}function h(){return caches.keys().then(function(n){for(var e=n.length,t=void 0;e--&&(t=n[e],0!==t.indexOf(q)););if(t){var r=void 0;return caches.open(t).then(function(n){return r=n,n.match(new URL(j,location).toString())}).then(function(n){if(n)return Promise.all([r,r.keys(),n.json()])})}})}function d(){return caches.open(E).then(function(e){var t=new Response(JSON.stringify({version:n.version,hashmap:U}));return e.put(new URL(j,location).toString(),t)})}function v(n,e,t){return o(t,E).then(function(r){return r?(u&&console.log("[SW]:","URL ["+t+"]("+e+") from cache"),r):fetch(n.request).then(function(n){return n.ok?(u&&console.log("[SW]:","URL ["+e+"] from network"),t===e&&function(){var t=n.clone();caches.open(E).then(function(n){return n.put(e,t)}).then(function(){console.log("[SW]:","Cache asset: "+e)})}(),n):(u&&console.log("[SW]:","URL ["+e+"] wrong response: ["+n.status+"] "+n.type),n)})})}function p(n,e,t){return fetch(n.request).then(function(n){if(n.ok)return u&&console.log("[SW]:","URL ["+e+"] from network"),n;throw new Error("response is not ok")}).catch(function(){return u&&console.log("[SW]:","URL ["+e+"] from cache if possible"),o(t,E)})}function g(n){return n.catch(function(){}).then(function(n){return n&&n.ok?n:(u&&console.log("[SW]:","Loading navigation fallback ["+C+"] from cache"),o(C,E))})}function m(){Object.keys(R).forEach(function(n){R[n]=R[n].map(function(n){var e=new URL(n,location);return b.indexOf(n)===-1?e.search="":e.hash="",e.toString()})}),Object.keys(W).forEach(function(n){W[n]=W[n].map(function(n){var e=new URL(n,location);return b.indexOf(n)===-1?e.search="":e.hash="",e.toString()})}),U=Object.keys(U).reduce(function(n,e){var t=new URL(U[e],location);return t.search="",n[e]=t.toString(),n},{}),b=b.map(function(n){var e=new URL(n,location);return e.hash="",e.toString()})}function O(n,e,t){var r=t.allowLoaders!==!1,o=t&&t.bust,c=t.request||{credentials:"omit",mode:"cors"};return Promise.all(e.map(function(n){return o&&(n=i(n,o)),fetch(n,c)})).then(function(o){if(o.some(function(n){return!n.ok}))return Promise.reject(new Error("Wrong response status"));var i=[],c=o.map(function(t,o){return r&&i.push(x(e[o],t)),n.put(e[o],t)});return i.length?function(){var r=a(t);r.allowLoaders=!1;var o=c;c=Promise.all(i).then(function(t){var i=[].concat.apply([],t);return e.length&&(o=o.concat(O(n,i,r))),Promise.all(o)})}():c=Promise.all(c),c})}function x(n,e){var t=Object.keys(W).map(function(t){if(W[t].indexOf(n)!==-1&&k[t])return k[t](e.clone())}).filter(function(n){return!!n});return Promise.all(t).then(function(n){return[].concat.apply([],n)})}function w(n){var e=n.url,t=new URL(e),r=void 0;r="navigate"===n.mode?"navigate":t.origin===location.origin?"same-origin":"cross-origin";for(var o=0;o<y.length;o++){var i=y[o];if(i&&(!i.requestTypes||i.requestTypes.indexOf(r)!==-1)){var c=void 0;if((c="function"==typeof i.match?i.match(t,n):e.replace(i.match,i.to))&&c!==e)return c}}}var k=e.loaders,y=e.cacheMaps,S=n.strategy,L=n.responseStrategy,R=n.assets,W=n.loaders||{},U=n.hashesMap,b=n.externals,q=n.name,P=n.version,E=q+":"+P,j="__offline_webpack__data";m();var _=[].concat(R.main,R.additional,R.optional),C=n.navigateFallbackURL;self.addEventListener("install",function(n){console.log("[SW]:","Install event");var e=void 0;e="changed"===S?f("main"):r("main"),n.waitUntil(e)}),self.addEventListener("activate",function(n){console.log("[SW]:","Activate event");var e=t();e=e.then(d),e=e.then(l),e=e.then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),n.waitUntil(e)}),self.addEventListener("fetch",function(n){var e=n.request.url,t=new URL(e),r=void 0;b.indexOf(e)!==-1?r=e:(t.search="",r=t.toString());var o="GET"===n.request.method,i=_.indexOf(r)!==-1,a=r;if(!i){var s=w(n.request);s&&(a=s,i=!0)}if(!i&&o&&C&&c(n.request))return void n.respondWith(g(fetch(n.request)));if(!i||!o)return void(t.origin!==location.origin&&navigator.userAgent.indexOf("Firefox/44.")!==-1&&n.respondWith(fetch(n.request)));var u=void 0;u="network-first"===L?p(n,r,a):v(n,r,a),C&&c(n.request)&&(u=g(u)),n.respondWith(u)}),self.addEventListener("message",function(n){var e=n.data;if(e)switch(e.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}})}function o(n,e){return caches.match(n,{cacheName:e}).catch(function(){})}function i(n,e){return n+(n.indexOf("?")!==-1?"&":"?")+"__uncache="+encodeURIComponent(e)}function c(n){return"navigate"===n.mode||n.headers.get("Upgrade-Insecure-Requests")||(n.headers.get("Accept")||"").indexOf("text/html")!==-1}function a(n){return Object.keys(n).reduce(function(e,t){return e[t]=n[t],e},{})}function s(n,e){console.groupCollapsed("[SW]:",n),e.forEach(function(n){console.log("Asset:",n)}),console.groupEnd()}if(void 0===u)var u=!1;r(__wpo,{loaders:{},cacheMaps:[{match:/.*/,to:"/",requestTypes:["navigate"]}]}),n.exports=t(0)}]);