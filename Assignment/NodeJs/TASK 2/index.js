const express = require("express");
const mongoose = require("mongoose");
const model = require("./schema/schema");

const app = express();

const dbUrl = "mongodb://localhost:27017/schemaDB";
mongoose.set('strictQuery', true);

const dbConnection = async () => {
   mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected successfully...");
    })
    .catch((err) => {
      console.log(err);
    });
};
dbConnection();



