import { useMemo } from 'react';

import { uniqueId } from '@/lib/utils';

import { PingIcon } from '../icons/PingIcon';
import { PingPongIcon } from '../icons/PingPongIcon';

interface TalentRegisterCardProps {
  sort: 'share' | 'exchange';
  className?: string;
}

const TalentRegisterCard = ({ sort, className }: TalentRegisterCardProps) => {
  const cardInfo = useMemo(() => {
    return sort === 'share'
      ? {
          bgColor: 'bg-bg-red',
          textColor: 'text-primary-red',
          title: '재능 나눔',
          contents: ['상대방에게 나의 재능을', '나눌 수 있어요'],
          icon: <PingIcon />,
          iconPosition: 'right-[25px] bottom-[15.5px]',
        }
      : {
          bgColor: 'bg-bg-blue',
          textColor: 'text-primary-blue',
          title: '재능 교환',
          contents: ['상대방의 재능과', '나의 재능을 공유할 수 있어요'],
          icon: <PingPongIcon />,
          iconPosition: 'right-[20px] bottom-[21.5px]',
        };
  }, [sort]);

  return (
    <div className={`relative h-[171.5px] rounded-[16px] p-[20px] ${cardInfo.bgColor} ${className}`}>
      <h2 className={`text-h2 pb-[4px] ${cardInfo.textColor}`}>{cardInfo.title}</h2>
      {cardInfo.contents.map((content) => {
        const uniqueKey = uniqueId('key');
        return (
          <span key={uniqueKey} className="block text-b2 text-gray-500">
            {content}
          </span>
        );
      })}
      <div className={`absolute ${cardInfo.iconPosition}`}>{cardInfo.icon}</div>
    </div>
  );
};

export default TalentRegisterCard;
