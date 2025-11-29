"use client";
// TODO: Import { useEffect, useState } from 'react'
// TODO: Import type { Car } from '@/lib/types'
// TODO: Import { useGetRequest } from '@/hooks/useGetRequest'

/**
 * useCars (ASSIGNMENT SKELETON)
 * -----------------------------
 * Domain-specific hook that loads cars from `/api/cars` using `useGetRequest`.
 *
 * TODOs:
 * 1) Create cars state: `const [cars, setCars] = useState<Car[]>([])`.
 * 2) Use `useGetRequest('/api/cars')` to get `{ get, status }`.
 * 3) In `useEffect([get])`, call `await get()` and put the result into `setCars`.
 *    Use an `alive` flag, and clean up to avoid setting state after unmount.
 * 4) Return `{ cars, setCars, status }`.
 */

export function useCars() {
  // TODO(1): cars state
  // const [cars, setCars] = useState<Car[]>([]);

  // TODO(2): compose generic hook
  // const { get, status } = useGetRequest('/api/cars');

  // TODO(3): fetch on mount / when `get` changes
  // useEffect(() => {
  //   let alive = true;
  //   (async () => {
  //     const data = await get();
  //     if (alive) setCars(data);
  //   })();
  //   return () => { alive = false; };
  // }, [get]);

  // TODO(4): expose state and status
  // return { cars, setCars, status };

  // Temporary placeholder to keep TS happy
  return { cars: [] as any, setCars: (() => {}) as any, status: "idle" as any };
}
