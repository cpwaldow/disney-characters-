import { FetchDisneyApiType } from '../types';

export const storageSetData = (data: FetchDisneyApiType) => {
  localStorage.setItem('storeDisneyData', JSON.stringify(data));
};

export const storeGetData = () =>
  JSON.parse(localStorage.getItem('storeDisneyData') as string);
