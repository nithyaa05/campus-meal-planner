# Ownership and work split

## Nithyaa — backend

- Define meal and weekly-plan data models.
- Implement filter validation and meal search.
- Implement plan creation and weekly-total calculation.
- Add backend unit and API tests.
- Notify Advait before changing request or response fields.

## Advait — frontend

- Build the meal-filter form and validation feedback.
- Build meal results and seven-day plan views.
- Add loading, empty, and server-error states.
- Integrate against the documented API contract.
- Notify Nithyaa when the UI needs a new field or different response shape.

## Shared decisions

- Agree on `docs/api-contract.md` before feature implementation.
- Treat contract changes as cross-owner updates.
- Visual-only frontend changes do not require backend work.
