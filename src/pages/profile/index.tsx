import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import Card from '@/components/common/Card';
import EmptyCard from '@/components/common/EmptyCard';
import Spinner from '@/components/common/Spinner';
import Tag from '@/components/common/Tag';
import TextBox from '@/components/common/TextBox';
import useUserInfoQuery from '@/hooks/queries/useUserInfoQuery';
import useGetMemberPosts from '@/hooks/useGetMemberPosts';

export default function Profile() {
  const { data: userData, isSuccess: userIsSuccess } = useUserInfoQuery();
  const { posts, fetchNextPage, isSuccess: postsIsSuccess } = useGetMemberPosts(1);
  const [isShowAllPosts, setIsShowAllPosts] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && isShowAllPosts) fetchNextPage();
  }, [inView, fetchNextPage, isShowAllPosts]);

  return (
    <main className="bg-bg-gray">
      <section className="pt-[5%] pb-[6%]">
        <article className="flex gap-7 justify-end pr-7">
          <Link href={'/profile/edit'}>
            <button className="w-[20px] h-[20px]">
              <Image src={'/icons/modify.svg'} alt="modify" width={100} height={100} />
            </button>
          </Link>
          <Link href={'/setting'}>
            <button className="w-[20px] h-[20px]">
              <Image src={'/icons/setting.svg'} alt="setting" width={100} height={100} />
            </button>
          </Link>
        </article>
        <article className="pt-[15px] flex items-center justify-center gap-5 flex-col">
          <div className="relative w-[88px] h-[88px] rounded-full overflow-hidden">
            <Image src={`${userData?.image}`} alt="profile" fill />
          </div>
          <span className="text-h2">{`${userData?.nickname}`}</span>
        </article>
      </section>
      {/* <section className="border-y border-gray-100 bg-white p-[16px]">
        <article className="flex gap-5 items-center relative">
          <div className="p-[9px] bg-primary-blue rounded-xl w-[20%]">
            <Image src={'/images/ranking.png'} alt="ranking" width={100} height={100} />
          </div>
          <div className="flex flex-col">
            <span className="text-t2">비기너</span>
            <span className="text-b3 text-gray-400">좋아요 0</span>
          </div>
          <button className="px-[12px] py-[6px] border border-gray-200 rounded-[20px] text-b4 absolute right-5">
            등급 알아보기
          </button>
        </article>
      </section> */}
      <section className="bg-white my-[8px] border-y border-gray-100 flex flex-col gap-[28px] px-[16px] py-[28px]">
        <article>
          <h2 className="text-t3 mb-[8px]">이런 재능을 줄 수 있어요</h2>
          <div className="flex gap-3 flex-wrap">
            {userIsSuccess ? (
              userData.givenTalents.map((talent, i) => (
                <Tag styleType="LIGHT" key={i}>
                  {talent.content}
                </Tag>
              ))
            ) : (
              <Tag styleType="DISABLED">내가 가진 재능을 등록해 주세요</Tag>
            )}
          </div>
        </article>
        <article>
          <h2 className="text-t3 mb-[8px]">이런 재능을 받고 싶어요</h2>
          <div className="flex gap-3 flex-wrap">
            {userIsSuccess ? (
              userData.takenTalents.map((talent, i) => (
                <Tag styleType="LIGHT" key={i}>
                  {talent.content}
                </Tag>
              ))
            ) : (
              <Tag styleType="DISABLED">받고 싶은 재능을 등록해 주세요</Tag>
            )}
          </div>
        </article>
        <article>
          <h2 className="text-t3 mb-[8px]">자기소개</h2>
          {userIsSuccess ? (
            <TextBox>{userData.introduction}</TextBox>
          ) : (
            <TextBox disabled={true}>
              <div className="flex flex-col">
                <span className="text-gray-400">자기소개가 아직 입력되지 않았네요</span>
                <span className="text-gray-400">간단한 인사와 함께 관심 분야에 대해 소개해주세요</span>
              </div>
            </TextBox>
          )}
        </article>
        <article>
          <h2 className="text-t3 mb-[8px]">링크</h2>
          {userIsSuccess ? (
            <TextBox>{userData?.profileLink}</TextBox>
          ) : (
            <TextBox disabled={true}>재능을 보여줄 수 있는 링크를 추가해보세요</TextBox>
          )}
        </article>
      </section>
      <section className="bg-white border-t border-gray-100 pt-[28px] pb-[36px] px-[16px]">
        <h2 className="text-t3 mb-[8px]">내가 쓴 글</h2>
        {postsIsSuccess ? (
          <CardContainer>
            {posts.map((item) => {
              return (
                <li key={item.id}>
                  <Card hideProfile {...item} />
                </li>
              );
            })}
            <ContainerRef ref={ref}>
              <Spinner />
            </ContainerRef>
            <button
              className={`w-full border border-gray-200 rounded-[8px] p-[16px] text-gray-500 text-[15px] ${
                isShowAllPosts && 'hidden'
              }`}
              onClick={() => setIsShowAllPosts(true)}
            >
              전체보기
            </button>
          </CardContainer>
        ) : (
          <EmptyCard>아직 등록된 재능이 없어요</EmptyCard>
        )}
      </section>
    </main>
  );
}
const ContainerRef = styled.div`
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.ul`
  > li ~ li {
    margin-top: 1.2rem;
  }
`;
