import { ReactNode } from 'react';
import styles from '@styles/container.module.scss';

/**
 * Renders a styled container that wraps its children.
 *
 * @component
 * @param {ReactNode} props.children - Content to be wrapped by the container.
 *
 * @example
 * <Container>
 *   <h1>Title</h1>
 *   <p>This is a paragraph inside the container.</p>
 * </Container>
 */
export default function Container({ children }: { children: ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
