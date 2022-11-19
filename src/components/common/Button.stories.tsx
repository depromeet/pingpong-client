import type { ComponentMeta, Story } from '@storybook/react';

import type { ButtonProps } from './Button';
import Button from './Button';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const mockClickHandler = () => {
  console.log('clicked');
};

export const Primary = Template.bind({});

Primary.args = {
  buttonStyle: 'primary',
  hasIcon: true,
  iconName: 'arrow-right',
  position: 'right',
  children: 'Primary Button',
  clickHandler: mockClickHandler,
};

export const Secondary = Template.bind({});

Secondary.args = {
  buttonStyle: 'secondary',
  hasIcon: true,
  iconName: 'arrow-right',
  position: 'right',
  children: 'Secondary Button',
  clickHandler: mockClickHandler,
};
