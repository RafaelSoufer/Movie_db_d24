import axios from 'axios';

export const BASE_URL = 'https://api.themoviedb.org/3/';
export const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

export const API = axios.create({
  //NOTE: This token should be get on a safer way and not hardocoded on FE code, this is here for demosntration purposes only
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmVlN2M2ZTJiMmU2M2U0ZDljYzk0NTg0Nzg2Yjg0NCIsInN1YiI6IjYwYTNjNDAyZTI3MjYwMDA1OGI3NjE2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8x6dXQC2ua5DW8AawnPaUjC80h857lVI7yixv0gPL-A`,
  },
  baseURL: BASE_URL,
  timeout: 20000,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {};
