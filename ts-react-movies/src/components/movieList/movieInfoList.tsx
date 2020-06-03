import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NotFoundPage from "../common/NotFoundPage";

const InputDiv = styled.div`
  margin-top: 0.6rem;
  margin-bottom: 2.4rem;
`;

interface MovieInfoListProps {
  keyword: string;
  setKeyword: Function;
  handleKeyPress: (e: React.KeyboardEvent) => void;
  movies:
    | Array<{
        movieCd: string;
        movieNm: string;
        movieNmEn: string;
        openDt: string;
        genreAlt: string; // 영화 장르 전체 출력
        directors:
          | Array<{
              peopleNm: string;
            }>
          | undefined;
      }>
    | undefined;
}
const movieInfoList: React.SFC<MovieInfoListProps> = ({
  keyword,
  setKeyword,
  handleKeyPress,
  movies,
}) => {
  return (
    <>
      <InputDiv>
        <input
          className="Keyword"
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="검색어를 입력해주세요."
          width="25%"
        />
      </InputDiv>
      <div>
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.movieCd}
              movieNm={movie.movieNm}
              movieNmEn={movie.movieNmEn}
              movieCd={movie.movieCd}
              directors={movie.directors}
              genreAlt={movie.genreAlt}
              openDt={movie.openDt}
            />
          ))
        ) : (
          <NotFoundPage />
        )}
      </div>
    </>
  );
};

const MovieComponent = styled.div`
  background-color: #282828;
  padding: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

interface MovieCardProps {
  movieCd: string;
  movieNm: string;
  movieNmEn: string;
  openDt: string;
  genreAlt: string;
  directors:
    | Array<{
        peopleNm: string;
      }>
    | undefined;
}

const MovieCard: React.SFC<MovieCardProps> = ({
  movieCd,
  movieNm,
  movieNmEn,
  directors,
  openDt,
  genreAlt,
}) => {
  return (
    <MovieComponent>
      <Link to={`movie/${movieCd}`}>
        <div className="MovieTitle">
          <h3>{movieNm}</h3>
          <h5>{movieNmEn}</h5>
        </div>
      </Link>
      <div className="MovieInfo">
        <p>
          감독:{" "}
          {directors && directors.length > 0
            ? directors.map((director, index) => {
                return directors.length - 1 === index
                  ? director.peopleNm
                  : director.peopleNm + ", ";
              })
            : "정보가 없어요."}
        </p>
        <p>장르: {genreAlt}</p>
        <p>
          개봉:{" "}
          {openDt
            ? openDt.replace(/(\d{4})(\d{2})(\d{2})/, "$1.$2.$3")
            : "정보가 없어요."}
        </p>
      </div>
    </MovieComponent>
  );
};

export default movieInfoList;
