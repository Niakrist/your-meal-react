import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../data/initialState";

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    getProducts: (state) => {
      return state.category;
    },
  },
});
