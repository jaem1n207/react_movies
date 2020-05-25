import React from "react";
import styled from "styled-components";

const Content = styled.div`
  margin-top: 1.4rem;
  font-size: 24px;
  font-weight: bold;
  color: #323232;
`;

interface NotFoundPageProps {}
const NotFoundPage: React.SFC<NotFoundPageProps> = (props) => {
  return <Content>검색결과를 찾지 못했습니다!</Content>;
};

export default NotFoundPage;
