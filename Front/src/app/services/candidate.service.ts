import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private apiUrl = 'http://your-api-url/candidates';

  constructor(private http: HttpClient) { }

  getCandidates(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createCandidate(candidate: any): Observable<any> {
    return this.http.post(this.apiUrl, candidate);
  }

  updateCandidate(id: string, candidate: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, candidate);
  }

  deleteCandidate(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}