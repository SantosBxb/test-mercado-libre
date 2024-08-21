import SimpleLayout from '@/components/SimpleLayout';
import ShoppingIcon from '@/components/ShoppingIcon';

/**
 * Renders the main entry point component for users visiting the application.
 *
 * @component
 */
export default function Home() {
  return (
    <SimpleLayout>
      <ShoppingIcon />
      <h2>¡Mercado Libre!</h2>
      <p>Encuentra productos utilizando el buscador de arriba.</p>
    </SimpleLayout>
  );
}
