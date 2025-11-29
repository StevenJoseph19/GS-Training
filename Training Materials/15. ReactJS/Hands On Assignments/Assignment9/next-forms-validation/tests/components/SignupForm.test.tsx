
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignupForm from '@/components/SignupForm';

function fillExactLabel(labelText: string, value: string) {
  fireEvent.change(
    screen.getByLabelText(new RegExp(`^${labelText}$`, 'i')),
    { target: { value } }
  );
}

test('shows validation errors on submit and disables submit until valid', () => {
  render(<SignupForm />);
  const submit = screen.getByRole('button', { name: /create account/i });

  // initial submit should show errors
  fireEvent.click(submit);
  expect(screen.getByTestId('error-name')).toBeInTheDocument();
  expect(screen.getByTestId('error-email')).toBeInTheDocument();
  expect(screen.getByTestId('error-password')).toBeInTheDocument();
  // Confirm error only when mismatch — not asserted here
  expect(screen.getByTestId('error-accept')).toBeInTheDocument();
  expect(submit).toBeDisabled();
});

test('accepts correct input and shows success', () => {
  render(<SignupForm />);

  fillExactLabel('Name', 'Stephen');
  fillExactLabel('Email', 'stephen@example.com');
  fillExactLabel('Password', 'SuperSecret1');
  fillExactLabel('Confirm Password', 'SuperSecret1');

  fireEvent.click(screen.getByLabelText(/^I accept the Terms$/i));

  const submit = screen.getByRole('button', { name: /create account/i });
  expect(submit).not.toBeDisabled();

  fireEvent.click(submit);

  expect(screen.getByTestId('success')).toBeInTheDocument();
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
});

test('shows confirm error when passwords do not match', () => {
  render(<SignupForm />);
  fillExactLabel('Password', 'SuperSecret1');
  fillExactLabel('Confirm Password', 'Mismatch');
  const submit = screen.getByRole('button', { name: /create account/i });
  fireEvent.click(submit);
  expect(screen.getByTestId('error-confirm')).toBeInTheDocument();
});

test('invalid email shows error', () => {
  render(<SignupForm />);
  fillExactLabel('Email', 'invalid');
  expect(screen.getByTestId('error-email')).toBeInTheDocument();
});
