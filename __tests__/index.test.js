import { test, expect, describe } from '@jest/globals';
import resultStylish from '../__fixtures__/resultStylish.js';
import resultPlain from '../__fixtures__/resultPlain.js';
import resultJSON from '../__fixtures__/resultJSON.js';
import showDiff from '../src/index.js';

describe('stylish', () => {
  test('json', () => {
    expect(showDiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toBe(resultStylish);
  });

  test('yaml', () => {
    expect(showDiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml')).toBe(resultStylish);
  });

  test('yml', () => {
    expect(showDiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml')).toBe(resultStylish);
  });
});

describe('plain', () => {
  test('json', () => {
    expect(showDiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'plain')).toBe(resultPlain);
  });

  test('yaml', () => {
    expect(showDiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml', 'plain')).toBe(resultPlain);
  });

  test('yml', () => {
    expect(showDiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml', 'plain')).toBe(resultPlain);
  });
});

describe('json', () => {
  test('json', () => {
    expect(showDiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'json')).toBe(resultJSON);
  });

  test('yaml', () => {
    expect(showDiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml', 'json')).toBe(resultJSON);
  });

  test('yml', () => {
    expect(showDiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml', 'json')).toBe(resultJSON);
  });
});
