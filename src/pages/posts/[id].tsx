import { useRouter } from 'next/router';

import PostHeader from '@/components/posts/PostHeader';
import { Layout, Typography } from '@/components/styles';
import usePostQuery from '@/hooks/queries/usePostQuery';

const PostDetail = () => {
  const router = useRouter();

  // TODO: posts/[id] 사용
  const postId = Number(router.query.id);

  const mockImage =
    'https://images.unsplash.com/photo-1671210681777-4b7d2377ef69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';

  const { data: postData, isSuccess: postIsSuccess } = usePostQuery(postId);

  return (
    <>
      <PostHeader imageUrl={mockImage} />
      <Layout.DetailContainer>
        <Layout.DefaultPadding>
          {postIsSuccess && (
            <div>
              <h2>{postData.title}</h2>
              <p>{postData.content}</p>
            </div>
          )}
        </Layout.DefaultPadding>
      </Layout.DetailContainer>
    </>
  );
};

export default PostDetail;
