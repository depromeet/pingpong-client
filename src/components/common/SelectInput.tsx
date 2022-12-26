import Link from 'next/link';

import { uniqueId } from '@/lib/utils';
import type { TagProps } from '@/store/components/types';

import { RightArrowIcon } from '../icons/RightArrowIcon';

interface SelectInputProps {
  className?: string;
  placeholder?: string;
  selectedInputList?: TagProps[];
  href: string;
}

const SelectInput = ({ className, placeholder, selectedInputList, href }: SelectInputProps) => {
  return (
    <div className={`w-full text-2xl ${className}`}>
      <Link href={href}>
        <button
          className={`w-full flex items-center justify-between pl-[12px] pr-[17.5px] py-[12.5px] border border-gray-200 focus:border-primary-dark focus:outline-none rounded-[8px]`}
        >
          {selectedInputList?.length === 0 ? (
            <span className={'place-self-start text-gray-300'}>{placeholder}</span>
          ) : (
            <span key={uniqueId('selectedInput')} className="w-full text-left truncate">
              {selectedInputList?.map((list) => list.name).join(', ')}
            </span>
          )}
          <RightArrowIcon />
        </button>
      </Link>
    </div>
  );
};

export default SelectInput;
