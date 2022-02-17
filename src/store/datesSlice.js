import { createSlice } from '@reduxjs/toolkit';

const datesSlice = createSlice({
  name: 'dates',
  initialState: [],
  reducers: {
    setDates(state, action) {
      state.length = 0;
      action.payload.map((item) => {
        item.o.forEach((date) => state.push(date));
      });
    },
  },
});

export default datesSlice.reducer;
export const { setDates } = datesSlice.actions;
