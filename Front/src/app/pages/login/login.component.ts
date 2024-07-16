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
loginError: any;
 
  constructor(private router: Router) {}

  onSubmit() {
    console.log("username : ", this.username);
    console.log("password : ", this.password);
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: this.username,
        body: this.password,
        userId: 1
      })
    })

      .then(response => response.json())
      .then(json => console.log(json))
  }
  onLogin(): void {
    console.log("Mot de passe saisi :", this.password); // Affiche le mot de passe saisi
    // Placeholder for real authentication logic
    if (this.username === 'admin' && this.password === 'password') {
      this.router.navigate(['/dashboardAdmin']);
    } else {
      alert('Identifiant ou mot de passe incorrect');
    }

}
}