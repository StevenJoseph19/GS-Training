
import React from 'react';
import { render, screen } from '@testing-library/react';
import CarDetails from '@/components/CarDetails';

const car = { id: 9, brand: 'Tesla', model: 'Model S', price: 90000 };

test('renders default photo when missing', () => {
  render(<CarDetails car={car as any} onBack={() => {}} />);
  expect(screen.getByAltText('Tesla Model S')).toBeInTheDocument();
});
