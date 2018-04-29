/* global angular  */

angular.module('angularMovies')
.controller('findCtrl', function (moviesDataServices) {
  var vm = this
  vm.findMovie = function () {
    moviesDataServices.getOneFilm(vm.movie)
    .then(function (movies) {
      vm.moviesFound = movies.data.results
    })
  }
})
