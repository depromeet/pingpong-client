import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import Card from '@/components/common/Card';
import CardCarousel from '@/components/common/CardCarousel';
import CircleImg from '@/components/common/CircleImg';
import EmptyCard from '@/components/common/EmptyCard';
import NavigationBar from '@/components/common/NavigationBar';
import CategoryCarousel from '@/components/main/MainCategoryCarousel';
import { Layout, Typography } from '@/components/styles';
import useCategoriesQuery from '@/hooks/queries/useCategoriesQuery';
import useCustomPostsQuery from '@/hooks/queries/useCustomPostsQuery';
import useInfinitePostsQuery from '@/hooks/queries/useInfinitePostsQuery';
import useUserInfoQuery from '@/hooks/queries/useUserInfoQuery';

const Home: NextPage = () => {
  const { data: userData, isSuccess: userIsSuccess } = useUserInfoQuery();
  const { data: customPostsData, isSuccess: customPostsIsSuccess } = useCustomPostsQuery({
    subCategoryId: 1,
    page: 0,
    size: 5,
  });

  const { data: categoryData, isSuccess: categoryIsSuccess } = useCategoriesQuery();
  const { posts, fetchNextPage, isSuccess: postsIsSuccess } = useInfinitePostsQuery();
  const { ref, inView } = useInView();

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
      {categoryIsSuccess && <CategoryCarousel list={categoryData} />}
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
        {postsIsSuccess && (
          <CardContainer>
            {posts.map((item) => {
              return (
                <li key={item.id}>
                  <Card {...item} />
                </li>
              );
            })}
          </CardContainer>
        )}
        <ContainerRef ref={ref}>
          <Spinner />
        </ContainerRef>
      </Layout.DefaultPadding>
      <NavigationBar className="fixed bottom-0 left-0" />
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
