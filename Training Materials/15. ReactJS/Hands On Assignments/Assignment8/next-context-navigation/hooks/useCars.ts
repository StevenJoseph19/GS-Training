
'use client';
// TODO: Import { useEffect, useState } from 'react'
// TODO: Import type { Car } from '@/lib/types'
// TODO: Import { useGetRequest } from '@/hooks/useGetRequest'

/**
 * useCars (ASSIGNMENT SKELETON)
 * -----------------------------
 * TODOs:
 * 1) `cars` state: const [cars, setCars] = useState<Car[]>([]).
 * 2) Use `useGetRequest('/api/cars')` to get `{ get, status }`.
 * 3) In `useEffect([get])`, call `await get()` and setCars(data); guard with an `alive` flag.
 * 4) Return `{ cars, status }` (and optionally setCars).
 */
export function useCars() {
  // TODO: Implement per above
  return { cars: [] as any, status: 'idle' as any };
}
