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

const noNeedAccessPath = ['/login', '/dev'];

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const router = useRouter();

  useEffect(() => {
    const cookie = document.cookie;
    const sessionForDev = sessionStorage.getItem('token');

    if (!cookie && !sessionForDev && !noNeedAccessPath.includes(router.pathname)) {
      router.push('/login');
    }
    if ((cookie || sessionForDev) && noNeedAccessPath.includes(router.pathname)) {
      router.push('/');
    }
  }, [router]);

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
