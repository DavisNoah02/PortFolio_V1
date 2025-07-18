const CACHE_NAME = "noah-portfolio-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/noa.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  const url = event.request.url;

  // Skip caching for Vercel analytics and speed insights scripts
  if (url.includes("_vercel/insights") || url.includes("_vercel/speed-insights")) {
    return;
  }

  // Only respond from cache for files in urlsToCache
  if (urlsToCache.some(asset => event.request.url.endsWith(asset))) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
  // For everything else, always fetch from network
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
