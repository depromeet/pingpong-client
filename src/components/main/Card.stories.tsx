import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Card from './Card';

export default {
  title: 'Main/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Share = Template.bind({});
Share.args = {
  like: 0,
  tag: { id: 'id', label: '소분류' },
  title: '테스트 제목입니다.',
  type: 'share',
  user: { nickname: '닉네임', profile: '/images/empty.png', rank: 'Beginner' },
};

export const Exchange = Template.bind({});
Exchange.args = {
  like: 0,
  tag: { id: 'id', label: '소분류' },
  title: '테스트 제목입니다.',
  type: 'exchange',
  user: { nickname: '닉네임', profile: '/images/empty.png', rank: 'Beginner' },
  needed: [
    { id: '1', label: '취업 · 이직 · 진로' },
    { id: '2', label: '기획 · PM' },
  ],
};
