
export type House = {
  id: number;
  address: string;
  city: string;
  price: number;
};

export const HOUSES: House[] = [
  { id: 1, address: '12 Ocean View',     city: 'San Diego', price: 950000 },
  { id: 2, address: '44 Rosewood Lane',  city: 'Austin',    price: 650000 },
  { id: 3, address: '7 Maple Street',    city: 'Boston',    price: 720000 }
];
