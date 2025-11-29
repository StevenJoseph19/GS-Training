import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

/** Assignment 2 — Countries slice (STRICT STUB)
 * All implementation removed.
 * TODOs:
 * - Implement fetchCountries (createAsyncThunk) calling REST Countries API
 * - Handle pending/fulfilled/rejected in extraReducers
 * - Normalize data into entities + ids
 * - Implement setRegion/setQuery reducers and memoized selectors
 */
export interface Country { cca3: string; name: { common: string; official: string }; region: string; population: number; flags?: { png?: string; svg?: string } }
interface Filters { region: 'All'|'Africa'|'Americas'|'Asia'|'Europe'|'Oceania'; query: string }
interface CountriesState { entities: Record<string, Country>; ids: string[]; status: 'idle'|'loading'|'succeeded'|'failed'; error: string|null; filters: Filters }
const initialState: CountriesState = { entities: {}, ids: [], status: 'idle', error: null, filters: { region: 'All', query: '' } };

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  // TODO: implement real fetch (REST Countries API) and return Country[]
  throw new Error('TODO: implement fetchCountries');
});

const slice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setRegion(state, action: PayloadAction<Filters['region']>) { state.filters.region = action.payload; },
    setQuery(state, action: PayloadAction<string>) { state.filters.query = action.payload; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => { state.status = 'loading'; state.error = null; })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        // TODO: normalize payload into entities + ids
        state.status = 'succeeded';
      })
      .addCase(fetchCountries.rejected, (state, action) => { state.status = 'failed'; state.error = action.error?.message || 'Error'; });
  },
});

export const { setRegion, setQuery } = slice.actions;
export default slice.reducer;

// NOTE: Selectors intentionally stubbed.
// TODO: Implement memoized selectors (selectCountriesArray, selectFilteredCountries) in separate file.
export const selectCountriesArray = (s: RootState) => {
  // TODO: return countries array from normalized state
  return [];
};
export const selectFilteredCountries = (s: RootState) => {
  // TODO: apply query + region intersection
  return [];
};
