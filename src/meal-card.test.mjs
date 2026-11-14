import assert from 'node:assert/strict';
import { test } from 'node:test';
import { mealCardAllergenText, mealCardView } from './meal-card.mjs';
import { toMealResponse } from './meal-response.mjs';

test('shows distinct labels for missing, empty, and populated allergen data', () => {
  const meal = { id: 'meal-1', name: 'Vegetable rice bowl' };
  assert.equal(mealCardAllergenText(toMealResponse(meal)), 'Allergen information unavailable');
  assert.equal(mealCardAllergenText(toMealResponse({ ...meal, allergens: [] })), 'No allergens listed');
  assert.equal(mealCardAllergenText(toMealResponse({ ...meal, allergens: ['soy', 'sesame'] })),
    'Listed allergens: soy, sesame');
});

test('includes the allergen label in the meal card view data', () => {
  assert.deepEqual(mealCardView(toMealResponse({ name: 'Rice bowl', allergens: ['soy'] })),
    { title: 'Rice bowl', allergenText: 'Listed allergens: soy' });
});
