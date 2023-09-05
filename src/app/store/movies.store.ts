import { MovieOverview } from "../movies/models/MovieOverview";

export interface MoviesStore {
    favorites: MovieOverview[],
}

export const initialState: MoviesStore = {
    favorites: []
}