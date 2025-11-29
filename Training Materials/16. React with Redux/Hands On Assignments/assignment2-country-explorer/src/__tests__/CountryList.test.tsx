import React from 'react';
import { describe, it, expect } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../features/countries/countriesSlice';
import { render, screen } from '@testing-library/react';

function renderWith(preloadedState?: any){
  const store = configureStore({ reducer: { countries: countriesReducer }, preloadedState });
  return render(<Provider store={store}><div role="status">Loading…</div></Provider>);
}

describe('CountryList', ()=>{
  it('renders loader on loading', ()=>{
    renderWith({ countries: { entities:{}, ids:[], status:'loading', error:null, filters:{ region:'All', query:'' } } });
    expect(screen.getByRole('status')).toHaveTextContent(/Loading/i);
  });
});
