import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web School';
  isLoggedIn = false; // Exemple : État de connexion
  isAdmin = true; // Exemple : Est admin
  isAgency = true; // Exemple : Est agence
  isMenuOpen = false; // Pour contrôler l'état du menu
  
  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  logout() {
    // Actions de déconnexion ici
    this.isLoggedIn = false;
    // Exemple de redirection vers la page d'accueil après la déconnexion
    this.router.navigate(['/']);
  }
}


