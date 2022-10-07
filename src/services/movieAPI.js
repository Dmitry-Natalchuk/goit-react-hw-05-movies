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
  try {
    const response = await instance.get('/search/movie', {
      params: query,
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const getTrendingMovies = async () => {
  try {
    const response = await instance.get('/trending/movie/day');
    const { data } = response;
    console.log(response);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMoviesDetails = async movieId => {
  try {
    const response = await instance.get(`/movies/${movieId}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMoviesCast = async movieId => {
  try {
    const response = await instance.get(`/movies/${movieId}/cast`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMoviesReviews = async movieId => {
  try {
    const response = await instance.get(`/movies/${movieId}/reviews`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
