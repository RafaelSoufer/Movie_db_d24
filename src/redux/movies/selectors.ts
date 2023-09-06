import {RootState} from '../store';

export const moviesListSelector = (state: RootState) => state.movies.list;
