import React from "react";

type MovieTodayInfo = {
  rank: string; // 순위
  movieNm: string; // 영화 이름
  rankInten: string; // 순위 증감분
  rankOldAndNew: RankOldAndNew; // 랭킹에 신규진입여부 표시
  openDt: Date; // 개봉일
  salesAmt?: string; // 해당일 매출액
  salesAcc?: string; // 누적매출액
  audiCnt?: string; // 해당일 관객수
  audiAcc?: string; // 누적관객수
  movieCd?: string; // 영화코드 -> 영화상세정보를 위해 필요
};
enum RankOldAndNew {
  Old = "OLD",
  New = "NEW",
}

// 예매율 = 예매관객수 / 전체 예매관객수 * 100

const MovieTodayInfo = ({
  rank,
  movieNm,
  rankInten,
  rankOldAndNew,
  openDt,
  salesAmt,
  salesAcc,
  audiCnt,
  audiAcc,
  movieCd,
}: MovieTodayInfo) => {
  return (
    <div className="movieList">
      <div className="movie_data">
        <h4 className="movie_rank">{rank}</h4>
        <h5 className="movie_rankInten">{rankInten}</h5>
        <h3 className="movie_title">{movieNm}</h3>
        <h5 className="movie_year">{openDt}</h5>
        <p className="movie_status">{rankOldAndNew}</p>
      </div>
    </div>
  );
};

export default MovieTodayInfo;