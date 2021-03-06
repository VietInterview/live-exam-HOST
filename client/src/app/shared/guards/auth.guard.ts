import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private auth: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.auth.CurrentUser.id && !this.auth.CurrentUser.banned) {
            // logged in so return true
            return true;
        }
        this.router.navigate(['/auth'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
