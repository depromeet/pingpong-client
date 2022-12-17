import useTab from '@/hooks/useTab';

import { XIcon } from '../icons/XIcon';

interface ClickTagProps {
  categoryKey: string;
  id: number;
  name: string;
  sort: 'SHARE' | 'EXCHANGE';
  isDelete?: boolean;
  className?: string;
}

const ClickTag = ({ categoryKey, id, name, sort, isDelete = false, className }: ClickTagProps) => {
  const { onClick, clicked } = useTab({
    key: categoryKey,
    id,
    selectingNumber: categoryKey === 'subCategoryId' ? 1 : 5,
  });

  const color =
    sort === 'SHARE'
      ? 'border-primary-red bg-primary-red text-white'
      : 'border-primary-blue bg-primary-blue text-white';
  const style = clicked ? color : 'border-gray-300 bg-white text-gray-500 ';

  return (
    <button
      type="button"
      id={`${id}`}
      className={`flex items-center ${style} border py-4 rounded-full text-b2 px-[14px] w-fit whitespace-nowrap ${className}`}
      onClick={onClick}
    >
      {name}
      {isDelete && <XIcon size={10} className="ml-[8px]" />}
    </button>
  );
};

export default ClickTag;
