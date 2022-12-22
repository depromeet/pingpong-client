import type { ComponentMeta, ComponentStory } from '@storybook/react';

import SelectInput from './SelectInput';
import TextSelectInput from './TextSelectInput';

export default {
  title: 'Commons/TextSelectInput',
  component: TextSelectInput,
} as ComponentMeta<typeof TextSelectInput>;

const Template: ComponentStory<typeof TextSelectInput> = ({ option }) => {
  const input =
    option.key === 'default'
      ? []
      : [
          { id: 0, name: '액세서리/패션소품' },
          { id: 1, name: '업무 자동화' },
          { id: 2, name: '프론트엔드' },
          { id: 3, name: '백엔드' },
        ];

  return (
    <div className={option.className}>
      {option.title && (
        <div className="relative">
          <label htmlFor={option.htmlFor} className="text-t3">
            {option.title}
          </label>
          {option.required && <span className="absolute text-primary-red text-b4 ml-[3px] top-[0px]">*</span>}
        </div>
      )}
      {option.explanation && <span className="block text-b4 text-gray-400 pt-[2px]">{option.explanation}</span>}
      <SelectInput placeholder={option.placeholder} href={option.href} selectedInputList={input} className="mt-[8px]" />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  option: {
    key: 'default',
    href: '',
    title: '어떤 재능을 나누고 싶나요?',
    explanation: '',
    placeholder: '카테고리를 선택해 주세요.',
    htmlFor: 'category',
    required: true,
    className: 'mb-[28px]',
  },
};

export const Share = Template.bind({});
Share.args = {
  option: {
    key: 'subCategoryShare',
    href: '',
    title: '어떤 재능을 나누고 싶나요?',
    explanation: '',
    placeholder: '카테고리를 선택해 주세요.',
    htmlFor: 'category',
    required: true,
    className: 'mb-[28px]',
  },
};

export const Exchange = Template.bind({});
Exchange.args = {
  option: {
    key: 'subCategoryExchange',
    href: '',
    title: '어떤 재능을 주고 싶나요?',
    explanation: '',
    placeholder: '카테고리를 선택해 주세요.',
    htmlFor: 'category',
    required: true,
    className: 'mb-[28px]',
  },
};
