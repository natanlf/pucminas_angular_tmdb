import { Injectable } from "@angular/core";
import { MoviesService } from "../services/movies.service";

@Injectable({
    providedIn: 'root'
})
export class CustomMoviesResolver {
    constructor(
        private moviesService: MoviesService
    ) {}

    getPopularMovies() {
        return this.moviesService.getPopularMovies();
    }
}