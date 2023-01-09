import type { ChangeEvent } from 'react';
import React, { memo, useCallback } from 'react';
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
  required?: boolean;
  className?: string;
}

interface TextInputProps {
  option: TextInputOptionProps;
}

const TextInput = ({
  option: { key, title, explanation, placeholder, htmlFor, showCount, maxLength, error, required, className },
}: TextInputProps) => {
  const [input, setInput] = useRecoilState(talentRegisterInputSelectorFamily(key));

  const handleContentsChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setInput((prev) => ({ ...prev, contents: event.target.value })),
    [setInput],
  );

  const handleClear = useCallback(() => {
    setInput((prev) => ({ ...prev, contents: '' }));
  }, [setInput]);

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
      <Input
        id={htmlFor}
        placeholder={placeholder}
        showCount={showCount}
        maxLength={maxLength}
        value={input.contents}
        onChange={handleContentsChange}
        handleClear={handleClear}
        error={maxLength && input.contents.length >= maxLength ? error : undefined}
        className="mt-[8px]"
      />
    </div>
  );
};

export default memo(TextInput);
