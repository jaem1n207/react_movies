import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Boxoffice = styled.article`
  margin: 0 1rem;
  width: 40%;
`;

const ListTitle = styled.div`
  text-align: center;
  margin: 1.875rem 0;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 3rem;
`;

const MovieUl = styled.ul``;

const MovieLi = styled.li`
  display: flex;
  justify-content: space-between;
  height: 11rem;
  border-radius: 0.25rem;
  margin-bottom: 3rem;
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
    font-size: 1.5rem;
    font-weight: bold;
  }

  div:last-child {
    font-size: 1.8rem;
  }
`;

const MovieTitle = styled.div`
  /* 제목 */
  font-size: 2.4rem;
  margin-top: auto;
  margin-bottom: auto;
  /* max-width: 55%; */
  cursor: pointer;
`;

const MovieInfo = styled.div`
  /* 정보 */
  text-align: right;
  min-width: 7.5rem;
  font-size: 1.4rem;
  margin-top: auto;
  margin-bottom: 0.625rem;
  margin-right: 0.625rem;
`;

const BookRate = styled.div`
  margin-top: 4.5rem;
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
      <ListTitle>
        {type === "daily" ? "일간 차트 Top5" : "주간 차트 Top5"}
      </ListTitle>
      <MovieUl>
        {boxoffice
          .map((movie) => (
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
          ))
          .slice(0, 5)}
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
  let bookRate = (parseInt(props.audiCnt) / parseInt(props.allAudi)) * 100;

  return (
    <MovieLi>
      <MovieRank>
        <div>
          <div>{props.rank}</div>
        </div>
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
      </MovieTitle>
      <BookRate></BookRate>
      <MovieInfo>
        <div>{props.openDt.replace(/-/g, ".")}개봉</div>
        <div>예매율: {bookRate.toFixed(1)}%</div>
        <div>
          누적관객수: {props.audiAcc.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명
        </div>
      </MovieInfo>
    </MovieLi>
  );
};

export default BoxofficeList;
