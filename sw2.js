// Nombre de la caché
const CACHE_NAME = 'my-pwa-cache';

// Archivos a cachear
const urlsToCache = [
  '/',
  '/styles.css',
  '/script.js',
  '/index.html'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.error(err))
  );
});

// Activación del Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.filter(cacheName => {
            return cacheName !== CACHE_NAME;
          }).map(cacheName => {
            return caches.delete(cacheName);
          })
        );
      })
  );
});

// Fetch de las peticiones
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Clonar la respuesta para poderla usar en el caché
        const responseClone = response.clone();

        // Almacenar la respuesta en la caché
        caches.open(CACHE_NAME)
          .then(cache => cache.put(event.request, responseClone))
          .catch(err => console.error(err));

        return response;
      })
      .catch(() => {
        return caches.match(event.request)
          .then(response => {
            return response;
          })
          .catch(err => console.error(err));
      })
  );
});
