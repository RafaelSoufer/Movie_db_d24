import {RootState} from '../store';

export const moviesSelector = (state: RootState) => state.movies.movies;
export const movieDetailSelector = (state: RootState) =>
  state.movies.movie_detail;
export const movieSearchByTitleSelector = (state: RootState) =>
  state.movies.search_result;

export const moviesRequestSelector = (state: RootState) =>
  state.movies.requests;

export const mainMoviesRequestSelector = (state: RootState) =>
  state.movies.requests;
