import styles from '@styles/breadcrumbs.module.scss';

/**
 * Renders a list of navigation elements (breadcrumbs).
 *
 * @component
 * @param {{ items: string[] }} props - Props for the Breadcrumbs component.
 * @param {string[]} props.items - An array of strings representing the navigation route elements.
 *
 * @example
 * <Breadcrumbs items={['Home', 'Category', 'Product']} />
 */
export default function Breadcrumbs({ items }: { items: string[] }) {
  return (
    <ul className={styles.listBreadcrumbs}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
