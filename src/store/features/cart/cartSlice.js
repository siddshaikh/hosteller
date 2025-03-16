import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [],
//   totalQuantity: 0,
//   totalPrice: 0,
// };

const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    if (serializedCart === null) {
      return { items: [], totalQuantity: 0, totalPrice: 0 };
    }
    return JSON.parse(serializedCart);
  } catch (error) {
    console.error("Error loading cart from localStorage", error);
    return { items: [], totalQuantity: 0, totalPrice: 0 };
  }
};

const saveCartToLocalStorage = (state) => {
  try {
    const serializedCart = JSON.stringify(state);
    localStorage.setItem("cart", serializedCart);
  } catch (error) {
    console.error("Error saving cart to localStorage", error);
  }
};

const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      const discountedPrice = Math.round(
        action.payload.price - (action.payload.price * 30) / 100
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * discountedPrice;
      } else {
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          price: discountedPrice,
          quantity: 1,
          totalPrice: discountedPrice,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += discountedPrice;

      saveCartToLocalStorage(state);
    },
    removeFromCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;

        if (existingItem.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          existingItem.quantity -= 1;
          existingItem.totalPrice = existingItem.quantity * existingItem.price;
        }
      }
      saveCartToLocalStorage(state);
    },
    removeSingleItemFromCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;

        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
      saveCartToLocalStorage(state);
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  removeSingleItemFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
