import { arrayBuffer } from 'node:stream/consumers';

import { useRecoilValue } from 'recoil';

import { talentRegisterOrderAtom } from '@/store/components';

import type { MakeAndRemoveAtomKeyProps } from './types';

export const formatQueryString = (url: string, queryObject?: Record<string, unknown>): string => {
  if (!queryObject) {
    return url;
  }

  const queries = Object.keys(queryObject).reduce((prev: string, key: string) => {
    const queryKey = (queryObject as Record<string, unknown>)[key];
    if (prev === '') {
      return key + '=' + queryKey;
    }
    return (prev += '&' + key + '=' + queryKey);
  }, '');

  return `${url}?${queries}`;
};

export const uniqueId = (id?: string | number) => {
  return id + Math.random().toString(16).slice(2);
};

export const SetTalnetRegisterCategorySelectInputKey = () => {
  const order = useRecoilValue(talentRegisterOrderAtom);

  return order === 1 ? 'subCategoryId' : 'takenTalentIds';
};

export const makeAndRemoveAtomKey = ({ prev, newInput, input }: MakeAndRemoveAtomKeyProps) => {
  return newInput.contents.length === 0
    ? prev.filter((prevInput) => prevInput !== input.inputKey)
    : Array.from(new Set([...prev, input.inputKey]));
};

interface CookieOptions {
  path?: string;
  expires?: string;
  domain?: string;
  'max-age'?: number;
}

export const setCookie = (name: string, value: string, options: CookieOptions) => {
  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

  for (const optionKey in options) {
    updatedCookie += '; ' + optionKey;
  }

  return updatedCookie;
};

export const validateNickname = (value: string) => {
  const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z]+$/;
  return value.replace(regex, '$&');
};

export const validateLink = (value: string) => {
  // TODO: 링크 부분만 자르고, https:// 붙이기
  return value;
};
