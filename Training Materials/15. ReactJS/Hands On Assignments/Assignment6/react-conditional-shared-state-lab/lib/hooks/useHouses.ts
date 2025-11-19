
import { useEffect, useState } from 'react';
import { useGetRequest } from './get';
import type { House } from '@/lib/data/houses';

export type LoadingState = 'idle' | 'loading' | 'loaded' | 'error';

// TODO: Implement a custom hook that loads houses and exposes loading state
export function useHouses() {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState<LoadingState>('idle');
  const { get } = useGetRequest('/api/houses');

  useEffect(() => {
    let mounted = true;
    setLoading('loading');
    (async () => {
      try {
        const data = await get();
        if (mounted) {
          setHouses(data);
          setLoading('loaded');
        }
      } catch (e) {
        if (mounted) setLoading('error');
      }
    })();
    return () => { mounted = false; };
  }, [get]);

  return { houses, setHouses, loading };
}
