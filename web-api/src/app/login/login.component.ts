import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.Service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login () {
    localStorage.setItem('access_token', 'jwt_token');
    this.router.navigate(['/addquestion']);
  }

  logout () {
    this.authService.logout();
  }
}
