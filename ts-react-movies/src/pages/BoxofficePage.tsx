import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

import Template from "../components/Template";
import Navigator from "../components/common/Navigator";
import BoxofficeListContainer from "../containers/boxoffice/BoxofficeListContainer";

const BoxofficeContent = styled.section`
  display: flex;
  flex-direction: column;
`;

const SubNav = styled.ul`
  height: 2.5rem;
  display: flex;
  justify-content: center;
  list-style: none;
  li {
    margin-top: 0.625rem;
    margin-left: 1.875rem;
    margin-right: 1.875rem;
    text-align: center;
    min-width: 4.375rem;
    font-weight: 800;
    cursor: pointer;
  }
`;

const BoxofficeList = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`;

interface BoxofficePageProps {}
const BoxofficePage: React.SFC<BoxofficePageProps> = (props) => {
  const [boxofficeType, setBoxofficeType] = useState("daily");

  return (
    <Template>
      <BoxofficeContent>
        <Navigator />
        <>
          <SubNav>
            <li onClick={() => setBoxofficeType("daily")}>Daily</li>
            <li onClick={() => setBoxofficeType("weekly")}>Weekly</li>
          </SubNav>
        </>
        <BoxofficeList>
          <BoxofficeListContainer type={boxofficeType} page={true} />
        </BoxofficeList>
      </BoxofficeContent>
    </Template>
  );
};

export default BoxofficePage;
