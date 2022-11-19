import type { ComponentMeta, Story } from '@storybook/react';

import type { TagProps } from './Tag';
import Tag from './Tag';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const DarkTag = Template.bind({});

DarkTag.args = {
  tagStyle: 'dark',
  children: 'Sample Tag',
};

export const MediumTag = Template.bind({});

MediumTag.args = {
  tagStyle: 'medium',
  children: 'Sample Tag',
};

export const LightTag = Template.bind({});

LightTag.args = {
  tagStyle: 'light',
  children: 'Sample Tag',
};