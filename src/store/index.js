import { combineReducers, configureStore } from '@reduxjs/toolkit';
import devicesSlice from './devicesSlice';

const rootReducer = combineReducers({
  devices: devicesSlice,
});

export const store = configureStore({ reducer: rootReducer });
