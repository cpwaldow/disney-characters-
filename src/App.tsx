import { useEffect, useState } from 'react';
import { fetchDisneyApi } from './services/fetchAPi';
import { FetchDisneyApiType } from './types';
import { storageSetData, storeGetData } from './services/storage';
import './App.css';

function App() {
  const [apiData, setApiData] = useState<FetchDisneyApiType>();

  useEffect(() => {
    const handleFetch = async () => {
      const data = await fetchDisneyApi();
      setApiData(data);
      storageSetData(data);
    };
    if (localStorage.storeDisneyData) {
      const storageApiData = storeGetData();
      setApiData(storageApiData);
    } else {
      handleFetch();
    }
  }, []);

  return (
    <>
      <h1>Bem-vindos ao maravilhoso mundo Disney</h1>
      <p>{apiData?.data.length} resultados exibidos</p>
    </>
  );
}

export default App;
