/* global angular */
angular.module('angularMovies')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/movie/:id', {
        templateUrl: 'js/routes/movie/template.html',
        controller: 'movieCtrl',
        controllerAs: 'vm'
      })
  })
  