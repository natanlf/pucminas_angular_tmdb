import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieHttpResult } from '../models/PopularMoviesResponse';
import { Observable, map, retry } from 'rxjs';
import { MovieOverview } from '../models/MovieOverview';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<MovieOverview[]> {
    return this.http.get<MovieHttpResult>('movie/popular')
    .pipe(
      map(data => {
        return data.results
      }),
      retry(3)
    );
  }
}
