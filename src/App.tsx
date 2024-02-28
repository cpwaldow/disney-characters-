import { useEffect, useState } from 'react';
import { fetchDisneyApi } from './services/fetchAPi';
import { FetchDisneyApiType } from './types';
import './App.css';

function App() {
  const [apiData, setApiData] = useState<FetchDisneyApiType | undefined>();
  useEffect(() => {
    (async () => setApiData(await fetchDisneyApi()))();
  }, []);
  console.log(apiData);

  return (
    <>
      <h1>Bem-vindos ao maravilhoso mundo Disney</h1>
    </>
  );
}

export default App;
