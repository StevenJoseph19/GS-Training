import { describe, it, expect } from 'vitest';
import reducer from '../features/cart/cartSlice';

describe('cartSlice', () => {
  it('initially empty', () => {
    const state = reducer(undefined, { type: '@@INIT' } as any);
    expect(Object.keys(state.items)).toHaveLength(0);
  });
});
