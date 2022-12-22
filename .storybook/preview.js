import '../src/styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

const queryClient = new QueryClient();

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  ),
];

// eslint-disable-next-line no-import-assign
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
