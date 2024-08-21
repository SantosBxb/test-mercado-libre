import Link from 'next/link';
import styles from '@styles/logo.module.scss';
import Image from 'next/image';

/**
 * Renders the website logo with a link to the homepage.
 *
 * @component
 * @example
 * <Logo />
 */
export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Link href="/" title="Ir a inicio" className={styles.logo}>
        <Image
          src="/logo.png"
          alt="Logo Mercado Libre"
          width={53}
          height={36}
        />
      </Link>
    </div>
  );
}
