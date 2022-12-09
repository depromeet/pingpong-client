import type { ComponentMeta, ComponentStory } from '@storybook/react';

import TalentRegisterShare from './index';

export default {
  title: 'Pages/Talent/TalentRegisterShare',
  component: TalentRegisterShare,
} as ComponentMeta<typeof TalentRegisterShare>;

const Template: ComponentStory<typeof TalentRegisterShare> = () => <TalentRegisterShare />;

export const Default = Template.bind({});
Default.args = {};
