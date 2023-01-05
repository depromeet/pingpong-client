import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(false);

  const logout = () => {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }

    setIsLogin(false);
    sessionStorage.clear();
    router.push('/');
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
