// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice"; // ✅ default import

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
