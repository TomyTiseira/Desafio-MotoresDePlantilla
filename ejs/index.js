const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productsRouter = express.Router();

app.set("views", "./views");
app.set("view engine", "ejs");

const products = [];

productsRouter.get("/", (req, res) => {
  res.render("form.ejs", {
    products,
  });
});

productsRouter.post("/", async (req, res) => {
  const { name, price, thumbnail } = req.body;
  const id = products ? products.length + 1 : 1;
  products.push({ name, price, thumbnail, id });
  res.redirect("/productos");
});

app.use("/productos", productsRouter);

app.listen(8080);
