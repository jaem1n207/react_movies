import { MovieState } from "./types";
import { Dispatch } from "redux";
import * as api from "../../api/movie";

export const GET_MOVIE_REQUEST = "movieInfo/GET_MOVIE_REQUEST";
export const GET_MOVIE_SUCCESS = "movieInfo/GET_MOVIE_SUCCESS";
export const GET_MOVIE_FAIL = "movieInfo/GET_MOVIE_FAIL";

export const GET_MOVIE_INFO_REQUEST = "movieInfo/GET_MOVIE_INFO_REQUEST";
export const GET_MOVIE_INFO_SUCCESS = "movieInfo/GET_MOVIE_INFO_SUCCESS";
export const GET_MOVIE_INFO_FAIL = "movieInfo/GET_MOVIE_INFO_FAIL";

export const getMovieRequest = (payload: MovieState) => ({
  type: GET_MOVIE_REQUEST,
  payload,
});

export const getMovieSuccess = (payload: MovieState) => ({
  type: GET_MOVIE_SUCCESS,
  payload,
});

export const getMovieFail = (payload: MovieState) => ({
  type: GET_MOVIE_FAIL,
  payload,
});

export const getMovieInfoRequest = (payload: MovieState) => ({
  type: GET_MOVIE_INFO_REQUEST,
  payload,
});

export const getMovieInfoSuccess = (payload: MovieState) => ({
  type: GET_MOVIE_INFO_SUCCESS,
  payload,
});

export const getMovieInfoFail = (payload: MovieState) => ({
  type: GET_MOVIE_INFO_FAIL,
  payload,
});

export const getMovies = (movieNm: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getMovieRequest({ type: "request", loading: true }));

      const result = await api.getMovieList(movieNm);
      const movies = result.data.movieListResult.movieList;
      dispatch(getMovieSuccess({ type: "success", loading: false, movies }));
    } catch (e) {
      dispatch(getMovieFail({ type: "fail", loading: false }));
    }
  };
};

export const getMovieInfo = (movieCd: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getMovieInfoRequest({ type: "request", loading: true }));

      const result = await api.getMovieInfo(movieCd);
      const movieInfo = result.data.MovieInfoListResult.movieInfo;
      dispatch(
        getMovieInfoSuccess({ type: "success", loading: false, movieInfo })
      );
    } catch (e) {
      dispatch(getMovieInfoFail({ type: "fail", loading: false }));
    }
  };
};
