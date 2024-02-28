import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { mockApiResponse } from './mocks/mockApi';

describe('Expect App render correctly', () => {
  test('App component render h1 element', () => {
    render(<App />);
    const h1Element = screen.getByRole('heading', {
      name: /bem-vindos ao maravilhoso mundo disney/i,
    });
    expect(h1Element).toBeInTheDocument();
  });
  test('App componente render quantity results', async () => {
    const MOCK_RESPONSE = {
      json: async () => mockApiResponse,
    } as Response;

    const mockFetch = vi
      .spyOn(global, 'fetch')
      .mockResolvedValueOnce(MOCK_RESPONSE);

    render(<App />);

    const resultTextElement = await screen.findByText(
      /50 resultados exibidos/i,
    );
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(resultTextElement).toBeInTheDocument();
  });
  test('Render App and set api data to storage', () => {
    render(<App />);
    expect(localStorage).toHaveProperty('storeDisneyData');
    expect(JSON.parse(localStorage.storeDisneyData)).toStrictEqual(
      mockApiResponse,
    );
  });
});
