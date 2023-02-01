import express from "express";
import mongoose from "mongoose";
import { engine } from "express-handlebars";
import bookModel from "../models/book.js";
import books from "../data/books.js";

const app = express();

// Register `hbs.engine` with the Express app.
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
// ------------------------------------- 

app.use(express.json());
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://userDB:userDB123@cluster0.4qpy1g9.mongodb.net/books_library?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
app.listen(3000, () => {
  console.log("Server is running...");
});
// =================================================================================== Controller Routes
const getAllBooks = async (req, res) => {
  // res.send("getting all books");
  const book = await bookModel.find({});
  try {
    res.send(book);
  } catch (error) {
    res.status(500).send(error);
  }
  
};
// ----------------------------------------------------- Get Specific User
const getSpecificBook =
  ("/:id",
  (req, res) => {
    res.send("get one book");
  });
// ----------------------------------------------------- Create New User
const addOneBook = async (req, res) => {
  const book = new bookModel(req.body);
  try {
    await book.save();

    res.send(book);
  } catch (error) {
    res.status(500).send(error);
  }
};

const sendAllBooks = async (req, res) => {
  const book = new bookModel();
  try {
    await book.insertMany(localBooks);

    res.send(localBooks);
  } catch (error) {
    res.status(500).send(error);
  }

  
};
// ------------------------------------------------------------- PUT /  Update User

const updateBook = async (req, res) => {
  bookModel.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
      console.log("Data updated!");
    }
  });
};

// -------------------------------------------------------------- DELETE / delete user
const deleteBook =
  ("/delete/:id",
  (req, res) => {
    let ID = req.params.id;
    res.send("delete a book");
  });

export {
  getAllBooks,
  getSpecificBook,
  addOneBook,
  updateBook,
  deleteBook,
  sendAllBooks,
};
