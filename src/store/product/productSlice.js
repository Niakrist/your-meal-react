import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../constans";

export const productFetch = createAsyncThunk(
  "product/productFetch",
  async (data) => {
    try {
      const response = await fetch(`${API_URL}api/product?category=${data}`);
      if (!response.ok) throw new Error("Ошибка при получение продкутов");
      const products = await response.json();
      return products;
    } catch (error) {
      console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    product: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productFetch.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(productFetch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
        state.error = null;
      })
      .addCase(productFetch.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
