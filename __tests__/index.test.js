import { test, expect } from '@jest/globals';
import result from '../__fixtures__/result.js';
import showDiff from '../src/index.js';

test('json', () => {
  expect(showDiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toBe(result);
});

test('yaml', () => {
  expect(showDiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml')).toBe(result);
});

test('yml', () => {
  expect(showDiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml')).toBe(result);
});
