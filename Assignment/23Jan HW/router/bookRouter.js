import express, { json } from "express";
import {getAllBooks, getSpecificBook, addOneBook, updateBook, deleteBook,sendAllBooks} from '../controllers/bookController.js'
const bookRouter = express.Router();


bookRouter.route("/book").get(getAllBooks)
bookRouter.route("/book/addBook").post(addOneBook)
bookRouter.route("/book/sendAll").post(sendAllBooks)
bookRouter.route("/book/:id").get(getSpecificBook).post(addOneBook).put(updateBook).delete(deleteBook)

export default bookRouter;