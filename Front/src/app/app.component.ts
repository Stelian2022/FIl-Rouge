import { Component } from '@angular/core';

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

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    
    if (menuItems) {
      menuItems.classList.toggle('active');
    }
  }
logout() {
throw new Error('Method not implemented.');
}

}

