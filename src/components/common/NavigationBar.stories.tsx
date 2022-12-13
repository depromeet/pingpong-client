import type { ComponentMeta, ComponentStory } from '@storybook/react';

import NavigationBar from './NavigationBar';

export default {
  title: 'Commons/NavigationBar',
  component: NavigationBar,
} as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = () => {
  return <NavigationBar />;
};

export const Default = Template.bind({});
Default.args = {};
