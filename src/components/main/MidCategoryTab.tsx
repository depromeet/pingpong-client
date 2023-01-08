import type { MidCategory } from '@/typings/common';

import TabList from '../common/TabList';

const MidCategoryTab = ({ list, mainCategoryName }: { list: MidCategory[]; mainCategoryName: string }) => {
  return <TabList categoryKey="midCategory" mainCategoryName={mainCategoryName} list={list}></TabList>;
};

export default MidCategoryTab;
