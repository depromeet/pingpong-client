import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Card from './Card';

export default {
  title: 'Commons/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Share = Template.bind({});

Share.args = {
  id: 8,
  isShare: false,
  title: '주고받고',
  subCategory: '프론트엔드 개발',
  likes: 0,
  memberId: 1,
  nickname: '감자',
  image: 'depromeet/yeonhee.png',
  ranks: '루키',
  takenTalents: ['대1중1소1', '대1중1소2', '대1중2소1'],
};

export const Exchange = Template.bind({});
Exchange.args = {
  id: 8,
  isShare: true,
  title: '디자인 가르쳐드립니다',
  subCategory: 'UI/UX',
  likes: 0,
  memberId: 1,
  nickname: '감자',
  image: 'depromeet/yeonhee.png',
  ranks: '루키',
  takenTalents: [],
};
