import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './pages/apropos/apropos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuestionComponent } from './pages/question/question.component';

export const routes: Routes = [
    { path: 'apropos', component: AproposComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', component: AccueilComponent },
    { path: 'quiz', component: QuizComponent },
    { path: 'quiz/:id', component: QuestionComponent },
    { path: '', redirectTo: '/users', pathMatch: 'full' }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }