import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { axiosClient } from '@/apis';
import { loginStateAtom, toastAtom } from '@/store/components';

export const useAuth = () => {
  const router = useRouter();
  const setToast = useSetRecoilState(toastAtom);

  const [isLogin, setIsLogin] = useRecoilState(loginStateAtom);

  const handleLogin = () => {
    if (!process.env.NEXT_PUBLIC_REDIRECT_URL) {
      setToast('예상치 못한 에러가 발생했습니다. 앱을 다시 실행해주세요.');
      return;
    }
    router.push(process.env.NEXT_PUBLIC_REDIRECT_URL);
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
