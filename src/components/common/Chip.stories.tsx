import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Chip from './Chip';

export default {
  title: 'Chip',
  component: Chip,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

const handleClose = () => {
  console.log('handleClose');
};

export const Default = Template.bind({});

Default.args = {
  children: '랄라',
  handleClick: handleClose,
};
