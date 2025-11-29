
# Forms + Validation (Next.js Stub — Jest + RTL)

Use this stub to implement a controlled Signup form with simple validation.

## Implement in `components/SignupForm.tsx`
- Controlled inputs: **Name**, **Email**, **Password**, **Confirm Password**, **Terms** (checkbox)
- Validation:
  - Name required
  - Email matches a simple regex (e.g., `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
  - Password min length: 8
  - Confirm must match Password (show error **only when they differ**)
  - Terms must be checked
- Error messages must render as: `<p role="alert" data-testid="error-<field>">...`.
- Submit button text: **Create Account** (accessible name from visible text; **do not** add `aria-label`).
- Disable the submit button while there are validation errors.
- On success, render `<div data-testid="success">` with a simple message.
- Wrap form with `<form aria-label="signup-form" noValidate>`.

## Tests
- `tests/components/SignupForm.test.tsx` expects behavior above (Option A: confirm error only when mismatch).

## Run
```bash
pnpm i
pnpm dev
pnpm test
```

## Notes
- Jest config uses CommonJS (`jest.config.cjs`) and `next/jest`.
- `jest.setup.ts` mocks `next/image` for jsdom.
