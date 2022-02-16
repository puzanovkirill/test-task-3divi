import { createSlice } from '@reduxjs/toolkit';

const dataToDiagramSlice = createSlice({
  name: 'dataToDiagram',
  initialState: [
    {
      name: 'Monday',
      old: 0,
      kid: 0,
      undefined: 0,
      adult: 0,
      young: 0,
    },
    {
      name: 'Tuesday',
      old: 0,
      kid: 0,
      undefined: 0,
      adult: 0,
      young: 0,
    },
    {
      name: 'Wednesday',
      old: 0,
      kid: 0,
      undefined: 0,
      adult: 0,
      young: 0,
    },
    {
      name: 'Thursday',
      old: 0,
      kid: 0,
      undefined: 0,
      adult: 0,
      young: 0,
    },
    {
      name: 'Friday',
      old: 0,
      kid: 0,
      undefined: 0,
      adult: 0,
      young: 0,
    },
    {
      name: 'Saturday',
      old: 0,
      kid: 0,
      undefined: 0,
      adult: 0,
      young: 0,
    },
    {
      name: 'Sunday',
      old: 0,
      kid: 0,
      undefined: 0,
      adult: 0,
      young: 0,
    },
  ],
  reducers: {
    setDataToDiagram(state, action) {
      state.forEach((item) => {
        item.kid = 0;
        item.adult = 0;
        item.old = 0;
        item.young = 0;
        item.undefined = 0;
      });
      action.payload.forEach((date) => {
        const weekDay = Intl.DateTimeFormat('en-US', {
          weekday: 'long',
        }).format(new Date(date.n));
        state.forEach((item) => {
          date.o.forEach((person) => {
            if (item.name === weekDay) item[person.n] += person.vd;
          });
        });
      });
      console.log(state);
    },
  },
});

export default dataToDiagramSlice.reducer;

export const { setDataToDiagram } = dataToDiagramSlice.actions;
