import useSWR, { SWRConfig } from 'swr';
import './App.css';

const fetcher = (...args) => fetch(...args).then((data) => data.json());

function App() {
  const url =
    'https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/?key=d3aa35bde5ef46899b91aca9c66e174e&b=2020/03/08%2012:00:00&e=2020/09/08%2012:00:00&tzo=0';
  const { data, error, isValidating } = useSWR(url, fetcher);
  console.log(data, error);

  if (error) {
    return <div>Error...</div>;
  }
  if (isValidating) {
    return <div>Loading...</div>;
  }

  return <pre className="App">{JSON.stringify(data, null, 2)}</pre>;
}

export default App;
