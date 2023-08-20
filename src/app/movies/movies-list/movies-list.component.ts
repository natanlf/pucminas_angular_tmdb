import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { MovieOverview } from '../models/MovieOverview';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  public movies: Array<MovieOverview> = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.moviesService.getPopularMovies()
    .subscribe((movies) => {
      this.movies = movies;
    })
  }

  onMoviesSearch(movieName: string) {
    this.moviesService.searchMoviesByName(movieName)
    .subscribe(movies => this.movies = movies);
  }

  onSearchReset() {
    this.getPopularMovies();
  }

}
