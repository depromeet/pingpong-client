import type { ComponentMeta, ComponentStory } from '@storybook/react';

import TalentRegisterHeader from './TalentRegisterHeader';

export default {
  title: 'Components/TalentRegisterHeader',
  component: TalentRegisterHeader,
} as ComponentMeta<typeof TalentRegisterHeader>;

const Template: ComponentStory<typeof TalentRegisterHeader> = (args) => <TalentRegisterHeader {...args} />;

export const Share = Template.bind({});
Share.args = {
  sort: 'SHARE',
};

export const Exchange = Template.bind({});
Exchange.args = {
  sort: 'EXCHANGE',
};
