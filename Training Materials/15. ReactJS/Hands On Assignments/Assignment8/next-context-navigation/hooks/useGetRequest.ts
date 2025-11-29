
'use client';
// TODO: Import { useCallback, useState } from 'react'
// TODO: Import { loadingStatus, type LoadingStatus } from '@/helpers/loadingStatus'

/**
 * useGetRequest (ASSIGNMENT SKELETON)
 * -----------------------------------
 * TODOs:
 * 1) `status` state: useState<LoadingStatus>(loadingStatus.idle).
 * 2) Memoized async `get()` via useCallback([url]) that:
 *    - sets status to isLoading
 *    - fetches url, throws on !res.ok
 *    - returns await res.json()
 *    - sets status to loaded on success, hasErrored on catch
 * 3) Return `{ get, status }`.
 */
export function useGetRequest(url: string) {
  // TODO: Implement per above
  return { get: async () => [], status: 'idle' as any };
}
