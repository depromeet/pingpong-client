/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-anonymous-default-export */
const path = require('path');

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, '../src'),
  };

  return config;
};
