import { Item, ItemDetail } from '@/types';
import { generateItemSchema } from '@/utils/schema.utils';

describe('Utils: generateItemSchema', () => {
  const sampleItem: Item = {
    id: '123',
    free_shipping: true,
    picture: 'http://example.com/image.jpg',
    price: {
      amount: 1000,
      currency: 'ARS',
      decimals: 0,
    },
    title: 'Sample Item Title',
    condition: 'new',
  };

  const itemDetail: ItemDetail = {
    ...sampleItem,
    description: 'This is a detailed description of the test item.',
    sold_quantity: 5,
  };

  it('should generate correct schema for basic Item', () => {
    const schema = generateItemSchema(sampleItem);
    expect(schema).toEqual({
      '@type': 'Product',
      '@context': 'https://schema.org/',
      name: 'Sample Item Title',
      image: ['http://example.com/image.jpg'],
      description: 'Sample Item Title - new',
      offers: {
        '@type': 'Offer',
        price: {
          '@type': 'MonetaryAmount',
          currency: 'ARS',
          value: '1000',
        },
      },
    });
  });

  it('should generate correct schema for ItemDetail with description', () => {
    const schema = generateItemSchema(itemDetail);
    expect(schema).toEqual({
      '@type': 'Product',
      '@context': 'https://schema.org/',
      name: 'Sample Item Title',
      image: ['http://example.com/image.jpg'],
      description: 'This is a detailed description of the test item.',
      offers: {
        '@type': 'Offer',
        price: {
          '@type': 'MonetaryAmount',
          currency: 'ARS',
          value: '1000',
        },
      },
    });
  });
});
