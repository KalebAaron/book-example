var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var server = express()
var port = 3000

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(cors())
server.use('/', express.static(`${__dirname}/public/`))
//DATABASE STUFF
var mongoose = require('mongoose')
var connectionString = 'mongodb://student:student@ds062889.mlab.com:62889/books'
var connection = mongoose.connection;

//NEVER CHANGES
mongoose.connect(connectionString, {
  server: { socketOptions: { keepAlive: 300000, connectTimeout: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
});

connection.on('error', function (err) {
  console.log('THERE WAS A CONNECTION PROBLEM', err)
})

connection.once('open', () => {
  console.log('We are now connected')
  server.listen(port, function () {
    console.log('Yep its working', 'http://localhost:' + port)
  })
})

var Schema = mongoose.Schema
var BookSchema = new Schema({
  title: { type: String, required: true },
  publisher: { type: String, required: true },
  rating: { type: Number, required: true, default: 5 },
  author: { type: String, required: true }
})

var Book = mongoose.model('Book', BookSchema)

server.get('/', function (req, res, next) {
  res.send(200)
})
server.get('/books', function (req, res, next) {
  Book.find({}).then(function (books) {
    res.send(books)
  })
})
server.get('/books/:id', function (req, res, next) {
  var id = req.params.id
  Book.findById(id).then(function (books) {
    res.send(books)
  }).catch(function (e) {
    res.send(e)
  })
})

server.post('/books', function (req, res, next) {
  var newBook = req.body
  Book.create(newBook).then(function (newlyCreatedBook) {
    res.send(newlyCreatedBook)
  })
})