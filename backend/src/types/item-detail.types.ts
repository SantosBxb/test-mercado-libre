import { Item } from './item.types';

/** Represents detailed information about an item, extending the basic item interface. */
export interface ItemDetail extends Item {
  /** The quantity of the item that has been sold. */
  sold_quantity: number;
  /** The detailed description of the item. */
  description: string;
}
