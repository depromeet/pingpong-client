import { atom, atomFamily } from 'recoil';

import type { TabProps, TalentRegisterInputInfo } from './types';

// TODO: tabAtom의 경우 key를 찾기 쉽지 않아 key 관리를 위한 좋은 방법이 필요합니다.
const tabAtomFamily = atomFamily<TabProps[], string>({
  key: 'tab',
  default: (inputKey) => {
    switch (inputKey) {
      case 'mainCategory':
        return [{ id: 1, name: '' }];
      default:
        return [];
    }
  },
});

// TODO: 수동으로 받고 있는 tabKeyAtom을 동적으로 변경하는 코드가 필요합니다.
const tabKeyAtom = atom<string[]>({
  key: 'talentRegisterInputKey',
  default: ['subCategoryId', 'takenTalentIds'],
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
  default: {},
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

const talentRegisterInputLinkKeyAtom = atom<string[]>({
  key: 'talentRegisterInputListKey',
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

const talentRegisterMethodAtom = atom({
  key: 'talentRegisterMethod',
  default: false,
});

export {
  bottomSheetAtom,
  headerAtom,
  popupAtom,
  tabAtomFamily,
  tabKeyAtom,
  talentRegisterAtom,
  talentRegisterInputAtomFamily,
  talentRegisterInputKeyAtom,
  talentRegisterInputLinkKeyAtom,
  talentRegisterMethodAtom,
  talentRegisterOrderAtom,
  toastAtom,
};
