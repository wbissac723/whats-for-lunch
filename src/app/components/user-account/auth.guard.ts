import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { getLoggedState } from '../login/store/login.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private authenticated: boolean;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    this.store.select(getLoggedState)
      .subscribe((status: boolean) => this.authenticated = status);
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (this.authenticated) {
        return true;
      }

      // return user back to login page
      this.router.navigate(['/login']);
      return false;
  }
}
