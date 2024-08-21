import { MetadataRoute } from 'next';

/**
 * Generates robots.txt metadata for the application, specifying indexing rules for search engines.
 *
 * @returns {MetadataRoute.Robots} The robots metadata containing indexing rules and sitemap URL.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://mercadolibre.cl/sitemap.xml',
  };
}
