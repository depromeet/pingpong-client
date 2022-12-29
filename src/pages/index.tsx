import { useQueryClient } from '@tanstack/react-query';
import type { NextPage } from 'next';
import Link from 'next/link';
import type { ChangeEvent, MouseEvent } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import Card from '@/components/common/Card';
import CardCarousel from '@/components/common/CardCarousel';
import CircleImg from '@/components/common/CircleImg';
import EmptyCard from '@/components/common/EmptyCard';
import MainCategoryCarousel from '@/components/main/MainCategoryCarousel';
import MidCategoryTab from '@/components/main/MidCategoryTab';
import SubCategoryFilter from '@/components/main/SubCategoryFilter';
import { Layout, Typography } from '@/components/styles';
import useCategoriesQuery from '@/hooks/queries/useCategoriesQuery';
import useCustomPostsQuery from '@/hooks/queries/useCustomPostsQuery';
import useInfinitePostsQuery from '@/hooks/queries/useInfinitePostsQuery';
import useUserInfoQuery from '@/hooks/queries/useUserInfoQuery';
import useBottomSheet from '@/hooks/useBottomSheet';
import { bottomSheetActiveOptionAtom, bottomSheetOptionsAtom, midCategoryIdSelector } from '@/store/components';
import type { Option } from '@/typings/common';

const Home: NextPage = () => {
  const { ref, inView } = useInView();

  const [activeMainCategoryId, setActiveCategoryId] = useState(0);
  const [activeSubCategoryId, setActiveSubCategoryId] = useState(0);
  const [isShare, handleIsShare] = useState(false);
  const activeMidCategoryId = useRecoilValue(midCategoryIdSelector);
  const activeOption = useRecoilValue(bottomSheetActiveOptionAtom);

  const queryClient = useQueryClient();
  const { data: userData, isSuccess: userIsSuccess } = useUserInfoQuery();
  const { data: customPostsData, isSuccess: customPostsIsSuccess } = useCustomPostsQuery({
    subCategoryId: 1,
    page: 0,
    size: 5,
  });

  const {
    mainMidCategoryQuery: { data: mainCategoryData, isSuccess: mainCategoryIsSuccess },
    subCategoryQuery: { data: subCategoryData, isSuccess: subCategoryIsSuccess },
  } = useCategoriesQuery(activeMidCategoryId);

  const {
    posts,
    fetchNextPage,
    isSuccess: postsIsSuccess,
    refetch,
  } = useInfinitePostsQuery({
    isShare,
    mainCategory: activeMainCategoryId,
    midCategory: activeMidCategoryId === 999 ? 0 : activeMidCategoryId,
    subCategory: activeSubCategoryId,
  });

  const { openBottomSheet } = useBottomSheet();
  const [bottomSheetOptions, setBottomSheetOptions] = useRecoilState<Option[]>(bottomSheetOptionsAtom);

  const getActiveCategory = (id: number) => {
    return mainCategoryData?.find((mainCategory) => mainCategory.id === id) || null;
  };

  const openSubCategorySheet = () => {
    if (activeMidCategoryId === 999) return;

    openBottomSheet();
  };

  useEffect(() => {
    refetch();
  }, [isShare, activeMainCategoryId, activeMidCategoryId, activeSubCategoryId, refetch]);

  useEffect(() => {
    const { id } = activeOption;
    if (typeof id === 'string') return;

    setActiveSubCategoryId(id);
  }, [activeOption]);

  const updateSubCategories = useCallback(() => {
    if (activeMidCategoryId === 999) return;

    queryClient.invalidateQueries({
      queryKey: ['subCategories', activeMidCategoryId],
    });

    setBottomSheetOptions(subCategoryData);
  }, [setBottomSheetOptions, activeMidCategoryId, queryClient, subCategoryData]);

  useEffect(() => {
    updateSubCategories();
  }, [updateSubCategories]);

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  return (
    <Layout.DefaultContainer>
      <Layout.DefaultPadding>
        <div className="mb-28">
          {userIsSuccess && (
            <HomeHeader>
              <Typography.Title>
                <span className="text-primary-blue">{userData.nickname}</span> 님,
                <br />
                핑퐁에서 재능을 나눠볼까요?
              </Typography.Title>
              <CircleImg size="large" src={userData.image} alt="user-profile-img" />
            </HomeHeader>
          )}
        </div>
        <div className="mb-12">
          <Typography.Subtitle className="mb-2">핑퐁! 내가 찾던 재능</Typography.Subtitle>
          <Typography.Desc>내가 가진 재능과 받고 싶은 재능이 일치해요</Typography.Desc>
        </div>
        {customPostsIsSuccess && customPostsData.content.length ? (
          <CardCarousel list={customPostsData.content} />
        ) : (
          <EmptyCard>아직 나와 매칭된 재능이 없어요.</EmptyCard>
        )}
      </Layout.DefaultPadding>
      <Layout.Divider className="mt-32 mb-40" />
      <Layout.DefaultPadding>
        <div className="mb-36">
          <Typography.Title>
            다양한 카테고리에서
            <br />
            재능을 발견해 보세요
          </Typography.Title>
        </div>
      </Layout.DefaultPadding>
      {mainCategoryIsSuccess && (
        <div className="pb-20 mb-12 border-b border-gray-100">
          <MainCategoryCarousel
            list={mainCategoryData}
            activeCategoryId={activeMainCategoryId}
            onClick={setActiveCategoryId}
          />
        </div>
      )}
      {getActiveCategory(activeMainCategoryId)?.midCategories.length && (
        <MidCategoryTab
          mainCategoryName={getActiveCategory(activeMainCategoryId)?.name || ''}
          list={getActiveCategory(activeMainCategoryId)?.midCategories || []}
        />
      )}
      <SubCategoryFilter
        isSubFilterVisible={activeMainCategoryId !== 0 && activeMidCategoryId !== 999}
        handleSubCategory={openSubCategorySheet}
        isShare={isShare}
        handleIsShare={handleIsShare}
      />
      <Layout.DefaultPadding>
        <CardContainer>
          {posts.map((item) => {
            return (
              <li key={item.id}>
                <Link href={`/posts/${item.id}`}>
                  <Card {...item} />
                </Link>
              </li>
            );
          })}
        </CardContainer>
        <ContainerRef ref={ref}>
          <Spinner />
        </ContainerRef>
      </Layout.DefaultPadding>
    </Layout.DefaultContainer>
  );
};

export default Home;

const ContainerRef = styled.div`
  display: flex;
  justify-content: center;
`;

// TODO: Spinner Image 실제로 대체 필요
const Spinner = styled.div`
  content: '';
  width: 5rem;
  height: 3rem;
  background-color: black;
`;

const HomeHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardContainer = styled.ul`
  > li ~ li {
    margin-top: 1.2rem;
  }
`;
