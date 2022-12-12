import Image from 'next/image';
import { useRecoilValue } from 'recoil';

import type { TalentRegisterProps } from '@/constants/talentRegister/talentRegisterType';
import { talentRegisterOrderAtom } from '@/store/components';

import HeaderTitle from '../common/HeaderTitle';
import IconAnchor from '../common/IconAnchor';
import { XIcon } from '../icons/XIcon';

const SHARE = {
  src: '/images/talentShare.png',
  alt: 'talentShare',
  contents: ['나누고 싶은 재능에 대해', '알려주세요'],
  contents2: ['', ''],
};

const EXCHANGE = {
  src: '/images/talentExchange.png',
  alt: 'talentExchange',
  contents: ['주고 싶은 재능에 대해', '알려주세요'],
  contents2: ['받고 싶은 재능에 대해', '알려주세요'],
};

const TalentRegisterHeader = ({ sort, className }: TalentRegisterProps) => {
  const { src, alt, contents, contents2 } = sort === 'SHARE' ? SHARE : EXCHANGE;
  const order = useRecoilValue(talentRegisterOrderAtom);

  return (
    <div className={`relative w-full ${className}`}>
      <IconAnchor icon={<XIcon className="absolute right-[16px] top-[60px]" />} href="/talent/register" />
      <Image src={src} alt={alt} width={375} height={187} className="w-full z-99" priority />
      <HeaderTitle
        texts={sort === 'EXCHANGE' && order === 2 ? contents2 : contents}
        textClassName="text-gray-100"
        className="absolute left-[16px] bottom-[15.5px]"
      />
    </div>
  );
};

export default TalentRegisterHeader;
