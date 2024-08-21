import { MetadataRoute } from 'next';

/**
 * Generates a sitemap for the application, providing metadata for search engines.
 *
 * @returns {MetadataRoute.Sitemap} The sitemap metadata containing URLs, last modification dates, and priorities.
 */
export default function sitemap({}): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mercadolibre.cl',
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
