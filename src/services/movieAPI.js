import axios from 'axios';

const API_KEY = '261044873aed5478268883353392d3c3';
axios.defaults.baseURL = 'https://www.themoviedb.org/3';

export const getSearchMovies = async query => {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}&include_adult=true`
    );
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`/trending/all/week?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getDetailsMovies = async filmId => {
  try {
    const response = await axios.get(
      `/movie/${filmId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getCastMovies = async filmId => {
  try {
    const response = await axios.get(`
      /movie/${filmId}/credits?api_key=${API_KEY}&language=en-US
        `);
    return response.data.cast;
  } catch (error) {
    console.log(error.message);
  }
};

export const getReviewsMovies = async filmId => {
  try {
    const response = await axios.get(
      `/movie/${filmId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
};
