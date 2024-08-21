import { Item, ItemDetail } from '@/types';

/**
 * Generates a schema object for an item, suitable for SEO purposes using Schema.org vocabulary.
 * @param {(Item | ItemDetail)} item - The item to generate the schema for.
 * @returns {object} An object representing the item's schema, including basic information about the product and pricing details.
 */
export const generateItemSchema = (item: Item | ItemDetail): object => ({
  '@type': 'Product',
  '@context': 'https://schema.org/',
  name: item.title,
  image: [item.picture],
  description:
    (item as ItemDetail).description || `${item.title} - ${item.condition}`,
  offers: {
    '@type': 'Offer',
    price: {
      '@type': 'MonetaryAmount',
      currency: item.price.currency,
      value: item.price.amount.toString(),
    },
  },
});

/**
 * Represents the base schema for a website, including essential metadata.
 */
export const baseSchema = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  url: 'https://www.mercadolibre.cl.',
  name: 'Mercado Libre',
};
