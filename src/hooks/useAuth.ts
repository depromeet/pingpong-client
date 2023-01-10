import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { axiosClient } from '@/apis';
import { loginStateAtom } from '@/store/components';

export const useAuth = () => {
  const router = useRouter();

  const [redirectUrl, setRedirectUrl] = useState('');

  const [isLogin, setIsLogin] = useRecoilState(loginStateAtom);

  const handleLogin = () => {
    router.push(redirectUrl);
  };

  const handleLogout = async () => {
    try {
      await axiosClient.post('/auth/logout');
      setIsLogin(false);
    } catch (err) {
      console.error(err);
      // TODO: modal 메세지 노출
    }
  };

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_REDIRECT_URL) return;
    setRedirectUrl(process.env.NEXT_PUBLIC_REDIRECT_URL);
  }, []);

  useEffect(() => {
    const hasToken = document.cookie.includes('access_token');
    setIsLogin(hasToken ? true : false);
  }, [setIsLogin]);

  useEffect(() => {
    if (!isLogin && router.asPath !== '/') {
      router.replace('/');
      return;
    }
  }, [isLogin, router]);

  return { isLogin, handleLogin, handleLogout };
};
