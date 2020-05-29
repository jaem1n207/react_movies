import React from "react";
import styled from "styled-components";
import { BeatLoader } from "react-spinners";

const Loading = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface LoadingProps {}

const LoadingPage: React.FC<LoadingProps> = (props) => {
  return (
    <Loading>
      <BeatLoader loading={true} margin={4} size={30} color={"#3700B3"} />
    </Loading>
  );
};

export default LoadingPage;
