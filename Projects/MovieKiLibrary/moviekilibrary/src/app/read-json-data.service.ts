import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadJsonDataService {

  // private jsonUrl = 'assets/data.json';
  constructor(private http: HttpClient) { }

  getTiles(jsonUrl:string): Observable<any> {
    return this.http.get(jsonUrl);
  }
}
