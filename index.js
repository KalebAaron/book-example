var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var server = express()
var port = 3000
var Book = require('./models/book')
var Movie = require('./models/movie')
var routes = require('./routes');

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(cors())
server.use('/', express.static(`${__dirname}/public/`))
server.use(routes.router)
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


server.get('/', function (req, res, next) {
  res.send(200)
})

