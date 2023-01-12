const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors);

const apiData = require("./products.json");
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello im live");
});

app.get("/products", (req, res) => {
  res.send(apiData);
});

app.listen(port, () => {
  console.log("im live");
});
