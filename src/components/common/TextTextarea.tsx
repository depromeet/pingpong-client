import React, { memo } from 'react';
import { useRecoilState } from 'recoil';

import { talentRegisterInputSelectorFamily } from '@/store/components/selectors';

import Textarea from './Textarea';

export interface TextTextareaOptionProps {
  key: string;
  title?: string;
  explanation?: string;
  placeholder?: string;
  maxLength: number;
  error?: string;
  htmlFor: string;
  required?: boolean;
  className?: string;
}

interface TextTextareaProps {
  option: TextTextareaOptionProps;
}

const TextTextarea = ({
  option: { key, title, explanation, maxLength, error, placeholder, htmlFor, required, className },
}: TextTextareaProps) => {
  const [input, setInput] = useRecoilState(talentRegisterInputSelectorFamily(key));

  return (
    <div className={className}>
      {title && (
        <div className="relative">
          <label htmlFor={htmlFor} className="text-t3">
            {title}
          </label>
          {required && <span className="absolute text-primary-red text-b4 ml-[3px] top-[0px]">*</span>}
        </div>
      )}
      {explanation && <span className="block text-b4 text-gray-400 pt-[2px]">{explanation}</span>}
      <Textarea
        value={input.contents}
        maxLength={maxLength}
        placeholder={placeholder}
        error={maxLength && input.contents.length >= maxLength ? error : undefined}
        className="mt-[8px]"
        onChange={(value) => setInput((prev) => ({ ...prev, contents: value }))}
      />
    </div>
  );
};

export default memo(TextTextarea);
