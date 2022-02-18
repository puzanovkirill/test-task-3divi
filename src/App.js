import useSWR from 'swr';
import './App.css';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { getDevices, setDevices } from './store/devicesSlice';
import Diagram from './components/Digram/Diagram';
import FilterItemsList from './components/FilterItemsList/FilterItemsList';
import { getDates, setDates } from './store/datesSlice';
import { useEffect } from 'react';
import { getDataToDiagram, setDataToDiagram } from './store/dataToDiagramSlice';
import { getFilteredData, setFilteredData } from './store/filteredDataSlice';

export const fetcher = (...args) => fetch(...args).then((data) => data.json());

function App() {
  const url =
    'https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/?key=d3aa35bde5ef46899b91aca9c66e174e' +
    '&b=2020/03/08%2012:00:00&e=2020/09/08%2012:00:00&tzo=0';
  const { data, error } = useSWR(url, fetcher);
  const dispatch = useDispatch();
  const devices = useSelector(getDevices);
  const dates = useSelector(getDates);
  const dataToDiagram = useSelector(getDataToDiagram);
  const filteredData = useSelector(getFilteredData);

  useEffect(() => {
    dispatch(setFilteredData(devices));
  }, [devices]);

  useEffect(() => {
    dispatch(setDates(filteredData));
  }, [filteredData]);

  useEffect(() => {
    dispatch(setDataToDiagram(dates));
  }, [dates]);

  useEffect(() => {
    if (data) dispatch(setDevices(data.data.o));
  }, [data]);

  if (error) {
    return <div>Error...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <FilterItemsList />
      <Diagram dataToDiagram={dataToDiagram} />
    </div>
  );
}

export default App;
