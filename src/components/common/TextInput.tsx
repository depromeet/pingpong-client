import React, { memo } from 'react';
import { useRecoilState } from 'recoil';

import { talentRegisterInputSelectorFamily } from '@/store/components/selectors';

import Input from './Input';

export interface TextInputOptionProps {
  key: string;
  title?: string;
  explanation?: string;
  placeholder?: string;
  htmlFor?: string;
  showCount?: boolean;
  maxLength?: number;
  error?: string;
}

interface TextInputProps {
  option: TextInputOptionProps;
}

const TextInput = ({
  option: { key, title, explanation, placeholder, htmlFor, showCount, maxLength, error },
}: TextInputProps) => {
  const [input, setInput] = useRecoilState(talentRegisterInputSelectorFamily(key));

  return (
    <>
      {title && (
        <label htmlFor={htmlFor} className="text-t3">
          {title}
        </label>
      )}
      {explanation && <span className="block text-b4 text-gray-400 pt-[2px]">{explanation}</span>}
      <Input
        id={htmlFor}
        placeholder={placeholder}
        showCount={showCount}
        maxLength={maxLength}
        value={input.contents}
        onChange={(value) => setInput((prev) => ({ ...prev, contents: value }))}
        error={maxLength && input.contents.length >= maxLength ? error : undefined}
        className="mt-[8px]"
      />
    </>
  );
};

export default memo(TextInput);
