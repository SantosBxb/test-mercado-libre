/**
 * Configuration object for the application.
 */
export default {
  server: {
    port: process.env.PORT || 3001,
  },
  meliAPI: process.env.MERCADO_LIBRE_API || 'https://api.mercadolibre.com',
  author: {
    name: 'Bryan',
    lastname: 'Santos Soto',
  },
  maxItems: 4,
};
