/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-49133cda3cfcd4fd4dcd.js"
  },
  {
    "url": "app-631b5146793ccff490d6.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-6310fcd9ffd0f72df57b.js"
  },
  {
    "url": "index.html",
    "revision": "0fb3be483da157d818d08a2cee852b17"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d10ce82875127dc7f85f517d517b8fd1"
  },
  {
    "url": "0.dd9e612bd8f29f6927b3.css"
  },
  {
    "url": "0-caf493119d7a2d5302cc.js"
  },
  {
    "url": "component---src-pages-index-jsx-b7f80e7743a8e72de00a.js"
  },
  {
    "url": "1-762008fb057f9e5a3787.js"
  },
  {
    "url": "static/d/68/path---index-6a9-WswBM1tt4uDXw2Q8EXCTzhXsgM.json",
    "revision": "53dccb7fb4710de9e26015e311947f51"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.json",
    "revision": "d5a4d6a9dd5a5c46bff16cbcaccb5b34"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "60584cfd5d330400b490de4145565c7e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});