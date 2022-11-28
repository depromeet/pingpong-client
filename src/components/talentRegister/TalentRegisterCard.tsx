import Link from 'next/link';

import { uniqueId } from '@/lib/utils';

import { PingIcon } from '../icons/PingIcon';
import { PingPongIcon } from '../icons/PingPongIcon';

const SHARE = {
  bgColor: 'bg-bg-red',
  textColor: 'text-primary-red',
  title: '재능 나눔',
  contents: ['상대방에게 나의 재능을', '나눌 수 있어요'],
  icon: <PingIcon />,
  iconPosition: 'right-[25px] bottom-[15.5px]',
  href: '/talent/register/share',
};

const EXCHANGE = {
  bgColor: 'bg-bg-blue',
  textColor: 'text-primary-blue',
  title: '재능 교환',
  contents: ['상대방의 재능과', '나의 재능을 공유할 수 있어요'],
  icon: <PingPongIcon />,
  iconPosition: 'right-[20px] bottom-[21.5px]',
  href: '/talent/register/exchange',
};

interface TalentRegisterCardProps {
  sort: 'share' | 'exchange';
  className?: string;
}

const TalentRegisterCard = ({ sort, className }: TalentRegisterCardProps) => {
  const { bgColor, textColor, title, contents, icon, iconPosition, href } = sort === 'share' ? SHARE : EXCHANGE;

  return (
    <Link href={`${href}`}>
      <div className={`relative h-[171.5px] rounded-[16px] p-[20px] ${bgColor} ${className}`}>
        <h2 className={`text-h2 pb-[4px] ${textColor}`}>{title}</h2>
        {contents.map((content) => {
          const uniqueKey = uniqueId('key');
          return (
            <span key={uniqueKey} className="block text-b2 text-gray-500">
              {content}
            </span>
          );
        })}
        <div className={`absolute ${iconPosition}`}>{icon}</div>
      </div>
    </Link>
  );
};

export default TalentRegisterCard;
