import {API} from './API';

export interface IMovieData {
  page: number;
  results: IMovieResult[];
  total_pages: number;
  total_results: number;
}

//TODO type correctly
export interface IMovieResult {
  id: number;
  title: string;
}

const API_KEY = '0a74c88aa8c661e80f8512cc9947a908';

export const Get = {
  getMovies: () => API.get(`movie/popular`, {}),
  //   getSingleMovie: (id: string) => API.get(`api/movie/${id}`, {}),
};
