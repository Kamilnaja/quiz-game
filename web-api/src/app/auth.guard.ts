import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './services/auth.Service';

@Injectable()
export class AuthGuard implements CanActivate {
    base_url: string;
    constructor (
        private router: Router,
        private authService: AuthService
    ) {}
    canActivate () {
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
        //  this.router.navigate['/'];
         return false;
        }
    }
}
