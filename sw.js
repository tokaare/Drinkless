const CACHE = 'drinks-v1';
const FILES = ['/', '/index.html', '/manifest.json'];
const CACHE = 'drinks-v2'; // was v1, change to v2, v3 etc
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
