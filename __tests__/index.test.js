import { test, expect } from '@jest/globals';
import result from '../__fixtures__/result.js';
import showDiff from '../src/index.js';

test('gendiff', () => {
  expect(showDiff('file1.json', 'file2.json')).toBe(result);
});
