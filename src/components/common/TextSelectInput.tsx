import React, { memo } from 'react';

import SelectInput from './SelectInput';

export interface TextSelectInputOptionProps {
  key: string;
  href: string;
  title?: string;
  explanation?: string;
  placeholder?: string;
  htmlFor?: string;
  selectedInputList?: string[];
  required?: boolean;
  className?: string;
}

interface TextSelectInputProps {
  option: TextSelectInputOptionProps;
}

const TextSelectInput = ({
  option: { key, title, href, explanation, placeholder, htmlFor, selectedInputList, required, className },
}: TextSelectInputProps) => {
  return (
    <div className={className}>
      {title && (
        <div>
          <label htmlFor={htmlFor} className="text-t3">
            {title}
          </label>
          {required && <span className="text-primary-red text-b4"> *</span>}
        </div>
      )}
      {explanation && <span className="block text-b4 text-gray-400 pt-[2px]">{explanation}</span>}
      <SelectInput placeholder={placeholder} href={href} selectedInputList={selectedInputList} className="mt-[8px]" />
    </div>
  );
};

export default memo(TextSelectInput);
