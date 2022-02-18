import { createSlice } from '@reduxjs/toolkit';

const filteredDataSlice = createSlice({
  name: 'filteredData',
  initialState: [],
  reducers: {
    setFilteredData(state, action) {
      Object.assign(state, action.payload);
    },
    addFilteredItem(state, action) {
      state.push(action.payload);
    },
    removeFilteredItem(state, action) {
      state.splice(
        state.findIndex((item) => item.n === action.payload.n),
        1
      );
    },
  },
});

export default filteredDataSlice.reducer;

export const { setFilteredData, addFilteredItem, removeFilteredItem } =
  filteredDataSlice.actions;

export const getFilteredData = (state) => state.filteredData;
