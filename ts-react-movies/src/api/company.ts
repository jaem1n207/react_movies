import defaultApi from "./defaultApi";

const API_KEY = `key=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const getCompanyList = () => {
  return defaultApi.get(`company/searchCompanyList.json?key=${API_KEY}}`);
};

export const getCompanyInfo = (companyCd: string) => {
  return defaultApi.get(
    `company/searchCompanyInfo.json?${API_KEY}&companyCd=${companyCd}`
  );
};
