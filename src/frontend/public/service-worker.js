const CACHE_NAME = 'antifraud-v3';
const APP_SHELL_ROUTES = ['/', '/mission', '/how-it-works', '/terms', '/privacy', '/institucional', '/institucional/mission', '/documentation'];

// Install event - cache app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        './',
        './manifest.webmanifest',
        './assets/generated/antifraud-logo-icon.dim_256x256.png',
        './assets/generated/antifraud-pwa-icon.dim_192x192.png',
        './assets/generated/antifraud-pwa-icon.dim_512x512.png',
      ]).catch((err) => {
        console.warn('Service worker cache preload failed:', err);
        return Promise.resolve();
      });
    })
  );
  self.skipWaiting();
});

// Activate event - clean old caches and claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - network first, fallback to cache for navigation
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  // For navigation requests (HTML pages)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Only cache successful HTML responses with content
          if (response.ok && response.status === 200) {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('text/html')) {
              return response.clone().text().then((text) => {
                if (text && text.trim().length > 0 && text.includes('<div id="root">')) {
                  const responseClone = new Response(text, {
                    status: response.status,
                    statusText: response.statusText,
                    headers: response.headers,
                  });
                  caches.open(CACHE_NAME).then((cache) => {
                    cache.put(request, responseClone.clone());
                  });
                  return responseClone;
                }
                return response;
              });
            }
          }
          return response;
        })
        .catch(() => {
          // Network failed - serve app shell from cache for known routes
          const pathname = url.pathname.replace(/\/$/, '') || '/';
          if (APP_SHELL_ROUTES.includes(pathname)) {
            return caches.match('./').then((cachedResponse) => {
              if (cachedResponse) {
                return cachedResponse;
              }
              return new Response('Offline', { status: 503 });
            });
          }
          return new Response('Offline', { status: 503 });
        })
    );
    return;
  }

  // For other requests - network first, fallback to cache
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(request).then((cachedResponse) => {
          return cachedResponse || new Response('Offline', { status: 503 });
        });
      })
  );
});
