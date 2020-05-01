import { combineReducers } from "redux";
import boxOffice from "./boxOffice";

const rootReducer = combineReducers({
  boxOffice,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
