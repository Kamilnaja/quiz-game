import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {
    constructor() {}

    authenticateUser(username: string, password: string) {
        localStorage.setItem('access_token', 'jwt_token');
    }

    logout(){
        localStorage.removeItem('access_token');
    }

    isAuthenticated() {
        const token = localStorage.getItem('access_token');
            if (token) {
                return true;
            }
            return false;
    }
}
