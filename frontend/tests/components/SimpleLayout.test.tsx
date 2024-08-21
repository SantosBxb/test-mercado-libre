import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SimpleLayout from '@/components/SimpleLayout';

describe('Component: SimpleLayout', () => {
  it('should render the main container correctly', () => {
    render(
      <SimpleLayout>
        <p>Hello World</p>
      </SimpleLayout>
    );
    const mainContainer = screen.getByRole('main');
    expect(mainContainer).toBeInTheDocument();
  });

  it('should render the childrens correctly', () => {
    render(
      <SimpleLayout>
        <p>Hello World 1</p>
        <p>Hello World 2</p>
        <p>Hello World 2</p>
      </SimpleLayout>
    );
    const titles = screen.getAllByRole('paragraph');
    expect(titles.length).toBe(3);
  });
});
