import { createSlice } from '@reduxjs/toolkit';

const typeSlice = createSlice({
  name: 'type',
  initialState: '',
  reducers: {
    setType(state, action) {
      state = action.payload;
    },
  },
});

export default typeSlice.reducer;
export const { setDates } = typeSlice.actions;

export const getType = (state) => state.type;
