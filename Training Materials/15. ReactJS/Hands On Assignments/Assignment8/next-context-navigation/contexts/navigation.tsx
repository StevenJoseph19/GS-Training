
'use client';
import { createContext, useCallback, useContext, useState } from 'react';
import type { Car } from '@/lib/types';

/**
 * NavigationContext (KEPT REAL)
 * ---------------------------------
 * Global navigation state used by tests. Simpler than full routing:
 * - `current`: 'home' | 'details'
 * - `param`: selected Car when on 'details'
 * - `navigate(to, param?)`: update nav state
 */
export type NavValue = 'home' | 'details';
export type NavState = { current: NavValue; param?: Car; navigate: (to: NavValue, param?: Car) => void };

const NavigationContext = createContext<NavState | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<{ current: NavValue; param?: Car }>({ current: 'home' });
  const navigate = useCallback((to: NavValue, param?: Car) => setState({ current: to, param }), []);
  return (
    <NavigationContext.Provider value={{ ...state, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error('NavigationContext is not available');
  return ctx;
}
