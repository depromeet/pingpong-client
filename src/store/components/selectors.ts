import { selector, selectorFamily } from 'recoil';

import { talentRegisterInputAtomFamily, talentRegisterInputKeyAtom } from './atoms';
import type { TalentRegisterInputInfo } from './types';

// INFO:: selectorFamily를 통해 Key 관리 작업을 recoil 내에서 처리할 수 있습니다.
// TODO:: input 데이터가 ''일시 keyAtom에서 제거하는 작업이 필요합니다.
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

      set(talentRegisterInputKeyAtom, (prev) => Array.from(new Set([...prev, input.inputKey])));
      set(talentRegisterInputAtomFamily(inputKey), newInput);
    },
});

const talentRegisterLinksSelector = selector({
  key: 'talentRegisterLinksSelector',
  get: ({ get }) => {
    const keyList = get(talentRegisterInputKeyAtom);

    const linkKeyList = keyList.filter((key) => {
      return key.includes('link');
    });
    const linkList = linkKeyList.map((key) => {
      const link = get(talentRegisterInputAtomFamily(key));
      return link.contents;
    });

    return linkList;
  },
});

export { talentRegisterInputSelectorFamily, talentRegisterLinksSelector };
