import React from "react";
import styled from "styled-components";
import {
  DirectorType,
  ActorType,
  ShowtypeType,
  CompanyType,
  AuditType,
} from "../../modules/movieInfo/types";

import Actors from "./Info/Actors";
import ShowTypes from "./Info/ShowTypes";

const InfoContent = styled.section`
  margin-top: 0.6rem;
`;

const KrNm = styled.h1`
  font-size: 1.9rem;
  font-weight: bold;
  margin: 0;
`;
const EnNm = styled.h3`
  font-size: 1.25rem;
  margin: 0;
`;

interface MovieInfoProps {
  movieInfo: {
    movieNm: string;
    showTm: string;
    movieNmEn: string;
    openDt: string;
    prdtYear: string;
    genres: Array<{
      genreNm: string;
    }>;
    directors: Array<DirectorType>;
    actors: Array<ActorType>;
    audits: Array<AuditType>;
    showTypes: Array<ShowtypeType>;
    companys: Array<CompanyType>;
  };
}

const movieInfo: React.SFC<MovieInfoProps> = ({ movieInfo }) => {
  const {
    movieNm,
    movieNmEn,
    prdtYear,
    actors,
    directors,
    companys,
    audits,
    genres,
    openDt,
    showTm,
    showTypes,
  } = movieInfo;

  return (
    <InfoContent>
      <KrNm>
        {movieNm}
        {prdtYear}
      </KrNm>
      <EnNm>{movieNmEn}</EnNm>
      <ShowTypes showTypes={showTypes} />
      <Actors actors={actors} />
    </InfoContent>
  );
};

export default movieInfo;
