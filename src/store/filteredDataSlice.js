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
      state.filter((item) => item.n !== action.payload.n);
    },
  },
});

export default filteredDataSlice.reducer;

export const { setFilteredData, addFilteredItem, removeFilteredItem } =
  filteredDataSlice.actions;
