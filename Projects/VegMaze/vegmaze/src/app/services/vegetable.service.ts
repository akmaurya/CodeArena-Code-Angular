import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vegetable } from '../models/vegetable.model';

@Injectable({
  providedIn: 'root'
})
export class VegetableService {
  private apiUrl = 'http://localhost:8080/vegetables';

  constructor(private http: HttpClient) { }

  getVegetable(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getvegetable/${id}`);
  }

  getVegetables(): Observable<Vegetable[]> {
    return this.http.get<Vegetable[]>(`${this.apiUrl}/getvegetables`);
  }
}
