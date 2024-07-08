import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router, private userService: UserService) {}
  login(): void {
    this.authService.login(this.username, this.password).then(() => {
      this.router.navigate(['/accueil']);
    }).catch(() => {
        this.loginError = true;
      }
    );
  }
}
