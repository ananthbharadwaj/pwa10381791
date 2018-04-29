/* global angular */
angular.module('angularMovies')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/upComingMovies', {
        templateUrl: 'js/routes/upComingMovies/template.html',
        controller: 'upComingMoviesCtrl',
        controllerAs: 'vm'
      })
  })
