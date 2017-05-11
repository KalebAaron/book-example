function MovieService(){
  
  var url = 'http://localhost:3000/movies' 
  this.createMovie = function(movie){
    $.post(url, movie).then(function(res){
      console.log(res)
    })
  }
  this.getMovie = function(movie){
    $.get(url, movie).then(function(res){
      console.log(res)
    }
    )}
}