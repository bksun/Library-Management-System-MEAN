// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new mongoose.Schema({
    isbn: String,
    title: String,
    author: String,
    description: String,
    price: { type: Number, min: 0, default: 0 },
    published_year: String,
    publisher: String,
    updated_date: { type: Date, default: Date.now },
    created_date: { type: Date },
  });

  module.exports = mongoose.model('Book', BookSchema);
