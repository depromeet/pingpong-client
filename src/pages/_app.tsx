import '../styles/globals.css';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';
import { useEffect } from 'react';
import { RecoilRoot, useRecoilSnapshot } from 'recoil';

import Layout from '@/components/common/Layout';

function RecoilDebugObserver(): ReactElement | null {
  const snapshot = useRecoilSnapshot();
  const getLoadable = snapshot.getLoadable;
  const snapshotList = Array.from(snapshot.getNodes_UNSTABLE({ isModified: true }));

  useEffect(() => {
    console.debug('The following atoms were modified:');
    for (const node of snapshotList) {
      console.debug(node.key, getLoadable(node));
    }
  }, [snapshotList, getLoadable]);

  return null;
}

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RecoilDebugObserver />
        <div id="portal" />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
