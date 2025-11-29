"use client";
// TODO: Import CarRow from '@/components/CarRow'
// TODO: Import LoadingIndicator from '@/components/LoadingIndicator'
// TODO: Import { useCars } from '@/hooks/useCars'
// TODO: Import type { Car } from '@/lib/types'

/**
 * CarList (ASSIGNMENT SKELETON)
 * -----------------------------
 * Displays a table of cars. While data is loading (or errored), render
 * the LoadingIndicator. When loaded, render the table and rows.
 *
 * TODOs:
 * 1) Use the custom hook `useCars()` to retrieve `{ cars, status }`.
 * 2) If `status !== 'loaded'`: return `<LoadingIndicator status={status} />`.
 * 3) Otherwise render a table with headers and map `cars` to `<CarRow/>`.
 * 4) Ensure each CarRow receives `onSelect` and calls it with the clicked car.
 */

type Props = {
  // TODO: use the `Car` type from '@/lib/types'
  onSelect: (c: any) => void; // replace `any` with `Car`
};

export default function CarList({ onSelect }: Props) {
  // TODO(1): Get `{ cars, status }` from `useCars()`
  // const { cars, status } = useCars();

  // TODO(2): Early return with <LoadingIndicator status={status} /> when not loaded
  // if (status !== 'loaded') {
  //   return <LoadingIndicator status={status} />;
  // }

  // TODO(3): Render a table with headers; map cars to <CarRow />
  // <CarRow key={c.id} car={c} onSelect={onSelect} />

  return <div>{/* Implement the table + rows per the TODOs above */}</div>;
}
