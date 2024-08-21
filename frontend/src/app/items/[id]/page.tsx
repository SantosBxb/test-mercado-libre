import { Metadata } from 'next';
import axiosClient from '@/utils/axios';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ItemDetailResponse } from '@/types';
import ItemDetails from '@/components/ItemDetail';
import { baseSchema, generateItemSchema } from '@/utils/schema.utils';
import JsonLd from '@/components/JsonLd';
import { notFound } from 'next/navigation';

/**
 * The props object containing route parameters.
 */
interface Props {
  params: { id: string };
}

/**
 * The main component for rendering item details page.
 *
 * @param {Props} props - The props object containing route parameters.
 * @param {string} props.params.id - The ID of the item to fetch details for.
 */
export default async function Page({ params: { id } }: Props) {
  const { data } = await axiosClient
    .get<ItemDetailResponse>(`/api/items/${id}`)
    .catch(() => notFound());

  return (
    <>
      <Breadcrumbs items={data.categories} />
      <ItemDetails itemDetails={data.item} />
      <JsonLd
        jsonLd={{
          ...baseSchema,
          product: [generateItemSchema(data.item)],
        }}
      />
    </>
  );
}

/**
 * Generates metadata for the item details page.
 *
 * @param {Object} params - Route parameters.
 * @param {string} params.id - The ID of the item to fetch metadata for.
 *
 * @returns {Promise<Metadata>} The metadata object for the item details page.
 */
export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { data } = await axiosClient
    .get<ItemDetailResponse>(`/api/items/${id}`)
    .catch(() => notFound());
  return {
    title: `${data.item.title} - Mercado Libre`,
    description:
      data.item.description.slice(0, 160) ||
      'Compre productos con Envío Gratis en el día en Mercado Libre Chile. Encuentre miles de marcas y productos a precios increíbles.',
    keywords: `${data.item.title}, ${data.categories.join(', ')}`,
    robots: 'index, follow',
    authors: { name: `${data.author.name} ${data.author.lastname}` },
    twitter: {
      images: data.item.picture,
    },
    openGraph: {
      images: data.item.picture,
    },
  };
}
