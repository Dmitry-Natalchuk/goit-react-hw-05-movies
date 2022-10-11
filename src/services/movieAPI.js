import axios from 'axios';

const API_KEY = '171815f7c9e508fe2a53a40eb2dd3583';
const BASE_URL = 'https://api.themoviedb.org/3';

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getSearchMovies = async query => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query,
    },
  });
  return data.results;
};

export const getTrendingMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const getMoviesDetails = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}`);
  return data;
};

export const getMoviesCast = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/credits`);
  return data;
};

export const getMoviesReviews = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/reviews`);
  return data;
};
