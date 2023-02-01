import mongoose, { mongo } from "mongoose";

// Declare schema and assign Schema class
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, required: true },
  author: { type: Number, required: true },
  description: { type: String, required: true },
});

const booksModel = mongoose.model("BookModel", schema);
export default booksModel;
