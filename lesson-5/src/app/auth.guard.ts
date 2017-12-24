import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthGuard implements CanActivate {

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(
    private router: Router,
    private cookieSvc: CookieService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const accessToken = this.cookieSvc.get('accessToken');
    if (!accessToken) {
      this.router.navigate(['/login']);
      return false;
    }

    if (/\/admin\/?.*/.test(state.url)) {
      const userInfo: any = this.jwtHelper.decodeToken(accessToken);
      if (!userInfo.admin) {
        this.router.navigate(['/member']);
        return false;
      }
    }

    return true;
  }
}
