import React, { useState } from "react";
import { connect } from "react-redux";

import { RootState } from "../../modules";
import MovieInfoList from "../../components/movieList/movieInfoList";
import { getMovies } from "../../modules/movieInfo";
import LoadingPage from "../../components/common/LoadingPage";

interface MovieInfoListContainerProps {
  type: string;
  loading: boolean;
  movies: Array<any> | undefined;
  getMovies: Function;
}
const MovieInfoListContainer: React.SFC<MovieInfoListContainerProps> = ({
  loading,
  movies,
  getMovies,
}) => {
  const [keyword, setKeyword] = useState("");

  const handleOnSubmit = () => {
    getMovies(keyword);
  };

  const handleKeyPress = (e: React.KeyboardEvent<Element>) => {
    if (e.key === "Enter") {
      handleOnSubmit();
    }
  };

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <MovieInfoList
          keyword={keyword}
          handleKeyPress={handleKeyPress}
          movies={movies}
          setKeyword={setKeyword}
        />
      )}
    </>
  );
};

export default connect(
  (state: RootState, props) => ({
    type: state.movie.type,
    loading: state.movie.loading,
    movies: state.movie.movies,
  }),
  { getMovies }
)(MovieInfoListContainer);
