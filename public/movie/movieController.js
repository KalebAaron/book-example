function MovieController() {
  var service = new MovieService()

  this.createMovie = function getMovie(e) {
    event.preventDefault()
    var movie = {
      title: event.target.movieTitle.value,
      release: event.target.movieRelease.value,
      rating: event.target.movieRating.value,
      review: event.target.movieReview.value

    }
    service.createMovie(movie)
  }
}