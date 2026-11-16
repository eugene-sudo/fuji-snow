// 最簡單的 service worker:不快取,只讓瀏覽器把這個網站視為可安裝的 App。
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){});
