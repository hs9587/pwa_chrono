// service-worker.js
self.addEventListener('install', event => {
    console.log('Service Worker installing...');
    event.waitUntil(
        caches.open('simple-pwa-cache').then(cache => {
            return cache.addAll([
                './',
                './index.html',
                './manifest.json',
                './service-worker.js',
                './icon.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
