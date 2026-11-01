var V='cielo-v34',F=['./','./index.html','./manifest.webmanifest','./icon-180.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(V).then(function(c){return Promise.all(F.map(function(u){return fetch(u,{cache:'reload'}).then(function(r){if(r&&r.ok)return c.put(u,r)})}))}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==V}).map(function(n){return caches.delete(n)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){if(e.request.method!=='GET')return;
e.respondWith(caches.match(e.request).then(function(h){
var n=fetch(e.request.url,{cache:'no-cache'}).then(function(r){if(r&&r.ok){var c=r.clone();caches.open(V).then(function(x){x.put(e.request,c)})}return r}).catch(function(){return h});
return h||n}))});
