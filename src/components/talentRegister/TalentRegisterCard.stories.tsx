import type { ComponentMeta, ComponentStory } from '@storybook/react';

import TalentRegisterCard from './TalentRegisterCard';

export default {
  title: 'Components/TalentRegisterCard',
  component: TalentRegisterCard,
} as ComponentMeta<typeof TalentRegisterCard>;

const Template: ComponentStory<typeof TalentRegisterCard> = (args) => <TalentRegisterCard {...args} />;

export const Share = Template.bind({});
Share.args = {
  sort: 'SHARE',
};

export const Exchange = Template.bind({});
Exchange.args = {
  sort: 'EXCHANGE',
};
