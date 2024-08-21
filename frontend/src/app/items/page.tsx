import { Metadata } from 'next';
import axiosClient from '@/utils/axios';
import Breadcrumbs from '@/components/Breadcrumbs';
import ItemsList from '@/components/ItemsList';
import { ItemsResponse } from '@/types';
import JsonLd from '@/components/JsonLd';
import { baseSchema, generateItemSchema } from '@/utils/schema.utils';
import { notFound } from 'next/navigation';

/**
 * Defines the props for the search results page component.
 */
interface Props {
  searchParams: { q: string };
}

/**
 * Renders a page displaying search results for items based on the query parameter.
 *
 * @component
 * @param {Props} props - The properties for the component.
 * @param {string} props.searchParams.q - The search query string.
 */
export default async function Page({ searchParams: { q } }: Props) {
  const { data } = await axiosClient
    .get<ItemsResponse>(`/api/items?q=${q}`)
    .catch(() => notFound());
  if (!data.items.length) return notFound();

  return (
    <>
      <h1 className="hidden">{q}</h1>
      <Breadcrumbs items={data.categories} />
      <ItemsList items={data.items} />
      <JsonLd
        jsonLd={{
          ...baseSchema,
          product: data.items.map((item) => generateItemSchema(item)),
        }}
      />
    </>
  );
}

/**
 * Generates metadata for the search results page.
 *
 * @param {Props} props - The properties for the metadata.
 * @param {string} props.searchParams.q - The search query string.
 *
 * @returns {Metadata} The metadata object with title, description, and robots directives.
 */
export function generateMetadata({ searchParams: { q } }: Props): Metadata {
  return {
    title: `${q} - Mercado Libre`,
    description:
      'Compre productos con Envío Gratis en el día en Mercado Libre Chile. Encuentre miles de marcas y productos a precios increíbles.',
    robots: 'noindex',
  };
}
