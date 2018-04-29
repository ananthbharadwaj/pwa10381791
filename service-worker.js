//	Installing the Service Worker
var CACHE_NAME = 'moviesApp';
var urlsToCache = [
  './',
  './index.html',
  './movie.json',
  './service-worker.js',
  './img/banner.jpg',
  './img/poster1.jpg',
  './img/poster2.jpg',
  './img/poster3.jpg',
  './img/poster4.jpg',
  './css/bootstrap.min.css',
  './css/custom.css',
  './css/normalize.min.css',
  './css/styles.css',
  './css/styles.css.map',
  './js/routes/home/controller.js',
  './js/routes/home/index.js',
  './js/routes/home/template.html',
  './js/routes/movie/controller.js',
  './js/routes/movie/index.js',
  './js/routes/movie/template.html',
  './js/routes/nowPlaying/controller.js',
  './js/routes/nowPlaying/index.js',
  './js/routes/nowPlaying/template.html',
  './js/routes/popularMovies/controller.js',
  './js/routes/popularMovies/index.js',
  './js/routes/popularMovies/template.html',
  './js/routes/searchMovie/controller.js',
  './js/routes/searchMovie/index.js',
  './js/routes/searchMovie/template.html',
  './js/routes/topRatedMovies/controller.js',
  './js/routes/topRatedMovies/index.js',
  './js/routes/topRatedMovies/template.html',
  './js/routes/upComingMovies/controller.js',
  './js/routes/upComingMovies/index.js',
  './js/routes/upComingMovies/template.html',
  './js/services/movieDataServices.js',
  './js/angular.min.js',
  './js/app.js',
  './js/custom.js',
  './js/jquery-1.11.1.min.js',
  './sass/styles.scss',
  './favicon.ico',
  './manifest.json',
  './movieSeats.html',
  './service-worker.js',
];
// Fetching the file resources using the Fetch Api
self.addEventListener('fetch', function(event) {
  console.log('Fetch Opened cache');
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

/*
//  Activating the Service Worker
self.addEventListener('activate', function(event) {
console.log('Activate Opened cache');
  var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

});*/
//  Activating the Service Worker
self.addEventListener('activate', function(event) {
	console.log('[Service Worker] Activating Service Worker...', event);
	return self.clients.claim();
});

// Fetching the file resources using the Fetch Api
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
			.then(function(response){
				if(response){
					return response;
				}else{
					return fetch(event.response);
				}
			})
	);
});
