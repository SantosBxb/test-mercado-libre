/**
 * Formats a number as a price in the specified currency, using Argentina's locale by default.
 * @param {number} amount - The amount to format as a price.
 * @param {string} [currency='ARS'] - The currency in which the price should be formatted. Defaults to 'ARS'.
 * @returns {string} The formatted price as a string with the specified currency symbol.
 */
export const formatPrice = (
  amount: number,
  currency: string = 'ARS'
): string => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(amount);
};

/**
 * Formats a number to ensure it has at least two digits, adding a leading zero if necessary.
 * @param {number} number - The number to format.
 * @returns {string} The formatted number as a string with at least two digits.
 */
export const formatDecimals = (number: number): string =>
  number.toString().padStart(2, '0');
