import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFilteredData, setFilteredData } from '../store/filteredDataSlice';

export const useFilteredData = (devices) => {
  const filteredData = useSelector(getFilteredData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilteredData(devices));
  }, [devices]);

  return filteredData;
};
