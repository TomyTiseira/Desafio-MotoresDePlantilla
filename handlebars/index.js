const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productsRouter = express.Router();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Products array initialization.
const products = [];
let error = false;

// Get all products from products array.
productsRouter.get("/", (req, res) => {
  res.render("productos", {
    products,
    error,
  });
});

// Add product in products array.
productsRouter.post("/", (req, res) => {
  const { name, price, thumbnail } = req.body;
  error = false;

  if (name && price && thumbnail) {
    const id = products ? products.length + 1 : 1;
    products.push({ name, price, thumbnail, id });
  } else {
    error = true;
  }

  res.redirect("/productos");
});

app.use("/productos", productsRouter);

app.listen(8080);
