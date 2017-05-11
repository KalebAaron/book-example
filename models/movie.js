var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var MovieSchema = new Schema({
  title: {type: String, required: true},
  release: {type: Number, required: true},
  rating: {type: String, required: true},
  review: {type: Number, required: true}
})

var Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie;