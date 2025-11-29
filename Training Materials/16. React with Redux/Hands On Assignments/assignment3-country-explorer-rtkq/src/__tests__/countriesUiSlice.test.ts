import { describe, it, expect } from 'vitest';
import reducer, { setRegion, setQuery } from '../features/countriesUi/countriesUiSlice';

describe('countriesUiSlice', ()=>{
  it('updates filters', ()=>{
    let state = reducer(undefined, setRegion('Europe'));
    state = reducer(state, setQuery('fr'));
    expect(state.region).toBe('Europe');
    expect(state.query).toBe('fr');
  });
});
