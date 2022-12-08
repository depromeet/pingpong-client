import { PingIcon } from '@/components/icons/PingIcon';
import { PingPongIcon } from '@/components/icons/PingPongIcon';

export const SHARE = {
  bgColor: 'bg-bg-red',
  textColor: 'text-primary-red',
  title: '재능 나눔',
  contents: ['상대방에게 나의 재능을', '나눌 수 있어요'],
  icon: <PingIcon />,
  iconPosition: 'right-[25px] bottom-[15.5px]',
  href: '/talent/register/share',
};

export const EXCHANGE = {
  bgColor: 'bg-bg-blue',
  textColor: 'text-primary-blue',
  title: '재능 교환',
  contents: ['상대방의 재능과', '나의 재능을 공유할 수 있어요'],
  icon: <PingPongIcon />,
  iconPosition: 'right-[20px] bottom-[21.5px]',
  href: '/talent/register/exchange',
};
