var CACHE_VERSION = 'rozercustoms-v1.03';
var CACHE_FILES = [
	'/',
	'/index.html',
	'/css/main.css',
	'/js/main.js',
	'/img/about1.jpg',
	'/img/about2.jpg',
	'/img/about3.jpg',
	'/img/intro-logo.png',
	'/img/intro1.jpg',
	'/img/intro2.jpg',
	'/img/intro3.jpg',
	'/img/intro4.jpg',
	'/img/intro5.jpg',
	'/img/bike-v1.png',
	'/img/bike-v2.png',
	'/img/gears.png',
	'/img/background.jpg',
	'/img/facebook-logo.png',
	'/img/navbar-logo.png',
	'/img/blue_devil/blue-devil.jpg',
	'/img/cafe_racer/cafe-racer.jpg',
	'/img/shotgun/shotgun.jpg',
	'/img/popstar/popstar.jpg',
	'/img/the_bat/the-bat.jpg',
	'/img/ironclad/ironclad.jpg',
	'/img/the_bull/the-bull.jpg',
	'/img/gangster/gangster.jpg',
	'/img/ultimate_hulk/ultimate-hulk.jpg',
	'/img/green_hornet/green-hornet.jpg',
	'/img/foghorn/foghorn.jpg',
	'/img/dexter/dexter.jpg',
	'/img/rooster/rooster.jpg',
	'/img/riders/riders.jpg',
	'/img/boulder/boulder.jpg',
	'/img/the_cafe/the-cafe.jpg'
];

self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(CACHE_VERSION).then(function (cache) {
			return cache.addAll(CACHE_FILES);
		})
	);
});

self.addEventListener('fetch', function (event) {
	event.respondWith(caches.match(event.request).then(function (response) {
		if (response !== undefined) {
			return response;
		} else {
			return fetch(event.request).then(function (response) {
				var responseClone = response.clone();
				caches.open(CACHE_VERSION).then(function (cache) {
					cache.put(event.request, responseClone);
				});
				return response;
			});
		}
	}));
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function(keys){
            return Promise.all(keys.map(function(key, i){
                if(key !== CACHE_VERSION){
                    return caches.delete(keys[i]);
                }
            }));
        })
    );
});
