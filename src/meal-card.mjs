export function mealCardAllergenText(meal) {
  if (meal.allergens === undefined) return 'Allergen information unavailable';
  if (meal.allergens.length === 0) return 'No allergens listed';
  return `Listed allergens: ${meal.allergens.join(', ')}`;
}

export function mealCardView(meal) {
  return { title: meal.name, allergenText: mealCardAllergenText(meal) };
}
