import { atom, atomFamily } from 'recoil';

import type { TalentRegisterInputInfo } from './types';

const tabAtom = atom({
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

const headerAtom = atom<Header | null>({
  key: 'header',
  default: null,
});

const talentRegisterAtom = atom({
  key: 'talentRegister',
  default: {
    title: '',
    content: '',
    isShare: false,
    subCategoryId: 0,
    links: ['', '', ''],
    chatLink: '',
    takenTalentIds: [0, 0, 0],
    takenContent: '',
    exchangeType: '',
    exchangePeriod: '',
    exchangeTime: '',
  },
});

const talentRegisterOrderAtom = atom({
  key: 'talentRegisterOrder',
  default: 1,
});

// INFO:: 추후 key에 따른 Atom 관리를 위해 InputKeyAtom을 추가하였습니다.
const talentRegisterInputKeyAtom = atom<string[]>({
  key: 'talentRegisterInputKey',
  default: [],
});

/* INFO::
 * atomFamily를 통해 input atom을 동적으로 생성하고 관리할 수 있습니다.
 * atom은 고유한 inputKey를 통해 구분되어집니다.
 */
const talentRegisterInputAtomFamily = atomFamily<TalentRegisterInputInfo, string>({
  key: 'talentRegisterInput',
  default: (inputKey) => ({ inputKey, contents: '' }),
});

export {
  bottomSheetAtom,
  headerAtom,
  popupAtom,
  tabAtom,
  talentRegisterAtom,
  talentRegisterInputAtomFamily,
  talentRegisterInputKeyAtom,
  talentRegisterOrderAtom,
  toastAtom,
};
