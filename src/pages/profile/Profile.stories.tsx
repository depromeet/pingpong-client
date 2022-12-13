import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Profile from './index';

export default {
  title: 'Pages/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = () => <Profile />;

export const Default = Template.bind({});
Default.args = {};
