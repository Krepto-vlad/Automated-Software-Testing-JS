import checkStudentKnowledge from '../src/utils/studentKnowledgeCheckingUtils';

describe('checkStudentKnowledge', () => {
  test('returns true for correct answers', () => {
    const student = { q1: 'a', q2: 'b' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).toBe(true);
  });

  test('returns false for incorrect values', () => {
    const student = { q1: 'a', q2: 'c' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).toBe(false);
  });

  test('returns false for different keys', () => {
    const student = { q1: 'a', q3: 'b' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).toBe(false);
  });
});

test('returns false if keys have same names but different order', () => {
  const student = Object.assign({}, { q2: 'b' }, { q1: 'a' });
  const correct = Object.assign({}, { q1: 'a' });
  expect(checkStudentKnowledge(student, correct)).toBe(false);
});
