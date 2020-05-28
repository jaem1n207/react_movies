import React from "react";
import styled from "styled-components";

import {
  DirectorType,
  ActorType,
  ShowtypeType,
  CompanyType,
  AuditType,
} from "../../modules/movieInfo/types";

const InfoContent = styled.section`
  margin-top: 0.6rem;
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
      <div className="KrNm">
        {movieNm}
        {prdtYear}
      </div>
      <div className="EnNm">{movieNmEn}</div>
    </InfoContent>
  );
};

export default movieInfo;
