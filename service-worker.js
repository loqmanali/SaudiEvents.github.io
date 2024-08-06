const CACHE_NAME = "saudi-event";
const RESOURCES = {
  "version.json": "/*version*/",
  "index.html": "/*index*/",
  "main.dart.js": "/*main*/",
  "assets/NOTICES": "/*notices*/",
  "assets/AssetManifest.json": "/*asset-manifest*/",
  "assets/FontManifest.json": "/*font-manifest*/"
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(Object.keys(RESOURCES)))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});