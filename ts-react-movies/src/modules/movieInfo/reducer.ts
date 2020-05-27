import {
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAIL,
  GET_MOVIE_INFO_REQUEST,
  GET_MOVIE_INFO_SUCCESS,
  GET_MOVIE_INFO_FAIL,
} from "./actions";
import { Action, MovieState } from "./types";
import produce from "immer";

const initialState: MovieState = {
  loading: false,
  movies: [],
  movieInfo: {},
  type: "",
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_MOVIE_REQUEST:
      return produce(state, (draft) => {
        draft.type = action.payload.type;
        draft.loading = action.payload.loading;
      });
    case GET_MOVIE_SUCCESS:
      return produce(state, (draft) => {
        draft.type = action.payload.type;
        draft.loading = action.payload.loading;
        draft.movies = action.payload.movies;
      });
    case GET_MOVIE_FAIL:
      return produce(state, (draft) => {
        draft.type = action.payload.type;
        draft.loading = action.payload.loading;
      });
    case GET_MOVIE_INFO_REQUEST:
      return produce(state, (draft) => {
        draft.type = action.payload.type;
        draft.loading = action.payload.loading;
      });
    case GET_MOVIE_INFO_SUCCESS:
      return produce(state, (draft) => {
        draft.type = action.payload.type;
        draft.loading = action.payload.loading;
        draft.movieInfo = action.payload.movieInfo;
      });
    case GET_MOVIE_INFO_FAIL:
      return produce(state, (draft) => {
        draft.type = action.payload.type;
        draft.loading = action.payload.loading;
      });
    default:
      return state;
  }
};

export default reducer;
