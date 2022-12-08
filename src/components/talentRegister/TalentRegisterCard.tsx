import Link from 'next/link';

import { EXCHANGE, SHARE } from '@/constants/talentRegister/talentRegisterCardConstant';
import type { TalentRegisterProps } from '@/constants/talentRegister/talentRegisterType';
import { uniqueId } from '@/lib/utils';

const TalentRegisterCard = ({ sort, className }: TalentRegisterProps) => {
  const { bgColor, textColor, title, contents, icon, iconPosition, href } = sort === 'SHARE' ? SHARE : EXCHANGE;

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
