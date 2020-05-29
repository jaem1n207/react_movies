import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Root from "./Root";

import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Thunk from "redux-thunk";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import reducers from "./modules";
import "./styles/darkmode.scss";

const middlewares = [Thunk, logger];
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

const GlobalStyle = createGlobalStyle`
      body {
              padding: 0;
              margin: 0;
              height: 100vh;

            }
          * {
              box-sizing: border-box;
            }
`;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="dark-mode">
        <GlobalStyle />
        <Root />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
