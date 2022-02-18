import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getDataToDiagram,
  setDataToDiagram,
} from '../store/dataToDiagramSlice';

export const useDataToDiagram = (dates, type) => {
  const dataToDiagram = useSelector(getDataToDiagram);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dates) dispatch(setDataToDiagram({ dates, type }));
  }, [dates, type]);

  return dataToDiagram;
};
