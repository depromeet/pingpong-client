import type { ComponentMeta, ComponentStory } from '@storybook/react';

import TalentRegister from '../../pages/talent/register';

export default {
  title: 'Pages/Talent/TalentRegister',
  component: TalentRegister,
} as ComponentMeta<typeof TalentRegister>;

const Template: ComponentStory<typeof TalentRegister> = () => <TalentRegister />;

export const Default = Template.bind({});
Default.args = {};
