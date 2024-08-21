import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '@/components/Navbar';

jest.mock('./../../src/components/SearchBar', () => {
  return {
    __esModule: true,
    default: () => {
      return <p>SearchBar Component</p>;
    },
  };
});

describe('Component: Navbar', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the navbar inside a Container', () => {
    render(<Navbar />);
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();
  });

  it('should render the navbar with SearchBar', () => {
    render(<Navbar />);
    const searchbar = screen.getByText(/SearchBar Component/i);
    expect(searchbar).toBeInTheDocument();
  });

  it('should render the navbar with Logo', () => {
    render(<Navbar />);
    const logo = screen.getByAltText('Logo Mercado Libre');
    expect(logo).toBeInTheDocument();
  });
});
