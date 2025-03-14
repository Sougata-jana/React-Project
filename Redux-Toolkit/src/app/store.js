import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/TodoSlice";              // Importing the reducer from the slice file
export const store = configureStore({
    reducer: todoReducer
    
})