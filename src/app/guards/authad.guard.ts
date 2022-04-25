import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthadService } from './../services/authad.service';
@Injectable({
  providedIn: 'root'
})
export class AuthadGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthadService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.auth.isLoggedIn()) {
        this.router.navigate(['/siginad']);
      }
      return this.auth.isLoggedIn();
    }
}
