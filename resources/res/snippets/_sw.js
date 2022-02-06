/*
 * @author David Gold
 * @copyright 2022 GoldCodesWeb
 * @version: 3
 */
var dataCacheName = 'data-gcw-v3';
var cacheName = 'gcw-3';

var filesToCache = [
  './',
  './favicons/gcw-icon-1024x1024.png',
  './favicons/gcw-icon-114x114.png',
  './favicons/gcw-icon-120x120.png',
  './favicons/gcw-icon-128x128.png',
  './favicons/gcw-icon-144x144.png',
  './favicons/gcw-icon-152x152.png',
  './favicons/gcw-icon-16x16.png',
  './favicons/gcw-icon-180x180.png',
  './favicons/gcw-icon-192x192.png',
  './favicons/gcw-icon-256x256.png',
  './favicons/gcw-icon-32x32.png',
  './favicons/gcw-icon-44x44.png',
  './favicons/gcw-icon-512x512.png',
  './favicons/gcw-icon-57x57.png',
  './favicons/gcw-icon-60x60.png',
  './favicons/gcw-icon-620x620.png',
  './favicons/gcw-icon-72x72.png',
  './favicons/gcw-icon-76x76.png',
  './favicons/gcw-icon-96x96.png'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
  // All requests with "dynamic parts" in parameter treated as non-cached, to be performed!
  var isDynamic = false;
  
  if(e.request.url.indexOf('?refresh=') > -1) isDynamic = true;
  if (isDynamic) {
    /* When the request URL contains "dynamic mark", the app is asking for fresh data */
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response){
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    /*
     * The app is asking for app shell files. In this scenario the app uses the
     * "Cache, falling back to the network" offline strategy
     */
    e.respondWith(
      caches.match(event.request).then(function(resp) {
        return resp || fetch(event.request).then(function(response) {
          return caches.open(dataCacheName).then(function(cache) {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  }
});