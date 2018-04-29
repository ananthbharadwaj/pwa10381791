/* global angular */
angular.module('angularMovies')
.config(function ($routeProvider) {
  $routeProvider
    .when('/searchMovie', {
      templateUrl: 'js/routes/searchMovie/template.html',
      controller: 'findCtrl',
      controllerAs: 'vm'
    })
})
