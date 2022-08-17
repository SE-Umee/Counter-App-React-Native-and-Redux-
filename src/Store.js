import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./featuer/counter/counterSlice";

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default Store;
