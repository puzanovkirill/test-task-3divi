import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getDataToDiagram,
  setDataToDiagram,
} from '../store/dataToDiagramSlice';

export const useDataToDiagram = (dates) => {
  const dataToDiagram = useSelector(getDataToDiagram);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dates) dispatch(setDataToDiagram(dates));
  }, [dates]);

  return dataToDiagram;
};
