import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuestionComponent } from './pages/question/question.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminDetailComponent } from './pages/admin-detail/admin-detail.component';
import { AdminModificationComponent } from './pages/admin-modification/admin-modification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    RouterOutlet,
    AccueilComponent,
    AproposComponent,
    ContactComponent,
    HttpClientModule,
    QuizComponent,
    QuestionComponent,
    AdminDetailComponent,
    AdminModificationComponent
  ],
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

