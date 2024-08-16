import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getEndpoints(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/debug/endpoints`);
  }
}
