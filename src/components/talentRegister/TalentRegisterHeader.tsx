import HeaderTitle from '../common/HeaderTitle';
import IconAnchor from '../common/IconAnchor';
import TalentRegisterHeaderIcon from '../icons/TalentRegisterHeaderIcon';
import { XIcon } from '../icons/XIcon';

interface TalentRegisterHeaderProps {
  sort: 'share' | 'exchange';
  className?: string;
}

const SHARE = {
  color: 'bg-primary-red',
  contents: ['나누고 싶은 재능에 대해', '알려주세요'],
};

const EXCHANGE = {
  color: 'bg-primary-blue',
  contents: ['주고 싶은 재능에 대해', '알려주세요'],
};

const TalentRegisterHeader = ({ sort, className }: TalentRegisterHeaderProps) => {
  const { color, contents } = sort === 'share' ? SHARE : EXCHANGE;

  return (
    <div className={`relative w-[375px] h-[213px] ${color} ${className}`}>
      <IconAnchor icon={<XIcon className="absolute right-[16px] top-[60px]" />} href="/talent/register" />
      <TalentRegisterHeaderIcon />
      <HeaderTitle texts={contents} className="absolute text-gray-100 left-[16px] bottom-[15.5px]" />
    </div>
  );
};

export default TalentRegisterHeader;
