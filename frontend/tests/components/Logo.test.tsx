import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Logo from '@/components/Logo';

describe('Component: Logo', () => {
  it('should render the logo', () => {
    render(<Logo />);
    const logoImage = screen.getByRole('img');
    expect(logoImage).toBeInTheDocument();
  });

  it('should render a link to the homepage', () => {
    render(<Logo />);
    const link = screen.getByTitle('Ir a inicio');
    expect(link).toBeInTheDocument();
  });
});
