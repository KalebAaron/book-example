var mongoose = require('mongoose')



var Schema = mongoose.Schema
var BookSchema = new Schema({
  title: { type: String, required: true },
  publisher: { type: String, required: true },
  rating: { type: Number, required: true, default: 5 },
  author: { type: String, required: true }
})

var Book = mongoose.model('Book', BookSchema)

module.exports = Book;