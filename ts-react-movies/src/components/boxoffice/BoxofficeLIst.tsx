import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BoxofficeListProps {
  type: string;
  boxoffice: Array<{
    movieCd: string; // 영화의 대표코드 (영화 상세정보 볼 때 사용)
    rank: number; // 해당일자의 박스오피스 순위
    rankInten: number; // 전일대비 순위 증감분
    rankOldAndNew: string; // 랭킹에 신규진입여부 (OLD or NEW)
    movieNm: number; // 영화명(국문)
    openDt: string; // 영화의 개봉일
    audiAcc: string; // 누적관객수
    audiCnt: string; // 해당 일의 관객수 (예매율 계산할 때 사용)
  }>;
}

interface RankProps {
  type: string;
}
const Rank = styled.span`
  color: ${(props: RankProps) => (props.type === "up" ? "#f1404b" : "#03a6ff")};
`;

const BoxofficeLIst: React.FC<BoxofficeListProps> = ({ type, boxoffice }) => {
  const allMovie[] =[];
  const allAUdi = boxoffice.map(m => {
    
  })

  return (
    <div className="Boxoffice">
      <div className="ListTitle">
        {type === "daily" ? "Daily Chart" : "Weekly Chart"}
      </div>
      <div className="MovieUl">
        {boxoffice.map((movie) => (
          <MovieComponent
            key={movie.movieCd}
            movieCd={movie.movieCd}
            rank={movie.rank}
            rankInten={movie.rankInten}
            rankOldAndNew={movie.rankOldAndNew}
            movieNm={movie.movieNm}
            openDt={movie.openDt}
            audiAcc={movie.audiAcc}
            audiCnt={movie.audiCnt}
          />
        ))}
      </div>
    </div>
  );
};

interface MovieComponent {
  movieCd: string; // 영화의 대표코드 (영화 상세정보 볼 때 사용) o
  rank: number; // 해당일자의 박스오피스 순위 o
  rankInten: number; // 전일대비 순위 증감분 o
  rankOldAndNew: string; // 랭킹에 신규진입여부 (OLD or NEW)
  movieNm: number; // 영화명(국문)
  openDt: string; // 영화의 개봉일
  audiAcc: string; // 누적관객수
  audiCnt: string; // 해당 일의 관객수 (예매율 계산할 때 사용)
}

const MovieComponent = (props: MovieComponent) => {
  return (
    <div className="MovieRank">
      <div className="MovieRank">
        <div>
          <div>{props.rank}</div>
        </div>
        <div>예매율: {}%</div>
        <div>
          {Number(props.rankInten) === 0 ? (
            <FontAwesomeIcon icon="minus" />
          ) : props.rankInten > 0 ? (
            <Rank type="up">
              <FontAwesomeIcon icon="arrow-up" />
              {Math.abs(props.rankInten)}
            </Rank>
          ) : (
            <Rank type="down">
              <FontAwesomeIcon icon="arrow-down" />
              {Math.abs(props.rankInten)}
            </Rank>
          )}
        </div>
      </div>
      <Link to={`/movie/${props.movieCd}`}>
        <div className="MovieTitle">{props.movieNm}</div>
      </Link>
      <div className="MovieInfo">
        <div>{props.openDt.replace(/-/g, ".")}개봉</div>
        <div>
          누적관객수: {props.audiAcc.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명
        </div>
      </div>
    </div>
  );
};

export default BoxofficeLIst;
