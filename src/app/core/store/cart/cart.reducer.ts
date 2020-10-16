import { Action, createReducer, on } from '@ngrx/store';
import { Book } from '../../models/book';
import * as CartActions from './cart.actions';

export const initialState: Book[] = [];

const _cartReducer = createReducer(
  initialState,
  on(CartActions.addBook, (state, { book }) => [...state, book]),
  on(CartActions.removeBook, (state, { id }) =>
    state.filter((book) => book.id !== id)
  )
);

export function reducer(state: Book[] | undefined, action: Action): Book[] {
  return _cartReducer(state, action);
}
