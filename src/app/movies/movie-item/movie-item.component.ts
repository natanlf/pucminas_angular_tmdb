import { Component, Input } from '@angular/core';
import { MovieOverview } from '../models/MovieOverview';
import { Store } from '@ngrx/store';
import { addFavorite } from 'src/app/store/actions/movies.action';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {

  @Input() movie!: MovieOverview;

  constructor(private store: Store) {}

  addToFavorite() {
    this.store.dispatch(addFavorite({ movie: this.movie }))
  }
}
