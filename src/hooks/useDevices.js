import { useDispatch, useSelector } from 'react-redux';
import { getDevices, setDevices } from '../store/devicesSlice';
import { useEffect } from 'react';

export const useDevices = (data) => {
  const devices = useSelector(getDevices);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) dispatch(setDevices(data.data.o));
  }, [data]);

  return devices;
};
