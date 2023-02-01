import express from "express";
// import handlebars from "handlebars";
// import hbs from "hbs"
import { engine } from "express-handlebars";
const app = express();
import books from "./data/books.js";

const PORT = 8000;

// --------------------------------------------to set view engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
// --------------------------------------------template engine route

app.get("/", (req, res) => {
  res.render("index");
});
// -------------------------------------------- Route to books.hbs pass books as books
app.get("/books", (req, res) => {
  res.render("books", {
    books: books,
  });
});

// ----------------------------------------------- get specific book by ID
app.get("/books/:id", (req, res) => {
  const { id } = req.params;

  const searchedBook = books.find((book) => {
    return book.id == id;
  });

  console.log(searchedBook);
  if (searchedBook) {
    res.render("specific-book", searchedBook);
  } else {
    res.send(`No Book Found With ID ${id}`);
  }
});

app.listen(PORT, () => {
  console.log("listening on PORT");
});
