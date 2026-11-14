export function toMealResponse(meal) {
  const response = {
    id: meal.id,
    name: meal.name,
    dietaryTags: meal.dietaryTags,
    prepMinutes: meal.prepMinutes,
    estimatedCost: meal.estimatedCost,
  };
  if (meal.allergens === undefined) return response;
  if (!Array.isArray(meal.allergens) || Array.from(meal.allergens).some(
    allergen => typeof allergen !== 'string' || !allergen.trim()
  )) {
    throw new TypeError('allergens must be an array of non-empty strings');
  }
  return { ...response, allergens: meal.allergens.map(allergen => allergen.trim()) };
}
