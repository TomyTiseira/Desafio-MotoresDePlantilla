const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

const products = [];

app.get("/", (req, res) => {
  res.render("productos.pug");
});

app.post("/", (req, res) => {
  // const { name, price, thumbnail } = req.body;
  console.log(req.body);
  const id = products ? products.length + 1 : 1;
  // products.push({ name, price, thumbnail, id });
  res.redirect("/");
});

app.listen(8080, () => console.log(`Listening`));
