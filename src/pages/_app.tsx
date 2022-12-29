import '../styles/globals.css';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { RecoilRoot } from 'recoil';

import Layout from '@/components/common/Layout';
import { useAuth } from '@/hooks/useAuth';

const noNeedAccessPath = ['/', '/dev'];

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const router = useRouter();

  const { isLogin } = useAuth();

  useEffect(() => {
    if (isLogin && noNeedAccessPath.includes(router.pathname)) {
      router.push('/main');
    }
  }, [router, isLogin]);

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <div id="portal" />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
