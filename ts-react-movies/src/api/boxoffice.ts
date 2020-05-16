import defaultApi from "./defaultApi";

const API_KEY = `key=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const getDaily = (targetDt: string) => {
  return defaultApi.get(
    `boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=${targetDt}`
  );
};

export const getWeekly = (targetDt: string) => {
  return defaultApi.get(
    `boxoffice/searchWeeklyBoxOfficeList.json?${API_KEY}&targetDt=${targetDt}`
  );
};
