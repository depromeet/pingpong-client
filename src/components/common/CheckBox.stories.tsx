import type { ComponentMeta, ComponentStory } from '@storybook/react';

import CheckBox from './CheckBox';

export default {
  title: 'Commons/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => {
  return <CheckBox {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Text label',
};
