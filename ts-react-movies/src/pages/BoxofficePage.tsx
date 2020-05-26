import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

import Template from "../components/Template";
import Navigator from "../components/common/Navigator";
import BoxofficeListContainer from "../containers/boxoffice/BoxofficeListContainer";

const BoxofficeList = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;
`;

interface BoxofficePageProps {}
const BoxofficePage: React.SFC<BoxofficePageProps> = (props) => {
  const [boxofficeType, setBoxofficeType] = useState("daily");

  return (
    <Template>
      <Navigator />
      <nav>
        <div className="SubNav">
          <li onClick={() => setBoxofficeType("daily")}>Daily</li>
          <li onClick={() => setBoxofficeType("weekly")}>Weekly</li>
        </div>
      </nav>
      <BoxofficeList>
        <BoxofficeListContainer type={boxofficeType} />
      </BoxofficeList>
    </Template>
  );
};

export default BoxofficePage;
