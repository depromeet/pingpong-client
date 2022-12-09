import type { ComponentMeta, ComponentStory } from '@storybook/react';

import TalentRegisterExchange from './index';

export default {
  title: 'Pages/Talent/TalentRegisterExchange',
  component: TalentRegisterExchange,
} as ComponentMeta<typeof TalentRegisterExchange>;

const Template: ComponentStory<typeof TalentRegisterExchange> = () => <TalentRegisterExchange />;

export const Default = Template.bind({});
Default.args = {};
