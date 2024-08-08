import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toggleModal } from "../modal/modalSlice";
import { clearOrder } from "../order/orderSlice";

export const submitform = createAsyncThunk(
  "form/submitform",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        "https://cloudy-slash-rubidium.glitch.me/api/order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка при отправлении заказа " + response.statusText);
      }
      console.log("+++");
      dispatch(clearOrder());
      dispatch(toggleModal(false));

      return await response.json();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    phone: "",
    format: "delivery",
    address: "",
    floor: "",
    intercom: "",
  },
  reducers: {
    upDateFormValue: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submitform.pending, (state) => {
      state.status = "loading";
      state.error = null;
      state.response = null;
    });
    builder.addCase(submitform.fulfilled, (state, action) => {
      console.log("action.payload: ", action.payload);
      state.status = "success";
      state.response = action.payload;
    });
    builder.addCase(submitform.rejected, (state, action) => {
      state.status = "fail";
      state.error = action.payload;
      state.response = null;
    });
  },
});

export const { upDateFormValue } = formSlice.actions;
export default formSlice.reducer;
