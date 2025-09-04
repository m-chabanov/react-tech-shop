import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProductsDelayed } from '@/services/products';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      let products = await getAllProductsDelayed();
      return products;
    } catch (error) {
      throw new Error(error);
    }
  }
);

const initialState = {
  products: [],
  isLoading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.length) {
        state.products = action.payload;
      }
    });

    builder.addCase(fetchProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default productsSlice.reducer;
