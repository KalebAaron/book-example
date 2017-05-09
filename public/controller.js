function Controller() {
  var service = new Service()

  this.createBook = function getBook(e) {
    event.preventDefault()
    var book = {
      title: event.target.bookTitle,
      publisher: event.target.bookPublisher,
      rating: event.target.bookRating,
      author: event.target.bookAuthor

    }
    service.createBook(book)
  }
}