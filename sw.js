const CACHE = 'drinks-v1';
const FILES = ['/', '/Drinkless/', '/Drinkless/index.html', '/Drinkless/manifest.json'];
const CACHE = 'drinks-v5'; //
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
