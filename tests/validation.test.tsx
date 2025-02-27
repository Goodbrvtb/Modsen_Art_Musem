import { checkCyrillic } from '../src/utils/validation';

describe('checkCyrillic', () => {
  it('should return true for strings containing Cyrillic characters', () => {
    expect(checkCyrillic('Привет')).toBe(true);
    expect(checkCyrillic('Hello Привет')).toBe(true);
    expect(checkCyrillic('123 Привет 456')).toBe(true);
  });

  it('should return false for strings without Cyrillic characters', () => {
    expect(checkCyrillic('Hello')).toBe(false);
    expect(checkCyrillic('1234')).toBe(false);
    expect(checkCyrillic('Hello World!')).toBe(false);
  });

  it('should return false for empty strings', () => {
    expect(checkCyrillic('')).toBe(false);
  });
});
