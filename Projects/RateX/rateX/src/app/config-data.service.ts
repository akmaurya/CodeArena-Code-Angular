import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigDataService {
  private configUrl = 'assets/config/configData.json';
  private configData: any;

  constructor(private http: HttpClient) {}

  loadConfig(): Observable<any> {
    return this.http.get(this.configUrl);
  }

  getConfigData() {
    return this.configData;
  }

  setConfigData(data: any) {
    this.configData = data;
  }
}
