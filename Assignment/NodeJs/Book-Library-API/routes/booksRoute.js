import express from 'express';
import { get } from 'mongoose';
import {sendAllBooks , getAllBooks , addBook , bookById , removeBook , editBook , hbTry , getForm} from '../controllers/booksController.js'

const booksRouter = express.Router();

/*
Routes -
/api/books -> GET, POST
/api/books/:id -> GET, PATCH, DELETE

booksrouter.route("/api/books").post(addNewBook);
booksrouter.route("/api/books").get(readAllBooks);
booksrouter.route("/api/books/:id").get(getSpecificBook);
booksrouter.route("/api/books/:id")
.delete(deleteSpecificBook);booksrouter.route("/api/books/:id").patch(updateSpecificBook);
*/

booksRouter.route("/books").get(getAllBooks).post(addBook)
// booksRouter.route('/addbook').post(addBook)
booksRouter.route("/books/booksupdate").get(getForm)
// booksRouter.route('/books/try').get(hbTry)
booksRouter.route('/books/sendAllBooks').post(sendAllBooks)
booksRouter.route("/books/:id").get(bookById).patch(editBook)
booksRouter.route("/bookdeleted").delete(removeBook)

export default booksRouter;