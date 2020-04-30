import axios from "axios";

export async function getMovieToday(targetDate: string) {
  const response = await axios.get<MovietodayInfo>(
    `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_MOVIE_API_KEY}&targetDt=${targetDate}`
  );
  console.log(response.data);
  return response.data;
}

export interface MovietodayInfo {
  boxofficeType: string;
  showRange: string;
  dailyBoxOfficeList: DailyBoxOfficeList[];
}

export interface DailyBoxOfficeList {
  rnum: string;
  rank: string;
  rankInten: string;
  rankOldAndNew: RankOldAndNew;
  movieCd: string;
  movieNm: string;
  openDt: Date;
  salesAmt: string;
  salesShare: string;
  salesInten: string;
  salesChange: string;
  salesAcc: string;
  audiCnt: string;
  audiInten: string;
  audiChange: string;
  audiAcc: string;
  scrnCnt: string;
  showCnt: string;
}

export enum RankOldAndNew {
  Old = "OLD",
  New = "NEW",
}
