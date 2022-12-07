import type { ComponentMeta, ComponentStory } from '@storybook/react';

import TextTextarea from './TextTextarea';

export default {
  title: 'Commons/TextTextarea',
  component: TextTextarea,
} as ComponentMeta<typeof TextTextarea>;

const Template: ComponentStory<typeof TextTextarea> = (args) => <TextTextarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  option: {
    key: 'explanation',
    title: '상세 설명',
    explanation: '나누고 싶은 재능에 대해 설명해 주세요.',
    placeholder: '최대 300자 까지 입력이 가능해요.',
    htmlFor: 'explanation',
    maxLength: 300,
    required: true,
    className: 'mb-[16px]',
  },
};
