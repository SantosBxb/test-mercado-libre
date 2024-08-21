import Spinner from '@/components/Spinner';
import SimpleLayout from '@/components/SimpleLayout';

/**
 * Renders a loading page that displays a spinner animation to indicate that content is being loaded.
 *
 * @component
 *
 * @example
 * <Loading />
 */
export default function Loading() {
  return (
    <SimpleLayout>
      <Spinner />
    </SimpleLayout>
  );
}
