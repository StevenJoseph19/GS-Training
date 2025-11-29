import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

/** Assignment 1 — Shopping Cart slice (STRICT STUB)
 * All implementation removed.
 * TODOs:
 * - Implement reducers: addItem, increment, decrement, removeItem, clearCart
 * - Ensure immutable updates (Immer via RTK) & strong typing
 * - Implement memoized selectors in a separate file once reducers exist
 */

export interface CartItem { id: string; name: string; price: number; quantity: number }
interface CartState { items: Record<string, CartItem> }
const initialState: CartState = { items: {} };

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // TODO: addItem — create item or increase quantity
    addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      // TODO: implement
    },
    // TODO: increment — increase quantity for id
    increment: (state, action: PayloadAction<{ id: string }>) => {
      // TODO: implement
    },
    // TODO: decrement — decrease quantity; remove when qty <= 0
    decrement: (state, action: PayloadAction<{ id: string }>) => {
      // TODO: implement
    },
    // TODO: removeItem — delete item by id
    removeItem: (state, action: PayloadAction<{ id: string }>) => {
      // TODO: implement
    },
    // TODO: clearCart — remove all items
    clearCart: (state) => {
      // TODO: implement
    },
  },
});

export const { addItem, increment, decrement, removeItem, clearCart } = slice.actions;
export default slice.reducer;

// NOTE: Selectors intentionally omitted in strict stub.
// TODO: Create memoized selectors (selectCartItems, selectTotalAmount) using Reselect once reducers exist.
