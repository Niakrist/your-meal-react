import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../constans";

export const categoryFetch = createAsyncThunk(
  "category/categoryFetch",
  async () => {
    try {
      const response = await fetch(API_URL + "api/product/category");

      if (!response.ok) throw new Error(`Возникла ошибка при получении данных`);

      const data = await response.json();
      return data;
    } catch (error) {
      return { error };
    }
  }
);

const initialState = {
  category: [],
  error: "",
  activeCategory: 0,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    changeActiveCategory: (state, action) => {
      state.activeCategory = action.payload.indexCategory;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(categoryFetch.pending, (state) => {
        state.error = null;
      })
      .addCase(categoryFetch.fulfilled, (state, action) => {
        state.category = action.payload;
        state.error = null;
      })
      .addCase(categoryFetch.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { changeActiveCategory } = categorySlice.actions;

export default categorySlice.reducer;
