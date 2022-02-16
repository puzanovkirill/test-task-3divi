import { createSlice } from '@reduxjs/toolkit';

const mainDataSlice = createSlice({
  name: 'mainData',
  initialState: {},
  reducers: {
    setMainData(state, action) {
      console.log(state, action);
      Object.assign(state, action.payload);
    },
  },
});

export default mainDataSlice.reducer;

export const { setMainData } = mainDataSlice.actions;
