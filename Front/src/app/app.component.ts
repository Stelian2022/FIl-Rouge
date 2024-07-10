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
// import { AdminDetailComponent } from './pages/admin-detail/admin-detail.component';
// import { AdminModificationComponent } from './pages/admin-modification/admin-modification.component';
import { LoginComponent } from './pages/login/login.component';
import { AgenciesComponent } from './pages/admin/agencies/agencies.component';
import { CandidatesComponent } from './pages/admin/candidates/candidates.component';
import { DashbordAdminComponent } from './pages/dashbord-admin/dashbord-admin.component';
import { AppAdminSidebarComponent } from './pages/admin/admin-sidebar/admin-sidebar.component';

import { InscriptionComponent } from './pages/inscription/inscription.component';

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
    AgenciesComponent,
    CandidatesComponent,
    DashbordAdminComponent,
    AppAdminSidebarComponent,
      // AdminDetailComponent,
      // AdminModificationComponent,
    LoginComponent,
    InscriptionComponent
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

  }
}


