'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d30bf5d376727600f83d867aa0d5b410",
"index.html": "68c3748fa61fd5969e2f8893f6465406",
"/": "68c3748fa61fd5969e2f8893f6465406",
"main.dart.js": "0e04cc2b0526ff0834b517f8462aa18b",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7ce3a5c682a0f1e2df884ace0ec0e5ec",
".git/REBASE_HEAD": "6ce4e18ce8c956ffc8640c1b13ab8d96",
".git/ORIG_HEAD": "6ce4e18ce8c956ffc8640c1b13ab8d96",
".git/config": "d52e50db7ddc44487f273c3658deae23",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/95/cc9c3c8a0b8975ebdfe32b60f93db661eade58": "82e3871f4a93d38625e21f25362c50c8",
".git/objects/57/b3f7c3bc2fedab8393b9c407d825567c9fe863": "1967b737eaeb879a6bb6b7a0e91c0add",
".git/objects/3b/a5392cf6ebe6566a9e3e0f0d25b258af22b0fc": "b6f92725096d0916349451716cbb4774",
".git/objects/6f/91e385b7d6f470dc5ef0f56d4ea0447e43634a": "d5427c5ec002816b3f0b8e68a50907d0",
".git/objects/03/c3a2cc1c54d031b21bf433642572ee7a9b5104": "e2443fc600ec70e82d326339905e0a25",
".git/objects/9e/06e5f19096be170814a82f35118d5956765c18": "b6fd2fc4698f21610f2157f1ba05e7d4",
".git/objects/6a/fbc8f3da16add76beefffa6f0ca5ee6a40d79f": "b12a4616500b31879183ba08093a5497",
".git/objects/35/02d4fbab8fd9b1e0bf1694b7a1b15b3065dcfb": "1735dd28128566a4d43e048d87ba29d9",
".git/objects/02/aefbb1b7dbcdc3b3e5cbc53d5175fe00201d7a": "8a5762b0da92026d5c3791bc9e4218cd",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/be/7c900c122ba40961600d76d5574caa4df77ff4": "56727ac0afedfb55204ac4299aa060be",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/cd8c8688902f2f68f091d0061564c73a65dd5b": "939305dbb3f64f9e1ade11cc5d3d623b",
".git/objects/d8/c356b38df367b94bd1d30495876e7885369ac5": "77a439fa560dcb9c661933931e95ce99",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/59a837b6413cc211b2b6e2b28924e45003fe8b": "f63f64a2b3654575309ccd57417bb82e",
".git/objects/fc/6914505ded1eadaa11a259c78fd7f152fac2a5": "7593e438f0f55abb72b5bfef8361b1d4",
".git/objects/ed/179dfd1127aaeeea694fdc8011cbf25eb93a41": "bd36ec9274e559499efc00eef9fdcf01",
".git/objects/c6/6342908bc82e3bf54691550a8433d81dc5809e": "6ce53875bd4bceeb8c1bbc3e9c0ec7ce",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/42/74169992ee773839250cb59c8e6113fa5c674d": "51bf9f4e88bb84d76217613ad297bdc5",
".git/objects/73/4880b995fd97bd61844a8ae5bca33f46ef5844": "8cf5054861ad671ea9fa4353b013d966",
".git/objects/74/d965654606f92033695bd85a37e96c7ab0bce7": "1e2c3db8d1c69887b3bde6fb9836a214",
".git/objects/28/087c88cbeb23fbd1cef1b8e01ad78cc4dff75a": "8b5c65a68f577f0e3d79c132354df743",
".git/objects/8f/3a539eb64ce1f0c64f0b99510f752a819262c3": "0f0a4510760af9bd50bc59267289c1a2",
".git/objects/8a/6d4005a25a9914ceea5fb6042bc3376b407097": "86bfc4c4b2e18668fd3efcd4b3b9961b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/23183960123416b5251e8687e493d98baad035": "f0a66f24f1178d112b3a3d03cfd556c5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/57b032e65ccdca3f60da9a243a640f52ad3343": "a1cdde3228404e97f8a93e504d16ed47",
".git/objects/6e/697632e6a8e9872359a16ebb5bccef3ea3f30f": "caf288155b48677c71930306593d0c57",
".git/objects/5c/00f4197f52907717f7f8bc55977de5d15cbc80": "cc22c94d656bcfc161e563325572710d",
".git/objects/3a/a6f43b79d5e236261eb88c1858927970af011a": "63c4394b1566ef494aa593e3f8a3d328",
".git/objects/98/ba3081099b61391aa9012219d13f3c33066111": "fb418d27ba22c1417d6d0a0a3d0d7ee4",
".git/objects/37/8de1efd0662b6549627386e06e8062ce87c5d7": "403f43a7f4bf3431338306824db14728",
".git/objects/99/88f1702f4898e13b980867410cbf07e24aff86": "a808687be5a1a33fd2a717de928997d9",
".git/objects/90/46b76cfbcfa62ee4574905556017453628857f": "bbd10441d68025f7afd7f558ea00ef49",
".git/objects/bf/745b0e59d14ffe4cdaec93500fda18ceb79753": "1c4c76bef8cd9c0fcbf443ede89e17c9",
".git/objects/b6/89fe6ef99ac712b623b48176f00c7c9da9821a": "c1bcd396b677e847b55e5f566f81b374",
".git/objects/aa/05db9c5c2ec024fafe15c4147c691c219959f3": "e042ce6f0fe7bf88e1e7d1b5745398b7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/7050d421c47f9a402d1db5854ad516da396be5": "f88a2f528f5152e1b048b75b4c8930f6",
".git/objects/e1/4a53eaee3c907927dab34e6f360e4a760a78c5": "b225ae93f1ac8659afa449824d38bda0",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e7/a82015fca48dfacb0b6ef3ee7d415515abb524": "70dce76addec776a586e2bd3e7e81759",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/4f/dab920e14b61166178024200c31e6c572ccc41": "7c1bcede413d72166b915ea86742fede",
".git/objects/12/51c6f3c42bbddfd7d482b005f79788ddf62f60": "e3432ff627f47222834c5e25101f7fac",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/2b/0ddf4dd1a0b07e05a174b6833892cd8611d822": "b0d7d773801f780d984d56827d060584",
".git/objects/7a/2c172672082e5186b54e6cda00b8187213ee1f": "52cc336ec7a6344bdfd716cb595bbbb6",
".git/objects/7a/6163c81d0ec877b98233d6396c54ae6c9dc1d2": "15e5a4c1e8810114257d0fa80aff21f7",
".git/objects/8e/58cfb09eef93f51b059e2f9a2daecadfc61aaa": "2b03eaf5535518db7fa81e29d9fc4244",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "19d4f0f8d92127a247046ea244dc9200",
".git/logs/refs/heads/main": "bb12214db14863830e14db7d8f7fedf8",
".git/logs/refs/remotes/origin/main": "f6b993a0d022f735db2d84e71fd676df",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "de6d0e92d695f37907df537210177376",
".git/refs/remotes/origin/main": "de6d0e92d695f37907df537210177376",
".git/index": "0d4bc4feaa3859cbdfe66ab6043f717e",
".git/COMMIT_EDITMSG": "c632a8ac8fc50705dda126d988ffdbad",
".git/FETCH_HEAD": "25b415e89b73e68afa6bd4aabad6ee8e",
"assets/AssetManifest.json": "b1b2ae764211a33ac32b05e5aff54922",
"assets/NOTICES": "99eb53ea7ef2a16f30194d8e4e083957",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/boom.png": "f818f0dd9f5afef9f561d91fa71664a5",
"assets/assets/images/clouds.png": "5f60fdc83c530bed3bcb9db756dc135a",
"assets/assets/images/like.png": "f96deb9259c800a5e7f9720010d4f5a0",
"assets/assets/images/blink.png": "b63728fee4d4d074136298687cb9bdae",
"assets/assets/images/sweating.png": "743fdd19d8e779a9e1c1cb0c23655156",
"assets/assets/images/laptop.png": "ee2ca0610c540a0c1747ed01089d21ad",
"assets/assets/images/meditating.png": "2fe79dc1240f06c38b6518408574f27c",
"assets/assets/images/peace.png": "d90e1b40978b1d8db7b7f5617d85ded1",
"assets/assets/icons/linkedin_icon.svg": "5b238434e2862c877f08572b96c0ef7b",
"assets/assets/icons/instagram_icon.svg": "341a67c538d67f9ce92005cf14255dc2",
"assets/assets/icons/github_icon.svg": "1bb027109345a90a9eab1e929d8669c2",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
