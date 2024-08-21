import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Item } from '@/types';
import ItemCard from '@/components/ItemCard';

describe('Component: ItemCard', () => {
  const sampleItem: Item = {
    id: '123',
    free_shipping: true,
    picture: '/path/to/picture.jpg',
    price: {
      amount: 1000,
      currency: 'ARS',
      decimals: 0,
    },
    title: 'Sample Item Title',
    condition: 'new',
  };

  it('should render item card with item details', () => {
    render(<ItemCard item={sampleItem} />);
    const image = screen.getByAltText(sampleItem.title);
    expect(image).toBeInTheDocument();

    const titleLink = screen.getByText(sampleItem.title);
    expect(titleLink).toBeInTheDocument();
    expect(titleLink.closest('a')).toHaveAttribute(
      'href',
      `/items/${sampleItem.id}`
    );
  });

  it('should show shipping icon if free_shipping is true', () => {
    render(<ItemCard item={sampleItem} />);
    const shippingIcon = screen.getByAltText('Envío gratis');
    expect(shippingIcon).toBeInTheDocument();
  });

  it('should do not show shipping icon if free_shipping is false', () => {
    const modifiedItem: Item = {
      ...sampleItem,
      free_shipping: false,
    };
    render(<ItemCard item={modifiedItem} />);
    const shippingIcon = screen.queryByText('Envío gratis');
    expect(shippingIcon).not.toBeInTheDocument();
  });

  it('should display the formatted product price', () => {
    render(<ItemCard item={sampleItem} />);
    const price = screen.getByText('$ 1.000', { exact: false });
    expect(price).toBeInTheDocument();
  });
});
