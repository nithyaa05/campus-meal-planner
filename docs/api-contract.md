# Initial API contract

The meal response mapper implements the search response shape. HTTP endpoints and weekly-plan creation are planned.

## Search meals

`GET /api/meals?dietary=vegetarian&maxPrepMinutes=30`

Response:

```json
{
  "meals": [{
    "id": "meal-1",
    "name": "Vegetable rice bowl",
    "dietaryTags": ["vegetarian"],
    "prepMinutes": 25,
    "estimatedCost": 6.5
  }]
}
```

The optional `allergens` property is an array of non-empty strings. An omitted
property means the information is unavailable. An empty array means a source
explicitly supplied an empty list.

## Create a weekly plan

`POST /api/plans`

Request:

```json
{
  "days": [{ "day": "monday", "mealId": "meal-1" }],
  "weeklyBudget": 60
}
```

Response fields: `id`, `days`, `estimatedWeeklyTotal`, and `withinBudget`.
