export interface BoxOfficeState {
  readonly type?: string;
  readonly loading: boolean;
  readonly daily?: Object;
  readonly weekly?: Object;
}

export interface ObjectType {
  movieCd: string;
  rank: number;
  rankInten: number;
  rankOldAndNew: string;
  movieNm: number;
  openDt: string;
  audiAcc: string;
}

export interface Action {
  type: string;
  payload: {
    loading: boolean;
    daily: Array<ObjectType>;
    weekly: Array<ObjectType>;
  };
}
