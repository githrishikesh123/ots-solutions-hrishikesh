import express from "express";
import books from "../data/books.js";
import {getAllBooks , specificBook , sendAllBooks , updateBook , deleteBook, addOneBook } from "../controllers/bookController.js"

const router = express.Router();

// routes====>
router.route("/" , (req, res)=>{
    res.send("Default Page")
    
})
router.route("/books").get(getAllBooks)
router.route("/books/:id").get(specificBook).delete(deleteBook).post(addOneBook);


export default router;