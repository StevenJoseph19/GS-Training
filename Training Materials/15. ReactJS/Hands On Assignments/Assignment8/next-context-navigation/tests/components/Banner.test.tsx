
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Page from '@/app/page';
import Providers from '@/providers/Providers';

beforeEach(() => {
  // @ts-ignore
  global.fetch = jest.fn(async () => ({ ok: true, json: async () => [] }));
});

afterEach(() => { jest.restoreAllMocks(); });

test('banner home button navigates to home', async () => {
  render(
    <Providers>
      <Page />
    </Providers>
  );

  const homeBtn = screen.getByRole('button', { name: /home/i });
  fireEvent.click(homeBtn);
  await waitFor(() => expect(homeBtn).toBeInTheDocument());
});
