import { configureStore } from '@reduxjs/toolkit';
import availableSpacesReducer from './features/availableSpacesSlice'
import revenueDayRatioReducer from './features/revenueDayRatioSlice'
import todayBookingReducer from './features/todayBookingSlice'
export const store = configureStore({
  reducer: {
    availableSpaces: availableSpacesReducer,
    revenueDayRatio: revenueDayRatioReducer,
    todayBooking: todayBookingReducer,
  },
});
