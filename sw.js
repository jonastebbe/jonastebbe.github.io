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
    "url": "webpack-runtime-5b05541e19f4f6ddc0fe.js"
  },
  {
    "url": "app-f81c7053a000e85cd739.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-64d7e64ac5da9d4d4a8d.js"
  },
  {
    "url": "index.html",
    "revision": "22feddbcd088cf3005f19460c381ccd4"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0c7ffc4b91f00cd0f73e9da1e34b1127"
  },
  {
    "url": "0.dd9e612bd8f29f6927b3.css"
  },
  {
    "url": "0-9b20b7264dae782fe18a.js"
  },
  {
    "url": "component---src-pages-index-jsx-4bbddfc7ab0b082e80cf.js"
  },
  {
    "url": "1-884694ed0c8e86b09585.js"
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