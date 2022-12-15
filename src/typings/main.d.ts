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

interface MainCategory {
  id: number;
  image: string;
  midCategories: MidCategory[];
  name: string;
}

interface MidCategory {
  id: number;
  name: string;
}
