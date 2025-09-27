import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { confirmAndSaveOrder } from '@/services/order';

const initialState = {
  orders: JSON.parse(localStorage.getItem('orders')) || [],
  isLoading: false,
  error: null,
  lastOrder: null,
};

export const fetchAddNewOrder = createAsyncThunk(
  'orders/createOrder',
  async (orderData, { rejectWithValue }) => {
    try {
      const lastOrder = await confirmAndSaveOrder(orderData);
      return lastOrder;
    } catch (error) {
      return rejectWithValue(error?.message || 'errors.somethingWentWrong');
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
      state.error = null;
    });

    builder.addCase(fetchAddNewOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload) {
        state.orders.push(action.payload);
        state.lastOrder = action.payload;
      }
    });

    builder.addCase(fetchAddNewOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default ordersSlice.reducer;
