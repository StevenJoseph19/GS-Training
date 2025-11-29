
import { NextResponse } from 'next/server';

export async function GET() {
  const data = [
    { id: 1, brand: 'Toyota', model: 'Corolla', price: 9500, photo: 'toyota-corolla.jpg' },
    { id: 2, brand: 'Honda', model: 'Civic', price: 12000, photo: '' },
    { id: 3, brand: 'Tesla', model: 'Model 3', price: 32000, photo: 'tesla-model3.jpg' },
  ];
  return NextResponse.json(data);
}
