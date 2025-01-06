// src/features/availableSpacesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const availableSpacesSlice = createSlice({
  name: 'availableSpaces',
  initialState: {
    count: 300,
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

export const { increment, decrement, setCount } = availableSpacesSlice.actions;

export default availableSpacesSlice.reducer;