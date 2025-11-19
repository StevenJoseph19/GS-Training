
'use client';
import React, { Fragment, useState } from 'react';
import { HouseRow } from './HouseRow';

// TODO: Define the House type
type House = { id: number; address: string; country: string; price: number };

// TODO: Provide two starter houses (ids 1 and 2)
const INITIAL: House[] = [
  { id: 1, address: '12 Ocean View', country: 'USA', price: 950000 },
  { id: 2, address: '44 Rosewood Lane', country: 'USA', price: 650000 },
];

export function HouseList() {
  // TODO: Initialize state: const [houses, setHouses] = useState<House[]>(INITIAL);

  // TODO: Implement addHouse() to append id=3
  function addHouse() {
    // const next: House = { id: 3, address: 'New Home Ave', country: 'USA', price: 720000 };
    // setHouses([...houses, next]);
  }

  return (
    <Fragment>
      {/* TODO: Show Count: {houses.length} in data-testid="count" */}
      <table>
        <thead>
          <tr>
            <th>Address</th><th>Country</th><th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: Map houses to <HouseRow .../>; remember key={house.id} */}
        </tbody>
      </table>
      <button data-testid="add" onClick={addHouse}>Add House</button>
    </Fragment>
  );
}
