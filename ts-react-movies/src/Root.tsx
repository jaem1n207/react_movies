import React from "react";
import { Route } from "react-router";
import {
  faArrowUp,
  faArrowDown,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import MainPage from "./pages/MainPage";
import BoxofficePage from "./pages/BoxofficePage";
import MovieInfoPage from "./pages/MovieInfoPage";
import PeoplePage from "./pages/PeoplePage";

/* 
  movie name color: E71D36
*/

library.add(faArrowUp, faArrowDown, faMinus);

interface RootProps {}
const Root: React.SFC<RootProps> = () => {
  return (
    <>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/boxoffice" component={BoxofficePage} />
      <Route exact path="/movie" component={MovieInfoPage} />
      <Route exact path="/people" component={PeoplePage} />
    </>
  );
};
export default Root;
