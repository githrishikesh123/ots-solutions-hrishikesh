import { createSlice } from "@reduxjs/toolkit";
import mockTraineesData from "../MockTraineeData";

const initialState = { data:{} };


const traineeSlice = createSlice({
  name: "trainee",
  initialState,
  reducers: {
    showTrainee: (state, action) => {
        state.data=action.payload;
    },



  },
});

export const { showTrainee } = traineeSlice.actions;

export default traineeSlice;
