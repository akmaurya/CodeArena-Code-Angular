import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://your-api-url.com';

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(`${this.baseUrl}/categories`);
  }

  getCategoryById(id: string) {
    return this.http.get(`${this.baseUrl}/categories/${id}`);
  }
}
