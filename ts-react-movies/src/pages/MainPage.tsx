import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Template from "../components/Template";
import Navigator from "../components/common/Navigator";

import BoxofficeListContainer from "../containers/boxoffice/BoxofficeListContainer";

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  height: 90%;
`;

const MoreContent = styled.div`
  /* 더보기 */
  margin-top: 4rem;
`;

interface MainPageProps {}
const MainPage: React.SFC<MainPageProps> = () => {
  return (
    <Template>
      <Navigator />
      <MainContent>
        <BoxofficeListContainer type="daily" page={false} />
        <BoxofficeListContainer type="weekly" page={false} />
        <MoreContent>
          <Link to="/boxoffice">더보기 ></Link>
        </MoreContent>
      </MainContent>
    </Template>
  );
};

export default MainPage;
