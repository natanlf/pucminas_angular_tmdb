import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.moviesService.getPopularMovies()
    .subscribe((movies) => {
      console.table(movies)
    })
  }

}
