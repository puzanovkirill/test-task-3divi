import { combineReducers, configureStore } from '@reduxjs/toolkit';
import devicesSlice from './devicesSlice';
import datesSlice from './datesSlice';

const rootReducer = combineReducers({
  devices: devicesSlice,
  dates: datesSlice,
});

export const store = configureStore({ reducer: rootReducer });
