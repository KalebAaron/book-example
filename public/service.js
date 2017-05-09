function Service(){
  
  var url = 'http://localhost:3000' 
  this.createBook = function(book){
    $.post(url, book).then(function(res){
      console.log(res)
    })
  }


}