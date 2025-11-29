import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/** Assignment 3 — RTK Query service (STRICT STUB)
 * TODO: Finalize endpoint shapes and tag types; no component logic here.
 */
export interface Country {
  cca3: string;
  name: { common: string; official: string };
  region: string;
  population: number;
  flags?: { png?: string; svg?: string };
}

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com' }),
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], void>({
      // TODO: complete query (fields)
      query: () => '/v3.1/all?fields=cca3,name,region,population,flags',
    }),
  }),
});

export const { useGetCountriesQuery } = countriesApi;
