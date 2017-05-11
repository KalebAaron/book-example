const router = require('express').Router();
var Book = require('./../models/book')


exports.mountPath = '/books';
exports.router = router;

router.route('/')
  .get(getBooks)

router.route('/')
  .post(createBook);

function getBooks(req, res, next) {
  Book.find({}).then(function (books) {
    res.send(books)
  })
}  

function createBook(req, res, next) {
  var newBook = req.body
  Book.create(newBook).then(function (newlyCreatedBook) {
    res.json(newlyCreatedBook)
  })
}