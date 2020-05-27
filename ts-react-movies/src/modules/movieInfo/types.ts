export interface MovieState {
  type: string;
  loading: boolean;
  movies?: Array<Object>;
  movieInfo?: Object;
}

export interface Action {
  type: string;
  payload: {
    type: string;
    loading: boolean;
    movies: [];
    movieInfo: Object;
  };
}

export interface DirectorType {
  peopleNm: string;
  peopleNmEn: string;
}

export interface ActorType {
  peopleNm: string;
  peopleNmEn: string;
  cast: string; // 역할
}

export interface ShowtypeType {
  showTypeGroupNm: string; // ex) 2D
  showTypeNm: string; // ex) 디지털
}

export interface CompanyType {
  companyCd: string;
  companyNm: string; // 제작사 이름
  companyNmEn: string; // 제작사 영문
  companyPartNm: string; // 제작사
}

export interface AuditType {
  watchGradeNm: string; // ex) 15세이상관람가
}
