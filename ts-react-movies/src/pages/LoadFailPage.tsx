import React from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

const PosStyle = styled.div`
  top: 40%;
  left: 40%;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgba(255, 255, 255, 0.83);
`;

const NBtnStyle = styled.button`
  border-radius: 10px;
  border: 0.5px solid #282828;
  padding: 10px 20px;
  font-size: 1.4rem;
  font-weight: bold;
  background-color: #282828; !important
`;

interface LoadFailPageProps extends RouteComponentProps<any> {}

const LoadFailPage: React.SFC<LoadFailPageProps> = ({ history, location }) => {
  return (
    <PosStyle>
      <h2>
        페이지를 찾을 수 없어요!! <br></br>현재 페이지:{" "}
        <code>{location.pathname}</code>
      </h2>
      <NBtnStyle
        onClick={() => {
          history.push("/");
        }}
      >
        메인으로 가기
      </NBtnStyle>
    </PosStyle>
  );
};

export default LoadFailPage;
