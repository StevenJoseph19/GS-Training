
import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import Page from '@/app/page';

// Utility to strip currency formatting to number
function parseUSD(s: string): number {
  return Number(s.replace(/[^0-9.]/g, ''));
}

describe('Application Anatomy — Solution', () => {
  test('renders banner and default dashboard view', () => {
    render(<Page />);
    expect(screen.getByTestId('banner')).toHaveTextContent(/globomantics portal/i);
    expect(screen.getByTestId('dashboard')).toBeInTheDocument();
    expect(screen.getByTestId('chart')).toBeInTheDocument();
  });

  test('computes stats using default and named module exports', () => {
    render(<Page />);
    const stats = screen.getByTestId('stats');

    expect(within(stats).getByTestId('stat-total')).toHaveTextContent('4');

    const sumText = within(stats).getByTestId('stat-sum').textContent || '';
    const avgText = within(stats).getByTestId('stat-avg').textContent || '';

    const sumVal = parseUSD(sumText);
    const avgVal = parseUSD(avgText);

    // Expected from dataset: 810000 + 680000 + 730000 + 590000 = 2,810,000
    // Average = 702,500
    expect(sumVal).toBe(2810000);
    expect(avgVal).toBe(702500);
  });

  test('navigates to Houses tab and back', () => {
    render(<Page />);
    fireEvent.click(screen.getByTestId('tab-houses'));
    expect(screen.getByTestId('houses')).toBeInTheDocument();
    expect(screen.getByTestId('houses-count')).toHaveTextContent('4');

    // back to dashboard
    fireEvent.click(screen.getByText(/back to dashboard/i));
    expect(screen.getByTestId('dashboard')).toBeInTheDocument();
  });
});
