import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Item } from '@/types';
import ItemsList from '@/components/ItemsList';

const mockItems: Item[] = [
  {
    id: '1',
    free_shipping: true,
    picture: '/path/to/picture1.jpg',
    price: {
      amount: 1000,
      currency: 'ARS',
      decimals: 0,
    },
    title: 'Item 1',
    condition: 'new',
  },
  {
    id: '2',
    free_shipping: false,
    picture: '/path/to/picture2.jpg',
    price: {
      amount: 2000,
      currency: 'USD',
      decimals: 0,
    },
    title: 'Item 2',
    condition: 'used',
  },
];

describe('Component: ItemsList', () => {
  it('should render without crashing', () => {
    render(<ItemsList items={mockItems} />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });

  it('should render the correct number of ItemCards', () => {
    render(<ItemsList items={mockItems} />);
    const itemCards = screen.getAllByRole('article');
    expect(itemCards).toHaveLength(mockItems.length);
  });
});
