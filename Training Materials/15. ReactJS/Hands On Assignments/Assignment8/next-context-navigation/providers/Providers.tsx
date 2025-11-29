
'use client';
import { NavigationProvider } from '@/contexts/navigation';

/**
 * Providers wrapper (KEPT REAL)
 * -----------------------------
 * Wraps the app with NavigationProvider so tests can render pages
 * with the same provider stack used by the real app.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <NavigationProvider>{children}</NavigationProvider>;
}
