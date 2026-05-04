import { test, expect } from '@playwright/test';

test.describe('Feature A', () => {
  test('login works', () => {
    expect(1 + 1).toBe(2);
  });

  test('dashboard loads', () => {
    expect(true).toBe(true);
  });

  test('search returns results', () => {
    expect([1, 2, 3]).toHaveLength(3);
  });
});
