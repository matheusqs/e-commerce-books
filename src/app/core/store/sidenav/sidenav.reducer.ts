import { createReducer, on } from '@ngrx/store';
import { open, close } from './sidenav.actions';

export const initialState = false;

const _sidenavReducer = createReducer(
  initialState,
  on(open, () => true),
  on(close, () => false)
);

export function reducer(state, action): boolean {
  return _sidenavReducer(state, action);
}
