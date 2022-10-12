const DEFAULT_IMG =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIZxcqjHSXy3woDzxKGajAzwWnoc96DXFgOFxhb0r5rCn61zO&s';
const BASE_IMG = 'https://image.tmdb.org/t/p/w500';

export const getPosterImg = path =>
  path ? `${BASE_IMG}${path}` : `${DEFAULT_IMG}`;
