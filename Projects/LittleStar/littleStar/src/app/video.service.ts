import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private baseUrl = 'http://your-api-url.com';

  constructor(private http: HttpClient) { }

  getVideos() {
    return this.http.get(`${this.baseUrl}/videos`);
  }

  getVideoById(id: string) {
    return this.http.get(`${this.baseUrl}/videos/${id}`);
  }
}
