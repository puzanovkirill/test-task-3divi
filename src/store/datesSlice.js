import { createSlice } from '@reduxjs/toolkit';

const datesSlice = createSlice({
  name: 'dates',
  initialState: [],
  reducers: {
    setDates(state, action) {
      const tmp = [];
      action.payload.map((item) => {
        item.o.forEach((date) => tmp.push(date));
      });
      Object.assign(state, tmp);
    },
  },
});

export default datesSlice.reducer;
export const { setDates } = datesSlice.actions;
