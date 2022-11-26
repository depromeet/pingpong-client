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
  key: 'toast',
  default: null,
});

const bottomSheetAtom = atom({
  key: 'bottomSheet',
  default: false,
});

const popupAtom = atom<PopupProps | null>({
  key: 'popup',
  default: null,
});

export { bottomSheetAtom, popupAtom, tabAtom, toastAtom };
