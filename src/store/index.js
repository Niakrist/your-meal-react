import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import categoryReducer from "./category/categorySlice";
import orderReducer, { localStorageMiddleware } from "./order/orderSlice";
import productReducer from "./product/productSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    order: orderReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(localStorageMiddleware);
  },
});
