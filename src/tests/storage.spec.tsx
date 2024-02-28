import { storageSetData, storeGetData } from '../services/storage';
import { mockApiResponse } from './mocks/mockApi';

describe('Expect storage save and get correctly', () => {
  test('#storageSetData e #storeGetData', () => {
    storageSetData(mockApiResponse);
    expect(storeGetData()).toStrictEqual(mockApiResponse);
  });
});
