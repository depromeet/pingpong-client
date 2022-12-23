import { memo, useEffect, useRef, useState } from 'react';
import { uniqueId } from 'src/lib/utils';

import type { DefaultProps } from '@/typings/common';

import { CheckIcon } from '../icons';

interface Props extends Omit<DefaultProps, 'value'> {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckBox = ({ disabled, checked, label, onChange, ...props }: Props) => {
  const id = useRef('');

  useEffect(() => {
    id.current = uniqueId('radio');
  }, []);

  return (
    <div
      className={`flex items-center gap-3 p-3 border cursor-pointer w-fit rounded-3xl ${
        checked ? 'border-gray-500' : 'border-gray-200 '
      }`}
      onClick={() => onChange(!checked)}
    >
      <input
        type="checkbox"
        className={`hidden ${props.className}`}
        checked={checked}
        disabled={disabled}
        id={id.current}
        readOnly
        {...props}
      />
      <CheckIcon color={checked ? 'black' : 'gray'} />
      {label && (
        <label htmlFor={id.current} onClick={(e) => e.stopPropagation()} className="cursor-pointer select-none">
          {label}
        </label>
      )}
    </div>
  );
};

export default memo(CheckBox);
