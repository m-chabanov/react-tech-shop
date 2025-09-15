import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { confirmAndSaveOrder } from '@/services/order';

const initialState = {
  orders: JSON.parse(localStorage.getItem('orders')) || [],
  isLoading: false,
};

export const fetchAddNewOrder = createAsyncThunk(
  'orders/createOrder',
  async (orderData) => {
    try {
      const lastOrder = await confirmAndSaveOrder(orderData);
      return lastOrder;
    } catch (error) {
      throw new Error(error);
    }
  }
);

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAddNewOrder.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchAddNewOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload) {
        state.orders.push(action.payload);
      }
    });

    builder.addCase(fetchAddNewOrder.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default ordersSlice.reducer;
