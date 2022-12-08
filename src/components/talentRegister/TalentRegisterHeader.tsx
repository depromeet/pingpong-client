import { EXCHANGE, SHARE } from '@/constants/talentRegister/talentRegisterHeaderConstant';
import type { TalentRegisterProps } from '@/constants/talentRegister/talentRegisterType';

import HeaderTitle from '../common/HeaderTitle';
import IconAnchor from '../common/IconAnchor';
import TalentRegisterHeaderIcon from '../icons/TalentRegisterHeaderIcon';
import { XIcon } from '../icons/XIcon';

const TalentRegisterHeader = ({ sort, className }: TalentRegisterProps) => {
  const { color, contents } = sort === 'SHARE' ? SHARE : EXCHANGE;

  return (
    <div className={`relative w-full h-[213px] ${color} ${className}`}>
      <IconAnchor icon={<XIcon className="absolute right-[16px] top-[60px]" />} href="/talent/register" />
      <TalentRegisterHeaderIcon className="w-full" />
      <HeaderTitle texts={contents} textClassName="text-gray-100" className="absolute left-[16px] bottom-[15.5px]" />
    </div>
  );
};

export default TalentRegisterHeader;
