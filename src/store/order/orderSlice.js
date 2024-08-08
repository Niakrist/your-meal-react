import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../constans";
import { calcTotal } from "../../utils/calcTotal";

export const localStorageMiddleware = (store) => (next) => (action) => {
  const nextAction = next(action);

  if (nextAction.type.startsWith("order/")) {
    const orderProduct = store.getState().order.orderProduct;
    localStorage.setItem("order", JSON.stringify(orderProduct));
  }

  return nextAction;
};

export const orderRequestAsync = createAsyncThunk(
  "order/orderRequestAsync",
  async (_, { getState }) => {
    const listId = getState().order.orderProduct.map((item) => item.id);
    const response = await fetch(`${API_URL}api/product?list=${listId}`);
    return await response.json();
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderProduct: JSON.parse(localStorage.getItem("order") || "[]"),
    orderGoods: [],
    totalPrice: 0,
    totalCount: 0,
    isLoader: false,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const productOrderList = state.orderProduct.find((item) => {
        return item.id === action.payload.id;
      });

      if (productOrderList) {
        productOrderList.quantity += 1;

        const productOrderGoods = state.orderGoods.find((item) => {
          return item.id === action.payload.id;
        });
        productOrderGoods.quantity = productOrderList.quantity;
        [state.totalCount, state.totalPrice] = calcTotal(state.orderGoods);
      } else {
        state.orderProduct.push(action.payload);
      }

      // const isToCart = state.orderProduct.find((elem) => {
      //   return elem.id === action.payload.id;
      // });

      // if (!isToCart) {
      //   state.orderProduct.push(action.payload);
      // } else {
      //   state.orderProduct = state.orderProduct.map((elem) => {
      //     return elem.id === action.payload.id
      //       ? { ...elem, quantity: elem.quantity + 1 }
      //       : elem;
      //   });
      // }
    },
    removeFromCart: (state, action) => {
      const productOrderList = state.orderProduct.find(
        (item) => item.id === action.payload.id
      );
      if (productOrderList.quantity > 1) {
        productOrderList.quantity -= 1;

        const productOrderGoods = state.orderGoods.find(
          (item) => item.id === action.payload.id
        );
        productOrderGoods.quantity = productOrderList.quantity;
        [state.totalCount, state.totalPrice] = calcTotal(state.orderGoods);
      } else {
        state.orderProduct = state.orderProduct.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    clearOrder: (state) => {
      state.orderProduct = [];
      state.orderGoods = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(orderRequestAsync.pending, (state) => {
        state.isLoader = true;
        state.error = null;
      })
      .addCase(orderRequestAsync.fulfilled, (state, action) => {
        const orderGoods = state.orderProduct.map((item) => {
          const product = action.payload.find(
            (product) => product.id === item.id
          );
          product.quantity = item.quantity;
          return product;
        });
        state.isLoader = false;
        state.error = null;
        state.orderGoods = orderGoods;
        [state.totalCount, state.totalPrice] = calcTotal(orderGoods);
      })
      .addCase(orderRequestAsync.rejected, (state, action) => {
        state.isLoader = false;
        state.error = action.payload;
      });
  },
});

export const { addToCart, removeFromCart, clearOrder } = orderSlice.actions;

export default orderSlice.reducer;
