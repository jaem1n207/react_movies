import defaultApi from "./defaultApi";

const API_KEY = `key=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const getPeopleList = (peopleNm: string) => {
  return defaultApi.get(
    `people/searchPeopleList.json?key=${API_KEY}&peopleNm=${peopleNm}`
  );
};

export const getPeopleInfo = (peopleCd: string) => {
  return defaultApi.get(
    `people/searchPeopleInfo.json?${API_KEY}&peopleCd=${peopleCd}`
  );
};
