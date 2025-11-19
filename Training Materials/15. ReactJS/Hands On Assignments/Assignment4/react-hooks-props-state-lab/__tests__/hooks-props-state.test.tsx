
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Page from '@/app/page';

describe('Hooks, Props, and State — Lab', () => {
  test('Banner supports headerText prop and children', () => {
    render(<Page />);

    // Prefer role-based queries: find both <h1> headings from the two Banner components.
    const headings = screen.getAllByRole('heading', { level: 1 });

    // First Banner renders via headerText prop
    expect(headings[0]).toHaveTextContent(/globomantics/i);

    // Second Banner renders via children
    expect(headings[1]).toHaveTextContent(/alternate title/i);
  });

  test('HouseList renders initial rows and adds one on click', () => {
    render(<Page />);
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 2');

    fireEvent.click(screen.getByTestId('add'));

    expect(screen.getByTestId('count')).toHaveTextContent('Count: 3');
    // New row with id=3 should be present
    expect(screen.getByTestId('row-3')).toBeInTheDocument();
  });
});
