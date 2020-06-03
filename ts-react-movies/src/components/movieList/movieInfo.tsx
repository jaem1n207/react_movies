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
import Genre from "./Info/Genre";
import Companys from "./Info/Companys";
import Directors from "./Info/Directors";

const InfoContent = styled.section`
  width: 38rem;
  & > section {
    margin-top: 0.65rem;
  }
`;

const KrNm = styled.h1`
  font-size: 1.9rem;
  font-weight: bold;
  margin: 0;
  color: rgba(255, 255, 255, 0.83);
  & > span {
    font-size: 1.6rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.6);
  }
`;
const EnNm = styled.h3`
  font-size: 1.3rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.83);
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
    genres,
    openDt,
    showTm,
    showTypes,
    audits,
  } = movieInfo;

  return (
    <InfoContent>
      <KrNm>
        {movieNm}
        {prdtYear}
      </KrNm>
      <EnNm>{movieNmEn}</EnNm>
      <ShowTypes showTypes={showTypes} />
      <Genre genres={genres} showTm={showTm} openDt={openDt} />
      <Companys companys={companys} />
      <Directors directors={directors} />
      <Actors actors={actors} />
    </InfoContent>
  );
};

export default movieInfo;
