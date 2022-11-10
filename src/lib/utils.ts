import type { QueryKey } from '@tanstack/react-query';

export const formatQueryString = (data: QueryKey): string => {
  const [url, queryObject] = [data[0], ...Object.assign(data.slice(1))];

  const queries = Object.keys(queryObject).reduce((prev: string, key: string) => {
    const queryKey = (queryObject as Record<string, unknown>)[key];
    if (prev === '') {
      return key + '=' + queryKey;
    }
    return (prev += '&' + key + '=' + queryKey);
  }, '');

  return `${url}?${queries}`;
};
