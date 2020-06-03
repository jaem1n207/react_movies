import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  ActorType,
  AuditType,
  CompanyType,
  ShowtypeType,
  DirectorType,
} from "../../modules/movieInfo";
import { RootState } from "../../modules";
import { getMovieInfo } from "../../modules/movieInfo";
import MovieInfo from "../../components/movieList/movieInfo";
import LoadingPage from "../../components/common/LoadingPage";

interface MovieInfoContainerProps {
  movieCd: string;
  // movieInfo: {
  //   movieNm: string;
  //   movieNmEn: string;
  //   showTm: number;
  //   openDt: string;
  //   genres: {
  //     genreNm: string;
  //   };
  //   directors: Array<DirectorType>;
  //   actors: Array<ActorType>;
  //   showTypes: Array<ShowtypeType>;
  //   companys: Array<CompanyType>;
  //   audits: Array<AuditType>;
  // };
  movieInfo: any;
  getMovieInfo: Function;
  loading: boolean;
}
const MovieInfoContainer: React.SFC<MovieInfoContainerProps> = ({
  movieCd,
  movieInfo,
  getMovieInfo,
  loading,
}) => {
  useEffect(() => {
    getMovieInfo(movieCd);
  }, [movieCd]);

  useEffect(() => {
    return () => {
      getMovieInfo("");
    };
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        Object.keys(movieInfo).length > 0 && <MovieInfo movieInfo={movieInfo} />
      )}
    </>
  );
};

export default connect(
  (state: RootState, props) => ({
    movieInfo: state.movie.movieInfo,
    loading: state.movie.loading,
  }),
  { getMovieInfo }
)(MovieInfoContainer);
