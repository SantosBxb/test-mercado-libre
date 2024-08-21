import { ItemDetail } from '@/types';
import Button from './Button';
import styles from '@styles/item-detail.module.scss';
import { formatDecimals, formatPrice } from '@/utils/price.utils';
import { presentation } from '@/utils/constants';
import Image from 'next/image';

/**
 * Renders detailed information about a specific item, including its image, condition, price, and description.
 *
 * @component
 * @param {ItemDetail} props.itemDetails - The detailed information about the item.
 *
 * @example
 * <ItemDetails
 *   itemDetails={{
 *     condition: 'new',
 *     sold_quantity: 15,
 *     title: 'Sample Item',
 *     price: { amount: 150, currency: 'USD', decimals: 99 },
 *     description: 'This is a detailed description of the item.',
 *     picture: '/path/to/image.jpg'
 *   }}
 * />
 */
export default function ItemDetails({
  itemDetails: {
    condition: rawCondition,
    sold_quantity,
    title,
    price,
    description: rawDescription,
    picture,
  },
}: {
  itemDetails: ItemDetail;
}) {
  const condition = presentation[rawCondition];
  const textSold = sold_quantity === 1 ? presentation.sold : presentation.nSold;
  const productCondition = `${condition} - ${sold_quantity || 0} ${textSold}`;
  const description = rawDescription || title;

  return (
    <main className={styles.itemContainer}>
      <div className={styles.flexContainer}>
        <div className={styles.item__image}>
          <Image
            src={picture}
            alt={title}
            title={title}
            width={700}
            height={500}
          />
        </div>
        <div className={styles.item__info}>
          <p className={styles.item__condition}>{productCondition}</p>
          <h1 className={styles.item__title}>{title}</h1>
          <p className={styles.item__price}>
            {formatPrice(price.amount, price.currency)}
            <span>{formatDecimals(price.decimals)}</span>
          </p>
          <Button text="Comprar" />
        </div>
      </div>

      <div className={styles.item__description}>
        <h2>Descripción del producto</h2>
        {description.split('\n').map((el, i) => (
          <p key={i} className={styles.paragraph} data-testid={`test-${i}`}>
            {el}
          </p>
        ))}
      </div>
    </main>
  );
}
