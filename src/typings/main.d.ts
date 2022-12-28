//FIXME: maybe changed by server
type User = {
  nickname: string;
  profile: string;
  rank: 'Rookie' | 'Beginner' | 'Junior' | 'Pro';
};

//FIXME:
type Tag = {
  id: string;
  label: string;
};

export interface MainCategory {
  id: number;
  image: string;
  midCategories: MidCategory[];
  name: string;
}

export interface MidCategory {
  id: number;
  name: string;
}

export interface CategoryFilterParams {
  isShare: boolean;
  mainCategory: number;
  midCategory: number;
  subCategory: number;
}
