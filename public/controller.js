function Controller() {
  var service = new Service()

  this.createBook = function getBook(e) {
    event.preventDefault()
    var book = {
      title: event.target.bookTitle.value,
      publisher: event.target.bookPublisher.value,
      rating: event.target.bookRating.value,
      author: event.target.bookAuthor.value

    }
    service.createBook(book)
  }
}