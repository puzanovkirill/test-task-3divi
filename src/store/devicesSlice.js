import { createSlice } from '@reduxjs/toolkit';

const devicesSlice = createSlice({
  name: 'mainData',
  initialState: [],
  reducers: {
    setDevices(state, action) {
      state = [...action.payload];
      console.log(state);
    },
  },
});

export default devicesSlice.reducer;

export const { setDevices } = devicesSlice.actions;
