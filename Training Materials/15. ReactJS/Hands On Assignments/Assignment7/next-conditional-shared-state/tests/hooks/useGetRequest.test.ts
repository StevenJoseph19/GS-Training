
import { renderHook, act } from '@testing-library/react';
import { useGetRequest } from '@/hooks/useGetRequest';

beforeEach(() => {
  // @ts-ignore
  global.fetch = vi.fn(async () => ({ ok: true, json: async () => ({ ok: true }) }));
});

afterEach(() => {
  vi.restoreAllMocks();
});

test('memoizes get by url via useCallback', async () => {
  const { result, rerender } = renderHook(({ url }) => useGetRequest(url), {
    initialProps: { url: '/api/cars' },
  });

  const first = result.current.get;
  await act(async () => { await result.current.get(); });

  // rerender with the same url should preserve function identity
  rerender({ url: '/api/cars' });
  expect(result.current.get).toBe(first);

  // change url -> new function
  rerender({ url: '/api/other' });
  expect(result.current.get).not.toBe(first);
});
