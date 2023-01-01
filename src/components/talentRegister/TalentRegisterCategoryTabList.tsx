import useGetCategory from '@/hooks/useGetCategory';

import TabList from '../common/TabList';

const TalentRegisterCategoryTabList = () => {
  const { isLoading, data } = useGetCategory({ sort: 'main' });

  return (
    <>
      {!isLoading && (
        <div className="mb-24">
          <TabList categoryKey="mainCategory" list={data.data} />
        </div>
      )}
    </>
  );
};

export default TalentRegisterCategoryTabList;
