const express = require("express");
const cors = require("cors");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello handsome");
});

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
