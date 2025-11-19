
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Page from '@/app/page';

describe('Rendering & Side Effects — Lab', () => {
  test('loads houses via effect and shows total', async () => {
    render(<Page />);

    await waitFor(() =>
      expect(screen.getByTestId('total')).toHaveTextContent('$2320000')
    );
  });

  test('memoized rows keep render count on existing items when adding', async () => {
    render(<Page />);

    await screen.findByTestId('row-1');

    expect(screen.getByTestId('renders-1')).toHaveTextContent('1');
    expect(screen.getByTestId('renders-2')).toHaveTextContent('1');
    expect(screen.getByTestId('renders-3')).toHaveTextContent('1');

    fireEvent.click(screen.getByTestId('add'));

    const newRow = await screen.findByTestId('row-4');
    expect(newRow).toBeInTheDocument();

    expect(screen.getByTestId('renders-1')).toHaveTextContent('1');
    expect(screen.getByTestId('renders-2')).toHaveTextContent('1');
    expect(screen.getByTestId('renders-3')).toHaveTextContent('1');
    expect(screen.getByTestId('renders-4')).toHaveTextContent('1');
  });
});
