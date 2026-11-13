# Campus Meal Planner — MVP requirements

## Goal

Help a student build a seven-day meal plan that fits one dietary preference, a maximum preparation time, and a weekly budget.

## MVP user flow

1. Enter one dietary preference, maximum preparation time, and weekly budget.
2. Browse matching meals with estimated cost and preparation time.
3. Add meals to a seven-day plan.
4. See the estimated weekly total before saving the plan.

## Acceptance criteria

- The backend validates missing or invalid filter values.
- Meal results include `id`, `name`, `dietaryTags`, `prepMinutes`, and `estimatedCost`.
- A saved plan contains exactly seven day entries and returns the estimated weekly total.
- The frontend presents loading, empty, validation-error, and server-error states.
- The frontend and backend use the shared contract in `docs/api-contract.md`.

## Out of scope

Authentication, grocery delivery, payments, nutrition guarantees, and production deployment.
