import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SearchBar from '@/components/SearchBar';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    isFallback: false,
  }),
  useSearchParams: () => ({
    get: jest.fn(),
    isFallback: false,
  }),
}));

describe('Component: SearchBar', () => {
  it('should render the search form correctly', () => {
    render(<SearchBar />);
    const searchBarForm = screen.getByTestId('search-form');
    expect(searchBarForm).toBeInTheDocument();
  });

  it('should render the search input correctly', () => {
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText(/nunca dejes de buscar/i);
    expect(searchInput).toBeInTheDocument();
  });

  it('should render the search button correctly', () => {
    render(<SearchBar />);
    const searchButton = screen.getByTitle('Buscar');
    expect(searchButton).toBeInTheDocument();
  });
});
