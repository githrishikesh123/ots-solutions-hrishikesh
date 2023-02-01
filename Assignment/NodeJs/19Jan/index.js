import express from "express";
import mongoose from "mongoose";
import { engine } from "express-handlebars";
import books from "./data/books.js";
import dotenv from "dotenv";
import schema from "./Model/Schema.js";
// import routes from "./Routes/routes.js"
dotenv.config();

const app = express();
const PORT = 8000;
const MONGO_URI = process.env.DATABASE_URL;
const listOfBooks = books;
let arr = [];

// ---------------------------------------------------------------- Mongo Connection
// Declare a variable named option and assign optional settings
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.set("strictQuery", false);
// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(MONGO_URI, options).then(
  () => {
    console.log("Database connection established!");
  },
  (err) => {
    {
      console.log("Error connecting Database instance due to:", err);
    }
  }
);
// ------------------------------------------------------------------- mongoose connection end
// --------------------------------------------to set view engine
// Register `hbs.engine` with the Express app.
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
// --------------------------------------------

// POST
app.post("/", async (req, res) => {
  const data = await schema.create(req.body);
  res.send({ message: "data added successfully", ...req.body });
  console.log(req.body);
  res.send("Hi POST");
});

app.get("/", async (req, res) => {
  const data = await schema.find();
  console.log("data=>", data);
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
  // console.log(searchedBook);
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


