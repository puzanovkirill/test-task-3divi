import useSWR from 'swr';
import './App.css';
import Diagram from './components/Digram/Diagram';
import FilterItemsList from './components/FilterItemsList/FilterItemsList';
import { useDevices } from './hooks/useDevices';
import { useDates } from './hooks/useDates';
import { useFilteredData } from './hooks/useFilteredData';
import { useDataToDiagram } from './hooks/useDataToDiagram';

export const fetcher = (...args) => fetch(...args).then((data) => data.json());

function App() {
  const url =
    'https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/?key=d3aa35bde5ef46899b91aca9c66e174e' +
    '&b=2020/03/08%2012:00:00&e=2020/09/08%2012:00:00&tzo=0';
  const { data, error } = useSWR(url, fetcher);
  const devices = useDevices(data);
  const filteredData = useFilteredData(devices);
  const dates = useDates(filteredData);
  const dataToDiagram = useDataToDiagram(dates);

  if (error) {
    return <div>Error...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <FilterItemsList devices={devices} />
      <Diagram dataToDiagram={dataToDiagram} />
    </div>
  );
}

export default App;
