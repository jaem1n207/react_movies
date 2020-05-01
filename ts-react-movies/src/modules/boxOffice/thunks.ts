import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { MovieTodayAction } from "./types";
import { getMovieToday } from "../../api/movies";
import { getMovieTodayInfoAsync } from "./actions";

export function getMovieTodayThunk(
  targetDate: string
): ThunkAction<Promise<void>, RootState, null, MovieTodayAction> {
  return async (dispatch) => {
    const { request, success, failure } = getMovieTodayInfoAsync;
    dispatch(request(""));
    try {
      const TodayInfo = await getMovieToday(targetDate);
      dispatch(success(TodayInfo));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
