import defaultApi from "./defaultApi";

const API_KEY = `key=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const getPeopleList = (castNm: string) => {
  return defaultApi.get(
    `people/searchPeopleList.json?${API_KEY}&peopleNm=${castNm}`
  );
};

export const getPeopleInfo = (castCd: string) => {
  return defaultApi.get(
    `people/searchPeopleInfo.json?${API_KEY}&peopleCd=${castCd}`
  );
};
