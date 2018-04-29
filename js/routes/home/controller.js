/* global angular */
angular.module('angularMovies')
  .controller('homeCtrl', function (moviesDataServices, $q) {
    var vm = this
    var nowPlayingPromise = moviesDataServices.nowPlayingMovies()
    var topRatedPromise = moviesDataServices.topRatedMovies()
    var upComingPromise = moviesDataServices.upComingMovies()
    var getPopularPromise = moviesDataServices.getPopularMovies()

    $q
      .all([nowPlayingPromise, topRatedPromise, upComingPromise, getPopularPromise])
      .then(function (movies) {
        vm.nowPlaying = movies[0].data.results
        vm.topMovies = movies[1].data.results
        vm.comingSoon = movies[2].data.results
        vm.popularMovies = movies[3].data.results
      })
  })

 
