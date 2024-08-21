import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Container from '@/components/Container';
import './global.css';

export const metadata: Metadata = {
  title: 'Mercado Libre - Envíos Gratis en el día',
  description:
    'Compre productos con Envío Gratis en el día en Mercado Libre Chile. Encuentre miles de marcas y productos a precios increíbles.',
};

/**
 * The root layout component for the application.
 *
 * @component
 * @param {React.ReactNode} children - The child elements to be rendered inside the layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
