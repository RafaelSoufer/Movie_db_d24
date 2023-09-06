import {API} from './API';

export interface IMovieData {
  page: number;
  results: IMovieResult[];
  total_pages: number;
  total_results: number;
}

//TODO type correctly
export interface IMovieResult {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const API_KEY = '0a74c88aa8c661e80f8512cc9947a908';

export const Get = {
  getMovies: () => API.get(`movie/popular`, {}),
  //   getSingleMovie: (id: string) => API.get(`api/movie/${id}`, {}),
};
