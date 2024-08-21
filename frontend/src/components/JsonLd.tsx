/**
 * Injects JSON-LD structured data into the document's head for SEO purposes.
 *
 * @component
 * @param {object} props.jsonLd - The JSON-LD structured data to be injected.
 *
 * @example
 * <JsonLd
 *   jsonLd={{
 *     "@context": "https://schema.org",
 *     "@type": "Organization",
 *     "name": "Example",
 *     "url": "https://www.example.com"
 *   }}
 * />
 */
export default function JsonLd({ jsonLd }: { jsonLd: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
