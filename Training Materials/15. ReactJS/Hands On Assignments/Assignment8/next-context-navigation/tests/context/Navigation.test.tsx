
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Page from '@/app/page';
import Providers from '@/providers/Providers';

// mock fetch used by useGetRequest
const mockCars = [
  { id: 1, brand: 'Toyota', model: 'Corolla', price: 9500 },
  { id: 2, brand: 'Honda', model: 'Civic', price: 12000 },
];

beforeEach(() => {
  // @ts-ignore
  global.fetch = jest.fn(async () => ({ ok: true, json: async () => mockCars }));
});

afterEach(() => { jest.restoreAllMocks(); });

test('navigates from list to details via context and back', async () => {
  render(
    <Providers>
      <Page />
    </Providers>
  );

  // initial: loading indicator
  expect(screen.getByLabelText('loading')).toBeInTheDocument();
  await waitFor(() => expect(screen.queryByLabelText('loading')).not.toBeInTheDocument());

  // rows rendered
  expect(screen.getByTestId('car-row-1')).toBeInTheDocument();

  // click first car -> details view appears
  fireEvent.click(screen.getByTestId('car-row-1'));
  expect(await screen.findByRole('button', { name: /back/i })).toBeInTheDocument();

  // back -> list view again
  fireEvent.click(screen.getByRole('button', { name: /back/i }));
  await waitFor(() => expect(screen.getByTestId('car-row-1')).toBeInTheDocument());
});
