import React, { memo } from 'react';
import { useRecoilValue } from 'recoil';

import { tabAtomFamily } from '@/store/components';

import SelectInput from './SelectInput';

export interface TextSelectInputOptionProps {
  key: string;
  href: string;
  title?: string;
  explanation?: string;
  placeholder?: string;
  htmlFor?: string;
  required?: boolean;
  className?: string;
}

interface TextSelectInputProps {
  option: TextSelectInputOptionProps;
}

const TextSelectInput = ({
  option: { key, title, href, explanation, placeholder, htmlFor, required, className },
}: TextSelectInputProps) => {
  const input = useRecoilValue(tabAtomFamily(key));

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
      <SelectInput placeholder={placeholder} href={href} selectedInputList={input} className="mt-[8px]" />
    </div>
  );
};

export default memo(TextSelectInput);
