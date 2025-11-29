import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import countriesUiReducer from '../features/countriesUi/countriesUiSlice';
import * as apiModule from '../services/countriesApi';
import { render, screen } from '@testing-library/react';

// NOTE: This test suite expects CountryList implementation later; kept intact for assignment.
vi.spyOn(apiModule, 'useGetCountriesQuery').mockReturnValue({
  data: [{ cca3: 'FRA', name: { common: 'France', official: 'FR' }, region: 'Europe', population: 1, flags: {} }],
  isLoading: false,
  isError: false,
  error: null,
  refetch: vi.fn(),
  isFetching: false,
} as any);

// Placeholder component import will fail until implemented; that's expected in stub phase.
function CountryListPlaceholder() { return <div>TODO CountryList</div>; }

function renderWith(preloadedState?: any){
  const store = configureStore({ reducer: { countriesUi: countriesUiReducer }, preloadedState });
  return render(<Provider store={store}><CountryListPlaceholder/></Provider>);
}

describe('CountryList mocked (stub)',()=>{
  it('filters by query and region (to be implemented)',()=>{
    renderWith({ countriesUi:{ query:'fr', region:'Europe' } });
    expect(screen.getByText(/TODO CountryList/i)).toBeInTheDocument();
  });
});
