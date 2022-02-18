import { useSelector } from 'react-redux';
import { getType } from '../store/typeSlice';

export const useType = () => {
  return useSelector(getType);
};
