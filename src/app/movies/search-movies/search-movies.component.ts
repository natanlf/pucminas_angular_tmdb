import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent {
  @Output() onSearch = new EventEmitter<string>();
  @Output() onFormReset = new EventEmitter();

  searchMovie: string = '';

  onInputQuery() {
    this.onSearch.emit(this.searchMovie);
  }

  onSearchReset() {
    this.onFormReset.emit();
  }
}
