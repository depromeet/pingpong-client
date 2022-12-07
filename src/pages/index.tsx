import type { NextPage } from 'next';
import { useTest } from 'src/hooks/test';
import styled from 'styled-components';

import ProfileImg from '@/components/common/ProfileImg';

import Card from '../components/common/Card';

const Home: NextPage = () => {
  const { data } = useTest();
  const name = '말하는감자';

  const cardData = {
    content: [
      {
        id: 7,
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
        id: 8,
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

  return (
    <HomeContainer>
      <div className="mb-28">
        <HomeHeader>
          <HomeTitle>
            {name} 님,
            <br />
            핑퐁에서 재능을 나눠볼까요?
            <ProfileImg />
          </HomeTitle>
        </HomeHeader>
      </div>
      <div className="mb-12">
        <HomeSubtitle className="mb-2">핑퐁! 내가 찾던 재능</HomeSubtitle>
        <HomeDesc>내가 가진 재능과 받고 싶은 재능이 일치해요</HomeDesc>
      </div>
      {cardData.content.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
      <HomeTitle>다양한 카테고리에서 재능을 발견해 보세요</HomeTitle>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  padding: 6rem 1.6rem;
`;

const HomeHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HomeTitle = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.8rem;
  letter-spacing: -0.03rem;
`;

const HomeSubtitle = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2.1rem;
  letter-spacing: -0.03rem;
`;

const HomeDesc = styled.p`
  font-size: 1.3rem;
  line-height: 1.95rem;
  letter-spacing: -0.03rem;
`;
