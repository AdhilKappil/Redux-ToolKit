import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import TodoSlice from "../features/to-do-list/TodoSlice";

export const store = configureStore({
    reducer:{
        counter: counterSlice,
        toDo : TodoSlice
    }
})