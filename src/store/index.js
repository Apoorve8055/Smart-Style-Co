import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: productReducer,
});

export default store;
