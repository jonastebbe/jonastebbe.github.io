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
    "url": "webpack-runtime-f794b8f722179367a5f4.js"
  },
  {
    "url": "app-631b5146793ccff490d6.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-6310fcd9ffd0f72df57b.js"
  },
  {
    "url": "index.html",
    "revision": "bf921d3662023dcdaca296c9289e3851"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "3743ef781a5c235517600d5c5d345aca"
  },
  {
    "url": "0.9e1c431ed28ffaaef0b4.css"
  },
  {
    "url": "0-899c7fe0ed1cfe998a07.js"
  },
  {
    "url": "component---src-pages-index-jsx-ff128f1ff3ec2956c218.js"
  },
  {
    "url": "1-762008fb057f9e5a3787.js"
  },
  {
    "url": "static/d/937/path---index-6a9-cl6fId9FhNYmhYdjUbldqlzPs.json",
    "revision": "69a435bc4dff0d0101797c8a19f38f85"
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