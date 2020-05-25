import React from "react";
import { Route } from "react-router";
import Navigator from "./components/common/Navigator";

import BoxofficePage from "./pages/BoxofficePage";

/* 
  movie name color: E71D36
*/

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
