import { DefaultValue, selector, selectorFamily } from 'recoil';

import { makeAndRemoveAtomKey } from '@/lib/utils';

import {
  tabAtomFamily,
  talentRegisterEnvironmnetAtomFamily,
  talentRegisterInputAtomFamily,
  talentRegisterInputKeyAtom,
  talentRegisterInputLinkKeyAtom,
  talentRegisterMethodAtom,
  talentRegisterOrderAtom,
} from './atoms';
import type { TalentRegisterInfoProps, TalentRegisterInputInfo } from './types';

// INFO:: selectorFamily를 통해 Key 관리 작업을 recoil 내에서 처리할 수 있습니다.
const talentRegisterInputSelectorFamily = selectorFamily<TalentRegisterInputInfo, string>({
  key: 'talentRegisterInputSelector',
  get:
    (inputKey) =>
    ({ get }) =>
      get(talentRegisterInputAtomFamily(inputKey)),
  set:
    (inputKey) =>
    ({ get, set }, newInput) => {
      const input = get(talentRegisterInputAtomFamily(inputKey));

      if (!(newInput instanceof DefaultValue)) {
        if (input.inputKey.includes('link')) {
          set(talentRegisterInputLinkKeyAtom, (prev) => makeAndRemoveAtomKey({ prev, newInput, input }));
        } else {
          set(talentRegisterInputKeyAtom, (prev) => makeAndRemoveAtomKey({ prev, newInput, input }));
        }
      }
      set(talentRegisterInputAtomFamily(inputKey), newInput);
    },
});

const talentRegisterLinksSelector = selector({
  key: 'talentRegisterLinksSelector',
  get: ({ get }) => {
    const keyList = get(talentRegisterInputLinkKeyAtom);
    const linkList = keyList.map((key) => {
      const link = get(talentRegisterInputAtomFamily(key));
      return link.contents;
    });

    return linkList;
  },
});

const talentRegisterTakenCategoriesSelector = selector({
  key: 'talentRegisterTakenCategories',
  get: ({ get }) => {
    const takenTalentCategories = get(tabAtomFamily('takenTalentIds'));
    const takentTalentIds = takenTalentCategories.map((category) => category.id);

    return takentTalentIds;
  },
});

const talentRegisterSelector = selector({
  key: 'talentRegisterSelector',
  get: ({ get }) => {
    const talentRegisterInfo: TalentRegisterInfoProps = {};

    const isShare = get(talentRegisterMethodAtom);
    talentRegisterInfo['isShare'] = isShare;

    // TODO: 추후 동적 Key 관리가 필요합니다.
    const subCategory = get(tabAtomFamily('subCategoryId'));
    if (subCategory?.length > 0) talentRegisterInfo['subCategoryId'] = subCategory[0].id;

    const inputKeys = get(talentRegisterInputKeyAtom);
    inputKeys.forEach((inputKey) => {
      const input = get(talentRegisterInputAtomFamily(inputKey));
      talentRegisterInfo[input.inputKey] = input.contents;
    });

    const links = get(talentRegisterLinksSelector);
    if (links.length > 0) talentRegisterInfo['links'] = links;

    const takenTalentIds = get(talentRegisterTakenCategoriesSelector);
    if (takenTalentIds?.length > 0) talentRegisterInfo['takenTalentIds'] = takenTalentIds;

    return talentRegisterInfo;
  },
});

// 재능 등록 상태를 Reset하는 로직
// TODO: 더 좋은 방법으로 상태 초기화 필요
const talentRegisterResetSelector = selector({
  key: 'talentRegisterReset',
  get: () => true,
  set: ({ get, set }, newInput) => {
    if (!newInput) return;
    const inputKeys = get(talentRegisterInputKeyAtom);
    inputKeys.forEach((inputKey) => {
      set(talentRegisterInputAtomFamily(inputKey), (prev) => ({ ...prev, contents: '' }));
    });
    set(talentRegisterInputKeyAtom, []);

    const inputLinkKeys = get(talentRegisterInputLinkKeyAtom);
    inputLinkKeys.forEach((inputKey) => {
      set(talentRegisterInputAtomFamily(inputKey), (prev) => ({ ...prev, contents: '' }));
    });
    set(talentRegisterInputLinkKeyAtom, []);

    set(tabAtomFamily('subCategoryId'), []);
    set(tabAtomFamily('takenTalentIds'), []);

    set(talentRegisterEnvironmnetAtomFamily('exchangeType'), { key: 'ONLINE', label: '온라인' });
    set(talentRegisterEnvironmnetAtomFamily('exchangePeriod'), { key: 'A_WEEK', label: '1주 미만' });
    set(talentRegisterEnvironmnetAtomFamily('exchangeTime'), { key: 'NOON', label: '오전' });
  },
});

const talentRegisterCategoryResetSelector = selector({
  key: 'talentRegisterCategoryReset',
  get: () => true,
  set: ({ get, set }, newInput) => {
    if (!newInput) return;
    const order = get(talentRegisterOrderAtom);
    if (order === 1) {
      set(tabAtomFamily('subCategoryId'), []);
    } else {
      set(tabAtomFamily('takenTalentIds'), []);
    }
  },
});

const profileCategoryResetSelector = selector({
  key: 'profileCategoryResetSelector',
  get: () => true,
  set: ({ get, set }, newInput) => {
    if (!newInput) return;
    const order = get(talentRegisterOrderAtom);
    if (order === 1) {
      set(tabAtomFamily('givenTalents'), []);
    } else if (order === 2) {
      set(tabAtomFamily('takenTalents'), []);
    } else {
      set(tabAtomFamily('givenTalents'), []);
      set(tabAtomFamily('takenTalents'), []);
    }
  },
});

export {
  profileCategoryResetSelector,
  talentRegisterCategoryResetSelector,
  talentRegisterInputSelectorFamily,
  talentRegisterLinksSelector,
  talentRegisterResetSelector,
  talentRegisterSelector,
};
