
import { useCallback } from 'react';
import { LIST } from '@/lib/data/houses';

// TODO: Memoize get() so effects using it don't loop when referenced in deps
export function useGetRequest(url: string) {
  const get = useCallback(async () => {
    return Promise.resolve(LIST);
  }, [url]);
  return { get };
}
