import express from "express";
import { engine } from "express-handlebars";
import books from "./data/books.js";

const app = express();
const PORT = 8000;

// --------------------------------------------to set view engine
// Register `hbs.engine` with the Express app.
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
// --------------------------------------------

app.get("/", (req, res) => {
  res.render("home", {
    books: books,
  });
});
app.get("/library", (req, res) => {
  res.render("library", {
    books: books,
  });
});
// ------------------------------------------------------------ Specific Book Details
app.get("/book/:id", (req, res) => {
  const { id } = req.params;

  const searchedBook = books.find((book) => {
    return book.id == id;
  });
  console.log(searchedBook);

  if (searchedBook) {
    res.render("book", searchedBook);
  }
});
// ------------------------------------------------------------ ADD Book
app.get("/booksupdate", (req, res) => {
  res.render("booksUpdate", {
    addBook: true,
  });
});
// ---------------------------------------------------------- Edit Specific Book
app.get("/booksupdate/:id", (req, res) => {
  const { id } = req.params;
  console.log("updt book", id);

  const searchedBook = books.find((book) => {
    return book.id == id;
  });
  console.log(searchedBook);

  if (searchedBook) {
    res.render("booksUpdate", {
      addBook: false,
      searchedBook,
    });
  }
});


app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
