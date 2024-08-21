import { Author } from './author.types';
import { Item } from './item.types';

/** Represents the response structure from the API for a list of items. */
export interface ItemsResponse {
  /** The author information of the response. */
  author: Author;
  /** A list of categories associated with the items. */
  categories: string[];
  /** A list of items returned in the response. */
  items: Item[];
}
