import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) { } // Inject HttpClient

  login(email: string, password: string): Observable<any> {
    return new Observable((observer) => {
      if (email === 'user' && password === 'password') {
        this.isAuthenticated.next(true);
        this.router.navigate(['accueil']).catch(err => {
          console.error('Navigation to home failed!', err);
          observer.error(err);
        });
        observer.next(undefined);
      } else {
        this.isAuthenticated.next(false);
        observer.error('Invalid email or password');
      }
    });
  }

  registerUser(email: string, password: string): Observable<any> {
    return new Observable((observer) => {
      // Assuming registration logic is similar to login for simplicity
      if (email === 'newUser' && password === 'newPassword') {
        this.isAuthenticated.next(true);
        this.router.navigate(['accueil']).catch(err => {
          console.error('Navigation to home failed after registration!', err);
          observer.error(err);
        });
        observer.next(undefined);
      } else {
        this.isAuthenticated.next(false);
        observer.error('Registration failed');
      }
    });
  }

  logout(): void {
    this.isAuthenticated.next(false);
    this.router.navigate(['login']).catch(err => {
      console.error('Navigation to login failed!', err);
    });
  }

  isLoggedIn(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }
}
