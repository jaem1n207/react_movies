import { BoxOfficeState, Action, ObjectType } from "./types";
import { Dispatch } from "redux";
import * as api from "../../api/boxoffice";

const GET_DAILY_REQUEST = "boxoffice/GET_DAILY_REQUEST";
const GET_DAILY_SUCCESS = "boxoffice/GET_DAILY_SUCCESS";
const GET_DAILY_FAIL = "boxoffice/GET_DAILY_FAIL";

const GET_WEEKLY_REQUEST = "boxoffice/GET_WEEKLY_REQUEST";
const GET_WEEKLY_SUCCESS = "GET_WEEKLY_SUCCESS";
const GET_WEEKLY_FAIL = "GET_WEEKLY_FAIL";

export const getDailyRequest = (payload: BoxOfficeState) => ({
  type: GET_DAILY_REQUEST,
  payload,
});
export const getDailySuccess = (payload: BoxOfficeState) => ({
  type: GET_DAILY_SUCCESS,
  payload,
});
export const getDailyFail = (payload: BoxOfficeState) => ({
  type: GET_DAILY_FAIL,
  payload,
});

export const getWeeklyRequest = (payload: BoxOfficeState) => ({
  type: GET_WEEKLY_REQUEST,
  payload,
});
export const getWeeklySuccess = (payload: BoxOfficeState) => ({
  type: GET_WEEKLY_SUCCESS,
  payload,
});
export const getWeeklyFail = (payload: BoxOfficeState) => ({
  type: GET_WEEKLY_FAIL,
  payload,
});

export const getDaily = (today: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getWeeklyRequest({ loading: true }));

      const result = await api.getWeekly(today);
      const daily = result.data.boxofficeResult.dailyBoxOfficeList;

      dispatch(getDailySuccess({ loading: false, daily }));
    } catch (e) {
      dispatch(getDailyFail({ loading: false }));
    }
  };
};

export const getWeekly = (today: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getWeeklyRequest({ loading: true }));

      const result = await api.getWeekly(today);
      const weekly = result.data.boxofficeResult.weeklyBoxOfficeList;

      dispatch(getWeeklySuccess({ loading: false, weekly }));
    } catch (e) {
      dispatch(getWeeklyFail({ loading: false }));
    }
  };
};
