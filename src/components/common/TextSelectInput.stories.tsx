import type { ComponentMeta, ComponentStory } from '@storybook/react';

import TextSelectInput from './TextSelectInput';

export default {
  title: 'Commons/TextSelectInput',
  component: TextSelectInput,
} as ComponentMeta<typeof TextSelectInput>;

const Template: ComponentStory<typeof TextSelectInput> = (args) => <TextSelectInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  option: {
    key: 'category',
    href: 'talent/register/category',
    title: '어떤 재능을 주고 싶나요?',
    explanation: '',
    placeholder: '카테고리를 선택해 주세요.',
    htmlFor: 'category',
    selectedInputList: ['영어'],
    required: true,
    className: 'mb-[28px]',
  },
};
