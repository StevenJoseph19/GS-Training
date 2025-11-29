"use client";
// TODO: Import type { Car } from '@/lib/types'

/**
 * CarRow (ASSIGNMENT SKELETON)
 * ----------------------------
 * Renders a table row for a given car. Clicking the row should select the car.
 *
 * TODOs:
 * 1) Render a <tr> with three cells: brand, model, price.
 * 2) Apply conditional styling: if price > 30000, highlight the price cell.
 * 3) On click, call `onSelect(car)`.
 * 4) Add `data-testid={`car-row-${car.id}`}` for testing.
 */

type Props = {
  // TODO: use the `Car` type from '@/lib/types'
  car: any; // replace `any` with `Car`
  onSelect: (c: any) => void; // replace `any` with `Car`
};

export default function CarRow({ car, onSelect }: Props) {
  // TODO(2): compute a `highlight` style object when price > 30000
  // const highlight = car.price > 30000 ? { color: 'crimson', fontWeight: 600 } : {};

  return (
    // TODO(1,3,4): render a <tr> with cells; attach onClick; add data-testid
    // <tr onClick={() => onSelect(car)} data-testid={`car-row-${car.id}`} style={{ cursor: 'pointer' }}>
    //   <td>{car.brand}</td>
    //   <td>{car.model}</td>
    //   <td style={highlight}>{car.price.toLocaleString()}</td>
    // </tr>

    // Temporary placeholder to keep TS happy until trainees implement:
    <tr>
      <td>/* brand */</td>
      <td>/* model */</td>
      <td>/* price */</td>
    </tr>
  );
}
