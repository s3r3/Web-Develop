// src/features/revenueDayRatioSlice.js
import { createSlice } from '@reduxjs/toolkit';

const revenueDayRatioSlice = createSlice({
  name: 'revenueDayRatio',
  initialState: {
    count: 350,
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

export const { increment, decrement, setCount } = revenueDayRatioSlice.actions;

export default revenueDayRatioSlice.reducer;