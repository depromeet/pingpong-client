import { atom } from 'recoil';

import type { TabProps } from './types';

const tabAtom = atom<TabProps>({
  key: 'tabAtom',
  default: {
    id: '',
    content: '',
  },
});

export { tabAtom };
