import {
    filterUsersByAge,
    sortUsersByName,
    findUserById,
    isEmailTaken
  } from '../src/utils/userListUtils';
  
  const users = [
    { id: 1, name: 'Alice', age: 25, email: 'a@a.com' },
    { id: 2, name: 'Bob', age: 30, email: 'b@b.com' },
    { id: 3, name: 'Charlie', age: 20, email: 'c@c.com' }
  ];
  
  describe('userListUtils', () => {
    test('filterUsersByAge filters correctly', () => {
      expect(filterUsersByAge(users, 21, 30)).toEqual([users[0], users[1]]);
    });
  
    test('sortUsersByName sorts alphabetically', () => {
      const sorted = sortUsersByName(users);
      expect(sorted.map(u => u.name)).toEqual(['Alice', 'Bob', 'Charlie']);
    });
  
    test('findUserById finds correct user', () => {
      expect(findUserById(users, 2)).toEqual(users[1]);
      expect(findUserById(users, 999)).toBeNull();
    });
  
    test('isEmailTaken works correctly', () => {
      expect(isEmailTaken(users, 'a@a.com')).toBe(true);
      expect(isEmailTaken(users, 'z@z.com')).toBe(false);
    });
  
    test('throws error when input is not array', () => {
      expect(() => filterUsersByAge({}, 10, 20)).toThrow();
      expect(() => sortUsersByName(null)).toThrow();
      expect(() => findUserById('not-array', 1)).toThrow();
      expect(() => isEmailTaken(undefined, 'a')).toThrow();
    });
  });
  