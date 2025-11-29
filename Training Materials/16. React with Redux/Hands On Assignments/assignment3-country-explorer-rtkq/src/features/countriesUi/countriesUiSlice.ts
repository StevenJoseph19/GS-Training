import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/** Assignment 3 — UI slice (STRICT STUB)
 * Holds UI-only filters for CountryList (query + region).
 * TODO: add more UI state if needed.
 */
interface CountriesUiState { region: 'All'|'Africa'|'Americas'|'Asia'|'Europe'|'Oceania'; query: string }
const initialState: CountriesUiState = { region: 'All', query: '' };
const slice = createSlice({
  name: 'countriesUi',
  initialState,
  reducers: {
    setRegion(state, action: PayloadAction<CountriesUiState['region']>) { state.region = action.payload; },
    setQuery(state, action: PayloadAction<string>) { state.query = action.payload; },
  },
});
export const { setRegion, setQuery } = slice.actions;
export default slice.reducer;
