import { combineReducers, configureStore } from '@reduxjs/toolkit';
import devicesSlice from './devicesSlice';
import datesSlice from './datesSlice';
import dataToDiagramSlice from './dataToDiagramSlice';
import filteredDataSlice from './filteredDataSlice';

const rootReducer = combineReducers({
  devices: devicesSlice,
  dates: datesSlice,
  dataToDiagram: dataToDiagramSlice,
  filteredData: filteredDataSlice,
});

export const store = configureStore({ reducer: rootReducer });
