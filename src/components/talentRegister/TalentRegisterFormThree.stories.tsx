import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { RecoilRoot } from 'recoil';

import useBackPage from '@/hooks/useBackPage';
import useNextPage from '@/hooks/useNextPage';
import { talentRegisterOrderAtom } from '@/store/components';

import Button from '../common/Button';
import TextSelectInput from '../common/TextSelectInput';
import TextTextarea from '../common/TextTextarea';
import TalentRegisterFormThree from './TalentRegisterFormThree';

const CATEGORY = {
  SHARE: {
    key: 'category2',
    href: 'talent/register/category/share',
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
    href: 'talent/register/category/exchange',
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
    key: 'explanation2',
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
    key: 'explanation2',
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

export default {
  title: 'Components/TalentRegisterForm/TalentRegisterFormOne',
  component: TalentRegisterFormThree,
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} as ComponentMeta<typeof TalentRegisterFormThree>;

const Template: ComponentStory<typeof TalentRegisterFormThree> = (args) => {
  const { handleOrder: onNextClick } = useNextPage(talentRegisterOrderAtom);
  const { handleOrder: onBackClick } = useBackPage(talentRegisterOrderAtom);

  return (
    <form className={`${args.className} px-[16px] py-[24.5px]`}>
      <TextSelectInput option={CATEGORY[args.sort]} />
      <TextTextarea option={EXPLANATION[args.sort]} />
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

export const Share = Template.bind({});
Share.args = {
  sort: 'SHARE',
};

export const Exchange = Template.bind({});
Exchange.args = {
  sort: 'EXCHANGE',
};
