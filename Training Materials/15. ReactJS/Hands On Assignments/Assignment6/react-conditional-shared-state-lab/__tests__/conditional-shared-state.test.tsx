
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Page from '@/app/page';

describe('Conditional Rendering & Shared State — Lab', () => {
  test('shows loading then list', async () => {
    render(<Page />);
    // initial state from hook is 'loading' (set synchronously)
    expect(screen.getByTestId('loading')).toBeInTheDocument();
    // once Promise resolves (microtask), list should appear
    const list = await screen.findByTestId('list');
    expect(list).toBeInTheDocument();
  });

  test('clicking a row shows details with photo and back returns list', async () => {
    render(<Page />);
    const row = await screen.findByTestId('row-11');
    fireEvent.click(row);
    const details = await screen.findByTestId('details');
    expect(details).toBeInTheDocument();
    const img = screen.getByTestId('photo');
    expect(img.getAttribute('src')).toMatch(/houseImages\/house1.jpg|data:image/);

    // back
    fireEvent.click(screen.getByText(/^back$/i));
    const list = await screen.findByTestId('list');
    expect(list).toBeInTheDocument();
  });
});
