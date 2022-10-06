import axios from 'axios';

const API_KEY = '171815f7c9e508fe2a53a40eb2dd3583';
const BASE_URL = 'https://www.themoviedb.org/3';

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
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

/* export const getDetailsMovies = async filmId => {
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
}; */
