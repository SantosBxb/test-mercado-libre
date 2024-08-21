import styles from '@styles/spinner.module.scss';

/**
 * Renders a spinner component that displays a loading animation.
 *
 * @component
 *
 * @example
 * <Spinner />
 */
export default function Spinner() {
  return <div className={styles.spinner} data-testid="spinner"></div>;
}
