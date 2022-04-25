import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthreService } from './../services/authre.service';
@Injectable({
  providedIn: 'root'
})
export class AuthreGuard implements CanActivate {
 constructor(private router: Router, private auth: AuthreService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.auth.isLoggedIn()) {
        this.router.navigate(['/signinre']);
      }
      return this.auth.isLoggedIn();
    }
  
}
