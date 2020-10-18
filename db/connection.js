const mongoose = require("mongoose");

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("connection with database established");
});

// mongoose.connect("mongodb://localhost/library", { useNewUrlParser: true });

// module.exports = mongoose;

//mongodb+srv://WRNoble:Carthage1@@cluster0.gtay8.mongodb.net/Library?retryWrites=true&w=majority
