import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { MovieOverview } from '../models/MovieOverview';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {

  public movies: Array<MovieOverview> = [];
  public popularMovies: Array<MovieOverview> = [];

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe((data) => {
      this.movies = data['popularMovies'];
      this.popularMovies = data['popularMovies'];
    })
  }



  onMoviesSearch(movieName: string) {
    this.moviesService.searchMoviesByName(movieName)
    .subscribe(movies => this.movies = movies);
  }

  onSearchReset() {
    this.movies = this.popularMovies;
  }

}
