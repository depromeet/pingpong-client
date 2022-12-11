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

interface Header {
  title: string;
  activeButton?: string;
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
