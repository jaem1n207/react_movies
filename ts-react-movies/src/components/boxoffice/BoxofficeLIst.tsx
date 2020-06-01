import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Boxoffice = styled.article`
  margin: 0 1rem;
`;

const ListTitle = styled.div`
  text-align: center;
  margin-bottom: 4rem
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const MovieUl = styled.ul``;

const MovieLi = styled.li`
  display: flex;
  justify-content: space-between;
  height: 10rem;
  flex-basis: 0;
  border-radius: 0.25rem;
  border: 0.5px solid #d0e6e4;
  box-shadow: 0.125rem 0.1875rem #8bc2bb;
  margin-bottom: 1.875rem;
  a {
    display: flex;
  }
  &:hover {
    box-shadow: 2px 2px 10px 3px #000;
  }
`;

const MovieRank = styled.div`
  /* 순위 */
  width: 4.375rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 0.3125rem;
  text-align: center;

  div:first-child {
    font-size: 1.5625rem;
    font-weight: bold;
  }

  div:last-child {
    font-size: 0.8125rem;
  }
`;

const MovieTitle = styled.div`
  /* 제목 */
  font-size: 1.5rem;
  margin-top: auto;
  margin-bottom: auto;
  /* max-width: 55%; */
  cursor: pointer;
`;

const MovieOpenDt = styled.div`
  /* 개봉일 */
  margin-top: 0.4rem;
  font-size: 1.4rem;
`;

const MovieInfo = styled.div`
  /* 정보 */
  text-align: right;
  min-width: 7.5rem;
  font-size: 1rem;
  margin-top: auto;
  margin-bottom: 0.625rem;
  margin-right: 0.625rem;
`;

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
    allAudi: string;
  }>;
}

interface RankProps {
  type: string;
}
const Rank = styled.span`
  color: ${(props: RankProps) => (props.type === "up" ? "#f1404b" : "#03a6ff")};
`;

const BoxofficeList: React.FC<BoxofficeListProps> = ({ type, boxoffice }) => {
  let allAudi = 0;

  boxoffice.map((m) => {
    allAudi += parseInt(m.audiCnt);
  });

  return (
    <Boxoffice>
      <ListTitle>{type === "daily" ? "일간 차트" : "주간 차트"}</ListTitle>
      <MovieUl>
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
            allAudi={allAudi.toString()}
          />
        ))}
      </MovieUl>
    </Boxoffice>
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
  allAudi: string;
}

const MovieComponent = (props: MovieComponent) => {
  const bookRate2 = React.useMemo(
    () => bookRate(props.audiCnt, props.allAudi),
    [props.audiCnt, props.allAudi]
  );

  function bookRate(audiCnt: string, allAudi: string) {
    return (parseInt(audiCnt) / parseInt(allAudi)) * 100;
  }

  return (
    <MovieLi>
      <MovieRank>
        <div>{props.rank}</div>
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
      </MovieRank>
      <MovieTitle>
        <Link to={`/movie/${props.movieCd}`}>{props.movieNm}</Link>
        <MovieOpenDt>{props.openDt.replace(/-/g, ".")}개봉</MovieOpenDt>
      </MovieTitle>
      <MovieInfo>
        <div>예매율: {bookRate2.toFixed(1)}%</div>
        <div>
          누적관객수: {props.audiAcc.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명
        </div>
      </MovieInfo>
    </MovieLi>
  );
};

export default BoxofficeList;
