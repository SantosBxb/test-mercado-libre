import { ReactNode } from 'react';
import styles from '@styles/simple-layout.module.scss';

/**
 * Renders a simple layout wrapper that centers and arranges its children elements.
 *
 * @component
 * @param {ReactNode} children - The child elements to be rendered inside the layout.
 *
 * @example
 * <SimpleLayout>
 *   <p>Content goes here</p>
 * </SimpleLayout>
 */
export default function SimpleLayout({ children }: { children: ReactNode }) {
  return (
    <main className={styles.flex}>
      <div className={styles.flexContainer}>{children}</div>
    </main>
  );
}
