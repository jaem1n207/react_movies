import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NotFoundPage from "../common/NotFoundPage";

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
        genreAlt: string;
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
      <div>
        <input
          className="Keyword"
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div>
        {movies && movies.length > 0 ? (
          movies.map((movie) => {
            <MovieCard
              key={movie.movieCd}
              movieNm={movie.movieNm}
              movieNmEn={movie.movieNmEn}
              movieCd={movie.movieCd}
              directors={movie.directors}
              genreAlt={movie.directors}
              openDt={movie.openDt}
            />;
          })
        ) : (
          <NotFoundPage />
        )}
      </div>
    </>
  );
};

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
    <div className="MovieComponent">
      <Link to={`movie/${movieCd}`}>
        <div className="MovieTitle">
          <h3>{movieNm}</h3>
          <h5>{movieNmEn}</h5>
        </div>
      </Link>
      <div className="MovieInfo">
        <p>
          감독:
          {directors && directors.length > 0
            ? directors.map((director, index) => {
                return directors.length - 1 === index
                  ? director.peopleNm
                  : director.peopleNm + ", ";
              })
            : "정보없음"}
          ) : "정보가 없어요."}
        </p>
        <p>장르: {genreAlt}</p>
        <p>
          개봉:{" "}
          {openDt
            ? openDt.replace(/(\d{4})(\d{2})(\d{2})/, "$1.$2.$3")
            : "정보가 없어요."}
        </p>
      </div>
    </div>
  );
};

export default movieInfoList;
