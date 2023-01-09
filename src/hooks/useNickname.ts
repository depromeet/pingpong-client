import type { ChangeEvent } from 'react';
import { useCallback, useEffect, useState } from 'react';

import { validateNickname } from '@/lib/utils';

const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z]*$/;

const useNickname = () => {
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(() => validateNickname(event.target.value));
  }, []);

  const handleNameClear = () => {
    setName('');
  };

  useEffect(() => {
    if (!name.length) return;
    regex.test(name) ? setErrorMessage('') : setErrorMessage('한글/영어만 사용이 가능해요');
  }, [name]);

  return {
    name,
    handleNameChange,
    handleNameClear,
    errorMessage,
    setErrorMessage,
  };
};

export default useNickname;
