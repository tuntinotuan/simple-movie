// https://api.themoviedb.org/3/movie/now_playing?api_key=3d822c02b85d7e4e8fb9dd03e653e84a
// https://api.themoviedb.org/3/movie/550?api_key=3d822c02b85d7e4e8fb9dd03e653e84a
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "3d822c02b85d7e4e8fb9dd03e653e84a";
export const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbEndpointSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdbApi = {
  getMovieList: (type, page = 1) =>
    `${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieMeta: (movieId, type) =>
    `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
  getMovieSearch: (query, page) =>
    `${tmdbEndpointSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
  image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
