import { Item } from '@/types';
import ItemCard from './ItemCard';

/**
 * Renders a list of items using the ItemCard component.
 *
 * @component
 * @param {Item[]} props.items - Array of item objects to be displayed.
 *
 * @example
 * <ItemsList
 *   items={[
 *     { id: '1', title: 'Item 1', price: { amount: 100, currency: 'USD', decimals: 2 }, picture: '/path/to/image.jpg', condition: 'new', free_shipping: true },
 *     { id: '2', title: 'Item 2', price: { amount: 200, currency: 'USD', decimals: 2 }, picture: '/path/to/image.jpg', condition: 'used', free_shipping: false }
 *   ]}
 * />
 */
export default function ItemsList({ items }: { items: Item[] }) {
  return (
    <main>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </main>
  );
}
