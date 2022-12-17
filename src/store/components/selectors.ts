import { DefaultValue, selector, selectorFamily } from 'recoil';

import { makeAndRemoveAtomKey } from '@/lib/utils';

import {
  tabAtomFamily,
  talentRegisterInputAtomFamily,
  talentRegisterInputKeyAtom,
  talentRegisterInputLinkKeyAtom,
  talentRegisterMethodAtom,
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

export { talentRegisterInputSelectorFamily, talentRegisterLinksSelector, talentRegisterSelector };
