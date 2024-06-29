import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AgenciesComponent } from './pages/admin/agencies/agencies.component';
import { CandidatesComponent } from './pages/admin/candidates/candidates.component';
import { QuizService } from './services/quiz.service';
import { EmailService } from './services/email.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CandidatesComponent,
    AgenciesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    UserListComponent
   
  ],
  providers: [AuthService, AuthGuard,QuizService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }

