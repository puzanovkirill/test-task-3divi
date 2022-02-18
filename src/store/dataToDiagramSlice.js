import { createSlice } from '@reduxjs/toolkit';

const dataToDiagramSlice = createSlice({
  name: 'dataToDiagram',
  initialState: [
    {
      name: 'Mon',
      old: 0,
      kid: 0,
      undefined: 0,
      adult: 0,
      young: 0,
    },
    {
      name: 'Tue',
      old: 0,
      kid: 0,
      undefined: 0,
      adult: 0,
      young: 0,
    },
    {
      name: 'Wed',
      old: 0,
      kid: 0,
      undefined: 0,
      adult: 0,
      young: 0,
    },
    {
      name: 'Thu',
      old: 0,
      kid: 0,
      undefined: 0,
      adult: 0,
      young: 0,
    },
    {
      name: 'Fri',
      old: 0,
      kid: 0,
      undefined: 0,
      adult: 0,
      young: 0,
    },
    {
      name: 'Sat',
      old: 0,
      kid: 0,
      undefined: 0,
      adult: 0,
      young: 0,
    },
    {
      name: 'Sun',
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
          weekday: 'short',
        }).format(new Date(date.n));
        state.forEach((item) => {
          date.o.forEach((person) => {
            if (item.name === weekDay) item[person.n] += person.vd;
          });
        });
      });
    },
  },
});

export default dataToDiagramSlice.reducer;

export const { setDataToDiagram } = dataToDiagramSlice.actions;

export const getDataToDiagram = (state) => state.dataToDiagram;
