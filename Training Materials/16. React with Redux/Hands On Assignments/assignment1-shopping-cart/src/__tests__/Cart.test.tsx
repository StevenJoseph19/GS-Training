import React from 'react';
import { describe, it, expect } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import { render, screen, within } from '@testing-library/react';
import { Cart } from '../components/Cart';

function renderWithCart(preloadedState?: any) {
  const store = configureStore({ reducer: { cart: cartReducer }, preloadedState });
  return render(<Provider store={store}><Cart /></Provider>);
}

describe('Cart component', () => {
  it('shows empty message', () => {
    renderWithCart();
    expect(screen.getByText(/empty/i)).toBeInTheDocument();
  });

  it('shows total when items present', () => {
    const preloaded = { cart: { items: { p1: { id: 'p1', name: 'Nike Shoes', price: 100, quantity: 2 } } } };
    renderWithCart(preloaded);
    const totalContainer = screen.getByText(/Total:/i).closest('.cart-total')!;
    const utils = within(totalContainer);
    expect(utils.getByText('₹200.00')).toBeInTheDocument();
  });
});
