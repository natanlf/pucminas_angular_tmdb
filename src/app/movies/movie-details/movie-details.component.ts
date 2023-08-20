import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/Movie';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie = {} as Movie;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMovieIdByUrl();
  }

  getMovieIdByUrl() {
    this.route.params.subscribe( ({ id }) => {
      this.getMovie(id);
    });
  }

  getMovie(movieId: number) {
    this.moviesService.getMovieDetail(movieId)
    .subscribe( (movie) => {
      this.movie = movie;
    })
  }
}
