"use client";
// TODO: Import { useCallback, useState } from 'react'
// TODO: Import { loadingStatus, type LoadingStatus } from '@/helpers/loadingStatus'

/**
 * useGetRequest (ASSIGNMENT SKELETON)
 * -----------------------------------
 * Generic GET hook for fetching JSON with a loading status.
 *
 * TODOs:
 * 1) Create `status` state: useState<LoadingStatus>(loadingStatus.idle).
 * 2) Implement an async `get()` that:
 *    - sets status to isLoading
 *    - fetches the `url`, throws on !res.ok
 *    - returns `await res.json()`
 *    - sets status to loaded on success, hasErrored on catch
 * 3) Memoize `get` via useCallback([url]) to keep identity stable across rerenders.
 * 4) Return `{ get, status }`.
 */

export function useGetRequest(url: string) {
  // TODO(1): status state
  // const [status, setStatus] = useState<LoadingStatus>(loadingStatus.idle);

  // TODO(2,3): memoized async get()
  // const get = useCallback(async () => {
  //   try {
  //     setStatus(loadingStatus.isLoading);
  //     const res = await fetch(url);
  //     if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  //     const json = await res.json();
  //     setStatus(loadingStatus.loaded);
  //     return json;
  //   } catch (err) {
  //     setStatus(loadingStatus.hasErrored);
  //     throw err;
  //   }
  // }, [url]);

  // TODO(4): return object
  // return { get, status };

  // Temporary placeholder to keep TS happy
  return { get: async () => [], status: "idle" as any };
}
