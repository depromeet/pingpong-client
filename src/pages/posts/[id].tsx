import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import BottomFixedBar from '@/components/common/BottomFixedBar';
import Button from '@/components/common/Button';
import CircleImg from '@/components/common/CircleImg';
import LikeButton from '@/components/common/LikeButton';
import Tag from '@/components/common/Tag';
import PostHeader from '@/components/posts/PostHeader';
import PostReportRadioGroup from '@/components/posts/PostReportRadioGroup';
import { Layout, Typography } from '@/components/styles';
import { ExchangePeriodLabel, ExchangeTimeLabel, ExchangeTypeLabel } from '@/constants';
import { colors } from '@/constants/styles';
import usePostDeleteMutate from '@/hooks/queries/usePostDeleteMutate';
import usePostLikeMutate from '@/hooks/queries/usePostLikeMutate';
import usePostQuery from '@/hooks/queries/usePostQuery';
import usePostUnlikeMutate from '@/hooks/queries/usePostUnlikeMutate';
import useReportPostMutate from '@/hooks/queries/useReportPostMutate';
import { usePopupWithBlock } from '@/hooks/usePopupWithBlock';
import { bottomSheetActiveOptionAtom, myInfoAtom } from '@/store/components';
import type { LinkInfo } from '@/typings/common';

