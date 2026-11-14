import assert from 'node:assert/strict';
import { test } from 'node:test';
import { toMealResponse } from './meal-response.mjs';

const meal = {
  id: 'meal-1', name: 'Vegetable rice bowl', dietaryTags: ['vegetarian'],
  prepMinutes: 25, estimatedCost: 6.5,
};

test('keeps legacy meals valid without allergen information', () => {
  assert.deepEqual(toMealResponse(meal), meal);
});

test('keeps an explicit empty list distinct from missing information', () => {
  assert.deepEqual(toMealResponse({ ...meal, allergens: [] }).allergens, []);
  assert.deepEqual(toMealResponse({ ...meal, allergens: [' soy '] }).allergens, ['soy']);
});

test('rejects malformed allergen information', () => {
  for (const allergens of [null, 'soy', [3], [' '], new Array(1)]) {
    assert.throws(() => toMealResponse({ ...meal, allergens }), TypeError);
  }
});
