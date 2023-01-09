import type { ChangeEvent } from 'react';
import { useCallback, useEffect, useState } from 'react';

import { replaceWithRegex } from '@/lib/utils';

const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z| ]*$/;

const useNickname = () => {
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(() => replaceWithRegex(regex, event.target.value));
  }, []);

  const validateNicknameLength = (value: string) => {
    return value.length < 2 || value.length > 10;
  };

  // TODO: validateAll 함수 개선
  const validateAll = useCallback(() => {
    let errMsg = '';

    if (regex.test(name)) {
      errMsg = '';
    } else {
      errMsg = '한글/영어만 사용이 가능해요';
      setErrorMessage(errMsg);
      return;
    }

    if (!validateNicknameLength(name)) {
      errMsg = '';
    } else {
      errMsg = '공백 포함 2자 이상 10자 이하로만 작성해주세요';
    }
    setErrorMessage(errMsg);
  }, [name, setErrorMessage]);

  const handleNameClear = () => {
    setName('');
  };

  useEffect(() => {
    if (!name.length) return;
    validateAll();
  }, [name, validateAll]);

  return {
    name,
    setName,
    handleNameChange,
    handleNameClear,
    errorMessage,
    setErrorMessage,
  };
};

export default useNickname;
