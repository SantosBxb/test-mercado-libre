/** Represents the author of the API response. */
export interface Author {
  /** The first name of the author. */
  name: string;
  /** The last name of the author. */
  lastname: string;
}

/** Represents the price details of an item. */
export interface Price {
  /** The currency of the price (e.g., USD, EUR). */
  currency: string;
  /** The amount of money. */
  amount: number;
  /** The decimal precision of the amount. */
  decimals: number;
}

/** Represents a basic item with price and shipping details. */
export interface Item {
  /** The unique identifier of the item. */
  id: string;
  /** The title or name of the item. */
  title: string;
  /** The price details of the item. */
  price: Price;
  /** The URL of the item's picture or thumbnail. */
  picture: string;
  /** The condition of the item (e.g., new, used). */
  condition: 'new' | 'used';
  /** Indicates if the item has free shipping. */
  free_shipping: boolean;
}

/** Represents detailed information about an item, extending the basic item interface. */
export interface ItemDetail extends Item {
  /** The quantity of the item that has been sold. */
  sold_quantity: number;
  /** The detailed description of the item. */
  description: string;
}

/** Represents the response structure from the API for a list of items. */
export interface ItemsResponse {
  /** The author information of the response. */
  author: Author;
  /** A list of categories associated with the items. */
  categories: string[];
  /** A list of items returned in the response. */
  items: Item[];
}

/** Represents the response structure from the API for item details. */
export interface ItemDetailResponse {
  /** The author information of the response. */
  author: Author;
  /** The detailed information about the item. */
  item: ItemDetail;
  /** A list of categories associated with the items. */
  categories: string[];
}
