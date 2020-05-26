export interface BoxofficeState {
  readonly type?: string;
  readonly loading: boolean;
  readonly daily?: Object;
  readonly weekly?: Object;
}

export interface ObjectType {
  movieCd: string; // 영화의 대표코드 (영화 상세정보 볼 때 사용)
  rank: number; // 해당일자의 박스오피스 순위
  rankInten: number; // 전일대비 순위 증감분
  rankOldAndNew: string; // 랭킹에 신규진입여부 (OLD or NEW)
  movieNm: number; // 영화명(국문)
  openDt: string; // 영화의 개봉일
  audiAcc: string; // 누적관객수
  audiCnt: string; // 해당 일의 관객수 (예매율 계산할 때 사용)
}

export interface Action {
  type: string;
  payload: {
    loading: boolean;
    daily: Array<ObjectType>;
    weekly: Array<ObjectType>;
  };
}
