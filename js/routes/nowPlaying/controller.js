/* global angular */
angular.module('angularMovies')
  .controller('nowPlayingCtrl', function (moviesDataServices) {
    var vm = this
    moviesDataServices.nowPlayingMovies()
      .then(function (movies) {
        console.log(movies)
        vm.nowPlaying = movies.data.results
      })
  })
