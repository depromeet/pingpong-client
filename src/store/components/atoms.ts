import { atom } from 'recoil';

import type { TabProps } from './types';

const tabAtom = atom<TabProps>({
  key: 'tab',
  default: {
    id: '',
    content: '',
  },
});

const toastAtom = atom<string | null>({
  key: 'toastAtom',
  default: null,
});

const bottomSheetAtom = atom({
  key: 'bottomSheet',
  default: false,
});

export { bottomSheetAtom, tabAtom, toastAtom };
