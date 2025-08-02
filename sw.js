const cacheName = 'loteria-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.png',
  '/icon512.png',
  '/fondo.jpg',
  '/barajar.mp3',
  '/campana.mp3',
  '/aplausos.mp3',
  // Agrega los archivos de audio y cartas si quieres que funcionen offline:
  // '/audios/01.mp3', '/img/01.png', etc.
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
