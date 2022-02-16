import { createSlice } from '@reduxjs/toolkit';

const devicesSlice = createSlice({
  name: 'devices',
  initialState: [],
  reducers: {
    setDevices(state, action) {
      Object.assign(state, action.payload);
    },
  },
});

export default devicesSlice.reducer;

export const { setDevices } = devicesSlice.actions;
