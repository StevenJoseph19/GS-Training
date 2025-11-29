import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';

// Store (stub): wires the cart slice only
export const store = configureStore({
  reducer: { cart: cartReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
