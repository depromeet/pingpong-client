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

type Card =
  | {
      type: 'exchange';
      user?: User;
      title: string;
      like: number;
      tag: Tag;
      needed?: Tag[];
    }
  | {
      type: 'share';
      user?: User;
      title: string;
      like: number;
      tag: Tag;
    };
