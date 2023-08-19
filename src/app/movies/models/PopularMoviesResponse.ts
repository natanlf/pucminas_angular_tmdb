import { MovieOverview } from "./MovieOverview";

export interface MovieHttpResult {
  page: number;
  results: Array<MovieOverview>;
  total_pages: number;
  total_results: number;
}
