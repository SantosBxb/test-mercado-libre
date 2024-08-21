import { Suspense } from 'react';
import Container from './Container';
import Logo from './Logo';
import SearchBar from './SearchBar';
import styles from '@styles/navbar.module.scss';

/**
 * Renders the navigation bar, including the logo and search bar.
 *
 * @component
 * @example
 * <Navbar />
 */
export default function Navbar() {
  return (
    <Suspense>
      <nav className={styles.navbar}>
        <Container>
          <Logo />
          <SearchBar />
        </Container>
      </nav>
    </Suspense>
  );
}
