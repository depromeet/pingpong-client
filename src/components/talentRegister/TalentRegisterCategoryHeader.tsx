import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import type { TalentRegisterProps } from '@/constants/talentRegister/talentRegisterType';
import { talentRegisterOrderAtom } from '@/store/components';
import { talentRegisterCategoryResetSelector } from '@/store/components/selectors';

import HeaderTitle from '../common/HeaderTitle';
import Arrow from '../icons/Arrow';

const SHARE = {
  src: '/images/talentShareCategory.png',
  alt: 'talentShareCategory',
  href: '/talent/register/share',
  contents: ['나누고 싶은 재능을', '1개만 선택해 주세요'],
  contents2: ['', ''],
  textColor: 'text-primary-red',
};

const EXCHANGE = {
  src: '/images/talentExchangeCategory.png',
  alt: 'talentExchangeCategory',
  href: '/talent/register/exchange',
  contents: ['주고 싶은 재능을', '1개만 선택해 주세요'],
  contents2: ['받고 싶은 재능을', '최대 5개 선택해 주세요'],
  textColor: 'text-primary-blue',
};

const TalentRegisterCategotyHeader = ({ sort, className }: TalentRegisterProps) => {
  const { src, alt, href, contents, contents2, textColor } = sort === 'SHARE' ? SHARE : EXCHANGE;
  const order = useRecoilValue(talentRegisterOrderAtom);
  const router = useRouter();
  const setCategoryReset = useSetRecoilState(talentRegisterCategoryResetSelector);

  const handleClick = () => {
    router.push(href);
    setCategoryReset(true);
  };

  return (
    <div className={`relative w-full ${className}`}>
      <button type="button" onClick={handleClick} className="block">
        <Arrow direction="right" width={10} height={15} className="absolute left-[16px] top-[60px]" />
      </button>
      <Image src={src} alt={alt} width={375} height={187} className="w-[100vw] h-[187px] z-99" priority />
      <HeaderTitle
        texts={sort === 'EXCHANGE' && order === 2 ? contents2 : contents}
        textClassName={textColor}
        className="absolute left-[16px] bottom-[15.5px]"
      />
    </div>
  );
};

export default TalentRegisterCategotyHeader;
