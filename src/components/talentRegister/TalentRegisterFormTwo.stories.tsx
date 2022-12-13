import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { RecoilRoot } from 'recoil';

import useBackPage from '@/hooks/useBackPage';
import useNextPage from '@/hooks/useNextPage';
import { talentRegisterOrderAtom } from '@/store/components';

import Button from '../common/Button';
import TalentRegisterFormTwo from './TalentRegisterFormTwo';
import TalentRegisterTextRadioButtonGroup from './TalentRegisterTextRadioButtonGroup';

const ENVIRONMENT = {
  SHARE: {
    radioList: [
      {
        key: 'ONLINE',
        label: '온라인',
      },
      {
        key: 'OFFLINE',
        label: '오프라인',
      },
      {
        key: 'BOTH',
        label: '상관 없음',
      },
    ],
    inputKey: 'radioButtonEnvironment',
    htmlFor: 'radioButtonEnvironment',
    title: '재능 나눔 환경을 선택해 주세요',
    size: 'small' as const,
  },
  EXCHANGE: {
    radioList: [
      {
        key: 'ONLINE',
        label: '온라인',
      },
      {
        key: 'OFFLINE',
        label: '오프라인',
      },
      {
        key: 'BOTH',
        label: '상관 없음',
      },
    ],
    inputKey: 'radioButtonEnvironment',
    htmlFor: 'radioButtonEnvironment',
    title: '재능 교환 환경을 선택해 주세요',
    size: 'small' as const,
  },
};

const PERIOD = {
  SHARE: {
    radioList: [
      {
        key: 'DAYLY',
        label: '1주 미만',
      },
      {
        key: 'WEEKLY',
        label: '1주 이상',
      },
      {
        key: 'MONTHLY',
        label: '1개월 이상',
      },
      {
        key: 'NONE',
        label: '조율 가능',
      },
    ],
    inputKey: 'radioButtonPeriod',
    htmlFor: 'radioButtonPeriod',
    title: '재능 나눔 기간을 선택해 주세요',
  },
  EXCHANGE: {
    radioList: [
      {
        key: 'DAYLY',
        label: '1주 미만',
      },
      {
        key: 'WEEKLY',
        label: '1주 이상',
      },
      {
        key: 'MONTHLY',
        label: '1개월 이상',
      },
      {
        key: 'NONE',
        label: '조율 가능',
      },
    ],
    inputKey: 'radioButtonPeriod',
    htmlFor: 'radioButtonPeriod',
    title: '재능 교환 기간을 선택해 주세요',
  },
};

const TIME = {
  radioList: [
    {
      key: 'MORNING',
      label: '오전',
      subLabel: '6AM - 12PM',
    },
    {
      key: 'AFTERNOON',
      label: '오후',
      subLabel: '12PM - 6PM',
    },
    {
      key: 'NIGHT',
      label: '밤',
      subLabel: '6PM - 12AM',
    },
    {
      key: 'NONE',
      label: '조율 가능',
    },
  ],
  inputKey: 'radioButtonTime',
  htmlFor: 'radioButtonTime',
  title: '선호하는 시간대를 선택하세요',
};

export default {
  title: 'Components/TalentRegisterForm/TalentRegisterFormTwo',
  component: TalentRegisterFormTwo,
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} as ComponentMeta<typeof TalentRegisterFormTwo>;

const Template: ComponentStory<typeof TalentRegisterFormTwo> = (args) => {
  const { handleOrder: onNextClick } = useNextPage(talentRegisterOrderAtom);
  const { handleOrder: onBackClick } = useBackPage(talentRegisterOrderAtom);

  return (
    <form className={`${args.className} px-[16px] py-[24.5px]`}>
      <TalentRegisterTextRadioButtonGroup options={ENVIRONMENT[args.sort]} />
      <TalentRegisterTextRadioButtonGroup options={PERIOD[args.sort]} />
      <TalentRegisterTextRadioButtonGroup options={TIME} />
      <div className="grid grid-cols-[0.3fr_1fr] gap-x-[8px]">
        <Button buttonStyle="SECONDARY" type="button" onClick={onBackClick} className="w-full h-[48px]">
          이전
        </Button>
        <Button type="button" onClick={onNextClick} className="w-full h-[48px]">
          {args.sort === 'SHARE' ? '재능 나눔 등록하기' : '재능 교환 등록하기'}
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
