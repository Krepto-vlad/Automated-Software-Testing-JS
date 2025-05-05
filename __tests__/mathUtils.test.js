import { add, subtract, multiply, divide } from "../src/utils/mathUtils";

describe("mathUtils", () => {
  test("add adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtract subtracts numbers", () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test("multiply multiplies numbers", () => {
    expect(multiply(2, 4)).toBe(8);
  });

  test("divide divides numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divide by zero throws error", () => {
    expect(() => divide(1, 0)).toThrow("Cannot divide by zero");
  });
});
