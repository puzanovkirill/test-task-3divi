import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainDataSlice from './mainDataSlice';

const rootReducer = combineReducers({ mainData: mainDataSlice });

export const store = configureStore({ reducer: rootReducer });
