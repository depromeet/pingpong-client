import type { ExchangePeriodLabel, ExchangeTimeLabel, ExchangeTypeLabel } from '@/constants';

interface DefaultProps {
  value?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
  className?: string;
}

interface PopupProps {
  isShowing: boolean;
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
  isButtonDisabled?: boolean;
  buttonText?: string;
  className?: string;
  onArrowClick?: () => void;
  onActiveButtonClick?: () => void;
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
  hideProfile?: boolean;
}

interface MainCategory {
  id: number;
  image: string;
  midCategories: MidCategory[];
  name: string;
}

interface MidCategory {
  id: number;
  name: string;
  subCategories: SubCategory[];
}

interface SubCategory {
  id: number;
  name: string;
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
  backgroundImage: string;
  memberId: number;
  nickname: string;
  image: string;
  ranks: string;
  isLike: false;
}

type PostRegisterInfo = Pick<
  PostInfo,
  | 'title'
  | 'content'
  | 'isShare'
  | 'subCategoryId'
  | 'links'
  | 'chatLink'
  | 'takenTalentIds'
  | 'takenContent'
  | 'exchangeType'
  | 'exchangePeriod'
  | 'exchangeTime'
>;

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

export interface Option {
  id: number | string;
  label: string;
}
