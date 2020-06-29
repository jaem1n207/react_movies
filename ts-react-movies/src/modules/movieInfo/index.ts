import { Dispatch } from "redux";
import * as api from "../../api/movie";
import produce from "immer";

/* 
  movieList
*/
export interface MovieState {
  type: string;
  loading: boolean;
  movies?: Array<Object>;
  movieInfo?: Object;
}

export interface Action {
  type: string;
  payload: {
    type: string;
    loading: boolean;
    movies: [];
    movieInfo: Object;
  };
}

/* 
  movieInfo
*/
// 감독
export interface DirectorType {
  peopleNm: string;
  peopleNmEn: string;
}

// 배우
export interface ActorType {
  peopleNm: string;
  peopleNmEn: string;
  cast: string; // 역할
}

// 상영형태
export interface ShowtypeType {
  showTypeGroupNm: string; // ex) 2D
  showTypeNm: string; // ex) 디지털
}

// 영화사
export interface CompanyType {
  companyCd: string;
  companyNm: string; // 제작사 이름
  companyNmEn: string; // 제작사 영문
  companyPartNm: string; // 제작사
}

// 심의정보
export interface AuditType {
  auditNo: string; // ex) "2017-MF02139"
  watchGradeNm: string; // ex) 15세이상관람가
}

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
      const movieInfo = result.data.movieInfoResult.movieInfo;

      dispatch(
        getMovieInfoSuccess({ type: "success", loading: false, movieInfo })
      );
    } catch (e) {
      dispatch(getMovieFail({ type: "fail", loading: false }));
    }
  };
};

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
