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
