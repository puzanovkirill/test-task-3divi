import { useDispatch, useSelector } from 'react-redux';
import { getDates, setDates } from '../store/datesSlice';
import { useEffect } from 'react';

export const useDates = (filteredData) => {
  const dates = useSelector(getDates);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDates(filteredData));
  }, [filteredData]);

  return dates;
};
