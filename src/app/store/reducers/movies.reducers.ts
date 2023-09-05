import { createReducer, on } from "@ngrx/store";
import { initialState } from "../movies.store";
import { addFavorite, removeFavorite } from "../actions/movies.action";

export const favoriteReducer = createReducer(
    initialState,
    on(addFavorite, (state, { movie } ) => ({
        ...state,
        favorites: [...state.favorites, movie]
    })),
    on(removeFavorite, (state, { movie: { id } }) => ({
        ...state,
        favorites: state.favorites.filter( (movie) => movie.id !== id )
    }))
);