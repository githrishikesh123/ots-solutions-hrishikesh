import express from "express";
import mongoose from "mongoose";
import customerRoute from "./routes/customerRoute.js";
import businessRoute from "./routes/businessRoute.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors"

dotenv.config();
const app = express();
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;
mongoose.set("strictQuery", false);

mongoose
  .connect(MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error", error);
  });

app.use("/customers" , customerRoute)
app.use("/businesses" , businessRoute)


