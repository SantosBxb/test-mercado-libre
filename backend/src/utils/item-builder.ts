import { ItemDetail } from '../types/item-detail.types';
import { Item } from '../types/item.types';
import {
  MeliItem,
  MeliDescription,
  MeliAvailableFilters,
} from '../types/meli.types';

/**
 * Transforms a Meli item into a standard Item format.
 * @param {MeliItem} item - The item data received from the Meli API.
 * @returns {Item} - The formatted item object.
 */
export const buildItem = (item: MeliItem): Item => ({
  id: item.id,
  title: item.title,
  price: {
    currency: item.currency_id,
    amount: item.price,
    decimals: +item.price.toString().split('.')[1] || 0,
  },
  picture: item.thumbnail,
  condition: item.condition,
  free_shipping: item.shipping.free_shipping,
});

/**
 * Transforms a Meli item and its description into a detailed Item format.
 * @param {MeliItem} item - The item data received from the Meli API.
 * @param {MeliDescription} description - The description data for the item received from the Meli API.
 * @returns {ItemDetail} - The formatted item detail object.
 */
export const buildItemDetail = (
  item: MeliItem,
  description: MeliDescription
): ItemDetail => ({
  ...buildItem(item),
  sold_quantity: item.sold_quantity,
  description: description.plain_text,
});

/**
 * Extracts the ID of the most relevant category from a list of filters.
 * @param {MeliAvailableFilters[]} filters - An array of filters, where each filter contains categories.
 * @returns {string|undefined} The ID of the most relevant category, or undefined if no category filter is found or if the categories cannot be sorted.
 */
export const getCategoryId = (filters: MeliAvailableFilters[]) => {
  const sortedCategories = filters
    .find((filter) => filter.id === 'category')
    ?.values.sort((a, b) => {
      return b.results - a.results;
    });
  return sortedCategories?.[0]?.id;
};
