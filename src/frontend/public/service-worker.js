// Minimal service worker with app shell precaching and network-first strategy
// Extended to include Advanced Contact Lookup public data resources

const CACHE_NAME = 'antifraud-v2';
const APP_SHELL = [
  '/',
  '/index.html',
  '/assets/generated/antifraud-logo-icon.dim_256x256.png',
  '/assets/generated/antifraud-pwa-icon.dim_192x192.png',
  '/assets/generated/antifraud-pwa-icon.dim_512x512.png',
  '/data/public-contact-lookup.json'
];

// Install event: precache app shell and public data
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(APP_SHELL);
    })
  );
  self.skipWaiting();
});

// Activate event: cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch event: network-first with cache fallback
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clone and cache successful responses
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Network failed, try cache
        return caches.match(event.request);
      })
  );
});
