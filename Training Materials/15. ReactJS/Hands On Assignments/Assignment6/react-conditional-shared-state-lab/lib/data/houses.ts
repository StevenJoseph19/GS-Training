
export type House = { id: number; address: string; city: string; price: number; photo?: string };

// TODO: Provide 3 houses; at least one with a photo filename (e.g., 'house1')
export const LIST: House[] = [
  { id: 11, address: '5 Golden Meadow', city: 'Raleigh', price: 590000, photo: 'house1' },
  { id: 12, address: '231 Pine Ridge', city: 'Denver', price: 680000 },
  { id: 13, address: '88 Lake Shore', city: 'Chicago', price: 730000 }
];
