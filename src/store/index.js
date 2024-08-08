import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import categoryReducer from "./category/categorySlice";
import formReducer from "./form/formSlice";
import modalReducer from "./modal/modalSlice";
import orderReducer, { localStorageMiddleware } from "./order/orderSlice";
import productReducer from "./product/productSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    order: orderReducer,
    cart: cartReducer,
    modal: modalReducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(localStorageMiddleware);
  },
});
