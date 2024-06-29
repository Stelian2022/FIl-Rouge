import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://your-api-url.com/send-quiz'; // replace with your actual API URL

  constructor(private http: HttpClient) {}

  sendQuiz(quiz: Quiz, email: string): Observable<any> {
    const payload = { quiz, email };
    return this.http.post(this.apiUrl, payload);
  }
}
