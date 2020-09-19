import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidenavService } from 'src/app/core/services/sidenav.service';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent implements OnDestroy {
  private isOpenSidenav: boolean;
  private sidenavStateSubscription: Subscription;

  constructor(private sidenavService: SidenavService) {
    this.sidenavStateSubscription = this.sidenavService.sidenav$.subscribe(
      (sidenavState) => (this.isOpenSidenav = sidenavState)
    );
  }

  ngOnDestroy(): void {
    this.sidenavStateSubscription.unsubscribe();
  }

  public handleMenuClick(): void {
    this.isOpenSidenav
      ? this.sidenavService.close()
      : this.sidenavService.open();
  }
}
