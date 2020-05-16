import defaultApi from "./defaultApi";

const API_KEY = `key=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const getMovieList = (movieNm: string) => {
  return defaultApi.get(
    `movie/searchMovieList.json?key=${API_KEY}&movieNm=${movieNm}`
  );
};

export const getMovieInfo = (movieNm: string) => {
  return defaultApi.get(
    `movie/searchMovieInfo.json?${API_KEY}&movieNm=${movieNm}`
  );
};
