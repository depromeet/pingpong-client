import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import Card from '@/components/common/Card';
import CircleImg from '@/components/common/CircleImg';
import EmptyCard from '@/components/common/EmptyCard';
import Spinner from '@/components/common/Spinner';
import Tag from '@/components/common/Tag';
import TextBox from '@/components/common/TextBox';
import useGetMemberPosts from '@/hooks/useGetMemberPosts';
import type { UserInfo } from '@/typings/common';

import ArrowLeftBlackIcon from '../../../public/icons/arrow-left-black.svg';

interface ProfileViewProps extends UserInfo {
  isMe: boolean;
}

const ProfileView = ({
  isMe = false,
  memberId,
  nickname,
  image,
  introduction,
  profileLink,
  givenTalents,
  takenTalents,
}: ProfileViewProps) => {
  const { posts, fetchNextPage, isSuccess: postsIsSuccess, hasNextPage } = useGetMemberPosts(memberId);
  const [isShowAllPosts, setIsShowAllPosts] = useState(false);
  const { ref, inView } = useInView();
  const router = useRouter();

  useEffect(() => {
    if (inView && isShowAllPosts) fetchNextPage();
  }, [inView, fetchNextPage, isShowAllPosts]);

  const onClickBack = () => {
    router.query.new || isMe ? router.push('/main') : router.back();
  };

  return (
    <>
      <ProfileHeader>
        <button onClick={onClickBack}>
          <ArrowLeftBlackIcon />
        </button>
        {isMe && (
          <div>
            <article className="flex gap-7 justify-end">
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
          </div>
        )}
      </ProfileHeader>
      <section className="pt-[50px] pb-[6%]">
        <article className="pt-[15px] flex items-center justify-center gap-5 flex-col">
          <CircleImg size="xxlarge" src={`${image ?? '/images/empty-profile.png'}`} alt="profile" fill />
          <span className="text-h2">{`${nickname}`}</span>
        </article>
      </section>
      {/* <section className="border-y border-gray-100 bg-white p-[16px]">
  <article className="flex gap-5 items-center relative">
    <div className="p-[9px] bg-primary-blue rounded-xl w-[20%]">
      <Image src={'/images/ranking.png'} alt="ranking" width={100} height={100} />
    </div>
    <div className="flex flex-col">
      <span className="text-t2">?????????</span>
      <span className="text-b3 text-gray-400">????????? 0</span>
    </div>
    <button className="px-[12px] py-[6px] border border-gray-200 rounded-[20px] text-b4 absolute right-5">
      ?????? ????????????
    </button>
  </article>
</section> */}
      <section className="bg-white my-[8px] border-y border-gray-100 flex flex-col gap-[28px] px-[16px] py-[28px]">
        <article>
          <h2 className="text-t3 mb-[8px]">?????? ????????? ??? ??? ?????????</h2>
          <div className="flex gap-3 flex-wrap">
            {givenTalents?.length ? (
              givenTalents?.map((talent, i) => (
                <Tag styleType="LIGHT" key={i}>
                  {talent.content}
                </Tag>
              ))
            ) : (
              <Tag styleType="DISABLED">{isMe ? '?????? ?????? ????????? ????????? ?????????' : '????????? ????????? ?????????'}</Tag>
            )}
          </div>
        </article>
        <article>
          <h2 className="text-t3 mb-[8px]">?????? ????????? ?????? ?????????</h2>
          <div className="flex gap-3 flex-wrap">
            {takenTalents?.length ? (
              takenTalents?.map((talent, i) => (
                <Tag styleType="LIGHT" key={i}>
                  {talent.content}
                </Tag>
              ))
            ) : (
              <Tag styleType="DISABLED">{isMe ? '?????? ?????? ????????? ????????? ?????????' : '????????? ????????? ?????????'}</Tag>
            )}
          </div>
        </article>
        <article>
          <h2 className="text-t3 mb-[8px]">????????????</h2>
          {introduction ? (
            <TextBox>{introduction}</TextBox>
          ) : (
            <TextBox disabled={true}>
              {isMe ? (
                <div className="flex flex-col">
                  <span className="text-gray-400">??????????????? ?????? ???????????? ????????????</span>
                  <span className="text-gray-400">????????? ????????? ?????? ?????? ????????? ?????? ??????????????????</span>
                </div>
              ) : (
                '????????? ??????????????? ?????????'
              )}
            </TextBox>
          )}
        </article>
        <article>
          <h2 className="text-t3 mb-[8px]">??????</h2>
          {profileLink ? (
            <TextBox>{profileLink}</TextBox>
          ) : isMe ? (
            <TextBox disabled={true}>????????? ????????? ??? ?????? ????????? ??????????????????</TextBox>
          ) : (
            <TextBox disabled={true}>????????? ????????? ?????????</TextBox>
          )}
        </article>
      </section>
      <section className="bg-white border-t border-gray-100 pt-[28px] pb-[36px] px-[16px]">
        <h2 className="text-t3 mb-[8px]">{isMe ? `?????? ??? ???` : `${nickname}?????? ??? ???`}</h2>
        {postsIsSuccess && posts.length > 0 ? (
          <CardContainer>
            {posts.map((item) => {
              return (
                <li key={item.id}>
                  <Link href={`/posts/${item.id}?isMyPost=${isMe}`}>
                    <Card hideProfile {...item} />
                  </Link>
                </li>
              );
            })}
            {hasNextPage && isShowAllPosts && (
              <ContainerRef ref={ref}>
                <Spinner />
              </ContainerRef>
            )}
            {posts.length > 3 && (
              <button
                className={`mt-[8px] w-full border border-gray-200 rounded-[8px] p-[16px] text-gray-500 text-[15px] ${
                  isShowAllPosts && 'hidden'
                }`}
                onClick={() => setIsShowAllPosts(true)}
              >
                ????????????
              </button>
            )}
          </CardContainer>
        ) : (
          <EmptyCard>?????? ????????? ????????? ?????????</EmptyCard>
        )}
      </section>
    </>
  );
};

export default ProfileView;

const ContainerRef = styled.div`
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.ul`
  > li ~ li {
    margin-top: 1.2rem;
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.6rem;
  width: 100%;
  z-index: 10;
  position: absolute;
  top: 2rem;

  svg {
    fill: black;
  }
`;
