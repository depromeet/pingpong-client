import { atom, atomFamily, selector } from 'recoil';

import type { Radio } from '@/hooks/useRadioGroup';
import type { HeaderProps, Option, PopupProps, UserInfo } from '@/typings/common';

import type { TabProps, TalentRegisterInputInfo } from './types';

const loginStateAtom = atom({
  key: 'loginState',
  default: false,
});

const mainCategoryAtom = atom({
  key: 'mainCategory',
  default: [{ id: 1, name: '' }],
});

// TODO: tabAtom의 경우 key를 찾기 쉽지 않아 key 관리를 위한 좋은 방법이 필요합니다.
const tabAtomFamily = atomFamily<TabProps[], string>({
  key: 'tab',
  default: (inputKey) => {
    switch (inputKey) {
      case 'midCategory':
        return [{ id: 0, name: '전체' }];
      default:
        return [];
    }
  },
});

const midCategoryIdSelector = selector<number>({
  key: 'activeMidCategoryId',
  get: ({ get }) => {
    const midCategoryList = get(tabAtomFamily('midCategory'));

    return midCategoryList[0]?.id || 0;
  },
});

// TODO: 수동으로 받고 있는 tabKeyAtom을 동적으로 변경하는 코드가 필요합니다.
const tabKeyAtom = atom<string[]>({
  key: 'tabKey',
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

const bottomSheetOptionsAtom = atom<Option[]>({
  key: 'bottomSheetOptions',
  default: [],
});

const bottomSheetActiveOptionAtom = atom<Option>({
  key: 'bottomSheetActiveOption',
  default: { id: 0, label: '' },
});

const popupAtom = atom<PopupProps | null>({
  key: 'popup',
  default: null,
});

const headerAtom = atom<HeaderProps | null>({
  key: 'header',
  default: null,
});

const spinnerAtom = atom<boolean>({
  key: 'spinner',
  default: false,
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

const talentRegisterEnvironmnetAtomFamily = atomFamily<Radio, string>({
  key: 'talentRegisterEnvironmentAtom',
  default: (inputKey) => {
    switch (inputKey) {
      case 'exchangeType':
        return { key: 'ONLINE', label: '온라인' };
      case 'exchangePeriod':
        return { key: 'A_WEEK', label: '1주 미만' };
      case 'exchangeTime':
        return { key: 'NOON', label: '오전' };
      default:
        return { key: '', label: '' };
    }
  },
});

const myInfoAtom = atom<UserInfo | null>({
  key: 'myInfoAtom',
  default: null,
});

export {
  bottomSheetActiveOptionAtom,
  bottomSheetAtom,
  bottomSheetOptionsAtom,
  headerAtom,
  loginStateAtom,
  mainCategoryAtom,
  midCategoryIdSelector,
  myInfoAtom,
  popupAtom,
  spinnerAtom,
  tabAtomFamily,
  tabKeyAtom,
  talentRegisterAtom,
  talentRegisterEnvironmnetAtomFamily,
  talentRegisterInputAtomFamily,
  talentRegisterInputKeyAtom,
  talentRegisterInputLinkKeyAtom,
  talentRegisterMethodAtom,
  talentRegisterOrderAtom,
  toastAtom,
};
