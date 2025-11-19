
import { useCallback } from 'react';
import { API_DATA } from '@/lib/data/houses';

// TODO: Return a memoized async get() function so effects using it don't loop
export function useGetRequest(url: string) {
  const get = useCallback(async () => {
    return Promise.resolve(API_DATA);
  }, [url]);
  return { get };
}
