'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "2c829d0ffe36681d37a734b0c8d24086",
"/main.dart.js": "976ad1167791a8818d8249ab57219572",
"/assets/LICENSE": "189a2f0d35ee48b021ffb6de827fd71c",
"/assets/AssetManifest.json": "a4d743580cbccd963362cd9743ebc066",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/flutter_logo.png": "4a42ed012ae01cc5c770b8e478e733ec",
"/assets/assets/swift_logo.png": "0cdef475c7d4490998e60b8fdcb64727",
"/assets/assets/placeholder.png": "b5e1daad44650fdfb64d1c3e45058ce7"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
