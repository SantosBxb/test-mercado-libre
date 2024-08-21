import { Author } from './author.types';
import { ItemDetail } from './item-detail.types';

/** Represents the response structure from the API for item details. */
export interface ItemDetailResponse {
  /** The author information of the response. */
  author: Author;
  /** The detailed information about the item. */
  item: ItemDetail;
  /** A list of categories associated with the items. */
  categories: string[];
}
