import { add, subtract, multiply, divide } from '../src/utils/mathUtils';

describe('mathUtils', () => {
  test('basic math operations', () => {
    expect(add(2, 3)).toBe(5);
    expect(subtract(5, 2)).toBe(3);
    expect(multiply(2, 4)).toBe(8);
    expect(divide(10, 2)).toBe(5);
  });

  test('divide by zero throws error', () => {
    expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
  });
});
