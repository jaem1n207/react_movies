import React, { useState } from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";

import Template from "../components/Template";
import Navigator from "../components/common/Navigator";
import MovieInfoListContainer from "../containers/MovieList/MovieInfoListContainer";
import MovieInfoContainer from "../containers/MovieList/MovieInfoContainer";

const MovieInfoContent = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`;

interface MatchParams {
  movieCd: string;
}

interface MovieInfoPageProps extends RouteComponentProps<MatchParams> {}
const MovieInfoPage: React.SFC<MovieInfoPageProps> = (props) => {
  const { movieCd } = props.match.params;

  return (
    <Template>
      <Navigator />
      <MovieInfoContent>
        {!movieCd ? (
          <MovieInfoListContainer />
        ) : (
          <MovieInfoContainer movieCd={movieCd} />
        )}
      </MovieInfoContent>
    </Template>
  );
};

export default MovieInfoPage;
