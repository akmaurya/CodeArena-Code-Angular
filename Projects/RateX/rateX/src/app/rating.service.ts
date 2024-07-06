import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigDataService } from './config-data.service';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private baseUrl = 'http://192.168.1.102:8080';

  constructor(private http: HttpClient, private configService: ConfigDataService) { }

  getRatings() {
    return this.http.get(this.baseUrl+"/api/ratings");
  }

  addRating(rating: any) {
    return this.http.post(`${this.baseUrl}/ratings`, rating);
  }
}
