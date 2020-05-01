import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import MovieDateForm from "../components/MovieDateForm";
import MovieTodayList from "../components/MovieTodayList";
import { getMovieTodayThunk } from "../modules/boxOffice";

const MovieTodayLoader = () => {
  return <div></div>;
};

export default MovieTodayLoader;
