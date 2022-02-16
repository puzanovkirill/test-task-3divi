import useSWR from 'swr';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setMainData } from './store/mainDataSlice';

export const fetcher = (...args) => fetch(...args).then((data) => data.json());

function App() {
  const url =
    'https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/?key=d3aa35bde5ef46899b91aca9c66e174e' +
    '&b=2020/03/08%2012:00:00&e=2020/09/08%2012:00:00&tzo=0';
  const { data, error } = useSWR(url, fetcher);
  const dispatch = useDispatch();
  const mainData = useSelector((state) => state.mainData);

  if (error) {
    return <div>Error...</div>;
  }

  if (!mainData) {
    return <div>Loading...</div>;
  }
  dispatch(setMainData(data));

  return <div className="App">{JSON.stringify(mainData)}</div>;
}

export default App;
