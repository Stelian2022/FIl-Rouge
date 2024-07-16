import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    // Example using fetch for a dummy POST request (You might want to replace this with actual auth logic)
    fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: this.username, password: this.password })
    })
    .then((response: Response) => response.json())
    .then((json: any) => {
      console.log(json);
      // If you had a real API, you might call `this.login()` here.
      this.login();
    })
    .catch((error: any) => {
      console.error('Error:', error);
      this.loginError = true;
    });
  }

  login(): void {
   if(this.username === 'admin' && this.password === 'password'){
    this.router.navigate(['/dashboardAdmin']);
   } else {
    alert('Invalid username or password');
   }
  }
}
