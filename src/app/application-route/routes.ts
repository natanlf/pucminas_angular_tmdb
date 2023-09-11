import { Routes } from "@angular/router";
import { MoviesListComponent } from "../movies/movies-list/movies-list.component";
import { MovieDetailsComponent } from "../movies/movie-details/movie-details.component";
import { inject } from "@angular/core";
import { CustomMoviesResolver } from "../movies/resolvers/CustomMoviesResolver";

export const routes: Routes = [
    {
        path: "",
        component: MoviesListComponent
    },
    {
        path: "popular-movies",
        loadChildren: () =>
            import(
                '../movies/movies.module'
            ).then(m => m.MoviesModule),
            resolve: {
                popularMovies: () => inject(CustomMoviesResolver).getPopularMovies()
            },
            data: {
                preload: true
            }
    },
    {
        path: "movie/:id",
        component: MovieDetailsComponent
    },
    {
        path: "favorite-movies",
        loadChildren: () =>
            import(
                '../favorites/favorites.module'
            ).then(m => m.FavoritesModule),
            data: {
                preaload: false
            }
    }
]