import { combineReducers, configureStore } from '@reduxjs/toolkit';
import devicesSlice from './devicesSlice';
import datesSlice from './datesSlice';
import dataToDiagramSlice from './dataToDiagramSlice';
import filteredDataSlice from './filteredDataSlice';
import typeSlice from './typeSlice';

const rootReducer = combineReducers({
  devices: devicesSlice,
  dates: datesSlice,
  dataToDiagram: dataToDiagramSlice,
  filteredData: filteredDataSlice,
  type: typeSlice,
});

export const store = configureStore({ reducer: rootReducer });
