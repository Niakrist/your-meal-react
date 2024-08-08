import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../constans";

export const cartFetch = createAsyncThunk(
  "cart/cartFetch",
  async (_, thunkAPI) => {
    const { orderProduct } = thunkAPI.getState().order;
    const newOrderProduct = [];

    for (const item of orderProduct) {
      const response = await fetch(API_URL + "api/product/" + item.id);
      const data = await response.json();
      newOrderProduct.push({ quantity: item.quantity, ...data });
    }
    return newOrderProduct;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productsInCart: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cartFetch.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(cartFetch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.productsInCart = action.payload;
      })
      .addCase(cartFetch.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
