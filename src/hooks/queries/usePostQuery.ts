import axios from 'axios';

const usePostQuery = async () => {
  const baseUrl = 'https://www.pingpongg.shop:8080';
  const getTest = await axios.get(`${baseUrl}/api/v1/posts/custom?subCategoryId=3&page=0&size=10`);
  console.log('getTest--', getTest);

  const instance = axios.create({
    baseURL: 'https://www.pingpongg.shop:8080',
    timeout: 1000,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN07JqpIO2GoO2BsCIsIm1lbWJlcklkIjoxLCJleHAiOjYwOTgyNDU3MDA2MX0.gzAYnYOpnp93B-akfG4-bC09UH6ZAuJU62eYt8gFIIXtCSCMK_j_sPHElldlwVUlZu8b9ZtB4B4Lu6OyIeSe8w',
    },
  });

  const getTestWithCreate = await instance.get('/api/v1/posts/custom?subCategoryId=3&page=0&size=10');
  console.log('getTestWithCreate--', getTestWithCreate);
};

export default usePostQuery;
