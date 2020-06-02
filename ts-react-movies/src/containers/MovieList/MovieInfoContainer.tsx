import React, { useState } from "react";
import { connect } from "react-redux";

import { RootState } from "../../modules";
import MovieInfoList from "../../components/movieList/movieInfoList";
import { getMovie } from "../../modules/movieInfo";

interface MovieInfoContainerProps {
  type: string;
  loading: boolean;
  movies: Array<any> | undefined;
  getMovies: Function;
}
const MovieInfoContainer: React.SFC<MovieInfoContainerProps> = ({
  movies,
  getMovies,
}) => {
  return <div></div>;
};

export default MovieInfoContainer;
