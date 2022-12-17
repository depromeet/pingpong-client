import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import CircleImg from '@/components/common/CircleImg';
import Tag from '@/components/common/Tag';
import PostHeader from '@/components/posts/PostHeader';
import { Layout, Typography } from '@/components/styles';
import { colors } from '@/constants/styles';
import usePostQuery from '@/hooks/queries/usePostQuery';

const PostDetail = () => {
  const router = useRouter();

  const postId = Number(router.query.id);

  const mockImage =
    'https://images.unsplash.com/photo-1671210681777-4b7d2377ef69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';

  const { data: postData, isSuccess: postIsSuccess } = usePostQuery(postId);

  return (
    <>
      <PostHeader imageUrl={mockImage} />
      <Layout.DetailContainer>
        {postIsSuccess && (
          <>
            <Layout.DefaultPadding>
              <ProfileContainer className="mb-16 pb-16">
                <CircleImg size="small" src={postData.image} />
                <ProfileInfo className="ml-12">
                  <h5>{postData.nickname}</h5>
                  <aside>{postData.ranks}</aside>
                </ProfileInfo>
                <Link href={`/profile/${postData.memberId}`}>
                  <ProfileLinkButton>
                    <Typography.Desc>프로필보기</Typography.Desc>
                  </ProfileLinkButton>
                </Link>
              </ProfileContainer>
              {postData.isShare ? (
                <>
                  <Tag styleType="DARK" color="red">
                    {postData.subCategory}
                  </Tag>
                  <Tag styleType="OUTLINE" color="red">
                    재능나눔
                  </Tag>
                </>
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
                {postData.links.map((link) => (
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
                  <p>{postData.exchangeType}</p>
                </li>
                <li>
                  <label>재능 공유 기간</label>
                  <p>{postData.exchangePeriod}</p>
                </li>
                <li>
                  <label>선호하는 시간대</label>
                  <p>{postData.exchangeTime}</p>
                </li>
              </GrayBlock>
            </Layout.DefaultPadding>
          </>
        )}
      </Layout.DetailContainer>
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