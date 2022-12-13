import type { ComponentMeta, ComponentStory } from '@storybook/react';

import TalentRegisterTextRadioButtonGroup from './TalentRegisterTextRadioButtonGroup';

export default {
  title: 'Components/TalentRegisterTextRadioButtonGroup',
  component: TalentRegisterTextRadioButtonGroup,
} as ComponentMeta<typeof TalentRegisterTextRadioButtonGroup>;

const Template: ComponentStory<typeof TalentRegisterTextRadioButtonGroup> = (args) => (
  <TalentRegisterTextRadioButtonGroup {...args} />
);

export const Environment = Template.bind({});
Environment.args = {
  options: {
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
};

export const Period = Template.bind({});
Period.args = {
  options: {
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
};

export const Time = Template.bind({});
Time.args = {
  options: {
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
  },
};
