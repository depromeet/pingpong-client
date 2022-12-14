import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { ChangeEvent } from 'react';
import { useState } from 'react';

import Input from './Input';

export default {
  title: 'Commons/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return <Input {...{ value, onChange }} {...args} />;
};

// story
export const Default = Template.bind({});
Default.args = {
  placeholder: '',
  error: '',
  maxLength: 50,
  showCount: false,
};
