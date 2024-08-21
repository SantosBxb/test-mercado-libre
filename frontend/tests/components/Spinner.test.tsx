import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Spinner from '@/components/Spinner';

describe('Component: Spinner', () => {
  it('should render the spinner correctly', () => {
    render(<Spinner />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
});
