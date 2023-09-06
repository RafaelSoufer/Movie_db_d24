import {configureStore, combineReducers} from '@reduxjs/toolkit';
import moviesSlice from './movies/moviesSlice';

export type AppDispatch = typeof store.dispatch;

const reducers = combineReducers({
  movies: moviesSlice,
});

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type IStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;

export default store;
