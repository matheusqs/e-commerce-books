import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  private isAuthenticated = false;

  constructor() {}

  public canActivate(): boolean {
    return this.isAuthenticated;
  }

  public onLogin(): void {
    this.isAuthenticated = true;
  }

  public onLogout(): void {
    this.isAuthenticated = false;
  }
}
