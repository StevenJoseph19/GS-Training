
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Page from '@/app/page';

describe('Styling Components — Solution', () => {
  test('applies global container classes and renders banner', () => {
    render(<Page />);
    const banner = screen.getByTestId('banner');
    expect(banner).toBeInTheDocument();
    // Global container class should be applied
    expect(banner.className).toMatch(/container/);
  });

  test('banner uses CSS module class for logo', () => {
    render(<Page />);
    const img = screen.getByAltText('logo');
    // CSS module class should include 'logo'
    expect(img.className).toMatch(/logo/);
  });

  test('list renders house cards; expensive cards have inline red border', () => {
    render(<Page />);
    const card201 = screen.getByTestId('house-card-201'); // price 880000 (expensive)
    const card202 = screen.getByTestId('house-card-202'); // price 540000 (not expensive)

    expect(card201).toBeInTheDocument();
    expect(card202).toBeInTheDocument();

    // 201 price >= 800000 -> inline style applied
    expect(card201).toHaveAttribute('style');
    expect(card201.getAttribute('style')).toMatch(/red/);

    // 202 price < 800000 -> no inline style attribute present
    // NOTE: When no inline style exists, getAttribute('style') returns null (not an empty string).
    expect(card202.getAttribute('style')).toBeNull();

    // hover-pointer class from global css should be present
    expect(card201.className).toMatch(/hover-pointer/);
  });

  test('theme toggle switches global theme class on <main>', () => {
    render(<Page />);
    const main = screen.getByTestId('main');
    const btn = screen.getByTestId('theme-btn');

    // Starts light
    expect(main.className).toMatch(/theme-light/);

    // Toggle to dark
    fireEvent.click(btn);
    expect(main.className).toMatch(/theme-dark/);
  });
});
