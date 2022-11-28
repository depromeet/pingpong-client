import type { ComponentMeta, Story } from '@storybook/react';
import type { PropsWithChildren } from 'react';

// TODO: alias Storybook에서도 파싱되게 세팅 추가해야함
import { TagStyleType } from '../../constants/components';
import type { TagProps } from './Tag';
import Tag from './Tag';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Commons/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: Story<PropsWithChildren<TagProps>> = (args) => <Tag {...args} />;

export const DarkTag = Template.bind({});

DarkTag.args = {
  styleType: TagStyleType.DARK,
  children: 'Sample Tag',
};

export const MediumTag = Template.bind({});

MediumTag.args = {
  styleType: TagStyleType.LIGHT,
  children: 'Sample Tag',
};

export const LightTag = Template.bind({});

LightTag.args = {
  styleType: TagStyleType.OUTLINE,
  children: 'Sample Tag',
};
