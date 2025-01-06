// src/features/todayBookingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todayBookingSlice = createSlice({
  name: 'todayBooking',
  initialState: {
    count: 250,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { increment, decrement, setCount } = todayBookingSlice.actions;

export default todayBookingSlice.reducer;