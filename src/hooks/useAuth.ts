import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { axiosRequest } from '@/apis';

export const useAuth = () => {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(false);

  const logout = async () => {
    await axiosRequest<{ data: number; message: string }>({ method: 'post', url: '/auth/logout' });

    //TODO: check error
    router.push('/');
    setIsLogin(false);
    sessionStorage.clear();
  };

  useEffect(() => {
    const cookie = document.cookie.includes('access_token');

    setIsLogin(cookie ? true : false);
  }, []);

  useEffect(() => {
    if (isLogin && router.asPath === '/') {
      router.replace('/main');
    }
  }, [isLogin, router]);

  return { isLogin, logout };
};
