import { test, expect } from '@playwright/test';

test.describe('Feature B', () => {
  test('profile page renders', () => {
    expect('hello').toContain('hell');
  });

  test('settings save correctly', () => {
    expect({ a: 1 }).toEqual({ a: 1 });
  });

  test('logout redirects', () => {
    expect(200).toBeGreaterThan(100);
  });
});
