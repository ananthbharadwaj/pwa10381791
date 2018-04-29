/* global angular */
angular.module('angularMovies')
  .controller('topRatedMoviesCtrl', function (moviesDataServices) {
    var vm = this
    moviesDataServices.topRatedMovies()
      .then(function (movies) {
        vm.topMovies = movies.data.results
      })
  })
