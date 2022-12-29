import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const cookie = document.cookie.includes('access_token');
    const sessionForDev = sessionStorage.getItem('token');

    setIsLogin(cookie || sessionForDev ? true : false);
  }, []);

  return { isLogin };
};
