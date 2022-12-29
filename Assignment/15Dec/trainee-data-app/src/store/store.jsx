import { configureStore } from "@reduxjs/toolkit";
import traineeSlice from "./traineeReducer";

export const store = configureStore({
    reducer:{
        trainee:traineeSlice.reducer
    }
})