import React from "react";
import styled from "styled-components";

const Content = styled.div`
  margin-top: 1.4rem;
  font-size: 24px;
  font-weight: bold;
  color: #323232;
`;

const NotFoundPage: React.SFC = (props) => {
  return <Content>검색결과가 없습니다.</Content>;
};

export default NotFoundPage;
