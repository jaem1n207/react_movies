import { createAsyncAction } from "typesafe-actions";
import { MovietodayInfo, DailyBoxOfficeList } from "../../api/movies";
import { AxiosError } from "axios";

export const GET_MOVIE_TODAY_INFO = "boxOffice/GET_MOVIE_INFO";
export const GET_MOVIE_TODAY_INFO_SUCCESS =
  "github/GETMOVIE_TODAY_INFO_SUCCESS";
export const GET_MOVIE_TODAY_INFO_ERROR =
  "boxOffice/GET_MOVIE_TODAY_INFO_ERROR";

export const getMovieTodayInfoAsync = createAsyncAction(
  GET_MOVIE_TODAY_INFO,
  GET_MOVIE_TODAY_INFO_SUCCESS,
  GET_MOVIE_TODAY_INFO_ERROR
)<string, DailyBoxOfficeList, AxiosError>();
