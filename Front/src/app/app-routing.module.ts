import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuestionComponent } from './pages/question/question.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth.guard';
import { DashbordAdminComponent } from './pages/dashbord-admin/dashbord-admin.component';
import { DashbordAgenceComponent } from './pages/dashbord-agence/dashbord-agence.component';
import { DashbordCandidatComponent } from './pages/dashbord-candidat/dashbord-candidat.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { AdminDetailComponent } from './pages/admin-detail/admin-detail.component';
import { AdminModificationComponent } from './pages/admin-modification/admin-modification.component';

const routes: Routes = [
  { path: 'quiz', component: QuizComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: AccueilComponent },
  { path: 'quiz/:id', component: QuestionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'accueil', component: AccueilComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' } ,
  { path: 'dashbordAdmin', component: DashbordAdminComponent},
  { path: 'dashbordAgence', component: DashbordAgenceComponent},
  { path: 'dashboardCandidat', component: DashbordCandidatComponent},
  { path: 'inscription', component: InscriptionComponent},
  { path: 'adminDetail', component: AdminDetailComponent},
  { path: 'adminModification', component: AdminModificationComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

