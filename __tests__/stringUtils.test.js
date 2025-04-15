import { capitalize, reverseString, isPalindrome } from '../src/utils/stringUtils';

describe('stringUtils', () => {
  test('capitalize capitalizes string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('reverseString reverses string', () => {
    expect(reverseString('abc')).toBe('cba');
  });

  test('isPalindrome works', () => {
    expect(isPalindrome('madam')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
  });

  test('throws error if input not string', () => {
    expect(() => capitalize(1)).toThrow();
    expect(() => reverseString(null)).toThrow();
    expect(() => isPalindrome({})).toThrow();
  });
});
