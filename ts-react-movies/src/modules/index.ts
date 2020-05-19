import { combineReducers } from "redux";

import boxoffice, { BoxOfficeState } from "./boxoffice";

const reducers = combineReducers({
  boxoffice,
});

export default reducers;

export interface RootState {
  boxoffice: BoxOfficeState;
}
