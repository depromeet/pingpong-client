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

interface Card {
  id: number;
  isShare: boolean;
  title: string;
  subCategory: string;
  likes: number;
  memberId: number;
  nickname: string;
  image: string;
  ranks: string;
  takenTalents: string[];
}
