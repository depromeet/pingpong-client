import type { TabProps } from 'src/store/components/types';

import useTab from '@/hooks/useTab';

interface WithKeyTabProps extends TabProps {
  categoryKey: string;
}

const Tab = ({ categoryKey, id, name }: WithKeyTabProps) => {
  const { onClick, clicked } = useTab({ key: categoryKey, id });

  return (
    <button
      type="button"
      id={`${id}`}
      onClick={onClick}
      className={`text-gray-300 text-t3 pt-[14px] pb-[12px] ${
        clicked ? 'text-black border-b-black border-b-2' : ''
      } w-fit whitespace-nowrap`}
    >
      {name}
    </button>
  );
};

export default Tab;
