import { createReducer } from "typesafe-actions";
import { MovieTodayAction, MovieTodayState } from "./types";
import {
  GET_MOVIE_TODAY_INFO,
  GET_MOVIE_TODAY_INFO_SUCCESS,
  GET_MOVIE_TODAY_INFO_ERROR,
} from "./actions";

const initialState: MovieTodayState = {
  TodayInfo: {
    loading: false,
    error: null,
    dailyBoxOfficeList[]: null,
  },
};

const MovieInfo = createReducer<MovieTodayState, MovieTodayAction>(
  initialState,
  {
    [GET_MOVIE_TODAY_INFO]: (state) => ({
      ...state,
      TodayInfo: {
        loading: true,
        error: null,
        data: action.payload,
      },
    }),
    [GET_MOVIE_TODAY_INFO_SUCCESS]: (state, action) => ({
      ...state,
      TodayInfo: {
        loading: false,
        error: null,
        data: action.payload,
      },
    }),
    [GET_MOVIE_TODAY_INFO_ERROR]: (state, action) => ({
      ...state,
      TodayInfo: {
        loading: false,
        error: action.payload,
        data: null,
      },
    }),
  }
);

export default MovieInfo;
