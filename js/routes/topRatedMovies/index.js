/* global angular */
angular.module('angularMovies')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/topRatedMovies', {
        templateUrl: 'js/routes/topRatedMovies/template.html',
        controller: 'topRatedMoviesCtrl',
        controllerAs: 'vm'
      })
  })
