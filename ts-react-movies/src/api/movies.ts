/* import axios from "axios";

export async function getMovieToday(targetDate: string) {
  const response = await axios.get<MovietodayInfo>(
    `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_MOVIE_API_KEY}&targetDt=${targetDate}`
  );
  console.log(response.data);
  var movies = response.data.dailyBoxOfficeList;
  console.log(movies);

  return movies;
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

// component에서 사용
export interface MovieListInfo {
  rank: string; // 순위
  movieNm: string; // 영화 이름
  rankInten: string; // 순위 증감분
  rankOldAndNew: RankOldAndNew; // 랭킹에 신규진입여부 표시
  openDt: Date; // 개봉일
  salesAmt?: string; // 해당일 매출액
  salesAcc?: string; // 누적매출액
  audiCnt?: string; // 해당일 관객수
  audiAcc?: string; // 누적관객수
  movieCd?: string; // 영화코드 -> 영화상세정보를 위해 필요
}
 */
