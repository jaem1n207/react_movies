import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import MovieDateForm from "../components/MovieDateForm";
import MovieTodayList from "../components/MovieTodayList";
import {
  getMovieTodayThunk,
  getMovieTodayInfoAsync,
} from "../modules/boxOffice";
import MovieTodayInfo from "../components/MovieTodayInfo";

const MovieTodayLoader = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.boxOffice.TodayInfo
  );
  const dispatch = useDispatch();

  const onSubmitTargetDate = (targetDate: string) => {
    dispatch(getMovieTodayInfoAsync.request(targetDate));
  };
  console.log(
    data?.dailyBoxOfficeList.map((movie) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      <MovieTodayInfo
        rank={movie.rank}
        movieNm={movie.movieNm}
        rankInten={movie.rankInten}
        rankOldAndNew={movie.rankOldAndNew}
        openDt={movie.openDt}
      />;
    })
  );

  return (
    <>
      <MovieDateForm onSubmitTargetDate={onSubmitTargetDate} />
      {loading && <p style={{ textAlign: "center" }}>로딩중..</p>}
      {error && <p style={{ textAlign: "center" }}>에러 발생!</p>}
      {data &&
        data.dailyBoxOfficeList.map((movie) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          <MovieTodayInfo
            rank={movie.rank}
            movieNm={movie.movieNm}
            rankInten={movie.rankInten}
            rankOldAndNew={movie.rankOldAndNew}
            openDt={movie.openDt}
          />;
        })}
    </>
  );
};

export default MovieTodayLoader;
