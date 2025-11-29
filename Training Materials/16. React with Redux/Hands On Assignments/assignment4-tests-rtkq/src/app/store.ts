import { configureStore } from '@reduxjs/toolkit';
import { countriesApi } from '../services/countriesApi';
import countriesUiReducer from '../features/countriesUi/countriesUiSlice';

export const store = configureStore({
  reducer: { [countriesApi.reducerPath]: countriesApi.reducer, countriesUi: countriesUiReducer },
  middleware: (getDefault) => getDefault().concat(countriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
