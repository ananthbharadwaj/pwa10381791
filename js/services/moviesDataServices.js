/* global angular */
angular.module('angularMovies')
  .factory('moviesDataServices', function ($http) {
    const apiKey = '8d181bcb5e80a929053da01f6921e4a9'

    function getPopularMovies () {
      const url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US&page=1'
      return $http.get(url)
    }

    function getTopRatedMovies () {
      const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + apiKey + '&language=en-US&page=1'
      return $http.get(url)
    }

    function getUpComingMovies () {
      const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + apiKey + '&language=en-US&page=1'
      return $http.get(url)
    }

    function getNowPlayingMovies () {
      const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey + '&language=en-US&page=1'
      return $http.get(url)
    }

    function getMovieById (movieId) {
      const url = 'https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + apiKey + '&append_to_response=videos'
      return $http.get(url)
    }
    function getOneFilm (filmName) {
      const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=' + filmName
      return $http.get(url)
    }
    return {
      getPopularMovies: getPopularMovies,
      topRatedMovies: getTopRatedMovies,
      upComingMovies: getUpComingMovies,
      nowPlayingMovies: getNowPlayingMovies,
      infoMovie: getMovieById,
      getOneFilm: getOneFilm

    }
  })
