const CACHE = 'colours-of-albania-v1';
const ASSETS = [
  '/', '/index.html', '/manifest.json', '/icon.svg',
  '/css/base.css', '/css/book.css', '/css/palette.css', '/css/animations.css',
  '/js/app.js', '/js/coloring.js', '/js/navigation.js', '/js/palette.js', '/js/pages.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => { e.waitUntil(clients.claim()); });
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
