const CACHE='winter-arc-v1';
const ASSETS=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./icon-192.png','./icon-512.png','./winter-hero.webp'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(fetch(event.request).then(res=>{if(res.ok&&new URL(event.request.url).origin===location.origin){const clone=res.clone();caches.open(CACHE).then(cache=>cache.put(event.request,clone)).catch(()=>{})}return res}).catch(()=>caches.match(event.request).then(hit=>hit||caches.match('./index.html'))))});
