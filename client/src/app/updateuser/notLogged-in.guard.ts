import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class NotLoggedInGuard implements CanActivate {
  constructor() {}

  canActivate(): boolean {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }
}
