const CACHE_NAME = 'eye-comfort-v8';
// Phonon 31M English voice (~35 MB voice model) is NOT precached here. It
// downloads on first English TTS use from Hugging Face and is then cached
// by the Phonon runtime in its own Cache API bucket ('phonon-tts-v1') —
// never re-downloaded on open. Cross-origin requests pass through this
// worker untouched (see the fetch handler), so the runtime owns that cache.
// The vendored Phonon runtime files (./vendor/phonon-tts/) are same-origin
// and are cached on first fetch by the fetch handler below.
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './assets/eye-exercise-1.webp',
  './assets/eye-exercise-2.webp',
  './assets/eye-exercise-3.webp',
  './assets/eye-exercise-4.webp',
  './assets/eye-exercise-5.webp',
  './assets/eye-exercise-6.webp',
  './assets/eye-exercise-7.webp',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME && key.startsWith('eye-comfort-')).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;
  if (!requestUrl.pathname.startsWith(new URL(self.registration.scope).pathname)) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy));
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }))
  );
});
