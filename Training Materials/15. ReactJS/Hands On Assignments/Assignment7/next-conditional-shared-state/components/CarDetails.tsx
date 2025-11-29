"use client";
// TODO: Import Image from 'next/image' when implementing image rendering.
// TODO: Import type { Car } from '@/lib/types' for typing.
// TODO: Import { defaultPhoto } from '@/helpers/defaultPhoto' to use as fallback.

/**
 * CarDetails (ASSIGNMENT SKELETON)
 * --------------------------------
 * Renders details for the selected car, a Back button, and a photo.
 *
 * TODOs:
 * 1) Compute `src`: if `car.photo` is truthy -> `/carImages/${car.photo}` else `defaultPhoto`.
 * 2) Render a Back button with `aria-label="back"` that calls `onBack` when clicked.
 * 3) Render a heading that shows `brand + model`, and a paragraph showing the formatted price.
 * 4) Use Next's <Image> to render the photo (remember to provide width & height).
 */

type Props = {
  // TODO: use the `Car` type from '@/lib/types'
  car: any; // replace `any` with `Car`
  onBack: () => void;
};

export default function CarDetails({ car, onBack }: Props) {
  // TODO(1): Derive `src` from `car.photo` with fallback to `defaultPhoto`
  // const src = ...;

  return (
    <section>
      {/* TODO(2): Back button with aria-label="back" that triggers onBack */}
      {/* <button ...>← Back to list</button> */}

      {/* TODO(3): Heading (brand + model) and price paragraph */}
      {/* <h2>...</h2> */}
      {/* <p>Price: ...</p> */}

      {/* TODO(4): Render the image with <Image src={src} alt={`${car.brand} ${car.model}`} width={300} height={200} /> */}
      {/* <Image ... /> */}
    </section>
  );
}
