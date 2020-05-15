import React from "react";
import { MovieListInfo } from "../api/movies";

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
}: MovieListInfo) => {
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
