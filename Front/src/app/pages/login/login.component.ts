import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}
  login(): void {
    this.authService.login(this.username, this.password).then(() => {
      this.router.navigate(['/accueil']);
    }).catch(() => {
        this.loginError = true;
      }
    );
  }
}
