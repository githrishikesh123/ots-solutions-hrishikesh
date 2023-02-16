import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ToDo from "./models/todo.js";
import dotenv from "dotenv";
// import todoroute from './controllers/ToDoController.js'
dotenv.config();
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;
const app = express();

app.use(cors());
app.use(express.json());

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
// -------------------------------------------- Get all list


// app.use()
app.get("/todo", async (req, res) => {
  const list = await ToDo.find();
  res.send(list);
});
// ------------------------------------------------ Add to list
app.post("/todo/add", (req, res) => {
  const {description} = req.body.data;
  // console.log("content" , name) 
  const newToDo = new ToDo({
    description: description,
  });
  newToDo.save();
  res.send(newToDo);
});
// --------------------------------------------------- Edit List item

app.patch("/todo/edit/:id", async (req, res) => {
  const { id } = req.params;
  const selectedToDo = await ToDo.findById(id);
  selectedToDo.completed = !selectedToDo.completed;
  selectedToDo.save();
  console.log(selectedToDo);
  res.send(selectedToDo);
});
// ------------------------------------------------------------ Delete Item 
app.delete("/todo/delete/:id", async (req, res) => {
  const { id } = req.params;
  const result = await ToDo.deleteOne({_id:id});
 res.send(result)
});
