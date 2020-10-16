const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Book = new Schema({
  title: String,
  author: String,
  genre: String,
  yearPublished: Number,
  digital: Boolean,
});

module.exports = mongoose.model("Book", Book);
