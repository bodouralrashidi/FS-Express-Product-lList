const express = require("express");
const products = require("./data");
const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
