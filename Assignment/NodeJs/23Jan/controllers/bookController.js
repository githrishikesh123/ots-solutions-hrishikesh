import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import books from "../data/books.js";

dotenv.config();
const PORT = process.env.PORT || 8000;
const MONGO_URI = "mongodb+srv://userDB:userDB123@cluster0.4qpy1g9.mongodb.net/?retryWrites=true&w=majority";
const listOfBooks = books;
async function main() {
  if (MONGO_URI) {
    const client = new MongoClient(MONGO_URI); //MongoClient is a class allows to make Connections to MongoDB.

    try {
      await client.connect();
      console.log(" Connection Established Successfully !");
      // List Databases ------------------------------------------------
      await listDatabases(client);

    } catch (error) {
      console.log("Error : ", error);
    }
  } else {
    console.log("Please Send Valid MONGO URL");
  }
}

main().catch(console.error);

// ----------------------------------------------------------------- Getting List Of All Databases
async function listDatabases(client) {
  const DatabasesList = await client.db().admin().listDatabases();
  console.log("DatabasesList: ");
  DatabasesList.databases.forEach((database) => {
    console.log(database.name);
  });
}


// ======================================================================================== 

// ================================================================================= ROUTES REST API
const getAllBooks =
  ("/library",
  (req, res) => {
    res.send("getting all books");
  });
// =================================================================================ADD A BOOK REST API
const addOneBook =
  ("/addOneBook",
  (req, res) => {
    res.send("add a books");
    // addNewDataEntry(client, {
    //   title: "Six Point Noone",
    //   author: "Chetan Bhagat",
    //   description:
    //     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    //   display: true,
    // });
  });

// -------------------------------------------------------- Specific Book Details
const specificBook =
  ("/book/:id",
  (req, res) => {
    const { id } = req.params;
    res.send(`getting with id ${id}`);
  });

const sendAllBooks =
  ("/",
  (req, res) => {
    res.send("will send all books to mongoDB");
  });

const updateBook =
  ("/books/:id",
  (req, res) => {
    const { id } = req.params;
    res.send(`update book with id ${id}`);
  });
const deleteBook =
  ("/books/:id",
  (req, res) => {
    const { id } = req.params;
    res.send(`delete book with id ${id}`);
  });

//   ============================================================================= FUNCTIONS FOR MONGO DATA

export {
  getAllBooks,
  specificBook,
  sendAllBooks,
  updateBook,
  deleteBook,
  addOneBook,
};
