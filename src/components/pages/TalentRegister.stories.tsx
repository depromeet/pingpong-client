import type { ComponentMeta, ComponentStory } from '@storybook/react';

import TalentRegister from '../../pages/talent/register';

export default {
  title: 'Pages/Talent/TalentTalentRegister',
  component: TalentRegister,
} as ComponentMeta<typeof TalentRegister>;

const Template: ComponentStory<typeof TalentRegister> = () => <TalentRegister />;

export const Default = Template.bind({});
Default.args = {};
