// import express from "express";
// import books from "../data/books.js";
// import booksModel from "../Model/bookModel.js";
// app.engine("handlebars", engine());
// app.set("view engine", "handlebars");
// app.set("views", "./views");
// const router = express.Router();
// // POST
// router.post("/", (req, res) => {
//   const book = new booksModel(req.body);
//   book.save()
//   console.log(req.body);
//   res.send("Hi POST");
// });

// router.get("/", (req, res) => {
//   res.render("home", {
//     books: books,
//   });
// });
// router.get("/getAll", (req, res) => {
//   res.render("library", {
//     books: books,
//   });
// });
// // ------------------------------------------------------------ Specific Book Details
// router.get("/getOne/:id", (req, res) => {
//   const { id } = req.params;

//   const searchedBook = books.find((book) => {
//     return book.id == id;
//   });
//   console.log(searchedBook);

//   if (searchedBook) {
//     res.render("book", searchedBook);
//   }
// });
// // ------------------------------------------------------------ ADD Book
// router.get("/booksupdate", (req, res) => {
//   res.render("booksUpdate", {
//     addBook: true,
//   });
// });
// // ---------------------------------------------------------- Edit Specific Book
// router.get("/booksupdate/:id", (req, res) => {
//   const { id } = req.params;
//   console.log("updt book", id);

//   const searchedBook = books.find((book) => {
//     return book.id == id;
//   });
//   console.log(searchedBook);

//   if (searchedBook) {
//     res.render("booksUpdate", {
//       addBook: false,
//       searchedBook,
//     });
//   }
// });
// export default router;

