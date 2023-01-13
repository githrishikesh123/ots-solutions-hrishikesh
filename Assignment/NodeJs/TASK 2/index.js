const express = require("express");
const mongoose = require("mongoose");
const EmployeeSchema = require("./schema/schema");

const app = express();

const db_url = "mongodb://localhost:27017/schemaDB";

const dbConnection = async () => {
  await mongoose
    .connect(db_url, {
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
