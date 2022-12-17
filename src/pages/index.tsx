import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import Card from '@/components/common/Card';
import CardCarousel from '@/components/common/CardCarousel';
import CircleImg from '@/components/common/CircleImg';
import EmptyCard from '@/components/common/EmptyCard';
import CategoryCarousel from '@/components/main/MainCategoryCarousel';
import { Layout, Typography } from '@/components/styles';
import useCategoriesQuery from '@/hooks/queries/useCategoriesQuery';
import useInfinitePostsQuery from '@/hooks/queries/useInfinitePostsQuery';

const Home: NextPage = () => {
  const userData = {
    nickname: '말하는감자',
    image:
      'https://images.unsplash.com/photo-1670470076011-cd2f6e03ca40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  };

  // TODO: cardData 실제 데이터로 연결 (posts 5개)
  const cardData = {
    content: [
      {
        id: 12,
        isShare: false,
        title: '제목',
        subCategory: '대1중1소1',
        likes: 0,
        memberId: 1,
        nickname: '감자',
        image:
          'https://images.unsplash.com/photo-1670470076011-cd2f6e03ca40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        ranks: '루키',
        takenTalents: ['대1중1소1', '대1중1소2', '대1중2소1'],
      },
      {
        id: 89,
        isShare: false,
        title: '주고받고',
        subCategory: '프론트엔드 개발',
        likes: 0,
        memberId: 1,
        nickname: '감자',
        image:
          'https://images.unsplash.com/photo-1670433000581-7b36d9b2fe4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2318&q=80',
        ranks: '루키',
        takenTalents: ['대1중1소1', '대1중1소2', '대1중2소1'],
      },
      {
        id: 8,
        isShare: true,
        title: '디자인 가르쳐드립니다',
        subCategory: 'UI/UX',
        likes: 0,
        memberId: 1,
        nickname: '감자',
        image:
          'https://images.unsplash.com/photo-1670258880107-e0b02eb0ff14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        ranks: '루키',
        takenTalents: [],
      },
    ],
    totalElements: 26,
    totalPages: 13,
    hasNextPages: true,
  };

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
          <HomeHeader>
            <Typography.Title>
              <span className="text-primary-blue">{userData.nickname}</span> 님,
              <br />
              핑퐁에서 재능을 나눠볼까요?
            </Typography.Title>
            <CircleImg size="large" src={userData.image} alt="user-profile-img" />
          </HomeHeader>
        </div>
        <div className="mb-12">
          <Typography.Subtitle className="mb-2">핑퐁! 내가 찾던 재능</Typography.Subtitle>
          <Typography.Desc>내가 가진 재능과 받고 싶은 재능이 일치해요</Typography.Desc>
        </div>
        {cardData.content.length ? (
          <CardCarousel list={cardData.content} />
        ) : (
          <EmptyCard>아직 나와 매칭된 재능이 없어요.</EmptyCard>
        )}
      </Layout.DefaultPadding>
      <Layout.Divider />
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
