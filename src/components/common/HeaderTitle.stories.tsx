import type { ComponentMeta, ComponentStory } from '@storybook/react';

import HeaderTitle from './HeaderTitle';

export default {
  title: 'Commons/HeaderTitle',
  component: HeaderTitle,
} as ComponentMeta<typeof HeaderTitle>;

const Template: ComponentStory<typeof HeaderTitle> = (args) => <HeaderTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  texts: ['Ping-Pong !', '재능을 공유 할 방식을 선택해주세요'],
};
