import { createAction, props } from '@ngrx/store';
import { Book } from '../../models/book';

export const addBook = createAction('[CART] Add Book', props<{ book: Book }>());
export const removeBook = createAction(
  '[CART] Remove Book',
  props<{ id: string }>()
);
