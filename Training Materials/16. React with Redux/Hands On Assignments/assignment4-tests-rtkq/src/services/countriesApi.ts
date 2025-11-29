import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export interface Country { cca3:string; name:{ common:string; official:string }; region:string; population:number; flags?:{ png?:string; svg?:string } }
export const countriesApi = createApi({ reducerPath:'countriesApi', baseQuery: fetchBaseQuery({ baseUrl:'https://restcountries.com' }), endpoints:(b)=>({ getCountries: b.query<Country[], void>({ query:()=>'/v3.1/all?fields=cca3,name,region,population,flags' }) }) });
export const { useGetCountriesQuery } = countriesApi;
