import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Breadcrumbs from '@/components/Breadcrumbs'; // Asegúrate de ajustar la ruta de importación según sea necesario

describe('Component: Breadcrumbs', () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  it('should render breadcrumbs list', () => {
    render(<Breadcrumbs items={items} />);
    const breadCrumbList = screen.getByRole('list');
    expect(breadCrumbList).toBeInTheDocument();
  });

  it('should render all items passed through props', () => {
    render(<Breadcrumbs items={items} />);
    const listOfItems = screen.getAllByRole('listitem');
    expect(listOfItems.length).toBe(3);
  });

  it('should display text correctly', () => {
    render(<Breadcrumbs items={items} />);
    const link = screen.getByText('Item 2');
    expect(link).toBeInTheDocument();
  });
});
