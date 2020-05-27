import { combineReducers } from "redux";

import boxoffice, { BoxofficeState } from "./boxoffice";
import movie, { MovieState } from "./movieInfo";

const reducers = combineReducers({
  boxoffice,
  movie,
});

export default reducers;

export interface RootState {
  boxoffice: BoxofficeState;
  movie: MovieState;
}
