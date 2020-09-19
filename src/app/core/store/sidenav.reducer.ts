import { createReducer, on } from '@ngrx/store';
import { open, close } from './sidenav.actions';

export const initialState = false;

// tslint:disable-next-line: variable-name
const _sidenavReducer = createReducer(
  initialState,
  on(open, () => true),
  on(close, () => false)
);

export function sidenavReducer(state, action): boolean {
  return _sidenavReducer(state, action);
}
