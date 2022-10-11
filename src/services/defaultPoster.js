const DEFAULT_IMG =
  'https://icon-library.com/icon/not-found-icon-4.html.html>Not Found Icon # 416177';
const BASE_IMG = 'https://image.tmdb.org/t/p/w500';

export const getPosterImg = path =>
  path ? `${BASE_IMG}${path}` : `${DEFAULT_IMG}`;
