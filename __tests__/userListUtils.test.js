import {
  filterUsersByAge,
  sortUsersByName,
  findUserById,
  isEmailTaken,
} from "../src/utils/userListUtils";

const users = [
  { id: 1, name: "Alice", age: 25, email: "a@a.com" },
  { id: 2, name: "Bob", age: 30, email: "b@b.com" },
  { id: 3, name: "Charlie", age: 20, email: "c@c.com" },
];

describe("userListUtils", () => {
  test("filterUsersByAge filters correctly", () => {
    expect(filterUsersByAge(users, 21, 30)).toEqual([users[0], users[1]]);
  });

  test("sortUsersByName sorts alphabetically", () => {
    const sorted = sortUsersByName(users);
    expect(sorted.map(u => u.name)).toEqual(["Alice", "Bob", "Charlie"]);
  });

  test("findUserById finds correct user", () => {
    expect(findUserById(users, 2)).toEqual(users[1]);
  });

  test("findUserById returns null if user not found", () => {
    expect(findUserById(users, 999)).toBeNull();
  });

  test("isEmailTaken returns true for existing email", () => {
    expect(isEmailTaken(users, "a@a.com")).toBe(true);
  });

  test("isEmailTaken returns false for non-existing email", () => {
    expect(isEmailTaken(users, "z@z.com")).toBe(false);
  });

  test("filterUsersByAge throws error when input is not array", () => {
    expect(() => filterUsersByAge({}, 10, 20)).toThrow();
  });

  test("sortUsersByName throws error when input is not array", () => {
    expect(() => sortUsersByName(null)).toThrow();
  });

  test("findUserById throws error when input is not array", () => {
    expect(() => findUserById("not-array", 1)).toThrow();
  });

  test("isEmailTaken throws error when input is not array", () => {
    expect(() => isEmailTaken(undefined, "a")).toThrow();
  });
});
