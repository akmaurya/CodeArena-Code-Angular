import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private bollywoodUrl = 'assets/data/bollywood.json';
  private hollywoodUrl = 'assets/data/hollywood.json';
  // private southUrl = 'assets/data/south.json';
  // private shortMoviesUrl = 'assets/data/short-movies.json';

  constructor(private http: HttpClient) {}

  searchMovie(query: string): Observable<any> {
    return forkJoin([
      this.http.get<any[]>(this.bollywoodUrl),
      this.http.get<any[]>(this.hollywoodUrl)
      // this.http.get<any[]>(this.southUrl),
      // this.http.get<any[]>(this.shortMoviesUrl)
    ]).pipe(
      map(([bollywood, hollywood]) => {
        return {
          bollywood: this.findMovie(bollywood, query),
          hollywood: this.findMovie(hollywood, query)
          // south: this.findMovie(south, query),
          // shortMovies: this.findMovie(shortMovies, query)
        };
      }),
      catchError(error => {
        console.error('Error fetching movie data', error);
        return of({});
      })
    );
  }

  private findMovie(movies: any[], query: string): any {
    return movies.find(movie => movie.Name.toLowerCase().includes(query.toLowerCase()));
  }
}
