import { useEffect, useState } from 'react';
import { fetchDisneyApi } from './services/fetchAPi';
import { FetchDisneyApiType } from './types';
import './App.css';

function App() {
  const [apiData, setApiData] = useState<FetchDisneyApiType>();
  useEffect(() => {
    (async () => setApiData(await fetchDisneyApi()))();
  }, []);

  return (
    <>
      <h1>Bem-vindos ao maravilhoso mundo Disney</h1>
      <p>{apiData?.data.length} resultados exibidos</p>
    </>
  );
}

export default App;
