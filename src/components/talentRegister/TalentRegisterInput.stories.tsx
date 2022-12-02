import type { ComponentMeta, ComponentStory } from '@storybook/react';

import TalentRegisterInput from './TalentRegisterInput';

export default {
  title: 'Components/TalentRegisterInput',
  component: TalentRegisterInput,
} as ComponentMeta<typeof TalentRegisterInput>;

const Template: ComponentStory<typeof TalentRegisterInput> = (args) => <TalentRegisterInput {...args} />;

export const Title = Template.bind({});
Title.args = {
  option: {
    key: 'title',
    title: '게시글 제목',
    explanation: '',
    placeholder: '최대 30자 까지 입력이 가능해요.',
    htmlFor: 'title',
    showCount: true,
    maxLength: 30,
  },
};

export const Link = Template.bind({});
Link.args = {
  option: {
    key: 'link',
    title: '링크',
    explanation: '재능을 보여줄 수 있는 링크가 있다면 입력해 주세요.(선택)',
    placeholder: '링크를 입력해주세요.',
    htmlFor: 'link',
  },
};
export const OpenChatLink = Template.bind({});
OpenChatLink.args = {
  option: {
    key: 'chatLink',
    title: '오픈채팅 링크',
    explanation: '카카오톡에서 오픈채팅 생성 후 링크를 붙여넣어 주세요.',
    placeholder: '링크를 입력해주세요.',
    htmlFor: 'openChatLink',
  },
};
