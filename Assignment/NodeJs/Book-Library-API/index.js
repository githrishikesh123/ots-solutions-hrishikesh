import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import booksRouter from "./routes/booksRoute.js";
import {engine} from "express-handlebars"

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
mongoose.set('strictQuery', false);
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
// ------------------------------------------------------------------------ Mongoose Connection 
mongoose.connect(MONGO_URL).then(
    app.listen(PORT, () => {
        console.log(`Connected to server on PORT ${PORT}`);
      })

)
.catch((error)=>{
    console.log("Error Occured:" , error)
})


// app.get("/", (req, res) => {
//   res.send("default route responce");
// });

app.use("/api", booksRouter);

