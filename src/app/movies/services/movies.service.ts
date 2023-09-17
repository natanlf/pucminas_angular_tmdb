import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieHttpResult } from '../models/PopularMoviesResponse';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { MovieOverview } from '../models/MovieOverview';
import { Movie } from '../models/Movie';

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
      retry(3),
      catchError(this.handleApiError)
    );
  }

  getMovieDetail(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(`movie/${movieId}`);
  }

  searchMoviesByName(movieName: string): Observable<Array<MovieOverview>> {
    return this.http.get<MovieHttpResult>(`search/movie?query=${movieName}`)
      .pipe(
        map(response => response.results)
      );
  }

  private handleApiError(error: HttpErrorResponse) {
    if(error.status === 0) {
      console.error("Client-side or network error has happend")
    } else {
      console.error(`The API returned with error ${error.status}. Body was: ${error.error}`)
    }

    return throwError(() => new Error("Ocorreu um erro na requisição"));
  }
}
