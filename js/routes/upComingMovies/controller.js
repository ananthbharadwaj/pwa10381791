/* global angular */
angular.module('angularMovies')
  .controller('upComingMoviesCtrl', function (moviesDataServices) {
    var vm = this
    moviesDataServices.upComingMovies()
      .then(function (movies) {
        vm.comingSoon = movies.data.results
      })
  })
