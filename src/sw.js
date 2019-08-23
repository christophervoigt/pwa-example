
const CACHE_NAME = 'cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();

  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);

    return cache.addAll([
      '/',
      '/assets/script.js',
      '/assets/stylesheet.css',
      '/manifest.json',
      '/icons/favicon.ico',
      '/icons/favicon-16x16.png',
      '/icons/favicon-32x32.png',
      '/icons/favicon-194x194.png',
      '/icons/android-chrome-192x192.png',
    ]);
  })());
});


self.addEventListener('fetch', (event) => {
  // const url = new URL(event.request.url);

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cacheResponse = await cache.match(event.request);
      if (cacheResponse) { return cacheResponse; }

      const fetchResponse = await fetch(event.request)
      cache.put(event.request, fetchResponse.clone());
      return fetchResponse;
    })()
  );
});


self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();

    return Promise.all(
      cacheNames
      .filter(cacheName => cacheName !== CACHE_NAME)
      .map(cacheName => caches.delete(cacheName))
    );
  })());
});
