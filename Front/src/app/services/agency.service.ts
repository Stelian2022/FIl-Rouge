import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {
  private apiUrl = 'http://localhost:5038/agencies';

  constructor(private http: HttpClient) { }

  getAgencies(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createAgency(agency: any): Observable<any> {
    return this.http.post(this.apiUrl, agency);
  }

  updateAgency(id: string, agency: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, agency);
  }

  deleteAgency(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}