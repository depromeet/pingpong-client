import { atom } from 'recoil';

import type { TabProps } from './types';

const tabAtom = atom<TabProps>({
  key: 'tab',
  default: {
    id: '',
    content: '',
  },
});

const bottomSheetAtom = atom({
  key: 'bottomSheet',
  default: false,
});

export { bottomSheetAtom, tabAtom };
