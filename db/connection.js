const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/library", { useNewUrlParser: true });

module.exports = mongoose;