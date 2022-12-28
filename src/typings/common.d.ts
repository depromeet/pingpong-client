import type { ExchangePeriodLabel, ExchangeTimeLabel, ExchangeTypeLabel } from '@/constants';

interface DefaultProps {
  value?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
  className?: string;
}

interface PopupProps {
  title?: string;
  content?: string;
  children?: ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
}

interface HeaderProps {
  title: string;
  onClick?: () => void;
  activeButton?: string;
  className?: string;
}

interface CardInfo {
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
  hideTakenTalents?: boolean;
}

interface MainCategoryInfo {
  id: number;
  name: string;
  image: string;
}

interface LinkInfo {
  id: number;
  content: string;
}

interface PostInfo {
  id: number;
  title: string;
  content: string;
  isShare: false;
  subCategory: string;
  links: LinkInfo[];
  chatLink: string;
  likes: number;
  takenContent: string;
  takenTalents: string[];
  exchangeType: keyof typeof ExchangeTypeLabel;
  exchangePeriod: keyof typeof ExchangePeriodLabel;
  exchangeTime: keyof typeof ExchangeTimeLabel;
  memberId: number;
  nickname: string;
  image: string;
  ranks: string;
  isLike: false;
}
interface CategoryProps {
  id: number;
  name: string;
}

interface TalentProps {
  id: number;
  content: string;
}

interface UserInfo {
  memberId: number;
  nickname: string;
  image: string;
  introduction: string;
  ranks: string;
  ranksImage: string;
  likeCount: string;
  profileLink: string;
  givenTalents: TalentProps[];
  takenTalents: TalentProps[];
}

interface EditUserInfo {
  nickname: string;
  introduction: string;
  profileLink: string;
  givenTalents: number[];
  takenTalents: number[];
}
