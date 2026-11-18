export function mealCardAllergenText(meal) {
  if (meal.allergens === undefined) return 'Allergen information unavailable';
  if (meal.allergens.length === 0) return 'No allergens listed';
  return `Listed allergens: ${meal.allergens.join(', ')}`;
}

// Display the portion count supplied by the backend API.
export function mealCardServingText(meal) {
  if (meal.servingCount === undefined) return 'Serves 1';
  if (!Number.isInteger(meal.servingCount) || meal.servingCount < 1) {
    throw new TypeError('servingCount must be a positive integer');
  }
  return `Serves ${meal.servingCount}`;
}

export function mealCardView(meal) {
  return {
    title: meal.name,
    allergenText: mealCardAllergenText(meal),
    servingText: mealCardServingText(meal),
  };
}
