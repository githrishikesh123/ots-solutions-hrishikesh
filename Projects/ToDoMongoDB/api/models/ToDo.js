import mongoose from "mongoose";

const ToDoSchema = new mongoose.Schema({
    description:{
        type : String,
        required : true,
    },
    completed:{
        type : Boolean,
        default : false,
    },
    createdAt:{
        type : Date,
        default: Date.now()
    },
})

export default mongoose.model("ToDo" , ToDoSchema )