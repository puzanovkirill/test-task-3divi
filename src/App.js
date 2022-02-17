import useSWR from 'swr';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setDevices } from './store/devicesSlice';
import Diagram from './components/Digram/Diagram';
import FilterItemsList from './components/FilterItemsList/FilterItemsList';
import { setDates } from './store/datesSlice';
import { useEffect } from 'react';
import { setDataToDiagram } from './store/dataToDiagramSlice';
import { setFilteredData } from './store/filteredDataSlice';

export const fetcher = (...args) => fetch(...args).then((data) => data.json());

function App() {
  const url =
    'https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/?key=d3aa35bde5ef46899b91aca9c66e174e' +
    '&b=2020/03/08%2012:00:00&e=2020/09/08%2012:00:00&tzo=0';
  const { data, error } = useSWR(url, fetcher);
  const dispatch = useDispatch();
  const devices = useSelector((state) => state.devices);
  const dates = useSelector((state) => state.dates);
  const dataToDiagram = useSelector((state) => state.dataToDiagram);
  const filteredData = useSelector((state) => state.filteredData);

  useEffect(() => {
    dispatch(setFilteredData(devices));
  }, [devices]);

  useEffect(() => {
    dispatch(setDates(filteredData));
  }, [filteredData]);

  useEffect(() => {
    dispatch(setDataToDiagram(dates));
  }, [dates]);

  if (error) {
    return <div>Error...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  dispatch(setDevices(data.data.o));

  return (
    <div className="App">
      <FilterItemsList />
      <Diagram dataToDiagram={dataToDiagram} />
    </div>
  );
}

export default App;
