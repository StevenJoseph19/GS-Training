
import { useRef } from 'react';

// TODO: Track how many times a component rendered (1 on first render)
export function useRenderCount(): number {
  const ref = useRef(0);
  ref.current += 1;
  return ref.current;
}
