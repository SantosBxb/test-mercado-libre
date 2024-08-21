import NotFoundImage from '@/components/NotFountImage';
import SimpleLayout from '@/components/SimpleLayout';
import Link from 'next/link';

/**
 * Renders a "Not Found" page when a requested resource cannot be found.
 *
 * @component
 *
 * @example
 * <NotFound />
 */
export default function NotFound() {
  return (
    <SimpleLayout>
      <NotFoundImage />
      <h2>No encontrado</h2>
      <p>
        No se pudo encontrar el recurso solicitado, intenta nuevamente o{' '}
        <Link href="/" title="Ir a inicio">
          vuelve al inicio
        </Link>
        .
      </p>
    </SimpleLayout>
  );
}
