import { vi } from 'vitest';
import { render } from '@testing-library/react';
import { mockApiResponse } from './mocks/mockApi';
import App from '../App';

describe('Expect fetch api return correctly', () => {
  test('mock api response', () => {
    const MOCK_RESPONSE = {
      json: async () => mockApiResponse,
    } as Response;

    const mockFetch = vi
      .spyOn(global, 'fetch')
      .mockResolvedValue(MOCK_RESPONSE);

    render(<App />);

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.disneyapi.dev/character',
    );
  });
});
