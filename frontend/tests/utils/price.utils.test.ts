import { formatDecimals, formatPrice } from '@/utils/price.utils';

describe('Utils: formatPrice', () => {
  it('should format a price in ARS by default', () => {
    const price = formatPrice(1000);
    expect(price).toBe('$ 1.000');
  });

  it('should format a price in USD when specified', () => {
    const price = formatPrice(50, 'USD');
    expect(price).toBe('US$ 50');
  });

  it('should handle zero correctly', () => {
    const price = formatPrice(0);
    expect(price).toBe('$ 0');
  });
});

describe('Utils: formatDecimals', () => {
  it('should add a leading zero to numbers less than 10', () => {
    const formattedNumber = formatDecimals(5);
    expect(formattedNumber).toBe('05');
  });

  it('should do not add a leading zero to numbers equal to or greater than 10', () => {
    const formattedNumber = formatDecimals(10);
    expect(formattedNumber).toBe('10');
  });
});
