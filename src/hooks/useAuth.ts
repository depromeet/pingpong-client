import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { axiosClient } from '@/apis';
import { loginStateAtom } from '@/store/components';

export const useAuth = () => {
  const router = useRouter();

  const [isLogin, setIsLogin] = useRecoilState(loginStateAtom);

  const handleLogout = async () => {
    try {
      await axiosClient.post('/auth/logout');
      setIsLogin(false);
      router.replace('/');
    } catch (err) {
      console.error(err);
      // TODO: modal 메세지 노출
    }
  };

  const handleLogin = () => {
    router.push(`${process.env.NEXT_PUBLIC_REDIRECT_URL}`);
  };

  useEffect(() => {
    const hasToken = document.cookie.includes('access_token');
    console.log('here', hasToken);

    setIsLogin(hasToken ? true : false);
  }, [setIsLogin]);

  useEffect(() => {
    console.log('isLogin ---', isLogin);
    if (!isLogin) {
      router.replace('/');
    }

    if (isLogin && router.asPath === '/') {
      router.replace('/main');
    }
  }, [isLogin, router]);

  return { isLogin, handleLogout, handleLogin };
};