const PostDetail = () => {
  const router = useRouter();
  const postId = Number(router.query.id) || 0;

  const [reportReason, setReportReason] = useState<string>('');
  const [isMyPost, setIsMyPost] = useState(false);
  const activeOption = useRecoilValue(bottomSheetActiveOptionAtom);
  const myInfo = useRecoilValue(myInfoAtom);

  const { data: postData, isSuccess: postIsSuccess, refetch } = usePostQuery(postId);
  const { mutate: postLikeMutate, isSuccess: postLikeIsSuccess } = usePostLikeMutate(postId);
  const { mutate: postUnlikeMutate, isSuccess: postUnlikeIsSuccess } = usePostUnlikeMutate(postId);
  const { mutate: postDeleteMutate, isSuccess: postDeleteIsSuccess } = usePostDeleteMutate(postId);
  const { mutate: reportPostMutate, isSuccess: reportPostIsSuccess } = useReportPostMutate();
  const { setPopup } = usePopupWithBlock();

  const handleLike = () => {
    postData?.isLike ? postUnlikeMutate() : postLikeMutate();
  };

  const handleReportPopup = useCallback(() => {
    setPopup({
      isShowing: true,
      title: '사용자 신고하기',
      content: '신고 사유를 선택해주세요.',
      children: <PostReportRadioGroup setReportReason={setReportReason} />,
      onConfirm: () =>
        reportPostMutate({
          postId,
          content: reportReason,
        }),
      confirmText: '선택 완료',
      cancelText: '취소',
    });
  }, [setPopup, reportPostMutate, postId, reportReason]);

  const handleKakaoLinkPopup = useCallback(
    (link: string) => {
      const openExternalLink = (link: string) => {
        if (!window) return;

        window.open(`//${link}`, '_blank');
      };

      setPopup({
        isShowing: true,
        title: '카카오톡 오픈채팅으로 이동됩니다',
        content: '오픈채팅 시, 상대방에게 <br />불쾌감을 주는 언어 사용을 지양해주세요.',
        onConfirm: () => openExternalLink(link),
        confirmText: '이동하기',
        cancelText: '취소',
      });
    },
    [setPopup],
  );

  useEffect(() => {
    if (!postIsSuccess) return;

    refetch();
  }, [postLikeIsSuccess, postUnlikeIsSuccess, postIsSuccess, refetch]);

  useEffect(() => {
    const pathHasIsMyPost = myInfo?.memberId === postData?.memberId;
    setIsMyPost(pathHasIsMyPost);
  }, [myInfo?.memberId, postData?.memberId, router]);

  useEffect(() => {
    if (activeOption.id === 'DELETE') postDeleteMutate();
    if (activeOption.id === 'REPORT') {
      handleReportPopup();
    }
  }, [activeOption, postDeleteMutate, reportPostMutate, handleReportPopup]);

  usePopupWithBlock();

  useEffect(() => {
    setPopup(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (reportPostIsSuccess) {
      router.back();
    }
  }, [reportPostIsSuccess, router]);

  useEffect(() => {
    if (postDeleteIsSuccess) {
      router.back();
    }
  }, [postDeleteIsSuccess, router]);

  return (
    <>
      {postIsSuccess && (
        <>
          <PostHeader isMyPost={isMyPost} imageUrl={postData.backgroundImage} />
          <Layout.DetailContainer>
            <Layout.DefaultPadding>
              <ProfileContainer className="mb-16 pb-16">
                <CircleImg size="small" src={postData.image} />
                <ProfileInfo className="ml-12">
                  <h5>{postData.nickname}</h5>
                  <aside>{postData.ranks}</aside>
                </ProfileInfo>
                {!isMyPost && (
                  <Link href={`/profile/${postData.memberId}`}>
                    <ProfileLinkButton>
                      <Typography.Desc>프로필보기</Typography.Desc>
                    </ProfileLinkButton>
                  </Link>
                )}
              </ProfileContainer>
              {postData.isShare ? (
                <div className="flex">
                  <Tag styleType="DARK" color="red" className="mr-[4px]">
                    {postData.subCategory}
                  </Tag>
                  <Tag styleType="OUTLINE" color="red">
                    재능나눔
                  </Tag>
                </div>
              ) : (
                <Tag styleType="DARK" color="blue">
                  {postData.subCategory}
                </Tag>
              )}
              <Typography.Title className="mt-12 mb-24">{postData.title}</Typography.Title>
              <Typography.Subtitle className="mb-6">재능 소개</Typography.Subtitle>
              <Typography.Content className="mb-24">{postData.content}</Typography.Content>
              <Typography.Subtitle className="mb-6">링크</Typography.Subtitle>
              <PostDetailRow>
                {postData.links.map((link: LinkInfo) => (
                  <GrayBlock key={`link-${link.id}`}>
                    <li>{link.content}</li>
                  </GrayBlock>
                ))}
              </PostDetailRow>
            </Layout.DefaultPadding>
            <Layout.Divider className="my-24" />
            <Layout.DefaultPadding>
              <Typography.Subtitle className="mb-6">이렇게 공유하고 싶어요</Typography.Subtitle>
              <GrayBlock className="mb-24">
                <li>
                  <label>재능 공유 환경</label>
                  <p>{ExchangeTypeLabel[postData.exchangeType]}</p>
                </li>
                <li>
                  <label>재능 공유 기간</label>
                  <p>{ExchangePeriodLabel[postData.exchangePeriod]}</p>
                </li>
                <li>
                  <label>선호하는 시간대</label>
                  <p>{ExchangeTimeLabel[postData.exchangeTime]}</p>
                </li>
              </GrayBlock>
            </Layout.DefaultPadding>
          </Layout.DetailContainer>
          <BottomFixedBar>
            {/* count 임시로 string으로 변경, 백엔드에서 string으로 값 내려올 예정 */}
            <LikeButton
              type="VERTICAL"
              isFilled={postData?.isLike}
              count={postData.likes.toString()}
              onClick={handleLike}
            />
            <Button className="ml-12" onClick={() => handleKakaoLinkPopup(postData.chatLink)}>
              오픈채팅 시작하기
            </Button>
          </BottomFixedBar>
        </>
      )}
    </>
  );
};

export default PostDetail;

const GrayBlock = styled.ul`
  padding: 1.3rem 1.6rem;
  background-color: ${colors.bgGray};
  border: 0.1rem solid ${colors.gray100};
  border-radius: 0.8rem;
  font-size: 1.5rem;
  line-height: 2.25rem;
  letter-spacing: -0.04rem;

  > li {
    display: flex;

    > label {
      width: 9.2rem;
      color: ${colors.gray400};
    }

    > p {
      margin-left: 1.2rem;
    }
  }

  p {
    color: ${colors.gray500};
  }
`;

const PostDetailRow = styled.div`
  ${GrayBlock} ~ ${GrayBlock} {
    margin-top: 0.8rem;
  }
`;

const ProfileContainer = styled.section`
  display: flex;
  position: relative;
  border-bottom: 0.1rem solid ${colors.gray100};
`;

const ProfileInfo = styled.div`
  > h5 {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.1rem;
    letter-spacing: -0.03rem;
  }

  > aside {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.1rem;
    letter-spacing: -0.03rem;
    color: ${colors.gray400};
  }
`;

const ProfileLinkButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.6rem 1.2rem;
  border-radius: 2rem;
  border: 0.1rem solid ${colors.gray200};
  color: ${colors.gray500};
`;
