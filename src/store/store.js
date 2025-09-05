import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '@/store/slices/productsSlice';
import cartReducer from '@/store/slices/cartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
