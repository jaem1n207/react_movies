import { createStore, applyMiddleware } from "redux";
import rootReducer from "../modules";
import Thunk from "redux-thunk";

export default function configureStore() {
  const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
  const store = createStore(
    rootReducer,
    devTools && devTools(),
    applyMiddleware(Thunk)
  );
  return store;
}
