import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../components/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private isAuthenticated: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      this.isAuthenticated = this.loginService.authenticated;

      if (this.isAuthenticated) {
        return true;
      }

      // return user back to login page if not authenticated
      this.router.navigate(['/login']);
      return false;
  }
}
