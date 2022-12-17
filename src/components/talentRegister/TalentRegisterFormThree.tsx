import type { TalentRegisterProps } from '@/constants/talentRegister/talentRegisterType';
import useBackPage from '@/hooks/useBackPage';
import useNextPage from '@/hooks/useNextPage';
import { SetTalnetRegisterCategorySelectInputKey } from '@/lib/utils';
import { talentRegisterOrderAtom } from '@/store/components';

import Button from '../common/Button';
import TextSelectInput from '../common/TextSelectInput';
import TextTextarea from '../common/TextTextarea';

const CATEGORY = {
  SHARE: {
    key: 'category2',
    href: '/talent/register/share/category',
    title: '어떤 재능을 나누고 싶나요?',
    explanation: '',
    placeholder: '카테고리를 선택해 주세요.',
    htmlFor: 'category',
    selectedInputList: ['영어'],
    required: true,
    className: 'mb-[28px]',
  },
  EXCHANGE: {
    key: 'category2',
    href: '/talent/register/exchange/category',
    title: '어떤 재능을 받고 싶나요?',
    explanation: '',
    placeholder: '카테고리를 선택해 주세요.',
    htmlFor: 'category',
    selectedInputList: ['영어'],
    required: true,
    className: 'mb-[28px]',
  },
};

const EXPLANATION = {
  SHARE: {
    key: 'takenContent',
    title: '상세 설명',
    explanation: '나누고 싶은 재능에 대해 설명해 주세요.',
    placeholder: '최대 300자 까지 입력이 가능해요.',
    htmlFor: 'explanation',
    maxLength: 300,
    error: '최대 300자까지 입력이 가능해요.',
    required: true,
    className: 'mb-[16px]',
  },
  EXCHANGE: {
    key: 'takenContent',
    title: '상세 설명',
    explanation: '받고 싶은 재능에 대해 설명해 주세요.',
    placeholder: '최대 300자 까지 입력이 가능해요.',
    htmlFor: 'explanation',
    maxLength: 300,
    error: '최대 300자까지 입력이 가능해요.',
    required: true,
    className: 'mb-[16px]',
  },
};

const TalentRegisterFormThree = ({ className, sort }: TalentRegisterProps) => {
  const { handleOrder: onNextClick } = useNextPage(talentRegisterOrderAtom);
  const { handleOrder: onBackClick } = useBackPage(talentRegisterOrderAtom);
  const categoryKey = SetTalnetRegisterCategorySelectInputKey();

  return (
    <form className={`${className} px-[16px] py-[24.5px]`}>
      <TextSelectInput option={{ ...CATEGORY[sort], key: categoryKey }} />
      <TextTextarea option={EXPLANATION[sort]} />
      <div className="grid grid-cols-[0.3fr_1fr] gap-x-[8px]">
        <Button buttonStyle="SECONDARY" type="button" onClick={onBackClick} className="w-full h-[48px]">
          이전
        </Button>
        <Button type="button" onClick={onNextClick} className="w-full h-[48px]">
          다음
        </Button>
      </div>
    </form>
  );
};

export default TalentRegisterFormThree;
