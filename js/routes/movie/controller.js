/* global angular */
angular.module('angularMovies')
  .controller('movieCtrl', function ($routeParams, $sce, moviesDataServices) {
    var vm = this
    vm.idMovie = $routeParams.id
    moviesDataServices.infoMovie(vm.idMovie)
      .then(function (movieInfo) {
        console.log(movieInfo)
        vm.movie = movieInfo.data
        vm.genres = movieInfo.data.genres.map(genre => genre.name).join(', ')
        vm.videoLink = 'https://www.youtube.com/embed/' + vm.movie.videos.results['0'].key
        vm.youtube = $sce.trustAsResourceUrl(vm.videoLink)
      })

    vm.video = false
    vm.back = function () {
      window.history.back()
    }
    vm.watchVideo = function () {
      vm.video = !vm.video
    }
  })


  