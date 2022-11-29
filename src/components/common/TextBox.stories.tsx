import type { ComponentMeta, ComponentStory } from '@storybook/react';

import TextBox from './TextBox';

export default {
  title: 'Commons/TextBox',
  component: TextBox,
} as ComponentMeta<typeof TextBox>;

const Template: ComponentStory<typeof TextBox> = (args) => <TextBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <>이런내용을 작성해주세요.</>,
  disabled: true,
};
