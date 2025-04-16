import { capitalize, reverseString, isPalindrome } from '../src/utils/stringUtils';

describe('stringUtils', () => {
  test('capitalize capitalizes string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('reverseString reverses string', () => {
    expect(reverseString('abc')).toBe('cba');
  });

  test('isPalindrome returns true for palindrome works', () => {
    expect(isPalindrome('madam')).toBe(true);
  });

  test('isPalindrome returns false for non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('capitalize throws error if input is not string', () => {
    expect(() => capitalize(1)).toThrow();
  });

  test('reverseString throws error if input is not string', () => {
    expect(() => reverseString(null)).toThrow();
  });

  test('isPalindrome throws error if input is not string', () => {
    expect(() => isPalindrome({})).toThrow();
  });
});
