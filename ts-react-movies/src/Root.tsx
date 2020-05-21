import React from "react";
import MovieTodayLoader from "./containers/MovieTodayLoader";

import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
const store = configureStore();

const GlobalStyle = createGlobalStyle`
      body {
              padding: 0;
              margin: 0;
              background-color: #424242;
            }
          * {
              box-sizing: border-box;
            }
`;

function Root() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <MovieTodayLoader />
    </Provider>
  );
}
export default Root;
