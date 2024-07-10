import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './pages/apropos/apropos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuestionComponent } from './pages/question/question.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AgenciesComponent } from './pages/admin/agencies/agencies.component';
import { CandidatesComponent } from './pages/admin/candidates/candidates.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { DashbordAdminComponent } from './pages/dashbord-admin/dashbord-admin.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';


export const routes: Routes = [
  { path: 'apropos', component: AproposComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'quiz/:id', component: QuestionComponent },
  { path: 'users', component: UserListComponent },
  { path: 'dashbordAdmin', component: DashbordAdminComponent, canActivate: [AuthGuard] },
  { path: 'admin/agencies', component: AgenciesComponent, canActivate: [AuthGuard] },
  { path: 'admin/candidates', component: CandidatesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent},

  { path: '', redirectTo: '/accueil', pathMatch: 'full' }, // Redirection vers accueil par défaut
  { path: '**', redirectTo: '/accueil' } // Redirection pour toute autre route invalide vers accueil
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
