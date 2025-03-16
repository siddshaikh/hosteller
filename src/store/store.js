import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import calenderReducer from "./features/calender/calenderSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    dates: calenderReducer,
  },
});

export default store;
