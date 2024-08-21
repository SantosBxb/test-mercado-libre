import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ItemDetails from '@/components/ItemDetail';
import { ItemDetail } from '@/types';

describe('Component: ItemDetails', () => {
  const sampleItemDetail: ItemDetail = {
    id: '123',
    condition: 'new',
    sold_quantity: 5,
    title: 'sample Product Title',
    price: {
      amount: 1500,
      currency: 'ARS',
      decimals: 99,
    },
    description:
      'This is a sample product description.\nIt has multiple lines.',
    picture: '/path/to/sample/product.jpg',
    free_shipping: true,
  };

  beforeEach(() => {
    render(<ItemDetails itemDetails={sampleItemDetail} />);
  });

  it('should render correctly', () => {
    const headings = screen.getAllByRole('heading');
    const img = screen.getByRole('img');
    const finalArray = [...headings, img];
    expect(finalArray.length).toBe(3);
  });

  it('should display the product image', () => {
    const img = screen.getByAltText(sampleItemDetail.title, { exact: false });
    expect(img).toBeInTheDocument();
  });

  it('should show the product title', () => {
    const title = screen.getByText(sampleItemDetail.title, { exact: false });
    expect(title).toBeInTheDocument();
  });

  it('should display the formatted product price', () => {
    const price = screen.getByText('$ 1.500', { exact: false });
    expect(price).toBeInTheDocument();
  });

  it('should show the product condition', () => {
    const condition = screen.getByText(
      `Nuevo - ${sampleItemDetail.sold_quantity} vendido`,
      { exact: false }
    );
    expect(condition).toBeInTheDocument();
  });

  it('should show the quantity of sales the product had', () => {
    const sales = screen.getByText(
      `${sampleItemDetail.sold_quantity} vendido`,
      {
        exact: false,
      }
    );
    expect(sales).toBeInTheDocument();
  });

  it('should render the buy button', () => {
    const button = screen.getByRole('button', { name: 'Comprar' });
    expect(button).toBeInTheDocument();
  });

  it('should show the product description', () => {
    const descriptionParagraphs = screen.getAllByTestId(/test-/i);
    expect(descriptionParagraphs.length).toBeGreaterThan(1);
    descriptionParagraphs.forEach((paragraph, index) => {
      expect(paragraph).toBeInTheDocument();
      expect(paragraph).toHaveTextContent(
        sampleItemDetail.description.split('\n')[index]
      );
    });
  });
});
