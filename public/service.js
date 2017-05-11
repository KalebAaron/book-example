function Service(){
  
  var url = 'http://localhost:3000/books' 
  this.createBook = function(book){
    $.post(url, book).then(function(res){
      console.log(res)
    })
  }
  this.getBook = function(book){
    $.get(url, book).then(function(res){
      console.log(res)
    }
    )}
}