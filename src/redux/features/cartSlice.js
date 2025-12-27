import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage
const cartFromStorage = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: cartFromStorage,
  },
  reducers: {
    // ➕ ADD ITEM / INCREASE QTY
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.qty += 1; // increase by 1
      } else {
        state.cart.push({ ...item, qty: 1 }); // start qty at 1
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    // ➖ DECREASE QTY
    decreaseQty: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload.id);

      if (item) {
        if (item.qty > 1) {
          item.qty -= 1;
        } else {
          state.cart = state.cart.filter((i) => i.id !== item.id);
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    // ❌ REMOVE ITEM
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    // 🧹 CLEAR CART
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  decreaseQty,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
