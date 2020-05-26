import * as React from "react";
import styled from "styled-components";
import Template from "../components/Template";
import Navigator from "../components/common/Navigator";

import BoxofficeListContainer from "../containers/boxoffice/BoxofficeListContainer";

const MainContent = styled.div`
  display: flex;
  justify-content: center;
`;

interface MainPageProps {}
const MainPage: React.SFC<MainPageProps> = () => {
  return (
    <Template>
      <Navigator />
      <MainContent>
        <BoxofficeListContainer type="daily" />
        <BoxofficeListContainer type="weekly" />
      </MainContent>
    </Template>
  );
};

export default MainPage;
