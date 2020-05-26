import React from "react";
import { Route } from "react-router";
import {
  faArrowUp,
  faArrowDown,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

import Navigator from "./components/common/Navigator";
import BoxofficePage from "./pages/BoxofficePage";
import { library } from "@fortawesome/fontawesome-svg-core";

/* 
  movie name color: E71D36
*/

library.add(faArrowUp, faArrowDown, faMinus);

interface RootProps {}
const Root: React.SFC<RootProps> = () => {
  return (
    <>
      <Route exact path="/" component={Navigator} />
      <Route exact path="/boxoffice" component={BoxofficePage} />
    </>
  );
};
export default Root;
