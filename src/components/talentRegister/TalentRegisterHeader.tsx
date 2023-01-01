import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import type { TalentRegisterProps } from '@/constants/talentRegister/talentRegisterType';
import { usePopupWithBlock } from '@/hooks/usePopupWithBlock';
import { talentRegisterOrderAtom } from '@/store/components';
import { talentRegisterResetSelector } from '@/store/components/selectors';

import HeaderTitle from '../common/HeaderTitle';
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
  const setReset = useSetRecoilState(talentRegisterResetSelector);
  const router = useRouter();

  usePopupWithBlock({
    title: '게시글 작성을 그만두시겠어요?',
    content: '지금까지 작성한 내용은 저장되지 않아요',
    confirmText: '그만둘래요',
    onConfirm() {
      router.push('/talent/register');
      setReset(true);
    },
    cancelText: '취소',
  });

  const handleHistoryBack = () => {
    router.back();
  };

  return (
    <div className={`relative w-full ${className}`}>
      <button type="button" onClick={handleHistoryBack} className="block">
        <XIcon className="absolute right-[16px] top-[60px]" />
      </button>
      <Image src={src} alt={alt} width={375} height={187} className="w-full z-99" priority />
      <HeaderTitle
        texts={sort === 'EXCHANGE' && (order === 2 || order == 3) ? contents2 : contents}
        textClassName="text-gray-100"
        className="absolute left-[16px] bottom-[15.5px]"
      />
    </div>
  );
};

export default TalentRegisterHeader;
