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
import CastPage from "./pages/CastPage";

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
      <Route exact path="/movie/:movieCd" component={MovieInfoPage} />
      <Route exact path="/cast" component={CastPage} />
      <Route exact path="/cast/:castCd" component={CastPage} />
    </>
  );
};
export default Root;
