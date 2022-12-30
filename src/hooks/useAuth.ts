import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const cookie = document.cookie.includes('access_token');

    setIsLogin(cookie ? true : false);
  }, []);

  return { isLogin };
};
