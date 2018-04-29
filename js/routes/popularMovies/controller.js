/* global angular */
angular.module('angularMovies')
  .controller('popularMoviesCtrl', function (moviesDataServices) {
    var vm = this
    moviesDataServices.getPopularMovies()
      .then(function (movies) {
        vm.popularMovies = movies.data.results
      })
  })
