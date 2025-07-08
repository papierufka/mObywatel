self.addEventListener('install', e => {
  e.waitUntil(caches.open('mw-cache').then(c => c.addAll([
    'index.html','style.css','manifest.json','icon-192.png','icon-512.png'
  ])));
});
self.addEventListener('fetch', e => e.respondWith(
  caches.match(e.request).then(r => r || fetch(e.request))
));