/* The build you are running changes when you ask it to, and not before.
   Every page is served from one cache, which nothing replaces on its own:
   installing a newer worker only adds files that are missing. The Update
   button in the top bar clears the cache and reloads. */
const VERSION = "1.9.1";
const CACHE = "deutsch-lernen-shell";

const FILES = [
  "./",
  "./index.html",
  "./a1.html",
  "./b1.html",
  "./themen.html",
  "./translate.js",
  "./woerter.html",
  "./woerter-data.js",
  "./woerter-lex.js",
  "./grammatik.html",
  "./grammatik-data.js",
  "./alltag.html",
  "./gespraeche-data.js",
  "./briefe-data.js",
  "./hoeren-data.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => Promise.all(FILES.map((f) =>
        cache.match(f).then((hit) => hit ? null :
          fetch(new Request(f, { cache: "reload" }))
            .then((res) => res && res.ok ? cache.put(f, res) : null)
            .catch(() => null)))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  /* The update check asks for the live page on purpose. */
  if (url.searchParams.has("check")) return;

  event.respondWith(
    caches.open(CACHE).then((cache) =>
      cache.match(req, { ignoreSearch: true }).then((hit) => hit ||
        /* Not cached (just after an update): ask the server, never the
           browser's own HTTP cache, or an old file could slip back in. */
        fetch(req.mode === "navigate" ? req : new Request(req.url, { cache: "no-cache", credentials: "same-origin" })).then((res) => {
          if (res && res.ok) cache.put(req, res.clone());
          return res;
        }).catch(() => req.mode === "navigate" ? cache.match("./index.html") : undefined)))
  );
});
