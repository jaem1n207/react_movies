import React, { useEffect } from "react";
import { connect } from "react-redux";

import { RootState } from "../../modules";
import { getMovieInfo } from "../../modules/movieInfo";
import MovieInfo from "../../components/movieList/movieInfo";
import LoadingPage from "../../components/common/LoadingPage";

interface MovieInfoContainerProps {
  movieCd: string;
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

  console.log(movieInfo);

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
