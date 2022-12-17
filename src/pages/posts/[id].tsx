import Layout from '@/components/layouts';
import PostHeader from '@/components/posts/PostHeader';

const PostDetail = () => {
  const mockImage =
    'https://images.unsplash.com/photo-1671210681777-4b7d2377ef69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';

  return (
    <>
      <PostHeader imageUrl={mockImage} />
      <Layout.DetailContainer>
        <Layout.DefaultPadding>아아아아</Layout.DefaultPadding>
      </Layout.DetailContainer>
    </>
  );
};

export default PostDetail;
