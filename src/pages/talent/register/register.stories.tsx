import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Register from '.';

export default {
  title: 'Pages/Talent/Register',
  component: Register,
} as ComponentMeta<typeof Register>;

const Template: ComponentStory<typeof Register> = () => <Register />;

export const Default = Template.bind({});
Default.args = {};
