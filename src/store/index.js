import { combineReducers, configureStore } from '@reduxjs/toolkit';
import devicesSlice from './devicesSlice';
import datesSlice from './datesSlice';
import dataToDiagramSlice from './dataToDiagramSlice';

const rootReducer = combineReducers({
  devices: devicesSlice,
  dates: datesSlice,
  dataToDiagram: dataToDiagramSlice,
});

export const store = configureStore({ reducer: rootReducer });
