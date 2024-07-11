import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private http: HttpClient) { }

  login(email: string, password: string): void {
    this.http.post<Observable<Response>>('http://localhost:5032/Identity/Account/Login', {email, password}).subscribe( (response: any) => {
      if (response.ok){
        this.isAuthenticated.next(true);
        this.router.navigate(['accueil'])
      }
    }
    )}
    registerUser(email: string, password: string): Observable<any> {
      return new Observable((observer) => {
        // Simulate registration logic
        if (email === 'newUser' && password === 'newPassword') {
          this.isAuthenticated.next(true);
          this.router.navigate(['accueil']).then(
            () => observer.next(undefined),
            (err) => {
              console.error('Navigation to home failed after registration!', err);
              observer.error(err);
            }
          );
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


interface Response {
  ok: boolean
}
