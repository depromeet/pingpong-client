import Link from 'next/link';

import { uniqueId } from '@/lib/utils';

import { RightArrowIcon } from '../icons/RightArrowIcon';

interface SelectInputProps {
  className?: string;
  placeholder?: string;
  selectedInputList?: string[];
  // TODO:: selectedInputList 데이터 형태에 따른 코드 수정 필요
  href: string;
}

const SelectInput = ({ className, placeholder, selectedInputList, href }: SelectInputProps) => {
  return (
    <div className={`w-full text-2xl ${className}`}>
      <Link href={href}>
        <button
          className={`w-full flex items-center justify-between pl-[12px] pr-[17.5px] py-[12.5px] border border-gray-200 focus:border-primary-dark focus:outline-none rounded-[8px]`}
        >
          {selectedInputList ? (
            selectedInputList.map((selectedInput) => {
              return (
                <span key={uniqueId(selectedInput)} className="w-full truncate">
                  {selectedInput}
                </span>
              );
            })
          ) : (
            <span className={'place-self-start text-gray-300'}>{placeholder}</span>
          )}
          <RightArrowIcon />
        </button>
      </Link>
    </div>
  );
};

export default SelectInput;
