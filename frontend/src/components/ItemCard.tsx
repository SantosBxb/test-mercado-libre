import { Item } from '@/types';
import { formatPrice } from '@/utils/price.utils';
import styles from '@styles/item-card.module.scss';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Renders a card component that displays information about an item.
 *
 * @component
 * @param {Item} props.item - The item object containing details to display.
 *
 * @example
 * <ItemCard
 *   item={{
 *     id: '123',
 *     free_shipping: true,
 *     picture: '/path/to/image.jpg',
 *     price: { amount: 100, currency: 'USD' },
 *     title: 'Sample Item'
 *   }}
 * />
 */
export default function ItemCard({
  item: { id, free_shipping, picture, price, title },
}: {
  item: Item;
}) {
  return (
    <article className={styles.itemCard}>
      <div className={styles.imgContainer}>
        <Image
          src={picture || '/default.png'}
          alt={title}
          title={title}
          width={180}
          height={180}
        />
      </div>

      <div className={styles.itemInfo__container}>
        <div className={styles.itemInfo}>
          <p className={styles.item__price}>
            {formatPrice(price.amount, price.currency)}
          </p>
          {free_shipping && (
            <span className={styles.item__shipping}>
              <Image
                src={'/shipping.png'}
                alt="Envío gratis"
                title="Envío gratis"
                width={18}
                height={18}
              />
            </span>
          )}
          <h2 className={styles.item__title}>
            <Link href={`/items/${id}`} title={`Ver ${title}`}>
              <span aria-hidden="true"></span>
              {title}
            </Link>
          </h2>
        </div>
      </div>
    </article>
  );
}
