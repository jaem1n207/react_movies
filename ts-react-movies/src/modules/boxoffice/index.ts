import { Dispatch } from "redux";
import * as api from "../../api/boxoffice";
import produce from "immer";

export interface BoxofficeState {
  readonly type?: string;
  readonly loading: boolean;
  readonly daily?: Object;
  readonly weekly?: Object;
}

export interface ObjectType {
  movieCd: string; // 영화의 대표코드 (영화 상세정보 볼 때 사용)
  rank: number; // 해당일자의 박스오피스 순위
  rankInten: number; // 전일대비 순위 증감분
  rankOldAndNew: string; // 랭킹에 신규진입여부 (OLD or NEW)
  movieNm: number; // 영화명(국문)
  openDt: string; // 영화의 개봉일
  audiAcc: string; // 누적관객수
  audiCnt: string; // 해당 일의 관객수 (예매율 계산할 때 사용)
}

export const GET_DAILY_REQUEST = "boxoffice/GET_DAILY_REQUEST";
export const GET_DAILY_SUCCESS = "boxoffice/GET_DAILY_SUCCESS";
export const GET_DAILY_FAIL = "boxoffice/GET_DAILY_FAIL";

export const GET_WEEKLY_REQUEST = "boxoffice/GET_WEEKLY_REQUEST";
export const GET_WEEKLY_SUCCESS = "GET_WEEKLY_SUCCESS";
export const GET_WEEKLY_FAIL = "GET_WEEKLY_FAIL";

export const getDailyRequest = (payload: BoxofficeState) => ({
  type: GET_DAILY_REQUEST,
  payload,
});
export const getDailySuccess = (payload: BoxofficeState) => ({
  type: GET_DAILY_SUCCESS,
  payload,
});
export const getDailyFail = (payload: BoxofficeState) => ({
  type: GET_DAILY_FAIL,
  payload,
});

export const getWeeklyRequest = (payload: BoxofficeState) => ({
  type: GET_WEEKLY_REQUEST,
  payload,
});
export const getWeeklySuccess = (payload: BoxofficeState) => ({
  type: GET_WEEKLY_SUCCESS,
  payload,
});
export const getWeeklyFail = (payload: BoxofficeState) => ({
  type: GET_WEEKLY_FAIL,
  payload,
});

export const getDaily = (today: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getWeeklyRequest({ loading: true }));

      const result = await api.getDaily(today);
      const daily = result.data.boxOfficeResult.dailyBoxOfficeList;

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
      const weekly = result.data.boxOfficeResult.weeklyBoxOfficeList;

      dispatch(getWeeklySuccess({ loading: false, weekly }));
    } catch (e) {
      dispatch(getWeeklyFail({ loading: false }));
    }
  };
};

export interface Action {
  type: string;
  payload: {
    loading: boolean;
    daily: Array<ObjectType>;
    weekly: Array<ObjectType>;
  };
}

const initialState: BoxofficeState = {
  type: "",
  loading: false,
  daily: [],
  weekly: [],
};

const reducer = (state = initialState, action: Action): BoxofficeState => {
  switch (action.type) {
    case GET_DAILY_REQUEST:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    case GET_DAILY_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
        draft.daily = action.payload.daily;
      });
    case GET_DAILY_FAIL:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    case GET_WEEKLY_REQUEST:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    case GET_WEEKLY_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
        draft.weekly = action.payload.weekly;
      });
    case GET_WEEKLY_FAIL:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    default:
      return state;
  }
};

export default reducer;
