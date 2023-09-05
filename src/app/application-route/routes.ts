import { Routes } from "@angular/router";
import { MoviesListComponent } from "../movies/movies-list/movies-list.component";
import { MovieDetailsComponent } from "../movies/movie-details/movie-details.component";
import { FavoritesComponent } from "../favorites/favorites/favorites.component";

export const routes: Routes = [
    {
        path: "",
        component: MoviesListComponent
    },
    {
        path: "movie/:id",
        component: MovieDetailsComponent
    },
    {
        path: "favorites",
        component: FavoritesComponent
    }
]