import { vi } from 'vitest'; // mocks
import { render, screen } from '@testing-library/react'; // padrão de teste de componente
import App from '../App'; // componente
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
});
