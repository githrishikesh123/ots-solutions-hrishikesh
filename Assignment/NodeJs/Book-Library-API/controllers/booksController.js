import booksModel from "../model/books.js";
import books from "../data/data.js";
import { engine } from "express-handlebars";
import express from "express";

const app = express();

/*
CRUD API Operations -
/POST -> To Add A New Book Detail
/GET -> To Search All Books -> find
/GET/:id -> To Search Specific Book on the basis of Author -> findOne
/PATCH/:id -> To Update Specific Book on the basis of Author -> updateOne
/DELETE -> To Delete Specific Book on the basis of Author -> 

*/

const hbTry = (req, res) => {
  res.render("home");
};
// ==========================================================================

const sendAllBooks = (req, res) => {
  // booksModel.insertMany(books)
  res.send("send all Books");
};
// ------------------------------------------------------------------ Get All Books
const getAllBooks = async (req, res) => {
  let result = await booksModel.find().lean();
  console.log("getting all books typr of ");
  // res.send(result)
  res.render("library", {
    books: result,
  });
};

const getForm = ( (req,res)=>{
  res.render("booksUpdate" , {
    addBook:true
  })
})
// --------------------------------------------------------------------- Add One Book
const addBook = ( async (req, res) => {
  let bookEntry = new booksModel({
    name : req.body.name,
    author : req.body.author,
    description : req.body.description

  })
  let result = await bookEntry.save()
  // let oneBook = req.body;
  // let result = await booksModel.create(oneBook);
  // res.send("result");
  console.log("add one book", result);
  res.send("Added New Book!!!")
});
// ------------------------------------------------------------------------- Find Book By Id
const bookById =
  ("/books/:id",
  async (req, res) => {
    const { id } = req.params;
    // const FindBook = await booksModel.find({author:id});
    const FindBook = await booksModel.findById(id).lean(); // find by id
    // res.send(FindBook);

    res.render("book", FindBook);
    console.log(`get book of id ${id}`);
  });

// ---------------------------------------------------------------------------- Delete A Book
const removeBook =
  ( 
  async (req, res) => {
    const { id } = req.params;
    // let result = await booksModel.deleteOne({ _id: id });
    // res.send(result);
    // console.log(`delete book of id ${id}`);
    res.send('dellll')
  });
// -------------------------------------------------------------------------------- Edit A Book
const editBook =
  ("/books/:id",
  async (req, res) => {
    res.render("booksUpdate");
    const { id } = req.params;
    const result = await booksModel.findById(id);
    result.description = req.body.description;
    await result.save();
    // res.send(result);

    console.log(`edit book of id ${id}`);
  });

export {
  sendAllBooks,
  getAllBooks,
  addBook,
  bookById,
  removeBook,
  editBook,
  hbTry,
  getForm
};
