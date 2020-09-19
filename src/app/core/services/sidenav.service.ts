import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { close, open } from '../store/sidenav.actions';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  public sidenav$: Observable<boolean>;

  constructor(private store: Store<{ sidenav: boolean }>) {
    this.sidenav$ = store.pipe(select('sidenav'));
  }

  public open(): void {
    this.store.dispatch(open());
  }

  public close(): void {
    this.store.dispatch(close());
  }
}
