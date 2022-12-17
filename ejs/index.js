const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productsRouter = express.Router();

app.set("views", "./views");
app.set("view engine", "ejs");

// Products array initialization.
const products = [];
let error = false;

// Get all products from products array.
productsRouter.get("/", (req, res) => {
  res.render("form.ejs", {
    products,
    error,
  });
});

// Add product in products array.
productsRouter.post("/", async (req, res) => {
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
