import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/api/users'; // Remplacez par l'URL de votre API

  admins: User[] = [
    {id: 1, firstName: "Toto", lastName: "Doe", email: "toto@gmail.com"},
    {id: 2, firstName: "Tata", lastName: "Doe", email: "tata@gmail.com"},
    {id: 3, firstName: "Titi", lastName: "Doe", email: "titi@gmail.com"},
  ];


  constructor(private http: HttpClient) { }
  
  list(): User[] { //normalement c'est un observable --rxjs
    return this.admins; //normalement return of(this.admins) --rxjs
  }

getAdmin(id: number): User {
  return this.admins[id - 1];
}



  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(id: number, user: User): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

