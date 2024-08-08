import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModal: false,
  },
  reducers: {
    toggleModal: (state, action) => {
      state.isModal = action.payload;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
