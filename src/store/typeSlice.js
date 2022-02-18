import { createSlice } from '@reduxjs/toolkit';

const typeSlice = createSlice({
  name: 'type',
  initialState: 'v*vd',
  reducers: {
    setType(state, action) {
      state = action.payload;
    },
  },
});

export default typeSlice.reducer;
export const { setType } = typeSlice.actions;

export const getType = (state) => state.type;
