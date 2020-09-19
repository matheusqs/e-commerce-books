import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './core/services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(sidenavService: SidenavService) {
    sidenavService.sidenav$.subscribe((sidenavStatus) => {
      if (this.sidenav) {
        sidenavStatus ? this.sidenav.open() : this.sidenav.close();
      }
    });
  }
}
