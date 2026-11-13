# Initial API contract

This is a planning contract, not implemented code.

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
