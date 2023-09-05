import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MovieOverview } from 'src/app/movies/models/MovieOverview';
import { MoviesStore } from 'src/app/store/movies.store';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteObservable$: Observable<{ favorites: Array<MovieOverview> }>;
  favoriteList: Array<MovieOverview> = [];

  constructor(
    private store: Store<{favorites: MoviesStore}>) {
      this.favoriteObservable$ = this.store.pipe(select('favorites'));
  }

  ngOnInit(): void {
    
    this.favoriteObservable$.subscribe((data) => {
      this.favoriteList = this.favoriteList.concat(data.favorites)
    })
  }


}
