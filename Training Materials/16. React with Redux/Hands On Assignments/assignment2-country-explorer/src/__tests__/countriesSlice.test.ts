import { describe, it, expect } from 'vitest';
import reducer, { setRegion, setQuery, fetchCountries } from '../features/countries/countriesSlice';

describe('countriesSlice', ()=>{
  it('sets region & query', ()=>{
    let state = reducer(undefined, setRegion('Asia'));
    state = reducer(state, setQuery('ind'));
    expect(state.filters.region).toBe('Asia');
    expect(state.filters.query).toBe('ind');
  });
  it('pending sets loading', ()=>{
    const state = reducer(undefined, { type: fetchCountries.pending.type } as any);
    expect(state.status).toBe('loading');
  });
});
