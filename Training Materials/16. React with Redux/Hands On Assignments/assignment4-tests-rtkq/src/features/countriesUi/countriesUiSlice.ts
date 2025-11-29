import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface CountriesUiState { region:'All'|'Africa'|'Americas'|'Asia'|'Europe'|'Oceania'; query:string }
const initialState:CountriesUiState = { region:'All', query:'' };
const slice = createSlice({ name:'countriesUi', initialState, reducers: { setRegion(s,a:PayloadAction<CountriesUiState['region']>){ s.region=a.payload }, setQuery(s,a:PayloadAction<string>){ s.query=a.payload } } });
export const { setRegion, setQuery } = slice.actions;
export default slice.reducer;
