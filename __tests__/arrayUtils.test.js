import { findMax, findMin, removeDuplicates } from "../src/utils/arrayUtils";

describe("arrayUtils", () => {
  test("findMax returns max value", () => {
    expect(findMax([1, 5, 3])).toBe(5);
  });

  test("findMin returns min value", () => {
    expect(findMin([1, -3, 3])).toBe(-3);
  });

  test("removeDuplicates removes duplicates", () => {
    expect(removeDuplicates([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  test("findMax throws error if input is not array", () => {
    expect(() => findMax("not array")).toThrow();
  });

  test("findMin throws error if input is not array", () => {
    expect(() => findMin(null)).toThrow();
  });

  test("removeDuplicates throws error if input is not array", () => {
    expect(() => removeDuplicates({})).toThrow();
  });
});
