/**
 * The base URL for the API that the application communicates with.
 */
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

/**
 * Maps internal status codes to human-readable strings for presentation purposes.
 */
export const presentation = {
  new: 'Nuevo',
  used: 'Usado',
  sold: 'vendido',
  nSold: 'vendidos',
};
