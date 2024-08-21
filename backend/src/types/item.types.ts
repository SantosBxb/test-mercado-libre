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
  condition: string;
  /** Indicates if the item has free shipping. */
  free_shipping: boolean;
}
