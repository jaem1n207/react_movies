import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
import { MovietodayInfo } from "../../api/movies";

export type MovieTodayAction = ActionType<typeof actions>;

export type MovieTodayState = {
  TodayInfo: {
    loading: boolean;
    error: Error | null;
    dailyBoxOfficeList: [];
  };
};
