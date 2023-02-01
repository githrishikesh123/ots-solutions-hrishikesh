import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import books from "../19Jan/data/books.js";

dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URL;
const listOfBooks = books;
async function main() {
  if (MONGO_URI) {
    const client = new MongoClient(MONGO_URI); //MongoClient is a class allows to make Connections to MongoDB.

    try {
      await client.connect();
      console.log(" Connection Established Successfully !");
      // List Databases ------------------------------------------------
      await listDatabases(client);
      //  ------------------------------------------------- Add New Entry
      addNewDataEntry(client, {
            title: "Six Point Noone",
            author: "Chetan Bhagat",
            description:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            display: true,
          })
      //   ------------------------------------------------------------ Add Multiple Entries

      //   await addMultipleEntries(client, listOfBooks)

      //   --------------------------------------------------------------- Read One Document
        // await readOneEntry(client, "Do Epic Shit");
      //   --------------------------------------------------------------- Read All Entries
      await readAll(client);
      //   -------------------------------------------------------------------- Delete One Entry
        // await deleteOneEntry(client , "Six Point Noone")
      // ------------------------------------------------------------------------
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

// ---------------------------------------------------------------  Add New Entry

async function addNewDataEntry(client, newBook) {
  const result = await client
    .db("library_management")
    .collection("listOfBooks")
    .insertOne(newBook);
  console.log(result);
}

// --------------------------------------------------------------- Add Multiple Entries
async function addMultipleEntries(client, listOfBooks) {
  const result = await client
    .db("library_management")
    .collection("listOfBooks")
    .insertMany(listOfBooks);
  console.log("result : ", result);
}
// ---------------------------------------------------------------- Read One Entry
async function readOneEntry(client, entryName) {
  const result = await client
    .db("library_management")
    .collection("listOfBooks")
    .findOne({ title: entryName });
  if (result) {
    console.log(`Found Entry For :  ${entryName} , author : ${result.author}`);
  }
}

// ---------------------------------------------------- Not Done----------------- Read All Entries
async function readAll(client, entryName) {
  const result = await client
    .db("library_management")
    .collection("listOfBooks")
    .find();
  if (result) {
    console.log(result);
  }
}
// --------------------------------------------------------------------------- Update One Document 

// ------------------------------------------------------------------- Delete One Entry
async function deleteOneEntry(client, entryName) {
  const result = await client
    .db("library_management")
    .collection("listOfBooks")
    .deleteOne({ title: entryName });

  if (result) {
    console.log(`deleted item ${entryName}`);
  }
}
