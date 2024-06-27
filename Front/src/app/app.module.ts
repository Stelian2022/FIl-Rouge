import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    LoginComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    UserListComponent
   
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]

})
export class AppModule { }

