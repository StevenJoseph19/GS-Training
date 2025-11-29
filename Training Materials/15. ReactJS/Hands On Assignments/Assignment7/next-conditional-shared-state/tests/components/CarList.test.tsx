
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Page from '@/app/page';

// mock fetch used by useGetRequest
const mockCars = [
  { id: 1, brand: 'Toyota', model: 'Corolla', price: 9500 },
  { id: 2, brand: 'Honda', model: 'Civic', price: 12000 },
];

beforeEach(() => {
  // @ts-ignore
  global.fetch = vi.fn(async () => ({ ok: true, json: async () => mockCars }));
});

afterEach(() => {
  vi.restoreAllMocks();
});

test('shows loading then renders car list and supports selection', async () => {
  render(<Page />);
  expect(screen.getByLabelText('loading')).toBeInTheDocument();

  await waitFor(() => expect(screen.queryByLabelText('loading')).not.toBeInTheDocument());

  // rows rendered
  expect(screen.getByTestId('car-row-1')).toBeInTheDocument();

  // click first car -> details view appears
  fireEvent.click(screen.getByTestId('car-row-1'));
  expect(await screen.findByRole('button', { name: /back/i })).toBeInTheDocument();
});
