
export type House = {
  id: number;
  address: string;
  city: string;
  price: number;
};

export const STOCK: House[] = [
  { id: 101, address: '9 Cedar Grove',    city: 'Seattle',     price: 810000 },
  { id: 102, address: '231 Pine Ridge',   city: 'Denver',      price: 680000 },
  { id: 103, address: '88 Lake Shore',    city: 'Chicago',     price: 730000 },
  { id: 104, address: '5 Golden Meadow',  city: 'Raleigh',     price: 590000 }
];
