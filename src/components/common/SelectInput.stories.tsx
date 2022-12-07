import type { ComponentMeta, ComponentStory } from '@storybook/react';

import SelectInput from './SelectInput';

export default {
  title: 'Commons/SelectInput',
  component: SelectInput,
} as ComponentMeta<typeof SelectInput>;

const Template: ComponentStory<typeof SelectInput> = (args) => (
  <SelectInput {...args} href="talent/register/category" />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: '카테고리를 선택해 주세요.',
};

export const Value = Template.bind({});
Value.args = {
  placeholder: '카테고리를 선택해 주세요.',
  selectedInputList: ['액세서리/패션소품', '업무 자동화', '프론트엔드', '제2의 장벽'],
};
