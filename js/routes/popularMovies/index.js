/* global angular */
angular.module('angularMovies')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/PopularMovies', {
        templateUrl: 'js/routes/popularMovies/template.html',
        controller: 'popularMoviesCtrl',
        controllerAs: 'vm'
      })
  })
