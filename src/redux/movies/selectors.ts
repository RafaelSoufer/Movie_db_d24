import {RootState} from '../store';

export const moviesSelector = (state: RootState) => state.movies.movies;

export const moviesRequestSelector = (state: RootState) =>
  state.movies.requests;
