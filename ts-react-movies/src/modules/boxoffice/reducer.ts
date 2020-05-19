import {
  GET_DAILY_REQUEST,
  GET_DAILY_SUCCESS,
  GET_DAILY_FAIL,
  GET_WEEKLY_REQUEST,
  GET_WEEKLY_SUCCESS,
  GET_WEEKLY_FAIL,
} from "./actions";
import { Action, BoxOfficeState } from "./types";
import produce from "immer";

const initialState: BoxOfficeState = {
  type: "",
  loading: false,
  daily: [],
  weekly: [],
};

const reducer = (state = initialState, action: Action): BoxOfficeState => {
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
