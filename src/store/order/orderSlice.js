import { createSlice } from "@reduxjs/toolkit";

export const localStorageMiddleware = (store) => (next) => (action) => {
  const nextAction = next(action);

  if (nextAction.type.startsWith("order/")) {
    const orderProduct = store.getState().order.orderProduct;
    localStorage.setItem("order", JSON.stringify(orderProduct));
  }

  return nextAction;
};

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderProduct: JSON.parse(localStorage.getItem("order") || "[]"),
    isLoader: false,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const isToCart = state.orderProduct.find((elem) => {
        return elem.id === action.payload.id;
      });

      if (!isToCart) {
        state.orderProduct.push(action.payload);
      } else {
        state.orderProduct = state.orderProduct.map((elem) => {
          return elem.id === action.payload.id
            ? { ...elem, quantity: elem.quantity + 1 }
            : elem;
        });
      }
    },
  },
});

export const { addToCart } = orderSlice.actions;

export default orderSlice.reducer;
