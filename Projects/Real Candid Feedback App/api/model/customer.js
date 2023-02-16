import mongoose from "mongoose";
const FeedbacksSchema = new mongoose.Schema(
    {
      rating: {
        type: Number,
        min: 0,
        max: 2,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
    {
      timestamps:{
        type: String,
        default : Date.now()
      }
    }
  );
//   --------------- 
const customerSchema = new mongoose.Schema({
    firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  feedbacksProvided: {
    type: [FeedbacksSchema],
  },
});



export default mongoose.model("customer", customerSchema);
