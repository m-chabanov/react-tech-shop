import { createSlice } from '@reduxjs/toolkit';
import { filterBy } from '@/utils/array';

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    setQuantity: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);

      if (index !== -1) {
        state[index].quantity = action.payload.newQuantity;
      }
    },
    toggleSelected: (state, action) => {
      state.forEach((item) => {
        if (item.id === action.payload) {
          item.isSelected = !item.isSelected;
        }
      });
    },
    selectAll: (state) => {
      if (state.every((item) => item.isSelected)) {
        return state.map((item) => {
          return { ...item, isSelected: false };
        });
      }
      return state.map((item) => {
        return { ...item, isSelected: true };
      });
    },
    removeSelected: (state) => {
      return filterBy(state, 'isSelected', false);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clearCart: () => {
      return [];
    },
  },
});

export const {
  addToCart,
  setQuantity,
  toggleSelected,
  selectAll,
  removeSelected,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
