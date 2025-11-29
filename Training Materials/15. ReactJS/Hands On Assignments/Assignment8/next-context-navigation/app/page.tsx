
'use client';
import { useNavigation } from '@/contexts/navigation';
// TODO: Import Banner, CarList, CarDetails once implemented

/**
 * Root Page (ASSIGNMENT SKELETON)
 * --------------------------------
 * Drives conditional rendering based on global navigation context.
 * TODOs:
 * 1) Import and render <Banner/> at the top.
 * 2) Read `current` from `useNavigation()` and conditionally render
 *    <CarList/> when current === 'home' or <CarDetails/> otherwise.
 */
export default function Page() {
  const { current } = useNavigation();
  return (
    <main>
      {/* TODO(1): <Banner /> */}
      {/* TODO(2): Conditional rendering list/details */}
    </main>
  );
}
